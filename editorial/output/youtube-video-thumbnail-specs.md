---
title: YouTube Thumbnail Size 2026: Video and Banner Specs
slug: youtube-video-thumbnail-specs
description: YouTube thumbnail, video and banner specs read from YouTube Help: 3840x2160 thumbnails, upload encoding settings, banner safe area, and what breaks.
excerpt: YouTube now recommends 3840 by 2160 thumbnails. The video, thumbnail and channel art specs, each read from YouTube's own Help Center.
template: spec
---

<!-- HERO SECTION -->

# YouTube thumbnail size and video specs for 2026

YouTube now recommends custom thumbnails at 3840 by 2160 pixels, three times
the width most spec sheets still print. Before the pixels matter, though, the
account has to qualify: no phone verification, no custom thumbnail.

Reviewed October 8, 2026. Every spec below is read from YouTube's own help
pages, and each row names the page it came from.

<!-- INTRODUCTION -->

## What is the YouTube thumbnail size in 2026?

YouTube recommends 3840 by 2160 pixels for a video thumbnail: 16:9, at least
640 pixels wide, as JPG or PNG. The file can weigh up to 50MB from a
computer but only 2MB from a phone, and only a phone-verified account can
upload one. In hubStudio, you render it in the Image studio and crop it in the
Image editor.

<!-- SECTION: thumbnail specs -->

## What are YouTube's custom thumbnail rules?

| Spec | YouTube's figure | Source page |
|---|---|---|
| Recommended size, videos | 3840 x 2160 | Add custom thumbnails |
| Minimum width | 640 pixels | Add custom thumbnails |
| Ratio | 16:9 for videos, 9:16 for Shorts, 1:1 for podcast playlists | Add custom thumbnails |
| Formats | JPG or PNG | Add custom thumbnails |
| File size, from a computer | 50MB | Add custom thumbnails |
| File size, from a phone | 2MB (10MB for podcasts) | Add custom thumbnails |
| Who can upload one | Phone-verified accounts (intermediate features) | Feature access for creators |
| A/B test floor | One test thumbnail under 1280 x 720 drops all of them to 854 x 480 | A/B test titles and thumbnails |

> YouTube recommends custom video thumbnails at 3840 by 2160 pixels, at least
> 640 pixels wide, in a 16:9 ratio, as JPG or PNG, under 50MB from a computer
> or 2MB from a phone.
> Source: YouTube Help, "Add custom thumbnails on YouTube," read on YouTube's
> own page October 8, 2026. https://support.google.com/youtube/answer/72431

So 1280 by 720 isn't wrong, exactly. It has simply stopped being the
recommendation, and it now survives on YouTube's pages in one role only: the
floor for A/B tests. The thumbnail also doubles as the preview image in the
embedded player, which is why YouTube asks for it as large as possible.

Then there's the gate. Custom thumbnails sit in YouTube's intermediate tier,
which opens once you verify a phone number in YouTube Studio under Settings,
Channel, Feature eligibility. Videos longer than 15 minutes sit in the same tier, so one
verification clears both.

<!-- SECTION: safe area -->

## Where should text go on a YouTube thumbnail?

YouTube doesn't publish a safe area for thumbnails. Any pixel inset you've
seen quoted as YouTube's rule came from somewhere else.

What can be measured is the badge YouTube lays over thumbnails in search
results and on channel pages: the video's running time, in the lower right
corner.

> On a 500-pixel-wide desktop search result, the duration badge measured 36 to
> 42 pixels wide and 20 pixels tall, set 8 pixels in from the right and bottom
> edges.
> Source: hubStudio capture of youtube.com search results, October 8, 2026,
> signed out, 1366 by 900 window, two thumbnails measured from the page
> layout. An observation, not a YouTube rule.

Call it the bottom-right tenth of the frame, in both directions. Keep words,
logos and faces out of it.

Vertical video is its own case. A vertical video carrying a 16:9 custom
thumbnail gets an automatically generated 4:5 thumbnail on the home, explore
and subscription pages, YouTube says, while the custom one keeps showing in
the watch feed, in watch history and on computers. And an upload of three
minutes or less that's square or taller counts as a Short. For those, see the
YouTube Shorts specs page.

One check costs nothing. Design at 3840 wide, then shrink the file to 640
wide, the smallest YouTube accepts. Words that don't read there are too small.

<!-- SECTION: upload settings -->

## What are YouTube's recommended upload settings?

YouTube keeps its encoding advice on one page, the one its supported-formats
page sends you to for the details. Oddly, that page now opens with a note
that its features are only available to partners who use YouTube Studio
Content Manager. The settings themselves are plain export choices, and
they're the reference this page uses.

| Setting | YouTube's recommendation | Source page |
|---|---|---|
| Container | MP4, no edit lists, moov atom at the front (Fast Start) | Recommended upload encoding settings |
| Video codec | H.264, progressive scan, High Profile, 2 consecutive B frames, closed GOP of half the frame rate, CABAC, variable bitrate, 4:2:0 | Recommended upload encoding settings |
| Audio | AAC-LC, Opus or Eclipsa Audio; 48kHz; stereo, or stereo plus 5.1 | Recommended upload encoding settings |
| Frame rate | The rate it was shot at; 24, 25, 30, 48, 50 and 60 are common | Recommended upload encoding settings |
| Color, SDR | BT.709 | Recommended upload encoding settings |
| Aspect ratio | 16:9 on a computer; the player adapts to other shapes | Video resolution and aspect ratios |
| File types | MOV, MPEG-1, MPEG-2, MPEG4, MP4, MPG, AVI, WMV, MPEGPS, FLV, 3GPP, WebM, DNxHR, ProRes, CineForm, HEVC (H.265) | Supported YouTube file formats |
| Largest upload | 256GB or 12 hours, whichever is less | Upload videos longer than 15 minutes |
| Longest video, unverified account | 15 minutes | Upload videos longer than 15 minutes |

YouTube sets no bitrate limit. The figures below are its reference values, in
megabits per second, with the 16:9 pixel size it lists for each resolution.

| Resolution | 16:9 pixels | SDR, 24 to 30 fps | SDR, 48 to 60 fps | HDR, 24 to 30 fps |
|---|---|---|---|---|
| 8K | 7680 x 4320 | 80 to 160 | 120 to 240 | 100 to 200 |
| 4K | 3840 x 2160 | 35 to 45 | 53 to 68 | 44 to 56 |
| 1440p | 2560 x 1440 | 16 | 24 | 20 |
| 1080p | 1920 x 1080 | 8 | 12 | 10 |
| 720p | 1280 x 720 | 5 | 7.5 | 6.5 |
| 480p | 854 x 480 | 2.5 | 4 | Not supported |
| 360p | 640 x 360 | 1 | 1.5 | Not supported |

> YouTube's reference bitrates for SDR uploads at standard frame rates run
> from 1 Mbps at 360p to 80 to 160 Mbps at 8K, with 8 Mbps at 1080p and 35 to
> 45 Mbps at 4K. Audio: 128 kbps mono, 384 kbps stereo, 512 kbps for 5.1.
> Source: YouTube Help, "YouTube recommended upload encoding settings," read
> on YouTube's own page October 8, 2026, with pixel sizes from "Video
> resolution & aspect ratios." https://support.google.com/youtube/answer/1722171

Two footnotes from the same pages. New 4K uploads play in 4K only on a browser
or device that supports VP9. And since 2022, YouTube has been removing
playback at resolutions between 4K and 8K, so a 5K master may not play at 5K.

<!-- SECTION: channel art -->

## What size is a YouTube banner and profile picture?

| Asset | YouTube's figure | Source page |
|---|---|---|
| Banner, minimum | 2048 x 1152, 16:9 | Manage your channel branding |
| Banner, recommended | 2560 x 1440, especially for TV | Manage your channel branding |
| Banner safe area | 1235 x 338 for text and logos, at the minimum size | Manage your channel branding |
| Banner file size | 6MB or smaller | Manage your channel branding |
| Profile picture | JPG, GIF, BMP or PNG, no animated GIF, up to 15MB, shown at 98 x 98 | Manage your channel branding |
| Video watermark | Square, at least 150 x 150, under 1MB | Manage your channel branding |

> The banner's minimum upload is 2048 by 1152 pixels at 16:9, with a safe area
> for text and logos of 1235 by 338 at that size. YouTube recommends 2560 by
> 1440 and caps the file at 6MB.
> Source: YouTube Help, "Manage your channel branding," read on YouTube's own
> page October 8, 2026. https://support.google.com/youtube/answer/10456525

The 1546 by 423 safe area that circulates widely isn't on YouTube's page. It
looks like YouTube's figure scaled up to the 2560 canvas: 1235 by 338 times
1.25 comes to roughly 1544 by 423. That's our arithmetic, not YouTube's.

YouTube uses the same banner on computers, phones and TVs, shown differently
on each, and warns that it gets cropped on certain views and devices. It also
asks for no shadows, borders or frames around the image.

<!-- SECTION: failures -->

## What breaks a YouTube upload or thumbnail?

Each row below is a problem YouTube's own help pages describe, with the fix
they give.

| Symptom | What YouTube says | Source page |
|---|---|---|
| No option to upload a thumbnail | Custom thumbnails need a verified account | Add custom thumbnails |
| Upload stops at 15 minutes | Unverified accounts are capped at 15 minutes | Upload videos longer than 15 minutes |
| "Daily custom thumbnail limit reached" | Try again in 24 hours; limits vary by country, region and channel history | Add custom thumbnails |
| Thumbnail too heavy on a phone | Phones take 2MB for a video thumbnail; computers take 50MB | Add custom thumbnails |
| Soft A/B test thumbnails | One thumbnail under 1280 x 720 downscales all of them to 854 x 480 | A/B test titles and thumbnails |
| Bars around the picture | Don't add padding or black bars; the player sizes itself to the video | Video resolution and aspect ratios |
| Interlaced footage | Deinterlace before uploading: 1080i60 becomes 1080p30 | Recommended upload encoding settings |
| No end screen offered | The video has to run 25 seconds or longer | Upload YouTube videos |
| Video went up private | Closing the upload window before choosing visibility saves it as private | Upload YouTube videos |
| Thumbnail rejected with a strike | Nudity, hate speech, violence or harmful content; repeat offenses lose custom thumbnails for 30 days | Add custom thumbnails |

One more, for anyone working with generative engines. YouTube asks creators to
disclose realistic content that AI generated or meaningfully altered. Its
upload page still calls that setting Altered content; its disclosure policy
page calls it AI use, under Attributes. Same question, two labels, so look for
either one.

> YouTube lists using generative AI to create or improve a thumbnail, title or
> script as production assistance that creators don't need to disclose.
> Realistic content that AI generated or meaningfully altered must be
> disclosed.
> Source: YouTube Help, "Disclosing use of GenAI content," read on YouTube's
> own page October 8, 2026. https://support.google.com/youtube/answer/14328491

<!-- SECTION: hubStudio -->

## How does hubStudio fit with YouTube?

hubStudio doesn't upload to YouTube, and the reason is YouTube's own rule.

> Videos uploaded through YouTube's upload API from unverified API projects
> created after July 28, 2020 are restricted to private viewing until the
> project passes an audit.
> Source: YouTube Data API reference, "Videos: insert," read on Google's own
> developer page October 8, 2026.
> https://developers.google.com/youtube/v3/docs/videos/insert

So hubStudio doesn't connect to your channel at all. Its YouTube module
prepares the post instead. You render, pick or upload the video, have the
title (100 characters at most) and the description (5,000) written with AI or
type them yourself, and send the post for approval if your team works that
way. Then Publish interactively puts the title on your clipboard, opens
YouTube Studio and downloads the video. You publish from your own channel.

The Channel tab handles the channel art. It crops the banner to 2560 by 1440,
with a dashed frame over the middle strip every screen shows, and the profile
picture to an 800 by 800 square.

The thumbnail is the part you build. Render it in the Image studio in a
widescreen shape at the 4K setting, which goes up to 3840 pixels on the
ChatGPT Image engines. Open it in the Image editor, crop it to Wide (16:9),
add your words (a dark outline keeps light lettering readable on a light
picture), and save it as JPG or PNG. The editor is free. The render is
charged to your prepaid balance, at the price shown before it runs. The saved
copy sits in your Assets Library (the Assets Library page explains folders
and versions), and you add it in YouTube Studio during the upload.

The YouTube help article walks through every step, press by press. A team
that would rather hand off the whole film can brief the studio instead,
through the video production service.

<!-- SECTION: changelog -->

## Changelog

**October 8, 2026.** First published. Every figure read from YouTube Help
Center pages and YouTube's API reference, fetched October 8, 2026, plus one
labeled capture of the duration badge on youtube.com. The thumbnail recommendation is recorded at
3840 by 2160 with a 50MB desktop limit and a 2MB phone limit; 1280 by 720
appears only as the A/B test floor. Next scheduled review: January 8, 2027.

<!-- SECTION: FAQ -->

## Questions about YouTube specs

**What is the YouTube thumbnail size in 2026?**

YouTube recommends 3840 by 2160 pixels in a 16:9 ratio, at least 640 pixels
wide, saved as JPG or PNG. From a computer the file can reach 50MB; from a
phone, 2MB. The older 1280 by 720 figure still matters in one place: below it,
YouTube's A/B test drops every thumbnail in the test to 854 by 480.

**Why can't I upload a custom thumbnail on YouTube?**

Check verification first. Custom thumbnails are an intermediate
feature, and you get them by verifying a phone number in YouTube Studio under
Settings, Channel, Feature eligibility. YouTube's pages name other causes: the
daily custom thumbnail limit (try again in 24 hours), Community Guidelines
strikes, which cut how many you can upload, and the 2MB cap on a phone.

**What is the maximum thumbnail file size on YouTube?**

It depends on the device. YouTube allows 50MB for video, Shorts and podcast
thumbnails uploaded from a computer. From a phone, the limit is 2MB for a video
thumbnail and 10MB for a podcast. A full-size thumbnail over 2MB has to go up
from a computer.

**What resolution should I upload to YouTube?**

For the default 16:9 shape, YouTube lists eight sizes, from 426 by 240 up to
7680 by 4320, including 1920 by 1080 for 1080p and 3840 by 2160 for 4K. Other
shapes are fine: don't add black bars to reach 16:9, because the player sizes
itself to the video. New 4K uploads play in 4K only where VP9 is supported.

**What are YouTube's recommended upload settings?**

MP4 with the moov atom at the front, H.264 High Profile, progressive scan,
closed GOP of half the frame rate, variable bitrate, 4:2:0, and AAC-LC or Opus
audio at 48kHz. Keep the frame rate you shot at. For reference, YouTube lists
8 Mbps for 1080p and 35 to 45 Mbps for 4K at standard frame rates, SDR.

**What size is a YouTube banner and where is the safe area?**

Upload at least 2048 by 1152, at 16:9; YouTube recommends 2560 by 1440 and a
file of 6MB or less. At the minimum size, YouTube's safe area for text and
logos is 1235 by 338 pixels. The rest of the image gets cropped on certain
views and devices, YouTube warns, and it recommends the larger size
especially for TV.

**How long can a YouTube video be?**

Fifteen minutes until the account is verified with a phone number. After
that, YouTube takes uploads up to 256GB or 12 hours, whichever is less.
YouTube notes that limits changed in the past, so some older videos run
longer than 12 hours. For files over 20GB, it asks for an up-to-date browser.

<!-- CTA -->

CTA: Create your account

<!-- =====================================================================
FEATURE IMAGE: INSTRUCTION FOR CLAUDE CODE

Generate the feature (hero) image from the prompt below with the
generate-image-openai skill, convert to webp, then wire it in as the
article's featured image and OG image.

- Save to:    public/Images/insight-youtube-video-thumbnail-specs.webp
- Reference:  /Images/insight-youtube-video-thumbnail-specs.webp
- Format:     .webp, landscape 3:2, under ~250 KB, max 2000px wide
- Style rule: hubstudio-image-style-guide.md is binding. Authored editorial
              campaign photography, one light source, one shadow, prime-lens
              framing, f/2.8 to f/5.6, warm-shadow film grade, lifted black
              point, subtle grain, rule-of-thirds with negative space for
              typography. No named person in the prompt.

Creative angle: a thumbnail is one frame chosen from thousands and read at a
fraction of its size, so the image shows that choice being checked under a
loupe.

IMAGE PROMPT (use verbatim):

Editorial campaign photograph, landscape 3:2, cropped tight at desk height: the hand of a Chinese film editor in her thirties, the cuff of a worn indigo cotton shirt at the wrist, holds a small glass loupe over a printed contact sheet of video frames lying on a scuffed pale wooden desk in a lived-in editing room in Changsha. One frame on the sheet is circled by hand in red grease pencil. A single window light from camera left, late afternoon, soft but directional, casts one shadow of the hand and the loupe toward the right. Shot with a 50mm prime look at f/4: the loupe and the circled frame are sharp, the far edge of the sheet, a white ceramic mug with a tea stain and a coiled cable fall gently out of focus. Warm-shadow film grade in the manner of Portra 400, slightly desaturated mid-tones, lifted black point, fine natural film grain. Rule-of-thirds composition with the hand and loupe in the right third and generous empty desk surface on the left for typography. Real skin with visible knuckle creases, fine lines and short unpolished nails, a few dust specks on the sheet. The frames on the contact sheet are small soft landscapes and product shots with no readable text, no letters, no numbers, no logos and no watermark anywhere in the image.
===================================================================== -->

<!-- SCHEMA
Type: BlogPosting
FAQPage: yes, 7 questions
Breadcrumb: Home > Insights > YouTube Thumbnail Size 2026: Video and Banner Specs
Author: Erik Lindström (Film Director)
datePublished: 2026-10-08
Reviewed (spec pages only): 2026-10-08
-->

<!-- ASSET BRIEF
TABLES:
  Custom thumbnail rules: spec, YouTube's figure, source page (answer 72431,
    9890437, 16391400).
  Recommended upload settings: setting, recommendation, source page (answer
    1722171, 6375112, troubleshooter 2888402, answer 71673).
  Reference bitrates: resolution, 16:9 pixels, SDR standard and high frame
    rate, HDR standard frame rate (answer 1722171, 6375112).
  Channel art: asset, figure, source page (answer 10456525).
  Common failures: symptom, what YouTube says, source page.
  The publish step turns each "Source page" cell into a link to the YouTube
  Help URL in the research file's claims table.
CHARTS: none.
SCREENSHOTS: reuse appShots.youtube and appShots.youtubeChannel from
  src/data/app-shots.ts in the hubStudio section (localized fr and zh
  captures already exist). No new capture. The duration-badge capture in
  editorial/research/youtube-video-thumbnail-specs/ is evidence only and is
  not published.
DOWNLOADS: none.
INTERNAL LINKS:
  video production service -> /services/design/video-production
  YouTube help article -> /help/youtube
  Assets Library page -> /app/library
  YouTube Shorts specs page -> /resources/insights/youtube-shorts-specs
CLUSTER HUB: /resources/specs does not exist, so no hub link (settled
  fallback 5). The publish step lists the article under category Platform
  specs.
FIRST-PARTY FIGURES: hubStudio's title and description limits (100 and 5,000
  characters), the Channel tab crops (2560 x 1440 banner, 800 x 800 profile
  picture) and the Image studio's 4K setting (up to 3840 px on the ChatGPT
  Image engines) are taken from /help/youtube and /help/create-an-image, which
  already publish them.
AUTHOR: Erik Lindström, Film Director.
CHANGELOG: kept as the last section before the FAQ, so the file ends on the
  CTA. Add a dated line whenever a row is re-read or changed.
H1 CHANGED FROM THE BRIEF: working H1 "YouTube video and thumbnail specs for
  2026" became "YouTube thumbnail size and video specs for 2026" so the H1
  carries the primary query in the buyer's words (SPEC.md, structure rule 1).
RESEARCH FILE: editorial/research/youtube-video-thumbnail-specs.md
-->
