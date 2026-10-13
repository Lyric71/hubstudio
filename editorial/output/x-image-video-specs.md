---
title: X Image and Video Specs for 2026
slug: x-image-video-specs
description: X post image sizes, multi-picture posts, video limits, profile and header photos for 2026, read from X's own Help Center and Business specs, dated.
excerpt: X's photo, video, header and ad specs, read from X's own pages on October 14, 2026, with every conflict between those pages printed.
template: spec
---

<!-- HERO SECTION -->

# X image size 2026: posts, video, headers and ads, from X's own pages

X doesn't publish a pixel size for a post photo. It publishes a shape
window and a weight cap. And three of its own pages disagree on how long a
video can run.

<!-- INTRODUCTION -->

## What is the best X image size in 2026?

X image size in 2026 is a window, not a number. X's help center says a
single photo shows in full anywhere from 2:1 to 3:4, up to 5MB, as a JPEG,
PNG or GIF. A 16:9 frame sits well inside that window, and hubStudio's Image
editor marks 1600 by 900 Best for an X post.

Reviewed October 14, 2026. Every number here comes from X's Help Center, X's
ads creative specs or X's developer documentation, read directly that day,
plus two dated X blog posts on how it crops images. The help and developer
pages carry no date, so each row is dated by the read. Where two X pages
disagree, both values are printed and each page is named.

<!-- SECTION: Post image specs -->

## X post image specs: files, weight and shape

| What | X's limit | Source, read October 14, 2026 |
|---|---|---|
| One photo, shape | 2:1 to 3:4 shown in full | Help: How to post photos or GIFs |
| Photo weight | 5MB | Help: How to post photos or GIFs |
| Animated GIF weight | 5MB on mobile, 15MB on the web | Help: How to post photos or GIFs |
| Image files, app | GIF, JPEG, PNG; no BMP or TIFF | Help: How to post photos or GIFs |
| Image files, API | JPG, PNG, GIF, WEBP; GIF up to 15 MB | Developer docs: Media best practices |
| GIF frame, API | Up to 1280 x 1080 and 350 frames recommended | Developer docs: Media best practices |
| Media per post | Up to 4 items, mixed (2 photos, 1 GIF, 1 video) | Help: How to Post |
| Media per post, API | 4 photos, or 1 animated GIF, or 1 video | Developer docs: Create Posts |
| Characters | Photos and GIFs don't count against the 280 | Help: How to post photos or GIFs |

> X's help center says a single photo with a standard aspect ratio, from 2:1
> to 3:4, "will display in full," and that what you see in the composer is
> what you get on X. Read directly from the help article, which carries no
> date.
> Source: X Help Center, "How to post photos or GIFs on X," read October 14,
> 2026.
> https://help.x.com/en/using-x/posting-gifs-and-pictures

Many size guides print 1200 by 675 as "the" X post size. You won't find it
on X. None of the pages read for this guide gives a pixel size for a post
photo; the pixels are your call, as long as the shape stays in the window.

WebP is the one file conflict. X's developer documentation lists it; the
consumer help article lists GIF, JPEG and PNG only. A JPEG or a PNG under
5MB clears both pages.

<!-- SECTION: Multi-picture posts -->

## How does X crop a post with two, three or four pictures?

X doesn't say. Its pages give the four-item limit and the single-photo
window, then point you to the composer preview. None of the X pages read for
this guide describes how the timeline lays out or crops two, three or four
pictures.

| Question | What X's own pages say | Source |
|---|---|---|
| How many pictures fit? | Up to 4 media items in one post | Help: How to Post |
| Is one picture cropped? | Not if its shape is between 2:1 and 3:4 | Help: How to post photos or GIFs |
| Very long or very wide? | Possible exceptions, presented to keep the focal point | X blog, October 1, 2020 |
| Two, three or four pictures? | No layout or crop published | None of the 11 X pages read |
| How do I check? | The composer shows what will post | Help article; X blog, May 19, 2021 |

> X began cropping timeline images with a saliency algorithm in 2018. In
> 2021 it moved to showing standard aspect ratio photos in full on iOS and
> Android, launched that to everyone, and added a true preview of the image in
> the composer, according to its engineering blog.
> Source: X engineering blog, "Sharing learnings about our image cropping
> algorithm," May 19, 2021, read October 14, 2026.
> https://blog.x.com/engineering/en_us/topics/insights/2021/sharing-learnings-about-our-image-cropping-algorithm

The layout ratios that circulate for multi-picture posts (one set for two,
another for three, a grid for four) come from size guides. They don't appear
on X's help center, in its developer documentation or on its blog. They are
observations, with no X page behind them.

What works in production instead (this is our practice, not X's spec):

- **Leave room on every side.** Put the subject and any words in the middle
  of the frame, with margin all round, so a tighter cell can't reach them.
- **Load every picture before you judge.** The composer preview is the only
  view X stands behind. Read it with all four pictures in place.
- **Reorder in the composer.** On iOS, X's help says you can tap and hold a
  photo to drag it into a new place once two or more are selected.

<!-- SECTION: Video limits -->

## How long can a video on X be?

For a standard account posting on the web: 140 seconds and 512MB. Past
that, the answer depends on how you upload and which X page you believe.

| Upload route | Length | Weight | Frame and shape | Source |
|---|---|---|---|---|
| Web, no subscription | Up to 140 seconds | 512MB | 32 x 32 to 1920 x 1200 (or 1200 x 1900); 1:2.39 to 2.39:1; 40 fps; 25 Mbps | Help: How to share and watch videos |
| Web, Premium | Under 4 hours at 1080p; 2 to 4 hours at 720p | 16GB | As above | Help: How to share and watch videos |
| Premium, by the Premium page | About 3 hours at 1080p, x.com and iOS only | 8GB | Not stated | Help: About X Premium |
| API, default account | 0.5 seconds to 20 minutes | 8 GB | 32 x 32 to 1280 x 1024; 1:3 to 3:1; 60 fps or less | Developer docs: Media best practices |
| API, Premium or verified | 0.5 seconds to 125 minutes | 16 GB | As above | Developer docs: Media best practices |

> Three X pages give three ceilings for a long video. The video help article
> says under four hours at 1080p and 16GB for subscribers. The Premium page
> says about three hours and 8GB. The developer docs say 125 minutes and 16 GB
> through the API, and add that "Post-video caps match the X app."
> Source: X Help Center, "How to share and watch videos on X" and "About X
> Premium"; X developer documentation, "Media best practices"; read October
> 14, 2026.
> https://help.x.com/en/using-x/x-videos

The build that clears every route: H.264 video with AAC audio, 1280 by 720
for landscape (or 720 by 720 square), 30 frames a second, under 140 seconds
and under 512MB.
Those are the codecs and frames X's developer docs recommend, and they sit
inside the web limits too. X's organic help names no container; its ads specs
take MP4 or MOV, so an MP4 is the safe export. The docs add that an account without a subscription gets 720p
playback. Only subscribers get 1080p back.

Two behaviors to plan for. Videos of 60 seconds or less loop. And Premium
subscribers can download your video unless you switch off "Allow video to be
downloaded" while composing; X's help says that setting can't be changed
after the post goes out.

<!-- SECTION: Profile and header -->

## What is the X header photo size?

1500 by 500 pixels, by X's recommendation. The profile photo is 400 by 400.

| Slot | Size X recommends | Files and weight | Source |
|---|---|---|---|
| Header ("banner") | 1500 x 500 | JPG, GIF or PNG; no animated GIF; no weight given | Help: How to customize your profile |
| Profile photo | 400 x 400 | JPEG, GIF or PNG; 2MB; no animated GIF | Help: Help with uploading a profile photo |

> X's profile help recommends a 1500 by 500 header and a 400 by 400 profile
> photo, caps the profile photo at 2MB, and says 60 pixels at the top and
> bottom of the header could be cropped on some monitors and browsers.
> Source: X Help Center, "Help with uploading a profile photo," read October
> 14, 2026.
> https://help.x.com/en/managing-your-account/common-issues-when-uploading-profile-photo

Keep the header's words and logo inside the middle band, clear of those 60
pixels. X gives no file-size cap for the header itself, so don't trust one
you read elsewhere.

<!-- SECTION: Ad specs -->

## X ad specs: image, video, vertical video and carousel

These are ads only. They live in X's ads creative specs, and they don't
track the organic rules above. An organic photo gets a shape window; an image
ad gets six named shapes, each with its pixels. A web video upload stops at
512MB; a video ad can weigh 1 GB.

| Ad format | Files and weight | Shapes and pixels | Length or count | Source |
|---|---|---|---|---|
| Image ad | PNG or JPEG recommended; a GIF renders static; 5MB | 1:1 at 1080 x 1080; 1.91:1 at 2064 x 1080; 16:9 at 1920 x 1080; 9:16 at 1080 x 1920; 4:5 at 1440 x 1800; 2:3 at 1080 x 1620 | One image | X Ads creative specs |
| Video ad | MP4 or MOV; 1 GB, under 30 MB recommended; H264, AAC LC | 1200 x 1200 for 1:1 or 1920 x 1080 for 16:9 recommended | 15 seconds or less recommended; up to 2:20 | X Ads creative specs |
| Vertical video ad | H264, AAC LC; 25 Mbps max | 9:16, 720 x 1280 to 1080 x 1920 | Under 15 seconds recommended; up to 2:20 | X Ads creative specs |
| Carousel ad | Images or videos, one shape per carousel | 800 x 418 (1.91:1) or 800 x 800 (1:1) recommended for images | 2 to 6 slides | X Ads creative specs |

> X's ads specs recommend video ads of 15 seconds or less, support up to two
> minutes 20 seconds, cap the file at 1 GB and strongly recommend staying
> under 30 MB. Select advertisers can request up to 10 minutes.
> Source: X Help Center, "X Ads creative specs," read October 14, 2026.
> https://help.x.com/en/business-and-advertising/creative-ad-specifications

Ad copy follows the post rule, 280 characters, and each link takes 23 of
them. X recommends a logo held in the upper left of a video ad, plus captions
or text overlays. Not every format is open to self-serve advertisers, X
notes. For the others, it points you to an account manager or a support
ticket.

<!-- SECTION: Upload failures -->

## Why X uploads fail

Each cause below comes from X's own pages.

- **The wrong file.** BMP and TIFF are refused for posts and image ads.
- **A GIF that doesn't loop.** X shows it as a still image. In an image ad,
  any uploaded GIF renders static.
- **An animated profile or header.** Neither slot takes an animated GIF,
  X says.
- **A heavy profile photo.** Over 2MB, it fails.
- **A video past the account's cap.** Through the API, X refuses it at posting
  time ("This user is not allowed to post a video longer than N minutes"),
  even when the upload itself went through.
- **Changing your mind on downloads.** The setting is fixed once the post is
  out. Delete and repost to change it.

<!-- SECTION: hubStudio -->

## How hubStudio posts pictures to X

Connect your X account once on My Connections. Then, in the X module, pick a
format (Text only, + Image, or + 2 to 4 pictures), write a brief and click
Draft with AI, or Write it myself to type the post with no AI run. The X post
format skill, picked by default, carries X's posting rules, and the counter
counts 280 characters the way X does.

Pictures come from a render, the Assets Library or an upload. Through
hubStudio, X takes JPG, PNG, WebP and GIF up to 5 MB each; an animated GIF up
to 15 MB goes out alone, as the only picture of its post.

The pencil on a picture opens the Image editor on its Social panel, set to X.
For a post it offers Post, wide (1600 by 900, marked Best), Post, square,
Post, portrait and One of two; Header photo and Profile photo sit on the same
list. Crop the picture or fit it whole over a blurred copy, and the
editor shows in dashed lines how X crops it beside another picture. Editing
is free.

Publish now or schedule it, on up to 20 accounts. The queue is checked every
five minutes, and each post is checked against X's limits again before it
goes. A temporary error on X's side is retried, three attempts in all.

Video is the exception. X takes no video from hubStudio yet, so a clip goes
out through X's own composer, which the Publish manually tab opens with your
copy in it. The publishing page of the app covers the other networks.

Each post sent to X through hubStudio is charged against your prepaid
balance, and the price shows before you send. Posting it yourself in X's
composer costs nothing. The LinkedIn and Instagram spec guides in the
platform specs library cover the other feeds. Teams that would rather hand
the channel over can brief the social media design service.

<!-- SECTION: Changelog -->

## Changelog

| Date | What changed |
|---|---|
| October 14, 2026 | Page reviewed and written. Every row read that day from X's Help Center, X's ads creative specs and X's developer documentation, none of which carries a date. Three video ceilings printed side by side. No multi-picture crop geometry printed: X publishes none. Next review January 16, 2027. |

<!-- SECTION: FAQ -->

## FAQ

### What is the best image size for X in 2026?

X gives no pixel size for a post photo. Its help center says a single photo
shows in full anywhere from 2:1 to 3:4, up to 5MB, as a JPEG, PNG or GIF. A
16:9 landscape such as 1600 by 900 sits well inside that window and is the
size hubStudio's Image editor marks Best for an X post.

### How does X crop a post with several pictures?

X doesn't publish it. Its help center and developer docs give the limit,
four items a post, and say a single photo between 2:1 and 3:4 shows in full.
No X page read on October 14, 2026 describes the layout for two, three or
four pictures. Keep each subject centered with margin, then check X's
composer preview before posting.

### How long can a video on X be?

On the web without a subscription, 140 seconds and 512MB, by X's video help.
Premium subscribers get far more, but X's pages disagree on how much: under
four hours and 16GB on the video help, about three hours and 8GB on the
Premium page, 125 minutes through the API. Video ads run up to 2 minutes 20
seconds.

### What is the X header photo size?

X recommends 1500 by 500 pixels for the header and 400 by 400 for the
profile photo, as JPG, GIF or PNG, with no animated GIF in either slot. The
profile photo caps at 2MB. X warns that 60 pixels at the top and bottom of
the header could be cropped on some screens, so keep words in the middle.

### What file types does X accept for images?

X's help center lists GIF, JPEG and PNG and refuses BMP and TIFF. Its
developer documentation adds WEBP for uploads through the API. Photos cap at
5MB; animated GIFs at 5MB on mobile and 15MB on the web. For an image ad, X
recommends PNG or JPEG, and a GIF renders as a still.

### How many pictures can I add to one post on X?

Four. X's help center allows up to four media items in a post, and the app
lets you mix them, for example two photos, a GIF and a video. Through the
API, the rule is stricter: four photos, or one animated GIF, or one video.
Photos and GIFs don't count against the 280 characters.

### Can hubStudio post video to X?

Not yet. hubStudio's X module posts text, one image or two to four
pictures, now or on a schedule, to up to 20 accounts. For a video, the
Publish manually tab opens X's own composer with your copy in it, and you add
the clip there. Posting by hand costs nothing.

<!-- CTA -->

CTA: Create your account

<!-- =====================================================================
FEATURE IMAGE: INSTRUCTION FOR CLAUDE CODE

Generate the feature (hero) image from the prompt below with the
generate-image-openai skill, convert to webp, then wire it in as the
article's featured image and OG image.

- Save to:    public/Images/insight-x-image-video-specs.webp
- Reference:  /Images/insight-x-image-video-specs.webp
- Format:     .webp, landscape 3:2, under ~250 KB, max 2000px wide
- Style rule: hubstudio-image-style-guide.md is binding. Authored editorial
              campaign photography, one light source, one shadow, prime-lens
              framing, f/2.8 to f/5.6, warm-shadow film grade, lifted black
              point, subtle grain, rule-of-thirds with negative space for
              typography. No named person in the prompt.

IMAGE PROMPT (use verbatim):

Editorial documentary photograph in a small, lived-in creative studio in Hong Kong, morning. Seen from slightly above a worn walnut worktable, the hands and forearms of a Chinese art director in a rumpled navy cotton shirt with sleeves pushed up slide a hand-cut matte black card mask across one large matte print of a sunlit street scene; the card has four uneven rectangular windows cut into it with a craft knife, so only four tighter fragments of the photograph show through, as if testing what survives a crop. Around the print on the table: a self-healing green cutting mat with faint grid lines, a craft knife with a worn orange handle, two offcuts of black card, a pencil worn short, a steel ruler, a ceramic cup of milk tea with a ring stain on the wood. One tall window out of frame on the right throws low, warm, directional daylight across the table so the card mask casts one crisp soft-edged shadow to the left onto the print; the back of the frame falls into warm shade with the blurred edge of a metal shelf of archive boxes. Shot on a 35mm prime at f/4, hands and card placed on the right third, the left third left as quiet tabletop and shadow for typography, cropped tight so the person's face is out of frame and the elbows are cut at the edge. Warm shadows, slightly desaturated midtones, gentle film emulation like Portra 400, lifted black point, fine natural film grain, real skin texture with visible knuckle creases and a small cut on one fingertip, paper fibers and knife marks visible on the card edges. No text, no logos, no readable writing on any print, box or tool, no watermark.
===================================================================== -->

<!-- SCHEMA
Type: BlogPosting
FAQPage: yes, 7 questions
Breadcrumb: Home > Insights > X Image and Video Specs for 2026
Author: Cyril Drouin
datePublished: 2026-10-16
Reviewed (spec pages only): 2026-10-14
-->

<!-- ASSET BRIEF
TABLES: post image specs (what, X's limit, source page); multi-picture table (question, what X's own pages say, source); video limits by upload route (route, length, weight, frame and shape, source); profile and header (slot, size X recommends, files and weight, source); ad specs (format, files and weight, shapes and pixels, length or count, source); changelog (date, what changed). Every value is in editorial/research/x-image-video-specs.md with its X URL and capture file.
CHARTS: none.
SCREENSHOTS: none new. The hubStudio section can reuse the existing localized X captures from the help center (/Images/help/x-brief.webp and /Images/help/x-knobs.webp, with their fr and zh variants). No capture of a feature the help center does not document.
DOWNLOADS: none.
INTERNAL LINKS:
platform specs library -> /resources/specs
LinkedIn -> /resources/insights/linkedin-post-specs
Instagram spec guides -> /resources/insights/instagram-post-sizes-2026
publishing page of the app -> /app/publish
social media design service -> /services/design/social-media
X module -> /help/x
PLATFORM PAGE: the site has no X platform page under /solutions/platforms/; the publishing page of the app and the X help article stand in for it.
SOURCE LINKS (external, X's own pages, cited in the tables by title):
How to post photos or GIFs on X -> https://help.x.com/en/using-x/posting-gifs-and-pictures
How to Post -> https://help.x.com/en/using-x/how-to-post
How to share and watch videos on X -> https://help.x.com/en/using-x/x-videos
About X Premium -> https://help.x.com/en/using-x/x-premium
How to customize your profile -> https://help.x.com/en/managing-your-account/how-to-customize-your-profile
Help with uploading a profile photo -> https://help.x.com/en/managing-your-account/common-issues-when-uploading-profile-photo
X Ads creative specs -> https://help.x.com/en/business-and-advertising/creative-ad-specifications
Media best practices (developer docs) -> https://docs.x.com/x-api/media/quickstart/best-practices
Create Posts (developer docs) -> https://docs.x.com/x-api/posts/create-post
Sharing learnings about our image cropping algorithm (X engineering blog, May 19, 2021) -> https://blog.x.com/engineering/en_us/topics/insights/2021/sharing-learnings-about-our-image-cropping-algorithm
Transparency around image cropping and changes to come (X blog, October 1, 2020) -> https://blog.x.com/en_us/topics/product/2020/transparency-image-cropping
FIRST-PARTY FIGURES: none. hubStudio app facts (Text only, + Image, + 2 to 4 pictures; JPG PNG WebP GIF up to 5 MB, animated GIF up to 15 MB alone; Post, wide 1600 x 900 marked Best, square, portrait, One of two; up to 20 accounts; five-minute queue; three attempts; no video to X yet; each post sent to X priced before sending, posting by hand free) come from src/content/help/x.md and assets-library.md.
CLUSTER HUB: /resources/specs (live).
RESEARCH FILE: editorial/research/x-image-video-specs.md
-->
