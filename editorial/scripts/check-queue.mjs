#!/usr/bin/env node
/**
 * Queue watchdog for the editorial pipeline. run-daily.ps1 calls it after
 * every draft run. It reads editorial/schedule.csv and mails Cyril, through
 * Resend, at most once a day, when the pipeline stops producing:
 *
 *   - low:     a week or less of briefs is left to draft (or none at all).
 *              An empty queue is silent by design (settled fallback 7), and
 *              from 27 September to 8 October it idled eleven days unseen.
 *   - stalled: briefs are waiting but nothing has been drafted for
 *              --stall-days days. From 8 to 10 October a date gate in the
 *              draft prompt left 79 briefs idle while every run exited 0.
 *              This catches that, a dead task or an expired login alike.
 *   - stuck:   a finished draft has sat at image_ready for --stall-days days.
 *
 * The mail reports facts, never an open items list (editorial/CLAUDE.md,
 * "No TODO leaves a run").
 *
 *   node editorial/scripts/check-queue.mjs [--per-day 2] [--low-days 7]
 *        [--stall-days 2] [--dry-run]
 *
 * One mail a day: the marker editorial/logs/runs/<date>-queue.txt records it.
 * Always exits 0, so it never fails the run that calls it.
 */

import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const FALLBACK_TO = 'cyril.drouin@outlook.com';
const FROM = 'hubStudio <onboarding@resend.dev>';
const DAY = 86_400_000;

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

function arg(name, fallback) {
  const i = process.argv.indexOf(`--${name}`);
  return i > -1 && process.argv[i + 1] ? Number(process.argv[i + 1]) : fallback;
}

/** RFC 4180 CSV: quoted fields, doubled quotes, commas and newlines inside quotes. */
function parseCsv(text) {
  const rows = [];
  let row = [], field = '', quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') { field += '"'; i++; }
      else if (c === '"') quoted = false;
      else field += c;
    } else if (c === '"') quoted = true;
    else if (c === ',') { row.push(field); field = ''; }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(field); rows.push(row); row = []; field = '';
    } else field += c;
  }
  if (field || row.length) { row.push(field); rows.push(row); }
  const [head, ...body] = rows.filter((r) => r.some((f) => f !== ''));
  return body.map((r) => Object.fromEntries(head.map((h, i) => [h.replace(/^﻿/, ''), r[i] ?? ''])));
}

const shanghaiToday = () => new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Shanghai' });
const daysBetween = (a, b) => Math.round((Date.parse(b) - Date.parse(a)) / DAY);
const addDays = (iso, n) => new Date(Date.parse(iso) + n * DAY).toISOString().slice(0, 10);

async function main() {
  loadEnv();
  const perDay = arg('per-day', 2);
  const lowDays = arg('low-days', 7);
  const stallDays = arg('stall-days', 2);
  const dryRun = process.argv.includes('--dry-run');

  const rows = parseCsv(readFileSync(path.join('editorial', 'schedule.csv'), 'utf8'));
  const today = shanghaiToday();
  const waiting = rows.filter((r) => r.status !== 'published' && r.status !== 'blocked' && r.status !== 'image_ready');
  const blocked = rows.filter((r) => r.status === 'blocked');
  const lastDrafted = rows.map((r) => r.drafted_on).filter(Boolean).sort().pop() || '';
  const idle = lastDrafted ? daysBetween(lastDrafted, today) : Infinity;
  const stuck = rows.filter((r) => r.status === 'image_ready'
    && daysBetween(r.image_generated_on || r.drafted_on || today, today) >= stallDays);
  const runway = Math.ceil(waiting.length / perDay);
  const lastDraftDay = addDays(today, runway);

  const status = `${waiting.length} to draft, ${blocked.length} blocked, last draft ${lastDrafted || 'never'}`;
  const alerts = [];
  if (waiting.length && idle >= stallDays) {
    alerts.push(`Drafting has stalled: ${waiting.length} briefs are waiting and the last draft was made on ${lastDrafted}, ${idle} days ago. No draft run since then has drafted one; their logs are in editorial/logs/runs/.`);
  }
  if (stuck.length) {
    alerts.push(`Publishing has stalled: ${stuck.map((r) => r.output_file.replace(/^output\//, '').replace(/\.md$/, '')).join(', ')} ${stuck.length === 1 ? 'has' : 'have'} been at image_ready for ${stallDays} days or more.`);
  }
  if (waiting.length === 0) {
    alerts.push(`The drafting queue is empty: every row in editorial/schedule.csv is published${blocked.length ? ` or blocked (${blocked.length})` : ''}. No new article will publish until new briefs and rows are added (editorial/scripts/wave2, generate-briefs.mjs).`);
  } else if (runway <= lowDays) {
    alerts.push(`The drafting queue is running low: ${waiting.length} briefs left. At ${perDay} drafts a day the last one is drafted around ${lastDraftDay}; after that no new article publishes until new briefs and rows are added (editorial/scripts/wave2, generate-briefs.mjs).`);
  }
  if (blocked.length) {
    alerts.push(`Blocked rows (the question is in each row's notes): ${blocked.map((r) => r.brief_id).join(', ')}.`);
  }

  // A blocked row alone is not an alert: it already stops and says why.
  if (!alerts.some((a) => !a.startsWith('Blocked rows'))) {
    console.log(`ok: ${status}`);
    return;
  }

  const marker = path.join('editorial', 'logs', 'runs', `${today}-queue.txt`);
  if (existsSync(marker) && !dryRun) {
    console.log(`alert already sent today: ${status}`);
    return;
  }

  const subject = waiting.length === 0
    ? 'Editorial queue empty'
    : alerts[0].startsWith('Drafting has stalled') ? `Editorial drafting stalled (${waiting.length} briefs waiting)`
    : alerts[0].startsWith('Publishing has stalled') ? 'Editorial publishing stalled'
    : `Editorial queue low: ${waiting.length} briefs left`;
  const text = [subject, '', ...alerts, '', `Schedule: ${status}.`].join('\n');

  if (dryRun) {
    console.log(text);
    return;
  }
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.log(`alert not sent, RESEND_API_KEY missing: ${subject}`);
    return;
  }
  const to = process.env.CONTACT_TO_EMAIL || FALLBACK_TO;
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from: FROM, to: [to], subject, text }),
  });
  if (!res.ok) {
    console.log(`alert not sent, Resend ${res.status}: ${subject}`);
    return;
  }
  writeFileSync(marker, `${new Date().toISOString()} ${text}\n`);
  console.log(`alert sent to ${to}: ${subject}`);
}

main().catch((err) => {
  console.log(`queue check failed: ${err.message}`);
});
