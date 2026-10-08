# Research: youtube-shorts-specs

| Field | Value |
|---|---|
| Brief | 59 (wave two, `scripts/wave2/59-youtube-shorts-specs.mjs`) |
| Target query | youtube shorts size |
| Gap statement (one sentence) | The pages ranking for Shorts size, length, ratio and resolution are tool makers' blogs that cite no YouTube page, and between them they still give a 60-second limit, call 9:16 mandatory when square qualifies, hand out a 1280 x 720 thumbnail size that YouTube's own thumbnail page replaces with 9:16 at 2160 x 3840 for Shorts, and leave out the 1080p upload ceiling, the Content ID rule for Shorts over a minute, and the ads rule that only the first 60 seconds play in the Shorts feed. |
| Research time spent | About 2 hours 30 minutes: 4 SERP phrasings, 14 platform-owned pages fetched, 3 of them rendered in a headless browser because the help center serves no body to a plain fetch |
| Written | 2026-10-08 |
| Method | Primary only. Western platform pages are readable, so every value is read from the platform's own help, blog, developer or ads page, scoped to that page. No deviation 7, no modal values. |

## R2. SERP map

Domains are recorded by publisher type, not by name, under the house rule that
no company is named anywhere in the pipeline. All four queries run 2026-10-08,
US results.

Query: youtube shorts size

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | Video-editor maker A | Blog guide | 1080 x 1920, 9:16 | Still states a 60-second limit; gives a 1280 x 720 thumbnail; cites no YouTube page | undated, live 2026 |
| 2 | Creator-analytics tool B (and two locale copies) | Blog guide | 1080 x 1920, 9:16, length | No source for the 1080 x 1920 figure; no ads; no Content ID rule | titled 2026 |
| 3 | Unrelated host with scraped copy | Spam page | Restated sizes | Nothing primary | undated |
| 4 | Scheduling tool C | Blog guide | Width and height | 60-second framing, no thumbnail change | undated |
| 5 | Scheduling tool D | Blog | Video size | No source | undated |
| 6 | Design tool E | Size reference card | 1080 x 1920 | No length rule, no source | undated |

Query: youtube shorts length limit

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | Scraped copies on university and public hosts (4 of 10 results) | Spam pages | Restated limits | Not sources | undated |
| 2 | Infographic tool F | Blog | 3 minutes, October 2024 | Content ID block over one minute; ads 60-second play | undated |
| 3 | Social tool G | Blog | 3 minutes | No YouTube citation | undated |
| 4 | Caption tool H | Blog | Length | No YouTube citation | undated |

Query: youtube shorts aspect ratio

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | Video AI tool I | Blog | 9:16 | Says 9:16 is required; YouTube says square or vertical | undated |
| 2 | Developer tutorial site | Article | Ratio and resolution | Says Shorts "must" be 1920 x 1080 | undated |
| 3 | Podcast tool J and a sister site | Blog | Ratio guide | No thumbnail ratio | 2025 |
| 4 | Effects software maker K | Blog | Ratio and resolution | 2023 page, pre-3-minute | 2023 |
| 5 | Compression tool L | Blog | "Specs that matter" | No YouTube citation | undated |

Query: youtube shorts resolution

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | Scheduling tool M | Blog | 1080 x 1920 | No source | undated |
| 2 | Video-editor maker A | Blog | Same page as size query | As above | undated |
| 3 | Caption tool N | Blog | "Up to 4K supported, served at 1080p" | YouTube's help says uploads max 1080p for Shorts; the claim is not on a YouTube page | 2025-04 |
| 4 | Effects software maker K | Blog | Resolution | 2023 | 2023 |

**The bar:** 1,200 to 2,500 words, one or two tables, no primary citation on any
ranking page, no ads section, no comparison drawn from each network's own page.

**The gap, in one sentence:** nobody ranking reads YouTube's own pages, so the
Content ID block, the 1080p ceiling, the 9:16 Shorts thumbnail at 2160 x 3840
and the 60-second ads play are missing, and the 60-second limit and "9:16
required" errors survive.

## R1 and R5. Claims table

All pages fetched 2026-10-08 (check 1), unauthenticated. Google help pages show
no last-updated date; they carry "(c) 2026 Google" only, so the fetch date is
the date. None is a study: sample size and "who paid" do not apply (the
platform's own documentation of its own product).

| Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| Upload page: a Short is "a short-video file" "Up to 3 minutes" with "a square or vertical aspect ratio"; upload from YouTube Studio on a computer (Create, Upload videos); "You can choose up to 15 short videos at a time" | support.google.com/youtube/answer/12779649 | undated, read 2026-10-08 | n/a | Platform help text | YouTube | primary |
| "Any videos uploaded on or after this date [October 15, 2024] with a square or vertical aspect ratio up to three minutes in length will be categorized as Shorts on YouTube." Earlier uploads "will remain the same, as a long-form video" | support.google.com/youtube/answer/15424877 | undated, read 2026-10-08 | n/a | Platform help text | YouTube | primary |
| English version (hl=en): "Any Short that is over one minute in duration with an active Content ID claim of any type, including manual claims, will be blocked globally on YouTube." Blocked Shorts are not playable, recommended or monetizable; "Once the claim is resolved, your Short will be viewable and eligible for monetization." Amended 2026-10-08: the French version of the page dates a change from September 24, 2026 (next row), so this sentence is never published alone | support.google.com/youtube/answer/15424877 | undated, read 2026-10-08 | n/a | Platform help text, English version | YouTube | primary, conflicts with the French version |
| French version of the same page: "À partir du 24 septembre 2026, les nouveaux Shorts de plus d'une minute (mais de moins de trois minutes) faisant l'objet d'une revendication Content ID active ne seront plus bloqués automatiquement et pourront rester disponibles sur YouTube." Also: "Les Shorts bloqués dans le monde entier sur YouTube ne sont pas éligibles à la monétisation." and "Une fois la revendication résolue, votre Short sera visible et éligible à la monétisation." Conflicts with the undated English row above: R6, both are published side by side, attributed to their language version | support.google.com/youtube/answer/15424877?hl=fr | change dated 2026-09-24, read 2026-10-08 (check 1 and check 2) | n/a | Platform help text, French version | YouTube | primary, conflicts with the English version |
| "You can use most songs for up to 90 seconds in a 3 minute Short. However, some tracks may be limited to 60 or 30 seconds." | support.google.com/youtube/answer/15424877 | undated, read 2026-10-08 | n/a | Platform help text | YouTube | primary |
| YouTube blog, October 3, 2024: "Starting on October 15, you can upload Shorts up to 3 minutes long. This change applies to videos that are square or taller in aspect ratio, and won't affect any videos you uploaded before October 15." | blog.youtube/news-and-events/tall-updates-coming-to-shorts/ | 2024-10-03 | n/a | Platform announcement | YouTube | primary |
| "You can upload Short videos with a maximum resolution of 1080p." | support.google.com/youtube/answer/10059070 and answer/10343433 (same sentence on both) | undated, read 2026-10-08 | n/a | Platform help text | YouTube | primary |
| Shorts camera: "record one or more clips that add up to three minutes" | support.google.com/youtube/answer/10343433 | undated, read 2026-10-08 | n/a | Platform help text | YouTube | primary |
| "You can choose a frame from your Short to be used as the thumbnail before and after you upload your Shorts"; text and filters can be added | support.google.com/youtube/answer/10343433 | undated, read 2026-10-08 | n/a | Platform help text | YouTube | primary |
| "Custom thumbnails for Shorts are currently only available to add in YouTube Studio on a computer. Your account must be verified to use this feature." Path: Content, Shorts, the Short, Upload file under Thumbnail | support.google.com/youtube/answer/72431 | undated, read 2026-10-08 | n/a | Platform help text | YouTube | primary |
| Thumbnail image: "3840 x 2160 pixels for videos and 2160 x 3840 for Shorts, with a minimum width of 640 pixels for videos and a minimum height of 640 pixels for Shorts"; Shorts aspect 9:16; JPG or PNG; "50MB for video, Shorts, and podcast thumbnails" (desktop); "Vertical videos with 16:9 custom thumbnails will be replaced by an auto-generated 4:5 thumbnail on the home, explore, and subscription pages." | support.google.com/youtube/answer/72431 | undated, read 2026-10-08 | n/a | Platform help text | YouTube | primary |
| Upload encoding: MP4, moov atom at the front (Fast Start); H.264, progressive, 4:2:0; AAC-LC or Opus at 48 kHz; frame rate as recorded (24, 25, 30, 48, 50, 60); 1080p SDR bitrate 8 Mbps standard and 12 Mbps high frame rate; "the player automatically adapts itself to the size of the video" | support.google.com/youtube/answer/1722171 | undated, read 2026-10-08 | n/a | Platform help text, all uploads (not Shorts-specific) | YouTube | primary, scoped to all uploads |
| "The maximum file size you can upload is 256 GB or 12 hours, whichever is less." Over 15 minutes needs a verified account | support.google.com/youtube/answer/71673 | undated, read 2026-10-08 | n/a | Platform help text, all uploads | YouTube | primary, scoped to all uploads |
| Shorts ads: 9:16 recommended; horizontal assets "will serve with blurred top and bottoms in the vertical Shorts experience"; "Video ads can be up to 3 minutes long, though only the first 60 seconds will play on the Shorts feed"; under 60 s recommended; channel description limited to 90 characters; campaign types Demand Gen, Video view, Video reach, Performance Max, App, Reservation; CTA button at 3 s (PMax, App, Demand Gen) or 10 s (Video view, Video reach) | support.google.com/google-ads/answer/16041697 | undated, read 2026-10-08 | n/a | Platform ads help text | Google | primary |
| Shorts ads "play between Shorts on YouTube", "supported across all devices, not only mobile", users "can immediately skip the ad by swiping up or down"; a view after 10 seconds of autoplay or a click; impression at playback start | support.google.com/displayvideo/answer/6274216 | undated, read 2026-10-08 | n/a | Platform ads help text | Google | primary |
| Instagram Reels: "You can record one or multiple clips that add up to 20 minutes." "Reels over 3 minutes won't be recommended to new audiences." | help.instagram.com/2720958398006062 (rendered in a headless browser) | undated, read 2026-10-08 | n/a | Platform help text | Meta | primary |
| Instagram Reels: "aspect ratio between 1.91:1 and 9:16"; minimum 30 FPS and minimum resolution of 720 pixels; cover photo 420 x 654 (1:1.55) | help.instagram.com/1038071743007909 (rendered) | undated, read 2026-10-08 | n/a | Platform help text | Meta | primary |
| Instagram Reels ads: 9:16, 1440 x 2560, 0 s to 15 min, 4 GB, MP4 or MOV | facebook.com/business/ads-guide/update/video/instagram-reels | undated, read 2026-10-08 (ledger row, brief 32, read 2026-09-10 and 2026-09-15) | n/a | Platform ads guide | Meta | primary, that placement |
| TikTok Content Posting API: "All TikTok creators can post 3-minute videos, while some have access to post 5-minute or 10-minute videos." API cap 10 minutes; 360 to 4096 px; 23 to 60 FPS; 4 GB; MP4 recommended | developers.tiktok.com/doc/content-posting-api-media-transfer-guide | last updated 2026-08-04, read 2026-10-08 | n/a | Platform developer docs | TikTok | primary, scoped to posting through the API |
| TikTok auction in-feed ads (non-Spark): 9:16 recommended (at or above 540 x 960), 16:9 and 1:1 accepted; up to 10 minutes; 500 MB | ads.tiktok.com/help/article/tiktok-auction-in-feed-ads | updated June 2026, read 2026-10-08 (ledger row, brief 32) | n/a | Platform ads help | TikTok | primary, auction in-feed only |
| TikTok Help Center, Camera tools: "Videos you record in TikTok can be up to 10 minutes long." "Videos you upload in TikTok can be up to 60 minutes long." Added 2026-10-08 when the wave two drafts were set side by side: the TikTok video specs research read this page at source (check 1 and check 2 captures), which this file had not reached | support.tiktok.com/en/using-tiktok/creating-videos/camera-tools (tiktok.com/support/faq_detail?id=7581821547946580492); captures research/tiktok-video-specs/check1-camera-2026-10-08.txt and check2-camera-2026-10-08.txt | undated, read 2026-10-08 | n/a | Platform help text, rendered | TikTok | primary, organic in-app scope |
| TikTok's help page "Making a post" gives no length figure: the app lets you "Select a maximum length"; web upload sends "your entire video" | support.tiktok.com/en/using-tiktok/creating-videos/making-a-post (rendered) | undated, read 2026-10-08 | n/a | Platform help text | TikTok | primary, as an absence |
| hubStudio YouTube module: upright or square and three minutes or less is marked Short; title 100 characters, description 5,000; no connection, YouTube keeps uploads from unaudited apps private; Publish interactively copies title, opens YouTube Studio, downloads the video; Altered content question; Channel tab: banner 2560 x 1440, profile picture 800 x 800, name 50, handle 3 to 30, description 1,000, keywords 500, up to 14 links | src/content/help/youtube.md | updated 2026-10-08 | n/a | First-party help center | hubStudio | first-party, help center |
| hubStudio Shorts autopilot: long video to 3, 5, 8 or 10 vertical shorts for YouTube Shorts, TikTok, Instagram Reels; 15 to 30, 30 to 60 or 60 to 90 s; 9:16 framing on the speaker; captions in five looks; hook line; MP4 at 1080 x 1920 saved to the Assets Library; caption per network; MP4, MOV, WebM up to 2 GB in | src/content/help/shorts-autopilot.md | updated 2026-10-08 | n/a | First-party help center | hubStudio | first-party, help center |

## Cleared for use

> YouTube categorizes any video uploaded on or after October 15, 2024 with a
> square or vertical aspect ratio, up to three minutes long, as a Short; videos
> uploaded before that date stay long-form.
> Source: YouTube Help, "Understand three-minute YouTube Shorts", read October
> 8, 2026. https://support.google.com/youtube/answer/15424877

> "You can upload Short videos with a maximum resolution of 1080p."
> Source: YouTube Help, "Get started creating YouTube Shorts", read October 8,
> 2026. https://support.google.com/youtube/answer/10059070

> "Any Short that is over one minute in duration with an active Content ID claim
> of any type, including manual claims, will be blocked globally on YouTube."
> Source: YouTube Help, English version, undated, read October 8, 2026.

> From September 24, 2026, new Shorts longer than one minute but under three
> minutes with an active Content ID claim are no longer blocked automatically
> and can stay available on YouTube. Shorts blocked worldwide still can't be
> monetized.
> Source: YouTube Help, French version of the same page, read October 8, 2026,
> our translation. https://support.google.com/youtube/answer/15424877?hl=fr

The two quotes are published together (R6): the English version is undated,
the French one dates the change, and neither is printed without the other.

> "Video ads can be up to 3 minutes long, though only the first 60 seconds will
> play on the Shorts feed."
> Source: Google Ads Help, "Your guide to YouTube Shorts ads", read October 8,
> 2026. https://support.google.com/google-ads/answer/16041697

## Derived (arithmetic, labeled as such on the page)

- 1080p in a 9:16 frame is 1080 x 1920 pixels. YouTube states "1080p"; the
  pixel pair is derived, never attributed to YouTube as a recommendation.
- A 9:16 thumbnail at 2160 x 3840 is exactly twice 1080 x 1920 on each side.

## Do not publish

| Claim | Where it was seen | Why not | Checked |
|---|---|---|---|
| "YouTube Shorts recommended size 1080 x 1920" as a YouTube statement | Most ranking blogs; one search summary attributed it to Google Ads help | Not on any YouTube or Google Ads page read. Google Ads page fetched twice: no pixel figure | 2026-10-08 |
| Shorts limited to 60 seconds | Three ranking pages | Superseded October 15, 2024 per YouTube | 2026-10-08 |
| 9:16 required for a Short | Two ranking pages | YouTube: square or vertical qualifies | 2026-10-08 |
| Shorts thumbnail 1280 x 720 | One ranking page | YouTube's thumbnail page gives 9:16 at 2160 x 3840 for Shorts | 2026-10-08 |
| Shorts accept 4K and are served at 1080p | One ranking page | YouTube says upload maximum 1080p for Shorts; no YouTube page found on playback | 2026-10-08 |
| Shorts max file size 2 GB | One ranking page | Not on a YouTube page; YouTube's general cap is 256 GB or 12 hours | 2026-10-08 |
| Custom Shorts thumbnails limited to Partner Program, launched July 25, 2026 | Trade press and a CEO post as reported | YouTube's help page says "verified" account, desktop only; no YouTube page read names the Partner Program or the date. The help page wins | 2026-10-08 |
| Instagram Reels 3-minute cap (January 2025 announcement) | Press reports of an executive's post | Superseded on Instagram's own help page: 20 minutes, over 3 minutes not recommended to new audiences | 2026-10-08 |
| "Sound increases conversions by over 20%" | Google Ads Shorts guide | Platform claim, no sample, period or method on the page | 2026-10-08 |
| Shorts monetization revenue share figures | YouTube Help 12504220 | Off-topic for a spec page | 2026-10-08 |
| "A Short over one minute with a Content ID claim is blocked worldwide" as the only rule | The English version of YouTube Help 15424877 (undated) | The French version of the same page says new Shorts over one minute and under three with a claim are no longer blocked automatically from September 24, 2026. Publish both versions, attributed, until they agree (watch row due 2026-11-08) | 2026-10-08 |

## Screenshot inventory

Saved to `research/youtube-shorts-specs/`, full-page JPEG captures from a
headless Chromium, en-US, 2026-10-08.

| File | What it shows | Captured | Source surface |
|---|---|---|---|
| 2026-10-08-yt-upload-shorts.jpg | Upload YouTube Shorts: square or vertical, up to 3 minutes, 15 at a time | 2026-10-08 | YouTube Help 12779649 |
| 2026-10-08-yt-three-minute-shorts.jpg | Three-minute Shorts, October 15, 2024, Content ID block, music 90 s | 2026-10-08 | YouTube Help 15424877 |
| 2026-10-08-yt-create-shorts.jpg | Shorts camera, choose a frame as thumbnail, 1080p maximum | 2026-10-08 | YouTube Help 10343433 |
| 2026-10-08-yt-get-started-shorts.jpg | Up to 3 minutes, upload vertical videos, 1080p maximum | 2026-10-08 | YouTube Help 10059070 |
| 2026-10-08-yt-thumbnails.jpg | Custom Shorts thumbnail, 2160 x 3840, 9:16, verified, desktop | 2026-10-08 | YouTube Help 72431 |
| 2026-10-08-yt-encoding.jpg | Recommended upload encoding settings | 2026-10-08 | YouTube Help 1722171 |
| 2026-10-08-yt-blog-tall-updates.jpg | October 3, 2024 announcement of 3-minute Shorts | 2026-10-08 | YouTube blog |
| 2026-10-08-gads-shorts-ads.jpg | Shorts ads guide: 9:16, 3 minutes, first 60 seconds | 2026-10-08 | Google Ads Help 16041697 |
| 2026-10-08-dv360-youtube-campaigns.jpg | Shorts ads play between Shorts, swipe to skip | 2026-10-08 | Display & Video 360 Help 6274216 |
| 2026-10-08-ig-record-reel.jpg | Reels up to 20 minutes, over 3 not recommended | 2026-10-08 | Instagram Help Center |
| 2026-10-08-ig-reel-size.jpg | Reels ratio 1.91:1 to 9:16, 720 px, 30 FPS | 2026-10-08 | Instagram Help Center |
| 2026-10-08-tiktok-media-transfer.jpg | Content Posting API video restrictions, 3 minutes for all | 2026-10-08 | TikTok for Developers |
| 2026-10-08-tiktok-auction-infeed.jpg | Rendered nearly blank in the headless browser; the page text was read by fetch the same day | 2026-10-08 | TikTok Ads Help |
| 2026-10-08-meta-ig-reels-ads.jpg | Instagram Reels ad specs | 2026-10-08 | Meta Ads Guide |

## R8. Reconciliation (filled after drafting)

Check 2 ran on 2026-10-08 in iteration 8, re-fetching the eight URLs the page
cites. Every quoted sentence was still on its page. Results and the number-by-
number reconciliation are recorded below.

| Number in the draft | Claims-table row | Result |
|---|---|---|
| Square or vertical, up to 3 minutes | Upload page, three-minute page | matches |
| October 15, 2024; announced October 3, 2024 | Three-minute page, YouTube blog | matches |
| 1080p maximum upload | Get started, Create Shorts | matches |
| 1080 x 1920 | Derived | labeled derived on the page |
| Over one minute with a Content ID claim, blocked globally (English page); new Shorts under 3 minutes no longer blocked automatically from September 24, 2026 (French page); a claim can cost monetization until resolved (spec row, blockquotes, paragraph after them, two FAQ answers, changelog row, corrected 2026-10-08) | Three-minute page, English and French rows | matches both versions |
| Music up to 90 s, some 60 or 30 s | Three-minute page | matches |
| 15 Shorts at a time | Upload page | matches |
| Thumbnail 9:16, 2160 x 3840, minimum height 640, JPG or PNG, 50 MB desktop | Thumbnail page | matches |
| 16:9 thumbnail on a vertical video replaced by an auto 4:5 | Thumbnail page | matches |
| MP4, H.264, AAC-LC or Opus, 48 kHz, 8 and 12 Mbps | Encoding page | matches |
| 256 GB or 12 hours | Upload-limits page | matches |
| Ads: 3 minutes, first 60 s, 9:16, blurred horizontal, 90-character description, CTA 3 s or 10 s | Google Ads page | matches |
| Ads play between Shorts, swipe to skip, view after 10 s | Display & Video 360 page | matches |
| Reels 20 minutes, over 3 not recommended, 1.91:1 to 9:16, 720 px, 30 FPS | Instagram help pages | matches |
| Reels ads 0 s to 15 min, 9:16 | Meta Ads Guide | matches |
| TikTok 3 minutes for all, 5 or 10 for some; API 10 minutes | TikTok for Developers | matches |
| TikTok 10 minutes recorded, 60 minutes uploaded (table row and the paragraph under it, added 2026-10-08) | TikTok Help Center, Camera tools row | matches the capture in research/tiktok-video-specs/ |
| TikTok in-feed ads up to 10 minutes, 9:16 recommended | TikTok Ads Help | matches |
| hubStudio: 3, 5, 8 or 10 shorts; 15 to 30, 30 to 60, 60 to 90 s; 1080 x 1920 MP4; banner 2560 x 1440; profile 800 x 800; title 100; description 5,000 | hubStudio help center | matches |

Corrected during reconciliation and check 2:

- Check 2 showed the 90-second music sentence sits under the Shorts Audio
  Library ("You can use any song available in the Shorts Audio Library"). The
  draft first said "most songs from YouTube's own library"; it now says songs
  picked from the Shorts audio library, in the body and the FAQ.
- Check 2 gave the thumbnail page's title as "Add custom thumbnails on
  YouTube". The draft's first citation used another title; corrected in the
  blockquote and the spec table.
- The draft's first line on what defines a Short said no hashtag is required.
  No YouTube page read says that; it now says the upload page lists no other
  condition and no separate button, which the upload page supports.
- "Before that date the limit was shorter" (the 60-second figure) is not on any
  YouTube page read. The draft now says only that many guides still give 60
  seconds, an observation from R2, and that YouTube's pages say three minutes.

Removed: nothing else in the draft lacked a row. The "Sources agreeing" and
"contested" columns of deviation 7 do not apply and were never added.
