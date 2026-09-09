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
 *        [--todo "<text>"]... [--note "<text>"] [--dry-run]
 *
 * The live URL is derived from the article page that exists for the slug:
 * src/pages/resources/insights/<slug>.astro -> /resources/insights/<slug>.
 * Insights are English only on this repo, so there is one URL per article.
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
  const out = { todo: [] };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (!a.startsWith('--')) continue;
    const key = a.slice(2);
    if (key === 'dry-run') { out.dryRun = true; continue; }
    const val = argv[i + 1];
    if (val === undefined || val.startsWith('--')) { out[key] = true; continue; }
    if (key === 'todo') out.todo.push(val); else out[key] = val;
    i++;
  }
  return out;
}

/** The article page has to exist before we claim a URL for it. */
function liveUrl(slug) {
  const page = path.join('src', 'pages', 'resources', 'insights', `${slug}.astro`);
  return existsSync(page) ? `${SITE}/resources/insights/${slug}` : null;
}

/** Confirm the slug actually landed in the insights register, not just on disk. */
function inRegister(slug) {
  const file = path.join('src', 'data', 'insights.ts');
  if (!existsSync(file)) return false;
  return readFileSync(file, 'utf8').includes(`slug: '${slug}'`);
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
  const to = args.to || process.env.CONTACT_TO_EMAIL || FALLBACK_TO;
  const url = liveUrl(args.slug);
  const registered = inRegister(args.slug);
  const image = args.image || `/Images/insight-${args.slug}.webp`;
  const imageOnDisk = existsSync(path.join('public', 'Images', `insight-${args.slug}.webp`));
  const when = new Date().toLocaleString('en-US', { timeZone: 'Asia/Shanghai', hour12: false });

  const rows = [
    ['Slug', args.slug],
    ['Time (Shanghai)', when],
    ['Live URL', url || 'no article page found for this slug'],
    ['In insights.ts', registered ? 'yes' : 'NO, the register entry is missing'],
    ['Hero image', `${image}${imageOnDisk ? '' : '  (NOT FOUND on disk)'}`],
    ['Build', args.build || 'not reported'],
    ['Run log', args.log || 'not reported'],
  ];

  const lines = [
    `Published: ${args.title}`,
    '',
    ...rows.map(([k, v]) => `${k}: ${v}`),
  ];
  if (args.todo.length) lines.push('', 'Open TODOs:', ...args.todo.map((t) => `  - ${t}`));
  if (args.note) lines.push('', `Note: ${args.note}`);
  const text = lines.join('\n');

  const cell = 'padding:8px 0;border-bottom:0.5px solid #E5E1DA;';
  const html = `
<div style="font-family:-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#FFFFFF;color:#141414;">
  <p style="font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#C2410C;margin:0 0 8px;">Editorial system</p>
  <h1 style="font-size:22px;font-weight:600;line-height:1.25;margin:0 0 24px;">Published: ${esc(args.title)}</h1>
  <table style="width:100%;border-collapse:collapse;font-size:14px;">
    ${rows.map(([k, v]) => `<tr><td style="${cell}color:#5C5750;width:140px;">${esc(k)}</td><td style="${cell}">${
      k === 'Live URL' && url ? `<a href="${url}" style="color:#C2410C;text-decoration:none;">${esc(url)}</a>` : esc(v)
    }</td></tr>`).join('')}
  </table>
  ${args.todo.length ? `<p style="font-size:14px;margin:24px 0 8px;color:#5C5750;">Open TODOs</p><ul style="font-size:14px;line-height:1.6;margin:0;padding-left:20px;">${args.todo.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>` : ''}
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
