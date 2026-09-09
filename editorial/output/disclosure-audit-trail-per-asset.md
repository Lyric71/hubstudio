---
title: The AI Disclosure Audit Trail per Asset
slug: disclosure-audit-trail-per-asset
description: What a production pipeline records per asset to survive a disclosure audit: the record schema, retention, and the three regimes it has to satisfy.
excerpt: Three regimes now ask different questions about the same generated asset. Here is the per-asset record that answers all of them from a single row.
template: insight
---

<!-- HERO SECTION -->

# The disclosure audit trail: what a pipeline records per asset

Law firm briefings tell you what the rules say. They stop before the part that
decides whether you comply: which fields your production workflow writes down,
for every asset, on the day it is made. This page is that layer.

A note before anything else. What follows describes production practice, drawn
from the published text of the instruments named in it. It is not legal advice,
and it does not interpret any regime beyond what the instrument itself says.

<!-- INTRODUCTION -->

## What should be logged for every AI-generated asset?

Eleven fields carry the weight, and each one exists because a published
instrument or specification names it: asset ID, producer, model name and
version, creation timestamp, content attribute, label flag, action history,
inputs and their rights status, the prompt, and the distributor identifiers a
platform adds later.

Four more fields have no standard behind them at all. They belong in the record
anyway, and this page marks them as practice rather than dressing them up as
requirements.

<!-- SECTION: The schema -->

## The record schema, field by field

The point of tracing each field to a source is that you can defend the schema
without arguing about it. Every row below either comes from a published
instrument or is labeled practice.

| Field | What it holds | Where it comes from |
|---|---|---|
| Asset ID | One stable identifier, carried in the file and in the record | Chinese Measures Article 5, the national standard, and California's "unique identifier" |
| Producer name or code | Who generated it | Chinese Measures Article 5; California's "name of the covered provider" |
| Model name and version | The system and its version at creation | California statute, verbatim; the provenance specification's software agent object |
| Created or altered timestamp | Date and time of creation or alteration | California statute, verbatim; the provenance specification |
| Content attribute | Generated, generated then edited, or captured then modified | Chinese Measures Article 5; the press vocabulary of digital source types |
| Label flag | Whether a label is present, and which kind | The Chinese national standard |
| Action history | The ordered edit chain, with the agent for each step | The provenance specification's actions assertion |
| Inputs and ingredients | Reference images and base plates, each with a stated relationship | The provenance specification's ingredient assertion |
| Prompt | The text that produced the asset | The provenance specification's guidance for generative work |
| Rights status per input | Licensed, owned, or a likeness with consent on file | Split per input. Rights and replica statutes, not one field |
| Distributor identifiers | Added by the platform, alongside yours | Chinese Measures Article 6 and the national standard |
| Human edits, named | Who changed what after generation | Practice. No instrument here requires it |
| Approver and date | Who signed it off for release | Practice |
| Destination markets | Where it is scheduled to run | Practice, and the field that makes every other row answerable |
| Retention date | When the record is due for review | Practice at the default, instrument-driven where Article 9 applies |

The last column is doing quiet work. When someone challenges a field, you are
not defending a preference, you are pointing at the document that names it.

Two of these deserve more than a table row.

**Content attribute is where retouchers get caught.** The press industry's
vocabulary of digital source types draws a line most workflows blur.

> The IPTC Digital Source Type vocabulary defines trainedAlgorithmicMedia as
> "digital media created algorithmically using an Artificial Intelligence model
> trained on captured content", and compositeWithTrainedAlgorithmicMedia as
> "augmentation, correction or enhancement using a Generative AI model, such as
> with inpainting or outpainting operations".
> Source: IPTC NewsCodes, Digital Source Type scheme, last modified
> 23 October 2024.

A photograph with a generatively extended background is not generated media. It
is a composite, and it has its own term. This is an easy field to get wrong,
because the person doing the retouch is rarely the person who read the
vocabulary, and nothing in the tooling stops them.

**The prompt has somewhere to live.** Workflows tend to lose it, which is
avoidable.

> The C2PA guidance for artificial intelligence and machine learning says the
> output's Content Credential may carry the prompt used as an input to the
> generative model, recorded as an inputTo ingredient, and describes recording
> base models, training datasets and fine-tuning datasets as ingredients.
> Source: C2PA specifications, guidance for artificial intelligence and machine
> learning, version 2.4, retrieved 9 September 2026.

Worth being precise about what that specification is. It is a technical
standard, not a law, and no instrument on this page requires it. It is useful
here as a shared field vocabulary, so the same row exports cleanly into
whatever a client or a platform asks for next.

<!-- SECTION: The three regimes -->

## The three regimes, and what each one actually asks

They ask different questions about the same asset, and only one of them asks
for a file at all.

| | China | European Union | US states |
|---|---|---|---|
| In force | Measures from 1 September 2025, with the national standard the same day | Article 50 applies from 2 August 2026 | New York from 9 June 2026; California replica provisions from January 2025 |
| What it wants | An explicit label plus an implicit label in file metadata, and labels that survive export | A machine-readable mark on synthetic output, and disclosure of deepfakes by the deployer | Conspicuous in-ad disclosure of a synthetic performer, and consent evidence for a likeness |
| Retention duty | Six months, in one narrow case only | None stated | None stated |
| Who it binds | Providers, distribution platforms and users | Providers mark, deployers disclose | Advertisers and producers |

Start with China, because it asks for the most and asks earliest.

> Article 5 of the Measures puts the implicit label in the file metadata and
> says it carries content attribute information, the service provider name or
> code, and a content ID, among other production element information. The same
> article defines file metadata as descriptive information embedded in the file
> header in a specific encoding format.
> Source: Cyberspace Administration of China, March 2025, instrument text.

That is a field list inside a legal instrument, which is rare and useful. It is
also why the schema above starts where it does.

The obligation does not stop at the studio door.

> Article 10 of the Measures says a user publishing generated synthetic content
> through a distribution service must proactively declare it and use the
> labeling function the provider supplies, and that no organization or
> individual may maliciously delete, alter, forge or conceal a label, or supply
> tools or services for others to do so.
> Source: Cyberspace Administration of China, March 2025, instrument text.

Proactive declaration by the publisher means your client has a duty of their
own, and they can only discharge it if you handed over a record that says what
the asset is.

The European position is narrower than most summaries suggest.

> The transparency obligations in Article 50 of the EU AI Act apply from
> 2 August 2026. Providers must apply a machine-readable mark to synthetic
> content generated or manipulated by AI and enable its detection, with
> exceptions where the system performs an assistive function for standard
> editing or does not substantially alter the input data or its semantics.
> Source: European Commission, quick facts on the AI Act transparency rules,
> retrieved 9 September 2026.

Note who that binds. Article 50 splits the duty between the provider of the
system, which marks, and the deployer, which discloses. A production studio is
usually neither. What a studio holds is evidence, not a statutory file, and any
page telling you otherwise has skipped a step.

> Article 50 of the EU AI Act sets no record-keeping duty and no retention
> period. Neither the article nor the European Commission's own FAQ on it names
> a file a producer has to keep.
> Source: European Commission, FAQ on the transparency obligations under
> Article 50 of the AI Act, read in full on 9 September 2026 for a
> record-keeping or retention statement. None is present.

So the per-asset record is not an EU requirement. It is how you answer an EU
question when someone asks it, which is a different argument and an honest one.

On the US side, the sharpest instrument is a state advertising law.

> The New York statute requires a covered person to "conspicuously disclose in
> such advertisement that a synthetic performer is in such advertisement, where
> such person has actual knowledge", and sets a civil penalty of 1,000 US
> dollars for a first violation and 5,000 US dollars for each subsequent
> violation.
> Source: New York State Senate, bill text, December 2025.

Read the trigger: actual knowledge. Whether you knew is a question about your
records, which is the most direct link on this page between a field in a
spreadsheet and a penalty in a statute.

California supplies the clearest published field list anywhere, though it binds
someone else.

> The California AI Transparency Act says a latent disclosure must convey the
> name of the covered provider, the name and version number of the generative AI
> system that created or altered the content, the time and date of the content's
> creation or alteration, and a unique identifier.
> Source: California Business and Professions Code section 22757.3(b), code text
> retrieved 9 September 2026.

Four fields, named in a statute. That duty follows systems above a million
monthly users, so it is almost certainly not yours. The field list still tells
you what a legislature considers a complete disclosure, which is worth
borrowing.

<!-- SECTION: Retention -->

## How long do the records have to be kept?

This is where confident advice usually goes wrong, so here is the whole
picture. One retention period exists across the three regimes. It is six
months, it is Chinese, and it applies to almost nothing.

> Article 9 of the Measures allows a provider to hand over content without an
> explicit label where a user applies for it, once the user agreement has set
> out the user's labeling obligation and liability, and requires the provider to
> keep the related logs for at least six months.
> Source: Cyberspace Administration of China, March 2025, instrument text.

That six months attaches to the logs of one specific transaction: content
handed over unlabeled at the user's request. It is not a general provenance
retention standard, and carrying it across to the EU or to a US state would be
inventing a rule.

Everywhere else, retention is your policy, and it should be stated as one.

> hubStudio keeps the working files behind each delivered asset for 90 days
> after delivery. That is hubStudio policy, not a legal requirement: no
> instrument in this article sets a 90 day period. Where a project touches
> Article 9 of the Chinese Measures, the six month log duty in that article is
> longer and governs.
> Source: hubStudio production policy, September 2026. Published here as our own
> policy, not as a duty any instrument on this page imposes.

<!-- SECTION: Worked example -->

## One asset, every field filled

A generated hero image for a skincare launch running in Shanghai and Paris,
built from a photographed bottle plate and a generated environment.

| Field | Value |
|---|---|
| Asset ID | Stable ID minted at creation, written into the file and the record |
| Producer | Studio name and registered code |
| Model and version | Generative model name plus its exact version string at run time |
| Timestamp | Creation time, and a second entry for the composite step |
| Content attribute | Composite with trained algorithmic media, not generated media, because a real photographic plate is in it |
| Label flag | Explicit label applied for the Chinese distribution, implicit label in metadata for both markets |
| Action history | Opened, then each edit with its agent and version, in order |
| Inputs | The bottle plate with its shoot reference; the environment prompt as an input ingredient |
| Rights per input | Plate owned by the client, shoot release on file; no human likeness present, so no replica consent needed |
| Human edits | Named retoucher, with the composite step attributed |
| Approver | Named approver and the sign-off date |
| Destination markets | China and France, which is why both label types exist on one asset |
| Retention | Policy default, extended if an Article 9 handover applies |

Look at the destination markets row again. No standard names that field, and
without it nobody can tell which of the rows above matter. It is the cheapest
field to capture and the one most often missing.

Notice too what the content attribute row avoids. A photographed plate inside a
generated scene is a composite, and calling it generated media would be wrong
in the direction that is hardest to walk back.

<!-- SECTION: Who asks -->

## Who can ask for this, and when

Not usually a regulator, at least not first. In practice the requests arrive
from four directions, and the record answers all of them from the same row.

**Your client's legal team, at contract or at renewal.** Increasingly a
schedule to the production agreement rather than a conversation.

**A platform, at upload.** Chinese distribution services apply their own
identifiers on top of yours, so your record has to survive alongside theirs
rather than be replaced by it.

**A rights holder or a performer's representative,** asking what a likeness was
built from. This is the request that fails most often, because rights status
lives per input and workflows tend to record it per project.

**Your own team, eighteen months later,** when the asset needs a new version and
nobody remembers which plate was licensed. This one is not a compliance request
at all, and it is usually the one that makes the record pay for itself.

The AI excellence page sets out how this record sits inside the production
pipeline, the copyright and AI resource covers the rights questions upstream of
it, and the AI image production page describes where the fields are captured
during generation rather than reconstructed afterward.

Reviewed September 2026.

<!-- SECTION: FAQ -->

## Questions about AI provenance records

**What should be logged for every AI-generated asset?**

Asset ID, producer, model name and version, creation timestamp, content
attribute, label flag, action history, inputs with their rights status, and the
prompt. Add named human edits, an approver, destination markets and a retention
date as practice. Each of the first group is named in a published instrument or
specification rather than invented.

**How long do provenance records need to be kept?**

Only one instrument sets a period. Article 9 of China's labeling Measures
requires at least six months of logs, and only where content was handed over
without an explicit label at the user's request. The EU AI Act's Article 50 and
the US state statutes set no retention duty at all, so everything else is
policy.

**Who can request an AI disclosure audit trail?**

In practice, a client's legal team at contract or renewal, a distribution
platform at upload, a rights holder or performer's representative asking what a
likeness was built from, and your own team when an asset needs versioning
later. The last is not a compliance request, and it is often the one that
justifies keeping the record.

**Does the EU AI Act require a per-asset record?**

No. Article 50 requires providers to mark synthetic output machine-readably and
deployers to disclose deepfakes. Neither the article nor the European
Commission's FAQ on it names a file anyone must keep. A per-asset record is how
you answer an Article 50 question, not something the article demands.

**What does a complete provenance record look like?**

One row per asset carrying the fifteen fields above, with content attribute set
correctly for composites, rights status recorded per input rather than per
project, and destination markets filled in. That last field decides which regime
applies, so without it the rest of the row cannot be assessed.

<!-- CTA -->

CTA: Talk about your pipeline

<!-- =====================================================================
FEATURE IMAGE: INSTRUCTION FOR CLAUDE CODE

Generate the feature (hero) image from the prompt below with the
generate-image-openai skill, convert to webp, then wire it in as the
article's featured image and OG image.

- Save to:    public/Images/insight-disclosure-audit-trail-per-asset.webp
- Reference:  /Images/insight-disclosure-audit-trail-per-asset.webp
- Format:     .webp, landscape 3:2, under ~250 KB, max 2000px wide
- Style rule: hubstudio-image-style-guide.md is binding. Authored editorial
              campaign photography, one light source, one shadow, prime-lens
              framing, f/2.8 to f/5.6, warm-shadow film grade, lifted black
              point, subtle grain, rule-of-thirds with negative space for
              typography. No named person in the prompt.

CREATIVE ANGLE (one sentence, for the record): the piece argues that provenance
is a record attached to a single asset rather than a policy attached to a
company, so the image is one finished print with its own paper trail physically
tethered to it, and every other print on the table bare.

IMAGE PROMPT (use verbatim):

An overhead editorial photograph of a worn wooden archive table in a Shanghai
studio, shot straight down, showing seven identical square photographic prints
of the same amber glass bottle laid out in two uneven rows; six of the prints
sit bare on the table, while one print near the lower left has a narrow strip
of cream index card physically tied to its corner with a short length of
waxed cotton thread, the card covered in dense handwritten pen strokes that
read as writing but are not legible as any language, and beside it a small
manila envelope with its flap open and two more slips of card half emerging; a
single hard daylight source from the upper left throws one clean directional
shadow from the raised card and thread across the print below it and leaves the
lower right corner of the table in warm falloff; the table is genuinely old,
with grain, ink stains, scratches, a coffee ring and pencil marks; one hand
enters from the bottom edge of frame, short unpainted nails, index finger
resting on the tied card as if checking it against the print; shot on a full
frame camera with a 50mm prime at f/4, focus on the tied print and its card
with the far prints falling gently soft, framing very slightly rotated off
square as if handheld, the upper right third of the table left empty as clean
surface for typography; warm shadows, desaturated midtones, lifted black point,
fine natural film grain, daylight negative film palette; no legible text
anywhere, no numbers, no logos, no labels on the bottle, no watermark, no
screens in frame.
===================================================================== -->

<!-- SCHEMA
Type: BlogPosting
FAQPage: yes, 5 questions
Breadcrumb: Home > Insights > The disclosure audit trail: what a pipeline records per asset
Author: Cyril Drouin
datePublished: 2026-09-24
-->

<!-- ASSET BRIEF
TABLES:
  1. Record schema: field, what it holds, where it comes from. The third column
     is the article's whole defense and must not be cut for width. Rows marked
     practice must stay marked.
  2. The three regimes side by side: in force, what it wants, retention duty,
     who it binds. The "retention duty" row is the one readers screenshot.
  3. The worked example: one asset, every field filled. This is the slot
     deliverable, usable tomorrow.
CHARTS: none. Three regimes with different subjects and triggers do not share
  an axis, and any chart would imply they do.
SCREENSHOTS: the research file's screenshot inventory lists the instrument
  pages. The Chinese national standard sits behind the national register's
  viewer and could not be read directly, so the two published readings of it
  are captured instead and the softer attribution is used wherever its five
  field names appear.
DOWNLOADS: the record schema as a blank one-row-per-asset CSV template with the
  source column intact, ungated.
INTERNAL LINKS:
  AI excellence page -> /the-studio/ai-excellence
  copyright and AI resource -> /resources/copyright-and-ai
  AI image production -> /solutions/ai-production/image
CLIENT SIGN-OFF NEEDED: none. The worked example is a constructed scenario, not
  a real client asset, and carries no client name, brand or figure.
RESEARCH FILE: editorial/research/disclosure-audit-trail-per-asset.md

LEGAL POSTURE: the page states in the second paragraph that it describes
  production practice and is not legal advice, and it cites articles rather
  than commentary throughout. No regime is interpreted beyond its own text.

THE 90 DAY FIGURE is hubStudio policy and the words "hubStudio policy, not a
  legal requirement" sit in the same blockquote, with the Chinese six month
  duty named as longer and governing where Article 9 applies. Do not let a
  later edit separate those sentences.

FIGURES AND CLAIMS DELIBERATELY ABSENT: no fine or penalty under the CAC
  Measures (they create no new penalty schedule); no claim that Article 50
  requires a per-asset record (it does not, and the page says so); the AI Act
  Article 19 six-month log floor (high-risk regime, out of scope, and keeping
  it out protects the Chinese six months from being blurred); California
  Elections Code 20012 (enjoined, summary judgment for the plaintiffs 29 August
  2025); the Maine political-ad statute (could not be confirmed in the
  consolidated text); "thirty states have enacted" (no method, no list); any
  claim that C2PA satisfies a legal requirement; any metadata-survival claim
  across upload or re-encode; any FTC AI disclosure rule; and any effective
  date for AB 1836, where the chapter number is published instead.

SOURCING LIMITATION: EUR-Lex returned empty on three URL forms during research,
  so the EU wording comes from the European Commission's own Article 50 FAQ and
  fact page and is cited as such. Nothing is presented as a quotation from the
  Official Journal.
-->
