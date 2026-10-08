#!/usr/bin/env node
/**
 * Generates editorial/briefs/*.md and editorial/schedule.csv from
 * editorial/scripts/briefs-data.mjs (wave one, briefs 01 to 48) and the
 * modules in editorial/scripts/wave2/ (wave two, one module per brief).
 *
 * The calendar, the slugs, the slot assignments and the brief files all come
 * from one place, so they cannot drift apart. Edit briefs-data.mjs or a wave
 * two module, rerun this, commit the diff.
 *
 *   node editorial/scripts/generate-briefs.mjs           write new files only
 *   node editorial/scripts/generate-briefs.mjs --force   overwrite hand edits (wave two only)
 *   node editorial/scripts/generate-briefs.mjs --check   validate and compare, write nothing
 *
 * schedule.csv is merged, never clobbered: status and the date columns of an
 * existing row survive a regeneration. A row whose brief id is in neither
 * wave is kept as it is, with a warning, rather than dropped.
 *
 * Wave one is frozen. Its 48 pieces are published and its brief files carry
 * amendments made in their runs, so this script never rewrites a wave one
 * brief that exists (not even with --force), and before writing anything it
 * checks that every wave one schedule row would come out byte-identical. If
 * one would not, nothing is written and the differences are printed.
 *
 * Wave two modules: editorial/scripts/wave2/<id>-<slug>.mjs, each with a
 * default export holding one piece: id, date (ISO, the publish date, no
 * week or slot math), family (howto | engine | spec | comparison | industry |
 * insight), template (howto | spec | insight, matching the family), brief,
 * status, cluster, contentType, readerStage, slug, h1, query, secondary,
 * verdict, words, angle, mustInclude, doNot, stats, assets, links, seoTitle,
 * seoDesc, faqs, cta, notes. Loaded in id order. Their schedule rows take
 * week = plan week counted from Monday 2026-10-12 as week 1 (earlier dates
 * are week 0), slot = the family, slot_job = the family label.
 */

import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { PIECES, WEEK_MONDAYS, SLOT_OFFSET, SLOT_JOB, COMMON } from './briefs-data.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const EDITORIAL = path.resolve(HERE, '..');
const ROOT = path.resolve(EDITORIAL, '..');
const BRIEFS = path.join(EDITORIAL, 'briefs');
const SCHEDULE = path.join(EDITORIAL, 'schedule.csv');
const WAVE2_DIR = path.join(HERE, 'wave2');

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

// ---------------------------------------------------------------- wave two

/** Monday of wave two's plan week 1. Dates before it are week 0. */
const WAVE2_WEEK1 = '2026-10-12';

/**
 * One entry per wave two family: the label that fills slot_job, the template
 * the draft's frontmatter carries, how it publishes, and the mandatory element
 * that fills "Slot requirement" and "Tables required".
 */
const FAMILIES = {
  howto: {
    label: 'How-to',
    template: 'howto',
    publishesAs: 'how-to guide: `src/pages/resources/how-to/<slug>.astro` on HowtoLayout plus an entry in `src/data/howtos.ts`',
    mandatory: 'A step sequence, a prompt example, a checklist the reader can use today',
  },
  engine: {
    label: 'Engine guide',
    template: 'howto',
    publishesAs: 'how-to guide: `src/pages/resources/how-to/<slug>.astro` on HowtoLayout plus an entry in `src/data/howtos.ts`',
    mandatory: 'A capability table sourced from the maker, prompt examples, a QA list',
  },
  spec: {
    label: 'Platform specs',
    template: 'spec',
    publishesAs: 'insight, category Platform specs, listed on the specs hub `/resources/specs`',
    mandatory: 'Spec table with a source column, visible Reviewed date, dated changelog',
  },
  comparison: {
    label: 'Comparison',
    template: 'insight',
    publishesAs: 'insight, category Buying models',
    mandatory: 'A decision table and a when-to-choose section, no company named',
  },
  industry: {
    label: 'Industry page',
    template: 'insight',
    publishesAs: 'insight, category Production',
    mandatory: 'Asset list per channel, the category\'s claim rules, a case reference only from src/data/case-studies.ts',
  },
  insight: {
    label: 'Insight',
    template: 'insight',
    publishesAs: 'insight',
    mandatory: 'Decision or answer table in the first screen, FAQ block',
  },
};

const READER_STAGES = ['budget-holder', 'practitioner', 'procurement'];

/** Plan week of a wave two date: Monday 2026-10-12 starts week 1. */
function wave2Week(iso) {
  const days = Math.floor((Date.parse(`${iso}T00:00:00Z`) - Date.parse(`${WAVE2_WEEK1}T00:00:00Z`)) / 86400000);
  return days < 0 ? 0 : Math.floor(days / 7) + 1;
}

const isHowtoFamily = (p) => FAMILIES[p.family] && FAMILIES[p.family].template === 'howto';
const homeOf = (p) => (isHowtoFamily(p) ? `/resources/how-to/${p.slug}/` : `/resources/insights/${p.slug}/`);
const heroOf = (p) => (isHowtoFamily(p) ? `howto-${p.slug}.webp` : `insight-${p.slug}.webp`);

/** Numeric ids sort as numbers ("49" before "100"), anything else as text. */
const byId = (a, b) => String(a).localeCompare(String(b), 'en', { numeric: true });

/**
 * Loads every module in wave2/, sorted by id. A module that fails to import
 * (another session mid-write, a syntax error) is reported, not fatal here:
 * validation turns it into a problem so nothing is written over it.
 */
async function loadWave2() {
  const pieces = [];
  const loadErrors = [];
  if (!existsSync(WAVE2_DIR)) return { pieces, loadErrors };
  const files = readdirSync(WAVE2_DIR).filter((f) => f.endsWith('.mjs'));
  for (const f of files) {
    try {
      const mod = await import(pathToFileURL(path.join(WAVE2_DIR, f)).href);
      const p = mod.default;
      if (!p || typeof p !== 'object' || Array.isArray(p)) {
        loadErrors.push(`${f}: no default export holding one piece`);
        continue;
      }
      pieces.push({ ...p, id: String(p.id), _file: f });
    } catch (err) {
      loadErrors.push(`${f}: failed to load (${String(err && err.message).split('\n')[0]})`);
    }
  }
  pieces.sort((a, b) => byId(a.id, b.id));
  return { pieces, loadErrors };
}

/** Brief file body for a wave two piece. Wave one keeps briefBody above,
    untouched, so its files cannot change by accident. */
function briefBodyWave2(p) {
  const fam = FAMILIES[p.family];
  const howto = isHowtoFamily(p);
  const words = p.words;
  const wordLine = typeof words === 'number' ? `${words.toLocaleString('en-US')} words` : `${words} words`;
  const links = p.links || [];
  const week = wave2Week(p.date);

  const researchExtra = [];
  if (p.family === 'spec') {
    researchExtra.push(
      '- A Western network\'s or marketplace\'s own help, business or policy pages are\n' +
      '  readable and therefore primary: no deviation 7 disclaimer, but a visible\n' +
      '  Reviewed date on the page and a `watch.csv` row three months out for the\n' +
      '  quarterly recheck. A China platform keeps deviation 7 where its rule text\n' +
      '  is gated.',
    );
  }
  if (howto) {
    researchExtra.push(
      '- App facts come only from `hubstudio-positioning.md` and the help center\n' +
      '  (`src/content/help/`). Screens reuse the existing localized captures (help\n' +
      '  center images and `src/data/app-shots.ts`), never a new capture of a\n' +
      '  feature the help center does not document.',
    );
  }
  if (p.family === 'engine') {
    researchExtra.push(
      '- Engine capabilities come from the maker\'s own documentation, never from a\n' +
      '  reseller or an aggregator. Limits inside the app come from the help center.',
    );
  }

  const assetsNote = howto
    ? 'Describe each in the ASSET BRIEF block at the end of the file. Existing app\n' +
      'captures may be placed in the body as markdown images,\n' +
      '`![alt](/Images/help/<file>.webp "Caption")`, and publish as figures; prompts go\n' +
      'in ```` ```prompt ```` fenced blocks and steps in markdown lists (see the header of\n' +
      '`scripts/publish-draft.mjs`). Nothing else is embedded.'
    : 'Describe each in the ASSET BRIEF block at the end of the file. Do not embed\nimages in body copy.';

  const doneExtra = [];
  if (p.family === 'spec') {
    doneExtra.push('- [ ] Reviewed date visible on the page, dated changelog present');
    doneExtra.push('- [ ] `watch.csv` row added three months out for the quarterly recheck');
  }
  if (howto) doneExtra.push('- [ ] Every app fact traceable to `hubstudio-positioning.md` or the help center');
  if (p.family === 'industry') doneExtra.push('- [ ] Any case reference taken from `src/data/case-studies.ts`, nothing invented');

  return `---
brief_id: ${p.id}
publish_date: ${p.date}
week: ${String(week).padStart(2, '0')}
slot: ${p.family}
slot_job: ${fam.label}
template: ${p.template}
cluster: ${p.cluster}
content_type: ${p.contentType}
status: ${p.status || 'not_started'}
---

# BRIEF ${p.id}: ${p.h1}

Run with the CreateArticle skill. Read \`../CLAUDE.md\` (its "Wave two" section
first) and \`../SPEC.md\`. They override any conflicting rule inside the skill.

**Standing rule.** ${COMMON.standingRule}

## CreateArticle inputs

| Input | Value |
|---|---|
| website | ${COMMON.website} |
| audience | ${p.audience || COMMON.audience} |
| reader stage | ${p.readerStage} |
| family | ${fam.label} (\`template: ${p.template}\` in the draft's frontmatter) |
| brief | this file |

## Target

| Field | Value |
|---|---|
| Working H1 | ${p.h1} |
| Slug | \`${homeOf(p)}\` |
| Publishes as | ${fam.publishesAs.replace('<slug>', p.slug)} |
| Output file | \`output/${p.slug}.md\` |
| Research file | \`research/${p.slug}.md\` |
| Hero image | \`public/Images/${heroOf(p)}\`, referenced as \`/Images/${heroOf(p)}\` |
| Primary query | \`${p.query}\` |
| Secondary queries | ${(p.secondary || []).map((s) => `\`${s}\``).join(', ') || 'none'} |
| SERP verdict | ${p.verdict} |
| Body length | ${wordLine} (body only, per the char-count rule) |
| Slot requirement | ${fam.mandatory} |

## The angle

${p.angle}

## The research gate, before any drafting

No body copy until \`research/${p.slug}.md\` exists and every claim in it is
marked. Follow R1 to R7 in \`../CLAUDE.md\`. In short:

- Map what has to be true before looking anything up.
- Map the SERP for \`${p.query}\` plus at least three other phrasings a buyer
  would type. Record the top ten for each: domain, page type, what it answers,
  what it misses, how old it is. State the gap in one sentence.
- Primary sources only for anything with a number in it: the network's,
  marketplace's or maker's own help, business, policy or documentation pages,
  captured to \`research/${p.slug}/\` with a date. For a China platform, the
  seller backend, the live app and the official rule pages.
- Search the Chinese-language web first for anything China-related.
- Record source URL, date, sample size, method and who paid for every figure.
- Where sources conflict, publish the range and say why.
${researchExtra.length ? `${researchExtra.join('\n')}\n` : ''}
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

${assetsNote}

${bullets(p.assets)}
- Feature image: see \`../SPEC.md\`, saved as \`public/Images/${heroOf(p)}\`.
  \`hubstudio-image-style-guide.md\` at the repo root is binding. Never name a
  real person in the prompt: convert every photographer reference into its
  concrete visual properties.

## Tables required

At least two. ${fam.mandatory}. Keep them aligned and scannable,
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
- [ ] No Han characters in the article: Chinese names romanized (deviation 6)
- [ ] Title under 52, meta under 152, excerpt under 25 words, all counted
- [ ] At least two tables
- [ ] Three internal references present as plain-text names
- [ ] Feature image, schema and asset brief blocks appended
- [ ] Body character count reported and on target
${doneExtra.length ? `${doneExtra.join('\n')}\n` : ''}- [ ] File saved as \`output/${p.slug}.md\` with \`template: ${p.template}\`
`;
}

/** Case study slugs, which /work/[slug].astro renders from src/data/case-studies.ts. */
let caseSlugs = null;
function caseStudySlugs() {
  if (!caseSlugs) {
    const file = path.join(ROOT, 'src', 'data', 'case-studies.ts');
    const src = existsSync(file) ? readFileSync(file, 'utf8') : '';
    caseSlugs = new Set([...src.matchAll(/^\s+slug:\s*'([^']+)'/gm)].map((m) => m[1]));
  }
  return caseSlugs;
}

/** Internal link targets that resolve to nothing on the site or in the plan. */
function unresolvedLinks(p, plannedPaths) {
  const out = [];
  for (const [name, url] of p.links || []) {
    const clean = String(url).replace(/[#?].*$/, '').replace(/\/$/, '') || '/';
    if (!clean.startsWith('/')) { out.push(`${name} -> ${url} (not a site path)`); continue; }
    if (plannedPaths.has(clean)) continue;
    const base = path.join(ROOT, 'src', 'pages', ...clean.split('/').filter(Boolean));
    const help = clean.match(/^\/help\/([^/]+)$/);
    const work = clean.match(/^\/work\/([^/]+)$/);
    const found = existsSync(`${base}.astro`) || existsSync(path.join(base, 'index.astro'))
      || (clean === '/' && existsSync(path.join(ROOT, 'src', 'pages', 'index.astro')))
      || (help && existsSync(path.join(ROOT, 'src', 'content', 'help', `${help[1]}.md`)))
      || (work && caseStudySlugs().has(work[1]));
    if (!found) out.push(`${name} -> ${url}`);
  }
  return out;
}

// --------------------------------------------------------------------- run

const { pieces: WAVE2, loadErrors } = await loadWave2();

const problems = [...loadErrors];
const warnings = [];
const seenSlug = new Map();
const seenSlot = new Map();
const seenId = new Map(PIECES.map((p) => [String(p.id), 'wave one']));

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
  const emdash = JSON.stringify(p).includes('\u2014');
  if (emdash) problems.push(`${p.id}: contains an em dash`);
}

// ------------------------------------------------------- wave two checks

const readOr = (file) => (existsSync(file) ? readFileSync(file, 'utf8') : '');
const insightsSrc = readOr(path.join(ROOT, 'src', 'data', 'insights.ts'));
const howtosSrc = readOr(path.join(ROOT, 'src', 'data', 'howtos.ts'));

/* Pages the plan itself will create, so a link to a later wave two piece is
   not reported as broken. */
const plannedPaths = new Set([
  '/resources/specs',
  ...PIECES.map((p) => `/resources/insights/${p.slug}`),
  ...WAVE2.map((p) => homeOf(p).replace(/\/$/, '')),
]);

for (const p of WAVE2) {
  const tag = `${p.id} (${p._file})`;
  if (seenId.has(p.id)) problems.push(`${tag}: id also used by ${seenId.get(p.id)}`);
  seenId.set(p.id, p._file);

  const validDate = /^\d{4}-\d{2}-\d{2}$/.test(p.date || '')
    && new Date(`${p.date}T00:00:00Z`).toISOString().slice(0, 10) === p.date;
  if (!validDate) problems.push(`${tag}: date "${p.date}" is not an ISO date`);

  const fam = FAMILIES[p.family];
  if (!fam) problems.push(`${tag}: unknown family "${p.family}" (${Object.keys(FAMILIES).join(', ')})`);
  else if (p.template !== fam.template) problems.push(`${tag}: family ${p.family} publishes with template ${fam.template}, module says ${p.template}`);

  if (!p.slug || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(p.slug)) problems.push(`${tag}: slug "${p.slug}" is not lowercase-hyphenated`);
  if (seenSlug.has(p.slug)) problems.push(`${tag}: slug also used by ${seenSlug.get(p.slug)}`);
  seenSlug.set(p.slug, p.id);
  if (p._file !== `${p.id}-${p.slug}.mjs`) warnings.push(`${tag}: file name does not match <id>-<slug>.mjs`);

  if (p.brief === false) continue;
  for (const f of ['h1', 'cluster', 'query', 'verdict', 'angle', 'seoTitle', 'seoDesc', 'cta', 'readerStage', 'contentType', 'words']) {
    if (!p[f]) problems.push(`${tag}: missing ${f}`);
  }
  if (p.readerStage && !READER_STAGES.includes(p.readerStage)) problems.push(`${tag}: reader stage "${p.readerStage}" is not one of ${READER_STAGES.join(', ')}`);
  if (p.seoTitle && p.seoTitle.length > TITLE_MAX) problems.push(`${tag}: title ${p.seoTitle.length} chars, ceiling ${TITLE_MAX}`);
  if (p.seoDesc && p.seoDesc.length > DESC_MAX) problems.push(`${tag}: meta ${p.seoDesc.length} chars, ceiling ${DESC_MAX}`);
  if ((p.faqs || []).length < 5) problems.push(`${tag}: needs 5 to 8 FAQ questions, has ${(p.faqs || []).length}`);
  if ((p.links || []).length < 3) problems.push(`${tag}: needs 3 internal links, has ${(p.links || []).length}`);
  if ((p.links || []).some((l) => !Array.isArray(l) || l.length !== 2 || !l[0] || !l[1])) problems.push(`${tag}: every link must be a [name, url] pair`);
  // U+2014 named by codepoint so this file stays clean of the character itself.
  if (JSON.stringify(p).includes('\u2014')) problems.push(`${tag}: contains an em dash`);

  const broken = unresolvedLinks(p, plannedPaths);
  if (broken.length) warnings.push(`${tag}: link target not found on the site or in the plan: ${broken.join('; ')}`);
}

if (problems.length) {
  console.error('Validation failed:');
  for (const p of problems) console.error(`  ${p}`);
  process.exit(1);
}

const famCount = {};
for (const p of WAVE2) famCount[p.family] = (famCount[p.family] || 0) + 1;
console.log(`Validated ${PIECES.length} pieces, ${PIECES.filter((p) => p.brief).length} with full briefs.`);
console.log(`Validated ${WAVE2.length} wave two pieces (${Object.entries(famCount).map(([f, n]) => `${f} ${n}`).join(', ') || 'none yet'}), ids ${WAVE2.length ? `${WAVE2[0].id} to ${WAVE2[WAVE2.length - 1].id}` : 'none'}, dates ${WAVE2.length ? `${[...WAVE2].sort((a, b) => a.date.localeCompare(b.date))[0].date} to ${[...WAVE2].sort((a, b) => b.date.localeCompare(a.date))[0].date}` : 'none'}.`);

// ------------------------------------------------------------- the plan

// Existing brief files, keyed by brief id, so a renamed date does not orphan one.
const existing = new Map();
if (existsSync(BRIEFS)) {
  for (const f of readdirSync(BRIEFS).filter((f) => f.endsWith('.md'))) {
    const m = readFileSync(path.join(BRIEFS, f), 'utf8').match(/^brief_id:\s*(\S+)/m);
    if (m) existing.set(m[1], f);
  }
}

/* Wave one briefs are never rewritten once they exist: they carry amendments
   made in their runs. A fresh rendering is compared for the report only. */
const wave1Brief = { present: 0, identical: 0, amended: [], missing: [] };
const briefWrites = [];
for (const p of PIECES) {
  if (!p.brief) continue;
  const publishDate = dateFor(p.week, p.slot);
  const name = `${publishDate}-${p.slug}.md`;
  const prior = existing.get(p.id);
  if (!prior) {
    wave1Brief.missing.push(name);
    briefWrites.push({ name, body: briefBody(p, publishDate), wave: 1 });
    continue;
  }
  wave1Brief.present++;
  if (readFileSync(path.join(BRIEFS, prior), 'utf8') === briefBody(p, publishDate)) wave1Brief.identical++;
  else wave1Brief.amended.push(prior);
}

const wave2Brief = { new: 0, kept: 0, overwrite: 0, identical: 0 };
for (const p of WAVE2) {
  if (p.brief === false) continue;
  const name = `${p.date}-${p.slug}.md`;
  const body = briefBodyWave2(p);
  const prior = existing.get(p.id);
  if (prior && prior !== name) {
    warnings.push(`${p.id}: brief exists as ${prior} but the module now names ${name}; rerun with --force, then delete ${prior}`);
  }
  if (prior && readFileSync(path.join(BRIEFS, prior), 'utf8') === body && prior === name) { wave2Brief.identical++; continue; }
  if (prior && !force) { wave2Brief.kept++; continue; }
  if (prior) wave2Brief.overwrite++;
  else wave2Brief.new++;
  briefWrites.push({ name, body, wave: 2 });
}

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
const currentLine = new Map();
const currentOrder = [];
let scheduleRaw = '';
let eol = '\n';
if (existsSync(SCHEDULE)) {
  scheduleRaw = readFileSync(SCHEDULE, 'utf8');
  if (scheduleRaw.includes('\r\n')) eol = '\r\n';
  const lines = scheduleRaw.split(/\r?\n/).filter(Boolean);
  const head = parseCsvLine(lines[0]);
  for (const line of lines.slice(1)) {
    const cells = parseCsvLine(line);
    const row = Object.fromEntries(head.map((h, i) => [h, cells[i] ?? '']));
    if (row.brief_id) {
      prior.set(row.brief_id, row);
      currentLine.set(row.brief_id, line);
      currentOrder.push(row.brief_id);
    }
  }
}

function mergeKeep(row, before) {
  for (const k of KEEP) if (before[k] !== undefined && row[k] === undefined) row[k] = before[k];
  for (const k of KEEP) if (row[k] === undefined) row[k] = before[k] || '';
  return row;
}

const wave1Rows = PIECES.map((p) => {
  const publishDate = dateFor(p.week, p.slot);
  const before = prior.get(p.id) || {};
  return mergeKeep({
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
  }, before);
});

const wave2Rows = WAVE2.map((p) => {
  const before = prior.get(p.id) || {};
  return mergeKeep({
    publish_date: p.date,
    weekday: weekdayFor(p.date),
    week: String(wave2Week(p.date)).padStart(2, '0'),
    slot: p.family,
    slot_job: FAMILIES[p.family].label,
    brief_id: p.id,
    brief_file: p.brief === false ? 'calendar row only, not briefed yet' : `briefs/${p.date}-${p.slug}.md`,
    output_file: `output/${p.slug}.md`,
    research_file: `research/${p.slug}.md`,
    working_h1: p.h1,
    primary_query: p.query || '',
    cluster: p.cluster,
    content_type: p.contentType || '',
    status: before.status || p.status || 'not_started',
    notes: before.notes || p.notes || '',
  }, before);
});

/* A row neither wave knows (added by hand, or a module deleted) is kept as it
   is rather than silently dropped. */
const known = new Set([...PIECES.map((p) => p.id), ...WAVE2.map((p) => p.id)]);
const orphanRows = [...prior.values()].filter((r) => !known.has(r.brief_id));
for (const r of orphanRows) warnings.push(`schedule.csv row ${r.brief_id} (${r.output_file}) is in neither wave; kept as it is`);

/* A wave two slug already live, on a row not marked published, would collide
   at publish time. */
for (const p of WAVE2) {
  const listed = (isHowtoFamily(p) ? howtosSrc : insightsSrc).includes(`slug: '${p.slug}'`);
  const status = (prior.get(p.id) || {}).status || p.status;
  if (listed && status !== 'published') warnings.push(`${p.id}: slug ${p.slug} is already in ${isHowtoFamily(p) ? 'howtos.ts' : 'insights.ts'} but the row is ${status}`);
}

const byDateSlot = (a, b) => (a.publish_date === b.publish_date
  ? (a.slot === b.slot ? byId(a.brief_id, b.brief_id) : a.slot.localeCompare(b.slot))
  : a.publish_date.localeCompare(b.publish_date));
const lineOf = (r) => COLUMNS.map((c) => csvCell(r[c])).join(',');

const rows = [...wave1Rows, ...wave2Rows, ...orphanRows].sort(byDateSlot);
const csv = [COLUMNS.join(','), ...rows.map(lineOf)].join(eol) + eol;

/* What the generator would have written for wave one alone, the way it did
   before wave two existed. Matches the current file only until wave two rows
   are first written; reported, not enforced. */
const wave1OnlyCsv = [COLUMNS.join(','), ...[...wave1Rows].sort(byDateSlot).map(lineOf)].join(eol) + eol;

// ------------------------------------------- wave one stays byte-identical

const wave1Diffs = [];
if (scheduleRaw) {
  const head = scheduleRaw.split(/\r?\n/)[0];
  if (head !== COLUMNS.join(',')) wave1Diffs.push(`header differs:\n      now  ${head}\n      next ${COLUMNS.join(',')}`);
}
for (const r of wave1Rows) {
  const now = currentLine.get(r.brief_id);
  const next = lineOf(r);
  if (now === undefined) wave1Diffs.push(`row ${r.brief_id}: missing from schedule.csv, would be added`);
  else if (now !== next) wave1Diffs.push(`row ${r.brief_id}:\n      now  ${now}\n      next ${next}`);
}
const wave1Ids = new Set(PIECES.map((p) => p.id));
const orderNow = currentOrder.filter((id) => wave1Ids.has(id)).join(',');
const orderNext = rows.filter((r) => wave1Ids.has(r.brief_id)).map((r) => r.brief_id).join(',');
if (scheduleRaw && orderNow !== orderNext) wave1Diffs.push('the order of the wave one rows would change');

const wave1RowsSame = wave1Rows.length - wave1Diffs.filter((d) => d.startsWith('row ')).length;
console.log('');
console.log('Wave one (frozen):');
console.log(`  schedule rows   ${wave1RowsSame} of ${wave1Rows.length} byte-identical to schedule.csv${orderNow === orderNext ? ', relative order unchanged' : ', ORDER WOULD CHANGE'}`);
console.log(`  brief files     ${wave1Brief.present} present and never rewritten (${wave1Brief.identical} identical to a fresh rendering, ${wave1Brief.amended.length} amended in their runs)${wave1Brief.missing.length ? `, ${wave1Brief.missing.length} missing and would be created` : ''}`);
console.log(`  schedule.csv    ${scheduleRaw === wave1OnlyCsv ? 'equals' : 'differs from'} the wave one only rendering${scheduleRaw === wave1OnlyCsv ? ' (no wave two rows written yet)' : ''}`);
console.log('Wave two:');
console.log(`  brief files     ${wave2Brief.new} new, ${wave2Brief.identical} unchanged, ${wave2Brief.kept} existing left alone${force ? `, ${wave2Brief.overwrite} overwritten (--force)` : ' (use --force to overwrite)'}`);
console.log(`  schedule rows   ${wave2Rows.filter((r) => !currentLine.has(r.brief_id)).length} new, ${wave2Rows.filter((r) => currentLine.has(r.brief_id) && currentLine.get(r.brief_id) === lineOf(r)).length} unchanged, ${wave2Rows.filter((r) => currentLine.has(r.brief_id) && currentLine.get(r.brief_id) !== lineOf(r)).length} updated (progress columns kept)`);
console.log(`schedule.csv after the run: ${rows.length} rows (${rows[0].publish_date} to ${rows[rows.length - 1].publish_date})${csv === scheduleRaw ? ', no change' : ''}.`);

if (warnings.length) {
  console.log(`\nWarnings (${warnings.length}):`);
  for (const w of warnings) console.log(`  ${w}`);
}

if (wave1Diffs.length) {
  console.error('\nWave one output would change. Nothing written:');
  for (const d of wave1Diffs) console.error(`  ${d}`);
  process.exit(1);
}

if (checkOnly) {
  console.log('\n--check: nothing written.');
  process.exit(0);
}

// ----------------------------------------------------------------- write

mkdirSync(BRIEFS, { recursive: true });
for (const w of briefWrites) writeFileSync(path.join(BRIEFS, w.name), w.body, 'utf8');
console.log(`\nBriefs: ${briefWrites.length} written.`);
if (csv !== scheduleRaw) writeFileSync(SCHEDULE, csv, 'utf8');
console.log(`schedule.csv: ${csv === scheduleRaw ? 'unchanged' : 'written'}.`);
