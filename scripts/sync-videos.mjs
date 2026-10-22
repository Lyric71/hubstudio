// Copy the list of the app's feature videos into this site.
//
// The video publish run of the BearingBridge repository
// (automation/demo-videos/publish.mjs) uploads every finished video and writes
// docs/video-scripts/hubstudio-videos.json: number, topic, help articles and,
// per language, title, duration and file. This script copies it to
// src/data/feature-videos.json, which the help articles, the home page and
// /resources/videos read at build time (src/lib/feature-videos.ts).
//
// Checks on the way in:
//   - the shape (app hubstudio, topics, videos with the three languages);
//   - the positioning rules: a title that says "credits" or "tokens", prints
//     an amount or holds a dash used as punctuation is left out of the site,
//     and named here, until its script is fixed upstream and published again;
//   - a help slug with no article here only means the video shows on the
//     collection page alone; it is named so the person running the sync knows.
//
// Run: npm run videos:sync [-- <path to hubstudio-videos.json>]
// Default source: ../BearingBridgeIntelligence/docs/video-scripts/hubstudio-videos.json
// npm run help:sync runs it too, from the same repository as the help folder.
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const root = resolve(import.meta.dirname, '..');
const OUT = join(root, 'src', 'data', 'feature-videos.json');
const HELP = join(root, 'src', 'content', 'help');
export const DEFAULT_SOURCE = join(root, '..', 'BearingBridgeIntelligence', 'docs', 'video-scripts', 'hubstudio-videos.json');
const LANGS = ['en', 'fr', 'zh'];

// The money language of hubstudio-positioning.md, and the dash rule.
const BANNED = [
  [/\bcredits?\b|\bcrédits?\b|积分|点数/i, 'says "credits"'],
  [/\btokens?\b/i, 'says "tokens"'],
  [/[$€£¥]|\b(?:USD|EUR|CNY|RMB)\b|美元|元人民币|\d\s?元/, 'prints an amount'],
  [/—|\s–\s|\s-\s/, 'holds a dash used as punctuation'],
];

/** Copy the manifest at `source`; returns the number of videos written. */
export function syncVideos(source = DEFAULT_SOURCE) {
  const src = resolve(source);
  if (!existsSync(src)) {
    console.log(`✗ No video list at ${src}: src/data/feature-videos.json left as it is`);
    return null;
  }
  const m = JSON.parse(readFileSync(src, 'utf8'));
  if (m.app !== 'hubstudio' || !Array.isArray(m.topics) || !Array.isArray(m.videos)) {
    console.error(`✗ ${src} is not the hubStudio video list (app "${m.app}")`);
    process.exitCode = 1;
    return null;
  }
  const topics = new Set(m.topics.map((t) => t.key));
  const articles = new Set(existsSync(HELP) ? readdirSync(HELP).map((f) => f.replace(/\.md$/, '')) : []);
  const kept = [];
  for (const v of m.videos) {
    const why = [];
    for (const l of LANGS) {
      const t = v.langs?.[l];
      if (!t?.title || !t.file || !Number.isFinite(t.duration)) {
        why.push(`no complete ${l} version`);
        continue;
      }
      for (const [re, what] of BANNED) if (re.test(t.title)) why.push(`${l} title ${what}: ${t.title}`);
    }
    if (!topics.has(v.topic)) why.push(`unknown topic "${v.topic}"`);
    if (why.length) {
      console.log(`✗ video ${v.number} (${v.slug}) left out: ${why.join('; ')}`);
      continue;
    }
    const missing = (v.help ?? []).filter((s) => !articles.has(s));
    if (missing.length) console.log(`  video ${v.number}: no help article here for ${missing.join(', ')} (collection page only there)`);
    kept.push(v);
  }
  const out = { ...m, videos: kept };
  const next = `${JSON.stringify(out, null, 1)}\n`;
  const prev = existsSync(OUT) ? readFileSync(OUT, 'utf8') : '';
  if (next !== prev) writeFileSync(OUT, next);
  const featured = (m.featured ?? []).filter((n) => kept.some((v) => v.number === n));
  console.log(
    `✓ ${kept.length} feature video(s) from ${src}${next === prev ? ' (no change)' : ''}; ` +
      `home page shows ${featured.length} of the ${(m.featured ?? []).length} featured`,
  );
  return kept.length;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const arg = process.argv.slice(2).find((a) => !a.startsWith('--'));
  syncVideos(arg ?? DEFAULT_SOURCE);
  console.log(
    'Next, before the commit: npm run i18n:local -- extract --context .i18n-work/ctx (a help article\n' +
      'that gets its first video takes the video block’s labels, already translated elsewhere),\n' +
      'then npm run i18n:local -- check.',
  );
}
