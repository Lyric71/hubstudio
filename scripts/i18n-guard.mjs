/**
 * The offline half of the translation check, run before every build
 * (package.json): it needs no dev server, so it also runs on Vercel.
 *
 *   npm run i18n:guard
 *
 * Fails when:
 * - an English page has no French address in src/i18n/routes.ts: every
 *   static page under src/pages (the /fr, /zh, [locale] and /api trees, the
 *   error pages and redirect-only files aside) and every entry of the
 *   collections listed in COLLECTIONS below. A page missing there would ship
 *   in English only, with no French or Chinese version at all;
 * - a French address is not a native slug (lowercase ASCII words joined by
 *   hyphens under /fr) or is used twice;
 * - a dictionary under src/i18n/dict holds an empty translation (an extract
 *   was run and the translation was not finished);
 * - a localized capture listed in src/i18n/localized-images.json is missing
 *   on disk, or has no English original beside it.
 *
 * What it cannot see: a sentence added to an English page since the last
 * extract. That is `npm run i18n:local -- check`, which reads the pages from
 * a dev server and is the gate of every publishing run.
 *
 * Same file in the other site's repository (hubstudio / BearingBridgeCOM),
 * COLLECTIONS aside: keep the two in step.
 */
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const root = resolve(import.meta.dirname, '..');

/** Content collections that become pages: folder -> English route prefix. */
const COLLECTIONS = [{ dir: 'src/content/help', route: '/help/', skip: ['index'] }];
/** English pages with no translation by design. */
const UNTRANSLATED = new Set(['/404', '/500']);

const { FR_PATHS } = await import(pathToFileURL(join(root, 'src', 'i18n', 'routes.ts')).href);
const walk = (d) =>
  existsSync(d)
    ? readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(join(d, e.name)) : [join(d, e.name)]))
    : [];
const errors = [];

/* English pages without a French address */
const pagesDir = join(root, 'src', 'pages');
for (const f of walk(pagesDir).filter((f) => /\.(astro|md|mdx)$/.test(f))) {
  const rel = relative(pagesDir, f).replace(/\\/g, '/');
  if (rel.includes('[') || /^(fr|zh|api)\//.test(rel)) continue;
  const route = ('/' + rel.replace(/\.(astro|mdx?)$/, '').replace(/(^|\/)index$/, '')).replace(/(.)\/$/, '$1');
  if (UNTRANSLATED.has(route)) continue;
  // A file that only redirects (frontmatter, no template) is not a page.
  const src = readFileSync(f, 'utf8');
  const fm = /^---\r?\n[\s\S]*?\r?\n---\r?\n?([\s\S]*)$/.exec(src);
  if (fm && /Astro\.redirect\(/.test(src) && !fm[1].trim()) continue;
  if (!(route in FR_PATHS)) errors.push(`${route} (src/pages/${rel}) has no French address in src/i18n/routes.ts`);
}
for (const { dir, route, skip = [] } of COLLECTIONS) {
  for (const f of walk(join(root, dir)).filter((f) => /\.mdx?$/.test(f))) {
    const id = relative(join(root, dir), f).replace(/\\/g, '/').replace(/\.mdx?$/, '');
    if (skip.includes(id) || /\.(fr|zh)$/.test(id)) continue;
    if (!(`${route}${id}` in FR_PATHS)) errors.push(`${route}${id} (${dir}/${id}) has no French address in src/i18n/routes.ts`);
  }
}

/* French addresses */
const seen = new Map();
for (const [en, fr] of Object.entries(FR_PATHS)) {
  if (!/^\/fr(\/[a-z0-9]+(-[a-z0-9]+)*)*$/.test(fr)) errors.push(`${en}: French address ${fr} is not a native slug (lowercase ASCII words and hyphens, accents stripped)`);
  if (seen.has(fr)) errors.push(`${en}: French address ${fr} is already used by ${seen.get(fr)}`);
  seen.set(fr, en);
}

/* Empty translations */
for (const f of walk(join(root, 'src', 'i18n', 'dict')).filter((f) => f.endsWith('.json'))) {
  const empty = Object.entries(JSON.parse(readFileSync(f, 'utf8'))).filter(([, v]) => !v);
  if (empty.length) errors.push(`${relative(root, f).replace(/\\/g, '/')}: ${empty.length} empty translation(s), e.g. "${empty[0][0].slice(0, 80)}"`);
}

/* Localized captures */
const listFile = join(root, 'src', 'i18n', 'localized-images.json');
if (existsSync(listFile)) {
  for (const url of JSON.parse(readFileSync(listFile, 'utf8'))) {
    const file = join(root, 'public', url);
    if (!existsSync(file)) errors.push(`${url} is listed in src/i18n/localized-images.json but missing on disk`);
    if (!existsSync(file.replace(/\.(fr|zh)\.(\w+)$/, '.$2'))) errors.push(`${url} has no English original beside it`);
  }
}

if (errors.length) {
  console.error(errors.join('\n'));
  console.error(`\n✗ i18n guard: ${errors.length} problem(s). See src/i18n/TRANSLATING.md.`);
  process.exit(1);
}
console.log(`✓ i18n guard: ${Object.keys(FR_PATHS).length} English pages with a French address, dictionaries complete`);
