#!/usr/bin/env node
/**
 * Competitor gate: every domain a research file quarantines is turned into its
 * name stem, and the draft's publishable body is searched for that stem.
 *
 *   node editorial/scripts/check-quarantine.mjs <draft.md> <research.md>
 */
import { readFileSync } from 'node:fs';

const [draftPath, researchPath] = process.argv.slice(2);
const research = readFileSync(researchPath, 'utf8');
const body = readFileSync(draftPath, 'utf8')
  .replace(/^---[\s\S]*?\n---\n/, '')
  .replace(/<!--[\s\S]*?-->/g, '')
  .toLowerCase();

/* Platforms, regulators and public bodies the pages may name. */
const allowed = new Set([
  'amazon', 'tmall', 'taobao', 'jd', 'douyin', 'tiktok', 'meta', 'facebook', 'instagram',
  'wechat', 'weibo', 'xiaohongshu', 'rednote', 'youtube', 'google', 'openai', 'gov', 'cac',
  'samr', 'nmpa', 'iso', 'arxiv', 'wikipedia', 'news', 'xinhuanet', 'people', 'europa',
  'eur-lex', 'acquisition', 'whitehouse', 'copyright', 'ftc', 'asa', 'ipa', 'isba', 'wfanet',
  'ana', 'aicp', 'bls', 'nist', 'w3', 'itu', 'ebu', 'bsigroup', 'iab', 'hubstudio', 'alibaba',
  'kuaishou', 'baidu', 'bilibili', 'zhihu', 'sohu', 'qq', 'tencent', 'bytedance', 'oceanengine',
  'microsoft', 'apple', 'nvidia', 'adobe', 'box',
]);

const domains = [...research.matchAll(/\b([a-z0-9-]+)\.(?:com|co|io|ai|net|org|cn|studio|app|so|co\.uk|com\.cn|me|tv|agency)\b/gi)]
  .map((m) => m[1].toLowerCase())
  .filter((s) => s.length > 3 && !allowed.has(s));
const hits = [...new Set(domains)].filter((stem) =>
  new RegExp(`\b${stem.replace(/[-]/g, '[- ]?')}\b`).test(body),
);
for (const h of hits) console.log(`  quarantined name on page: ${h}`);
console.log(`${new Set(domains).size} quarantined stems checked, ${hits.length} found on the page`);
process.exit(hits.length ? 1 : 0);
