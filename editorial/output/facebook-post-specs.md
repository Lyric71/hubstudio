---
title: "Facebook Post, Reel and Story Specs 2026"
slug: facebook-post-specs
description: "Facebook feed image, carousel, link preview, Reel and Story sizes for 2026, from Meta's own pages, organic and ads kept apart, with a Reviewed date."
excerpt: "Facebook feed, link, carousel, Reel and Story sizes from Meta's own pages, plus the tighter limits for a page post sent by a tool."
template: spec
---

<!-- HERO SECTION -->

# Facebook post, Reel and Story specs for 2026

There are three answers to the Facebook post size question in 2026, because
Meta writes three sets of rules. Its ads guide sizes paid placements. Its
developer pages set the limits for a page post sent by a publishing tool. And
for a photo you post by hand, Meta prints no pixel size at all.

Reviewed October 11, 2026, against the Meta Ads Guide, the Meta Business Help
Center, the Facebook Help Center and Meta for Developers. Every value on this
page comes from one of those four.

<!-- INTRODUCTION -->

## What size is a Facebook post in 2026?

Build a feed image at 4:5, 1,440 by 1,800 pixels: that's the size Meta's ads
guide asks for in Facebook Feed. A page post sent through Meta's API, which is
how a tool such as hubStudio publishes, takes photos of 10 MB at most. Link
images want 1.91:1, at 1,200 by 630 or larger.

> Meta's ads guide asks for a 4:5 image at 1,440 by 1,800 pixels in Facebook
> Feed, JPG or PNG, up to 30 MB, at least 600 pixels wide and 750 tall.
> Source: Meta Ads Guide, Awareness image ad specs on Facebook Feed, read
> October 11, 2026. The page is undated; values quoted as printed.

> A photo published to a Page through Meta's Graph API can be JPEG, BMP, PNG,
> GIF or TIFF and can't exceed 10 MB. A PNG should stay under 1 MB or it may
> look pixelated, and Facebook resizes every image to several dimensions.
> Source: Meta for Developers, Page Photos reference, read October 11, 2026.

<!-- SECTION: spec table -->

## Facebook feed, link and carousel specs

| Surface | Ratio | Size | File limits | Source |
|---|---|---|---|---|
| Feed image ad | 4:5 | 1,440 x 1,800; minimum 600 wide, 750 tall | JPG or PNG, 30 MB | Ads Guide |
| Feed video ad | 4:5 | 1,440 x 1,800; minimum 120 x 120 | MP4, MOV or GIF, 4 GB, 1 second to 241 minutes | Ads Guide |
| Feed carousel ad | 1:1 | 1,080 x 1,080 or larger | 2 to 10 cards; image 30 MB, video 4 GB | Ads Guide |
| Page photo, sent by a tool | None published | None published; Facebook resizes | JPEG, BMP, PNG, GIF or TIFF, 10 MB; PNG under 1 MB advised | Developer docs |
| Link preview image | 1.91:1 | 1,200 x 630 best; 600 x 315 for the large card | 8 MB; 200 x 200 minimum | Developer docs |

Look at the fourth row. Meta publishes no pixel size for an ordinary photo on
a page, in its Help Center or in its developer pages. The 1,080 by 1,350 that
fills most size guides is 4:5 worked out at 1,080 pixels wide, not a Facebook
figure. Meta's own number for that shape is the ads guide's 1,440 by 1,800.

<!-- SECTION: organic against ads -->

## How do organic page posts and ads differ?

The ad side is roomier on almost every line. A post that a tool publishes to
a page runs on Meta's developer limits, which are tighter. A post made by
hand in the app often has no published limit at all.

| Question | Organic page post | Ad |
|---|---|---|
| Photo size | None published; Facebook resizes | Feed: 4:5 at 1,440 x 1,800 |
| Photo file | 10 MB through the API; PNG under 1 MB advised | 30 MB |
| Reel length | No limit in the app since 2025; 3 to 90 seconds through the API | No maximum |
| Story video | 60 seconds at most through the API | 1 second to 3 minutes |
| Video minimum | 540 x 960 for reels and stories sent through the API | Feed 120 x 120; Stories 250 wide |
| Carousel | No cap published | 2 to 10 cards in Feed, 3 to 10 in Stories |

So when one file has to serve a page post and an ad, build it to the organic
limit, and it will fit the ad too.

On shape, Meta's two ad pages agree. The Business Help Center
recommends 4:5 for single-image ads in Facebook Feed, the same pick as the ads
guide. That isn't true next door: for Instagram Feed the same help page says
1:1, which the Instagram post sizes for 2026 page covers.

<!-- SECTION: Reels -->

## What size should a Facebook Reel be?

Vertical 9:16. Through Meta's API that means 1,080 by 1,920 recommended and
540 by 960 at least; a Reels ad wants 1,440 by 2,560. Length is where most
size guides go wrong. Meta changed it in 2025.

> "All videos posted to Facebook will be shared as reels, regardless of length
> or orientation." Stories and Live are the exceptions. Meta's announcement
> said reels on Facebook would no longer have any length or format
> restrictions.
> Source: Facebook Help Center, "What are reels on Facebook" and "Create a
> reel on Facebook," update dated September 2025; Meta newsroom, June 17,
> 2025. Both read October 11, 2026.

So the 90-second reel limit printed across the web no longer applies to a
reel posted in the Facebook app. It still applies to one sent by a tool.

> A reel published to a Page through Meta's Reels Publishing API must be 9:16,
> at least 540 by 960 pixels (1,080 by 1,920 recommended), 24 to 60 frames a
> second and 3 to 90 seconds long. A Page can publish 30 reels through the API
> in a rolling 24 hours.
> Source: Meta for Developers, Reels Publishing API, read October 11, 2026.

| Format | Ratio | Size | Length and file | Source |
|---|---|---|---|---|
| Reel, posted in the app | Any orientation | None published | No length restriction | Help Center, newsroom |
| Reel, sent by a tool | 9:16 | 1,080 x 1,920; minimum 540 x 960 | 3 to 90 seconds, 24 to 60 fps | Developer docs |
| Reels ad | 9:16 | 1,440 x 2,560 | No maximum, 4 GB | Ads Guide |
| Story, sent by a tool | 9:16 for video | 1,080 x 1,920; minimum 540 x 960 | Video 60 seconds at most; photo 10 MB | Developer docs |
| Stories video ad | 9:16 | 1,440 x 2,560 | 1 second to 3 minutes, 4 GB | Ads Guide |
| Stories image ad | 9:16 | 1,440 x 2,560; minimum 500 wide | JPG or PNG, 30 MB | Ads Guide |

The Story row hides a small contradiction. The specification table on Meta's
Stories API page says 3 to 90 seconds; the limitations list on the same page
says a video story can't exceed 60. Build to 60. Instagram's own Reels and
Stories figures differ again, and the Instagram Reels and Stories specs page
lays them out.

<!-- SECTION: safe zone -->

## What is the safe zone on a Facebook Story?

Meta prints two different answers, both on its ads guide.

> Meta's Facebook Stories video ad page asks for roughly 14 percent (250
> pixels) at the top and 20 percent (340 pixels) at the bottom to stay free of
> text and logos. Its Facebook Stories image ad page asks for 14 percent at the
> top, 35 percent at the bottom and 6 percent on each side.
> Source: Meta Ads Guide, Awareness video and image ad specs on Facebook
> Stories, read October 11, 2026. Figures quoted as printed on each page.

The video page's percentages and pixels don't match each other, either. On a
1,080 by 1,920 frame, 14 percent is about 269 pixels, and 250 is closer to 13
percent; 340 pixels is about 18 percent, not 20. Facebook Reels ads, image
and video, carry the 14, 35 and 6 set with no conflict.

The safe course is the stricter set. On a 1,080 by 1,920 Story that means
roughly 269 pixels clear at the top, 672 at the bottom and 65 on each side
(our arithmetic on Meta's percentages). Meta's Business Help Center adds two
warnings: on screens taller than 9:16 it may zoom the creative and crop
outside the safe zone, and a Reels ad carrying a disclaimer should leave the
bottom 40 percent clear. All of this is ad guidance. For organic Stories,
Meta prints no safe zone.

<!-- SECTION: link preview -->

## What size is a Facebook link preview image?

1,200 by 630 pixels, at 1.91:1. Meta's developer page on link shares gives
the numbers outright.

> Meta asks for a shared-link image of at least 1,200 by 630 pixels for the
> best display on high-resolution screens, and at least 600 by 315 for a link
> post with the larger image. A smaller image still shows, "but the size will
> be much smaller." Keep it close to 1.91:1, at 8 MB or less and at least 200
> by 200.
> Source: Meta for Developers, Images in Link Shares, read October 11, 2026.

One practical rule from the same page: Facebook caches the image by its
address. Replace the picture under the same URL and the preview won't change.
Give the new image a new address, then run the link through Meta's Sharing
Debugger so it's fetched before the first share.

<!-- SECTION: carousels -->

## How do Facebook carousels work?

Every published number is on the ad side. A Facebook Feed carousel ad takes 2
to 10 cards, square, at 1,080 by 1,080 or larger. The Business Help Center
recommends keeping every card at one ratio, 1:1 or 4:5, so Meta doesn't adjust
them for you, and reserves 4:5 carousels for catalog ads.

A Facebook Stories carousel ad takes 3 to 10 cards and shows one to five of
them on its own before the viewer asks for more. Its spec page recommends a
1:1 ratio and a resolution of at least 1,080 by 1,920 in consecutive lines.
Those two can't both hold, so check the preview in Ads Manager before
building a batch.

For organic page posts, Meta's publishing documentation states no cap on
photos per post.

<!-- SECTION: hubStudio -->

## How to make each Facebook format in hubStudio

The Facebook module in the hubStudio app publishes page posts, not profile
posts: text only, one image, a carousel of 2 to 8 slides when rendered, or one
video. A post carries pictures or a video, never both. It takes up to 10
pictures, JPG, PNG or GIF up to 10 MB each, the same ceiling Meta's API
sets, or one MP4 or MOV clip of up to 20 minutes. Keep a PNG under 1 MB if
you can; Meta warns that a heavier one may look pixelated.

Each picture on a post opens in the Image editor, which crops it to Link
(1.91:1) or Square, among its other tools. The clip opens in the Video editor
on its Social panel, already set to a Facebook Reel, since Facebook shares
every video as a reel. Pick Reel (9:16 at 1,080 by 1,920, marked as the best
choice), Story, Feed portrait (4:5) or Square, then Apply the format. The
editor shows in red what Facebook covers, draws the safe area in a dashed
line, and checks the length and the file's weight against the network's limit.
Editing in either one is free.

Publish now or schedule the post, to up to 20 pages at once. Publishing to
Facebook through hubStudio costs nothing; a render is charged to your prepaid
balance at the price shown before you run it. The Image editor page shows the
tools in full, the Meta platform page covers the studio's Facebook and
Instagram work, and the social media design service is the route when you'd
rather have the posts made for you.

<!-- SECTION: changelog -->

## Changelog

**October 11, 2026.** First published. Read against the Meta Ads Guide
(Facebook Feed image, video and carousel; Facebook Reels image and video;
Facebook Stories image, video and carousel), the Meta Business Help Center
(aspect ratios, safe zones), the Facebook Help Center (reels, September 2025
update), the Meta newsroom (June 17, 2025) and Meta for Developers (Page
Photos, Images in Link Shares, Reels Publishing API, Facebook Stories API).
The organic photo pixel size and the organic photo count per post are recorded
as unpublished. Next scheduled recheck: January 13, 2027.

<!-- SECTION: FAQ -->

## Questions about Facebook post sizes

**What size is a Facebook post image in 2026?**

For a Facebook Feed ad, Meta's ads guide asks for 4:5 at 1,440 by 1,800
pixels, up to 30 MB. For an organic page post, Meta publishes no pixel size
and resizes every image itself; through its API, a photo can't exceed 10 MB.
Build at 1,440 by 1,800, keep the file at 10 MB or less, and one picture
serves both.

**What is the best aspect ratio for Facebook feed posts?**

4:5, vertical. Meta's ads guide recommends it for Facebook Feed images and
video, and its Business Help Center says the same for single-image ads. Square
1:1 is supported too, and it's the ratio Meta's ads guide asks for in a Feed
carousel ad. Link images are the exception, at 1.91:1.

**What size should a Facebook Reel be?**

9:16. Meta's Reels Publishing API recommends 1,080 by 1,920 pixels and refuses
anything under 540 by 960, with a length of 3 to 90 seconds. A reel posted in
the Facebook app has had no length restriction since Meta's 2025 change. A
Reels ad runs at 1,440 by 2,560 with no maximum length.

**What is the safe zone on a Facebook Story?**

Meta's ads guide gives two versions. Its Stories image ad page says to leave 14
percent at the top, 35 at the bottom and 6 on each side free of text and
logos. Its Stories video ad page says 14 percent (250 pixels) at the top and
20 percent (340 pixels) at the bottom. Use the stricter set. Organic Stories
have no published safe zone.

**What size is a Facebook link preview image?**

1,200 by 630 pixels at 1.91:1, according to Meta's developer page on link
shares. The large link card needs at least 600 by 315; anything smaller shows
much smaller. The file can't exceed 8 MB or fall below 200 by 200. Change
the image's address when you replace it, or Facebook keeps showing the old
one.

**How many pictures can a Facebook post have?**

Meta's publishing documentation sets no cap for an organic page post. Ads
do have one: a Facebook Feed carousel ad takes 2 to 10 cards, a Stories
carousel ad 3 to 10. Through hubStudio's Facebook module, a post carries up to 10 pictures,
JPG, PNG or GIF, up to 10 MB each.

<!-- CTA -->

CTA: Create your account

<!-- =====================================================================
FEATURE IMAGE: INSTRUCTION FOR CLAUDE CODE

Generate the feature (hero) image from the prompt below with the
generate-image-openai skill, convert to webp, then wire it in as the
article's featured image and OG image.

- Save to:    public/Images/insight-facebook-post-specs.webp
- Reference:  /Images/insight-facebook-post-specs.webp
- Format:     .webp, landscape 3:2, under ~250 KB, max 2000px wide
- Style rule: hubstudio-image-style-guide.md is binding. Authored editorial
              campaign photography, one light source, one shadow, prime-lens
              framing, f/2.8 to f/5.6, warm-shadow film grade, lifted black
              point, subtle grain, rule-of-thirds with negative space for
              typography. No named person in the prompt.

IMAGE PROMPT (use verbatim):

Editorial documentary photograph inside a lived-in design studio in Changsha, late morning, a single window out of frame on the right throwing soft directional daylight across a pale, slightly scuffed plaster wall and casting one shadow to the left. Pinned to the wall with two brass pushpins is a tall vertical photographic print in a nine by sixteen proportion, a quiet street scene of a fruit stall under a striped awning shot at dusk, with no signs, price cards or labels anywhere in it, matte paper with a faint curl at its corners. A young Chinese woman's hand, real skin texture, short unpainted nails, a thin red string bracelet, presses a strip of torn cream masking tape horizontally across the lower third of the print, while a second strip already runs across the top edge, the two bands marking the margins where nothing important may sit. A half-used roll of masking tape with a plain unprinted cardboard core and a soft pencil rest on a narrow wooden ledge below, a few torn tape ends stuck to the ledge, an older print slightly out of focus at the far right edge. The print and hand sit in the right third of the frame, the left two thirds left as open warm plaster for typography, cropped tighter than comfortable so the top of the print runs out of frame. Shot as if on a 50mm prime lens at f/4 from a little below eye level, natural depth of field with the wall texture readable, warm shadows and slightly desaturated midtones in a gentle color negative film grade, lifted black point, fine natural film grain, no glossy surfaces, no reflections, no bokeh circles, no text, no letters, no logos, no watermark, no screens.
===================================================================== -->

<!-- SCHEMA
Type: BlogPosting
FAQPage: yes, 6 questions
Breadcrumb: Home > Insights > Facebook post, Reel and Story specs for 2026
Author: Cyril Drouin
datePublished: 2026-10-11
Reviewed (spec pages only): 2026-10-11
-->

<!-- ASSET BRIEF
TABLES:
  Spec table: surface, ratio, size, file limits, source. Five rows (Feed
  image ad, Feed video ad, Feed carousel ad, page photo sent by a tool, link
  preview image), from the Meta Ads Guide and Meta for Developers.
  Organic against ads: question, organic page post, ad. Six rows.
  Reels and Stories: format, ratio, size, length and file, source. Six rows.
  Safe zones are in the safe-zone section's blockquote and prose rather than a
  column, because the two Stories pages disagree and the conflict needs words.
CHARTS: none.
SCREENSHOTS: none new. If the publish step wants an in-body image, reuse the
  existing localized help captures: /Images/help/facebook-brief.webp (the
  Facebook module), /Images/help/video-editor-social.webp (the Social panel
  of the Video editor) or /Images/help/image-editor-crop.webp (the Crop
  panel), each with its .fr and .zh versions in
  src/i18n/localized-images.json. Never a new capture.
DOWNLOADS: none.
INTERNAL LINKS:
  Instagram post sizes for 2026 -> /resources/insights/instagram-post-sizes-2026
  Instagram Reels and Stories specs -> /resources/insights/instagram-reels-stories-specs
  Image editor page -> /app/image-tools
  Meta platform page -> /solutions/platforms/meta
  social media design service -> /services/design/social-media
FIRST-PARTY FIGURES: none. The hubStudio facts (page posts only, the four
  shapes, 2 to 8 rendered slides, 10 pictures at 10 MB, one MP4 or MOV clip up
  to 20 minutes, Link 1.91:1 and Square crops, the Facebook placements of the
  Video editor, 20 pages per post, publishing free) come from the help center
  (src/content/help/facebook.md, src/content/help/assets-library.md) and
  hubstudio-positioning.md.
REVIEWED LINE: the page carries "Reviewed October 11, 2026" under the lead.
  Spec page, updated in place at the same URL. Quarterly recheck registered
  in editorial/watch.csv for 2027-01-13.
NO DEVIATION 7 DISCLAIMER: Western platform, readable official pages, every
  row primary for its scope.
CATEGORY: Platform specs (listed on the specs hub /resources/specs).
RESEARCH FILE: editorial/research/facebook-post-specs.md
-->
