---
title: The 2026 AI Model Roster for Brand Assets
slug: the-2026-model-roster
description: Which AI model for which brand asset in 2026: product stills, on-model images, environments, short video and lip sync, with what each model gets wrong.
excerpt: There is no single best AI model. Here is a roster by asset type, with dated leaderboard readings, maker-admitted limits and commercial terms.
template: insight
---

<!-- HERO SECTION -->

# The 2026 model roster: which AI model for which asset

No single model is best at everything a brand needs made. The honest answer is a
roster: one model per asset type, picked on dated evidence, with its known limits
written beside it.

Reviewed 10 September 2026.

<!-- INTRODUCTION -->

## What is the best AI model for product images in 2026?

No single model wins on the dated evidence. On two public blind-vote leaderboards
read in September 2026, GPT Image 2 placed highest among released text-to-image
models, the boards disagreed below it, and neither scores product stills. hubStudio
assigns a model per asset type and tests it against the physical product before
work moves to it.

> On two public blind-vote image leaderboards read in September 2026, GPT Image 2
> was the highest-placed released text-to-image model on both: first on one
> board, and third on the other behind two preliminary variants from the same
> maker.
> Source: two public blind-vote leaderboards, one updated 7 September 2026 with
> 6,142,759 votes across 78 models, the other read 10 September 2026; voters chose
> between two anonymous images made from the same prompt, and votes were
> aggregated with a Bradley-Terry model.

A preference vote on general prompts tells you which image anonymous voters liked.
It does not tell you whether the label on your bottle came back right.

> No method-stated study measuring how faithfully current named models reproduce
> a physical product's label, logo, shape and color was found in the sources
> reviewed, and neither public leaderboard read publishes a product-still
> score, although one lists retail and ecommerce among its prompt categories.
> Source: two public leaderboards and twelve research papers and abstracts
> reviewed 10 September 2026; stated as an absence in those sources, not as proof
> that none exists.

Search results do not fill the gap. In an audit run for this page on 10 September
2026, none of 27 results across four English buyer searches was a model maker's
own page, and none carried an evaluation with a stated method and date.

So the useful answer is a roster. The asset column below is where the roster
points each model, and that is production practice. The third column is what the
maker claims. The last column is the maker's own stated limitation where it
published one, and a failure class documented in research where it did not.

| Asset | Model | What the maker says it does well | Known limitation |
|---|---|---|---|
| Product still | GPT Image 2 | Generation and editing from text and image input, with inpainting | None stated in the maker's documentation; long text in the frame is a documented failure class |
| Product still from many references | Nano Banana Pro | Blends up to 14 images, keeps up to five people consistent, outputs at 2K and 4K, edits angle, focus and color grade locally | Maker says small faces, accurate spelling and fine details; complex edits can produce artifacts |
| Product consistency, open weights | FLUX.2 | Up to 10 reference images for character, product or style consistency; editing up to 4 megapixels; the [dev] version published as open weights | None stated; the [dev] license is non-commercial for the model itself, though outputs may be used commercially |
| On-model and lifestyle | Nano Banana 2 | Resemblance of up to five characters and fidelity of up to 14 objects in one workflow; 512 pixels to 4K; translates text inside an image | None stated; hands are a documented failure class to check |
| Layouts with dense text, layered edits | Seedream 5.0 Pro | Turns dense text and data into layouts; separates an image into more than 10 editable layers; renders text in more than ten languages | Maker says finer-grained text rendering and pixel-level editing consistency still have room to improve |
| Environment and art direction | Midjourney V8.1 | Better adherence to detailed prompts and better text; HD mode at four times the resolution of V7 | Omni-reference still ran on V7 on 11 June 2026; a generated scene is not tied to physical parameters |
| Text-heavy stills, open weights | Qwen-Image line | Complex text rendering and precise image editing; weights under Apache 2.0 | None stated; on long text, open-source models trailed proprietary ones in a 2025 benchmark |
| Short video from many references | Seedance 2.0 | Up to nine images, three video clips and three audio clips in one instruction; 15-second multi-shot video with dual-channel audio | Maker names detail stability, occasional audio distortion, multi-subject consistency, text rendering and complex edits |
| Storyboarded shots with speech | Kling 3.0 | Up to 15 seconds; native speech in English, Chinese, Japanese, Korean and Spanish plus accents and dialects; multi-shot storyboard; signage, captions and branded elements retained | None stated; physics, commonsense and anatomy are documented failure classes in video models |
| Image to video with sound | MiniMax H3 | Up to 15 seconds at 2K with native stereo, from mixed video, image and audio references | Maker says visual detail can still be improved in certain scenarios |
| Reference and frame control | Veo 3.1 | Up to three reference images; extension to a minute or more; first and last frame; 1080p and 4K with native audio | Maker says natural spoken audio in shorter speech segments is still in development |
| Motion-led shots | Runway Gen-4.5 | Motion quality, prompt adherence and visual fidelity | Maker says effects can precede causes, objects can vanish across frames, and actions succeed too easily |
| Open-weight video | Wan 2.2 | Weights under Apache 2.0, including a speech-to-video variant; 720P at 24 FPS on its 5B model | None stated; physics, commonsense and anatomy are documented failure classes in video models |
| Lip sync and talking head | OmniHuman 1.5 | Animates a character from one image and a voice track, syncing lips, emotions and gestures; group dialogue from separate audio tracks; 1080p | None stated; lip sync on arbitrary faces in real video is a documented failure class |
| Voice | Eleven v3 | The maker's most advanced text-to-speech model; more than 70 languages | Maker points real-time use to a separate conversational model |
| Upscale | Native high resolution, or an open restoration model | Up to 4K natively on Nano Banana 2, Nano Banana Pro and Veo 3.1; 2x to 4x open upscaling under BSD-3-Clause | Generative restoration carries a fidelity issue; the portable open build can show block inconsistency from tiles |

<!-- SECTION: stills -->

## Which model for product stills, on-model images and environments?

Start with the makers that publish their own weak spots. Google does, for Nano
Banana Pro.

> Google's own model page says Nano Banana Pro may struggle with small faces,
> accurate spelling and fine details, and that complex edits can produce
> unnatural results, visual artifacts or disjointed scenes.
> Source: Google DeepMind model page for Gemini 3 Pro Image, read 10 September
> 2026; the maker's stated limitations.

Small faces, spelling and fine detail are what a packshot or an on-model image has
to get right. ByteDance is just as direct about its newest image model.

> ByteDance says Seedream 5.0 Pro, released 8 July 2026, turns dense text and
> data into layouts, separates an image into more than 10 editable layers, and
> renders text in more than ten languages. The same post says "there is still
> room to improve in finer-grained text rendering and pixel-level editing
> consistency."
> Source: ByteDance Seed launch post, 8 July 2026; maker claim and the maker's own
> stated limitation.

Two lines on the roster publish open weights, FLUX.2 [dev] and Qwen-Image. Open
weights can be fine-tuned on a brand's own material, which is production practice
rather than a maker claim. The FLUX.2 [dev] license keeps the model itself
non-commercial, and the terms section covers what that means for output.

On-model work adds people, and people add hands.

> Diffusion image models have a documented failure with human hands, "such as
> incorrect finger counts or irregular shapes", serious enough that researchers
> built dedicated repair steps for it.
> Source: HandRefiner, arXiv 2311.17957, November 2023; a research paper on
> 2023-generation models, cited for the failure class and not for a current rate.

That paper tested older models. It names the check, not today's failure rate, so
hands stay on the test list for every new version.

For environments and art direction, the roster points to Midjourney V8.1. Its maker
says HD mode renders at four times the resolution of V7. Its omni-reference feature
was still running on V7 when V8.1 became the default on 11 June 2026.

Any generated set carries one more caution, from research published in March 2026.
An image can look convincing without being physically plausible, because it never
came from a three-dimensional scene.

Whether a product still should be generated at all, or shot, is a separate call.
The Shoot it or generate it article works through that decision.

<!-- SECTION: editing and text -->

## Can AI models handle edits and text in the frame?

On editing, a public vote cannot separate the leading models.

> On one public image-editing leaderboard the ten highest-rated models sat
> inside a 31-point band, and the confidence intervals of GPT Image 2, Nano
> Banana 2, Seedream 5.0 Pro and Nano Banana Pro overlapped, so the vote could
> not separate them.
> Source: a public blind-vote image-editing leaderboard read 10 September 2026;
> pairwise preference votes aggregated with a Bradley-Terry model and reported
> with 95 percent confidence intervals.

Preference is not physics. Reflections and contact points are where edits break.

> Physical realism, not semantic accuracy, is where current image generation
> still breaks: a 900-case benchmark covering optics, mechanics and state
> transition scored eleven current image editing models against
> human-annotated reflection surfaces and contact points, and every
> open-source model scored below 60, with only two closed systems slightly
> above it.
> Source: an image editing physical-realism benchmark, October 2025; 900
> human-annotated editing cases scored for physical consistency across eleven
> models.

Text is the other test. Long copy inside an image is a documented failure.

> Long passages of text inside generated images remain "a persistent
> challenge": a 3,000-image human-improved test set posed significant challenges
> even for the most advanced proprietary model tested, and open-source models
> trailed further.
> Source: TextAtlas5M, arXiv 2502.07870, February 2025, revised November 2025; a
> benchmark across three data domains, testing models of that generation.

That benchmark tested an older generation. Three current makers still list text
among their own limitations. Google names accurate spelling for Nano Banana Pro.
ByteDance names finer-grained text rendering for Seedream 5.0 Pro, and text
rendering accuracy for Seedance 2.0.

So every line of pack copy gets read by a person at final size, in every language,
before a file moves on.

<!-- SECTION: video -->

## Which AI video model is best for ads in 2026?

The video boards do not name one. They split by task, and they disagree.

> For text to video, Seedance 2.0 placed fifth and seventh on two public
> boards, MiniMax H3 fourth and eighth, Sora 2 fourteenth and eleventh, and Veo
> 3.1 fifteenth and twelfth. Kling 3.0 placed tenth on one board and outside the
> top fifteen on the other.
> Source: two public blind-vote video leaderboards, one updated 4 September 2026
> with 668,045 votes across 48 models, the other read 10 September 2026 in its
> text-to-video-with-audio arena; pairwise preference votes aggregated with a
> Bradley-Terry model.

> For image to video, MiniMax H3 ranked first on one public board and third on
> the other, Seedance 2.0 fifth and second, and Veo 3.1 twelfth and eleventh.
> Source: two public blind-vote video leaderboards, one updated 2 September 2026
> with 1,906,002 votes across 47 models, the other read 10 September 2026 in its
> image-to-video-with-audio arena; pairwise preference votes aggregated with a
> Bradley-Terry model.

For an ad brief, the maker claims in the roster map straight onto the shot list.
How many references does the model take? How long does a clip run? Does sound come
out with the picture? The limitations map onto the review, and two makers publish
theirs in detail.

> The same launch post says Seedance 2.0 still needs work on detail stability,
> occasional audio distortion, multi-subject consistency, text rendering
> accuracy and complex editing effects.
> Source: ByteDance Seed launch post, 12 February 2026; the maker's stated
> limitations.

> Runway lists three known failure modes for Gen-4.5, released 1 December 2025:
> effects sometimes precede causes, objects may disappear or appear
> unexpectedly across frames, and actions disproportionately succeed, such as a
> poorly aimed kick still scoring a goal.
> Source: Runway research post, 1 December 2025; the maker's stated limitations.

Research finds the same pattern across video models.

> A 2025 video benchmark found that while models score increasingly well on
> surface measures such as per-frame aesthetics and temporal consistency, "they
> still struggle to generate videos that are not just visually plausible but
> fundamentally realistic", falling short on physical laws, commonsense
> reasoning, anatomical correctness and compositional integrity.
> Source: VBench-2.0, arXiv 2503.21755, March 2025, revised August 2025; a
> five-dimension benchmark using automatic evaluators aligned with human
> annotation.

Those were 2025 models. The finding still decides how a clip gets reviewed:
through every second of motion, never on a single good frame.

The AI video production page covers how this work is made for clients.

<!-- SECTION: lip sync, voice, upscale -->

## Which model for lip sync, voice and upscaling?

No public blind-vote leaderboard with a published method was read for these three
asset types. This part of the roster rests on maker claims and research.

Kling 3.0, Veo 3.1 and Seedance 2.0 generate sound with the picture, by their
makers' account. One of those makers flags where speech still slips.

> Google's own Veo page says "creating videos with natural and consistent spoken
> audio, particularly for shorter speech segments, remains an area of active
> development."
> Source: Google DeepMind Veo model page, October 2025 edition, read 10 September
> 2026; the maker's stated limitation.

For a talking head built from a still image, the roster points to OmniHuman 1.5,
which its maker says syncs lips, emotions and gestures to a voice track. The
research on how sync fails is older, and precise.

> A 2020 paper that introduced lip-sync accuracy metrics for real video named
> the failure precisely: earlier approaches failed "to accurately morph the lip
> movements of arbitrary identities in dynamic, unconstrained talking face
> videos."
> Source: Wav2Lip, ACM Multimedia 2020, arXiv 2008.10010; a research paper
> introducing lip-sync metrics and benchmarks for unconstrained video.

No method-stated benchmark of lip sync across languages for the current commercial
models was found in the sources reviewed. So sync gets tested on the real
presenter, in the real language, with short lines as well as long ones.

For voice, ElevenLabs says Eleven v3 supports more than 70 languages. Its
documentation points real-time use to a separate conversational model.

Upscaling starts with a question: does the model already output at the size the
job needs? By their makers' account, Nano Banana 2, Nano Banana Pro and Veo 3.1
reach 4K. Where an upscale is still needed, an open restoration model offers 2x to
4x under a BSD-3-Clause license.

Generative restoration has a known fidelity problem. A CVPR 2024 paper built its
sampling method specifically to suppress it. An upscaled packshot gets checked
against the original before it ships.

<!-- SECTION: leaderboards -->

## Why do AI model leaderboards disagree?

Because they measure preference, and each measures it its own way.

> The leaderboards measure preference, and they publish how. One shows a voter
> two anonymous outputs from the same prompt, requires a minimum viewing time,
> and aggregates the picks with a Bradley-Terry model, running separate video
> arenas with and without audio and recomputing video ratings hourly. The other
> removes about 10 percent of submitted votes as duplicates and labels a new
> model's score preliminary until enough fresh votes arrive.
> Source: the two leaderboard publishers' own methodology pages, read 10
> September 2026, and changelog entries dated July to September 2025; published
> method statements, not an audit.

> Below the top spot the same two boards disagree. Nano Banana 2 placed fourth
> on one and ninth on the other, Nano Banana Pro ninth and fourteenth, and
> Seedream 5.0 Pro thirteenth and tenth.
> Source: the same two public blind-vote text-to-image leaderboards, updated 7
> September 2026 and read 10 September 2026; ranks compared rather than scores,
> because each board rescales its ratings independently.

Scores do not convert between boards. Compare ranks, and check whether the
confidence intervals overlap before reading anything into a gap.

> Anonymity on these boards can be broken. Researchers identified which model
> made an image from where it fell in an image-embedding space, across 22
> models, 280 prompts and 150,000 images, and said the findings expose
> fundamental security flaws in text-to-image leaderboards.
> Source: arXiv preprint 2601.09647, submitted 14 January 2026; a centroid-based
> clustering method applied to model outputs, not yet peer reviewed.

The preprint shows anonymity can be broken. It does not show that any ranking was
manipulated.

Ranks also age.

> In October 2025 Google reported that Veo 3.1 performed best on overall
> preference in its own comparison across 1,003 text-to-video prompts. On the
> public video leaderboards read in September 2026, Veo 3.1 ranked between
> eleventh and fifteenth.
> Source: Google DeepMind's Veo model page, charts dated October 2025, a
> maker-run preference comparison with raters not stated (maker claim); and two
> public blind-vote video leaderboards updated 2 to 4 September 2026 and read 10
> September 2026.

Both statements can be true on their dates. That is why every rank on this page
carries one.

<!-- SECTION: terms -->

## What do AI model makers' terms allow for commercial use?

This section is production practice, not legal advice. It records what each
maker's terms said when read on 10 September 2026. Read the current version before
relying on any line of it.

| Maker and models | Terms read | What they say about output | Training and reuse |
|---|---|---|---|
| Google: Nano Banana 2, Nano Banana Pro, Veo 3.1 | Gemini API terms, updated 28 April 2026 | Google won't claim ownership of generated content | Content on unpaid services is used to improve Google products; prompts and responses on paid services are not |
| Runway: Gen-4.5 | Terms of Use, updated 11 May 2026 | No ownership claimed; commercial use of outputs not restricted | Inputs and outputs may be used to train its models |
| ElevenLabs: Eleven v3 | Terms of Service outside the EEA, updated 31 March 2026 | The user retains all rights in output | A perpetual license to use content to improve its services |
| Black Forest Labs: FLUX.2 [dev] | FLUX Non-Commercial License v2.1 | Outputs usable for any purpose, including commercial; no ownership claimed; the model itself is non-commercial | Outputs may not be used to train a competing model |
| Alibaba: Qwen-Image line, Wan 2.2 | Apache 2.0 on the code repositories | Wan 2.2 repository says its maker claims no rights over generated content | Not stated in the repositories read |
| OpenAI: GPT Image 2, Sora 2 | Terms pages returned access errors | Not read | Not read |
| Midjourney: V8.1 | Terms pages returned access errors | Not read | Not read |
| Kuaishou: Kling 3.0 | Terms page served no clause text | Not read | Not read |
| ByteDance: Seedance 2.0, Seedream 5.0 Pro, OmniHuman 1.5 | General cloud terms, updated 23 August 2022 | No clause on AI-generated output | A broad perpetual license to data you upload, for purposes relating to the services |
| MiniMax: H3 | Terms not located | Not read | Not read |

> Runway's terms say it "does not claim ownership of any of your Inputs or
> Outputs" and "does not restrict your commercial use of your Outputs", and that
> inputs and outputs "may be used by the Company to train and improve its AI
> models."
> Source: Runway Terms of Use, last updated 11 May 2026; the terms text read at
> source.

Training use is the clause to read twice. Runway's terms let it train on inputs
and outputs. ElevenLabs takes a perpetual license to use content to improve its
services. Google uses content sent to its unpaid services to improve its products,
and says prompts and responses on paid services are not used that way.

> Not every maker's terms could be read. On 10 September 2026 OpenAI's and
> Midjourney's terms pages returned access errors to an automated request,
> Kling's served no clause text, and the general cloud terms covering Seedance,
> Seedream and OmniHuman, last updated in 2022, contain no clause on
> AI-generated output.
> Source: direct requests to each maker's published terms URLs, 10 September
> 2026; the result recorded per surface.

Where terms could not be read, the table says so instead of guessing. Read them at
the source before work starts.

Provenance marking differs by maker too. OpenAI's system card for Sora 2 says all
its assets carry C2PA metadata, and that videos downloaded from its site and app
carry a visible moving watermark.

Terms can grant use. They cannot create copyright.

> Copyright protects only material that is the product of human creativity, and
> where a generative system produces the expressive elements of a work, that
> material is not protected by copyright.
> Source: US Copyright Office, registration guidance for works containing
> material generated by artificial intelligence, 88 FR 16190, 16 March 2023, a
> statement of policy published by the issuing office.

<!-- SECTION: testing -->

## How is an AI model roster tested and re-tested?

Against the job, not the leaderboard. The table below is production practice, not
a published standard, and no row carries a pass rate.

| Test | What gets checked | Why it is on the list | When it reruns |
|---|---|---|---|
| Product truth | Label, logo, shape, color and material against the physical product and its approved shot | No product-fidelity study was found in the sources reviewed, and an editing benchmark shows physical realism breaking | Every new maker version, before product work moves to it |
| Text in the frame | Full pack copy and every localized line at final size, read by a person | Long text is a documented failure class, and three makers list text among their own limitations | Every new version and every new language |
| People | Hands, small faces, identity held across a set or a clip | Hands are a documented failure class, and one maker names small faces | Every new version |
| Motion and physics | Cause and effect, objects that persist, anatomy through the whole clip | A 2025 benchmark and one maker's own failure list | Every new version |
| Speech and sync | The real presenter, the real language, short lines as well as long | Lip sync on arbitrary faces is a documented failure, and one maker flags short speech | Every new version and every new language |
| Terms and provenance | Output ownership, commercial use and training use, read on the date; provenance marks | Terms differ by maker, and several could not be read | When terms update or a model changes |
| Human sign-off | An art director reviews candidates; similarity scores are advisory only | Automated scores track people at about half to three fifths of human-to-human agreement | Always |
| Dated rank check | Read date, method, overlapping intervals, preliminary labels | The boards disagree below the top, and ranks move | Every roster review |

The human sign-off row is there because an automated score is the easiest thing to
trust.

> Automated consistency scores are a weak stand-in for a human reviewer. A
> 2025 benchmark had seven annotators rate generated images across 150
> reference images and 1,350 prompts, then checked how well automated scores
> tracked them. On whether the subject was preserved, the two common
> image-similarity scores reached only 50.72 percent and 60.98 percent of the
> agreement human raters showed with each other.
> Source: peer-reviewed machine learning conference paper, ICLR 2025; Pearson
> correlation with human ratings, expressed as a share of human-to-human
> agreement, each image rated by at least two annotators.

Re-testing matters because the roster moves under you.

> The latest release of each of the fifteen models on this roster with a dated
> maker page falls between 28 July 2025 and 31 July 2026, and nine of the
> fifteen came out in 2026. On the day those pages were read, the public
> leaderboards already listed newer versions from three of the same makers.
> Source: model makers' own launch posts, model cards and repositories, read 10
> September 2026, compared with two public leaderboards updated 2 to 7 September
> 2026; a count of the pages read, not a measure of the market.

A new maker version goes back through the product and text checks before any work
moves to it. That is also why this page carries a review date.

The AI image production page and the AI video production page describe the
services this roster supports, and the AI excellence page sets out the studio's
wider approach to AI work.

<!-- SECTION: FAQ -->

## Questions about the 2026 model roster

**What is the best AI model for product images?**

There is no single best on the dated evidence. On two public blind-vote
leaderboards read in September 2026, GPT Image 2 was the highest-placed released
text-to-image model, but the boards disagreed below it and neither publishes a
product-still score. Test candidates against your own product: label, logo, shape,
color and material.

**Which AI video model is best for ads?**

No single board settles it. On two public blind-vote video leaderboards read in
September 2026, Seedance 2.0 placed fifth and seventh for text to video, MiniMax H3
fourth and eighth, and Veo 3.1 fifteenth and twelfth. For image to video, MiniMax
H3 ranked first and third. Choose by what the shot needs: references, length,
speech. Then test it.

**Can AI-generated images be used commercially?**

Read the terms for the exact model first. On 10 September 2026, Google's and
Runway's terms said they claim no ownership of output, Runway's said it does not
restrict commercial use, and the FLUX.2 [dev] license allowed outputs for
commercial purposes. OpenAI's, Midjourney's and Kling's terms could not be read
that day. Copyright covers only what a human authored. Production practice, not
legal advice.

**How often do AI production models change?**

The latest release of each of the fifteen roster models with a dated maker page
falls between 28 July 2025 and 31 July 2026, nine of them in 2026. On the day of
reading, the public leaderboards already listed newer versions from three of the
same makers. A roster needs a dated review, not a permanent answer.

**Why do studios use more than one AI model?**

Because the evidence points different ways by asset. The public image leaderboards
read in September 2026 disagree below the top spot, makers admit different
weaknesses, from small faces to short speech segments, and terms differ by maker.
hubStudio's video production page describes model choice as a creative decision
per shot, not a vendor lock-in.

<!-- CTA -->

CTA: See the roster at work

<!-- =====================================================================
FEATURE IMAGE: INSTRUCTION FOR CLAUDE CODE

Generate the feature (hero) image from the prompt below with the
generate-image-openai skill, convert to webp, then wire it in as the
article's featured image and OG image.

- Save to:    public/Images/insight-the-2026-model-roster.webp
- Reference:  /Images/insight-the-2026-model-roster.webp
- Format:     .webp, landscape 3:2, under ~250 KB, max 2000px wide
- Style rule: hubstudio-image-style-guide.md is binding. Authored editorial
              campaign photography, one light source, one shadow, prime-lens
              framing, f/2.8 to f/5.6, warm-shadow film grade, lifted black
              point, subtle grain, rule-of-thirds with negative space for
              typography. No named person in the prompt.

CREATIVE ANGLE (one sentence, for the record): the page argues there is no best
model, only the right one for each mark, so the image is an art director's hand
lifting one brush from a rack of very different brushes, with the single kind of
mark each brush makes laid out on test cards below it.

IMAGE PROMPT (use verbatim):

An editorial photograph of a worn wooden work table in a lived-in Changsha
illustration and production studio, seen from a raised three-quarter angle; on the
right third of the table stands a dark wooden brush rack holding about nine brushes
of very different sizes and shapes, from a hair-fine liner to a wide flat wash
brush; the hand of a Chinese art director, the sleeve of a faded indigo cotton
shirt rolled back, lifts one medium round brush from the rack; across the lower
middle of the frame, three matte white test cards lie in a loose row, each carrying
a single kind of abstract mark made by a different brush: one hair-fine ink line,
one broad pale gray wash, one dry scratchy textured stroke; a small glass of water
clouded gray with ink, a folded cotton rag and an ink stone with a chipped edge sit
nearby; in the soft background, a pinboard with blank paper swatches and a leaning
stack of drawing paper; a single soft daylight source from a tall window off frame
to the left throws one gentle directional shadow of the hand and brush across the
cards toward the right; the table shows real wear, ink stains and water rings; shot
on a full frame camera with a 50mm prime at f/4, sharp on the hand and the brush it
lifts, the far edge of the table falling gently soft, rule-of-thirds framing with
the upper left third left as plain wall for typography; warm shadows, desaturated
midtones, lifted black point, fine natural film grain, daylight negative film
palette; no characters, calligraphy or writing on the cards, rack or paper; no text
legible, no numbers, no logos, no screens showing content, no watermark.
===================================================================== -->

<!-- SCHEMA
Type: BlogPosting
FAQPage: yes, 5 questions
Breadcrumb: Home > Insights > The 2026 model roster: which AI model for which asset
Author: Cyril Drouin
datePublished: 2026-09-10
Reviewed: 2026-09-10 (visible line on the page, because model rosters date fast)
-->

<!-- ASSET BRIEF
TABLES:
  1. The roster: asset, model, what the maker says it does well, known limitation.
     Sixteen rows, no ordinals. The asset column is INTRODUCED AS PRODUCTION PRACTICE;
     the capability column is maker claims only; the limitation column is the maker's
     stated limitation or a documented failure class, labeled which in each cell.
     Sources per row are in the research file's draft roster table.
  2. Commercial-use terms per maker: terms surface and date, what they say about output,
     training and reuse. Rows that could not be read say "Not read". Sits under a line
     saying the section is production practice, not legal advice.
  3. How the roster is tested: test, what gets checked, why, when it reruns. LABELED
     PRODUCTION PRACTICE, NOT A PUBLISHED STANDARD, no pass rate on any row.
  All three stay at four columns, so they scroll cleanly on mobile.
CHARTS: none. Scores from the two leaderboards must never be charted side by side: the
  scales are rescaled independently and do not convert.
SCREENSHOTS: eleven dated captures are listed in the research file's inventory, none
  taken yet. The leaderboard and limitation captures should exist before publish,
  because one board recomputes hourly and several maker pages are undated.
DOWNLOADS: the test table as a one-page roster review sheet, ungated.
INTERNAL LINKS:
  Shoot it or generate it article -> /resources/insights/shoot-it-or-generate-it
  AI video production page -> /solutions/ai-production/video
  AI image production page -> /solutions/ai-production/image
  AI excellence page -> /the-studio/ai-excellence
  (all four verified in src/pages on 2026-09-10)
CLIENT SIGN-OFF NEEDED: none. The page carries no hubStudio delivery figure.
RESEARCH FILE: editorial/research/the-2026-model-roster.md

CHANGES FROM THE BRIEF, WITH REASONS:
  Slot requirement unmet, on purpose: no hubStudio delivery figure has a written method,
    so no delivery number appears and no TODO marker is left on the page.
  Roster column "known failure" became "known limitation", because each cell is either
    the maker's own stated limitation or a research-documented failure class, and the
    two are labeled apart.
  Asset types widened beyond the brief's six: image editing and text, dense-text
    layouts, image to video, open-weight rows and voice were added, because the maker
    pages read carry claims for them. Voice sits beside lip sync.
  Commercial terms are per maker, not per model, because terms are published per maker.
    OpenAI, Midjourney, Kling and MiniMax are marked not read; ByteDance's general cloud
    terms are marked silent on output.
  FAQ "best for ads" and "best for product images" are answered as "no single best",
    with dated blind-vote ranks, because the evidence supports no winner.
  Leaderboards are never named: each is "a public blind-vote leaderboard" with its date
    and method, per the research file.
  Sora 2 is not a roster row. It appears in the video ranks, the terms table and the
    provenance line, per the research file.
  Title, meta, H1 and slug kept as approved. Excerpt written and counted (23 words).
  Length runs over the 1,600-word brief, carried by the quoted maker limitations,
    rankings and research.
  No platform page is referenced: the brief names none, and none fit a model roster
    without forcing it. The orchestrator may add one.

WHAT THE PAGE NEVER DOES: call any model "the best" as fact; print a leaderboard rank
  without its date and method, or a score from one board beside a score from the other;
  name a leaderboard publisher; name, describe or allude to any studio, agency, creative
  platform, reseller or creative app, including the app-prefixed Seedance label; repeat
  a site claim the maker pages contradict (Wan 2.6 open-source, Seedance "#1", Seedance
  "12 reference assets", Kling "60 FPS", Seedance lip sync "across eight-plus
  languages", Veo "native 48kHz audio", Kling "longest extendable output window");
  state where brand data is processed; present Runway Gen-4.5's December 2025 "#1" as
  current or say it dropped; call MiniMax H3 open weights, or FLUX.2 [klein] or
  Qwen-Image-2.0 released as open weights; make capability claims for Wan 3.0,
  Seedance 2.5, Qwen-Image-3.0 or preliminary gpt-image-2.5 variants; quote OpenAI or
  Midjourney terms from memory, or the ElevenLabs free and paid split; print any price,
  credit rate, tier fee or revenue threshold; print the 22 to 78 percent, 7x, 60 percent
  cost, 80 percent time or 70/30 catalog figures, or any hubStudio rate; use the Veo 3
  review or diffusion explainer percentages. The only "60" on the page is the
  physical-realism benchmark score inside a cleared quote.

SITE CONFLICTS FOR THE OWNER (left off the page):
  1. The AI image production FAQ says all content runs on open-source models on private
     servers; other pages name closed API models as production tools.
  2. The video production and motion design pages call Wan 2.6 open-source; the maker's
     GitHub organization lists weights for Wan 2.1 and 2.2 only.
  3. The glossary carries an undated Seedance "#1" rank, "12 reference assets" and Kling
     "60 FPS".
  4. The video production page carries Seedance lip sync "across eight-plus languages",
     Veo "native 48kHz audio" and Kling "longest extendable output window", none on the
     maker pages read.
  5. The illustration page names Seedream v4; the maker's current release is 5.0 Pro.
  6. The Veo 3 review and diffusion explainer insights carry percentages with no method.

NO HAN CHARACTERS. Chinese is named as a language in the Kling row, in English only.

DISTRIBUTION: category AI Foundations. The roster spans image, video, voice and terms,
  so it belongs on the AI excellence page layer, the cluster hub the brief names, rather
  than on the video-only layer an AI Video category would reach.
-->
