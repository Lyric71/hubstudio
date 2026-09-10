---
title: Training a Brand Model That Stays on Brand
slug: training-a-brand-model-that-stays-on-brand
description: Nobody publishes an approval rate for a trained brand model with its method. What to demand, the five stages, and what training data must never hold.
excerpt: Every page selling brand model training claims quality. None publishes an approval rate with its method. Here is what that rate should mean.
template: insight
---

<!-- HERO SECTION -->

# Training a brand model that stays on brand: the rate to ask for

A brand model is worth what the brand team signs off. So the honest measure of one is
an approval rate: the share of its output that a named person on the brand side
approves, against a written definition, over a stated sample and period. Plenty of
pages promise a model that stays on brand. Not one of them publishes that rate with
its method, and hubStudio has not published one either, so this page prints no rate.
What it does instead is define the rate precisely enough for a buyer to ask for it in
writing.

<!-- INTRODUCTION -->

## What is an internal approval rate?

It is the share of assets a brand model produces that the brand's own approver signs
off, counted against a definition both sides wrote down before the work started.
Chinese design teams have a name for the first-round version, guo gao lu, the share of
work a client signs off first time. The idea travels. The number only means something
if five things are written next to it.

| Element | What it must say | What goes wrong without it |
|---|---|---|
| What counts as an approval | Approved as delivered, or approved after one round of changes | Minor fixes quietly count as approvals |
| Who approves | The named role on the brand side, not the studio | The supplier grades its own work |
| Sample | How many assets, from how many briefs | Ten easy assets pass for a track record |
| Period | The dates the count covers | A good month stands in for a year |
| What is excluded | Assets withdrawn, briefs canceled, tests | Failures leave the count before it is taken |

That table is production practice, not a standard anyone publishes. It is also the
whole argument for the metric. A quality claim tells you what a supplier thinks of its
own work. An approval rate with those five lines tells you what your side thought, and
you can audit it.

<!-- SECTION: benchmark -->

## Why nobody can show you a benchmark

Because none exists.

> No independent, method-stated measurement of approval rates or brand
> consistency for custom-trained brand image models was found. Four English
> buyer searches returned 29 results, 25 published by companies selling the
> training or a tool that does it, and none carried an approval rate with an
> approver, a sample and a period. Three Chinese-language searches returned 18
> practitioner tutorials and tool documents, and none did either.
> Source: search-results audit run 10 September 2026, publisher type recorded
> for every result, no domain named; peer-reviewed literature checked for an
> approval-rate study, none found.

The closest anyone gets is peer-reviewed fine-tuning research, and it measures
something else.

> In peer-reviewed fine-tuning research, "staying on subject" is scored by
> machine, not by a brand team. A 2023 study fine-tuned a text-to-image model
> on three to five photos of a single subject, generated 3,000 test images
> across 30 subjects and 25 prompts, and scored fidelity as the average
> similarity between generated and real photos inside a pretrained image
> encoder. The fine-tuned model scored 0.696 on that scale, against 0.774 for
> real photos of the same subject compared with each other.
> Source: peer-reviewed computer vision conference paper, CVPR 2023, company
> research lab; automated embedding similarity on a 30-subject evaluation set.

> The same study asked 72 people 1,800 paired questions about which image
> "best reproduces the identity" of a reference object. Raters picked the
> fine-tuned model's image 68 percent of the time, an earlier method's 22
> percent, and could not decide 10 percent of the time. That is a preference
> between two research methods, not an approval rate for finished work.
> Source: peer-reviewed computer vision conference paper, CVPR 2023; pairwise
> forced-choice user study, rater expertise not stated.

A similarity score against reference photos is not a brand director saying yes. And a
second paper shows how loosely those scores follow human judgment.

> Automated consistency scores are a weak stand-in for a human reviewer. A
> 2025 benchmark had seven annotators rate generated images across 150
> reference images and 1,350 prompts, then checked how well automated scores
> tracked them. On whether the subject was preserved, the two common
> image-similarity scores reached only 50.72 percent and 60.98 percent of the
> agreement human raters showed with each other.
> Source: peer-reviewed machine learning conference paper, ICLR 2025; Pearson
> correlation with human ratings, expressed as a share of human-to-human
> agreement, each image rated by at least two annotators.

> The same benchmark found a multimodal language model used as a judge came
> closer, at 83.31 percent of human-to-human agreement on subject preservation
> and 98.17 percent on prompt following, and its authors warn that those
> results "heavily rely on the advancements of multimodal large language
> models and require carefully designed system prompts."
> Source: peer-reviewed machine learning conference paper, ICLR 2025, Table 4
> and limitations; the paper's text gives 98.71 percent where its table gives
> 98.17 percent, and the table value is used here.

Read together, those findings are the case for a human approval gate. Automated checks
can sort output before a person sees it. They cannot stand in for the person, which is
why the rate worth asking for is a human one.

<!-- SECTION: pipeline -->

## The five-stage pipeline

hubStudio's AI excellence page describes the pipeline in five stages. The first two
columns below follow that page. The third is the gate a buyer should ask to see closed
before the next stage starts, and it is production practice rather than a published
rule.

| Stage | What happens | The gate that closes it |
|---|---|---|
| Brief | Objectives, brand codes, audiences and channels are mapped | The written approval definition, signed by the brand's approver |
| Train | Custom models are trained on the brand's visual language and product library | The training set, cleared line by line against the never list below |
| Create | Senior art directors generate options, then narrow them | A test batch from real briefs, scored against the approval definition |
| Perfect | Studio retouching, copy editing and brand QA, the final human pass | Per-asset approval by the named approver, counted |
| Deploy | Files delivered in the client's formats | Delivery records: model used, training references, prompts |

The approval rate lives at the Perfect gate. Count there, and every other gate either
feeds it or explains it.

<!-- SECTION: time -->

## How long does it take to train a custom brand model?

The published figure is a range, and it is labeled as one.

> hubStudio publishes a window of three to six weeks from brief to a trained
> custom model, depending on the depth of the brand library. It is a published
> range, not a measured benchmark: no sample of engagements sits behind it.
> Source: hubStudio AI excellence page, September 2026.

Two cautions when you compare that with anything else you read. The time a training
run spends computing is not the window from brief to an approved model, which also
holds the training set clearance and the test batch. And the three to five images in
the 2023 study were photos of one subject for a research method, not a brand library.

The research is candid about where fine-tuning breaks, which is where the test batch
should look first.

> The authors list where fine-tuning breaks: rare contexts, the background
> bleeding into the subject's appearance, overfitting when a prompt resembles
> the training photos, and the plain admission that "some subjects are easier
> to learn than others."
> Source: peer-reviewed computer vision conference paper, CVPR 2023, authors'
> own limitations section.

<!-- SECTION: data -->

## What training data does a brand model need?

Material the brand owns outright, and nothing it cannot account for. The never column
matters most, because what goes in can come back out.

> Image generation models can reproduce their training data. Researchers
> extracted more than a thousand training images from large diffusion models,
> "ranging from photographs of individual people to trademarked company logos,"
> and concluded these models are "much less private than prior generative
> models."
> Source: peer-reviewed security conference paper, 32nd USENIX Security
> Symposium, August 2023, company research labs and universities; generate and
> filter extraction attack on large pretrained models.

That study attacked large models trained on the open web, not a small brand model, so
it gives no leakage rate for one. It is still the reason the never column exists.

| Training data | Status | Why |
|---|---|---|
| Brand imagery the brand holds full rights to | Required | It is the visual language the model learns |
| Product photography of the current library | Required | Products have to come back accurate |
| Written brand codes: color, type, composition rules | Required | The approval definition is judged against them |
| Past campaign archive, rights checked | Optional | Widens range, if every image clears |
| Unreleased products | Never | What goes in can be reproduced |
| Third-party logos and trademarks | Never | Logos are among what extraction recovered |
| Faces or voices without the person's consent | Never | Consent rules for likeness and editing apply |
| Talent work under a contract that bars training | Never | The contract says no |

China sets rules for the training data behind public generative AI services, and they
read as a fair description of a clean training set.

> China's Interim Measures for the Administration of Generative Artificial
> Intelligence Services, Order No. 15, issued by seven bodies led by the
> Cyberspace Administration of China and in force since 15 August 2023, require
> a provider's training to use data and foundation models from lawful sources,
> to respect intellectual property others lawfully hold, and to obtain consent,
> or another lawful basis, where personal information is involved.
> Source: the instrument, Article 7, text read on the Cyberspace Administration
> of China's own site, July 2023 release.

> The Measures cover generative AI services offered to the public in China.
> Article 2 excludes organizations that research, develop or apply the
> technology without providing those services to the domestic public.
> Source: the instrument, Article 2, text read on the Cyberspace Administration
> of China's own site, July 2023 release.

So a brand training a private model is not what the Measures govern. They still show
what regulators think a lawful training set looks like, including a rule for anyone
labeling the data.

> Where labeling of training data is done during development, providers must
> set clear, specific and operable labeling rules and run quality assessment
> and sampling checks on labeling accuracy.
> Source: the instrument, Article 8, text read on the Cyberspace Administration
> of China's own site, July 2023 release.

People are the sharpest line in the never column.

> Article 14 of China's Provisions on the Administration of Deep Synthesis of
> Internet Information Services says that where a deep synthesis service
> provider or technical supporter offers a function that edits biometric
> information such as a face or a voice, it must prompt the user to inform the
> individual being edited in accordance with law and to obtain that
> individual's separate consent.
> Source: Cyberspace Administration of China, Provisions on the Administration
> of Deep Synthesis of Internet Information Services, Article 14, instrument
> text retrieved 9 September 2026.

For union performers in US commercials, the contract addresses training directly.

> On training, the agreement is short: the producer may not use, or authorize
> any other party to use, the results and proceeds of services rendered under
> the contracts to train generative AI systems without the union's consent.
> Source: 2025 Commercials Contract Memorandum of Agreement, Section XX.1.A.4,
> agreement text, May 2025.

<!-- SECTION: ownership -->

## Who owns the trained model at the end?

Start with what a brand model physically is.

> The most widely used lightweight fine-tuning approach "freezes the
> pre-trained model weights and injects trainable rank decomposition matrices
> into each layer." In practice the brand's training produces a separate, small
> set of weights that sits on top of a base model the brand does not own.
> Source: 2021 research paper introducing low-rank adaptation, company research
> lab and academic authors; method description, abstract read at source.

That holds in the common adapter approach. A full fine-tune rewrites the base model's
weights instead, so ask which one you are buying. Either way there are two things to
own, the trained weights and the output, and copyright settles neither by default.

> Copyright protects only material that is the product of human creativity, and
> where a generative system produces the expressive elements of a work, that
> material is not protected by copyright.
> Source: US Copyright Office, registration guidance for works containing
> material generated by artificial intelligence, 88 FR 16190, 16 March 2023, a
> statement of policy published by the issuing office.

> The Office concluded that copyright protection does not extend to the mere
> provision of prompts, that an output is protected where a human author has
> determined sufficient expressive elements, that using a generative system as an
> assistive tool or placing generated material inside a larger human-authored
> work does not defeat protection, and that "the case has not been made for
> changes to existing law to provide additional protection for AI-generated
> outputs."
> Source: US Copyright Office, announcement of Part 2 of its Copyright and
> Artificial Intelligence report, 29 January 2025.

When the law does not assign ownership, the contract does. hubStudio's position is
published.

> hubStudio publishes that the custom models it trains on a client's brand are
> the client's property, and that every asset is documented with the model used,
> the references that trained it and the prompts that produced it. That is
> hubStudio's published policy, not a legal requirement: no instrument in this
> article assigns model ownership by default.
> Source: hubStudio AI excellence page, September 2026.

Whoever you work with, get three things in writing: who owns the trained weights, what
the base model's license allows, and whether the delivery records come with the files.

The AI excellence page sets out the pipeline in full, the AI image production page
covers what a trained model feeds, and the hub4you platform is where approved assets
are worked on after delivery.

Reviewed September 2026. Rights content on this page describes production practice,
not legal advice.

<!-- SECTION: FAQ -->

## Questions about training a brand model

**What is an internal approval rate?**

The share of assets a brand model produces that a named approver on the brand side
signs off, counted against a definition written before the work starts. It only means
something with five lines beside it: what counts as an approval, who approves, the
sample, the period and what was excluded. No independent benchmark for brand models
publishes one.

**How long does it take to train a custom brand model?**

hubStudio publishes a range of three to six weeks from brief to a trained model,
depending on the depth of the brand library. It is a published range, not a measured
benchmark. The window also holds clearing the training set and scoring a test batch,
so compare it with other brief-to-model windows, never with a training run's compute
time.

**What training data does a brand model need?**

Brand imagery the brand holds full rights to, photography of the current product
library, and written brand codes for color, type and composition, since the approval
definition is judged against them. A past campaign archive is optional, as long as
every image in it clears the same rights check before it goes in.

**What must never go into brand model training data?**

Unreleased products, third-party logos and trademarks, faces or voices without the
person's consent, and talent work under a contract that bars training. Research has
extracted training images, including photos of people and trademarked logos, from
large image models. That study did not test small brand models, but it is why these
stay out.

**Who owns the trained model at the end?**

The contract decides, because copyright does not settle it for prompt-driven output.
In the common adapter approach, training produces a small set of weights on a base
model the brand does not own. hubStudio publishes that models it trains are the
client's property. This describes production practice, not legal advice.

<!-- CTA -->

CTA: Talk about a brand model

<!-- =====================================================================
FEATURE IMAGE: INSTRUCTION FOR CLAUDE CODE

Generate the feature (hero) image from the prompt below with the
generate-image-openai skill, convert to webp, then wire it in as the
article's featured image and OG image.

- Save to:    public/Images/insight-training-a-brand-model-that-stays-on-brand.webp
- Reference:  /Images/insight-training-a-brand-model-that-stays-on-brand.webp
- Format:     .webp, landscape 3:2, under ~250 KB, max 2000px wide
- Style rule: hubstudio-image-style-guide.md is binding. Authored editorial
              campaign photography, one light source, one shadow, prime-lens
              framing, f/2.8 to f/5.6, warm-shadow film grade, lifted black
              point, subtle grain, rule-of-thirds with negative space for
              typography. No named person in the prompt.

CREATIVE ANGLE (one sentence, for the record): the piece argues that a brand model is
worth what the brand side signs off, so the image is the act of sign-off itself, a
hand placing small approval dots on some prints of the same product and turning
others face down.

IMAGE PROMPT (use verbatim):

An editorial photograph of a long worn wooden studio table in a lived-in Shanghai
creative studio, seen from a raised three-quarter angle, covered with a loose grid of
about twenty matte photographic prints, each showing the same plain unbranded pale
ceramic vase styled in a different setting, some on linen, some on stone, some beside
branches; a Chinese art director's hand, sleeve of a dark wool sweater rolled back,
presses a small plain green paper dot onto the corner of one print; several other
prints already carry the same green dot, and a few prints lie turned face down at the
edge of the grid; a pencil, a roll of dot stickers and a mug of tea sit at the far
edge of the table; in the soft background, a pinboard and a desk lamp that is switched
off; a single soft daylight source from a tall window off frame to the left throws one
gentle directional shadow from the hand across the prints; the table shows real wear,
rings and pencil marks; shot on a full frame camera with a 50mm prime at f/4, sharp on
the hand and the print it touches, the far prints falling gently soft, rule-of-thirds
framing with the upper right third left as plain wall for typography; warm shadows,
desaturated midtones, lifted black point, fine natural film grain, daylight negative
film palette; no text legible anywhere, no numbers, no logos, no writing on the
prints or stickers, no screens in frame, no watermark.
===================================================================== -->

<!-- SCHEMA
Type: BlogPosting
FAQPage: yes, 5 questions
Breadcrumb: Home > Insights > Training a brand model that stays on brand
Author: Cyril Drouin
datePublished: 2026-09-10
-->

<!-- ASSET BRIEF
TABLES:
  1. The five lines an approval rate needs beside it. INTRODUCED AS PRODUCTION PRACTICE,
     NOT A PUBLISHED STANDARD.
  2. The five stages, what happens, and the gate that closes each. The first two columns
     follow hubStudio's AI excellence page; the gate column is labeled production practice.
  3. Training data: required, optional, never, with the reason per row.
CHARTS: none. The brief's "approval rate over the training period" chart cannot be built:
  no approval figure with a written definition, approver, sample and period exists.
SCREENSHOTS: six captures are listed in the research file's inventory. The capture that
  would change this page is not a paper: a written approval definition that does not yet
  exist.
DOWNLOADS: the five-line approval definition as a blank sheet, ungated.
INTERNAL LINKS:
  AI excellence page -> /the-studio/ai-excellence
  AI image production page -> /solutions/ai-production/image
  hub4you platform -> /hub4you
CLIENT SIGN-OFF NEEDED: none. The page carries no hubStudio delivery figure.
RESEARCH FILE: editorial/research/training-a-brand-model-that-stays-on-brand.md

H1 AND META CHANGED FROM THE BRIEF: the working H1 and the approved meta both carried the
  22 to 78 percent approval figure. The brief itself makes that figure conditional on a
  stated approval definition, approver, sample and period, and none exists in writing, so
  the figure is blocked and both were rewritten. The angle survives on its real finding:
  no independent approval-rate benchmark for brand models exists, and the page defines the
  rate a buyer should demand.

SLOT REQUIREMENT UNMET, ON PURPOSE: no hubStudio delivery number has its method stated.
  The three to six week window runs only as the published range attributed to the AI
  excellence page, never as an observed range across engagements.

WHAT THE PAGE NEVER DOES: print the 22 or 78 percent figures, the sevenfold output claim,
  the 60 percent cost claim or any other hubStudio delivery figure; restate a research
  metric (0.696, 68 percent, 50.72, 60.98, 83.31, 98.17) as a brand approval rate; name any
  model, method, encoder, tool or vendor (research is attributed to venue and year, the
  adapter method is described by mechanism); transfer the language-model parameter and
  memory reductions to image models; state a leakage rate for brand models; say China's
  Interim Measures bind a brand's private model; allocate labeling duties or print a
  penalty; use Part 3 of the US Copyright Office report; print a training set size from a
  vendor page, a compute time, or any hubStudio rate.

NO HAN CHARACTERS. The Chinese term is romanized (guo gao lu) with its English meaning, per
  the house rule that overrides the brief's bracketed-characters convention.

DISTRIBUTION: category AI Foundations, which routes it to the AI excellence page layer,
  the page it cites for the pipeline and the ownership policy.
-->
