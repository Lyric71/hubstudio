/**
 * submit-indexnow.mjs: ping IndexNow (Bing, Yandex, Seznam, Naver) so new and
 * updated pages get crawled within minutes instead of waiting for a recrawl.
 *
 *   node scripts/submit-indexnow.mjs
 *       submit every URL in the sitemap
 *   node scripts/submit-indexnow.mjs https://www.hubstudio.ai/work/age20
 *       submit a single URL
 *
 * Run it AFTER a deploy: IndexNow verifies each URL is live, so the pages must
 * already be published. The key file public/<KEY>.txt must also be deployed so
 * IndexNow can trust the submission.
 */

const KEY = '573450e46dc94d66b8ac3de85eb6f27b';
const HOST = 'www.hubstudio.ai';
const ORIGIN = `https://${HOST}`;
const KEY_LOCATION = `${ORIGIN}/${KEY}.txt`;
const SITEMAP_INDEX = `${ORIGIN}/sitemap-index.xml`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';

const locs = (xml) =>
  [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());

async function fetchText(url) {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'hubStudio-IndexNow/1.0' },
  });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${url}`);
  return res.text();
}

async function collectSitemapUrls() {
  const index = await fetchText(SITEMAP_INDEX);
  const children = locs(index);
  const sources = children.length ? children : [SITEMAP_INDEX];
  const all = new Set();
  for (const sitemap of sources) {
    for (const url of locs(await fetchText(sitemap))) all.add(url);
  }
  return [...all];
}

async function main() {
  const arg = process.argv[2];
  let urlList =
    arg && arg.startsWith('http') ? [arg] : await collectSitemapUrls();

  const offHost = urlList.filter((u) => new URL(u).host !== HOST);
  if (offHost.length) {
    console.warn(`Skipping ${offHost.length} URL(s) not on ${HOST}.`);
    urlList = urlList.filter((u) => new URL(u).host === HOST);
  }

  if (!urlList.length) {
    console.error('No URLs to submit.');
    process.exit(1);
  }

  console.log(`Submitting ${urlList.length} URL(s) to IndexNow ...`);
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList,
    }),
  });

  if (res.status === 200 || res.status === 202) {
    console.log(`IndexNow accepted the submission (HTTP ${res.status}).`);
  } else {
    const body = await res.text().catch(() => '');
    console.error(`IndexNow returned HTTP ${res.status}. ${body}`.trim());
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(`IndexNow submission failed: ${err.message}`);
  process.exit(1);
});
