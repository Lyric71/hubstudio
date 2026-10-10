# Site profile: hubstudio.ai

Cached so the pipeline does not fetch the site for every brief.
Refreshed from the repo on 2026-10-10 (first build 2026-09-09). **Refresh on
the first working day of each month**, or when a brief says the site has
changed. The repo is ground truth: `src/pages/` for the inventory,
`src/data/insights.ts` and `src/data/howtos.ts` for existing articles, and
`hubstudio-positioning.md` for what the site says. When this file and the
positioning file disagree, the positioning file wins.

To refresh: `Refresh editorial/sources/site-profile.md from the repo and the
live site.`

## What hubStudio is

Since 2026-09-29 the site sells two offers (`hubstudio-positioning.md`):

- **The hubStudio app**, first: a self-serve web app at
  `https://hubstudio.bearingbridge.com` where a person or a team makes images
  and video with the engines of several makers, edits them, turns them into
  posts, gets them approved and publishes or delivers them. Paid from a
  prepaid balance in real currency, never "credits", never an amount.
  Primary action: Create your account.
- **The hubStudio studio**, a close second: senior art directors, designers,
  retouchers, motion designers, writers and AIGC specialists who take a brief
  and deliver finished work. Twenty service lines. Hong Kong headquarters,
  studios in Shanghai and Changsha, a team in the Philippines, an office in
  Paris. Primary action: Send a brief.

The choice is presented as three ways to work, names locked: Use the app,
Studio + app, Studio only. hub4You is retired and never mentioned. Founder
Cyril Drouin, former CEO at Publicis. Never cite a count of markets or
countries.

Canonical host `https://www.hubstudio.ai`. The apex 301-redirects to www.
`trailingSlash: 'never'`. The site is trilingual: every page ships in English,
French (native slug under `/fr`) and Chinese (`/zh` plus the English path).

## Voice

American English, newsroom register. Declarative. Short sentences carry the
load. The insights read like a business desk rather than a trade blog: they
open on a concrete fact or a decision, then turn it into an operations
question. Tables where a claim has values behind it, blockquotes for cited
figures. No agency self-promotion paragraphs, no closing summary.

## Page inventory

### App (`/app`)

`/app`, `/app/create`, `/app/publish`, `/app/review`, `/app/library`,
`/app/campaigns`, `/app/image-tools`, `/app/video-tools`, `/app/engines`,
`/app/whats-new`. Help center at `/help` (synced from the app repo, never
edited by hand; articles in `src/content/help/`).

### Studio

`/studio`, `/studio/with-the-app`, `/studio/ai-excellence`. Company pages
`/about`, `/about/team` and one page per author at `/about/team/<slug>`.

### Services (20 design pages under /services/design/)

ad-creative, brand-identity, concept-creation, creative-strategy,
ebook-digital-reports, ecommerce, email-design, illustration-design,
marketing-strategy, motion-design, packaging-merch-design, pitch-deck,
presentation-design, press-release, print-design, short-video, social-media,
storyboard, video-production, website-design. Plus `/services/onboarding`
(the only page allowed to print a price).

### Solutions

- By buyer: `/solutions/brands`, `/solutions/agencies`,
  `/solutions/retailers`, `/solutions/manufacturers`, `/solutions/consulting`,
  `/solutions/training`
- AI production: `/solutions/ai-production/image`,
  `/solutions/ai-production/video`, `/solutions/ai-production/content`
- Platforms (13): tmall, jd, douyin, rednote, wechat, weibo, amazon, shopify,
  tiktok, meta, linkedin, brand-website, ecommerce-website, under
  `/solutions/platforms/`. No Pinterest, X or YouTube platform page.

### Resources

`/resources`, `/resources/insights` (77 articles on 2026-10-10),
`/resources/how-to` (11 guides), `/resources/specs` (the platform specs hub),
`/resources/glossary`, `/resources/copyright-and-ai`,
`/resources/production-cost`. RSS in three languages.

### Other

`/pricing` (no amounts), `/pricing/calculator` (internal, blocked in
robots.txt), `/work` plus 13 case studies, `/contact`, `/partners`,
`/llm-info`.

## Internal link targets the briefs use

| Name to use in body copy | URL |
|---|---|
| Tmall platform page | /solutions/platforms/tmall |
| JD platform page | /solutions/platforms/jd |
| Douyin platform page | /solutions/platforms/douyin |
| RedNote platform page | /solutions/platforms/rednote |
| WeChat platform page | /solutions/platforms/wechat |
| Weibo platform page | /solutions/platforms/weibo |
| Meta platform page | /solutions/platforms/meta |
| TikTok platform page | /solutions/platforms/tiktok |
| LinkedIn platform page | /solutions/platforms/linkedin |
| Amazon platform page | /solutions/platforms/amazon |
| Shopify platform page | /solutions/platforms/shopify |
| Ecommerce design service | /services/design/ecommerce |
| Ad creative design service | /services/design/ad-creative |
| Short video design service | /services/design/short-video |
| Social media design service | /services/design/social-media |
| Video production service | /services/design/video-production |
| AI image production | /solutions/ai-production/image |
| AI video production | /solutions/ai-production/video |
| Brands solutions page | /solutions/brands |
| Agencies solutions page | /solutions/agencies |
| Retailers solutions page | /solutions/retailers |
| Consulting solutions page | /solutions/consulting |
| The hubStudio app | /app |
| Campaigns in the app | /app/campaigns |
| Review and approval in the app | /app/review |
| The studio | /studio |
| Studio + app | /studio/with-the-app |
| AI excellence page | /studio/ai-excellence |
| Team | /about/team |
| Platform specs hub | /resources/specs |
| How-to guides | /resources/how-to |
| Glossary | /resources/glossary |
| Copyright and AI resource | /resources/copyright-and-ai |
| Pricing page | /pricing |
| Work index | /work |
| Contact page | /contact |

## Case studies available as proof

iflytek-anypin, noyz-mylk-de-parfum, mexicash, elizabeth-gage, hisense,
diy-european-retailer, camper, age20, global-fashion-brand,
shiseido-rq-pyology, 1834-gin, linfuseur, premium-suv
(`src/data/case-studies.ts`, the only client proof). Never invent a client, a
quote, a number or a result; a figure not already on a case study page is
not used.

## Bylines

`src/data/authors.ts` holds the people who can carry a byline, each with a
page at `/about/team/<slug>`. Most insights carry Cyril Drouin; specs and
how-tos also carry Liyan Ye, Echo Peng, Maya Patel, Aisha Rahman, Erik
Lindström, Jason Liu and Marcus Sullivan.

## How an article is built here

Insights are Astro pages, not a content collection.

- Page: `src/pages/resources/insights/<slug>.astro` (how-tos under
  `src/pages/resources/how-to/`). It imports `ArticleLayout.astro` and passes
  only `slug`. All meta comes from the data file.
- Metadata: one entry in `src/data/insights.ts` (or `src/data/howtos.ts`):
  slug, category, tone, title, deck, date, dateISO, dateModifiedISO,
  readingTime, author, metaTitle, metaDescription, image, imageAlt.
- Body markup goes in the default slot: `<p>`, `<p class="standfirst">`,
  `<h2>`, `<h3>`, `<ul><li>`, `<blockquote>`, `<div class="callout">`, tables
  in `<div class="table-wrap">`.
- Schema: `ArticleLayout` already emits BlogPosting and BreadcrumbList.
- Hero image: `public/Images/insight-<slug>.webp` (how-tos
  `howto-<slug>.webp`).
- Every article ships in French and Chinese from the dictionaries (step 4b in
  `editorial/CLAUDE.md`), with its French slug in `src/i18n/routes.ts`.
- Insight categories in use: Platform specs, Production, Buying models, Cost,
  Rights, plus a long tail of older ones. Placements by category in
  `src/data/insight-placements.ts`.

## Existing insights, for cross-linking and to avoid repeating an angle

Read the full list in `src/data/insights.ts` and `src/data/howtos.ts` before
drafting, so a new piece does not repeat an angle already published. The
newest on 2026-10-10: holiday-content-calendar-2026,
eu-ai-act-labeling-brand-content, instagram-post-sizes-2026,
tiktok-video-specs, instagram-reels-stories-specs, youtube-shorts-specs,
youtube-video-thumbnail-specs, linkedin-post-specs.
