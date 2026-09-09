# Site profile: hubstudio.ai

Cached so the pipeline does not fetch the site forty-eight times.
Built from the repo on 2026-09-09. **Refresh on the first working day of each
month**, or when a brief says the site has changed. The repo is ground truth:
`src/pages/` for the inventory, `src/data/insights.ts` for existing articles.

To refresh: `Refresh editorial/sources/site-profile.md from the repo and the
live site.`

## What hubStudio is

An AI-native creative production studio. Founded 2024. Studios in Shanghai,
Changsha, Hong Kong and the Philippines. Founder Cyril Drouin, formerly
Publicis Commerce CEO for China and North Asia. 16 named creatives, 13
nationalities.

The positioning in one line: a studio that originates the master, not a
platform that multiplies assets someone else made. Physical capture in China
plus generation, in one pipeline, with provenance recorded per asset.

Canonical host `https://www.hubstudio.ai`. The apex 301-redirects to www.
`trailingSlash: 'never'`.

## Voice

American English. Declarative. Short sentences carry the load. The existing
insights read like a business desk rather than a trade blog: they open on a
concrete fact or a scene, then turn it into an operations question. They use
tables where a claim has values behind it, and blockquotes for cited figures.

They do not do agency self-promotion paragraphs, and they do not close with a
summary. That house habit matches the editorial spec, so keep it.

## Page inventory

### Services (20 design pages under /services/design/)

ad-creative, brand-identity, concept-creation, creative-strategy,
ebook-digital-reports, ecommerce, email-design, illustration-design,
marketing-strategy, motion-design, packaging-merch-design, pitch-deck,
presentation-design, press-release, print-design, short-video, social-media,
storyboard, video-production, website-design.

Index at `/services`.

### Solutions

- By buyer: `/solutions/brands`, `/solutions/agencies`,
  `/solutions/retailers`, `/solutions/manufacturers`, `/solutions/consulting`,
  `/solutions/training`
- AI production: `/solutions/ai-production/image`,
  `/solutions/ai-production/video`, `/solutions/ai-production/content`
- Platforms (13): `/solutions/platforms/` plus tmall, jd, douyin, rednote,
  wechat, weibo, amazon, shopify, tiktok, meta, linkedin, brand-website,
  ecommerce-website

Platform pages run 2,850 to 3,200 words each and carry no dimension,
duration, codec, file weight or safe zone between them. That absence is gap
G6 and the reason the spec cluster exists.

### The studio

`/the-studio`, `/the-studio/who-we-are`, `/the-studio/ai-excellence`,
`/the-studio/creative-talents`.

### Resources

`/resources`, `/resources/glossary` (4,500 words),
`/resources/copyright-and-ai`, `/resources/insights` (25 articles),
`/resources/how-to` (4 articles).

### Other

`/hub4you` (self-serve platform), `/pricing`, `/pricing/calculator`
(currently blocked in robots.txt), `/work` plus 13 case studies, `/contact`,
`/partner-program`.

## Internal link targets the briefs use

| Name to use in body copy | URL |
|---|---|
| Tmall platform page | /solutions/platforms/tmall |
| JD platform page | /solutions/platforms/jd |
| Douyin platform page | /solutions/platforms/douyin |
| RedNote platform page | /solutions/platforms/rednote |
| WeChat platform page | /solutions/platforms/wechat |
| Weibo platform page | /solutions/platforms/weibo |
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
| hub4you platform | /hub4you |
| AI excellence page | /the-studio/ai-excellence |
| Who we are | /the-studio/who-we-are |
| Glossary | /resources/glossary |
| Copyright and AI resource | /resources/copyright-and-ai |
| Pricing page | /pricing |
| Quotation calculator | /pricing/calculator |
| Work index | /work |
| Contact page | /contact |

**Not built yet:** the China spec library hub at `/resources/specs`. Briefs in
cluster 1 link to it. It ships in weeks 3 to 4. Until then the reference goes
in the ASSET BRIEF block and the publish step leaves it unlinked.

## Case studies available as proof

iflytek-anypin, noyz-mylk-de-parfum, mexicash, elizabeth-gage, hisense,
diy-european-retailer, camper, age20, global-fashion-brand,
shiseido-rq-pyology, 1834-gin, linfuseur, premium-suv.

Figures already public: HiSense live on a self-serve platform in 8 weeks,
thousands of assets per week. Premium SUV, 70 percent budget cut, 3 weeks
against 6 months, 15 markets, 20+ environments, zero vehicles shipped.
Mexicash, 5 platforms in 5 days. 1834 Gin, 46-second film, 3 weeks from zero
assets. iFlytek AnyPin, 22 cuts, 3 techniques. L'infuseur, 2 weeks, 3
channels.

Anything not already on a case study page needs client sign-off before use.

## How an article is built here

Insights are Astro pages, not a content collection.

- Page: `src/pages/resources/insights/<slug>.astro`. It imports
  `ArticleLayout.astro` and passes only `slug`. All meta comes from the data
  file.
- Metadata: one entry in `src/data/insights.ts` matching the `Insight`
  interface: slug, category, tone (`orange` or `navy`), title, deck, date,
  dateISO, dateModifiedISO, readingTime, author, metaTitle, metaDescription,
  image, imageAlt.
- Body markup goes in the default slot. `ArticleLayout` styles a fixed set of
  elements: `<p>`, `<p class="standfirst">`, `<h2>`, `<h3>`, `<ul><li>`,
  `<li><strong>Label.</strong> copy`, `<blockquote>`,
  `<div class="callout">`, and tables wrapped in `<div class="table-wrap">`.
- Schema: `ArticleLayout` already emits BlogPosting and BreadcrumbList. Do not
  add more.
- Hero image: `public/Images/insight-<slug>.webp`, referenced as
  `/Images/insight-<slug>.webp`.

Existing insights are English only. There is no French insights section under
`src/pages/fr/`, so no locale propagation.

## Existing insights, for cross-linking and to avoid repeating an angle

25 articles at `/resources/insights/`. The most recent five:
ai-content-quality-argument-over (29 July 2026),
what-aigc-production-actually-is, your-ai-content-is-about-to-introduce-itself,
agentic-ai-creative-data, ai-search-content-systems.

Read the full list in `src/data/insights.ts` before drafting, so a new piece
does not repeat an angle already published. Note the pattern the audit found:
every one of these 25 is commentary or POV, and commentary ranks for nothing
in this category. The new plan does not add to that pile.

## Infrastructure state, 2026-09-09

- `robots.txt` is allow-all with a handful of Disallow lines. It does not
  split by bot purpose. Infrastructure item 1 fixes that.
- `/pricing/calculator` is disallowed. Infrastructure item 5 publishes an
  indexable public version with market inputs and no hubStudio rate in the
  output.
- `llms.txt` and `llms-full.txt` are served. Item 3 adds `/llm-info` as a real
  crawlable HTML page, which is the thing retrieval crawlers can actually
  cite.
- No author pages. `src/data/insights.ts` has an `author` field carrying a
  name string with nothing to link to. Item 6 builds the 16 author pages.
- Indexed URLs at audit: 101. Insights all time: 25. Published in 2026: 5.
  Comparison, cost and original research pages: zero.
