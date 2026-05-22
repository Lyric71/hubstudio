// @ts-check
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
      filter: (page) => !page.includes('/thank-you') && !page.includes('/api/'),
      changefreq: 'weekly',
      priority: 0.7,
      // Hreflang via native per-locale slugs. The built-in `i18n` option only
      // does prefix routing (it would point /fr/<english-slug> at pages that
      // do not exist) and emits no x-default, so we resolve alternates here
      // instead: map each URL back to its canonical English path, then emit
      // one <xhtml:link> per locale the page genuinely ships in (per
      // src/i18n/page-slugs.ts) plus x-default. English-only pages get no
      // alternates at all, rather than alternates that 404.
      serialize(item) {
        const enPath = toCanonical(toPath(item.url));
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
