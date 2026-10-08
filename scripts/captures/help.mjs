/**
 * The hubStudio help center captures (hubstudio-site/help/images in the app
 * repository), 1440x900 at 1x like the English set, PNG. French and Chinese
 * files are written beside the English ones (x.fr.png, x.zh.png), then
 * scripts/sync-help.mjs carries them to public/Images/help as WebP.
 *
 *   node scripts/captures/help.mjs [en|fr|zh ...] [--only <name>,<name>]
 *
 * Each shot names its file, the route, the account and the steps to the
 * state the English capture shows. See lib.mjs for the conventions.
 *
 * Kept from capture to capture: the demo files of the BearingBridge team
 * (Maya Chen's four pictures, the Spring campaign folder, the
 * lumera-essence-teaser.mp4 clip, her Instagram draft with the Lumera
 * packshot, her YouTube post with the teaser, the team's YouTube channel kit
 * "Lumera Skincare" with its banner and picture fitted from the packshot, a
 * second picture version of her Instagram draft (v2, the Calverra launch
 * visual, kept off the post so v1 stays on it), and her campaign "Lumera
 * Essence launch" holding the packshot, the teaser and the two channel
 * pictures).
 * The video tools are fed the clips in ./files.
 */
import { join } from 'node:path';
import { ADMIN, DANA, HELP_IMAGES, MAYA, capture, click, png, run } from './lib.mjs';

const PACKSHOT = '407aab76-d79e-4861-ad3f-1ea15e6d3b71'; // lumera-essence-packshot.jpg
const TEASER = 'lumera-essence-teaser.mp4';
const IG_DRAFT = 'fac4760b-f7a4-4a59-a5ec-2a7c98ec554d'; // Maya's Instagram draft with the packshot
const YT_POST = 'ff4d2cf0-00d9-4da7-8323-036a291f7aee'; // Maya's YouTube post with the teaser clip
const CAMPAIGN = '8fea8d0f-8301-4c7b-962b-4d03c785072a'; // Maya's campaign Lumera Essence launch
/** The banner and the picture of the team's YouTube channel kit, fitted copies kept in the library. */
const YT_COPY = /-youtube-(banner|picture)-\d+x\d+\.jpg$/;

/** The library as it stood for the English captures: the four pictures and the folder, before the teaser clip. */
const libraryBeforeTeaser = {
  path: '/api/files',
  transform: (d) => {
    const gone = (d.files ?? []).filter((f) => f.name === TEASER || YT_COPY.test(f.name ?? ''));
    const bytes = gone.reduce((n, f) => n + (Number(f.sizeBytes ?? f.size) || 0), 0);
    return {
      ...d,
      files: (d.files ?? []).filter((f) => !gone.includes(f)),
      usage: { ...d.usage, files: d.usage.files - gone.length, bytes: d.usage.bytes - bytes, totalBytes: d.usage.totalBytes - bytes },
    };
  },
};

/** The team as the English captures show it: the admin alone, nothing pending. */
const teamJustYou = {
  path: '/api/team',
  transform: (d) => ({ ...d, members: (d.members ?? []).filter((m) => m.isYou), invitations: [], joinRequests: [] }),
};

/** The client the English capture shows on the Clients card (Northwind Foods, one login). */
const northwind = {
  path: '/api/team/clients',
  json: {
    canManage: true,
    clients: [
      {
        id: '00000000-0000-4000-8000-00000000c11e',
        name: 'Northwind Foods',
        createdAt: '2026-09-27T12:00:00.000Z',
        logins: [{ userId: '00000000-0000-4000-8000-0000000d1a7a', label: 'Dana Whitfield', email: 'dana.whitfield@bearingbridge.test', banned: false, lastLoginAt: null }],
        invitations: [],
      },
    ],
  },
};

/** A clip around an element, padded (page coordinates, the page not scrolled). */
const around = (sel, pad = 0, size) => async (page) => {
  const r = await page.locator(sel).first().boundingBox();
  if (!r) throw new Error(`no ${sel}`);
  const x = Math.max(0, Math.round(r.x - pad));
  const y = Math.max(0, Math.round(r.y - pad));
  return { x, y, width: size?.width ?? Math.round(r.width + 2 * pad), height: size?.height ?? Math.round(r.height + 2 * pad) };
};

/** Scroll the page so an element sits `top` px under the viewport's top. */
const scrollTo = (sel, top = 0) => async (page) => {
  await page.evaluate(([s, t]) => {
    const el = document.querySelector(s);
    if (el) window.scrollTo(0, Math.max(0, el.getBoundingClientRect().top + window.scrollY - t));
  }, [sel, top]);
  await page.waitForTimeout(700);
};

const editor = (extra = '') => `/files/tools/image-editor?file=${PACKSHOT}${extra}`;
const editorReady = '[data-ie-sheet]:not([hidden])';

/** The Crop panel on the Portrait 4:5 format (the English Crop capture). */
async function portrait(page) {
  await page.waitForTimeout(2000);
  if (!(await page.locator('[data-ie-ratio="4:5"]').first().isVisible())) await click(page, '[data-ie-panel=crop]');
  await click(page, '[data-ie-ratio="4:5"]', 1200);
}

/** The packshot cropped to 4:5, as the English Effects, Draw and Save captures show it. */
async function croppedPortrait(page) {
  await portrait(page);
  await click(page, '[data-ie-crop-apply]', 1500);
}

/** The Image editor caption and arrow of the English captures. */
async function captionAndArrow(page) {
  await click(page, '[data-ie-panel=text]');
  await click(page, '[data-ie-add-text]');
  await page.keyboard.type('New season');
  await page.keyboard.press('Escape');
  await page.waitForTimeout(400);
  await click(page, '[data-ie-panel=draw]');
  await click(page, '[data-ie-draw=arrow]');
  await page.mouse.move(468, 640);
  await page.mouse.down();
  await page.mouse.move(560, 588, { steps: 8 });
  await page.mouse.move(640, 540, { steps: 8 });
  await page.mouse.up();
  await page.waitForTimeout(600);
  await click(page, '[data-ie-draw=select]');
  await page.mouse.click(555, 591);
  await page.waitForTimeout(600);
}

const videoReady = async (page) => {
  await page.waitForSelector('[data-ve-sheet]:not([hidden])', { timeout: 90000 });
  await page.waitForTimeout(3000);
};

async function videoSocial(page) {
  await videoReady(page);
  await click(page, '[data-ve-panel=social]');
  await click(page, '[data-ve-net-place=ig-reel]');
  await click(page, '[data-ve-seg=netFit][data-v=fit]', 500);
  await click(page, '[data-ve-net-apply]', 3500);
}

/** A new post with its Skills and material strip unfolded: its two cards in view, the skills picker loaded. */
async function openStrip(page) {
  await click(page, '[data-project-panel]:not(.hidden) [data-sc-side-toggle]', 1500);
  await page.waitForFunction(() => !document.querySelector('[data-project-panel]:not(.hidden) [data-sc-skills] .slash-spinner'), null, { timeout: 20000 }).catch(() => {});
  await page.waitForTimeout(800);
}

const shots = [
  // Account and sign-in
  { name: 'account-and-sign-in-security', route: '/settings', element: '#security' },
  { name: 'account-and-sign-in-my-connections', route: '/my-connections' },
  { name: 'account-and-sign-in-appearance', route: '/settings', element: '#appearance' },
  {
    name: 'account-and-sign-in-language',
    route: '/login',
    signedOut: true,
    clip: async (page) => {
      const r = await page.locator('main p.font-mono').first().boundingBox();
      return { x: Math.round(r.x - 30), y: Math.round(r.y - 14), width: 440, height: 460 };
    },
  },
  { name: 'account-and-sign-in-digest', route: '/settings', element: '#digest' },

  // Assets Library and its tools
  { name: 'assets-library-page', route: '/files', as: MAYA, height: 1000, routes: [libraryBeforeTeaser], wait: '[data-file-row], tr' },
  {
    name: 'assets-library-actions',
    route: '/files',
    as: MAYA,
    routes: [libraryBeforeTeaser],
    wait: 'text=lumera-essence-packshot.jpg',
    steps: async (page) => {
      await page.evaluate(() => {
        const row = [...document.querySelectorAll('tr')].find((t) => t.textContent.includes('lumera-essence-packshot.jpg'));
        const card = row?.closest('section') ?? row?.closest('[class*=card]');
        window.scrollTo(0, card.getBoundingClientRect().top + window.scrollY - 40);
      });
      await page.waitForTimeout(700);
      const row = page.locator('tr', { hasText: 'lumera-essence-packshot.jpg' }).first();
      await row.locator('[data-row-menu-toggle]').click();
      await page.waitForTimeout(800);
    },
    clip: async (page) => {
      // The list card alone, with the open menu, 8 px around it.
      const r = await page.evaluate(() => {
        const row = [...document.querySelectorAll('tr')].find((t) => t.textContent.includes('lumera-essence-packshot.jpg'));
        const b = (row?.closest('section') ?? row?.closest('[class*=card]')).getBoundingClientRect();
        return { x: b.x, y: b.y, width: b.width, height: b.height };
      });
      return { x: Math.round(r.x - 8), y: Math.round(r.y - 8), width: Math.round(r.width + 16), height: Math.round(r.height + 16) };
    },
  },
  {
    name: 'assets-library-video-actions',
    route: '/files',
    wait: `text=${TEASER}`,
    steps: async (page) => {
      const row = page.locator('tr', { hasText: TEASER }).first();
      await row.locator('[data-row-menu-toggle]').click();
      await page.waitForTimeout(800);
    },
  },
  { name: 'image-anonymizer-page', route: '/files/tools/image-anonymizer' },
  {
    name: 'image-editor-social',
    route: editor('&network=instagram'),
    esc: false,
    wait: editorReady,
    steps: async (page) => {
      await page.waitForTimeout(2500);
      await click(page, '[data-ie-net-place=ig-portrait]', 2000);
    },
  },
  {
    name: 'image-editor-crop',
    route: editor(),
    esc: false,
    wait: editorReady,
    steps: portrait,
  },
  {
    name: 'image-editor-effects',
    route: editor(),
    esc: false,
    wait: editorReady,
    steps: async (page) => {
      await croppedPortrait(page);
      await click(page, '[data-ie-panel=filters]', 2500);
    },
  },
  {
    name: 'image-editor-draw',
    route: editor(),
    esc: false,
    wait: editorReady,
    steps: async (page) => {
      await croppedPortrait(page);
      await captionAndArrow(page);
    },
  },
  {
    name: 'image-editor-save',
    route: editor(),
    esc: false,
    wait: editorReady,
    steps: async (page) => {
      await croppedPortrait(page);
      await captionAndArrow(page);
      await click(page, '[data-ie-open-save]', 1200);
    },
  },
  { name: 'video-editor-tools', route: '/files/tools/video-editor' },
  {
    name: 'video-editor-format',
    route: '/files/tools/video-editor',
    upload: { input: '[data-ve-input]', file: 'lip-mask-night.mp4' },
    steps: async (page) => {
      await videoReady(page);
      if (!(await page.locator('[data-ve-seg=fit][data-v=blur]').first().isVisible())) await click(page, '[data-ve-panel=format]');
      await click(page, '[data-ve-seg=fit][data-v=blur]', 2000);
    },
  },
  { name: 'video-editor-social', route: '/files/tools/video-editor', upload: { input: '[data-ve-input]', file: 'lip-mask-night.mp4' }, steps: videoSocial },
  {
    name: 'video-editor-social-checks',
    route: '/files/tools/video-editor',
    upload: { input: '[data-ve-input]', file: 'lip-mask-night.mp4' },
    steps: async (page) => {
      await videoSocial(page);
      await page.evaluate(() => {
        const c = document.querySelector('[data-ve-net-checks]');
        const card = c?.closest('.ie-card') ?? c;
        card?.scrollIntoView({ block: 'center' });
      });
      await page.waitForTimeout(1200);
    },
  },
  {
    name: 'video-editor-save',
    route: '/files/tools/video-editor',
    upload: { input: '[data-ve-input]', file: 'lip-mask-night.mp4' },
    steps: async (page) => {
      await videoSocial(page);
      await click(page, '[data-ve-net-save]', 2500);
    },
  },
  { name: 'shorts-autopilot-page', route: '/files/tools/shorts' },
  {
    name: 'shorts-autopilot-settings',
    route: '/files/tools/shorts',
    upload: { input: '[data-sa-input]', file: 'lumera-founder-interview.webm' },
    steps: async (page) => {
      await page.waitForSelector('[data-sa-go]', { timeout: 90000 });
      // Language spoken on Detect it, as in English (it otherwise follows the interface).
      await page.selectOption('[data-sa-lang]', '');
      await page.waitForFunction(() => !document.querySelector('.sa-cost .slash-spinner'), null, { timeout: 30000 }).catch(() => {});
      await page.waitForTimeout(1500);
    },
  },
  {
    name: 'instagram-picture-edit',
    route: `/social/instagram/posts#item=${IG_DRAFT}`,
    as: MAYA,
    wait: 'img[data-sc-visual-file]',
    steps: async (page) => {
      await page.waitForFunction(() => [...document.querySelectorAll('img[data-sc-visual-file]')].every((i) => i.complete && i.naturalWidth > 0), null, { timeout: 30000 });
      await page.hover('[data-sc-visual]');
      await page.waitForTimeout(600);
    },
    // The picture step from its title down to the post's picture: the three
    // doors on the left, the pointed picture with its pencil on the right
    // (the step is split in two since 2026-10-08).
    clip: async (page) => {
      const r = await page.evaluate(() => document.querySelector('img[data-sc-visual-file]').closest('section').getBoundingClientRect().toJSON());
      return { x: Math.round(r.x), y: Math.round(r.y), width: Math.round(r.width), height: Math.min(Math.round(r.height), 620) };
    },
  },
  {
    name: 'instagram-picture-versions',
    route: `/social/instagram/posts#item=${IG_DRAFT}`,
    as: MAYA,
    wait: '[data-sc-vv] img[data-sc-vv-file]',
    steps: async (page) => {
      await page.waitForFunction(() => [...document.querySelectorAll('img[data-sc-visual-file], img[data-sc-vv-file]')].every((i) => i.complete && i.naturalWidth > 0), null, { timeout: 30000 });
      await page.evaluate(() => document.querySelector('[data-sc-vv]').scrollIntoView({ block: 'end' }));
      await page.waitForTimeout(800);
    },
    // The right half of the step: the picture on the post, Edit in the image
    // editor and Picture versions.
    element: '.sc-split__out:has([data-sc-vv])',
  },

  // Studios, Explore, History
  // The menu in its default order.
  {
    name: 'getting-started-menu',
    route: '/explore',
    clip: around('aside', 0, { height: 900 }),
  },
  { name: 'explore-gallery', route: '/explore', steps: (p) => p.waitForTimeout(1500) },
  { name: 'explore-card', route: '/explore', element: '.ex-card' },
  {
    name: 'create-an-image-studio',
    route: '/content/image-generate',
    // The engine of the English capture: Muse Image 1.0 (Meta).
    steps: async (page) => {
      const sel = await page.evaluateHandle(() => [...document.querySelectorAll('select')].find((s) => [...s.options].some((o) => o.text.startsWith('Muse Image 1.0'))));
      const value = await sel.evaluate((s) => [...s.options].find((o) => o.text.startsWith('Muse Image 1.0')).value);
      await sel.asElement().selectOption(value);
      await page.waitForTimeout(1200);
    },
  },
  { name: 'create-a-video-studio', route: '/content/video' },
  { name: 'history-page', route: '/history' },
  { name: 'credits-and-payments-buy', route: '/billing' },

  // Social networks
  { name: 'linkedin-brief', route: '/social/linkedin/posts' },
  { name: 'instagram-picture', route: '/social/instagram/posts', steps: openStrip },
  { name: 'facebook-brief', route: '/social/facebook/posts' },
  { name: 'tiktok-video', route: '/social/tiktok/posts', steps: openStrip },
  { name: 'tiktok-brief', route: '/social/tiktok/brief' },
  { name: 'youtube-video', route: '/social/youtube/posts', steps: openStrip },
  { name: 'youtube-publish', route: `/social/youtube/posts#item=${YT_POST}&step=publish`, as: MAYA, height: 1100, wait: '.sc-yt' },
  { name: 'youtube-channel', route: '/social/youtube/channel', as: MAYA, wait: '[data-project-panel]:not(.hidden) .yc-page' },
  {
    name: 'youtube-channel-art',
    route: '/social/youtube/channel',
    as: MAYA,
    height: 1100,
    wait: '[data-project-panel]:not(.hidden) .yc-page',
    css: '.yc__savebar { display: none !important; }',
    steps: async (page) => {
      await page.waitForFunction(() => [...document.querySelectorAll('[data-project-panel]:not(.hidden) .yc__arts img')].every((i) => i.complete && i.naturalWidth > 0), null, { timeout: 30000 });
    },
    element: '[data-project-panel]:not(.hidden) section:has(.yc__arts)',
  },
  { name: 'x-brief', route: '/social/x/posts' },
  { name: 'x-knobs', route: '/social/x/posts', steps: scrollTo('[data-sc-x-knobs]', 200), element: '[data-sc-x-knobs]' },

  // Campaigns: the list and Maya's campaign.
  { name: 'campaigns-list', route: '/campaigns', as: MAYA, wait: '.cp-card', steps: (p) => p.waitForTimeout(1500) },
  { name: 'campaigns-page', route: `/campaigns/${CAMPAIGN}`, as: MAYA, height: 1100, wait: '[data-cp-assets] .fp-card', steps: (p) => p.waitForTimeout(2000) },
  // Her campaigns listed in the menu, the library's Campaign filter, and the
  // Campaign choice of a creation form (the image studio).
  { name: 'campaigns-menu', route: '/campaigns', as: MAYA, wait: '.cp-card', steps: (p) => click(p, '.sn-group[data-key=campaigns] .sn-caret', 1200) },
  {
    name: 'campaigns-filter', route: '/files', as: MAYA, height: 1000, wait: '[data-pop-toggle=campaign]',
    steps: async (p) => { await p.waitForTimeout(1500); await click(p, '[data-pop-toggle=campaign]', 1200); },
  },
  {
    name: 'campaigns-choice', route: '/content/image-generate', as: MAYA, wait: 'select[data-campaign-pick]',
    steps: async (p) => {
      await p.locator('select[data-campaign-pick]').first().selectOption({ label: 'Lumera Essence launch' });
      await p.locator('[data-campaign-pick-host]').first().scrollIntoViewIfNeeded();
      await p.waitForTimeout(800);
    },
    element: '.sc-panel:has([data-campaign-pick-host])',
  },

  // Validation, Skills, Team
  { name: 'validation-page', route: '/validation' },
  { name: 'validation-send-dialog', route: '/validation', steps: (p) => click(p, '[data-validation-new]', 1000), element: '.ui-card:has([data-vr-send])' },
  { name: 'skills-my-skills', route: '/skills' },
  { name: 'skills-catalog', route: '/skills/catalog' },
  { name: 'agents-catalog', route: '/agents/catalog', element: '#standard' },
  { name: 'agents-runs', route: '/agents/runs' },
  {
    name: 'your-team-members',
    route: '/team',
    routes: [teamJustYou, northwind],
    clip: async (page) => {
      const cards = page.locator('#team-root section.sc-card');
      const a = await cards.nth(0).boundingBox();
      const b = await cards.nth(1).boundingBox();
      return { x: Math.round(a.x - 2), y: Math.round(a.y - 2), width: Math.round(a.width + 4), height: Math.round(b.y + b.height - a.y + 4) };
    },
  },
  {
    name: 'your-team-invite',
    route: '/team',
    routes: [teamJustYou, northwind],
    steps: scrollTo('#team-root section.sc-card[style*="160"]', 120),
    element: '#team-root section.sc-card[style*="160"]',
  },
  { name: 'your-team-clients', route: '/team', routes: [teamJustYou, northwind], steps: scrollTo('#clients', 120), element: '#clients' },
  { name: 'your-team-invoices-and-sign-in', route: '/team', routes: [teamJustYou, northwind], steps: scrollTo('#billing', 120), element: '#billing' },

  // Client space: Dana Whitfield, the login of the team's client Northwind Foods, nothing shared yet.
  { name: 'client-space-home', route: '/client', as: DANA },
].map((s) => ({ ...s, out: (lang) => join(HELP_IMAGES, lang === 'en' ? `${s.name}.png` : `${s.name}.${lang}.png`) }));

export { shots };

if (import.meta.main ?? process.argv[1]?.replace(/\\/g, '/').endsWith('/help.mjs')) {
  await run(shots, async (browser, shot, lang) => png(await capture(browser, shot, lang)));
}
