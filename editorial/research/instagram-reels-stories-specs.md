# Research: instagram-reels-stories-specs

| Field | Value |
|---|---|
| Brief | 56 (wave two, `scripts/wave2/56-instagram-reels-stories-specs.mjs`) |
| Target query | instagram reel size 2026 |
| Secondary | instagram story size; reels safe zone; instagram reel length limit |
| Gap statement (one sentence) | Every ranking page prints 1080 by 1920 as Instagram's size and a pixel safe zone as Instagram's rule, yet none quotes Instagram's or Meta's own pages, none separates an organic Reel from a Reels ad, and none notices that Instagram's Help Center prints no pixel size and no organic safe zone at all. |
| Research time spent | about 2 hours 30 minutes (SERP, 36 logged-out renders: 23 at check 1, 13 at check 2; reconciliation) |
| Written | 2026-10-08 |
| Check 1 | 2026-10-08, logged-out headless Chromium renders (en-US), text saved to `research/instagram-reels-stories-specs/` with the suffix `check1-2026-10-08` |
| Check 2 | 2026-10-08, iteration 8, second render of every cited URL, saved with the suffix `check2-2026-10-08` |

## Method

Instagram and Meta pages render their body in the browser. A plain HTTP fetch of
`facebook.com/business/help/980593475366490` returned a title only on
2026-10-08 (as it did on 2026-09-10 for brief 32), and a curl request with an
`Accept-Language: en-US` header returned HTTP 400. Every page cited below was
therefore rendered logged out in headless Chromium (Playwright, locale en-US,
six-second settle), and its `innerText` saved with the URL, the final URL, the
HTTP status and the title. Three Instagram Help Center URLs served another
article's body under a generic title (see "Do not publish"); only URLs whose
title matched their body are cited.

Western platform pages are readable, so every row below is a primary reading of
the platform's own page, scoped to the surface that page names. No deviation 7
disclaimer applies (`editorial/CLAUDE.md`, Wave two).

## R2. SERP map

Publisher domains are recorded by type and a letter code, not by name: most of
the ranking pages belong to companies selling social scheduling or video
editing software, and the house rule keeps them out of every file that feeds
the page. The full result lists were read on 2026-10-08 (US results).

Query: `instagram reel size 2026`

| # | Publisher type | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | AI video tool (A) | Spec sheet | 1080x1920, 4GB, "3 seconds to 3 minutes in-app, up to 15 minutes in some surfaces", safe zone "1080 x 1420" | No Instagram or Meta source; the 1080x1420 box is printed on no Meta page | 2026 |
| 2 | AI video tool (B) | Spec guide | 1080x1920, 9:16 | No source; no ads split | 2026 |
| 3 | Size reference site (C) | Spec page | Reels 1080x1920 | No source, no length split | 2026 |
| 4 | AI video tool (A, second URL) | Spec sheet | Same as 1 | Same | 2026 |
| 5 | Social tool (D) | Blog | 1080x1920 | No source | 2025 to 2026 |
| 6 | Ecommerce tool (E) | Blog | 1080x1920 | No source | 2025 |
| 7 | Video tool (F) | Guide | 1080x1920 | No source | 2026 |
| 8 | AI video tool (G) | Guide | Reel sizes by ratio | No source | 2026 |
| 9 | Screenshot tool (H) | Blog | Size and safe zone | No source | 2026 |

Query: `instagram story size`

| # | Publisher type | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | Photo editor (I) | Blog | 1080x1920, "16:9" in one sentence and 9:16 in the next | Ratio printed wrong once; no source | 2025 |
| 2 | Social tool (J) | Blog | 1080x1920; "each story has a limit of 15 seconds", split in 15-second fragments | Instagram's own Story page says one clip up to 60 seconds | 2024 |
| 3 | Link-in-bio tool (K) | Guide | 1080x1920 | No source | 2025 |
| 4 | Social tool (L) | Blog | 1080x1920, file sizes | Copies ad file limits (30MB, 4GB) onto organic Stories | 2025 |
| 5 | Monitoring tool (M) | Wiki | 1080x1920 | No source | undated |
| 6 | Mirror or scraped page (N) | Copy | Same | Scraped | undated |
| 7 | Studio blog (O) | Blog | 1080x1920 | No source | 2025 |
| 8 | Social tool (P) | Blog | 1080x1920 plus expert tips | No source | 2025 |
| 9 | Social tool (Q) | Blog | 1080x1920 | No source | 2025 |
| 10 | Social tool (R) | Blog | Stories size | No source | 2026 |

Query: `reels safe zone`

| # | Publisher type | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | Marketing agency (S) | Guide | Safe zones across networks | No Meta percentages quoted | 2025 |
| 2 | Ads tool (T) | Blog | Reels safe zone | No source | 2025 |
| 3 | Video tool (U) | Blog | Captions, faces, CTAs | Pixel insets, no source | 2026 |
| 4 | Ads agency (V) | Tag page | Facebook Reels safe zone | Index page | undated |
| 5 | Social tool (W) | Guide | "Leave 420px (about 22%) at the bottom, 100px on the right, 150px at the top" | None of the three figures is on a Meta page; Meta's Reels ads page says 35 percent bottom, 14 percent top | 2026 |
| 6 | Social tool (W, second URL) | Guide | Same family | Same | 2026 |
| 7 | Social tool (W, French copy) | Guide | Same | Same | 2026 |
| 8 | Screenshot tool (H) | Blog | Size and safe zone | No source | 2026 |
| 9 | Creator tool (X) | Checker tool | Overlay checker | Its own insets, no source | 2026 |

Query: `instagram reel length limit`

| # | Publisher type | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | Podcast tool (Y) | Blog | 3 seconds to 3 minutes | Help Center now says 20 minutes recorded | 2025 |
| 2 | Podcast tool (Y, second URL) | Blog | Same | Same | 2025 |
| 3 | AI tool (Z) | Blog | Length | No source | 2025 |
| 4 | Social tool (AA) | Blog | Length | No source | 2025 |
| 5 | Social tool (AA, second URL) | Blog | Same | Same | 2025 |
| 6 | Social tool (AB) | Resource | 3 minutes | No 20-minute or 15-minute split | 2025 |
| 7 | Social tool (AB, second URL) | Resource | Same | Same | 2025 |
| 8 | Streaming tool (AC) | Blog | "Ideal maximum length" | Opinion | 2025 |
| 9 | Scraped page (AD) | Copy | "90 seconds vs 3 minutes vs 15 minutes" | Scraped, 2024 | 2024 |

**The bar:** 1,200 to 2,500 words, one spec table, rarely a second. Zero pages
of 38 cite the Instagram Help Center, the Meta Ads Guide or the Instagram
Platform reference. Zero split organic from ads. Lengths in circulation: 15
seconds (Stories), 60 seconds, 90 seconds, 3 minutes, 15 minutes, 20 minutes.
Safe zones in circulation: 1080x1420, 420/100/150 px, 250 px top and bottom.

**The gap, in one sentence:** nobody quotes Meta, so nobody notices that the
organic and ad specs are different documents with different numbers, that
Instagram prints no pixel size and no safe zone for an organic Reel, and that
the only published safe zone is an ads figure.

## R1 and R5. Claims table

All sources are Meta's own pages (Instagram is a Meta product). "Who paid" is
Meta for every row: it is the platform describing its own product, which is the
evidence standard for a spec, not a market claim. No figure here is a market
statistic, so sample size does not apply (n/a). Every page is undated unless a
date is shown; the reading date is the date.

Short names used below:

- IG-SIZE: Instagram Help Center, "Reel size & aspect ratios on Instagram", https://help.instagram.com/1038071743007909
- IG-RECORD: Instagram Help Center, "Record a reel on Instagram", https://help.instagram.com/2720958398006062
- IG-STORY: Instagram Help Center, "Share a photo or video to your Instagram story" (iPhone app help), https://help.instagram.com/1257341144298972/?cms_platform=iphone-app
- IG-BOOST: Instagram Help Center, "Boost an Instagram Reel", https://help.instagram.com/570215404599013
- IG-TROUBLE: Instagram Help Center, "Troubleshoot boosting content or managing ads on Instagram", https://help.instagram.com/1049406878442523
- IG-PHOTO: Instagram Help Center, "Image resolution of photos you share on Instagram", https://help.instagram.com/1631821640426723
- ADS-RV: Meta Ads Guide, Awareness video ad specs on Instagram Reels, https://www.facebook.com/business/ads-guide/update/video/instagram-reels
- ADS-RI: Meta Ads Guide, Awareness image ad specs on Instagram Reels, https://www.facebook.com/business/ads-guide/update/image/instagram-reels
- ADS-SV: Meta Ads Guide, Awareness video ad specs on Instagram Stories, https://www.facebook.com/business/ads-guide/update/video/instagram-story
- ADS-SI: Meta Ads Guide, Awareness image ad specs on Instagram Stories, https://www.facebook.com/business/ads-guide/update/image/instagram-story
- BHC-SAFE: Meta Business Help Center, "About text overlays and the safe zone for ads in Stories and Reels", https://www.facebook.com/business/help/980593475366490
- BHC-SDES: Meta Business Help Center, "Design requirements for Instagram Stories ads", https://www.facebook.com/business/help/2222978001316177
- BHC-VUP: Meta Business Help Center, "Troubleshoot video ad uploads", https://www.facebook.com/business/help/1596868350601716
- BHC-RATIO: Meta Business Help Center, "Aspect ratios supported by placements in Meta Ads Manager", https://www.facebook.com/business/help/682655495435254
- DEV-MEDIA: Instagram Platform developer reference, "IG User Media", https://developers.facebook.com/docs/instagram-platform/instagram-graph-api/reference/ig-user/media
- DEV-PUB: Instagram Platform developer guide, "Content Publishing", https://developers.facebook.com/docs/instagram-platform/content-publishing/

| Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| Reels upload "with an aspect ratio between 1.91:1 and 9:16" | IG-SIZE | undated, read 2026-10-08 | n/a | Rendered, quoted | Meta | primary |
| Reels "minimum frame rate of 30 FPS" and "minimum resolution of 720 pixels" | IG-SIZE | same | n/a | same | Meta | primary |
| Reel cover "recommended size for cover photos is 420px by 654px (or 1:1.55 ratio)"; "you can't edit your cover photo after you've uploaded it" | IG-SIZE | same | n/a | same | Meta | primary |
| IG-SIZE prints no recommended pixel size for the Reel itself (no 1080x1920) and no safe zone | IG-SIZE | same | n/a | Full text read | Meta | primary, by absence |
| "You can record and edit videos up to 20 minutes with Instagram Reels"; "Reels over 3 minutes won't be recommended to new audiences" | IG-RECORD | same | n/a | same | Meta | primary |
| Reel cover chosen from the clip or uploaded at posting (computer flow) | IG-RECORD | same | n/a | same | Meta | primary |
| Stories: "a video up to 60 seconds long" appears as one clip; longer videos are "broken up into multiple clips"; Stories disappear after 24 hours unless added to highlights | IG-STORY | same | n/a | same | Meta | primary |
| No Instagram Help Center page read prints a Story pixel size or a Story safe zone | IG-STORY, IG-SIZE | same | n/a | Full text read | Meta | primary, by absence |
| Boosting a Reel: "90 seconds or less" and "full-screen (9:16) vertical format"; no licensed music; not published before October 15, 2021; no face or camera effects, GIFs, product tags, interactive stickers, third-party camera filters; Reels already shared to Facebook can't be boosted | IG-BOOST | same | n/a | same | Meta | primary |
| Boost error messages: "Reels containing tappable elements cannot be boosted"; "This video's resolution is too low and can't be used" | IG-TROUBLE | same | n/a | same | Meta | primary |
| Feed photos: kept at original resolution between 320 and 1080 pixels wide when the ratio is 1.91:1 to 3:4; otherwise cropped to a supported ratio; enlarged to 320 or sized down to 1080 wide | IG-PHOTO | same | n/a | same | Meta | primary (feed photos, context only) |
| Reels video ads: MP4 or MOV; 9:16; 1440 x 2560; H.264, square pixels, fixed frame rate, progressive scan, stereo AAC 128kbps+; 0 seconds to 15 minutes; 4GB; minimum width 250 px under 30 s, 500 px at 30 s or longer; primary text 44 characters; captions optional but recommended; sound "optional, but strongly recommended" | ADS-RV | undated, read 2026-10-08 | n/a | same | Meta | primary, Awareness, that placement |
| Reels video ads must not contain Reels published before October 15, 2021, licensed music, face or camera effects, GIFs, product tags, edit lists or special boxes | ADS-RV | same | n/a | same | Meta | primary |
| Reels ads safe zone: "Consider leaving at least 14% of the top, 35% of the bottom, and 6% on each side" free of text, logos or other important elements, so they are not cropped, covered by the profile icon or call to action, "or placed too close to the edges of devices with screens taller than a 9:16 aspect ratio" | ADS-RV | same | n/a | same | Meta | primary |
| Reels image ads: JPG or PNG, 9:16, 1440 x 2560, 30MB, minimum width 500 px, ratio tolerance 1%, primary text 44; same 14/35/6 wording ("roughly") | ADS-RI | same | n/a | same | Meta | primary |
| Stories video ads: MP4, MOV or GIF; 9:16; 1440 x 2560; 1 second to 60 minutes; 4GB; minimum width 250 px; tolerance 1%; primary text 125; same 14/35/6 ("roughly") | ADS-SV | same | n/a | same | Meta | primary |
| Stories video ads under 16 seconds play in full; 16 seconds or longer "may be split into separate Stories cards", one, two or three | ADS-SV | same | n/a | same | Meta | primary |
| Stories image ads: JPG or PNG, 9:16, 1440 x 2560, 30MB, minimum width 500 px, tolerance 1%, primary text 125, same 14/35/6; image ads show "between 5-16 seconds or until the user swipes" | ADS-SI | same | n/a | same | Meta | primary |
| Safe zone article: 9:16 ads in Stories, Reels, Feed and Facebook in-stream reels keep top, bottom and sides free of key elements; 9:16 Instagram Feed video ads follow the Reels and Stories guidance; Ads Manager has a "Safe zone guardrail" (yellow overlay); taller-than-9:16 screens may be zoomed (cropping outside the safe zone) or letterboxed in black; Reels ads with disclaimers leave the bottom 40 percent free. No top or side percentage printed | BHC-SAFE | undated, read 2026-10-08 | n/a | same | Meta | primary, that article only |
| Stories ads design requirements: all feed ratios supported (1.91:1 to 4:5), 9:16 recommended; mp4 or mov, jpg or png; 4GB video, 30MB photo; video maximum 60 minutes; images show 5 seconds by default; recommended resolution 1080 x 1920, minimum 600 x 1067; H.264 or VP8, AAC or Vorbis | BHC-SDES | undated, read 2026-10-08 | n/a | same | Meta | primary; conflicts with ADS-SV on recommended size (see R6) |
| Video ad upload checks: MP4, MOV or GIF recommended, 4GB maximum for all videos; most common rendering failure is size, minimum width 600 pixels; blurry video from aspect ratio, small files or wrong placement | BHC-VUP | undated, read 2026-10-08 | n/a | same | Meta | primary |
| Instagram Stories ad placement accepts 1.91:1, 16:9, 1:1, 4:5 and 9:16 (9:16 recommended); Instagram Reels adds 2:3 (9:16 recommended) | BHC-RATIO | undated, read 2026-10-08 | n/a | same | Meta | primary |
| API Reels: MOV or MP4, no edit lists, moov atom at the front; HEVC or H264; 23 to 60 FPS; maximum 1920 columns; ratio 0.01:1 to 10:1, 9:16 recommended; 25Mbps maximum; 3 seconds to 15 minutes; 300MB | DEV-MEDIA | page carries change notes dated 2025-03-24 and 2025-07-09, read 2026-10-08 | n/a | same | Meta | primary, API route only |
| API Reel cover: JPEG, 8MB, 9:16 recommended; a non-9:16 image is cropped to its "middle most 9:16 rectangle"; a reel shared to feed uses the "middle most 1:1 square" | DEV-MEDIA | same | n/a | same | Meta | primary, API route only |
| API Stories: image JPEG, 8MB, 9:16 recommended; video 3 to 60 seconds, 100MB, same codec rules; Stories expire after 24 hours; link, poll and location stickers cannot be published through the API | DEV-MEDIA | same | n/a | same | Meta | primary, API route only |
| API caption: up to 2,200 characters, 30 hashtags, 20 @ tags | DEV-MEDIA | same | n/a | same | Meta | primary |
| API: alt text added 2025-03-24 for image posts, "Reels and stories are not supported"; user tags supported on image and video stories from 2025-07-09 | DEV-MEDIA, DEV-PUB | dated on the page | n/a | same | Meta | primary |
| hubStudio Instagram module: professional account (Business or Creator) connected on My Connections; shapes One image, Carousel, Reel; pictures turned into JPEG on the way out; a Reel is an MP4 or MOV clip of 3 seconds to 15 minutes; Shape Feed post or Story for pictures, a video always goes out as a Reel; a Story clip 60 seconds at most; Publish now or Schedule; up to 20 accounts; queue checked every five minutes; three attempts on temporary errors; publishing on Instagram costs nothing | `src/content/help/instagram.md` (updated 2026-10-08) | 2026-10-08 | n/a | Repo help article | first party | first-party product fact |
| hubStudio Video editor: Social panel, Instagram placements Reel (9:16, 1080 x 1920, Best), Story (9:16), Feed portrait (4:5), Square (1:1); Crop to fill or Fit it whole; Show what the network covers draws the covered zones in red with a dashed line around the safe area and the Profile grid crop; Checks with fix buttons (Move the captions into the safe area, Cut it at, Write it in 1080p); Cover panel (Use the frame under the playhead, Download it (JPG)); Save and use it in the post; editing free, fast captions billed | `src/content/help/assets-library.md` | 2026-10-08 | n/a | Repo help article | first party | first-party product fact |
| Derived: 14/35/6 on 1080 x 1920 leaves x 64.8 to 1015.2, y 268.8 to 1248 (950.4 x 979.2); on 1440 x 2560 x 86.4 to 1353.6, y 358.4 to 1664 (1267.2 x 1305.6); the 40 percent disclaimer rule moves the bottom edge to y 1152 on 1920 and y 1536 on 2560 | Arithmetic on ADS-RV and BHC-SAFE | 2026-10-08 | n/a | Percent times canvas | n/a | derived, labeled as arithmetic |
| Derived: the 420 x 654 cover is 1:1.557, shorter than 9:16 (1:1.778) | Arithmetic on IG-SIZE and DEV-MEDIA | 2026-10-08 | n/a | Division | n/a | derived |

## R6. Conflicts, published as ranges

| Point | Sources | Conflict | What the page does |
|---|---|---|---|
| Reel length | IG-RECORD 20 minutes recorded; DEV-MEDIA 15 minutes through the API; ADS-RV 15 minutes for ads; IG-BOOST 90 seconds to boost; IG-RECORD 3 minutes for recommendation to new audiences | Five numbers, five surfaces | A length row per surface, never one "limit" |
| Recommended Stories ad size | ADS-SV and ADS-SI 1440 x 2560; BHC-SDES 1080 x 1920 (minimum 600 x 1067) | Two Meta pages, two recommendations, same 9:16 | Print both, attributed; note both are 9:16 so either fills the frame |
| Reel cover | IG-SIZE 420 x 654 (1:1.55); DEV-MEDIA 9:16 recommended, center 9:16 crop, center 1:1 for feed | Two shapes | Print both; derive that a 9:16 cover with the subject in the middle survives both crops |
| Stories video length | IG-STORY one clip up to 60 seconds, longer split; DEV-MEDIA 3 to 60 seconds through the API; ADS-SV 1 second to 60 minutes for ads, cards split at 16 seconds | Organic, API and ads differ | Separate rows |
| Minimum width for ads | ADS-RV 250 or 500 px; BHC-VUP 600 px "minimum width" for rendering; BHC-SDES 600 x 1067 minimum | Different pages, different thresholds | Print the Ads Guide figure for the placement and the 600 px rendering advice as Meta's troubleshooting advice |

## Cleared for use

> Instagram's own help page on Reel size accepts any aspect ratio between 1.91:1
> and 9:16, asks for at least 30 frames per second and 720 pixels, and prints no
> recommended pixel size.
> Source: Instagram Help Center, "Reel size & aspect ratios on Instagram," read October 8, 2026. https://help.instagram.com/1038071743007909

> Reels can be recorded and edited up to 20 minutes, and Reels over 3 minutes are
> not recommended to new audiences.
> Source: Instagram Help Center, "Record a reel on Instagram," read October 8, 2026. https://help.instagram.com/2720958398006062

> A Story video up to 60 seconds plays as one clip; anything longer is broken up
> into several clips.
> Source: Instagram Help Center, "Share a photo or video to your Instagram story," iPhone app help, read October 8, 2026. https://help.instagram.com/1257341144298972

> To be boosted, a Reel must run 90 seconds or less in a full-screen 9:16 frame,
> with no licensed music.
> Source: Instagram Help Center, "Boost an Instagram Reel," read October 8, 2026. https://help.instagram.com/570215404599013

> Meta's ads guide sets Reels ads at 9:16 and 1440 by 2560 pixels, 0 seconds to
> 15 minutes, up to 4GB, and asks advertisers to consider leaving at least 14
> percent of the top, 35 percent of the bottom and 6 percent of each side free of
> text, logos and other important elements.
> Source: Meta Ads Guide, Awareness video ad specs on Instagram Reels, read October 8, 2026. https://www.facebook.com/business/ads-guide/update/video/instagram-reels

> If a Reels ad carries a disclaimer, leave the bottom 40 percent free; on screens
> taller than 9:16, Meta may zoom the creative and crop outside the safe zone.
> Source: Meta Business Help Center, "About text overlays and the safe zone for ads in Stories and Reels," read October 8, 2026. https://www.facebook.com/business/help/980593475366490

> Through the API, a Reel runs 3 seconds to 15 minutes and 300MB at most, a Story
> video 3 to 60 seconds and 100MB, and a cover that is not 9:16 is cropped to its
> middle 9:16 rectangle, or its middle square when the Reel is shared to feed.
> Source: Instagram Platform developer reference, "IG User Media," read October 8, 2026. https://developers.facebook.com/docs/instagram-platform/instagram-graph-api/reference/ig-user/media

## Do not publish

| Claim | Where it came from | Why it was cut |
|---|---|---|
| 1080 x 1920 as Instagram's published organic Reel or Story size | SERP pages, every one | No Instagram page prints it. Meta prints 1440 x 2560 for Reels and Stories ads and 1080 x 1920 for Stories ads (BHC-SDES) only. The page says so instead |
| Any pixel safe zone for organic Reels (1080 x 1420; 420/100/150 px; 250 px top and bottom) | SERP pages | On no Meta page; Meta's only figures are ad percentages |
| "Each story has a limit of 15 seconds" | SERP page | Contradicted by IG-STORY |
| Reels limited to 90 seconds or 3 minutes as an upload limit | SERP pages | 90 seconds is the boost limit; 3 minutes is the recommendation threshold; the recording limit is 20 minutes |
| Profile grid crop ratio (3:4) for Reels covers | General knowledge, SERP | No Instagram or Meta page read on 2026-10-08 prints a profile grid ratio for Reels; DEV-MEDIA prints only the 1:1 feed crop. Cut |
| API publishing rate limit (100 posts in 24 hours against 50 in the carousel section) | DEV-PUB | The same guide prints two figures; out of scope for a spec page; not quoted |
| Reels frame rate or bitrate as an organic upload rule | DEV-MEDIA | Those are API rules; the Help Center gives only a 30 FPS minimum |
| Help Center URLs 270963803047681, 261882563951635, 569619569727885 | Search results titled "60-second maximum length", "How do I post a video?", "How do I record a video with multiple clips?" | Each served the "Record a reel" body under a generic title on 2026-10-08; the titles in search are stale. Not cited |
| Facebook Reels and Facebook Stories figures | Ledger, brief 32 | Out of scope for an Instagram page |
| "Upload at highest quality" toggle as a fix for blur | IG-SIZE | True, but a setting of the phone app, not a spec; kept out to stay on specs |

## Screenshot inventory

Text captures of rendered pages (no image screenshots: the text is the evidence
and the page is a spec page under the primary rule, not deviation 7).

| File | What it shows | Captured | Source surface |
|---|---|---|---|
| ig-help-reel-size-aspect-check1-2026-10-08.txt | Reel ratio, 30 FPS, 720 px, cover 420 x 654 | 2026-10-08 | Instagram Help Center |
| ig-help-record-a-reel-check1-2026-10-08.txt | 20 minutes, 3-minute recommendation note, cover at posting | 2026-10-08 | Instagram Help Center |
| ig-help-share-to-story-iphone-check1-2026-10-08.txt | Story 60-second clip, split above | 2026-10-08 | Instagram Help Center |
| ig-help-share-to-story-android-check1-2026-10-08.txt | Same on Android help | 2026-10-08 | Instagram Help Center |
| ig-help-boost-a-reel-check1-2026-10-08.txt | Boost eligibility | 2026-10-08 | Instagram Help Center |
| ig-help-troubleshoot-boost-check1-2026-10-08.txt | Boost error messages | 2026-10-08 | Instagram Help Center |
| ig-help-image-resolution-check1-2026-10-08.txt | Photo width and ratio handling | 2026-10-08 | Instagram Help Center |
| meta-ads-video-instagram-reels-check1-2026-10-08.txt | Reels video ad specs, 14/35/6 | 2026-10-08 | Meta Ads Guide |
| meta-ads-image-instagram-reels-check1-2026-10-08.txt | Reels image ad specs | 2026-10-08 | Meta Ads Guide |
| meta-ads-video-instagram-story-check1-2026-10-08.txt | Stories video ad specs, card split | 2026-10-08 | Meta Ads Guide |
| meta-ads-image-instagram-story-check1-2026-10-08.txt | Stories image ad specs | 2026-10-08 | Meta Ads Guide |
| meta-help-safe-zone-check1-2026-10-08.txt | Safe zone article, 40 percent disclaimer rule | 2026-10-08 | Meta Business Help Center |
| meta-help-ig-stories-design-check1-2026-10-08.txt | Stories ads design requirements | 2026-10-08 | Meta Business Help Center |
| meta-help-troubleshoot-video-uploads-check1-2026-10-08.txt | Upload and blur checks | 2026-10-08 | Meta Business Help Center |
| meta-help-aspect-ratios-placements-check1-2026-10-08.txt | Ratios by placement | 2026-10-08 | Meta Business Help Center |
| meta-dev-ig-user-media-check1-2026-10-08.txt | API Reels, Stories, cover, caption specs | 2026-10-08 | Meta for Developers |
| meta-dev-content-publishing-check1-2026-10-08.txt | API publishing guide | 2026-10-08 | Meta for Developers |

## R8. Reconciliation (filled after drafting)

Check 2 ran on 2026-10-08 in iteration 8: the 13 URLs the draft cites were
rendered again (files suffixed `check2-2026-10-08`) and 57 exact strings behind
the draft's figures were searched in them. All 57 were found. No page moved
between check 1 and check 2. IG-PHOTO, BHC-RATIO and DEV-PUB were read at check
1 and are not cited on the page, so they were not re-rendered; the two dated
API notes the changelog uses (2025-03-24 and 2025-07-09) are also printed on
DEV-MEDIA, which was.

Capture hygiene: five capture files carried the U+2014 dash in Meta's own page
text; each was replaced with `--` and a header note says so, under the repo's
ban on that character. No quoted wording on the page depends on it.

| Number or claim in the draft | Claims-table row | Status |
|---|---|---|
| Reels 1.91:1 to 9:16, 720 px, 30 FPS, no pixel size printed | IG-SIZE rows | matches |
| 20 minutes recorded; over 3 minutes not recommended to new audiences | IG-RECORD | matches |
| Story one clip up to 60 seconds, longer split | IG-STORY | matches |
| Boost: 90 seconds or less, 9:16, licensed music, shared to Facebook, effects, GIFs, product tags, tappable elements, resolution too low | IG-BOOST, IG-TROUBLE | matches |
| API Reel 0.01:1 to 10:1, 1,920 px wide, 300MB, 3 s to 15 min, MP4 or MOV, H.264 or HEVC, 23 to 60 FPS | DEV-MEDIA | matches |
| API Story 3 to 60 s, 100MB; image JPEG 8MB; 9:16 advised | DEV-MEDIA | matches |
| Cover 420 x 654, 1:1.55, not editable; API JPEG 8MB, middle 9:16, middle square for feed | IG-SIZE, DEV-MEDIA | matches |
| Reels ads 9:16, 1440 x 2560, 0 s to 15 min, 4GB, primary text 44; image 30MB | ADS-RV, ADS-RI | matches |
| Stories ads 1440 x 2560, 1 s to 60 min, 4GB, 125; cards one to three from 16 s; image 30MB, 5 to 16 s | ADS-SV, ADS-SI | matches |
| Stories ads 1080 x 1920 recommended, 600 x 1067 minimum | BHC-SDES | matches |
| 14 / 35 / 6 percent | ADS-RV, ADS-SV, ADS-SI | matches |
| 40 percent bottom with a disclaimer; taller screens zoom or letterbox | BHC-SAFE | matches |
| Pixel table 268.8 / 672 / 64.8 / 950.4 x 979.2; 358.4 / 896 / 86.4 / 1267.2 x 1305.6; 768 and 883.2 with a disclaimer; FAQ rounding 269 / 672 / 65 | Derived row | arithmetic re-run, matches |
| Caption 2,200 characters, 30 hashtags | DEV-MEDIA | matches |
| Music allowed in Reels (organic) | IG-RECORD ("add effects and music to your reel") | matches |
| October 15, 2021 cutoff | ADS-RV, IG-BOOST | matches |
| 600 px minimum width for ad rendering; 4GB; edit lists | BHC-VUP, ADS-RV | matches |
| Changelog: 2025-07-09 user tags on Stories; 2025-03-24 alt text, Reels and Stories not supported | DEV-MEDIA | matches |
| Cover advice: subject in the middle third survives both crops | Derived here: the feed's center square on 1080 x 1920 spans y 420 to 1500 and the middle third y 640 to 1280; horizontally the middle third x 360 to 720 sits inside both | derived, labeled as advice |
| hubStudio: professional account, My Connections, One image / Carousel / Reel, Video editor Reel 9:16 1080 x 1920, Story / Feed portrait / Square, Crop to fill / Fit it whole, red zones and dashed safe area and profile grid, Checks and Move the captions into the safe area, Cover panel and JPG, Save and use it in the post, editing free except fast captions, Feed post or Story for pictures, video as Reel 3 s to 15 min, up to 20 accounts, publishing free | `src/content/help/instagram.md`, `assets-library.md` | matches the help articles |
| "The next scheduled review is January 2027" | Watch row due 2027-01-08 (run log) | schedule, not a figure |

Removed during drafting because they were not in the claims table: none were
written. Cut at the outline stage and kept out: the profile grid ratio for
Reels covers, the API publishing rate limit, every SERP pixel safe zone, and
the "upload at highest quality" setting (see "Do not publish").

H1 changed from the brief's working H1 ("Instagram Reels and Stories: sizes,
lengths and safe zones") to "Instagram Reel and Story size in 2026: lengths,
limits and safe zones" so the H1 carries the target query in the buyer's
words, as SPEC.md requires. The brief module's `h1` field was amended to match
in the same run.
