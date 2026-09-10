# Research: weibo-image-video-specs

| Field | Value |
|---|---|
| Brief | 09 |
| Target query | weibo image and video specs |
| Gap statement (one sentence) | The only English page that answers the query is a 2022 guide whose 5MB image cap matches Weibo developer documents from 2012 and 2022, while Weibo's own help centre, readable without a login, now states 20M per image, 15G for a video uploaded from a PC and 4G from a phone, and no ranking page in either language says how the multi-image grid crops, that the help centre has added a focus point, or that a post has carried up to 18 images since 2019 with only nine shown in the feed. |
| Research time spent | About 70 minutes active, Chinese-language web first, 19 query sets, roughly 150 results classified, nine platform-owned pages fetched |
| Written | 2026-09-10 |
| Method | Modal value per deviation 7 in `../CLAUDE.md`, decided 2026-09-10, plus scoped primary rows where a Weibo help-centre or developer page is publicly readable. |

## Method notice, binding on the writer

This brief differs from 04, 05 and 07 in one important way. Weibo serves
readable rule text on two platform-owned surfaces: its customer service centre
(kefu.weibo.com) and its Open Platform developer wiki (open.weibo.com). Rows
taken from those pages are labeled `primary`, carry the page, its own
last-updated date and the fetch date, and are scoped to exactly what that page
covers. A help-centre page about posting image posts governs image posts. A
developer page about an upload API governs that API. Neither is stretched to
anything else.

Every other number is the most commonly published figure across independent
domains, with the count of domains that gave it. Never present a modal value as
verified, official, required, or read from the platform. A value on one
non-platform domain is `contested` without exception.

The disclaimer block in `../SPEC.md` still applies, with one required edit the
writer must flag in the run log: its line "Both platform rule centres gate their
rule text behind a seller login" is untrue for Weibo. The verbatim rule permits
changing platform names, count and date only, so the writer keeps the block and
adds, immediately after it, a separate sentence stating which rows are read from
Weibo's help centre and developer wiki and on what date. Do not rewrite the
block itself without the owner's sign-off.

## R3 primary-access attempts, and what they returned

Nine platform-owned pages were fetched unauthenticated on 2026-09-10. All
Chinese text was read through a fetch tool that renders and summarises; the
quoted limits below were returned as quotations, and two of them were
cross-checked against a search-engine extract of the same page.

| Surface | URL | Last updated, as shown | Result |
|---|---|---|---|
| Customer service centre, "how to post an image Weibo" (ruhe fabu tupian weibo) | kefu.weibo.com/faqdetail?id=12483 | 2026-04-01 | **Readable.** Uploaded image files support gif, jpg and png. A single image must be under 20M. Images whose width-to-height ratio is "smaller than 1:3" can have a focus point (jiaodian) set; super-long images (chao changtu) do not yet support changing the focus point. States no image count, no GIF-specific cap, no display ratio, and does not say what the focus point controls |
| Customer service centre, "why a posted image has no view-original option" | kefu.weibo.com/faqdetail?id=21265 | 2025-05-19 | **Readable.** A single image over 30M is compressed whatever the upload setting. Total size across all images is unlimited. Single and multi-image posts are judged per image. The view-original option (chakan yuantu) appears only when an original file was posted |
| Customer service centre, video upload and publishing (review) FAQ | kefu.weibo.com/faqdetail?id=21503 | 2024-07-01 | **Readable.** PC upload supports up to 15G. Phone upload supports up to 4G. The phone does not support videos under 3 seconds. A video title may not be under 6 characters. Vertical video cover 3:4; horizontal video cover 16:9 or 4:3; a vertical video cannot take a horizontal cover. Horizontal video whose source exceeds 1080p can be offered at 2K and 4K definition, conditional on the account meeting playback thresholds that the page does not quantify in the extract. States no maximum duration, no format list, no bitrate and no frame ratio |
| Open Platform, statuses/share API | open.weibo.com/wiki/2/statuses/share | 2022-06-09 | **Readable.** JPEG, GIF, PNG. Image under 5M. Text within 140 characters. The post must contain a URL on the developer's bound domain. Governs third-party link sharing through this API only |
| Open Platform, statuses/upload API (English page) | open.weibo.com/wiki/2/statuses/upload/en | 2012-08-01 | **Readable.** JPEG, GIF, PNG only. 5MB. One picture per request. Text within 140 characters. Fourteen years old, API route only |
| Open Platform, account/update_profile_image (V1 API, English page) | open.weibo.com/wiki/Account/update_profile_image/en | 2011-01-21 | **Readable.** Under 700K. GIF or JPG. Images over 500 pixels are scaled. Legacy V1 endpoint on the old api.t.sina.com.cn host, fifteen years old |
| Open Platform, upload video file API (shangchuan shipin wenjian) | open.weibo.com/wiki/ (upload video file page) | 2012-08-22 | **Readable.** File size may not exceed 1G, error code A0004. No duration, format or resolution limit stated |
| Open Platform, third-party video upload (disanfang shangchuan shipin) | open.weibo.com/wiki/ (third-party upload video page) | 2013-01-22 | Index page only. No limits served |
| Weibo ad centre (Weibo guanggao zhongxin), help document | tui.weibo.com/more/help?document_id=538 | none shown | Served the title "TUI" and no body text. No creative specification reached |

**What the primary readings are, and what they are not.**

- The three help-centre pages are the platform's own user-facing help, current
  within 2024 to 2026, and are the strongest evidence on this page. They are
  still help articles, not a rule centre, and they do not always agree with each
  other: one gives a 20M upload ceiling per image (2026-04-01), the other a 30M
  compression threshold per image (2025-05-19). A 30M image cannot be uploaded
  under a 20M ceiling, so at least one of the two pages is out of date or they
  describe different routes. Publish both with their dates, never one as "the"
  number.
- The five Open Platform pages govern third-party API routes. Four of them are
  twelve to fifteen years old. The 5MB image cap, the 1G video cap, the 700K
  avatar and the 140-character text limit are API-route statements. None of
  them may be written as a Weibo app or web limit.
- An Open Platform page on multimedia upload surfaced as a search extract giving
  "video 2MB, MP4". It was not fetched, and its media_id pattern reads as a
  messaging route. It is not used.

**The echo worth knowing about.** The 5MB image cap that every pre-2023 page and
the ranking English guide print is the value in the 2012 upload API document and
the 2022 share API document. Pages dated 2025 and 2026 give 20MB, matching the
April 2026 help-centre page. That is the Weibo equivalent of the Douyin finding:
a developer-doc value travelled into app advice and stayed there.

## R4. Chinese-language web first

Searched in Chinese before English. Search strings are romanized here and
mapped in the romanization table at the foot of the file.

1. `weibo tupian chicun guifan jiugongge caijian changtu 2026`
2. `weibo shipin shangchuan daxiao shichang fenbianlv bili yaoqiu`
3. `open.weibo.com shangchuan tupian jiekou tupian daxiao 5M geshi statuses upload`
4. `weibo duotu suoluetu caijian zhengfangxing xianshi jiugongge tupian bili bei cai`
5. `weibo 18 zhang tu fabu shangxian jiu tu changtu biaoshi xianshi guize`
6. `weibo GIF dongtu daxiao xianzhi shangchuan touxiang chicun fengmiantu chicun 2025`
7. `kefu.weibo.com fa weibo tupian shangchuan daxiao changtu zhangshu xianzhi`
8. `open.weibo.com shipin shangchuan jiekou wendang multimedia init wenjian daxiao shichang`
9. `weibo dantu shutu xianshi bili xinxiliu chao changtu caijian changtu chakan yuantu`
10. `weibo guanggao chaoji fensitong sucai guifan tupian chicun shipin chicun kaiping`
11. `weibo shipin fengmian chicun hengban 16:9 shuban 9:16 tuijian fenbianlv 1920x1080 shangchuan shichang 15 fenzhong 2025`
12. `weibo touxiang chicun 180x180 geren zhuye beijingtu fengmian chicun guifan 2024`
13. `weibo duotu buzai caijian yuan bili xianshi liang zhang tu si zhang tu pailie xinban xinxiliu tupian liubai`
14. `weibo changtu zuoxiajiao changtu biaoshi kuangaobi duoshao suan changtu suoluetu xianshi dingbu` (run as four variants)

English, run after: `weibo image and video specs` (the primary query),
`weibo image size guide 2026`, `weibo video specs aspect ratio duration file size`,
`weibo nine grid image crop`, `weibo ad specs sizes fans tunnel splash`.

What the Chinese web gave that the English web did not: the three help-centre
pages, the only crop-mechanism description, the 18-image launch record, every
2025 and 2026 figure, and the ad creative figures.

What the Chinese web did not give: a current (2024 or later) description of how
the multi-image grid crops, any source for a letterbox or original-ratio grid,
a maximum video duration from a named page, a video frame ratio for organic
posts, a bitrate, or any splash-screen dimension.

What the English web gave: one Weibo-specific guide, dated 2022, and generic
roundups carrying web-era figures (120x120 in-stream graphic, 560x260 banner).
The English ad guides carry ad types and pricing, no pixel specs.

## R2. SERP map

### Query 1, English primary (`weibo image and video specs`)

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | alamy.com | Stock library | Weibo logo stock images | Not a spec | Current |
| 2 | stock.adobe.com | Stock library | Weibo logo stock images | Not a spec | Current |
| 3 | nikoneye.com | Camera rumour blog | A camera leak posted on Weibo | Off-topic | Undated |
| 4 | kawo.com | China social SaaS and agency blog | Profile, cover, single and multi-image sizes, 5MB cap, article covers | No video, no 18-image ceiling, no crop mechanism, 5MB is the old API value, orientation labels swapped | 2022-09-02 |
| 5 | mikesblog.com | Generic roundup | Web-era Weibo sizes | No source, no date on figures | Undated |
| 6 | en.wikipedia.org (three entries) | Encyclopedia | Weibo, Weibo Corporation, Tencent Weibo | No specs | Current |
| 7 | kawo.com (WeChat guide) | Same publisher | WeChat sizes. URL path carries 2015/07/23 under a "2022" title | Wrong platform. Suggests the 2022 guides are retitled 2015 pages | 2015, retitled 2022 |

This matches the brief's SERP verdict exactly: one real answer from 2022, a
brand-logo library and encyclopedia entries.

### Query 2, English (`weibo image size guide 2026`)

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | kawo.com (two pages) | As above | As above | As above | 2022 |
| 2 | jamesdecamp.com | Photographer blog | Social sizes | Weibo figures not isolated | 2017-01-02 |
| 3 | alignnmarketing.com | Marketing agency roundup | Social sizes | Weibo figures not isolated | 2025 |
| 4 | martech.zone | Marketing roundup | Cover 920x300, profile 200x200, banner 560x260, in-stream 120x120, 5MB (search synthesis, publisher not isolated among rows 3 to 5) | Web-era figures, no video | 2026 title |
| 5 | mikesblog.com | Roundup | As query 1 | As query 1 | Undated |
| 6 | snapweibo.com, steamcommunity.com | Downloader, forum | Nothing usable | Off-topic | Undated |

### Query 3, English (`weibo video specs aspect ratio duration file size`)

| Class | Count | What was returned |
|---|---|---|
| Generic social video spec guides (wipster.io, mikesblog.com, prompt-architects.com, 3catslabs.com, design.frontiersin.org, slideshare, helpx.adobe.com) | 7 | Other platforms. No Weibo video row survived extraction |
| Weibo-specific | 1 | kawo.com, which states it gives no video spec |
| Pages carrying a Weibo video spec | 0 | None |

### Query 4, English (`weibo nine grid image crop`)

| Class | Count | What was returned |
|---|---|---|
| Grid-maker apps and tools (Google Play x3, image2pixel.com, 9grid.app x3) | 7 | Tools that slice an image into nine squares, one with a Weibo preview |
| Downloader (downforge.com), encyclopedia (9-slice scaling) | 2 | Off-topic |
| kawo.com | 1 | "Multiple images of any sizes will display in a ratio of 1:1" |
| Pages explaining the Weibo grid crop mechanism | 0 | None |

### Query 5, English (`weibo ad specs sizes fans tunnel splash`)

| Class | Count | What was returned |
|---|---|---|
| Agency ad guides (appinchina.co, ecommercechinaagency.com, linkedin.com, adchina.io, nealschaffer.com, octoplusmedia.com, sekkeidigitalgroup.com, digitalcrew.agency, marketingtochina.com, seoagencychina.com) | 10 | Ad types (splash, Fans Tunnel, Fans Headlines, feed) and CPM or CPE prices |
| Pages carrying Weibo ad pixel specs | 0 | None |

### Query 6, Chinese, image sizes (`weibo tupian chicun guifan jiugongge ...`)

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | sj.qq.com | App store listing | A nine-grid slicing app | Not a spec | Current |
| 2 | canva.cn (learn page) | Design tool vendor article | Background 1905x1001 with 1600x900 suggested, cover 920x300, 5M, headline image "officially suggested" 1000x562 with a 1000x400 safe area, 20M | Returned 403 to a direct fetch, extract only. "Official" with no official page | Undated |
| 3 | 16xx8.com | Photoshop tutorial site | Nine-grid thumbnail plus long-image layout | Technique, no platform figures | 2017 |
| 4 | toolpic.me | Tool blog | X / Twitter sizes | Wrong platform | 2026 |
| 5 | zhuanlan.zhihu.com | Column | Creative nine-grid layouts | Technique only | Undated |
| 6 | secaiyun.com | Design vendor doc | All-platform size quick reference | Weibo row thin, no source | 2026-05-14 |

### Query 7, Chinese, video (`weibo shipin shangchuan daxiao shichang ...`)

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | uniconverter.wondershare.cn | Software vendor | Compressing video for Weibo | Weibo figures not isolated | Undated |
| 2 | jingyan.baidu.com | How-to | Largest Weibo video upload | Extract only, undated | Undated |
| 3 | blog.csdn.net | Developer blog | Cross-platform compression | Douyin-led, Weibo not isolated | 2024-09 |
| 4 | m.iask.sina.com.cn (two answers) | Crowd Q and A on a Sina-owned host | Largest upload, format list | User answers, not platform text. 500M and a legacy format list surface here or on row 5 | Undated |
| 5 | weibo.com/ttarticle | A user-published headline article on Weibo | "Weibo video upload rules and notes" | Not fetched. User content on the platform, not platform documentation | Undated |
| 6 | kefu.weibo.com (faqdetail 21503) | **Platform help centre** | 15G PC, 4G phone, 3-second floor, cover ratios, 2K and 4K | No maximum duration, no formats | 2024-07-01 |
| 7 | secaiyun.com, toolbox365.cn | Vendor and tool tables | All-platform video tables | Weibo rows not isolated | 2026 |

### Query 8, Chinese, grid crop (`weibo duotu suoluetu caijian zhengfangxing ...`)

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | zcool.com.cn | Designer community article on thumbnails | The only explicit mechanism: 2 to 9 images at 1:1, scaled, excess cut, middle kept | Posted "8 years ago", so about 2016 to 2018. No pixels | c. 2016 to 2018 |
| 2 | jingyan.baidu.com | How-to | Long-press the add-image button to have the publish flow cut one picture into nine | Undated, extract | Undated |
| 3 | blog.csdn.net (two) | Developer posts | Building nine-grid splitters and Weibo-like viewers | Not platform behaviour | 2017, 2018 |
| 4 | 16xx8.com | Tutorial | As query 6 | As query 6 | 2017 |
| 5 | m.35bo.com, webhek.com, quanxin.org | Tool and tip pages | Slicing tools. One advises squaring the image first so the subject is not cut | Advice, no mechanism | Undated |

### Query 9, Chinese, 18 images (`weibo 18 zhang tu fabu shangxian ...`)

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | sohu.com | Republished news | 18 images, accounts over 100,000 followers, PC not yet supported | Launch-day news | 2019-10-13 |
| 2 | 36kr.com | Tech news | Launch report | Returned a security-check page, extract only | 2019-10 |
| 3 | guancha.cn | News | Launch report | Extract only | 2019-10-13 |
| 4 | zhuanlan.zhihu.com | Column | Launch report restated | Extract only | 2019-10 |
| 5 | yiban.io (two pages) | WeChat tooling blog | How to post 18 images, why some cannot see 18 | One page retitled for 2025, extract only | 2019 and 2025 |
| 6 | jingyan.baidu.com (two) | How-to | How to post 18 images, what to do if you cannot | Extract only | Undated |

Search synthesis on this set: app 9.9.3 or later, feed shows nine images with
the hidden count on the lower right of the image area. Publisher not isolated.

### Query 10 and 12, Chinese, avatar, cover, GIF

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | developer.aliyun.com, cnblogs.com (ytkah), blog.csdn.net | One 2015 post mirrored on three hosts | 2048px upload width, 5M, jpg gif png, thumbnails 120px and 440px | Eleven years old, web-era | 2015 |
| 2 | tools.suried.com | Tool site table, "continuously updated" | 20MB, 1080 wide, long image within 1:3, GIF 5MB, avatar 200x200, background 920x300 | No source, no video | 2025 |
| 3 | zhuanlan.zhihu.com (upload specs post) | Column | Self-media upload specs | Returned 403 | 2023 |
| 4 | m.iask.sina.com.cn, yasuotu.com | Crowd answer, compression tool help | GIF size question and compression | No isolated figure | Undated |
| 5 | canva.cn (sizes page) | Design tool templates | Weibo template sizes | Returned 403 | Undated |
| 6 | cnblogs.com (gpwzw) | Self-published roundup | 980x900 post, 800x2000 long image, 180x180 avatar, 980x300 cover, 980x560 and 540x260 covers | No source, labels differ from row 7 | 2023-09-26 |
| 7 | ubrand.com | Brand design tool blog | 980x300 cover, 980x560 headline cover, 540x260 focus image, 800x2000 long image | Fetch failed, extract only | 2024 |
| 8 | secaiyun.com (cover and profile guide) | Design vendor doc | Avatar 400x400, background 920x300, headline 900x500, single image 1080x1080, 1.8:1, 20MB | No source | 2026-07-11 |
| 9 | picwish.cn, bgrdb.com | Tool vendor, account-trading site | Size roundups | Not fetched, no isolated figure | Undated |

### Query 11, Chinese, video cover (`weibo shipin fengmian chicun ...`)

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | sohu.com (42 sizes roundup) | Republished roundup | 980x300 cover, 980x560 headline cover, 540x260 focus image, horizontal video cover 16:9 | No avatar, no video figures | 2022-08-29 |
| 2 | Not isolated (rows 1, 3 to 5 of this set) | Search synthesis | Video cover display area 1080x608, unobstructed 1080x518 | The fetched sohu page did not carry it | Unknown |
| 3 | zhuanlan.zhihu.com (three roundups), picwish.cn, amz123.com | Roundups | All-platform covers | Not fetched, Weibo rows not isolated | 2023 to 2025 |
| 4 | kefu.weibo.com (faqdetail 20686) | Platform help centre | A theme or client item | Off-topic | Current |

### Query 13 and 14, Chinese, crop changes and long-image badge

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | woshipm.com | Product management media, feed layout analysis | Single image with width over height under 0.5 (for example a Weibo long image): height at most two cells, width at least a third of two cells | WeChat-led, no pixels, eight years old | 2018-10-24 |
| 2 | greasyfork.org | Browser userscript "Weibo images full display" | Its existence implies the web feed does not show full images | Returned 403, title only | Undated |
| 3 | zhihu.com (two answers) | Community | Why saved Weibo originals are compressed | No figure | Undated |
| 4 | github.com (BlackLight issue) | Third-party client issue | Long-image thumbnail strategy in a third-party app | Not the official app | Undated |
| 5 | weibo.com/ttarticle (cover article) | User headline article | Best cover and background sizes | Not fetched | Undated |
| 6 | help.sina.com.cn, 70apps.com, jianshu.com, zhihu.com | Help and roundups | Long-image making | No threshold | 2013 to 2023 |
| 7 | Pages describing an original-ratio or letterbox multi-image grid | none | none | 0 found in four phrasings | n/a |

## The bar

The Chinese ranking pages run 600 to 2,000 words, treat Weibo as one row among
six to twelve platforms, carry one table and cite nothing. Most Weibo figures in
circulation are web-era (980-pixel content column, 120px and 440px thumbnails,
540x260 focus image) and survive in 2022 to 2024 roundups. The single English
answer is a 2022 guide of roughly 1,000 words with no video, no 18-image
ceiling, no crop mechanism and a 5MB cap that matches old developer documents.
No page in either language cites Weibo's own help centre, though it is open.

The bar to beat, inside the brief's 1,300 words: a spec table whose rows say
`primary` with the help-centre date or `consensus` / `contested` with a count, a
grid-crop table that shows the camps and the one upload shape that survives all
of them, and a "what changed since 2022" table setting the 2022 guide's values
beside the dated help-centre readings. Three tables with counts and dated
primary rows clears the field outright.

**H1 consequence.** The competition is stale rather than wrong in mechanism. The
spine of the page is currency: what Weibo's own help pages say today, dated,
beside the figures still ranking.

## R1. What has to be true before looking anything up

Listed before searching. Each is resolved in the tables below.

1. A post carries a stated maximum number of images, and the feed shows some or
   all of them.
2. Multi-image posts display in a grid that crops each image to a fixed shape.
3. A single image displays differently from an image inside a grid.
4. There is a threshold past which an image counts as a long image, and long
   images display differently.
5. There is a per-image file cap and an accepted format list.
6. GIFs have their own cap.
7. Weibo compresses images above some threshold.
8. A video has a file cap, a duration ceiling, a ratio, a resolution, a format
   list, and these may differ between PC and phone upload.
9. A video cover has its own ratio or size.
10. The profile avatar and the homepage cover have sizes.
11. Headline articles carry a cover image with its own size.
12. Ad placements (feed image ads, video ads, cards, banners, splash) have
    creative specs.
13. Some of this is published by the platform in a place readable without a
    login, either in the help centre or in developer documentation.
14. The 2022 guides that still rank carry values that have since changed.

Item 13 is true, and more so than for any platform researched so far. Items 5,
7, 8 (file caps, 3-second floor) and 9 resolve as primary readings. Item 1
resolves as a 2019 launch figure repeated widely, originating once. Items 2 and
3 resolve as a consensus on square grid tiles with a contested mechanism, now
complicated by a primary mention of a focus point. Items 4, 6, 10 and 11 are
contested. Item 8's duration ceiling, frame ratio and formats are contested or
unpublished. Item 12 rests on one agency page copied across three sites, and
the ad centre served nothing. Item 14 can be shown only as "a 2022 guide says X,
the help centre updated on date Y says Z", never as a dated platform change.

## SPEC TABLE

`Sources agreeing` counts independent non-platform domains. One domain counts
once however many of its pages carry the value, and a post mirrored on several
hosts counts once. "Extract" means read through a search-result extract, not a
fetched page, and carries less weight. A `primary` row names its page and date
and applies only to what that page covers.

The collection: 19 non-platform domains carry at least one Weibo value (17
Chinese-language, 2 English-language, one of the English being a roundup group
whose publisher could not be isolated), 8 of them fetched in full, plus nine
platform-owned pages fetched, eight of which served readable text.

### Table A. Image posts

| Spec | Most published or primary value | Range across sources | Sources agreeing | Confidence |
|---|---|---|---|---|
| Per-image file cap, image posts | Under 20M per image. **Primary:** help-centre article on posting image posts, updated 2026-04-01 | Non-platform: 20MB on 2 domains dated 2025 and 2026. 5MB on 3 domains dated 2015 to 2022, one an English extract. The 5MB side matches the 2012 upload API and 2022 share API docs. A second help page (2025-05-19) names 30M as the compression threshold, which does not reconcile with a 20M ceiling | primary; 2 for 20MB (2025 to 2026); 3 for 5MB (2015 to 2022) | primary for the 2026 help-page statement. Non-platform field contested, split by date |
| Image formats | gif, jpg, png. **Primary:** same help page, 2026-04-01. Every Open Platform image doc agrees for its API | Unanimous | primary, plus 3 non-platform | primary |
| Compression | A single image over 30M is compressed; total across images unlimited; judged per image. **Primary:** help-centre view-original article, 2025-05-19 | No non-platform page gives a threshold. A 2015 post gives a 2048px upload width limit | primary; 1 for 2048px (2015, one post on three hosts) | primary for the 30M statement. 2048px contested and eleven years old |
| GIF cap | 5MB | 5MB on a 2025 table and on the 2022 English guide, which applies its all-image 5MB cap to GIF. The 2026 help page lists gif under the same under-20M line and names no separate GIF cap | 2 | contested |
| Maximum images per post | 18 | 18 on 7 domains, all tracing to the October 2019 launch (2019 news and how-to pages, a 2025-retitled how-to, a 2023 ad agency page for ad posts). No page gives a higher ceiling. 9 appears only as the number shown in the feed | 7, originating once (2019) | consensus on the figure. No platform page read states it |
| Who can post more than nine | Accounts over 100,000 followers, app 9.9.3 or later, at the 2019 launch | 2019 pages only (1 fetched, 3 extract). Nothing after 2019 confirms whether a threshold still applies | 4, all 2019 | contested, stale |
| Feed display of a post over nine | Nine images shown, hidden count on the lower right of the image area | 2019 search synthesis, publisher not isolated | 1 extract | contested |
| Multi-image display, 2 to 9 images | Square (1:1) tiles | Square on 2 fetched domains (c. 2016 to 2018; 2022). 2 nine-grid tutorials presume square tiles (extract). 0 sources for a letterbox or original-ratio grid | 2 fetched, 2 extract | consensus on square tiles, contested on the crop mechanism (see grid analysis) |
| Recommended multi-image upload size | 900x900 | One 2022 English guide | 1 | contested |
| Single image display | Keeps its own orientation within layout bounds, not forced square | 4 domains treat single images apart from the grid. Pixel advice: 1080x1080 (2026), 980x900 (2023), 900x900 square plus 920x692 and 692x920 with swapped ratio labels (2022), 1080px wide (2025), 440px large thumbnail (2015). One 2026 page claims 1.8:1 fills the most feed area | 4 for the principle; no pixel size repeated; 1080 wide on 2 | consensus on the principle, contested on every pixel figure |
| Long image threshold | 1:3 width to height | **Primary:** the 2026 help page uses 1:3 as the line for focus-point setting, worded "smaller than 1:3", which is ambiguous in direction. Non-platform: 1:3 on a 2025 table as the long-image limit and on a 2023 agency page for long-image ads. 1:2 (width over height under 0.5) on a 2018 layout analysis | primary for the focus-point line; 2 for 1:3; 1 for 1:2 | primary for what the help page says. Contested as a display rule |
| Long image working size | 800x2000, or 980 wide with free height | One 2023 page carries both; a 2024 extract repeats 800x2000 | 1 fetched, 1 extract | contested |
| Focus point | Can be set on images inside the 1:3 line, not on super-long images. **Primary:** help page, 2026-04-01 | No non-platform source mentions it. The page does not say what the focus point controls | primary only | primary, limited to its wording |
| Post text length | 140 characters. **Primary:** share API (2022) and upload API (2012) docs | App text length not researched | API docs only | primary, API routes only. Never an app limit |

### Table B. Video

| Spec | Most published or primary value | Range across sources | Sources agreeing | Confidence |
|---|---|---|---|---|
| File cap, PC upload | Up to 15G. **Primary:** help-centre video FAQ, updated 2024-07-01 | Upload video file API doc: under 1G (2012, API only). 500M on undated crowd answers (extract). 4GB on one extract, publisher not isolated, likely the phone figure restated | primary | primary |
| File cap, phone upload | Up to 4G. **Primary:** same FAQ | As above | primary | primary |
| Minimum duration, phone | 3 seconds. **Primary:** same FAQ | None | primary | primary |
| Maximum duration | 15 minutes | One extract, publisher not isolated (a user article on Weibo or a crowd answer). The primary FAQ states no maximum. A 2023 agency page gives 1 minute for vertical video ads | 1 extract | contested, not on any platform page read |
| Video cover ratio | Vertical video 3:4. Horizontal video 16:9 or 4:3. No horizontal cover on a vertical video. **Primary:** same FAQ | 16:9 horizontal video cover on a 2022 roundup and for horizontal video ads on a 2023 agency page | primary, plus 2 | primary |
| Video frame ratio, organic posts | Not stated on the platform page | No fetched non-platform page gives an organic frame ratio. "3:4 or narrower" for vertical video ads on one agency page | 0 organic; 1 ads | not published for organic posts |
| Resolution | 2K and 4K definition offered for horizontal video whose source exceeds 1080p, conditional on playback thresholds. **Primary:** same FAQ, as returned by the fetch tool | 720p and above for video ads on one agency page | primary; 1 for 720p (ads) | primary for the 2K and 4K statement. The threshold is not quantified |
| Formats | Not stated on the platform page | A long legacy list (wmv, avi, rm, rmvb, mpg, 3gp, mov, mp4, m4v, mkv, flv and others) on one extract, publisher not isolated. MP4 for ads on one agency page | 1 extract; 1 ads | contested |
| Video title | At least 6 characters. **Primary:** same FAQ | None | primary | primary |
| Video cover display area in the app | 1080x608, of which 1080x518 unobstructed | One search synthesis, publisher not isolated. The fetched page beside it did not carry the figure | 1 extract | contested |
| Bitrate | Not published | None in either language | 0 | not published |

### Table C. Profile and article surfaces

| Spec | Most published or primary value | Range across sources | Sources agreeing | Confidence |
|---|---|---|---|---|
| Avatar | 400x400 | 400x400 on 2 (2022, 2026). 200x200 on 1 (2025) plus 1 English extract. 180x180 on 1 (2023). V1 API doc: under 700K, over 500px scaled (2011, API only) | 2 | contested |
| Homepage cover (zhuye fengmiantu) | 920x300 | 920x300 on 2 fetched (2025, 2026) plus 2 extracts (a design tool page and an English roundup, both undated). 980x300 on 2 fetched (2022, 2023) plus 1 extract (2024). 980x368 at 2.5:1 on 1 (2022). A separate 1905x1001 background with 1600x900 suggested on 1 extract | 4 for 920x300 (2 extract); 3 for 980x300 (1 extract); 1 for 980x368 | contested. Split by date: fetched 2022 to 2023 pages say 980x300, fetched 2025 to 2026 pages say 920x300 |
| Headline article cover (toutiao wenzhang fengmian) | 980x560 | 980x560 on 3 (2022; 2023, labeled "story cover"; 2024 extract). 980x550 on 1 (2022). 900x500 on 1 (2026). 1000x562 called "officially suggested" with a 1000x400 safe area on 1 extract that cites nothing | 3 (1 extract) | contested on pixels. Every figure sits between 1.75:1 and 1.8:1 |
| Focus image (jiaodiantu) | 540x260 | 540x260 on 3, one of which labels it the article cover | 3 (1 extract) | contested, role disputed, web-era element |
| Cover and background file cap | 5M | 1 extract | 1 | contested |

### Table D. Ad placements

| Spec | Most published or primary value | Range across sources | Sources agreeing | Confidence |
|---|---|---|---|---|
| Ad centre creative spec pages | Not reached | tui.weibo.com help doc served a title and no body | primary, negative | observation |
| Image post ads (duan tuwen) | PNG, JPG, JPEG; 5M; ratios 3:4, 1:1, 4:3, 3:2, 16:9; up to 18 images | One 2023-05-03 agency page, carried under the same title on two further agency sites (extract), echoed in a search synthesis on Super Fans Tunnel | 1 origin | contested, independence of the copies doubtful |
| Long image ads (chang tuwen) | 5M, narrower than 1:3 | Same origin | 1 | contested |
| Vertical video ads | 3:4 or narrower, 1 minute or less, 720p and above, 500M, MP4 | Same origin | 1 | contested |
| Horizontal video and video card ads | 16:9, 720p and above, 500M, MP4 | Same origin | 1 | contested |
| Image card | 592x296, under 5M | Same origin | 1 | contested |
| Banner | 640x160, 100KB or less | Same origin | 1 | contested |
| Splash screen (kaiping) | Not published | No source in either language gives splash dimensions | 0 | not published |

### Age chase

- **5MB per image.** Its origin is developer documentation: the 2012 upload API
  page and the 2022 share API page. It appears on a 2015 post mirrored on three
  hosts and on the 2022 English guide, whose sibling WeChat guide sits under a
  2015 URL path with a 2022 title. Every page dated 2025 or later says 20MB, and
  so does the help centre as updated April 2026. Repeated often, originating in
  API docs, stale as app advice.
- **18 images.** Every instance traces to one October 2019 launch report. The
  follower threshold and app version are launch conditions. No page read after
  2019 re-states or retires them.
- **Centre crop of grid tiles.** The only explicit mechanism statement is a
  designer article posted about eight years ago. The 2022 English guide states
  square display without a mechanism. Nothing from 2023 onward describes the
  grid, and the 2026 help page introduces a focus point that no crop source
  predates.
- **Covers.** 980x300 and 540x260 belong to the old 980-pixel web layout and
  persist in 2022 to 2024 roundups. 920x300 is on the 2025 and 2026 tables. The
  split is by page date, and no source explains it.
- **Thumbnails.** 120px and 440px thumbnails and the 2048px width are from a
  2015 post and describe the web client of that period.
- **Video caps.** 500M appears only on undated crowd answers. 1G is a 2012 API
  doc. 15G and 4G are the 2024 help-centre FAQ.
- **Long-image line.** 1:2 is a 2018 layout analysis. 1:3 is on 2023, 2025 and
  2026 pages including the help centre.

## The nine-image grid crop, in detail

This is the Weibo equivalent of the RedNote cover crop: the row a designer loses
a batch on. The sources agree the grid shows square tiles. They do not agree, or
do not say, how a non-square image becomes a square.

### Mechanism camps

| Camp | What it claims | Sources | Consequence if it is right and you designed for another camp |
|---|---|---|---|
| Centre square crop | Each of 2 to 9 images is shown as a 1:1 tile. A tall image keeps its width and loses top and bottom; a wide image keeps its height and loses its sides; the middle is kept | 1 explicit (designer community article, c. 2016 to 2018). 1 more states 1:1 display "of any sizes" with no mechanism (2022 English guide) | A headline in the top third of a tall image, or at the edge of a wide one, is cut from the tile |
| Focus-point crop | The help centre says a focus point can be set on images inside the 1:3 line and not on super-long images. A settable focus point implies the displayed crop can be anchored somewhere other than the centre | 1 platform page (2026-04-01). The mechanism is inferred, not stated: the page never says what the focus point does | If live, a centre-built tile can be shifted by whoever posts it, and the default focus position is unknown. A super-long image cannot be re-anchored at all |
| Square-slice mosaic (nine-grid art) | Posters cut one square master into nine equal squares; the feed shows them as a mosaic; the publish flow can cut one picture into nine on a long press | 2 extracts (undated how-to, 2017 tutorial) | Works only if tiles are uploaded square; gutters between tiles break any line crossing a seam; any non-square tile reopens the crop question |
| Letterbox or original ratio inside the grid | Tiles padded rather than cropped | 0 in four Chinese phrasings and one English | None to plan for, but absence of a page is not proof the app never does it |
| Over-nine badge | A post over nine shows nine tiles with the hidden count on the lower right of the image area | 1 extract, 2019 | The corner of the ninth tile is covered |

The centre-crop and focus-point camps are not exclusive: the focus point may be
an adjustment on top of a default centre crop. No open source says so, and no
source from 2023 onward describes the grid at all. That is a capture question.

**Single images are a separate surface.** Four sources treat a lone image as
keeping its orientation inside layout bounds rather than being squared, and one
2018 analysis puts the long-image line at width over height under 0.5. The
writer must not apply grid-crop advice to single-image posts.

### Derived safe intersection, not a platform rule

1. **Upload grid images at 1:1.** A square loses nothing to a centre crop, gives
   a focus point nothing to move, and needs no padding. It is the only shape
   left unchanged under every published account.
2. **If a non-square image has to go into a multi-image post,** keep the subject
   inside the centred square whose side equals the image's short edge. That
   survives a centre crop. It survives a focus-point crop only if the focus is
   left at a centred default, which no source confirms.
3. **For posts over nine images,** keep the lower right of the ninth tile clear.
4. **For nine-grid mosaics,** build one square master, slice nine equal squares,
   and keep critical text off the two vertical and two horizontal seams, since
   the feed separates tiles with gutters no source measures.
5. **For long images,** stay inside the 1:3 line if the focus point matters,
   quoting the help page's threshold rather than interpreting its direction.

Pixel size for the square has no mode: 1080x1080 (2026) and 900x900 (2022) each
appear once. Working at 1080 on the short edge matches the two pages that give a
1080 width. That is production practice, not a platform figure.

### What changed since the 2022 guides, as a comparison of dated statements

| Item | 2022 English guide says | Newer dated statement | Its status |
|---|---|---|---|
| Per-image cap | 5MB, all images | Under 20M (help centre, updated 2026-04-01); over 30M compressed (help centre, 2025-05-19) | primary, the two pages disagree with each other |
| Images per post | Maximum 9 shown in thumbnail preview | Up to 18 per post since the October 2019 launch, nine shown in the feed | consensus on 18, originating once |
| Video | Not covered | 15G PC, 4G phone, 3-second floor, cover 3:4 vertical and 16:9 or 4:3 horizontal (help centre, 2024-07-01) | primary |
| Focus point | Not mentioned | Settable inside the 1:3 line (help centre, 2026-04-01) | primary, function unstated |
| Homepage cover | 980x368 | 920x300 on fetched 2025 and 2026 pages; 980x300 on 2022 and 2023 pages | contested |
| Avatar | 400x400 | 400x400 (2026), 200x200 (2025), 180x180 (2023) | contested |

This table compares what pages say and when. It is not a record of when Weibo
changed anything, and the writer must not caption it as one.

## Cleared for use

Ready to paste. Each blockquote is followed by its source line.

**1. Weibo's help centre states the image limits, and it is readable.**

> Weibo's own customer service centre, in its article on posting image posts
> last updated on 1 April 2026, states that image files may be GIF, JPG or PNG
> and that a single image must be under 20M. It adds that a focus point can be
> set on images within a 1:3 width-to-height ratio, and that super-long images
> cannot yet take one.
> Source: kefu.weibo.com help article on posting image posts, page dated 1 April
> 2026, fetched unauthenticated on 10 September 2026, Chinese-language. Primary
> reading, scoped to that help article.

**2. The compression line, and the disagreement between two help pages.**

> A second Weibo help article, updated on 19 May 2025, says any single image over
> 30M is compressed, whether it is posted alone or with others, and that there is
> no limit on the combined size of a post's images. That threshold sits above the
> 20M ceiling stated in the newer image article, so the two pages do not fully
> agree.
> Source: kefu.weibo.com help articles dated 19 May 2025 and 1 April 2026, both
> fetched 10 September 2026, Chinese-language. Primary readings, each scoped to
> its own article.

**3. Video upload limits, from the help centre.**

> Weibo's video upload FAQ, last updated on 1 July 2024, states that a video
> uploaded from a PC may be up to 15G and one uploaded from a phone up to 4G, and
> that the phone will not accept a video shorter than three seconds. Vertical
> videos take a 3:4 cover and cannot take a horizontal one. Horizontal videos take
> a 16:9 or 4:3 cover. The page does not state a maximum duration.
> Source: kefu.weibo.com video upload and publishing FAQ, page dated 1 July 2024,
> fetched 10 September 2026, Chinese-language. Primary reading, scoped to that
> FAQ.

**4. Where the 5MB figure comes from.**

> The 5MB image cap still printed in guides from 2022 and earlier matches Weibo's
> developer documentation for its third-party upload and share APIs, pages dated
> 2012 and 2022. Every non-platform page found dated 2025 or later gives 20MB,
> which is also what Weibo's help centre says for image posts as of April 2026.
> Source: Weibo Open Platform API pages dated 1 August 2012 and 9 June 2022, a
> Weibo help-centre page dated 1 April 2026, and 5 independent non-platform
> references in Chinese and English, all read 10 September 2026 and grouped by
> publication date. Primary readings for the documents, modal count for the
> guides.

**5. Eighteen images, nine in the feed.**

> The most commonly published maximum for a Weibo post is 18 images, on seven
> independent sources. Every one of them traces back to a single launch in
> October 2019, when the feature opened to accounts with more than 100,000
> followers. The feed shows nine. No source from after 2019 confirms who can post
> more than nine today.
> Source: 7 independent published references, Chinese-language, collected 10
> September 2026, counted per domain and traced to their origin. Modal value, not
> a platform reading. Eligibility contested.

**6. The grid shows squares, and nobody current says how.**

> Published sources agree that Weibo shows two to nine images as square tiles.
> Only one describes the mechanism, a centre crop that keeps the middle of each
> image, and it was written about eight years ago. Weibo's own help centre now
> mentions a focus point that can be set on most images, but does not say what it
> controls. No source in either language describes a grid that pads rather than
> crops.
> Source: 4 independent published references and 1 Weibo help-centre page dated
> 1 April 2026, Chinese and English, collected 10 September 2026 and grouped by the
> mechanism each describes. Consensus on square tiles, contested on the crop.

**7. The one upload shape that survives every account.**

> Whichever account of the Weibo image grid is right, a square image comes through
> unchanged: a centre crop takes nothing from it, a focus point has nothing to
> move, and no padding is needed. For a post that runs past nine images, keep the
> lower right corner of the ninth tile clear, where the hidden-image count sits.
> Source: derived 10 September 2026 from the published grid accounts and the 2026
> help-centre focus-point statement. A safe intersection, not a platform rule.

**8. Profile and cover sizes split by page date.**

> Published Weibo homepage cover sizes split by when the page was written: pages
> from 2022 and 2023 give 980x300 pixels, pages from 2025 and 2026 give 920x300.
> Avatar sizes appear as 400x400, 200x200 and 180x180, with 400x400 the most common
> on two sources. None of these figures comes from a Weibo page.
> Source: 8 independent published references, Chinese and English, collected 10
> September 2026, grouped by publication date before counting. Modal values,
> contested, not platform readings.

**9. Ad placements could not be read from the ad centre.**

> Weibo's advertising help centre served no specification text to an open request
> on 10 September 2026. The ad creative figures in circulation, among them a 5M
> image cap, five accepted image ratios from 3:4 to 16:9, and a one-minute
> ceiling for vertical video ads, trace to a single 2023 page repeated across
> several sites. Treat them as one published account and confirm in the ad
> account before building.
> Source: direct fetch of tui.weibo.com on 10 September 2026, plus 1 origin page
> carried on 3 sites, Chinese-language. Contested, not a platform reading.

**10. The English web has one Weibo answer, and it is four years old.**

> Five English searches for Weibo image, video, grid and ad specifications
> returned one Weibo-specific guide, dated 2022. It carries no video
> specification, no 18-image ceiling and no crop mechanism. Not one English result
> cited Weibo's help centre, which answers several of those questions openly.
> Source: 5 English queries run 10 September 2026, every result classified by
> page type and date. An observation about published sources.

## Do not publish

### Hard blocks for this brief

| Item | Reason it is blocked |
|---|---|
| **Any modal value presented as official, verified, confirmed, required, or read from Weibo** | Deviation 7 permits the modal value with its count and the disclaimer. Only the rows marked primary may be attributed to a Weibo page, and only to the page named |
| **A primary row stretched past its page** | The help-centre image article covers posting image posts. The video FAQ covers video upload. The Open Platform pages cover their APIs. None covers ad creative, profile images or the other route |
| **"Weibo's image limit is 5MB"** | 2012 and 2022 API docs and stale guides. The April 2026 help page says 20M |
| **"Weibo's limit is 20M" without the 30M compression page beside it** | Two help pages, two dates, not reconciled. Publish both with dates or neither |
| **140 characters, 1G video or 700K avatar as app limits** | API-route statements, mostly 2011 to 2012 |
| **A maximum video duration as Weibo's (15 minutes or any other)** | One extract, publisher not isolated. The platform FAQ states none |
| **500M as the video cap** | Undated crowd answers, contradicted by the 2024 FAQ |
| **A video frame ratio for organic posts** | No source gives one. The 3:4 and 16:9 platform figures are cover ratios, never write them as frame ratios |
| **A quantified playback threshold for 2K and 4K** | The FAQ does not quantify it |
| **The 100,000-follower rule for 18 images as current** | 2019 launch condition, unconfirmed since |
| **Centre crop stated as how Weibo works** | One explicit source, about eight years old, now overlaid by a focus point the help centre mentions without explaining |
| **What the focus point does** | The help page does not say. Write "the help centre mentions a focus point" and stop |
| **A direction for the 1:3 line ("taller than" or "shorter than")** | The help page's wording is ambiguous. Quote "a 1:3 width-to-height ratio" |
| **Any ad creative figure as Weibo's spec** | One 2023 agency origin, copied. Write it as one published account |
| **Splash-screen sizes** | None found |
| **Gutter width or tile pixel size in the grid** | No source measures either. A grid diagram must be labeled as schematic |
| **Web-era sizes as current (120x120, 560x260, 120px and 440px thumbnails, 2048px width, 980-pixel column)** | 2015 origin |
| **"Officially suggested" 1000x562 headline image** | A design tool page, "official" with no official page |
| **1.8:1 "fills the most feed area"** | One vendor page, no measurement |
| **Any CPM, CPE or other ad price** | Pricing is off the site and the figures carry no method |
| **A statement that Weibo changed a spec on a given date** | Sources show dated statements, not change dates |
| **A hubStudio rate, per-asset price or monthly figure** | Standing rule |

### Quarantined domains

None may be named, linked, described or alluded to on the page. Platforms and
their products (Weibo, Sina, Weibo Open Platform, the Weibo ad centre, Super Fans
Tunnel, Fans Headlines) may be named. Counts are the distinct Weibo spec values
each domain contributed to the tally.

| Domain | What it published | Count contributed | Why it is quarantined |
|---|---|---|---|
| kawo.com (Weibo guide, plus a WeChat guide under a 2015 URL) | Avatar, cover 980x368, three single-image sizes with swapped labels, 1:1 multi-image, 9 shown, 900x900, two article covers, 5MB, formats, GIF rule, 2022-09-02 | 13 | China social SaaS and agency. The one ranking English answer, stale, and its 5MB is the API value |
| xinlangad.cn, with same-title copies on m.weibodsp.com and xl.juxuan.net | Every ad creative figure, 2023-05-03 | 14 | Ad resellers. One origin copied; independence doubtful |
| cnblogs.com (gpwzw 2023; ytkah 2015, mirrored on developer.aliyun.com and blog.csdn.net) | 980x900, 800x2000, 180x180, 980x300, 980x560, 540x260; 2048px, 5M, formats, 120px, 440px | 11 | Self-published. The 2015 post is web-era and mirrored |
| canva.cn (learn and sizes pages) | 1905x1001, 1600x900, 920x300, 5M, "officially suggested" 1000x562, 1000x400 safe area, 20M | 7 | Design tool vendor. Both pages returned 403, extract only |
| secaiyun.com (cover and profile guide 2026-07-11, plus 2026 siblings) | 400x400, 920x300, 900x500, 1080x1080, 1.8:1, 20MB | 6 | Design vendor, no source, already quarantined under briefs 04, 05 and 07 |
| tools.suried.com | 20MB, 1080 wide, 1:3 long image, GIF 5MB, 200x200, 920x300, 2025 | 6 | Tool site, no source |
| sohu.com (2022 roundup; 2019 news) | 980x300, 980x560, 540x260, 16:9 video cover; 18 images, 100,000 followers | 6 | Republishing platform. Two unrelated authors, counted once per value |
| martech.zone, alignnmarketing.com, mikesblog.com | 920x300, 200x200, 560x260, 120x120, 5MB (search synthesis, publisher not isolated) | up to 5 | Marketing roundups and an agency. Web-era values |
| ubrand.com | 980x300, 980x560, 540x260, 800x2000, 2024 | up to 4 | Brand design tool vendor. Fetch failed, extract only |
| m.iask.sina.com.cn, weibo.com/ttarticle user articles | 500M, 15 minutes, legacy format list, 4GB (publisher not isolated) | up to 4 | Crowd answers and user-published articles. Not platform documentation despite the hosts |
| zcool.com.cn | 1:1 grid, centre crop keeping the middle, single-image bounds, c. 2016 to 2018 | 3 | Designer community article. The only explicit crop mechanism, and old |
| 36kr.com, guancha.cn, zhuanlan.zhihu.com, yiban.io, jingyan.baidu.com | 18 images, 100,000 followers, app 9.9.3, over-nine badge, long-press nine-cut | 1 to 3 each | News and how-to. All restate the 2019 launch. yiban.io is a tooling vendor |
| woshipm.com | Long-image line at width over height under 0.5, 2018-10-24 | 1 | Product media, WeChat-led analysis |
| 16xx8.com | Nine-grid slicing tutorial, 2017 | 1 | Tutorial site |
| Search synthesis, publisher not isolated (set containing sohu.com, canva.cn, picwish.cn, zhihu.com) | Video cover 1080x608, 1080x518 unobstructed | 2 | Attribution unconfirmed |
| sj.qq.com, toolpic.me, uniconverter.wondershare.cn, toolbox365.cn, blog.csdn.net (other posts), m.35bo.com, webhek.com, quanxin.org, yasuotu.com, picwish.cn, bgrdb.com, 70apps.com, jianshu.com, github.com, greasyfork.org, help.sina.com.cn, amz123.com, adtodo.com | Tools, tutorials, roundups with no isolated Weibo value | 0 | Vendors, tools and off-topic pages |
| jamesdecamp.com, snapweibo.com, steamcommunity.com, wipster.io, prompt-architects.com, 3catslabs.com, design.frontiersin.org, slideshare.net, helpx.adobe.com, play.google.com, downforge.com, image2pixel.com, 9grid.app, alamy.com, stock.adobe.com, nikoneye.com | English results with no Weibo value | 0 | Off-topic or other platforms |
| appinchina.co, ecommercechinaagency.com, linkedin.com, adchina.io, nealschaffer.com, octoplusmedia.com, sekkeidigitalgroup.com, digitalcrew.agency, marketingtochina.com, seoagencychina.com | Weibo ad types and ad prices | 0 spec values | Agencies. Their prices are blocked outright |

### Failed the bar

| Claim | Where it came from | Why it is cut |
|---|---|---|
| Video 2MB, MP4, via a multimedia upload doc | Search extract of an Open Platform page | Not fetched, and its media_id pattern reads as a messaging route |
| 900x900 as the multi-image upload size | One 2022 guide | Single source |
| 1080x1080 as the single image size | One 2026 vendor page | Single source, and single images are not squared |
| 920x692 and 692x920 single-image sizes | One 2022 guide | Its own ratio labels are swapped |
| 800x2000 long image | One page and one extract | Working advice, not a figure with a source |
| GIF 5MB | Two pages, one of which applies an all-image 5MB cap that is itself stale | Contested, and the 2026 help page names no separate GIF cap |
| 4GB video from an extract | Publisher not isolated | Probably the phone figure restated. Use the FAQ instead |
| Legacy video format list | One extract | Reads as an old Sina video list, unattributed |
| 1080x608 video cover display area | One synthesis | Publisher not isolated |
| Nine tiles with a hidden count on the lower right | 2019 synthesis | Plausible, found once. May appear only as "the 2019 launch reports described" |

## Screenshot inventory

Nothing captured beyond the fetches recorded in R3. These captures lift rows to
primary. Save to `research/weibo-image-video-specs/` with the date in the
filename, and record device model, screen resolution and app version inside
each file.

| File | What it shows | Rows it upgrades | Captured | Source surface |
|---|---|---|---|---|
| wb-kefu-12483-image-post-2026-09-10.png | The help article with its 20M line, 1:3 focus-point line and update date | Timestamps primary rows; settles the 1:3 wording by showing the original sentence | not yet | kefu.weibo.com |
| wb-kefu-21265-compression-2026-09-10.png | The view-original article with its 30M line | Timestamps the 30M row | not yet | kefu.weibo.com |
| wb-kefu-21503-video-2026-09-10.png | The video FAQ with 15G, 4G, 3 seconds, cover ratios and the 2K and 4K condition | Timestamps primary video rows, quotes the playback condition exactly | not yet | kefu.weibo.com |
| wb-open-platform-docs-2026-09-10.png | The share, upload, upload-video and profile-image API pages with update dates | Timestamps the API-only rows | not yet | open.weibo.com |
| wb-grid-test-portrait-landscape.png | A post of two to nine known test images (tall, wide, square, each carrying a labeled grid) in the feed | Crop mechanism: centre crop, focus crop or padding | not yet | Live Weibo app, feed, device stated |
| wb-grid-test-focus-moved.png | The same post with the focus point moved on the tall image | What the focus point controls | not yet | Live app, publish flow and feed |
| wb-single-image-tall-wide.png | A lone tall image, a lone wide image and a lone 1:3 image in the feed | Single-image bounds, long-image line and direction | not yet | Live app, feed |
| wb-over-nine-post.png | An 18-image post in the feed and opened | Nine shown, badge position, eligibility of the test account | not yet | Live app |
| wb-publish-image-limit.png | The publish panel refusing a 21MB image, and accepting a 19MB one | Upload ceiling against the 30M compression page | not yet | Live app and web |
| wb-gif-upload.png | A GIF over 5MB accepted or refused | GIF cap | not yet | Live app |
| wb-video-long-duration.png | A long video accepted or refused from phone and PC | Maximum duration by route | not yet | Live app and weibo.com |
| wb-profile-avatar-cover.png | The avatar and homepage cover editors with their crop frames | Avatar and cover sizes | not yet | Live app and web |
| wb-headline-article-cover.png | The headline article editor's cover crop | Article cover | not yet | weibo.com editor, needs a login |
| wb-ad-creative-upload.png | The ad account's creative upload panel for image, long image, video, card, banner and splash | Every ad row | not yet | Weibo ad account |

The grid-test post, one upload of tall, wide and square test images captured in
the feed before and after moving the focus point, is the highest-value asset in
this brief. It settles the one question the published field cannot.

## Romanization table

No Han characters and no full-width punctuation appear in this file. Every
Chinese term needed for this brief is mapped here.

| Romanization | English name to use on the page | What it is |
|---|---|---|
| Weibo, Xinlang Weibo | Weibo | The platform. "Sina Weibo" only where history needs it |
| Weibo kefu zhongxin | Weibo customer service centre, or help centre | kefu.weibo.com, the readable primary surface |
| Weibo kaifang pingtai | Weibo Open Platform | open.weibo.com developer wiki |
| Weibo guanggao zhongxin | Weibo ad centre | tui.weibo.com, served no spec text |
| chaoji fensitong | Super Fans Tunnel | Weibo's self-serve ad product |
| fensi toutiao | Fans Headlines | Post promotion product |
| kaiping guanggao | splash-screen ad | Unpublished row |
| duan tuwen, chang tuwen | image post ad, long image ad | Ad formats on the agency page |
| kapian | card | Image and video card ads |
| jiugongge | nine-square grid | The multi-image layout |
| chao 9 tu | over-nine images | The 18-image feature |
| changtu, chao changtu | long image, super-long image | The 1:3 line |
| jiaodian | focus point | The help-centre feature of unstated function |
| chakan yuantu | view original image | The option tied to compression |
| yasuo | compression | The 30M line |
| dongtu | animated image, GIF | |
| suoluetu | thumbnail | The grid tile |
| caijian | crop | |
| qu zhongjian bufen | keep the middle part | The centre-crop wording |
| dengbi suofang | proportional scaling | |
| qie tu, pintu | slicing, collage | Nine-grid mosaic technique |
| xinxiliu | feed | |
| dantu, duotu | single image, multiple images | The two display surfaces |
| kuangaobi | width-to-height ratio | |
| tupian chicun | image dimensions | |
| wenjian daxiao | file size | |
| geshi | format | |
| shipin | video | |
| shuban, hengban | vertical, horizontal | |
| fengmian | cover | |
| shichang | duration | |
| fenbianlv, qingxidu | resolution, playback definition | The 2K and 4K condition |
| bofangliang | playback count | The unquantified 2K and 4K threshold |
| fensi shu | follower count | The 2019 100,000 threshold |
| touxiang | avatar | |
| zhuye fengmiantu, beijingtu | homepage cover, background image | |
| toutiao wenzhang | headline article | Weibo's long-form article product |
| jiaodiantu | focus image | Web-era 540x260 element |
| guanfang jianyi | officially suggested | The phrase attached, without a citation, to 1000x562 |
| shangchuan | upload | |
| guize, guifan | rule, specification | |

## R8. Reconciliation (filled after drafting)

Reconciled 2026-09-10, after drafting and after the quality pass.

**All ten cleared blocks shipped** with attributions unchanged, except that "help
centre", "customer service centre" and "centre crop" are spelled "center" for
American English site copy. Each carries its source page or count, the
languages, the date, and whether it is a scoped primary reading, a counted value,
a derivation or an observation.

**The disclaimer follows SPEC.md's readable-page rule.** Weibo's customer service
help center is readable, so the first paragraph names it as readable and names the
advertising help center and account-level profile rules as not. NN is given as "up
to 8", the largest counted pool in this file. A paragraph after the block names
the three dated help articles and the developer documentation as the primary rows
and scopes each to its own page and date.

**The slot requirement is unmet, on purpose.** The brief asks for one number from
hubStudio's delivery record with its method stated. No such figure exists in this
file or in the ledger, and the first-party exception covers only figures the site
already publishes. Nothing was invented to fill the slot.

**The meta was changed from the brief.** It promised "ad placements" as if sizes
could be given. The ad help center served no text and the circulating ad figures
trace to one 2023 page copied across three sites, so the meta now describes the
readable-versus-counted split.

**The comparison table is labeled as comparing dated statements.** The body copy
directly above it says it does not date the platform's changes, which no source
does.

**Every must-not held.** The developer API limits appear only as the source of the
5MB figure that 2022 guides carried, never as posting limits, and the 140
character, 1G and 700K figures are absent. "20M" never appears without the 30M
compression page beside it. No maximum video duration and no 500M cap is printed;
the video table carries a "not stated" row instead. The 3:4, 16:9 and 4:3 figures
are named as cover ratios, and the body copy says they are not frame ratios. The
center crop is described as one eight-year-old account, never as current fact, and
the focus point's effect is left unexplained. The 1:3 line is given no direction.
The 2019 100,000-follower threshold appears only as history, with eligibility
marked contested. No ad figure is presented as Weibo's own. No ad prices, web-era
sizes, quarantined domains or hubStudio rate appear.

**Both brief links were missing.** /solutions/platforms/weibo and
/resources/specs do not exist. The published RedNote and Douyin spec articles were
substituted alongside the social media design service page.

**The hero was accepted on the first generation.**
