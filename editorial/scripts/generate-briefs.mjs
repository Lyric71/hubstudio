#!/usr/bin/env node
/**
 * Generates editorial/briefs/*.md and editorial/schedule.csv from
 * editorial/scripts/briefs-data.mjs.
 *
 * The calendar, the slugs, the slot assignments and the brief files all come
 * from one place, so they cannot drift apart. Edit briefs-data.mjs, rerun
 * this, commit the diff.
 *
 *   node editorial/scripts/generate-briefs.mjs           write new files only
 *   node editorial/scripts/generate-briefs.mjs --force   overwrite hand edits
 *   node editorial/scripts/generate-briefs.mjs --check   validate, write nothing
 *
 * schedule.csv is merged, never clobbered: status and the date columns of an
 * existing row survive a regeneration.
 */

import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PIECES, WEEK_MONDAYS, SLOT_OFFSET, SLOT_JOB, COMMON } from './briefs-data.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const EDITORIAL = path.resolve(HERE, '..');
const BRIEFS = path.join(EDITORIAL, 'briefs');
const SCHEDULE = path.join(EDITORIAL, 'schedule.csv');

const force = process.argv.includes('--force');
const checkOnly = process.argv.includes('--check');

const TITLE_MAX = 52;
const DESC_MAX = 152;

const WORDS_BY_SLOT = {
  A: '2,500 to 3,500',
  B: '1,200 to 2,000',
  C: '1,500 to 2,200',
  D: '900 to 1,600',
};

const MANDATORY_BY_SLOT = {
  A: 'Decision table, cost-band section, FAQ block',
  B: 'Spec table, annotated screenshot, rejection reasons, visible reviewed date',
  C: 'A workflow, checklist or document structure the reader can use tomorrow',
  D: 'One number from hubStudio\'s delivery record with its method stated',
};

/** publish_date for a week and slot. */
function dateFor(week, slot) {
  const monday = new Date(`${WEEK_MONDAYS[week]}T00:00:00Z`);
  monday.setUTCDate(monday.getUTCDate() + SLOT_OFFSET[slot]);
  return monday.toISOString().slice(0, 10);
}

function weekdayFor(iso) {
  return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][
    new Date(`${iso}T00:00:00Z`).getUTCDay()
  ];
}

function csvCell(v) {
  const s = v === undefined || v === null ? '' : String(v);
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

/** Split a CSV line honoring quoted cells. */
function parseCsvLine(line) {
  const out = [];
  let cur = '';
  let quoted = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (quoted) {
      if (c === '"' && line[i + 1] === '"') { cur += '"'; i++; }
      else if (c === '"') quoted = false;
      else cur += c;
    } else if (c === '"') quoted = true;
    else if (c === ',') { out.push(cur); cur = ''; }
    else cur += c;
  }
  out.push(cur);
  return out;
}

const bullets = (arr) => (arr && arr.length ? arr.map((s) => `- ${s}`).join('\n') : '- (none)');
const numbered = (arr) => (arr && arr.length ? arr.map((s, i) => `${i + 1}. ${s}`).join('\n') : '(none)');

function briefBody(p, publishDate) {
  const words = p.words || WORDS_BY_SLOT[p.slot];
  const wordLine = typeof words === 'number' ? `${words.toLocaleString('en-US')} words` : `${words} words`;
  const links = p.links || [];

  return `---
brief_id: ${p.id}
publish_date: ${publishDate}
week: ${String(p.week).padStart(2, '0')}
slot: ${p.slot}
slot_job: ${SLOT_JOB[p.slot]}
cluster: ${p.cluster}
content_type: ${p.contentType}
status: ${p.status || 'not_started'}
---

# BRIEF ${p.id}: ${p.h1}

Run with the CreateArticle skill. Read \`../CLAUDE.md\` and \`../SPEC.md\`
first. They override any conflicting rule inside the skill.

**Standing rule.** ${COMMON.standingRule}

## CreateArticle inputs

| Input | Value |
|---|---|
| website | ${COMMON.website} |
| audience | ${COMMON.audience} |
| reader stage | ${p.readerStage} |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | ${p.h1} |
| Slug | \`/resources/insights/${p.slug}/\` |
| Output file | \`output/${p.slug}.md\` |
| Research file | \`research/${p.slug}.md\` |
| Primary query | \`${p.query}\` |
| Secondary queries | ${(p.secondary || []).map((s) => `\`${s}\``).join(', ') || 'none'} |
| SERP verdict | ${p.verdict} |
| Body length | ${wordLine} (body only, per the char-count rule) |
| Slot requirement | ${MANDATORY_BY_SLOT[p.slot]} |

## The angle

${p.angle}

## The research gate, before any drafting

No body copy until \`research/${p.slug}.md\` exists and every claim in it is
marked. Follow R1 to R7 in \`../CLAUDE.md\`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for \`${p.query}\` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it. For China platform
  specs that means the seller backend, the live app and the official rule
  pages, captured to \`research/${p.slug}/\` with a date.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.

## Statistics to source

Every figure needs a blockquote with a source, a date and a one-sentence
method. Check \`../sources/verified-sources.md\` and Part 7 of the search spec
first: if the figure is logged, current and verified twice, reuse the logged
citation. Append anything new to the ledger before finishing.

${bullets(p.stats)}

**If a figure cannot be sourced, cut the claim.** Do not estimate, do not
hedge, do not write "industry sources suggest". A missing number is better
than an unsourced one.

## Must include

${bullets(p.mustInclude)}
${p.confidence ? `\n## Confidence handling\n\n${p.confidence}\n` : ''}
## Do not

${bullets([
    'Name, describe, compare to or allude to any competitor.',
    'Publish a hubStudio rate, monthly figure or per-item price.',
    'Write a summary or conclusion section. End on the CTA.',
    'Use an em dash anywhere.',
    'Print a decorative ordinal inside any repeated titled block.',
    ...(p.doNot || []),
  ])}

## Assets to brief

Describe each in the ASSET BRIEF block at the end of the file. Do not embed
images in body copy.

${bullets(p.assets)}
- Feature image: see \`../SPEC.md\`. \`hubstudio-image-style-guide.md\` at the
  repo root is binding. Never name a real person in the prompt: convert every
  photographer reference into its concrete visual properties.

## Tables required

At least two. ${MANDATORY_BY_SLOT[p.slot]}. Keep them aligned and scannable,
five columns maximum.

## Internal links

Three minimum, as plain-text references by name in body copy, never as
markdown links. List the URLs in the ASSET BRIEF block so the publish step can
wire them.

${links.map(([name, url]) => `- ${name}: \`${url}\``).join('\n') || '- (none)'}

## CTA

Final section only. CTA label: **${p.cta}**

## SEO

| Field | Ceiling | Draft value |
|---|---|---|
| Title | 52 chars | ${p.seoTitle} (${p.seoTitle.length} chars) |
| Meta description | 152 chars | ${p.seoDesc} (${p.seoDesc.length} chars) |
| Excerpt | 25 words | generate in the SEO iteration |

The draft values above are approved and inside the ceilings. Use them unless
the finished article makes them inaccurate, in which case rewrite within the
same ceilings and note the change in the log.

## FAQ block

Add these as a FAQ section before the CTA, in the words buyers type. Answer
each in 40 to 70 words. Mark them up in the SCHEMA block.

${numbered(p.faqs)}
${p.notes ? `\n## Notes\n\n${p.notes}\n` : ''}
## Definition of done

- [ ] \`research/${p.slug}.md\` written before drafting, every claim marked
- [ ] Every cited source passed check 1 and check 2, both dates in the ledger
- [ ] R8 reconciliation done: nothing in the draft that is not in the research file
- [ ] No competitor named, described, compared to or alluded to
- [ ] Every statistic in a blockquote with a source, a date and a method
- [ ] New figures appended to \`sources/verified-sources.md\`
- [ ] Zero em dashes
- [ ] Zero deliberate typos or planted errors
- [ ] No summary or conclusion section
- [ ] No hubStudio rate anywhere. Search for \`$\` and check every hit
- [ ] Chinese terms as English (中文) on first reference per section
- [ ] Title under 52, meta under 152, excerpt under 25 words, all counted
- [ ] At least two tables
- [ ] Three internal references present as plain-text names
- [ ] Feature image, schema and asset brief blocks appended
- [ ] Body character count reported and on target
- [ ] File saved as \`output/${p.slug}.md\`
`;
}

// --------------------------------------------------------------------- run

const problems = [];
const seenSlug = new Map();
const seenSlot = new Map();

for (const p of PIECES) {
  if (!WEEK_MONDAYS[p.week]) problems.push(`${p.id}: unknown week ${p.week}`);
  if (!SLOT_OFFSET[p.slot]  && SLOT_OFFSET[p.slot] !== 0) problems.push(`${p.id}: unknown slot ${p.slot}`);
  if (seenSlug.has(p.slug)) problems.push(`${p.id}: slug also used by ${seenSlug.get(p.slug)}`);
  seenSlug.set(p.slug, p.id);
  const key = `W${p.week}-${p.slot}`;
  if (seenSlot.has(key)) problems.push(`${p.id}: slot ${key} also held by ${seenSlot.get(key)}`);
  seenSlot.set(key, p.id);
  if (!p.brief) continue;
  for (const f of ['query', 'angle', 'seoTitle', 'seoDesc', 'cta', 'readerStage', 'contentType']) {
    if (!p[f]) problems.push(`${p.id}: missing ${f}`);
  }
  if (p.seoTitle && p.seoTitle.length > TITLE_MAX) problems.push(`${p.id}: title ${p.seoTitle.length} chars, ceiling ${TITLE_MAX}`);
  if (p.seoDesc && p.seoDesc.length > DESC_MAX) problems.push(`${p.id}: meta ${p.seoDesc.length} chars, ceiling ${DESC_MAX}`);
  if ((p.faqs || []).length < 5) problems.push(`${p.id}: needs 5 to 8 FAQ questions, has ${(p.faqs || []).length}`);
  if ((p.links || []).length < 3) problems.push(`${p.id}: needs 3 internal links, has ${(p.links || []).length}`);
  // U+2014 named by codepoint so this file stays clean of the character itself.
  const emdash = JSON.stringify(p).includes('—');
  if (emdash) problems.push(`${p.id}: contains an em dash`);
}

if (problems.length) {
  console.error('Validation failed:');
  for (const p of problems) console.error(`  ${p}`);
  process.exit(1);
}
console.log(`Validated ${PIECES.length} pieces, ${PIECES.filter((p) => p.brief).length} with full briefs.`);

if (checkOnly) process.exit(0);

mkdirSync(BRIEFS, { recursive: true });

// Existing brief files, keyed by brief id, so a renamed date does not orphan one.
const existing = new Map();
for (const f of readdirSync(BRIEFS).filter((f) => f.endsWith('.md'))) {
  const m = readFileSync(path.join(BRIEFS, f), 'utf8').match(/^brief_id:\s*(\S+)/m);
  if (m) existing.set(m[1], f);
}

let written = 0;
let skipped = 0;
for (const p of PIECES) {
  if (!p.brief) continue;
  const publishDate = dateFor(p.week, p.slot);
  const file = path.join(BRIEFS, `${publishDate}-${p.slug}.md`);
  const prior = existing.get(p.id);
  if (prior && !force) { skipped++; continue; }
  writeFileSync(file, briefBody(p, publishDate), 'utf8');
  written++;
}
console.log(`Briefs: ${written} written, ${skipped} left alone (use --force to overwrite).`);

// ------------------------------------------------------------- schedule.csv

const COLUMNS = [
  'publish_date', 'weekday', 'week', 'slot', 'slot_job', 'brief_id', 'brief_file',
  'output_file', 'research_file', 'working_h1', 'primary_query', 'cluster',
  'content_type', 'status', 'researched_on', 'drafted_on', 'quality_passed_on',
  'image_generated_on', 'reviewed_by', 'published_on', 'notes',
];
const KEEP = ['status', 'researched_on', 'drafted_on', 'quality_passed_on', 'image_generated_on', 'reviewed_by', 'published_on', 'notes'];

// Merge: an existing row's progress columns survive a regeneration.
const prior = new Map();
if (existsSync(SCHEDULE)) {
  const lines = readFileSync(SCHEDULE, 'utf8').split(/\r?\n/).filter(Boolean);
  const head = parseCsvLine(lines[0]);
  for (const line of lines.slice(1)) {
    const cells = parseCsvLine(line);
    const row = Object.fromEntries(head.map((h, i) => [h, cells[i] ?? '']));
    if (row.brief_id) prior.set(row.brief_id, row);
  }
}

const rows = PIECES
  .map((p) => {
    const publishDate = dateFor(p.week, p.slot);
    const before = prior.get(p.id) || {};
    const row = {
      publish_date: publishDate,
      weekday: weekdayFor(publishDate),
      week: String(p.week).padStart(2, '0'),
      slot: p.slot,
      slot_job: SLOT_JOB[p.slot],
      brief_id: p.id,
      brief_file: p.brief ? `briefs/${publishDate}-${p.slug}.md` : 'batch two, briefed in month two',
      output_file: `output/${p.slug}.md`,
      research_file: `research/${p.slug}.md`,
      working_h1: p.h1,
      primary_query: p.query || '',
      cluster: p.cluster,
      content_type: p.contentType || '',
      status: before.status || p.status || 'not_started',
      notes: before.notes || p.notes || '',
    };
    for (const k of KEEP) if (before[k] !== undefined && row[k] === undefined) row[k] = before[k];
    for (const k of KEEP) if (row[k] === undefined) row[k] = before[k] || '';
    return row;
  })
  .sort((a, b) => (a.publish_date === b.publish_date ? a.slot.localeCompare(b.slot) : a.publish_date.localeCompare(b.publish_date)));

const csv = [COLUMNS.join(','), ...rows.map((r) => COLUMNS.map((c) => csvCell(r[c])).join(','))].join('\n') + '\n';
writeFileSync(SCHEDULE, csv, 'utf8');
console.log(`schedule.csv: ${rows.length} rows (${rows[0].publish_date} to ${rows[rows.length - 1].publish_date}).`);
