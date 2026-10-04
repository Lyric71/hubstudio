/**
 * Dictionaries of the French and Chinese pages (see src/i18n/index.ts).
 *
 *   npm run i18n -- extract   read every English page from the running dev
 *                             server and bring the dictionaries in step: new
 *                             sentences are added empty, sentences gone from
 *                             the page are dropped, translations are kept
 *                             (and reused when the same sentence exists
 *                             elsewhere). A sentence on COMMON_MIN_PAGES pages
 *                             or more goes to common.json.
 *   npm run i18n -- check     same reading, writes nothing; fails on an empty
 *                             or missing translation and on a translation that
 *                             breaks the house rules (placeholders, dashes,
 *                             French spacing, Chinese punctuation).
 *   --context <dir>           extract also writes, per page, the English units
 *                             in reading order with their tag (for translators).
 *   --only <path,...>         limit to some English pages.
 *
 * Password-gated pages: set I18N_COOKIE to their gate cookies, or only
 * their sign-in screen is read. With it, each page is read signed out and
 * signed in, and the dictionary keeps the sentences of both views: always
 * extract with I18N_COOKIE set, or the signed-in sentences are dropped.
 *
 * Dev server: I18N_URL (default http://127.0.0.1:4341; bearingbridge.com uses
 * 4340). npm run i18n:local starts one when none answers. Same file in the
 * other site's repository (hubstudio / BearingBridgeCOM), the default port
 * aside: keep the two in step.
 */
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { extractKeys, slotSignature } from '../src/i18n/core.ts';
import { FR_PATHS } from '../src/i18n/routes.ts';
import { DATA_ATTRS, COMMON_MIN_PAGES } from '../src/i18n/site.ts';
import { problems } from './i18n-rules.mjs';

const root = resolve(import.meta.dirname, '..');
const DICT = join(root, 'src', 'i18n', 'dict');
const BASE = process.env.I18N_URL ?? 'http://127.0.0.1:4341';
const LOCALES = ['fr', 'zh'];

const args = process.argv.slice(2);
const cmd = args[0];
const opt = (name) => {
  const i = args.indexOf(name);
  return i > -1 ? args[i + 1] : undefined;
};
if (!['extract', 'check'].includes(cmd)) {
  console.error('Usage: npm run i18n -- extract|check [--context <dir>] [--only /a,/b]');
  process.exit(2);
}

const pageId = (en) => (en === '/' ? 'home' : en.slice(1));
const readJson = (f) => (existsSync(f) ? JSON.parse(readFileSync(f, 'utf8')) : {});
const writeJson = (f, data) => {
  mkdirSync(dirname(f), { recursive: true });
  writeFileSync(f, JSON.stringify(data, null, 2) + '\n');
};

/* ---------------- read the English pages ---------------- */

const only = opt('--only')?.split(',');
const paths = Object.keys(FR_PATHS).filter((p) => !only || only.includes(p));

async function fetchPage(path, gated = false) {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      // I18N_COOKIE opens the password-gated pages (their gate cookies).
      const headers = { 'accept-language': 'en', ...(gated ? { cookie: process.env.I18N_COOKIE } : {}) };
      const res = await fetch(BASE + path, { headers });
      if (res.ok) return await res.text();
      throw new Error(`HTTP ${res.status}`);
    } catch (err) {
      if (attempt === 3) throw new Error(`${path}: ${err.message} (is the dev server up at ${BASE}?)`);
    }
  }
}

const pages = new Map(); // en path -> [{key, tag, attr}]
const queue = [...paths];
await Promise.all(
  Array.from({ length: 4 }, async () => {
    while (queue.length) {
      const path = queue.shift();
      // A gated page is read signed out (its sign-in screen) and, with
      // I18N_COOKIE, signed in; its dictionary keeps both views.
      const views = [await fetchPage(path)];
      if (process.env.I18N_COOKIE) {
        const inside = await fetchPage(path, true);
        if (inside !== views[0]) views.push(inside);
      }
      const seen = new Set();
      const units = views
        .flatMap((html) => extractKeys(html, { dataAttrs: DATA_ATTRS }))
        .filter((u) => !seen.has(u.key) && seen.add(u.key));
      pages.set(path, units);
    }
  }),
);

// Shared keys: counted over every page, even with --only, so a partial run
// never moves a sentence out of common.json.
let freq = new Map();
if (!only) {
  for (const units of pages.values()) for (const u of units) freq.set(u.key, (freq.get(u.key) ?? 0) + 1);
} else {
  for (const l of LOCALES) for (const k of Object.keys(readJson(join(DICT, l, 'common.json')))) freq.set(k, COMMON_MIN_PAGES);
}
const isCommon = (k) => (freq.get(k) ?? 0) >= COMMON_MIN_PAGES;

/* ---------------- dictionaries ---------------- */

let failures = 0;
const report = [];
const contextDir = opt('--context');

for (const locale of LOCALES) {
  const commonFile = join(DICT, locale, 'common.json');
  const oldCommon = readJson(commonFile);
  // Every translation known anywhere, to reuse a sentence across pages.
  const known = new Map(Object.entries(oldCommon));
  const pagesDir = join(DICT, locale, 'pages');
  const walk = (d) =>
    existsSync(d)
      ? readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(join(d, e.name)) : [join(d, e.name)]))
      : [];
  for (const f of walk(pagesDir)) for (const [k, v] of Object.entries(readJson(f))) if (v && !known.has(k)) known.set(k, v);

  const common = {};
  for (const [path, units] of pages) {
    const file = join(pagesDir, `${pageId(path)}.json`);
    const old = readJson(file);
    const next = {};
    for (const { key } of units) {
      if (isCommon(key)) {
        const shared = oldCommon[key] || common[key] || known.get(key) || '';
        common[key] = shared;
        // A page may keep its own reading of a shared sentence (a short
        // label that means something else there): it overrides common.json.
        if (old[key] && old[key] !== shared) next[key] = old[key];
      } else next[key] = old[key] || known.get(key) || '';
    }
    const missing = Object.entries(next).filter(([, v]) => !v).length;
    const dropped = Object.keys(old).filter((k) => !(k in next)).length;
    for (const [k, v] of Object.entries(next)) {
      if (!v) continue;
      for (const p of problems(k, v, locale)) report.push(`${locale} ${path}: ${p}\n    ${k.slice(0, 120)}\n    ${v.slice(0, 120)}`);
    }
    if (missing) report.push(`${locale} ${path}: ${missing} sentence(s) not translated`);
    failures += missing;
    if (cmd === 'extract') {
      writeJson(file, next);
      if (dropped) console.log(`${locale} ${path}: ${dropped} sentence(s) no longer on the page, removed`);
    }
  }
  // With --only, keep the shared sentences of the pages not read this time.
  const mergedCommon = only ? { ...oldCommon, ...common } : common;
  const commonMissing = Object.entries(mergedCommon).filter(([, v]) => !v).length;
  for (const [k, v] of Object.entries(mergedCommon)) {
    if (v) for (const p of problems(k, v, locale)) report.push(`${locale} common: ${p}\n    ${k.slice(0, 120)}\n    ${v.slice(0, 120)}`);
  }
  if (commonMissing) report.push(`${locale} common: ${commonMissing} sentence(s) not translated`);
  failures += commonMissing;
  if (cmd === 'extract') writeJson(commonFile, mergedCommon);

  // Script strings and server strings are written by hand; check them too.
  for (const name of ['js', 'server']) {
    for (const [k, v] of Object.entries(readJson(join(DICT, locale, `${name}.json`)))) {
      if (!v) {
        report.push(`${locale} ${name}: not translated: ${k.slice(0, 80)}`);
        failures++;
      } else for (const p of problems(k, v, locale)) report.push(`${locale} ${name}: ${p}\n    ${k.slice(0, 120)}\n    ${v.slice(0, 120)}`);
    }
  }
}

const ruleBreaks = report.filter((r) => !/not translated/.test(r)).length;

if (contextDir && cmd === 'extract') {
  for (const [path, units] of pages) {
    writeJson(join(resolve(contextDir), `${pageId(path)}.json`), {
      path,
      fr: FR_PATHS[path],
      units: units.map((u) => ({ key: u.key, tag: u.tag, ...(u.attr ? { attr: u.attr } : {}), common: isCommon(u.key) || undefined })),
    });
  }
  console.log(`context written to ${contextDir}`);
}

const total = [...pages.values()].reduce((n, u) => n + u.length, 0);
console.log(`${pages.size} pages, ${total} units, ${[...freq.keys()].filter(isCommon).length} shared`);
if (report.length) console.log(report.slice(0, 400).join('\n') + (report.length > 400 ? `\n... ${report.length - 400} more` : ''));
if (cmd === 'check' && (failures || ruleBreaks)) {
  console.error(`\n✗ ${failures} missing translation(s), ${ruleBreaks} rule break(s)`);
  process.exit(1);
}
if (cmd === 'check') console.log('✓ every page is translated in French and Chinese');
