/**
 * The translator's bench for the three-pass method (src/i18n/TRANSLATING.md).
 *
 *   npm run i18n:tx -- pending <fr|zh>
 *       every dictionary that still holds an empty entry, with the count
 *   npm run i18n:tx -- show <page-id> [fr|zh]
 *       the page's own units (shared ones left out), numbered in reading
 *       order with their tag; with a locale, only the units still empty in it
 *   npm run i18n:tx -- build <fr|zh> <page-id>
 *       merge the pass files into the dictionary, then check the whole file
 *       against the house rules (scripts/i18n-rules.mjs); exit 1 on a
 *       problem or an entry still empty
 *
 * page-id: the dictionary's name under src/i18n/dict/<locale>/pages/
 * (home, pricing, resources/insights/<slug>...), or `common` for the shared
 * dictionary (show and build then need the locale; its units are numbered in
 * the order of that locale's common.json).
 *
 * Reading order and tags come from the context files written by
 *   npm run i18n:local -- extract --context .i18n-work/ctx
 * Run that first, and again after any change to an English page.
 *
 * Pass files, in .i18n-work/passes/<locale>/<page-id>/ :
 *   pass1*.json  {"<index>": "<translation>"}  Step 1, every index to translate
 *                (a long page may be split: pass1-a.json, pass1-b.json...)
 *   pass2.json   only the indexes Step 2 changed
 *   pass3.json   only the indexes Step 3 changed
 *   changes.md   10 to 40 lines: the main before/after across the passes
 * Later passes win (pass1 < pass2 < pass3). build writes only the indexes
 * found in the pass files: every other translation in the dictionary stays
 * as it is, so a changed page never loses its edited sentences.
 *
 * .i18n-work/ is ignored by git. Same file in the other site's repository
 * (hubstudio / BearingBridgeCOM): keep the two in step.
 */
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { problems } from './i18n-rules.mjs';

const root = resolve(import.meta.dirname, '..');
const DICT = join(root, 'src', 'i18n', 'dict');
const WORK = join(root, '.i18n-work');
const CTX = join(WORK, 'ctx');
const LOCALES = ['fr', 'zh'];

const readJson = (f) => (existsSync(f) ? JSON.parse(readFileSync(f, 'utf8')) : {});
const writeJson = (f, data) => {
  mkdirSync(dirname(f), { recursive: true });
  writeFileSync(f, JSON.stringify(data, null, 2) + '\n');
};
const walk = (d) =>
  existsSync(d)
    ? readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(join(d, e.name)) : [join(d, e.name)]))
    : [];
const rel = (f) => relative(root, f).replace(/\\/g, '/');
const idOf = (base, file) => relative(base, file).replace(/\\/g, '/').replace(/\.json$/, '');
const dictFile = (locale, id) => (id === 'common' ? join(DICT, locale, 'common.json') : join(DICT, locale, 'pages', `${id}.json`));
const fail = (msg) => {
  console.error(`✗ ${msg}`);
  process.exit(2);
};
const needLocale = (l) => {
  if (!LOCALES.includes(l)) fail(`locale must be ${LOCALES.join(' or ')}`);
};

/** Tag and page of every key, from the context files. */
function keyInfo() {
  const info = new Map();
  for (const f of walk(CTX)) {
    const ctx = readJson(f);
    for (const u of ctx.units ?? []) if (!info.has(u.key)) info.set(u.key, { tag: u.tag, attr: u.attr, path: ctx.path });
  }
  return info;
}

/** The units a dictionary is built from, in order: [{key, tag, attr}]. */
function unitsOf(locale, id) {
  if (id === 'common') {
    const info = keyInfo();
    return Object.keys(readJson(dictFile(locale, 'common'))).map((key) => ({ key, ...(info.get(key) ?? { tag: '?' }) }));
  }
  const file = join(CTX, `${id}.json`);
  if (!existsSync(file)) fail(`no context for ${id}: run  npm run i18n:local -- extract --context .i18n-work/ctx`);
  return readJson(file).units.filter((u) => !u.common);
}

const [cmd, a, b] = process.argv.slice(2);

if (cmd === 'pending') {
  needLocale(a);
  let total = 0;
  const rows = [];
  for (const f of walk(join(DICT, a))) {
    const empty = Object.values(readJson(f)).filter((v) => !v).length;
    if (!empty) continue;
    const name = idOf(join(DICT, a), f);
    const id = name.startsWith('pages/') ? name.slice(6) : name;
    const handBuilt = id === 'js' || id === 'server';
    rows.push(`${id}: ${empty} empty${handBuilt ? ' (hand-written dictionary: fill it in the JSON file itself)' : ''}`);
    total += empty;
  }
  console.log(rows.length ? rows.join('\n') : `nothing pending in ${a}`);
  if (total) console.log(`\n${total} entr${total === 1 ? 'y' : 'ies'} to translate in ${a}`);
  process.exit(0);
}

if (cmd === 'show') {
  const id = a;
  const locale = b;
  if (!id) fail('usage: npm run i18n:tx -- show <page-id> [fr|zh]');
  if (locale) needLocale(locale);
  if (id === 'common' && !locale) fail('show common needs the locale: npm run i18n:tx -- show common fr');
  const units = unitsOf(locale ?? 'fr', id);
  const dict = locale ? readJson(dictFile(locale, id)) : {};
  const ctx = id === 'common' ? null : readJson(join(CTX, `${id}.json`));
  const listed = units.map((u, i) => ({ u, i })).filter(({ u }) => !locale || !dict[u.key]);
  const words = listed.reduce((n, { u }) => n + u.key.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length, 0);
  if (ctx) console.log(`page ${ctx.path}  (French address ${ctx.fr})`);
  console.log(`${units.length} units${locale ? `, ${listed.length} still empty in ${locale}` : ''}, ${words} words listed`);
  if (id !== 'common') console.log('Shared header, footer and menu strings are not listed: they live in common.json.');
  console.log('');
  for (const { u, i } of listed) console.log(`[${i}] <${u.tag}${u.attr ? ' ' + u.attr : ''}> ${u.key}`);
  process.exit(0);
}

if (cmd === 'build') {
  const locale = a;
  const id = b;
  needLocale(locale);
  if (!id) fail('usage: npm run i18n:tx -- build <fr|zh> <page-id>');
  const units = unitsOf(locale, id);
  const passDir = join(WORK, 'passes', locale, id);
  const files = existsSync(passDir) ? readdirSync(passDir) : [];
  const pass1 = files.filter((f) => /^pass1.*\.json$/.test(f)).sort();
  if (!pass1.length) fail(`no pass1*.json in ${rel(passDir)}`);
  const values = {};
  for (const f of [...pass1, 'pass2.json', 'pass3.json']) if (files.includes(f)) Object.assign(values, readJson(join(passDir, f)));
  if (!files.includes('changes.md')) console.log(`note: ${rel(passDir)}/changes.md is missing (the visible log of the passes)`);

  const file = dictFile(locale, id);
  const dict = readJson(file);
  const issues = [];
  for (const [k, v] of Object.entries(values)) {
    const unit = units[Number(k)];
    if (!/^\d+$/.test(k) || !unit) {
      issues.push(`[${k}] is not an index of this page (0 to ${units.length - 1})`);
      continue;
    }
    if (typeof v !== 'string' || !v.trim()) {
      issues.push(`[${k}] empty translation in the pass files`);
      continue;
    }
    dict[unit.key] = v;
  }
  // Keep the extract's order; a key the extract has not written yet goes last.
  writeJson(file, dict);

  const index = new Map(units.map((u, i) => [u.key, i]));
  for (const [k, v] of Object.entries(dict)) {
    const at = index.has(k) ? `[${index.get(k)}]` : '[override]';
    if (!v) issues.push(`${at} still empty\n     EN: ${k.slice(0, 160)}`);
    else for (const p of problems(k, v, locale)) issues.push(`${at} ${p}\n     EN: ${k.slice(0, 160)}\n     ${locale.toUpperCase()}: ${v.slice(0, 160)}`);
  }
  if (id !== 'common') for (const u of units) if (!(u.key in dict)) issues.push(`[${index.get(u.key)}] not in the dictionary yet: run the extract again`);

  if (issues.length) {
    console.log(issues.join('\n'));
    console.log(`\n✗ ${issues.length} problem(s) in ${rel(file)}; fix them in pass3.json (same index) and build again`);
    process.exit(1);
  }
  console.log(`✓ ${Object.keys(dict).length} entries clean in ${rel(file)}`);
  process.exit(0);
}

console.error('Usage: npm run i18n:tx -- pending <fr|zh> | show <page-id> [fr|zh] | build <fr|zh> <page-id>');
process.exit(2);
