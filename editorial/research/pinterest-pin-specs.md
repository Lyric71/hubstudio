# Research: pinterest-pin-specs

| Field | Value |
|---|---|
| Brief | 73 (wave two, `editorial/scripts/wave2/73-pinterest-pin-specs.mjs`) |
| Target query | pinterest pin size |
| Gap statement (one sentence) | The ranking pages are third-party size sheets that print a 1000 x 2100 "long pin", a 1000 x 3000 "infographic pin" and a 600 x 900 minimum that no Pinterest page publishes, still list Idea Pins and Story Pins as current formats, and never set Pinterest's own pages against each other, though those pages disagree on the description limit (800 or 500 characters), the scheduling window (30 days or two weeks) and the ideal video length (6 to 15, 15 to 60 or 45 to 90 seconds). |
| Research time spent | about 45 minutes active (five SERP phrasings by a research subagent, 12 third-party pages opened; 12 Pinterest pages captured from four Pinterest surfaces, the help center's sitemap and topic pages walked, 50 candidate help URLs probed; hubStudio help cross-check) |
| Written | 2026-10-15 |

Western platform: Pinterest's Help Center (help.pinterest.com, including its
Business section), Pinterest Business (business.pinterest.com), Pinterest
Create, its creator site (create.pinterest.com), and Pinterest's newsroom
archive are Pinterest's own pages and readable without a login, so every
number below is primary. No deviation 7 disclaimer applies
(`editorial/CLAUDE.md`, Wave two). R4 (Chinese-language web first) does not
apply: Pinterest is not a China platform, and its own pages are the source.
The brief's note says "Pinterest Help Center and Pinterest Business only":
the creator site and the newsroom archive are used for two things only, the
creator-side size advice (labeled by page) and the dated history of the
retired formats, which no help page carries any more.

**Method.** Each help page was rendered logged out in headless Chromium
(Playwright, en-US, six-second settle), every collapsed control was clicked
open, and the `innerText` was saved with the URL, the final URL, the HTTP
status and the capture time in a header. The creator page's size tabs were
clicked one by one and each state appended. `business.pinterest.com/creative-best-practices/`
redirects a headless browser to the Business home page from this machine, so
it was read by a plain HTTPS fetch with the tags stripped (header says so).
The performance page drops its linked words from the rendered text; the two
sentences concerned were read from its HTML and appended to the capture. Long
dashes were replaced by a spaced hyphen when saved (settled 2026-10-08).
Captures: `research/pinterest-pin-specs/`, suffix `check1-2026-10-15`
(check 2: `check2-2026-10-15`).

**Dates.** Help Center and Business pages show no publication or update date.
Each row is dated by the read, "undated, read 2026-10-15", the convention the
ledger uses for X and LinkedIn. The creator blog post (August 25, 2023) and
the newsroom post (May 18, 2021) carry their own dates.

## R2. SERP map

Search run 2026-10-15 (US results) by a research subagent; 12 third-party
pages opened. Page types by category, never by company.

Query: pinterest pin size

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | scheduler blog | size guide, every format | 2:3 at 1000 x 1500; Idea Pins merged in 2023; 20 MB and 32 MB | cites no Pinterest page; "cropped past 1:2.1"; no 4 s to 15 min range | updated Sep 2026 |
| 2 | social tool blog | size guide | 1000 x 1500 | Idea Pins and Video Pins as current; calls 1000 x 2100 "2:3"; no limits | updated Jan 2026 |
| 3 | design app size directory | size directory | pin and board sizes | not opened | undated |
| 4 | pin creation tool blog | size explainer | pin size | not opened | undated |
| 5 | design app blog | size guide | pin and board cover | not opened | 2026 in title |
| 6 | publishing plugin blog | size guide | 2:3, cut-off beyond 2:3, 2 GB video | Story Pins as current; no carousel count | Sep 2024 |
| 7 | scheduler size directory | spec page | 1000 x 1500, quotes the cut-off line | video "4 s to 5 min"; 1000 px "minimum width" | Sep 2026 |
| 8 | social tool blog | size guide | 1000 x 2100 long pin, 600 minimum width | Idea Pins as current; no source | May 2026 |
| 9 | pin downloader guide | size guide | pin, board, profile | not opened | 2026 in title |

Query: pinterest pin size 2026

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | social tool blog | size guide (Q1 #2) | 1000 x 1500 | Idea Pins current; no limits | Jan 2026 |
| 2 | scheduler blog | size guide (Q1 #1) | formats, file limits | no Pinterest page cited | Sep 2026 |
| 3 | social tool blog | size guide (Q1 #8) | 1000 x 2100, video range | Idea Pins current; no carousel count | May 2026 |
| 4 | image tool guide | size guide, 3 tables | 1000 x 1500, 20 MB, 2 GB | no truncation threshold; no carousel count; no source | Oct 2026 |
| 5 | image compression tool guide | size guide | pin size | not opened | 2026 in title |
| 6 | ratio calculator site | ratio guide | pin ratios | not opened | 2026 in title |
| 7 | screenshot tool blog | size guide | pin dimensions | not opened | 2026 in title |
| 8 | pin automation tool blog | "every pin type" guide | per-type sizes | not opened; framing suggests retired types | 2026 in title |
| 9 | image resizer guide | size guide plus tool | pin size | not opened | 2026 in title |
| 10 | pin downloader guide | size guide | pin, board, profile | not opened | 2026 in title |

Query: pinterest video pin specs

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | video editor resource page | video spec guide | 4 s to 15 min, 2 GB | Idea Pin current (60 s a page, 20 pages); no source | Jun 2025 |
| 2 | scheduler blog | size guide (Q1 #1) | 2 GB, 6 to 15 s | no length range | Sep 2026 |
| 3 | product content studio guide | ad and organic guide, 6 tables | carousel 2 to 5, video 4 s to 15 min, cites Pinterest | Idea Pin current; FAQ gives 1000 x 2100 against its own body | Jan 2026 |
| 4 | social media consultant blog | how-to | video pins | not opened | undated |
| 5 | marketing agency blog | video ad specs | video ad specs | not opened; unsourced purchase figure in title | 2026 in title |
| 6 | scheduler blog | post size guide | sizes | not opened | undated |
| 7 | online video editor guide | resize how-to | video sizing | not opened | undated |
| 8 | Pinterest marketing agency blog | video spec page, 4 tables | 4 s to 15 min, 2 GB, 1080 x 1920 | Idea Pins current | Sep 2026 |
| 9 | video production studio page | spec page | video and image | not opened | 2026 in title |
| 10 | video app blog | app listicle | tools | off intent | undated |

Query: pinterest carousel pin size

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | scheduler blog | size chart | 2:3, 1000 x 2100, 1000 x 3000, 600 x 900 | Story Pins current; carousel "3 to 24"; video "4 to 15 seconds" | Mar 2025 |
| 2 | carousel maker tool page | tool landing | carousels | not a spec page | undated |
| 3 | dimension drawings directory | dimension sheet | promoted carousel | not opened | undated |
| 4 | ecommerce social tool blog | size guide, 1 table | carousel 2 to 5, 20 MB, collections 10 MB | Idea Pins and "infographic pins" current; 1000 x 3000 | Sep 2026 |
| 5 | social tool blog | size guide (Q1 #2) | 2:3 carousel | no count, no source | Jan 2026 |
| 6 | scheduler blog | ratio guide | 2:3 | not opened | 2026 in title |
| 7 | social tool blog | size guide | pin, profile, board | not opened | 2026 in title |
| 8 | size directory | spec page | pin size | not opened | 2026 in title |
| 9 | carousel tool blog | strategy listicle | engagement tips | off intent | undated |

Query: pinterest ad specs

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | ad tool blog | ad guide | specs, examples | not opened | undated |
| 2 | product content studio guide | ad spec guide (Q3 #3) | full ad set | Idea Pin current; contradictory 1000 x 2100 | Jan 2026 |
| 3 | paid social agency blog | ad spec guide | specs | not opened | undated |
| 4 | Pinterest's own page, business.pinterest.com/creative-best-practices | best practices | standard image ad: PNG or JPEG, 20 MB and 32 MB, 2:3 at 1000 x 1500, title 100, description 500 | specs for one format only | undated |
| 5 | growth marketing agency blog | ad spec guide, 6 tables | carousel 2 to 5, video 4 s to 15 min, 2 GB | no Pinterest page cited | Sep 2026 |
| 6 | marketing agency blog | ad spec guide | specs | not opened | 2026 in title |
| 7 | design tool size directory | spec page | image, video, carousel | not opened | 2026 in title |
| 8 | ad creative tool page | spec page | pins, video, carousel | not opened | undated |
| 9 | Pinterest ads agency blog | format lineup | formats | not opened | 2026 in title |

**The bar:** 1,100 to 2,800 words, one quick-spec table up top, one H2 per
format, then an FAQ; one or two tables typically, up to six on ad pages.
Pinterest's Help Center ranks in none of the five top tens.

**The gap, in one sentence:** see the table at the top. No ranking page sets
Pinterest's own pages side by side, and most still print retired formats and
tall sizes Pinterest does not publish.

## R1 and R5. Claims table

Every row is from a Pinterest page, read 2026-10-15. Sample size, method and
who paid do not apply to a platform's published limits: the platform states
its own rule. Pinterest's performance advice ("fully vertical pins get more
engagement") is Pinterest's own claim with no method, and is labeled advice.

| Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| A1 Standard pin: 2:3 recommended, "or 1000 x 1500 pixels"; "Pins with an aspect ratio greater than 2:3 might get cut off in people's feeds" | help.pinterest.com/en/business/article/pinterest-product-specs | undated, read 2026-10-15 | n/a | platform rule | n/a | primary |
| A2 Same advice on Business best practices: 2:3 or 1000 x 1500, "Larger aspect ratios may get cut off in people's feeds" | business.pinterest.com/creative-best-practices/ | undated, read 2026-10-15 | n/a | platform rule | n/a | primary, agrees with A1 |
| A3 Creator site: crop tool to 9:16, 2:3, 3:4, 4:5, 1:1; "We recommend a 2:3 aspect ratio (1000 x 1500 pixels) for images and a 9:16 aspect ratio (1080 x 1920 pixels) for videos" | create.pinterest.com/product-features/how-to-create-pins/ | undated, read 2026-10-15 | n/a | platform advice | n/a | primary |
| A4 Image files .PNG or .JPEG; max 20 MB desktop, 32 MB in app | help product specs; business best practices | undated, read 2026-10-15 | n/a | platform rule | n/a | primary, two pages agree |
| A5 Every upload converted to 8-bit RGB JPEG; upload PNG in sRGB; custom color profiles not supported | help product specs | undated, read 2026-10-15 | n/a | platform rule | n/a | primary |
| A6 Faint layer on white or black backgrounds in the home feed: black at 4% over near-white pins in light mode, white at 10% over near-black pins in dark mode; all image pins, organic and paid; not video | help product specs | undated, read 2026-10-15 | n/a | platform rule | n/a | primary |
| A7 Title up to 100 characters, first 40 may show (30 for double-byte languages); description up to 800 characters, not shown in home or search feed, "used by our algorithm to determine relevance for delivery" | help product specs | undated, read 2026-10-15 | n/a | platform rule | n/a | primary |
| A8 Description "Up to 500 characters"; first 40 title characters "most likely to show" | business best practices | undated, read 2026-10-15 | n/a | platform rule | n/a | primary, conflicts with A7 on description: published as both |
| A9 Desktop: up to 10 images or 10 videos per upload, each makes its own Pin; combining images and videos in one Pin needs the Pinterest app | help.pinterest.com/en/article/create-a-pin-from-an-image-or-video | undated, read 2026-10-15 | n/a | platform rule | n/a | primary |
| A10 "Mark as AI-Modified" toggles at creation: content made completely or partly with AI, or including an AI-generated person | help create-a-pin | undated, read 2026-10-15 | n/a | platform rule | n/a | primary |
| A11 Business accounts can publish later, up to 30 days ahead; one pin scheduled at a time, up to 10 pins scheduled | help create-a-pin; help.pinterest.com/en/business/article/schedule-pins | undated, read 2026-10-15 | n/a | platform rule | n/a | primary |
| A12 "You can schedule Pins up to two weeks in advance" | help.pinterest.com/en/business/article/pin-performance-and-distribution | undated, read 2026-10-15 | n/a | platform advice | n/a | primary, conflicts with A11: published as both |
| A13 Once published, a Pin's image, video or audio cannot be edited; make a new Pin | help.pinterest.com/en/article/edit-or-delete-a-pin | undated, read 2026-10-15 | n/a | platform rule | n/a | primary |
| A14 Video captions are generated automatically and cannot be edited or customized by the creator | help.pinterest.com/en/article/interact-with-pins | undated, read 2026-10-15 | n/a | platform rule | n/a | primary |
| A15 Full-screen (9:16) video pins: downloads can be switched on, with a username watermark | help create-a-pin | undated, read 2026-10-15 | n/a | platform rule | n/a | primary |
| V1 Standard width video: .MP4, .MOV or .M4V; H.264 or H.265; up to 2GB; 4 seconds to 15 minutes; ads 6 to 15 seconds recommended; "Shorter than 1:2 (width:height), taller than 1.91:1"; 1:1 or 2:3, 4:5, 9:16 recommended; organic or paid | help product specs | undated, read 2026-10-15 | n/a | platform rule | n/a | primary |
| V2 Max. width video: paid only; cannot exceed the height of 1:1; same files, 2GB, 4 s to 15 min | help product specs | undated, read 2026-10-15 | n/a | platform rule | n/a | primary |
| V3 "We recommend a 2:3 aspect ratio for images and videos that are anywhere from 15 to 60 seconds long" | help pin-performance (HTML appendix in capture) | undated, read 2026-10-15 | n/a | platform advice | n/a | primary; ideal length conflicts with V1 and V4 |
| V4 Creator site: "ideal length of between 45 to 90 seconds"; first 10 seconds count; leave space at the top and bottom of a video for the control bar and the settings icon | create how-to-create-pins | undated, read 2026-10-15 | n/a | platform advice | n/a | primary; three Pinterest pages, three ideal lengths |
| K1 Carousel: .PNG or .JPEG, 20 MB per image, 2 to 5 images, 1:1 or 2:3; organic or paid; sales objective: 2 to 10 images and videos pulled from the catalog | help product specs | undated, read 2026-10-15 | n/a | platform rule | n/a | primary |
| L1 Collections: one main image above three smaller ones, mobile feeds; .PNG or .JPEG, 10MB; one hero, at least 3 secondary recommended, up to 24; hero 1:1 or 2:3; secondaries all 1:1 or all 2:3, 1:1 recommended, others cropped at the center; video hero 2GB, 4 s to 15 min, 1:2 to 1.91:1 | help product specs | undated, read 2026-10-15 | n/a | platform rule | n/a | primary |
| L2 Max width collections: hero spans the mobile feed; 10MB images; at least 4 secondary recommended; video hero 1:1 or 16:9; "Can be used in paid ad campaigns or to generate organic impressions" | help product specs | undated, read 2026-10-15 | n/a | platform rule | n/a | primary |
| I1 Idea ads (current paid format): images BMP, JPEG, PNG, TIFF, WEBP; video MP4, M4V, MOV on iOS and Android only; 2GB in app, 100MB on web; up to 5 minutes; 1080 x 1920 (9:16) for full-bleed; safe zones top 270 px, left 65, right 195, bottom 440 | help product specs; help.pinterest.com/en/business/article/idea-ads-with-paid-partnerships | undated, read 2026-10-15 | n/a | platform rule | n/a | primary |
| I2 Showcase ads: up to 32MB, video 3 to 60 s, 1000 x 1500, 2:3 title pin and cards, 1:1 features, up to four cards, safe zone 342 x 430, bottom 80 px covered. Quiz ads: 32MB, 3 to 60 s, 1000 x 1500, 2:3, up to three results, safe zone 342 x 376 | help product specs | undated, read 2026-10-15 | n/a | platform rule | n/a | primary |
| R1 Story Pins launched in beta September 2020; renamed Idea Pins and opened to all creators in eight countries on May 18, 2021 ("Idea Pins are an evolution of Story Pins, with a fresh name") | newsroom-archive.pinterest.com/pinterest-introduces-idea-pins-globally-and-launches-new-creator-discovery-features | May 18, 2021, read 2026-10-15 | n/a | company announcement | n/a | primary |
| R2 August 25, 2023: standard Pins and Idea Pins brought "together in a single powerhouse Pin format"; one Pin option on mobile, "Create Pin" on desktop, for images, videos or a mix; editing tools (music, stickers) once limited to Idea Pins open to every Pin; existing Pins not affected | create.pinterest.com/blog/new-pin-format-update/ | August 25, 2023, read 2026-10-15 | n/a | company announcement | n/a | primary |
| R3 The old help address for Story Pins (help.pinterest.com/en/business/article/story-pins) redirects to /en/article/create-idea-pins-archived, which answers 404 | captured 2026-10-15 | read 2026-10-15 | n/a | direct observation | n/a | primary (observation) |
| H1 hubStudio Image studio: Shape (square, landscape, widescreen, ultra-wide, portrait or vertical, depending on the engine; ChatGPT Image engines add Tall 1:3); 4K up to 3840 px on the ChatGPT Image engines; Format PNG, JPG or WebP as the engine allows | src/content/help/create-an-image.md | synced 2026-10-14 | n/a | first-party help | n/a | first-party |
| H2 Image editor Crop: Free (any shape) among the formats; the size of the result in pixels shows under the formats; Apply the crop. No 2:3 and no Pinterest format in Crop or Social (Social covers X, Instagram, LinkedIn) | src/content/help/assets-library.md | synced 2026-10-14 | n/a | first-party help | n/a | first-party |
| H3 Image editor Save: Format PNG, JPG or WEBP; Size Width and Height with proportions locked, quick picks 100, 75, 50, 25 percent and 2048 or 1080 px on the long side; Save a copy, Save as a new version, Download; free, in the browser; 4,096 px editing limit | assets-library.md | synced 2026-10-14 | n/a | first-party help | n/a | first-party |
| H4 Video editor Format: Vertical (9:16, 1080 x 1920), Portrait (4:5), Square (1:1); Fit, blurred; writes an MP4; Save quality 1080p or 720p; takes MP4, MOV and WebM up to 2 GB; Social panel covers Instagram, TikTok and Facebook only | assets-library.md | synced 2026-10-14 | n/a | first-party help | n/a | first-party |
| H5 hubStudio publishes to LinkedIn, Instagram, Facebook, TikTok (Beta), X and prepares YouTube; no Pinterest module | hubstudio-positioning.md; src/content/help (no Pinterest article, no mention) | 2026-10-14 | n/a | first-party | n/a | first-party |

## Cleared for use

> Pinterest recommends a 2:3 aspect ratio, or 1000 by 1500 pixels, for a
> standard image pin, as a PNG or JPEG of up to 20 MB from a desktop or 32 MB
> in the app, and warns that "Pins with an aspect ratio greater than 2:3
> might get cut off in people's feeds."
> Source: Pinterest Help Center, "Review ad specs," read October 15, 2026.
> https://help.pinterest.com/en/business/article/pinterest-product-specs

> Pinterest's video specs take MP4, MOV or M4V files encoded in H.264 or
> H.265, up to 2GB, from 4 seconds to 15 minutes long, in any shape between
> 1:2 and 1.91:1, and recommend square or vertical (2:3, 4:5 or 9:16).
> Source: Pinterest Help Center, "Review ad specs," read October 15, 2026.
> https://help.pinterest.com/en/business/article/pinterest-product-specs

> Pinterest announced on August 25, 2023 that it was bringing standard Pins
> and Idea Pins "together in a single powerhouse Pin format," with one Pin
> option for images, videos or a mix of both.
> Source: Pinterest Create blog, "Everything you need to know about the new
> Pin update," August 25, 2023, read October 15, 2026.
> https://create.pinterest.com/blog/new-pin-format-update/

> Three Pinterest pages give three ideal video lengths: 6 to 15 seconds for a
> video ad (Help Center specs), 15 to 60 seconds (Help Center performance
> article) and 45 to 90 seconds (Pinterest's creator site).
> Source: Pinterest Help Center and Pinterest Create, read October 15, 2026.

## Do not publish

| Claim | Where it came from | Why it was cut | Logged |
|---|---|---|---|
| 1000 x 2100 "long pin" (1:2.1) as a Pinterest size or truncation threshold | 7 SERP pages | On no Pinterest page read; Pinterest's line is "greater than 2:3" | 2026-10-15 |
| 1000 x 3000 "infographic pin" | 2 SERP pages | On no Pinterest page | 2026-10-15 |
| 600 x 900 or 600 px or 1000 px minimum | SERP pages | Pinterest publishes no minimum on any page read | 2026-10-15 |
| Carousel "3 to 24" | one SERP chart | Confuses collections (up to 24 secondary) with carousels (2 to 5) | 2026-10-15 |
| Video "4 s to 5 min" | one SERP directory | 5 minutes is the Idea ad cap, not the video pin cap | 2026-10-15 |
| Bottom safe zone 790 px, sides about 70 and 200 px | SERP summary | Pinterest's own Idea ad zones are 270, 65, 195, 440 | 2026-10-15 |
| Idea Pins as a current organic format (20 pages, 60 s a page, 20 MB and 100 MB) | 6 SERP pages | Merged into one Pin format August 2023 (R2) | 2026-10-15 |
| "4x more Idea Pins created daily", "9x comment rate" | Pinterest newsroom 2021 | Seller's own figures, no method, and stale | 2026-10-15 |
| "Fully vertical images and videos get more engagement" as a fact | Pinterest creator site | Pinterest's advice, no method; may run only as Pinterest's advice | 2026-10-15 |
| A Pinterest pixel size for a video pin as a rule | SERP | Only the creator site recommends 1080 x 1920, as advice; specs give ratios only | 2026-10-15 |

## Screenshot inventory

| File | What it shows | Captured | Source surface |
|---|---|---|---|
| help-review-ad-specs-check1-2026-10-15.txt | every format's specs (A1, A4 to A7, V1, V2, K1, L1, L2, I1, I2) | 2026-10-15 04:34 UTC | Help Center (Business) |
| biz-creative-best-practices-check1-2026-10-15.txt | standard image ad specs, 500-character description (A2, A8) | 2026-10-15 04:41 UTC | Pinterest Business |
| create-how-to-create-pins-check1-2026-10-15.txt | crop ratios, 1000 x 1500 and 1080 x 1920 advice, 45 to 90 seconds (A3, V4) | 2026-10-15 | Pinterest Create |
| help-create-a-pin-check1-2026-10-15.txt | 10 per upload, AI-Modified, 30 days, downloads (A9 to A11, A15) | 2026-10-15 04:36 UTC | Help Center |
| help-schedule-pins-check1-2026-10-15.txt | 30 days, 10 scheduled (A11) | 2026-10-15 | Help Center (Business) |
| help-pin-performance-check1-2026-10-15.txt | two weeks, 15 to 60 seconds (A12, V3), HTML appendix | 2026-10-15 | Help Center (Business) |
| help-edit-or-delete-a-pin-check1-2026-10-15.txt | media not editable after publishing (A13) | 2026-10-15 | Help Center |
| help-interact-with-pins-check1-2026-10-15.txt | automatic captions (A14) | 2026-10-15 | Help Center |
| help-idea-ads-check1-2026-10-15.txt | Idea ads current, multi-image stitched into one video Pin in the app | 2026-10-15 | Help Center (Business) |
| help-story-pins-redirect-404-check1-2026-10-15.txt | story-pins address redirecting to an archived 404 (R3) | 2026-10-15 04:40 UTC | Help Center |
| create-blog-new-pin-format-2023-check1-2026-10-15.txt | the 2023 merge (R2) | 2026-10-15 04:37 UTC | Pinterest Create blog |
| newsroom-idea-pins-global-2021-check1-2026-10-15.txt | Story Pins renamed Idea Pins (R1) | 2026-10-15 04:40 UTC | Newsroom archive |

## Source check 2

Every page above was captured again on 2026-10-15 (suffix `check2-2026-10-15`)
after the draft was written, and every figure the draft cites was found
unchanged. The captures differ from check 1 only in their headers and, on
the creator page, in which tabs were clicked open; the performance page's
two linked sentences were re-read from its HTML. The Story Pins address
still redirects to the archived 404.

## R8. Reconciliation (after drafting, 2026-10-15)

Every number in `output/pinterest-pin-specs.md` was checked back against the
claims table:

| Draft figure | Claim |
|---|---|
| 2:3, 1000 x 1500, "greater than 2:3 might get cut off" | A1, A2 |
| PNG or JPEG, 20 MB desktop, 32 MB app | A4 |
| 8-bit RGB JPEG, sRGB, no custom profiles | A5 |
| 4 percent black, 10 percent white, not video | A6 (the "never pure white in light mode" line is arithmetic on A6) |
| Title 100, first 40, 30 double-byte; description 800, read for relevance | A7 |
| Description 500 | A8 |
| Up to 10 images per desktop upload | A9 |
| Mark as AI-Modified | A10 |
| 30 days ahead, 10 scheduled; two weeks | A11, A12 |
| Media not editable after publishing | A13 |
| Automatic captions, not editable | A14 |
| 9:16 downloads with username watermark | A15 |
| MP4, MOV, M4V; H.264, H.265; 2GB; 4 s to 15 min; 1:2 to 1.91:1; 1:1, 2:3, 4:5, 9:16; ads 6 to 15 s | V1 |
| Max. width: paid only, no taller than 1:1 | V2 |
| 15 to 60 seconds | V3 |
| 45 to 90 seconds; 1080 x 1920 at 9:16; room at top and bottom | V4, A3 |
| Carousel 2 to 5, 20 MB, 1:1 or 2:3; catalog 2 to 10 | K1 |
| Collections 10MB, 1 hero, 3 recommended, 24 at most, center crop, video hero 2GB | L1 |
| Max width collections: 4 recommended, video 1:1 or 16:9, organic or paid | L2 |
| Story Pins renamed May 18, 2021; merge August 25, 2023; old address 404 | R1, R2, R3 |
| Idea ad files, 2GB and 100MB, 5 minutes, 1080 x 1920, 270/65/195/440 | I1 |
| Showcase and Quiz: 32MB, 3 to 60 s, 1000 x 1500, 342 x 430, 80 px, 342 x 376, four cards, three results | I2 |
| 1000 x 2100, 1000 x 3000, 600 x 900 | Printed only as sizes no Pinterest page publishes (Do not publish list) |
| hubStudio: portrait or vertical Shape, Tall 1:3; Free crop, pixel size shown; PNG or JPG, Width 1000 to 1500 on a true 2:3 crop; Vertical 9:16 1080 x 1920, Portrait 4:5, Square 1:1, MP4 1080p or 720p; free editing; no Pinterest publishing | H1 to H5 |
| Next review January 20, 2027 | watch.csv row added this run |

Nothing in the draft lacks a claim row. Cut before drafting, never written:
the 2021 newsroom growth and comment-rate figures, Pinterest's
"more engagement" advice as a fact, and any Pinterest pixel size for a video
pin presented as a rule (the 1080 x 1920 runs as the creator site's
recommendation).
