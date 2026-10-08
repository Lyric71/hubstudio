# Research: vertical-video-ad-from-product-image

| Field | Value |
|---|---|
| Brief | 55 (wave two, `editorial/scripts/wave2/55-vertical-video-ad-from-product-image.mjs`) |
| Target query | AI video ad from product image |
| Gap statement (one sentence) | Every ranking page is a tool vendor's tutorial that stops at the export button: none sets the clip against each ad placement's own spec page, none gives a safe zone read from the platform's own file, and none says a long render can fail after it is billed. |
| Research time spent | About 75 minutes active, 2026-10-08 |
| Written | 2026-10-08 |

> **Handling rule for this file.** Tool, vendor and domain names appear here
> only in the SERP map and in the source URL column. None reaches the page.
> Platforms (Meta, Instagram, Facebook, TikTok, YouTube, Google Ads) are where
> the ad runs, not competitors, and are named on the page with their own help
> pages as sources. Engine makers offered inside the app are named only as the
> help center names them.

> **R4 note.** The piece is global and covers Western ad placements only. No
> China platform figure is used, so the Chinese-language-first search does not
> apply. Every spec comes from the platform's own ads help page or its own
> downloadable file.

---

## R2. SERP map

Results captured 2026-10-08. Page type and failure mode from the result set,
and from opening the top pages where noted.

### Query: AI video ad from product image

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | akool.com | Tool vendor resource | Upload, pick a style, export | No placement spec, no safe zone, no cost risk | 2026 |
| 2 | weshop.ai | Tool vendor blog | Product photo to clip in the publisher's app | Same | 2026 |
| 3 | hi.adcreative.ai | Tool vendor academy | Product images to video ads | Specs restated without a source | 2026 |
| 4 | picsart.com | Tool vendor tutorial | Generate a product video ad | No length per placement | 2026 |
| 5 | segwise.ai | Vendor blog | Product images to video ads | No platform page cited | 2026 |
| 6 | mujoai.com | Tool vendor guide | Product photos into video creatives | Same | 2026 |
| 7 | framia.converge.ai | Tool vendor page | Product photo to video ads | Same | 2026 |

### Query: how to turn a product photo into a video ad with AI

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | pixverse.ai | Tool vendor blog | Product photos into video ads | No spec source | 2026 |
| 2 | dreamina.capcut.com | Tool vendor playbook | Product photos to AI videos | Spec figures without the platform page | 2026 |
| 3 | creatify.ai | Tool vendor tutorial | "60 seconds" product image to ad | No placement table | 2026 |
| 4 | hi.adcreative.ai | Tool vendor academy | Same as above | Same | 2026 |
| 5 | segwise.ai | Vendor blog | Same | Same | 2026 |
| 6 | mujoai.com | Tool vendor guide | Same | Same | 2026 |

### Query: image to video AI vertical 9:16 product ad Reels TikTok

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | krea.ai | Tool node page | A 9:16 converter | Not a guide | 2026 |
| 2 | picsart.com | Tool vendor tutorial | Vertical AI videos for TikTok and Reels | No safe zone from the platform | 2026 |
| 3 | insmind.com | Tool landing page | Product video generator | Landing page | 2026 |
| 4 | blendnow.com | Tool vendor blog | Product photos into Reels | No spec source | 2026 |
| 5 | morphic.com | Tool resource | Vertical video ad examples | Gallery | 2026 |
| 6 | shhots.ai | Tool landing page | Image to video | Landing page | 2026 |
| 7 | vidmuse.ai | Tool vendor blog | TikTok ads with AI | No spec page cited | 2026 |

### Query: animate product photo into video ad start frame end frame camera move prompt

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | ai-flow.net | Workflow template | Shot to motion | French-language template page | 2026 |
| 2 | docs.pushowl.com | Product doc | Image to video in that product | Product-specific | 2026 |
| 3 | vidu.com | Tool page | Make a picture move | Landing page | 2026 |
| 4 | claid.ai | Tool vendor blog | Make AI videos | No ad specs | 2026 |
| 5 | promptessor.com | Prompt blog | Image-to-video prompts | Prompts only, no placement | 2026 |
| 6 | cliprise.app | Prompt guide | Image-to-video prompt structure | Prompts only | 2026 |

**The bar:** 1,000 to 2,000 words, one step list, at most one table, prompt
examples on the prompt pages only. No ranking page cites a platform help page.

**The gap, in one sentence:** nobody takes the clip from the still to the
upload with each placement's own length and safe zone, read from the
platform's own page or file, and nobody says what a failed long render costs.

## R1. Claims the piece needs (mapped before looking anything up)

1. What the video studio accepts as a start: start image, start and last frame,
   which engines take each, length steps, shape, sound. (help center)
2. How the camera move and the ad structure get into the prompt: Improve with
   AI, the Catalog skills. (help center)
3. The price rule and the long-clip timeout. (help center, positioning)
4. How the Video editor frames, captions, adds text and music, and saves for
   each network. (help center)
5. Per placement: ratio, size, length range, recommended length, sound, safe
   zone. (each platform's own ads help pages)
6. Whether one safe box covers all three networks. (derived, labeled)

## R1 and R5. Claims table

| Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| Video studio: Start image, or Start and last frame on engines that take both; with a last picture, the engine renders the movement between the two; a frame excludes references | src/content/help/create-a-video.md | updated 2026-10-08 | n/a | Help center, ground truth for the app | first-party | primary |
| Engines taking start and last frame: Veo 3.1 Fast (4, 6 or 8 s), Wan 3.0 (2 to 30 s, no sound switch), Seedance 2.0 (4 to 15 s), Seedance 2.5 (4 to 30 s), MiniMax H3 (4 to 15 s); start image only: Grok Imagine 1.5 (1 to 15 s), Seedance 1.0 Pro Fast (2 to 12 s, no sound); Kling engines and Gemini Omni Flash take a prompt only | src/content/help/create-a-video.md, engine table | 2026-10-08 | n/a | Help center | first-party | primary |
| Shape includes vertical (9:16), depending on the engine; Adaptive on Wan 3.0 and Seedance 2.5 follows the picture | create-a-video.md, options table | 2026-10-08 | n/a | Help center | first-party | primary |
| Generate sound: the engine composes the clip's own audio; on some engines sound costs more per second | create-a-video.md | 2026-10-08 | n/a | Help center | first-party | primary |
| Describe your video: up to 2,500 characters; write the scene as a shot: what moves, where the light comes from, how the camera behaves | create-a-video.md | 2026-10-08 | n/a | Help center | first-party | primary |
| Frame sources: Choose from the library, Upload a picture, Paste a link (https) | create-a-video.md | 2026-10-08 | n/a | Help center | first-party | primary |
| Price: per second of clip, total shown next to the button before the render; charged only when it succeeds | create-a-video.md; hubstudio-positioning.md | 2026-10-08 / 2026-09-29 | n/a | Help center, positioning | first-party | primary |
| A render is given about five minutes; a clip over 15 seconds can take longer and fail after being paid for; the form warns under Duration; Wan 3.0 and MiniMax H3 among the slower engines | create-a-video.md, Rendering time | 2026-10-08 | n/a | Help center | first-party | primary |
| Closing a rendering tab does not cancel it; Run again bills again | create-a-video.md | 2026-10-08 | n/a | Help center | first-party | primary |
| Catalog skills for Images and video include Video camera movement vocabulary, Video shot pacing and duration, Animating a still (image to video), Short vertical video ad; Add to my skills; Improve with AI follows switched-on skills | src/content/help/skills.md | updated 2026-10-05 | n/a | Help center | first-party | primary |
| Video editor: Social panel for Instagram, TikTok, Facebook; Reel and TikTok Video at 9:16, 1080 x 1920; Crop to fill or Fit it whole; Show what the network covers draws the zones and a dashed safe area; Apply the format writes 1080p | src/content/help/assets-library.md, The Video editor | updated 2026-10-08 | n/a | Help center | first-party | primary |
| Video editor: Format panel Vertical 9:16, 1080 x 1920; Text panel (Add a text, Appears at, Disappears at, Box, Outlined, Plain); Captions write the words said, free in the browser or fast and billed; Sound adds music; only licensed music, TikTok and Instagram mute or block unlicensed music; Cover; Save checks Instagram Reel, Instagram Story, Facebook, TikTok; save to Assets Library or Download | assets-library.md | 2026-10-08 | n/a | Help center | first-party | primary |
| Video editor takes MP4, MOV and WebM, opens from Edit video in the Assets Library or Edit in History; editing is free; fast captions are billed with the price shown first | assets-library.md | 2026-10-08 | n/a | Help center | first-party | primary |
| Instagram Reels video ads (Awareness): MP4 or MOV, 9:16, 1440 x 2560, 0 s to 15 min, 4GB, primary text 44 characters, sound optional but strongly recommended, captions optional but recommended, leave at least 14% top, 35% bottom, 6% each side free | https://www.facebook.com/business/ads-guide/update/video/instagram-reels | page undated, read 2026-10-08 | n/a | Platform's own ads guide | Meta (platform) | primary, scoped to that placement and objective. Ledger row from brief 32 re-read |
| Facebook Reels video ads: MP4, MOV, GIF, 9:16, 1440 x 2560, no maximum duration, 4GB, primary text 40, headline 55, same 14/35/6 safe zone, sound optional but strongly recommended | https://www.facebook.com/business/ads-guide/update/video/facebook-facebook-reels | undated, read 2026-10-08 | n/a | Platform's own ads guide | Meta | primary, scoped |
| TikTok auction in-feed, Non-Spark: 9:16 recommended at 540 x 960 or more; up to 10 minutes; 500 MB or less; 516 kbps or more; safe zone "determined by the dimension, ad caption length, and any additional formats used", downloadable files | https://ads.tiktok.com/help/article/tiktok-auction-in-feed-ads | "Last updated: June 2026", read 2026-10-08 | n/a | Platform's own ads help | TikTok | primary |
| TikTok reservation in-feed: 5 to 60 s, recommend 9 to 15 s; 2,500 kbps or more; all video creatives must have sound | https://ads.tiktok.com/help/article/tiktok-reservation-in-feed-ads-reach-frequency | updated July 2025, read 2026-10-08 | n/a | Platform's own ads help | TikTok | primary, reservation buying only |
| TikTok creative best practices: 9:16, at least 720P, sound; content proposition in the first 3 seconds, hook in the first 6 | https://ads.tiktok.com/help/article/creative-best-practices | updated June 2025, read 2026-10-08 | n/a | Platform recommendation, no measured effect stated | TikTok | primary as a recommendation |
| TikTok standard in-feed safe-zone template (In-Feed-Standard Version LTR.zip, Feed.png, file dated 2025-04-15): on a 720 x 1280 frame, 160 px top, 440 px bottom, 80 px each side, and a 120 px right rail over the lower 720 px | https://lf-tt4b.tiktokcdn.com/obj/i18nblog/tt4b_cms/en-US/5jqet0ab9qci-10e7f5Vig4uhAscNP8XPB0.zip, linked from the auction in-feed page | file 2025-04-15, downloaded 2026-10-08 | n/a | Downloaded from the platform's page; boundaries measured on the 2880 x 5120 PNG by pixel scan (x 80 to 640, y 160 to 840, rail from y 560) | TikTok | primary for the standard file; the page says the zone varies with caption length and add-ons |
| TikTok in-feed with anchor templates (In-Feed with Anchor LTR, folder "1. Vertical Feed- 540x960", feed_1 to feed_4): on a 540 x 960 frame, 126 px top, 60 px each side, a 120 px right column from y 180, bottom 406, 439, 473 or 507 px for one to four caption lines; the anchor is drawn as a link card ("Viewproduct") above the username. Added 2026-10-08 so this guide agrees with the TikTok video specs page | research/tiktok-video-specs.md (anchor template rows, read from TikTok's files), zip linked from https://ads.tiktok.com/help/article/tiktok-auction-in-feed-ads through the page's download control | downloaded 2026-10-08 | 4 files | Dimension labels printed by TikTok in each file | TikTok | primary (read from TikTok's files) |
| YouTube Shorts ads: 9:16 vertical recommended, horizontal and square supported; up to 3 minutes, only the first 60 seconds play on the Shorts feed; under 60 seconds recommended; must be uploaded to YouTube, public or unlisted | https://support.google.com/google-ads/answer/16041697?hl=en | undated, read 2026-10-08 | n/a | Platform's own help | Google | primary |
| Demand Gen video: 9:16 at 1080 x 1920 recommended for YouTube Shorts; minimum duration 5 seconds; under 10 seconds ineligible for in-stream | https://support.google.com/google-ads/answer/13704860?hl=en | undated, read 2026-10-08 | n/a | Platform's own help | Google | primary, Demand Gen scope |
| YouTube vertical video ad safe zone on 1080 x 1920: 288 px top, 672 px bottom, 48 px left, 192 px right (the SVG labeled "YouTube, Vertical Video Ads, Safe Zone") | https://support.google.com/google-ads/answer/13547298?hl=en, image storage.googleapis.com/support-kms-prod/jbb4hOyc2nGdunbKddqpFAEQpHOQvy582jIR | undated, read 2026-10-08 | n/a | Labels read from the SVG text nodes and its render | Google | primary |
| Derived: Meta's percentages on 1080 x 1920 are about 269 px top, 672 bottom, 65 each side | arithmetic | 2026-10-08 | n/a | 0.14 x 1920, 0.35 x 1920, 0.06 x 1080 | n/a | derived |
| Derived: TikTok's template scaled by 1.5 to 1080 x 1920 is 240 top, 660 bottom, 120 each side, a 180 px rail over the lower 1,080 px (from y 840) | arithmetic | 2026-10-08 | n/a | x 1.5, assumes the template scales | n/a | derived |
| Derived: one box clear on all three: x 120 to 888, y 288 to 1248, with x 780 to 888 also blocked below y 840; so words and logo inside x 120 to 780, y 288 to 1248 (660 x 960) clear every zone | arithmetic | 2026-10-08 | n/a | Largest inset on each side across the three readings | n/a | derived, not a platform rule |
| Derived: with a TikTok anchor, the anchor files scaled by 2 give 812 to 1,014 px at the bottom on 1080 x 1920 and a right column 240 px wide from y 360; laid over the box above, words and logo inside x 120 to 780, y 288 to 906 clear Meta, Google and every TikTok template, standard or anchor, any caption length; the step to x 888 above y 840 does not hold with an anchor | arithmetic | 2026-10-08 | n/a | 1920 - 1014 = 906; scaling as in research/tiktok-video-specs.md | n/a | derived, not a platform rule |
| Derived: a clip of 9 to 15 seconds sits inside every length row (Reels 0 s to 15 min, TikTok reservation 5 to 60 s and its 9 to 15 s recommendation, Shorts under 60 s with a 5 s Demand Gen floor) | arithmetic | 2026-10-08 | n/a | Intersection of the rows above | n/a | derived |

## Cleared for use

> Instagram Reels video ads take 9:16 at 1440 by 2560 and run from 0 seconds to
> 15 minutes, and Meta asks for at least 14 percent of the top, 35 percent of
> the bottom and 6 percent of each side to stay free of text, logos and key
> elements.
> Source: Meta Ads Guide, Instagram Reels video ad specs (Awareness), read October 8, 2026. https://www.facebook.com/business/ads-guide/update/video/instagram-reels

> TikTok's reservation in-feed ads run 5 to 60 seconds, with 9 to 15 seconds
> recommended, and every video creative must carry sound.
> Source: TikTok ads help center, reservation in-feed ad specifications, updated July 2025, read October 8, 2026. https://ads.tiktok.com/help/article/tiktok-reservation-in-feed-ads-reach-frequency

> TikTok's standard in-feed template, drawn on a 720 by 1280 frame, keeps 160
> pixels at the top, 440 at the bottom and 80 on each side clear, plus a
> 120-pixel rail on the right over the lower 720 pixels.
> Source: TikTok ads help center, auction in-feed ad specifications page (updated June 2026), standard safe-zone file dated April 2025, downloaded and measured October 8, 2026. https://ads.tiktok.com/help/article/tiktok-auction-in-feed-ads

> Shorts ads can run up to 3 minutes, but only the first 60 seconds play in the
> Shorts feed, and Google recommends ads under 60 seconds; its vertical safe
> zone on a 1080 by 1920 frame leaves 288 pixels at the top, 672 at the bottom,
> 48 on the left and 192 on the right.
> Source: Google Ads Help, YouTube Shorts ads asset specs and About video ad specs, read October 8, 2026. https://support.google.com/google-ads/answer/16041697

## Do not publish

| Claim | Where found | Why not | Checked |
|---|---|---|---|
| Sound in Shorts ads "increase conversions by over 20%" | Google Ads Help, Shorts ads guide | No sample, period or method on the page; a platform claim about its own product | 2026-10-08 |
| "Adding a vertical video ... increases VTR on Shorts by over 40%" | Google Ads Help 9128498 | Same: no method | 2026-10-08 |
| YouTube Shorts safe zone "top 10%, bottom 25%, right 10%" | Search synthesis | Does not match Google's own SVG (288/672/48/192); no primary page | 2026-10-08 |
| TikTok "5 to 10 words per second" on text | TikTok creative best practices | Reads as a typo-prone recommendation and is not needed; left out rather than risk misquoting | 2026-10-08 |
| Any third-party TikTok inset set | Ledger brief 32 | Superseded here by TikTok's own template file | 2026-10-08 |
| Any statement that hubStudio buys, places or runs ads | none | Not an app fact in hubstudio-positioning.md | 2026-10-08 |
| Any price per second, per clip or per caption minute | create-a-video.md shows prices in the app only | House rule: no amounts | 2026-10-08 |

## Screenshot inventory

| File | What it shows | Captured | Source surface |
|---|---|---|---|
| research/vertical-video-ad-from-product-image/2026-10-08-google-ads-vertical-safe-zone-1080x1920.png | Google's "YouTube, Vertical Video Ads, Safe Zone" SVG rendered: 288 top, 672 bottom, 48 left, 192 right, 1080 x 1920 | 2026-10-08 | support.google.com/google-ads/answer/13547298 |
| research/vertical-video-ad-from-product-image/2026-10-08-tiktok-in-feed-standard-safe-zone-template.png | TikTok's In-Feed standard LTR Feed.png, flattened and downsized: 160 top, 440 bottom, 80 sides, 120 rail over 720, on 720 x 1280 | 2026-10-08 | ads.tiktok.com auction in-feed page, zip link |

## R8. Reconciliation (filled after drafting)

Check 2 run 2026-10-08 (07:27 UTC and after), every cited URL re-fetched:

| Source | Check 2 result |
|---|---|
| Meta Ads Guide, Instagram Reels | Same: 9:16, 1440 x 2560, 0 s to 15 min, "Consider leaving at least 14% of the top, 35% of the bottom and 6% on each side". The page says "consider", so the draft says Meta "suggests" |
| Meta Ads Guide, Facebook Reels | Same: 9:16, 1440 x 2560, no maximum, same zone |
| TikTok auction in-feed | Same: Last updated June 2026, 540*960, up to 10 minutes, 516 kbps, zone depends on ad caption length; zip link unchanged |
| TikTok reservation in-feed | Same: Last updated July 2025, 5-60s, recommend 9-15s, 2,500 kbps, must have sound |
| TikTok creative best practices | Same: Last updated June 2025, 9:16, 720P, first 3 seconds, first 6 seconds |
| Google Shorts ads guide | Same: 3 minutes, first 60 seconds, public or unlisted |
| Google Demand Gen specs | Same: 5 seconds minimum, 1080x1920, Shorts |
| Google About video ad specs and its SVG | Same: SVG text nodes 1080x1920, 288, 672, 192, 48 |

Every number in the draft, against the claims table:

| Number in the draft | Claims row |
|---|---|
| 9:16, 1440 x 2560, 0 s to 15 min, 14/35/6, no maximum | Meta rows |
| 540 x 960, up to 10 minutes, 5 to 60 s, 9 to 15 s, sound required, 3 s and 6 s | TikTok rows |
| 160, 440, 80, 120 over 720, 720 x 1280, April 2025, June 2026, July 2025, June 2025 | TikTok template and page rows |
| 3 minutes, 60 seconds, 5 seconds, 1080 x 1920, 288, 672, 48, 192 | Google rows |
| 269, 65; 240, 660, 120, 180, y 840; x 120 to 780, y 288 to 1248, 660 x 960, x 888 | Derived rows |
| 540 x 960; 406, 439, 473, 507; 812 to 1,014; y 288 to 906 (anchor paragraph, blockquote, checklist and FAQ, added 2026-10-08 when this guide was set beside the TikTok video specs page) | TikTok anchor template row and the anchor derived row |
| Engine table lengths and sound, 2,500 characters, about five minutes, over 15 seconds, 1080p, 1080 x 1920 in Social | Help center rows |
| "a few minutes to render" | create-a-video.md, Rendering time ("A clip takes a few minutes") |

Removed during R8: "a 25-second clip" in the opening (an illustrative number
not in this file, replaced by "a render past 15 seconds"); "12 seconds from an
engine that stops at 8" (12 replaced by the 8 seconds of Veo 3.1 Fast);
"hold the last 2 or 3 seconds" (no source, now "the closing seconds").
