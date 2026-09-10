# Research: jd-image-requirements-vs-tmall

| Field | Value |
|---|---|
| Brief | 04 |
| Target query | jd.com product image requirements |
| Gap statement (one sentence) | Nobody publishes a JD against Tmall image delta that separates the specs where the two platforms genuinely differ from the specs where they only appear to differ because the sources disagree with each other, so a brand producing for both is reshooting on the strength of a difference that may not exist. |
| Method | Modal-value method, per deviation 7 in `../CLAUDE.md`, decided 2026-09-10. Not primary. |
| Research time spent | About 80 minutes active, Chinese-language web first, eight query sets, twenty-four pages classified |
| Written | 2026-09-10 |

## Method statement, printed before anything else

Neither platform rule centre is readable without a seller session. That was
established at primary level for brief 28 on 2026-09-10 and is not re-run here:
`rule.tmall.com/tdetail-11423.htm` returned 302 to `rulechannel.tmall.com/tmall`
which returned a further 302 and no rule body, and `rule.jd.com/rule/ruleDetail.action`
returned the rule-centre heading and no rule text on two different rule ids.

So every number below is a **modal published value**, not a platform reading.
For each spec, every published figure found was recorded, the figures were
counted, and the value published is the one that appears most often, with the
count shown and the spread kept where it is material.

**The collection.** Twenty-four published pages carry at least one JD or Tmall
image spec value. Nine were fetched and read in full on 2026-09-10. Ten were
read through search-result extracts on the same day. Five are carried forward
from the brief 28 collection of 2026-09-10. Twenty-three are Chinese-language.
One is English-language, and that ratio is itself a finding.

**Three cautions that apply to every row.**

1. Three of the twenty-four pages are three dated 2026 versions from one
   publisher, and those three versions contradict each other on JD file size,
   JD detail width, Tmall file size and Tmall fill ratio. Counting them as
   three agreements would inflate several modes. They are counted as pages and
   flagged as one publisher everywhere it changes the answer.
2. The JD detail-page width family (790 desktop, 750 mobile, 990 page) traces
   to a 2018 developer-blog post identified in the brief 28 collection, which
   later pages restate. A value repeated often but originating once is not a
   strong mode.
3. The JD advertising creative size splits cleanly by page age. Older undated
   seller-service pages give one size, 2026 pages give another. That is a stale
   figure still in circulation, not a disagreement about the present.

## R4. Chinese-language web first

Searched in Chinese before English, per R4. Search terms are romanized here and
mapped in the romanization table at the foot of the file.

Queries run, in order:

1. `jingdong shangpin zhutu chicun yaoqiu baidi tu xiangqingye kuandu 790`
2. `tianmao zhutu chicun 800x800 daxiao xianzhi xiangqingye kuandu 750 guifan`
3. `jingdong zhutu shuliang zuiduo daxiao bu chaoguo 1M baidi tu RGB 255 shangpin zhanbi`
4. `jingdong kuaiche jingzhuntong tuiguang tu chicun bili guifan`
5. `jd.com product image requirements main image white background detail page width` (English)
6. `jingdong zhutu shipin guifan shichang bili daxiao tianmao zhutu shipin`
7. `jingdong shangpin tupian guifan zhutu chicun bu xiaoyu 800 geshi xiangqingye`
8. `taobao zhitongche chuangyi tu chicun jingdong kuaiche chuangyi tu chicun`

What the Chinese web gave that the English web did not: everything. Every
numeric value in this file came from a Chinese-language page. The English web
returned no page carrying a JD spec table at all.

## R2. SERP map

### Query 1, Chinese, JD main image and detail page

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | jd.com/phb/zhishi | Platform-hosted knowledge article | JD main image optimization tips | Redirects to an error page on fetch. Not rule text | Undated |
| 2 | wap.zol.com.cn | Question and answer thread | A user asking the same question | Anecdote, no rule link | Undated |
| 3 | gaoding.com | Design tool article | JD main image and detail width | Published 2020-12-16, still surfacing as current | 2020 |
| 4 | secaiyun.com (2026-05-13) | Design vendor doc | Cross-platform table, JD and Tmall | No rule link, no method | 2026-05 |
| 5 | secaiyun.com (2026-07-12) | Design vendor doc | Same table, different numbers | Contradicts its own 05-13 version | 2026-07 |
| 6 | biaojixia.com/specs | Tool vendor spec library | Cross-platform quick reference | No rule link, tells the reader to check the backend | 2026 |
| 7 | secaiyun.com (2026-06-27) | Design vendor doc | Same table again, third set of numbers | Contradicts both siblings | 2026-06 |
| 8 | riseton.com | Seller-service blog | JD detail page width | Gives a width no other page gives | 2025-04-07 |

### Query 2, Chinese, Tmall main image and detail page

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | zhidao.baidu.com | Question and answer thread | Taobao and Tmall sizes | Crowd answer, undated body | Undated |
| 2 | blog.csdn.net | Developer blog | Main and detail sizes | The 2018 ancestor post several 2026 pages restate | 2018 |
| 3 | biaojixia.com/specs/taobao | Tool vendor spec page | Tmall mains, white slot, video | No rule link | 2026 |
| 4 | secaiyun.com (2026-07-12) | Design vendor doc | As above | As above | 2026-07 |
| 5 | gemhues.com | Blog cross-platform table | Tmall and JD side by side | Blocks direct fetch, read via extract | 2026 |
| 6 | secaiyun.com (2026-05-13) | Design vendor doc | As above | As above | 2026-05 |
| 7 | biaojixia.com/specs | Tool vendor spec library | As above | As above | 2026 |
| 8 | secaiyun.com (2026-06-27) | Design vendor doc | As above | As above | 2026-06 |
| 9 | focalflow.app | Tool vendor blog | Tmall white-slot table | Blocks direct fetch, 403 | Undated |

### Query 5, English, the primary query as a buyer types it

Four successive English searches on the primary query and its rephrasings
returned roughly thirty results. Classified:

| Class | Count | Examples of what was returned |
|---|---|---|
| Answers for a different marketplace, mostly one Western one | 18 | Seller-forum threads, retouch vendor guides, photography studio blogs |
| Stock photo and image-library pages matching the letters JD | 4 | Photo agency search pages |
| Background-removal tool landing pages targeting JD sellers | 1 | One tool vendor page, carries a JD background rule and a minimum pixel value |
| China market-entry guides with no image specs at all | 1 | One agency guide, updated 2026-06-04, zero numbers |
| Off-topic entirely | 6 | Infrastructure case study, a wiki list, unrelated |
| Pages carrying a JD image spec table | 0 | None |

**This is the strongest SERP finding in the brief.** The brief predicted the
English query was vacant with two of five results about a different company
sharing the initials. It is worse than that. Across roughly thirty English
results, exactly one page carries any JD image rule, and it is a tool vendor
landing page carrying two values. No English page publishes a JD spec table,
and no English page anywhere publishes a JD against Tmall comparison.

### Query 4 and 8, Chinese, advertising creative sizes

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | musicheng.com | Seller question and answer | JD advertising creative size | Undated, gives the older size | Undated |
| 2 | mgzxzs.com | Store-decoration tool site | Creative rules and banned words | Undated, gives the older size | Undated |
| 3 | taoqueqiao360.com | Seller-service article | Creative specification summary | Undated | Undated |
| 4 | maijiaw.com | Seller portal | Creative size and how to build one | Undated | Undated |
| 5 | zhouxiaohui.cn | Personal seller blog | How to add a creative | Undated | Undated |
| 6 | secaiyun.com (2026-07-12) | Design vendor doc | Advertising sizes for both platforms | 2026 values, different from the five above | 2026-07 |
| 7 | zhuanlan.zhihu.com (three posts) | Practitioner explainers | Ad product families and how they work | Product overviews, no creative specs | 2022 to 2026 |
| 8 | baike.baidu.com | Encyclopedia entry | What the ad platform is | No specs | Undated |

**The bar.** The ranking pages run 600 to 1,600 words, carry one table or none,
and answer a single platform. Not one page in any of the eight result sets
carries a JD against Tmall delta table. Not one states how many sources a
number came from. Not one carries a reviewed date. The bar to beat is 1,700
words with a delta table that flags real differences against sourcing
artifacts, a reshoot against re-crop table, and a visible method and reviewed
date. Two tables clears the field. Three with the source counts in them wins it
outright, because nobody else is showing their working.

**H1 consequence.** Every ranking page presents its numbers as facts. The gap
is not another number. The gap is the distinction between a difference that is
real and a difference that is an artifact of who published what.

## R1. What has to be true before looking anything up

Listed before searching. Each is resolved in the tables below.

1. JD publishes image requirements distinct from Tmall's.
2. Those requirements are reachable, or their absence is itself reportable.
3. JD main images have a stated pixel floor and a stated ratio.
4. JD has a white-background rule, and it sits in a different slot from Tmall's.
5. JD detail pages have a stated width, and it differs from Tmall's.
6. Both platforms cap file size, and the caps differ.
7. Both platforms cap the number of main images.
8. Both platforms accept a main image video with stated duration and ratio.
9. JD advertising creatives have their own sizes, separate from listing images.
10. Some of the differences between the two platforms are real and some are
    artifacts of disagreeing sources, and the two can be told apart by counting.
11. A brand can tell, from the delta, which assets need a reshoot and which
    need only a re-crop.

Item 10 is the piece. Items 3 through 9 all resolve as modal, never primary.
Item 2 resolves as an absence at primary level, already logged.

## The spec table

Confidence is `consensus` where the modal value is carried by a clear majority
of the pages that address the spec at all, `contested` where it is not, and a
value found once is `contested` without exception.

The last column is the product. `Real` means the sources that give both
platforms give them different values, consistently. `Artifact` means the
apparent difference comes from sources disagreeing with each other rather than
from the platforms differing. `Same` means the sources agree the two platforms
match, so there is no difference to manage.

| Spec | JD modal value | Tmall modal value | Sources agreeing (JD / Tmall) | Confidence | Real difference or sourcing artifact |
|---|---|---|---|---|---|
| Main image pixel floor | 800 by 800 | 800 by 800 | 9 of 10 / 8 of 9 | consensus / consensus | Same. No page in the collection puts the two floors at different values |
| Main image recommended size | 1200 by 1200 | 1000 by 1000 or higher | 3 of 4 / 3 of 6 | contested / contested | Artifact. The spread on Tmall runs 1000, 1200 and 1440, and the pages carrying 1200 for JD carry 1200 for Tmall too |
| Main image ratio | 1:1 square | 1:1 square | 6 of 6 / 7 of 7 | consensus / consensus | Same |
| Main image file size cap | 1MB | 500KB | 4 of 6 / 4 of 6 | contested / contested | Artifact, and the weakest row on the page. JD appears as 500KB on two pages and 1MB on four. Tmall appears as 500KB on four and 3MB on two, which is hard block 1 in the ledger, still unresolved. One publisher gives JD 500KB twice and 1MB once across three 2026 versions |
| Accepted formats | JPG and PNG, GIF on some pages | JPG and PNG, GIF by category | 5 of 7 / 5 of 6 | consensus / consensus | Same |
| Which slot is the white-background image | The first main image | The fifth main image | 5 of 5 / 5 of 5 | consensus / consensus | **Real.** Every page that names a slot puts JD's white image first and Tmall's fifth. No page in the collection contradicts this. This is the single most reliable difference found |
| White-background color value | Pure white, RGB 255 255 255 | Pure white, RGB 255 255 255 | 2 of 5 state a value / 4 of 5 state a value | contested / consensus | Same where stated. Most JD pages assert pure white without printing an RGB triplet |
| Product fill ratio in the white slot | No value published | 70 to 80 percent | 0 of 24 / 2 of 4 | not published / contested | Artifact in the making. The 60 to 70, 70, and 70 to 80 spread on Tmall is unresolved, and nobody publishes a JD figure at all. Do not infer one |
| Maximum main images | 5 | 5 | 2 of 2 / 4 of 4 | contested (thin) / consensus | Same. The JD count rests on two pages, which is why it is contested despite matching |
| Detail page width, desktop | 790px | 790px | 5 of 9 / 4 of 6 | contested / contested | **Artifact, and this is the one that costs money.** JD desktop appears as 647, 750, 790, 990 and 1000 across the collection. Tmall appears as 750 and 790. The pages that publish both platforms mostly publish the same pair for both. The widely believed JD 790 against Tmall 750 split is a comparison between two sources, not between two platforms |
| Detail page width, mobile | 750px | 750px | 4 of 6 / 5 of 6 | contested / consensus | Same, with one page insisting JD unifies desktop and mobile at 790 |
| Single detail image height cap | 1500px | 1500px | 3 of 4 / 3 of 5 | consensus / contested | Same. Tmall also appears at 2000px on one page |
| Detail image file size cap | 1MB | 500KB | 2 of 4 / 2 of 4 | contested / contested | Artifact. JD runs 300KB, 1MB and 3MB across the collection, Tmall runs 500KB and 3MB. Nothing here is stable |
| Detail page image count | About 30 | 8 to 15 mobile, up to 50 desktop | 2 of 2 / 1 of 3 | contested / contested | Artifact. Every figure is phrased as a recommendation, not a limit, and no two pages agree |
| Main image video ratio | 1:1 or 3:4 | 1:1 or 3:4, 9:16 on one page | 3 of 4 / 2 of 3 | consensus / contested | Same on the two shared ratios |
| Main image video duration | 15 to 60 seconds | 9 to 30 seconds recommended, platform window far wider | 3 of 5 / 2 of 4 | contested / contested | Artifact. JD also appears as 6 to 90 seconds and 30 to 60 seconds. Tmall's platform window appears as 5 seconds to 5 minutes on one page and 15 to 60 on another. The 9 to 30 figure is advice, not a rule |
| Main image video file size | 50MB | 50MB | 2 of 3 / 2 of 3 | contested / contested | Same |
| Advertising creative, search placement | 800 by 800, with 800 by 1200 long form | 800 by 800, with 800 by 1200 long form and 790 by 390 banner | 2 of 7 current / 2 of 3 | contested / contested | Artifact plus a stale-figure problem. Five undated seller pages give JD 350 by 350 at 50KB in JPG. Two 2026 pages give 800 by 800. The 350 figure is an older generation still circulating, not a live disagreement |
| Text area on an advertising creative | Under 30 percent | Under 30 percent | 1 of 1 / 1 of 1 | contested / contested | Same where stated, found once, do not lean on it |
| Banned content on a product image | Price, manufacturer name, third-party logo, unrelated text or graphics | Watermarks, contact details, text over one third of the frame | 3 of 3 / 2 of 2 | contested / contested | Cannot be called. Both lists are plausible and neither traces to a rule page. Sources describe them differently enough that no comparison is safe |

### What the table says in one line

Of twenty rows, one difference is solid, three are structural at best, and the
two differences buyers act on most, detail page width and file size cap, are
the two least reliable rows on the page.

## R1 and R5. Claims table

### What is verifiable, at primary level

| Claim | Source | Date | Sample | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| Neither platform rule centre serves rule text to an unauthenticated request | rule.tmall.com, rulechannel.tmall.com, rule.jd.com | fetched 2026-09-10, brief 28 | 4 requests, 2 platforms, 2 JD rule ids | Direct unauthenticated fetch, redirect chain and response body recorded | nobody, own observation | primary |
| The English-language web publishes no JD image spec table. Across roughly thirty results on four English phrasings, one page carries any JD image rule and it is a tool vendor landing page | Own search review | 2026-09-10 | ~30 results, 4 queries | Every result classified by page type and by what it answered | nobody, own observation | primary, as an observation about the category |
| One design publisher issues three separately dated 2026 spec guides that contradict each other on JD file size cap, JD detail width, Tmall file size cap and Tmall fill ratio | The three dated versions, read in full | fetched 2026-09-10 | 3 versions, 1 publisher | Read side by side, values compared row by row | a design vendor, on its own content pages | primary, as an observation about the sources |
| Across the whole collection, the JD desktop detail-page width appears at five different values: 647, 750, 790, 990 and 1000 | 9 pages carrying a JD detail width | 2018 to 2026 | 9 pages | Counted, not averaged | vendors | primary, as an observation about the spread |
| Every page in the collection that names a white-background slot puts JD's first and Tmall's fifth | 5 pages per platform | 2020 to 2026 | 10 statements | Counted, no contradicting page found | vendors | triangulated, and the strongest modal row here |
| The JD advertising creative size splits by page age, not by disagreement: five undated seller pages give one size, two 2026 pages give another | 7 pages | undated to 2026-07 | 7 pages | Grouped by publication date before counting | seller-service and design vendors | triangulated as an age effect |

### What is modal only, and must never be called verified

Every numeric row in the spec table above sits here. Each is a count of
published figures, not a reading of a platform rule. None may be described as
official, confirmed, required, or read from a seller backend.

### What is not published at all

| Claim | Why it is absent |
|---|---|
| A JD product fill ratio for the white-background image | Zero of twenty-four pages publishes one. Several publish a Tmall figure. Inferring JD's from Tmall's would be an invention |
| Any JD hard limit on detail page image count | Every figure found is worded as a recommendation |
| Any JD or Tmall figure separating cross-border from domestic | Hard block 1 in the ledger flags this and nothing found this round changes it |
| Any figure that varies by product category, though several pages say variation exists | Nobody publishes the category table |
| Official creative specs from the JD advertising platform documentation | The brief asks for the ad platform documentation specifically. It was not reached. Every ad figure here is a vendor restatement |

## Cleared for use

Ready to paste. Each blockquote is followed by its source line, and every
source line states the method, the count, the languages, the date, and that the
value is modal rather than primary.

**1. The method itself, which has to run before any number appears.**

> Neither platform publishes its image rules where a buyer can read them.
> On 10 September 2026 the Tmall rule centre redirected twice and returned no
> rule body, and two different JD merchant rule pages returned the rule-centre
> heading and nothing else. Every figure below is the most commonly published
> value, not a value read from a platform.
> Source: 24 published pages carrying at least one JD or Tmall image spec, 23
> Chinese-language and 1 English-language, collected 10 September 2026, counted
> per value with the mode published and the spread kept. Modal value, not a
> primary reading.

**2. The one difference that holds.**

> The white-background image sits in a different slot on each platform. Every
> page in the collection that names a slot puts JD's white image first in the
> carousel and Tmall's fifth. Ten statements across ten pages, no page
> contradicting.
> Source: 10 published pages, 5 per platform, Chinese-language, collected 10
> September 2026, counted with no contradicting page found. Modal value, not a
> primary reading.

**3. The difference everyone acts on, which the sources do not support.**

> The detail-page width difference between the two platforms may not exist.
> Across the pages that publish a JD desktop detail width, the figure appears
> as 647, 750, 790, 990 and 1000 pixels. The most common is 790, carried by
> five of nine. The most common Tmall desktop figure is also 790, and the pages
> that publish both platforms usually publish the same pair for both, 790
> desktop and 750 mobile.
> Source: 9 published pages carrying a JD detail width and 6 carrying a Tmall
> detail width, Chinese-language, collected 10 September 2026, values counted
> rather than averaged. Modal value, not a primary reading.

**4. The file size caps are the least reliable rows on the page.**

> The file size caps do not settle. JD's main image cap appears as 500KB on two
> pages and 1MB on four. Tmall's appears as 500KB on four and 3MB on two. One
> design publisher issues three separately dated 2026 guides that give JD 500KB
> twice and 1MB once. Build to the smallest figure in the range and nothing
> gets rejected on size.
> Source: 6 published pages per platform, Chinese-language, collected 10
> September 2026, counted per value with the full spread reported. Modal value,
> not a primary reading.

**5. Where the two platforms simply match.**

> Four specs come back the same on both platforms in every source that
> addresses them: the 800 by 800 pixel floor, the 1:1 square ratio, the
> accepted JPG and PNG formats, and the five-image carousel maximum. A brand
> producing for both is not producing two sets of main images at two sizes.
> Source: between 6 and 10 published pages per spec, Chinese-language,
> collected 10 September 2026, counted per value. Modal value, not a primary
> reading.

**6. The English-language absence.**

> Four English phrasings of the primary question returned roughly thirty
> results and not one page carrying a JD image spec table. Most results
> answered for a different marketplace, several were stock photo listings
> matching the letters, and one market-entry guide updated in June 2026 carried
> no numbers at all.
> Source: 4 English queries run 10 September 2026, every result classified by
> page type and by what it answered. Stated as an absence, with the search
> date.

**7. The stale advertising figure.**

> One circulating advertising creative size is a generation out of date. Five
> undated seller-service pages give a 350 by 350 pixel creative at 50KB in JPG.
> Two pages dated 2026 give 800 by 800 with an 800 by 1200 long form. The split
> is by publication age, not by disagreement, which is what a stale spec looks
> like when it keeps getting restated.
> Source: 7 published pages carrying a JD advertising creative size,
> Chinese-language, collected 10 September 2026, grouped by publication date
> before counting. Modal value, not a primary reading.

**8. The reshoot against re-crop consequence, stated as reasoning not as rule.**

> On the specs where the sources agree the platforms match, ratio, pixel floor
> and format, a Tmall main image is a JD main image. On the one spec where the
> sources agree the platforms differ, the white-background image moves from
> slot five to slot one, which is a re-sequence rather than a reshoot. What
> forces new capture is not the platform, it is the content rules: the two
> platforms describe different lists of banned on-image elements, and neither
> list traces to a reachable rule page.
> Source: derived from the spec table above, 24 published pages collected 10
> September 2026, reasoning stated openly and resting on modal values rather
> than primary readings.

## Do not publish

### Hard blocks for this brief

| Item | Reason it is blocked |
|---|---|
| **Any spec value presented as official, required, verified, or read from a seller backend** | Deviation 7 permits the modal value with its count and its disclaimer. It permits nothing stronger. Every value here is a count of published pages |
| **A JD product fill ratio for the white-background image** | Zero of twenty-four pages publishes one. Carrying Tmall's 70 to 80 percent across to JD would be a fabricated figure with a real-looking number attached |
| **The Tmall file size cap or fill ratio as a settled number** | Hard block 1 in the ledger. The 500KB against 3MB and 60 against 80 percent conflicts are still live, and nothing this round distinguishes cross-border from domestic or accounts for category variation. Publish the spread and the count, never a single value |
| **The JD detail width as a clean 790 against a Tmall 750** | This is the article's central correction. Presenting it as a real difference would reproduce the exact error the piece exists to fix |
| **Any advertising creative size without its age flag** | The 350 by 350 figure is still the top Chinese result on the obvious query and it is a generation old |
| **The numbers on hubStudio's own ecommerce design service page** | Already flagged in the ledger as needing backend re-verification. Reference the page by name, lift no figure from it |
| **Any conversion, click or return-rate claim attached to image quality** | Every one found is seller-published with no sample and no period. Already logged do-not-publish from briefs 12 and 27 |
| **Any hubStudio rate, monthly figure or per-item price** | Standing rule |

### Quarantined domains

Every source below is a vendor, tool seller, seller-service site, community
board or marketplace blog. None may be named, linked, described or alluded to
on the page. Platforms may be named. Counts are the pages from that domain in
this collection.

| Domain | Pages | What it published | Why it is quarantined |
|---|---|---|---|
| secaiyun.com | 4 | Cross-platform spec guides dated 2026-05-13, 2026-05-19, 2026-06-27 and 2026-07-12 | Design vendor, no rule link, no method, and the versions contradict each other |
| biaojixia.com | 2 | A cross-platform spec library and a Taobao and Tmall page, both 2026 | Tool vendor spec library, no rule link |
| gaoding.com | 1 | JD main image and detail width, published 2020-12-16 | Design tool marketing, five years old, still ranking |
| riseton.com | 1 | JD detail page width, 2025-04-07 | Seller-service marketing, publishes a width no other page gives |
| tbadc.com | 1 | Cross-platform detail page table, 2026 | Vendor reference table, no rule link |
| hwds868.com | 1 | Detail page standards, published 2026-04-18 and updated 2026-05-27 | Seller-community content page, no rule link |
| gemhues.com | 1 | Cross-platform image size table, 2026 | Blog content page, blocks direct fetch |
| focalflow.app | 1 | Tmall main image and white slot table | Tool vendor, blocks direct fetch |
| zhuanlan.zhihu.com | 5 | JD main image rules, ad platform explainers, self-operated store guidance | Self-published, undated bodies |
| blog.csdn.net | 1 | Main and detail sizes, 2018 | The likely ancestor of the 790, 750 and 990 family |
| zcool.com.cn | 1 | Cross-platform decoration specs | Designer community post, no rule link |
| 53shop.com | 1 | JD main image size and requirements | Seller-supply portal |
| musicheng.com, mgzxzs.com, taoqueqiao360.com, maijiaw.com, zhouxiaohui.cn | 5 | JD advertising creative size at the older value | Seller-service pages, all undated, all carrying a stale figure |
| milguo.com | 1 | JD main image video specs | Warehouse-service blog, page failed to render |
| photoroom.com | 1 | JD background rule and pixel floor, English | Tool vendor landing page selling background removal |
| appinchina.co | 1 | JD seller onboarding guide, English, updated 2026-06-04 | Agency page. Standing rule bars naming it, and it carried no specs anyway |
| zhidao.baidu.com, wap.zol.com.cn | 2 | Crowd answers on sizes | Anecdote, undated |
| baike.baidu.com | 1 | Encyclopedia entry on the ad platform | No specs |
| ichengzi8.com, aiyongtech.com, tudingai.cn | 3 | Tmall main image and white slot values, carried from brief 28 | Design and tool vendors, no rule link |
| sellercentral, junglescout, sellerlabs, squareshot, pathedits, pixofix, salesduo, jpg.now, educardz, asincrate, isjdesigns, catalogx, graphicdesigneye, clippingpath | 14 plus | Image requirements for a different marketplace | Wrong platform entirely. Listed so the next writer does not re-open them |

### Failed the bar

| Claim | Where it came from | Why it is cut |
|---|---|---|
| JD main image 800 by 1200 as a standard size | The 2020 design tool article | The page gives two sizes and does not say what the second one is for. Single source, five years old |
| JD detail page width 647px | One 2026 vendor table | Found once, and it sits far outside every other value. Report it inside the spread, never as a value |
| JD detail page width 1000px | One 2025 seller-service page | Found once, contradicted by every other page |
| JD desktop and mobile unified at 790px | One 2026 page | Found once, and it is the only page asserting the two are equal |
| JD main image video at 6 to 90 seconds | One search extract | Single source, and it conflicts with the 15 to 60 mode |
| Tmall 1440 by 1440 for some categories | One tool vendor page | Single source, and the categories are not named |
| Tmall detail page total height 8000 to 12000px, or a 30000px maximum | Two vendor pages giving different figures | Two sources, two numbers, no agreement, both phrased as advice |
| Tmall mobile detail page limited to 22 images | One search extract carried from brief 28 | Single source, undated |
| JD product title limited to 60 characters | One seller-service explainer, brief 28 | Single source, undated, and it is not an image spec |
| Any claim that JD is stricter than Tmall on white backgrounds | A Chinese search summary phrased it that way | The underlying pages do not support a strictness ranking. They support a slot difference. Write the slot, not the ranking |
| Any statement that a spec was confirmed in a seller backend | Nowhere. It would be an invention | Nobody in this collection had a seller session, including this researcher |

## Screenshot inventory

Nothing captured. The captures below are the only route from modal to primary,
and each one names the rows it would upgrade. Save to
`research/jd-image-requirements-vs-tmall/` with the date in the filename.

| File | What it shows | Rows it upgrades | Captured | Source surface |
|---|---|---|---|---|
| jd-backend-image-upload-2026-09-10.png | The JD listing image upload panel with its stated pixel floor, file size cap, accepted formats and image count | JD main image floor, file size cap, formats, max images | not yet | JD seller workbench, needs a seller session |
| jd-backend-whitebg-slot-2026-09-10.png | The white-background slot as the backend labels it, including its position in the carousel and any stated fill guidance | White-slot position, RGB value, and the JD fill ratio nobody publishes | not yet | JD seller workbench |
| jd-backend-detail-editor-2026-09-10.png | The detail page editor showing the canvas width it renders to and any per-image height or size cap | JD detail width desktop and mobile, height cap, image file size cap, image count | not yet | JD seller workbench |
| jd-backend-video-upload-2026-09-10.png | The main image video upload panel with duration, ratio and size limits | JD video duration, ratio, file size | not yet | JD seller workbench |
| jd-ad-platform-creative-specs-2026-09-10.png | The advertising platform creative upload screen with current creative sizes and the text-area rule | Every advertising row, and it settles the stale 350 by 350 figure outright | not yet | JD advertising platform, needs an advertiser account |
| jd-rejection-notice-2026-09-10.png | A real rejection notice naming the rule and the failing element | The banned-content row, which currently cannot be called at all | not yet | JD seller workbench notifications |
| tmall-backend-image-upload-2026-09-10.png | The Tmall listing image upload panel with cap, formats and count | Tmall file size cap, hard block 1 in the ledger | not yet | Tmall seller workbench, needs a seller session |
| tmall-backend-whitebg-slot-2026-09-10.png | The white-background slot with its position and any stated fill percentage | Tmall fill ratio, hard block 1, and the slot difference at primary level | not yet | Tmall seller workbench |
| tmall-backend-detail-editor-2026-09-10.png | The detail editor canvas width and per-image limits | Tmall detail width, height cap, image count | not yet | Tmall seller workbench |
| jd-listing-live-app-2026-09-10.png | A live JD listing showing carousel order and where the detail block starts | Confirms the first-slot white image as rendered | not yet | Live JD app, no login needed |
| tmall-listing-live-app-2026-09-10.png | The equivalent on Tmall showing the fifth-slot white image in the carousel | Confirms the fifth-slot white image as rendered | not yet | Live Tmall app, no login needed |

The two live-app captures need no seller session and would move the single
strongest row in this file from modal to observed. They are the cheapest
upgrade available and should be taken before the piece is drafted if anyone can
reach the apps.

## Romanization table

No Han characters and no full-width punctuation appear in this file, per the
project rule. Every Chinese term needed for this brief is mapped here so the
writer never has to reach for the characters.

| Romanization | English name to use on the page | What it is |
|---|---|---|
| Jingdong | JD | The platform this brief is about |
| Tianmao | Tmall | The comparison platform |
| Taobao | Taobao | The consumer marketplace alongside Tmall, often quoted in the same spec table |
| Jingdong shangjia guize zhongxin | JD merchant rule centre | The gated rule centre |
| Taobao guize zhongxin | Taobao Rule Center | The Tmall and Taobao equivalent, also gated |
| Jingmai | Jingmai | The JD seller workbench where the backend specs live |
| Qianniu | Qianniu | The Taobao and Tmall seller workbench |
| Jingzhuntong | Jingzhuntong | The JD advertising platform family |
| Jingdong kuaiche | JD Kuaiche | The search advertising product inside it |
| Zhitongche | Zhitongche | The Taobao and Tmall search advertising product |
| zhutu | main image | The carousel images on the listing card and page |
| zhutu shipin | main image video | The video that sits in the carousel |
| baidi tu | white-background image | The pure-white slot, first on JD and fifth on Tmall in every source found |
| xiangqingye | detail page | The long scrolling image block below the buy box |
| shouji xiangqingye | mobile detail page | A separately sliced deliverable, not a resize |
| kuandu | width | The unit every detail page argument turns on |
| chicun | dimensions | Used in every spec table found |
| daxiao | file size | The cap that will not settle |
| geshi | format | JPG, PNG, GIF |
| bili | ratio | 1:1, 3:4, 9:16 |
| shangpin zhanbi | product fill ratio | The share of the frame the product occupies in the white slot |
| tupian guifan | image specification | The class of rule this brief models rather than verifies |
| shangpin xinxi fabu guifan | product information publishing standard | The JD rule family that governs listing content |
| chuangyi tu | advertising creative image | The ad unit, separate from the listing images |
| dianpu zhuangxiu | store decoration | Storefront banners and modules around the listings |
| guize | rule | As in rule centre |

## R8. Reconciliation (filled after drafting)

Reconciled 2026-09-10, after drafting and after the quality pass.

**All eight cleared blockquotes shipped** with their attributions unchanged,
each carrying its domain count, languages, collection date and the words "Modal
value, not a primary reading".

**The disclaimer block from SPEC.md runs verbatim** immediately after the
opening answer and before the first spec table, with NN = 24 and the date 10
September 2026. A second reminder to confirm in the seller backend sits in the
closing paragraph and in the first FAQ answer.

**The H1 was changed from the brief, on the evidence.** The brief promised
"the twelve places they differ from Tmall". This file found one difference that
holds (the white-background slot), one that is a sourcing artifact (detail
width) and one that is unsettled (file caps). The H1 now reads "the one place
they really differ", and the asset brief records the change.

**The spec tables honor the five-column ceiling without dropping counts.** The
JD table carries a sources-agreeing column and a confidence column as SPEC.md
requires. The delta table puts the counts inside the JD and Tmall cells so it
stays at four columns, and its verdict column keeps "a sourcing artifact" and
"unsettled on both" as distinct verdicts rather than collapsing them to yes and
no.

**The one row where the mode is wrong is called out on the page.** Advertising
creative sizes split by publication age: five undated pages carry the superseded
350 by 350 figure and two dated 2026 pages carry 800 by 800 with an 800 by 1200
long form. A straight count would publish the stale figure. The draft says so
and lets the date win.

**Every must-not held.** No JD product fill ratio is printed, and the page states
that zero of 24 pages publishes one. The detail-width difference is presented
as a sourcing artifact, with the 2018 origin of the repeated JD width family
noted. Neither platform's file cap is presented as settled. JD is never called
stricter on white backgrounds. No rejection reasons are ranked. No figure is
lifted from hubStudio's own ecommerce design service page, which is referenced
by name only. Neither rule centre is cited as the source of any number, and no
value is described as official, required or verified.

**One inference was kept inside its cleared form.** The reuse-and-reshoot
section rests on cleared quote 8, which is explicitly labeled as reasoning from
modal values. The reuse table restates that reasoning per asset and introduces
no new figure.

**The brief's third link does not exist.** /resources/specs, the China spec
library hub, is not built. The retailers solutions page was substituted.

**Open at publish time.** No annotated screenshot was obtained and none is
reconstructed. Two captures from the inventory, a live JD listing and a live
Tmall listing in the apps, need no seller session and would upgrade the
white-background slot row from modal to observed.
