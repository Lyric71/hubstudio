# Research: tmall-flagship-store-decoration-specs

| Field | Value |
|---|---|
| Brief | 03 |
| Target query | tmall flagship store banner size specifications |
| Gap statement (one sentence) | No page in English or Chinese publishes Tmall store decoration sizes with the age of each figure attached, so desktop-era store sign and carousel sizes from 2018 to 2023 sit beside a 2026 mobile module change to 1440 pixels wide as if both were current, while the English query returns banner printers and storefront themes for other platforms. |
| Method | Modal-value method, per deviation 7 in `../CLAUDE.md`, decided 2026-09-10. Not primary, except the two scoped primary readings named below. |
| Research time spent | About 65 minutes active, Chinese-language web first, 20 web searches (one refused by the search tool), 18 page fetches attempted, 12 read and 6 failed |
| Written | 2026-09-10 |

## Method statement, printed before anything else

The Tmall rule center is not readable without a seller session. That was
established at primary level on 2026-09-10 for briefs 28, 01 and 04 and is not
re-run here: `rule.tmall.com/tdetail-11423.htm` returned 302 to
`rulechannel.tmall.com/tmall`, which returned a further 302 and no rule body.

Store decoration adds a second wall. The sizes live inside the store builder in
the seller workbench, not in a rule document, so even a readable rule center
would not print them. The one platform-hosted page on decoration found this
round is readable and prints no module dimension (scoped primary reading 1
below).

So every store decoration number below is a **modal published value**, not a
platform reading. For each spec, every published figure found was recorded,
counted by domain (one domain counts once however many pages it carries), and
the value published is the one that appears most often, with the count shown
and the spread kept.

**The collection.** Nine independent Chinese-language domains carry at least one
numeric Tmall or Taobao store decoration value in a page that was fetched and
read in full on 2026-09-10. Zero English-language pages carry one. Several
further values appeared only inside search-result summaries that did not tie
the figure to a domain; those are recorded under "Failed the bar" and are **not
counted**.

**Two scoped primary readings.**

1. **Taobao open platform documentation**, `developer.alibaba.com/docs/doc.htm?treeId=418&articleId=103994`,
   read without a login on 2026-09-10, page stamped as last updated 2017-08-08.
   It covers the decoration interfaces that let a seller push content to the
   mobile store homepage and related surfaces. It prints **no** module
   dimension, file cap or format. It sends the seller to the mobile seller
   center, behind a login, to edit the homepage. Its only dimension is a code
   example for a detail-page banner element at 640 wide by 200 tall. Scope: it
   is primary evidence that the platform does not publish decoration sizes in
   its open documentation, and that a 640 wide mobile canvas was the working
   width of the 2017 interface generation. It is not evidence of any current
   size.
2. **Alibaba Group quarterly results release**, SEC exhibit
   `sec.gov/Archives/edgar/data/1577552/000110465915072968/a15-21796_1ex99d1.htm`,
   released 2015-10-27, read 2026-09-10: "Mobile GMV accounted for 62% of total
   GMV transacted on our China retail marketplaces in this quarter", for the
   quarter ended 2015-09-30. Scope: a primary share of transaction value, not
   of traffic, for all China retail marketplaces combined, not Tmall alone,
   eleven years old. The search that surfaced it did not surface a later
   disclosure of the same metric.

**Four cautions that apply to every row.**

1. **The Chinese results are mostly desktop-era.** Of the nine counted domains,
   five are dated 2018 to 2023 or carry relative ages that place them there.
   Desktop store sign and full-screen carousel rows therefore reach consensus
   easily, and that consensus is old.
2. **Most pages say Taobao, not Tmall.** Only three domains separate a Tmall
   value from a Taobao value, and none of the three is dated 2026. No page
   dated 2026 gives a Tmall-specific desktop value.
3. **The mobile store sign family is a restatement chain.** The three pages
   carrying 750 by 580 at 400KB (dated 2020, 2024 and 2026) share near-identical
   wording. The oldest is the 2020 page. Three domains, one likely origin.
4. **The mobile module width splits by age, and the mode is the stale value.**
   640 appears on the oldest material, 750 on 2021 to 2024 pages, 1200 on a
   2022 to 2023 Tmall table and on 2026 product modules, and 1440 on one page
   dated 2026-05-21 that quotes a change notice. Counting alone would publish
   750. Dates say otherwise.

## R4. Chinese-language web first

Searched in Chinese before English, per R4. Search terms are romanized here and
mapped in the romanization table at the foot of the file.

Queries run, in order:

1. `tianmao qijiandian dianpu zhuangxiu chicun dianzhao 1920 950 lunbotu guifan`
2. `tianmao wuxian duan shouji dianpu shouye zhuangxiu chicun kuandu 1200 lunbotu 2025`
3. `taobao wangpu PC duan dianzhao chicun 950x120 quanping haibao 1920 daohang 150`
4. `taobao shouji dianpu shouye zhuangxiu xinban lunbotu chicun 1200 kuan zidingyi mokuai dianzhao 750 2026`
5. `tianmao qijiandian wuxian duan shouye dianpu zhuangxiu mokuai chicun kuandu 750 1200 dantu haibao lunbo 2025 2026`
6. `shuang shiyi dianpu fenwei zhuangxiu tianmao dacu dianpu pifu huichang shouye yu richang qubie chicun`
7. `taobao dianpu zhuangxiu zhibo tab dianpu shouye zhibo mokuai chicun shezhi`
8. Quoted change-notice text: `dantu haibao, requ qietu, lunbotu haibao 1440 144 2400 dianpu zhuangxiu gonggao`
9. `taobao tianmao yidong duan chengjiao zhanbi liuliang zhanbi wuxian duan Alibaba caibao`
10. Store decoration help text, restricted to platform domains. **Refused by the search tool**: taobao.com is not accessible to its crawler. A tool limit, not a platform finding
11. `tianmao shouji duan dianzhao chicun 750 254 wuxian dianzhao tianmao qijiandian beijing tu`
12. `tianmao shuang shiyi dacu dianpu shouye fenwei zhuangxiu yure qi zhengshi qi genghuan haibao dianzhao`
13. `taobao dianpu zhibo tab dianpu shouye zhibo biaoqian kaiqi qijiandian zhuangxiu`
14. `Alibaba caibao yidong duan GMV zhanbi zhongguo lingshou pingtai`
15. `taobao dianpu zhuangxiu sucai kuandu 1440px gaodu 144px 2400px shouji daping 3 yue gengxin wangpu`
16. `2026 taobao tianmao dianpu zhuangxiu chicun PC duan shouji duan dianzhao lunbotu fenlei daohang guifan huizong`
17. `tianmao shuang shiyi shangjia shijue guifan VI sucai logo shiyong guifan dianpu zhuangxiu fenwei dacu xiazai`
18. English: `tmall store decoration banner size specifications PC mobile` (the tool ran five phrasings)
19. English: `Alibaba quarterly results mobile GMV percentage of total China retail marketplaces last disclosed`

What the Chinese web gave that the English web did not: every decoration
number in this file. What neither gave: a live tab spec, a promotion skin spec,
a decoration rejection notice, or a current mobile share of Tmall traffic with
a method.

## R2. SERP map

### Query 1, Chinese, desktop store sign and carousel

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | picwish.cn | Design tool size page | Taobao and Tmall sign, homepage widths, both devices | No file caps, no formats for Tmall, no mobile modules | 2022-08-19, updated 2023-03-01 |
| 2 | zcool.com.cn (post A) | Designer community post | Tmall sign with nav, posters, carousel heights | Desktop only | About 2020 (page says six years ago) |
| 3 | zcool.com.cn (post B) | Designer community post | Sign, desktop column split, mobile 640 grid, mobile sign 750 by 254 | Describes the retired 640 mobile grid as current | About 2020 |
| 4 | blog.csdn.net | Developer blog | Taobao homepage and detail norms | Not fetched | 2020 (id 107508365) |
| 5 | shejidaren.com | Design blog | Cross-platform sizes | 403 on fetch, extract only, not counted | Undated |
| 6 | jingyan.baidu.com | How-to article | Sign, nav, header background, mobile sign | Taobao only | 2020-05-21 |
| 7 | secaiyun.com | Design vendor doc | Detail page widths | Detail pages, not decoration | 2026-05-19 |
| 8 | kaitao.cn | Seller-service article | Tmall homepage carousel size | Certificate error on two fetches, not counted | 2025-10-13 |
| 9 | jiulangdianshang.com | Seller tutorial | Taobao store sign | Taobao only | Undated (id 160) |

### Query 2, 4 and 5, Chinese, mobile homepage modules

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | diantuoyi.com | Seller-service article | Mobile module table, 2026 generation, quoted change to 1440 wide | Table prints 1400, notice says 1440; year of the change not printed | 2026-05-21 |
| 2 | biaojixia.com | Tool vendor spec page | Main images | No decoration sizes | 2026 |
| 3 | mmker.cn | Aggregation page | Mobile sign 642 by 200, 750 width, category button, announcement block | Aggregates several older posts | 2023-08 to 2024-01 |
| 4 | kukeyun.com | Course site | Designer size list | Not fetched | Undated |
| 5 | hwds868.com | Seller-community guide | Detail page widths | Detail pages; its banner guide was read separately | 2026 |
| 6 | secaiyun.com (two guides) | Design vendor docs | Detail and main images, a "90 percent mobile" claim | No decoration sizes, no method on the claim | 2026-05 |
| 7 | jiulangdianshang.com | Seller tutorial | Taobao sign desktop and mobile | Taobao only | 2026-03-14 |

### Query 3, 11 and 16, Chinese, store sign and 2026 roundups

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | aiyongtech.com | Tool vendor article | Sign desktop and mobile, caps, formats, gradient note | Taobao only | 2024-06-21 |
| 2 | yidian51.com | Seller-service glossary | Tmall sign with 990 code area, nav, carousel height band | Mobile width only | 2021-09-28 |
| 3 | hwds868.com (banner guide) | Seller-community guide | Desktop carousel, safe zone, mobile carousel, caps | No sign, no nav | 2026-04-27, updated 2026-06-08 |
| 4 | wap.zol.com.cn | Question and answer | Sign size | Anecdote | Undated |
| 5 | seo-lv.com | Template vendor | Desktop and mobile table | Connection closed on fetch, not counted | Undated |
| 6 | zhihu.com (two) | Q and A and column | Sign desktop and mobile | Not fetched | 2020 to 2021 |
| 7 | blog.csdn.net | Developer blog | Taobao, Tmall and JD sizes | Fetch failed, not counted | 2018 (id 82855234) |

### Query 6, 12 and 17, Chinese, promotion skins

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | woshipm.com, digitaling.com (three), codesign.qq.com | Design commentary | Color, angle and mascot choices on the platform's own campaign pages | No merchant store sizes at all | 2016 to 2023 |
| 2 | cbndata.com, cnstock.com, m.163.com | Business news | Campaign timing and mechanics | No store decoration content | 2021 to 2024 |
| 3 | ixunke.com, 58pic.com | Course and template sites | Campaign plans, template downloads | No sizes | Undated |
| 4 | insight.xiaoduoai.com | Seller-service article | Campaign logo and visual identity rules come from the event guide page, may need a store login, released about a month ahead | Single source, no sizes | Undated |
| 5 | secaiyun.com (two), nuanque.com, ibaotu.com, sytuku.com | Logo and VI guides, logo downloads | Generic identity advice and old campaign logos | Nothing about a store skin | 2016 to 2026 |

### Query 7 and 13, Chinese, live tab

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | gaoding.com | Template gallery | Store homepage templates | No live tab spec | Undated |
| 2 | developer.alibaba.com | Platform open documentation | Decoration interfaces | Readable, no dimensions, 2017. Scoped primary reading 1 | 2017-08-08 |
| 3 | insight.xiaoduoai.com, diantuoyi.com, zhihu.com, shuaishou.com | Seller explainers | How to open store live streaming and where the entry shows | No live tab dimension or module spec anywhere | 2019 to 2026 |
| 4 | fkdmg.com | Seller tutorial | Homepage single-video module | Socket failure on fetch, not counted | Undated |

### Query 18, English, the primary query as a buyer types it

The tool ran five English phrasings and returned roughly forty results. Classified:

| Class | Count | Examples of what was returned |
|---|---|---|
| Storefront theme and page-builder guides for a Western ecommerce platform | About 20 | Banner size cheat sheets, theme help threads |
| Physical banner and signage printers | About 7 | Vinyl banner size charts, one in the top five, as the brief predicted |
| Generic web and ad banner size guides | About 6 | IAB size lists, social banner cheat sheets |
| A sister Southeast Asian marketplace | 2 | A seller tool help page and a 2022 sizing post |
| English agency or media pages about Tmall store design | 2 | One design blog and one 2019-era flagship store feature article; extracts carried no dimension, not fetched |
| Off-topic | About 3 | A smart speaker encyclopedia entry, retail interior decoration listings |
| Pages carrying a Tmall store decoration dimension | 0 | None |

## The bar

The Chinese ranking pages run 300 to 1,200 words, carry one list or one table,
answer Taobao more often than Tmall, lead with desktop sizes, and date no
figure. Not one page separates the 2026 mobile module generation from the
desktop-era sizes it sits beside. Not one says how many sources carry a number.
Not one covers the live tab or a promotion skin with a dimension. The English
field has no entrant at all.

The bar to beat is the brief's 1,700 words with: a desktop table and a mobile
table, each showing source counts; an age flag on every row where the sources
split by date; a stated absence for the live tab and the promotion skin rather
than invented sizes; a refresh checklist; and a visible method and reviewed
date. Two tables clear the field. The age flag wins it, because the one thing
every ranking page gets wrong is treating a 2020 size as a 2026 size.

**H1 consequence.** The working H1 promises "module by module". The research
supports module by module for desktop with consensus, and for mobile only as an
age-split range. The H1 can stand if the mobile section says so plainly.

## R1. What has to be true before looking anything up

Listed before searching. Each is resolved below.

1. Tmall publishes store decoration dimensions somewhere a buyer can read them.
2. The desktop store sign and navigation bar have a stated size, and Tmall's
   differs from Taobao's.
3. The desktop full-screen carousel has a stated width and height.
4. The mobile store homepage has a stated module width, and it differs from
   desktop.
5. The mobile store sign has a stated size.
6. Carousel, poster and hot-zone modules on mobile have stated sizes.
7. Category and navigation images have stated sizes.
8. Decoration images carry file caps and format rules.
9. The live tab has its own spec.
10. A 618 or Singles' Day store skin uses different sizes or different modules
    from an always-on store.
11. Mobile carries a stated share of Tmall traffic, with a date and a method.
12. Decoration uploads get rejected for stated reasons.
13. The sizes have changed over time, and the sources can be dated.

Resolution: 1 is false at primary level (scoped primary reading 1). 2, 3 and 5
resolve as modal. 4 and 6 resolve as an age-split range, not a mode. 7 is
single-source. 8 is contested throughout. 9 and 10 resolve as absences. 11
resolves only as an eleven-year-old primary figure for transaction value, not
traffic. 12 is single-source. 13 is the piece.

## The spec tables

Confidence is `consensus` where the modal value is carried by a clear majority
of the domains that address the spec at all, `contested` where it is not, and a
value found on one domain is `contested` without exception. "Sources agreeing"
counts domains among the nine counted domains that address the row.

### Desktop store

| Spec | Modal value | Range across sources | Sources agreeing | Confidence |
|---|---|---|---|---|
| Store sign plus navigation bar, total band height | 150px | 150 on every domain giving a total. Split 120 sign plus 30 nav on 3, 130 plus 20 on 1. Dated about 2020 to 2026 | 5 of 5 | consensus |
| Store sign height, sign alone | 120px | 120 on 4, 130 on 1. One domain also allows 150 when the sign covers the default nav | 4 of 5 | consensus |
| Store sign width, standard, as published for Taobao | 950px | 950 on every domain giving a standard width, 2020 to 2026 | 6 of 6 | consensus |
| Store sign and page content width, Tmall | 990px | 990 on all 3 domains that separate Tmall from Taobao. One adds a 790 plus 150 two-column split. Newest of the 3 is dated 2023; no 2026 page separates Tmall | 3 of 3 | contested (thin, and no page newer than 2023) |
| Full-width header background behind sign and nav | 1920 by 150px | Width 1920 on all 5. Height 150 on 4, 120 on 2 (one domain gives both) | 5 of 5 width, 4 of 5 height | consensus |
| Navigation bar height | 30px | 30 on 2, 20 on 1 | 2 of 3 | contested |
| Full-screen carousel or poster width | 1920px | 1920 on every domain giving a width, about 2020 to 2026 | 5 of 5 | consensus |
| Full-screen carousel or poster height | 600px | 550 or 600 on 1, 600 on 1, a 400 to 800 band on 1, unlimited on 1 | 2 of 4 | contested |
| Store sign file cap and format | 80KB, JPG, GIF or PNG | Found on 1 fetched domain (2024) | 1 of 9 | contested |
| Full-screen image file cap | 3MB | 3MB on 1 (2026), under 1MB for the page background on 1 (2023) | 1 of 2 | contested |
| Safe content zone on a 1920 image | Center 950px | Found on 1 fetched domain (2026) | 1 of 9 | contested |
| Store logo | 80 by 80px | Found on 1 domain (2023) | 1 of 9 | contested |

### Mobile store

| Spec | Modal value | Range across sources | Sources agreeing | Confidence |
|---|---|---|---|---|
| Mobile store sign | 750 by 580px | 750 by 580 on 3 (2020, 2024, 2026, all labeled Taobao, near-identical wording). 750 by 254 on 1 (about 2020, alongside the retired 640 grid). 642 by 200 on 1 (2023 to 2024). 280 by 50 on 1 (2023) | 3 of 6 | contested |
| Mobile store sign cap and format | 400KB, JPG or PNG | 400KB on all 3 domains giving a cap; the same 3 as the row above | 3 of 3 | consensus among the 3, restatement caveat applies |
| Mobile homepage module width | 750px by count, 1440px on the newest page | 640 on 1 (about 2020; the 2017 platform doc code example is also 640). 750 on 3 (2021 to 2024). 1200 on 2 (a 2023 Tmall table, and 2026 product modules). 1400 in a table and 1440 in a quoted notice on 1 (2026-05-21) | 3 of 6 | contested, split by age. The mode is the older value |
| Mobile image modules, 2026 generation: single poster, hot-zone image, carousel poster | 1440 wide by 144 to 2400 tall, carousel from 600 tall | Found on 1 domain (2026-05-21), which quotes a change notice at 1440 and prints 1400 in its own table. Same page says older materials still display | 1 of 9 | contested |
| Mobile carousel, any generation | No mode | 750 by 360 at 1MB (2026), 1400 by 600 to 2400 at 2MB (2026), 750 by variable height (2023 to 2024) | 0 agreement across 3 | contested |
| Mobile decoration image file cap | No mode | 1MB on 1, 2MB on 1, both 2026 | 0 agreement across 2 | contested |
| Mobile product modules (series theme, smart recommendation) | 1200 wide | 1200 by 591, 1200 by 252, 1200 by 376, and 750 by 1010, all on 1 domain (2026) | 1 of 9 | contested |
| Mobile category button | Up to 160 wide, height free | Found on 1 domain (2023 to 2024) | 1 of 9 | contested |
| Mobile announcement block | 400 by 200px | Found on 1 domain (2023 to 2024) | 1 of 9 | contested |

### What is not published at all

| Spec the brief asks for | Domains publishing a figure | What was found instead |
|---|---|---|
| Live tab dimensions or module spec | 0 of 9, and 0 on the platform doc | Explainers on how to open store live streaming and where its entry appears |
| A promotion skin dimension set for 618 or Singles' Day | 0 of 9 | Design commentary on the platform's own campaign pages, and one seller-service page on where the campaign logo kit is downloaded |
| Decoration rejection reasons | 1 of 9, and it is not a rejection | One 2024 page says the mobile sign carries no link and the system lays a gradient over it |
| Current mobile share of Tmall traffic with a method | 0 | A 2026 vendor claim of "over 90 percent" with no method, and the 2015 primary GMV share in scoped reading 2 |
| Any Tmall-specific desktop value dated 2026 | 0 | 2026 pages either say Taobao or say Taobao and Tmall together |
| Tmall Global against domestic store decoration | 0 | Nothing |

### What the tables say in one line

Desktop reaches consensus because nobody has updated it in years; mobile, where
the traffic is, has no mode worth publishing, and the newest figure on the
collection is found once.

## R1 and R5. Claims table

### What is verifiable, at primary level

| Claim | Source | Date | Sample | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| The Tmall rule center serves no rule text to an unauthenticated request | rule.tmall.com, rulechannel.tmall.com | fetched 2026-09-10, brief 28 | 2 requests | Direct fetch, redirect chain recorded | nobody, own observation | primary, carried forward |
| The Taobao open platform decoration documentation is readable without a login, is stamped last updated 2017-08-08, prints no module dimension, and sends the seller to a login to edit the homepage | developer.alibaba.com, treeId 418, articleId 103994 | read 2026-09-10 | 1 page | Direct fetch, full page read | the platform, on its own documentation | primary, scoped to what that page covers |
| Mobile GMV was 62 percent of total GMV on Alibaba's China retail marketplaces in the quarter ended 2015-09-30 | Alibaba Group results release, SEC exhibit 99.1, released 2015-10-27 | read 2026-09-10 | 1 quarter, all China retail marketplaces | Company disclosure | the company, in a securities filing | primary, historical, transaction value not traffic |
| The English web publishes no Tmall store decoration dimension: roughly forty results on five English phrasings, zero carrying one | Own search review | 2026-09-10 | ~40 results | Every result classified by page type | nobody, own observation | primary, as an observation about the category |
| The mobile module width splits by publication age: 640, 750, 1200 and 1440 appear on successively newer material | 6 domains giving a mobile width | about 2020 to 2026-05 | 6 domains | Grouped by date before counting | vendors | triangulated as an age effect |
| No page in the collection publishes a live tab spec or a promotion skin dimension set | 9 counted domains plus the platform doc | 2026-09-10 | 10 pages | Every page read for the two specs | nobody, own observation | primary, as an absence |

### What is modal only, and must never be called verified

Every numeric row in the two spec tables sits here. Each is a count of published
figures, not a reading of a platform rule or of the store builder. None may be
described as official, confirmed, required, or read from a seller backend.

## Cleared for use

Ready to paste. Each blockquote is followed by its source line, which states the
count, the languages, the date, and whether the value is modal or a scoped
primary reading.

**1. The method, which runs before any number appears.**

> Tmall does not publish its store decoration sizes where a buyer can read them.
> On 10 September 2026 the Tmall rule center redirected twice and returned no
> rule body, and the one platform documentation page on store decoration that
> loads without a login prints no module size at all. The sizes live inside the
> store builder in the seller backend. Every figure below is the most commonly
> published value, not a value read from the platform.
> Source: 9 independent Chinese-language domains carrying a store decoration
> figure and 0 English-language, collected 10 September 2026, counted per value
> with the mode published and the spread kept. Modal value, not a primary
> reading; the documentation page is a scoped primary reading of what it omits.

**2. The desktop store sign band, where the sources agree.**

> On desktop the published store sign band is 150 pixels tall in total. Most
> sources split it as a 120 pixel sign over a 30 pixel navigation bar. The sign
> is published at 950 pixels wide as the standard width, with 990 pixels given
> for Tmall by the three sources that separate the two, and a full-width
> background behind it at 1920 by 150 pixels.
> Source: 5 to 6 independent Chinese-language domains per value, 3 for the Tmall
> width, pages dated about 2020 to 2026, collected 10 September 2026. Modal
> value, consensus except the Tmall width, which is contested and has no source
> newer than 2023. Not a primary reading.

**3. The desktop carousel, width settled, height not.**

> The full-screen carousel on desktop is published at 1920 pixels wide by every
> source that gives a width. Its height is not settled. The most common figure
> is 600 pixels, but sources also give 550, a band of 400 to 800, and no limit
> at all.
> Source: 5 independent Chinese-language domains for width and 4 for height,
> collected 10 September 2026. Modal value, consensus for width and contested
> for height. Not a primary reading.

**4. The mobile store sign.**

> The most commonly published mobile store sign is 750 by 580 pixels, under
> 400KB, in JPG or PNG. Three sources carry it, in near-identical wording, dated
> 2020, 2024 and 2026, so it may trace to one origin. Other sources give 750 by
> 254, 642 by 200, and 280 by 50.
> Source: 6 independent Chinese-language domains giving a mobile store sign size,
> 3 agreeing, collected 10 September 2026. Modal value, contested. Not a primary
> reading.

**5. The mobile module width, where the most repeated number is the oldest.**

> The mobile homepage width depends on when the source was written. The oldest
> material describes a 640 pixel grid. Pages from 2021 to 2024 give 750 pixels,
> which is still the most repeated figure. A 2023 Tmall table and 2026 product
> modules give 1200. One page dated May 2026 quotes a change notice asking for
> image modules 1440 pixels wide and 144 to 2400 pixels tall, and prints 1400 in
> its own table. That figure is found once, so treat it as contested, not as the
> new rule.
> Source: 6 independent Chinese-language domains giving a mobile width, grouped
> by publication date before counting, pages dated about 2020 to May 2026,
> collected 10 September 2026. Modal value by count is 750, contested and split
> by age. Not a primary reading.

**6. Building to the spread, stated as reasoning, not rule.**

> Where published widths disagree, an image built at the widest published width
> can be scaled down to every narrower one without losing detail. The reverse is
> not true. A mobile module built at 750 pixels cannot be scaled up to 1440
> without softening.
> Source: reasoning from the mobile width spread in 6 independent
> Chinese-language domains collected 10 September 2026. Not a platform rule and
> not a modal value.

**7. What nobody publishes.**

> No source found publishes a size for the store live tab, and no source
> publishes a separate set of sizes for a 618 or Singles' Day store skin. The
> pages that discuss campaign stores discuss color, mood and mascots, not module
> dimensions.
> Source: 9 independent Chinese-language domains and one platform documentation
> page, read in full on 10 September 2026. Stated as an absence, with the
> search date.

**8. The mobile share, and its age.**

> The last mobile share figure found in Alibaba's own results is eleven years
> old. For the quarter ended September 30, 2015, the company reported that mobile
> accounted for 62 percent of transaction value on its China retail
> marketplaces. That is a share of sales across its marketplaces, not a share of
> Tmall traffic, and no later disclosure of the same figure was found.
> Source: Alibaba Group quarterly results release filed with the SEC, 27 October
> 2015, read 10 September 2026. Scoped primary reading, historical.

**9. The English-language absence.**

> Five English phrasings of the question returned roughly forty results and not
> one page carrying a Tmall store decoration size. Most answered for a Western
> storefront platform. Several were printers selling physical vinyl banners.
> Source: English search run 10 September 2026, every result classified by page
> type. Stated as an absence, with the search date.

## Do not publish

### Hard blocks for this brief

| Item | Reason it is blocked |
|---|---|
| **Any decoration size presented as official, required, verified, or read from the store builder** | Deviation 7 permits the modal value with its count and its disclaimer, nothing stronger |
| **The Taobao Rule Center, the Tmall rule center or the open platform documentation as the source of any size** | None of them printed one. The documentation page is cited only for what it omits |
| **1440 pixels as the current mobile module width, stated flatly** | Found on one domain, which contradicts itself with 1400 in its own table, and the change notice was not reached. It runs only inside the age-split range with "found once" attached |
| **750 pixels as the current mobile module width, stated flatly** | It is the mode by count, and the newest dated sources move past it. Publishing the mode here would publish the stale value |
| **Any Tmall-specific desktop value as current** | No 2026 page separates Tmall from Taobao on desktop. The 990 figure rests on 3 domains, newest 2023 |
| **Any live tab size** | Zero sources publish one. Do not infer it from the carousel or video module |
| **Any promotion skin size or module list** | Zero sources publish one. The claim that the campaign logo kit sits behind a store login on the event guide page is found once, on a seller-service page |
| **"Over 90 percent of traffic is mobile" or any current mobile share** | Vendor claim, 2026, no method, no sample. The only primary figure is the 2015 GMV share, and it must carry its date and its scope |
| **The 2015 mobile GMV share as a traffic figure or as a Tmall figure** | It is transaction value, across all China retail marketplaces |
| **The safe zone, logo size, category button, announcement block, product module sizes, nav bar split and every file cap as settled numbers** | Each is found on one or two domains |
| **Decoration rejection reasons** | None found. The "no link and a system gradient on the mobile sign" note is found once and is a display behavior, not a rejection |
| **The numbers on hubStudio's own ecommerce design service page** | Ledger-flagged for backend re-verification. Reference the page by name, lift no figure |
| **Any hubStudio rate, monthly figure or per-item price** | Standing rule |

### Quarantined domains

Every source below is a vendor, tool seller, seller-service site, community board,
media site or template site. None may be named, linked, described or alluded to
on the page. Platforms may be named. "Pages" counts pages from that domain seen
in this collection; each domain counts once toward any value.

| Domain | Pages | What it published | Why it is quarantined |
|---|---|---|---|
| picwish.cn | 1 | Taobao and Tmall sign, homepage widths both devices, logo, 2022 updated 2023 | Design tool marketing, no rule link |
| zcool.com.cn | 2 | Tmall sign with nav, posters, carousel, desktop column split, 640 mobile grid, 750 by 254 mobile sign, about 2020 | Designer community posts, no rule link, the domain gives both 120 and 150 sign heights |
| jiulangdianshang.com | 2 | Taobao sign desktop and mobile, 400KB, formats, 2026-03-14 | Seller tutorial site, restates older wording |
| aiyongtech.com | 1 | Sign desktop and mobile, 80KB and 400KB caps, gradient note, 2024-06-21 | Tool vendor |
| diantuoyi.com | 2 | 2026 mobile module table, quoted 1440 change notice, product modules, 2026-05-21; a live streaming explainer | Seller-service site, contradicts itself on 1400 against 1440 |
| hwds868.com | 3 | Desktop carousel 1920 by 600, 950 safe zone, mobile carousel 750 by 360, caps, 2026; two detail page guides | Seller-community content site, no rule link |
| mmker.cn | 2 | Mobile sign 642 by 200, 750 width, category button, announcement block, 2023 to 2024; one 2026 roundup extract | Aggregation site |
| jingyan.baidu.com | 2 | Sign 950 by 130, nav 20, header 1920 by 150, mobile sign 750 by 580, 2020-05-21 | User-written how-to, six years old |
| yidian51.com | 1 | Tmall sign 1920 by 150 with 990 code area, nav 30, carousel 400 to 800, 2021-09-28 | Seller-service glossary |
| shejidaren.com | 1 | Cross-platform sizes | 403 on fetch, not counted |
| kaitao.cn | 1 | Tmall homepage carousel, 2025-10-13 | Certificate error, not counted |
| seo-lv.com | 2 | Desktop and mobile table, module tutorial | Template vendor, fetch failed, not counted |
| fkdmg.com | 2 | Homepage single-video module tutorial | Fetch failed, not counted |
| kukeyun.com | 1 | Designer size list | Not fetched, not counted |
| blog.csdn.net | 2 | Taobao homepage norms 2020; Taobao, Tmall and JD sizes 2018 | Fetch failed, not counted; the 2018 post is the likely ancestor of several restated sizes |
| secaiyun.com | 4 | Detail and main image guides, VI guides, the "over 90 percent mobile" claim, 2026 | Design vendor, no decoration sizes, no method |
| biaojixia.com | 1 | Main image specs | Tool vendor, no decoration sizes |
| gaoding.com | 1 | Store homepage template gallery | Design tool marketing |
| insight.xiaoduoai.com | 2 | Campaign logo kit location, store live streaming explainer | Seller-service vendor, single source |
| zhihu.com, zhuanlan.zhihu.com | 4 | Sign sizes, live streaming, campaign guides | Self-published, not fetched |
| wap.zol.com.cn, shuaishou.com | 2 | Sign size answer, live room setup | Anecdote, no sizes |
| woshipm.com, digitaling.com, codesign.qq.com | 5 | Campaign page design commentary | Media and design commentary, no merchant sizes |
| cbndata.com, cnstock.com, m.163.com, ixunke.com, 58pic.com, nuanque.com, ibaotu.com, sytuku.com | 8 | Campaign news, plans, templates, old campaign logos | No sizes |
| signs.com and six other banner printers | 7 | Physical vinyl banner sizes, English | Wrong product entirely; one ranks in the top five |
| Western storefront theme and page-builder vendors | About 20 | Storefront banner sizes for another platform, English | Wrong platform |
| help.bigseller.com, storyboxcollective.com | 2 | Sister Southeast Asian marketplace store banner sizes, English | Wrong platform; do not carry its sizes across |
| digitalcrew.com.au, marketingtochina.com | 2 | Tmall store design commentary, English | Agency and media pages, standing rule bars naming them, no dimensions in extracts |

### Failed the bar

| Claim | Where it came from | Why it is cut |
|---|---|---|
| Store sign 1920 by 150 "displaying 950" | Search-result summary, not tied to a domain | Not counted. Consistent with row 2 but unattributable |
| Desktop carousel 1920 by under 540, 1920 by 500, 1920 by 550 or 600 | Search-result summaries | Not counted, unattributable |
| Full-width image module 1920 by 540 under 3MB | Search-result summary on the live tab query | Not counted, unattributable |
| Mobile store banner 750 by 440 and a 690 pixel safe area | 2026 search-result summary | Not counted, unattributable, found once |
| Medium carousel 950 by 100 to 600, small 750 by 100 to 600, header 156 by 150, safe band 950 to 1280 | Search-result summary | Not counted, unattributable |
| "1920 comes from the width of a 22-inch monitor" | Search-result summary | Folklore, no source |
| The 640 wide grid with 80 pixel cells as current | One about-2020 post | Retired generation; the platform's own 2017 documentation uses 640 in a code example, which dates it |
| The 750 by 254 mobile store sign as current | One about-2020 post | Sits with the retired 640 grid |
| The 1400 by 600 to 2400 mobile carousel | One 2026 page | Contradicts the same page's quoted 1440 notice |
| The campaign logo kit is released a month ahead and needs a store login | One seller-service page | Single source, undated |
| The change to 1440 took effect at the end of March 2026 | One 2026 page and a summary of it | The year is not printed in what was read; do not date the change |
| Any statement that a size was confirmed in the store builder | Nowhere | Nobody in this collection had a seller session, including this researcher |

## Screenshot inventory

Nothing captured. The captures below are the only route from modal to primary,
and each names the rows it would upgrade. Save to
`research/tmall-flagship-store-decoration-specs/` with the date in the filename.

| File | What it shows | Rows it upgrades | Captured | Source surface |
|---|---|---|---|---|
| tmall-builder-desktop-sign-2026-09-10.png | The desktop store builder sign and nav module with its stated size, cap and formats | Every desktop sign row, the Tmall 990 width, the nav split, the 80KB cap | not yet | Tmall store builder in the seller workbench, needs a seller session |
| tmall-builder-desktop-carousel-2026-09-10.png | The full-screen carousel module upload panel | Carousel height, the 3MB cap, the safe zone | not yet | Tmall store builder |
| tmall-builder-mobile-modules-2026-09-10.png | The mobile module list with the upload size prompt for single poster, hot-zone and carousel | The 1440 against 1400 against 750 question, outright | not yet | Mobile store builder, needs a seller session |
| tmall-builder-mobile-sign-2026-09-10.png | The mobile store sign upload panel | The 750 by 580 row and its cap | not yet | Mobile store builder |
| tmall-builder-live-tab-2026-09-10.png | Whatever the builder offers for the store live tab | The live tab absence | not yet | Store builder or live streaming console |
| tmall-event-guide-vi-kit-2026-09-10.png | The campaign event guide page and its visual identity kit | The promotion skin absence and the logo kit claim | not yet | Campaign event guide, store login reported |
| tmall-decoration-rejection-2026-09-10.png | A real decoration review rejection naming the failing element | The rejection reasons absence | not yet | Seller workbench notifications |
| tmall-store-home-live-app-2026-09-10.png | A live flagship store homepage in the app, with module widths measured against the screen | The rendered mobile layout, the live tab entry, no login needed | not yet | Live Tmall app |
| tmall-store-home-desktop-2026-09-10.png | A live flagship store homepage on desktop at 1920 wide | Rendered sign band height and carousel height, no login needed | not yet | Live Tmall desktop site |

The two live-store captures need no seller session. They cannot give file caps,
but they would move the sign band and the rendered mobile layout from modal to
observed.

## Romanization table

No Han characters and no full-width punctuation appear in this file, per the
project rule. Terms shared with briefs 01 and 04 use the same romanization as
those files.

| Romanization | English name to use on the page | What it is |
|---|---|---|
| Tianmao | Tmall | The platform this brief is about |
| Taobao | Taobao | The sister marketplace most decoration pages actually describe |
| qijiandian | flagship store | The store type in the brief |
| dianpu zhuangxiu | store decoration | The storefront design layer this brief covers |
| wangpu | store builder | The seller-side decoration tool, often called the new store builder |
| dianzhao | store sign | The header band at the top of the store |
| daohang | navigation bar | The bar under the sign on desktop |
| quanping haibao | full-screen poster | The 1920 wide desktop banner |
| lunbotu | carousel | Rotating banner images |
| dantu haibao | single-image poster | A mobile image module |
| requ qietu | hot-zone image | A mobile image with clickable regions |
| zidingyi mokuai | custom module | Free-form homepage block |
| mokuai | module | Any homepage block |
| fenlei | category | Category buttons and category pages |
| gonggao | announcement | A notice block, and a platform change notice |
| anquan qu | safe zone | Where core content must sit |
| shouji duan, wuxian duan | mobile | The app store surface |
| PC duan | desktop | The browser store surface |
| zhibo | live streaming | As in the store live tab |
| dacu | major promotion | Campaign periods such as 618 and Singles' Day |
| fenwei | campaign atmosphere | The skin a store wears for a promotion |
| shuang shiyi | Singles' Day | 11 November campaign |
| liuyiba | 618 | 18 June campaign |
| huodong zhinan | event guide | The campaign guide page for merchants |
| VI guifan | visual identity rules | Campaign logo and type usage rules |
| Qianniu | Qianniu | The Taobao and Tmall seller workbench |
| wuxian maijia zhongxin | mobile seller center | Where the open platform doc sends sellers to edit |
| Taobao kaifang pingtai | Taobao open platform | The developer documentation site read as scoped primary reading 1 |
| Taobao guize zhongxin | Taobao Rule Center | The gated rule center |
| chicun | dimensions | Used in every size table found |
| kuandu, gaodu | width, height | Units in every row |
| daxiao | file size | The caps that do not settle |
| geshi | format | JPG, PNG, GIF |
| guifan | specification | The class of rule this brief models rather than verifies |

## R8. Reconciliation (filled after drafting)

Reconciled 2026-09-10, after drafting and after the quality pass.

**Eight of the nine cleared blocks shipped as quotations** with attributions
unchanged: the method, the desktop sign band, the desktop carousel, the mobile
store sign, the mobile width split by age, the build-to-widest reasoning, the
absence of live tab and skin sizes, and the 2015 mobile share. Block 9, the
English-language absence, is used as a sentence in the disclaimer and in the
introduction rather than as a quotation, with no change to its facts.

**The disclaimer is the marketplace form with NN = 9.** Because no
English-language source carried a size, "in Chinese and English" became "in
Chinese", and one sentence states the English absence. The readable platform
documentation page is named after the block as a scoped primary reading of what
it omits, and the page says it is not the source of any number.

**The H1, meta, excerpt and angle were changed from the brief.** "Module by module"
and a sheet "a designer can build from without opening the backend" cannot hold for
mobile, which is an age-split range, so the H1 now reads "desktop settles, mobile
does not". The draft meta promised live tab sizes, which no source publishes. During
the quality check the excerpt and meta were trimmed to their ceilings, and two
unsupported statements were removed: "where the traffic is" and "the phone is where
most shoppers are". The only mobile-share evidence is Alibaba's 2015 share of sales.

**The mobile width is published as an age-split table**, never as one current
width. The 750 figure is labeled most repeated and not newest, and 1440 is labeled
found once.

**Must-includes met as absences.** The live tab and 618 or Singles Day skins have no
published sizes. The mobile-first reality is met only by the 2015 SEC filing, scoped
as a share of transaction value across Alibaba's China retail marketplaces, not Tmall
traffic, with its date in the quote and the body.

**The refresh checklist is labeled production practice**, with the size status of
each item carried in its own column.

**Every must-not held**: no size called official or read from the store builder; the
rule center and documentation page cited only as unreadable or silent; 990 presented
only with its no-newer-than-2023 caveat; no invented live tab or skin sizes; no
rejection reasons; no 90-percent mobile traffic claim; no quarantined site; no figure
from hubStudio's ecommerce design service page; no hubStudio rate.

**Both brief links were missing.** /solutions/platforms/tmall and /resources/specs do
not exist. The published Tmall product image requirements and China ecommerce content
pack articles were substituted.

**The hero was accepted on the first generation.**
