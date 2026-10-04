/**
 * Captures of the hubStudio app, in English, French and Chinese.
 *
 * Every screenshot of the app on this site and in its help center is a real
 * capture of the hubStudio app (the BearingBridge repository's reporting-site
 * run as hubStudio, `npm run dev:hubstudio`, port 4324), signed in as a member
 * of the BearingBridge team (cyril.drouin@bearingbridge.com by default,
 * maya.chen@bearingbridge.test for the screens that show her files and
 * drafts). A French or Chinese page shows the same screen with the interface
 * in its language: the capture is taken again with the app's language cookie
 * (bbg_lang), data left as it is, and saved beside the English one (x.png,
 * x.fr.png, x.zh.png). The middleware serves the localized file on /fr and
 * /zh pages when src/i18n/localized-images.json lists it.
 *
 * One file per group lists its shots:
 *   scripts/captures/help.mjs  the help center captures, written to the app
 *                              repository (hubstudio-site/help/images), then
 *                              carried here by scripts/sync-help.mjs
 *   scripts/captures/app.mjs   the captures of the app pages (public/Images/app),
 *                              crops of the help captures or of their own shots
 *
 *   node scripts/captures/<group>.mjs [en|fr|zh ...] [--only <name>,<name>]
 *
 * Default: French and Chinese. An English capture is taken only when its file
 * is missing; the English files in place are never rewritten.
 * Playwright, Supabase and sharp come from the app repository's help-center
 * folder (support-site), which already depends on them. The demo clips in
 * files/ (.mp4, .webm) are too large for git and stay on this machine only.
 *
 * The language cookie rewrites the signed-in account's own language
 * (user_profiles.ui_lang): every account used is put back to English at the
 * end, by its user id, in hubStudio's database only.
 */
import { createRequire } from 'node:module';
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';

export const APP_REPO = process.env.APP_REPO ?? 'C:/Users/cyril/Project/BearingBridgeIntelligence';
const require = createRequire(`${APP_REPO}/support-site/package.json`);
const { chromium } = require('playwright');
const { createClient } = require('@supabase/supabase-js');
export const sharp = require('sharp');

export const APP = process.env.APP_URL ?? 'http://127.0.0.1:4324';
export const SITE_ROOT = resolve(import.meta.dirname, '..', '..');
export const FILES = resolve(import.meta.dirname, 'files');
export const HELP_IMAGES = `${APP_REPO}/hubstudio-site/help/images`;
export const ADMIN = 'cyril.drouin@bearingbridge.com';
export const MAYA = 'maya.chen@bearingbridge.test';
// The demo client login (Northwind Foods, a client of the BearingBridge team).
export const DANA = 'dana.whitfield@northwind-foods.example';
const BROWSER_LOCALE = { en: 'en-US', fr: 'fr-FR', zh: 'zh-CN' };

function envOf(files) {
  const e = {};
  for (const f of files) {
    for (const l of readFileSync(`${APP_REPO}/reporting-site/${f}`, 'utf8').split(/\r?\n/)) {
      const m = /^([A-Z][A-Z0-9_]*)=(.*)$/.exec(l);
      if (m) e[m[1]] = m[2].trim().replace(/^["']|["']$/g, '');
    }
  }
  return e;
}
// hubStudio has its own users database (.env.hubstudio over .env).
const HUB = envOf(['.env', '.env.hubstudio']);
const hubAdmin = createClient(HUB.SUPABASE_URL, HUB.SUPABASE_SECRET_KEY, { auth: { persistSession: false } });
const hubAnon = createClient(HUB.SUPABASE_URL, HUB.SUPABASE_KEY, { auth: { persistSession: false } });

const sessions = new Map();
async function sessionOf(email) {
  if (sessions.has(email)) return sessions.get(email);
  const { data: link, error } = await hubAdmin.auth.admin.generateLink({ type: 'magiclink', email });
  if (error) throw error;
  const { data: v, error: e2 } = await hubAnon.auth.verifyOtp({ token_hash: link.properties.hashed_token, type: 'magiclink' });
  if (e2) throw e2;
  sessions.set(email, v.session);
  return v.session;
}

async function resetLanguages() {
  // Only the accounts this run signed in as, by their user id, in hubStudio's
  // database (the one the app writes ui_lang to). No other account is touched.
  for (const [email, s] of sessions) {
    const { error } = await hubAdmin.from('user_profiles').update({ ui_lang: 'en' }).eq('user_id', s.user.id);
    console.log(error ? `ui_lang reset failed (hubStudio) ${email}: ${error.message}` : `ui_lang en (hubStudio) ${email} ${s.user.id}`);
  }
}

/**
 * The menu in the product's own order (this account arranged its own), no
 * staff entry, no dev toolbar, no corner notification: what a team admin sees.
 */
export async function tidy(page) {
  await page
    .evaluate(() => {
      document.querySelectorAll('astro-dev-toolbar').forEach((e) => e.remove());
      const groups = [...document.querySelectorAll('.sn-group[data-default-index]')];
      if (groups.length) {
        const parent = groups[0].parentElement;
        const mine = groups.filter((g) => g.parentElement === parent);
        const anchor = mine[mine.length - 1].nextSibling;
        [...mine].sort((a, b) => Number(a.dataset.defaultIndex) - Number(b.dataset.defaultIndex)).forEach((g) => parent.insertBefore(g, anchor));
      }
      document.querySelectorAll('[data-key="superAdmin"]').forEach((e) => e.remove());
      if (!document.getElementById('cap-tidy')) {
        const st = document.createElement('style');
        st.id = 'cap-tidy';
        st.textContent = 'astro-dev-toolbar, vite-error-overlay, .activity-toast { display: none !important; }';
        document.head.appendChild(st);
      }
    })
    .catch(() => {});
}

/** Click a visible element (the first match), then let the page settle. */
export async function click(page, sel, wait = 700) {
  const t = page.locator(sel).first();
  await t.waitFor({ state: 'visible', timeout: 30000 });
  await t.click().catch((e) => (/intercepts pointer|outside of the viewport/.test(e.message) ? t.dispatchEvent('click') : Promise.reject(e)));
  await page.waitForTimeout(wait);
}

/**
 * Fake or rewrite API answers for one shot. Each entry: { path, method?,
 * json } answers with that body; { path, method?, transform } fetches the real
 * answer and rewrites it (json => json).
 */
async function applyRoutes(ctx, routes) {
  if (!routes?.length) return;
  const paths = new Set(routes.map((r) => r.path));
  await ctx.route((u) => paths.has(u.pathname), async (route) => {
    const req = route.request();
    const hit = routes.find((r) => (r.method ?? 'GET') === req.method() && r.path === new URL(req.url()).pathname);
    if (!hit) return route.fallback();
    if (hit.transform) {
      const res = await route.fetch();
      const body = hit.transform(await res.json());
      return route.fulfill({ response: res, body: JSON.stringify(body), headers: { ...res.headers(), 'content-type': 'application/json' } });
    }
    return route.fulfill({ status: hit.status ?? 200, contentType: 'application/json', body: JSON.stringify(hit.json ?? {}) });
  });
}

/**
 * Take one shot in one language and return the PNG buffer.
 *
 * Shot fields: route, as (account email), width and height (viewport,
 * default 1440x900), dpr (default 1), routes (API
 * fixtures), upload {input, file}, wait (selector), esc (press Escape after
 * load, default true), steps (async (page, lang) => {}), css, element
 * (selector screenshotted alone), clip (object or async page => object),
 * full (whole page).
 */
export async function capture(browser, shot, lang, extra = {}) {
  const s = shot.signedOut ? null : await sessionOf(shot.as ?? ADMIN);
  const ctx = await browser.newContext({
    viewport: { width: shot.width ?? 1440, height: shot.height ?? 900 },
    deviceScaleFactor: shot.dpr ?? 1,
    reducedMotion: 'reduce',
    locale: BROWSER_LOCALE[lang],
    timezoneId: 'Asia/Shanghai',
    colorScheme: 'light',
  });
  try {
    await applyRoutes(ctx, shot.routes);
    await ctx.addCookies([
      ...(s ? [{ name: 'bbg_at', value: s.access_token, url: APP }] : []),
      { name: 'bbg_lang', value: lang, url: APP },
    ]);
    if (s) {
      await ctx.addInitScript(
        ([a, r]) => {
          localStorage.setItem('bbg_auth', 'true');
          localStorage.setItem('bbg_session', a);
          localStorage.setItem('bbg_refresh', r);
          // No theme stored: Appearance reads System, drawn light (colorScheme).
          localStorage.removeItem('bbg.theme');
        },
        [s.access_token, s.refresh_token],
      );
    }
    const page = await ctx.newPage();
    page.on('pageerror', (e) => console.log('  pageerror', e.message.slice(0, 200)));
    page.on('dialog', (d) => d.dismiss().catch(() => {}));
    await page.goto(APP + shot.route, { waitUntil: 'load', timeout: 90000 });
    await page.waitForLoadState('networkidle', { timeout: 30000 }).catch(() => {});
    await page.waitForTimeout(1200);
    if (shot.esc !== false) await page.keyboard.press('Escape').catch(() => {});
    await tidy(page);
    if (shot.upload) {
      await page.locator(shot.upload.input).first().setInputFiles(join(FILES, shot.upload.file));
      await page.waitForTimeout(3000);
    }
    if (shot.wait) await page.waitForSelector(shot.wait, { timeout: 90000 });
    if (shot.steps) await shot.steps(page, lang);
    if (extra.steps) await extra.steps(page, lang);
    await page.evaluate(() => document.fonts && document.fonts.ready);
    await page.waitForTimeout(1000);
    await tidy(page);
    const css = `${shot.css ?? ''}${extra.css ?? ''}`;
    if (css) {
      await page.addStyleTag({ content: css });
      await page.waitForTimeout(300);
    }
    if (shot.element) return await page.locator(shot.element).first().screenshot({ type: 'png', animations: 'disabled' });
    const clip = typeof shot.clip === 'function' ? await shot.clip(page) : shot.clip;
    return await page.screenshot({ type: 'png', animations: 'disabled', fullPage: !!shot.full, ...(clip ? { clip } : {}) });
  } finally {
    await ctx.close();
  }
}

/** Command line: languages (default fr zh) and --only <name,...>. */
export function parseArgs() {
  const args = process.argv.slice(2);
  const oi = args.indexOf('--only');
  const only = oi > -1 ? args[oi + 1].split(',') : null;
  const langs = args.filter((a) => ['en', 'fr', 'zh'].includes(a));
  return { only, langs: langs.length ? langs : ['fr', 'zh'] };
}

/** x.png, x.fr.png, x.zh.png (any extension). */
export const localized = (file, lang) => (lang === 'en' ? file : file.replace(/\.(\w+)$/, `.${lang}.$1`));

/**
 * Run a group: for each language, each shot, `make(browser, shot, lang)`
 * returns the bytes to write at `shot.out(lang)`. English is written only
 * when its file is missing.
 */
export async function run(shots, make) {
  const { only, langs } = parseArgs();
  const list = only ? shots.filter((s) => only.includes(s.name)) : shots;
  let browser = null;
  let failed = 0;
  const done = { en: 0, fr: 0, zh: 0 };
  try {
    for (const lang of langs) {
      // The browser in the page's language too: its own widgets (a file
      // field's "Choose File") follow --lang, which Playwright's bundled
      // headless shell ignores; Edge (the help set's browser) honors it.
      await browser?.close();
      browser = await chromium.launch({ channel: process.env.CAPTURE_CHANNEL ?? 'msedge', args: [`--lang=${BROWSER_LOCALE[lang]}`] });
      for (const shot of list) {
        const out = shot.out(lang);
        if (lang === 'en' && existsSync(out)) {
          console.log('keep', lang, shot.name, '(English capture in place)');
          continue;
        }
        try {
          // A shot that hangs (a stuck page) fails alone after three minutes.
          let timer;
          const buf = await Promise.race([
            make(browser, shot, lang),
            new Promise((_, no) => { timer = setTimeout(() => no(new Error('timed out after 180 s')), 180000); }),
          ]).finally(() => clearTimeout(timer));
          mkdirSync(dirname(out), { recursive: true });
          writeFileSync(out, buf);
          const m = await sharp(buf).metadata();
          done[lang]++;
          console.log('ok', lang, shot.name, `${m.width}x${m.height}`);
        } catch (e) {
          failed++;
          console.log('FAIL', lang, shot.name, e.message.split('\n')[0]);
        }
      }
    }
  } finally {
    await browser?.close();
    await resetLanguages();
  }
  console.log('captured', JSON.stringify(done), failed ? `${failed} failed` : '');
  if (failed) process.exitCode = 1;
}

/** A PNG as the help center keeps it. */
export const png = (buf) => sharp(buf).png({ compressionLevel: 9 }).toBuffer();

/**
 * Keep src/i18n/localized-images.json in step with the localized files on
 * disk under one public folder: every x.fr.webp / x.zh.webp found beside an
 * English x.webp is listed, entries of other folders are left alone.
 */
export function listLocalized(publicDir, urlPrefix) {
  const file = join(SITE_ROOT, 'src', 'i18n', 'localized-images.json');
  const current = existsSync(file) ? JSON.parse(readFileSync(file, 'utf8')) : [];
  const names = existsSync(publicDir) ? readdirSync(publicDir) : [];
  const found = names
    .filter((f) => /\.(fr|zh)\.(webp|png|jpe?g)$/i.test(f) && names.includes(f.replace(/\.(fr|zh)\./i, '.')))
    .map((f) => `${urlPrefix}${f}`);
  const next = [...current.filter((u) => !u.startsWith(urlPrefix)), ...found].sort();
  writeFileSync(file, `${JSON.stringify(next, null, 2)}\n`);
  return found.length;
}
