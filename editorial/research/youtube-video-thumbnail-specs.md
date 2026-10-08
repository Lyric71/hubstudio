# Research: youtube-video-thumbnail-specs

| Field | Value |
|---|---|
| Brief | 62 (wave two, `scripts/wave2/62-youtube-video-thumbnail-specs.mjs`) |
| Target query | youtube thumbnail size 2026 |
| Gap statement (one sentence) | The ranking spec sheets still print 1280x720 and a 2MB cap as YouTube's thumbnail rule while YouTube's own Help Center now recommends 3840x2160 with a 50MB desktop limit, print a 1546x423 banner safe area YouTube never publishes, and none cites the Help page behind each row or covers the phone verification gate, the 4:5 replacement on vertical videos or the A/B test downscale. |
| Research time spent | About 2 hours 15 minutes: 13 YouTube Help pages fetched and extracted, 5 SERP phrasings, 4 ranking pages read, one live-site capture |
| Written | 2026-10-08 |
| Method | Primary only. Every number is read from a YouTube Help Center page fetched unauthenticated on 2026-10-08 (check 1), extracted text saved in `youtube-video-thumbnail-specs/`. One observation from the live site, labeled as an observation. No deviation 7: these are readable platform pages (`editorial/CLAUDE.md`, Wave two). |

## R2. SERP map

Query: youtube thumbnail size 2026

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | kapwing.com | Tool vendor guide | Ratios, sizes, fonts | Read via snippet only; slug still says 2025 | 2026 title |
| 2 | thumbnailtest.com | Tool vendor guide | 1280x720, 640 min, 2MB, JPG/GIF/BMP/PNG | 3840x2160, the 50MB desktop limit, verification, 4:5 replacement, A/B downscale (page read) | 2026-01-12 |
| 3 | rightblogger.com | Blog | Resolution and ratio | Snippet only, 1280x720 framing | 2026 |
| 4 | quso.ai | Tool vendor | "Complete 2026 guide" | Snippet only | 2026 |
| 5 | piktochart.com | Design tool | Size plus tips | Snippet only | 2026 |
| 6 | socialsizes.io | Size sheet | Size | Snippet only | 2026 |
| 7 | alejandrorioja.com | Blog | Size and guidelines | Old framing | undated |
| 8 | krumzi.com | Tool vendor | 1280x720, 640x360 min, 2MB, GIF/BMP | Calls 1920x1080 "4K"; no verification, no device limits, no 4:5, no A/B (page read) | 2026 |
| 9 | dev.rightblogger.com | Duplicate of 3 | | | |

Query: youtube recommended upload settings (2026)

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | timeskip.io | Blog | Resolution settings | Snippet only | 2026 |
| 2 | postfa.st | Size sheet | Video size | No source per row | 2026 |
| 3 | socialchamp.com | Scheduling tool blog | Video size | No source per row | 2026 |
| 4 | compresto.app | Tool vendor | Codec, container, bitrate | Mixes 1080p 8 Mbps with 10 Mbps (that is the HDR row) without saying so | 2026 |
| 5 | levitatemedia.com | Agency | Best format | Snippet only | undated |
| 6 | collabpals.com | Calculator | File size | Not a spec | 2026 |
| 7 | framia.converge.ai | Tool vendor, many locales | Video size | No source per row | 2026 |

Query: youtube banner size (2026 safe area)

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | wyzowl.com | Agency guide | Banner size | 403 to fetch | 2026 |
| 2 | havecamerawilltravel.com | Blog | Banner sizing | Snippet only | undated |
| 3 | veed.io | Tool vendor | Banner size and examples | Snippet only | undated |
| 4 | podcastvideos.com | Blog | 2560x1440, 2048x1152, 6MB, safe area 1546x423 | Never prints YouTube's own 1235x338 figure (page read) | 2026-08-18 |
| 5 | collabpals.com | Tool | Seven image types | Tool, no source | 2026 |
| 6 | ytgrowth.io, dreampixelforge.com, postfa.st, framia | Size sheets | Banner size | Device crops (2560x423, 1855x423, 1546x423) YouTube does not publish | 2026 |

Query: youtube video specs / youtube video resolution (2026)

| # | Domain | Page type | What it answers | What it misses | Age |
|---|---|---|---|---|---|
| 1 | outfy.com | Tool vendor | Sizes and formats | Format list shorter than YouTube's | 2026 |
| 2 | bigvu.tv | Tool vendor | Video size | Snippet only | undated |
| 3 | klap.app | Tool vendor | Ratio | Snippet only | 2026 |
| 4 | postfa.st, framia, moda | Size sheets | 16:9 ladder, 256GB/12h | No verification gate, no encoding detail | 2026 |

**The bar:** single-topic pages of 800 to 2,000 words, one or two tables, no
source column, no dates per row. None combines video, thumbnail and channel
art with the Help page cited per row.

**The gap, in one sentence:** every ranking page either prints the retired
1280x720 and 2MB thumbnail rule or mixes it with the new 3840x2160 figure
without citing YouTube, and none covers the verification gate, the per-device
file limits, the 4:5 replacement on vertical videos or the A/B test downscale.

## R1 and R5. Claims table

All sources: YouTube Help Center (support.google.com/youtube), the platform's
own documentation. Who paid: YouTube. Sample size and method: not applicable
(platform's own published specification). Page dates: YouTube Help pages show
no last-updated date; the fetch date is recorded instead.

| Claim | Source URL | Date | Sample size | Method | Who paid | Confidence |
|---|---|---|---|---|---|---|
| Custom thumbnails: recommended 3840x2160 for videos, 2160x3840 for Shorts; min width 640 (videos), min height 640 (Shorts) | support.google.com/youtube/answer/72431 | fetched 2026-10-08 | n/a | Platform help page | YouTube | primary |
| Thumbnail formats "such as JPG or PNG" | answer/72431 | 2026-10-08 | n/a | Platform help | YouTube | primary |
| Thumbnail file limits: mobile 2 MB (video), 10 MB (podcasts); desktop 50MB (video, Shorts, podcast) | answer/72431 | 2026-10-08 | n/a | Platform help | YouTube | primary |
| Thumbnail ratio 16:9 for videos, 9:16 Shorts, 1:1 podcast playlists | answer/72431 | 2026-10-08 | n/a | Platform help | YouTube | primary |
| Thumbnail is also the preview image in the embedded player | answer/72431 | 2026-10-08 | n/a | Platform help | YouTube | primary |
| Vertical videos with 16:9 custom thumbnails replaced by auto-generated 4:5 thumbnail on home, explore, subscriptions; custom stays on watch feed, history, non-mobile | answer/72431 | 2026-10-08 | n/a | Platform help | YouTube | primary |
| Custom thumbnails need a verified account; Shorts custom thumbnails only in YouTube Studio on a computer | answer/72431 | 2026-10-08 | n/a | Platform help | YouTube | primary |
| Custom thumbnails are an intermediate feature unlocked by phone verification; same tier as videos over 15 minutes | answer/9890437, answer/9891124 | 2026-10-08 | n/a | Platform help | YouTube | primary |
| Verify phone: Studio, Settings, Channel, Feature eligibility, Intermediate features, Verify phone number; code by text or voice call | answer/9891124 | 2026-10-08 | n/a | Platform help | YouTube | primary |
| "Daily custom thumbnail limit reached": retry in 24 hours; limit varies by country, region, channel history | answer/72431 | 2026-10-08 | n/a | Platform help | YouTube | primary |
| Thumbnail policy: rejection and strike for nudity, hate speech, violence, harmful content; repeat offenses remove custom thumbnails for 30 days or terminate | answer/72431 | 2026-10-08 | n/a | Platform help | YouTube | primary |
| A/B test: up to 3 titles and thumbnails; desktop only; advanced features needed; not for Shorts; winner by watch time; up to 2 weeks | answer/16391400 | 2026-10-08 | n/a | Platform help | YouTube | primary |
| A/B test: any thumbnail under 1280x720 downscales every test thumbnail to 854x480 | answer/16391400 | 2026-10-08 | n/a | Platform help | YouTube | primary |
| Upload up to 3 minutes, square or taller, counts as a Short | answer/16391400 (FAQ note) | 2026-10-08 | n/a | Platform help | YouTube | primary |
| Encoding: MP4, no edit lists, moov atom at front; AAC-LC or Opus or Eclipsa Audio, 48kHz; H.264 progressive, High Profile, 2 B frames, closed GOP of half the frame rate, CABAC, VBR, 4:2:0 | answer/1722171 | 2026-10-08 | n/a | Platform help | YouTube | primary |
| Encoding page opens with "These features are only available to partners who use YouTube Studio Content Manager." | answer/1722171 | 2026-10-08 | n/a | Platform help | YouTube | primary |
| Frame rate: upload at recorded rate; common 24, 25, 30, 48, 50, 60; deinterlace (1080i60 to 1080p30) | answer/1722171 | 2026-10-08 | n/a | Platform help | YouTube | primary |
| SDR bitrates (standard / high frame rate): 8K 80-160 / 120-240; 4K 35-45 / 53-68; 1440p 16 / 24; 1080p 8 / 12; 720p 5 / 7.5; 480p 2.5 / 4; 360p 1 / 1.5 Mbps | answer/1722171 | 2026-10-08 | n/a | Platform help | YouTube | primary |
| HDR bitrates: 1080p 10 / 15; 4K 44-56 / 66-85 Mbps; 480p and 360p not supported | answer/1722171 | 2026-10-08 | n/a | Platform help | YouTube | primary |
| Audio: mono 128, stereo 384, 5.1 512 kbps | answer/1722171 | 2026-10-08 | n/a | Platform help | YouTube | primary |
| SDR color: BT.709; 4K uploads viewed in 4K need VP9 support | answer/1722171 | 2026-10-08 | n/a | Platform help | YouTube | primary |
| Standard ratio on computer 16:9; player adapts to other ratios; do not add padding or black bars | answer/6375112, answer/57407 | 2026-10-08 | n/a | Platform help | YouTube | primary |
| 16:9 ladder: 7680x4320, 3840x2160, 2560x1440, 1920x1080, 1280x720, 854x480, 640x360, 426x240 | answer/6375112 | 2026-10-08 | n/a | Platform help | YouTube | primary |
| Since 2022 playback between 4K and 8K (for example 5K) being removed | answer/6375112 | 2026-10-08 | n/a | Platform help | YouTube | primary |
| Default upload length 15 minutes; verified accounts longer | answer/71673 | 2026-10-08 | n/a | Platform help | YouTube | primary |
| Max upload 256 GB or 12 hours, whichever is less; browser up to date for files over 20 GB | answer/71673 | 2026-10-08 | n/a | Platform help | YouTube | primary |
| Supported formats: MOV, MPEG-1, MPEG-2, MPEG4, MP4, MPG, AVI, WMV, MPEGPS, FLV, 3GPP, WebM, DNxHR, ProRes, CineForm, HEVC (H.265) | support.google.com/youtube/troubleshooter/2888402 | 2026-10-08 | n/a | Platform help | YouTube | primary |
| Title 100 characters, description 5,000 characters, no invalid characters | answer/57407 | 2026-10-08 | n/a | Platform help | YouTube | primary |
| End screen needs a video of 25 seconds or longer | answer/57407 | 2026-10-08 | n/a | Platform help | YouTube | primary |
| Up to 15 videos uploaded at a time; closing upload window before visibility saves as private | answer/57407 | 2026-10-08 | n/a | Platform help | YouTube | primary |
| Upload page names the setting "Altered content"; disclosure policy page names it "AI use" under Attributes | answer/57407, answer/14328491 | 2026-10-08 | n/a | Platform help | YouTube | primary (YouTube's two pages disagree on the label) |
| AI used to create or improve a thumbnail is "production assistance", not disclosed; realistic generated or meaningfully altered content must be disclosed | answer/14328491 | 2026-10-08 | n/a | Platform help | YouTube | primary |
| YouTube may label automatically content carrying C2PA metadata | answer/14328491 | 2026-10-08 | n/a | Platform help | YouTube | primary |
| Banner: min 2048x1152, 16:9; safe area for text and logos 1235x338 at the minimum; 2560x1440 recommended (especially TV); 6 MB; no shadows, borders, frames; same banner across computer, mobile, TV, shown differently | answer/10456525 | 2026-10-08 | n/a | Platform help | YouTube | primary |
| Profile picture: JPG, GIF, BMP or PNG, no animated GIF; 15 MB max; renders at 98x98 | answer/10456525 | 2026-10-08 | n/a | Platform help | YouTube | primary |
| Watermark: min 150x150, square, under 1 MB; not shown on made-for-kids videos | answer/10456525 | 2026-10-08 | n/a | Platform help | YouTube | primary |
| Channel name and handle each change twice in 14 days; up to 14 profile links | answer/2972003 | 2026-10-08 | n/a | Platform help | YouTube | primary |
| Duration badge sits in the thumbnail's lower right corner; on a 500x281 desktop search thumbnail it measured 36 to 42 px wide, 20 px tall, 8 px in from the right and bottom edges | Live capture, youtube.com search results, 1366x900 viewport, signed out | 2026-10-08 | 2 thumbnails measured | DOM bounding boxes read with Playwright | n/a | primary observation, single capture |
| Uploads through videos.insert from unverified API projects created after 28 July 2020 are restricted to private viewing until the project passes an audit | developers.google.com/youtube/v3/docs/videos/insert | fetched 2026-10-08 | n/a | Platform developer reference | YouTube | primary |
| Derived: 3840 is three times 1280 | arithmetic | 2026-10-08 | n/a | Arithmetic | n/a | derived |
| Derived: banner safe area scaled to the 2560 canvas is about 1544x423 (x1.25) | arithmetic on answer/10456525 | 2026-10-08 | n/a | Arithmetic | n/a | derived, labeled |
| hubStudio YouTube module: video, title (100) and description (5,000), Publish interactively (title to clipboard, YouTube Studio opens, video downloads); no connection because YouTube keeps uploads from unaudited apps private; thumbnail added in YouTube Studio | src/content/help/youtube.md | updated 2026-10-08 | n/a | First-party help | hubStudio | primary (first-party) |
| hubStudio Channel tab: banner cropped to 2560x1440 with a dashed frame on the strip that shows everywhere; profile picture square 800x800 | src/content/help/youtube.md | 2026-10-08 | n/a | First-party help | hubStudio | primary (first-party) |
| Image studio: ChatGPT Image engines at 4K render up to 3840 px; write legible text in a picture; widescreen shape | src/content/help/create-an-image.md, hubstudio-positioning.md | 2026-10-08 | n/a | First-party help | hubStudio | primary (first-party) |
| Image editor: free, in the browser; Crop "Wide 16:9, made for YouTube, X"; Text with dark outline or soft shadow; Save as PNG, JPG or WEBP with width and height; edits pictures up to 4,096 px on the long side | src/content/help/assets-library.md | 2026-10-08 | n/a | First-party help | hubStudio | primary (first-party) |

## Cleared for use

> YouTube recommends custom video thumbnails at 3840 by 2160 pixels, at least
> 640 pixels wide, in a 16:9 ratio, as JPG or PNG, under 50MB from a computer
> or 2MB from a phone.
> Source: YouTube Help, "Add custom thumbnails on YouTube", read October 2026.
> https://support.google.com/youtube/answer/72431

> If any thumbnail in an A/B test is below 1280 by 720, YouTube downscales
> every thumbnail in that test to 854 by 480.
> Source: YouTube Help, "A/B test titles & thumbnails", read October 2026.
> https://support.google.com/youtube/answer/16391400

> Banner: 2048 by 1152 minimum at 16:9, 2560 by 1440 recommended, 6MB or
> smaller, and a safe area for text and logos of 1235 by 338 at the minimum
> size.
> Source: YouTube Help, "Manage your channel branding", read October 2026.
> https://support.google.com/youtube/answer/10456525

> The maximum upload is 256GB or 12 hours, whichever is less, and an
> unverified account stops at 15 minutes.
> Source: YouTube Help, "Upload videos longer than 15 minutes", read October
> 2026. https://support.google.com/youtube/answer/71673

## Do not publish

| Item | Reason |
|---|---|
| 1280x720 as the current recommended thumbnail size | Retired on YouTube's page; now 3840x2160. 1280x720 survives only as the A/B test threshold, and is printed only in that role |
| "Thumbnails must be under 2MB" as a general rule | 2MB is the mobile upload limit only; desktop is 50MB |
| GIF and BMP as thumbnail formats | YouTube's page names JPG and PNG ("such as"); GIF/BMP come from spec sheets and from the profile picture rule |
| 1546x423 as YouTube's banner safe area; device crops 2560x423, 1855x423, 1546x423 | Not on any YouTube page fetched; only the 1235x338 figure at the minimum size is YouTube's. The scaled figure runs once, labeled as arithmetic |
| A thumbnail safe area in pixels or percent as YouTube's rule | YouTube publishes none. The duration badge is printed as a single observation, not a rule |
| 1080x1920 Shorts specs, Shorts length and Shorts thumbnails in depth | Belongs to the companion page youtube-shorts-specs |
| Click-through-rate claims about thumbnails (faces, colors, text size) | No primary source with a method; YouTube's A/B tool measures watch time, not CTR |
| HDR upload settings in detail | Separate YouTube page, not needed for the query; HDR bitrate rows are printed, nothing else |
| hubStudio sets the thumbnail, uploads, schedules or connects to YouTube | False: help says the person uploads and adds a thumbnail in YouTube Studio |
| MKV as a format YouTube accepts | Listed in hubStudio's help table of YouTube's limits, absent from YouTube's supported formats list (see run log, contradictions) |

## Screenshot inventory

| File | What it shows | Captured | Source surface |
|---|---|---|---|
| yt-help-72431-2026-10-08.txt | Custom thumbnails page, extracted body | 2026-10-08 | support.google.com/youtube/answer/72431 |
| yt-help-1722171-2026-10-08.txt | Recommended upload encoding settings | 2026-10-08 | answer/1722171 |
| yt-help-6375112-2026-10-08.txt | Video resolution and aspect ratios | 2026-10-08 | answer/6375112 |
| yt-help-57407-2026-10-08.txt | Upload YouTube videos | 2026-10-08 | answer/57407 |
| yt-help-71673-2026-10-08.txt | Upload videos longer than 15 minutes | 2026-10-08 | answer/71673 |
| yt-help-troubleshooter-2888402-2026-10-08.txt | Supported file formats | 2026-10-08 | troubleshooter/2888402 |
| yt-help-10456525-2026-10-08.txt | Manage your channel branding | 2026-10-08 | answer/10456525 |
| yt-help-2972003-2026-10-08.txt | Manage your channel's profile | 2026-10-08 | answer/2972003 |
| yt-help-9890437-2026-10-08.txt | Feature access tiers | 2026-10-08 | answer/9890437 |
| yt-help-9891124-2026-10-08.txt | Get intermediate and advanced features | 2026-10-08 | answer/9891124 |
| yt-help-16391400-2026-10-08.txt | A/B test titles and thumbnails | 2026-10-08 | answer/16391400 |
| yt-help-14328491-2026-10-08.txt | Disclosing use of GenAI content | 2026-10-08 | answer/14328491 |
| yt-help-4603579-2026-10-08.txt | Partner formatting specs (context only, not cited) | 2026-10-08 | answer/4603579 |
| yt-dev-videos-insert-2026-10-08.txt | YouTube Data API videos.insert, private-viewing restriction excerpt | 2026-10-08 | developers.google.com/youtube/v3/docs/videos/insert |
| youtube-search-thumbnail-duration-badge-2026-10-08.png | One desktop search-result thumbnail (YouTube Creators' own video) with its 7:21 duration badge, lower right | 2026-10-08 | youtube.com/results, signed out, 1366x900 |

## R8. Reconciliation (filled after drafting)

Check 2, 2026-10-08 (iteration 8): every cited URL re-fetched and the quoted
strings found again on the served page: answer/72431 (7 of 7 strings),
1722171 (9 of 9), 6375112 (4 of 4), 71673 (3 of 3, one behind a non-breaking
space), troubleshooter/2888402 (4 of 4), 10456525 (7 of 7), 16391400 (3 of 3),
14328491 (4 of 4), 57407 (5 of 5), 9890437 (2 of 2), 9891124 (2 of 2), the
videos.insert developer page (2 of 2). No figure moved between check 1 and
check 2.

Every number in the draft traced to a row above:

| Draft figure | Claims row |
|---|---|
| 3840 x 2160, 640 wide, 16:9, 9:16, 1:1, JPG or PNG, 50MB, 2MB, 10MB | 72431 |
| "three times the width" | derived, 3840 / 1280 |
| 1280 x 720 and 854 x 480 (A/B test), up to 3, two weeks not used | 16391400 |
| Intermediate tier, phone verification, Feature eligibility path, 15 minutes | 9890437, 9891124, 71673 |
| Badge 36 to 42 by 20 px, 8 px inset, 500 px thumbnail, "bottom-right tenth" | live capture; tenth derived as (42 + 8) / 500 and (20 + 8) / 281 |
| 4:5 replacement on vertical videos | 72431 |
| Three minutes, square or taller, counts as a Short | 16391400 |
| Encoding table, bitrates, audio 128 / 384 / 512 kbps, 48kHz, BT.709, VP9, Content Manager note, 1080i60 to 1080p30 | 1722171 |
| 16:9 ladder (eight sizes), 2022 removal between 4K and 8K | 6375112 |
| File types | troubleshooter 2888402 |
| 256GB, 12 hours, 20GB browser note | 71673 |
| Banner 2048 x 1152, 2560 x 1440, 1235 x 338, 6MB; profile 15MB, 98 x 98; watermark 150 x 150, 1MB | 10456525 |
| 1546 x 423 (printed only as a figure that is not YouTube's), 1544 x 423 | derived, x1.25, labeled as arithmetic |
| 24 hours, 30 days, strike categories | 72431 |
| 25 seconds end screen, private on early close, Altered content label, 100 and 5,000 characters | 57407 |
| AI use label, thumbnail as production assistance | 14328491 |
| July 28, 2020 API restriction | videos.insert |
| hubStudio: 100 / 5,000 characters, 2560 x 1440 banner, 800 x 800 picture, Publish interactively | src/content/help/youtube.md |
| hubStudio: 4K up to 3840 px, Wide 16:9 crop, dark outline, JPG or PNG save | create-an-image.md, assets-library.md |

Removed during drafting because they were not in this file: "1920 by 1080 and
3840 by 2160 are the common choices" (no source), "a 3840 by 2160 JPG fits
easily under 50MB" (no source), "the full banner shows mainly on TV" and "the
safe strip sits in the middle" as YouTube statements (YouTube says neither;
the middle strip stays only where hubStudio's help says it), "the
verification gate catches more teams than the pixels do" (no data), and the
symptom "combing" (renamed "Interlaced footage").
