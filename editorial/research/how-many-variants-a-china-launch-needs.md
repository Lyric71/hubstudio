# Research: how-many-variants-a-china-launch-needs

| Field | Value |
|---|---|
| Brief | 36 |
| Target query | how many ad creatives per campaign douyin |
| Gap statement (one sentence) | Across 81 results on eleven buyer phrasings in Chinese and English, no page sets the creative counts China's ad platforms actually publish beside the refresh interval none of them publishes; the English pages answer with Meta testing rules of thumb or "dozens of variants" with no source, and the Chinese pages relay one 2022 trade article or give agency refresh windows with no sample. |
| Method | Platform-owned pages read unauthenticated where they serve text (primary, scoped to the page); modal-value method under deviation 7 for Ocean Engine creative limits, which no readable platform page carries; peer-reviewed wear-out research read at source; a variant plan derived from both and labeled derived |
| Scope boundary | Paid creative variants only. Listing and organic slot counts belong to brief 10 (`one-shoot-six-platforms-china-variant-matrix.md`) and are never restated here as a variant count. Paid format file specs belong to brief 06 |
| Research time spent | About 95 minutes active. 28 web searches (19 Chinese, 9 English) before the session search budget ran out, then fetch-only. 13 platform-owned URLs fetched (14 requests), 4 peer-reviewed papers read (3 in full text), 11 non-platform pages fetched, 3 site files read |
| Written | 2026-09-10 |

## Method statement

Nothing in this file was read from an Ocean Engine, Qianchuan, Tencent Ads or
Juguang advertiser backend. Three kinds of evidence sit in it, and they are
never mixed:

1. **Primary, scoped.** Platform-owned pages that served text to an
   unauthenticated request on 2026-09-10. Each row is scoped to the page: a
   developer reference governs its API version, a manual governs the structure
   it describes. Tencent Ads is the only Chinese ad platform that publishes a
   creative count on a readable page.
2. **Modal, under deviation 7.** Ocean Engine creative limits. Both
   developer pages found for the upgraded ad tool returned a title and no body.
   The only per-ad cap in circulation reaches the web through one September 2022
   trade article republished on a second domain, plus one independent trade
   article and one code library reproducing an older API. Every row carries its
   count and is labeled contested.
3. **Peer-reviewed research.** Three field or experimental studies and one
   meta-analysis on wear-out, each with its method, sample and limits.

**Refresh guidance is an absence, not a mode.** No platform page read publishes
a refresh interval. The intervals in circulation come from agency and
practitioner pages with no sample, which fails R5 whatever their count. The page
publishes the absence, never a number.

### Primary-access attempts, 2026-09-10

| Surface | Owner | What it is | Result |
|---|---|---|---|
| developers.e.qq.com/v3.0/pages/dynamic_creatives/add | Tencent Ads | API reference, create dynamic creative, version 3.0 | **Readable.** Up to 100 creatives per ad; up to 3 copy components and 3 landing page components; up to 15 image and video components combined. Undated |
| developers.e.qq.com/docs/guide/ads/dc | Tencent Ads | Developer guide, dynamic creative ad workflow | **Readable.** Each dynamic creative element up to 3 uploads, video up to 3; combinations multiply (2 images x 2 copy = 4; 2 x 2 x 2 = 8); system selects the best combination for exposure. Undated |
| developers.e.qq.com/docs/ads/adcreatives | Tencent Ads | Developer reference, ad creatives | Readable, carries no count |
| support.e.qq.com/detail?cid=4516&pid=10175 | Tencent Ads | Help center, basic functions and types | Header only, no body |
| eschool.qq.com/Solution/ListDetail/pd-9767 | Tencent Marketing School | Product update volume 66, dated 2023-12-07 | **Readable.** AI derivation of library assets (redraw background, extend canvas, rewrite selling point); advertiser can authorize automatic creative creation from them, then switch off on performance. One traffic-experiment percentage with no method |
| www.oceanengine.com/baike/juliangguanggaoshengjiban.html | Ocean Engine | Encyclopedia entry, upgraded Ocean Engine Ads, dated 2023-04-11 | **Readable.** Automatic combination, online selection and full exploration of all materials; two-level project and ad structure. No count |
| www.oceanengine.com/faq/douyin-guanggao-chuangjian.html | Ocean Engine | FAQ, creating a Douyin ad, dated 2021-08-17 | Readable. Programmatic creative "generated and managed by the system". No count |
| www.oceanengine.com/faq/sucai-zengtian-jingcai.html | Ocean Engine | FAQ, where to find ad materials, dated 2021-08-16 | Readable. No count, no refresh guidance |
| open.oceanengine.com/labels/7/docs/1740868093375503 | Ocean Engine | Open platform, create project (upgraded version) | Title only ("API interface, commercial open platform"), no body |
| open.oceanengine.com/labels/34/docs/1740946299496459 | Ocean Engine | Open platform, create unit (upgraded version) | Title only, no body |
| fe-video-qc.xhscdn.com/fe-platform/37f82988d0e9273cd645bb819c37a4e0f697bc70.pdf | RedNote | Juguang platform product manual, 17 pages, file created 2022-05-06 per PDF metadata | **Readable after local text extraction.** Plan, unit, creative structure; manual-bid plan holds multiple units, auto-bid plan one unit; each unit holds multiple creatives. No maximum anywhere in the text |
| www.facebook.com/business/help/652738434773716 (default and en_US) | Meta | Help center, campaign, ad set and ad limits per ad account | Title only on both requests. Unreadable. Contrast only |
| support.google.com/google-ads/answer/7684791 | Google | Help center, about responsive search ads | **Readable.** Up to 15 headlines and 4 descriptions per ad; Google assembles combinations; at least 2 such ads per ad group recommended. Undated. Contrast only |

No Qianchuan-owned page was reached. The Qianchuan searches returned agency
blogs, self-published posts and one agency article reposted on a portal.

## R4. Chinese-language web first

Chinese sets ran before the English ones. Characters are kept here because this
is a working file; every cleared quote is romanized.

| # | Query (Chinese) | Romanized | English rendering |
|---|---|---|---|
| C1 | 巨量引擎 广告 单元 创意数量 上限 程序化创意 素材 最多 | juliang yinqing guanggao danyuan chuangyi shuliang shangxian chengxuhua chuangyi sucai zuiduo | Ocean Engine ad unit creative count limit, programmatic creative, materials maximum |
| C2 | 巨量千川 计划 素材数量 建议 上限 几条视频 | juliang qianchuan jihua sucai shuliang jianyi shangxian jitiao shipin | Qianchuan plan material count, recommended, limit, how many videos |
| C3 | 腾讯广告 广告 创意数量 上限 程序化创意 帮助中心 | tengxun guanggao chuangyi shuliang shangxian chengxuhua chuangyi bangzhu zhongxin | Tencent Ads creative count limit, programmatic creative, help center |
| C4 | 小红书 聚光平台 创意 数量 上限 单元 笔记 | xiaohongshu juguang pingtai chuangyi shuliang shangxian danyuan biji | RedNote Juguang creative count limit, unit, note |
| C5 | 巨量引擎 素材衰退 素材疲劳 更新频率 新素材 | juliang yinqing sucai shuaitui sucai pilao gengxin pinlv xin sucai | Ocean Engine material decay, material fatigue, refresh frequency |
| C6 | 抖音广告 一个计划 放几个素材 创意数量 多少合适 | douyin guanggao yige jihua fang jige sucai chuangyi shuliang duoshao heshi | Douyin ads, how many materials in one plan |
| C7 | 信息流广告素材 多久更新一次 素材生命周期 几天 | xinxiliu guanggao sucai duojiu gengxin yici sucai shengming zhouqi jitian | In-feed ad materials, how often to refresh, material lifecycle in days |
| C8 to C19 | Follow-ups: the upgraded Ocean Engine Ads per-ad cap (three phrasings), Qianchuan official guidance and open API (two), Juguang unit maximum (two), Tencent fatigue and 3.0 limits (two), Ocean Engine material lifecycle labels, "nearly 80 percent of materials decay within 3 days", open platform documentation | various | Used to trace figures to origin, not mapped as SERPs |

**What the Chinese web gave that the English web did not:** both readable
Tencent developer pages, the Juguang manual on RedNote's own content server,
Ocean Engine's encyclopedia entry, the origin of the 10-per-ad figure, and every
refresh window in circulation (all unpublishable).

**What the Chinese web did not give:** any readable Ocean Engine, Qianchuan or
Juguang page with a creative count, any platform page with a refresh interval,
and any Chinese study of creative wear-out with a stated sample.

### Terms

| Chinese | Romanization | English to use on the page |
|---|---|---|
| 巨量引擎 | Juliang Yinqing | Ocean Engine |
| 巨量广告升级版 | Juliang Guanggao shengjiban | the upgraded Ocean Engine Ads |
| 项目 / 广告 | xiangmu / guanggao | project / ad (upgraded structure) |
| 计划 / 单元 / 创意 | jihua / danyuan / chuangyi | plan / unit / creative |
| 巨量千川 | Juliang Qianchuan | Qianchuan |
| 腾讯广告 | Tengxun Guanggao | Tencent Ads |
| 动态创意 / 程序化创意 / 组件化创意 | dongtai chuangyi / chengxuhua chuangyi / zujianhua chuangyi | dynamic creative / programmatic creative / component creative |
| 腾讯营销学堂 | Tengxun Yingxiao Xuetang | Tencent Marketing School |
| AI二创 | AI erchuang | AI derivation of existing assets |
| 聚光平台 | Juguang pingtai | Juguang, RedNote's ad platform |
| 素材 | sucai | creative asset, material |
| 素材衰退 / 素材疲劳 | sucai shuaitui / sucai pilao | creative decay / creative fatigue |
| 首发素材 / 同质化素材 | shoufa sucai / tongzhihua sucai | first-launch creative / homogeneous creative |
| 叉乘 | chacheng | cross-multiplication of elements |

## R2. SERP map

Result rows classified from titles, URLs and extracts on 2026-09-10; pages
marked "fetched" were read. Ages as shown on the page or in the title.

### C1, Chinese, Ocean Engine creative count per ad

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | morketing.com | Marketing trade media, fetched | Upgraded tool's online selection; case with 4 or more videos and 5 to 6 titles per ad | No cap, no platform source | 2022-12-29 |
| 2 | news.sina.cn | Portal repost of a platform launch release, fetched | Automatic combination and selection | No count | 2023-03-22 |
| 3 | zhuanlan.zhihu.com | Self-published explainer | Ocean Engine ad placement basics | No count | 2022 |
| 4 | niaogebiji.com | Growth trade media, fetched | "Up to 10 materials per ad", 4 to 6 videos plus 6 titles, 2 to 3 when testing, 20 landing pages | Cites no platform page; republished verbatim at 27sem.com | 2022-09-25 |
| 5 | tgsem.com | SEM blog | Ocean Engine walkthrough | No count | Undated |
| 6 | jingzhunhuoke.net | Lead-gen blog | New ad platform steps | No count | Undated |

### C2, Chinese, Qianchuan materials per plan

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | sohu.com | Portal repost of an agency article, fetched | 9 new materials a day for new accounts, 12 to 30 plans, clean low performers every 2 days | No sample, no platform source | 2024-02-23 |
| 2 | smallfighter.com | Ad-buying vendor blog | 120 Qianchuan tips | No method | Undated |
| 3 | blog.csdn.net | Self-published repost | Plan build-out | No method | 2021 |
| 4 to 7 | zhuanlan.zhihu.com (3), zhihu.com (1) | Self-published | Testing tactics, plan decay questions | No method | 2021 to 2025 |
| 8 | 27sem.com | SEM trade media | High-GMV creative tactics | No method | Undated |

### C3, Chinese, Tencent Ads creative limits

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | developers.e.qq.com | Platform developer guide, fetched | 3 per element, combinations multiply, system picks the best | Undated, version not stated | Undated |
| 2 | developers.e.qq.com | Platform API reference v3.0, fetched | 100 creatives per ad, 3 copy, 15 image and video components | Undated; API scope | Undated |
| 3 | eschool.qq.com | Platform academy product update | Contract ad budgeting change | Not about creative counts | Undated |
| 4 | ad.qq.com | Platform ad network help center | Ad network help topic | Not WeChat creative counts | Undated |
| 5 | teng-ad.com | Agency guide | Account build for ADQ 3.0 | No platform link | Undated |
| 6 | tengxundsp.com | Agency guide, fetched | 2 to 10 creatives, 5 to 10 materials, 3 titles, add new materials after 3 to 7 days | Cites no Tencent page, no sample | 2025-09-19 |

### C4, Chinese, Juguang creatives per unit

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | manual.sensorsdata.cn | Analytics vendor integration doc | Juguang tracking setup | No count | Undated |
| 2 | help.reditorapp.com | Editor tool vendor guide | Juguang spend guide | No count | 2025-11-24 |
| 3 | fe-video-qc.xhscdn.com | Platform-hosted product manual PDF, extracted | Plan, unit, creative structure | No maximum | File created 2022-05-06 |
| 4 and 5 | xiao-ad.com (2) | Agency FAQ and operating guide | Juguang FAQ | Domain failed DNS on fetch | Undated |
| 6 | juxuan.net | Agency FAQ | Juguang FAQ | No count in extract | Undated |

### C5, Chinese, creative decay and refresh on Ocean Engine

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | zhuanlan.zhihu.com | Self-published post on a homogeneous-material metric | Metric description | 403 on fetch | 2023 |
| 2 | niaogebiji.com | Growth trade media, fetched | Ocean Engine quality, first-launch, original and effective material labels, with thresholds | Relays platform standards, no platform link | 2023-07-21 |
| 3 to 5 | zhihu.com (3) | Q and A threads | Plan decay against creative decay | Crowd answers | 2023 to 2024 |
| 6 | liyingshiji.com | Creative tool vendor article | Refresh frequency | DNS failure on fetch | Undated |

### C6, Chinese, materials per Douyin plan

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | oceanengine.com | Platform FAQ, fetched | Ad creation steps, programmatic creative is system managed | No count | 2021-08-17 |
| 2 | zhuanlan.zhihu.com | Self-published | Douyin video creative guide | No count | Undated |
| 3 | appganhuo.com | App marketing blog | Pre-launch prep | No count | Undated |
| 4 | chenge66.com | Personal blog | In-feed plan build | No count in extract | Undated |
| 5 and 6 | tui39.com (2) | Agency pages | Creative elements, creative diagnosis | No count | Undated |
| 7 and 8 | jymdsp.com (2) | Agency pages | Video sizes, creative management | Specs belong to brief 06 | 2023 |

### C7, Chinese, how often to refresh in-feed creative

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | linkflowtech.com | Ad-tech vendor news | In-feed operations | No sample | Undated |
| 2 and 3 | pd.baidu.com (2) | Baidu ad platform promotional pages | Plan stacking, material selection | Baidu, not the platforms in scope | Undated |
| 4 and 5 | blog.csdn.net (2) | Self-published | Creative playbook; "60 percent of plans live one day", spend peaks day 2 | No sample | 2023 to 2024 |
| 6 | zhuanlan.zhihu.com | Self-published | Creative production method | No count | 2021 |
| 7 | opp2.com | Marketing trade media | In-feed optimization guide | No sample | Undated |
| 8 | xiaoliu123.com | Practitioner blog, fetched | Replace after 3 to 5 days of falling spend; a 30 percent two-day drop as the signal; 3 to 5 sets per plan | States no sample, period or platform | 2026-06-07 |

### E1, English, primary query: how many ad creatives per campaign douyin

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | admanage.ai | Ad tool vendor blog | How many creatives to test, Meta framing | No China platform | 2026 |
| 2 | sekkeidigitalgroup.com | Agency guide | Douyin ad formats and costs | No count | Undated |
| 3 | influchina.com | Agency guide | Douyin formats and costs | No count | 2026 |
| 4 | seoagencychina.com | Agency guide | Douyin ad strategies | No count | 2024 |
| 5 | chinatradingdesk.com | Agency service page | Douyin marketing service | Service copy | Undated |
| 6 | digitalinasia.com | Consultancy guide | How Douyin advertising works; "dozens of creative variants per campaign" | No source for "dozens" | 2026 |
| 7 | gatekaizen.com | Agency guide | Douyin campaign build | No count | 2025 |
| 8 and 9 | learn.microsoft.com (2) | LinkedIn API docs | Creative objects in another ad API | Off topic | Undated |

### E2, English: creatives per ad group ocean engine

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | i-click.com | Agency guide | Douyin and Ocean Engine overview | No count | Undated |
| 2 | linkedin.com | Ocean Engine company page | Company profile | No count | Live |
| 3 | baike.baidu.com | Encyclopedia, English | Ocean Engine entry | No count | Live |
| 4 to 7 | oceanengine.io (4) | Ocean Engine international site | Product explainers, brand building, homepage | No creative count on any | Undated |
| 8 | chinamarketingcorp.com | Agency blog | Ocean Engine overview | No count | Undated |

### E3, English: how many ad variations to test

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | directagents.com | Agency blog | Variation count philosophy | No China platform, no method | Undated |
| 2 | admanage.ai | Ad tool vendor blog | Creative counts by monthly budget tier | No method | 2026 |
| 3 | billo.app | UGC vendor blog | Testing variations | No method | Undated |
| 4 | sovran.ai | Creative tool vendor blog | Variation counts | No method | Undated |
| 5 | merren.io | Ad tool vendor blog | A/B testing | No method | Undated |
| 6 | admakeai.com | AI ad tool vendor blog | Facebook creative counts | No method | Undated |
| 7 and 8 | practicalecommerce.com (2) | Ecommerce trade media | Google Ads experiments | No China platform | Undated |
| 9 | mansonchen.substack.com | Personal newsletter | Multivariate testing | No China platform | Undated |

### E4, English: ad creative refresh frequency china

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 to 3 | adstellar.ai (3) | Ad tool vendor blog | Refresh frequency, Meta | No China content, no method | 2026 |
| 4 and 5 | adlibrary.com (2) | Ad intelligence vendor blog | Refresh frequency, Meta | No China content | 2026 |
| 6 | coinis.com | Ad tool vendor | Facebook refresh how-to | No China content | Undated |
| 7 | rewarx.com | Tool vendor blog | Refresh cadence, ecommerce | No China content | Undated |

Zero of seven mention a Chinese platform, although "china" is in the query.

### Publisher-type counts

| Publisher type | Chinese sets C1 to C7 (48) | English sets E1 to E4 (33) |
|---|---|---|
| Platform-owned (any ad platform) | 8 (Tencent 4, RedNote 1, Ocean Engine 1, Baidu 2) | 5 (Ocean Engine international site 4, its company page 1) |
| Platform-owned page carrying a creative count | 2 (both Tencent developer pages) | 0 |
| Agency, ad-tech or tool vendor | 20 | 22 |
| Trade media or portal repost | 6 | 2 |
| Self-published (Q and A, blog platforms) | 14 | 1 |
| Encyclopedia | 0 | 1 |
| Off topic | 0 | 2 |

**The bar.** Chinese ranking pages run 800 to 3,000 words, carry one list or
none, relay figures without a platform link, and mix Ocean Engine, Qianchuan
and Tencent advice without saying which product generation it belongs to.
English pages run 1,500 to 3,000 words on Meta testing, carry budget-tier
tables with no method, and never name a Chinese platform limit. No page in
either language states which figures are platform-published and which are not,
or pairs a count with wear-out research. Beating it at 1,500 words takes a
per-platform table with a source type and confidence on every row, a visible
"not published" for refresh, one research section with limits, and a derived
plan labeled as such. Two tables clears the field.

**The gap, in one sentence:** see the header table.

**H1 consequence.** The ranking pages answer "how many" as if a platform had
said so. The page answers which counts the platforms publish, which they do
not, and what the research lets a brand derive. The working H1 holds if the
first answer says plainly that no platform publishes a launch variant count.

## R1. What has to be true

Listed before searching, resolved after.

| # | Claim the outline needs | Resolution |
|---|---|---|
| 1 | Ocean Engine publishes a creatives-per-ad limit on a readable page | **Breaks.** Two open platform pages for the upgraded tool served a title only; the encyclopedia and two FAQs carry no count. The 10-per-ad cap circulates from one 2022 trade article on two domains. Modal, contested |
| 2 | Ocean Engine's upgraded tool combines and explores submitted assets automatically | **Holds, primary** (encyclopedia entry, 2023-04-11), qualitative only |
| 3 | Earlier Ocean Engine limits are knowable | **Holds as single-source, stale.** A code library reproducing the pre-upgrade API (2022-05-23): 10 titles, 12 images, 10 videos per programmatic creative; 10 custom creatives per plan; 500 creatives a day |
| 4 | Qianchuan publishes a creative count per plan | **Breaks.** No Qianchuan-owned page reached; one agency article on a portal. Cut; publish the absence |
| 5 | Tencent Ads publishes creative limits | **Holds, primary, scoped** to two developer pages that disagree by version |
| 6 | Tencent multiplies elements into combinations and picks a winner | **Holds, primary** (developer guide) |
| 7 | Tencent can build creatives automatically from AI-derived assets | **Holds, primary** (Marketing School, 2023-12-07). Its percentage is cut |
| 8 | RedNote Juguang publishes a creatives-per-unit limit | **Breaks.** The platform's own manual says "multiple" and gives no number. Structure row holds, primary |
| 9 | Any Chinese ad platform publishes a refresh interval | **Breaks** on all 11 Chinese platform pages read. Publish the absence |
| 10 | The refresh windows in circulation have a method | **Breaks.** 2 to 7 days across agency and practitioner pages, none with a sample. Cut |
| 11 | Peer-reviewed research shows strong creative wears out more slowly | **Holds** (JAMS 2016 experiment) |
| 12 | Field evidence that rotating creatives by exposure history helps | **Holds with limits** (Marketing Science 2013: one brand, 2009, simulated lift) |
| 13 | Field evidence that more exposure turns negative for some people | **Holds with limits** (JMR 2019: one campaign, visits only) |
| 14 | A research-based number of variants a launch needs | **Breaks.** Ledger do-not-publish row from brief 18 still stands: no method-stated variant count per campaign exists. The plan is derived |
| 15 | hubStudio publishes a shoot-to-generate variant mix | **Holds.** The who we are page publishes 20 percent shoot, 80 percent build. Runs under the first-party exception, attributed to that page |
| 16 | hubStudio publishes a delivery number with its method stated | **Breaks.** The 20/80 carries no sample or period. The brief's slot requirement cannot be met |
| 17 | The matrix article can be named for the slot count | **Holds**, by name only, no slot figure restated |
| 18 | A Western platform's own guidance is readable for contrast | **Holds for Google** responsive search ads; **breaks for Meta** (title only) |

## Platform-published creative-count and refresh guidance

The must-include table, drafted at five columns. Refresh is its own column so
the absence is visible on every row.

| Ad platform | Creative count published | Refresh interval published | Where it comes from | Confidence |
|---|---|---|---|---|
| Tencent Ads (WeChat) | Up to 100 creatives per ad; per dynamic creative, up to 3 copy, 3 landing page and 15 image and video components (v3.0). Older guide: 3 per element, 3 videos; elements multiply | Not published on any page read | Two Tencent developer pages, read 2026-09-10, undated | primary, API and guide scope; the two versions disagree |
| Ocean Engine (Douyin), upgraded ads | Up to 10 assets per ad; 4 to 6 videos plus 6 or more titles advised; 2 to 3 when testing | Not published on any page read | One Chinese trade article, September 2022, on 2 domains, plus 1 independent December 2022 article (4 or more videos, 5 to 6 titles). Platform API pages served no text | contested, one origin, modal not primary |
| Ocean Engine, pre-upgrade | Programmatic: 10 titles, 12 images, 10 videos; custom: 10 per plan; 500 a day per advertiser | Not published | One code library reproducing the API, May 2022 | contested, single source, legacy |
| Qianchuan (Douyin ecommerce) | Not published | Not published | No platform page reached | not published |
| Juguang (RedNote) | Multiple creatives per unit, no maximum; auto-bid plan holds one unit | Not published | RedNote's product manual PDF, file created May 2022 | primary for structure; count not published |

## R1 and R5. Claims table

Confidence: primary, triangulated, single-source, unverified. "Modal" rows are
labeled per deviation 7. Unverified is cut.

### A. Platform-published limits and mechanisms

| Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| Up to 100 creatives per ad; per dynamic creative up to 3 copy components, 3 landing page components, 15 image and video components combined | developers.e.qq.com/v3.0/pages/dynamic_creatives/add | Undated, read 2026-09-10 | n/a | Platform API reference read unauthenticated | Tencent Ads, own documentation | primary, API v3.0 scope |
| Each dynamic creative element up to 3 uploads, video up to 3; 2 images x 2 copy = 4 creatives; 2 videos x 2 images x 2 copy = 8; system selects the best combination for exposure | developers.e.qq.com/docs/guide/ads/dc | Undated, read 2026-09-10 | n/a | Platform developer guide read unauthenticated | Tencent Ads | primary, guide scope |
| AI derivation of library assets (redraw background, extend canvas, rewrite selling point); advertisers can authorize automatic creative creation from them and switch off on performance | eschool.qq.com/Solution/ListDetail/pd-9767 | 2023-12-07 | n/a | Platform academy product update | Tencent Ads | primary for the feature description |
| AI-derived assets lifted spend 8.78 percent in a traffic experiment on the ad network | Same | 2023-12-07 | Not stated | Not stated | Tencent, promoting its own feature | **unverified, cut** |
| Upgraded Ocean Engine Ads combines videos, images, titles, landing pages and components automatically, selects online and explores the full set; project and ad are the only two levels | oceanengine.com/baike/juliangguanggaoshengjiban.html | 2023-04-11 | n/a | Platform encyclopedia entry | Ocean Engine | primary, qualitative, no count |
| Programmatic creative is generated and managed by the system | oceanengine.com/faq/douyin-guanggao-chuangjian.html | 2021-08-17 | n/a | Platform FAQ | Ocean Engine | primary, qualitative, dated |
| Upgraded-tool developer pages for creating projects and units serve no body text unauthenticated | open.oceanengine.com/labels/7/docs/1740868093375503; /labels/34/docs/1740946299496459 | 2026-09-10 | 2 requests | Direct fetch | Own observation | primary, negative observation |
| Up to 10 assets per ad; 4 to 6 videos plus 6 or more titles; 2 to 3 per ad when testing new creative; up to 20 landing pages | niaogebiji.com/article-191346-1.html; 27sem.com/article/7310 (same text, dated 2022-09-22, credited to the same trade outlet) | 2022-09 | n/a | Trade article; cites no platform page | Trade media | modal, contested, originates once |
| 4 or more videos and 5 to 6 titles per ad in one advertiser case | morketing.com/detail/23691 | 2022-12-29 | One case | Trade article | Trade media | single-source, broadly agrees with the row above |
| Pre-upgrade API: programmatic creative up to 10 titles, 12 images, 10 videos; custom creatives no more than 10 per plan; 500 creatives a day per advertiser; video at least 4 seconds | pkg.go.dev/github.com/geiqin/oceanengine/marketing-api/api/creative | v1.0.3, 2022-05-23 | n/a | Open-source library doc comments reproducing the API | Individual developer | single-source, legacy, contested |
| Juguang: ad = plan, unit, creative; manual-bid plan holds multiple units; auto-bid plan holds one; each unit holds multiple creatives; no maximum stated | fe-video-qc.xhscdn.com/fe-platform/37f82988d0e9273cd645bb819c37a4e0f697bc70.pdf | File created 2022-05-06 (PDF metadata; no printed date) | n/a | Platform manual, full text extracted and searched for 最多, 上限, 个数, 数量 | RedNote | primary for structure; count not published |
| No page owned by Ocean Engine, Tencent Ads or RedNote publishes a creative refresh interval | The 11 Chinese platform pages in the access table | 2026-09-10 | 11 pages | Each read in full or full-text searched | Own observation | primary, absence confirmed at source |

### B. Circulating Chinese guidance, checked and cut

| Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| Qianchuan new accounts: 9 new materials a day, 12 to 30 plans, clean low performers every 2 days, mature accounts cut new material 30 percent | sohu.com/a/759528634_121800350 | 2024-02-23 | Not stated | Agency experience | Agency, reposted | **unverified, cut** |
| Tencent: 2 to 10 creatives, 5 to 10 materials, fill 3 titles, add new materials after 3 to 7 days | tengxundsp.com/h-nd-745.html | 2025-09-19 | Not stated | Agency guide, no Tencent page cited | Agency | **unverified, cut** |
| Replace a creative after 3 to 5 days of falling spend; 30 percent two-day drop as the signal; 3 to 5 sets per plan | xiaoliu123.com/48139.html | 2026-06-07 | Not stated | "These years of running ads" | Practitioner blog | **unverified, cut** |
| Creative half-life 3 to 5 or 5 to 7 days; 60 percent of plans live one day; spend peaks day 2 | Search extracts, CSDN and unattributed | 2023 to 2024 | Not stated | None | Self-published | **unverified, cut** |
| Nearly 80 percent of Qianchuan materials decay within 3 days | Search extract, 1984nian.com (fetch failed, socket closed) | Undated | Not stated | None | Vendor | **unverified, cut** |
| Material mix of 60 percent recent top performers, 30 percent new, 10 percent history; review anything live over 30 days | Unattributed search extract (candidate domain failed DNS) | Undated | Not stated | None | Unknown | **unverified, cut** |
| Ocean Engine labels materials quality, first-launch, original and effective; "effective" means spend over 200 in the first 30 days, agencies only | niaogebiji.com/article-621384-1.html | 2023-07-21 | n/a | Trade relay of platform standards, no link | Trade media | single-source, two-step secondary, cut |
| Juguang: "official explanation" that creative decays as a note ages; quality notes last "at least a year, even two" | woshipm.com/share/6105805.html | 2024-08-28 | Not stated | Practitioner opinion, platform line quoted second-hand | Practitioner | **unverified, cut** |

### C. Wear-in, wear-out and variant research

| Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| High divergence and relevance ads "wear in immediately and show little sign of wearing-out even over repeated exposures"; low-creativity ads follow "the classic inverted U-Shape"; mixed ads wear in but wear out (Chen, Yang, Smith) | research.monash.edu/en/publications/the-effects-of-creativity-on-advertising-wear-in-and-wear-out | JAMS 44(3), 334 to 349, 2016 | Not on the page read | 2x2x3 between-subjects experiment, six dependent variables | Academic, no sponsor identified | primary (ledger row, re-read 2026-09-10) |
| Wearout defined as "the decreased effectiveness of advertising copy over time"; repetition wearout against copy wearout; restoration during a hiatus | gwern.net/doc/economics/2013-braun.pdf (full text) | Marketing Science 32(5), 753 to 767, Sept to Oct 2013 | n/a | Literature review inside the paper, citing earlier work | Academic | primary for the definition |
| Varying creative by individual impression history: simulated 12.7 percent more expected visits and 13.8 percent more expected conversions than the policy the campaign ran (Braun and Moe) | Same; also pubsonline.informs.org/doi/abs/10.1287/mksc.2013.0802 | 2013 | 5,803 randomly selected individuals; one automobile brand; 15 creatives; banner campaign 15 June to 23 August 2009, 9 weeks estimation plus 1 holdout | Hierarchical Bayesian model of impressions, visits and conversions with ad stock, wearout and restoration; lift from a simulation | Academic; data supplied by the campaign's ad agency | primary, with limits: one brand, one 2009 desktop display campaign, creative content unknown to the authors, weekly aggregation, simulated not tested |
| One user class, about 24 percent of the sample, shows weariness (negative marginal effect of more exposures on visits); profiling and capping could improve deployment up to 15 percent for these data; most effective publisher nine times the one 26 places down (Chae, Bruno, Feinberg) | hernanbruno.com/uploads/Chae_Bruno_Feinberg.pdf (full text); DOI 10.1177/0022243718820587 | JMR 56(1), 57 to 75, 2019 | More than 12,000 users across more than 400 websites; French financial services banner campaign, 72 days, 20 May to 31 July 2013, desktop and laptop | Discrete mixture (latent class) model over ad stock and timing, classes from internet usage | Academic; authors report no financial support; data from an ad agency | primary, with limits: visits not sales, one advertiser, one 2013 desktop campaign |
| In experimental settings maximum attitude at about ten exposures; recall rises linearly through at least the eighth; low involvement and spaced exposures strengthen attitude effects; repetition effects decay over time (Schmidt and Eisend) | ucrisportal.univie.ac.at/en/publications/advertising-repetition-a-meta-analysis-on-effective-frequency-in-/ | Journal of Advertising 44(4), 415 to 428, 2015 | Number of studies and effect sizes not on the page read | Meta-analysis | Academic | single-source for the figures; sample not confirmed at source |
| A dynamic content ad is "a structured system of meta-data for creative components and asset variations"; ad servers use it "to make real time decisions on which assets to use"; "It is required to force the developer to define at least one fall back" | github.com/InteractiveAdvertisingBureau/dynamicContentAdsSchema (specification) | Schema 1.0, September 2016, re-read 2026-09-10 | n/a | Published technical standard | Standards body | primary (ledger row) |
| Creative optimisation "only comes into play after two stages": dynamic creative builds multiple versions, then variants are tailored to audience segments | iabaustralia.com.au/wp-content/uploads/2018/07/Role-of-Creative-in-Digital-Ad-Effectiveness.pdf | July 2018, sentence re-read in extracted text 2026-09-10 | n/a | Council-authored whitepaper | Trade body | single-source (ledger row) |
| A creative analytics benchmark: 578,750 creatives, 6,015 brands, 1.29 billion dollars of spend; median 3.3 creatives a week; 3.85 percent hit rate in one tier; 5 a week gives about 26 percent weekly winner probability | go.motionapp.com/benchmarks | **No date or period on the page**, read 2026-09-10 | As stated | Platform data, platforms not named | Seller of creative analytics | market claim; **not cleared for brief 36** (see Do not publish) |
| Any count of creative variants per campaign with a stated method | Searched again, 11 phrasings | 2026-09-10 | n/a | n/a | n/a | **unverified, cut** (confirms ledger brief 18 row) |

### D. First-party and contrast

| Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| "The real work is knowing which 20% to shoot and which 80% to build from there", on a footwear launch of twelve colorways in four markets: one hero shoot, then AI for every color variant, market adaptation and ecommerce angle; bar labeled "Shoot for real" 20 and "Build with AI" 80; caption "One hero shoot. Every variant after." | src/pages/the-studio/who-we-are.astro lines 321 to 363; live at hubstudio.ai/the-studio/who-we-are | Read 2026-09-10 (repo and live page) | Not published | Not published | hubStudio | first-party, published; ledger delivery row "20/80 shoot-to-generate on variants", method still missing |
| Responsive search ad: up to 15 headlines and 4 descriptions; Google assembles combinations; at least 2 per ad group with Good or Excellent Ad Strength | support.google.com/google-ads/answer/7684791 | Undated, read 2026-09-10 | n/a | Platform help page | Google | primary, contrast only, never a China row |
| Meta ads per ad set limit and recommendations | facebook.com/business/help/652738434773716 | Title only, 2026-09-10 | n/a | Two fetches | Meta | **unreadable, cut**; every Meta figure seen came from vendor blogs |
| English search on four buyer phrasings: 33 results, 22 from agencies and ad-tech or tool vendors, 0 citing a Chinese ad platform's own creative limit | R2 above | 2026-09-10 | 33 results | Publisher type recorded per result | Own observation | primary, as an observation about published sources |

## R6. Where sources conflict

| Conflict | Range | Why |
|---|---|---|
| Tencent per-creative element caps | 3 per element and 3 videos (developer guide) against 3 copy, 3 landing page and 15 image and video components combined (API v3.0) | Different documentation generations. Neither page is dated. Publish both, scoped, and say the reference labeled 3.0 is the higher ceiling |
| Ocean Engine asset limits | 10 assets per ad (upgraded tool, trade article, September 2022) against 10 titles, 12 images, 10 videos per programmatic creative and 10 custom creatives per plan (code library, May 2022) | Product generation. The upgraded tool replaced the plan, unit and creative levels with project and ad. The library predates it. Neither is a platform page |
| Ocean Engine per-ad advice | 4 to 6 videos plus 6 or more titles against 4 or more videos and 5 to 6 titles | Broad agreement across two independent 2022 trade articles; the only disagreement is one title |
| Refresh interval (unpublishable, recorded so nobody re-researches it) | Clean low performers every 2 days (Qianchuan agency, 2024); 3 to 5 days (practitioner, 2026); 3 to 7 days (Tencent agency, 2025); review anything live over 30 days (unattributed); quality RedNote notes "a year, even two" (practitioner, 2024) | Different platforms and objectives: fast-burning ecommerce video on Qianchuan against search-led notes on RedNote. None has a sample. The spread is two orders of magnitude, which is itself the reason no number goes on the page |
| Wear-out research | Strong creative shows "little sign of wearing-out" (2016 experiment) against a quarter of users turning weary (2019 field study) against attitude peaking near ten exposures (2015 meta-analysis) | Different methods (lab experiment, one field campaign, pooled experiments) and different outcomes (attitudes, website visits). Not a contradiction: wear-out depends on the creative and on the person. Publish all three with methods |
| hubStudio mixes | 20 percent shot, 80 percent built (who we are page, a hybrid launch illustration) against about 70 percent generated, 30 percent shot (llm-info page and ecommerce design page, catalogs) | Different scopes, neither measured. Only the 20/80 is allowed on this page; never set the two side by side |
| Site fatigue window | "Creative fatigue window" 2 weeks, "was 6 to 8 weeks" (ad creative service page, Meta scope, sourced in a code comment to a vendor blog) against the 2 to 7 day Chinese practitioner windows | Different platforms, both unpublishable. Flagged because a reader clicking through to the ad creative service page will see a number this page does not print |

## Derived variant plan by launch phase

**Derived, not a platform rule.** Every cell is arithmetic or a reading of the
inputs named, with each assumption printed. It sizes the creative set per
ad unit, never a total for a launch, because no source supplies a number of
ad units or a budget. Nothing here restates brief 10's slot counts.

### Inputs

| Key | Input | Confidence |
|---|---|---|
| P1 | Tencent: up to 3 copy, 3 landing page, 15 image and video components per dynamic creative; up to 100 creatives per ad (API v3.0) | primary, scoped |
| P2 | Tencent: 3 per element, 3 videos; elements multiply; the system shows the best combination (guide) | primary, scoped |
| P3 | Ocean Engine upgraded: up to 10 assets per ad; 4 to 6 videos plus 6 or more titles; 2 to 3 per ad when testing | contested, one origin, 2022 |
| P4 | Ocean Engine combines, selects and explores all approved assets automatically | primary, qualitative |
| P5 | Juguang: multiple creatives per unit, no maximum; auto-bid plan holds one unit | primary for structure |
| P6 | No platform publishes a refresh interval | primary, absence |
| R1 | Strong creative wears out little under repetition; weak creative follows an inverted U (2016) | primary |
| R2 | Rotating 15 creatives by exposure history lifted modeled visits and conversions (2013, simulated) | primary with limits |
| R3 | About 24 percent of users turned weary with more exposure; capping could improve deployment up to 15 percent (2019) | primary with limits |
| R4 | Attitude peaks near ten exposures in experiments; effects decay over time (2015) | single-source for the figure |
| M1 | Brief 10 (by name only): Douyin's TopView and open screen are re-edits of the vertical master, not crops | cleared in brief 10 |

### Arithmetic

- **Tencent combinations from uploads (from P2's own example).** 2 videos, 2
  images, 2 lines of copy: 2 x 2 x 2 = 8 combinations from 6 uploads.
- **Tencent ceiling at the guide's caps (P2), derived.** 3 x 3 x 3 = 27
  combinations from 9 uploads. Assumes all three element types are used and
  multiply as in the guide's example, which the guide shows but does not state
  as a rule for every creative form.
- **Tencent ceiling at the v3.0 caps (P1), derived.** 15 visuals x 3 copy =
  45 visual and copy pairings per dynamic creative, before landing pages.
  Assumes the guide's multiplication applies to the v3.0 components, which
  the v3.0 page does not state.
- **Ocean Engine at the circulating advice (P3, P4), derived.** 4 to 6 videos
  x 6 titles = 24 to 36 video and title pairings per ad. Assumes titles cross
  every video, as P4's "automatic combination" suggests but does not quantify,
  and that titles do not count against the 10-asset cap, which no source says.
- **What the arithmetic shows, stated as reasoning.** Combinations are cheap
  and platform-made. The number a production plan controls is the count of
  distinct masters (videos, images) going in, which on both platforms is a
  single-digit or low-teens figure per unit.

### Plan table, derived

| Phase | Douyin, Ocean Engine, per ad | WeChat, Tencent Ads, per dynamic creative | RedNote, Juguang, per unit | Why, from the inputs |
|---|---|---|---|---|
| Test | 2 to 3 new masters, inside the 10-asset cap (P3) | 2 of each element, 8 combinations (P2) | Several creatives; no count published, sized to budget (P5) | Few masters, many platform-made combinations (P2, P4); a weak master decays under repetition, so find the strong ones first (R1) |
| Scale | Fill a proven ad toward 10: 4 to 6 videos plus 6 or more titles (P3) | Up to 15 visuals and 3 copy per creative on v3.0, or 3 per element on the guide (P1, P2) | Add creatives to the units that deliver; auto-bid plans hold one unit (P5) | Variety lets delivery rotate creatives by exposure history (R2) |
| Sustain | Replace the weakest master when the account's own data shows decline | Same | Same | No platform publishes an interval (P6); strong creative lasts longer (R1); a share of users turns weary with volume, so cap exposure as well as refresh (R3, R4) |
| Douyin brand formats | TopView and open screen cut from the same vertical master | n/a | n/a | Re-edits, not new shoots (M1). Do not add brief 10's slot counts to this table |

**Assumptions the page must print with the table:** the per-ad unit is the
counting unit; the 10-asset cap and the 4 to 6 video advice rest on one 2022
trade article; Tencent limits are read from developer documentation, not the
ad manager interface; no refresh interval is given because none is published.

## Cleared for use

Ready to paste. American English. Every block is followed by its Source line.
No Han characters inside a block. No competitor named or described.

**1. Tencent's published limits.**

> Tencent Ads, which sells ads across WeChat, publishes its creative limits in
> its developer documentation. The API reference for dynamic creatives allows
> up to 100 creatives under one ad, and inside a single dynamic creative up to
> 3 copy components, 3 landing page components and 15 image and video
> components combined.
> Source: Tencent Ads developer documentation, dynamic creative creation reference, API version 3.0, read 10 September 2026, undated page. A primary reading of the platform's own reference, scoped to that API version.

**2. Elements multiply.**

> In Tencent Ads' dynamic creative guide, uploads multiply rather than add. Two
> images and two lines of copy become four creatives; two videos, two images
> and two lines of copy become eight. The system then picks the combination
> that performs best and shows it. The same guide caps each element at 3
> uploads and video at 3, a lower ceiling than the version 3.0 reference.
> Source: Tencent Ads developer guide to the dynamic creative ad workflow, read 10 September 2026, undated page. A primary reading scoped to that guide; the gap between the two documents is an observation, not an explanation from the platform.

**3. Tencent's AI derivation.**

> Tencent's marketing academy described a tool in December 2023 that takes a
> library of base assets and makes new versions by redrawing backgrounds,
> extending canvas sizes and rewriting selling points. Advertisers can let the
> system build creatives from those versions automatically, then switch them
> off on performance.
> Source: Tencent Marketing School product update, volume 66, dated 7 December 2023, read 10 September 2026. A primary reading of the platform's own feature description; the page's performance figure carries no method and is not repeated.

**4. Ocean Engine's mechanism, and its missing number.**

> Ocean Engine's own encyclopedia entry for its upgraded ad tool, dated April
> 2023, says the system combines videos, images, titles, landing pages and
> creative components automatically, selects among them online and explores
> the full set. It does not say how many assets one ad may hold.
> Source: Ocean Engine encyclopedia entry on the upgraded Ocean Engine Ads, dated 11 April 2023, read in full 10 September 2026. A primary reading for the mechanism; the absence of a count is confirmed on the page.

**5. The Douyin cap in circulation.**

> The most specific Douyin figure in circulation is a cap of 10 creative assets
> per ad in Ocean Engine's upgraded ad tool, with advice of 4 to 6 videos and at
> least 6 titles per ad, and 2 to 3 when testing new creative. All of it traces
> to one Chinese trade article from September 2022, republished on a second
> site. A separate December 2022 article describes 4 or more videos and 5 to 6
> titles on one ad. Ocean Engine's developer pages for building projects and
> units returned no text when read.
> Source: 3 Chinese-language trade media pages carrying 2 independent articles, dated September and December 2022, plus 2 Ocean Engine developer pages fetched unauthenticated, all read 10 September 2026. Modal values from one origin, contested, not primary readings.

**6. The older Ocean Engine limits (optional, age-flagged).**

> An open-source code library reproducing Ocean Engine's earlier API, published
> in May 2022, lists a ceiling of 10 titles, 12 images and 10 videos for one
> programmatic creative, and no more than 10 custom creatives per campaign.
> Those limits predate the upgraded two-level ad structure.
> Source: one open-source library's documentation for Ocean Engine's marketing API, version 1.0.3, published 23 May 2022, read 10 September 2026. Single source, an older product generation, contested; not a primary reading.

**7. RedNote's structure without a count.**

> RedNote's Juguang ad platform manual sets out the structure but not the
> count. An ad is a plan, units and creatives. A manually bid plan can hold
> several units, an automatically bid plan only one, and every unit can hold
> several creatives. The manual gives no maximum.
> Source: RedNote Juguang platform product manual, a PDF on RedNote's own content server, file created May 2022, full text read 10 September 2026. A primary reading for the structure; the absence of a maximum is confirmed by full-text search.

**8. Nobody publishes a refresh interval.**

> None of the 11 pages read from Ocean Engine, Tencent Ads and RedNote says how
> often a creative should be replaced. The refresh intervals that circulate in
> Chinese come from agency and practitioner pages, and none of them states a
> sample.
> Source: 11 pages owned by three Chinese ad platforms, fetched unauthenticated 10 September 2026, plus 48 Chinese-language search results on seven phrasings classified by publisher type. An absence confirmed at source, not a figure.

**9. What wearout means.**

> In advertising research, wearout is "the decreased effectiveness of
> advertising copy over time". It comes in two kinds: repetition wearout, from
> seeing the same ad again, and copy wearout, from the passage of time. A pause
> in exposure lets repetition wearout recover gradually, an effect researchers
> call restoration.
> Source: Marketing Science, volume 32 issue 5, pages 753 to 767, September 2013, the definitions set out in a modeling paper's review of earlier advertising research. A definition, with no figure of its own.

**10. Strong creative wears out less.**

> In a controlled repetition experiment, ads high in divergence and relevance
> "wear in immediately and show little sign of wearing-out even over repeated
> exposures", while low-creativity ads followed "the classic inverted U-Shape"
> and declined with repeated exposure.
> Source: Journal of the Academy of Marketing Science, volume 44 issue 3, pages 334 to 349, 2016. Two-by-two-by-three between-subjects experiment across six dependent variables.

**11. Rotation by exposure history.**

> Changing which creative a person sees, based on what that person has already
> seen, lifted modeled results in a published field study. On one automobile
> brand's 10-week banner campaign with 15 creatives, a simulation put expected
> website visits 12.7 percent higher and conversions 13.8 percent higher than
> the rotation the campaign actually ran.
> Source: Marketing Science, volume 32 issue 5, pages 753 to 767, September 2013. A hierarchical Bayesian model with wearout and restoration effects, fitted to 5,803 randomly sampled people from one 2009 display campaign, with the lift produced by simulation rather than a live test.

**12. More exposure can turn negative.**

> For part of an audience, more exposure does harm. In a 72-day banner campaign
> for a French financial services advertiser, reaching more than 12,000 users
> across more than 400 websites, one class of users, about 24 percent of the
> sample, responded to additional exposures with fewer website visits.
> Profiling users and capping their exposure could have improved deployment by
> as much as 15 percent on that data.
> Source: Journal of Marketing Research, volume 56 issue 1, pages 57 to 75, 2019. A latent-class model of website visits on one desktop campaign run May to July 2013; it measures visits, not sales, and the authors report no financial support.

**13. How many exposures before attitude peaks.**

> A meta-analysis of advertising repetition found that in experimental settings
> attitude peaks at about ten exposures, while recall keeps rising through at
> least the eighth, and that the effects of repetition on both decay over time.
> Source: Journal of Advertising, volume 44 issue 4, pages 415 to 428, 2015. A meta-analysis of experimental repetition studies; the number of studies pooled was not confirmed on the page read.

**14. What dynamic creative is (reused, ledger).**

> A dynamic content ad is defined by its published standard as "a structured
> system of meta-data for creative components and asset variations of the
> creative components that may be used in an advertisement", with ad serving
> systems using that schema "to make real time decisions on which assets to use
> for a particular impression".
> Source: industry standards body, Dynamic Content Ad Specification, schema version 1.0, September 2016, re-read 10 September 2026. Published technical standard, open repository.

**15. Optimization comes after variants exist (reused, ledger).**

> A trade body whitepaper describes the sequence plainly: creative optimization
> "only comes into play after two stages have been completed: employing dynamic
> creative to build multiple versions of an ad and then tailoring these ad
> variants for different audience segments".
> Source: national digital advertising trade body, The Role of Creative in Digital Advertising Effectiveness, July 2018, council-authored whitepaper, sentence re-read 10 September 2026.

On the page the quoted word stays "optimisation" as printed in the source, or
the writer drops the quotation marks around that one word. Flag at R8.

**16. hubStudio's published split (first-party exception).**

> hubStudio's studio page describes a footwear launch of twelve colorways
> across four markets as one strong shoot of the hero product, then generation
> for every color variant, market adaptation and ecommerce angle: "The real
> work is knowing which 20% to shoot and which 80% to build from there."
> Source: hubStudio's who we are page, read 10 September 2026. A published first-party illustration of the studio's shoot-to-build split, attributed to that page; no sample of engagements or period is published behind it.

**17. Western contrast (optional).**

> For contrast, a Western search platform publishes its ceiling in the open.
> Google's help center lets one responsive search ad carry up to 15 headlines
> and 4 descriptions, assembles them into combinations itself, and recommends
> at least 2 such ads per ad group.
> Source: Google Ads Help, About responsive search ads, read 10 September 2026, undated page. A primary reading scoped to that ad format; a contrast, never a China figure.

**18. The English search results.**

> Ask in English how many ad creatives a Douyin campaign needs and the results
> are agency guides, ad-tool blogs and Meta testing advice. Across 33 results on
> four English phrasings, none cites a Chinese ad platform's own creative
> limit.
> Source: search-results audit run 10 September 2026 across four English buyer phrasings, publisher type recorded for every result, no domain named. An observation about published sources.

## Do not publish

### Hard blocks for this brief

| Item | Reason |
|---|---|
| **Any refresh interval in days or weeks** (2, 3 to 5, 3 to 7, 5 to 7, 30 days; "a year or two" for RedNote notes) | No platform publishes one. Every figure in circulation is agency or practitioner experience with no sample. Publish the absence only |
| **Any Ocean Engine limit presented as official, current or read from Ocean Engine** | The platform's developer pages served no text. The 10-asset cap rests on one 2022 trade article. Modal with count and date, labeled contested, or nothing |
| **The pre-upgrade limits (10 titles, 12 images, 10 videos; 10 per plan; 500 a day) without their May 2022 date and "older product generation" label** | One code library, reproducing an API that the upgraded structure replaced |
| **Any Qianchuan creative count or cadence** (9 new materials a day, 12 to 30 plans, 2-day clean-up, 30 percent cut; 10 to 20 active plans with 60 to 70 percent new; "test with 3 videos") | One agency repost and untied extracts. No Qianchuan-owned page reached |
| **"Nearly 80 percent of Qianchuan materials decay within 3 days"** | Search extract only; the page failed to load; no method |
| **"Over 60 percent of optimizers launch 40 or more plans a day", attributed to a 2020 optimizer report** | Report not read, extract only, no sample visible |
| **The 8.78 percent spend lift from Tencent's AI derivation** | Platform promoting its own feature, no method, a percentage with no absolute, and measured on the ad network rather than WeChat |
| **"Head material efficiency up 21 percent" for one finance advertiser on the upgraded Ocean Engine Ads** | Platform case figure in a launch release, no method |
| **"The system picks the one creative most likely to scale and leaves the rest undelivered"** (older programmatic creative) | Untied search extract, contradicts the upgraded tool's "explore the full set" |
| **Ocean Engine material label thresholds** ("effective" means spend over 200 in 30 days) and the homogeneous-material clean-up tool dated 16 March | One trade relay and one 403 page. Two-step secondary chain to a platform standard |
| **Tencent practitioner counts** (2 to 10 creatives, 5 to 10 materials, 3 titles, 3 to 7 days; "the similar-creative limit is a black box") | One agency page citing no Tencent source, plus an extract |
| **A Juguang creatives-per-unit maximum, in any form** | Not published on the platform manual or on any page reached |
| **Every Meta figure**: 50 ads per ad set, 3 to 5 per ad set, 10 to 20 for Advantage+, 2 to 3 new creatives a week, frequency 2.5 to 3, "creative fatigue" at twice past cost per result, UGC at 4x click-through | Meta's own help page served a title only; every figure came from vendor blogs |
| **English budget-tier counts** (5 to 10 under 5,000 dollars a month, 15 to 25, 40 to 50 plus; 8 to 16 variations; diminishing returns after 20 to 50) and **"dozens of creative variants per Douyin campaign"** | Vendor and agency blogs, no method, no China data |
| **The creative analytics benchmark row in the ledger** (578,750 creatives, median 3.3 a week, 3.85 percent hit rate, 26 percent weekly winner probability at 5 a week) | For brief 36: no publication date or period on the page, platforms not named, published by a seller of creative analytics (market claim), Western platforms, and any attribution alludes to an analytics vendor on a page about variant volume |
| **Any count of creative variants per campaign or per launch presented as research or benchmark** | Ledger brief 18 row confirmed again: none exists with a stated method |
| **The derived plan, or any derived combination count, presented as a platform rule** | Arithmetic on the inputs, with printed assumptions. Label derived in the table caption, the body and any FAQ |
| **A launch total** (units x creatives x phases) | No source supplies a number of ad units, a budget or a flight length. Per-unit only |
| **Brief 10's 24 and 27 slot counts, or its 17 and 19 distinct files, as a variant count** | Brief rule. The matrix counts platform slots per SKU, a different number. Name the article only |
| **The 20/80 split as measured, as delivery data with a method, or with a direction of travel** | The ledger records sample and period as missing. The page frames it as an illustration of judgment on a footwear launch. Attributed quote only |
| **Any variant or shot count derived by applying 20/80** ("2 shot, 8 generated") | Turns an unmeasured illustration into a figure that looks measured |
| **The 70/30 generated-to-shot mix on this page, or beside the 20/80** | Brief allows the 20/80 only; the two scopes differ and neither is measured |
| **The ad creative service page's figures**: "Creative fatigue window" 2 weeks, "was 6 to 8 weeks before" a named Meta system; 20 or more entity-distinct ads a month for higher ROAS; 15 distinct assets per TikTok campaign; one ad set of 25 outperforming five of five; 3 to 5 territories with 20 to 40 statics and 6 to 12 video cuts; 15 to 30 variants a territory; weekly or biweekly refresh | First-party copy outside the ledger's delivery rows, so the exception does not reach it. No method. Western platform scope. A code comment sources the headline stats to a creative analytics vendor's blog and a platform product. **Site backlog: flag to the site owner** |
| **The Douyin platform page's volume lines**: thirty KOC cuts for a launch, ten fresh hooks a week, three to five posts a week | First-party copy outside the ledger rows, no method |
| **22 to 78 percent approval, 7x output, 60 percent lower cost** | Ledger block stands |
| **Any hubStudio rate, monthly figure or per-item price** | Standing rule |
| **The agency that supplied either field study's data** | Both are advertising agencies. Attribute to the journal only |

### Quarantined domains

None may be named, linked, described or alluded to on the page.

| Domain | Pages | What it published | Why quarantined |
|---|---|---|---|
| niaogebiji.com, 27sem.com | 3 | 10-asset cap and per-ad advice (2022); material label thresholds (2023); Qianchuan tactics | Trade media relaying platform rules without links. Counted as sources in the modal row, never named |
| morketing.com | 1 | Upgraded-tool case, 4 or more videos and 5 to 6 titles | Trade media |
| sohu.com (agency repost) | 1 | Qianchuan daily material cadence | Agency content |
| tengxundsp.com, teng-ad.com | 2 | Tencent creative counts and refresh | Agencies |
| xiaoliu123.com | 1 | 3 to 5 day replacement rule | Practitioner blog |
| woshipm.com | 1 | Juguang note lifecycle | Practitioner content on a community site |
| xiao-ad.com, juxuan.net | 3 | Juguang FAQs | Agencies; xiao-ad failed DNS |
| smallfighter.com, 1984nian.com, liyingshiji.com, linkflowtech.com, tgsem.com, jingzhunhuoke.net, appganhuo.com, chenge66.com, tui39.com, jymdsp.com, opp2.com | 14 | Plan and material tactics, decay claims | Vendors, agencies, personal and trade blogs |
| zhihu.com, zhuanlan.zhihu.com, blog.csdn.net | 11 plus | Self-published tactics and decay claims | Self-published |
| manual.sensorsdata.cn, help.reditorapp.com | 2 | Juguang integration and editor guides | Software vendors |
| pkg.go.dev (geiqin/oceanengine) | 1 | Older Ocean Engine API limits | Individual's code library. Describe as "an open-source code library", never by author |
| go.motionapp.com | 1 | Creative volume benchmark | Creative analytics vendor |
| segwise.ai (cited in the ad creative page's code comment) | 0 fetched | Meta fatigue window claim | Creative analytics vendor; site backlog item |
| admanage.ai, billo.app, sovran.ai, merren.io, admakeai.com, adstellar.ai, adlibrary.com, coinis.com, rewarx.com, adnabu.com, straightnorth.com, leadsbridge.com, benly.ai, amplifymarketers.com, 1clickreport.com, savemyleads.com, growthfisher.com, roihacks.com, adsuploader.com, tryatria.com, bir.ch, adsights.ai, goodmorningco.com, adshark.com, revelmarketingpartners.com | 30 plus | Meta and generic creative testing and refresh advice | Vendors and agencies |
| directagents.com, sekkeidigitalgroup.com, influchina.com, seoagencychina.com, chinatradingdesk.com, digitalinasia.com, gatekaizen.com, i-click.com, chinamarketingcorp.com | 9 | Douyin and generic ad guides | Agencies and consultancies, standing rule |
| academia.edu (Andromeda guide), arxiv.org fatigue-detection papers | 3 | Not read | Not method-checked; leads only |

### Platform surfaces consulted (may be named, never as the source of a number they did not give)

| Host | Owner | What it gave |
|---|---|---|
| developers.e.qq.com | Tencent Ads | Two readable limit pages, one reference without limits |
| support.e.qq.com | Tencent Ads | Header only |
| eschool.qq.com | Tencent Marketing School | AI derivation feature description |
| www.oceanengine.com | Ocean Engine | Encyclopedia entry and two FAQs, no counts |
| open.oceanengine.com | Ocean Engine | Two title-only shells |
| fe-video-qc.xhscdn.com | RedNote | Juguang manual, structure only |
| www.facebook.com/business/help | Meta | Title only |
| support.google.com | Google | Responsive search ad ceilings, contrast only |

## Screenshot inventory

Nothing captured to the repo. The Juguang manual and two paper PDFs were
extracted to text in the session scratchpad only, which is not kept. The
captures below would move rows from modal to primary. Save to
`research/how-many-variants-a-china-launch-needs/` with the date in the
filename.

| File | What it shows | Captured | Source surface |
|---|---|---|---|
| oceanengine-ad-asset-panel-YYYY-MM-DD.png | The upgraded Ocean Engine Ads creation panel at the asset step, with any per-ad counter or cap message | not yet | Advertiser account |
| oceanengine-asset-cap-error-YYYY-MM-DD.png | The message shown when adding one asset past the cap | not yet | Advertiser account |
| qianchuan-plan-creative-panel-YYYY-MM-DD.png | Qianchuan creative step with its video count limit | not yet | Qianchuan account |
| tencent-ads-3-dynamic-creative-YYYY-MM-DD.png | The ad manager's dynamic creative panel, to test the v3.0 API limits against the interface | not yet | Tencent Ads account |
| juguang-unit-creative-limit-YYYY-MM-DD.png | Juguang unit with creatives added until a limit appears | not yet | Juguang account |
| any-platform-decline-diagnostic-YYYY-MM-DD.png | Any in-product creative decline or fatigue label on the three Chinese platforms | not yet | Advertiser accounts |
| juguang-manual-2022-05.pdf | The platform manual itself, for the structure row | not yet (retrievable from the URL in the access table) | RedNote content server |

## Ledger rows to append

Table format matches the ledger. Orchestrator appends.

## Paid creative counts, refresh and wear-out (added 2026-09-10, brief 36)

Rows marked primary are readings of platform-owned pages fetched
unauthenticated on 2026-09-10, scoped to the page. The Ocean Engine per-ad rows
are modal under deviation 7 and originate once. No platform page read publishes
a refresh interval. Full working in
`research/how-many-variants-a-china-launch-needs.md`.

| Figure | Attribution to use | Source | Date | Confidence | Check 1 | Check 2 | Used in |
|---|---|---|---|---|---|---|---|
| Tencent Ads API v3.0: up to 100 creatives per ad; per dynamic creative up to 3 copy components, 3 landing page components, 15 image and video components combined | "Tencent Ads developer documentation, dynamic creative creation reference, API version 3.0, read 10 September 2026" | developers.e.qq.com/v3.0/pages/dynamic_creatives/add | undated, read 2026-09-10 | primary, API v3.0 scope | 2026-09-10 | | 36 |
| Tencent Ads guide: each dynamic creative element up to 3 uploads, video up to 3; elements multiply (2 x 2 = 4; 2 x 2 x 2 = 8); system shows the best combination | "Tencent Ads developer guide to dynamic creative ads, read 10 September 2026" | developers.e.qq.com/docs/guide/ads/dc | undated, read 2026-09-10 | primary, guide scope; lower caps than v3.0 | 2026-09-10 | | 36 |
| Tencent AI derivation: base library assets re-made by redrawing backgrounds, extending canvas and rewriting selling points; system can auto-create creatives from them, advertiser switches off on performance | "Tencent Marketing School product update volume 66, 7 December 2023" | eschool.qq.com/Solution/ListDetail/pd-9767 | 2023-12-07 | primary for the feature description; the 8.78 percent figure is blocked | 2026-09-10 | | 36 |
| Upgraded Ocean Engine Ads combines, selects and explores all approved assets automatically, two levels (project, ad), no count published | "Ocean Engine encyclopedia entry on the upgraded Ocean Engine Ads, 11 April 2023" | oceanengine.com/baike/juliangguanggaoshengjiban.html | 2023-04-11 | primary, qualitative, absence of a count confirmed | 2026-09-10 | | 36 |
| Ocean Engine open platform pages for creating projects and units in the upgraded tool served a title and no body to unauthenticated requests | "direct unauthenticated fetches, 10 September 2026, two requests" | open.oceanengine.com/labels/7/docs/1740868093375503; /labels/34/docs/1740946299496459 | 2026-09-10 | primary, negative observation | 2026-09-10 | | 36 |
| Upgraded Ocean Engine Ads: up to 10 assets per ad; 4 to 6 videos plus 6 or more titles; 2 to 3 per ad when testing; up to 20 landing pages | "one Chinese trade article, September 2022, carried on two sites, with a December 2022 article giving 4 or more videos and 5 to 6 titles; modal, originates once, not primary" | niaogebiji.com/article-191346-1.html; 27sem.com/article/7310; morketing.com/detail/23691 | 2022-09 to 2022-12 | modal, contested | 2026-09-10 | | 36 |
| Pre-upgrade Ocean Engine API: programmatic creative up to 10 titles, 12 images, 10 videos; custom creatives no more than 10 per plan; 500 creatives a day per advertiser; video at least 4 seconds | "an open-source code library reproducing Ocean Engine's earlier marketing API, version 1.0.3, May 2022; older product generation" | pkg.go.dev/github.com/geiqin/oceanengine/marketing-api/api/creative | 2022-05-23 | single-source, legacy, contested | 2026-09-10 | | 36 |
| Juguang: plan, unit, creative; manual-bid plan holds multiple units, auto-bid plan one; each unit holds multiple creatives; no maximum published | "RedNote Juguang platform product manual, file created May 2022, read 10 September 2026" | fe-video-qc.xhscdn.com/fe-platform/37f82988d0e9273cd645bb819c37a4e0f697bc70.pdf | 2022-05-06 (PDF metadata) | primary for structure | 2026-09-10 | | 36 |
| No page owned by Ocean Engine, Tencent Ads or RedNote publishes a creative refresh interval | "11 platform-owned pages fetched 10 September 2026, plus 48 Chinese search results classified; an absence, never a number" | Access table in the research file | 2026-09-10 | primary, absence confirmed at source | 2026-09-10 | | 36 |
| Wearout defined as the decreased effectiveness of advertising copy over time; repetition wearout against copy wearout; restoration during a pause | "Marketing Science, 32(5), September 2013, definitions from the paper's literature review" | gwern.net/doc/economics/2013-braun.pdf; DOI 10.1287/mksc.2013.0802 | 2013-09 | primary for the definition | 2026-09-10 | | 36 |
| Varying creative by individual impression history: simulated 12.7 percent more expected visits and 13.8 percent more expected conversions; 5,803 individuals, one automobile brand, 15 creatives, banner campaign 15 June to 23 August 2009 | "Marketing Science, 32(5), 753 to 767, 2013, hierarchical Bayesian model, simulated lift", always with the limits: one brand, one 2009 campaign, simulation | Same | 2013-09 | primary, with limits | 2026-09-10 | | 36 |
| About 24 percent of users in one weary class (negative marginal effect of more exposures on visits); profiling and capping could improve deployment up to 15 percent; more than 12,000 users, more than 400 websites, French financial services, 72 days, May to July 2013 | "Journal of Marketing Research, 56(1), 57 to 75, 2019, latent-class model", always with the limits: visits not sales, one campaign | hernanbruno.com/uploads/Chae_Bruno_Feinberg.pdf; DOI 10.1177/0022243718820587 | 2019 | primary, with limits | 2026-09-10 | | 36 |
| In experiments attitude peaks at about ten exposures, recall rises linearly through at least the eighth, repetition effects decay over time | "Journal of Advertising, 44(4), 415 to 428, 2015, meta-analysis", with the note that the number of studies was not confirmed at source | ucrisportal.univie.ac.at record of the article | 2015 | single-source for the figures | 2026-09-10 | | 36 |
| hubStudio's who we are page: "The real work is knowing which 20% to shoot and which 80% to build from there", footwear launch illustration, twelve colorways, four markets | "hubStudio's who we are page, read 10 September 2026", attributed, never as measured | src/pages/the-studio/who-we-are.astro; live page | 2026-09-10 | first-party, published; method still missing in the delivery table | 2026-09-10 | | 36 |
| Google responsive search ads: up to 15 headlines and 4 descriptions; Google assembles combinations; at least 2 per ad group recommended | "Google Ads Help, About responsive search ads, read 10 September 2026", contrast only | support.google.com/google-ads/answer/7684791 | undated, read 2026-09-10 | primary, contrast | 2026-09-10 | | 36 |
| Meta's help page on campaign, ad set and ad limits served a title and no body on two requests | "direct fetches, 10 September 2026" | facebook.com/business/help/652738434773716 | 2026-09-10 | primary, negative observation | 2026-09-10 | | 36 |
| English search on four buyer phrasings: 33 results, 22 from agencies and ad-tech or tool vendors, 0 citing a Chinese ad platform's own creative limit | "search-results audit run 10 September 2026, publisher type recorded for every result, no domain named" | R2 in the research file | 2026-09-10 | primary observation, re-countable | 2026-09-10 | | 36 |

**Ledger notes, not new rows.** (1) The wear-out experiment row (JAMS 2016)
was re-read at source on 2026-09-10 and still says the same thing. (2) The
Dynamic Content Ad Specification row was re-read 2026-09-10, quotes unchanged.
(3) The trade body whitepaper row's sentence was re-read in extracted text
2026-09-10. (4) The creative analytics benchmark row: the page read 2026-09-10
prints no publication date or period, so the row's "2026" date is not on the
page; consider downgrading it to market claim. (5) The delivery-figure row
"20/80 shoot-to-generate on variants" now has its page: who we are.

### Do not publish, added from brief 36

| Claim | Where it came from | Why it was cut | Logged |
|---|---|---|---|
| Any creative refresh interval for a Chinese ad platform (2 days, 3 to 5, 3 to 7, 5 to 7, 30 days; RedNote notes lasting one to two years) | Agency, practitioner and self-published Chinese pages, brief 36 | No platform publishes one; none states a sample. Publish the absence | 2026-09-10 |
| Qianchuan 9 new materials a day, 12 to 30 plans, 2-day clean-up, 30 percent cut for mature accounts | Agency article reposted on a portal, 2024-02-23 | Single agency source, no sample, no Qianchuan page reached | 2026-09-10 |
| Nearly 80 percent of Qianchuan materials decay within 3 days | Search extract, page failed to load | No method, not read at source | 2026-09-10 |
| Over 60 percent of optimizers launch 40 or more plans a day (2020 optimizer report) | Search extract | Report not read, no sample visible | 2026-09-10 |
| Tencent AI derivation lifted spend 8.78 percent | Tencent Marketing School, 2023-12-07 | Platform promoting its own feature, no method, percentage with no absolute, ad network traffic | 2026-09-10 |
| Head material efficiency up 21 percent for a finance advertiser on upgraded Ocean Engine Ads | Launch release reposts, 2023 | Platform case figure, no method | 2026-09-10 |
| Ocean Engine "effective material" threshold of spend over 200 in 30 days, and a 16 March homogeneous-material clean-up beta | Trade relay 2023-07-21; self-published post (403) | Two-step secondary to a platform standard | 2026-09-10 |
| Tencent 2 to 10 creatives, 5 to 10 materials, 3 titles, refresh after 3 to 7 days | Agency guide, 2025-09-19 | Cites no Tencent page, no sample | 2026-09-10 |
| Any Juguang creatives-per-unit maximum | Searched, brief 36 | Not published on the platform manual or any page reached | 2026-09-10 |
| Meta 50 ads per ad set, 3 to 5 per ad set, 10 to 20 for Advantage+, 2 to 3 new a week, frequency 2.5 to 3, fatigue at twice past cost per result | Vendor blogs | Meta's own page served a title only | 2026-09-10 |
| Budget-tier creative counts, 8 to 16 variations, diminishing returns after 20 to 50, "dozens of variants per Douyin campaign" | Vendor and agency blogs on the brief 36 English SERP | No method, no China data | 2026-09-10 |
| The creative analytics benchmark figures on a page about variant volume | Ledger row, brief 11 | No date or period on the page, platforms unnamed, seller-published, and attribution alludes to an analytics vendor | 2026-09-10 |
| Ad creative service page figures: 2-week fatigue window "was 6 to 8 weeks", 20 plus entity-distinct ads a month, 15 distinct assets per TikTok campaign, 25 in one ad set beating five of five, 3 to 5 territories with 20 to 40 statics and 6 to 12 cuts, 15 to 30 variants a territory | hubStudio site copy, src/pages/services/design/ad-creative.astro | Outside the ledger delivery rows, no method, Western scope, sourced in a code comment to a vendor blog. Site backlog item | 2026-09-10 |
| Douyin platform page: thirty KOC cuts per launch, ten fresh hooks a week, three to five posts a week | hubStudio site copy, src/pages/solutions/platforms/douyin.astro | Outside the ledger delivery rows, no method | 2026-09-10 |
| Any shot or generated count derived by applying the 20/80 split | Brief 36 temptation | Turns an unmeasured illustration into a measured-looking figure | 2026-09-10 |
| Any launch-level variant total | Brief 36 angle | No source supplies ad units, budget or flight length; the derived plan is per unit | 2026-09-10 |

## Notes for the writer

### Outline mapped to the brief

1. **H1** How many creative variants a China launch actually needs. First lines
   state the answer: no Chinese ad platform publishes a launch variant count or
   a refresh interval; two publish limits; research explains why the count
   still matters.
2. **First H2 restating the query**, 40 to 60 word answer naming hubStudio
   once. Put the must-include platform table directly under it (drafted above).
3. **How to read these numbers.** The SPEC.md disclaimer block, in the
   ad-platform form brief 06 used: first paragraph names Ocean Engine and an
   "advertiser backend", closing paragraph says "advertiser account". NN: the
   Ocean Engine rows rest on 4 non-platform sources (3 trade pages carrying 2
   articles, 1 code library), collected 10 September 2026, and the block must
   say the per-ad cap originates once. Then the readable-page paragraph naming
   Tencent's API v3.0 reference and dynamic creative guide, RedNote's Juguang
   manual and Ocean Engine's encyclopedia entry, each labeled primary for its
   scope only. Log the change at R8.
4. **What each platform publishes.** Cleared 1, 2, 3 (Tencent); 4, 5, optional
   6 (Ocean Engine); 7 (Juguang). Qianchuan: one sentence saying nothing was
   reachable.
5. **What nobody publishes: refresh.** Cleared 8. Optional cleared 17 as a
   contrast in one sentence.
6. **What wear-in and wear-out research measures, and its limits.** Must-include.
   Cleared 9, 10, 11, 12, 13, each with its limits in the body: lab against
   field, one campaign each, 2009 and 2013 desktop display, visits not sales,
   simulation not test. Say none is Chinese and none studies Douyin, WeChat or
   RedNote.
7. **Why combinations are not variants.** Cleared 14, 15 and the arithmetic
   bullets, labeled derived.
8. **A derived variant plan.** Must-include. The plan table, captioned
   "Derived from published limits and wear-out research, not a platform rule",
   with the assumptions printed under it. Name the matrix article, One Shoot,
   Six Platforms: China Matrix, as where the slot count lives, with no slot
   figure repeated. Place cleared 16 (20/80) here, attributed to the who we are
   page, as how the masters in the plan get made, with no arithmetic on it.
9. **FAQ**, five questions, 40 to 70 words each (see below).
10. **CTA**: Plan the variant set.

### Must-includes and slot requirement

| Item | Status |
|---|---|
| Table of platform creative-count and refresh guidance, primary where readable, modal otherwise | Met. Drafted above, five columns |
| What wear-in and wear-out research measures, with limits | Met. Four studies with methods and limits |
| A derived variant plan, labeled derived | Met, per ad unit only. No launch total is possible |
| The matrix article by name for the slot count | Met, by name only |
| Slot requirement: one number from hubStudio's delivery record with its method stated | **Cannot be met.** The 20/80 is published on the who we are page but no sample or period exists in writing. It runs under the first-party exception without a method, and the run log must say the requirement is unmet |

### FAQ guidance

1. *How many creatives should a Douyin ad plan have?* "Plan" is the older
   Ocean Engine level; the upgraded tool uses project and ad. Answer with the
   contested 10-asset cap and 4 to 6 videos, one 2022 origin, not official.
2. *How often should China ad creatives be refreshed?* No platform publishes an
   interval. Answer with cleared 8 plus the research: strong creative lasts
   longer, some users turn weary. No number of days.
3. *How many ad variations should I test in China?* Tencent's published
   multiplication and caps, the Ocean Engine test advice (2 to 3 per ad,
   contested), then the derived plan, labeled derived.
4. *What is creative fatigue in paid social?* Cleared 9 (wearout) plus cleared
   12. Do not use Meta's "creative fatigue" status definition; its page was
   unreadable.
5. *How many variants can one shoot produce?* **No number available.** No
   platform or study publishes one, and the matrix article's figures are slot
   counts. Answer with cleared 16 by attribution and a pointer to the matrix
   article by name.

### H1, title and meta

- **H1 and title** hold ("How Many Ad Variants a China Launch Needs", 41
  characters), provided the opening states that no platform publishes the
  number.
- **Meta needs a change.** The approved draft promises what the platforms
  publish on "review". Creative review was not researched in this file. Two
  options: (a) reuse brief 06's cleared block 10 on how rejection notices are
  reported and keep the meta; or (b) replace it with "What China's ad platforms
  publish on creatives per ad, what none say about refresh, and what wear-out
  research says a launch needs." (131 characters, counted). Option (b) is
  recommended; log the change.

### Internal link targets, verified in `src/pages`

| Anchor text | URL | Exists |
|---|---|---|
| One Shoot, Six Platforms: China Matrix | /resources/insights/one-shoot-six-platforms-china-variant-matrix | yes |
| Douyin platform page | /solutions/platforms/douyin | yes |
| Ad creative design service | /services/design/ad-creative | yes, but carries unsourced fatigue and batch figures this page must not repeat or contradict by number |
| Douyin Ad Creative Specs by Format | /resources/insights/douyin-ad-creative-specs-by-format | yes |
| Automation Platform or Production Partner | /resources/insights/automation-platform-or-production-partner | yes, shares the wear-out quote |
| WeChat platform page | /solutions/platforms/wechat | yes |
| RedNote platform page | /solutions/platforms/rednote | yes |
| Who we are (source of the 20/80) | /the-studio/who-we-are | yes |

### Carry-overs

- No em dash, no Han characters, no competitor. The two field studies' data
  came from advertising agencies; attribute to the journals only.
- Cleared 15 contains the British spelling "optimisation" in the source; see
  the note under it.
- Search the finished draft for `$`: the only dollar-adjacent material in this
  file is in Do not publish.
- Site backlog for the orchestrator: the ad creative service page carries
  headline figures sourced in a code comment to a creative analytics vendor's
  blog, outside the ledger and with no method.

## R8. Reconciliation (filled after drafting)
