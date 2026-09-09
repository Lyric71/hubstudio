# hubStudio search spec: gap plan, 30 briefs, 12-week calendar

Target site: hubstudio.ai
Prepared: 9 September 2026
Evidence: live sitemap, RSS, robots and SERP pulls on 8 and 9 September 2026

Three parts:

- **Part 1**: the plan to close the gap
- **Part 2**: the 30 pieces to draft now, as full briefs
- **Part 3**: the 12-week calendar, 4 pieces a week, 48 pieces

Parts 4 to 7 are supporting specs: per-article requirements, operating rules,
measurement, and the verified facts vault.

---

# PART 0: HOW TO USE THIS FILE

## Standing rule that governs everything below

**No competitor is ever named, described, compared to, or alluded to in
published hubStudio content.** No conquest pages, no "X alternatives", no "us
against them" tables, no named rate cards, no commentary on another company's
rebrand, layoffs, results or website. This applies to articles, service pages,
LinkedIn, the newsletter, image captions and FAQ answers.

Where a market figure is needed, attribute it to the category and the date,
never to a company. Correct: "published subscription rate cards in this
category start between roughly $6,000 and $15,000 a month, September 2026."
Incorrect: naming whose card it is.

Comparison content still gets written. It compares **models of buying**
(subscription, in-house, platform, studio) and **regions**, never firms.

## Working method

Every article is produced by passing the research gate below, then the
`createarticle` skill, then `contentquality`. Inputs to `createarticle`:

- **website**: `hubstudio.ai`
- **audience**: `people out of China`
- **brief**: paste the full brief block from Part 2 or Part 3

`createarticle` iteration 7 asks for deliberate planted typos. **Do not run
it.** No planted errors. Humanize through cadence, structure and word choice
only. State this when invoking the skill.

## The research gate, mandatory before any drafting

`createarticle` fetches the target website. That is not research. It is
context. No piece in this file may be drafted until the research gate below
has been passed and a research file exists on disk.

**Where research lives.** One file per piece at `research/<slug>.md`, plus a
`research/<slug>/` folder for screenshots and captures. It is committed. It is
the evidence trail for every number that reaches the page, and it is what
makes the annual spec refresh a twenty-minute job instead of a rebuild.

### R1. Map what has to be true
List every factual claim the piece will need to make before looking anything
up. That list is the research brief. Anything that turns out to be
unverifiable gets cut from the outline, not softened in the copy.

### R2. Map the SERP you are beating
Run the target query plus at least three phrasings a buyer would actually
type. For each, record the top ten: domain, page type, what it answers, what
it misses, and how old it is. Two outputs from this step: the specific gap the
piece fills, stated in one sentence, and the bar for length, depth and table
count. If the ranking pages all miss the same thing, that thing is the H1.

### R3. Primary sources only, for anything with a number in it
For China platform specs this means the seller backend, the live app, and the
official rule pages. Screenshot everything, timestamp it, save it to the
research folder. A spec taken from another English article is not evidence, it
is a rumour with a citation. This step is the moat: it is exactly what none of
the ranking pages has done, and it is the reason a competitor with a faster
writer cannot copy the cluster.

### R4. Search in Chinese
For anything China-related, search the Chinese-language web before the English
one. The specs exist in Chinese on the platform documentation, on the spec
sites and on Zhihu, and have mostly never been carried into English. English
coverage of Chinese platforms is stale by two to four years on most queries in
this plan. Record the Chinese source and the English rendering side by side.

### R5. Interrogate every figure
For each number, record: source URL, publication date, sample size, method,
and who paid for it. Then apply the test. A figure with no stated method does
not get published. A figure published by a party that sells the thing the
figure flatters gets labelled as a market claim, not as evidence. A percentage
with no absolute behind it gets labelled as such.

### R6. Triangulate, and publish the disagreement
Any figure needs either one primary source or two independent secondary
sources. Where sources conflict, publish the range and say why they conflict.
That is more credible than a false precision, and it is the kind of passage
that gets cited.

### R7. Write the research file before the article
`research/<slug>.md` contains:

- The claims table: claim, source URL, date, sample size, method, confidence
  (primary, triangulated, single-source, unverified)
- The SERP map from R2 and the one-sentence gap statement
- Verbatim quotes and figures cleared for use, ready to drop into blockquotes
- The do-not-publish list: everything checked that did not clear the bar, with
  the reason. This list is as valuable as the cleared list, because it stops
  the next writer re-researching the same dead end
- Screenshot inventory with capture dates

**Gate: no drafting starts until this file exists and every claim in it is
marked.** Unverified claims are cut from the outline before writing, not
hedged during it.

### R8. Reconcile after drafting
Every number in the finished draft is checked back against the claims table.
Anything in the draft that is not in the research file is removed, not
sourced retroactively. Then run `contentquality`.

### Effort floor
Roughly 45 to 90 minutes of active research per money page. Two to four hours
per spec page including capture. If a piece took less, it was not researched,
it was recalled, and recall is where fabricated specifications come from.

### Parallelism
Research the week's four pieces as four parallel subagents, each returning a
completed research file. Draft them sequentially afterwards. Research
parallelises cleanly, drafting does not, because the pieces cross-link.

## File conventions

- Markdown, YAML frontmatter: `title`, `slug`, `description`, `excerpt`, `template`
- Filename equals the slug
- Editorial labels as HTML comments only. Zero HTML in body copy
- Hard-wrap body lines at ~80 characters
- Feature image comment block appended after the CTA, outside the char count
- Image path: `public/images/insights/<slug>.webp`, or
  `public/images/specs/<slug>.webp` for the spec library

## Hard ceilings

- Title: 52 characters
- Meta description: 152 characters
- Excerpt: 25 words

Count them, do not estimate.

## Two more rules that override everything

1. **Publish market figures, never hubStudio rate figures.** Cost content
   cites third-party benchmarks and category-level ranges. hubStudio's own
   numbers stay in the calculator output and the first call.
2. **China platform specs come from primary evidence only.** Seller backend
   screenshots, live app captures, real rejection notices. If it cannot be
   verified, it does not go on the page.

---

# PART 1: THE PLAN TO CLOSE THE GAP

## 1.1 Where the site stands

| Metric | Value |
|---|---|
| Indexed URLs | 101 |
| Insights and how-tos, all time | 25 |
| Pieces published in 2026 | 5 |
| Last insight published | 29 July 2026 |
| Last anything published | 12 August 2026 |
| Service pages | 20 |
| Platform pages | 13 |
| Case studies | 13 |
| Comparison or evaluation pages | 0 |
| Cost or benchmark pages | 0 |
| Original research assets | 0 |
| AI files served | 2 (llms.txt, llms-full.txt) |

Non-branded search presence: zero. Ten category searches were run against
hubstudio.ai (AI content studio, AI-native creative production agency, AIGC
video production, creative production at scale, ecommerce content production,
AI ad creative, offshore creative production, creative subscription, short
video production, China platform marketing). The domain returned no results
in any of them.

The architecture is not the problem. Clean Astro build, full schema graph, 20
service pages at 2,000 to 2,800 words, a 4,500-word glossary, and a platform
tree covering Douyin, RedNote, Tmall, JD, WeChat and Weibo alongside Amazon,
Shopify, TikTok and Meta. The problem is that nothing feeds it, and nothing
on it answers a question a buyer types when they have budget.

## 1.2 What the category looks like, and where the openings are

Ten comparable operations were audited on 8 and 9 September 2026 by sitemap,
feed and robots pull. Findings are stated as category patterns. No name from
that audit is ever carried into published copy.

**Publishing rate.** The active operations in this category publish between
3 and 25 pieces a month. hubStudio publishes 1.5. That single number is why
nothing else in this plan can work until cadence is fixed.

**Page types that demonstrably rank.** Evaluation and buying-model content,
cost content, spec content, and recurring named research. Commentary and POV
essays, which is all hubStudio currently publishes, rank for nothing.

**Pricing transparency.** Roughly six of ten publish real figures. The four
that hide them are the traditional agency-model operations. Published
subscription floors in this category have moved up sharply during 2026,
which has left brands spending roughly $3,000 to $12,000 a month on
production without an obvious answer.

**Recurring research is the highest leverage asset in the category.** One
operation publishes almost nothing except a benchmark report it has repeated
annually since 2020, and it returns six of nine results on its own query set
on that alone.

**The entity graph is the newest movement.** Author pages, tag pages, named
practitioner profiles and glossaries have been added at scale across the
category in the last twelve months. hubStudio has 16 named creatives on one
page and no author attribution on any article.

**Cost per asset is genuinely unanswered.** Three candidate benchmarks were
read in full. One publishes savings percentages with no sample size and no
absolute figures. One is ungated but aggregates about twenty secondary rate
cards and is published by a company selling rendering software. One is real
data at scale but measures creative volume and hit rate, not cost. The
absence is structural: agencies will not disclose unit cost because it
exposes margin, software vendors publish only figures that flatter their
pricing, consultancies gate. The position is open to anyone willing to
publish absolute numbers with a stated method and no email gate.

**China platform specs are empty ground.** Across roughly 12,000 audited URLs
there is no English page on Tmall PDP image requirements, Douyin creative
specs, RedNote production requirements, or AI brand ambassadors for Chinese
platforms. The operations that hold those search results write about buying
media and entering the market, not about how assets get made.

## 1.3 The seven gaps

**G1 Cadence.** 1.5 pieces a month against a category running 3 to 25. This
is the gap that makes every other gap unfixable.

**G2 Buyer-intent pages.** Zero evaluation, buying-model or decision pages.
This is where a budget holder lands, and hubStudio is absent from all of it.

**G3 Cost and economics.** The largest unclaimed territory in the category.
hubStudio publishes cost-reduction percentages on six pages and no absolute
figure anywhere.

**G4 Original research.** No named, dated, repeatable research asset.

**G5 The entity graph.** No author pages, no bylines, no practitioner
profiles feeding the knowledge graph.

**G6 Platform specs, China only.** 13 platform pages, 2,850 to 3,200 words
each, not a single dimension, duration, codec, file weight or safe zone
between them. Only `/services/design/ecommerce` carries real numbers.

**G7 The operational layer of rights and disclosure.** Law firms own the legal
queries and will keep them. Nobody publishes what a production workflow has
to record, per asset, to survive an audit.

## 1.4 What to fix, in order

### Step 1: infrastructure, before week one

Eight items. Prerequisites for the calendar, not parallel work.

| # | Item | Why | Effort |
|---|---|---|---|
| 1 | Split robots.txt by bot purpose | Blocking training bots (GPTBot, ClaudeBot, Google-Extended) costs nothing in AI answers. Blocking retrieval bots (OAI-SearchBot, Claude-SearchBot, PerplexityBot) deletes the site from AI answers entirely. Today's allow-all works by accident, not declaration | 1 hour |
| 2 | Verify retrieval bots actually reach the site | Fetch a live URL with each retrieval bot's user agent and confirm a 200, not a 403 or a challenge. Check the CDN, WAF and host rules, not just robots.txt. The highest-scored citation factor in the field is simply being fetchable | 30 min |
| 3 | Build `/llm-info` as a crawlable HTML page | An llms.txt is a file retrieval crawlers ignore. A real indexable page carrying Organization schema is one they can retrieve and cite. Only one operation in the category has built this | 1 day |
| 4 | Extend llms.txt with a positioning section and a "what we are not" section | Written to be lifted verbatim into an answer. hubStudio's file currently reads like a sitemap with sentences | 2 hours |
| 5 | Publish the quotation engine | It exists at `/pricing/calculator` and is blocked in robots.txt. Publish an indexable public version with market inputs and no hubStudio rate card in the output. Calculators are the best-converting asset type in this category | 1 week |
| 6 | Author pages for the 16 named creatives | Entity graph. Every article gets a byline linking to a real person with real markets and credits | 3 days |
| 7 | Rank tracker plus AI-answer monitoring | 60 target queries tracked. 25 buyer prompts run monthly across ChatGPT, AI Overviews, AI Mode, Perplexity and Claude, logged | 1 day |
| 8 | Claim directory profiles | Evidence conflicts on whether review platforms get cited in AI answers. Best reading is an eligibility gate. Claim the profiles, do not build a program | 1 day |

### Step 2: cadence, from week one

Four pieces a week, 17 a month. That puts hubStudio in the top three in the
category on new output. Never miss a slot. Batching four weeks ahead is fine,
gaps are not.

### Step 3: the four page types that close G2, G3, G6 and G7

Fixed weekly slots, so the mix cannot drift back to commentary.

| Slot | Day | Job | Words | Mandatory elements |
|---|---|---|---|---|
| A | Monday | The money page: buying models, cost, evaluation | 2,500 to 3,500 | Decision table, cost-band section, FAQ block |
| B | Tuesday | The spec page: China platform requirements from primary evidence | 1,200 to 2,000 | Spec table, annotated screenshot, rejection reasons, visible reviewed date |
| C | Thursday | The operations page: rights, provenance, procurement, workflow | 1,500 to 2,200 | A workflow, checklist or document structure the reader can use tomorrow |
| D | Friday | The proof page: craft, data, case | 900 to 1,600 | One number from hubStudio's delivery record with its method stated. Goes to LinkedIn and the newsletter the same week |

Slot B doubles up in weeks 6 to 8 while the spec queue is hot, and Slot D
takes the overflow. That is the only planned deviation.

### Step 4: three monthly builds, alongside the articles

**Month 1: the China spec library.** One hub page linking the ten spec
articles, one shared table format, one visible reviewed date, annual updates
in place rather than at new URLs. The library gets cited, the articles fill it.

**Month 2: the public cost instrument.** Publish the quotation engine. Inputs
the buyer already knows: asset type, volume, markets, formats, shoot or no
shoot. Output as a market range with the method visible and a source for
every band, not a hubStudio quote. Author pages ship the same month so
bylines have somewhere to point.

**Month 3: The Real Cost of Brand Content 2026.** Ungated, in HTML, sample
size and method on the page, absolute figures rather than savings
percentages, named external co-author. Every existing benchmark in this
category misses at least one of those four.

### Step 5: the off-site half

Four external mentions a month, sourced from the same research the articles
are built on. Trade press on the China production angle, one podcast or panel
a month, the benchmark in month three as the thing other people cite. Brand
mentions correlate with AI visibility at 0.664 against 0.218 for backlinks,
roughly three times stronger. It is the only lever a faster-publishing rival
cannot copy.

## 1.5 Territory: where to attack and what to leave alone

Forty-four queries run through live search on 9 September 2026. Verdicts are
based on whether ranking pages actually answer the query.

| Territory | Currently answered by | Verdict | To page one |
|---|---|---|---|
| Tmall and JD image requirements | Nobody | VACANT | 6 to 10 wks |
| Douyin creative specs and safe zones | TikTok pages, by mistake | VACANT | 6 to 10 wks |
| Cost to localize a campaign for China | Translation and game-loc vendors | VACANT | 10 to 14 wks |
| Automation platform against studio production | Software vendors only | VACANT | 8 to 12 wks |
| Cost per creative asset | Blogs and template spam | VACANT | 12 to 16 wks |
| China against India for creative production | One-sided, India only | VACANT | 8 to 12 wks |
| 11.11 and 618 production calendars | Western event planners | VACANT | 6 to 10 wks |
| Production roster review and consolidation | Trade news only | WEAK | 4 to 8 wks |
| WeChat and Weibo specs | Guides from 2021 and 2022 | WEAK | 4 to 8 wks |
| White label production for agencies | Software, two small studios | WEAK | 8 to 12 wks |
| Product photography cost per SKU | Small single-city studios | WEAK at volume | 10 to 14 wks |
| C2PA and content credentials | Tool vendors, thinly | WEAK | 8 to 12 wks |
| RedNote specs and production | Uncited tool sites | CONTESTED | 12 to 16 wks |

### Do not build these

- **Any named-vendor conquest page.** No "X alternatives", no "X vs
  hubStudio". Policy, not tactics. Those SERPs also hold a self-serve
  design-subscription audience that is not hubStudio's buyer, so the
  commercial case was weak regardless.
- **Amazon, Meta, TikTok and Shopify spec pages.** Commodity data the
  platforms publish themselves, refreshed by ten vendors every January, no
  buying intent. One platform's own help centre ranks second on its own
  query. The only legitimate entry is a free utility, not an article.
- **AI disclosure law and EU AI Act explainers.** Held by law firms and the
  European Commission. Not outrankable, and a production studio publishing
  legal analysis invites the wrong question. Use as supporting material
  inside an operations page, never as a target.

## 1.6 Sprint mode: how much more aggressive to go

Four a week already puts hubStudio in the top three in the category on new
output. The question is not whether to publish more. It is which constraint is
actually binding, and it is not writing speed. It is verification. The spec
cluster is the only asset here that a rival cannot copy, and it is only
uncopyable because every number in it was captured from a backend. Raising
editorial output past five a week means shipping specs that were not verified,
which converts the moat into an ordinary blog.

So: be more aggressive on sequencing and on assets, not on article count.

**A. Front-load the whole spec cluster into weeks 1 to 3.** All ten China
spec pages, instead of spread across eight weeks. They are the fastest pages
in the plan to rank, at six to ten weeks, so shipping them five weeks earlier
pulls the entire ranking curve forward by five weeks. This works only if the
backend capture for all six platforms happens in one session, before week one.
That single session is the highest-leverage half-day in this document.

**B. Pull both builds forward.** Calculator live in week 2 instead of month 2.
Benchmark published in week 6 instead of month 3. The benchmark is the
compounding asset: every week it is not live is a week nobody is citing it,
and citation is what the whole GEO layer runs on.

**C. Add a fifth weekly slot that is programmatic, not editorial.** Once the
capture from A exists, one verified data table generates twenty to thirty
platform-by-placement spec sub-pages that cost hours rather than days. Thin
but correct, each answering exactly one long-tail query, all feeding the spec
library hub. This is where the volume comes from, and it does not compete with
the research gate because the research is already done.

**What sprint mode looks like in numbers:**

| | Baseline | Sprint |
|---|---|---|
| Weeks 1 to 4 | 16 pieces | 24 pieces |
| Weeks 5 to 12 | 32 pieces | 32 pieces |
| Programmatic spec sub-pages | 0 | 20 to 30 |
| Calculator live | Month 2 | Week 2 |
| Benchmark live | Month 3 | Week 6 |
| Spec cluster complete | Week 8 | Week 3 |
| Total indexed by week 12 | 48 | 76 to 86 |

**What not to do, in order of how much damage it causes:** publish a spec
number that was not captured from a backend; skip the research gate to hit a
slot; go past five editorial pieces a week; buy volume with thin commentary,
which is the exact content type the audit found ranks for nothing.

The honest ceiling: sprint mode needs one more person or a compressed capture
session, and it front-loads roughly three extra weeks of work into month one.
If that is available, take it. If it is not, the baseline calendar still wins
the vacant ground, four weeks later.

---

# PART 2: THE 30 PIECES TO DRAFT NOW

Ordered by cluster, not by date. All 30 publish inside the first eight weeks.
Every target query was run through live search. The verdict is what the SERP
returned.

## Blocking task before cluster 1 ships

The Tmall specs could not be verified from open sources. The Taobao Rule
Center blocks external access. The three Chinese spec sites that publish them
agree on 800 by 800 and the five-image maximum but conflict on file size caps
(500KB against 3MB) and product fill ratio, and none distinguishes Tmall
Global from domestic Tmall or accounts for category variation.

**Someone with 千牛 seller-backend access must capture the current Tmall, JD,
Douyin, RedNote, WeChat and Weibo rule pages and upload screens before piece
01 is written.** That verification is the moat. No ranking English page has
done it.

---

## CLUSTER 1: CHINA PLATFORM SPECS (10 pieces)

### 01. Tmall product image requirements: the complete 2026 spec sheet
- **Query**: tmall product image requirements
- **Verdict**: VACANT. Top result is a coding tutorial. Only one result mentions Tmall in the body
- **Words**: 1,800. **Slot**: W1-B
- **Angle**: the only English page that gives the real numbers, cites the Taobao Rule Center, and separates Tmall domestic from Tmall Global
- **Must include**: main image count and dimensions; the five slots and what each is for; detail page width mobile against PC; formats and file weight; prohibited elements (promotional overlays, superlative claims, watermarks); the three most common rejection reasons with a screenshot of a real rejection; a category-variation note; a Tmall Global delta table
- **Confidence handling**: state which figures are platform caps and which are performance recommendations. Where sources conflict and backend capture is unavailable, publish the range and say why
- **Links**: /solutions/platforms/tmall, /services/design/ecommerce, spec library hub

### 02. The white-background image: the Tmall rule most brands fail
- **Query**: tmall white background image rules
- **Verdict**: VACANT. SERP drifts to Amazon and to background-removal tools
- **Words**: 1,400. **Slot**: W3-B
- **Angle**: own the concept that the fifth image is a white-background image (白底图) with its own separate rule set, which no English page explains
- **Must include**: what 白底图 is and where it surfaces in search and recommendation; pure white RGB 255; no text, watermark, logo, border, shadow or model; fill ratio guidance with the confidence caveat; a before and after; what happens to a listing that fails it
- **Links**: /solutions/platforms/tmall, /solutions/ai-production/image

### 03. Tmall flagship store decoration specs, module by module
- **Query**: tmall flagship store banner size specifications
- **Verdict**: VACANT. A physical signage vendor ranks in the top five
- **Words**: 1,700. **Slot**: W8-B
- **Angle**: a real module-by-module spec sheet, PC against mobile, that a designer can build from
- **Must include**: header and banner dimensions; floor module sizes; navigation; live tab; the mobile-first reality of Tmall traffic; how a 618 or 11.11 skin differs from an always-on store; an asset checklist for a full store refresh
- **Links**: /solutions/platforms/tmall, /solutions/brands

### 04. JD image requirements, and the twelve places they differ from Tmall
- **Query**: jd.com product image requirements
- **Verdict**: VACANT. Two of five results are about a different company that shares the initials
- **Words**: 1,700. **Slot**: W4-B
- **Angle**: the delta table nobody has published. A brand selling on both is producing two sets of assets and mostly does not know which parts differ
- **Must include**: JD main image rules; detail page; JD ad slot ratios (Jingzhuntong, Kuaiche); a side-by-side Tmall against JD table with a "same or different" column; what has to be reshot against what can be re-cropped
- **Links**: /solutions/platforms/jd, /services/design/ecommerce

### 05. Douyin video specs and safe zones: why a TikTok cut fails
- **Query**: douyin video specifications aspect ratio safe zone
- **Verdict**: VACANT. Every top result is about TikTok
- **Words**: 1,900. **Slot**: W2-B
- **Angle**: state plainly that Douyin is not TikTok in UI overlay geometry, and publish an annotated safe-zone diagram with pixel offsets
- **Must include**: resolution, aspect ratio, duration bands, codec, bitrate, file size; the UI overlay map with top, bottom, right-rail and caption zones measured; where a TikTok master's captions and end cards land on Douyin; cover frame requirements; sound-on assumptions; a re-export fix checklist
- **Links**: /solutions/platforms/douyin, /services/design/short-video

### 06. Douyin ad creative specs by format: TopView, in-feed, open screen
- **Query**: douyin ad creative specs 2026
- **Verdict**: WEAK. The ranking pages cover ad types and costs, never dimensions
- **Words**: 1,800. **Slot**: W6-B
- **Angle**: the creative spec sheet per format, sourced to Ocean Engine, with a visible reviewed date, where the incumbents answer a specs query with a media-buying article
- **Must include**: one table per placement covering dimensions, duration, file weight, title and copy limits, landing behaviour; what gets rejected and why; the production implication of each format (open screen needs a first-frame hero, in-feed needs a hook inside 1.5 seconds)
- **Links**: /solutions/platforms/douyin, /services/design/ad-creative

### 07. RedNote note and cover specs, verified against the live app
- **Query**: xiaohongshu image size note cover dimensions
- **Verdict**: CONTESTED. Several tool sites give 3:4 and 1080x1440, all uncited, one claiming verification against official docs while linking to none
- **Words**: 1,600. **Slot**: W5-B
- **Angle**: the only version with screenshots from the live app and a maintained changelog. Win on proof, not on being first
- **Must include**: note image ratios and counts; cover crop behaviour in feed against profile grid; video note specs; text safe areas; how the cover is cropped differently in search; a dated changelog block at the foot
- **Links**: /solutions/platforms/rednote, /services/design/social-media

### 08. WeChat specs in one place: articles, Channels, Mini Program
- **Query**: wechat official account article image size specs
- **Verdict**: WEAK. The canonical incumbent is from 2022 and a 2019 PDF also ranks
- **Words**: 2,000. **Slot**: W7-B
- **Angle**: pure recency plus consolidation. Three surfaces, one maintained page, dated
- **Must include**: OA article header and inline image sizes; cover thumbnail crops for the different card layouts; Channels video specs and how a Channels cut differs from a Douyin cut of the same shoot; Mini Program banner and card sizes; Tencent Ads placements
- **Links**: /solutions/platforms/wechat, /services/design/social-media

### 09. Weibo image and video specs for brands, updated for 2026
- **Query**: weibo image and video specs
- **Verdict**: WEAK. One real answer from 2022, plus a brand-logo library and three encyclopaedia entries
- **Words**: 1,300. **Slot**: W8-D
- **Angle**: the easiest single win in the set. No live competition at all
- **Must include**: post image counts and crops; nine-grid behaviour; video specs; cover images; Weibo ad placements; what changed since the 2022 guides that still rank
- **Links**: /solutions/platforms/weibo, /services/design/social-media

### 10. One shoot, six platforms: the China variant matrix
- **Query**: china social media creative asset variants
- **Verdict**: VACANT. Every result is a "top China platforms" listicle. Low search volume, high link value. A linkable asset, not a traffic play
- **Words**: 1,600. **Slot**: W2-D
- **Angle**: publish the actual matrix. One product shoot, six platforms, N ratios, M copy lengths, and the real asset count that comes out the other end
- **Must include**: the matrix as one wide table (platform down, asset type across); the total asset count for a single SKU launch; which cells are re-crops, which are re-edits, which need new capture; what you must capture on the shoot day to serve all six
- **Links**: /solutions, /solutions/ai-production/image, /work/diy-european-retailer

---

## CLUSTER 2: COST AND ECONOMICS (6 pieces)

Market figures and mechanics only. Category-level ranges, never a named rate
card. No hubStudio figures on any page.

### 11. What a finished brand asset actually costs in 2026
- **Query**: cost per creative asset benchmark
- **Verdict**: VACANT. No production company, trade body or consultancy publishes a usable answer
- **Words**: 3,200. **Slot**: W2-A. **This is the flagship**
- **Angle**: the first page that answers the question with absolute figures, a stated method, no email gate, and a clear definition of what one unit is
- **Must include**: a definition of "one finished asset" before any number; cost bands by asset type (static PDP image, lifestyle image, 15-second social cut, 30-second brand film, campaign adaptation); what is inside each band (direction, capture, retouch, versioning, clearance, PM); the four buying models compared as models, not firms (freelance, agency retainer, subscription, offshore studio) with published category price ranges and the date they were collected; why the existing benchmarks fail as a category (savings percentages instead of absolutes, no sample size, vendor-published, or measuring volume rather than cost) with no company named; a methodology box
- **Do not**: publish a hubStudio rate. Send that to the calculator
- **Links**: /pricing, the calculator, /the-studio/ai-excellence

### 12. Product photography cost per SKU, from 50 SKUs to 5,000
- **Query**: how much does ecommerce product photography cost per SKU
- **Verdict**: WEAK at volume. Head term crowded with single-photographer day-rate framing
- **Words**: 2,800. **Slot**: W6-A
- **Angle**: own the volume tier nobody covers. A real per-SKU cost curve with the breakpoints where studio capture plus generated extension beats pure photography
- **Must include**: the curve as a table at 50, 200, 500, 2,000 and 5,000 SKUs; fixed against variable cost split; what a day rate hides at volume (styling, sample logistics, reshoots, retouch queue); the 70/30 generated-to-shot mix and where that ratio moves; the published per-image retouch floor in the market, quoted as a category range, with the point that retouch is not production
- **Links**: /services/design/ecommerce, /solutions/retailers

### 13. What it costs to localize a global campaign for China
- **Query**: cost to localize a global campaign for China
- **Verdict**: VACANT for the production reading. SERP is translation SaaS and game-localization vendors
- **Words**: 3,000. **Slot**: W4-A. **Most defensible query in the set**
- **Angle**: localizing for China is a re-shoot and re-layout problem, not a translation problem. Software cannot fake a stage
- **Must include**: the cost stack (adaptation, re-shoot, model recasting, platform variants, copy transcreation, compliance and labeling, upload QA); why a Western master usually cannot be re-cropped; the asset count from piece 10 as the multiplier; what a translation quote leaves out, itemised; two worked examples at different budget levels
- **Links**: /solutions/brands, /solutions/platforms/tmall, /work/premium-suv

### 14. The all-in cost of AI video, and what the dollar-an-ad math leaves out
- **Query**: AI video production cost for brands
- **Verdict**: CONTESTED, but the ranking pages are conflicted: software vendors understate cost to sell seats
- **Words**: 2,700. **Slot**: W7-A
- **Angle**: the honest all-in figure, including the shot plates, direction, retakes, clearance and versioning that tool-side estimates leave out
- **Must include**: a line-by-line build of a real 30-second AI-assisted brand film; generation cost against total cost as a ratio; the retake and selection rate nobody publishes; rights clearance and talent releases as a cost line; the circulating $1 to $5 per AI ad figure quoted as a market claim and then unpacked; where AI genuinely does cost a fraction, with the conditions attached
- **Links**: /solutions/ai-production/video, /services/design/video-production

### 15. In-house studio or outsourced production: the fully loaded model
- **Query**: in-house creative studio cost vs outsourcing
- **Verdict**: WEAK. Heavily written about, thinly evidenced, nobody publishes a loaded model
- **Words**: 2,900. **Slot**: W8-A
- **Angle**: the costs in-house teams never book. Recruitment, idle capacity between campaigns, software seats, freelancer surge, and the share of headcount absorbed by trafficking and versioning
- **Must include**: a fully loaded annual model with every line named; the utilisation question, meaning what share of a salaried creative's year is on billable output; the fixed against variable argument; when in-house is genuinely right; the hybrid model (platform plus studio) as the third option; ANA data showing 82 percent of members run an in-house agency, up from 78 percent in 2018
- **Links**: /hub4you, /solutions/consulting

### 16. Campaign adaptation cost: pricing one master across N markets
- **Query**: campaign adaptation cost per market
- **Verdict**: VACANT, and the query does not resolve: search returns media budget articles. Define the category
- **Words**: 2,500. **Slot**: W8-C
- **Angle**: name the unit. One master, N markets, M formats, so a global brand can budget a toolkit rollout instead of guessing
- **Must include**: the unit definition; a rate structure by format family; where cost scales linearly with markets and where it does not; language, legal and platform variables; a worked toolkit example at 12 markets; the vocabulary buyers actually use (versioning, toolkit adaptation, master and adapt) so the page catches the real phrasings
- **Links**: /pricing, /solutions/agencies

---

## CLUSTER 3: BUYING MODELS AND EVALUATION (6 pieces)

Compares **models of buying** and **regions**. Never a firm. No conquest
pages, no named rate cards, no commentary on another company.

### 17. Your production roster is consolidating. The 14 questions to ask now
- **Query**: production agency roster review checklist, production partner review questions
- **Verdict**: WEAK. Trade news covers the industry shift, nobody has written the buyer's instrument
- **Words**: 2,800. **Slot**: W1-A. **Publish first**
- **Angle**: production has moved from a network-distributed model, where each agency ran its own studio, to centralised units attached to platforms. That is an industry fact, stated without naming anyone. Consolidation triggers roster reviews, and roster reviews are when production budgets move. Be the instrument that runs the review
- **Must include**: what centralisation changes in practice (who your producer reports to, what tooling your assets pass through, how utilisation drives pricing); the 14 questions in four groups, contract continuity, commercials, bidding conflict, platform and data exit; a copyable scoring table; the ANA 2017 production transparency findings; the point that the questions apply to every partner on the roster including hubStudio
- **Do not**: name any holding company, production unit, rebrand, executive, financial result or website. The piece works on the pattern, not on an example
- **Links**: /solutions/brands, /work, /pricing
- **Note**: an earlier draft of this piece was built around a named company. It is void. Rewrite from this brief

### 18. Automation multiplies, studios originate: platform or production partner
- **Query**: creative automation platform vs production studio
- **Verdict**: VACANT. Every ranking result is a software vendor comparing itself to other software vendors. The studio half of the query is unanswered
- **Words**: 3,000. **Slot**: W3-A
- **Angle**: the argument no software vendor can make. Automation multiplies assets you already have. It cannot originate the master. So the real question is who makes the master, and at what cost
- **Must include**: what each layer genuinely does well, described as layers rather than products; the handoff point between studio and platform; why the two are complementary, since the buyer usually already owns the stack; a cost comparison of the two layers; a decision table on volume, variation count and how much of the work is originated against adapted
- **Do not**: name any automation platform
- **Links**: /hub4you, /the-studio/ai-excellence

### 19. China or India for creative production: an honest comparison
- **Query**: china vs india offshore creative production
- **Verdict**: VACANT. Two of the top results are IT-outsourcing articles from the CIO and Computerworld era
- **Words**: 3,200. **Slot**: W5-A
- **Angle**: the China-side case, argued by an operator that also runs Philippines operations and can therefore concede where India wins. Regions, not companies
- **Must include**: an honest comparison table (cost, English fluency, time zones, talent pool scale, physical studio capacity, category proximity, IP and data, platform fluency); where India genuinely wins, stated first; where China wins (studio capacity, consumer electronics and beauty and fashion supply-chain proximity, native Douyin, RedNote and Tmall fluency); the data and IP question handled directly rather than dodged
- **Links**: /the-studio/who-we-are, /solutions/agencies

### 20. Offshore creative production in China: what it means in 2026
- **Query**: offshore creative production china
- **Verdict**: WEAK. The head term is held by India and Philippines coverage with no China facility story
- **Words**: 2,600. **Slot**: W7-C
- **Angle**: take the geographic long tail rather than the head term
- **Must include**: what offshore production actually looks like in China in 2026; the models available (dedicated team, project, platform); the 40 percent savings figure that circulates in the category, quoted as a market claim and then examined; data, contracting and payment mechanics; how to run a pilot
- **Links**: /the-studio, /pricing

### 21. Subscription or managed production: the unit you are buying
- **Query**: design subscription vs production partner
- **Verdict**: WEAK. Avoid the phrase "creative subscription vs production studio", which a January 2026 consumer product launch has polluted
- **Words**: 2,700. **Slot**: W6-C
- **Angle**: the unit of purchase. A subscription prices access to designers. Production prices delivered assets. That one distinction decides which model fits
- **Must include**: a comparison of the two models on the axis of what you are buying, not on features; published subscription price bands quoted as a category range with the collection date; the queue-and-capacity problem in subscriptions at volume; where a subscription is genuinely right; the mid-market gap that opened during 2026 as subscription floors rose
- **Do not**: name a subscription provider or attribute a price to one
- **Links**: /pricing, /solutions/brands

### 22. Twelve questions to ask an AI-native production partner
- **Query**: how to evaluate an AI content production partner
- **Verdict**: VACANT
- **Words**: 2,600. **Slot**: W5-C
- **Angle**: a procurement instrument, not a sales page. Written so a buyer can score three vendors with it, including hubStudio, and including questions hubStudio has to answer carefully
- **Must include**: twelve questions with, for each, what a good answer sounds like and what a weak one sounds like; a scoring table the reader can copy; questions on model ownership, training data provenance, likeness rights, labeling and disclosure, capacity and surge, revision policy, physical capability, data residency, and who actually does the work
- **Links**: /the-studio/ai-excellence, /contact

---

## CLUSTER 4: RIGHTS, PROVENANCE AND DISCLOSURE (4 pieces)

The legal head terms belong to law firms and the European Commission and will
stay there. These four take the operational layer, which no producer has
written. Every one carries a plain line: this describes production practice,
not legal advice.

### 23. China's AI labeling rules: what your production workflow has to do
- **Query**: china ai content labeling rules for brands, workflow
- **Verdict**: operational tail of a hard legal head
- **Words**: 2,400. **Slot**: W1-C
- **Verified facts**: the CAC Measures for Labeling of AI-Generated Synthetic Content, issued 14 March 2025 by CAC, MIIT, MPS and NRTA, effective 1 September 2025, with mandatory national standard GB 45438-2025 in force the same day. Two label layers: explicit (visible mark, opening-frame mark on video, voice cue on audio) and implicit (metadata carrying content attribute, provider name or code, content ID). Users must proactively declare. Removing, altering, forging or concealing a label is prohibited, as is supplying tools to do so. Distribution platforms verify metadata and add notices in three cases: confirmed, declared, suspected
- **Handle with care**: the allocation of duties between brand, agency and tool vendor is law-firm interpretation, not an explicit regulator statement. Write "generally treated as", never "requires". Do not publish a fine figure: penalties run through existing instruments and are still described as unclear
- **Must include**: a workflow diagram from generation through retouch, versioning, upload and archive, showing where each label attaches and where it can be lost; what an asset handover pack has to contain; the export-survives-download requirement and what it means for file formats; the February 2026 Xinhua enforcement figures, sourced
- **Links**: /resources/copyright-and-ai, /solutions/platforms/douyin

### 24. The disclosure audit trail: what a pipeline records per asset
- **Query**: ai content disclosure audit trail production
- **Verdict**: VACANT
- **Words**: 2,000. **Slot**: W2-C
- **Angle**: the operational layer law firms omit. What a production workflow has to record, per asset, to survive a disclosure audit in any jurisdiction
- **Must include**: the record schema (model and version, prompt, reference images and their rights status, human edits, approver, date, destination markets); how it is stored and for how long; who can ask for it and when; the three regimes it has to satisfy at once (China labeling, EU AI Act Article 50, US state disclosure laws) as a table of what each asks for; hubStudio's own audit trail as the worked example
- **Links**: /the-studio/ai-excellence, /resources/copyright-and-ai

### 25. Content Credentials in a real pipeline: where C2PA survives and where it breaks
- **Query**: c2pa content credentials for brands
- **Verdict**: WEAK. Tool-side coverage only, thinly, no producer voice
- **Words**: 2,200. **Slot**: W4-C
- **Angle**: the producer's view. Where credentials survive from capture through retouch, versioning and platform upload, and exactly where they get stripped
- **Must include**: a stage-by-stage survival table (capture, ingest, retouch, export, DAM, platform upload, social re-encode) marked survives, degrades or strips; which platforms preserve credentials today and which do not, tested rather than assumed; what to do when they break; an honest verdict on whether it is worth implementing now
- **Links**: /resources/glossary, /services/design/short-video

### 26. AI brand ambassadors: what you actually sign
- **Query**: ai avatar likeness rights talent release
- **Verdict**: VACANT on the practical side. Law firms explain the risk, nobody publishes what to sign
- **Words**: 2,300. **Slot**: W3-C
- **Angle**: the practical artifact. An annotated release structure from a studio that casts and captures the talent
- **Must include**: the clause map (scope, term, territory, permitted uses, retraining rights, derivative rights, revocation, compensation model, sunset and deletion); the difference between a scanned real person, a composite and a fully synthetic character, and how the paperwork changes; what happens when the campaign ends and the model persists; China labeling duties attaching to a digital human; the plain statement that a lawyer signs the final document
- **Links**: /solutions/ai-production/video, /resources/copyright-and-ai

---

## CLUSTER 5: HOW THE WORK IS MADE (4 pieces)

Each carries one number from hubStudio's delivery record with the method
stated on the page.

### 27. Shoot it or generate it: the decision rule, asset by asset
- **Query**: when to shoot vs generate product images
- **Verdict**: VACANT
- **Words**: 1,500. **Slot**: W1-D
- **Angle**: the rule an actual studio uses, published. The site already says one strong shoot of the hero product then AI for every colour variant, roughly 20 percent shot and 80 percent generated, and 70/30 on ecommerce. Explain when each ratio applies
- **Must include**: a decision table by asset type; the four conditions that force capture (texture and material truth, regulated categories, talent, physical scale); the conditions that favour generation; what goes wrong in each direction; the cost consequence of getting it wrong
- **Links**: /services/design/video-production, /solutions/ai-production/image

### 28. What a China ecommerce content pack contains, SKU by SKU
- **Query**: china ecommerce content pack deliverables
- **Verdict**: VACANT
- **Words**: 1,600. **Slot**: W3-D
- **Angle**: the deliverable list, itemised, so a buyer can compare quotes on the same basis for once
- **Must include**: the full manifest for one SKU across Tmall and JD; naming conventions and file structure; what a complete handover contains (source files, layered masters, metadata, provenance, retention terms); the 90-day retention question; a quote-comparison checklist
- **Links**: /services/design/ecommerce, /solutions/platforms/tmall

### 29. Training a brand model that stays on brand: 22 percent to 78 percent
- **Query**: custom brand model training aigc approval rate
- **Verdict**: WEAK
- **Words**: 1,600. **Slot**: W5-D
- **Angle**: the internal approval rate as the honest metric for AI content quality, with hubStudio's own move from 22 to 78 percent as the case, method stated
- **Must include**: what internal approval rate measures and why it beats any quality claim; the five-stage pipeline; what training data a brand model needs and what it must never contain; the 3 to 6 week training window; review gates; who owns the trained model at the end
- **Links**: /the-studio/ai-excellence, /hub4you

### 30. The 11.11 and 618 production calendar, counted backwards
- **Query**: singles day 618 content production timeline
- **Verdict**: VACANT. Results drift to Western event production and encyclopaedia entries
- **Words**: 1,900. **Slot**: W4-D
- **Angle**: a real reverse-engineered calendar with lock dates, asset counts and approval gates counted backwards from the sale date
- **Must include**: the full timeline as a table, week by week, from T minus 16 to launch; the platform milestones (registration, pre-sale, warm-up, main sale, restock); asset counts at each gate; what has to be locked before Chinese New Year in a 618 cycle; the two failure modes (late approval, late reshoot) and what they cost
- **Links**: /solutions/platforms/tmall, /solutions/retailers

---

# PART 3: THE 12-WEEK CALENDAR

48 pieces, 4 a week. Batch one (01 to 30) publishes weeks 1 to 8. Batch two
(31 to 48) is briefed in month two and publishes weeks 6 to 12.

## Weeks 1 to 4: take the vacant ground
Goal: 16 pieces indexed inside seven days each, first top-20 positions on
China spec queries.

| Week | Slot | # | Piece | Cluster |
|---|---|---|---|---|
| W1 | A | 17 | Your production roster is consolidating. The 14 questions to ask now | Buying models |
| W1 | B | 01 | Tmall product image requirements: the complete 2026 spec sheet | China specs |
| W1 | C | 23 | China's AI labeling rules: what your production workflow has to do | Rights |
| W1 | D | 27 | Shoot it or generate it: the decision rule, asset by asset | Craft |
| W2 | A | 11 | What a finished brand asset actually costs in 2026 | Cost |
| W2 | B | 05 | Douyin video specs and safe zones: why a TikTok cut fails | China specs |
| W2 | C | 24 | The disclosure audit trail: what a pipeline records per asset | Rights |
| W2 | D | 10 | One shoot, six platforms: the China variant matrix | China specs |
| W3 | A | 18 | Automation multiplies, studios originate: platform or production partner | Buying models |
| W3 | B | 02 | The white-background image: the Tmall rule most brands fail | China specs |
| W3 | C | 26 | AI brand ambassadors: what you actually sign | Rights |
| W3 | D | 28 | What a China ecommerce content pack contains, SKU by SKU | Craft |
| W4 | A | 13 | What it costs to localize a global campaign for China | Cost |
| W4 | B | 04 | JD image requirements, and the twelve places they differ from Tmall | China specs |
| W4 | C | 25 | Content Credentials in a real pipeline: where C2PA breaks | Rights |
| W4 | D | 30 | The 11.11 and 618 production calendar, counted backwards | Craft |

## Weeks 5 to 8: build the commercial layer
Goal: cost cluster complete, evaluation layer live, first page-one position.

| Week | Slot | # | Piece | Cluster |
|---|---|---|---|---|
| W5 | A | 19 | China or India for creative production: an honest comparison | Buying models |
| W5 | B | 07 | RedNote note and cover specs, verified against the live app | China specs |
| W5 | C | 22 | Twelve questions to ask an AI-native production partner | Buying models |
| W5 | D | 29 | Training a brand model that stays on brand: 22 to 78 percent | Craft |
| W6 | A | 12 | Product photography cost per SKU, from 50 SKUs to 5,000 | Cost |
| W6 | B | 06 | Douyin ad creative specs by format: TopView, in-feed, open screen | China specs |
| W6 | C | 21 | Subscription or managed production: the unit you are buying | Buying models |
| W6 | D | 31 | Amazon, Tmall, JD: one product, three listing builds | China specs |
| W7 | A | 14 | The all-in cost of AI video, and what the dollar-an-ad math leaves out | Cost |
| W7 | B | 08 | WeChat specs in one place: articles, Channels, Mini Program | China specs |
| W7 | C | 20 | Offshore creative production in China: what it means in 2026 | Buying models |
| W7 | D | 32 | Meta and TikTok against Douyin and RedNote: the same campaign, twice | China specs |
| W8 | A | 15 | In-house studio or outsourced production: the fully loaded model | Cost |
| W8 | B | 03 | Tmall flagship store decoration specs, module by module | China specs |
| W8 | C | 16 | Campaign adaptation cost: pricing one master across N markets | Cost |
| W8 | D | 09 | Weibo image and video specs for brands, updated for 2026 | China specs |

## Weeks 9 to 12: authority and proof
Goal: benchmark published and cited, category playbooks live, case studies
rebuilt with numbers.

| Week | Slot | # | Piece | Cluster |
|---|---|---|---|---|
| W9 | A | 33 | The Real Cost of Brand Content 2026: the benchmark, ungated | Research |
| W9 | B | 34 | Beauty content production in China: the category playbook | Playbook |
| W9 | C | 35 | The agency white-label question: NDA, contact rules, margin per asset | Buying models |
| W9 | D | 36 | How many variants a China launch actually needs | Data |
| W10 | A | 37 | Procurement's guide to buying AI content production | Buying models |
| W10 | B | 38 | Automotive content without shipping a car | Playbook |
| W10 | C | 39 | Turnaround: what days not weeks means, stage by stage | Operations |
| W10 | D | 40 | The 2026 model roster: which model for which asset | Craft |
| W11 | A | 41 | What a 48-hour binding proposal contains | Operations |
| W11 | B | 42 | Consumer electronics launch content: the six-week build | Playbook |
| W11 | C | 43 | Lip sync across 47 languages: what breaks and what it costs | Craft |
| W11 | D | 44 | Transcreation as a production line, not a translation service | Operations |
| W12 | A | 45 | Digital humans in China: build cost, run cost, labeling duties | Cost |
| W12 | B | 46 | Running a Tmall flagship's content, month by month | Playbook |
| W12 | C | 47 | Retouch at volume: the QA pipeline behind a 78 percent approval rate | Operations |
| W12 | D | 48 | HiSense rebuilt: eight weeks to a self-serve content platform | Proof |

## Build schedule alongside the calendar

| Week | Build |
|---|---|
| W1 to W2 | The eight infrastructure items from Part 1.4 Step 1 |
| W3 to W4 | China spec library hub page and shared table format |
| W5 to W8 | Public quotation engine, plus 16 author pages |
| W9 to W12 | The Real Cost of Brand Content 2026 benchmark |

---

# PART 4: PER-ARTICLE SPEC

Applies to every piece in Parts 2 and 3.

## Structure, non-negotiable

1. H1 carries the target query in the buyer's words.
2. First H2 restates the query. Directly under it, a 40 to 60 word answer that
   makes sense if it is lifted out of the page on its own, and that names
   hubStudio once.
3. One question per H2. No answer split across three sections.
4. Every figure named, dated and attributed inline, with the method in one
   sentence. Blockquote the important ones. Attribute to a category and a
   date, never to a competitor.
5. Tables for anything with values.
6. FAQ block of 5 to 8 questions in the words buyers type.
7. Spec pages carry a visible "Reviewed" date and are updated in place, never
   at a new URL. Money pages hide the publication date.
8. Author byline pointing at a real person on the team.
9. Three internal links minimum: cluster hub, one service page, one platform
   page. Plain-text references by name in body copy, never markdown links.
10. Rights and disclosure pieces state plainly that they describe production
    practice, not legal advice.
11. No summary or conclusion section, ever. End on the CTA.

## Editorial rules

- American English, US daily-newspaper journalist style
- No em dashes anywhere, ever. Commas, periods, parentheses, colons
- No planted typos or deliberate errors. Humanize through cadence, structure
  and word choice only
- All statistics in blockquote format with consistent attribution
- Chinese terms on first reference in a section: English term (Chinese
  characters). No pinyin. Example: RedNote (小红书)
- No "why work with us" self-promotion paragraphs
- **No competitor named, described, compared to or alluded to.** Ever

## Why these rules

They are the tactics that survive both the Princeton GEO study (KDD 2024) and
its NeurIPS 2025 replication, C-SEO Bench, which found most GEO tactics decay
to zero as adoption rises. What survives is what overlaps with plain content
quality. Ranked correlates from the Zyppy meta-analysis of 54 experiments,
May 2026:

| Signal | Score /10 |
|---|---|
| URL accessibility | 9.5 |
| Classic search rank | 9.4 |
| Query-answer match | 9.2 |
| Answer near the top | 8.8 |
| AI-ready structure | 8.6 |
| Factual specificity | 8.3 |
| Cites sources | 8.0 |
| Self-contained passages | 8.0 |
| Freshness | 7.0 |
| Structured data | 5.6 |
| llms.txt | 2.0 |

Two things not to believe. **llms.txt does close to nothing for retrieval**:
Ahrefs measured 137,210 domains in May 2026 and 97 percent of llms.txt files
received zero requests, with SEO audit tools the largest single category of
requests that did arrive. Google's AI-features documentation says no new
machine-readable files are needed. Keep the file, agents read it, do not
budget against it. **Schema is hygiene, not a lever**: Ahrefs' difference-in-
differences on 1,885 pages that added JSON-LD found no citation lift on any
platform. Ship Organization, Article, Person and Breadcrumb for entity
resolution. Do not ship FAQPage expecting a return.

---

# PART 5: OPERATING RULES

1. **Never name a competitor.** No conquest pages, no comparisons to firms,
   no named rate cards, no commentary on another company's news.
2. **Never miss a slot.** Batching four weeks ahead is fine. Gaps are not.
3. **Answer in the first sixty words**, under an H2 that restates the query.
4. **One question per heading.** Retrieval is chunk-level.
5. **Every number named, dated and sourced**, with the method in one sentence,
   attributed to a category rather than a company.
6. **Publish market figures, never hubStudio figures.**
7. **Spec pages carry a visible reviewed date** and update in place.
8. **Chinese platform pages from primary evidence only.**
9. **Every piece links to its cluster hub, one service page and one platform
   page**, with an author byline pointing at a real person.
10. **No page competes with a law firm.** Rights content is production
    practice, labelled as such.
11. **No page competes with a platform's own documentation.** Amazon, Meta,
    TikTok and Shopify spec content is out of scope unless it ships with a
    utility.
12. **Every piece through the ContentQuality pass**, and every Slot D piece
    becomes a LinkedIn post and a newsletter send the same week.
13. **Four external mentions a month.** Trade press, podcasts, panels, expert
    quotes.

---

# PART 6: MEASUREMENT

| When | What to check | Pass mark |
|---|---|---|
| Before week 1 | Instrumentation live: 60 queries tracked, 25 buyer prompts logged monthly across five AI surfaces, retrieval-bot fetch test passing, crawl logs split by bot | All eight infrastructure items shipped |
| Week 4 | Indexation and crawl | 16 of 16 indexed inside 7 days each. Retrieval bots seen in logs on new URLs |
| Week 8 | First rankings on the vacant cluster | 4 or more China spec queries in the top 20. First AI-answer citation on any of the 25 prompts |
| Week 12 | Commercial layer working | First page-one position. Calculator live and converting. Benchmark published with 5 or more external citations |
| Week 16 | Lagging measures | Non-branded organic sessions, calculator completions, attributable enquiries, referring domains to the benchmark |

AI-answer visibility has to be measured by running the prompts and logging
the answers. There is no rank tracker for it, brand mentions and cited domains
overlap by as little as 30 percent on some platforms, and being named without
being linked is a different outcome that still moves deals.

---

# PART 7: FACTS VAULT

Verified figures available for reuse. Every one checked on 8 or 9 September
2026. Attribute as shown. Nothing here names a competitor, and nothing that
would has been carried over.

## hubStudio's own, published on site

Studios in Shanghai, Changsha, Hong Kong and the Philippines. Founded 2024.
Founder Cyril Drouin, former Publicis Commerce CEO for China and North Asia.
16 named creatives, 13 nationalities. Output scaled 7x. Internal approval on
AI assets 22 percent to 78 percent. Custom model training 3 to 6 weeks. 70/30
generated-to-shot mix on ecommerce, 20/80 shoot-to-generate on variants.
48-hour binding proposal. 3 revision rounds. 90-day file retention. 35+
markets, 47 languages with lip sync. Cost reduction claims by page: 50 percent
(home), 60 to 80 (agencies, content), 50 to 70 (manufacturers), up to 40
(retailers), 70 (short video), 60 per variation (video).

Case studies with numbers: HiSense live on a self-serve platform in 8 weeks,
thousands of assets per week. Premium SUV, 70 percent budget cut, 3 weeks
against 6 months, 15 markets, 20+ environments, zero vehicles shipped.
Mexicash, 5 platforms in 5 days. 1834 Gin, 46-second film, 3 weeks from zero
assets. iFlytek AnyPin, 22 cuts, 3 techniques. L'infuseur, 2 weeks, 3
channels.

The only page on the site with hard platform numbers is
`/services/design/ecommerce`: Amazon 2,000px RGB 255 mains, Tmall 800x800
mains, 750x1,000 verticals, white slot under 300KB, titles inside 200
characters.

## Market ranges, quotable as category figures

Use these as bands with the collection date. Never attribute to a firm.

- Managed design subscriptions in this category publish monthly floors
  between roughly $6,000 and $15,000, with dedicated tiers from roughly
  $30,000, collected September 2026
- Self-serve AI video tools publish tiers between roughly $39 and $99 a month,
  collected September 2026
- Ecommerce retouch publishes a per-image floor around $1, collected
  September 2026
- Circulating market claims put AI-generated ad output at $1 to $5 per ad.
  Quote as a claim, then unpack what it excludes
- The offshore creative production savings figure circulating in the category
  is around 40 percent, published as a percentage with no absolute figures and
  no sample size

## Industry and regulatory

- ANA 2017 production transparency study: fewer than half of respondents
  required in-house bidding disclosure, over 60 percent did not require
  production rebates returned
- ANA: 82 percent of members run an in-house agency, up from 78 percent in 2018
- Ahrefs llms.txt study, May 2026: 137,210 domains, 97 percent zero requests
- Zyppy meta-analysis, 7 May 2026: 54 experiments, correlates table in Part 4
- Brand mentions correlate with AI visibility at 0.664, backlinks at 0.218
- Only 38 percent of Google AI Overview citations come from top-10 pages, down
  from 76 percent in mid-2025
- G2, March 2026, 1,076 B2B buyers: 51 percent start research with an AI
  chatbot more often than Google
- China: CAC Measures for Labeling AI-Generated Synthetic Content issued 14
  March 2025, effective 1 September 2025, with mandatory standard GB 45438-2025

## Do not publish without primary confirmation

1. **Tmall file size cap and product fill ratio.** Three Chinese sources
   conflict (500KB against 3MB; 60 percent against 70 to 80 percent fill).
   None distinguishes Tmall Global from domestic or accounts for category
   variation.
2. **Allocation of AI-labeling duties** between brand, agency and tool vendor
   under the CAC Measures. Law-firm interpretation, not a regulator statement.
   Write "generally treated as", never "requires".
3. **Penalties under the CAC Measures.** Not specified as a new schedule.
   Enforcement runs through existing instruments. Do not publish a fine figure.

## Sources

Princeton and IIT Delhi GEO study, KDD 2024: arxiv.org/abs/2311.09735
C-SEO Bench, NeurIPS 2025: arxiv.org/abs/2506.11097
Zyppy meta-analysis: ppc.land/23-factors-that-actually-get-your-content-cited-by-ai-search-engines/
Ahrefs llms.txt study: ahrefs.com/blog/llmstxt-study/
Ahrefs schema and AI citations: ahrefs.com/blog/schema-ai-citations/
Ahrefs AI Overview citations: ahrefs.com/blog/ai-overview-citations-top-10
Semrush AI Visibility Index: semrush.com/news/463141-semrush-releases-expanded-2026-ai-visibility-index-analyzing-126-million-ai-search-prompts/
G2 AI Search Insight Report: learn.g2.com/g2-2026-ai-search-insight-report
Google AI features docs: developers.google.com/search/docs/appearance/ai-features
OpenAI crawler docs: developers.openai.com/api/docs/bots
Anthropic crawler docs: support.claude.com/en/articles/8896518
Perplexity bot docs: docs.perplexity.ai/guides/bots
CAC Measures translation: chinalawtranslate.com/en/ai-labeling/
Loeb on GB 45438-2025: loeb.com/en/insights/publications/2025/03/chinas-ai-labeling-measures-and-mandatory-national-standards-take-effect-september-1
Xinhua enforcement, Feb 2026: english.news.cn/20260210/2f7003ab7953408ca2da3559a14bb22e/c.html
ANA production transparency 2017: ana.net/content/show/id/pr-2017-production-transparency
