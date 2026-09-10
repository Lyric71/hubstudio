# Research: douyin-video-specs-safe-zones

| Field | Value |
|---|---|
| Brief | 05 |
| Target query | douyin video specifications aspect ratio safe zone |
| Gap statement (one sentence) | Every English page that answers a Douyin query prints TikTok's safe zone, right-side action rail included, while the Chinese pages that actually measure Douyin give no rail figure at all and rest their top and bottom bands on two domains that disagree with each other and, in one case, with themselves. |
| Research time spent | About 75 minutes active, Chinese-language web first, twelve query sets, roughly ninety results classified, three platform-owned surfaces fetched |
| Written | 2026-09-10 |
| Method | Modal value per deviation 7 in `../CLAUDE.md`, decided 2026-09-10. Not primary. |

## Method notice, binding on the writer

Nothing in this file was read from a creator backend, an advertiser backend or
an official platform rule page. Every number below is the most commonly
published figure across independent domains, with the count of domains that
gave it. Never present any value here as verified, as official, as required, or
as read from the platform.

## R3 primary-access attempts, and what they returned

Four platform-owned surfaces were fetched unauthenticated on 2026-09-10.

| Surface | URL | Result |
|---|---|---|
| Creator centre | creator.douyin.com | Served a page title and nothing else. No specification text in the body |
| Ocean Engine advertiser platform | ad.oceanengine.com | Served a title and nothing else. No creative specification text |
| Douyin Open Platform, upload video API doc | developer.open-douyin.com, video-management, create-video, upload-video | **Served readable documentation text.** States: total video size within 4GB; chunked upload recommended above 50MB and mandatory above 300MB; chunk 20MB recommended, 5MB minimum; common formats accepted, mp4 and webm recommended; "recommended 16:9, 720p (1280x720) and above, vertical video" (the doc's own wording pairs 16:9 with vertical, which is internally inconsistent); duration may not exceed 15 minutes. No last-updated date shown |
| Douyin Open Platform, chunked upload init doc | developer.open-douyin.com, video-part-upload-init | Readable. Repeats 4GB total, 300MB chunking threshold, 20MB and 5MB chunks, mp4 and webm, within 15 minutes. The extract also carried a "not exceeding 100MB" line that conflicts with the 4GB total on the same page. Treat the 100MB line as unconfirmed until captured |

**What the Open Platform reading is, and what it is not.** It is a primary
reading of the documentation for the API route, the one a third-party app uses
to publish to Douyin on a user's behalf. It is not a statement of what the
Douyin phone app or the web creator service platform accepts, and no source
found says the three routes share limits. The writer may cite the API doc for
the API route only, as "Douyin's Open Platform documentation for its upload
API states", with the fetch date. It must never be stretched into "Douyin's
upload limit is 4GB".

**An echo worth knowing about.** A 2026-04-21 marketing-service page presents
the API doc's four values (15 minutes, 4GB, mp4 and webm, 720p at 1280x720) as
the limits for uploading through the Douyin web page, and misprints mp4 as
"mp5". The same misprint surfaced in a second search extract. That is a
documentation value leaking into app advice through restatement, and it
inflates the 4GB and 15-minute modes below.

**An older platform document, not reached in full.** Two Ocean Engine
advertising rate-card PDFs hosted on a ByteDance content CDN
(lf3-ttcdn-tos.pstatp.com) surfaced in search. The extract dates them to 2020
and carries a first-frame rule (black area of the first frame not over 60
percent) and an ad avatar area of 76x76. They were not fetched, they are six
years old, and they govern ad placements, not organic posts.

## R4. Chinese-language web first

Searched in Chinese before English, per R4. Search strings are romanized here
and mapped in the romanization table at the foot of the file.

1. `douyin shipin chicun bili fenbianlv guifan 2026`
2. `douyin anquan qu jiemian zhedang dingbu dibu youce xiangsu 1080x1920`
3. `douyin shipin shangchuan wenjian daxiao shichang xianzhi geshi malv`
4. `juliang yinqing shuban shipin sucai guifan anquan qu chicun`
5. `douyin zimu anquan qu youce anniu dianzan pinglun zhedang yuliu px shuping shipin sheji`
6. `douyin shipin shichang shangxian diannao shangchuan shouji paishe 60 fenzhong 15 fenzhong`
7. `douyin kaifang pingtai shangchuan shipin jiekou wenjian daxiao fenpian shangchuan xianzhi geshi`
8. `juliang qianchuan shuban shipin sucai anquan qu guifan dingbu dibu youce`
9. `douyin shipin anquan quyu youce kuandu shuping muban dingbu dibu yuliu 2025`

English, run after: `douyin video specifications aspect ratio safe zone`,
`douyin safe zone pixels UI overlay video size`,
`douyin video size specs 2026 vertical 1080x1920 duration limit`, and a TikTok
control query, `TikTok safe zone pixels top bottom right 1080x1920`, run only to
fingerprint TikTok figures so they can be caught when they turn up labeled
Douyin.

What the Chinese web gave that the English web did not: every Douyin-specific
number in this file, and the only source of the Open Platform text. What it did
not give: a right-rail width. No Chinese page found measures the like, comment
and share column as its own zone. Chinese pages fold it into a bottom band.

What the English web gave: nothing Douyin-specific that survives. Across four
English query sets and roughly forty results, zero pages carry a Douyin spec
table. One cover guide asserts a single Douyin rendering size in a sentence.
Every other English answer is TikTok, and one search synthesis stated outright
that Douyin "uses the same technical specifications" as TikTok, then printed
TikTok's file cap and duration ladder.

## R2. SERP map

### Query 1, Chinese, specs (`douyin shipin chicun bili fenbianlv guifan 2026`)

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | toolbox365.cn | Tool site tutorial | Cross-platform upload table: file cap, duration, ratio, resolution | No codec, no bitrate for posts, no safe zone | 2026-05-05 |
| 2 | secaiyun.com (video resolution guide) | Design vendor doc | All-platform resolution table, 4K ceiling, 8 to 15 Mbps | No source, no safe zone beyond one line | 2026-06-18 |
| 3 | secaiyun.com (social media size guide) | Design vendor doc | All-platform size quick reference | Sibling page, same publisher | 2026-05-14 |
| 4 | secaiyun.com (Douyin and Kuaishou canvas guide) | Design vendor doc | The fullest single Douyin table found: ratio, 4K, 30fps, H.264, AAC, 8Mbps, 4GB, 30 minutes, cover, bottom 200px | No top or side figure, no source, no feed or grid distinction | 2026-06-02 |
| 5 | yimeizhushou.com | Multi-account publishing tool blog | Ratio per platform | Snippet only, no numbers beyond ratio | Undated |

### Query 2, Chinese, safe zone (`douyin anquan qu jiemian zhedang ...`)

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | github.com | Browser userscript | Hides the web player's chrome | Irrelevant to the app overlay | Undated |
| 2 | jingyan.baidu.com | How-to | Setting a 1080x1920 vertical sequence in an editor | No overlay figures | Undated |
| 3 | zhuanlan.zhihu.com (layout analysis column) | Practitioner explainer | Short video ratios and content layout, "updated 2025-09-06" | Returned 403 to a direct fetch, extract only | 2025-09-06 |
| 4 | zhuanlan.zhihu.com (cover template post) | Practitioner explainer | Cover template sizes | Extract only | Undated |
| 5 | www.zhihu.com (question: does Douyin have a content safe zone) | Community question | The question itself, as asked | Returned 403, answers unread | Undated |
| 6 | cardcrafter.cn (blog) | AI design tool blog | Top 220px, bottom 380px, centre 1080x1320, feed against collection grid | Says its figures are "industry observation", cites nothing | 2026-07-17 |
| 7 | secaiyun.com | Design vendor doc | As query 1 | As query 1 | 2026-06-02 |
| 8 | 6ziz.com | Jailbroken-app plugin blog | Hiding buttons on a modified client | Irrelevant, and not a source anyone should cite | Undated |

### Query 3 and 6, Chinese, upload limits and duration

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | blog.csdn.net | Developer blog | Compression per platform, a Douyin file cap and duration ladder | Extract only. The ladder reads as the 2019 rollout restated | 2024-09 |
| 2 | xueyuan.yixiaoer.cn (file size article) | Multi-account tool academy | 1GB cap, 15 minutes, mp4 mov avi | No route distinction, no source | 2024-09-10 |
| 3 | xueyuan.yixiaoer.cn (bitrate article) | Same publisher | "Officially recommended" 1000kbps, a per-resolution bitrate ladder | Calls the figure official, names no official page | 2024-10-06 |
| 4 | insight.xiaoduoai.com | Customer-service AI vendor blog | Avoiding compression on upload | Extract only, no figure isolated to it | Undated |
| 5 | yiban.io | WeChat tooling blog | Duration thresholds by follower count: 15 seconds, 1 minute, 5 minutes, 15 minutes "in testing" | Seven years old and still ranking | 2019-09-05 |
| 6 | zhidao.baidu.com | Crowd answer | Longest upload | Undated anecdote | Undated |
| 7 | 80tg.com | Marketing-service site | Web upload: 15 minutes, 4GB, "mp5" and webm, 720p floor | A restatement of the Open Platform API doc, typo included | 2026-04-21 |
| 8 | tt123.com | TikTok cross-border seller directory | A question headlined as TikTok and Douyin length together | The conflation in its own headline | Undated |

### Query 4 and 8, Chinese, Ocean Engine and Qianchuan creative

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | support.google.com (two pages) | Another ad platform's help centre | Its own vertical video specs | Wrong platform entirely | Current |
| 2 | aigc.cn | AI tool directory | Resizing video with a generation tool | No Douyin numbers | Undated |
| 3 | dev.mi.com | Handset maker developer doc | Mini-game creative specs | Wrong platform | Current |
| 4 | lf3-ttcdn-tos.pstatp.com (two PDFs) | ByteDance-hosted ad rate cards | First-frame black area, ad avatar area | 2020, ad placements, not fetched | 2020 |
| 5 | bilibili.com, douyin.com video | Creator tutorials on Qianchuan creative | Video format, unreadable as text | No extractable figure | 2025 |
| 6 | zhihu.com (two answers) | Data vendor answers | Where to find Qianchuan creative | No specs | Undated |
| 7 | cc.oceanengine.com | Ocean Engine inspiration gallery | Trending creatives | Gallery, no spec text | Current |
| 8 | 10100.com | Cross-border news aggregator | Qianchuan review rules | Review policy, not dimensions | Undated |

**Finding.** The obvious query for Ocean Engine vertical creative specs returns
no page carrying a current creative safe zone. The only platform-hosted spec
text in that result set is six years old.

### Query 7, Chinese, captions and right rail

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | digitaling.com | Ad industry media | Vertical ad creative roundup | No specs | Undated |
| 2 | blog.csdn.net (template post) | Editor tutorial | Framing a video inside a fixed vertical template | No overlay figures | 2024-09 |
| 3 | cardcrafter.cn (guide) | AI design tool guide | Cover sizes, 15 percent top and bottom, 10 percent sides, profile shows a 3:4 crop | Contradicts the same domain's blog figures | 2026 |
| 4 | cardcrafter.cn (blog) | As query 2 | 220 and 380 | As query 2 | 2026-07-17 |
| 5 | blog.csdn.net (hide buttons post) | User tip | Clearing the overlay while watching | Viewer-side, not a spec | 2021 |
| 6 | huishenghuiying.com.cn | Editing software vendor | Animated caption effects | No placement figures | Undated |
| 7 | secaiyun.com | As query 1 | As query 1 | As query 1 | 2026-06-02 |
| 8 | didixk.com | Paid resource site | A 1080x1920 caption safe-zone warning PNG | Behind a paywall, no figures, no measurement date | Undated |
| 9 | adconvert.org/zh | Tool page | A TikTok safe-zone checker, served in Chinese to a Douyin query | TikTok tool, Douyin query: a conflation vector | Current |

### Query 5 and 9, English (`douyin video specifications aspect ratio safe zone`, `douyin video size specs 2026`)

| Class | Count | What was returned |
|---|---|---|
| TikTok spec pages | 11 | Size, safe zone and upload guides for TikTok, several titled 2026 |
| Other platforms (YouTube, Shorts, Instagram, X) | 7 | Size guides and safe-zone checkers |
| Generic ratio cheat sheets | 2 | Pixel dimensions per ratio |
| Academic | 1 | A 2019 paper on Douyin video characteristics, no specs |
| Encyclopedia | 1 | A ratio entry, off-topic |
| Pages carrying a Douyin spec table | 0 | None |

### Query 10, English (`douyin safe zone pixels UI overlay video size`)

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | xyla.ai | Tool vendor size table | TikTok: 130px top, 484px bottom, 140px right | No Douyin row on fetch | Updated 2026-05 |
| 2 | kreatli.com (two pages) | Tool vendor guides | TikTok text safe area about 1080x1420, right third at risk | No Douyin mention | 2026-01-12 |
| 3 | imagevideofit.com, poster.ly, getkoro.app | Tool pages | Shorts safe zones | Wrong platform | 2025 to 2026 |
| 4 | orsonlord.com | Creator blog | Overlays for three Western platforms | No Douyin | 2025 |
| 5 | removebackgrounds.ai (attribution from result order, not fetched) | Tool vendor cover guide | One sentence: Douyin uses a similar 1080x1920 cover but renders at 1080x1464 on some surfaces | One sentence, no surface named, no method | 2026 |
| 6 | campaignswift.com | Tool blog | Instagram safe zones | Wrong platform | 2026 |

### Query 11, TikTok control (fingerprinting only)

ignitesocialmedia.com, syllaby.io, zeely.ai, quso.ai, houseofmarketers.com,
creamate.ai, orsonlord.com, checksafe.zone, postplanify.com. Nine TikTok pages.
Extracted fingerprint: top 150 to 200px, bottom 250 to 300px or 270px, right
rail 100px or about 120px. With xyla.ai: bottom 484px and right 140px. Plus a
"22 percent lower completion" claim with a 170,000-post sample and no method.
These values are recorded so they can be recognised, never so they can be used.

## The bar

The Chinese ranking pages run 800 to 2,500 words, carry one table, and cover
Douyin as one row among five to ten platforms. The fullest Douyin-only table
has no top or side safe-zone figure. The one page with top and bottom figures
contradicts a second page on its own domain. Nothing in either language
separates the API route from the app, states a source count, flags the 2019
duration ladder still in circulation, or says which figures are TikTok's.

The bar to beat: 1,900 words, a spec table with a source count and a
confidence label per row, a separate safe-zone table that shows the mechanism
camps rather than one number, a TikTok against Douyin landing table for a
re-exported master, and a visible reviewed date. Two tables clears the field.
Three with counts, plus the conflation called out by name as a mistake, wins
it.

**H1 consequence.** The ranking pages all answer with a number. The gap is
that the numbers in English are TikTok's, and the numbers in Chinese do not
agree. The page's spine is the safe intersection, labeled as derived.

## R1. What has to be true before looking anything up

Listed before searching. Each is resolved in the tables below.

1. Douyin publishes a native ratio and resolution for posts.
2. There is a duration ceiling, and it may differ by upload route (app camera,
   app album, web creator platform, API) and by account.
3. There is a file size cap, and it may differ by route.
4. There is an accepted format list and a codec expectation.
5. There is a bitrate the platform recommends or re-encodes to.
6. The in-feed player lays interface chrome over the video in identifiable
   zones: top, bottom, a right-side action column, and a caption block.
7. Those zones are measurable in pixels on a stated canvas and device.
8. The profile grid shows the cover differently from the feed.
9. Douyin's overlay geometry differs from TikTok's, so a TikTok master's
   captions and end card land somewhere different.
10. A cover frame has its own size.
11. Some of this is published by the platform in a reachable place.

Item 11 is partly true: the Open Platform API doc is reachable and readable, for
the API route only. Items 1, 3, 4 and 10 resolve as modal values. Items 2 and 5
resolve as contested with a stale-origin problem. Items 6, 7 and 8 are the
contested core: Douyin-specific overlay figures exist on two domains, no right
rail figure exists for Douyin at all, and nothing measured from a capture was
found. Item 9 cannot be asserted as fact from this collection. It can be stated
as "the published Douyin figures and the published TikTok figures differ", which
is true of the sources and says nothing about the apps.

## SPEC TABLE

Every value is a modal published figure, not a platform reading, unless the row
says primary. `Sources agreeing` counts independent domains. One domain counts
once however many of its pages carry the value. A value on one domain is
`contested` without exception. TikTok pages are excluded from every count and
logged separately below. "Extract" means read through a search-result extract
rather than a fetched page, and carries less weight.

The collection: 12 non-platform domains carry at least one Douyin value (11
Chinese-language, 1 English-language), six of them fetched in full, plus two
platform-owned documentation pages read at primary level for the API route.

| Spec | Modal value | Range across sources | Sources agreeing | Confidence |
|---|---|---|---|---|
| Native post ratio | 9:16 vertical | 9:16 on every source naming a native ratio. 16:9 and 1:1 named as accepted alternates by 2. The Open Platform API doc pairs "16:9" with "vertical" in one sentence | 4 of 4 | consensus |
| Recommended resolution | 1080x1920 | Unanimous where a post resolution is given | 4 of 4 (3 fetched, 1 extract) | consensus |
| Maximum resolution accepted | 4K (3840x2160 as printed, which is the landscape form) | 4K on a 2026 page. 1080p "maximum" on a 2024 developer blog | 1 for 4K, 1 for 1080p | contested, and split by page age |
| Resolution floor | 720p (1280x720) | Found on one 2026 page that restates the Open Platform API doc word for word. The API doc itself states it as a recommendation for the API route (primary, API route only) | 1 non-platform | contested, an echo of the API doc |
| Frame rate | 30fps | 30fps on one page, "30 or 60fps" on a sibling page from the same publisher | 1 | contested |
| Codec | H.264 video, AAC audio, MP4 container | H.265 also listed as accepted on the same page. No second domain states a codec | 1 | contested |
| Bitrate | About 1Mbps (1000kbps), described by its sources as "officially recommended" | 1Mbps, 2 to 3Mbps at 1080p, 8Mbps minimum at 1080p, 8 to 15Mbps. A fifteenfold spread. The 1Mbps pages cite no official page, and one of them gives 2 to 3Mbps for 1080p in the same article | 2 for 1Mbps (both 2024, one extract), 1 for 8 to 15Mbps (2026) | contested, weak mode, stale |
| Accepted formats | MP4 | MP4 on 4. MOV and AVI on 2 whose wording is identical, so their independence is doubtful. webm on 1, echoing the API doc, with "mp4" misprinted as "mp5" | 4 for MP4 | consensus on MP4 |
| File size cap | 4GB | 4GB on three 2026 pages. 1GB on a 2024 page. 2GB on one extract. The Open Platform doc states 4GB total for the API route (primary, API route only), and one of the three 4GB pages is a restatement of that doc | 3 for 4GB, 1 fetched plus 1 extract for 1GB, 1 extract for 2GB | contested. Split by page age, and the mode is inflated by the API doc echo |
| Duration ceiling | 15 minutes | 15 minutes on 4. 30 minutes on 1, tied to a creator programme. 60 minutes from the web creator platform and 5 minutes from the phone album on 1 extract. 1 minute for "ordinary users" on a 2024 developer blog. The Open Platform doc states 15 minutes for the API route (primary, API route only) | 4 for 15 minutes (one is the API doc echo), 1 each for 30, 60, 5 and 1 minute | contested. See the age chase below |
| Recommended working length | 15 to 60 seconds "typical" | One page, stated as advice | 1 | contested, advice not a limit |
| Cover frame | 9:16 at 1080x1920 | 3:4 at 1080x1440 offered as an alternate cover by 1 | 2 of 2 | contested (thin, no contradiction) |
| Collection cover | Not settled | 1:1 at 1080x1080 on one page, 3:4 at 750x1000 on another page of the same domain | 1 domain, two values | contested, self-contradicting |
| Profile header image | 1125x633 | One page | 1 | contested |
| Profile grid rendering of the cover | A 3:4 crop of the 9:16 cover | 3:4 crop on one Chinese guide. "Renders at 1080x1464 on some surfaces" in one English sentence, no surface named | 1 Chinese, 1 English | contested |
| Safe zone, top | No mode | Douyin-specific: 220px, and 15 percent (288px) on a second page of the same domain. Generic multi-platform vertical figures, publisher not isolated: 150px and 250px. Range 150 to 288px | 1 domain gives a Douyin-specific top figure, and it gives two | contested |
| Safe zone, bottom | No mode | Douyin-specific: 200px, 380px, and 15 percent (288px), the last two from one domain. Generic vertical: 300px and 350px. Range 200 to 380px | 2 domains, no two values agree | contested |
| Safe zone, right-side action column | Not published for Douyin | No Chinese page gives a right-rail width. Side margins appear as 50px each side (generic extract) and 10 percent (108px) each side. Every rail figure in circulation (100px, about 120px, 140px) comes from a TikTok page | 0 | contested, and any Douyin rail number in print is TikTok's |
| Where the like, comment and share buttons sit | Inside the bottom band, with the caption copy and music bar | One page describes the bottom 380px as holding the buttons, caption and music line. TikTok pages put the buttons in a right rail | 1 | contested, and the mechanism disagrees with the TikTok model |
| Central safe area | Keep text, faces and CTAs in the centre | 1080x1320 (from 220 and 380 insets). Centre 60 to 70 percent. "Centre 70 percent, about 756x1344", which contradicts the 50px side margin printed beside it, since 756 wide implies 162px sides | 4 for the principle, no two agree on a number | consensus on the principle, contested on the number |
| First frame, ads | Black area of first frame not over 60 percent | One 2020 Ocean Engine rate card, platform-hosted, read by extract only | 1 | contested, six years old, ad placements only |
| Sound-on assumption | Not published | No source in either language gives a figure or a rule | 0 | not published |

### Age chase

- **Duration.** A 2019 page documents a follower-gated ladder: 15 seconds by
  default, 1 minute opened to all users that April, 5 minutes by application
  above follower thresholds, 15 minutes "in internal testing". A 2024 developer
  blog still frames Douyin as 1 minute for ordinary users and 15 minutes for
  certified ones. That framing is the 2019 ladder restated, not a 2024
  observation. The 15-minute mode is also partly the Open Platform API figure
  travelling into app advice. Weak mode, flagged.
- **File size.** 1GB and 2GB appear only on 2024 pages. 4GB appears on 2026
  pages and in the API doc. That pattern is a stale figure plus a documentation
  echo, not three live platform limits.
- **Bitrate.** Both 1Mbps "official" pages are 2024 and cite nothing. The
  only 2026 page gives 8 to 15Mbps. The 1Mbps figure should be treated as an
  old recommendation of unknown origin, repeated.
- **Safe zone.** The only Douyin-specific top and bottom pair (220 and 380) is
  dated 2026-07-17 and describes itself as "industry observation". The same
  domain's guide page gives percentages that do not reconcile with it.

## The safe zone question, in detail

This is the row a producer loses a batch on. The sources disagree on mechanism,
not only on numbers.

**Feed against profile grid.** Of the five domains that address a Douyin safe
zone at all, one distinguishes the in-feed view from the profile grid. The rest
treat the feed frame as the only surface.

### Mechanism camps

| Camp | What it claims | Douyin domains | Consequence if it is right and you designed for another camp |
|---|---|---|---|
| Band model | Chrome sits in a top band (search, follow, avatar) and a bottom band that holds the buttons, caption copy and music line. Sides need only a small inset | 2 | Text near the right edge in the lower middle is safe under this camp and covered under the rail camp |
| Proportional inset model | Reserve a percentage on all four sides, keep content in the centre 60 to 70 percent | 1 to 2 (one domain, plus a generic extract whose publisher could not be isolated) | Band-model layouts that run text close to the sides fail here |
| Rail model | The action buttons form a separate right-side column, 100 to 140px wide | 0. Every source for this camp is a TikTok page | If Douyin follows the band model, a rail-built layout wastes the right edge. If Douyin follows the rail model, every Chinese-sourced layout has text under the buttons |
| Crop model | The feed centres the frame and cuts top and bottom depending on device, and the grid shows a 3:4 crop | 1 Chinese, 1 English sentence | Under an overlay the pixels still exist and a background can run beneath the chrome. Under a crop they are gone. Advice for one fails in the other |

The band and rail camps are mutually exclusive about where the buttons sit. The
overlay camps and the crop camp are mutually exclusive about whether the top
and bottom pixels survive. No open source resolves either question. Both are
capture questions.

### Derived safe intersection, not a platform rule

Canvas 1080x1920. Taking the largest inset each side from every Douyin figure
in circulation (top 288 from the 15 percent figure, bottom 380, sides 108 from
the 10 percent figure):

- **Douyin-only intersection:** keep critical text, faces and CTAs inside x 108
  to 972, y 288 to 1540. A box of 864x1252.

For a master that must survive both apps, add the largest TikTok fingerprint
figures (bottom 484, right 140), which is legitimate here only because the aim
is a file that clears both, and never as a claim about Douyin:

- **Two-app intersection:** x 108 to 940, y 288 to 1436. A box of 832x1148.

Check against the grid crop, assuming it is centred, which no source states: a
full-width 3:4 crop of 1080x1920 keeps y 240 to 1680, so both boxes sit inside
it.

### Where a TikTok master's captions and end card land, as arithmetic on published figures

- A caption placed just above a 270px TikTok bottom inset has its baseline near
  y 1650. The Douyin band-model bottom figure of 380px starts the band at
  y 1540. On those two published figures, a strip of about 110px holding the
  caption is clear on one and inside the band on the other.
- An end card built to clear a 150 to 200px TikTok top inset can place a logo
  from y 150. The Douyin top figures of 220 and 288px would put that logo inside
  the top band.
- An end card built to clear only a right rail does nothing about the Douyin
  bottom band, which on the one Douyin-specific source also holds the buttons.

These are comparisons between two sets of published numbers. They are not
observations of either app, and the writer must say so.

## TikTok-to-Douyin conflation log

| Where | What happened | Figures that must never be applied to Douyin |
|---|---|---|
| English search synthesis on `douyin video size specs 2026` | Stated that Douyin "uses the same technical specifications" as TikTok, then printed values drawn from TikTok pages | 287.6MB file cap, 10-minute in-app and 60-minute upload durations, 4,000 to 6,000kbps |
| English SERP for the primary query | 0 of 10 results carry Douyin specs. TikTok spec pages rank in their place | Any TikTok size or safe-zone figure |
| tt123.com, a TikTok cross-border seller directory | Headline asks how long a TikTok beginner's Douyin video can be, treating the two as one app | Its duration answer |
| adconvert.org/zh | A TikTok safe-zone checker served in Chinese to a Douyin safe-zone query, so a Chinese-reading designer meets TikTok's rail under a Douyin search | Its rail and inset values |
| removebackgrounds.ai, a TikTok cover guide | The only English Douyin-specific claim sits inside a TikTok page as a single sentence | 1080x1464 "on some surfaces" |
| Right-rail figures generally | Every right-rail pixel width found is from a TikTok page. No Chinese Douyin page publishes one | 100px, about 120px, 140px right rail |
| TikTok bottom insets | TikTok bottom figures (250 to 300px, 270px, 484px) overlap the Douyin range numerically, which makes them easy to pass off as Douyin's | 270px and 484px bottom |
| Performance claims | A "22 percent lower completion" figure for safe-zone violations, from a TikTok page, 170,000 posts, no method | Any completion or engagement figure |
| Search-result translation | Several extracts rendered Douyin as "TikTok" in English output | Never back-translate Douyin as TikTok |

## Cleared for use

Ready to paste. Each blockquote is followed by its source line stating the
count, the languages, the date, and whether the value is modal or primary.

**1. The one platform text that can be read, and its limit.**

> Douyin's Open Platform documentation for its upload API, read on 10 September
> 2026, states that a video uploaded through that API may total up to 4GB, must
> be sent in chunks above 300MB, is best sent as MP4 or WebM, and may not run
> past 15 minutes. That documentation governs apps publishing through the API.
> It does not say the phone app or the web creator platform share those limits,
> and no source found says they do.
> Source: two Douyin Open Platform documentation pages fetched unauthenticated
> on 10 September 2026, text read directly. Primary reading for the API route
> only, not a statement of in-app limits.

**2. The frame, as the modal published value.**

> The most commonly published Douyin post format is a 9:16 vertical frame at
> 1080x1920 pixels. Four of four independent sources that name a native ratio
> give 9:16, and all four give 1080x1920.
> Source: 12 independent published references, 11 Chinese-language and 1
> English-language, collected 10 September 2026, counted per domain and reported
> as the most commonly published figure. Modal value, not a primary reading.

**3. File size and duration split by page age.**

> Published Douyin upload limits split by when the page was written. Pages from
> 2024 give a 1GB or 2GB file cap. Pages from 2026 give 4GB. The most common
> duration ceiling is 15 minutes, on four sources, but one of them restates
> Douyin's API documentation as app advice, and a 2024 page still describes a
> one-minute limit for ordinary users that matches a 2019 rollout.
> Source: 7 independent published references carrying a file cap or duration,
> Chinese-language, collected 10 September 2026, grouped by publication date
> before counting. Modal values, contested, not primary readings.

**4. Bitrate has no usable mode.**

> Published Douyin bitrate advice runs from about 1Mbps to 15Mbps for the same
> 1080x1920 frame. The two pages calling 1Mbps "officially recommended" date
> from 2024 and link no official page.
> Source: 3 independent published references, Chinese-language, collected 10
> September 2026, every figure recorded and the spread reported rather than
> averaged. Contested, not a primary reading.

**5. The safe zone does not agree with itself.**

> Only two Chinese-language sources publish Douyin-specific safe-zone insets,
> and they do not agree. The top band appears as 220 pixels and as 15 percent
> of frame height, about 288 pixels, on two pages of the same site. The bottom
> band appears as 200, 288 and 380 pixels. No Chinese source publishes a width
> for the right-side button column at all.
> Source: 5 independent published references addressing a Douyin safe zone,
> Chinese-language, collected 10 September 2026, every inset converted to a
> 1080x1920 canvas before comparison. Range published, contested, not read from
> the platform.

**6. The TikTok substitution.**

> Four English searches for Douyin video specifications returned roughly forty
> results and not one page carrying a Douyin spec table. TikTok guides filled
> the space. Every right-side button-rail width in circulation, between 100 and
> 140 pixels, comes from a TikTok page.
> Source: 4 English queries run 10 September 2026, every result classified by
> platform and page type, and every rail figure traced to its page. Stated as an
> observation about published sources.

**7. The safe intersection, derived.**

> Whichever published account of the Douyin overlay is correct, a layout that
> keeps text, faces and calls to action between 108 and 972 pixels across and
> between 288 and 1540 pixels down a 1080x1920 frame clears every Douyin inset
> in circulation. To clear the published TikTok insets as well, narrow it to 108
> to 940 across and 288 to 1436 down.
> Source: derived 10 September 2026 by taking the largest inset on each side
> from every published Douyin figure, and for the two-app box every published
> TikTok figure, across 5 Douyin and 11 TikTok sources. A safe intersection, not
> a platform rule.

**8. Where a TikTok caption goes, stated as arithmetic.**

> On the published figures, a caption placed just above a 270-pixel TikTok
> bottom inset sits about 110 pixels inside the 380-pixel bottom band that one
> Chinese source gives for Douyin. That is a comparison of two sets of published
> numbers, not a measurement of either app.
> Source: arithmetic on published TikTok and Douyin inset figures collected 10
> September 2026. Derived, contested on both inputs.

**9. The feed and the grid are different surfaces, per one source.**

> Of five sources addressing where Douyin's interface covers a video, one
> separates the in-feed view from the profile grid, where it says the cover
> shows as a 3:4 crop. The rest treat the feed as the only surface.
> Source: 5 independent published references, Chinese-language, collected 10
> September 2026, classified by whether they distinguish surfaces. The grid crop
> is found once and is contested.

## Do not publish

### Hard blocks for this brief

| Item | Reason it is blocked |
|---|---|
| **Any spec value presented as official, verified, confirmed, required, or read from the platform** | Deviation 7 permits the modal value with its count and the disclaimer. Nothing stronger. The single exception is the Open Platform API doc, and only as a statement about the API route |
| **The API doc limits (4GB, 15 minutes, 720p, MP4 and WebM) as Douyin app limits** | The doc governs the upload API. Stretching it to the app is the exact echo this file found on a vendor page |
| **A single pixel figure for the top or bottom safe zone as Douyin's** | Two domains, five values, no agreement. Publish the range and the derived intersection |
| **Any right-rail width for Douyin** | Zero Chinese sources give one. Every figure in print is TikTok's |
| **A "pixel offsets measured from live app captures" diagram** | The brief asks for one and no capture exists. The diagram must be labeled as the derived intersection of published figures, device unstated, until a capture replaces it |
| **Any TikTok figure as a Douyin figure** | 287.6MB, 10 and 60 minutes, 4,000 to 6,000kbps, 270 and 484px bottom, 100 to 140px rail. See the conflation log |
| **"Douyin officially recommends 1Mbps"** | Two 2024 pages say "official" and link nothing |
| **The duration ladder by follower count or account type** | Traces to a 2019 page. Not a 2026 figure |
| **1080x1464 as a Douyin rendering size** | One English sentence, no surface, no method, inside a TikTok guide |
| **Any statement that Douyin's overlay "is" different from TikTok's** | The sources differ. Nobody in this collection compared the apps. Write "the published figures differ" until a capture session runs |
| **Rejection reasons as platform enforcement** | No source observed a rejection. The only rule-like text is a 2020 ad rate card's first-frame line. Write rejection reasons as what practitioners report, or cut |
| **Any sound-on figure or rule** | None exists in the collection |
| **"85 percent of content traffic is 9:16" and "22 percent lower completion"** | No sample, period or method. The second is a TikTok claim |
| **A hubStudio rate, per-asset price or monthly figure** | Standing rule |

### Quarantined domains

None may be named, linked, described or alluded to on the page. Platforms
(Douyin, Douyin Open Platform, Ocean Engine, TikTok) may be named. Counts are
the distinct spec values each domain contributed to the tally.

| Domain | What it published | Count contributed | Why it is quarantined |
|---|---|---|---|
| secaiyun.com (three pages) | The fullest Douyin table, 2026-06-02, plus two sibling guides | 17 | Design vendor, no source, no top or side inset, already quarantined under briefs 04 and 07 for self-contradicting versions |
| cardcrafter.cn (blog and guide) | 220 and 380 insets, 2026-07-17, plus percentage insets and cover sizes on a second page that contradicts the first | 16 | AI design tool vendor, "industry observation", two pages disagree |
| xueyuan.yixiaoer.cn (two articles) | 1GB, 15 minutes, formats, 1Mbps "official", bitrate ladder, 2024 | 9 | Multi-account tool vendor, no source, stale |
| blog.csdn.net | File cap, 1-minute and 15-minute ladder, 1Mbps, 1080p maximum, 2024, extract only | 7 | Self-published developer blog, restates the 2019 ladder |
| toolbox365.cn | 4GB, 15 minutes, ratio, resolution, 2026-05-05 | 6 | Tool site, no source |
| zhuanlan.zhihu.com, www.zhihu.com | Generic vertical insets 150, 250, 300, 350, 50px sides, 756x1344, extract only, publisher not isolated | up to 6 | Returned 403 twice. Attribution unconfirmed, figures generic rather than Douyin-specific |
| 80tg.com | 15 minutes, 4GB, "mp5" and webm, 720p, 2026-04-21 | 4 | Marketing-service site restating the API doc as app advice |
| yiban.io | Follower-gated duration ladder, 2019-09-05 | 4 | Seven-year-old tooling blog still ranking |
| zhidao.baidu.com, tt123.com | 60 minutes web, 5 minutes album, extract only | 2 | Crowd answer and a TikTok seller directory, publisher not isolated |
| jingyan.baidu.com | 1080x1920 vertical sequence | 1 | How-to, no spec source |
| removebackgrounds.ai | 1080x1464 Douyin rendering sentence | 1 | Tool vendor, TikTok cover guide, not fetched |
| insight.xiaoduoai.com, didixk.com, yimeizhushou.com | Compression advice, a paywalled overlay PNG, ratio snippet | 0 isolated | Vendors and a paid resource site |
| xyla.ai, kreatli.com, ignitesocialmedia.com, syllaby.io, zeely.ai, quso.ai, houseofmarketers.com, creamate.ai, orsonlord.com, checksafe.zone, postplanify.com, socialsizes.io, recurpost.com, stackinfluence.com, wavegen.ai, screensnap.pro, clickanalytic.com, adconvert.org | TikTok specs and safe zones | 0 Douyin values | TikTok pages. Listed so the next writer does not re-open them as Douyin sources |
| support.google.com, dev.mi.com, aigc.cn, digitaling.com, huishenghuiying.com.cn, 6ziz.com, github.com, 10100.com, opp2.com, aigei.com, bilibili.com | Other platforms, stock, tutorials | 0 | Wrong platform or no figures |

### Failed the bar

| Claim | Where it came from | Why it is cut |
|---|---|---|
| 4K maximum upload | One 2026 design vendor page | Single source, contradicted by a 2024 1080p maximum |
| 30fps, H.264, AAC as Douyin's codec set | One page | Plausible encoder practice, single source. May appear as production practice, never as a platform figure |
| 30-minute duration | One page, tied to a creator programme | Single source, programme terms unverified |
| 60 minutes from the web creator platform, 5 minutes from the phone album | One extract, publisher not isolated | Useful if true, found once. A capture question |
| 100MB single-file line in the chunked upload doc | Extract of a platform doc page | Conflicts with 4GB on the same page. Confirm by capture before any use |
| Collection cover 1080x1080 or 750x1000 | Two pages, one domain | Self-contradicting |
| 1125x633 profile header, 800x800 live cover | One page | Single source, out of scope |
| Left and right 50px insets "to avoid rounded-corner cropping" | One generic extract | Device-corner advice presented as a platform inset |
| First-frame black area under 60 percent | 2020 ad rate card, extract | Six years old and for ad placements. May be flagged as an old advertising rule, never as a current post requirement |
| Any Douyin figure carried from brief 13 | `sources/verified-sources.md`, do-not-publish row logged 2026-09-09 | That row blocks "Douyin 9:16" as taken from design blogs. Deviation 7 now permits 9:16 at 1080x1920 as a modal value with its count |

## Screenshot inventory

Nothing captured beyond the fetches recorded above. These captures lift rows
from modal to primary. Save to `research/douyin-video-specs-safe-zones/` with the
date in the filename, and record device model, screen resolution and app
version inside each file.

| File | What it shows | Rows it upgrades | Captured | Source surface |
|---|---|---|---|---|
| dy-feed-grid-test-2026-09-10.png | A 1080x1920 test video carrying a labeled 20px grid, posted and captured in the recommendation feed | Top, bottom, right rail, caption block, and which mechanism camp is live | not yet | Live Douyin app, feed, device stated |
| dy-feed-grid-test-long-caption.png | The same post with a maximum-length caption expanded | Caption block depth, bottom band | not yet | Live app, feed |
| dy-feed-grid-test-tall-device.png and dy-feed-grid-test-16x9-device.png | The same post on two screen shapes | Crop against overlay, the crop camp | not yet | Live app on two devices |
| dy-profile-grid-same-post.png | The same post's cover in the author profile grid | Profile grid crop, feed against grid | not yet | Live app, profile |
| tiktok-feed-grid-test-same-file.png | The identical file on TikTok, same device | The side-by-side asset, and whether the published Douyin and TikTok figures reflect real app differences | not yet | Live TikTok app |
| dy-cover-picker.png | The cover selection panel with ratio options | Cover frame, collection cover | not yet | Live app, publish flow |
| dy-app-album-limits.png | The app refusing or accepting a long or large file from the album | App-route duration and file cap | not yet | Live app, publish flow |
| dy-web-creator-upload-panel.png | The creator service platform upload panel with its stated limits | Web-route duration, file cap, formats, resolution | not yet | creator.douyin.com, needs a login |
| dy-open-platform-upload-doc-2026-09-10.png | The two API doc pages as served | Timestamps the primary reading and settles the 100MB line | not yet | developer.open-douyin.com |
| dy-delivered-mediainfo.txt | Media analysis of a posted test file as delivered back | Codec, frame rate and bitrate as re-encoded, which is observed behaviour rather than an upload recommendation | not yet | Live app playback |
| oceanengine-creative-upload-panel.png | The advertiser creative upload panel with sizes and any safe-zone overlay | First-frame rule, ad creative safe zone | not yet | Ocean Engine advertiser account |
| dy-rejection-notice.png | Any real rejection or quality notice | Rejection reasons | not yet | Live app notifications |

The grid-test post, captured once in the feed, once in the profile grid and once
on TikTok on the same device, is the highest-value asset in this brief. It
replaces every contested safe-zone row and turns the page's H1 from a claim
about published figures into a claim about the apps.

## Romanization table

No Han characters and no full-width punctuation appear in this file. Every
Chinese term needed for this brief is mapped here.

| Romanization | English name to use on the page | What it is |
|---|---|---|
| Douyin | Douyin | The platform. Never "Chinese TikTok" |
| Douyin chuangzuozhe zhongxin | Douyin creator centre | Creator-facing hub, served no spec text |
| Douyin chuangzuo fuwu pingtai | Douyin creator service platform | The web upload route |
| Douyin kaifang pingtai | Douyin Open Platform | The developer documentation that served readable text |
| Juliang yinqing | Ocean Engine | ByteDance's advertising platform |
| Juliang qianchuan | Qianchuan | Ocean Engine's ecommerce ad product for Douyin |
| Kuaishou | Kuaishou | The rival short video platform often tabled beside Douyin |
| shipin | video | |
| shuping, shuban | vertical | 9:16 frame |
| hengping | landscape | 16:9 frame |
| chicun | dimensions | |
| bili | ratio | |
| fenbianlv | resolution | |
| zhenlv | frame rate | |
| bianma | codec | |
| malv | bitrate | The contested row |
| geshi | format | |
| wenjian daxiao | file size | |
| shichang | duration | |
| shangchuan | upload | |
| fenpian shangchuan | chunked upload | The API doc's mechanism above 300MB |
| jiekou | API endpoint | |
| guifan | specification | |
| sucai | creative asset | Ad material |
| anquan qu, anquan quyu | safe zone | The contested core |
| zhedang | occlusion | Chrome covering the frame, as opposed to cropping it |
| jiemian | interface | The overlay chrome |
| dingbu, dibu, youce | top, bottom, right side | The inset directions |
| yuliu | reserve | As in reserve 380px |
| anniu | button | |
| dianzan, pinglun, zhuanfa, shoucang | like, comment, share, favorite | The action buttons |
| zimu | captions | Burned-in subtitles |
| wenan | caption copy | The post text in the bottom band |
| fengmian | cover | |
| heji fengmian | collection cover | Self-contradicting row |
| zhuye toutu | profile header | |
| geren zhuye | profile page | Where the grid crop happens |
| tuijian liu, xinxiliu | recommendation feed | The in-feed view |
| shouzhen | first frame | The 2020 ad rule |
| zhong shipin jihua | mid-length video programme | Where the 30-minute figure comes from |
| sheji | design | |
| muban | template | |
| guanfang tuijian | officially recommended | The phrase attached, without a citation, to 1Mbps |

## R8. Reconciliation (filled after drafting)
