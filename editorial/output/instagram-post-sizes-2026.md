---
title: "Instagram Post Size 2026: Feed, Carousel, Grid"
slug: instagram-post-sizes-2026
description: "Instagram post sizes from Instagram's own pages: ratios from 1.91:1 to 3:4, 1080 pixels wide, 20-slide carousels, and the tighter API limits."
excerpt: "Instagram's own pages put a feed photo at 1,080 pixels wide, 1.91:1 to 3:4. Publishing tools stop at 4:5 and ten slides."
template: spec
---

<!-- HERO SECTION -->

# Instagram post and carousel sizes for 2026

For the Instagram post size question in 2026, Instagram's own help pages
settle most of it. A feed photo is 1,080 pixels wide and can be anything from
a 1.91:1 landscape to a 3:4 portrait. The trouble starts in two places: a post
sent by a publishing tool, which plays by stricter rules, and the profile
grid, which plays by rules Instagram has never written down.

Reviewed October 8, 2026, against the Instagram Help Center, Instagram's
developer documentation and Meta's ads guide. Every value on this page comes
from one of those three.

<!-- INTRODUCTION -->

## What size is an Instagram post in 2026?

Make it 1,080 pixels wide. Instagram keeps any shape from 1.91:1 to 3:4, so a
feed photo runs from 566 to 1,440 pixels tall. If the post goes out through a
publishing tool, hubStudio included, the tallest accepted shape is 4:5, or
1,080 by 1,350, and the file has to be a JPEG of 8 MB at most.

> Instagram keeps a photo at its original resolution when it is between 320
> and 1,080 pixels wide and its aspect ratio sits between 1.91:1 and 3:4,
> which at 1,080 pixels wide means a height between 566 and 1,440 pixels.
> Wider files are sized down to 1,080; a ratio outside that range is cropped.
> Source: Instagram Help Center, image resolution article, read October 8,
> 2026. The article is undated; values quoted as written.

One oddity worth knowing: the same article's page description still promises
"up to 1080x1080 pixels." The body text gives the width rule instead. Go by
the body.

<!-- SECTION: spec table -->

## Instagram feed, carousel, Reel and Story specs

| Format | Ratio | Size | Limits | Source |
|---|---|---|---|---|
| Landscape photo | 1.91:1 | 1,080 x 566 | Widest shape Instagram keeps | Help Center |
| Square photo | 1:1 | 1,080 x 1,080 | Inside the kept range | Help Center |
| Portrait photo | 4:5 | 1,080 x 1,350 | Tallest shape the API and feed ads accept | Help Center, API docs |
| Tall portrait | 3:4 | 1,080 x 1,440 | Instagram app only; the API refuses it | Help Center, API docs |
| Carousel, posted in the app | One shape for every slide | As above | Up to 20 photos and videos | Help Center |
| Carousel, posted by a tool | Cropped to the first image, 1:1 by default | As above | 2 to 10 items, JPEG, 8 MB each | API docs |
| Reel | 1.91:1 to 9:16 | 720 pixels minimum; cover 420 x 654 | 30 FPS minimum; by API, MP4 or MOV, 3 seconds to 15 minutes, 300 MB | Help Center, API docs |
| Story, posted by a tool | 9:16 | No pixel size published | Image JPEG, 8 MB; video 3 to 60 seconds, 100 MB | API docs |

The help article prints only the two ends of the height range, 566 and 1,440.
The square and 4:5 heights are simple arithmetic on its 1,080-pixel width.
Note what isn't in the table, too: Instagram publishes no file-size limit for a
photo posted in its own app, and no pixel size for a Story.

<!-- SECTION: app against API -->

## Why does a 3:4 post work in the app but fail in a scheduler?

Because the app and the Content Publishing API are two different doors, and
the API's is narrower. A tool that posts to Instagram for you, the hubStudio
app included, goes through the API.

> Through Instagram's Content Publishing API, images must be JPEG, at most
> 8 MB, 320 to 1,440 pixels wide and between 4:5 and 1.91:1. Carousels stop
> at 10 items and are cropped to the first image's ratio. The guide's rate
> limit section allows 100 API-published posts in a rolling 24 hours, a
> carousel counting as one; its carousel section still says 50.
> Source: Instagram Platform developer documentation, media reference and
> content publishing guide, read October 8, 2026. Pages undated.

So a 3:4 photo posts cleanly by hand and gets refused by the API. A PNG
meets the same wall, since JPEG is the only image format the API takes.

Ads add a third reading. Meta's ads guide recommends 4:5 at 1,440 by 1,800
pixels for an Instagram Feed image ad and accepts nothing taller than 4:5. Its
own business help center recommends 1:1 for the same placement.

> Meta's ads guide asks for 4:5 at 1,440 by 1,800 pixels, JPG or PNG, up to
> 30 MB, for an Instagram Feed image ad, with an accepted range from 4:5 to
> 1.91:1. Meta's business help center says 1:1 is recommended for single-image
> ads delivered to Instagram Feed.
> Source: Meta Ads Guide, Instagram Feed image ad specs (Awareness objective),
> and Meta Business Help Center, best practices for aspect ratios, both read
> October 8, 2026.

Two Meta pages, two answers. Both shapes sit inside the guide's accepted
range, so either one runs. The guide's own pick is 4:5.

<!-- SECTION: carousel -->

## How many photos can an Instagram carousel hold?

Twenty, if you post it in the app. Ten, if a tool posts it.

> A carousel holds up to 20 photos and videos, and the orientation you pick
> (square, portrait or landscape) applies to every item in the post; you
> can't pick a different one per item.
> Source: Instagram Help Center, sharing multiple photos or videos as a single
> post, read October 8, 2026.

The practical rule follows from both pages: build every slide at one ratio.
In the app, slides that don't match get cropped to the orientation you chose.
Through the API, they get cropped to the first image. Either way a headline
near the edge of slide four can lose its last word. Ads differ again: Meta's
ads guide caps a carousel ad at 2 to 10 cards, at 4:5 for images only and 1:1
once any card is a video.

<!-- SECTION: profile grid -->

## What does the Instagram profile grid crop?

Nobody can quote you the number, because Instagram hasn't published one.

> The Instagram Help Center, Instagram's own blog and its developer
> documentation state no ratio and no pixel size for a profile grid tile,
> searched and read October 8, 2026. The move from square tiles to taller
> ones was trailed by Instagram's head in a video in August 2024 and
> announced in his Instagram Story in January 2025, never in a help article.
> Source: Instagram Help Center, about.instagram.com and Instagram Platform
> documentation, October 8, 2026; trade press reports of the two
> announcements, Social Media Today, August 18, 2024, and RouteNote, January
> 20, 2025.

The tile sizes circulating in size guides don't come from any Instagram
page. What Instagram has said, in its own announcement back in 2017, is that
the first photo or video of a carousel is the one that shows on the grid.

So plan for a crop you can't measure. Keep faces, products and type off all
four edges, and make slide one work as a cover. Then open the profile and
look before you call it done.

<!-- SECTION: safe areas -->

## Where are the safe areas on a Story or Reel?

For organic posts, Instagram prints none. The only published figures are
Meta's, and they're written for ads.

> For Instagram Reels and Stories ads, Meta's ads guide suggests leaving about
> 14% of the top, 35% of the bottom and 6% of each side of a 9:16 asset free
> of text, logos and key elements, so the profile icon and call to action
> don't cover them.
> Source: Meta Ads Guide, Instagram Reels video and Instagram Stories image ad
> specs, read October 8, 2026. Ad placements only.

On a 1,080 by 1,920 frame that works out to about 269 pixels at the top, 672
at the bottom and 65 on each side. It's a sensible margin for an organic Reel
as well. Just know you're borrowing an ad rule.

<!-- SECTION: upload failures -->

## Why do Instagram uploads fail?

Most failures trace back to one of the limits above. These come from
Instagram's Help Center and from the error list in its developer
documentation.

| What you see | What caused it | Fix |
|---|---|---|
| Photo looks soft | It was under 1,080 wide; under 320, Instagram enlarges it | Upload at least 1,080 wide |
| Photo cropped on its own | Ratio outside 1.91:1 to 3:4 | Reframe inside the range |
| Tool refuses a tall photo | Error 2207009: ratio outside 4:5 to 1.91:1 | Crop 3:4 to 4:5 |
| Tool says the image is too large | Error 2207004: over 8 MB | Re-export below 8 MB |
| Tool rejects the image format | Error 2207005: the API takes JPEG only | Convert to JPEG |
| Carousel refused by a tool | Error 2207028: needs 2 to 10 items | Split it, or post by hand |
| Tool stops posting for the day | Error 2207042: the daily cap, 100 posts in 24 hours (50 in the guide's carousel section) | Wait for the rolling window |
| Reel below Instagram's floor | Help Center minimum is 30 FPS and 720 pixels | Re-export at 30 FPS or more, 720 pixels or wider |
| Carousel with videos stalls | Several videos upload slowly | Use a reliable connection |

When none of that applies, Instagram's general troubleshooting order is short:
update the app and the phone's operating system, restart the phone, try Wi-Fi
and then mobile data, and reinstall as a last resort.

<!-- SECTION: hubStudio -->

## How to make each format in hubStudio

The Image editor in the hubStudio app frames a picture for Instagram from its
Social panel. Pick Feed portrait (1,080 by 1,350, marked as the best choice),
Square, Landscape, Story, Reel cover or Profile photo. Grid portrait, the 3:4
shape, is there too, labeled for the Instagram app only, which matches the API
limit above. Choose Crop to fill, or Fit it whole over a blurred copy of the
picture. The editor marks in red what Instagram's own buttons and captions
cover, and draws its preview of the profile grid crop in dashed lines. Then
Apply the format. Editing costs nothing. The Video editor does the same for
a Reel at 9:16.

Publishing runs from the Instagram module. Connect an Instagram professional
account, Business or Creator, in My Connections. Pick One image, Carousel or
Reel; render it, pick it from the Assets Library, or upload it. Every picture
is converted to a JPEG Instagram accepts on the way out. Pictures go out as a
feed post or a Story, a video always as a Reel, and a Story clip runs 60
seconds at most. Publish now or schedule it, to up to 20 accounts per post.
Publishing itself is free; renders are charged to your prepaid balance at the
price shown before you run them. The publishing page of the hubStudio app
covers the other networks, and the Meta platform page covers the studio's
Instagram and Facebook work.

If you'd rather have the work made for you, the social media design service
is the studio route.

<!-- SECTION: RedNote -->

## Does RedNote use the same sizes?

Close, but not the same, and not from the same kind of source. RedNote's
cover is most commonly published at 3:4, 1,080 by 1,440, a shape Instagram's
app accepts and its API refuses. RedNote's own help pages serve nothing
readable without a login, so those figures are counted across published
sources rather than read from the platform. The RedNote note and cover specs page
explains the method and the cover crop.

<!-- SECTION: changelog -->

## Changelog

**October 8, 2026.** First published. Read against the Instagram Help Center
(image resolution, carousels, Reels, troubleshooting), Instagram Platform
developer documentation (media reference, content publishing, error codes),
the Meta Ads Guide (Instagram Feed image, carousel and video, Reels, Stories)
and the Meta Business Help Center. The profile grid tile ratio is recorded as
unpublished. Next scheduled recheck: January 8, 2027.

<!-- SECTION: FAQ -->

## Questions about Instagram post sizes

**What is the best size for an Instagram post in 2026?**

For most feed posts, 1,080 by 1,350 pixels at 4:5. It's the tallest shape
both the Instagram app and its publishing API accept, so it works whether you
post by hand or through a tool. Instagram's app also keeps 3:4 at 1,080 by
1,440, but only when you post it yourself.

**Can I post a 3:4 photo on Instagram?**

Yes, in the app. Instagram's Help Center lists 1.91:1 to 3:4 as the range it
keeps, which at 1,080 wide means up to 1,440 pixels tall. Through the Content
Publishing API, which every publishing tool uses, 3:4 is refused with error
2207009, because the API only accepts 4:5 to 1.91:1.

**How many photos can you put in an Instagram carousel?**

Up to 20 photos and videos when you post the carousel in the Instagram app,
according to Instagram's Help Center. A carousel published through the API,
which is how scheduling and publishing tools post, is capped at 10 items and
needs at least 2. Carousel ads run 2 to 10 cards.

**Do all slides in an Instagram carousel have to be the same size?**

They end up the same shape whether you plan it or not. In the app, the
orientation you choose applies to every slide. Through the API, every image
is cropped to the first image's ratio. Build all slides at one ratio and keep
text away from the edges so nothing is cut.

**What size is the Instagram profile grid?**

Instagram hasn't said. Its Help Center, blog and developer documentation give
no ratio or pixel size for a grid tile, as of October 8, 2026. The grid moved
from squares to taller tiles in January 2025. Plan for a crop you can't
measure: keep faces, products and type away from the edges.

**Why does my scheduled Instagram post get rejected?**

Usually one of five limits in Instagram's Content Publishing API: a ratio
taller than 4:5, a file over 8 MB, a format other than JPEG, a carousel
outside 2 to 10 items, or the daily post cap (100 posts in 24 hours in the
guide's rate limit section, 50 in its carousel section). Instagram's error
list names each one with its own code.

**What size should an Instagram Story be?**

Instagram's developer documentation gives 9:16, a JPEG of up to 8 MB for a
picture, and 3 to 60 seconds and 100 MB for a video. Instagram prints no
pixel size for an organic Story. Meta's ads guide asks for 1,440 by 2,560 for
Story ads.

<!-- CTA -->

CTA: Create your account

<!-- =====================================================================
FEATURE IMAGE: INSTRUCTION FOR CLAUDE CODE

Generate the feature (hero) image from the prompt below with the
generate-image-openai skill, convert to webp, then wire it in as the
article's featured image and OG image.

- Save to:    public/Images/insight-instagram-post-sizes-2026.webp
- Reference:  /Images/insight-instagram-post-sizes-2026.webp
- Format:     .webp, landscape 3:2, under ~250 KB, max 2000px wide
- Style rule: hubstudio-image-style-guide.md is binding. Authored editorial
              campaign photography, one light source, one shadow, prime-lens
              framing, f/2.8 to f/5.6, warm-shadow film grade, lifted black
              point, subtle grain, rule-of-thirds with negative space for
              typography. No named person in the prompt.

IMAGE PROMPT (use verbatim):

Editorial still life photographed from directly above on a worn pale oak worktable in a lived-in Shanghai design studio, late afternoon window light raking in from the left as the only light source and casting one long soft shadow to the right. On the table, three matte photographic prints of the same ceramic vase still life lie slightly overlapped and a little askew, each trimmed to a different proportion: one wide landscape print, one square print, one tall portrait print, their trimmed edges hand cut and not perfectly straight. A plain brushed steel straightedge with no numbers or markings and a small brass craft knife rest beside them, a few paper offcuts curling at the edges, a pencil with a chewed end, the corner of a gray cutting mat printed only with plain grid lines, no numbers, entering the frame at the bottom right. The prints carry no text and no logos. Composition follows the rule of thirds with the cluster of prints in the right two thirds and generous empty oak surface on the left for typography, cropped tighter than comfortable so one print runs off the top edge. Shot as if on a 50mm prime lens at f/4, real texture in the wood grain and paper fibers, warm shadows and slightly desaturated midtones in a gentle color negative film grade, black point lifted, fine natural film grain across the frame, no glossy surfaces, no reflections, no bokeh, no text, no watermark.
===================================================================== -->

<!-- SCHEMA
Type: BlogPosting
FAQPage: yes, 7 questions
Breadcrumb: Home > Insights > Instagram post and carousel sizes for 2026
Author: Cyril Drouin
datePublished: 2026-10-08
Reviewed (spec pages only): 2026-10-08
-->

<!-- ASSET BRIEF
TABLES:
  Spec table: format, ratio, size, limits, source. Eight rows. The 1:1 and 4:5
  heights are arithmetic on Instagram's 1,080-pixel width and the body says so.
  Upload failures: what you see, cause, fix. Nine rows, from the Help Center
  and the developer error list.
CHARTS: none.
SCREENSHOTS: none new. If the publish step wants an in-body image, reuse the
  existing localized help capture of the Image editor's Social panel on
  Instagram (/Images/help/image-editor-social.webp and its .fr and .zh
  versions). Never a new capture.
DOWNLOADS: none.
INTERNAL LINKS:
  Meta platform page -> /solutions/platforms/meta
  social media design service -> /services/design/social-media
  publishing page of the hubStudio app -> /app/publish
  RedNote note and cover specs -> /resources/insights/rednote-note-cover-specs
FIRST-PARTY FIGURES: none. The hubStudio facts (placements in the Image editor,
  JPEG conversion, Feed post, Story and Reel, 60-second Story clip, 20
  accounts per post, publishing free) come from the help center
  (src/content/help/instagram.md, src/content/help/assets-library.md) and
  hubstudio-positioning.md. The RedNote 3:4 at 1,080 by 1,440 is the counted
  value the RedNote note and cover specs page already publishes, with its
  method.
REVIEWED LINE: the page carries "Reviewed October 8, 2026" under the lead.
  Spec page, updated in place at the same URL. Quarterly recheck registered
  for 2027-01-08 (watch row in the run log).
NO DEVIATION 7 DISCLAIMER: Western platform, readable official pages, every
  row primary for its scope.
CATEGORY: Platform specs.
RESEARCH FILE: editorial/research/instagram-post-sizes-2026.md
-->
