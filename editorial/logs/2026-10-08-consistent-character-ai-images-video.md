# Run log: 2026-10-08, consistent-character-ai-images-video

| Field | Value |
|---|---|
| Brief | 58 (`editorial/scripts/wave2/58-consistent-character-ai-images-video.mjs`) |
| Slug | consistent-character-ai-images-video |
| Research file | research/consistent-character-ai-images-video.md |
| Output | output/consistent-character-ai-images-video.md |
| Body word count | 2,150 prose only; 3,179 with tables, prompt blocks and blockquotes (target 1,700 is a floor; overage is tables, maker quotes and the two prompt blocks, settled fallback 4) |
| Body char count | 17,792 |
| Status reached | image_ready (steps 0 to 3 done; schedule.csv left to the integrator) |
| Model used at every step | Claude Opus 5.5 for research, drafting and quality; gpt-image-2 at high quality for the hero |

## Research gate

| Gate | Done | Note |
|---|---|---|
| R1 claims mapped before looking anything up | yes | Nine claims mapped; seed locking, LoRA and drift percentages cut at R1 |
| R2 SERP mapped, four phrasings minimum | yes | Four phrasings, 36 results, four ranking pages read |
| R3 primary sources for every number | yes | Every engine figure from the maker's own page; every app figure from the help center |
| R4 Chinese-language web searched first | not applicable | Global piece, not China-related; ByteDance and Alibaba read on their own English pages |
| R5 every figure interrogated (date, sample, method, who paid) | yes | All maker claims labeled as such; no third-party statistic used |
| R6 triangulated, conflicts published as ranges | yes | Nano Banana 2 launch post against the API docs published side by side |
| R7 research file written before drafting | yes | Written before the first draft line |
| R8 reconciled after drafting | yes | Table in the research file; three items rewritten or removed |

**Gap statement, one sentence:** every ranking page teaches one product, so a
brand team that runs several engines gets no maker-sourced reference limits, no
consent step for a real face, and no drift check.

**Research time spent:** about 75 minutes active.

- Figures reused from the ledger: none as citations. The 2026-09-10 model
  roster research (brief 40) pointed to the Veo 3.1, Nano Banana, Seedance 2.0
  and MiniMax H3 maker pages; each was re-read today rather than reused.
- Claims cut because they could not be sourced: seed locking as a method; a
  "two to three references" rule; any drift or approval percentage; Kling
  reference counts (not needed, the app runs Kling prompt only); OpenAI usage
  policy wording on likeness (403).
- Conflicts published as a range rather than a single figure: Nano Banana 2,
  four character images and ten object images per request (docs, October
  2026) against five characters and 14 objects in a workflow (launch post,
  February 2026).
- Captures saved to `research/consistent-character-ai-images-video/`:
  `check1-excerpts-2026-10-08.txt` and `check2-excerpts-2026-10-08.txt`
  (stripped page text around every quoted phrase, sixteen maker pages).
- Session fact: the shared web search budget ran out after the four SERP
  queries. Every maker page was reached by fetching its documentation URL
  directly.

## Brief

Written as the data module in this run. Amended in the same run after
drafting: the H1 became "How to keep a consistent character across AI images
and video" (the working H1 did not carry the primary query, SPEC structure
rule 1), and a seventh FAQ on cost was added after the hostile-reader pass.

## Iterations (createarticle)

```
[x] Iteration 1  : journalist-style American English draft
[x] Iteration 2  : weakness identification (write the list out)
[x] Iteration 3  : rewrite addressing weaknesses
[x] Iteration 4  : production-readiness review
[x] Iteration 5  : AI-detection removal pass
[x] Iteration 6  : em dash cleanup + blockquote citation formatting
[x] Iteration 7  : cadence pass (house variant, no planted errors)
[x] Iteration 8  : paragraph and citation structure + source check 2 + R8 reconciliation
[x] Iteration 9  : SEO metadata generation (within hard limits)
[x] Iteration 10 : second AI-detection pass
[x] Iteration 11 : final human touch pass
[x] Iteration 12 : visual formatting enhancement
[x] Iteration 13 : five visual concepts + one photorealistic image prompt
```

- Iteration 1: full draft from the research file, nine H2 sections, four
  tables, two prompt blocks, five sourced blockquotes.
- Iteration 2, the ten weaknesses: (1) none of the five internal link names
  appeared in body copy; (2) the H1 lacked the primary query; (3) "both
  studios" read as the human studio; (4) the Seedream row claimed a 5.0 Pro
  feature from the 4.5 page; (5) the Seedance 2.5 row overstated the page;
  (6) the Kling row said "Not needed here", which explains nothing; (7) the
  Veo adults line paraphrased the setting loosely; (8) the video prompt
  example dropped the descriptor, contradicting the method; (9) Improve with
  AI could rewrite the descriptor and the page did not say so; (10) the step
  attaching "the sheet pictures" ignored the app's four-picture limit and the
  shape rule.
- Iteration 3: all ten fixed; plain-text link names added (create page,
  engines page, the two insights, how-to guides, the three help articles).
- Iteration 4: production check; the drift paragraph got an in-app way to
  check late frames (pause near the end); H2s turned into questions.
- Iteration 5: removed a "not X, it's Y" closer ("The fix is not a cleverer
  adjective").
- Iteration 6: zero U+2014; five blockquotes, each with a Source line and a
  year.
- Iteration 7 ran as the cadence variant, not the planted-error variant: one
  long paragraph on what a real face in a reference becomes, followed by a
  one-line paragraph; parallel bullet openings broken; one parenthetical.
  No deliberate errors.
- Iteration 8: check 2 on all sixteen URLs (all phrases found again); R8
  table written; removed "five clean angles beat fourteen mixed ones", the
  comparative claim on short clips, and "than 2.0" on Seedance 2.5.
- Iteration 9: title 47, meta 147, excerpt 25 words.
- Iteration 10: scan for house AI tells (seamless only inside an Alibaba
  quote; no leverage, robust, unlock, elevate, delve).
- Iteration 11: invented example character named Mara, stated as invented.
- Iteration 12: lines rewrapped at about 78 characters; tables aligned.
- Iteration 13: five concepts (a contact sheet under a loupe; a wardrobe rail
  with one garment repeated; a model on tape marks for angles; a casting wall
  of headshots; two printed proofs side by side). Chosen: the contact sheet
  under a loupe, because it shows the drift check as an art director's
  ritual, by eye.
- House check at every iteration: no company named other than the engine
  makers offered in the app; no `$` in the body.

## Quality pass (content-quality-us)

```
[x] Iteration 1  : newsroom-style draft (v1, no change needed)
[x] Iteration 2  : 10 weaknesses identified
[x] Iteration 3  : rewrite fixing the weaknesses (v3)
[x] Iteration 4  : production-ready review (v4)
[x] Iteration 5  : AI-undetectable pass
[x] Iteration 6  : em dash cleanup, blockquote formatting
[x] Iteration 7  : human touch pass
[x] Iteration 8  : SEO title, meta, excerpt
[x] Iteration 9  : second AI-undetectable pass
[x] Iteration 10 : second human touch pass (v10)
[x] Iteration 11 : hostile reader review (10 problems)
[x] Iteration 12 : structural ratio audit (50/50 split)
[x] Iteration 13 : AI marker hunt
[x] Iteration 14 : read-aloud and reader empathy
[x] Iteration 15 : structural sniff test
[x] Iteration 16 : pacing and flow
[x] Iteration 17 : SEO and structural integrity check
[x] Iteration 18 : self-created pattern check (v18, final)
[x] Final        : SEO content folded into the frontmatter
```

Versions kept in the session scratchpad (`w58/versions/cq-v0` to `cq-v18`).

- Pass 2, weaknesses: vague "an engine that documents them"; a performative
  "The work splits in two" opener; a well-turned table closer; a rhetorical
  triad in "So the fix is mechanical"; nine bold-label bullets in a row;
  missing maintenance cue; awkward FAQ answer on reference count; no word on
  what references cost; no single-line practical instruction in the rights
  section; "never improve it" clashing with Improve with AI.
- Pass 3: all fixed. Billing line added from the help center (inputs billed
  like a download, a small charge against the prepaid balance; no amount).
- Pass 4: the table intro states the read date as its freshness cue.
- Passes 5, 7, 9, 10: the closing triad split into two sentences; "File the
  set" rewritten; the last bullet given no bold label; balanced pair "start
  frame wins / references win" broken.
- Pass 11, hostile reader: the missing high-intent question was cost; a
  seventh FAQ added (price before the run, inputs billed like a download, a
  reference clip can lower the price, failed runs not charged; no amount).
- Pass 12: bold-label passages (one step list) are well under half the page.
- Pass 13: "not X, it's Y" gone; triads in prose reduced to content lists.
- Pass 14: "A verbal yes is not enough" punchline replaced by a practical
  line (keep the release with the reference sheet).
- Pass 15: five blockquotes share one format; zero U+2014.
- Pass 16: one aside before the engine table ("the table worth
  bookmarking").
- Pass 17: title 47 (ceiling 52), meta 147 (152), excerpt 25 words (25); one
  H1, nine H2s, seven H3 FAQs; US spelling passes the checker.
- Pass 18: three parentheticals reduced to one.
- House rule kept over the skill: straight quotes in the Markdown source, as
  every draft in `output/` uses; the publish step renders them. House ceilings
  (52, 152, 25) applied in place of the skill's 60 and 156.

## Image

- Prompt used (verbatim from the feature-image block): the contact-sheet
  prompt in the FEATURE IMAGE block of the output file.
- Confirmed the prompt names no real person: yes, no photographer, artist or
  public figure named.
- Attempts: two. Attempt one had an irregular grid of frames (cells of
  different widths overlapping near the loupe), an AI tell. The prompt was
  amended to ask for a strict regular grid with even gutters, and the block in
  the output file was updated to the prompt actually used. Attempt two kept.
- AI-tells checklist on the final frame: hand anatomy plausible (fingers wrap
  the loupe, knuckle creases, no extra digits); one light source from camera
  left, shadows fall right; no legible text, no logo, no watermark; faces on
  the sheet are small and consistent; no melting objects; folded paper and
  tape read as real; grid regular.
- Saved to: `public/Images/howto-consistent-character-ai-images-video.webp`,
  1536 by 1024, webp quality 78, 125 KB (no enlargement; the source is 1536
  wide). Intermediates stay in the session scratchpad.

## House rule checks

| Check | Result |
|---|---|
| Competitor named, described or alluded to | zero; only engine makers offered in the app are named |
| `$` occurrences, each one a category range with a date | zero |
| Em dash occurrences | zero (draft, research file, captures, brief module, this log) |
| Deliberate typos or planted errors | zero |
| Summary or conclusion section | none |
| Decorative ordinal in a repeated titled block | none (step list is bulleted, no numbers) |
| Stray Han characters outside a term gloss | none |
| Statistics in blockquotes with source, date and method | five blockquotes, all with source, year and type of source |
| `node editorial/scripts/check-draft.mjs` | all hard checks passed |

## Sources

- New figures added to the ledger, with both check dates: see "Ledger
  additions" below (both checks 2026-10-08).
- Rows added to the do-not-publish log: see the same section.

## Ledger additions

New section for `sources/verified-sources.md`, in the "Industry and
regulatory" column format:

```markdown
## Added 2026-10-08 (ledger rows from brief 58, consistent-character-ai-images-video)

| Figure | Attribution to use | Source | Date | Confidence | Check 1 | Check 2 | Used in |
|---|---|---|---|---|---|---|---|
| Nano Banana models mix up to 14 reference images; Gemini 3.1 Flash Image (Nano Banana 2) up to 10 object and up to 4 character images; Gemini 3 Pro Image (Nano Banana Pro) up to 6 object and up to 5 character images | "Google AI for Developers, image generation documentation, last updated October 2026" | ai.google.dev/gemini-api/docs/image-generation | 2026-10-06 | primary | 2026-10-08 | 2026-10-08 | 58 |
| Gemini "Character consistency: 360 view": include previously generated images in subsequent prompts; add a pose reference for complex poses | same | same | 2026-10-06 | primary | 2026-10-08 | 2026-10-08 | 58 |
| Nano Banana 2 launch: character resemblance of up to five characters and fidelity of up to 14 objects "in a single workflow" (conflicts with the per-request docs row; publish both) | "Google blog, February 2026" | blog.google/innovation-and-ai/technology/ai/nano-banana-2/ | 2026-02-26 | primary, maker claim | 2026-10-08 | 2026-10-08 | 40, 58 |
| Nano Banana Pro launch: up to 14 images, consistency of up to 5 people | "Google blog, November 2025" | blog.google/innovation-and-ai/products/nano-banana-pro/ | 2025-11-20 | primary, maker claim | 2026-10-08 | 2026-10-08 | 40, 58 |
| Veo 3.1: up to 3 reference images of a person, character or product to preserve appearance; Veo 3.1 models only; duration must be 8 s with reference images; personGeneration allow_adult only for image-to-video, interpolation and reference images; image-to-video uses the input as the initial frame | "Google AI for Developers, Veo documentation, last updated September 2026" | ai.google.dev/gemini-api/docs/veo | 2026-09-17 | primary | 2026-10-08 | 2026-10-08 | 58 |
| Veo 3.1 developer post: up to 3 reference images; first and last frame transition | "Google for Developers blog, October 2025" | developers.googleblog.com/introducing-veo-3-1-and-new-creative-capabilities-in-the-gemini-api/ | 2025-10-15 | primary, maker claim | 2026-10-08 | 2026-10-08 | 40, 58 |
| GPT Image models take up to 16 images on the image edit endpoint | "OpenAI API reference, image edits, read October 2026" | developers.openai.com/api/reference/resources/images/methods/edit | undated, read 2026-10-08 | primary | 2026-10-08 | 2026-10-08 | 58 |
| gpt-image-2 processes every image input at high fidelity; input_fidelity not settable | "OpenAI image generation guide, read October 2026" | developers.openai.com/api/docs/guides/image-generation | undated, read 2026-10-08 | primary | 2026-10-08 | 2026-10-08 | 58 |
| FLUX.1 Kontext edits from one input_image (up to 20MB or 20 megapixels); maker says it excels at character consistency across multiple edits; maker recommends FLUX.2 (up to 10 references) for new projects | "Black Forest Labs documentation, FLUX.1 Kontext image editing, read October 2026" | docs.bfl.ai/kontext/kontext_image_editing | undated, read 2026-10-08 | primary, maker claim | 2026-10-08 | 2026-10-08 | 58 |
| Seedance 2.0: up to 9 images, 3 video clips, 3 audio clips; stated limitation on multi-subject consistency; real human portraits as subject references need identity verification or prior legal authorization | "ByteDance Seed, Seedance 2.0 launch post, February 2026" | seed.bytedance.com/en/blog/official-launch-of-seedance-2-0 | 2026-02-12 | primary, maker claim | 2026-10-08 | 2026-10-08 | 40, 58 |
| Seedance 2.5: up to 30 s; "Understands reference videos more precisely"; no reference count on the page | "ByteDance Seed, Seedance 2.5 page, read October 2026" | seed.bytedance.com/en/seedance2_5 | undated, read 2026-10-08 | primary for what it states | 2026-10-08 | 2026-10-08 | 58 |
| Seedream 4.5 preserves the reference image's facial features, lighting and color tone; no count | "ByteDance Seed, Seedream 4.5 page, read October 2026" | seed.bytedance.com/en/seedream4_5 | undated, read 2026-10-08 | primary, maker claim | 2026-10-08 | 2026-10-08 | 58 |
| Seedream 5.0 Pro multi-image fusion from several reference materials; no count | "ByteDance Seed, Seedream 5.0 Pro launch post, July 2026" | seed.bytedance.com/en/blog/beyond-generation-it-understands-design-introducing-seedream-5-0-pro | 2026-07-08 | primary, maker claim | 2026-10-08 | 2026-10-08 | 40, 58 |
| Grok Imagine reference to video: up to 7 reference images per request; maximum 720p; images do not lock the first frame | "xAI documentation, reference to video, last updated September 2026" | docs.x.ai/developers/model-capabilities/video/reference-to-video | 2026-09-28 | primary | 2026-10-08 | 2026-10-08 | 58 |
| Wan 3.0 all-in-one reference with multiple reference images, videos and audio (no count); last frame of one clip as first frame of the next for transitions | "Alibaba Cloud Model Studio documentation, last updated September 2026" | alibabacloud.com/help/en/model-studio/video-generate-edit-model/ | 2026-09-28 | primary | 2026-10-08 | 2026-10-08 | 58 |
| Wan 2.7 R2V: a reference used for a main character must contain only a single character; reference images plus videos up to 5 (Wan 2.7 only) | "Alibaba Cloud Model Studio, Wan reference-to-video API reference, last updated September 2026" | alibabacloud.com/help/en/model-studio/wan-video-to-video-api-reference | 2026-09-28 | primary | 2026-10-08 | 2026-10-08 | 58 |
| MiniMax H3 mixed references in one instruction ("have the character in Image 2 sing"); no count | "MiniMax blog, July 2026" | minimax.io/blog/minimax-h3 | 2026-07-31 | primary, maker claim | 2026-10-08 | 2026-10-08 | 40, 58 |

### Do not publish, added from brief 58

| Claim | Where it came from | Why it was cut | Logged |
|---|---|---|---|
| "Two to three reference images" or "one good reference is enough" as a general rule | Tool vendor guides | Not a maker figure; limits differ by engine | 2026-10-08 |
| Seed locking keeps the same face | A newsletter post on one free tool | One tool, not a general method, not an app feature | 2026-10-08 |
| Grok Imagine Image 2.0 "up to 5 reference images" in an app guide | docs.x.ai Imagine overview | True for the API; the app runs that engine as text to image only | 2026-10-08 |
| Wan 2.7 "references up to 5" applied to Wan 3.0 | Alibaba Wan 2.7 API reference | Different model; the app takes 10 pictures on Wan 3.0 | 2026-10-08 |
| OpenAI usage policy wording on likeness | openai.com/policies/usage-policies | 403 to fetch on 2026-10-08 | 2026-10-08 |
```

## Watch rows

```csv
2027-01-08,consistent-character-ai-images-video,"Quarterly recheck of every maker reference limit in the engine table (Nano Banana 2 and Pro, ChatGPT Image 2, FLUX.1 Kontext, Seedream, Veo 3.1, Seedance 2.0 and 2.5, Grok Imagine 1.5, Wan 3.0, MiniMax H3) and the app column against create-an-image.md and create-a-video.md","Maker pages listed in editorial/research/consistent-character-ai-images-video.md; src/content/help/",2026-10-08
2027-01-08,consistent-character-ai-images-video,"Nano Banana 2: the Gemini API docs now recommend Nano Banana 2.1 for new projects; check whether the app has moved to it and whether the per-request character and object counts changed","ai.google.dev/gemini-api/docs/image-generation",2026-10-08
```

## Live pages this piece contradicts

- `src/pages/resources/glossary.astro` line 410 (Seedance 2.0 entry): "Accepts
  up to 12 reference assets". The maker states up to 9 images, 3 video clips
  and 3 audio clips (ByteDance Seed launch post, 12 February 2026), and this
  piece prints that. Fix: replace the sentence with "Accepts up to 9 images, 3
  video clips and 3 audio clips as references, to keep characters and
  products consistent across shots." The brief 40 research already flagged
  the same line. French and Chinese dictionary entries for that sentence
  change with it.
- `src/pages/resources/glossary.astro` line 390 (Nano Banana 2 entry):
  "character consistency across up to five characters, and object fidelity
  across up to fourteen elements in a single image." The launch post says "in
  a single workflow", not in a single image, and Google's API documentation
  (updated 6 October 2026) allows up to 4 character images and 10 object
  images per request. Fix: "character resemblance for up to five characters
  and fidelity for up to fourteen objects across a workflow, with up to four
  character images and ten object images per request." French and Chinese
  entries change with it.
- No other live page contradicts the piece. `/app/engines` (Veo 3.1 Fast up
  to 3 reference pictures, Seedance 2.5 30 pictures, 10 clips, 2 sound files,
  frame or references) agrees with it.

## Closed in this run

- First-party figures used, each with the site page that already publishes
  it: per-engine app limits and the 1,536 pixel upload resize, from
  /help/create-an-image and /help/create-a-video; the Catalog skill, from
  /help/skills; billing of render inputs and failed runs, from
  /help/create-a-video and the positioning file. No amount anywhere.
- Spec rows published under deviation 7: none (not a spec page).
- Claims cut and which section is now thinner: maker reference counts for
  Seedance 2.5, Seedream, Wan 3.0 and MiniMax H3 (the pages state none); the
  table says "no count on the page read" and gives the app's limit instead.
- Briefs amended because the research or the live site proved them wrong:
  brief 58's own H1 (query not in it) and FAQ list (cost question added).
- Live articles corrected: none needed; the two glossary lines above are for
  the integrator, since this run may not edit `src/pages/*`.
- Rows added to `watch.csv`: the two above, for the integrator to merge.
- Settled fallbacks applied: 4 (length over target from tables, quotes and
  prompt blocks), 12 (no showcase clip; the page ships with its hero and the
  existing localized captures listed in the asset brief).
- Runbook substitutions: `schedule.csv` status not set by this run (shared
  file, integrator's job under the wave two drafter rules).
- Integration, 2026-10-08: both glossary lines fixed in English (`src/pages/resources/glossary.astro`): Seedance 2.0 "up to 9 images, 3 video clips and 3 audio clips as references", Nano Banana 2 "across a workflow, with up to four character images and ten object images per request". The glossary has no `output/` draft and no `dateModifiedISO`. The brief 40 ledger block, which had been left as an empty code fence, was filled from the roster research file during the merge.
- Ledger additions merged into `sources/verified-sources.md` (section "Added 2026-10-08 (ledger rows from brief 58, consistent-character-ai-images-video)") and watch rows merged into `watch.csv`, sorted by due date.

## SEO counts (after the quality pass)

| Field | Chars or words | Ceiling | Pass |
|---|---|---|---|
| Title | 47 | 52 | yes |
| Meta description | 147 | 152 | yes |
| Excerpt | 25 words | 25 words | yes |

## Publish

Step 4 belongs to the publish run, which also translates the page into French
and Chinese. Proposed French slug: `personnage-coherent-images-videos-ia`.

## Translation (three passes, /deep-translate)

- Dictionary id: `resources/how-to/consistent-character-ai-images-video`, French address `/fr/ressources/guides-pratiques/un-personnage-coherent-en-images-et-videos-ia` in `src/i18n/routes.ts`.
- Pass files: `.i18n-work/passes/fr/resources/how-to/consistent-character-ai-images-video/` and `.i18n-work/passes/zh/resources/how-to/consistent-character-ai-images-video/` (pass1, pass2 worked from pass 1 alone, pass3 native editor's finish).
- `npm run i18n:tx -- pending fr` and `pending zh`: nothing pending. `npm run i18n:local -- check`: every page translated in French and Chinese (222 pages). `npm run i18n:guard`: pass.

### French changes

Second round (leftovers after the English fixes):

[meta] pass1 -> pass3: « Garder une mascotte, un mannequin ou un présentateur identique en image et en vidéo IA : … contrôle. » -> « Garder une mascotte ou un présentateur identique en image et en vidéo IA : planche de référence, descriptif figé, limites par moteur, contrôle de dérive. » (153 characters) / why: pass 2 had dropped the per-engine limits; pass 3 restores all four promises within the 155 ceiling.
[lede] pass1 -> pass2: « chaque rendu est un nouveau tirage. Il tient quand les mêmes images et les mêmes mots entrent dans chaque génération » -> « chaque rendu est un tirage neuf. Il tient si les mêmes images et les mêmes mots nourrissent chaque génération, si… si… » / why: anaphoric « si » gives the three conditions a French rhythm; « nourrir » replaces the flat « entrer ».
[h2 answer] pass1 -> pass3: « Comment garder un personnage cohérent en images et en vidéo IA ? » -> « Image et vidéo IA : comment garder un personnage cohérent ? » / why: topic first, French heading habit.
[answer box] pass1 -> pass2: « Verrouillez le personnage avant de produire quoi que ce soit » -> « avant toute production » ; « contrôlez le visage, la tenue et les proportions » -> « contrôlez visage, tenue et proportions » / why: tighter nominal list.
[split] pass1 -> pass3: « Commencez par scinder le personnage en deux : ce qui ne bouge jamais, et ce que… » -> « Commencez par couper le personnage en deux : d’un côté ce qui ne bouge jamais, de l’autre ce que chaque nouvelle image a le droit de changer. » / why: « d’un côté… de l’autre » is the native pivot.
[table close] pass1 -> pass3: « Tout ce que vous laissez hors de la colonne à figer, le moteur le décide à votre place » -> « Ce que vous ne figez pas, le moteur le décide à votre place, et jamais deux fois de la même manière. » / why: the column metaphor was English scaffolding.
[why it drifts] pass1 -> pass2: « les mots laissent de la marge » -> « les mots laissent du jeu » ; « une coupe courte » -> « une coupe garçonne » ; « Remplacez un mot par un synonyme, changez l’ordre… » -> « Un synonyme, une phrase réordonnée, un détail de scène en plus, et le moteur relit… » / why: idiom, precise hairdressing term, elliptic French cadence.
[video] pass1 -> pass2: « La vidéo ajoute le temps… dispose de plusieurs secondes pour s’égarer, et un mouvement… lui en donne l’occasion » -> « La vidéo ajoute la durée… a plusieurs secondes pour s’en écarter, et il suffit d’un mouvement de caméra rapide ou d’un tour de tête » / why: « il suffit de » is the natural turn.
[fix] pass1 -> pass3: « Le remède est donc mécanique. Le moteur a besoin d’images… » -> « La parade est donc mécanique : des images à regarder pour le moteur et, à chaque fois, les mêmes mots. Puis une personne qui vérifie ce qui sort. » / why: three short English sentences merged into one nominal French period.
[step 1] pass1 -> pass2: « un fichier chacune » -> « chacune dans son fichier » ; « rien dans les mains » -> « mains vides » ; « redimensionne… à 1 536 pixels » -> « ramène chaque image importée à 1 536 pixels » / why: denser, native verbs.
[step 2] pass1 -> pass2: « Collez-le tel quel… Ne le reformulez jamais, et ne le modifiez pas » -> « Collez-le sans changement… Ne le paraphrasez jamais, et n’y touchez pas en cours de projet » / why: idiomatic « n’y touchez pas ».
[step 3] pass1 -> pass3: « Encadrez la réécriture » -> « Cadrez la réécriture » ; « sert précisément à garder… ; ajoutez-la pour que chaque réécriture s’y conforme » -> « existe précisément pour qu’une même personne… reste reconnaissable ; ajoutez-la, et chaque réécriture s’y pliera » / why: app labels kept (Améliorer avec l’IA, Annuler, Catalogue, « Même personnage d’une image à l’autre », When:), sentence turned verbal.
[step 4] pass1 -> pass2: « Rangez l’ensemble… Sinon, quelqu’un ira chercher dans l’Historique » -> « Classez le tout… Faute de quoi quelqu’un repêchera dans l’Historique le visage du mois dernier » / why: written register, vivid verb.
[steps 6 to 8] pass1 -> pass2/3: « avant qu’aucune vidéo n’existe » -> « avant de produire la moindre vidéo » ; « Sur les moteurs qui l’acceptent, ajoutez… » -> « Si le moteur le permet, ajoutez… » ; « Passez par les références pour les plans qui ne peuvent pas partir d’une image fixe » -> « Recourez aux références pour les plans qu’aucune image fixe ne peut ouvrir » / why: English relative-clause shapes removed; studio labels (Modifier une image, Format, Ce que le rendu reçoit, Première image, Références) match the app.
[prompt example] pass1 -> pass2: « une femme d’une petite trentaine » -> « une femme au début de la trentaine » ; « Mara se tient derrière le comptoir… et tend la main » -> « à huit heures du matin, Mara, derrière le comptoir d’une boulangerie, tend la main » ; « cadrage à la taille » -> « plan taille » / why: shooting-script vocabulary a French director would write.
[engine table intro] pass1 -> pass3: « La documentation des concepteurs… face à ce que… » -> « Ce que disent les concepteurs dans leur documentation… » ; « C’est le tableau à garder sous la main » -> « C’est ce tableau qu’il faut garder sous la main » / why: verbless English opener rebuilt; emphatic French cleft.
[engine cells] pass1 -> pass2: « sur le point de terminaison d’édition » -> « via l’API d’édition » ; « le clip doit durer 8 secondes » -> « clip de 8 secondes obligatoire » ; « l’application les utilise à partir du texte seul » -> « l’application ne les pilote qu’au texte » / why: technical calque replaced, cells compressed.
[evidence] pass1 -> pass2: « Le billet de lancement de Nano Banana 2, publié par Google en février 2026, parlait de… » -> « En février 2026, le billet de Google annonçant Nano Banana 2 évoquait… : un décompte sur plusieurs étapes, non sur une seule requête » / why: date first, colon for the explanation.
[limits] pass1 -> pass3: « Une limite plus haute offre de la marge, pas un objectif » -> « Une limite élevée donne de la marge ; ce n’est pas un objectif » ; « approfondissent moteur par moteur » -> « entrent dans le détail, moteur par moteur » / why: fixed the mismatched apposition.
[method table] pass1 -> pass3: « Dérive en fin de clip : limitez les mouvements » -> « mouvements réduits » ; « une personne qui s’assoit » -> « un mouvement pour s’asseoir » ; « Rien de récurrent » -> « Aucun élément récurrent » / why: table cells as noun phrases.
[drift check] pass1 -> pass2: « Que faut-il vérifier pour repérer une dérive du personnage ? » -> « Dérive du personnage : que vérifier ? » ; « faites pause » -> « mettez en pause » / why: heading form, correct collocation.
[fix rule] pass1 -> pass3: « Ne retouchez pas un visage à la main… en espérant que le clip suivant s’y conforme » -> « Ne rafistolez pas un visage à la main… en espérant que le clip suivant s’y accorde » / why: the verb carries the disapproval the English « patch » implies.
[real person] pass1 -> pass3: « Uniquement avec son consentement écrit, pour les usages que vous précisez » -> « Seulement avec son consentement écrit, pour des usages nommément désignés » ; « produits à partir de lui… dans des contextes que personne n’avait prévus à la première prise de vue » -> « produits à partir d’eux… que nul n’envisageait au moment de la première prise de vue » / why: legal-adjacent register.
[FAQ] pass1 -> pass2/3: « Combien d’images de référence utiliser pour… » -> « Combien d’images de référence pour un personnage cohérent ? » ; « Les images de référence rendent-elles un rendu plus cher ? » -> « font-elles grimper le prix d’un rendu ? » ; « traitez-la comme le master » -> « une image fixe phare, qui servira de master à toute la suite » / why: removed the « rendu… rendu » echo and the infinitive tail.

### Chinese changes

Second round (leftovers after the English fixes):

[title] pass1 -> pass3: 如何让 AI 图片中的角色保持一致 -> AI 图片中如何保持角色一致 / why: shorter, the search phrase 保持角色一致 kept whole
[meta] pass1 -> pass2: 让……保持一致：……和漂移检查。 -> 让……始终如一：参考图集、固定描述、各引擎参考图上限、漂移检查。 / why: avoids repeating 一致 from the title, list rhythm with 顿号
[lede] pass1 -> pass3: 每次生成都是一次新的抽取……并且在任何内容发布之前要有人检查面部 -> 每次生成都是重新抽签……发布前还要有人核对面部 / why: 重新抽签 is the idiom Chinese AI writers use; English "before anything ships" compressed
[answer] pass1 -> pass3: 输入给厂商有文档说明参考图功能的引擎的参考图 -> 再把参考图交给厂商文档明确支持此项功能的引擎 / why: pass1 stacked three 的 in one noun chain
[split] pass1 -> pass2: 首先把角色分成两部分 -> 第一步，把角色拆成两半：哪些永远不变，哪些允许每张新图改动 / why: verbal, parallel clauses
[why it drifts] pass1 -> pass2: 因为文字留有余地……引擎就会重新解读整段描述 -> 因为文字有弹性……引擎就会把整段描述重新理解一遍 / why: native image, 把字句 for the action
[video] pass1 -> pass3: 视频又增加了时间……连厂商自己也这么说 -> 视频还多了时间这一维。一段视频即便开场时面孔无误……厂商自己也不讳言 / why: concessive 即便 replaces the English relative clause; 不讳言 is the written register
[mechanical] pass1 -> pass3: 因此，解决办法是机械性的 -> 所以解法很朴素，全靠机制 / why: 机械性的 read as a calque with a negative ring
[step 1] pass1 -> pass3: 九宫格中的一张脸到达时会非常小 -> 九宫格里的一张脸传进去就只剩一点点 / why: "arrives tiny" calque removed; pass2's 拍五张图 corrected, the pictures are rendered, not shot
[step 3] pass1 -> pass2: 目录技能“跨图角色一致”的作用，就是…… -> 技能目录里的“跨图角色一致”技能，专门用来让同一个人或吉祥物在系列作品中始终认得出 / why: glossary term 技能目录, app label kept exact
[step 6] pass1 -> pass2: 在任何视频存在之前……会继承它的缺陷 -> 还没做任何视频之前，就把静帧提交审核……会把它的毛病原样继承下来 / why: "before any video exists" rebuilt as a Chinese time clause
[step 8] pass1 -> pass3: 对无法从静帧开始的镜头使用参考素材 / 表单要求您做出选择 -> 无法从静帧起步的镜头，改用参考素材 / 表单只允许二选一 / why: topic first, the constraint stated plainly
[prompt] pass1 -> pass3: 别在右耳后面 / 半带微笑 / 缓慢推进，不剪切 -> 右侧头发掖在耳后 / 嘴角微扬 / 镜头缓慢推近，一镜到底 / why: how a Chinese prompt writer and a DP would phrase it
[makers] pass1 -> pass3: 在文档中记录了这种习惯 -> 好几家厂商的文档里都有这种写法 / why: "document the habit" was a calque; pass2's 提倡 overstated it
[table header] pass1 -> pass2: 厂商文档怎么说 / 应用接收什么 -> 厂商文档的说法 / 应用的接收量 / why: table headers as nouns, not spoken questions
[Kling row] pass1 -> pass2: 不涉及：应用只用文字运行它们 -> 不适用：应用只用文字驱动这些引擎 / why: 驱动 is the trade verb, explicit object
[limits] pass1 -> pass2: 更高的上限意味着空间，而不是目标 -> 上限高，只说明余地大，并不意味着要用满 / why: English antithesis rebuilt as a Chinese explanation
[method] pass1 -> pass3: 首帧就更胜一筹……主要是角色出现在没有已批准静帧的地方的镜头 -> 首帧就占上风……主要是那些角色出现在新场景、手头又没有已批准静帧的镜头 / why: removes the triple 的
[method table] pass1 -> pass3: 根据文字创造角色 / 任何不会重复出现的内容 -> 仅凭文字生成角色 / 不会再次出现的内容 / why: tighter cells; pass2's 凭……凭空 repetition removed
[chaining] pass1 -> pass2: 阿里巴巴的 Model Studio 文档 -> 阿里云百炼（Model Studio）的文档 / why: the product's Chinese name; 无缝衔接 instead of 无缝过渡
[drift table] pass1 -> pass2: 眉毛变弯 / 标志跳动 / 相对道具的身高发生变化 -> 眉形挑起 / 标志位置乱跳 / 与道具相比身高忽高忽低 / why: concrete, visual Chinese
[fix] pass1 -> pass2: 然后希望下一段视频能与之一致 -> 再指望下一段视频与之吻合 / why: 指望 carries the English "hope" with the right irony
[real person] pass1 -> pass2: 只要文件存在就一直如此，而且会出现在……没有人计划过的地方 -> 只要文件还在，这种情形就会延续，出现的地方也可能是拍第一张照片时谁都没想到的 / why: English clause order unwound
[FAQ drift] pass1 -> pass2: 并通过修改输入而不是修饰某一个输出来修正漂移 -> 出现漂移，就改输入，不要去修某一张成品 / why: the long 通过……来 frame replaced by a direct instruction
[app labels] 用 AI 优化, 撤销, 编辑图片, 画幅, 本次生成的输入素材, 首帧图片, 尾帧, 参考素材, 提交审核, 素材库, 历史记录, 图生视频, 参考生视频, from the app's zh.json

## Publish

- Page created: `src/pages/resources/how-to/consistent-character-ai-images-video.astro` (publish-draft.mjs, then `--update` for FAQ schema and internal links).
- `src/data/howtos.ts` entry added at the head; insight placements checked (category claimed by at least one layer).
- Build: `npm run build` passed (content:todo, i18n guard, all routes prerendered).
- `npm run check`: 0 errors, 0 warnings.
- Em dash (U+2014) in staged files: zero.
- Commit and push: `feat(editorial): publish wave two, fifteen pieces of 8 October in English, French and Chinese` on main.
- Resend email sent: yes, through `editorial/scripts/notify-publish.mjs` after the push.
