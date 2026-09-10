# Research: wechat-specs-articles-channels-mini-program

| Field | Value |
|---|---|
| Brief | 08 |
| Target query | wechat official account article image size specs |
| Gap statement (one sentence) | The English pages ranking for WeChat specs date from 2017 to 2022 and print a 400px body image (with a 900x500 cover in search extracts), while WeChat's own readable pages (the Channels help centre, the Mini Program framework reference and the Official Account API documentation) state limits no ranking page cites, and the Chinese pages remain split between a 900x500 cover figure that traces back to one undated Tencent customer-service FAQ and the 2.35:1 crop every page written since 2021 reports. |
| Research time spent | About 70 minutes active, Chinese-language web first, fourteen query sets, roughly one hundred results classified, eight platform-owned pages fetched, five of them readable |
| Written | 2026-09-10 |
| Method | Modal value per deviation 7 in `../CLAUDE.md`, decided 2026-09-10, with scoped primary rows where a WeChat developer document is publicly readable. |

## Method notice, binding on the writer

Nothing in this file was read from a logged-in Official Account backend, a
Channels assistant session, a Mini Program admin console or a Tencent Ads
account. Rows fall into three kinds, and every row says which.

- `primary`: read directly from a publicly served WeChat or Tencent page on
  2026-09-10, and scoped to exactly what that page covers (an API route, a
  framework field, a help-centre article, a dated product note). A primary row
  never stretches past its page.
- `consensus`: the most commonly published figure across independent
  non-platform domains, with broad agreement and the count shown.
- `contested`: sources disagree, or only one non-platform domain gives the
  value.

Never present a consensus or contested value as verified, official, required,
or read from the platform. The page opens with the disclaimer block from
`../SPEC.md`, adapted: this file has more primary rows than briefs 05 and 07, so
the disclaimer must say which rows are platform readings and which are modal.
One domain counts once however many of its pages carry a value.

## R3 primary-access attempts, and what they returned

Platform-owned surfaces fetched unauthenticated on 2026-09-10. WeChat is the
first platform in this cluster whose developer documentation carries readable
limits for more than one surface.

| Surface | URL | Result |
|---|---|---|
| Official Account doc, asset management index (legacy path) | developers.weixin.qq.com/doc/offiaccount/Asset_Management/Adding_Permanent_Assets.html | Served a table of contents naming the add_material, uploadimg and media/upload endpoints. No limit text in the served body |
| Official Account doc, upload permanent material (current doc site, English) | developers.weixin.qq.com/doc/subscription/en/api/material/permanent/api_addmaterial.html | **Readable.** Image: 10M, bmp, png, jpeg, jpg, gif. Voice: 2M, playback not over 60s, mp3, wma, wav, amr. Video: 10MB, MP4. Thumb: 64KB, JPG. Library ceilings: 100,000 for article and image material, 1,000 for other types. Repeats the uploadimg line below. No last-updated date shown |
| Official Account doc, upload article image (uploadimg) | developers.weixin.qq.com/doc/subscription/en/api/material/permanent/api_uploadimage.html | **Readable.** Images jpg or png only, under 1MB. Does not count against the 100,000-image library ceiling. Returns a mmbiz.qpic.cn URL for use inside article bodies. No last-updated date shown |
| Official Account doc, upload temporary media | developers.weixin.qq.com/doc/subscription/en/api/material/temporary/api_uploadtempmedia | **Readable.** Image 10M, PNG, JPEG, JPG, GIF. Voice 2M, 60s, AMR, MP3. Video 10MB, MP4. Thumb 64KB, JPG. Retained 3 days. The extract also carried a summary line "2 MB for images", which conflicts with 10M on the same page. Treat the 2MB line as unconfirmed until captured |
| Mini Program framework reference, Page, onShareAppMessage | developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html | **Readable.** imageUrl: custom image path, local, package or network. "Supports PNG and JPG. The displayed image aspect ratio is 5:4." Default is a screenshot of the current page when no imageUrl is set. No pixel size, no file cap, no last-updated date |
| WeChat Open Community, pinned threads on Channels video size and share card size | developers.weixin.qq.com/community/develop/doc/0008a6c368c82820e22b4498859400, .../0008cac53341881d5f6dc9fa45bc00, .../000ea497090b9058779d93e2b5a400 | Served an empty body to the fetch. Thread text unread, so whether any answer is from an official operator account is unknown. Community threads are user forums on a platform domain and are not platform documentation in any case |

**What the developer doc readings are, and what they are not.** They are
primary readings of the documentation for Official Account API routes: a
developer's server uploading material or article images through the API, and a
Mini Program's code setting a share image. They are not statements of what the
Official Account web editor (the mp.weixin.qq.com backend a person types into)
accepts for a cover or an inline image, and no source found says the API and
the editor share limits. In particular, the 64KB thumb limit governs the thumb
media type on the API, which is how an API-built article sets its cover; it is
not the editor's cover upload cap. The 1MB uploadimg limit governs images
inserted into an article body through the API; it is not the editor's inline
image cap. The 5:4 ratio governs the custom share image a Mini Program sets in
code; it says nothing about pixel dimensions, and nothing about the Mini
Program's icon.

The writer may cite these as "WeChat's developer documentation for the Official
Account upload API states" or "WeChat's Mini Program framework reference
states", with the fetch date, scoped to that route. Never as "WeChat's cover
limit is 64KB" or "WeChat article images must be under 1MB".

**An echo worth knowing about.** Cover-file caps in circulation (10MB on design
pages, 5MB, 2MB, 1MB "where possible") have the same shape as the API figures
above (10M image, 2MB in a summary line, 1MB uploadimg). Some editor advice
appears to be API documentation restated as editor rules, the same pattern
brief 05 found with Douyin.

## R4. Chinese-language web first

Searched in Chinese before English, per R4. Search strings are romanized here
and mapped in the romanization table at the foot of the file.

1. `gongzhonghao fengmian tu chicun 2.35:1 900x383 1:1 citiao 2025`
2. `gongzhonghao fengmian 900x500 chicun gaiban 2.35:1 shenme shihou`
3. `gongzhonghao toutiao fengmian bili you 900x500 gaiwei 2.35:1 gaiban shijian dingyuehao xiaoxi liebiao 2018 2019`
4. `gongzhonghao zhengwen tupian kuandu 1080px 900px 640px 677px peitu chicun daxiao xianzhi GIF zhenshu`
5. `kf.qq.com gongzhonghao tuwen fengmian tupian daxiao xianzhi chicun changjian wenti`
6. `developers.weixin.qq.com add_material tupian 10M ... suoluetu thumb 64KB uploadimg 1MB`
7. `shipinhao shipin chicun bili fenbianlv shichang wenjian daxiao shangchuan guifan`
8. `shipinhao shipin bili 6:7 16:9 shuping 1080x1260 hengping chicun 2025 shipinhao zhushou shangchuan shichang daxiao`
9. `shipinhao zhushou fabiao shipin zuida wenjian daxiao shichang shangxian 20GB 8 xiaoshi geshi 2026`
10. `shipinhao fengmian chicun 3:4 1080x1440 6:7 geren zhuye fengmian caijian`
11. `xiaochengxu fenxiang kapian tupian 5:4 chicun 500x400 xiaochengxu touxiang tubiao chicun 144`
12. `Weixin xiaochengxu touxiang 144x144 tubiao chicun guanfang sheji zhinan xiaochengxuma banner 750 chicun`
13. `Tengxun guanggao pengyouquan guanggao gongzhonghao guanggao shipinhao guanggao sucai guifan tupian chicun e.qq.com bangzhu zhongxin`

English, run after: `wechat official account article image size specs`,
`wechat channels video specs aspect ratio duration file size`,
`wechat mini program banner size share card image dimensions`.

What the Chinese web gave that the English web did not: the platform-owned
Channels help-centre page (the only readable Channels limit text found), the
Tencent customer-service FAQ that turns out to be the origin of the 900x500
cover figure, the Tencent Marketing School note on Moments ad sizes, and every
figure for cover crops, Channels cover ratios and Mini Program asset sizes.

What the English web gave: pages dated 2017 to 2022 plus one 2026 page that
refused the fetch. No English page cites a WeChat platform page for any number.
English Channels advice mixes ad-length guidance (15 to 60 seconds, under
10MB) into Channels upload specs.

## R2. SERP map

### Query 1, Chinese, Official Account cover (queries 1 to 3)

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | 135editor.com (two pages) | Article editor vendor guide | 2.35:1 lead, 1:1 secondary, 1080x460 suggested, 1280 wide ceiling, calls 900x500 outdated | No file cap, no share crop | 2020-03-04 |
| 2 | yiban.io | Editor plug-in vendor blog | 900x383 lead, 200x200 secondary, centre 383x383 safe square | No file cap, no source | 2025-05-22 |
| 3 | canva.cn (two pages) | Design tool guide | 900x383 lead, 500x500 second cover for sharing, 10M cap (extract only) | Returned 403 to a direct fetch | Undated |
| 4 | jingyan.baidu.com | How-to | Cover size | Extract only | Undated |
| 5 | blog.csdn.net (three posts) | Self-published blogs | Cover sizes, 2020 to 2022 | Extract only | 2020 to 2022 |
| 6 | pictech.cc | Image tool blog | 900x383 (1200x510 suggested), 500x500 secondary (200 minimum), 1080 body, 10MB | No source | 2026-04-12 |
| 7 | tudingai.cn | AI design tool blog | 900x383, 1800x766 at 2x, 200x200, 2MB, centre-square share crop | "Official" cited, no link | 2026-06-06 |
| 8 | oktool365.com | Tool tutorial | 10MB cap, 500KB to 1MB advice, 640px GIF compression (extract) | Returned 502 | Undated |
| 9 | secaiyun.com | Design vendor doc | 900x383, 600x383 safe, 5MB, 200x200 at 200KB, 900 and 1080 body, 500x400 share | No source, share row borrows the Mini Program ratio | 2026-05-20 |
| 10 | gaoding.com (two pages) | Design tool guide | 900x383, 200x200 | No file cap | 2025-02-20 |
| 11 | yibanbianji.com | Editor vendor, "2025 latest" | Cover sizes (extract) | Extract only, likely same publisher family as row 2, not counted | 2025 |

### Query 4 and 5, Chinese, body images and the platform FAQ

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | kf.qq.com | **Tencent customer-service FAQ, platform-owned** | 900x500 suggested cover, 640px compression, bmp png jpeg jpg gif, cover and body 5M, 120-character summary, 54-character auto excerpt | Undated. Predates the 2.35:1 crop | FAQ id begins 161220 |
| 2 | developers.weixin.qq.com (community thread) | Developer forum question on body image size | The question | Served an empty body | Undated |
| 3 | 365editor.com | Article editor vendor | 900x500, 200x200, 5MB, 900 body, 500x500 auto crop | Restates the FAQ | 2020-03-13 |
| 4 | gaitubao.com | Image tool wiki | 900x500, 200x200, 5M, 640 compression, 900 body | Restates the FAQ | 2017-03-07 |
| 5 | yasuotu.com | Image tool help | 900x500, 200x200, 5MB, 640, 900 body | Restates the FAQ | 2020-07-11 |
| 6 | huasheng.ai | Personal practitioner site | 900x383, 200x200, 383 safe square, body 900 or 1080, 320 minimum, 6 million pixels, 10MB, GIF 640 wide and 300 frames | Cites vendor pages, no platform page | 2026-02-01 |
| 7 | zhihu.com (long image question) | Community question | Long-image sizing | Extract only | Undated |

### Query 7 to 10, Chinese, Channels

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | findeross.weixin.qq.com | **Channels help centre, platform-owned** | Image and video posting requirements: 0.33 to 3.0 ratio, 20 images, 3s to 60 min phone, 3s to 8h desktop, 2G, 1080p and above, no GIF, no HDR | No cover size, no date | Undated |
| 2 | developers.weixin.qq.com (three pinned threads) | Developer forum | Channels video size, vertical cover size | Served an empty body | Undated |
| 3 | 3dmgame.com | Games media guide | 1080x1230, 1 minute, 30MB, 9 images | Launch-era | 2020-06-22 |
| 4 | pingwest.com | Tech news | 1 hour and 2GB (up from 1GB) through the Channels assistant | A news report, not a spec page | 2021-09-07 |
| 5 | lingfenmao.com | Content farm | 6:7 at 1080x1260 "official" vertical, 16:9 at 1080x608, 9:16 cropped top and bottom | No duration or file size | 2022-01-14 |
| 6 | blog.csdn.net (two posts) | Self-published blogs | 6:7 and 16:9 | Returned 521, extract only | About 2020 |
| 7 | 3835.com | Media service site | 4GB, 3s to 30 min phone, 3s to 2h desktop, 0.33 to 3.0 | Contradicts the help centre on three figures | 2026-01-12 |
| 8 | xiazai.zol.com.cn | Software download site | 1 hour, 2GB, MP4 and H.264, 9 images at 20MB | Date field unreliable | 2026-08-24 as shown |
| 9 | uniconverter.wondershare.cn | Video tool vendor | Compression sales page, "4K in 2026, 720p on Moments" (extract) | Extract only, publisher not isolated | Undated |
| 10 | zhuanlan.zhihu.com (two posts) | Practitioner explainers | Channels video and cover size, 3:4 profile crop (extract) | Returned 403 | Undated |
| 11 | secaiyun.com (short video cover guide) | Design vendor doc | Channels cover 6:7 at 1080x1260, 1:1 Moments share crop | Same vendor as the OA row | 2026-05-23 |

### Query 11 and 12, Chinese, Mini Program

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | developers.weixin.qq.com (framework reference, app.json config, design guideline) | **Platform developer docs** | Share image 5:4 PNG or JPG, tabBar icon 40KB and 81x81, 2 to 5 tabs, design canvas and type scale | No avatar size, no banner size, no share-image pixel size | Undated |
| 2 | developers.weixin.qq.com (community threads and articles) | Developer forum | Share card size, avatar size | Served an empty body | Undated |
| 3 | mpgcw.com | Mini Program news site | 5:4, 2MB, jpg and png | Cites "official", no link | 2020-04-22 |
| 4 | js.design (four pages) | Design tool guides | 144x144 avatar, 81x81 icon, 750 canvas, 128rpx nav, 98rpx tab bar, 16:9 carousel, 5:4 share | No platform page cited | 2025-02-21 |
| 5 | blog.csdn.net, help.youzan.com, muyu007.cn | Blogs and commerce vendors | 5:4, 500x400 or 1000x800 (extract) | Extract only, publisher not isolated | 2019 to undated |
| 6 | gongrenapp.com | App developer site | Design sizes (extract) | Extract only | Undated |

### Query 13, Chinese, Tencent Ads

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | eschool.qq.com | **Tencent Marketing School, platform-owned** | Moments regular image ads accept seven ratios with pixel sizes | No file cap, 2023 | 2023-01-05 |
| 2 | e.qq.com help centre | **Tencent Ads help centre** | Redirected (307) to support.e.qq.com root, rule body not reached | Everything | Current |
| 3 | support.e.qq.com, ad.qq.com | Tencent Ads and ad network help | A Moments full-frame icon at 800x800, png, 400KB (extract) | Not fetched | Undated |
| 4 | teng-ad.com, zhihu.com | Ad agency and practitioner | Moments ad creative guides | Agency, not fetched | Undated |

### English queries

| Query | Top results | Age | Finding |
|---|---|---|---|
| wechat official account article image size specs | blog.sinorbis.com, kawo.com (2021 page titled 2022), medium.com copy of the same, designs.ai (no spec text on fetch), allplatforms.io (403), wechatwiki.com 2019 PDF (unreadable binary), seomandarin.com, jamesdecamp.com 2017, a second wechatwiki PDF | 2017 to 2022, one 2026 page unreachable | Matches the brief's verdict. The fetched incumbent prints 900x383, a 383x383 thumbnail and a 400px body image. The search synthesis printed 900x500 and a 2MB cap from pages it did not name |
| wechat channels video specs aspect ratio duration file size | 90seconds.com, allplatforms.io, emoji-tools.com, mikesblog.com, wikipedia, wechatwiki 2019 PDF, slideshare, a music platform help page | Undated to 2026 | Zero cite the help centre. One page gives Channels 15 to 60 seconds and under 10MB, which is ad advice. A synthesis gave "20 minutes and 500MB" |
| wechat mini program banner size share card image dimensions | gab-china.com 2022, toolschimp.com, designs.ai, mcnasia.com, kawo.com, wechatwiki 2019 PDF, makeawebsitehub.com 2017 | 2017 to 2022 | A 750x350 banner figure appears once, no source. No English page gives the 5:4 share ratio |

## The bar

The Chinese ranking pages run 600 to 2,000 words, carry one table or none, and
cover one surface each: the cover page does not touch Channels, the Channels
page does not touch Mini Programs. The two fullest recent pages (a 2026 design
vendor doc and a 2026 practitioner page) cite no platform page and disagree on
the body image file cap by a factor of two. No page in either language cites
the Channels help centre, the Official Account API doc or the Mini Program
framework reference, although all three are publicly readable. No page says the
900x500 figure is an old Tencent FAQ value, and three still print it.

The bar to beat: 2,000 words, three spec tables with a source count and a
confidence label per row, primary rows visibly separated from modal rows, the
cover-ratio history stated with dates, and a Channels against Douyin cut table
built only from labeled figures. Three tables clears the field. Citing the
platform's own pages where they exist, and saying plainly where they do not,
wins it.

**H1 consequence.** The gap is not missing numbers. It is that WeChat publishes
more than the ranking pages use, and the ranking pages publish numbers WeChat
retired. The page's spine is the split between what the platform states and
what the web repeats.

## R1. What has to be true before looking anything up

Listed before searching. Each is resolved in the tables below.

1. The Official Account lead article cover has a ratio and a pixel size.
2. Secondary articles in a multi-article push use a different cover ratio.
3. The same cover is re-cropped for other surfaces (share to chat, Moments,
   history list).
4. The cover ratio has changed over time, and old figures still circulate.
5. There is a cover file size cap and an inline image file size cap.
6. Inline article images have a working width, a format list and a GIF rule.
7. The API and the web editor may carry different limits.
8. Channels has an accepted ratio range, a recommended ratio and resolution.
9. Channels has duration and file caps that differ by route (phone, desktop
   assistant).
10. Channels has a cover ratio and a profile grid crop.
11. A Douyin 9:16 master behaves differently on Channels.
12. A Mini Program share card has a ratio and a pixel size.
13. A Mini Program has an avatar or icon size, and banners have a size.
14. Tencent Ads placements carry their own creative sizes.
15. Some of this is published by the platform in a reachable place.

Item 15 is true, and more than for any platform in this cluster so far. Items 7,
8 (accepted range and recommended ratio), 9 and 12 (ratio only) resolve as
primary readings, each scoped. Item 14 resolves as primary for one placement
and one date. Items 1, 2 and 6 resolve as consensus with an age split. Items 3,
5, 10 and 13 are contested. Item 4 is established from the record: the 900x500
figure is on a platform FAQ page with no date, every source dated 2021 or later
reports 2.35:1, and the change predates March 2020. Item 11 cannot be asserted
as fact: the only claim that a 9:16 file is cropped on Channels dates from
2020 to 2022, and the platform's help centre now recommends 9:16.

## Collection and counting rules for the three tables

`Sources agreeing` counts independent non-platform domains, fetched in full
unless marked extract. One domain counts once. Platform pages are never counted
toward a mode; they carry their own `primary` label and scope. A non-platform
page that restates a platform page is counted but flagged as an echo.

The collection: 12 non-platform domains carry at least one Official Account
value (11 Chinese-language, 1 English-language), 7 carry a Channels value (6
Chinese, 1 English), 2 carry a Mini Program value (both Chinese), plus extracts
logged separately. Platform pages read: 3 Official Account API doc pages, 1
Tencent customer-service FAQ, 1 Channels help-centre page, 3 Mini Program
developer doc pages, 1 Tencent Marketing School note.

## SPEC TABLE A: Official Account articles

| Spec | Most published or primary value | Range across sources | Sources agreeing | Confidence |
|---|---|---|---|---|
| Lead article cover ratio | 2.35:1 | 2.35:1 on every source dated 2021 or later. 900x500 (about 1.8:1) on 3 sources dated 2017 to 2020 and on the Tencent FAQ | 8 of 11 giving a ratio or size (7 of them dated 2021 to 2026) | consensus, split by date |
| Lead article cover pixel size | 900x383 | 900x383 on 7. Upscaled versions at the same ratio: 1080x460, 1200x510, 1800x766, one each. 900x500 on 3 older pages | 7 for 900x383 | consensus |
| Lead cover size on the platform FAQ | "Large image suggested size 900x500 pixels", compressed after upload to a 640px-wide thumbnail | Tencent customer-service FAQ on article editing, kf.qq.com, undated, FAQ id begins 161220 | Platform page | primary, stale. Scoped to that FAQ. Conflicts with the 2.35:1 crop reported everywhere since 2020 |
| Secondary article cover ratio | 1:1 | 1:1 on all 11 sources giving one | 11 of 11 | consensus |
| Secondary article cover pixel size | 200x200 | 200x200 on 8. 500x500 recommended (200 minimum) on 1. 383x383 on 1 (English). 400x400 at 2x on 1 of the 8 | 8 of 10 giving a size | consensus |
| Square crop taken from the lead cover | A centred square is cut from the 2.35:1 cover for some surfaces | Named surface differs: history list (2), share to chat and Moments (1), auto-generated share thumbnail (3, all 2017 to 2020). Size differs: 383x383 (2), 500x500 (3, older), 766x766 at 2x (1). One page instead gives 500x400 at 5:4, which is the Mini Program share ratio | 6 for a centred square, no two agree on surface and size | consensus on the principle, contested on the number and surface |
| Cover file size cap, editor | 5MB | 5MB on 4 (3 of them 2017 to 2020, restating the FAQ). 10MB on 3 (2021 to 2026). 2MB on 1 (2026). 200KB for the secondary cover on 1 | 4 for 5MB, 3 for 10MB | contested, split by age and inflated by the FAQ echo |
| Cover file size, platform FAQ | "Cover image size within 5M" | Tencent customer-service FAQ, undated | Platform page | primary, stale. Scoped to that FAQ |
| Thumb media, API | 64KB, JPG | Official Account upload-material API doc, thumb type (the cover an API-built article carries). Same on the temporary-media doc | Platform page | primary, API route only. Never the editor's cover cap |
| Image material, API | 10M, bmp, png, jpeg, jpg, gif. Library ceiling 100,000 article and image items, 1,000 other | Official Account upload-material API doc. Temporary-media doc gives 10M, PNG, JPEG, JPG, GIF, kept 3 days | Platform page | primary, API route only |
| Inline body image, API (uploadimg) | jpg or png only, under 1MB, does not count against the 100,000 library ceiling | Official Account upload-article-image API doc | Platform page | primary, API route only. Never the editor's inline cap |
| Inline body image width | 900px | 900 on 5 (3 of them 2017 to 2020). 1080 on 3 (all 2026). 400 on 1 (English, 2021). 320 minimum and 1080 maximum on 1 | 5 for 900, 3 for 1080 | contested, split by age. Newer pages lean 1080 |
| Inline body image file cap, editor | 5MB | 5MB on 4 (3 of them 2017 to 2020). 10MB on 1. 2MB on 1 | 4 | contested, FAQ echo |
| Inline body image file size, platform FAQ | "Body image size may not exceed 5M" | Tencent customer-service FAQ, undated | Platform page | primary, stale. Scoped to that FAQ |
| Inline image formats | JPG, PNG, GIF | JPG, PNG, GIF on 4. The FAQ adds bmp and jpeg | 4 | consensus |
| GIF in the body | Supported, shown as the uploaded original (FAQ). 640px wide, 300 frames, under 10MB on one page | 640px compression also in one extract, publisher not isolated | 1 for any GIF limit | primary for "supported, original shown" (FAQ, stale). Contested for every GIF number |
| Pixel ceiling per inline image | Under 6 million pixels | One page | 1 | contested |
| Summary field | Up to 120 characters. If blank, the first 54 characters of the body are used | Tencent customer-service FAQ, undated | Platform page | primary, stale. Scoped to that FAQ |
| Embedded video in an article, API | 10MB, MP4 | Official Account upload-material API doc, video type | Platform page | primary, API route only. Not the editor's limit |

### Age chase, Official Account

- **900x500.** Traced to a Tencent customer-service FAQ on article editing,
  still served on 2026-09-10 with no date. Its FAQ id begins 161220, consistent
  with a December 2016 creation, but the page does not say so and the writer
  must not state a year. Three non-platform pages (2017-03-07, 2020-03-13,
  2020-07-11) restate its 900x500, 5M and 640px figures almost word for word,
  and English search extracts still carry 900x500. **Repeated often, originating
  once.**
- **2.35:1.** Earliest dated source in this collection: 2020-03-04, which
  already calls 900x500 outdated and describes the change as a message-list
  redesign. So the change predates March 2020 on the published record. Its exact
  date was not found and must not be guessed. Every source dated 2021 or later
  reports 2.35:1.
- **File caps.** 5M originates on the FAQ. 10M matches the API image-material
  limit. 2MB appears on a 2026 page and in an English extract, and the API's
  temporary-media page carries a conflicting "2 MB for images" summary line.
  1MB matches the API uploadimg limit. The spread looks like three platform
  figures from different routes and eras, restated as one editor rule each.

## SPEC TABLE B: WeChat Channels

| Spec | Most published or primary value | Range across sources | Sources agreeing | Confidence |
|---|---|---|---|---|
| Accepted video ratio range | Width to height 0.33 to 3.0 | Help centre states it. One 2026 page repeats it. "6:7 to 16:9, anything outside is cropped" on 1 fetched page (2022) plus extracts from about 2020 | Platform page | primary. Scoped to the Channels help-centre article on posting requirements |
| Recommended video ratio | "Standard ratio video (16:9 or 9:16)" | Help centre states it. Non-platform: 6:7 at 1080x1260 called "official" on 1 fetched page (2022) plus extracts, 1080x1230 on 1 (2020), 9:16 at 1080x1920 on 2 (2026 and undated) | Platform page | primary. The 6:7 figure is launch-era and superseded on the platform's own page |
| Recommended resolution | 1080p and above | Help centre states it. 1080p and above on 1 (echo), 720p and above on 1 (English) | Platform page | primary |
| Duration, phone | 3 seconds to 60 minutes | Help centre states it (one of two renderings also carried a 30-minute line for older devices, unconfirmed). Non-platform: 30 minutes (2026), 1 hour (2021 news, undated site), 1 minute (2020), 15 to 60 seconds (English, ad advice), 20 minutes (English extract) | Platform page | primary. Every lower figure is older or conflicts with the platform page |
| Duration, desktop (Channels assistant) | 3 seconds to 8 hours | Help centre states it. 2 hours on 1 (2026) | Platform page | primary |
| File size cap | Up to 2G | Help centre states it. Non-platform: 2GB on 2 (2021 news, zol page), 4GB on 1 (2026), 30MB on 1 (2020), 10MB on 1 (English), 500MB on 1 English extract. 1GB described as the pre-September-2021 cap | Platform page, plus 2 non-platform agreeing | primary. The 4GB page conflicts with the platform page |
| Formats and codec | Format unrestricted, codec unrestricted. H.265 from iPhone 12 or later: post from an iOS device or use the assistant in Safari on a Mac | MP4 recommended on 2. MP4 and H.264 on 1 | Platform page | primary |
| Refused inputs | GIF images and HDR video are not supported | Help centre states it. No other source mentions HDR | Platform page | primary. The only platform-stated refusal causes in the collection |
| Images per image post | Up to 20 | Help centre states it. 9 on 2 non-platform pages (2020, and a page with an unreliable date) | Platform page | primary. 9 is the launch-era figure |
| Image post ratio | Width to height 0.33 to 3.0 | Help centre states it | Platform page | primary |
| Image post file size | Not stated by the platform | 20MB per image on 1 | 1 | contested |
| Upload compression | Not stated by the platform | Originals over 1GB compressed to 1GB on 1. "Compressed to 720p when shared to Moments" on 1 extract, publisher not isolated | 1 | contested |
| Cover ratio and size | 6:7 at 1080x1260 | 6:7 on 1 fetched page (2026). 3:4 at 1080x1440 and 9:16 at 1080x1920 as options on 1 extract, publisher not isolated | 1 | contested |
| Profile grid rendering of the cover | A 3:4 crop taken from inside the 9:16 frame | One extract, publisher not isolated | 0 fetched | contested |
| Share-to-Moments crop | 1:1 square, 1080x1080 | 1 fetched page | 1 | contested |
| A 9:16 Douyin-style file in the Channels feed | Cropped top and bottom | 1 fetched page (2022) plus extracts from about 2020. The platform's help centre now recommends 9:16 | 1 | contested, stale, and in tension with the platform page |

### Age chase, Channels

- **Duration and file cap.** 2020: 1 minute and 30MB, 9 images. September
  2021: news report of 1 hour and 2GB through the Channels assistant, up from
  1GB. Current help centre: 60 minutes on the phone, 8 hours on the desktop
  assistant, 2G, 20 images. The 2026 page giving 30 minutes, 2 hours and 4GB
  matches none of these and cites nothing.
- **6:7 at 1080x1260.** Called "official" on a 2022 page and on about-2020
  blog extracts, and still printed as the cover size on a 2026 design vendor
  page. The platform page reached today gives a 0.33 to 3.0 range and recommends
  16:9 or 9:16. Whether the feed still crops 9:16 to 6:7 is a capture question.
  **Repeated often, launch-era origin.**

## SPEC TABLE C: Mini Program

| Spec | Most published or primary value | Range across sources | Sources agreeing | Confidence |
|---|---|---|---|---|
| Custom share card image ratio | 5:4, PNG or JPG | Framework reference, Page, onShareAppMessage, imageUrl field: "Supports PNG and JPG. The displayed image aspect ratio is 5:4." Default is a screenshot of the current page. 5:4 also on 2 non-platform pages | Platform page, plus 2 agreeing | primary. Scoped to the share image a Mini Program sets in code |
| Share card pixel size | 500x400 | 500x400 or 1000x800 in extracts from 3 publishers, not isolated. Not stated by the platform | 0 fetched | contested. The platform states a ratio only |
| Share card file cap | 2MB | 1 fetched page (2020), plus extracts | 1 | contested |
| Mini Program avatar | 144x144 | 1 fetched domain (four pages) plus extracts, one on a developer forum thread that served an empty body. Not stated in any platform doc reached | 1 | contested |
| tabBar icon | 40KB, recommended 81px x 81px, no network images. 2 to 5 tabs | app.json configuration doc, tabBar list fields. The 81x81 icon also on 1 non-platform page, which applies it to icons generally | Platform page | primary. Scoped to tabBar icons only |
| Design canvas | 375px wide for a fixed layout (platform design guideline). 750px also on 1 non-platform page | Design guideline also gives 390px for a responsive layout, as rendered | Platform page | primary, scoped to the design guideline |
| Type scale and touch target | 22, 17, 15, 14, 12pt. Touch target about 7 to 9mm | Design guideline | Platform page | primary, scoped to the design guideline |
| Navigation bar and tab bar height | 128rpx and 98rpx | 1 non-platform page | 1 | contested |
| Banner or carousel | No mode | 16:9 on 1 Chinese page. 750x350 on 1 English extract, publisher not isolated. No platform doc reached states a banner size | 1 | contested. A banner is page content the developer lays out, and no platform size was found |

## Tencent Ads note (one placement, primary, dated)

Not a spec table: only one placement resolved.

| Placement | Value | Source | Confidence |
|---|---|---|---|
| Moments regular image ads, supported sizes | 1:1 at 800x800, 3:4 at 960x1280, 4:3 at 1280x960, 5:4 at 1280x1024, 4:5 at 1024x1280, 9:16 at 720x1280, 16:9 at 1280x720. Other requirements "the same as other regular formats" | Tencent Marketing School product note, eschool.qq.com, dated 2023-01-05 | primary, scoped to that note and dated 2023 |
| Official Account ad slots, Channels ads, Mini Program ads | Not reached | The Tencent Ads help centre redirected to its root and served no rule body | not published |
| Moments full-frame icon at 800x800, png, 400KB | Extract of a Tencent Ads help page, not fetched | support.e.qq.com | unconfirmed, do not use |

## Cleared for use

Ready to paste. Each blockquote is followed by its source line stating the
count or the doc, the languages, the date, and whether the value is modal or a
scoped primary reading.

**1. The Channels posting limits, from the platform's own help page.**

> WeChat's Channels help centre, read on 10 September 2026, says a video post
> can run from 3 seconds to 60 minutes when published from the phone, and from
> 3 seconds to 8 hours through the desktop Channels assistant, with a maximum
> file of 2G. It recommends a standard 16:9 or 9:16 frame at 1080p or above, and
> accepts any width-to-height ratio from 0.33 to 3.0. Image posts take up to 20
> images in the same ratio range.
> Source: the Channels help-centre article on posting requirements, served
> unauthenticated on 10 September 2026, Chinese-language, no date shown on the
> page. Primary reading, scoped to that article.

**2. What Channels refuses.**

> The same help page says Channels does not yet accept GIF images or HDR video,
> and that H.265 video recorded on an iPhone 12 or later should be posted from
> an iOS device or through the Channels assistant in Safari on a Mac.
> Source: the Channels help-centre article on posting requirements, read 10
> September 2026, Chinese-language, undated page. Primary reading, scoped to that
> article.

**3. The old Channels numbers still in print.**

> Channels limits have moved several times, and the old figures are still
> published. A 2020 page gives a one-minute ceiling and 30MB. A 2021 report
> describes one hour and 2GB. A 6:7 frame at 1080x1260, first called the
> official vertical size around the 2020 launch, still appears as the Channels
> cover size on a 2026 page, while the platform's own help centre now recommends
> 16:9 or 9:16.
> Source: 7 independent published references, 6 Chinese-language and 1
> English-language, dated 2020 to 2026, compared against the Channels help centre
> on 10 September 2026. Stated as an observation about published sources.

**4. The Official Account cover, as the modal published value, with its history.**

> The most commonly published lead cover for a WeChat Official Account article
> is 2.35:1 at 900x383 pixels, given by 7 of the 11 independent sources that
> state a size, and by every one of them dated 2021 or later. Secondary articles
> in the same push take a 1:1 square, most often 200x200, on 8 of 10. The older
> 900x500 figure, still printed on three pages from 2017 to 2020, matches an
> undated Tencent customer-service FAQ that still carries it.
> Source: 12 independent published references, 11 Chinese-language and 1
> English-language, dated 2017 to 2026, collected 10 September 2026, counted per
> domain and grouped by date. Modal value, consensus, not a primary reading. The
> FAQ is quoted as a platform page with no date.

**5. The square crop, principle only.**

> Most sources that discuss it say a centred square is cut from the wide lead
> cover for some views, so the subject belongs in the middle of the frame. They
> do not agree on which view or on the square's size.
> Source: 6 independent published references, Chinese-language, collected 10
> September 2026. Consensus on the principle, contested on every number. Not a
> platform reading.

**6. The API limits, scoped to the API.**

> WeChat's developer documentation for the Official Account upload API, read on
> 10 September 2026, sets images inserted into an article body through the API
> at JPG or PNG under 1MB, the thumbnail image an API-built article uses as its
> cover at JPG under 64KB, and other image material at up to 10M. Those limits
> govern software publishing through the API. The documentation does not say the
> web editor shares them.
> Source: two Official Account API documentation pages (upload permanent
> material, upload article image) fetched unauthenticated 10 September 2026,
> English-language edition of the platform docs, undated. Primary reading for the
> API route only.

**7. Editor file caps do not agree.**

> Published cover and body image caps for the Official Account editor run from
> 2MB to 10MB. The 5MB figure is the most common, on four sources, but three of
> them date from 2017 to 2020 and repeat an undated Tencent FAQ. Pages written
> since 2021 split between 10MB, 5MB and 2MB.
> Source: 6 independent published references giving a cap, Chinese-language and
> English-language, dated 2017 to 2026, collected 10 September 2026, grouped by
> date before counting. Contested, not a primary reading.

**8. Body image width.**

> The most commonly published working width for an image inside a WeChat
> article is 900 pixels, on five sources. Pages written in 2026 lean to 1080
> pixels, on three.
> Source: 8 independent published references giving a width, 7 Chinese-language
> and 1 English-language, dated 2017 to 2026, collected 10 September 2026.
> Modal value, contested by date, not a primary reading.

**9. The Mini Program share card.**

> WeChat's Mini Program framework reference, read on 10 September 2026, says a
> custom share image may be PNG or JPG and displays at a 5:4 aspect ratio. If no
> image is set, WeChat uses a screenshot of the current page. The reference gives
> no pixel size. The size published most often elsewhere is 500x400.
> Source: the Page reference, onShareAppMessage imageUrl field, developer
> documentation fetched 10 September 2026, undated. Primary reading for the
> ratio and formats. The 500x400 size comes from search extracts across 3
> publishers and is contested.

**10. Mini Program tab icons.**

> WeChat's Mini Program configuration documentation limits each tab bar icon to
> 40KB, recommends 81x81 pixels, refuses network images, and allows two to five
> tabs.
> Source: the app.json configuration doc, tabBar fields, developer documentation
> fetched 10 September 2026, undated. Primary reading, scoped to tab bar icons.

**11. Moments image ads, dated.**

> A January 2023 Tencent Marketing School note lists seven sizes for Moments
> regular image ads: 800x800 at 1:1, 960x1280 at 3:4, 1280x960 at 4:3, 1280x1024
> at 5:4, 1024x1280 at 4:5, 720x1280 at 9:16 and 1280x720 at 16:9.
> Source: Tencent Marketing School product note dated 5 January 2023, fetched 10
> September 2026, Chinese-language. Primary reading, scoped to that note and its
> date.

**12. A Channels cut against a Douyin cut, as published figures.**

> On published figures, the gap between a Douyin cut and a Channels cut is
> length more than frame. Douyin's upload API documentation caps a video at 15
> minutes. WeChat's Channels help centre allows 60 minutes from the phone and
> 8 hours from the desktop. The most commonly published Douyin frame, 9:16 at
> 1080 by 1920, matches the 9:16 the Channels help centre recommends, though
> pages from 2020 to 2022 say Channels crops a 9:16 file top and bottom.
> Source: the Douyin Open Platform upload API doc (primary, API route only) and
> the Channels help centre (primary, scoped to its posting-requirements
> article), both read 10 September 2026. The Douyin frame is a modal value from
> 4 of 4 Chinese-language domains in brief 05, not a primary reading. The crop
> claim rests on 1 fetched Chinese-language page from 2022 and extracts from
> about 2020, contested and stale. A comparison of published figures, not a
> measurement of either app.

## Do not publish

### Hard blocks for this brief

| Item | Reason it is blocked |
|---|---|
| **Any consensus or contested value presented as official, verified, required, or read from WeChat** | Deviation 7 permits the modal value with its count and the disclaimer, nothing stronger |
| **The API limits as editor or app limits** ("WeChat article images must be under 1MB", "cover images must be under 64KB") | The docs govern API routes. Nothing reached says the editor shares them |
| **900x500 as the current cover size** | Traces to an undated FAQ and to pages from 2017 to 2020. May appear only as the old figure, labeled as such |
| **A year for the 2.35:1 change, or for the FAQ** | Not found. "Before March 2020 on the published record" is the most the record supports. The FAQ id pattern is an inference, never a date |
| **6:7 at 1080x1260 as Channels' official or recommended frame** | Launch-era. The platform help centre now recommends 16:9 or 9:16 |
| **"Channels crops 9:16 top and bottom" as current fact** | Sources date from 2020 to 2022 and conflict with the platform's own recommendation. A capture question |
| **4GB, 30 minutes on the phone, or 2 hours on the desktop for Channels** | One 2026 page with no source, contradicting the help centre on all three |
| **1 minute, 30MB, 9 images, 15 to 60 seconds, 10MB or 500MB as Channels limits** | Launch-era figures, ad advice, or English extracts |
| **500x400 as the platform's Mini Program share-card size** | The platform states a ratio only |
| **144x144 as the platform's Mini Program avatar size** | One non-platform domain, no platform doc reached |
| **81x81 as the size for every Mini Program icon** | The platform figure is for tab bar icons only |
| **Any Mini Program banner size** | No mode, no platform figure |
| **Official Account ad, Channels ad or Mini Program ad specs** | The Tencent Ads help centre served no rule body |
| **The 2023 Moments ad sizes as current without the date** | Three years old. Cite with its date or cut |
| **The Moments full-frame icon at 800x800 and 400KB** | Extract of an unfetched page |
| **Rejection reasons beyond the help centre's GIF, HDR and H.265 lines** | No rejection notice was observed. Anything else is practitioner report, labeled as such, or cut |
| **"2 MB for images" from the temporary-media API page** | Conflicts with 10M on the same page |
| **The 30-minute Channels phone limit "on older devices"** | One of two renderings of the help page carried it. Confirm by capture |
| **Any claim that the Official Account editor sets two cover crops, 2.35:1 and 1:1, with pixel sizes** | Extract only (a design tool page that refused the fetch, and a pinned forum article not read) |
| **A hubStudio rate, per-asset price or monthly figure** | Standing rule |

### Quarantined domains

None may be named, linked, described or alluded to on the page. Platforms and
platform products (WeChat, Weixin, Official Account, Channels, Channels
assistant, Mini Program, Tencent, Tencent Ads, Tencent Marketing School, Tencent
customer service, Moments, Douyin, Douyin Open Platform) may be named. Counts
are the distinct spec values each domain contributed to the tallies.

| Domain | What it published | Count contributed | Why it is quarantined |
|---|---|---|---|
| secaiyun.com (two pages) | OA 900x383, 600x383 safe, 5MB, 200x200 at 200KB, 900 and 1080 body, 500x400 share, 240 avatar, 430 QR; Channels cover 6:7, 1:1 Moments crop, under 5MB, 2026 | 14 | Design vendor, no source, borrows the Mini Program ratio for an OA share row. Already quarantined under briefs 04, 05 and 07 |
| huasheng.ai | 900x383, 200x200, 383 safe, 900 and 1080 body, 320 minimum, 6 million pixels, 10MB, GIF 640 wide and 300 frames, 2026-02-01 | 10 | Personal practitioner site citing vendor pages |
| pictech.cc | 900x383, 1200x510, 500x500 and 200 minimum, 1080 body, 2MB body, 10MB, 2026-04-12 | 7 | Image tool vendor, no source |
| tudingai.cn | 900x383, 1800x766, 200x200, 400x400, 766 safe square, 2MB, 1:1 share crop, 2026-06-06 | 7 | AI design tool vendor, "official" without a link |
| js.design (four pages) | 144 avatar, 81 icon, 750 canvas, 128rpx, 98rpx, 16:9 carousel, 5:4 share, 2025-02-21 | 7 | Design tool vendor, no platform page cited |
| 365editor.com | 900x500, 200x200, 5MB, 900 body, 500x500 crop, formats, 2020-03-13 | 6 | Editor vendor restating the FAQ |
| gaitubao.com | 900x500, 200x200, 5M, 640, 900 body, formats, 2017-03-07 | 6 | Image tool, nine years old, restating the FAQ |
| yasuotu.com | 900x500, 200x200, 5MB, 640, 900 body, formats, 2020-07-11 | 6 | Image tool, restating the FAQ |
| 3835.com | 4GB, 30 min phone, 2h desktop, 1080p, 0.33 to 3.0, MP4, 2026-01-12 | 6 | Media service site contradicting the help centre |
| xiazai.zol.com.cn | 1 hour, 2GB, MP4 and H.264, 1GB compression, 9 images, 20MB, date field unreliable | 6 | Download site, no source |
| 135editor.com (two pages) | 2.35:1, 1080x460, 1280 ceiling, 1:1, 2020-03-04 | 4 | Editor vendor |
| kawo.com (and its medium.com copy) | 900x383, 383x383, 400 body, 10MB, 2021-11-22 | 4 | Social management vendor, the English incumbent |
| 3dmgame.com | 1080x1230, 1 minute, 30MB, 9 images, 2020-06-22 | 4 | Games media, launch-era |
| 90seconds.com | Channels 15 to 60 seconds, 9:16, 720p, under 10MB, undated | 4 | Video production vendor, ad advice as Channels spec |
| yiban.io | 900x383, 200x200, 383 safe, 2025-05-22 | 3 | Editor plug-in vendor. Also quarantined under brief 05 |
| mpgcw.com | 5:4, 2MB, jpg and png, 2020-04-22 | 3 | Mini Program news site |
| lingfenmao.com | 6:7 at 1080x1260 "official", 16:9 at 1080x608, 9:16 cropped, 2022-01-14 | 3 | Content farm, launch-era figure |
| pingwest.com | 1 hour, 2GB, 1GB before, 2021-09-07 | 3 | Tech news. Useful for the age chase only, never as a current figure |
| gaoding.com (two pages) | 900x383, 200x200, 2025-02-20 | 2 | Design tool vendor |
| canva.cn (two pages) | 900x383, 500x500, 10M (extract) | 0 counted | Design tool vendor, 403, extract only |
| allplatforms.io | 900x500, 1080 body, 2MB, 20 minutes, 500MB (extracts) | 0 counted | Returned 403, attribution from result order |
| blog.csdn.net, zhidao.baidu.com, jingyan.baidu.com, zhuanlan.zhihu.com, www.zhihu.com, help.youzan.com, muyu007.cn, gongrenapp.com, uniconverter.wondershare.cn, oktool365.com, yibanbianji.com | Cover, Channels ratio, share card and avatar figures in extracts | 0 counted | Extract only, 403, 502 or 521, publisher not isolated |
| teng-ad.com, gab-china.com, mcnasia.com, blog.sinorbis.com, seomandarin.com | Moments ad guides, WeChat ad formats, article guides | 0 counted | Agencies and vendors, not fetched |
| wechatwiki.com (two PDFs), jamesdecamp.com, makeawebsitehub.com, designs.ai, toolschimp.com, emoji-tools.com, mikesblog.com, slideshare.net | 2017 to 2019 cheat sheets, an unreadable PDF, tool pages | 0 counted | Stale, unreadable or no WeChat figures on fetch |

### Failed the bar

| Claim | Where it came from | Why it is cut |
|---|---|---|
| 600x383 safe zone on the lead cover | One design vendor page | Single source, conflicts with 383 and 766 squares |
| 1280px ceiling on the lead cover width | One 2020 editor vendor page | Single source |
| 200KB cap on the secondary cover | One page | Single source |
| Channels cover 6:7 at 1080x1260 as a 2026 fact | One vendor page | Launch-era figure restated |
| Channels "4K upload, compressed to 720p on Moments" | Extract, publisher not isolated | No fetched source |
| Official Account avatar 240x240, QR code 430x430 | One page | Out of scope and single source |
| "Video account cover 1000x367" on an OA size table | One page | Unclear surface, single source |
| Mini Program nav bar 128rpx and tab bar 98rpx | One page | Single source |

## Screenshot inventory

Captured: nothing beyond the fetches recorded above. These captures would lift
rows to primary or confirm scoped primaries for the editor and the apps. Save
to `research/wechat-specs-articles-channels-mini-program/` with the date in the
filename, and record device, screen resolution and app or browser version inside
each file.

| File | What it shows | Rows it upgrades | Captured | Source surface |
|---|---|---|---|---|
| wx-oa-editor-cover-crop-2026-09-10.png | The editor's cover crop dialog for a lead and a secondary article, ratio handles visible | Lead and secondary cover ratio, the two-crop claim | not yet | mp.weixin.qq.com, needs a login |
| wx-oa-editor-upload-oversize.png | The editor refusing a cover or body image above a test size (2MB, 5MB, 10MB files) | Editor cover and body file caps | not yet | mp.weixin.qq.com |
| wx-oa-message-list-share-crop.png | One push shown in the subscription message list, the history list and a chat share, same device | Square crop surface and size | not yet | Live WeChat app |
| wx-oa-body-image-delivered.txt | Delivered width and bytes of a 1080 and a 3000px body image as served to the reader | Body width recommendation, compression | not yet | Live article |
| wx-kf-faq-article-editing-2026-09-10.png | The Tencent FAQ as served | Timestamps the stale primary row | not yet | kf.qq.com |
| wx-oa-api-docs-2026-09-10.png | The add_material, uploadimg and temporary-media doc pages as served | Timestamps the API rows, settles the "2 MB for images" line | not yet | developers.weixin.qq.com |
| wx-channels-help-posting-requirements-2026-09-10.png | The help-centre article as served | Timestamps the Channels primaries, settles the 30-minute older-device line | not yet | findeross.weixin.qq.com |
| wx-channels-assistant-upload-panel.png | The desktop assistant upload panel with its stated limits | Desktop duration and file cap, cover options | not yet | channels.weixin.qq.com, needs a login |
| wx-channels-feed-9x16-grid-test.png | A 1080x1920 grid test file posted and captured in the Channels feed | Whether 9:16 is cropped to 6:7 today, the Douyin cut row | not yet | Live WeChat app, Channels feed |
| wx-channels-profile-grid-same-post.png | The same post's cover in the profile grid, and shared to Moments | Profile grid crop, Moments share crop, cover ratio | not yet | Live app |
| wx-mp-share-card-5x4-test.png | A share card built at 500x400 and at 1000x800, shown in a chat | Share card pixel size | not yet | Live app plus a test Mini Program |
| wx-mp-admin-avatar-upload.png | The Mini Program admin avatar upload with its stated size | Avatar size | not yet | mp.weixin.qq.com, Mini Program account |
| tencent-ads-creative-spec-sheet.png | The creative spec page for Official Account, Channels and Mini Program ad slots | Every Tencent Ads row | not yet | Tencent Ads help centre or advertiser account |
| wx-rejection-notice.png | Any real refusal notice on upload | Rejection reasons | not yet | Editor, assistant or app |

The Channels grid-test post, captured in the feed and in the profile grid on the
same device as the Douyin grid test from brief 05, is the highest-value asset
here. It settles the only real disagreement between the platform's page and
the web, and it builds the Channels against Douyin table from observation
instead of published figures.

## Romanization table

No Han characters and no full-width punctuation appear in this file. Every
Chinese term needed for this brief is mapped here.

| Romanization | English name to use on the page | What it is |
|---|---|---|
| Weixin | WeChat | The app. Use WeChat on the page |
| Weixin gongzhong pingtai | WeChat Official Accounts Platform | The mp.weixin.qq.com backend |
| gongzhonghao | Official Account | The account type that publishes articles |
| dingyuehao | subscription account | Official Account variant with daily pushes |
| fuwuhao | service account | Official Account variant with API depth |
| shipinhao | WeChat Channels | The short video product. Never "WeChat Video" alone |
| shipinhao zhushou | Channels assistant | The desktop publishing tool |
| xiaochengxu | Mini Program | |
| xiaochengxuma | Mini Program code | The circular scannable code |
| Weixin kaifang shequ | WeChat Open Community | Developer forum on the platform domain, user posts |
| Tengxun kefu | Tencent customer service | kf.qq.com, where the stale FAQ lives |
| Tengxun guanggao | Tencent Ads | |
| Tengxun yingxiao xuetang | Tencent Marketing School | eschool.qq.com |
| pengyouquan | Moments | |
| bangzhu zhongxin | help centre | |
| changjian wenti | FAQ | |
| tuwen xiaoxi | article message | An Official Account push |
| toutiao, shoutu | lead article, lead image | First article in a push |
| citiao | secondary article | Second to eighth article in a push |
| fengmian | cover | |
| suoluetu | thumbnail | The API's thumb type |
| zhengwen peitu | body image | Image inside an article |
| changtu | long image | Tall infographic in a body |
| dongtu | animated image, GIF | |
| zhaiyao | summary | The 120-character field |
| sucai guanli | asset management | The API section |
| yongjiu sucai, linshi sucai | permanent material, temporary material | API media types |
| dingyuehao xiaoxi liebiao | subscription message list | Where the 2.35:1 cover shows |
| lishi wenzhang liebiao | article history list | Where the square crop shows, per two sources |
| fenxiang kapian | share card | |
| touxiang | avatar | |
| tubiao | icon | |
| lunbotu | carousel banner | |
| kuangaobi | width-to-height ratio | The 0.33 to 3.0 range |
| chicun | dimensions | |
| bili | ratio | |
| fenbianlv | resolution | |
| shichang | duration | |
| wenjian daxiao | file size | |
| geshi | format | |
| bianma | codec | |
| shuping, hengping | vertical, landscape | |
| caijian | crop | |
| yasuo | compression | |
| anquan qu | safe zone | |
| geren zhuye | profile page | Where the Channels grid crop happens |
| gaiban | redesign | The message-list change behind 2.35:1 |
| guanfang | official | Attached to 6:7 without a platform citation |
| fabiao | publish | |
| shangchuan | upload | |
| guifan | specification | |
| sheji zhinan | design guideline | The Mini Program design doc |
| sucai guifan | creative specification | Ad material rules |
| Douyin, Douyin kaifang pingtai | Douyin, Douyin Open Platform | For the cut comparison, see brief 05 |

## R8. Reconciliation (filled after drafting)
