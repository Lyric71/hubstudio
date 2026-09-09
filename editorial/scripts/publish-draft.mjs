#!/usr/bin/env node
/**
 * Turns a finished draft in editorial/output/ into the two artifacts the site
 * actually needs: an entry in src/data/insights.ts and a page at
 * src/pages/resources/insights/<slug>.astro.
 *
 * This exists because hubStudio does not use content collections. Articles are
 * hand-authored HTML inside ArticleLayout, with meta held separately in
 * insights.ts, so "publish" is a conversion step rather than a file copy. Doing
 * it by hand for 48 pieces would guarantee drift between the draft and the page.
 *
 *   node editorial/scripts/publish-draft.mjs editorial/output/<slug>.md \
 *     --category "Cost" --tone orange \
 *     --alt "Hand-written descriptive alt text." \
 *     --date 2026-09-21
 *
 * Flags:
 *   --category  card tag, e.g. Cost | Buying models | Rights | Production
 *   --tone      orange | navy
 *   --alt       REQUIRED. Alt text is written by hand, never generated. The
 *               image style guide and the project rules both require it.
 *   --date      ISO publish date. Defaults to the SCHEMA block's datePublished.
 *   --drop-link a plain-text link name to leave unwired, repeatable. Use when
 *               the target page does not exist yet. Never ship a link to a 404.
 *   --dry       print what would be written and change nothing.
 *
 * The draft's three appended comment blocks are read, not copied: FEATURE IMAGE
 * gives the hero path, SCHEMA gives the publish date, ASSET BRIEF gives the
 * internal link map. None of them reach the page.
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname).replace(/^\/([A-Za-z]:)/, '$1'), '..', '..');
const INSIGHTS = path.join(ROOT, 'src', 'data', 'insights.ts');
const PAGES = path.join(ROOT, 'src', 'pages', 'resources', 'insights');

/* ---------------------------------------------------------------- args --- */

function parseArgs(argv) {
  const out = { _: [], dropLink: [] };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (!a.startsWith('--')) { out._.push(a); continue; }
    const key = a.slice(2);
    if (key === 'dry') { out.dry = true; continue; }
    if (key === 'update') { out.update = true; continue; }
    const val = argv[++i];
    if (key === 'drop-link') out.dropLink.push(val);
    else out[key] = val;
  }
  return out;
}

/* --------------------------------------------------------------- utils --- */

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/* Astro treats braces as expressions in the template, so any literal brace in
   body copy has to be escaped or it becomes a syntax error at build time. */
const escAstro = (s) => s.replace(/\{/g, '&#123;').replace(/\}/g, '&#125;');

/* Inline markdown that survives into the page: bold only. Links are wired
   separately from the asset brief, because the house rule forbids markdown
   links in body copy. */
function inline(s) {
  return escAstro(esc(s)).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}

const quote = (s) => `'${s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;

function humanDate(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  return `${months[m - 1]} ${d}, ${y}`;
}

/* ------------------------------------------------------------- parsing --- */

function splitFrontmatter(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!m) throw new Error('No frontmatter block found');
  const fm = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^([a-zA-Z_]+):\s*(.*)$/);
    if (kv) fm[kv[1]] = kv[2].trim();
  }
  return { fm, body: m[2] };
}

/** Pulls one of the three appended comment blocks by its leading marker. */
function commentBlock(raw, marker) {
  const re = new RegExp(`<!--[\\s=]*${marker}([\\s\\S]*?)-->`);
  const m = raw.match(re);
  return m ? m[1] : '';
}

function parseInternalLinks(assetBrief) {
  const out = [];
  const seg = assetBrief.match(/INTERNAL LINKS:\s*\n([\s\S]*?)(?:\n[A-Z][A-Z ]{3,}:|\n\n|$)/);
  if (!seg) return out;
  for (const line of seg[1].split(/\r?\n/)) {
    const m = line.match(/^\s+(.+?)\s+->\s+(\S+)\s*$/);
    if (m) out.push({ name: m[1].trim(), href: m[2].trim() });
  }
  /* Longest first, so "AI image production" is not shadowed by a shorter name
     that happens to be a substring of it. */
  return out.sort((a, b) => b.name.length - a.name.length);
}

/* --------------------------------------------------------- body blocks --- */

/** Groups the body into typed blocks. Comments and the three appended blocks
    are dropped here rather than downstream. */
function blocks(body) {
  const lines = body.split(/\r?\n/);
  const out = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];

    if (/^<!--/.test(line)) {
      while (i < lines.length && !/-->/.test(lines[i])) i++;
      i++;
      continue;
    }
    if (!line.trim()) { i++; continue; }

    if (/^#\s/.test(line)) { out.push({ t: 'h1', v: line.replace(/^#\s+/, '') }); i++; continue; }
    if (/^##\s/.test(line)) { out.push({ t: 'h2', v: line.replace(/^##\s+/, '') }); i++; continue; }
    if (/^CTA:\s/.test(line)) { out.push({ t: 'cta', v: line.replace(/^CTA:\s+/, '') }); i++; continue; }

    if (/^>\s?/.test(line)) {
      const buf = [];
      while (i < lines.length && /^>\s?/.test(lines[i])) { buf.push(lines[i].replace(/^>\s?/, '')); i++; }
      out.push({ t: 'quote', v: buf });
      continue;
    }

    if (/^\|/.test(line)) {
      const buf = [];
      while (i < lines.length && /^\|/.test(lines[i])) { buf.push(lines[i]); i++; }
      out.push({ t: 'table', v: buf });
      continue;
    }

    const buf = [];
    while (i < lines.length && lines[i].trim() && !/^[#>|]/.test(lines[i]) && !/^<!--/.test(lines[i]) && !/^CTA:\s/.test(lines[i])) {
      buf.push(lines[i].trim()); i++;
    }
    out.push({ t: 'p', v: buf.join(' ') });
  }
  return out;
}

/** An evidence quote is its statement plus a Source line. The Source line can
    wrap, so everything from the first "Source:" to the end belongs to it. */
function renderQuote(lines) {
  const idx = lines.findIndex((l) => /^Source:/.test(l));
  const said = (idx === -1 ? lines : lines.slice(0, idx)).join(' ').trim();
  const src = idx === -1 ? '' : lines.slice(idx).join(' ').trim();
  const parts = [`  <blockquote class="evidence">${inline(said)}</blockquote>`];
  if (src) parts.push(`  <p class="source">${inline(src)}</p>`);
  return parts.join('\n');
}

function renderTable(rows) {
  const cells = (r) => r.replace(/^\|/, '').replace(/\|\s*$/, '').split('|').map((c) => c.trim());
  const head = cells(rows[0]);
  const bodyRows = rows.slice(2).map(cells);
  const out = ['  <div class="table-wrap">', '    <table>', '      <thead>', '        <tr>'];
  for (const h of head) {
    out.push(h ? `          <th scope="col">${inline(h)}</th>` : '          <th scope="col"></th>');
  }
  out.push('        </tr>', '      </thead>', '      <tbody>');
  for (const r of bodyRows) {
    out.push('        <tr>');
    r.forEach((c, n) => {
      out.push(n === 0
        ? `          <th scope="row">${inline(c)}</th>`
        : `          <td>${inline(c)}</td>`);
    });
    out.push('        </tr>');
  }
  out.push('      </tbody>', '    </table>', '  </div>');
  return out.join('\n');
}

/* A FAQ entry is a paragraph that is entirely bold and ends in a question
   mark. It becomes an h3 so the schema and the visible page agree. */
const isFaqQuestion = (p) => /^\*\*.+\?\*\*$/.test(p.trim());

/* ----------------------------------------------------------------- main -- */

const args = parseArgs(process.argv.slice(2));
const draftPath = args._[0];
if (!draftPath) {
  console.error('\n  usage: node editorial/scripts/publish-draft.mjs <draft.md> --category X --tone orange --alt "..."\n');
  process.exit(2);
}
if (!args.alt) {
  console.error('\n  --alt is required. Alt text is written by hand, never generated.\n');
  process.exit(2);
}
if (!['orange', 'navy'].includes(args.tone)) {
  console.error('\n  --tone must be orange or navy\n');
  process.exit(2);
}

const raw = readFileSync(draftPath, 'utf8');
const { fm, body } = splitFrontmatter(raw);
const assetBrief = commentBlock(raw, 'ASSET BRIEF');
const schema = commentBlock(raw, 'SCHEMA');
const links = parseInternalLinks(assetBrief).filter((l) => !args.dropLink.includes(l.name));

const dateISO = args.date || (schema.match(/datePublished:\s*(\d{4}-\d{2}-\d{2})/) || [])[1];
if (!dateISO) { console.error('\n  No publish date. Pass --date or add datePublished to the SCHEMA block.\n'); process.exit(2); }

const heroPath = (commentBlock(raw, 'FEATURE IMAGE').match(/Reference:\s*(\S+)/) || [])[1]
  || `/Images/insight-${fm.slug}.webp`;
if (!existsSync(path.join(ROOT, 'public', heroPath.replace(/^\//, '')))) {
  console.error(`\n  Hero image missing: public${heroPath}\n  Generate it before publishing.\n`);
  process.exit(2);
}

/* ---- body to HTML ---- */

const bs = blocks(body);
const html = [];
let ctaLabel = null;
let standfirstDone = false;
let seenH1 = false;
let inFaq = false;
let wordCount = 0;
const faq = [];

for (const b of bs) {
  if (b.t === 'h1') { seenH1 = true; continue; }
  if (b.t === 'cta') { ctaLabel = b.v; continue; }

  if (b.t === 'h2') {
    inFaq = /^Questions?\b/i.test(b.v) || /\bask\b/i.test(b.v);
    html.push(`  <h2>${inline(b.v)}</h2>`);
    continue;
  }
  if (b.t === 'quote') { html.push(renderQuote(b.v)); wordCount += b.v.join(' ').split(/\s+/).length; continue; }
  if (b.t === 'table') { html.push(renderTable(b.v)); continue; }

  wordCount += b.v.split(/\s+/).length;

  if (seenH1 && !standfirstDone) {
    standfirstDone = true;
    html.push(`  <p class="standfirst">${inline(b.v)}</p>`);
    continue;
  }
  if (inFaq && isFaqQuestion(b.v)) {
    const q = b.v.replace(/^\*\*|\*\*$/g, '');
    faq.push({ q, a: '' });
    html.push(`  <h3>${inline(q)}</h3>`);
    continue;
  }
  /* The paragraph after an FAQ question is its answer. Captured here so the
     schema and the visible copy come from one source and cannot drift. */
  if (inFaq && faq.length && !faq[faq.length - 1].a) faq[faq.length - 1].a = b.v;
  html.push(`  <p>${inline(b.v)}</p>`);
}

/* ---- wire the internal links ----
   Only inside plain body paragraphs. Never inside an evidence quote, a source
   attribution, a heading or a table: a citation that reads "published pricing
   page in this category" describes somebody else's page, and turning that
   phrase into a link to our own pricing is both wrong and misleading. */

const rx = (name) => new RegExp(`\\b${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');

/* House style gathers the internal references into one closing paragraph, so
   the paragraph mentioning the most of them is the intended anchor. Picking by
   first or last occurrence both get this wrong on pieces that discuss other
   people's pages: "the number on the pricing page" in a section about vendor
   rate cards must never link to ours. */
let best = -1, bestScore = 0;
for (let n = 0; n < html.length; n++) {
  if (!/^ {2}<p>/.test(html[n])) continue;
  const score = links.filter((l) => rx(l.name).test(html[n])).length;
  if (score > bestScore) { bestScore = score; best = n; }
}

const wired = [];
function wireInto(n, name, href) {
  const segs = html[n].split(/(<a\b[^>]*>[\s\S]*?<\/a>)/);
  for (let s = 0; s < segs.length; s++) {
    if (/^<a\b/.test(segs[s]) || !rx(name).test(segs[s])) continue;
    segs[s] = segs[s].replace(rx(name), (m) => `<a href="${href}">${m}</a>`);
    html[n] = segs.join('');
    wired.push(`${name} -> ${href}`);
    return true;
  }
  return false;
}

for (const { name, href } of links) {
  if (best >= 0 && wireInto(best, name, href)) continue;
  /* Not in the shared paragraph. Fall back to the last plain paragraph that
     names it, which is nearer the closing references than the opening argument. */
  for (let n = html.length - 1; n >= 0; n--) {
    if (!/^ {2}<p>/.test(html[n]) || n === best) continue;
    if (wireInto(n, name, href)) break;
  }
}
const unwired = links.filter((l) => !wired.some((w) => w.startsWith(`${l.name} ->`)));
const doc = html.join('\n\n');

/* ---- the page ---- */

const pagePath = path.join(PAGES, `${fm.slug}.astro`);
const usableFaq = faq.filter((f) => f.q && f.a);
const faqConst = usableFaq.length
  ? `\nconst faq = ${JSON.stringify(usableFaq, null, 2).replace(/\n/g, '\n')};\n`
  : '';
const page = `---
import ArticleLayout from '../../../layouts/ArticleLayout.astro';
${faqConst}---

<ArticleLayout slug="${fm.slug}"${ctaLabel ? ` ctaLabel="${ctaLabel}"` : ''}${usableFaq.length ? ' faq={faq}' : ''}>
${doc}
</ArticleLayout>
`;

/* ---- the insights.ts entry, inserted newest first at the head ---- */

const readingTime = `${Math.max(1, Math.round(wordCount / 200))} min read`;
const entry = `  {
    slug: ${quote(fm.slug)},
    image: ${quote(heroPath)},
    imageAlt:
      ${quote(args.alt)},
    category: ${quote(args.category || 'Production')},
    tone: ${quote(args.tone)},
    title: ${quote(fm.title)},
    deck: ${quote(fm.excerpt)},
    date: ${quote(humanDate(dateISO))},
    dateISO: ${quote(dateISO)},
    readingTime: ${quote(readingTime)},
    author: 'Cyril Drouin',
    metaTitle: ${quote(`${fm.title} | hubStudio`)},
    metaDescription:
      ${quote(fm.description)},
  },
`;

const insightsSrc = readFileSync(INSIGHTS, 'utf8');
const alreadyListed = insightsSrc.includes(`slug: '${fm.slug}'`);

/* --update rewrites the page from the current draft and leaves the insights.ts
   entry alone. Used when the conversion itself changes, so a published piece
   picks up the improvement without its publish date or card copy moving. */
if (args.update) {
  if (!alreadyListed) {
    console.error(`\n  ${fm.slug} is not in insights.ts yet. Publish it first, without --update.\n`);
    process.exit(2);
  }
  writeFileSync(pagePath, page, 'utf8');
  console.log(`  updated ${fm.slug}  (${usableFaq.length} FAQ pairs, ${wired.length} links)`);
  process.exit(0);
}

if (alreadyListed) {
  console.error(`\n  ${fm.slug} is already in insights.ts. Use --update to rewrite the page, or remove the entry to republish.\n`);
  process.exit(2);
}
/* The file is checked out with CRLF on Windows, so match the newline rather
   than assuming it. A plain string anchor silently no-ops here, which once
   wrote a page with no matching entry behind it. */
const anchor = /export const insights: Insight\[\] = \[\r?\n/;
const eol = insightsSrc.includes('\r\n') ? '\r\n' : '\n';
const nextInsights = insightsSrc.replace(anchor, (m) => m + entry.replace(/\n/g, eol));
if (nextInsights === insightsSrc) {
  console.error('\n  Could not find the insights array declaration in src/data/insights.ts.\n  Nothing was written.\n');
  process.exit(2);
}

if (args.dry) {
  console.log(`\n  DRY RUN ${fm.slug}`);
  console.log(`  page   ${path.relative(ROOT, pagePath)}  (${doc.split('\n').length} lines)`);
  console.log(`  hero   ${heroPath}`);
  console.log(`  date   ${dateISO}  ${readingTime}`);
  console.log(`  cta    ${ctaLabel || '(layout default)'}`);
  console.log(`  links  ${wired.length ? wired.join(', ') : 'none wired'}`);
  if (args.dropLink.length) console.log(`  drop   ${args.dropLink.join(', ')}`);
  process.exit(0);
}

writeFileSync(pagePath, page, 'utf8');
writeFileSync(INSIGHTS, nextInsights, 'utf8');

console.log(`  published ${fm.slug}`);
console.log(`    page  ${path.relative(ROOT, pagePath)}`);
console.log(`    hero  ${heroPath}`);
console.log(`    cta   ${ctaLabel || '(layout default)'}`);
console.log(`    links ${wired.length ? wired.join(', ') : 'none wired'}`);
if (unwired.length) console.log(`    UNWIRED ${unwired.map((l) => l.name).join(', ')}`);
if (args.dropLink.length) console.log(`    DROPPED ${args.dropLink.join(', ')}`);
