# Research: linkedin-post-specs

| Field | Value |
|---|---|
| Brief | 63 (wave two, `editorial/scripts/wave2/63-linkedin-post-specs.mjs`) |
| Target query | linkedin image size 2026 |
| Gap statement (one sentence) | The ranking size guides cite no LinkedIn page, blend ad specs into organic posts, and split three ways on the company cover because LinkedIn changed it to 1512 x 256 about two months ago; nobody prints the source and the page age per row. |
| Research time spent | about 2 hours (fetching, capture, extraction, cross-reading two LinkedIn surfaces) |
| Written | 2026-10-08 |

Western platform: LinkedIn's own Help Center and Marketing Solutions pages are
readable without a login, so every number below is primary. No deviation 7
disclaimer applies (`editorial/CLAUDE.md`, Wave two). R4 (Chinese-language web
first) does not apply: LinkedIn is not a China platform, and its own pages are
the primary source.

LinkedIn Help Center pages show a relative age ("Last updated: 2 months ago")
and no absolute date in the served HTML (checked: no datetime attribute, no
JSON date in the capture). Each row therefore records the relative age as
read on 2026-10-08, and the page carries it as "updated about N ago, read
October 8, 2026".

## R2. SERP map

Search was run 2026-10-08 (US results). Ages are as shown on each page or in
its title.

Query: linkedin image size 2026

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | design tool blog | size guide with templates | profile, cover, post sizes | cites no LinkedIn page; company cover 1128 x 191; video "up to 5MB", MOV and AVI listed | May 2024 |
| 2 | agency blog (DE) | size guide | profile, banner, post | no source per row | 2026 in title |
| 3 | scheduler blog | size guide | post and page sizes | blends ad specs | undated |
| 4 | AI tool blog | profile photo only | profile photo crop | posts, ads, documents | 2026 in title |
| 5 | outreach tool blog | photo size | profile and banner | posts, video, documents | 2026 in title |
| 6 | scheduler blog | post dimensions | post sizes | source, documents | 2026 in title |
| 7 | preview tool blog | cheat sheet | image sizes | video, documents, sources | 2026 in title |
| 8 | job tool blog | size guide | profile, banner, posts | company page, ads | 2026 in title |
| 9 | AI tool blog | image sizes | image sizes | sources | undated |

Query: linkedin video specs

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | video tool blog | spec guide | length, size, ratios | separates nothing between organic and ads | undated |
| 2 | listening tool blog | spec guide | video specs | page ages, the 10 vs 15 minute conflict | undated |
| 3 | video editor blog | spec guide | formats, ratios | sources | undated |
| 4 | podcast tool blog | spec guide | formats, ratios | sources | undated |
| 5 | video editor blog | spec guide | specs | sources | undated |
| 6 | video agency blog | ad specs | ad specs 2026 | organic | 2026 in title |
| 7 | video agency guide | spec guide | specs | sources | undated |
| 8 | async video blog | spec guide | specs | sources | undated |
| 9 | agency blog | spec guide | specs | sources | 2025 in title |

Query: linkedin document post size carousel pdf

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | carousel tool blog | PDF guide | sizes, 100 MB, 300 pages | 2024, no ad specs | 2024 in title |
| 2 | deck tool blog | carousel size | 1080 x 1350 or 1080 x 1080 | LinkedIn gives no pixel size; never says so | undated |
| 3 | newsletter | how-to | carousel use | specs | undated |
| 4 | scheduler blog | carousel size | sizes | sources | undated |
| 5 | scheduler blog | PDF carousel guide | how to | sources | undated |
| 6 | scheduler blog | post size | sizes | sources | undated |
| 7 | AI tool page | carousel size | sizes | sources | undated |
| 8 | design blog | carousel | sizes | sources | undated |
| 9 | post tool blog | PDF specs | sizes | sources | 2026 in title |

Query: linkedin company page banner size

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | consultant blog | banner size | banner | the 2026 change | undated |
| 2 | video editor resource | banner size | banner | the 2026 change | undated |
| 3 | AI tool article | banner size | banner | the 2026 change | Nov 2025 |
| 4 | outreach tool blog | banner size | banner | the 2026 change | undated |
| 5 | photo editor blog | banner size | banner | the 2026 change | 2025 in title |
| 6 | sales tool blog | banner size | 4200 x 700, 3 MB | the help page now says 1512 x 256 | 2026 in title |
| 7 | blogging tool blog | banner size | 1512 x 256 | ads, posts | updated Aug 22, 2026 |
| 8 | proxy copy of 4 | banner size | banner | | undated |
| 9 | scheduler blog | cover size | cover | | undated |
| 10 | design tool page | banner size | banner | | undated |

Ads query on linkedin.com (search scoped to LinkedIn's own domains): the
Help Center (lms) spec articles and business.linkedin.com spec pages rank for
their own format names, which confirms both surfaces are current.

**The bar:** 1,200 to 2,500 words, three to six tables, almost no citations.
**The gap, in one sentence:** No ranking page cites LinkedIn's own pages or
dates its rows, the organic and paid specs are blended, and the company cover
is reported three different ways because the help page moved to 1512 x 256
about two months before this read.

## R1 and R5. Claims table

All captures are in `research/linkedin-post-specs/` (HTML as served, fetched
2026-10-08 unauthenticated with a desktop browser user agent). Who paid: none
of these are paid studies; they are the platform's own documentation. Sample
size and method: not applicable (platform rules, read directly).

| Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| Post text limit 3,000 characters; longer goes to an article | linkedin.com/help/linkedin/answer/a528176 | updated about 3 weeks ago, read 2026-10-08 | n/a | read directly | n/a | primary |
| Photo upload limit 5 MB; at least 552 x 276, 1080 wide recommended; ratio 3:1 to 4:5, taller is centered and cropped; can't resize or edit after posting; small low-res photos may look low quality | linkedin.com/help/linkedin/answer/a527229 | about 2 years ago | n/a | read directly | n/a | primary |
| Up to 20 photos per multi-photo post; container max 4:5 (e.g. 640 x 800); layout set by first image; two images side by side; landscape or shorter than 4:3 first image sits on top; portrait or square first image in left column; bottom row cropped if over 4:5 | same a527229 | about 2 years ago | n/a | read directly | n/a | primary |
| A post carries a URL link or an image, not both; link preview image is taken from the site | same a527229 | about 2 years ago | n/a | read directly | n/a | primary |
| Image types GIF, HEIF/HEIC (one platform column only), JPEG, PNG, WEBP; max image resolution 36 megapixels; GIF limit 500 frames or 36,152,320 pixels; video types MP4, MOV (all three platforms), WEBM, MKV | linkedin.com/help/linkedin/answer/a564109 | about 2 weeks ago | n/a | read directly | n/a | primary |
| Video: 75 KB to 5 GB; 3 seconds (desktop) or 2 seconds (mobile app) to 15 minutes; 256x144 to 4096x2304; aspect 1:2.4 to 2.4:1; 10 to 60 fps; 192 Kbps to 30 Mbps; keep edges free of text and logos (safe zone) | linkedin.com/help/linkedin/answer/a548372 | about 2 years ago | n/a | read directly | n/a | primary |
| ProRes may upload but will not process; iOS upload stalls if the app goes to background; iCloud videos not supported on the mobile app | same a548372 | about 2 years ago | n/a | read directly | n/a | primary |
| Page and Career Page video: max 10 minutes; "no longer support AVI, QuickTime, or MOV" | linkedin.com/help/linkedin/answer/a1311816 | about 4 years ago | n/a | read directly | n/a | primary, conflicts with a548372 and a564109, which are newer |
| Documents: PPT, PPTX, DOC, DOCX, PDF; max 100 MB and 300 pages; one document per post; title required; viewers can download as PDF; document can't be edited after posting; flatten layered PDFs; same page size on every page; videos and animations display as static | linkedin.com/help/linkedin/answer/a518909 and a523054 | about 3 years ago | n/a | read directly | n/a | primary |
| Word limit one million (documents) | a564109 and a493903 | 2 weeks / 11 months ago | n/a | read directly | n/a | primary |
| Page logo min 268 x 268, rec 400 x 400; cover 1512 x 256 (min and rec); Life main 1128 x 376; custom modules 502 x 282; company photos min 264 x 176, rec 900 x 600; PNG or JPEG, max 3 MB | linkedin.com/help/linkedin/answer/a563309 | about 2 months ago | n/a | read directly | n/a | primary |
| Cover may be trimmed; keep key details away from edges, especially lower right; logo shown on light and dark; transparent logo shown on white; Page post with URL: custom image 1.91:1 (1200 x 627), wider than 200 px or it becomes a left thumbnail; image-only posts enlarged to fit feed; link images not cropped on mobile, other ratios padded white | same a563309 | about 2 months ago | n/a | read directly | n/a | primary |
| Profile cover 1584 x 396 recommended, JPG or PNG, under 8 MB | linkedin.com/help/linkedin/answer/a568217 | about 7 months ago | n/a | read directly | n/a | primary |
| Profile photo 400 x 400 to 7680 x 4320, max 8 MB, PNG or JPG, no GIF | linkedin.com/help/linkedin/answer/a549049 | about 2 years ago | n/a | read directly | n/a | primary |
| Single image ads: JPG, PNG or GIF (animated 250 frames or fewer); 5 MB; 1.91:1 rec 1200 x 628 (min 640 x 360, max 7680 x 4320); 1:1 rec 1200 x 1200 (360 to 4320); 4:5 rec 720 x 900 (min 360 x 640, max 2430 x 4320); under 401 px wide shows as thumbnail; intro text 150 to avoid truncation, 3,000 max; headline 70, 200 max; vertical paid assets serve on mobile only; square and vertical images may be cropped when ads are shared organically | linkedin.com/help/lms/answer/a426534 | about 2 months ago | n/a | read directly | n/a | primary; business.linkedin.com single image spec page agrees on file type, size, ratios and ranges, adds "vertical images do not deliver to desktop" |
| Video ads: 3 seconds to 30 minutes, 15 to 30 seconds recommended for all placements; 75 KB to 500 MB; MP4; H.264 or VP8; under 30 fps; AAC or MPEG4 audio under 64 kHz; 16:9 1920 x 1080 (min 640 x 360), 1:1 360 to 1920, 4:5 recommended 720 x 900 (360 x 450 to 1080 x 1350), 9:16 720 x 1280 (360 x 640 to 1080 x 1920); SRT captions; thumbnail JPG or PNG max 2 MB matching the video; desktop upload only; ProRes not supported; 25 uploads per 24 hours; under 30 seconds loops | linkedin.com/help/lms/answer/a424737 | about 2 months ago | n/a | read directly | n/a | primary; business.linkedin.com video spec page agrees on size, length, ranges; it says "recommended frame rate: 30 frames per second" where the help page says under 30 fps (conflict, both printed) |
| Document ads: 100 MB and 300 pages; up to five documents selectable; one million words; PPT, PPTX, DOC, DOCX, PDF; lead gen objective PDF only; animations static; hyperlinks clickable only after download; flatten layers; same page size; intro 150 / 3,000; headline 70 / 200, prefilled with file name | linkedin.com/help/lms/answer/a493903 | about 11 months ago | n/a | read directly | n/a | primary; business.linkedin.com document spec page agrees and recommends under 10 pages |
| Document ad best practices: PDF for best quality; standard layouts (Letter, A4 and others); links and CTAs not clickable in the player; avoid multi-column and small fonts | linkedin.com/help/lms/answer/a726534 | about 3 years ago | n/a | read directly | n/a | primary |
| Carousel ads: 2 to 10 cards; 10 MB per card; max 4320 x 4320; rec 1080 x 1080, 1:1; JPG, PNG, non-animated GIF | linkedin.com/help/lms/answer/a427022 | about 11 months ago | n/a | read directly | n/a | primary |
| hubStudio LinkedIn: profile and any company page LinkedIn lists you as admin of; Format Text only, + Image, + Carousel; carousel 2 to 8 slides; no video from hubStudio yet; JPG, PNG, GIF, not WebP, up to 10 MB each (hubStudio route); Draft with AI or Write it myself; LinkedIn post format skill; publish now or schedule, up to 20 accounts; queue checked every five minutes; three attempts on temporary errors; Image editor Social panel presets Post portrait 1080 x 1350 (Best), square, landscape, Profile banner, Page cover, Profile photo; connection lasts 60 days; Publish manually opens LinkedIn's composer | src/content/help/linkedin.md, account-and-sign-in.md, assets-library.md; hubstudio-positioning.md | help updated 2026-10-08 | n/a | first-party product documentation | n/a | primary (first-party) |

## Cleared for use

> LinkedIn's photo help says an uploaded photo can range from 3:1 to 4:5,
> width to height, and that a taller one "will be centered and cropped to fit
> the max ratio."
> Source: LinkedIn Help, "Share photos on LinkedIn," updated about two years
> before it was read on October 8, 2026, read directly.

> LinkedIn's Page image help lists the company cover at 1512 by 256 pixels as
> both the minimum and the recommended size, PNG or JPEG, up to 3MB.
> Source: LinkedIn Help, "Image specifications for your LinkedIn Pages and
> Career Pages," updated about two months before October 8, 2026, read
> directly.

> Two LinkedIn help pages disagree on video length and on MOV. The Page video
> article, updated about four years ago, says 10 minutes and no MOV; the
> troubleshooting article (about two years) says 15 minutes, and the file
> types article (about two weeks) lists MOV on desktop, iOS and Android.
> Source: LinkedIn Help articles a1311816, a548372 and a564109, read October
> 8, 2026.

Other rows as in the claims table, attribution "LinkedIn Help, <title>,
updated about N before October 8, 2026" or "LinkedIn Marketing Solutions help,
<title>".

## Do not publish

| Claim | Where seen | Why it does not clear |
|---|---|---|
| Company cover 4200 x 700 | a 2026 size guide, search snippet | Not on LinkedIn's current help page (1512 x 256). May have been an older help value; no LinkedIn page read today carries it |
| Company cover 1128 x 191 | 2024 size guide | Not on LinkedIn's current help page. 1128 x 376 is the Life tab main image, a different slot |
| About 200 characters show before "see more" | search snippet of a member post | Not on a LinkedIn help page. Cut |
| Document or carousel pixel size 1080 x 1350, 1080 x 1080, 816 x 1056 | size guides | LinkedIn publishes page layouts in inches (document ads best practices), not a pixel size for documents. Print the layouts and the same-size rule instead |
| "Over 80% view on mobile" | video tool blog | No method, not LinkedIn. Cut |
| Vertical video earns more organic reach | video tool blog | No method. Cut |
| Organic video 15 minutes desktop, 10 mobile | search snippet | The help pages read say 15 (troubleshooting) and 10 (Page video). No page read splits by device for length. Print the conflict only |
| Organic video max 5 MB | 2024 size guide | Wrong by three orders of magnitude against a548372 (5 GB) |

## Screenshot inventory

| File | What it shows | Captured | Source surface |
|---|---|---|---|
| a528176.html | Post and share updates (3,000 characters) | 2026-10-08 | LinkedIn Help |
| a527229.html | Share photos on LinkedIn | 2026-10-08 | LinkedIn Help |
| a564109.html | Media file types supported | 2026-10-08 | LinkedIn Help |
| a548372.html | Video sharing troubleshooting | 2026-10-08 | LinkedIn Help |
| a1311816.html | Video specs for Pages and Career Pages | 2026-10-08 | LinkedIn Help |
| a518909.html | Upload and share documents | 2026-10-08 | LinkedIn Help |
| a523054.html | Document uploads FAQ | 2026-10-08 | LinkedIn Help |
| a563309.html | Image specs for Pages and Career Pages | 2026-10-08 | LinkedIn Help |
| a568217.html | Profile cover image | 2026-10-08 | LinkedIn Help |
| a549049.html | Photo won't upload to your profile | 2026-10-08 | LinkedIn Help |
| lms-a426534.html | Single image ads specs | 2026-10-08 | LinkedIn Marketing Solutions help |
| lms-a424737.html | Video ads specs | 2026-10-08 | LinkedIn Marketing Solutions help |
| lms-a493903.html | Document ads specs | 2026-10-08 | LinkedIn Marketing Solutions help |
| lms-a726534.html | Document ads best practices | 2026-10-08 | LinkedIn Marketing Solutions help |
| lms-a427022.html | Carousel ads specs | 2026-10-08 | LinkedIn Marketing Solutions help |
| lms-a422738.html | Sponsored Content specs index | 2026-10-08 | LinkedIn Marketing Solutions help |
| biz-*.html | business.linkedin.com spec pages for single image, video, document ads | 2026-10-08 | LinkedIn Marketing Solutions |

These are saved HTML captures, not annotated screenshots; the pages are
public and readable, which is what makes them primary for a Western spec page.

## R8. Reconciliation (filled after drafting)

Check 2 ran 2026-10-08 in iteration 8: every cited URL re-fetched
unauthenticated and searched for the exact strings the draft relies on. All
matched, and every "Last updated" age read the same as at check 1 (3 weeks, 2
years, 2 weeks, 2 years, 4 years, 3 years, 3 years, 2 months, 7 months, 2
years, 2 months, 2 months, 11 months, 3 years, 11 months). One quote was
corrected: the ProRes line reads "but it will not be able to process," not
"but it will not process"; the draft now quotes it verbatim.

Every number in the draft, against the claims table:

| Draft figure | Claims row |
|---|---|
| 3,000 characters | a528176 |
| 5MB, 552 x 276, 1080 wide, 3:1 to 4:5, 20 photos, 640 x 800, centered and cropped | a527229 |
| GIF JPEG PNG WEBP, 36 megapixels, 500 frames, MOV on three platforms, WEBM and MKV on fewer | a564109 |
| 75KB to 5GB, 3 s and 2 s to 15 minutes, 256 x 144 to 4096 x 2304, 1:2.4 to 2.4:1, 10 to 60 fps, 192Kbps to 30Mbps, ProRes, iCloud, iOS background | a548372 |
| 10 minutes and the no-MOV line | a1311816 |
| PDF PPT PPTX DOC DOCX, 100MB, 300 pages, one per post, title, flatten, same size, static animations, no edit after posting | a518909, a523054 |
| 1512 x 256, 268 and 400, 1128 x 376, 502 x 282, 264 x 176 and 900 x 600, 1.91:1 at 1200 x 627, 200 px, 3MB, lower right, white padding, transparent on white, Life tab needs Career Pages | a563309 |
| 1584 x 396, 8MB | a568217 |
| 400 x 400 to 7680 x 4320, 8MB, no GIF | a549049 |
| Single image ads: 250 frames, 5MB, 1200 x 628, 1200 x 1200, 720 x 900, 401 px, mobile-only vertical, organic crop, 150 and 70 and 200 | a426534 |
| Video ads: 3 s to 30 min, 15 to 30 s, 75KB to 500MB, H.264 or VP8, 1920 x 1080, 1920 x 1920, 720 x 900, 720 x 1280, 25 in 24 hours, desktop only, ProRes | a424737 |
| Document ads: 100MB, 300 pages, 1 million words, PDF only for lead gen, links after download, 150, 70, 200 | a493903 |
| Letter, A4, Legal | a726534 |
| Under 10 pages | business.linkedin.com document ads spec page |
| Carousel ads: 2 to 10 cards, 10MB, 4320 x 4320, 1080 x 1080 | a427022 |
| Twice as long (30 against 15 minutes), a tenth the weight (500MB against 5GB) | arithmetic on a424737 and a548372 |
| hubStudio: 2 to 8 slides, 20 accounts, five minutes, three attempts, 60 days, JPG PNG GIF not WebP up to 10MB, 1080 x 1350 Best, Page cover preset | src/content/help/linkedin.md, account-and-sign-in.md, assets-library.md |

Nothing in the draft lacks a row. Cut before writing (see Do not publish):
the "about 200 characters before see more" figure, any pixel size for
documents, the mobile audience share, and the vertical-video reach claim.
The business.linkedin.com "recommended frame rate 30 fps" line, which
conflicts with the help article's "less than 30 FPS," was left off the page
rather than printed, because the frame-rate row is not needed to build an ad
that passes: export below 30 fps and the stricter help article is met.
