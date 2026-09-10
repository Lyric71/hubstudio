---
title: Where C2PA Survives in a Real Pipeline
slug: content-credentials-c2pa-in-production
description: Content Credentials tested stage by stage: capture, retouch, export, DAM, platform upload. Where they survive, where they strip, and whether to adopt.
excerpt: The survival tables circulating for Content Credentials come from announcements, not tests. Here is what has been measured, and the bench test to run.
template: insight
---

<!-- HERO SECTION -->

# Content Credentials in a real pipeline: where C2PA survives and where it breaks

This page was meant to publish a platform-by-platform survival table. It does
not, because the research would not support one, and the reason is the most
useful thing here: nobody has published a dated test of the thing every buyer
wants to know.

<!-- INTRODUCTION -->

## Do Content Credentials survive social media upload?

Nobody has published a dated, method-stated answer. That is not a hedge, it is
the finding.

> No dated, method-stated public test of whether a signed manifest survives into
> the file a viewer downloads was found on any platform. The standards body's
> own deployment guidance does not publish one. The photo industry's standing
> metadata test has not been run against Content Credentials and last published
> results in 2015. The academic paper that runs the nearest experiment states it
> did not test platform pipelines. Every page in the search results that prints
> a survival table sources it to announcements and community reports, and the
> one page that states its method says it ran no per-image upload tests.
> Source: searches run 9 September 2026 across four query phrasings plus a
> Chinese-language pass, forty ranked results reviewed, primary standards and
> academic sources read directly.

If you have seen a tidy grid of platforms with green ticks and red crosses, it
was built from press releases. Check its method statement. Most do not have one,
and the one that does says it ran no upload tests.

<!-- SECTION: the confusion -->

## The distinction the survival tables collapse

Two completely different things get reported as the same result, and telling
them apart is most of the work.

**Did the platform read the provenance and apply its own label?** This has been
measured, with dates and samples.

**Did the signed manifest survive into the file a viewer downloads?** This has
not been measured publicly, on any platform.

A platform can do the first perfectly while stripping the file bare. It can also
do neither. The published audits all measure the first, because it is visible
from outside, and the second requires downloading the file back and inspecting
it, which is exactly the procedure nobody currently runs.

| | Reading and labeling | Manifest survival |
|---|---|---|
| Publicly measured | Yes, with dated controlled audits | No, on any platform |
| How you check it | Look at the post | Download the file back and inspect it |
| What it tells a viewer | The platform's own label, if shown | Nothing unless a tool reads the file |
| What it tells your team | How the surface treats your disclosure | Whether your record traveled with the asset |

> The photo industry's standing social media metadata test, the one published
> procedure that uploads a file with known fields, saves it back through the
> platform's own download and inspects it, last published a results round in
> late 2015 and covers fourteen sites. It does not test Content Credentials at
> all.
> Source: Embedded Metadata Initiative test procedure and results grid,
> maintained by the photo metadata working group of the IPTC, results round late
> 2015, both pages read 9 September 2026.

The one procedure built to answer this question predates the standard by years
and has never been pointed at it.

<!-- SECTION: what has been measured -->

## What has actually been measured

Reading behavior has real, dated evidence behind it, and it is worth knowing
because it tells you what a viewer sees.

> An independent platform audit published 18 March 2026 generated more than 200
> AI images and videos with three different generative systems and posted them
> to five platforms, then checked whether each platform applied its own
> AI-generated label. Every platform but one had improved its labeling rate
> since the same publisher's previous round in October 2025.
> Source: an independent digital-deception publication's own controlled upload
> audit, March 2026, more than 200 assets, three generators, five platforms.

That audit found something a production team needs to plan around: there is
more than one place a signal can live, and platforms disagree about where to
look.

> That audit exposed a split in the plumbing. One generative system signals AI
> origin through the IPTC Digital Source Type property in the file's XMP header,
> while two others assert the same vocabulary inside a C2PA manifest, and
> platforms differ in which of the two they read. One platform read the XMP
> property and labeled that system's images while missing the manifest-based
> signal from another; two platforms labeled all of one system's images and
> videos correctly and missed the XMP property entirely.
> Source: IPTC's own write-up of the March 2026 audit, published 18 March 2026,
> read 9 September 2026.

Same vocabulary, two carriers, and a platform reads one or the other. So an
asset that discloses correctly in one place may be invisible in another, which
means writing the signal into both is not belt and braces, it is the minimum.

A separate test in a different market found the same unevenness.

> In a September 2025 test, AI videos from two Chinese generation tools were
> uploaded to six Chinese platforms, both with and without the tool's visible
> watermark and with no manual declaration. One platform flagged every clip, one
> flagged only the watermarked versions, and four flagged none.
> Source: a Beijing daily's own controlled upload test, September 2025, six
> platforms, two content categories, watermarked and stripped variants.

Four of six flagged nothing at all. Whatever your pipeline writes into the file,
the declaration you make yourself is doing more work than the metadata is.

<!-- SECTION: the stage table -->

## The pipeline, stage by stage, with the untested rows marked

Here is the honest version of the table this piece was supposed to publish.
Rows marked untested are untested publicly, by anyone, and no row states a
platform behavior that has not been measured.

| Stage | What is known | Evidence |
|---|---|---|
| Capture | Credential written at source where the device or system supports it | Specification defines the binding |
| Ingest and edit | Survives in tools that implement the standard, breaks in tools that rewrite metadata | The standards body's own guidance warns about this |
| Export and re-encode | At risk. The specification names separation from the manifest as a known failure | Specification text |
| Screenshot | Strips the embedded credential | The standards body's own guidance says so plainly |
| DAM and hand-off | Untested publicly | No dated test found |
| Platform upload, reading | Measured, and uneven across platforms and carriers | Two dated controlled audits |
| Platform download, survival | **Untested publicly, on every platform** | No dated test found, either way |
| Social re-encode | Untested publicly | No dated test found |

Three of eight rows say untested. That is the real state of the evidence in
September 2026, and any table without those three rows is filling them from
somewhere it is not telling you.

<!-- SECTION: the standard's own admissions -->

## What the standard says about its own weak points

The specification is unusually candid, and reading it is more informative than
reading the coverage.

> The specification concedes the failure mode in its own words: an asset can
> become separated from its C2PA Manifest due to removal or corruption of asset
> metadata, and a fingerprint of the digital content of the asset could be used
> to search a database to recover the asset with an intact C2PA Manifest.
> Source: C2PA technical specification, version 2.4, April 2026, specification
> text read 9 September 2026.

Note what the remedy implies. If recovery works by fingerprinting the pixels and
looking the manifest up elsewhere, then the manifest was not in the file.

> A Durable Content Credential, in the specification's own definition, is a
> Content Credential for which there exists one or more soft bindings that
> enable its discovery in a manifest repository. Durability is a lookup, not a
> property of the file.
> Source: C2PA technical specification, version 2.4, April 2026, specification
> text read 9 September 2026.

Durable does not mean the credential stays attached. It means it can be found
again after it does not. That is a reasonable engineering answer and a very
different promise from the one the word suggests.

The standards body's own adoption guidance is direct about the practical risks
and silent on the measurement.

> The standards body's own deployment guidance, version 1.0 of 8 July 2026,
> tells adopters to avoid screen-shotting or re-exporting a file through tools
> that remove metadata, because that can strip the embedded Content Credentials,
> and to require any vendor demonstration to reflect the actual workflow in use
> rather than an idealized or one-off scenario.
> Source: Content Credentials: Deployment Guidance, version 1.0, 8 July 2026,
> read in full 9 September 2026.

> The same deployment guidance, the standards body's own document for
> organizations adopting the standard, publishes no platform-by-platform
> survival data: no table, no test, no measurement of what reaches a viewer.
> Source: Content Credentials: Deployment Guidance, version 1.0, 8 July 2026,
> read in full on 9 September 2026 looking for a platform table or a survival
> measurement. None is present.

Take that vendor-demonstration line seriously. It is the standards body telling
you that idealized demos are common enough in its own ecosystem to warrant a
warning.

There is also a security question that adopters should read before making
promises to clients.

> An independent academic security analysis dated 23 April 2026, the first
> formal-methods analysis of the coalition's core protocols across specification
> versions 2.2 to 2.4, concluded that the current specifications fail to achieve
> their claimed security goals and that the standard should not yet be relied
> upon for high-stakes uses such as financial disclosures, journalism or legal
> evidence.
> Source: an independent university and government-laboratory security analysis,
> April 2026, formal-methods protocol analysis plus implementation review, no
> vendor funding disclosed.

<!-- SECTION: the bench test -->

## The bench test to run this week

Since nobody has published this, run it yourself. It takes an afternoon and it
answers the question for your pipeline, which is the only pipeline you control.

**Make one reference asset and write down what is in it.** Record the manifest
contents and the XMP source-type property separately, because platforms read
one or the other and you need to know which one you shipped.

**Walk it through your own stages one at a time.** Ingest, edit, export, DAM,
hand-off. Inspect after each step rather than at the end, because a single
report at the end tells you it broke without telling you where.

**Upload it, then download it back from the platform.** This is the step
everyone skips and the only one that answers the survival question. Inspect the
downloaded file, not the file you uploaded.

**Check both carriers on the way back.** A platform may preserve one and drop
the other, so a single check can produce a false pass.

**Record the date, the file type, the tool versions and the platform.** All four
change without notice, so an undated result is worth very little three months
later. This is also why the published tables are unreliable: they carry none of
these.

**Re-run it quarterly, and after any tool upgrade.** The result is a snapshot of
a moving system.

<!-- SECTION: verdict -->

## Is C2PA worth implementing in 2026?

Yes, with the reason stated accurately, which is not the reason usually given.

Implement it because it is the cleanest available vocabulary for recording what
you did to an asset, and because that record answers questions from clients,
platforms and rights holders regardless of whether any credential survives to a
viewer. The internal record is the payoff, and it is real today.

Do not implement it as a trust signal to the public yet. The survival question
is unmeasured, the security analysis above says the standard should not carry
high-stakes reliance, and a claim that a credential proves an image's origin to
an audience is a claim nobody can currently support end to end.

There is also a live regulatory reason to care about export behavior
specifically, separate from anything the standard promises.

> Article 4 of the Measures for Labeling of AI-Generated Synthetic Content says
> that when a service provider offers download, copy or export functions for
> generated synthetic content, it must ensure the file contains a conforming
> explicit label. Article 5 puts the implicit label in the file metadata,
> carrying content attribute information, the service provider name or code, and
> a content ID.
> Source: Cyberspace Administration of China, March 2025, instrument text.

And regulators have already found that step failing in practice.

> A November 2025 enforcement round found generation services adding no visible
> label, omitting the label when files were exported, and failing to embed
> metadata identifying the producer and the content, and found distribution
> services failing to verify implicit labels, failing to show a prominent
> notice, and failing to add distribution metadata.
> Source: Cyberspace Administration of China, 25 November 2025.

Omitting the label on export, found by a regulator rather than claimed by a
vendor, is the strongest sourced evidence on this page that the export step is
where things break. No instrument here requires Content Credentials, and nothing
about implementing them satisfies a legal duty. They are a way of holding the
record that the duties assume you can produce.

The glossary defines the provenance terms used above, the short video design
service covers the surfaces where re-encoding is heaviest, and the AI excellence
page sets out how the per-asset record sits in the pipeline.

Reviewed September 2026. This describes production practice, not legal advice,
and every platform behavior above is either dated and measured or marked
untested.

<!-- SECTION: FAQ -->

## Questions about Content Credentials in production

**Do Content Credentials survive social media upload?**

No dated, method-stated public test answers this, on any platform, either way.
The published audits measure whether a platform reads provenance and applies its
own label, which is a different question. The one standing procedure that
downloads files back and inspects them last published results in 2015 and has
never been run against Content Credentials.

**At what point does C2PA metadata get stripped?**

The best-sourced break point is export. A November 2025 enforcement round found
generation services omitting labels when files were exported and failing to
embed producer metadata. The standards body's own guidance also warns that
screenshots and re-exports through metadata-removing tools strip embedded
credentials.

**Which platforms preserve Content Credentials?**

Unknown, publicly. Any table naming platforms as preserving or stripping is
sourced to announcements rather than tests. What is measured is reading
behavior, and it is uneven: platforms differ in whether they look at the XMP
source-type property or the manifest, so an asset can disclose correctly in one
place and be missed in another.

**Is C2PA worth implementing in 2026?**

Yes as an internal record, which is useful today regardless of what survives.
Not yet as a public trust signal: the survival question is unmeasured, and an
April 2026 formal-methods security analysis concluded the specifications fail
their claimed security goals and should not carry high-stakes reliance.

**What do I do when credentials break mid-pipeline?**

Keep your own per-asset record, because it does not depend on the file. Write
the disclosure signal into both the manifest and the XMP source-type property,
declare AI content manually where a platform offers the control, and verify the
delivered file after export rather than trusting the tool that made it.

<!-- CTA -->

CTA: Talk about your pipeline

<!-- =====================================================================
FEATURE IMAGE: INSTRUCTION FOR CLAUDE CODE

Generate the feature (hero) image from the prompt below with the
generate-image-openai skill, convert to webp, then wire it in as the
article's featured image and OG image.

- Save to:    public/Images/insight-content-credentials-c2pa-in-production.webp
- Reference:  /Images/insight-content-credentials-c2pa-in-production.webp
- Format:     .webp, landscape 3:2, under ~250 KB, max 2000px wide
- Style rule: hubstudio-image-style-guide.md is binding. Authored editorial
              campaign photography, one light source, one shadow, prime-lens
              framing, f/2.8 to f/5.6, warm-shadow film grade, lifted black
              point, subtle grain, rule-of-thirds with negative space for
              typography. No named person in the prompt.

CREATIVE ANGLE (one sentence, for the record): the piece argues that the
credential is lost somewhere in the middle of the pipeline and nobody has
tested where, so the image is a physical chain of custody laid out along a
bench with the label still attached at one end, detached and lying loose in the
middle, and simply absent at the far end.

IMAGE PROMPT (use verbatim):

An overhead editorial photograph of a narrow workbench in a Shanghai studio,
shot straight down along its length so the bench runs left to right across the
frame, showing five identical small photographic prints of the same plain gray
stone laid out in a row at even intervals; the leftmost print has a small cream
paper tag neatly tied to its corner with waxed thread and lying flat against
it, the second print has its tag still attached but curling away, the middle
print has a tag lying loose beside it with the thread visibly broken and frayed,
the fourth print has only a short cut length of thread next to it and no tag at
all, and the rightmost print is completely bare; the tags carry dense small
handwriting that reads as writing but is not legible as any language; a pair of
tweezers and a scalpel rest along the lower edge of the bench and a magnifying
loupe sits beside the middle print; a single hard daylight source enters from
the upper left just outside the frame, throwing one clean directional shadow
from each raised tag across the prints and leaving the right end of the bench in
warm falloff; the bench is genuinely used, scratched wood with ink stains, tape
residue and dust; one hand enters from the bottom edge near the middle print,
short unpainted nails, fingertips lifting the loose broken tag; shot on a full
frame camera with a 50mm prime at f/4, focus on the middle and left prints with
the far right end falling gently soft, framing very slightly rotated off square
as if handheld, the upper right quadrant left almost empty as clean bench
surface for typography; warm shadows, desaturated midtones, lifted black point,
fine natural film grain, daylight negative film palette; no legible text
anywhere, no numbers, no logos, no watermark, no screens in frame.
===================================================================== -->

<!-- SCHEMA
Type: BlogPosting
FAQPage: yes, 5 questions
Breadcrumb: Home > Insights > Content Credentials in a real pipeline
Author: Cyril Drouin
datePublished: 2026-08-14
-->

<!-- ASSET BRIEF
TABLES:
  1. The stage-by-stage table. THREE ROWS SAY UNTESTED AND MUST STAY THAT WAY.
     The brief asked for a survival table with a test date per row; no such
     public test exists, so the table publishes what is known, cites the
     evidence type per row, and marks the rest untested. Filling those rows from
     announcements would reproduce exactly the failure the article documents.
CHARTS: none. Most of the subject is unmeasured.
SCREENSHOTS: the research file's inventory lists the specification pages, the
  deployment guidance PDF, the 2015 metadata test grid and both upload audits.
  The audit percentages are conditionally cleared only: check 2 must re-read the
  audit page, and if it is gated, the numbers come out and the qualitative
  finding stays.
DOWNLOADS: the bench test as a one-page protocol with fields for date, file
  type, tool versions and platform, plus a row per stage. Ungated. This is the
  page's real deliverable, since it hands the reader the test nobody has run.
INTERNAL LINKS:
  glossary -> /resources/glossary
  short video design service -> /services/design/short-video
  AI excellence page -> /the-studio/ai-excellence
CLIENT SIGN-OFF NEEDED: none.
RESEARCH FILE: editorial/research/content-credentials-c2pa-in-production.md

THE CENTRAL RULE OF THIS PIECE: never assert that a manifest survives or is
  stripped on any named platform. No dated test supports either claim for any
  platform. And never collapse "the platform read it and applied its own label"
  into "the credential survived": they are different measurements and the
  article's whole argument is that the category conflates them.

NO PLATFORM IS NAMED. The cleared attributions are written as "one video
  platform", "five platforms", "six Chinese platforms", and the draft keeps that
  wording. The one platform announcement about download behavior is a statement
  of intent from 2024 with no independent test behind it, and it is not used.

NO CLAIM THAT C2PA SATISFIES A LEGAL REQUIREMENT. Carried unchanged from brief
  24. The page says explicitly that no instrument requires Content Credentials
  and that implementing them discharges no duty.

THE TRUST FRAMING IS NOT REPEATED after the survival gap is published. The
  6,114-participant trust experiment is deliberately absent from the draft:
  publishing "provenance labels increase trust" next to "nobody knows whether
  the label arrives" would be the exact move this page criticizes. It stays in
  the research file for a future piece.

FIGURE DELIBERATELY ABSENT, AND WORTH KNOWING ABOUT: a search summary offered a
  "95 percent manifest survival after social media transcoding" figure
  attributed to a March 2026 paper. Reading the paper directly, that metric and
  number do not exist and the paper says the opposite. It is logged in the
  ledger's do-not-publish so it cannot come back. Also absent: the coalition's
  labeling volume claims, conformance product counts, the "platforms strip all
  metadata as standard" line repeated across five sourceless pages, and every
  metadata-removal vendor blog.

NO DOLLAR FIGURE APPEARS. None is cleared in the research file.
-->
