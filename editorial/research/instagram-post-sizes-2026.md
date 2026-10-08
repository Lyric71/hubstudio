# Research: instagram-post-sizes-2026

| Field | Value |
|---|---|
| Brief | 54 (wave two, `scripts/wave2/54-instagram-post-sizes-2026.mjs`) |
| Target query | instagram post size 2026 |
| Gap statement (one sentence) | Every ranking page repeats the same 1080-wide sizes without citing an Instagram page, prints a profile grid tile size Instagram has never published, and none separates what the Instagram app accepts (1.91:1 to 3:4, 20-item carousels) from what Instagram's Content Publishing API accepts (4:5 to 1.91:1, JPEG only, 8 MB, 10-item carousels), which is the limit that governs every post sent by a publishing tool. |
| Research time spent | About 2 hours 30 minutes active: four SERP phrasings, 14 Instagram, Meta Business and Meta developer pages fetched and captured as text |
| Written | 2026-10-08 |
| Method | Primary readings only. Instagram Help Center pages were served to an unauthenticated crawler user agent (a browser user agent got HTTP 400 or a script shell) and their text extracted from the served HTML. Meta Ads Guide and Meta Business Help Center pages fetched the same way with `locale=en_US`. Instagram Platform developer pages read through a fetch tool. No deviation 7 disclaimer: Western platform, readable official pages (`editorial/CLAUDE.md`, Wave two). |

## R4. Chinese-language web

Not applicable: Instagram is a Western platform and the brief's market is
global. The China counterpart is the RedNote cover page already published
(`/resources/insights/rednote-note-cover-specs`), which this page links to and
does not restate.

## R2. SERP map

The search tool returns about ten results per query. Pages marked "fetched"
were read; the rest are classified from title, URL and extract. Domains are
recorded here as working notes only and never appear on the page.

### Query 1: `instagram post size 2026` (primary)

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | linearity.io (two URLs) | Design tool blog plus template page | 1:1, 4:5, 1.91:1, 9:16 at 1080 wide | No Instagram source cited; no API limits | 2026 in title |
| 2 | recurpost.com (two URLs) | Scheduling tool blog | Same size set | Same; no carousel API cap | 2026 in title |
| 3 | inro.social | Tool blog, "grid changes" in title | Sizes and grid | Returned 404 when fetched 2026-10-08 | 2026 in title |
| 4 | heyorca.com | Tool blog | Media specs best practices | No Instagram citation | 2026 in title |
| 5 | socialbu.com | Tool blog | Ratios and "safe zones" | Safe zones not from an Instagram page | 2026 in title |
| 6 | postiz.com | Tool blog | Dimensions | Same set, no source | 2026 in title |
| 7 | virtuall.pro | Tool blog | All dimensions | Same set, no source | 2026 in title |

### Query 2: `instagram carousel size`

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | decktopus.com | Tool blog | 1:1, 4:5, 1.91:1 slides | Carousel count stated as 20 with no note that the API stops at 10 | Not verified |
| 2 | postnitro.ai (four URLs) | Tool blog | Carousel sizes | Titles still read 2024 | 2024 |
| 3 | capcut.com | Tool resource | Sizes, "first slide sets the ratio" | No Instagram citation | Not verified |
| 4 | glorify.com | Tool blog | Best practices | 2024 title | 2024 |
| 5 | contentdrips.com | Tool blog | Format | No API split | 2026-05 |
| 6 | wavegen.ai, moda.app | Tool pages | Sizes | Same set | Not verified |

### Query 3: `instagram profile grid crop` (run as `instagram profile grid 3:4 crop change`)

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | nealschaffer.com | Consultant blog | Post sizes and grid | No Instagram page for the tile ratio | Not verified |
| 2 | kapwing.com | Tool resource, fetched | Says grid moved to 3:4, attributes to an announcement by Instagram's head, links no Instagram documentation | No API split, no carousel count | 2025-12-30 |
| 3 | obrienmedia.co.uk | Agency blog | January 2025 change | Same | 2025 |
| 4 | socialk.it (EN, DE) | Tool blog | Grid changes | Same | Not verified |
| 5 | planoly.com (two URLs) | Tool blog | Vertical grid guide | Same | 2025 |
| 6 | mobilesyrup.com | Tech news | May 2025 3:4 upload support | Not a spec page | 2025-05-29 |
| 7 | skedsocial.com | Tool blog | Grid planner | Same | Not verified |

A further search result carried a "1015 x 1350" grid tile figure. No Instagram
page carries it. Do not publish.

### Query 4: `instagram portrait size 1080x1350`

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | instasize.com | Tool size guide | 4:5 at 1080 x 1350 | No source | Not verified |
| 2 | socialpilot.co (three URLs) | Tool blog | Image sizes | No API split | Not verified |
| 3 | supporthost.com | Hosting blog | Photo sizes | Same | Not verified |
| 4 | onlypult.com | Tool blog | 2022 sizes | Stale | 2022 |
| 5 | joinbrands.com | Marketplace blog | 2026 image post size | Same | 2026 |
| 6 | three spam mirrors | Scraped copies | n/a | n/a | n/a |

Also fetched as a benchmark: buffer.com's image size guide (2026-03-17), about
2,600 words, one reference table, a FAQ; it names a 3:4 grid preview, cites
Meta's ads guide for ads only, does not cite the Instagram Help Center and
does not separate app and API limits.

**The bar:** 1,800 to 2,600 words, one or two tables, a FAQ. Nobody cites the
Help Center's own wording, nobody prints the 1,440-pixel height ceiling with
its source, and nobody says the grid tile ratio is unpublished.

**The gap, in one sentence:** the app and the API accept different shapes and
different carousel lengths, and Instagram has never written down the grid
tile's proportions; no ranking page says either.

## R1 and R5. Claims table

All pages below are undated on the page unless stated. Read 2026-10-08 (check 1).
Who paid: the platform itself in every primary row.

| Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| Instagram uploads a photo "up to a width of 1080 pixels" | help.instagram.com/1631821640426723 | undated, read 2026-10-08 | n/a | Help Center text | Instagram | primary |
| A photo 320 to 1080 wide is kept at original resolution when its ratio is between 1.91:1 and 3:4, "a width of 1080 pixels with a height between 566 and 1440 pixels" | same | same | n/a | same | Instagram | primary |
| An unsupported ratio "will be cropped to fit a supported ratio"; lower resolution enlarged to 320 wide; higher resolution sized down to 1080 wide | same | same | n/a | same | Instagram | primary |
| To be shared at 1080 wide: latest app, upload at least 1080 wide, ratio 1.91:1 to 3:4 | same | same | n/a | same | Instagram | primary |
| The same article's meta description still says "up to 1080x1080 pixels" while its body says a width of 1080 | same, `<meta name="description">` | same | n/a | served HTML | Instagram | primary (observation) |
| Up to 20 photos and videos in one carousel post | help.instagram.com/269314186824048 | same | n/a | Help Center text | Instagram | primary |
| The orientation chosen (square, portrait or landscape) affects every item; no different orientation per item | same | same | n/a | same | Instagram | primary |
| Posts with multiple videos may take longer to upload; use a reliable network | same | same | n/a | same | Instagram | primary |
| Carousel's first photo or video carries an icon on the profile grid | about.instagram.com/blog/announcements/new-share-up-to-10-photos-and-videos-in-one-post | 2017-02-22 | n/a | Instagram announcement | Instagram | primary, old |
| Reels: ratio between 1.91:1 and 9:16; minimum 30 FPS; minimum resolution 720 pixels; cover photo 420 x 654 (1:1.55); cover png or jpg | help.instagram.com/1038071743007909 | undated | n/a | Help Center text | Instagram | primary |
| Reels recorded in the app add up to 20 minutes | help.instagram.com/365080703569355 | undated | n/a | Help Center text | Instagram | primary |
| Troubleshooting order: latest app and OS, restart device, test Wi-Fi against mobile data, reinstall | help.instagram.com/186754094794097 | undated | n/a | Help Center text | Instagram | primary |
| Help Center, about.instagram.com and the developer docs state no ratio or pixel size for the profile grid tile | searches of all three domains and the pages above | 2026-10-08 | n/a | absence observed across the official surfaces | n/a | primary (absence) |
| Profile grid moved from squares to vertical tiles: tested from August 2024, announced by Instagram's head in a video Q&A, rolled out January 2025 | socialmediatoday.com/news/instagram-chief-flags-coming-changes-profile-grid-displays/724532/ | 2024-08-18 | n/a | trade press report of Instagram's own video statement | publisher | single-source report of an event; no number taken from it |
| Grid rollout announced by Instagram's head in his Instagram Story on Friday, January 17, 2025, after tests since August 2024 | routenote.com/blog/instagrams-new-profile-grid-layout-from-squares-to-rectangles/ | 2025-01-20 | n/a | trade press report of Instagram's own Story | publisher | second independent report; event only, no number taken |
| Safe-area pixels on a 1,080 x 1,920 frame: 14% of 1,920 = 268.8, about 269; 35% = 672; 6% of 1,080 = 64.8, about 65 | derived from the Ads Guide percentages | 2026-10-08 | n/a | arithmetic, labeled as ads guidance on the page | n/a | derived |
| 1:1 and 4:5 heights at 1,080 wide: 1,080 and 1,350 | derived from the Help Center's 1,080 width | 2026-10-08 | n/a | arithmetic, stated as such on the page | n/a | derived |
| RedNote cover most commonly published at 3:4, 1,080 x 1,440; RedNote's own surfaces serve no readable text without a login | /resources/insights/rednote-note-cover-specs (site's own published page, deviation 7 method, 20 sources, 2026-09-10) | 2026-09-10 | 20 sources | counted modal value | n/a | first-party page, its method printed there |
| API images: JPEG, 8 MB maximum, 4:5 to 1.91:1, width 320 to 1440, sRGB | developers.facebook.com/docs/instagram-platform/instagram-graph-api/reference/ig-user/media | undated | n/a | developer reference | Meta | primary |
| API Reels: MOV or MP4, HEVC or H264, 23 to 60 FPS, 3 s to 15 min, 300 MB, 9:16 recommended | same | same | n/a | same | Meta | primary |
| API Stories: image JPEG 8 MB 9:16; video 3 to 60 s, 100 MB | same | same | n/a | same | Meta | primary |
| API carousels: 10 items maximum, images or videos or a mix | same, and /content-publishing | same | n/a | same | Meta | primary |
| API: carousel images cropped based on the first image, default 1:1 | developers.facebook.com/docs/instagram-platform/content-publishing | undated | n/a | developer guide | Meta | primary |
| API: JPEG is the only image format; MPO and JPS not supported | same | same | n/a | same | Meta | primary |
| API: 100 API-published posts per 24-hour moving period, carousel counts as one | same | same | n/a | same | Meta | primary |
| API: the same guide's carousel section says "Accounts are limited to 50 published posts within a 24-hour period"; the guide prints both figures, so the page prints both (R6). Added 2026-10-08 when the Instagram Reels and Stories research, which logged the conflict, was set beside this file | developers.facebook.com/docs/instagram-platform/content-publishing; capture research/instagram-reels-stories-specs/meta-dev-content-publishing-check1-2026-10-08.txt, lines 124 and 156 | undated, read 2026-10-08 | n/a | developer guide | Meta | primary, conflict published |
| API errors: 2207009 ratio, 2207004 too large (under 8 MiB), 2207005 format, 2207026 video format, 2207028 carousel 2 to 10, 2207042 daily cap | developers.facebook.com/docs/instagram-platform/instagram-graph-api/reference/error-codes | undated | n/a | developer reference | Meta | primary |
| Ads Guide, Instagram Feed image ad (Awareness): JPG or PNG, 4:5, 1440 x 1800, min width 500, ratio range 400 x 500 to 191 x 100, 30 MB, primary text 125, headline 40 | facebook.com/business/ads-guide/update/image/instagram-feed | undated | n/a | ads guide | Meta | primary, that placement and objective |
| Ads Guide, Instagram Feed carousel ad: 2 to 10 cards, 4:5 for image-only carousels, 1:1 only when a carousel contains video, at least 1080 x 1080, 30 MB image, 4 GB video, 1 s to 2 min | .../carousel/instagram-feed | undated | n/a | ads guide | Meta | primary, scoped |
| Ads Guide, Instagram Reels and Story ads: 9:16, 1440 x 2560; leave about 14% top, 35% bottom, 6% each side free of text and logos | .../video/instagram-reels; .../image/instagram-story | undated | n/a | ads guide | Meta | primary, ads only; matches ledger rows from brief 32 |
| Meta Business Help Center: "1:1 is recommended for single-image ads to be delivered to Instagram Feed" | facebook.com/business/help/103816146375741 | undated | n/a | business help | Meta | primary; conflicts with the Ads Guide's 4:5 recommendation |
| hubStudio Image editor Social panel, Instagram placements: Feed portrait (1080 x 1350, Best), Square, Landscape, Grid portrait (3:4, Instagram app only), Story, Reel cover, Profile photo; crop to fill or fit whole; shows what the network covers and the profile grid in dashed lines; Apply the format | src/content/help/assets-library.md | updated in repo | n/a | first-party help center | hubStudio | first-party, allowed app fact |
| hubStudio Instagram module: One image, Carousel (2 to 8 slides when rendered) or Reel; every picture turned into a JPEG Instagram accepts; Reel MP4 or MOV, 3 s to 15 min; publish Feed post or Story for pictures, video always a Reel, Story clip 60 s at most; professional account (Business or Creator); now or scheduled; up to 20 accounts per post; publishing costs nothing | src/content/help/instagram.md; hubstudio-positioning.md | 2026-10-08 | n/a | first-party help center | hubStudio | first-party, allowed app fact |

## Cleared for use

> Instagram keeps a photo at its original resolution when it is between 320
> and 1,080 pixels wide and its aspect ratio sits between 1.91:1 and 3:4, which
> at 1,080 pixels wide means a height between 566 and 1,440 pixels. Wider files
> are sized down to 1,080; an unsupported ratio is cropped to fit.
> Source: Instagram Help Center, image resolution article, read October 8, 2026.

> A carousel holds up to 20 photos and videos, and the orientation you pick
> (square, portrait or landscape) applies to every item in the post.
> Source: Instagram Help Center, sharing multiple photos or videos as a single
> post, read October 8, 2026.

> Through Instagram's Content Publishing API, images must be JPEG, at most 8 MB,
> 320 to 1,440 pixels wide and between 4:5 and 1.91:1; carousels stop at 10
> items, cropped to the first image's ratio; an account can publish 100 posts
> through the API in a rolling 24 hours.
> Source: Instagram Platform developer documentation, media reference and
> content publishing guide, read October 8, 2026.

> Meta's ads guide asks for 4:5 at 1,440 by 1,800 pixels for an Instagram Feed
> image ad and accepts nothing taller than 4:5; its business help center
> recommends 1:1 for the same placement.
> Source: Meta Ads Guide, Instagram Feed image ad specs, and Meta Business Help
> Center, best practices for aspect ratios, both read October 8, 2026.

## Do not publish

| Item | Where seen | Why not |
|---|---|---|
| Profile grid tile "3:4" or "1015 x 1350" as an Instagram spec | Tool blogs, search extracts | No Instagram, Meta Business or developer page states it. Page says the tile ratio is unpublished |
| "Instagram lets you adjust the grid preview crop" as an Instagram feature | One search extract | No Help Center article found describing it; not verifiable on an official page |
| Story 1080 x 1920 as an Instagram organic spec | Every tool blog | Instagram Help Center states no Story pixel size; the API states 9:16 only; Meta's ads guide gives 1440 x 2560 for ads. Publish those, scoped |
| Profile photo 320 x 320 | Tool blogs | No Instagram page read states it; outside the brief's scope |
| Carousel 1080 x 608 landscape | One tool blog | Contradicts Instagram's own 566 height at 1.91:1 |
| Any engagement claim for 4:5 or 3:4 | Tool blogs | No method, sellers of the tools |
| Exact quote of the head of Instagram on the grid (Stories, Threads) | Press | The statements were ephemeral; no first-party text reachable. Event reported, no quote, no number |
| 1440-pixel organic upload in the app | Some blogs | The Help Center says photos are sized down to 1080 wide. 1440 appears only as the API's input ceiling and the ads guide's recommendation |

## Screenshot inventory

Text captures (the served HTML reduced to its text), saved 2026-10-08 to
`research/instagram-post-sizes-2026/`. No app capture taken; the page reuses
the help center's existing localized Image editor capture if it needs one.

| File | What it shows | Captured | Source surface |
|---|---|---|---|
| help-image-resolution.txt | 1080 width, 1.91:1 to 3:4, 566 to 1440 height, stale 1080x1080 meta description | 2026-10-08 | Instagram Help Center |
| help-carousel.txt | 20 items, one orientation for all, multiple-video upload note | 2026-10-08 | Instagram Help Center |
| help-reels-resolution.txt | 1.91:1 to 9:16, 30 FPS, 720 px, cover 420 x 654 | 2026-10-08 | Instagram Help Center |
| help-photo-sharing-hub.txt | Section hub repeating the above, Reels up to 20 minutes | 2026-10-08 | Instagram Help Center |
| help-troubleshooting.txt | Generic troubleshooting order | 2026-10-08 | Instagram Help Center |
| dev-docs-ig-user-media.txt | API image, Reel, Story, carousel specs | 2026-10-08 | Instagram Platform docs |
| dev-docs-content-publishing.txt | 100 posts a day, 10-item carousels, first-image crop, JPEG only | 2026-10-08 | Instagram Platform docs |
| dev-docs-error-codes.txt | Publishing error codes | 2026-10-08 | Instagram Platform docs |
| ads-guide-instagram-feed-image.txt | Feed image ad specs | 2026-10-08 | Meta Ads Guide |
| ads-guide-instagram-feed-carousel.txt | Feed carousel ad specs | 2026-10-08 | Meta Ads Guide |
| ads-guide-instagram-feed-video.txt | Feed video ad specs | 2026-10-08 | Meta Ads Guide |
| ads-guide-instagram-reels-video.txt | Reels ad specs and 14/35/6 safe zone | 2026-10-08 | Meta Ads Guide |
| ads-guide-instagram-story-image.txt | Story image ad specs and safe zone | 2026-10-08 | Meta Ads Guide |
| business-help-aspect-ratio-best-practices.txt | 1:1 recommended for Instagram Feed single-image ads | 2026-10-08 | Meta Business Help Center |
| business-help-carousel-ad-design-specs.txt | Carousel ad cards and sizes | 2026-10-08 | Meta Business Help Center |
| about-instagram-2017-multi-photo.txt | First item carries the grid icon | 2026-10-08 | about.instagram.com |

## R8. Reconciliation (filled after drafting)

Check 2, 2026-10-08, after drafting (iteration 8): every cited URL re-fetched.
Help Center image resolution (1.91:1 to 3:4, the stale 1080x1080 description
still present), carousels (20 items, one orientation), Reels (1.91:1 to 9:16,
30 FPS, 420 x 654), troubleshooting; Ads Guide feed image (400 x 500 minimum
ratio, 1440 x 1800), carousel (2 to 10 cards), Reels and Story (1440 x 2560,
14% top); Business Help Center (1:1 recommended for Instagram Feed); the three
developer pages (all values confirmed, error subcodes confirmed); Social Media
Today (2024-08-18) and RouteNote (2025-01-20) reports; about.instagram.com
2017 post (HTTP 200). All still say what the draft says.

Every number in the draft, checked against the claims table:

| Number in the draft | Claims row | Result |
|---|---|---|
| 1,080 wide; 320; 1.91:1 to 3:4; 566 to 1,440; cropped if outside; sized down | Help Center image resolution | matches |
| "up to 1080x1080 pixels" page description | same, observation | matches |
| 1,080 x 1,080 and 1,080 x 1,350 | derived row | matches, labeled arithmetic on the page |
| JPEG only, 8 MB, 320 to 1,440 wide, 4:5 to 1.91:1 | API media reference, content publishing | matches |
| Carousel 20 (app), 10 and minimum 2 (API), first-image crop, 1:1 default | Help Center carousel; API | matches |
| 100 posts in 24 hours, carousel counts as one | content publishing | matches |
| 50 posts in the guide's carousel section (blockquote, failures table, FAQ; added 2026-10-08) | content publishing, 50-post row | matches the capture |
| Reel 1.91:1 to 9:16, 720 pixels, 30 FPS, cover 420 x 654 | Help Center Reels | matches |
| Reel by API MP4 or MOV, 3 s to 15 min, 300 MB | API media reference | matches |
| Story by API 9:16, JPEG 8 MB, 3 to 60 s, 100 MB | API media reference | matches |
| Feed image ad 4:5, 1,440 x 1,800, JPG or PNG, 30 MB, range 4:5 to 1.91:1 | Ads Guide feed image | matches |
| 1:1 recommended for Instagram Feed single-image ads | Business Help Center | matches |
| Carousel ad 2 to 10 cards, 4:5 images only, 1:1 with video | Ads Guide carousel | matches |
| 14% / 35% / 6%; 1,440 x 2,560 Story ads | Ads Guide Reels, Story | matches |
| 269 / 672 / 65 pixels | derived row | matches, labeled as borrowed ad guidance |
| Error codes 2207009, 2207004, 2207005, 2207028, 2207042 | error reference | matches |
| 2017 first-item grid icon | about.instagram.com | matches |
| August 2024 test, January 2025 Story announcement | Social Media Today, RouteNote | matches, event only |
| hubStudio: Feed portrait 1,080 x 1,350, Grid portrait 3:4 app only, JPEG conversion, Story clip 60 s, 20 accounts, publishing free | first-party help rows | matches |
| RedNote 3:4 at 1,080 x 1,440 | site's RedNote page | matches, described on the page as counted, not read |
| January 8, 2027 recheck | watch row | matches |

Removed or rewritten during drafting because the research file did not
support them: "the 3:4 photo your phone shoots by default" (phone default
ratio not on any Instagram page read); "the body text replaced that years ago"
(no date for the change); "tile sizes come from measuring screenshots" (method
of third-party guides not verifiable); "treat the grid as a center crop" (crop
anchor not published); "4:5 sits inside both pages' accepted range" (the
Business Help Center page states no range for single-image ads).
