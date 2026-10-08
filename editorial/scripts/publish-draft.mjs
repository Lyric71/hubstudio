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
 *   --print     with --dry, also print the page source that would be written.
 *   --lists-only  with --update: patch only the draft's markdown lists into
 *               the live page as <ul> blocks and keep everything else on it,
 *               including fixes made after publishing. Refuses (writes
 *               nothing) if a list paragraph is not found verbatim.
 *   --template  overrides the draft's frontmatter `template` (insight | spec | howto).
 *
 * The draft's three appended comment blocks are read, not copied: FEATURE IMAGE
 * gives the hero path, SCHEMA gives the publish date, ASSET BRIEF gives the
 * internal link map. None of them reach the page.
 *
 * Templates. `insight` and `spec` publish the same way: a page under
 * src/pages/resources/insights/ and an entry at the head of insights.ts (a spec
 * page is an insight with `--category "Platform specs"`). `howto` publishes a
 * guide instead: src/pages/resources/how-to/<slug>.astro on HowtoLayout and an
 * entry at the head of src/data/howtos.ts, hero /Images/howto-<slug>.webp
 * (the FEATURE IMAGE Reference wins when it names another file, with a
 * warning), `--category` required (how-to tags are topical, there is no
 * sensible default).
 *
 * Every template converts markdown lists:
 *   - item / 1. item           <ul><li> (ordered lists become bullets: neither
 *                              layout styles <ol>, and the house rule bans
 *                              numerals in step lists); a checkbox "[ ]" is
 *                              dropped from the item text; a switch between
 *                              bullets and numbers starts a new list
 *
 * How-to bodies accept more markdown, mapped onto the elements HowtoLayout
 * styles:
 *   ```prompt Label            <div class="prompt"> with .prompt__label (the
 *   ...                        words after "prompt", default "Prompt example")
 *   ```                        and one .prompt__body per paragraph
 *   **Prompt example:**        a paragraph that is only a bold label naming a
 *   ```...```                  prompt, directly followed by a fenced block,
 *                              labels that block; any other fenced block is
 *                              refused, because the layout has no code style
 *   ![alt](/Images/x.webp "Caption")   <figure><img><figcaption>; a line right
 *                              under the image (no blank line) is also read as
 *                              its caption. The file must exist under public/.
 *   :::callout ... :::         <div class="callout">, paragraphs and lists
 *   > [!NOTE] ...              the same callout, GitHub alert syntax
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { findMarkers } from '../../scripts/check-content-todo.mjs';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname).replace(/^\/([A-Za-z]:)/, '$1'), '..', '..');
const INSIGHTS = path.join(ROOT, 'src', 'data', 'insights.ts');
const PAGES = path.join(ROOT, 'src', 'pages', 'resources', 'insights');
const HOWTOS = path.join(ROOT, 'src', 'data', 'howtos.ts');
const HOWTO_PAGES = path.join(ROOT, 'src', 'pages', 'resources', 'how-to');

/* ---------------------------------------------------------------- args --- */

function parseArgs(argv) {
  const out = { _: [], dropLink: [] };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (!a.startsWith('--')) { out._.push(a); continue; }
    const key = a.slice(2);
    if (key === 'dry') { out.dry = true; continue; }
    if (key === 'update') { out.update = true; continue; }
    if (key === 'print') { out.print = true; continue; }
    if (key === 'lists-only') { out.listsOnly = true; continue; }
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
    if (!kv) continue;
    /* YAML allows a quoted value; the quotes are syntax, not copy. */
    const v = kv[2].trim();
    const q = v.match(/^(["'])([\s\S]*)\1$/);
    fm[kv[1]] = q ? q[2] : v;
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
  /* Ends at the next block label (FIRST-PARTY FIGURES:), not at a blank line:
     wave-two drafts sometimes leave one inside the list. */
  const seg = assetBrief.match(/INTERNAL LINKS:\s*\n([\s\S]*?)(?:\n\s*[A-Z][A-Z -]{3,}:|$)/);
  if (!seg) return out;
  for (const line of seg[1].split(/\r?\n/)) {
    const m = line.match(/^\s*(.+?)\s+->\s+(\S+)\s*$/);
    if (m) out.push({ name: m[1].trim(), href: m[2].trim() });
  }
  /* Longest first, so "AI image production" is not shadowed by a shorter name
     that happens to be a substring of it. */
  return out.sort((a, b) => b.name.length - a.name.length);
}

/* --------------------------------------------------------- body blocks --- */

/* How-to only block starts. The insight conversion does not look for them, so
   an insight draft renders exactly as it always has. */
const LIST_RE = /^\s{0,3}(?:[-*+]|\d{1,2}[.)])\s+/;
const FENCE_RE = /^\s{0,3}(`{3,}|~{3,})\s*(.*)$/;
const IMG_RE = /^!\[([^\]]*)\]\(\s*(\S+?)(?:\s+"([^"]*)")?\s*\)\s*$/;
const CALLOUT_RE = /^:::\s*callout\b/i;
const ALERT_RE = /^>\s*\[!(\w+)\]\s*(.*)$/;
/* Inside a paragraph only a bullet or "1." starts a list (the CommonMark
   rule), so a hard-wrapped line that happens to begin "85. Every one" stays
   part of its sentence. */
const LIST_INTERRUPT_RE = /^\s{0,3}(?:[-*+]|1[.)])\s+/;
const howtoStart = (l) => LIST_INTERRUPT_RE.test(l) || FENCE_RE.test(l) || IMG_RE.test(l.trim()) || /^:::/.test(l);

/** Groups the body into typed blocks. Comments and the three appended blocks
    are dropped here rather than downstream. `opts.lists` turns on markdown
    lists (every template); `opts.howto` adds fenced prompt blocks, figures
    and callouts. */
function blocks(body, opts = {}) {
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

    if (opts.howto) {
      const fence = line.match(FENCE_RE);
      if (fence) {
        const close = new RegExp(`^\\s{0,3}${fence[1][0] === '`' ? '`' : '~'}{${fence[1].length},}\\s*$`);
        const buf = [];
        const at = i + 1;
        i++;
        while (i < lines.length && !close.test(lines[i])) { buf.push(lines[i]); i++; }
        i++;
        out.push({ t: 'code', info: fence[2].trim(), v: buf, line: at });
        continue;
      }
      if (CALLOUT_RE.test(line)) {
        const buf = [];
        i++;
        while (i < lines.length && !/^:::\s*$/.test(lines[i])) { buf.push(lines[i]); i++; }
        i++;
        out.push({ t: 'callout', v: blocks(buf.join('\n'), opts) });
        continue;
      }
      if (ALERT_RE.test(line)) {
        const buf = [line.match(ALERT_RE)[2]];
        i++;
        while (i < lines.length && /^>\s?/.test(lines[i])) { buf.push(lines[i].replace(/^>\s?/, '')); i++; }
        out.push({ t: 'callout', v: blocks(buf.join('\n'), opts) });
        continue;
      }
      const img = line.trim().match(IMG_RE);
      if (img) {
        let caption = img[3] || '';
        i++;
        /* A line directly under the image, with no blank line between, is its
           caption, wrapped in emphasis or not. */
        if (!caption && i < lines.length && lines[i].trim() && !howtoStart(lines[i]) && !/^[#>|]|^<!--|^CTA:\s/.test(lines[i])) {
          caption = lines[i].trim().replace(/^([*_])(.+)\1$/, '$2');
          i++;
        }
        out.push({ t: 'img', alt: img[1], src: img[2], caption });
        continue;
      }
    }

    if (opts.lists) {
      if (LIST_RE.test(line)) {
        const items = [];
        /* A switch between bullets and numbers starts a new list, as in
           CommonMark, even though both render as bullets. */
        const kind = (l) => (/^\s*\d/.test(l) ? 'ol' : 'ul');
        const first = kind(line);
        while (i < lines.length) {
          if (LIST_RE.test(lines[i]) && kind(lines[i]) !== first) break;
          if (LIST_RE.test(lines[i])) {
            items.push(lines[i].replace(LIST_RE, '').replace(/^\[[ xX]\]\s+/, '').trim());
            i++;
          } else if (lines[i].trim() && /^\s{2,}\S/.test(lines[i]) && items.length) {
            items[items.length - 1] += ` ${lines[i].trim()}`;
            i++;
          } else if (!lines[i].trim()) {
            /* A blank line ends the list unless the next item follows it. */
            let j = i;
            while (j < lines.length && !lines[j].trim()) j++;
            if (j < lines.length && LIST_RE.test(lines[j])) { i = j; continue; }
            break;
          } else break;
        }
        out.push({ t: 'list', v: items });
        continue;
      }
    }

    if (/^#\s/.test(line)) { out.push({ t: 'h1', v: line.replace(/^#\s+/, '') }); i++; continue; }
    if (/^##\s/.test(line)) { out.push({ t: 'h2', v: line.replace(/^##\s+/, '') }); i++; continue; }
    /* Later drafts write FAQ questions as ### headings rather than bold lines. */
    if (/^###\s/.test(line)) { out.push({ t: 'h3', v: line.replace(/^###\s+/, '') }); i++; continue; }
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
    while (i < lines.length && lines[i].trim() && !/^[#>|]/.test(lines[i]) && !/^<!--/.test(lines[i]) && !/^CTA:\s/.test(lines[i])
      && !(opts.howto && buf.length && howtoStart(lines[i]))
      && !(opts.lists && buf.length && LIST_INTERRUPT_RE.test(lines[i]))) {
      buf.push(lines[i].trim()); i++;
    }
    /* A line no branch above recognizes (a #### heading, say) would otherwise
       never advance the cursor, and the loop would run until the heap is gone. */
    if (!buf.length) { buf.push(lines[i].trim()); i++; }
    out.push({ t: 'p', v: buf.join(' ') });
  }
  return out;
}

/** An evidence quote is its statement plus its attribution. House style puts
    "Source:" at the start of its own line and lets it wrap, but the earliest
    drafts run it on mid-sentence. Split on the word either way: a quote whose
    attribution stays inside the blockquote renders as display serif rather
    than as a source line, which is silently wrong rather than broken. */
function renderQuote(lines) {
  const joined = lines.join(' ').replace(/\s+/g, ' ').trim();
  const at = joined.search(/\bSource:/);
  const said = (at === -1 ? joined : joined.slice(0, at)).trim();
  const src = at === -1 ? '' : joined.slice(at).trim();
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

/* No TODO leaves a run (editorial/CLAUDE.md). A draft carrying a marker, in
   the body or in an appended block, has an item still open, so it does not
   publish. Close the item, then run this again. */
const markers = findMarkers(raw);
if (markers.length) {
  console.error('\n  Refusing to publish: the draft carries a TODO-style marker.\n');
  for (const m of markers) console.error(`  line ${m.line}: ${m.text}`);
  console.error('\n  Close each item in this run, or set the row to blocked. See "No TODO leaves a run".\n');
  process.exit(2);
}

const { fm, body } = splitFrontmatter(raw);
const assetBrief = commentBlock(raw, 'ASSET BRIEF');
const schema = commentBlock(raw, 'SCHEMA');
const links = parseInternalLinks(assetBrief).filter((l) => !args.dropLink.includes(l.name));

/* insight and spec publish identically (a spec is an insight with its
   category); only howto takes the guide path. */
const template = (args.template || fm.template || 'insight').trim().toLowerCase();
if (!['insight', 'spec', 'howto'].includes(template)) {
  console.error(`\n  Unknown template "${template}". Use insight, spec or howto.\n`);
  process.exit(2);
}
const isHowto = template === 'howto';
if (isHowto && !args.category) {
  console.error('\n  --category is required for a how-to (the card tag, e.g. "Image generation").\n');
  process.exit(2);
}

const dateISO = args.date || (schema.match(/datePublished:\s*(\d{4}-\d{2}-\d{2})/) || [])[1];
if (!dateISO) { console.error('\n  No publish date. Pass --date or add datePublished to the SCHEMA block.\n'); process.exit(2); }

const defaultHero = isHowto ? `/Images/howto-${fm.slug}.webp` : `/Images/insight-${fm.slug}.webp`;
const heroPath = (commentBlock(raw, 'FEATURE IMAGE').match(/Reference:\s*(\S+)/) || [])[1]
  || defaultHero;
if (isHowto && heroPath !== defaultHero) {
  console.warn(`\n  note: FEATURE IMAGE Reference is ${heroPath}; how-to heroes are ${defaultHero} by convention.`);
}
if (!existsSync(path.join(ROOT, 'public', heroPath.replace(/^\//, '')))) {
  console.error(`\n  Hero image missing: public${heroPath}\n  Generate it before publishing.\n`);
  process.exit(2);
}

/* ---- how-to only renderers ---- */

const escAttr = (s) => escAstro(esc(s)).replace(/"/g, '&quot;');

/* A paragraph that is only a label naming a prompt ("**Prompt example:**",
   "Prompt:"), directly above a fenced block, labels that block. */
function promptLabel(p) {
  const m = p.trim().match(/^\*\*([^*]+?):?\*\*:?$/) || p.trim().match(/^([^.!?]{1,60}):$/);
  return m && /\bprompts?\b/i.test(m[1]) ? m[1].trim() : null;
}

/* Prompt text is hard-wrapped in the draft like the rest of the body, so lines
   are joined with spaces, except where a line starts a field ("Light: ...") or
   a list item, which keeps its own line. Blank lines start a new body. */
function renderPrompt(label, lines) {
  const paras = lines.join('\n').split(/\n\s*\n/).map((chunk) => chunk.split('\n').map((l) => l.trim()).filter(Boolean));
  const bodies = paras.filter((p) => p.length).map((p) => {
    let s = inline(p[0]);
    for (const l of p.slice(1)) {
      s += /^([-*+]\s|[A-Z][\w /&()-]{0,30}:\s)/.test(l) ? `<br />${inline(l)}` : ` ${inline(l)}`;
    }
    return `    <p class="prompt__body">${s}</p>`;
  });
  return ['  <div class="prompt">', `    <p class="prompt__label">${inline(label)}</p>`, ...bodies, '  </div>'].join('\n');
}

function renderList(items, indent = '  ') {
  return [`${indent}<ul>`, ...items.map((t) => `${indent}  <li>${inline(t)}</li>`), `${indent}</ul>`].join('\n');
}

let sharp = null;
try { sharp = (await import('sharp')).default; } catch { /* dimensions are optional */ }

const missingAssets = [];
async function renderFigure(b) {
  if (!b.src.startsWith('/')) {
    missingAssets.push(`${b.src} (not a site path: self-host the file under public/)`);
  }
  const file = path.join(ROOT, 'public', b.src.replace(/^\//, ''));
  let dims = '';
  if (!existsSync(file)) missingAssets.push(`public${b.src}`);
  else if (sharp) {
    try {
      const meta = await sharp(file).metadata();
      if (meta.width && meta.height) dims = ` width="${meta.width}" height="${meta.height}"`;
    } catch { /* leave the size to CSS */ }
  }
  const out = ['  <figure>', `    <img src="${escAttr(b.src)}" alt="${escAttr(b.alt)}"${dims} loading="lazy" decoding="async" />`];
  if (b.caption) out.push(`    <figcaption>${inline(b.caption)}</figcaption>`);
  out.push('  </figure>');
  return out.join('\n');
}

const refusedBlocks = [];
function renderCallout(inner) {
  const out = ['  <div class="callout">'];
  for (const c of inner) {
    if (c.t === 'p') out.push(`    <p>${inline(c.v)}</p>`);
    else if (c.t === 'list') out.push(renderList(c.v, '    '));
    else if (c.t === 'h3') out.push(`    <h3>${inline(c.v)}</h3>`);
    else refusedBlocks.push(`a ${c.t} block inside a callout (callouts hold paragraphs, lists and h3 only)`);
  }
  out.push('  </div>');
  return out.join('\n');
}

/* ---- body to HTML ----
   One function so --lists-only can render the page twice, with and without
   list conversion, and patch only the difference into a live page. */

async function render(listsOn) {
const bs = blocks(body, { howto: isHowto, lists: listsOn });
const html = [];
let ctaLabel = null;
let standfirstDone = false;
let seenH1 = false;
let inFaq = false;
let wordCount = 0;
const faq = [];
let pendingPromptLabel = null;

for (let k = 0; k < bs.length; k++) {
  const b = bs[k];
  if (b.t === 'h1') { seenH1 = true; continue; }
  if (b.t === 'cta') { ctaLabel = b.v; continue; }

  if (isHowto) {
    if (b.t === 'p' && bs[k + 1] && bs[k + 1].t === 'code' && promptLabel(b.v)) {
      pendingPromptLabel = promptLabel(b.v);
      continue;
    }
    if (b.t === 'code') {
      const info = b.info.match(/^prompt\b\s*(.*)$/i);
      const label = (info && info[1].trim()) || pendingPromptLabel || (info ? 'Prompt example' : null);
      pendingPromptLabel = null;
      if (!label) {
        const fileLine = b.line + raw.slice(0, raw.length - body.length).split(/\r?\n/).length - 1;
        refusedBlocks.push(`fenced block at line ${fileLine} is not labeled as a prompt (use \`\`\`prompt, or a "**Prompt example:**" line above it)`);
        continue;
      }
      html.push(renderPrompt(label, b.v));
      wordCount += b.v.join(' ').split(/\s+/).filter(Boolean).length;
      continue;
    }
    if (b.t === 'img') { html.push(await renderFigure(b)); continue; }
    if (b.t === 'callout') {
      html.push(renderCallout(b.v));
      wordCount += b.v.map((c) => (Array.isArray(c.v) ? c.v.join(' ') : String(c.v || ''))).join(' ').split(/\s+/).length;
      continue;
    }
  }

  /* Lists, every template. Numbered lists render as bullets too: neither
     layout styles <ol>, and the house rule bans numerals in step lists. */
  if (b.t === 'list') {
    html.push(renderList(b.v));
    wordCount += b.v.join(' ').split(/\s+/).length;
    continue;
  }

  if (b.t === 'h2') {
    inFaq = /^Questions?\b/i.test(b.v) || /\bask\b/i.test(b.v) || /^(FAQ|Frequently asked)\b/i.test(b.v);
    html.push(`  <h2>${inline(b.v)}</h2>`);
    continue;
  }
  if (b.t === 'h3') {
    if (inFaq && /\?$/.test(b.v.trim())) faq.push({ q: b.v.trim(), a: '' });
    html.push(`  <h3>${inline(b.v)}</h3>`);
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
/* Bullet lists carry references too (a checklist naming the page to read
   next), so they are wiring targets like plain paragraphs. */
const wireable = (h) => /^ {2}<p>/.test(h) || /^ {2}<ul>/.test(h);

let best = -1, bestScore = 0;
for (let n = 0; n < html.length; n++) {
  if (!wireable(html[n])) continue;
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
    if (!wireable(html[n]) || n === best) continue;
    if (wireInto(n, name, href)) break;
  }
}
const unwired = links.filter((l) => !wired.some((w) => w.startsWith(`${l.name} ->`)));
return { html, ctaLabel, wordCount, faq, wired, unwired };
}

const { html, ctaLabel, wordCount, faq, wired, unwired } = await render(true);
const doc = html.join('\n\n');

/* A how-to body the layout cannot style, or a figure whose file is not on
   disk, never ships: a broken image or a raw code block on a live guide is
   worse than a run that stops here. */
if (refusedBlocks.length || missingAssets.length) {
  console.error('\n  Refusing to publish this how-to:');
  for (const r of refusedBlocks) console.error(`    ${r}`);
  for (const m of missingAssets) console.error(`    figure file missing: ${m}`);
  console.error('');
  process.exit(2);
}

/* ---- the page ---- */

const layout = isHowto ? 'HowtoLayout' : 'ArticleLayout';
const pagePath = path.join(isHowto ? HOWTO_PAGES : PAGES, `${fm.slug}.astro`);
const usableFaq = faq.filter((f) => f.q && f.a);
const faqConst = usableFaq.length
  ? `\nconst faq = ${JSON.stringify(usableFaq, null, 2).replace(/\n/g, '\n')};\n`
  : '';
const page = `---
import ${layout} from '../../../layouts/${layout}.astro';
${faqConst}---

<${layout} slug="${fm.slug}"${ctaLabel ? ` ctaLabel="${ctaLabel}"` : ''}${usableFaq.length ? ' faq={faq}' : ''}>
${doc}
</${layout}>
`;

/* ---- the data entry (insights.ts or howtos.ts), inserted newest first ---- */

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

const DATA = isHowto ? HOWTOS : INSIGHTS;
const dataName = path.basename(DATA);
const insightsSrc = readFileSync(DATA, 'utf8');
const alreadyListed = insightsSrc.includes(`slug: '${fm.slug}'`);

/* --update rewrites the page from the current draft and leaves the data
   entry alone. Used when the conversion itself changes, so a published piece
   picks up the improvement without its publish date or card copy moving. */
/* --update --lists-only patches a live page with its list blocks and nothing
   else. A live page can carry fixes made after publishing (a repaired link, a
   retired name removed) that its draft does not, and a plain --update would
   overwrite them. The page is rendered twice, without and with list
   conversion; each changed run of blocks must appear verbatim in the live
   page and differ only in markup, or nothing is written. */
function diffBlocks(a, b) {
  const L = Array.from({ length: a.length + 1 }, () => new Array(b.length + 1).fill(0));
  for (let i = a.length - 1; i >= 0; i--) {
    for (let j = b.length - 1; j >= 0; j--) {
      L[i][j] = a[i] === b[j] ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
    }
  }
  const hunks = [];
  let i = 0, j = 0, cur = null;
  const flush = () => { if (cur) { hunks.push(cur); cur = null; } };
  while (i < a.length || j < b.length) {
    if (i < a.length && j < b.length && a[i] === b[j]) { flush(); i++; j++; continue; }
    cur = cur || { old: [], next: [] };
    if (j < b.length && (i >= a.length || L[i][j + 1] >= L[i + 1][j])) cur.next.push(b[j++]);
    else cur.old.push(a[i++]);
  }
  flush();
  return hunks;
}

if (args.listsOnly) {
  if (!args.update) {
    console.error('\n  --lists-only works with --update on a page already published.\n');
    process.exit(2);
  }
  if (!existsSync(pagePath)) {
    console.error(`\n  ${path.relative(ROOT, pagePath)} does not exist. Publish it first.\n`);
    process.exit(2);
  }
  const hunks = diffBlocks((await render(false)).html, html);
  if (!hunks.length) {
    console.log(`  ${fm.slug}: no markdown list in the draft, page left alone`);
    process.exit(0);
  }
  const liveRaw = readFileSync(pagePath, 'utf8');
  let live = liveRaw.replace(/\r\n/g, '\n');
  const textOf = (s) => s.replace(/<[^>]+>/g, ' ').replace(/(^|\s)(?:[-*+]|\d{1,2}[.)])(?=\s)/g, ' ').replace(/\s+/g, ' ').trim();
  const refused = [];
  for (const h of hunks) {
    const before = h.old.join('\n\n');
    const after = h.next.join('\n\n');
    if (!before || textOf(before) !== textOf(after)) {
      refused.push(`a change that is not only list markup: ${(before || after).slice(0, 100)}`);
      continue;
    }
    const found = live.split(before).length - 1;
    if (found !== 1) {
      refused.push(`list paragraph found ${found} times in the live page (hand-edited?): ${before.slice(0, 100)}`);
      continue;
    }
    live = live.replace(before, () => after);
  }
  if (refused.length) {
    console.error(`\n  ${fm.slug}: nothing written.`);
    for (const r of refused) console.error(`    ${r}`);
    console.error('');
    process.exit(2);
  }
  const items = hunks.reduce((n, h) => n + h.next.join('').split('<li>').length - 1, 0);
  const out = liveRaw.includes('\r\n') ? live.replace(/\n/g, '\r\n') : live;
  if (args.dry) {
    console.log(`  DRY RUN --lists-only ${fm.slug}: ${hunks.length} list block(s), ${items} items, rest of the live page kept`);
    if (args.print) for (const h of hunks) console.log(`\n----- was -----\n${h.old.join('\n\n')}\n----- becomes -----\n${h.next.join('\n\n')}`);
    process.exit(0);
  }
  writeFileSync(pagePath, out, 'utf8');
  console.log(`  lists ${fm.slug}: ${hunks.length} list block(s), ${items} items, rest of the live page kept`);
  process.exit(0);
}

if (args.update) {
  if (!alreadyListed) {
    console.error(`\n  ${fm.slug} is not in ${dataName} yet. Publish it first, without --update.\n`);
    process.exit(2);
  }
  if (args.dry) {
    console.log(`\n  DRY RUN --update ${fm.slug}: would rewrite ${path.relative(ROOT, pagePath)}`);
    if (args.print) console.log(`\n${page}`);
    process.exit(0);
  }
  writeFileSync(pagePath, page, 'utf8');
  console.log(`  updated ${fm.slug}  (${usableFaq.length} FAQ pairs, ${wired.length} links)`);
  process.exit(0);
}

if (alreadyListed) {
  console.error(`\n  ${fm.slug} is already in ${dataName}. Use --update to rewrite the page, or remove the entry to republish.\n`);
  process.exit(2);
}
/* The file is checked out with CRLF on Windows, so match the newline rather
   than assuming it. A plain string anchor silently no-ops here, which once
   wrote a page with no matching entry behind it. */
const anchor = isHowto
  ? /export const howtos: Howto\[\] = \[\r?\n/
  : /export const insights: Insight\[\] = \[\r?\n/;
const eol = insightsSrc.includes('\r\n') ? '\r\n' : '\n';
const nextInsights = insightsSrc.replace(anchor, (m) => m + entry.replace(/\n/g, eol));
if (nextInsights === insightsSrc) {
  console.error(`\n  Could not find the ${isHowto ? 'howtos' : 'insights'} array declaration in src/data/${dataName}.\n  Nothing was written.\n`);
  process.exit(2);
}

if (args.dry) {
  console.log(`\n  DRY RUN ${fm.slug}  (template ${template})`);
  console.log(`  page   ${path.relative(ROOT, pagePath)}  (${doc.split('\n').length} lines)`);
  console.log(`  data   ${path.relative(ROOT, DATA)}, entry at the head`);
  console.log(`  hero   ${heroPath}`);
  console.log(`  date   ${dateISO}  ${readingTime}`);
  console.log(`  cta    ${ctaLabel || '(layout default)'}`);
  console.log(`  faq    ${usableFaq.length} pairs`);
  console.log(`  links  ${wired.length ? wired.join(', ') : 'none wired'}`);
  if (unwired.length) console.log(`  UNWIRED ${unwired.map((l) => l.name).join(', ')}`);
  if (args.dropLink.length) console.log(`  drop   ${args.dropLink.join(', ')}`);
  if (args.print) console.log(`\n----- entry -----\n${entry}\n----- page -----\n${page}`);
  process.exit(0);
}

writeFileSync(pagePath, page, 'utf8');
writeFileSync(DATA, nextInsights, 'utf8');

console.log(`  published ${fm.slug}`);
console.log(`    page  ${path.relative(ROOT, pagePath)}`);
console.log(`    hero  ${heroPath}`);
console.log(`    cta   ${ctaLabel || '(layout default)'}`);
console.log(`    links ${wired.length ? wired.join(', ') : 'none wired'}`);
if (unwired.length) console.log(`    UNWIRED ${unwired.map((l) => l.name).join(', ')}`);
if (args.dropLink.length) console.log(`    DROPPED ${args.dropLink.join(', ')}`);
