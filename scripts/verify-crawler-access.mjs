#!/usr/bin/env node
/**
 * Infrastructure item 2: confirm the retrieval crawlers can actually FETCH
 * this site.
 *
 *   node scripts/verify-crawler-access.mjs
 *   node scripts/verify-crawler-access.mjs --url https://www.hubstudio.ai/pricing
 *   node scripts/verify-crawler-access.mjs --json
 *
 * Why this exists. robots.txt is a request, not a mechanism. A CDN rule, a WAF
 * bot-fighting mode, or a host-level block can return 403 or a challenge page
 * to a retrieval crawler while robots.txt cheerfully says Allow. The crawler
 * never reads robots.txt in that case, because it never gets that far.
 *
 * A 200 with real HTML is the pass condition. Anything else, including a 200
 * that returns a challenge or an interstitial, is a failure: the assistant
 * gets nothing to quote, and the page cannot be cited.
 *
 * This checks reachability only. It does not check whether robots.txt PERMITS
 * the fetch; that is a separate concern and is asserted in robots.txt itself.
 * The two together are the item.
 */

const args = process.argv.slice(2);
const flag = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  return i === -1 || !args[i + 1] || args[i + 1].startsWith('--') ? fallback : args[i + 1];
};
const asJson = args.includes('--json');
const target = flag('url', 'https://www.hubstudio.ai/');

/**
 * Retrieval agents only. Training crawlers are deliberately blocked in
 * robots.txt, so testing them would report a "failure" that is the intended
 * behavior. The user-agent strings are the ones the vendors publish.
 */
const AGENTS = [
  ['OAI-SearchBot', 'Mozilla/5.0 (compatible; OAI-SearchBot/1.0; +https://openai.com/searchbot)'],
  ['ChatGPT-User', 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; ChatGPT-User/1.0; +https://openai.com/bot'],
  ['Claude-SearchBot', 'Mozilla/5.0 (compatible; Claude-SearchBot/1.0; +Claude-SearchBot@anthropic.com)'],
  ['Claude-User', 'Mozilla/5.0 (compatible; Claude-User/1.0; +Claude-User@anthropic.com)'],
  ['PerplexityBot', 'Mozilla/5.0 (compatible; PerplexityBot/1.0; +https://perplexity.ai/perplexitybot)'],
  ['Perplexity-User', 'Mozilla/5.0 (compatible; Perplexity-User/1.0; +https://perplexity.ai/perplexity-user)'],
  ['DuckAssistBot', 'Mozilla/5.0 (compatible; DuckAssistBot/1.0; +https://duckduckgo.com/duckassistbot)'],
  ['Googlebot', 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'],
  ['Bingbot', 'Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)'],
  ['Applebot', 'Mozilla/5.0 (compatible; Applebot/0.1; +http://www.apple.com/go/applebot)'],
  ['MistralAI-User', 'Mozilla/5.0 (compatible; MistralAI-User/1.0; +https://mistral.ai)'],
];

/** Signals that a 200 is not actually the page. */
const CHALLENGE = [
  /just a moment/i,
  /checking your browser/i,
  /cf-browser-verification/i,
  /enable javascript and cookies to continue/i,
  /captcha/i,
  /attention required/i,
  /access denied/i,
];

async function probe(name, ua) {
  const started = Date.now();
  try {
    const res = await fetch(target, {
      headers: { 'User-Agent': ua, Accept: 'text/html,application/xhtml+xml' },
      redirect: 'follow',
      signal: AbortSignal.timeout(20000),
    });
    const body = await res.text();
    const ms = Date.now() - started;
    const challenged = CHALLENGE.find((r) => r.test(body));
    // A real page from this site carries a <title> and some body copy.
    const looksReal = /<html/i.test(body) && body.length > 1000;
    const ok = res.ok && !challenged && looksReal;
    return {
      agent: name,
      status: res.status,
      bytes: body.length,
      ms,
      ok,
      note: !res.ok
        ? `HTTP ${res.status}`
        : challenged
          ? `200 but served a challenge (${challenged.source})`
          : !looksReal
            ? `200 but body is ${body.length} bytes, too small to be the page`
            : 'served the page',
    };
  } catch (err) {
    return { agent: name, status: 0, bytes: 0, ms: Date.now() - started, ok: false, note: `request failed: ${err.message}` };
  }
}

const results = [];
for (const [name, ua] of AGENTS) {
  // Sequential on purpose. Eleven parallel requests from one IP is itself the
  // kind of traffic a bot-fighting rule reacts to, which would poison the test.
  results.push(await probe(name, ua));
}

if (asJson) {
  console.log(JSON.stringify({ url: target, checked: new Date().toISOString(), results }, null, 2));
} else {
  console.log(`\n  Retrieval crawler reachability\n  ${target}\n  ${new Date().toISOString()}\n`);
  for (const r of results) {
    console.log(`  ${(r.ok ? 'pass' : 'FAIL').padEnd(5)} ${r.agent.padEnd(18)} ${String(r.status).padEnd(4)} ${String(r.bytes).padStart(7)}b ${String(r.ms).padStart(5)}ms  ${r.note}`);
  }
  const failed = results.filter((r) => !r.ok);
  console.log(`\n  ${results.length - failed.length}/${results.length} reachable.`);
  if (failed.length) {
    console.log(`\n  Failures delete this site from those assistants' answers.`);
    console.log(`  Check, in this order: CDN bot rules, WAF bot-fighting mode,`);
    console.log(`  rate limiting, and any host-level user-agent deny list.`);
    console.log(`  robots.txt is NOT the cause: a blocked fetch never reaches it.\n`);
  } else {
    console.log(`\n  Every retrieval crawler gets the real page.\n`);
  }
}

process.exit(results.every((r) => r.ok) ? 0 : 1);
