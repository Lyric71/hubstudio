---
title: Retouch at Volume: The QA Pipeline
slug: retouch-at-volume-qa-pipeline
description: The QA pipeline for retouching product images at catalog volume: the gates, sampling plans from the published standard, and rejection rules.
excerpt: Retouching thousands of product images needs gates with pass rules, a sample sized by the published standard, and a spec agreed before work starts.
template: insight
---

<!-- HERO SECTION -->

# Product photo retouching at volume: the quality control process, gate by gate

A product photo retouching quality control process is a chain of gates, not a
final look at the finished batch. Only the sampling and color gates have a
published standard behind them, and the sampling gate is where a published
table can replace a guess.

<!-- INTRODUCTION -->

## How does a product photo retouching quality control process work?

Run retouching at volume as a chain of gates, each with a check, a pass rule
and an owner: ingest, spec lock, color-managed retouch, a second check,
sampling inspection, marketplace compliance and final approval. Size the
sample from ISO 2859-1, the published standard, not a gut percentage.
hubStudio's gate design is production practice; only sampling and color rest
on standards.

<!-- SECTION: How to read these numbers -->

## How to read these numbers

These specs are not read from a seller backend. Both platform rule centers
gate their rule text behind a seller login, so no open source reaches the
official value.

What follows is the most commonly published figure for each spec, collected
across 15 independent sources in Chinese and English on 10 September 2026, with
the number of sources that agreed shown per row. Rows marked consensus had broad
agreement. Rows marked contested did not, and those carry the full spread
rather than a single number.

Treat this as the best available public reading, not as the rule. Platform
specs change without announcement and often without an English notice at all.
Before you build a batch to any number on this page, open your own seller
backend and confirm it there. Reviewed 10 September 2026.

That disclaimer covers the marketplace values only. The sampling plans and the
color standards on this page are read from the standards' own text, by
designation and date, and carry no modal count.

<!-- SECTION: the gates -->

## What are the gates in a retouch QA pipeline?

Seven gates, from arrival to sign-off. The standards named in the table cover
sampling, color encoding, color profiles and viewing conditions. Every other
pass rule, and every owner, is production practice, not an industry standard:
a starting point to adapt.

| Gate | Check | Standard or tool | Pass rule | Owner |
|---|---|---|---|---|
| Ingest | Files open; format, size and bit depth match the spec; profile embedded | ICC.1:2022 profiles; photography trade coalition guidelines, 2008 | Every file passes before retouch starts | Production operations |
| Spec lock | Retouch spec agreed per channel and slot | Production practice, no published standard | No batch starts on an unsigned spec | Producer and client |
| Color-managed retouch | Instrument-calibrated, profiled monitor; profile kept; sRGB for screen delivery | IEC 61966-2-1; ICC.1:2022; ISO 3664:2009 for comparison with a physical sample | Calibration logged each session | Retoucher |
| Self-check and second check | Retoucher checks every image; a second person checks the batch | US federal digitization guideline, 2023; industrial inspection research | The second person signs off | Retoucher, then QC lead |
| Sampling inspection | Random sample; nonconforming images counted by defect class | ISO 2859-1:1999, Tables 1 and 2-A, level II | Accept or reject on the plan's numbers; a rejected batch is re-examined in full before it returns | QC lead; the AQL is set by the responsible authority, in practice the client |
| Marketplace compliance | Slot prohibitions, white value, the Taobao rule's four failures | Published modal values, 15 sources, September 2026; Taobao rule, March 2025 | Zero prohibited elements in the slot | Marketplace operator |
| Final approval | Delivered batch checked against the spec | Production practice | Signed against the spec | Client |

The order matters more than the tools. A spec locked before retouch starts
gives every later gate something to check against. A sample drawn at the end
gives the batch a pass rule instead of an opinion.

<!-- SECTION: sampling -->

## How many images should you check in a batch?

A fixed share of the batch feels fair. The published standard for sampling
inspection works the other way.

> The published standard for sampling inspection by attributes, ISO 2859-1:1999
> as amended in 2011, sets how many items to check from the size of the batch,
> through a table of code letters, and uses general inspection level II unless
> something else is specified. Its reasoning: what a sample tells you depends on
> how many items you check, not on what share of the batch they are.
> Source: ISO 2859-1:1999 with Amendment 1:2011, September 2026, clause 10.1
> and Table 1 read in the Bureau of Indian Standards' identical adoption IS 2500
> (Part 1):2000, with the same code letters printed in China's identical
> adoption GB/T 2828.1-2012.

Resolved into plans for the batch sizes a catalog runs at, its tables give the
figures below. This is the standard's table, not a house rule: ISO 2859-1:1999
single sampling plans, normal inspection, general inspection level II. Each
cell reads sample size, then accept on or fewer, reject on or more.

| Images in the batch | Code letter | AQL 1.0 | AQL 2.5 | AQL 4.0 |
|---|---|---|---|---|
| 26 to 50 | D | 13 checked, accept 0, reject 1 | 5 checked, accept 0, reject 1 | 13 checked, accept 1, reject 2 |
| 51 to 90 | E | 13 checked, accept 0, reject 1 | 20 checked, accept 1, reject 2 | 13 checked, accept 1, reject 2 |
| 91 to 150 | F | 13 checked, accept 0, reject 1 | 20 checked, accept 1, reject 2 | 20 checked, accept 2, reject 3 |
| 151 to 280 | G | 50 checked, accept 1, reject 2 | 32 checked, accept 2, reject 3 | 32 checked, accept 3, reject 4 |
| 281 to 500 | H | 50 checked, accept 1, reject 2 | 50 checked, accept 3, reject 4 | 50 checked, accept 5, reject 6 |
| 501 to 1,200 | J | 80 checked, accept 2, reject 3 | 80 checked, accept 5, reject 6 | 80 checked, accept 7, reject 8 |
| 1,201 to 3,200 | K | 125 checked, accept 3, reject 4 | 125 checked, accept 7, reject 8 | 125 checked, accept 10, reject 11 |
| 3,201 to 10,000 | L | 200 checked, accept 5, reject 6 | 200 checked, accept 10, reject 11 | 200 checked, accept 14, reject 15 |
| 10,001 to 35,000 | M | 315 checked, accept 7, reject 8 | 315 checked, accept 14, reject 15 | 315 checked, accept 21, reject 22 |

The three AQL columns are illustrative choices for this page. The standard
recommends no limit for images. The buyer sets it.

Some cells look wrong and are not. At 26 to 50 images and an AQL of 2.5, the
plan checks 5 images, fewer than at 1.0. Where a code letter has no plan at a
given limit, the standard's arrows send it to the nearest plan above or below,
with that plan's sample size. The table follows the arrows as printed.

Choosing the limit comes with a caution attached.

> The standard is blunt about the acceptance quality limit: "The designation of
> an AQL shall not imply that the supplier has the right knowingly to supply any
> nonconforming item."
> Source: ISO 2859-1:1999, clause 5.1, September 2026, quoted verbatim from the
> identical national adoption IS 2500 (Part 1):2000.

Two more rules keep the sample honest.

> The sample is drawn "by simple random sampling", in proportion to size where a
> batch is made of distinct sub-batches. Defects are graded: the most serious
> class gets a very small acceptance quality limit, less serious classes larger
> ones.
> Source: ISO 2859-1:1999, clauses 8.1 and 3.1.6, September 2026, standard text
> read in the identical national adoption IS 2500 (Part 1):2000.

On a retouch job, that grading translates cleanly. One class covers defects
that misrepresent the product or break a marketplace rule, held to a very small
limit. Another covers cosmetic defects, held to a larger one. The split is
production practice. The principle is the standard's.

<!-- SECTION: failed batch -->

## What happens when a batch fails inspection?

The standard leaves that decision with the buyer, and sets one hard condition.

> ISO 2859-1 does not choose the quality limit for you. The inspection level and
> the acceptance quality limit are set by the responsible authority, and so is
> what happens to a rejected batch: scrapped, sorted, reworked, re-evaluated or
> held. A rejected batch comes back for inspection only after every item has
> been re-examined and the nonconforming ones removed, replaced or corrected.
> Source: ISO 2859-1:1999, clauses 7.2, 7.4 and 10.1, September 2026, standard
> text read in the identical national adoption IS 2500 (Part 1):2000.

Write the disposition into the spec before the first batch ships. A failure
then triggers a known action, not a negotiation.

The standard also watches the trend, not only the batch.

> Normal inspection switches to tightened inspection as soon as two of five or
> fewer consecutive batches are rejected on first inspection. After five
> rejected batches under tightened inspection, acceptance sampling stops until
> the supplier has acted to improve quality and the responsible authority agrees
> the action is likely to work.
> Source: ISO 2859-1:1999, clauses 9.3.1 and 9.4, September 2026, standard text
> read in the identical national adoption IS 2500 (Part 1):2000.

Tightened inspection is the warning light. Two rejections in a short run mean
the process needs fixing, not the sample.

<!-- SECTION: ten percent -->

## Is checking 10 percent of a batch enough?

It is a published rule. It was not written for catalogs.

> A US federal imaging guideline recommends inspecting at least 10 images or 10
> percent of each batch, whichever is larger, at 100 percent magnification on a
> profiled workstation, with a second person checking after the technician. If
> more than 1 percent of the batch is found defective in that random sample, the
> whole batch is re-inspected.
> Source: Federal Agencies Digital Guidelines Initiative, Technical Guidelines
> for Digitizing Cultural Heritage Materials, third edition, May 2023, chapter
> 10, an interagency guideline for cultural heritage digitization that describes
> itself as informative, not prescriptive.

Set the two side by side and the gap opens with volume.

> The two published approaches agree on small batches and split on large ones.
> For 500 images, the federal guideline's 10 percent and ISO 2859-1's level II
> both mean checking 50. For 10,000 images, the guideline calls for at least
> 1,000 and the standard for 200.
> Source: arithmetic on the federal digitization guideline's 10 percent rule,
> May 2023, and ISO 2859-1:1999 Table 1 at general inspection level II,
> September 2026, each step shown in the research file.

Neither is the industry standard for ecommerce retouching. The guideline
serves one-off heritage digitization. ISO 2859-1 is built for a continuing
series of batches, with switching rules that react to a supplier's record. A
catalog shipping weekly batches looks like the second case.

<!-- SECTION: human inspection -->

## Why add a second checker, and why not a tired one?

Sampling catches a bad batch. It cannot fix a tired inspector. The evidence on
human checkers below comes from industrial inspection research, in factories,
aviation and security, not from image retouching. Read it as a pattern, not as
a retouch figure.

> Field studies outside aviation found hit rates falling 13 to 45 percent with
> time on task. In one study, ten experienced inspectors lost 27 percent of
> their hits between the first and second 15 minutes of a 30-minute session.
> Source: a US national laboratory review of 212 published visual inspection
> studies, October 2012, reporting field studies summarized in 2002 and a 1977
> study of industrial inspection, not image retouching.

A second person helps. The same industrial review spells out the limit.

> Two inspectors beat one in every arrangement tested except splitting the
> batch between them, and detection was best when both inspected every item and
> both had to reject it. The same review warns that re-inspection only gives a
> lower bound on performance, because both inspectors can miss whole classes of
> defects.
> Source: a US national laboratory review of 212 published visual inspection
> studies, October 2012, reporting a 1986 study of industrial inspection plus
> the review's own assessment, not image retouching.

A second checker is supported. A second checker as a guarantee is not. On a
retouch desk, that means short review sessions, the signed spec open beside the
checker, and a sample drawn after the second check, not instead of it. That is
production practice built on industrial evidence.

<!-- SECTION: retouch spec -->

## What goes in a retouch spec?

No trade or professional body publishes an ecommerce retouch specification.
The template below is production practice. Its cleanup and file fields lean on
two published guidelines, and its marketplace fields on the counted collections
covered further down. Fill it in per channel and per slot, and get it signed
before the batch starts.

| Field | What to specify | Where the rule comes from |
|---|---|---|
| Asset and slot | SKU, channel, slot: main, white-background, detail or campaign | Production practice |
| Output | Pixel size, format, file weight cap, bit depth, color space with embedded profile | Platform values with their counts; IEC 61966-2-1; ICC.1:2022 |
| Background | RGB 255 255 255 in the white-background slot, the one value no published reading rejects; no shadow in that slot, the modal reading | Published modal values, 15 sources, September 2026, the white value derived |
| Cutout | Clean edges, no white fringe, no pasted-on look | Published modal values; Taobao rule |
| Color | The approved reference (physical sample or master), how it is compared, under which viewing condition, and the tolerance | ISO 3664:2009 for viewing; production practice for the tolerance |
| Cleanup | Dust, scratches, lint, seams, sensor spots, banding, moire, noise | Photography trade coalition guidelines, 2008; US federal digitization guideline, 2023 |
| Product truth | No change to shape, material, texture, color, markings or on-pack text | Taobao rule; production practice |
| Retouch limits | Moderate beautification; no excessive skin smoothing on models | Taobao rule |
| Prohibited elements | Text, watermark, logo, overlay, model, splice, border, hanger, per slot | Published modal values |
| Defect classes and AQL | A serious class (product truth, prohibited element) and a cosmetic class, with an AQL for each | ISO 2859-1 clause 3.1.6 for the classes; the AQL is the client's choice |
| Metadata and naming | File name pattern, embedded rights metadata, an AI label where an image is generated | Photography trade coalition guidelines, 2008; production practice |
| Sign-off | Who approves at which gate | Production practice |

The ecommerce design service page takes the same line on catalog work: specs
are built into the brief from day one.

<!-- SECTION: color -->

## How do you keep color consistent across thousands of images?

Keep the profile with the file, calibrate screens with an instrument, and know
which standard governs which comparison.

> Photography's trade coalition guidelines say monitors used for image editing
> should be "calibrated and profiled with a hardware device", because "visual
> calibration is not adequate for professional image editing", and that color
> profiles "should always be attached to the image when saving, and preserved
> when opening."
> Source: Universal Photographic Digital Imaging Guidelines, version 4.0,
> September 2008, the consensus of a coalition of 21 photography and
> picture-industry trade groups, read September 2026.

Those guidelines date from 2008: read them for the principle. Screen delivery
has its own standard, sRGB, published as IEC 61966-2-1. Judging against a
physical sample needs another.

> ISO 3664:2009, now in its third edition, sets viewing conditions for judging
> prints, transparencies and images on monitors. It uses CIE illuminant D50 as
> its reference and specifies two light levels, a higher one for critical
> comparison and a lower one for practical appraisal, including routine
> inspection. It also warns that meeting its monitor conditions does not make a
> screen match a print without proper color management.
> Source: ISO 3664:2009, Graphic technology and photography, Viewing conditions,
> April 2009, foreword, introduction and scope read in ISO's own preview text in
> September 2026.

So the two standards split the work. Screen delivery follows the sRGB encoding,
with the profile embedded. Judging against a physical sample follows ISO 3664
viewing. Neither sets a color tolerance for retouched product images. That
number goes in the spec, and the client owns it.

<!-- SECTION: marketplace rejections -->

## Why do marketplaces reject retouched product images?

Two published sets of reasons apply: what the frame contains, and whether the
retouching tells the truth. The first comes from counted sources on Tmall's
white-background image, under the method set out at the top of this page.

> The prohibitions are the most consistent part of the published record. Nine
> of fifteen sources rule out text, watermarks, logos and promotional overlay.
> Seven rule out a model, six rule out shadows, six rule out spliced composites,
> and five rule out hangers, mannequins and tags. One extends the model ban to
> any body part at all, hands, feet, legs or a head.
> Source: fifteen independent published sources, Chinese-language first,
> collected 10 September 2026, counted by domain for each prohibited element.
> Modal positions with their agreement counts, not a reading from the platform.

None of the fifteen says how often each failure happens.

> No published source ranks why white-background images fail. Three of fifteen
> describe causes, as an unranked list: a background that is not pure white, a
> shadow, a model, text or a logo, a product too small in the frame, a
> duplicated product, and rough cutout edges. None says how often any of them
> occurs.
> Source: fifteen independent published sources, Chinese-language, collected 10
> September 2026. Stated as an unranked list with its count, not as a platform
> rejection taxonomy.

One conclusion survives the disagreement over the white value, and it belongs
in the spec.

> RGB 255 255 255 is the only background value that no published reading
> rejects. A background at 252 passes the one published tolerance and fails the
> one published zero-tolerance reading. Clipping the background to pure 255 is
> therefore the one choice the published record does not contradict. That is a
> conclusion drawn from the spread, not a platform rule.
> Source: derived from the published tolerance positions, fifteen independent
> sources collected 10 September 2026, reasoning stated openly and resting on
> modal values rather than primary readings.

The Tmall white-background image rules article covers that slot in full, and
the Tmall platform page covers the wider channel.

The second set is newer. It is the one platform rule located that names
retouching directly.

> Taobao's rule against AI fake product images, announced in March 2025, says
> product images should rest on real photographs of the product and that
> retouching should be moderate and avoid distortion. It names four failures:
> material or style that does not match the product, over-beautified effects
> such as excessive skin smoothing, distorted or impossible scenes, and poor
> image quality such as white edges left by a cutout or an obvious pasted-on
> look.
> Source: Economic Information Daily, 27 March 2025, business press reporting
> the platform's own announcement on its official account, re-read in Chinese
> in September 2026.

Each failure maps to a line in the spec. Material and style go to product
truth. Over-beautified effects go to retouch limits. Impossible scenes need a
physics check. Cutout edges go to the cutout field.

For generated images, the product-truth line carries the most weight. The AI
image production page describes review before delivery, and the article on
training a brand model that stays on brand covers keeping generated output
consistent from the start.

<!-- SECTION: cost -->

## What does product photo retouching cost at volume?

Published rate cards give a category band, not a quote.

> Published ecommerce retouch cards put the floor between roughly $0.25 and
> $1.20 an image by operation, with one card adding a fixed platform fee of
> about $95 a month on top.
> Source: published pricing pages in this category, September 2026, two
> independent cards read directly and compared, no vendor named.

The band prices the operation, not the gates around it, so ask which gates a
quote covers before comparing two. The product photography cost per SKU article
covers the capture side of the same budget.

<!-- SECTION: FAQ -->

## Questions about retouching QA

**How do you quality check thousands of retouched images?**

Not one by one at the end. Build gates into the pipeline: a file check at
ingest, a signed spec, a color-managed retouch, a second person behind the
retoucher, then a random sample sized by ISO 2859-1. At general inspection
level II the standard checks 80 images from a batch of 501 to 1,200, and the
batch fails on the rejection number, not on a feeling.

**What sample size should image QA use?**

It depends on batch size, not on a percentage. ISO 2859-1 sets the sample from
the size of the batch through code letters, at general inspection level II
unless something else is specified. A batch of 3,201 to 10,000 images takes a
sample of 200. A flat 10 percent rule would call for at least 1,000 at 10,000
images. You choose the acceptance quality limit.

**What goes in a retouching spec?**

The asset and slot, output size and format, color space with an embedded
profile, background value, cutout standard, color reference and viewing
condition, cleanup list, what must never change about the product, retouch
limits, prohibited elements, defect classes with an AQL for each, naming and
metadata, and who signs at each gate. No published body issues a template, so
treat this one as production practice.

**How much does product photo retouching cost?**

Published ecommerce retouch cards put the floor between roughly $0.25 and $1.20
an image by operation, and one card adds a fixed platform fee of about $95 a
month, as read in September 2026. That is a category figure, not a quote. It
prices the operation, not the checks around it, so ask which gates a quote
covers before comparing two.

**Why do marketplaces reject retouched product images?**

For something the slot forbids, or for retouching that misrepresents the
product. On Tmall's white-background image, nine of fifteen published sources
rule out text, watermarks, logos and overlay, seven a model and six shadows, and
none ranks the causes. Taobao's March 2025 rule adds four failures: mismatched
material or style, over-beautified effects, distorted scenes and poor quality
such as cutout white edges.

<!-- CTA -->

CTA: Run a retouch pilot

<!-- =====================================================================
FEATURE IMAGE: INSTRUCTION FOR CLAUDE CODE

Generate the feature (hero) image from the prompt below with the
generate-image-openai skill, convert to webp, then wire it in as the
article's featured image and OG image.

- Save to:    public/Images/insight-retouch-at-volume-qa-pipeline.webp
- Reference:  /Images/insight-retouch-at-volume-qa-pipeline.webp
- Format:     .webp, landscape 3:2, under ~250 KB, max 2000px wide
- Style rule: hubstudio-image-style-guide.md is binding. Authored editorial
              campaign photography, one light source, one shadow, prime-lens
              framing, f/2.8 to f/5.6, warm-shadow film grade, lifted black
              point, subtle grain, rule-of-thirds with negative space for
              typography. No named person in the prompt.

CREATIVE ANGLE (one sentence, for the record): the page argues that the sample
is drawn at random from the batch, not picked by eye, so the image makes the
draw physical: a QC lead's hand pulling one blank folded slip from a bowl of
identical slips in front of tall stacks of proof prints, the moment before
anyone knows which image gets checked.

IMAGE PROMPT (use verbatim):

An editorial photograph in a lived-in Changsha production studio in late
afternoon, seen from a low three-quarter angle across a scarred wooden
worktable; the hand and forearm of a Chinese woman in a rolled-sleeve indigo
cotton work shirt reach into a wide handmade celadon ceramic bowl filled with
dozens of identical folded blank paper slips, her fingers lifting a single slip
clear of the others; behind the bowl, softly out of focus, stand three tall and
uneven stacks of matte photographic proof prints in worn wire trays, the top
print on the nearest stack showing an unbranded tan leather handbag on a white
background; one print already set apart lies face up near her other hand with a
small brass loupe resting on its corner; a roll of masking tape, a pencil worn
short and a chipped enamel mug of tea sit at the table edge; a single large
window off frame to the left throws low warm directional daylight across the
table, and the bowl casts one soft long shadow to the right; her face is out of
frame above, the crop cutting at her shoulder, with a loose thread at the cuff
and a faint pencil smudge on one fingertip; shot on a full frame camera with a
50mm prime at f/4, focus on her fingers and the lifted slip, the stacks falling
gently soft, rule-of-thirds framing with the bowl on the left third and the
upper right third left as plain, softly lit plaster wall for typography; warm
shadows, slightly desaturated midtones, lifted black point, fine natural film
grain, daylight negative film palette; no text legible anywhere, no numbers, no
logos, no screens showing content, no watermark.
===================================================================== -->

<!-- SCHEMA
Type: BlogPosting
FAQPage: yes, 5 questions
Breadcrumb: Home > Insights > Product photo retouching at volume: the quality control process, gate by gate
Author: Cyril Drouin
datePublished: 2026-09-27
-->

<!-- ASSET BRIEF
TABLES:
  1. Gate table: gate, check, standard or tool, pass rule, owner. Seven rows.
     INTRODUCED IN BODY COPY AS PRODUCTION PRACTICE except the standards named
     in it; the sampling row's accept and reject rule is the standard's.
  2. Sampling plan table: images in the batch, code letter, AQL 1.0, 2.5 and
     4.0. LABELED AS THE STANDARD'S: "ISO 2859-1:1999 single sampling plans,
     normal inspection, general inspection level II". Values exactly as read
     from Tables 1 and 2-A in the research file, arrows resolved. The three AQL
     columns are described on the page as illustrative, not a recommendation.
  3. Retouch spec template: field, what to specify, where the rule comes from.
     Twelve rows. LABELED AS PRODUCTION PRACTICE.
TEMPLATE: the retouch spec template above is the slot requirement's "document
  structure the reader can use tomorrow"; the gate table doubles as a checklist.
CHARTS: none. The federal 10 percent rule against the ISO level II sample could
  be charted from the research file's R6 arithmetic, but only the 500 and
  10,000 points are cleared for the page, so no chart is briefed.
SCREENSHOTS: none. No rejection notice was obtained and none is reconstructed.
DOWNLOADS: the retouch spec template as a fillable one-page sheet, and the gate
  table as a one-page checklist, both ungated, both labeled production practice
  with the sampling table labeled as the standard's.
INTERNAL LINKS:
  ecommerce design service page -> /services/design/ecommerce
  AI image production page -> /solutions/ai-production/image
  Tmall white-background image rules article -> /resources/insights/tmall-white-background-image-rules
  article on training a brand model that stays on brand -> /resources/insights/training-a-brand-model-that-stays-on-brand
  Tmall platform page -> /solutions/platforms/tmall
  product photography cost per SKU article -> /resources/insights/product-photography-cost-per-sku
  cluster hub (no Operations hub exists; insights index) -> /resources/insights
  All seven verified to exist in src/pages on 2026-09-27.
CLIENT SIGN-OFF NEEDED: none. No client figure is used.
RESEARCH FILE: editorial/research/retouch-at-volume-qa-pipeline.md

CHANGES FROM THE BRIEF, WITH REASONS:
  H1: the working H1 "Retouch at volume: the QA pipeline, gate by gate" did not
    carry the primary query; it now reads "Product photo retouching at volume:
    the quality control process, gate by gate", keeping the brief's "gate by
    gate" and "at volume". Title and meta kept as approved. Excerpt generated
    (24 words).
  Disclaimer: the SPEC.md marketplace block runs after the opening answer with
    NN = 15 and DATE = 10 September 2026, because the marketplace section
    prints modal Tmall counts. One added paragraph says it covers the
    marketplace values only, since the sampling and color values are read from
    the standards' own text.
  Links: added the Tmall platform page (SPEC platform link), the product
    photography cost per SKU article and the insights index as the cluster hub,
    since no Operations hub page exists.
  Revision policy: not stated. Two first-party pages publish different policies.

WHAT THE PAGE NEVER DOES: print the 22 or 78 percent approval figures, the 7x
  figure, any approval figure or any stat from the ecommerce design page; print
  any hubStudio rate, monthly, hourly or per-image figure; present the gate
  design, the owners or the practice pass rules as an industry standard;
  present an AQL as the standard's recommendation for images; say ISO 2859-1
  requires 100 percent rework; print the Codex simplified table; print an
  edition number or "current" status for ISO 2859-1 or ISO 3664; print ISO
  3664 illuminance values or any Delta E tolerance; present the sRGB reference
  conditions as a required review setup; present the inspection research as
  image-retouching figures; rank marketplace rejection causes or count color
  inaccuracy as one; say the Taobao rule was the first or mentions a detection
  model; present a contact shadow or a tolerance below 255 as allowed; use the
  search-results audit quote; name, describe or allude to any studio,
  retouching service, clipping-path vendor, tool vendor or platform
  competitor.

NO HAN CHARACTERS.

DISTRIBUTION: category eCommerce, claimed by the AI image production page layer
  (/solutions/ai-production/image), which this article links to. The ecommerce
  design service page layer claims Platform specs and Cost, not eCommerce.
-->
