// Copy the hubStudio changelog into this site.
//
// The changelog is written next to the app's code, in the BearingBridge
// repository: reporting-site/scripts/changelog-generate.mjs turns the
// commits into plain-language entries and prepends them to
// hubstudio-site/changelog.md, "the copy its website publishes". This script
// brings that file here as src/data/changelog.json, which /app/whats-new and the
// "What's new" band of the home page render.
//
// The public site has stricter rules than the app (hubstudio-positioning.md):
// no "credits", no amount, no claim the site does not make. An entry that
// breaks one of them gets a public edit in src/data/changelog-edits.json,
// keyed by the entry's id, with the hash of the source text it was written
// against. The sync then:
//   - applies every edit whose hash still matches its source entry;
//   - stops (exit 1) when an edit's source changed upstream, or when an entry
//     without an edit still breaks a rule, naming each entry. Write or update
//     the edit, then run the sync again. Nothing is published half-checked.
//
// After a sync, translate: npm run i18n:local -- extract, then the three
// passes for pages/app/whats-new (src/i18n/TRANSLATING.md). The home page repeats
// the newest entries: its empty entries take the same translations as
// whats-new (npm run changelog:sync -- --fill-home copies them).
//
// Run: npm run changelog:sync [-- <path to hubstudio-site/changelog.md>]
// Default source: ../BearingBridgeIntelligence/hubstudio-site/changelog.md
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const args = process.argv.slice(2);
const OUT = join(root, 'src', 'data', 'changelog.json');
const EDITS = join(root, 'src', 'data', 'changelog-edits.json');
const readJson = (f) => JSON.parse(readFileSync(f, 'utf8'));
const writeJson = (f, data) => writeFileSync(f, JSON.stringify(data, null, 2) + '\n');

/* ------------------------------------------------------------------ */
/* --fill-home: home.json takes the translations app/whats-new.json holds  */
/* ------------------------------------------------------------------ */

if (args.includes('--fill-home')) {
  let filled = 0;
  for (const locale of ['fr', 'zh']) {
    const dict = (id) => join(root, 'src', 'i18n', 'dict', locale, 'pages', `${id}.json`);
    const home = readJson(dict('home'));
    const wn = readJson(dict('app/whats-new'));
    for (const [key, value] of Object.entries(home)) {
      if (!value && wn[key]) {
        home[key] = wn[key];
        filled++;
      }
    }
    writeJson(dict('home'), home);
  }
  console.log(`✓ ${filled} home sentence(s) filled from the whats-new dictionaries`);
  process.exit(0);
}

/* ------------------------------------------------------------------ */
/* Parse                                                               */
/* ------------------------------------------------------------------ */

const srcArg = args.find((a) => !a.startsWith('--'));
const src = resolve(srcArg ?? join(root, '..', 'BearingBridgeIntelligence', 'hubstudio-site', 'changelog.md'));
if (!existsSync(src)) {
  console.error(`✗ No changelog at ${src}`);
  process.exit(1);
}

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const KINDS = { New: 'new', Improved: 'improved', Fixed: 'fixed' };

/** "8 October 2026" to "2026-10-08". */
function isoOf(text) {
  const m = /^(\d{1,2}) ([A-Z][a-z]+) (\d{4})$/.exec(text);
  const month = m ? MONTHS.indexOf(m[2]) + 1 : 0;
  if (!month) throw new Error(`unreadable date "${text}"`);
  return `${m[3]}-${String(month).padStart(2, '0')}-${m[1].padStart(2, '0')}`;
}

const slug = (s) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

/** Markdown body to blocks: paragraphs and bullet lists. */
function blocksOf(lines) {
  const blocks = [];
  for (const chunk of lines.join('\n').split(/\n\s*\n/)) {
    const rows = chunk.split('\n').map((l) => l.trim()).filter(Boolean);
    if (!rows.length) continue;
    if (rows.every((r) => r.startsWith('- '))) blocks.push({ list: rows.map((r) => r.slice(2).trim()) });
    else blocks.push({ text: rows.join(' ') });
  }
  return blocks;
}

const md = readFileSync(src, 'utf8').replace(/\r\n/g, '\n');
const body = md.replace(/^---\n[\s\S]*?\n---\n/, '');
const source = [];
for (const part of body.split(/^## /m).slice(1)) {
  const [titleLine, ...rest] = part.split('\n');
  const title = titleLine.trim();
  let dateISO = null;
  let kind = 'new';
  const dateAt = rest.findIndex((l) => l.trim());
  const dm = /^\*(.+?) · (New|Improved|Fixed)\*$/.exec(rest[dateAt]?.trim() ?? '');
  if (dm) {
    dateISO = isoOf(dm[1]);
    kind = KINDS[dm[2]];
    rest.splice(dateAt, 1);
  }
  const blocks = blocksOf(rest);
  const id = dateISO ? `${dateISO}-${slug(title)}` : slug(title);
  const hash = createHash('sha1').update(JSON.stringify({ title, dateISO, kind, blocks })).digest('hex').slice(0, 12);
  source.push({ id, title, dateISO, kind, blocks, hash });
}

/* ------------------------------------------------------------------ */
/* Public edits, then the rules                                        */
/* ------------------------------------------------------------------ */

const edits = existsSync(EDITS) ? readJson(EDITS) : {};
const problems = [];
const ids = new Set(source.map((e) => e.id));
for (const id of Object.keys(edits)) {
  if (id !== '$comment' && !ids.has(id)) problems.push(`${id}: edited in changelog-edits.json but gone from the changelog; remove the edit`);
}

const RULES = [
  [/\bcredits?\b/i, 'says "credit": the site says balance (hubstudio-positioning.md, Money)'],
  [/\btokens?\b/i, 'says "token": the site says balance'],
  [/[$€¥]\s?\d|\d\s?[$€¥]|\b\d[\d,.]*\s?(?:USD|EUR|CNY|RMB|yuan|dollars?)\b/i, 'prints an amount: the site prints none'],
  [new RegExp(String.fromCharCode(0x2014)), 'holds an em dash'],
  [/hub4you/i, 'names hub4You, which is retired'],
];

const entries = [];
for (const e of source) {
  let out = e;
  const edit = edits[e.id];
  if (edit) {
    if (edit.sourceHash !== e.hash) {
      problems.push(`${e.id}: changed upstream since its public edit (hash ${e.hash}, edit written for ${edit.sourceHash}); review the edit and set its sourceHash`);
      continue;
    }
    if (edit.hide) continue;
    out = {
      ...e,
      title: edit.title ?? e.title,
      dateISO: edit.dateISO ?? e.dateISO,
      kind: edit.kind ?? e.kind,
      blocks: edit.blocks ?? e.blocks,
    };
  }
  const text = [out.title, ...out.blocks.flatMap((b) => b.list ?? [b.text])].join('\n');
  for (const [re, why] of RULES) {
    if (re.test(text)) problems.push(`${e.id} (source hash ${e.hash}) ${why}: "${text.match(re)[0]}"`);
  }
  if (!out.dateISO) problems.push(`${e.id} (source hash ${e.hash}) has no date; give it a dateISO in changelog-edits.json`);
  const { hash, ...entry } = out;
  entries.push(entry);
}

if (problems.length) {
  console.error(problems.map((p) => `  ${p}`).join('\n'));
  console.error(`\n✗ ${problems.length} problem(s): write the public edit in src/data/changelog-edits.json, then sync again.`);
  process.exit(1);
}

writeJson(OUT, entries);
console.log(`✓ ${entries.length} changelog entries written to src/data/changelog.json (${source.length - entries.length} hidden)`);
