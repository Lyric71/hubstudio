# Research: facebook-post-specs

| Field | Value |
|---|---|
| Brief | 66 (wave two, `scripts/wave2/66-facebook-post-specs.mjs`) |
| Target query | facebook post size 2026 |
| Gap statement (one sentence) | The ranking pages repeat 1080 x 1350 and 1200 x 630 without saying which Meta page they come from, and even the one that cites Meta covers images only: none states the limits that govern a page post sent by a publishing tool (10 MB photos, Reels and Stories 3 to 90 seconds at 540 x 960 minimum, a 60-second Story cap, 30 API reels a day), none says that every Facebook video has been a reel since September 2025, and none prints the conflict inside Meta's own Facebook Stories safe-zone figures. |
| Research time spent | About 2 hours 15 minutes active: five SERP phrasings, 21 Meta pages captured (Ads Guide, Business Help Center, Facebook Help Center, Meta newsroom, Meta for Developers), help center cross-check |
| Written | 2026-10-11 |
| Method | Primary readings only. Meta Ads Guide pages, Meta for Developers pages and the Meta newsroom post were fetched unauthenticated with a crawler user agent and their text extracted from the served HTML. Facebook Help Center and Meta Business Help Center articles serve a title only to that fetch, so they were rendered logged out in headless Chromium (Playwright, en-US, six-second settle) and their `innerText` saved. Every capture is in `research/facebook-post-specs/` with the suffix `check1-2026-10-11` (check 2: `check2-2026-10-11`). No deviation 7 disclaimer: Western platform, readable official pages (`editorial/CLAUDE.md`, Wave two). |

## R4. Chinese-language web

Not applicable: Facebook is a Western network and the brief's market is
global. No China platform value appears on the page.

## R2. SERP map

Domains are working notes only and never appear on the page. The search tool
returns about ten results per query; the pages marked fetched were read, the
rest classified from title, URL and extract.

### Query 1: `facebook post size 2026` (primary)

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | recurpost.com | Scheduling tool blog | 1080 x 1350 feed, 1080 x 1920 Reels | No Meta page cited; organic and ads blended | 2026 in title |
| 2 | socialsizes.io | Size reference page | 1080 x 1350 at 4:5 | No source | 2026 in title |
| 3 | buffer.com | Tool blog, nine networks | Image sizes per network | Facebook section short; no video or API limits | 2026 |
| 4 | birdeye.com | Software vendor blog | Post sizes and tips | No Meta citation | 2026 in title |
| 5 | viraly.io | Tool blog | Image sizes | No source, no video | 2026 in title |
| 6 | postfa.st | Tool size page | 1080 x 1350 feed | No source; "updated September 2026" with no changelog | 2026-09 |
| 7 | moda.app | Design tool template page | 1080 x 1350 | No source | 2026 in title |
| 8 | layerproof.app | Tool blog | Every format | No Meta citation | 2026 in title |
| 9 | ventanix.com | Agency cheat sheet | Facebook and Instagram sizes | Blended, no source | 2026 in title |

### Query 2: `facebook reel size`

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | scribd.com | Uploaded document | Reel guideline | Not a source | undated |
| 2 | magicbrief.com | Tool blog | Reels guide | No Meta citation | undated |
| 3 | capcut.com | Video tool resource | Video sizes | No Meta citation | undated |
| 4 | postiz.com | Scheduling tool blog | 1080 x 1920, 9:16 | 90-second cap stated with no note that Meta lifted the reel length limit in 2025 | 2026 in title |
| 5 | sendshort.ai | Tool guide | Dimensions | Same | 2026 in title |
| 6 | renderform.io | Tool blog | Image and video sizes | Stale | 2025 |
| 7 | postfa.st | Tool size page | 1080 x 1920 | No source | 2026-09 |
| 8 | moda.app | Template page | 1080 x 1920 | No source | 2026 in title |
| 9 | shopify.com | Commerce blog | Ad sizes | Ads only | undated |

The search tool's own summary of these pages gives "540 x 960 minimum, 4GB,
up to 90 seconds" as one block: the 540 x 960 and 90 seconds are the Reels
Publishing API's figures, the 4GB is the ads guide's, and the 90 seconds no
longer holds for reels posted in the app. That blend is the problem this page
fixes.

### Query 3: `facebook story size and safe zone`

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | postfa.st | Tool size page | 1080 x 1920 | No source | 2026-09 |
| 2 | coinis.com | Ad tool how-to | Story ad specs, safe zones | Ads only | undated |
| 3 | playyy.ai | Tool size page | 1080 x 1920 | No source | undated |
| 4 | sparxno.com | Agency blog | Safe zones in a design tool | Third-party tool named | undated |
| 5 | adsuploader.com | Ad tool blog | Meta ad safe zones | Ads only; no conflict noted | undated |
| 6 | thumbcrafted.com | Tool guide | Story size | No source | undated |
| 7 | moda.app | Template page | 1080 x 1920 | No source | 2026 in title |
| 8 | layerproof.app | Tool blog | Formats | Same | 2026 in title |
| 9 | get-ryze.ai | Ad tool blog | Meta ad sizes and safe zones | Ads only | 2026 in title |
| 10 | quirktools.com | Tool blog | Story ratio | No source | undated |

The search summary mixes "14% (250px) top, 20% (340px) bottom" with "6% each
side" and invents a "950 x 1270 center safe zone" and a "central 1080 x 1420"
area. Meta prints neither of those two areas. Do not publish.

### Query 4: `facebook link preview image size`

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | meetedgar.com | Scheduling tool blog | Link preview cheat sheet | Old | undated |
| 2 | socialsizes.io | Size page | 1200 x 630 | No source | 2026 |
| 3 | buffer.com | Tool blog | Link image | Short | 2026 |
| 4 | paigebrunton.com | Designer blog | Changing the preview on a site builder | Not a spec page | undated |
| 5 | owox.com | Analytics vendor blog, fetched | Facebook image sizes with each figure linked to a Meta page; separate organic and paid sections; "Updated October 9, 2026" | Images only: no Reels or Stories video length, no Reels or Stories publishing API limits, no September 2025 change, no page photo upload limit; prints 14/35/6 for Stories without the 14/20 conflict | 2026-10-09 |
| 6 | view-page-source.com | Tool blog | Link preview sizes across networks | No Facebook-specific source | 2026 |
| 7 | opengraphplus.com | Tool guide | Open Graph image sizes | No Meta page quoted | 2026 |
| 8 | thumbcrafted.com | Tool guide | Fixing previews | Same | undated |
| 9 | freeogimage.com | Tool blog | 1200 x 630 | Same | 2026 |
| 10 | freewebheaders.com | Blog | 1200 x 630 | Same | 2026 |

Several of these print a four-tier display table (full-width at 1200 x 630,
"small square thumbnail" under 600 x 315, "ignored" under 200 x 200). Meta's
page says only that an image under 600 x 315 still displays "but the size will
be much smaller", and that 200 x 200 is the minimum allowed. Publish Meta's
words, not the tiers.

### Query 5: `facebook carousel image size`

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | postplanner.com | Scheduling tool cheat sheet | Dimensions | No source | 2026 in title |
| 2 | savemyleads.com (two URLs) | Integration tool blog | Carousel ad size | Ads only | undated |
| 3 | ionos.co.uk | Host guide | Image sizes | Old, no source | undated |
| 4 | firstpier.com | Agency guide | Carousel ad specs | Ads only | undated |
| 5 | litcommerce.com | Commerce tool blog | Image sizes | No source | 2026 in title |
| 6 | blog.hootsuite.com | Tool blog | Ad sizes and specs | Ads only | 2026 in title |
| 7 | socialrails.com | Tool blog | Carousel ad specs | Ads only | 2026 in title |
| 8 | trycarouselz.com | Tool blog | Carousel size | No source | 2026 in title |

The search summary's "minimum 600 x 600" for carousel images is the Reels
image ad minimum, not a carousel figure. Do not publish.

**The bar:** about 2,000 to 2,800 words, one to three tables, a FAQ on the
better pages. One page in the top results (query 4, row 5) now links each
image figure to a Meta page and splits organic from paid, so "cite nobody",
the brief's verdict, no longer holds for all of them; the brief and its
module were amended in this run (see the run log).

**The gap, in one sentence:** nobody states what a page post sent by a tool
must meet (10 MB photos, Reels and Stories at 3 to 90 seconds and 540 x 960
minimum, a 60-second Story, 30 API reels a day), nobody says every Facebook
video has been a reel since September 2025, and nobody prints the conflict in
Meta's own Facebook Stories safe zones.

## R1 and R5. Claims table

All Meta pages below are undated on the page unless stated, read 2026-10-11
(check 1). Who paid: Meta, the platform itself, in every primary row. Ads
Guide rows are the Awareness objective pages for that placement.

| Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| Facebook Feed image ad: JPG or PNG, 4:5, 1440 x 1800, 30MB, min width 600, min height 750 at 4:5, ratio tolerance 3%, primary text 50 to 150, headline 27 | facebook.com/business/ads-guide/update/image/facebook-feed | undated, read 2026-10-11 | n/a | Ads Guide text | Meta | primary, scoped |
| Facebook Feed video ad: MP4, MOV or GIF, 4:5, 1440 x 1800, 1 s to 241 min, 4GB, min 120 x 120, H.264, AAC 128kbps+ | .../video/facebook-feed | same | n/a | same | Meta | primary, scoped; matches ledger row (brief 32) |
| Facebook Feed carousel ad: 1:1, at least 1080 x 1080, 2 to 10 cards, image 30MB, video 4GB, video 1 s to 240 min, primary 80, headline 20, description 18, landing page URL required | .../carousel/facebook-feed | same | n/a | same | Meta | primary, scoped |
| Facebook Reels video ad: MP4, MOV, GIF, 9:16 recommended, 1440 x 2560, no maximum duration, 4GB, primary 40, headline 55; leave about 14% top, 35% bottom, 6% each side free | .../video/facebook-facebook-reels | same | n/a | same | Meta | primary, scoped; matches ledger row (brief 32) |
| Facebook Reels image ad: JPG or PNG, 9:16, 1440 x 2560, 30MB, min 600 x 600, same 14/35/6; "we recommend that you don't add text on images" | .../image/facebook-facebook-reels | same | n/a | same | Meta | primary, scoped |
| Facebook Stories video ad: MP4, MOV or GIF, 9:16, 1440 x 2560, 1 s to 3 min, 4GB, min width 250, tolerance 1%; leave roughly 14% (250 pixels) top and 20% (340 pixels) bottom free | .../video/facebook-story | same | n/a | same | Meta | primary, scoped; percentages and pixels do not reconcile (ledger row, brief 32) |
| Facebook Stories image ad: JPG or PNG, 9:16, 1440 x 2560, 30 MB, min width 500, tolerance 1%; leave roughly 14% top, 35% bottom, 6% each side free | .../image/facebook-story | same | n/a | same | Meta | primary, scoped |
| Facebook Stories carousel ad: recommended ratio 1:1, recommended resolution at least 1080 x 1920, 3 to 10 cards, min width 500, 30 MB; 14% (250 pixels) top, 20% (340 pixels) bottom; shows one to five cards automatically | .../carousel/facebook-story | same | n/a | same | Meta | primary, scoped; ratio and resolution conflict on the same page |
| Pixel arithmetic: 14% of 1,920 is about 269 and of 2,560 about 358; 250 px is 13% of 1,920; 20% of 1,920 is 384 and of 2,560 is 512; 340 px is about 18% of 1,920; 35% of 1,920 is 672; 6% of 1,080 is about 65 | derived | 2026-10-11 | n/a | arithmetic on Meta's figures | n/a | derived, labeled on the page |
| Meta Business Help Center: Feed placements support 1:1 and 4:5 for images and videos; "Vertical 4:5 is recommended for single-image ads to be delivered to the ad placement Facebook Feed"; Stories, Status and Reels 9:16 recommended; carousel images 1:1 or 4:5, keep ratios consistent; the 4:5 carousel ratio only for Advantage+ catalog ads; in-stream 16:9 | facebook.com/business/help/103816146375741 | undated, read 2026-10-11 | n/a | Business Help text | Meta | primary |
| Meta Business Help Center safe-zone article: 9:16 ads in Stories, Reels, Feed and Facebook in-stream reels keep top, bottom and sides free; taller screens may zoom (cropping outside the safe zone) or letterbox in black; Reels ads with disclaimers leave the bottom 40% free; no top or side percentage printed | facebook.com/business/help/980593475366490 | undated, read 2026-10-11 | n/a | Business Help text | Meta | primary; wording unchanged from the 2026-10-08 ledger row |
| Page photos via the Graph API: .jpeg, .bmp, .png, .gif, .tiff; "Files can not exceed 10MB"; PNG "we recommend not exceeding 1MB or the image may appear pixelated"; Facebook strips location metadata and resizes images to different dimensions | developers.facebook.com/docs/graph-api/reference/page/photos | undated (v26.0 reference), read 2026-10-11 | n/a | developer reference | Meta | primary, API route |
| Link shares: og:image minimum 200 x 200; file not over 8 MB; at least 1200 x 630 for best display on high resolution devices; at least 600 x 315 for link page posts with larger images; smaller still displays "but the size will be much smaller"; keep close to 1.91:1 to show the full image without cropping; images cached by URL, use a new URL to change one; Sharing Debugger pre-caches | developers.facebook.com/docs/sharing/webmasters/images | undated, read 2026-10-11 | n/a | developer doc | Meta | primary |
| Reels Publishing API (Page reels): .mp4 recommended, 9 x 16, 1080 x 1920 recommended, minimum 540 x 960, 24 to 60 fps, 3 to 90 seconds, H.264 or H.265 (VP9, AV1 supported), AAC LC stereo 128kbps+ 48kHz; Reels only to Pages; 30 API-published reels in a 24-hour moving period; errors 1363040 (ratio must be between 16x9 and 9x16), 1363127 (resolution), 1363128 (3 to 90 s), 1363129 (24 to 60 fps) | developers.facebook.com/docs/video-api/guides/reels-publishing | undated, read 2026-10-11 | n/a | developer guide | Meta | primary, API route |
| Facebook Stories API (Page stories): photo same as page photos (formats, 10MB, PNG under 1MB advised); video 9 x 16, 1080 x 1920 recommended, minimum 540 x 960, 24 to 60 fps, "3 to 90 seconds" in the table; the Limitations section: "A video story can not exceed 60 seconds"; media cannot have been used in a previously published post | developers.facebook.com/docs/page-stories-api | undated, read 2026-10-11 | n/a | developer guide | Meta | primary, internal conflict published (60 governs) |
| Pages API post publishing: photos through /page_id/photos, videos through the Video API; no character limit and no multi-photo count stated | developers.facebook.com/docs/pages-api/posts | undated, read 2026-10-11 | n/a | developer guide | Meta | primary (negative finding); matches ledger row (brief 65) |
| Video API publishing guide: Page videos through /page_id/videos with a resumable upload handle; no size or length limit printed on the page | developers.facebook.com/docs/video-api/guides/publishing | undated, read 2026-10-11 | n/a | developer guide | Meta | primary (negative finding) |
| Facebook Help Center: "Update (September 2025): All videos on Facebook are now Reels. All videos posted to Facebook will be shared as reels, regardless of length or orientation" | facebook.com/help/386221115984344 | update dated September 2025, read 2026-10-11 | n/a | Help Center text | Meta | primary |
| Facebook Help Center: "All videos you post on Facebook (except Stories and Live) are now Reels" | facebook.com/help/android-app/2862139500770200 | same update, read 2026-10-11 | n/a | Help Center text | Meta | primary |
| Meta newsroom: "In the coming months, all videos on Facebook will be shared as reels ... Reels on Facebook will also not have any length or format restrictions" | about.fb.com/news/2025/06/making-it-easier-create-videos-facebook | June 17, 2025 (updated July 14, 2025) | n/a | company announcement | Meta | primary for the announcement |
| No Meta page read states a pixel size for an organic photo post, a cap on photos in an organic page post, or a text limit for a page post | the Help Center, Business Help Center and developer pages above | 2026-10-11 | n/a | absence across the official surfaces | n/a | primary (absence) |
| hubStudio Facebook module: posts to pages, not profiles; text only, one image, a carousel of 2 to 8 slides when rendered, or one video, never pictures and video together; up to 10 pictures a post, JPG, PNG or GIF up to 10 MB each, or one MP4 or MOV clip up to 20 minutes; Image editor crops a post picture to Link (1.91:1) or Square; Video editor Social panel set to a Facebook Reel ("every Facebook video is shared as a reel"), with Reel, Story, Feed portrait, Square and what Facebook covers in red; publish now or schedule, up to 20 pages per post, a scheduled time at least a couple of minutes ahead and no more than a year away; queue checked every five minutes; publishing costs nothing | src/content/help/facebook.md (updated 2026-10-08); hubstudio-positioning.md | 2026-10-08 | n/a | first-party help center | hubStudio | first-party, allowed app fact |
| hubStudio Video editor Social panel, Facebook placements: Reel (9:16, 1080 x 1920, Best), Story (9:16), Feed portrait (4:5), Square (1:1); Show what the network covers in red with a dashed safe area; Checks for length, file weight against the network's limit, captions under buttons; Apply the format writes 1080p | src/content/help/assets-library.md | in repo 2026-10-11 | n/a | first-party help center | hubStudio | first-party, allowed app fact |

## Cleared for use

> Meta's ads guide asks for a 4:5 image at 1,440 by 1,800 pixels in Facebook
> Feed, JPG or PNG, up to 30 MB, at least 600 pixels wide.
> Source: Meta Ads Guide, Awareness image ad specs on Facebook Feed, read
> October 11, 2026.

> A photo published to a Page through Meta's Graph API can be JPEG, BMP, PNG,
> GIF or TIFF, can't exceed 10 MB, and a PNG should stay under 1 MB or it may
> look pixelated; Facebook resizes every image to several dimensions.
> Source: Meta for Developers, Page Photos reference, read October 11, 2026.

> For a shared link, Meta asks for an image of at least 1,200 by 630 pixels for
> high-resolution screens, at least 600 by 315 for the larger link post, as
> close to 1.91:1 as possible, 8 MB at most and never under 200 by 200.
> Source: Meta for Developers, Images in Link Shares, read October 11, 2026.

> Since September 2025, "all videos posted to Facebook will be shared as
> reels, regardless of length or orientation," Stories and Live excepted.
> Source: Facebook Help Center, "What are reels on Facebook" and "Create a reel
> on Facebook," September 2025 update, read October 11, 2026.

> A reel published to a Page through Meta's Reels Publishing API must be 9:16,
> at least 540 by 960 pixels (1,080 by 1,920 recommended), 24 to 60 frames a
> second and 3 to 90 seconds long, with 30 reels per Page in a rolling 24 hours.
> Source: Meta for Developers, Reels Publishing API, read October 11, 2026.

> Meta's Facebook Stories video ad page asks for roughly 14 percent (250
> pixels) at the top and 20 percent (340 pixels) at the bottom free of text and
> logos; its Facebook Stories image ad page asks for 14 percent top, 35 percent
> bottom and 6 percent each side.
> Source: Meta Ads Guide, Awareness video and image ad specs on Facebook
> Stories, read October 11, 2026.

## Do not publish

| Item | Where seen | Why not |
|---|---|---|
| Organic feed photo "1080 x 1350" or "2048 px longest side" as a Facebook spec | Tool blogs, size pages, search summaries | No Meta page read states an organic photo pixel size; 1080 x 1350 is 4:5 arithmetic at 1,080 wide, and 2048 traces to photographers' blogs |
| "720, 960 or 2048 px" supported photo widths | Search summary, photographer blogs | Not on any Meta page read |
| Facebook Reels "up to 90 seconds" for reels posted in the app | Tool blogs | Meta's Help Center and newsroom say reels have no length restriction since 2025; 90 seconds is the Reels Publishing API cap only, published scoped |
| Facebook Story "30 seconds" or "120 seconds" | Story-length blogs | No Meta page read; the Page Stories API says 60 seconds |
| A "950 x 1270" or "1080 x 1420" Story safe area | Search summary, tool pages | Not in Meta's pages |
| Link preview display tiers ("small square thumbnail" under 600 x 315, "ignored" under 200 x 200) | Open Graph tool pages | Meta says "much smaller" and gives 200 x 200 as the minimum allowed; publish Meta's words |
| Carousel image minimum "600 x 600" | Search summary | That is the Reels image ad minimum |
| Page profile 320 x 320, cover 851 x 315 | Tool blogs, one page citing Meta Help | Outside the brief's scope (posts, Reels, Stories, links, carousels) |
| The Page setting "videos up to 90 seconds can be published as a reel or a post" and "Create reels with videos less than 60 seconds" | facebook.com/help/862515358855697 | Two figures on one page and both predate, or sit beside, the September 2025 "all videos are reels" update; not a size or length rule for posts |
| Any engagement claim for 4:5 against 1:1 | Tool blogs | No method; sellers of the tools |
| Facebook Stories carousel ad "1080 x 1920 at 1:1" as a usable spec | Meta Ads Guide, Facebook Stories carousel | The page recommends ratio 1:1 and resolution 1080 x 1920 on the same page; cited on the page only as an inconsistency, not as a build size |
| Organic page post character limit (63,206 and others) | Cheat sheets | No Meta page states a limit (ledger, brief 65) |

## Screenshot inventory

Text captures of the served or rendered pages, saved 2026-10-11 to
`research/facebook-post-specs/`. No app capture taken: the page reuses the
help center's existing localized captures (`/Images/help/facebook-brief.webp`,
`/Images/help/video-editor-social.webp`, `/Images/help/image-editor-crop.webp`,
each with `.fr` and `.zh` versions listed in `src/i18n/localized-images.json`).

| File | What it shows | Captured | Source surface |
|---|---|---|---|
| ads-guide-fb-feed-image-check1-2026-10-11.txt | Feed image ad, 4:5, 1440 x 1800, 30MB, 600 wide | 2026-10-11 | Meta Ads Guide |
| ads-guide-fb-feed-video-check1-2026-10-11.txt | Feed video ad, 4:5, 1 s to 241 min, 4GB | 2026-10-11 | Meta Ads Guide |
| ads-guide-fb-feed-carousel-check1-2026-10-11.txt | Feed carousel ad, 1:1, 1080 x 1080, 2 to 10 cards | 2026-10-11 | Meta Ads Guide |
| ads-guide-fb-reels-video-check1-2026-10-11.txt | Reels video ad, 1440 x 2560, no maximum, 14/35/6 | 2026-10-11 | Meta Ads Guide |
| ads-guide-fb-reels-image-check1-2026-10-11.txt | Reels image ad, 1440 x 2560, 30MB, 14/35/6 | 2026-10-11 | Meta Ads Guide |
| ads-guide-fb-story-video-check1-2026-10-11.txt | Stories video ad, 1 s to 3 min, 14% (250 px) and 20% (340 px) | 2026-10-11 | Meta Ads Guide |
| ads-guide-fb-story-image-check1-2026-10-11.txt | Stories image ad, 30 MB, 14/35/6 | 2026-10-11 | Meta Ads Guide |
| ads-guide-fb-story-carousel-check1-2026-10-11.txt | Stories carousel ad, 3 to 10 cards, 1:1 with 1080 x 1920 | 2026-10-11 | Meta Ads Guide |
| biz-help-aspect-ratio-check1-2026-10-11.txt | 4:5 recommended for Facebook Feed single-image ads | 2026-10-11 | Meta Business Help Center (rendered) |
| biz-help-safe-zone-check1-2026-10-11.txt | Safe zone in words, taller screens, 40% disclaimer | 2026-10-11 | Meta Business Help Center (rendered) |
| dev-page-photos-check1-2026-10-11.txt | Page photo formats, 10MB, PNG 1MB | 2026-10-11 | Meta for Developers |
| dev-sharing-images-check1-2026-10-11.txt | Link share image rules | 2026-10-11 | Meta for Developers |
| dev-reels-publishing-check1-2026-10-11.txt | Page reel specs, 30 a day, error codes | 2026-10-11 | Meta for Developers |
| dev-page-stories-check1-2026-10-11.txt | Page Story specs, 60-second limitation | 2026-10-11 | Meta for Developers |
| dev-pages-posts-check1-2026-10-11.txt | Page post publishing, no limits printed | 2026-10-11 | Meta for Developers |
| dev-video-publishing-check1-2026-10-11.txt | Page video publishing, no limits printed | 2026-10-11 | Meta for Developers |
| dev-video-ref-thumbnails-check1-2026-10-11.txt | Video thumbnails reference (context, nothing cited) | 2026-10-11 | Meta for Developers |
| fb-help-what-are-reels-check1-2026-10-11.txt | September 2025 update, all videos are reels | 2026-10-11 | Facebook Help Center (rendered) |
| fb-help-create-reel-check1-2026-10-11.txt | All videos except Stories and Live are reels | 2026-10-11 | Facebook Help Center (rendered) |
| fb-help-page-short-videos-setting-check1-2026-10-11.txt | 90-second and 60-second Page setting (not published) | 2026-10-11 | Facebook Help Center (rendered) |
| meta-news-videos-as-reels-check1-2026-10-11.txt | June 17, 2025 announcement, no length or format restrictions | 2026-10-11 | Meta newsroom |

## R8. Reconciliation (filled after drafting)

Check 2, 2026-10-11, iteration 8, after drafting: every cited URL fetched
again the same way and saved with the suffix `check2-2026-10-11`. The ten
developer, newsroom and help pages came back byte-identical in their text.
The eight Ads Guide pages differed only in the rotating list of
call-to-action button names; every ratio, resolution, size, duration, width,
card-count, safe-zone and character line is identical to check 1. All 18
sources still say what the draft says.

Every number in the draft, checked against the claims table
(`scripts/verify-numbers.mjs`: 40 distinct numbers, the only miss was the
recheck year, now recorded below):

| Number in the draft | Claims row | Result |
|---|---|---|
| 4:5, 1,440 x 1,800, 30 MB, 600 wide, 750 tall, JPG or PNG | Ads Guide Feed image | matches |
| 4:5, 1,440 x 1,800, 120 x 120, 4 GB, 1 second to 241 minutes | Ads Guide Feed video | matches |
| 1:1, 1,080 x 1,080, 2 to 10 cards, 30 MB, 4 GB | Ads Guide Feed carousel | matches |
| 10 MB, PNG under 1 MB, JPEG BMP PNG GIF TIFF, resized | Page Photos reference | matches |
| 1,200 x 630, 600 x 315, 1.91:1, 8 MB, 200 x 200, "much smaller", cache by URL, Sharing Debugger | Images in Link Shares | matches |
| 1,080 x 1,350 called arithmetic, not a Facebook figure | Do not publish row; 4:5 at 1,080 wide | matches, labeled |
| 4:5 recommended for Facebook Feed single-image ads; 1:1 for Instagram Feed; 1:1 or 4:5 carousel, 4:5 for catalog ads only | Business Help aspect ratios | matches |
| All videos are reels, September 2025, Stories and Live excepted; no length or format restrictions, June 17, 2025 | Help Center, newsroom | matches |
| 9:16, 1,080 x 1,920, 540 x 960, 24 to 60 fps, 3 to 90 seconds, 30 reels in 24 hours | Reels Publishing API | matches |
| Reels ad 1,440 x 2,560, no maximum, 4 GB | Ads Guide Reels video | matches |
| Story by API: 9:16 video, 60 seconds at most (table says 3 to 90), photo 10 MB | Facebook Stories API | matches, conflict printed |
| Stories video ad 1 second to 3 minutes, 4 GB, 250 wide | Ads Guide Stories video | matches |
| Stories image ad 1,440 x 2,560, 500 wide, 30 MB | Ads Guide Stories image | matches |
| 14% (250 px) and 20% (340 px); 14 / 35 / 6 | Ads Guide Stories video, image; Reels image, video | matches |
| 269, 13 percent, 18 percent, 672, 65 | derived arithmetic row | matches, labeled "our arithmetic" |
| 40 percent bottom for Reels ads with a disclaimer; zoom on taller screens | Business Help safe zone | matches |
| Stories carousel 3 to 10 cards, one to five shown, 1:1 with 1,080 x 1,920 | Ads Guide Stories carousel | matches, conflict printed |
| No organic photo size, no organic photo cap | absence row | matches |
| hubStudio: page posts, 2 to 8 rendered slides, 10 pictures, 10 MB, JPG PNG GIF, MP4 or MOV up to 20 minutes, Link 1.91:1 and Square, Reel 9:16 at 1,080 x 1,920, Story, Feed portrait 4:5, Square, 20 pages, publishing free | first-party help rows | matches |
| Next scheduled recheck January 13, 2027 | watch row added to `editorial/watch.csv` on 2026-10-11, due 2027-01-13 | matches |

Removed or rewritten during drafting and the quality pass because the
research file did not support them word for word: "one of the few Facebook
spec pages written in plain sentences" (an unmeasured comparison), "under 10
MB" and "under 8 MB" (Meta writes "can not exceed", so the page now says "at
most" and "can't exceed"), "Meta changed it last year" (would go stale on a
page updated in place; now "in 2025").

## Ledger rows to append

### Facebook post, Reel and Story specs: Meta's ads, help and developer pages (added 2026-10-11, brief 66)

| Figure | Attribution to use | Source | Date | Confidence | Check 1 | Check 2 | Used in |
|---|---|---|---|---|---|---|---|
| Facebook Feed image ad: JPG or PNG, 4:5, 1440 x 1800, 30MB, min width 600, min height 750 at 4:5, tolerance 3%, primary text 50 to 150, headline 27 | "Meta Ads Guide, Awareness image ad specs on Facebook Feed, read October 11, 2026" | facebook.com/business/ads-guide/update/image/facebook-feed | undated, read 2026-10-11 | primary, scoped | 2026-10-11 | 2026-10-11 | 66 |
| Facebook Feed video ad re-read: 4:5, 1440 x 1800, 1 s to 241 min, 4GB, min 120 x 120 (brief 32 row unchanged) | "Meta Ads Guide, Awareness video ad specs on Facebook Feed, read October 11, 2026" | facebook.com/business/ads-guide/update/video/facebook-feed | undated, read 2026-10-11 | primary, scoped | 2026-10-11 | 2026-10-11 | 32, 66 |
| Facebook Feed carousel ad: 1:1, at least 1080 x 1080, 2 to 10 cards, image 30MB, video 4GB, video 1 s to 240 min, primary 80, headline 20, description 18 | "Meta Ads Guide, Awareness carousel ad specs on Facebook Feed, read October 11, 2026" | facebook.com/business/ads-guide/update/carousel/facebook-feed | undated, read 2026-10-11 | primary, scoped | 2026-10-11 | 2026-10-11 | 66 |
| Facebook Reels ads: video 9:16, 1440 x 2560, no maximum duration, 4GB; image 9:16, 1440 x 2560, 30MB, min 600 x 600; both 14% top, 35% bottom, 6% each side (brief 32 video row unchanged) | "Meta Ads Guide, Awareness video and image ad specs on Facebook Reels, read October 11, 2026" | facebook.com/business/ads-guide/update/video/facebook-facebook-reels; .../image/facebook-facebook-reels | undated, read 2026-10-11 | primary, scoped | 2026-10-11 | 2026-10-11 | 32, 66 |
| Facebook Stories ads: video 9:16, 1440 x 2560, 1 s to 3 min, 4GB, min width 250, 14% (250 px) top and 20% (340 px) bottom; image 9:16, 1440 x 2560, 30 MB, min width 500, 14% top, 35% bottom, 6% sides; carousel 3 to 10 cards, recommended ratio 1:1 with recommended resolution at least 1080 x 1920 on the same page, 14% (250 px) and 20% (340 px), one to five cards shown automatically | "Meta Ads Guide, Awareness video, image and carousel ad specs on Facebook Stories, read October 11, 2026", conflicts published | facebook.com/business/ads-guide/update/video/facebook-story; .../image/facebook-story; .../carousel/facebook-story | undated, read 2026-10-11 | primary, scoped, two internal conflicts | 2026-10-11 | 2026-10-11 | 32, 66 |
| "Vertical 4:5 is recommended for single-image ads to be delivered to the ad placement Facebook Feed"; carousel images 1:1 or 4:5, consistent ratios; 4:5 carousel only for Advantage+ catalog ads | "Meta Business Help Center, Best practices for aspect ratios, read October 11, 2026" | facebook.com/business/help/103816146375741 | undated, read 2026-10-11 | primary | 2026-10-11 | 2026-10-11 | 54, 66 |
| Safe-zone article re-read: wording unchanged since 2026-10-08 (taller screens zoom or letterbox; Reels ads with disclaimers leave the bottom 40% free) | "Meta Business Help Center, About text overlays and the safe zone for ads in Stories and Reels, read October 11, 2026" | facebook.com/business/help/980593475366490 | undated, read 2026-10-11 | primary, that article only | 2026-10-11 | 2026-10-11 | 32, 56, 66 |
| Page photos through the Graph API: .jpeg, .bmp, .png, .gif, .tiff; files can not exceed 10MB; PNG under 1MB recommended or it may look pixelated; Facebook resizes images to several dimensions and strips location metadata | "Meta for Developers, Page Photos reference, read October 11, 2026" | developers.facebook.com/docs/graph-api/reference/page/photos | v26.0, undated, read 2026-10-11 | primary, API route | 2026-10-11 | 2026-10-11 | 66 |
| Link share image: minimum 200 x 200; 8 MB maximum; at least 1200 x 630 for best display; at least 600 x 315 for the larger link post; smaller displays "much smaller"; keep near 1.91:1; cached by image URL | "Meta for Developers, Images in Link Shares, read October 11, 2026" | developers.facebook.com/docs/sharing/webmasters/images | undated, read 2026-10-11 | primary | 2026-10-11 | 2026-10-11 | 66 |
| Page reels through the Reels Publishing API: 9 x 16, 1080 x 1920 recommended, minimum 540 x 960, 24 to 60 fps, 3 to 90 seconds; 30 API-published reels per 24-hour moving period; error codes 1363040, 1363127, 1363128, 1363129 | "Meta for Developers, Reels Publishing API, read October 11, 2026" | developers.facebook.com/docs/video-api/guides/reels-publishing | undated, read 2026-10-11 | primary, API route | 2026-10-11 | 2026-10-11 | 66 |
| Page stories through the Facebook Stories API: photos as Page photos (10MB); video 9 x 16, 1080 x 1920 recommended, minimum 540 x 960, 24 to 60 fps, table says 3 to 90 seconds, limitations say "A video story can not exceed 60 seconds" | "Meta for Developers, Facebook Stories API, read October 11, 2026", conflict published, 60 governs | developers.facebook.com/docs/page-stories-api | undated, read 2026-10-11 | primary, API route, internal conflict | 2026-10-11 | 2026-10-11 | 66 |
| "All videos posted to Facebook will be shared as reels, regardless of length or orientation" (Stories and Live excepted), update dated September 2025; announced June 17, 2025 with "not have any length or format restrictions" | "Facebook Help Center, What are reels on Facebook and Create a reel on Facebook, read October 11, 2026; Meta newsroom, June 17, 2025" | facebook.com/help/386221115984344; facebook.com/help/android-app/2862139500770200; about.fb.com/news/2025/06/making-it-easier-create-videos-facebook | Sept 2025 and 2025-06-17 (updated 2025-07-14), read 2026-10-11 | primary | 2026-10-11 | 2026-10-11 | 66 |
| No Meta page read states an organic photo pixel size, a photo cap per organic page post, or a page video size or length limit for the /videos route | "Meta's Help Center and developer pages, read October 11, 2026, negative finding" | developers.facebook.com/docs/pages-api/posts; .../video-api/guides/publishing; facebook.com/help | read 2026-10-11 | primary (absence) | 2026-10-11 | 2026-10-11 | 66 |
| Search-results audit: 47 results on five buyer phrasings; one page links its Facebook image figures to Meta pages and splits organic from paid (updated October 9, 2026), images only; none states the Reels or Stories publishing API limits, the September 2025 change or the Stories safe-zone conflict | "search-results audit run October 11, 2026, publisher type recorded, no domain named" | R2 tables in research/facebook-post-specs.md | 2026-10-11 | primary observation | 2026-10-11 | 2026-10-11 | 66 |

### Do not publish, added from brief 66

| Claim | Where it came from | Why it was cut | Logged |
|---|---|---|---|
| Organic Facebook photo "1080 x 1350" or "2048 px longest side", "720, 960 or 2048 px" widths | Size guides, photographers' blogs | No Meta page states an organic photo pixel size | 2026-10-11 |
| Facebook Reels "up to 90 seconds" for reels posted in the app | Tool blogs | Meta lifted the reel length limit in 2025; 90 seconds is the API cap only | 2026-10-11 |
| Facebook Story video "30 seconds" or "120 seconds" | Story-length blogs | No Meta page; the Page Stories API says 60 seconds | 2026-10-11 |
| Story safe areas "950 x 1270" or "central 1080 x 1420" | Search summaries, tool pages | Not on any Meta page | 2026-10-11 |
| Link preview display tiers ("small square thumbnail", "ignored") | Open Graph tool pages | Meta says "much smaller" and 200 x 200 minimum only | 2026-10-11 |
| Carousel image minimum 600 x 600 | Search summary | That is the Facebook Reels image ad minimum | 2026-10-11 |
