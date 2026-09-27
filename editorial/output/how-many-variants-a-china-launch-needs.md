---
title: How Many Ad Variants a China Launch Needs
slug: how-many-variants-a-china-launch-needs
description: What China's ad platforms publish on creatives per ad, what none say about refresh, and what wear-out research says a launch needs.
excerpt: No Chinese ad platform publishes a launch variant count. Here is what one of them does publish, and what the wear-out research actually measured.
template: insight
---

<!-- HERO SECTION -->

# How many creative variants a China launch actually needs

Ask the three big Chinese ad platforms and one of them answers. Tencent Ads
publishes how many creatives an ad may hold. RedNote publishes the structure
without a number, and Ocean Engine publishes neither. None of them says how
often to replace a creative, and the wear-out research that might tell you was
run on Western display campaigns in 2009 and 2013.

<!-- INTRODUCTION -->

## How many ad creatives does a China launch need?

Nobody publishes a launch total. Tencent Ads is the only one of the three that
publishes a creative count per ad, RedNote publishes the ad structure without a
number, Ocean Engine's figure circulates from a single 2022 trade article, and
none publishes a refresh interval. hubStudio sizes variant sets per ad unit
instead.

<!-- SECTION: How to read these numbers -->

## How to read these numbers

Douyin's numbers are not read from an advertiser backend. Ocean Engine, the
platform that sells Douyin ads, served a page title and no body from both
developer pages for its upgraded ad tool, so no open source reaches its per-ad
figure. Tencent Ads and RedNote are the exception, though only in part. Each
serves documentation anyone can read, one of them with counts in it and one
without, and rows taken from those documents are labeled primary for that
document's scope only.

The Ocean Engine rows below are the most commonly published figures, collected
across 4 independent non-platform sources in Chinese and English on 10
September 2026, with the number of sources that agreed shown per row. Rows
marked consensus had broad agreement. Rows marked contested did not, and those
carry the full spread rather than a single number. On this page no row reached
consensus, which is itself part of the answer. The cap of 10 assets per ad is
contested for a specific reason: it originates once, in one 2022 trade article
republished on a second site.

Treat this as the best available public reading, not as the rule. Platform
specs change without announcement and often without an English notice at all.
Before you build a batch to any number on this page, open your own advertiser
account and confirm it there. Reviewed 22 September 2026.

Three platform-owned documents were readable. Tencent Ads publishes a dynamic
creative reference for API version 3.0 and a developer guide to the same
workflow, and the two disagree. RedNote's Juguang manual, a PDF on RedNote's own
content server, sets out the ad structure. Ocean Engine's encyclopedia entry
describes how its upgraded tool combines assets. Each is primary for what that
document covers and nothing else.

<!-- SECTION: what the platforms publish -->

## What does each Chinese ad platform publish?

| Ad platform | Creative count published | Refresh interval | Sources agreeing | Confidence |
|---|---|---|---|---|
| Tencent Ads, which sells WeChat inventory | Up to 100 creatives per ad; per dynamic creative up to 3 copy, 3 landing page and 15 image and video components on API v3.0; 3 per element and 3 videos in the guide | Not published | 2 Tencent developer pages, which disagree by version | primary, scoped to each document |
| Ocean Engine, Douyin, upgraded ads | Up to 10 assets per ad; 4 to 6 videos plus 6 or more titles advised; 2 to 3 per ad when testing | Not published | 3 trade pages carrying 2 articles, 2022; no platform page served text | contested, originates once |
| Ocean Engine, before the upgrade | Programmatic creative up to 10 titles, 12 images, 10 videos; 10 custom creatives per plan; 500 a day | Not published | 1 open-source code library, May 2022 | contested, single source, older product generation |
| Qianchuan, Douyin ecommerce | Not published | Not published | 0 platform pages reached | not published |
| Juguang, RedNote | Multiple creatives per unit, no maximum; an automatically bid plan holds one unit | Not published | 1 platform manual, May 2022 | primary for structure, count not published |

Tencent is the only one of the three that prints a creative count a brand can
read without an account. Its dynamic creative reference for API version 3.0,
read unauthenticated on 10 September 2026 and undated, allows up to 100
creatives under one ad and, inside a single dynamic creative, 3 copy components,
3 landing page components and 15 image and video components combined. Read those
as primary figures for that API version and for no other page. The mechanism
matters more than the ceiling.

> In Tencent Ads' dynamic creative guide, uploads multiply rather than add. Two
> images and two lines of copy become four creatives; two videos, two images and
> two lines of copy become eight. The system picks the best-performing
> combination and shows it. That guide caps each element at 3 uploads and video
> at 3, a lower ceiling than the version 3.0 reference.
> Source: Tencent Ads developer guide to dynamic creative ads, read 10 September
> 2026, undated. A primary reading scoped to that guide; the gap between the two
> documents is an observation, not an explanation.

The same machinery turns up on the Douyin side, minus the number. Ocean Engine's
encyclopedia entry for its upgraded ad tool, dated 11 April 2023 and read on 10
September 2026, says the system combines videos, images, titles and landing pages
automatically, selects among them online and explores the full set. What it never
says is how many assets one ad may hold.

So where does the Douyin figure everyone quotes come from?

> The most specific Douyin figure in circulation is a cap of 10 creative assets
> per ad in Ocean Engine's upgraded ad tool, with advice of 4 to 6 videos and at
> least 6 titles per ad, and 2 to 3 when testing new creative. All of it traces
> to one Chinese trade article from September 2022, republished on a second site.
> A separate December 2022 article describes 4 or more videos and 5 to 6 titles
> on one ad.
> Source: 3 Chinese-language trade media pages carrying 2 independent articles,
> September and December 2022, plus 2 Ocean Engine developer pages that served no
> text, all read 10 September 2026. Modal values from one origin, contested.

RedNote publishes the shape and leaves the number out. Its Juguang manual, read
in full on 10 September 2026, sets out an ad as a plan, units and creatives: a
manually bid plan holds several units, an automatically bid plan one, and every
unit holds several creatives. Full-text search finds no maximum anywhere.
Qianchuan, the ecommerce ad product on Douyin, is a blank, because no page it
owns was reachable.

<!-- SECTION: refresh -->

## How often do the platforms say to refresh creative?

They don't. Not one of them.

> None of the 11 pages read from Ocean Engine, Tencent Ads and RedNote says how
> often a creative should be replaced. The refresh intervals that circulate in
> Chinese come from agency and practitioner pages, and none of them states a
> sample.
> Source: 11 pages owned by three Chinese ad platforms, fetched unauthenticated
> 10 September 2026, plus 48 Chinese-language search results on seven phrasings
> classified by publisher type. An absence confirmed at source, not a figure.

Across five agency and practitioner pages dated 2024 to 2026, those intervals run
from two days to a month, and one of them puts a good RedNote note at a year or
more. None of those pages states a sample. The spread covers two orders of
magnitude, and that's why no number of days appears here. Which leaves the
question of what does govern the decision.

<!-- SECTION: wear-out research -->

## What does wear-out research actually measure?

Advertising research uses a narrower word than the creative fatigue label in ad
tools. Wearout, as a 2013 Marketing Science paper defines it, is the decreased
effectiveness of advertising copy over time. It comes in two kinds: repetition
wearout from seeing the same ad again, and copy wearout from the passage of time.

Four studies carry the useful findings. All four are Western, and none of them
touches Douyin, WeChat or RedNote. Read them for the mechanism, not for a number.

| Published in | Method and sample | What it found | What it cannot tell you |
|---|---|---|---|
| Journal of the Academy of Marketing Science, 2016 | Between-subjects repetition experiment across six dependent variables | High divergence and relevance ads wear in at once and barely wear out; low-creativity ads follow an inverted U | It's a lab experiment, not a live campaign, and not a Chinese platform |
| Marketing Science, September 2013 | Hierarchical Bayesian model on 5,803 randomly sampled people from one automobile brand's 10-week 2009 banner campaign with 15 creatives | Rotating creative by each person's exposure history simulated 12.7 percent more expected visits and 13.8 percent more conversions | One brand, one 2009 desktop campaign, and the lift is simulated rather than tested |
| Journal of Marketing Research, 2019 | Latent-class model of site visits across more than 12,000 users and more than 400 websites, 72-day 2013 campaign | One class of users, about 24 percent of the sample, visited less as exposures rose; capping could have improved deployment by up to 15 percent | Visits rather than sales, and one financial services advertiser |
| Journal of Advertising, 2015 | Meta-analysis of experimental repetition studies | Attitude peaks near ten exposures, recall rises through at least the eighth, and both decay over time | Experimental settings only, and the number of studies pooled was not confirmed at source |

The first row gets skipped most often, and for a production plan it is the one
that pays.

> In a controlled repetition experiment, ads high in divergence and relevance
> "wear in immediately and show little sign of wearing-out even over repeated
> exposures", while low-creativity ads followed "the classic inverted U-Shape"
> and declined with repeated exposure.
> Source: Journal of the Academy of Marketing Science, volume 44 issue 3, pages
> 334 to 349, 2016. A two-by-two-by-three between-subjects experiment across six
> dependent variables.

A strong master survives volume. A weak one gets worse the more you spend behind
it. Variety still earns its keep, for the reason in the second row rather than
freshness for its own sake: delivery can rotate a set against what each person has
already seen, and rotation is the mechanism that bought the modeled lift there.
The fourth row sets the other boundary, somewhere past ten exposures.

<!-- SECTION: derived variant plan -->

## What does a variant plan look like per ad unit?

Start with the arithmetic. Every line below is derived from the published limits
above, not published by any platform.

- **Tencent, from its guide's own example.** Two videos, two images and two
  lines of copy multiply to 8 combinations out of 6 uploads.
- **Tencent, at the guide's caps.** Three of each element multiplies to 27
  combinations out of 9 uploads, assuming all three types are used and multiply
  as the guide's example shows.
- **Douyin, at the circulating advice.** Cross 4 to 6 videos with 6 titles and
  you get 24 to 36 pairings per ad. Two assumptions ride on that, though: that
  titles cross every video, and that they do not count against the 10-asset cap.
  No source says either.

Combinations are cheap, and the platform builds them. What a production plan
controls is the count of distinct masters going in, and on both platforms that is
a single-digit or low-teens figure per ad unit. Hence the plan below, derived
from the published limits and the wear-out research, sized per ad unit rather
than per launch because no source supplies ad units, a budget or a flight length.

| Phase | Douyin, per ad | WeChat, per dynamic creative | RedNote, per unit | Why, from the sources above |
|---|---|---|---|---|
| Test | 2 to 3 new masters, inside the 10-asset cap | 2 of each element, 8 combinations | Several creatives, no count published, sized to budget | Few masters, many platform-made combinations; a weak master decays under repetition, so find the strong ones first |
| Scale | Fill a proven ad toward 10: 4 to 6 videos plus 6 or more titles | Up to 15 visuals and 3 lines of copy on v3.0, or 3 per element on the guide | Add creatives to the units that deliver; automatically bid plans hold one unit | Variety lets delivery rotate creatives against each person's exposure history |
| Sustain | Replace the weakest master when the account's own data shows decline | Same | Same | No platform publishes an interval; strong creative lasts longer, and a share of users turns weary on volume, so cap exposure as well as refresh |
| Brand formats | TopView and open screen cut from the same vertical master | n/a | n/a | Re-edits of the master, not new shoots |

The last row is not a phase. Douyin's brand formats get cut from the master the
first three rows produce, so they add editing time rather than another shoot.

Print the assumptions with that table, every time. The ad unit is the counting
unit, not the campaign. The 10-asset cap and the 4 to 6 video advice rest on one
2022 trade article. The Tencent limits come from developer documentation, not the
ad manager interface. And no refresh interval appears because none is published.

If you're sizing a set this week, count masters rather than combinations, then
open the account and check the cap before anything goes into production.

One Shoot, Six Platforms: China Matrix holds the platform slot count per product
(a different number, and one that should never be read as a variant count). The
Douyin platform page covers how the formats are bought; the ad creative design
service page covers how a set gets built and trafficked.

Masters are where the cost sits.

> hubStudio's studio page describes a footwear launch of twelve colorways across
> four markets as one strong shoot of the hero product, then generation for every
> color variant, market adaptation and ecommerce angle: "The real work is knowing
> which 20% to shoot and which 80% to build from there."
> Source: hubStudio's who we are page, read 10 September 2026. A published
> first-party illustration of the shoot-to-build split, with no sample or period
> published behind it.

<!-- SECTION: FAQ -->

## Questions about China ad variant counts

**How many creatives should a Douyin ad plan have?**

Plan is the older Ocean Engine level; the upgraded tool uses project and ad. The
most specific figure in circulation caps one ad at 10 assets, with 4 to 6 videos
and 6 or more titles advised, and 2 to 3 while testing. It traces to one 2022
trade article, so treat it as contested and confirm it in your advertiser
account.

**How often should China ad creatives be refreshed?**

No Chinese ad platform publishes an interval. None of the 11 platform-owned pages
read on 10 September 2026 gives one, and the figures in circulation come from
agency pages with no stated sample. The research supports judgment, not a
calendar: strong creative holds up under repetition, weak creative decays, and
part of any audience turns weary on volume alone.

**How many ad variations should I test in China?**

Tencent Ads caps each dynamic creative element at 3 uploads in its developer
guide, and its API version 3.0 reference allows 15 image and video components with
3 lines of copy. Ocean Engine advice in circulation says 2 to 3 assets per ad
while testing, a contested figure that dates from 2022. The plan above is
derived, not a rule.

**What is creative fatigue in paid social?**

Advertising research calls it wearout, the decreased effectiveness of advertising
copy over time. It splits in two: repetition wearout from seeing the same ad
again, and copy wearout from time passing. In one 2019 field study a class of
users, about 24 percent of the sample, made fewer site visits as exposures rose.

**How many variants can one shoot produce?**

No platform and no study publishes a number, and the counts in One Shoot, Six
Platforms: China Matrix are platform placements per product, a different figure.
hubStudio's who we are page describes a footwear launch of twelve colorways in
four markets as one hero shoot, with generation for every variant after it.

<!-- CTA -->

CTA: Plan the variant set

<!-- =====================================================================
FEATURE IMAGE: INSTRUCTION FOR CLAUDE CODE

Generate the feature (hero) image from the prompt below with the
generate-image-openai skill, convert to webp, then wire it in as the
article's featured image and OG image.

- Save to:    public/Images/insight-how-many-variants-a-china-launch-needs.webp
- Reference:  /Images/insight-how-many-variants-a-china-launch-needs.webp
- Format:     .webp, landscape 3:2, under ~250 KB, max 2000px wide
- Style rule: hubstudio-image-style-guide.md is binding. Authored editorial
              campaign photography, one light source, one shadow, prime-lens
              framing, f/2.8 to f/5.6, warm-shadow film grade, lifted black
              point, subtle grain, rule-of-thirds with negative space for
              typography. No named person in the prompt.

CONCEPT CHOSEN (one of five, iteration 13): the short row of masters. A launch's
real variety starts as a handful of distinct masters on a bench, and everything
downstream is the platform multiplying them. Concepts not taken: a tabletop
product set mid-shoot; a production wall of taped work-in-progress prints (too
close to a diagram); two hands sorting proofs into keep and cut piles (strong but
already close to the agency white-label hero); an empty fourth slot at the end of
a row of three finished frames (too conceptual to read at thumbnail size).

IMAGE PROMPT (use verbatim):

A tightly cropped editorial reportage photograph of a Chinese production lead in
her early thirties standing at a long plywood work bench in a lived-in creative
production office in Changsha on a mid afternoon, framed waist up and cut off at
the elbow on the right edge so the moment feels caught rather than posed; she
holds one printed frame up at chest height, turned slightly toward the window so
the paper catches the light, her head lowered and three quarters away from
camera, dark hair tied back with several loose strands fallen across her cheek, a
washed grey knit pushed up at the sleeves, a pencil held in the same hand as the
print; laid out along the bench in front of her is a short uneven row of five more
printed frames from the same product shoot, overlapping at the corners, one
turned face down, each print carrying only soft abstract product shapes and warm
color fields with nothing legible on it; around the row sits the ordinary debris
of a working room, a chipped enamel mug with a cold tea line inside it, a roll of
paper tape, a scalpel on a cutting mat covered in old score marks, a low stack of
proof paper with dog-eared corners, a cardboard box of packaging samples pushed
to the far end, cables taped down along the bench edge; a single tall window out
of frame to the left throws one clean directional shaft of afternoon light across
the bench and the prints, leaving one soft shadow behind her shoulder and letting
the right side of the room fall away into warm gloom; shot on a full frame camera
with a 35mm prime at f/4, focus held on the lifted print and her hands while the
far end of the bench and the back wall fall gently soft, composed on the thirds
with the right third left as empty wall and bench for typography; warm shadows,
desaturated midtones, a lifted black point so nothing reads as pure black, fine
natural film grain throughout, the palette of warm daylight negative film; her
skin keeps its visible texture, pores and small asymmetries, and her hands are
relaxed and anatomically ordinary; no text anywhere, no signage, no logos, no
watermark, no screens, no diagrams and no charts.
===================================================================== -->

<!-- SCHEMA
Type: BlogPosting
FAQPage: yes, 5 questions
Breadcrumb: Home > Insights > How many creative variants a China launch actually needs
Author: Cyril Drouin
datePublished: 2026-11-13
-->

<!-- ASSET BRIEF
TABLES:
  1. What each Chinese ad platform publishes. Five columns, with the refresh
     column kept even though every cell reads "not published", because the
     absence is the finding. Every Ocean Engine row carries its source count
     and its contested label.
  2. The four wear-out studies, with method, finding and limits per row. The
     limits column is load-bearing: none of the four is Chinese and none
     studies Douyin, WeChat or RedNote. This table is the citation apparatus for
     that section, so each row carries publisher, date, method and limits.
  3. The derived variant plan by phase, per ad unit. The caption must read
     derived, and the four assumptions stay printed under it.
CHARTS: none.
SCREENSHOTS: none captured. The research file's inventory lists six advertiser
  and creator backend captures that would move the Ocean Engine, Qianchuan and
  Juguang rows from contested to primary: the upgraded Ocean Engine Ads asset
  step with any per-ad counter, the cap error message, the Qianchuan creative
  step, the Tencent Ads dynamic creative panel, a Juguang unit filled until a
  limit appears, and any in-product creative decline label. All need an account.
DOWNLOADS: a one-page variant planning sheet by phase and ad unit, carrying the
  derived plan with every contested input marked for confirmation in the
  advertiser account, ungated.
INTERNAL LINKS:
  One Shoot, Six Platforms: China Matrix -> /resources/insights/one-shoot-six-platforms-china-variant-matrix
  Douyin platform page -> /solutions/platforms/douyin
  ad creative design service page -> /services/design/ad-creative
  who we are page -> /the-studio/who-we-are
IMAGE ALT (hand-written, use verbatim): A production lead in a Changsha studio
  holds a printed frame up to the window light, with five more prints from the
  same shoot laid in a short row along the work bench in front of her.
CLIENT SIGN-OFF NEEDED: none. The 20/80 split is already published on the who
  we are page and is quoted from it.
RESEARCH FILE: editorial/research/how-many-variants-a-china-launch-needs.md

SLOT REQUIREMENT NOT MET: slot D asks for one number from hubStudio's delivery
  record with its method stated. The 20/80 shoot-to-build split is published on
  the who we are page but carries no sample and no period, so it runs under the
  first-party exception as an attributed illustration and not as delivery data.
  No other hubStudio figure on this topic has a method in writing. Supplying a
  sample and a period for the 20/80 would upgrade it from published to measured
  and would meet the requirement on the next revision.

META CHANGED FROM THE BRIEF: the approved draft description promised what the
  platforms publish on creative "review". Creative review was not researched for
  this piece, so the description now names creatives per ad, the refresh absence
  and the wear-out research. 131 characters, counted.

DISCLAIMER: the SPEC.md block runs after the opening answer and before the
  first table, in the ad-platform form. The first paragraph names Ocean Engine
  and "advertiser backend", the closing paragraph says "advertiser account", and
  NN is 4 for the Ocean Engine rows. Because Tencent Ads and RedNote do serve
  readable documents, the "no open source reaches the official value" sentence is
  scoped to Douyin rather than to all three platforms, and the readable-document
  paragraph follows the block as SPEC.md requires.

WHAT THE PAGE NEVER DOES: print a refresh interval in days or weeks for any
  Chinese platform; call any Ocean Engine limit official, current or read from
  Ocean Engine; publish a Qianchuan creative count or cadence; publish a
  launch-level variant total; present the derived plan or any derived combination
  count as a platform rule; restate the matrix article's slot counts as a variant
  count; do arithmetic on the 20/80 split or set it beside any other hubStudio
  mix; repeat the fatigue window or batch figures carried on the ad creative
  design service page; name the agencies that supplied either field study's data;
  or publish a hubStudio rate.

SITE BACKLOG FOR THE OWNER: the ad creative design service page carries a
  creative fatigue window and several batch figures whose only stated source is a
  code comment pointing at a vendor blog, outside the ledger and with no method.
  The Douyin platform page carries per-launch cut and posting volumes on the same
  footing. This page prints neither, so a reader clicking through will see numbers
  this article declined to publish.

NO HAN CHARACTERS. Every Chinese platform and product is named in English.

DISTRIBUTION: category Data, with paid-media relevance. Candidate layers are the
  ad creative and short video design service pages and the Douyin platform page,
  none of which carries an insights layer today.
-->
