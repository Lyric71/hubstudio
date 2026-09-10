---
title: WeChat Specs: Articles, Channels, Mini Program
slug: wechat-specs-articles-channels-mini-program
description: WeChat Official Account covers, Channels video and Mini Program images in one dated page, with WeChat's own readable limits separated from counted ones.
excerpt: Some WeChat limits are readable on WeChat's own pages, and many circulating figures are years out of date. This page keeps the two apart.
template: insight
---

<!-- HERO SECTION -->

# WeChat specs in one place: articles, Channels, Mini Program

WeChat is three surfaces with three sets of rules, and the pages ranking for them
were written before two of the three looked the way they look now. WeChat also
publishes more of its own limits than any other platform in this series, which
makes the stale figures easier to catch.

<!-- INTRODUCTION -->

## What size is a WeChat article cover image?

The most commonly published lead cover for an Official Account article is 2.35:1
at 900 by 383 pixels, given by seven of eleven sources that state a size and by
every one of them dated 2021 or later. Secondary articles in the same push take a
square, most often 200 by 200. The 900 by 500 figure still in circulation is the
older one.

<!-- SECTION: How to read these numbers -->

## How to read these numbers

Some of these specs are read directly from WeChat's own pages and most are not.
The Channels help center and WeChat's developer documentation are readable
without a login. The Official Account editor rules, cover crops and most image
sizes are not published anywhere a buyer can read them.

What follows is, for most rows, the most commonly published figure for each spec,
collected across up to 12 independent sources in Chinese and English on 10
September 2026, with the number of sources that agreed shown per row. Rows marked
consensus had broad agreement. Rows marked contested did not, and those carry the
full spread rather than a single number.

Treat this as the best available public reading, not as the rule. Platform specs
change without announcement and often without an English notice at all. Before
you build a batch to any number on this page, open your own account and confirm
it there. Reviewed 10 September 2026.

Rows marked primary are different. They come from three kinds of WeChat page read
on 10 September 2026: the Channels help-center article on posting requirements,
the Official Account upload API documentation, and the Mini Program developer
reference. Each is primary only for exactly what that page covers, and the row
says which.

<!-- SECTION: Official Account -->

## Official Account articles

> The most commonly published lead cover for a WeChat Official Account article
> is 2.35:1 at 900x383 pixels, given by 7 of the 11 independent sources that
> state a size, and by every one of them dated 2021 or later. Secondary articles
> in the same push take a 1:1 square, most often 200x200, on 8 of 10. The older
> 900x500 figure, still printed on three pages from 2017 to 2020, matches an
> undated Tencent customer-service FAQ that still carries it.
> Source: 12 independent published references, 11 Chinese-language and 1
> English-language, dated 2017 to 2026, collected 10 September 2026, counted per
> domain and grouped by date. Modal value, consensus, not a primary reading. The
> FAQ is quoted as a platform page with no date.

The date split is clean. Every source written since 2021 gives the wide 2.35:1
cover, and the 900 by 500 pages all predate it. No source dates the change, so
this page does not either.

> Most sources that discuss it say a centered square is cut from the wide lead
> cover for some views, so the subject belongs in the middle of the frame. They
> do not agree on which view or on the square's size.
> Source: 6 independent published references, Chinese-language, collected 10
> September 2026. Consensus on the principle, contested on every number. Not a
> platform reading.

| Spec | Value | Spread and age | Sources | Confidence |
|---|---|---|---|---|
| Lead cover | 2.35:1 at 900 by 383 | 900 by 500 on three pages from 2017 to 2020 | 7 of 11, all from 2021 on | consensus |
| Secondary cover | 1:1 at 200 by 200 | None published against it | 8 of 10 | consensus |
| Crop from the lead cover | Keep the subject centered | No agreement on which view or on size | 6 | contested on every number |
| Body image width | 900 pixels | 1080 on three pages dated 2026 | 5 | contested by date |
| Editor file cap | 5MB | 2MB to 10MB, and three of four 5MB pages date from 2017 to 2020 | 4 | contested |
| Body image formats | JPG, PNG and GIF | None published against it | 4 | consensus |

The editor file cap deserves its caveat in full.

> Published cover and body image caps for the Official Account editor run from
> 2MB to 10MB. The 5MB figure is the most common, on four sources, but three of
> them date from 2017 to 2020 and repeat an undated Tencent FAQ. Pages written
> since 2021 split between 10MB, 5MB and 2MB.
> Source: 6 independent published references giving a cap, Chinese-language and
> English-language, dated 2017 to 2026, collected 10 September 2026, grouped by
> date before counting. Contested, not a primary reading.

> The most commonly published working width for an image inside a WeChat
> article is 900 pixels, on five sources. Pages written in 2026 lean to 1080
> pixels, on three.
> Source: 8 independent published references giving a width, 7 Chinese-language
> and 1 English-language, dated 2017 to 2026, collected 10 September 2026.
> Modal value, contested by date, not a primary reading.

Export body images at 1080 pixels wide and under 2MB and you sit inside every
published width and cap at once.

WeChat does publish exact limits for one route into an article, and it is easy to
misread them.

> WeChat's developer documentation for the Official Account upload API, read on
> 10 September 2026, sets images inserted into an article body through the API
> at JPG or PNG under 1MB, the thumbnail image an API-built article uses as its
> cover at JPG under 64KB, and other image material at up to 10M. Those limits
> govern software publishing through the API. The documentation does not say the
> web editor shares them.
> Source: two Official Account API documentation pages (upload permanent
> material, upload article image) fetched unauthenticated 10 September 2026,
> English-language edition of the platform docs, undated. Primary reading for the
> API route only.

A 64KB cover limit on an API-built article is not a rule for covers made in the
editor. If your articles go out through a scheduling tool or a custom integration,
these are the limits that apply to you. If a person uploads them in the editor,
the counted figures above are the guide.

<!-- SECTION: Channels -->

## What are the WeChat Channels video specs?

Here WeChat's own help center answers directly, which makes Channels the best
documented surface in this whole series.

> WeChat's Channels help center, read on 10 September 2026, says a video post
> can run from 3 seconds to 60 minutes when published from the phone, and from
> 3 seconds to 8 hours through the desktop Channels assistant, with a maximum
> file of 2G. It recommends a standard 16:9 or 9:16 frame at 1080p or above, and
> accepts any width-to-height ratio from 0.33 to 3.0. Image posts take up to 20
> images in the same ratio range.
> Source: the Channels help-center article on posting requirements, served
> unauthenticated on 10 September 2026, Chinese-language, no date shown on the
> page. Primary reading, scoped to that article.

> The same help page says Channels does not yet accept GIF images or HDR video,
> and that H.265 video recorded on an iPhone 12 or later should be posted from
> an iOS device or through the Channels assistant in Safari on a Mac.
> Source: the Channels help-center article on posting requirements, read 10
> September 2026, Chinese-language, undated page. Primary reading, scoped to that
> article.

| Spec | Value | Source | Confidence |
|---|---|---|---|
| Duration, from the phone | 3 seconds to 60 minutes | Channels help center | primary |
| Duration, desktop assistant | 3 seconds to 8 hours | Channels help center | primary |
| File size | Up to 2G | Channels help center | primary |
| Recommended frame | 16:9 or 9:16 at 1080p or above | Channels help center | primary |
| Accepted ratio | 0.33 to 3.0, width to height | Channels help center | primary |
| Images per post | Up to 20 | Channels help center | primary |
| Not accepted | GIF images and HDR video | Channels help center | primary |

Those are the only platform-stated refusals found anywhere in this series. They
are worth building into an export preset rather than discovering at upload.

What makes Channels tricky is not a lack of numbers. It is how many old ones are
still in print.

> Channels limits have moved several times, and the old figures are still
> published. A 2020 page gives a one-minute ceiling and 30MB. A 2021 report
> describes one hour and 2GB. A 6:7 frame at 1080x1260, first called the
> official vertical size around the 2020 launch, still appears as the Channels
> cover size on a 2026 page, while the platform's own help center now recommends
> 16:9 or 9:16.
> Source: 7 independent published references, 6 Chinese-language and 1
> English-language, dated 2020 to 2026, compared against the Channels help center
> on 10 September 2026. Stated as an observation about published sources.

A one-minute limit and a 6:7 frame both belong to the launch. If a brief arrives
with either, it was written from a page that has not been updated since.

<!-- SECTION: Channels against Douyin -->

## Can I reuse a Douyin cut on WeChat Channels?

On the published figures, yes on frame and generously on length.

> On published figures, the gap between a Douyin cut and a Channels cut is
> length more than frame. Douyin's upload API documentation caps a video at 15
> minutes. WeChat's Channels help center allows 60 minutes from the phone and
> 8 hours from the desktop. The most commonly published Douyin frame, 9:16 at
> 1080 by 1920, matches the 9:16 the Channels help center recommends, though
> pages from 2020 to 2022 say Channels crops a 9:16 file top and bottom.
> Source: the Douyin Open Platform upload API doc (primary, API route only) and
> the Channels help center (primary, scoped to its posting-requirements
> article), both read 10 September 2026. The Douyin frame is a modal value from
> 4 of 4 Chinese-language domains in brief 05, not a primary reading. The crop
> claim rests on 1 fetched Chinese-language page from 2022 and extracts from
> about 2020, contested and stale. A comparison of published figures, not a
> measurement of either app.

| | Douyin | Channels | Basis |
|---|---|---|---|
| Length | 15 minutes | 60 minutes from the phone, 8 hours from desktop | Douyin API doc against Channels help center, both primary and scoped |
| Frame | 9:16 at 1080 by 1920 | 9:16 recommended, 0.33 to 3.0 accepted | Douyin modal value against Channels primary |
| Crop of a 9:16 file | Not addressed | Claimed on pages from 2020 to 2022 | Contested and stale |

So a vertical Douyin master carries over, and length stops being a constraint.
The crop claim is old and thin, and the help center's own recommendation of 9:16
points the other way, but a quick upload test settles it for your account.

<!-- SECTION: Mini Program -->

## What size are Mini Program banners?

No published figure exists for Mini Program banners. Across the sources read,
banner sizes produced no mode at all, so this page gives none. What WeChat does
publish is narrower and precise.

> WeChat's Mini Program framework reference, read on 10 September 2026, says a
> custom share image may be PNG or JPG and displays at a 5:4 aspect ratio. If no
> image is set, WeChat uses a screenshot of the current page. The reference gives
> no pixel size. The size published most often elsewhere is 500x400.
> Source: the Page reference, onShareAppMessage imageUrl field, developer
> documentation fetched 10 September 2026, undated. Primary reading for the
> ratio and formats. The 500x400 size comes from search extracts across 3
> publishers and is contested.

> WeChat's Mini Program configuration documentation limits each tab bar icon to
> 40KB, recommends 81x81 pixels, refuses network images, and allows two to five
> tabs.
> Source: the app.json configuration doc, tabBar fields, developer documentation
> fetched 10 September 2026, undated. Primary reading, scoped to tab bar icons.

| Asset | Value | Source | Confidence |
|---|---|---|---|
| Share card ratio and format | 5:4, PNG or JPG | Mini Program framework reference | primary |
| Share card pixel size | 500 by 400 | Search extracts, three publishers | contested |
| Tab bar icon | Under 40KB, 81 by 81 recommended, no network images | Mini Program configuration doc | primary, tab icons only |
| Number of tabs | Two to five | Mini Program configuration doc | primary |
| Banner | No published size | None found | not published |

The 81 by 81 figure applies to tab bar icons and nothing else. It is not a Mini
Program icon size in general, and it is not a banner size.

<!-- SECTION: ads -->

## Tencent Ads placements

Coverage here is deliberately thin. The Tencent Ads help center redirected to its
home page when read, so the placement specs for Official Account, Channels and
Mini Program ads could not be reached. One dated platform note was readable.

> A January 2023 Tencent Marketing School note lists seven sizes for Moments
> regular image ads: 800x800 at 1:1, 960x1280 at 3:4, 1280x960 at 4:3, 1280x1024
> at 5:4, 1024x1280 at 4:5, 720x1280 at 9:16 and 1280x720 at 16:9.
> Source: Tencent Marketing School product note dated 5 January 2023, fetched 10
> September 2026, Chinese-language. Primary reading, scoped to that note and its
> date.

That is a platform statement, and it is more than three years old. Use it for
Moments image ads, confirm it in the ad account, and do not read it as covering any
other placement.

The social media design service page covers producing across WeChat's surfaces,
the article on Douyin video specs and safe zones covers the other half of a
vertical video plan, and the article on RedNote note and cover specs covers the
third major social surface.

Reviewed 10 September 2026. Confirm every counted figure in your own account
before building a batch to it.

<!-- SECTION: FAQ -->

## Questions about WeChat specs

**What size is a WeChat article cover image?**

The most commonly published lead cover is 2.35:1 at 900 by 383 pixels, on seven of
eleven sources that state a size and on every one dated 2021 or later. Secondary
articles take a square, most often 200 by 200. The 900 by 500 figure belongs to
older pages. These are counted values, so confirm them in your account.

**What are the WeChat Channels video specs?**

WeChat's own Channels help center, read on 10 September 2026, allows 3 seconds to
60 minutes from the phone and up to 8 hours from the desktop assistant, files up
to 2G, a recommended 16:9 or 9:16 frame at 1080p or above, and any ratio from
0.33 to 3.0. GIF images and HDR video are not accepted.

**Can I reuse a Douyin cut on WeChat Channels?**

On published figures, the frame carries over: the Channels help center recommends
9:16, matching the most published Douyin frame of 9:16 at 1080 by 1920. Length is
far more generous on Channels. Some pages from 2020 to 2022 say Channels crops a
9:16 file, a contested and stale claim worth checking with one test upload.

**What size are Mini Program banners?**

No published banner size exists in the sources read, so none is given here.
WeChat's own developer reference does publish a share card at a 5:4 ratio in PNG
or JPG with no pixel size, and tab bar icons under 40KB at a recommended 81 by 81
pixels, which apply to tab icons only.

**What image sizes work inside a WeChat article body?**

The most published working width is 900 pixels, on five sources, while pages
dated 2026 lean to 1080. Editor file caps are contested between 2MB and 10MB.
Exporting at 1080 wide and under 2MB clears every published figure. The API's
1MB limit applies only to images uploaded through the API.

<!-- CTA -->

CTA: Talk to the production team

<!-- =====================================================================
FEATURE IMAGE: INSTRUCTION FOR CLAUDE CODE

Generate the feature (hero) image from the prompt below with the
generate-image-openai skill, convert to webp, then wire it in as the
article's featured image and OG image.

- Save to:    public/Images/insight-wechat-specs-articles-channels-mini-program.webp
- Reference:  /Images/insight-wechat-specs-articles-channels-mini-program.webp
- Format:     .webp, landscape 3:2, under ~250 KB, max 2000px wide
- Style rule: hubstudio-image-style-guide.md is binding. Authored editorial
              campaign photography, one light source, one shadow, prime-lens
              framing, f/2.8 to f/5.6, warm-shadow film grade, lifted black
              point, subtle grain, rule-of-thirds with negative space for
              typography. No named person in the prompt.

CREATIVE ANGLE (one sentence, for the record): the piece consolidates three
surfaces with three different shapes into one maintained page, so the image is a
studio pinboard where a wide panoramic print, a small square print and a tall
vertical print of the same scene are pinned side by side, one being re-pinned.

IMAGE PROMPT (use verbatim):

An editorial photograph of a cork pinboard on the wall of a working Shanghai
studio, shot straight on at a slight angle, with three photographic prints of the
same simple scene, a steaming ceramic teacup on a wooden table beside a window,
pinned in a row: at the left a very wide panoramic print, in the middle a small
square print, and at the right a tall narrow vertical print, all showing the same
cup cropped three different ways; each print is held by plain steel pushpins, and
a hand with short unpainted nails is pressing a pushpin into the top corner of the
tall vertical print as if re-pinning it; a few older pinholes and a faint pale
rectangle on the cork show where a previous print used to hang; a single hard
daylight source enters from a window off frame to the left, throwing one clean
directional shadow from each print's lifted edge across the cork and leaving the
right side of the board in warm falloff; the cork is worn and marked, with tape
residue and a loose pushpin stuck at an angle; shot on a full frame camera with a
50mm prime at f/4, focus on the square print and the hand with the panoramic print
at the left falling gently soft, rule-of-thirds framing with the upper third of the
board left mostly clear cork for typography; warm shadows, desaturated midtones,
lifted black point, fine natural film grain, daylight negative film palette; no
text legible anywhere, no numbers, no logos, no app interface, no watermark, no
screens or phones in frame.
===================================================================== -->

<!-- SCHEMA
Type: BlogPosting
FAQPage: yes, 5 questions
Breadcrumb: Home > Insights > WeChat specs: articles, Channels, Mini Program
Author: Cyril Drouin
datePublished: 2026-09-10
-->

<!-- ASSET BRIEF
TABLES:
  1. Official Account article specs, split by date where the sources split.
  2. Channels specs, every row primary from the help center, scoped to it.
  3. Douyin against Channels, labeled per row as published figures, primary or
     modal, never as a measurement of either app.
  4. Mini Program assets, with the banner row carrying "not published".
CHARTS: none.
SCREENSHOTS: the slot requirement asks for an annotated screenshot and rejection
  reasons. No screenshot was taken and none is reconstructed. The only
  platform-stated refusals found are the Channels ones (GIF images, HDR video),
  published as such. Captures of the Channels posting-requirements page and the
  two Mini Program doc pages would preserve the primary rows against silent change,
  since none of those pages shows a date.
DOWNLOADS: an export preset sheet for Channels built from the primary rows only,
  plus the article cover pair (2.35:1 lead, 1:1 secondary) marked as counted values,
  ungated.
INTERNAL LINKS:
  social media design service page -> /services/design/social-media
  article on Douyin video specs and safe zones -> /resources/insights/douyin-video-specs-safe-zones
  article on RedNote note and cover specs -> /resources/insights/rednote-note-cover-specs
CLIENT SIGN-OFF NEEDED: none.
RESEARCH FILE: editorial/research/wechat-specs-articles-channels-mini-program.md

TITLE, META AND MUST-INCLUDES CHANGED FROM THE BRIEF: the title spells out "Mini
  Program" rather than "Mini App", matching WeChat's own naming and the body copy.
  The draft meta promised "Mini Program banners and Tencent Ads". No published
  banner size exists, and the Tencent Ads help center redirected, so neither can be
  delivered; the meta now describes the readable-versus-counted split instead. The
  brief's "Tencent Ads placements" must-include is met only by the one readable
  dated note, for Moments image ads, with the unreachable placements stated.

LINKS CHANGED FROM THE BRIEF: /solutions/platforms/wechat and /resources/specs do
  not exist. Substituted the published Douyin and RedNote spec articles.

DISCLAIMER: WeChat is the case SPEC.md's readable-page rule was written for. The
  first paragraph states which WeChat pages were readable and which were not,
  rather than claiming nothing is served. The middle and closing paragraphs are the
  template's, with NN given as "up to 12", since the largest counted pool in the
  research file is 12 references and smaller rows draw on 6 to 8. A paragraph after
  the block names each primary page and its scope. "Help centre" and "centred" in
  the cleared quotations are spelled "help center" and "centered" for American
  English site copy.

WHAT THE PAGE NEVER DOES: present a counted value as official or verified; stretch
  the API limits into editor rules (the 1MB body image and 64KB cover limits are
  scoped to the API route in the quote, in the body copy after it, and in the FAQ);
  print 900 by 500 as the current cover or give a year for the 2.35:1 change or the
  FAQ; call 6:7 the official Channels frame or say Channels crops 9:16 today; use the
  4GB, 30 minute or 2 hour Channels figures, or the English "15 to 60 seconds, 10MB";
  present 500 by 400 or 144 by 144 as WeChat's own sizes; apply 81 by 81 to anything
  but tab bar icons; print any banner size or any Official Account, Channels or Mini
  Program ad spec; cite the Moments sizes without their January 2023 date; name any
  quarantined domain; or publish a hubStudio rate.

UNCONFIRMED ROWS LEFT OUT: the Mini Program design guideline's 390 pixel responsive
  canvas and a 30-minute Channels limit for older phones each rest on a single fetch
  summary and are not printed.

NO HAN CHARACTERS. Channels and Mini Program are named in English.

DISTRIBUTION: category Platform specs, claimed by the social media design service
  layer, where WeChat buyers land, and by the ecommerce design service layer.
-->
