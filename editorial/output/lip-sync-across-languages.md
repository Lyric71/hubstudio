---
title: AI Video Lip Sync: What Breaks, What It Costs
slug: lip-sync-across-languages
description: What breaks when brand video is lip-synced into other languages, how to check each language before it ships, and what lip-synced localization costs.
excerpt: Timing slips and blurred mouths show before imperfect mouth shapes do. What breaks in lip-synced localization, how to check each language, and what it costs.
template: insight
---

<!-- HERO SECTION -->

# AI lip sync for video localization: what breaks and what it costs

Timing and visible artifacts break first. Exact mouth shapes matter less than
buyers assume, even in professional dubbing, and the cost depends on which
layer of the job you are buying.

<!-- INTRODUCTION -->

## How does AI lip sync work for video localization?

AI lip sync localization translates and adapts the script, records or
synthesizes a new voice track, then regenerates the mouth region of each frame
to match the new audio. What fails first is timing, visible artifacts and
consent, more than exact mouth shapes. The checks below are hubStudio
production practice, built for reviewers who do not speak the language.

Research grades the result with automatic scores, and it helps to know what
they cover.

> The standard automatic lip-sync scores trace back to a network trained on
> several hundred hours of broadcast news to judge whether mouth movement and
> speech belong together. Checked by hand against held-out clips, it landed
> inside the range a human cannot detect on 81 percent of single 0.2-second
> samples and on more than 99 percent of samples averaged over a whole clip.
> Source: University of Oxford Visual Geometry Group, "Out of time: automated
> lip sync in the wild", 2016. Self-supervised training on news footage,
> evaluated manually on several hundred held-out clips.

A sync score does not say the face is still your performer's.

> Current research adds separate measures for what sync scores miss: a video
> quality score for temporal consistency, a similarity score to quantify whether
> the person still looks like themselves, and a success rate for clips that pass
> human verification.
> Source: NeurIPS 2025 conference paper, revised September 2025. Metric
> definitions stated in the paper's evaluation protocol.

<!-- SECTION: failure modes -->

## What breaks when video is lip-synced into another language?

Nine things, and most are visible to someone who does not know a word of the
target language. No source publishes a failure rate for any of them. The table
describes kinds of failure, not frequency.

| Failure | What you see | Why | Evidence | Check |
|---|---|---|---|---|
| Offset | Speech before or after the lips | Each stage can add delay | Broadcast standards | First hard consonant |
| Closure sounds | Lips open on p, b, m; off the teeth on f, v | Visible, distinct shapes | Viseme research | Marked sounds |
| Lip shape leakage | The original mouth movement shows through | Source lips persist | 2025 benchmark | Closures against master |
| Hard shots | Smearing on profiles, occlusions, stylized faces | Pose and occlusion | 2025 benchmark | Those shots first |
| Mouth blur | A soft or textured mouth region | Sync pressure | 2020 and 2025 papers | Open vowels, paused |
| Identity drift | The face stops looking like the performer | Identity not preserved | 2025 benchmark | Stills against master |
| Line length | Voice runs past a cut, or stops early | Translation moves length | 2023 dubbing study | Line against shot |
| On-screen text | Supers stay in the source language | Outside the audio pass | Streaming guides | Every burned-in word |
| Use beyond consent | A voice in a language nobody agreed to | Consent written narrowly | Union agreement, statutes | Signed description |

The hard-shot and leakage rows come from a benchmark built to break these
systems on purpose.

> A 2025 peer-reviewed benchmark built 615 AI-generated clips specifically to
> stress lip-sync methods with "large facial movements, profile views, variable
> lighting, occlusions, and stylized characters," and reports that earlier
> methods "struggle with head pose variations, identity preservation, and
> artifact elimination."
> Source: NeurIPS 2025 conference paper, revised September 2025. A 615-clip
> benchmark of generated video plus the authors' visual comparison of existing
> methods; no failure rate is published.

> The same paper names lip shape leakage, where "original lip movements from
> source videos persist in the synchronized output," and says the sounds hit
> hardest are those "requiring distinct mouth shapes (such as bilabial or
> labiodental sounds)," the p, b, m and f, v families.
> Source: NeurIPS 2025 conference paper, revised September 2025, appendix on lip
> shape leakage. The authors' qualitative analysis of generated examples.

Blur is the price of pushing too hard.

> Sync and picture quality pull against each other. The 2020 study found that
> forcing accurate lip shapes "sometimes results in the morphed regions to be
> slightly blurry or contain slight artifacts," and the 2025 study found that
> stronger guidance toward the audio gave precise lips with texture artifacts,
> while weaker guidance kept the picture clean but the lips less precise.
> Source: ACM Multimedia 2020 conference paper, October 2020, and NeurIPS 2025
> conference paper, September 2025. Each is the authors' own observation from
> training and ablation.

So check the mouth region and the sync separately. Fixing one can damage the
other.

<!-- SECTION: precision -->

## How much lip sync precision do viewers notice?

Less than buyers fear on mouth shapes. More than they expect on timing.

> Broadcast engineers measured how far sound and picture can drift apart before
> viewers notice. Subjective tests summarized by the international
> telecommunications standards body put the detectability threshold at about
> 45 milliseconds with sound ahead of the picture and about 125 milliseconds with
> sound behind it, and the acceptability threshold at about 90 and 185
> milliseconds.
> Source: International Telecommunication Union, Recommendation ITU-R BT.1359-1,
> November 1998, still listed in force in September 2026. Expert and non-expert
> assessors rated newsreader footage under the double stimulus impairment scale
> method.

> The European Broadcasting Union sets a tighter limit at the broadcast output:
> sound no more than 40 milliseconds before the picture or 60 milliseconds after
> it, the delays at which a mismatch between lip movements and speech becomes
> perceptible to half of observers.
> Source: European Broadcasting Union, Technical Recommendation R37, February
> 2007. Limits set from subjective tests of the delay perceptible to 50 percent
> of observers under the union's standard viewing conditions.

The two bodies measured different things: an average threshold in one case,
the delay half of observers notice in the other. Read together, early sound is
tolerated for somewhere between 40 and 90 milliseconds, late sound for 60 to
185. Both are stricter on early sound. In frames, that window is tiny.

> At 25 frames a second a single frame lasts 40 milliseconds, so an audio track
> that slips one frame early already sits at the European broadcast limit for
> sound arriving ahead of the picture.
> Source: arithmetic on European Broadcasting Union Technical Recommendation
> R37, February 2007. One second divided by 25 frames is 40 milliseconds.

Mouth shapes are a different story.

> Professional dubbing matches mouth shapes far less than buyers assume. Across
> 319.57 hours of professionally produced series dubbed from English into German
> and Spanish, only about 12.4 percent of on-screen speech time showed the same
> mouth shape on the original and dubbed tracks. The researchers call lip sync
> "a fairly soft constraint" and say the figure is likely a lower bound.
> Source: Transactions of the Association for Computational Linguistics, volume
> 11, 2023, peer reviewed. Speech sounds aligned automatically, mapped to viseme
> classes, then compared between source and dub across 54 titles.

Visible damage is the third variable.

> People have tested this, not just software. In the 2020 study, 14 evaluators
> rated real-world clips, including dubbed video out of sync with its translated
> speech, for sync accuracy, visual quality and overall experience on a
> one-to-five scale. Earlier methods that left out-of-sync segments were
> preferred less than the untouched unsynced video, because the original still
> looked right.
> Source: ACM Multimedia 2020 conference paper, October 2020. Fourteen
> evaluators rating each class of video separately on 1 to 5 scales, plus a
> single-choice preference vote.

That sets the order of priorities. Offset is global and easy to see.
Mouth-shape match is local and often forgiven. Visible artifacts cost more than
imperfect shapes, and in that one study a flawed pass did worse than no pass.

<!-- SECTION: script length -->

## Why does the script change length in every language?

Because translation moves length in both directions, and a lip-synced line has
to fit a shot that was cut for the original.

> Translated lines rarely stay the same length, and they do not all grow. In
> professionally dubbed series, nearly 60 percent of line pairs with an English
> original of at least 50 characters changed length by more than 10 percent.
> German skewed longer, with 53 percent of lines at least 10 percent longer than
> the English. Spanish skewed shorter, with 42 percent at least 10 percent shorter
> and 30 percent at least 10 percent longer.
> Source: Transactions of the Association for Computational Linguistics, volume
> 11, 2023. Character counts, punctuation and spaces included, compared across
> aligned on-screen dialogue lines.

Only two languages are measured there, so no single expansion figure holds for
every script. Time each translated line against its shot before any voice is
generated. In practice, a long line gets fixed in the script, not by speeding
up the voice.

<!-- SECTION: checklist -->

## How to check lip sync in a language you do not speak

Most of the check is visual. The one thing a non-speaker cannot do alone is
find the sounds, and a translator can mark those. It works because some sounds
have a mouth shape you can see without knowing the language.

> Mouth shapes do not map one-to-one onto speech sounds. "A phoneme falls into
> one viseme class but a viseme may represent many phonemes: a many to one
> mapping." The classic groupings put p, b and m in one visual class, lips
> closed, and f and v in another, lip against teeth.
> Source: Speech Communication, special issue on audio-visual expressive speech,
> 2017, peer reviewed. 120 phoneme-to-viseme maps compared by training lipreading
> classifiers on British English speakers from two audio-visual datasets.

Run the checklist on every language and every cut. Rows marked practice have
no published standard behind them.

| Check | How to run it without the language | Fail | Basis |
|---|---|---|---|
| Offset | Step frame by frame to a hard consonant, clap or cut | Sound leads the lips by a frame | EBU R37; a frame at 25 fps is 40 ms |
| Closure sounds | Translator marks every p, b, m, f, v with a timecode; step to each | Lips open, or off the teeth | Viseme research |
| Hard shots | List every profile and hand over the mouth in the master; review first | Mouth smears or jumps | 2025 benchmark |
| Mouth region | Pause on open vowels against the same master frame | Blur, or a pasted-on mouth | 2020 and 2025 papers |
| Identity | Stills at start, middle and end beside the master | Face or skin changes | Practice |
| Line fit | Each translated line's duration against its shot | Runs over a cut, or dead air | 2023 dubbing study |
| On-screen text | Tick every super and packshot line as re-rendered or captioned | Source text left in frame | Streaming guides |
| Subtitles | Count characters per line and per second | Over 42 a line or 20 a second | English only |
| Gesture and culture | A native reviewer watches the full cut and signs off in writing | A gesture that reads wrong | Practice |
| Label | Confirm the market's AI label is present | No audio or opening-frame prompt | China Measures; EU AI Act |
| Consent | Match language and use to the signed description | Language not named | Consent section |

The subtitle figures are English only. Never apply them to another language.

> A global streaming service's published English subtitle guide caps lines at 42
> characters and reading speed at 20 characters a second for adult programs and
> 17 for children's programs, and its general requirements allow two lines at
> most and tell subtitlers to position subtitles "to avoid overlap with onscreen
> text."
> Source: a global streaming service's published timed text style guides,
> English (USA) guide updated December 2025 and general requirements updated
> October 2022. Delivery specifications published for its subtitle vendors.

The gesture row has no published standard, and it still belongs on the list. A
cut can pass every mechanical check and misfire because a hand signal means
something else in the market.

<!-- SECTION: consent -->

## Do you need consent to clone a voice for dubbing?

In practice, yes, and again for each new use. This section describes
production practice, not legal advice. Counsel drafts and approves the
document you sign. The chain below extends the rows in the AI brand ambassadors
article to voice and language.

| Step | What has to exist | Rule | Jurisdiction |
|---|---|---|---|
| Notice | Consent sought before capture; the casting notice says a replica will be made | 2025 commercials agreement, XX.C.1 | US union commercials |
| Description | A reasonably specific description of the use, naming voice and languages | Same agreement, XX.C.2 | US union commercials |
| New use | Fresh consent before an on-camera replica generates a voiceover | Same agreement, replica examples | US union commercials |
| Clause test | A replica clause for voice or likeness passes the statute's test | Labor Code section 927 | California |
| Voice right | Authorization for a voice, simulated or real | ELVIS Act, Public Chapter 588 | Tennessee |
| Editing tools | Tools that edit a face or voice prompt for separate consent | Deep synthesis Provisions, Article 14 | China |
| Disclosure | Audio and video labels; deepfake disclosure from 2 August 2026 | Labeling Measures, Article 4; AI Act, Article 50 | China; EU |
| Deletion | Deletion and a written certificate if consent to retain is absent | Same agreement, XX.D.7 | US union commercials |

A synthetic voice is still a voice in law.

> Tennessee's Ensuring Likeness, Voice, and Image Security Act of 2024 defines a
> voice as "a sound in a medium that is readily identifiable and attributable to
> a particular individual, regardless of whether the sound contains the actual
> voice or a simulation of the voice of the individual," and gives every
> individual "a property right in the use of that individual's name, photograph,
> voice, or likeness in any medium in any manner."
> Source: Tennessee General Assembly, House Bill 2091 as amended by House
> Amendment 1, enacted as Public Chapter 588, signed 26 March 2024 and effective
> 1 July 2024. Amendment text read in full and status read on the legislature's
> bill page.

The union agreement is the most concrete published text on turning a face into
a voice. It is not law, and it binds only its signatories, in one market.

> The 2025 commercials agreement's own worked example covers voice. A producer
> who has consent to use a performer's replica for an on-camera performance, and
> then uses it to generate a voiceover, "must obtain additional consent to a new
> reasonably specific description," because the performance being generated is
> for a voiceover.
> Source: 2025 Commercials Contract Memorandum of Agreement, digital replica
> examples, agreement text, May 2025.

China adds two rules. The first, in the Provisions on the Administration of
Deep Synthesis of Internet Information Services, is aimed at tool providers.

> Article 14 of those Provisions says that where a deep synthesis service
> provider or technical supporter offers a function that edits biometric
> information such as a face or a voice, it must prompt the user to inform the
> individual being edited in accordance with law and to obtain that individual's
> separate consent.
> Source: Cyberspace Administration of China, Provisions on the Administration
> of Deep Synthesis of Internet Information Services, Article 14, instrument
> text retrieved 9 September 2026.

The second describes what the label on a generated track looks like.

> For generated or synthesized audio, China's AI-content labeling Measures call
> for a voice prompt or an audio rhythm prompt at the beginning, the end or a
> suitable point in the middle, or a conspicuous prompt in the interactive
> interface. For video, they call for a conspicuous prompt on the opening frames
> and at a suitable place around playback.
> Source: Cyberspace Administration of China, Measures for Labeling of
> AI-Generated Synthetic Content, Article 4, instrument text retrieved
> 10 September 2026, in force since 1 September 2025.

The Measures describe the label. Who in the chain applies it is a question for
counsel, and this page does not answer it.

One question stays open. No statute, case or agreement example read for this
page says whether regenerating only a filmed performer's mouth makes a digital
replica. Put it to counsel before the first language ships, and get consent
that names the lip-synced languages in writing either way.

<!-- SECTION: cost -->

## How much does lip-synced video localization cost?

It depends on the layer, and only the machine layers publish prices. Every
band below is a dated category figure from published pages, no vendor named.
None is a hubStudio price.

| Layer | Published band | Unit | Basis | Read |
|---|---|---|---|---|
| AI dubbing, no lip sync | About $0.33 to $3.00 | Per minute of video | Four self-serve price pages | 10 September 2026 |
| Lip-sync layer, standard | About $0.78 to $3.00 | Per minute of video | Three price pages, plan rates | 10 September 2026 |
| Lip-sync layer, top model | Up to about $10 | Per minute of video | One per-second price table | 10 September 2026 |
| Translation plus lip sync | $1.56 to $4.80 standard, $3.12 to $9.60 enhanced | Per finished minute, one language | One page, enhanced in beta | 10 September 2026 |
| Human review and native QA | Not priced on any page read | None | Tier feature lists | 10 September 2026 |

> Published self-serve price pages for AI dubbing, meaning a translated synthetic
> voice track without lip sync, work out to roughly $0.33 to $3.00 per minute of
> video, depending on plan, watermark and quality mode.
> Source: published self-serve AI dubbing price pages in this category, four
> pages read directly on 10 September 2026, no vendor named. Plan price divided
> by the credits or minutes each page states.

> Visual lip sync is priced as a separate layer on top. Where it is priced, a
> standard pass works out to roughly $0.78 to $3.00 per minute of video at plan
> rates, an enhanced pass on one page costs three times the standard allowance,
> and one per-second price table runs up to about $10 a minute for its top model.
> Source: published self-serve lip-sync price pages in this category, three pages
> read directly on 10 September 2026, no vendor named. Per-minute and per-second
> prices converted to a minute of video.

> On the one page that prices translation and lip sync in the same unit, one
> finished minute into one language uses two minutes of allowance with standard
> lip sync and four with enhanced lip sync. That works out to roughly $1.56 to
> $4.80 a finished minute with standard lip sync and $3.12 to $9.60 with
> enhanced, before any human review, and the page says the enhanced price is in
> beta.
> Source: a published self-serve localization price page in this category, read
> 10 September 2026, no vendor named. Arithmetic on the page's own plan prices
> and minute rules; one card.

Treat every figure as a snapshot.

> The price pages do not agree with themselves. One gives 2,000 to 10,000 credits
> per dubbing minute in its answers section and 13,500 in a tooltip; another
> quotes a flat per-second rate in its answers section above a table that runs
> from half that rate to more than three times it.
> Source: published self-serve AI dubbing and lip-sync price pages in this
> category, read directly on 10 September 2026, no vendor named. Each page read
> in full and compared against itself.

The checks in the section above are the part nobody prices.

> On the page that lists it, managed quality assurance sits only in a
> custom-priced tier; no page read publishes a per-minute price for human review.
> Source: published self-serve localization price pages in this category, read
> 10 September 2026, no vendor named. Tier feature lists read for a priced
> review line.

The human side is harder to price from outside. This research found no
readable published rate card for human voice-over or human lip-sync dubbing, so
this page prints no band for either. One adaptation card shows what a finished
spot includes.

> One published adaptation rate card in this category starts at 1,350 euro
> excluding VAT for a 15-second commercial adaptation, and states exactly what
> that buys: a new voice-over, new titles, a new packshot, an audio mix and
> mastering.
> Source: a published commercial adaptation rate card, read 10 September 2026.
> One card, one duration, one inclusion list, and no publication date printed on
> the page.

The machine bands leave out translation, script adaptation, native review,
on-screen text, labels and consent. The cost to localize a campaign for China
article prices the translation layer, and the campaign adaptation cost per
market article covers the rest of an adaptation budget. The AI video production
page and the video production service page describe how a filmed master becomes
language versions. The Douyin platform page covers brand-owned digital hosts
that switch language without a reshoot.

<!-- SECTION: FAQ -->

## Questions about AI lip sync and localization

**How does AI lip sync work for video localization?**

The script is translated and adapted, a new voice track is recorded or
synthesized, and the mouth region of each frame is regenerated to match the new
audio. Research grades the result with sync scores, then adds separate measures
for identity, temporal consistency and clips that pass human verification,
because a sync score alone misses visible damage.

**What goes wrong with AI lip sync?**

Sound drifting from the picture, lips that stay open on p, b and m, the
original mouth movement showing through, blur in the mouth region, identity
drift, and trouble with profiles, occlusions and stylized faces. Scripts that
change length break the fit to the shot. Untranslated on-screen text and use
beyond consent are the failures that have nothing to do with the model.

**How much does lip-synced video localization cost?**

Published self-serve pages read on 10 September 2026 put AI dubbing at roughly
$0.33 to $3.00 per minute of video, and a standard lip-sync layer at roughly
$0.78 to $3.00. Human review, native QA, script adaptation and consent are not
priced on any page read, and no readable rate card for human lip-sync dubbing
turned up.

**Do I need consent to clone a voice for dubbing?**

In practice, yes, and again for each new use. Tennessee's act protects a voice
including a simulation of it. The 2025 commercials agreement requires fresh
consent when an on-camera replica is used to generate a voiceover. China's deep
synthesis Provisions make editing tools prompt for separate consent. This is
production practice, not legal advice.

**How do I check lip sync in a language I do not speak?**

Have the translator mark every p, b, m, f and v in the translated script with a
timecode, then step to each frame: lips should close, or touch the teeth. Step
through a hard consonant to count any offset, review profile and occlusion
shots first, compare stills against the master, and have a native reviewer sign
off gesture and culture.

<!-- CTA -->

CTA: Test a language pair

<!-- =====================================================================
FEATURE IMAGE: INSTRUCTION FOR CLAUDE CODE

Generate the feature (hero) image from the prompt below with the
generate-image-openai skill, convert to webp, then wire it in as the
article's featured image and OG image.

- Save to:    public/Images/insight-lip-sync-across-languages.webp
- Reference:  /Images/insight-lip-sync-across-languages.webp
- Format:     .webp, landscape 3:2, under ~250 KB, max 2000px wide
- Style rule: hubstudio-image-style-guide.md is binding. Authored editorial
              campaign photography, one light source, one shadow, prime-lens
              framing, f/2.8 to f/5.6, warm-shadow film grade, lifted black
              point, subtle grain, rule-of-thirds with negative space for
              typography. No named person in the prompt.

CREATIVE ANGLE (one sentence, for the record): the most useful check on the
page is one a non-speaker can run, marking every closed-lip sound in a script
they cannot read, so the image is that marked script on a voice booth stand a
moment before the take, peppered with small pencil circles, a performer's hand
resting the pencil on the page.

IMAGE PROMPT (use verbatim):

An authored editorial photograph inside a small, well-used voice recording
booth in a Changsha creative studio, shot from a low three-quarter angle close
to a black metal music stand; on the stand rests a single printed script page,
slightly curled at one corner, covered in rows of dense typed lines that read
as type but are not legible as any language, and scattered through the lines
are about a dozen small hand-drawn pencil circles and short vertical pencil
ticks, some circles slightly smudged by a thumb; the hand of a Chinese woman in
her thirties rests on the lower edge of the page holding a worn yellow pencil,
real knuckle creases and a short unpolished nail visible, the cuff of an
oatmeal knit sweater pushed up her wrist; in the out-of-focus foreground at the
left edge, the round mesh of a pop filter on a gooseneck catches a little
light; the booth walls behind are covered in charcoal acoustic foam that is
faded and dented in places, with a folded moving blanket draped over a stool
and a coiled microphone cable hanging from a hook; the only light is a single
small warm clamp lamp fixed to the top of the stand from the upper left,
throwing one soft directional shadow of the pencil and the hand across the page
toward the lower right, the back of the booth falling into warm dim falloff;
shot on a full frame camera with a 50mm prime at f/2.8, sharp on the pencil
circles nearest the hand, the foam wall and pop filter going soft,
rule-of-thirds framing with the stand and hand in the lower left third and the
upper right of the frame left as plain dim foam for typography; warm shadows,
slightly desaturated midtones, lifted black point, fine natural film grain,
daylight negative film palette with gentle warmth; no face in frame, no text
legible anywhere, no numbers, no logos, no brand marks on the equipment, no
screens showing content, no watermark.
===================================================================== -->

<!-- SCHEMA
Type: BlogPosting
FAQPage: yes, 5 questions
Breadcrumb: Home > Insights > AI lip sync for video localization: what breaks and what it costs
Author: Cyril Drouin
datePublished: 2026-09-27
-->

<!-- ASSET BRIEF
TABLES:
  1. Failure mode table, five columns: failure, what you see, why, evidence,
     check. Nine rows. Evidence cells are qualitative except timing and length,
     and the intro line states that no failure rate is published. Never add a
     rate column.
  2. Per-language QA checklist, four columns: check, how to run it without the
     language, fail, basis. Eleven rows. Rows with no published standard read
     "Practice" (identity, gesture and culture). The subtitle row is English
     only and says so, and the line under the table repeats it.
  3. Consent chain table, four columns: step, what has to exist, rule,
     jurisdiction. Eight rows, reusing cleared rows from briefs 26 and 29 (the
     Article 14 row is brief 29's reusable consent row).
  4. Cost layer table, five columns: layer, published band, unit, basis, read
     date. Five rows, category bands only, no vendor named, human review shown
     as unpriced. The translation band is left to the linked China
     localization article.
CHARTS: none. Nothing here is a trend or a comparison of measured values.
  Optional: a two-bar timing graphic of the EBU limits (40 ms before, 60 ms
  after) with the ITU range behind it, captioned with both sources. It names no
  vendor.
SCREENSHOTS: none required. The research inventory lists text extractions only.
DOWNLOADS: the per-language QA checklist as a one-page printable sheet with a
  blank column for "timecode checked" and a sign-off line for the native
  reviewer, ungated. Not a consent form: the consent table stays on the page.
INTERNAL LINKS:
  AI video production page -> /solutions/ai-production/video
  video production service page -> /services/design/video-production
  AI brand ambassadors article -> /resources/insights/ai-brand-ambassadors-what-you-sign
  cost to localize a campaign for China article -> /resources/insights/cost-to-localize-a-campaign-for-china
  campaign adaptation cost per market article -> /resources/insights/campaign-adaptation-cost-per-market
  Douyin platform page -> /solutions/platforms/douyin
  All six verified to exist in src/pages on 2026-09-27. The Douyin page is the
  platform link because the TikTok page prints a third form of the language
  count.
CLIENT SIGN-OFF NEEDED: none. No client name, engagement or figure is used.
RESEARCH FILE: editorial/research/lip-sync-across-languages.md

CHANGES FROM THE BRIEF, WITH REASONS:
  H1: "Lip sync across languages: what breaks and what it costs" became "AI lip
    sync for video localization: what breaks and what it costs", so the H1
    carries the primary query in the buyer's words (SPEC structure rule 1).
  Title: "AI Lip Sync for Video: What Breaks, What It Costs" (49) became "AI Video
    Lip Sync: What Breaks, What It Costs" (45), so the meta title with
    " | hubStudio" stays under 60 characters.
  Meta description kept as approved (148). Excerpt written in the SEO pass.
  Cost section: no human voice-over or human lip-sync dubbing band. The rate
    guide is gated and the marketplace pages failed, so the absence is published
    instead, per the research notes.
  Failure mode table: no failure rates, because every source is qualitative.
  Gesture and culture: runs as a practice row with no citation; no standards
    body or broadcaster guidance was reached.
  The public broadcaster subtitle guideline was not read, so the subtitle row
    cites a streaming service's published guide in category form, English only.

WHAT THE PAGE NEVER DOES: print a hubStudio language count, market count, rate
  or price; name or allude to any dubbing, voice, lip-sync or localization
  vendor, tool, model, platform or studio; name the company behind the 2023
  dubbing study or the affiliation of the 2025 paper; print any failure rate,
  per-model score, success rate or preference percentage; print a market-size,
  growth or savings figure, or any "$2 to $20 a minute" style seller band; print
  the 22 or 78 percent or 7x figures; state that Chinese law protects the voice
  (the Civil Code article was not read); say who applies an AI label; say a
  mouth-only alteration is or is not a digital replica; print the union session
  fee; quote the Tennessee tool-distribution clause; echo the site's claim that
  models have solved phoneme-level sync.

DOLLAR SIGNS: every "$" in the body is a category market band from the cleared
  cost quotes ($0.33 to $3.00, $0.78 to $3.00, up to about $10, $1.56 to $4.80,
  $3.12 to $9.60), read 10 September 2026, no vendor named. The adaptation card
  is written in euro, as cleared. No hubStudio figure appears.

SITE CONFLICTS FOR THE OWNER (not on the page):
  Language counts: 47 languages with lip-sync (solutions/ai-production/video.astro
    line 36; also the ledger's delivery row); 40+ languages (video-production.astro
    line 67 stat), 40-plus (line 210), forty-plus markets (line 388), fifty-market
    (line 115), eight-plus for one third-party model (line 116), 40 variants
    (line 701); forty-plus languages (solutions/platforms/tiktok.astro line 193).
  Market counts: 35+ markets (ledger), forty-plus markets, fifty-market. The owner
    must settle one language count, what counts as a language served, and
    whether markets are a separate figure.
  The video production page FAQ says current models have "effectively solved"
    phoneme-level sync. The 2025 peer-reviewed evidence on this page contradicts
    it. Flag for revision.

NO HAN CHARACTERS. Chinese instruments are named by their English titles.

DISTRIBUTION: category AI Video, which reaches the layer on
  /solutions/ai-production/video.
-->
