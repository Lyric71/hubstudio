---
title: RedNote Note and Cover Specs 2026
slug: rednote-note-cover-specs
description: RedNote cover ratios, image counts, video specs and safe areas, counted across 20 sources, and the three conflicting accounts of how covers get cropped.
excerpt: Every source agrees a RedNote cover is 3:4 at 1080 by 1440. Almost nothing else agrees, least of all how the app crops it.
template: insight
---

<!-- HERO SECTION -->

# RedNote note and cover specs, and the crop nobody agrees on

The size of a RedNote cover is the one thing the published sources settle. What
the app then does to that cover, in the feed, on a profile and in search, is
where the guides quietly contradict each other, and it is where a designer
loses the headline.

<!-- INTRODUCTION -->

## What size should a RedNote cover image be?

The most commonly published figure is a 3:4 vertical frame at 1080 by 1440
pixels. Fourteen of fourteen sources that name a default ratio name 3:4, and
thirteen give 1080 by 1440 as its size. That row is solid. Most of the rows
below it are not, and this page says which.

<!-- SECTION: How to read these numbers -->

## How to read these numbers

These specs are not read from a creator backend. RedNote's own creator,
advertiser and help surfaces serve an application shell to anyone not logged
in, so no open source reaches the official value.

What follows is the most commonly published figure for each spec, collected
across 20 independent sources in Chinese and English on 10 September 2026, with
the number of sources that agreed shown per row. Rows marked consensus had broad
agreement. Rows marked contested did not, and those carry the full spread
rather than a single number.

Treat this as the best available public reading, not as the rule. Platform
specs change without announcement and often without an English notice at all.
Before you build a batch to any number on this page, open your own creator
account and confirm it there. Reviewed 10 September 2026.

> Four platform-owned RedNote surfaces, the creator centre, the advertiser
> centre, the help centre and the seller and creator school, each returned a
> normal 200 response and a JavaScript application shell to an unauthenticated
> request on 10 September 2026. No specification text was served. The only pixel
> values in the delivered help-centre file were stylesheet breakpoints.
> Source: direct unauthenticated fetches of four platform-owned surfaces, 10
> September 2026, response size and body content recorded per request. Primary
> observation, not a specification.

That is why the guides disagree. None of them is reading the platform either.

<!-- SECTION: note images -->

## What aspect ratio does RedNote use?

> The most commonly published RedNote cover format is a 3:4 vertical frame at
> 1080x1440 pixels. Fourteen of fourteen independent sources that name a default
> name 3:4, and thirteen give 1080x1440 as its pixel size, with a higher-density
> 1242-pixel-wide variant appearing on three.
> Source: 20 independent published references in Chinese and English collected
> 10 September 2026, counted per domain and reported as the most commonly
> published figure, not as a value read from the platform.

| Spec | Most published value | Spread across sources | Sources agreeing | Confidence |
|---|---|---|---|---|
| Default cover ratio | 3:4 vertical | 1:1 and 4:3 named as alternates, never as default | 14 of 14 | consensus |
| Cover size at 3:4 | 1080 by 1440 | A 1242-pixel-wide variant on three sources | 13 | consensus |
| Square alternate | 1080 by 1080 | Unanimous where a square size is given | 7 | consensus |
| Landscape alternate | 4:3 | Pixels split across 1080 by 810, 1200 by 900 and 1440 by 1080 | 5 name the ratio | contested on pixels |
| Image file ceiling | 20 MB per image | Working advice far lower, 5 MB down to 300 to 800 KB | 4 | consensus on the ceiling |
| Image formats | JPG and PNG | One source adds sRGB rather than Adobe RGB | 5 | consensus |
| Avatar | 400 by 400 minimum, circular crop | 800 by 800 recommended, 300 by 300 once | 4 | consensus |

One practical note sits under the ratio rows. Sources that address it say every
image in a note should share one size, and while that is contested as a rule it
costs nothing to follow.

<!-- SECTION: image count -->

## How many images can a RedNote note have?

Somewhere between nine and eighteen, and the published field does not say when
that changed.

> Published sources do not agree on how many images one RedNote note carries.
> Three 2026 specification tables give 18. Two undated seller-education pages
> give 9. No source dates the change or explains it, so the honest reading is a
> range rather than a number.
> Source: five independent published references collected 10 September 2026,
> counted per domain, range published rather than averaged. Not a platform
> reading.

The split lines up with publication age, the dated 2026 tables at eighteen and
the undated pages at nine, which suggests a limit that rose and a set of pages
that were never updated. Plan a carousel for nine and treat anything beyond it
as a bonus you confirm in your own account.

<!-- SECTION: the crop -->

## Why is my RedNote cover cropped differently in search?

This is the part of the page worth the visit, because the published sources do
not merely disagree on a number here. They disagree on what happens at all.

> Ten published sources describe what RedNote does to a note cover, and they
> split into three incompatible accounts: that the feed shows the full 3:4 card
> and the profile grid takes a centre 1:1 crop, that the feed shows the full card
> with interface chrome laid over the lower 15 to 20 percent, and that the feed
> itself lifts a centre 1:1 square out of the first image. Four sources back the
> first, four the second and two the third.
> Source: ten independent published references collected 10 September 2026,
> grouped by the mechanism each claims rather than by the numbers attached to it.
> No open source resolves which is live in the app.

| Account | What happens to the cover | Sources | If you designed for a different account |
|---|---|---|---|
| Full card | Feed shows the whole 3:4 card, profile grid takes a centre square | 4 | You centre everything and waste the top and bottom of every feed card |
| Occlusion | Feed shows the whole card, then lays the title and author bar over the lower part | 4 | Your low headline survives the crop and sits under the interface |
| Hard feed crop | The feed itself cuts a centre square out of the cover | 2 | Your top-third headline gets cut off in the feed entirely |

The asymmetry matters. Under the occlusion account the lower band is covered
but still there, so a background can run into it. Under the hard-crop account
those pixels are gone. Advice written for one account fails under another, and
nothing published settles which one the app runs today.

Search is murkier still. A single publisher reports search results forcing
covers into square or 4:3 cards in some layouts. One source is not a mode, so
this page records the report and does not publish it as a spec.

On the profile grid the sources that mention it agree: the grid lifts a centre
square out of the cover. Most English guides never mention the grid at all.

<!-- SECTION: safe area -->

## The one instruction that survives every account

> Whichever of the three published accounts of RedNote cover cropping is
> correct, one instruction holds under all of them: keep the headline, the face
> and the product inside the centre square of the cover, which is the middle
> 1080x1080 pixels of a 1080x1440 frame. It is the only region that survives a
> centre crop, a grid crop and an interface overlay alike.
> Source: derived from the three published crop accounts collected 10 September
> 2026 by taking the region common to all of them. A safe intersection, not a
> platform rule.

That is the working rule this page stands behind, and it is a derivation rather
than a platform rule. The bottom of the frame gets a direction instead of a
number.

> Eight published sources tell designers to keep the lower part of a RedNote
> cover clear, and no two give the same figure. Reserved depths appear as about
> 144 pixels, 150 pixels, 180 pixels, 200 pixels, and as 15 to 20 percent of
> frame height, which on a 1440-pixel-tall cover is roughly 216 to 288 pixels.
> Source: eight independent published references collected 10 September 2026,
> every reserved depth converted to a common 1080x1440 canvas before comparison.
> Range published, not averaged, and not read from the platform.

Eight sources, five figures. Keep text out of the lowest 288 pixels and you are
clear of every one of them.

<!-- SECTION: video -->

## What are the RedNote video note specs?

The widest spread on the page, so treat every number here as a starting point.

> Published RedNote video note limits span a factor of ten. Duration ceilings
> appear as 5 minutes, 15 minutes and 30 minutes across four sources, and file
> caps appear as 50 MB, a 200 to 500 MB band, and 500 MB. Only the vertical
> orientation is agreed.
> Source: four independent published references carrying a video table,
> collected 10 September 2026, every published figure recorded and the full
> spread reported. Modal values, not platform readings.

| Spec | Most published value | Spread across sources | Sources agreeing | Confidence |
|---|---|---|---|---|
| Orientation | Vertical | Agreed everywhere | 4 | consensus |
| Video frame | 9:16 at 1080 by 1920 | Two sources recommend 3:4 for the frame | 5 | contested on which vertical |
| Video cover | 3:4 at 1080 by 1440 | Matches the image cover | 4 | consensus |
| Resolution | 1080p recommended, 720p floor | None beyond the two figures | 4 | consensus |
| Duration ceiling | 15 minutes | 5, 15 and 30 minutes all published | 3 | contested |
| File size cap | 500 MB | 50 MB to 500 MB | 2 | contested |
| Formats | MP4, with MOV named twice | MP4 unanimous | 3 | consensus |

Export a vertical 1080p MP4 under 50 MB and kept to five minutes, and you sit
inside the tightest published figure on every contested row.

<!-- SECTION: what nobody publishes -->

## Why this page exists

> Across five buyer phrasings in Chinese and English, no page publishes a source
> count, a confidence label, or a per-surface crop model for RedNote covers. Two
> of the fullest Chinese specification tables are close to identical row by row,
> so the field's apparent agreement is in part an echo rather than independent
> corroboration.
> Source: five queries run 10 September 2026, Chinese first, every returned
> result classified by page type, by what it answers and by what it cites.

That last sentence is worth holding onto. When two long tables match row for row,
the agreement you are looking at may be one source copied, not two sources
confirming.

The RedNote platform page covers how brand accounts are produced for the
platform, the social media design service page covers the note and carousel
work itself, and the short video design service page covers the vertical video
side.

<!-- SECTION: changelog -->

## Changelog

**10 September 2026.** First published under the counted-source method. Twenty
sources in Chinese and English. The default cover ratio and size reached
consensus. Image count, video duration, video file size, bottom safe area and
the feed crop mechanism stayed contested, and are published as ranges or as
competing accounts rather than as single figures.

<!-- SECTION: FAQ -->

## Questions about RedNote specs

**What size should a RedNote cover image be?**

The most commonly published figure is 3:4 vertical at 1080 by 1440 pixels,
named by fourteen of fourteen sources giving a default ratio and thirteen giving
that size, collected 10 September 2026. It is a counted published value rather
than a figure read from RedNote, so confirm it in your own creator account.

**What aspect ratio does RedNote use?**

3:4 vertical is the published default, with 1:1 and 4:3 named as accepted
alternates. Sources that address it advise keeping every image in one note at a
single size. Covers taller than 3:4 are reported once as being forced back to
3:4, which is too thin to treat as a rule.

**Why is my RedNote cover cropped differently in search?**

Published sources describe three incompatible crop behaviors in the feed, and a
single publisher reports search forcing some cards to square or 4:3. Nothing
public settles which is live. The one safe instruction is to keep the headline,
face and product inside the centre 1080 by 1080 square of the cover.

**How many images can a RedNote note have?**

Published sources split between 18 and 9. Three 2026 specification tables give
18, while two undated seller pages give 9, and no source dates the change. Plan
the carousel for nine and confirm any higher limit in your own account before
building around it.

**What are the RedNote video note specs?**

Vertical is agreed, with 9:16 at 1080 by 1920 most published for the frame and
3:4 for the cover. Duration ceilings run from 5 to 30 minutes and file caps from
50 MB to 500 MB across sources. A vertical 1080p MP4 under 50 MB and five
minutes clears every published figure.

<!-- CTA -->

CTA: Talk to the production team

<!-- =====================================================================
FEATURE IMAGE: INSTRUCTION FOR CLAUDE CODE

Generate the feature (hero) image from the prompt below with the
generate-image-openai skill, convert to webp, then wire it in as the
article's featured image and OG image.

- Save to:    public/Images/insight-rednote-note-cover-specs.webp
- Reference:  /Images/insight-rednote-note-cover-specs.webp
- Format:     .webp, landscape 3:2, under ~250 KB, max 2000px wide
- Style rule: hubstudio-image-style-guide.md is binding. Authored editorial
              campaign photography, one light source, one shadow, prime-lens
              framing, f/2.8 to f/5.6, warm-shadow film grade, lifted black
              point, subtle grain, rule-of-thirds with negative space for
              typography. No named person in the prompt.

CREATIVE ANGLE (one sentence, for the record): the piece argues that one cover
file is cropped three different ways by accounts nobody can reconcile, so the
image is a single vertical print with three different physical crop masks laid
across it at once, where the only area every mask leaves visible is the centre.

IMAGE PROMPT (use verbatim):

An overhead editorial photograph of a single vertical photographic print, taller
than it is wide, lying on a worn grey drafting table in a Shanghai studio, the
print showing a simple still life of a pale ceramic cup and a folded linen
napkin; laid across the print at the same time are three separate physical crop
tools that plainly disagree: a pair of black L-shaped cardboard cropping angles
framing a centred square, a strip of cream paper covering the lower fifth of the
print, and a second pair of grey L-shaped angles offset slightly higher framing
a different square; the three overlapping masks leave the centre of the print,
where the cup sits, visible under all of them, while the top and bottom edges
are covered by one mask or another; a single hard daylight source enters from
the upper left just outside the frame, throwing one clean directional shadow
from the raised edges of the cropping angles across the print and leaving the
lower right of the table in warm falloff; the table surface is genuinely used,
with fine scratches, pencil marks, a faint coffee ring, tape residue and dust; a
steel ruler and a pencil lie along the right edge; one hand with short unpainted
nails enters from the bottom edge, fingertips adjusting the lower grey cropping
angle; shot on a full frame camera with a 50mm prime at f/4, focus on the centre
of the print with the table edges falling gently soft, framing very slightly
rotated off square as if handheld, the upper left quadrant left mostly empty as
clean table surface for typography; warm shadows, desaturated midtones, lifted
black point, fine natural film grain, daylight negative film palette; no text
legible anywhere, no numbers, no logos, no watermark, no screens or phones in
frame.
===================================================================== -->

<!-- SCHEMA
Type: BlogPosting
FAQPage: yes, 5 questions
Breadcrumb: Home > Insights > RedNote note and cover specs
Author: Cyril Drouin
datePublished: 2026-09-10
-->

<!-- ASSET BRIEF
TABLES:
  1. Note image specs: spec, most published value, spread, sources agreeing,
     confidence. Counts on every row, as SPEC.md requires for deviation 7 pages.
  2. The three crop accounts: account, what happens, sources, what goes wrong if
     you designed for another. This is the page's reason to exist. Never
     collapse it into a single "the feed crops to X" statement.
  3. Video note specs with counts and confidence.
CHARTS: a simple diagram of a 1080 by 1440 frame showing the centre 1080 by 1080
  square and the lowest 288 pixels would help, provided its caption says it
  shows the derived safe intersection and not a platform rule.
SCREENSHOTS: the slot requirement asks for an annotated screenshot and the brief
  promised verification against the live app. Neither was done. No live-app
  capture was taken, so no screenshot is reconstructed. The research file's
  screenshot inventory names the in-app captures that would upgrade each row,
  and one set of feed, profile grid and search captures of the same test cover
  would resolve the crop question outright. That is the single most valuable
  capture in the whole China spec cluster.
DOWNLOADS: a 1080 by 1440 cover template with the centre square and the 288
  pixel bottom band marked as layers, labeled as derived guidance, ungated.
INTERNAL LINKS:
  RedNote platform page -> /solutions/platforms/rednote
  social media design service page -> /services/design/social-media
  short video design service page -> /services/design/short-video
CLIENT SIGN-OFF NEEDED: none.
RESEARCH FILE: editorial/research/rednote-note-cover-specs.md

H1 AND META CHANGED FROM THE BRIEF: the working H1 was "RedNote note and cover
  specs, verified against the live app" and the draft meta description said
  "verified against the live app with a changelog". No live-app verification
  was done: these are counted published values under deviation 7. Shipping
  either line would be a false claim. The H1 now reads "and the crop nobody
  agrees on" and the meta names the source count instead.

LINK CHANGED FROM THE BRIEF: /resources/specs, the China spec library hub, does
  not exist. Substituted the short video design service page, which covers the
  video note half of the article.

METHOD, PER DEVIATION 7: every value is the most commonly published figure
  across 20 sources, Chinese first, collected 10 September 2026. The SPEC.md
  disclaimer block runs verbatim after the opening answer with NN = 20, with
  "creator backend" and "creator account" substituted for "seller backend"
  since RedNote is not a marketplace. No value is described as official,
  verified or read from the platform, and no RedNote surface is cited as the
  source of a number.

HARD BLOCKS HELD: no single number for maximum images per note (18 against 9 is
  published as a range), video duration, video file size or the bottom safe
  area; the search crop appears only as "a single publisher reports", never as a
  spec row; no claim that any ratio is rejected at upload, since no source
  observed a rejection; and no engagement, click or algorithm claim attached to
  3:4, since those carry no sample and are published by sellers of cover tools.

THE CENTRE-SQUARE INSTRUCTION IS DERIVED AND LABELED AS SUCH every time it
  appears: in the cleared quote's source line, in the body copy directly after
  it, in the FAQ, and in the downloads note. It is the safe intersection of three
  published accounts, not a platform rule.

THE ECHO FINDING: two of the fullest Chinese spec tables are close to identical
  row by row, so some of the field's agreement is copying. The page says so, and
  it is why the consensus rows are described as solid rather than confirmed.

CHANGELOG: the brief requires a dated changelog at the foot. It sits as the last
  section before the FAQ, because SPEC.md requires the file to end on the CTA.
  Add a dated line to it whenever a row is re-verified or a capture replaces a
  modal value.

NO HAN CHARACTERS. RedNote is used throughout; the platform's Chinese name is
  not printed.

DISTRIBUTION: category Platform specs, which the ecommerce design service layer
  claims. RedNote buyers land on the social media design service page, so a
  placement is added there too.
-->
