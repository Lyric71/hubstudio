#!/usr/bin/env node
/**
 * Publish notification for the editorial pipeline. Sends one email through
 * Resend (the same provider the contact form uses) when an article has been
 * published. No npm dependencies: native fetch, Node 18+.
 *
 * Run from the repo root:
 *
 *   node editorial/scripts/notify-publish.mjs --slug <slug> --title "<title>"
 *        [--to <email>] [--image /Images/insight-<slug>.webp]
 *        [--build passed|failed] [--log editorial/logs/YYYY-MM-DD.md]
 *        [--note "<text>"] [--dry-run]
 *
 * There is no TODO or open items section, by rule (editorial/CLAUDE.md, "No
 * TODO leaves a run"): a run closes every item before it publishes, or the row
 * is blocked and does not publish. The script refuses to send when --todo is
 * passed, or when --title or --note carries a TODO, FIXME or TBD marker or an
 * "open items" list, and exits 2 without sending. On --build failed the note
 * is the error and may quote the marker that failed the build, so only the
 * title is checked.
 *
 * The live URL is derived from the article page that exists for the slug:
 * src/pages/resources/insights/<slug>.astro -> /resources/insights/<slug>, or
 * src/pages/resources/how-to/<slug>.astro -> /resources/how-to/<slug> for a guide.
 * Every article also ships in French and Chinese (editorial/CLAUDE.md, step
 * 4b): the French URL comes from the article's line in the ARTICLES map of
 * src/i18n/routes.ts, the Chinese one is /zh + the English path, and the
 * email shows how many entries each language's dictionary holds, so a
 * missing translation is visible.
 *
 * RESEND_API_KEY and CONTACT_TO_EMAIL are read from .env.local / .env in the
 * current directory, or from the environment.
 */

import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';

const SITE = 'https://www.hubstudio.ai';
const FALLBACK_TO = 'cyril.drouin@outlook.com';
const FROM = 'hubStudio <onboarding@resend.dev>';

function loadEnv() {
  for (const file of ['.env.local', '.env']) {
    if (!existsSync(file)) continue;
    for (const line of readFileSync(file, 'utf8').split(/\r?\n/)) {
      const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/);
      if (!m || process.env[m[1]]) continue;
      process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
    }
  }
}

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (!a.startsWith('--')) continue;
    const key = a.slice(2);
    if (key === 'dry-run') { out.dryRun = true; continue; }
    const val = argv[i + 1];
    if (val === undefined || val.startsWith('--')) { out[key] = true; continue; }
    out[key] = val;
    i++;
  }
  return out;
}

/**
 * Insights live under /resources/insights, how-to and engine guides (template
 * howto) under /resources/how-to. The kind is read from the page on disk, so
 * the same command serves both.
 */
const KINDS = {
  insight: { dir: 'insights', fr: 'analyses', map: 'ARTICLES', register: 'insights.ts', hero: 'insight' },
  howto: { dir: 'how-to', fr: 'guides-pratiques', map: 'HOWTOS', register: 'howtos.ts', hero: 'howto' },
};
function kindOf(slug) {
  for (const [key, kind] of Object.entries(KINDS)) {
    if (existsSync(path.join('src', 'pages', 'resources', kind.dir, `${slug}.astro`))) return key;
  }
  return 'insight';
}
let kind = KINDS.insight;

/** The article page has to exist before we claim a URL for it. */
function liveUrl(slug) {
  const page = path.join('src', 'pages', 'resources', kind.dir, `${slug}.astro`);
  return existsSync(page) ? `${SITE}/resources/${kind.dir}/${slug}` : null;
}

/** The article's French slug, from the ARTICLES (or HOWTOS) map of src/i18n/routes.ts. */
function frenchSlug(slug) {
  const file = path.join('src', 'i18n', 'routes.ts');
  if (!existsSync(file)) return null;
  const src = readFileSync(file, 'utf8');
  const start = src.indexOf(`const ${kind.map}`);
  if (start < 0) return null;
  const block = src.slice(start, src.indexOf('};', start));
  if (!/^[a-z0-9-]+$/.test(slug)) return null;
  const m = new RegExp(`(?:'${slug}'|(?<![\\w-])${slug}(?![\\w-]))\\s*:\\s*'([a-z0-9-]+)'`).exec(block);
  return m ? m[1] : null;
}

/** Entries of the article's dictionary in one language, empty ones counted. */
function dictStatus(locale, slug) {
  const file = path.join('src', 'i18n', 'dict', locale, 'pages', 'resources', kind.dir, `${slug}.json`);
  if (!existsSync(file)) return 'NO dictionary';
  const dict = JSON.parse(readFileSync(file, 'utf8'));
  const total = Object.keys(dict).length;
  const empty = Object.values(dict).filter((v) => !v).length;
  return empty ? `${total} entries, ${empty} EMPTY` : `${total} entries`;
}

/** Confirm the slug actually landed in its register, not just on disk. */
function inRegister(slug) {
  const file = path.join('src', 'data', kind.register);
  if (!existsSync(file)) return false;
  return readFileSync(file, 'utf8').includes(`slug: '${slug}'`);
}

/** A publish email never carries an open item. Refuse rather than send one. */
const OPEN_ITEM = /\b(TODO|FIXME|TBD|TKTK)\b|\bopen items?\b|\bfor a person\b|\bdecisions? for you\b/i;
function refuseOpenItems(args) {
  const problems = [];
  if (args.todo !== undefined) problems.push('--todo is not an option: close the item in the run, or block the row');
  // A failed build reports its error, which may quote the marker that failed it.
  const keys = args.build === 'failed' ? ['title'] : ['title', 'note'];
  for (const key of keys) {
    if (typeof args[key] === 'string' && OPEN_ITEM.test(args[key])) problems.push(`--${key} carries an open item: "${args[key]}"`);
  }
  if (problems.length) {
    console.error('Refusing to send. A publish email has no TODO or open items section.');
    for (const p of problems) console.error(`  ${p}`);
    console.error('See "No TODO leaves a run" in editorial/CLAUDE.md.');
    process.exit(2);
  }
}

function esc(s) {
  return String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

async function main() {
  loadEnv();
  const args = parseArgs(process.argv.slice(2));
  if (!args.slug || !args.title) {
    console.error('Usage: node editorial/scripts/notify-publish.mjs --slug <slug> --title "<title>" [options]');
    process.exit(2);
  }
  refuseOpenItems(args);
  const to = args.to || process.env.CONTACT_TO_EMAIL || FALLBACK_TO;
  kind = KINDS[kindOf(args.slug)];
  const url = liveUrl(args.slug);
  const fr = frenchSlug(args.slug);
  const frUrl = url && fr ? `${SITE}/fr/ressources/${kind.fr}/${fr}` : null;
  const zhUrl = url ? `${SITE}/zh/resources/${kind.dir}/${args.slug}` : null;
  const registered = inRegister(args.slug);
  const image = args.image || `/Images/${kind.hero}-${args.slug}.webp`;
  const imageOnDisk = existsSync(path.join('public', image.replace(/^\//, '')));
  const when = new Date().toLocaleString('en-US', { timeZone: 'Asia/Shanghai', hour12: false });

  const rows = [
    ['Slug', args.slug],
    ['Time (Shanghai)', when],
    ['Live URL', url || 'no article page found for this slug'],
    ['French URL', frUrl || 'NO French address in src/i18n/routes.ts'],
    ['Chinese URL', zhUrl || 'no article page found for this slug'],
    ['Translations', `French ${dictStatus('fr', args.slug)}; Chinese ${dictStatus('zh', args.slug)}`],
    [`In ${kind.register}`, registered ? 'yes' : 'NO, the register entry is missing'],
    ['Hero image', `${image}${imageOnDisk ? '' : '  (NOT FOUND on disk)'}`],
    ['Build', args.build || 'not reported'],
    ['Run log', args.log || 'not reported'],
  ];

  const lines = [
    `Published: ${args.title}`,
    '',
    ...rows.map(([k, v]) => `${k}: ${v}`),
  ];
  if (args.note) lines.push('', `Note: ${args.note}`);
  const text = lines.join('\n');

  const cell = 'padding:8px 0;border-bottom:0.5px solid #E5E1DA;';
  const html = `
<div style="font-family:-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#FFFFFF;color:#141414;">
  <p style="font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#C2410C;margin:0 0 8px;">Editorial system</p>
  <h1 style="font-size:22px;font-weight:600;line-height:1.25;margin:0 0 24px;">Published: ${esc(args.title)}</h1>
  <table style="width:100%;border-collapse:collapse;font-size:14px;">
    ${rows.map(([k, v]) => `<tr><td style="${cell}color:#5C5750;width:140px;">${esc(k)}</td><td style="${cell}">${
      /^(Live|French|Chinese) URL$/.test(k) && /^https:/.test(v) ? `<a href="${esc(v)}" style="color:#C2410C;text-decoration:none;">${esc(v)}</a>` : esc(v)
    }</td></tr>`).join('')}
  </table>
  ${args.note ? `<p style="font-size:14px;line-height:1.6;margin:24px 0 0;">${esc(args.note)}</p>` : ''}
</div>`;

  const payload = { from: FROM, to: [to], subject: `Published: ${args.title}`, text, html };

  if (args.dryRun) {
    console.log(text);
    console.log(`\n[dry run] would send to ${to}`);
    return;
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.error('RESEND_API_KEY missing. Add it to .env at the repo root.');
    process.exit(1);
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    console.error(`Resend error ${res.status}: ${JSON.stringify(data)}`);
    process.exit(1);
  }
  console.log(`Sent to ${to} (id ${data.id || 'n/a'})`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
