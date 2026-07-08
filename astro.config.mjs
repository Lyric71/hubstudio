// @ts-check
import { execSync } from 'node:child_process';
import { existsSync, readdirSync } from 'node:fs';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

import { getTranslatedLocales, localizePath, toCanonical } from './src/i18n/utils';

const SITE = 'https://www.hubstudio.ai';

/**
 * Site-relative path of a sitemap URL, trailing slash dropped (root stays '/').
 * @param {string} url
 * @returns {string}
 */
function toPath(url) {
  const p = new URL(url).pathname;
  return p.length > 1 && p.endsWith('/') ? p.slice(0, -1) : p;
}

/**
 * Absolute URL for a site-relative path, in the trailing-slash-free form
 * @astrojs/sitemap emits for <loc> (the home page is the bare domain).
 * @param {string} path
 * @returns {string}
 */
function absolute(path) {
  return path === '/' ? SITE : SITE + path;
}

/** @type {Map<string, string>} Last commit ISO date per file tracked under src/. */
const gitDateCache = new Map();
let gitDatesLoaded = false;

/**
 * Last commit date (ISO 8601) per file under src/, newest commit wins. One
 * `git log` call, memoized for the build. Stays empty when git history is not
 * reachable (shallow clone, zip download): affected pages then ship no
 * <lastmod>, which is correct, an absent date beats an invented one.
 * @returns {Map<string, string>}
 */
function gitDates() {
  if (gitDatesLoaded) return gitDateCache;
  gitDatesLoaded = true;
  try {
    const log = execSync('git log --name-only --format=%x00%cI -- src', {
      encoding: 'utf8',
      maxBuffer: 64 * 1024 * 1024,
    });
    let date = '';
    for (const line of log.split('\n')) {
      if (line.startsWith('\0')) {
        date = line.slice(1).trim();
      } else if (line && date && !gitDateCache.has(line)) {
        gitDateCache.set(line, date);
      }
    }
  } catch {
    // No git history reachable; every page simply omits <lastmod>.
  }
  return gitDateCache;
}

/**
 * Source files whose change history defines a page's <lastmod>: the page file
 * itself, plus the data file for data-driven routes. Shared layouts and CSS
 * are deliberately excluded, a layout tweak is not a content change and must
 * not bump every URL's date at once.
 * @param {string} path  Site-relative path, e.g. '/', '/contact', '/work/x'.
 * @returns {string[]}
 */
function sourceFiles(path) {
  const rel = path === '/' ? 'index' : path.replace(/^\//, '');

  const direct = `src/pages/${rel}.astro`;
  if (existsSync(direct)) return [direct];

  const index = `src/pages/${rel}/index.astro`;
  if (existsSync(index)) return [index];

  // Dynamic route: pair the [param].astro template with its data source.
  const parent = `src/pages/${rel.split('/').slice(0, -1).join('/')}`;
  if (existsSync(parent)) {
    const template = readdirSync(parent).find((f) => /^\[.+\]\.astro$/.test(f));
    if (template) {
      const files = [`${parent}/${template}`];
      if (rel.startsWith('work/') && existsSync('src/data/case-studies.ts')) {
        files.push('src/data/case-studies.ts');
      }
      return files;
    }
  }
  return [];
}

/**
 * Newest commit date among `files`, or '' when none has a known date.
 * @param {string[]} files
 * @returns {string}
 */
function newestCommit(files) {
  const dates = gitDates();
  let newest = '';
  for (const file of files) {
    const date = dates.get(file);
    if (date && (!newest || Date.parse(date) > Date.parse(newest))) newest = date;
  }
  return newest;
}

/**
 * @astrojs/sitemap writes the home <loc> as the bare domain (per
 * trailingSlash: 'never'), but routes every hreflang href through new URL(),
 * which appends the slash a bare domain lacks. That leaves the root alternate
 * (`https://www.hubstudio.ai/`) out of sync with its own <loc>
 * (`https://www.hubstudio.ai`). This integration runs after the sitemap is
 * written and rewrites that one alternate so href and <loc> match.
 */
function normalizeRootAlternate() {
  return {
    name: 'sitemap-root-alternate-fix',
    hooks: {
      'astro:build:done': async () => {
        // dist/client is patched before the adapter copies it out; the
        // .vercel path is a safety net in case copy order ever changes.
        for (const dir of ['dist/client', '.vercel/output/static']) {
          let entries;
          try {
            entries = await readdir(dir);
          } catch {
            continue;
          }
          for (const file of entries) {
            if (!/^sitemap-\d+\.xml$/.test(file)) continue;
            const path = join(dir, file);
            const xml = await readFile(path, 'utf8');
            const fixed = xml.replaceAll(`href="${SITE}/"`, `href="${SITE}"`);
            if (fixed !== xml) await writeFile(path, fixed);
          }
        }
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: SITE,

  // Vercel strips trailing slashes before applying redirect rules.
  trailingSlash: 'never',

  // English at the root, every other locale under a prefix with native slugs.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    routing: { prefixDefaultLocale: false },
  },

  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/thank-you') &&
        !page.includes('/api/') &&
        !page.includes('/debeers') &&
        !page.includes('/sonepar'),
      changefreq: 'weekly',
      priority: 0.7,
      // Per URL the integration emits, this hook adds two things the defaults
      // miss: an accurate <lastmod>, and hreflang alternates that follow
      // native per-locale slugs.
      serialize(item) {
        const ownPath = toPath(item.url);

        // <lastmod>: newest git commit touching the page's own source (and,
        // for case studies, the data file they render from). Stable across
        // rebuilds, so it moves only when the page actually changes, which is
        // what makes the date trustworthy to Google.
        const stamp = newestCommit(sourceFiles(ownPath));
        if (stamp) item.lastmod = stamp;

        // Hreflang via native per-locale slugs. The built-in `i18n` option
        // only does prefix routing (it would point /fr/<english-slug> at
        // pages that do not exist) and emits no x-default, so we resolve
        // alternates here: map each URL back to its canonical English path,
        // then emit one <xhtml:link> per locale the page genuinely ships in
        // (per src/i18n/page-slugs.ts) plus x-default. English-only pages get
        // no alternates at all, rather than alternates that 404.
        const enPath = toCanonical(ownPath);
        const locales = getTranslatedLocales(enPath);
        if (locales.length < 2) return item;

        item.links = locales.map((locale) => ({
          lang: locale,
          url: absolute(localizePath(enPath, locale)),
        }));
        item.links.push({ lang: 'x-default', url: absolute(enPath) });
        return item;
      },
    }),
    normalizeRootAlternate(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercel(),
});
