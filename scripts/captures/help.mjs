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
const WEB_SITE = '0b0b0051-0000-4000-8000-000000000002'; // Maya's website Lumera Skincare Journal
const WEB_ITEM_REVIEW = '0b0b0051-1000-4000-8000-000000000014';
const WEB_ITEM_WAIT = '0b0b0051-1000-4000-8000-000000000013';
const WEB_ITEM_PUB1 = '0b0b0051-1000-4000-8000-000000000011';
const WEB_ITEM_PUB2 = '0b0b0051-1000-4000-8000-000000000012';
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

/** The client space with nothing shared yet: no file, no post, no review. */
const nothingShared = {
  path: '/api/client',
  transform: (d) => ({ ...d, files: [], posts: [], reviews: [] }),
};

/** Demo fixtures for the Web module captures (/web and /web/<id>). */
const WEB_PUBLISHER = {
  userId: '5e85838e-64c4-4781-9e1e-8bf2367c621d',
  name: 'Maya Chen',
  email: MAYA,
  login: 'maya-lumera',
};

const WEB_SITE_OBJ = {
  id: WEB_SITE,
  name: 'Lumera Skincare Journal',
  siteUrl: 'https://journal.lumera-skincare.example',
  repoOwner: 'lumera-skincare-demo',
  repoName: 'lumera-journal',
  baseBranch: 'main',
  projectId: null,
  publisherId: WEB_PUBLISHER.userId,
  active: true,
  updatedAt: '2026-10-20T10:00:00.000Z',
  counts: { total: 4, waiting: 1, working: 0, review: 1, published: 2, blocked: 0 },
  settings: {
    contextFiles: ['CLAUDE.md', 'editorial/voice-brief.md', 'editorial/spec.md', 'editorial/runbook.md', 'editorial/product-profile.md'],
    scheduleFile: 'editorial/schedule.csv',
    briefsDir: 'editorial/briefs',
    contentDir: 'src/content/journal',
    draftsDir: 'editorial/output',
    imageDir: 'public/images/journal',
    ledgerFile: 'editorial/claims-ledger.md',
    sourceLocale: 'en',
    sourceLabel: 'US English',
    locales: [
      { code: 'fr', label: 'Français', dir: 'src/content/journal/fr', brief: 'editorial/translate-fr.md' },
      { code: 'zh', label: '简体中文', dir: 'src/content/journal/zh', brief: 'editorial/translate-zh.md' },
    ],
    draftInstructions: 'Write for skincare readers comparing ingredients, routines and climate tips. Cite primary dermatological studies and our lab wear-test ledger.',
    publishInstructions: 'Add the page to src/data/journal-index.json and link it from the two closest related pages.',
    imageStyle: 'Soft daylight, warm botanical glass, clean editorial composition, no faces, no text.',
    qualityPasses: true,
    autoPublish: false,
    autoMerge: true,
    notifyEmails: ['maya.chen@bearingbridge.test'],
    branchPrefix: 'bb/',
    commitPrefix: 'feat(content): publish',
    perRun: 1,
    defaultModel: 'anthropic/claude-opus-4.7',
    siteContext: 'Autumn/Winter barrier-repair focus. Never promise medical cures or name competitors.',
  },
};

const WEB_ITEMS = [
  {
    id: WEB_ITEM_REVIEW,
    ref: 'LM-014',
    title: 'How to layer botanical serums in humid weather',
    primaryQuery: 'layering skincare humid weather',
    briefPath: 'editorial/briefs/lm-014.md',
    contentPath: 'src/content/journal/lm-014.md',
    outputPath: 'editorial/output/lm-014',
    publishDate: '2026-10-22',
    status: 'review',
    step: 'review',
    stepIndex: 0,
    notes: '',
    error: '',
    prNumber: 42,
    prUrl: 'https://github.com/lumera-skincare-demo/lumera-journal/pull/42',
    billedUsd: 0,
    waiting: '',
    updatedAt: '2026-10-22T09:30:00.000Z',
    publishedOn: null,
    leaseUntil: null,
    model: 'anthropic/claude-opus-4.7',
    hasContext: true,
    testOnly: false,
  },
  {
    id: WEB_ITEM_WAIT,
    ref: 'LM-015',
    title: 'Ceramides vs squalane: repairing a compromised skin barrier',
    primaryQuery: 'ceramides vs squalane skin barrier',
    briefPath: 'editorial/briefs/lm-015.md',
    contentPath: 'src/content/journal/lm-015.md',
    outputPath: 'editorial/output/lm-015',
    publishDate: '2026-10-25',
    status: 'not_started',
    step: '',
    stepIndex: 0,
    notes: '',
    error: '',
    prNumber: null,
    prUrl: '',
    billedUsd: 0,
    waiting: '',
    updatedAt: '2026-10-21T14:00:00.000Z',
    publishedOn: null,
    leaseUntil: null,
    model: 'anthropic/claude-opus-4.7',
    hasContext: false,
    testOnly: false,
  },
  {
    id: WEB_ITEM_PUB2,
    ref: 'LM-012',
    title: 'Mineral sunscreen under makeup: avoiding pilling in 32-degree heat',
    primaryQuery: 'mineral sunscreen under makeup humid climate',
    briefPath: 'editorial/briefs/lm-012.md',
    contentPath: 'src/content/journal/lm-012.md',
    outputPath: 'editorial/output/lm-012',
    publishDate: '2026-10-16',
    status: 'published',
    step: 'done',
    stepIndex: 0,
    notes: '',
    error: '',
    prNumber: 41,
    prUrl: 'https://github.com/lumera-skincare-demo/lumera-journal/pull/41',
    billedUsd: 0,
    waiting: '',
    updatedAt: '2026-10-16T16:20:00.000Z',
    publishedOn: '2026-10-16',
    leaseUntil: null,
  },
  {
    id: WEB_ITEM_PUB1,
    ref: 'LM-011',
    title: 'What a 72-hour hydration wear test actually measures',
    primaryQuery: '72 hour hydration test skincare',
    briefPath: 'editorial/briefs/lm-011.md',
    contentPath: 'src/content/journal/lm-011.md',
    outputPath: 'editorial/output/lm-011',
    publishDate: '2026-10-10',
    status: 'published',
    step: 'done',
    stepIndex: 0,
    notes: '',
    error: '',
    prNumber: 39,
    prUrl: 'https://github.com/lumera-skincare-demo/lumera-journal/pull/39',
    billedUsd: 0,
    waiting: '',
    updatedAt: '2026-10-10T11:15:00.000Z',
    publishedOn: '2026-10-10',
    leaseUntil: null,
  },
];

const WEB_REPO_FILES = [
  { path: 'CLAUDE.md', label: 'CLAUDE.md', category: 'rules', description: 'Repository architecture, build commands and editorial rules read at the start of every step.', exists: true, size: 3840, configured: true, prompts: ['Tighten formatting rules', 'Add internal linking rules'] },
  { path: 'editorial/voice-brief.md', label: 'Voice brief', category: 'rules', description: 'Brand voice, sentence rhythm, terminology and forbidden claims.', exists: true, size: 4620, configured: true, prompts: ['Add examples of openings to avoid', 'Clarify ingredient naming rules'] },
  { path: 'editorial/spec.md', label: 'Article spec', category: 'rules', description: 'Frontmatter schema, section structure and word-count targets.', exists: true, size: 2910, configured: true, prompts: ['Add FAQ schema requirements'] },
  { path: 'editorial/claims-ledger.md', label: 'Claims ledger', category: 'ledger', description: 'Verified facts, clinical wear-test numbers and primary-source URLs.', exists: true, size: 5120, configured: true, prompts: ['Add autumn barrier study citations'] },
  { path: 'editorial/schedule.csv', label: 'Schedule CSV', category: 'schedule', description: 'Publication queue of article briefs with order dates and target queries.', exists: true, size: 1890, configured: true, prompts: ['Sort by publish date'] },
  { path: 'editorial/translate-fr.md', label: 'French translation brief', category: 'translation', description: 'Native French editorial conventions, glossary and SEO rules.', exists: true, size: 2450, configured: true, prompts: ['Add skincare glossary terms'] },
];

const webRoutes = [
  {
    path: '/api/web/sites',
    json: {
      sites: [WEB_SITE_OBJ],
      publishers: [WEB_PUBLISHER],
      brands: [],
      github: { ready: true, connected: true, login: 'maya-lumera', installUrl: 'https://github.com/settings/installations' },
      repos: [{ fullName: 'lumera-skincare-demo/lumera-journal', defaultBranch: 'main', private: true }],
    },
  },
  {
    path: `/api/web/sites/${WEB_SITE}`,
    json: {
      site: WEB_SITE_OBJ,
      items: WEB_ITEMS,
      publishers: [WEB_PUBLISHER],
      models: [
        { id: 'anthropic/claude-opus-4.7', label: 'Claude Opus 4.7', provider: 'Anthropic' },
        { id: 'anthropic/claude-sonnet-4.6', label: 'Claude Sonnet 4.6', provider: 'Anthropic' },
        { id: 'openai/gpt-5.4', label: 'GPT-5.4', provider: 'OpenAI' },
      ],
      defaultModel: 'anthropic/claude-opus-4.7',
      repoFiles: WEB_REPO_FILES,
    },
  },
  {
    path: `/api/web/sites/${WEB_SITE}`,
    method: 'POST',
    json: {
      path: 'editorial/voice-brief.md',
      exists: true,
      content: `# Lumera Skincare Journal: Voice & Editorial Brief\n\n## Audience & Tone\nWrite like an experienced cosmetic chemist speaking plainly to an attentive reader. Every paragraph must earn its place with a concrete mechanism, climate condition, or formulation detail.\n\n## Rules\n1. Never promise medical cures or prescription-grade outcomes.\n2. Every quantitative claim (hydration hours, TEWL reduction) must trace to editorial/claims-ledger.md.\n3. Prefer short, concrete subheadings that answer the reader's search question directly.\n4. Link naturally to two related guides in src/content/journal/.\n`,
      model: 'anthropic/claude-opus-4.7',
      plan: [
        {
          ref: 'LM-016',
          publishDate: '2026-10-28',
          phase: 'Core guide',
          title: 'Evening barrier routine after air-conditioned office hours',
          primaryQuery: 'skin barrier routine air conditioning',
          slug: 'evening-barrier-routine-air-conditioning',
          briefPath: 'editorial/briefs/lm-016.md',
          outputPath: 'editorial/output/lm-016',
          contentPath: 'src/content/journal/evening-barrier-routine-air-conditioning.md',
          briefMd: '# Evening barrier routine after air-conditioned office hours\n\nTarget reader: office workers moving between 32°C outdoor humidity and dry 20°C indoor AC.',
        },
        {
          ref: 'LM-017',
          publishDate: '2026-11-01',
          phase: 'Ingredient deep-dive',
          title: 'Polyglutamic acid vs hyaluronic acid in tropical climates',
          primaryQuery: 'polyglutamic acid vs hyaluronic acid humid weather',
          slug: 'polyglutamic-vs-hyaluronic-acid-humid-weather',
          briefPath: 'editorial/briefs/lm-017.md',
          outputPath: 'editorial/output/lm-017',
          contentPath: 'src/content/journal/polyglutamic-vs-hyaluronic-acid-humid-weather.md',
          briefMd: '# Polyglutamic acid vs hyaluronic acid in tropical climates\n\nCompare molecular weight, film-forming behavior and tackiness in high humidity.',
        },
      ],
    },
  },
  {
    path: `/api/web/items/${WEB_ITEM_REVIEW}`,
    json: {
      item: {
        ...WEB_ITEMS[0],
        briefText: `# How to layer botanical serums in humid weather\n\n## Reader & intent\nFor readers in warm, high-humidity climates whose skin feels shiny by midday yet dehydrated underneath.\n\n## Questions to answer\n- How many leave-on steps actually absorb above 75% relative humidity?\n- Which humectant and emollient weights layer without pilling under sunscreen?\n- Morning vs evening adjustments when sleeping in air conditioning.\n\n## Sources & guardrails\nCite TEWL and corneometer measurements from editorial/claims-ledger.md. Never claim medical treatment of acne or eczema.`,
        stepLabel: 'Review',
        context: 'Cite the 2026 humid-climate wear test and link to LM-011 and LM-012.',
        image: null,
        blockedStep: '',
        loopRounds: 0,
        costUsd: 0,
      },
      usage: null,
      log: [
        { id: 1, step: 'research', level: 'info', message: 'Found 14 sources: 9 primary dermatology and formulation papers, 5 wear-test entries.', at: '2026-10-22T09:02:00.000Z' },
        { id: 2, step: 'draft', level: 'info', message: 'Draft written: 1,640 words, 6 sections, 11 claims tied to editorial/claims-ledger.md.', at: '2026-10-22T09:10:00.000Z' },
        { id: 3, step: 'quality', level: 'info', message: 'Completed 18-pass editorial revision and SEO metadata pass (19/19).', at: '2026-10-22T09:22:00.000Z' },
        { id: 4, step: 'recheck', level: 'info', message: 'Source recheck: 14 sources verified against primary URLs and claims ledger.', at: '2026-10-22T09:28:00.000Z' },
        { id: 5, step: 'review', level: 'info', message: 'Ready for review before opening the pull request.', at: '2026-10-22T09:30:00.000Z' },
      ],
      versions: [
        { id: 'v1', step: 'draft', n: 1, label: 'Initial draft', createdAt: '2026-10-22T09:10:00.000Z' },
        { id: 'v2', step: 'quality', n: 2, label: 'After pass 6', createdAt: '2026-10-22T09:14:00.000Z' },
        { id: 'v3', step: 'quality', n: 3, label: 'After pass 12', createdAt: '2026-10-22T09:18:00.000Z' },
        { id: 'v4', step: 'quality', n: 4, label: 'After pass 18', createdAt: '2026-10-22T09:22:00.000Z' },
        { id: 'v5', step: 'recheck', n: 5, label: 'After source recheck', createdAt: '2026-10-22T09:28:00.000Z' },
      ],
      files: [
        { path: 'src/content/journal/lm-014.md', deleted: false, binary: false, size: 9840 },
        { path: 'editorial/claims-ledger.md', deleted: false, binary: false, size: 5120 },
      ],
    },
  },
];

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
  { name: 'account-and-sign-in-tips', route: '/settings', steps: scrollTo('#tips', 120), element: '#tips' },

  // Getting started: the Create your account card, the country picked.
  {
    name: 'getting-started-signup',
    route: '/signup',
    signedOut: true,
    height: 1100,
    steps: async (page) => {
      await page.locator('select#country').selectOption('FR');
      await page.waitForTimeout(300);
    },
    full: true,
    clip: async (page) => {
      const b = await page.evaluate(() => {
        const r = document.querySelector('main .ui-card').getBoundingClientRect();
        return { x: r.x, y: r.y + window.scrollY, width: r.width, height: r.height };
      });
      return { x: Math.round(b.x - 40), y: Math.round(b.y - 32), width: Math.round(b.width + 80), height: Math.round(b.height + 64) };
    },
  },

  // Discovery and tips: the tip card, opened from Settings > Tips.
  {
    name: 'discovery-and-tips-card',
    route: '/settings',
    steps: async (page) => {
      await scrollTo('#tips', 120)(page);
      await click(page, '[data-tips-now]', 3000);
      await page.waitForSelector('.tpn', { timeout: 20000 });
      await page.waitForTimeout(2500);
    },
    element: '.tpn',
  },
  // The Discovery page as a first sign-in shows it (Welcome aboard).
  { name: 'discovery-and-tips-page', route: '/discover?welcome=1', height: 1000, steps: (p) => p.waitForTimeout(1500) },
  {
    name: 'discovery-and-tips-modules',
    route: '/discover?welcome=1',
    height: 1000,
    steps: async (page) => {
      await page.addStyleTag({ content: '.dv-index { visibility: hidden !important; }' });
      await scrollTo('#dv-ch-create', 40)(page);
      await page.waitForTimeout(2000);
    },
    // A clip, not an element shot: the explorer moves on its own and never
    // holds still long enough for an element screenshot.
    clip: async (page) => {
      const r = await page.evaluate(() => {
        const b = document.querySelector('#dv-ch-create').getBoundingClientRect();
        return { x: b.x, y: b.y, width: b.width, height: b.height };
      });
      const y = Math.max(0, Math.round(r.y - 16));
      return { x: Math.round(r.x - 16), y, width: Math.round(r.width + 32), height: Math.min(1000 - y, Math.round(r.height + 32)) };
    },
  },
  // The quick tour on the first pillar of the menu, Create (third stop).
  {
    name: 'discovery-and-tips-tour',
    route: '/discover?welcome=1',
    steps: async (page) => {
      await page.waitForTimeout(1000);
      await click(page, '[data-dv-tour]', 1200);
      await click(page, '[data-next]', 1200);
      await click(page, '[data-next]', 1500);
    },
  },

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

  // Web: connected websites, article queue & pipeline, AI Editorial Plan, Repository Files & AI Studio, and Site Settings.
  {
    name: 'web-sites',
    route: '/web',
    as: MAYA,
    routes: webRoutes,
    wait: '.wb-site',
    steps: (p) => p.waitForTimeout(1200),
  },
  {
    name: 'web-queue',
    route: `/web/${WEB_SITE}`,
    as: MAYA,
    height: 1100,
    routes: webRoutes,
    wait: '[data-wb-detail] .wb-steps',
    steps: (p) => p.waitForTimeout(1200),
  },
  {
    name: 'web-planner',
    route: `/web/${WEB_SITE}#plan`,
    as: MAYA,
    height: 1150,
    routes: webRoutes,
    wait: '[data-wb-plan-generate]',
    steps: async (p) => {
      await p.waitForTimeout(800);
      await click(p, '[data-wb-plan-chips] [data-chip]', 400);
      await click(p, '[data-wb-plan-generate]', 1200);
    },
  },
  {
    name: 'web-studio',
    route: `/web/${WEB_SITE}#files`,
    as: MAYA,
    height: 1050,
    routes: webRoutes,
    wait: '[data-wb-files-list] [data-repo-file]',
    steps: async (p) => {
      await p.waitForTimeout(800);
      await click(p, '[data-repo-file="editorial/voice-brief.md"]', 1200);
    },
  },
  {
    name: 'web-settings',
    route: `/web/${WEB_SITE}#settings`,
    as: MAYA,
    height: 1100,
    routes: webRoutes,
    wait: '[data-wb-settings] input[name="name"]',
    steps: (p) => p.waitForTimeout(1200),
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
  // Since October 2026 a real member of the team makes real work for that
  // client: the capture keeps the space as the English text shows it, empty.
  { name: 'client-space-home', route: '/client', as: DANA, routes: [nothingShared] },
].map((s) => ({ ...s, out: (lang) => join(HELP_IMAGES, lang === 'en' ? `${s.name}.png` : `${s.name}.${lang}.png`) }));

export { shots };

if (import.meta.main ?? process.argv[1]?.replace(/\\/g, '/').endsWith('/help.mjs')) {
  await run(shots, async (browser, shot, lang) => png(await capture(browser, shot, lang)));
}
