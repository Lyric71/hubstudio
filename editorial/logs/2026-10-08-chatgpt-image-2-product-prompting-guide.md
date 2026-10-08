# Run log: 2026-10-08 (wave two, brief 60)

| Field | Value |
|---|---|
| Brief | 60 (`editorial/scripts/wave2/60-chatgpt-image-2-product-prompting-guide.mjs`) |
| Slug | chatgpt-image-2-product-prompting-guide |
| Research file | research/chatgpt-image-2-product-prompting-guide.md |
| Output | output/chatgpt-image-2-product-prompting-guide.md |
| Body word count | 3,030 with tables and the three prompt blocks (checker); 2,248 prose including prompt blocks; 1,878 prose without prompt blocks and tables (the brief's 1,800 target) |
| Body char count | 17,572 |
| Status reached | image_ready (steps 0 to 3 done; the schedule row is the integrator's to set) |
| Model used at every step | Claude Opus 5.5 for research, drafting and the quality loop; gpt-image-2 at high quality for the test runs and the hero |

## Research gate

| Gate | Done | Note |
|---|---|---|
| R1 claims mapped before looking anything up | yes | Sizes, quality, references, masks, transparency, text, limits, provenance, app facts |
| R2 SERP mapped, four phrasings minimum | yes | Four queries, top results recorded in the research file |
| R3 primary sources for every number | yes | OpenAI's own guide, model page, API reference, prompting guide, provenance guide; the hubStudio help center for app facts; six logged runs for behavior |
| R4 Chinese-language web searched first | n/a | No China claim in the piece; recorded in the research file |
| R5 every figure interrogated (date, sample, method, who paid) | yes | OpenAI rows marked maker documentation; own runs marked own observation with sample size |
| R6 triangulated, conflicts published as ranges | yes | Documentation against runs: transparency (preview vs refused) and mask (guidance vs pixel change) published side by side |
| R7 research file written before drafting | yes | |
| R8 reconciled after drafting | yes | Every number and quote traced; check 2 by string match at 07:33 UTC |

**Gap statement, one sentence:** the ranking pages are prompt lists that
restate the engine's specs secondhand, often wrongly, and none tells a product
team what OpenAI itself documents and leaves unfinished (transparency in
preview, 4K experimental, masks as guidance), backed by logged runs and a QA
list.

**Research time spent:** about 80 minutes, runs included.

- Figures reused from the ledger: the "up to 2 minutes" latency line (brief 39 row), re-read at source today.
- Claims cut because they could not be sourced: leaderboard rank (ledger row has no check 2); the 86-second run timing (one run is not a measure).
- Conflicts published as a range rather than a single figure: transparency (OpenAI "preview" against the API refusal); mask behavior (guidance against measured pixel change).
- Captures saved to `research/<slug>/`: none. Test outputs stay in the session scratch folder under the brief's rule; the runs are logged in the research file.

### Test runs (detail in the research file)

Six tests on 2026-10-08, gpt-image-2, high quality: packshot from text,
lifestyle from text, text on pack, reference edit, transparent background
(two refused requests, `gpt-image-2` and `gpt-image-2-2026-04-21`), masked
edit. Runs 1 to 3 through `npm run gen` (`scripts/generate-image.mjs`), run 4
through `scripts/edit-image.mjs`, runs 5, 5b and 6 through a scratch harness
calling the same API directly, because the repo CLIs expose neither
`background` nor `mask`.

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

- Iteration 1: full draft from the research file, H1 rewritten from the working H1 so it carries the primary query.
- Iteration 2, ten weaknesses: (1) the working H1 lacked "prompts"; (2) the mask row said PNG, OpenAI says only "alpha channel"; (3) the photorealistic tip paraphrased a quote loosely; (4) "earlier models" quoted in lowercase, the source heading is "Earlier GPT Image models"; (5) "the label holds" generalized one run; (6) the run 3 prompt carried the British "grey"; (7) the Explore line in the asset brief pointed at a site URL for an app screen; (8) the hero slot still held a stand-in string; (9) no word on quality as a dial; (10) "came back" repeated eight times.
- Iteration 3: fixed 1 to 8; 9 and 10 carried into the quality loop, where they were fixed.
- Iteration 4: production review: every app fact checked against `create-an-image.md` and `skills.md`; the engine table checked against the help center's own notes; no amount, no competitor.
- Iteration 5: removed a stacked triad in the intro answer, cut "the useful part" phrasing.
- Iteration 6: zero em dashes; four blockquotes, each with Source and year.
- Iteration 7: ran as the cadence variant, not the planted-error variant. Broke the parallel bold-label "habits" list into prose, let the transparency paragraph run long against one-line answers, added one parenthetical aside. No deliberate errors.
- Iteration 8: source check 2 (all OpenAI URLs re-fetched, 23 quoted strings confirmed); R8 reconciliation written into the research file.
- Iteration 9: title 42, meta 148, excerpt 25 words.
- Iteration 10: cut two neat closing lines ("The engine has no opinion on that", "not after").
- Iteration 11: varied "came back" down to three.
- Iteration 12: three tables aligned, prompt blocks fenced like the sibling how-to drafts.
- Iteration 13: five visual concepts (a red grease-pencil circle on a printed label proof beside the real bottle; a contact sheet of six near-identical bottles with one off; a light table with a cutout and a scissor; a hand holding the real bottle beside a monitor-free print; a carton with blank side panel under a loupe). Chosen: the red circle on the proof, because the piece's point is that the human check sits between the prompt and the shelf.

## Quality pass (content-quality-us)

```
[x] Iteration 1  : newsroom-style draft
[x] Iteration 2  : 10 weaknesses identified
[x] Iteration 3  : rewrite fixing the weaknesses
[x] Iteration 4  : production-ready review
[x] Iteration 5  : AI-undetectable pass
[x] Iteration 6  : em dash cleanup, blockquote formatting
[x] Iteration 7  : human touch pass
[x] Iteration 8  : SEO title, meta, excerpt
[x] Iteration 9  : pause, second AI-undetectable pass
[x] Iteration 10 : second human touch pass
[x] Iteration 11 : hostile reader review (10 problems)
[x] Iteration 12 : structural ratio audit (50/50 split)
[x] Iteration 13 : AI marker hunt
[x] Iteration 14 : read-aloud and reader empathy
[x] Iteration 15 : structural sniff test
[x] Iteration 16 : pacing and flow
[x] Iteration 17 : SEO and structural integrity check
[x] Iteration 18 : self-created pattern check
[x] Final        : fold the SEO content into the markdown
```

Versions kept in the session scratch folder (`w60/versions/q-v1-start.md`,
`q-v2-final.md`).

- 1: newsroom register confirmed on the createarticle output; no change.
- 2, ten weaknesses: "That second result" was ambiguous; no word on quality as a cost and speed dial (the high-intent pricing question); "three perfect front lines" overstated; the bold-label habits list made three rigid lists in a row; the hands bullet was a triad; two well-turned closers; the lesson paragraph overclaimed from one run; "came back" tic; the excerpt was 21 words where the loop asks 25; the specs intro ended on "the useful part".
- 3: all ten fixed (mask sentence rewritten; quality paragraph added from OpenAI's draft advice and the help center's per-option price line, no amount; "exact"; habits to prose; hands bullet rewritten; closers cut; "In our run, the label survived"; repetitions varied; excerpt to 25 words; specs intro rewritten).
- 4: production ready; nothing missing against the brief's must-include list.
- 5 and 9: hunted AI cadence; no "seamless", "leverage", "robust", "delve", "unlock", "elevate".
- 6 and 15: zero em dashes; four blockquotes in one format (claim lines, then Source with date and method); straight quotes kept to match the house Markdown, the publish step sets typography.
- 7 and 10: contractions kept; one parenthetical aside, not repeated.
- 8 and 17: title 42 (house 52), meta 148 (house 152), excerpt 25 words; one H1, ten H2, H3 only under examples and FAQ; no anchor links; US spelling (the checker found none British).
- 11, hostile reader: subheads are questions buyers type; credibility anchors are dated OpenAI quotes and the logged runs; freshness cue is the October 8, 2026 read date in the intro and the Reviewed line in the schema block; pricing question answered without an amount.
- 12: rigid bold-label passages are two (app steps, QA list), against eight prose sections: under half.
- 13: broke three triads (intro answer, hands bullet, text FAQ).
- 14: cut the performing closers; loosened the lesson paragraph.
- 16: one transition added (the quality paragraph between the formula and the examples); nothing else padded.
- 18: no humanizer repeated; "honestly", "frankly" absent.
- Final: SEO fields are in the frontmatter. No field needed trimming back to a house ceiling.

## Image

- Prompt used (verbatim from the feature-image block): the IMAGE PROMPT paragraph in the output file, 1,761 characters, beginning "Editorial documentary photograph on a worn wooden worktable in a small, lived-in product studio in Shanghai, China, late afternoon."
- Confirmed the prompt names no real person: yes (a film stock is named, no photographer).
- Attempts and what was wrong with rejected ones: one attempt, kept.
- AI-tells checklist run against the final frame: hand and pencil grip anatomically plausible, one window light from the left, no readable text or logos, no melted objects, shelf boxes irregular, coffee ring and table wear present, no face shown, laptop screen dark. Negative space on the left for type.
- Saved to: `public/Images/howto-chatgpt-image-2-product-prompting-guide.webp`, 1536 by 1024, webp quality 78, 75 KB (source 1536 wide, no enlargement).

## House rule checks

| Check | Result |
|---|---|
| Competitor named, described or alluded to | zero (OpenAI, Google, Black Forest Labs and ByteDance appear only as makers of engines offered in the app) |
| `$` occurrences, each one a category range with a date | zero |
| Em dash occurrences | zero (output, research file, brief module and this log) |
| Deliberate typos or planted errors | zero |
| Summary or conclusion section | none |
| Decorative ordinal in a repeated titled block | none |
| Stray Han characters outside a term gloss | none |
| Statistics in blockquotes with source, date and method | four blockquotes, all sourced and dated |

`node editorial/scripts/check-draft.mjs editorial/output/chatgpt-image-2-product-prompting-guide.md`: all hard checks passed.

## Sources

- New figures added to the ledger, with both check dates: see "Ledger additions" below (the integrator merges them; this run does not edit the ledger).
- Rows added to the do-not-publish log: see the research file, "Do not publish".

## Ledger additions

Rows for `editorial/sources/verified-sources.md`, in the model-documentation
table's column order (Figure | Attribution to use | Source URL | Date |
Confidence | Check 1 | Check 2 | Used in):

| gpt-image-2 sizes: edges multiples of 16 px, max edge 3,840 px, long to short ratio up to 3:1, 655,360 to 8,294,400 total pixels; square typically fastest | "OpenAI image generation guide, read October 8, 2026, the maker's API documentation" | developers.openai.com/api/docs/guides/image-generation | undated page, read 2026-10-08 | primary | 2026-10-08 | 2026-10-08 | 60 |
| Above 2560 by 1440 is experimental; "results can be more variable above this size" | "OpenAI image generation guide and GPT Image prompting guide, read October 8, 2026" | developers.openai.com/api/docs/guides/image-generation; developers.openai.com/cookbook/examples/multimodal/image-gen-models-prompting-guide | read 2026-10-08 | primary | 2026-10-08 | 2026-10-08 | 60 |
| gpt-image-2 quality low, medium, high, auto; xhigh and max only on gpt-image-2.5-sunburst and -flare | "OpenAI image generation guide and API reference, read October 8, 2026" | developers.openai.com/api/docs/guides/image-generation; developers.openai.com/api/reference/resources/images | read 2026-10-08 | primary | 2026-10-08 | 2026-10-08 | 60 |
| Edits endpoint up to 16 input images for GPT image models; n between 1 and 10; prompt up to 32,000 characters | "OpenAI Images API reference, read October 8, 2026" | developers.openai.com/api/reference/resources/images | read 2026-10-08 | primary | 2026-10-08 | 2026-10-08 | 60 |
| gpt-image-2 reads every image input at high fidelity; input_fidelity cannot be changed | "OpenAI image generation guide, read October 8, 2026" | developers.openai.com/api/docs/guides/image-generation | read 2026-10-08 | primary | 2026-10-08 | 2026-10-08 | 60 |
| Transparent background on gpt-image-2 is in preview, PNG or WebP only | "OpenAI API reference and prompting guide, read October 8, 2026" | developers.openai.com/api/reference/resources/images; prompting guide URL above | read 2026-10-08 | primary | 2026-10-08 | 2026-10-08 | 60 |
| The Images API refused background transparent on gpt-image-2 and gpt-image-2-2026-04-21: "Transparent background is not supported for this model." | "hubStudio test runs, two requests to the Images API, October 8, 2026" | api.openai.com/v1/images/generations (own requests) | 2026-10-08 | primary, own observation | 2026-10-08 | 2026-10-08 | 60 |
| Masking is "entirely prompt-based"; the model "may not follow its exact shape with complete precision"; mask applies to the first image; same format and size, under 50MB, alpha channel required | "OpenAI image generation guide, read October 8, 2026" | developers.openai.com/api/docs/guides/image-generation | read 2026-10-08 | primary | 2026-10-08 | 2026-10-08 | 60 |
| Masked edit: 2.4 percent of pixels outside the mask moved by more than 20 levels out of 255; the new object ran past the mask edge | "hubStudio test run, one gpt-image-2 edit at high quality, October 8, 2026, pixel comparison of input and output" | own run (scratch) | 2026-10-08 | primary, own observation, sample of one | 2026-10-08 | 2026-10-08 | 60 |
| Text on pack: three quoted front lines exact; two of nine quoted ingredient names misspelled in small type | "hubStudio test run, one gpt-image-2 generation at high quality, October 8, 2026" | own run (scratch) | 2026-10-08 | primary, own observation, sample of one | 2026-10-08 | 2026-10-08 | 60 |
| GPT Image limitations: latency up to 2 minutes; text placement and clarity; consistency of recurring characters or brand elements; composition control | "OpenAI image generation guide, Limitations, read October 8, 2026, the maker's own list" | developers.openai.com/api/docs/guides/image-generation | read 2026-10-08 | primary | 2026-10-08 | 2026-10-08 | 39, 60 |
| gpt-image-2 filed under "Earlier GPT Image models"; new integrations pointed to GPT Image 2.5; Sunburst "where editing precision matters most", Flare "fast, high-quality everyday image generation" | "OpenAI image generation guide, read October 8, 2026" | developers.openai.com/api/docs/guides/image-generation | read 2026-10-08 | primary | 2026-10-08 | 2026-10-08 | 60 |
| gpt-image-2 output files carry a signed C2PA manifest (PNG caBX chunk, action c2pa.created, software agent gpt-image-2, digital source type trainedAlgorithmicMedia, claim generator "OpenAI Media Service API") | "hubStudio test runs, five returned files, October 8, 2026" | own runs (scratch) | 2026-10-08 | primary, own observation | 2026-10-08 | 2026-10-08 | 60 |
| "Editing, converting, or sharing a file can remove its metadata." | "OpenAI content provenance guide, read October 8, 2026" | developers.openai.com/api/docs/guides/content-provenance | read 2026-10-08 | primary | 2026-10-08 | 2026-10-08 | 60 |

Do-not-publish rows for the same file (What | Where it came from | Why not | Date):

| Third-party restatements of gpt-image-2 specs ("up to 10 reference images", "up to 3840x3840", "up to 2K", "pixel-perfect text") | Reseller and tool blogs ranking for "gpt-image-2 prompt guide" | Contradicted by OpenAI's own documentation | 2026-10-08 |
| Transparency on ChatGPT Image 2 inside the app | Help center Background row (all ChatGPT Image engines together) | Not tested in the app; the API refused it for gpt-image-2 the same day | 2026-10-08 |

## Watch rows

```
2027-01-08,chatgpt-image-2-product-prompting-guide,"Quarterly recheck of the spec table, the FAQ and the engine table against OpenAI's image generation guide, the gpt-image-2 model page, the Images API reference and the GPT Image prompting guide: sizes and the 2560x1440 experimental line, quality options, 16 input images, n 1 to 10, 32,000-character prompt, mask rules, the preview label on transparency, and whether gpt-image-2 is still listed or deprecated. Rerun the transparent-background request on gpt-image-2; if it now succeeds, rewrite the intro, the test table row, the transparency blockquote, the FAQ answer and the QA bullet, and move the page's last updated date. Recheck the help center's ChatGPT Image rows and the 2.5 engine names.",developers.openai.com/api/docs/guides/image-generation,2026-10-08
```

## Live pages this piece contradicts

None of the published pages is wrong as written, but three surfaces group
the ChatGPT Image engines together in a way this piece's runs make imprecise
for ChatGPT Image 2 alone. Stated here as facts for the integrator, with the
fix:

- `src/content/help/create-an-image.md`, the options table. **Background**: "On the ChatGPT Image engines: Auto, Opaque or Transparent." The Images API refused `background: transparent` on gpt-image-2 on 2026-10-08 ("Transparent background is not supported for this model"); OpenAI documents it as preview for that model and as supported on the 2.5 models. **Mask**: "Everything else stays as it is." OpenAI documents the mask as guidance, and run 6 moved pixels outside the mask. The help center is synced from the app repo and is not edited by hand here; the fix belongs in the app repo's help source: scope Transparent to ChatGPT Image 2.5 Flare and Sunburst (or confirm the app hides it on Image 2), and say "the engine is asked to keep everything else as it is; check the edges".
- `src/pages/app/engines.astro` line 245 to 247 ("They're also the only ones here with a transparent background...") and `src/pages/app/create.astro` line 266: true of the ChatGPT Image engines as a group through the 2.5 models; if the app repo confirms Transparent fails on ChatGPT Image 2, name "the ChatGPT Image 2.5 engines" for the transparent background, in English, French and Chinese.
- `editorial/output/ai-white-background-packshot.md` (draft 51, unpublished, written in parallel today): the step list says "Pick a ChatGPT Image engine ... Pick Transparent with PNG" and its FAQ says "Render with a transparent background on a ChatGPT Image engine". Name ChatGPT Image 2.5 Flare or Sunburst for the transparent option before it publishes, so the two guides agree.

## Closed in this run

- First-party figures used, each with the site page that already publishes it: none; app facts come from the help center (`create-an-image.md`, `skills.md`).
- Spec rows published under deviation 7: none (OpenAI's own documentation is readable and primary).
- Claims cut and which section is now thinner: leaderboard rank (the engine section carries no ranking; the 2026 model roster is referenced instead); run timing.
- Briefs amended because the research or the live site proved them wrong: the brief module itself records the H1 change in `notes`; no other brief repeats the transparency claim except draft 51, listed above.
- Live articles corrected because this piece contradicted them: none edited here (shared files are off limits to this drafter); the items are listed above for the integrator.
- Rows added to `watch.csv`: one, above, for the integrator to merge.
- Settled fallbacks applied: 12 (no showcase clip; the guide ships with the hero and the existing localized captures imageStudio and explore).
- Runbook substitutions: `generate-image.mjs` and `edit-image.mjs` expose neither `background` nor `mask`, so runs 5, 5b and 6 used a scratch harness calling the same OpenAI Images API directly, from the editorial key, outputs in the scratch folder. The hero was generated with the generate-image-openai skill's own script. `check-draft.mjs` keys on the insight image path; the howto path is recorded in the feature-image block, as in the sibling how-to drafts.
- Integration, 2026-10-08: the FEATURE IMAGE block's "Checker" line quoting the insight path was removed (`check-draft.mjs` now accepts the howto path); all hard checks pass.
- Integration, 2026-10-08: draft 51 (ai-white-background-packshot) now names ChatGPT Image 2.5 Flare or Sunburst for a transparent background in its step list and FAQ, so the two guides agree. The transparency ledger rows carry 51 in "Used in".
- Ledger additions merged into `sources/verified-sources.md` (section "Added 2026-10-08 (ledger rows from brief 60, chatgpt-image-2-product-prompting-guide)") and watch rows merged into `watch.csv`, sorted by due date.

## SEO counts (after the quality pass)

| Field | Chars or words | Ceiling | Pass |
|---|---|---|---|
| Title | 42 | 52 | yes |
| Meta description | 148 | 152 | yes |
| Excerpt | 25 words | 25 words | yes |

## Publish (fill in when step 4 runs)

- Article page created:
- `src/data/insights.ts` entry added:
- Build:
- `npm run check`:
- Commit and push:
- Resend email sent:

## Translation (three passes, /deep-translate)

- Dictionary id: `resources/how-to/chatgpt-image-2-product-prompting-guide`, French address `/fr/ressources/guides-pratiques/chatgpt-image-2-guide-des-prompts-produit` in `src/i18n/routes.ts`.
- Pass files: `.i18n-work/passes/fr/resources/how-to/chatgpt-image-2-product-prompting-guide/` and `.i18n-work/passes/zh/resources/how-to/chatgpt-image-2-product-prompting-guide/` (pass1, pass2 worked from pass 1 alone, pass3 native editor's finish).
- `npm run i18n:tx -- pending fr` and `pending zh`: nothing pending. `npm run i18n:local -- check`: every page translated in French and Chinese (222 pages). `npm run i18n:guard`: pass.

### French changes

First round:

[title] pass1 -> pass3: « ChatGPT Image 2 : prompts pour visuels produit » -> « ChatGPT Image 2 : le guide des prompts produit » / why: matches the native slug, reads as a headline, 57 characters with the brand.
[meta] pass1 -> pass3: « Les spécifications d’OpenAI pour ChatGPT Image 2, une formule… » -> « ChatGPT Image 2 selon OpenAI, une formule de prompt…, six essais commentés et une grille de contrôle » / why: front-loads the engine name, 154 characters.
[intro] pass1 -> pass3: « Il trébuche encore… régénère l’image entière » -> « Il bute encore, en revanche, … recalcule toute l’image » / why: stronger verbs, the contrast marked the French way.
[answer box] pass1 -> pass2: « la destination de l’image… ce qui ne doit pas bouger » -> « l’usage de l’image… ce qui doit rester intact » / why: shot-brief vocabulary of a studio, not a calque.
[sources] pass1 -> pass3: « Lorsque les deux divergent, vous lirez l’une et l’autre. » -> « Là où elles divergent, nous donnons les deux versions. » / why: English skeleton removed.
[specs intro] pass1 -> pass2: « c’est l’argument du concepteur lui-même » -> « une promesse qui n’engage que son concepteur » / why: native press idiom for "the maker's own claim".
[specs table] pass1 -> pass2: « Plage fiable / Au-delà de 2 560 sur 1 440, tout est expérimental » -> « Zone fiable / « Expérimental » au-delà de 2 560 sur 1 440 » / why: table cells shortened, quote kept on the word OpenAI uses.
[two rows] pass1 -> pass3: « Deux lignes de ce tableau changent la façon de travailler » -> « Deux lignes de ce tableau changent la donne » / why: idiom; the long "si bien que" chain split into two sentences.
[limits] pass1 -> pass2: « Le texte détermine si l’étiquette tient. La cohérence, si… » -> « Le texte : l’étiquette résiste-t-elle ? La cohérence : … montre-t-il encore le même flacon ? » / why: rhythm, questions instead of an English parallel structure.
[test table] pass1 -> pass2: « caractères à empattements… a changé de forme » -> « police à empattements… a changé de silhouette »; « Refusé » -> « Refus » / why: trade vocabulary, noun style in cells.
[mask] pass1 -> pass3: « Ce résultat est conforme à ce qu’annonce le guide » -> « Rien de surprenant : le guide d’OpenAI le laissait prévoir » / why: journalistic lead-in instead of an administrative one.
[lesson] pass1 -> pass2: parenthesis dropped; « l’étiquette a traversé intacte le changement de décor » / why: French avoids a long closing parenthesis.
[formula] pass1 kept: labelled lines « Usage / Scène / Sujet / Texte / Lumière et prise de vue / Contraintes / À conserver »; a period added before « À conserver » since the source has no line break there.
[habits] pass1 -> pass2: « Quelques habitudes… pèsent plus lourd » -> « Certains réflexes… comptent plus qu’il n’y paraît »; « est difficile à déboguer » -> « impossible de savoir d’où vient une dérive » / why: no anglicism, native conclusion.
[quality] pass1 -> pass3: « avant que vous ne la choisissiez » -> « avant même d’être sélectionnée » / why: lighter, no expletive "ne" debate.
[prompt packshot] pass1 -> pass2: written as a French creative director's shot brief: « linéale géométrique fine, capitales, centré ; dessous… en petit corps », « à reproduire exactement, mot pour mot » / why: typographer's terms (linéale, corps), telegraphic brief style. On-pack strings (ORREN, NIGHT SERUM 50 ML, INCI list) stay verbatim: they are what was tested.
[prompt lifestyle] pass1 -> pass2: « Placez exactement le flacon » -> « Posez le flacon de l’image 1, à l’identique » / why: set-dresser verb, semicolons for the brief cadence.
[prompt carton] pass1 -> pass2: « Le panneau latéral » -> « Le flanc »; « debout sur une surface de pierre » -> « posé debout sur une pierre gris pâle » / why: packaging vocabulary.
[legal copy] pass1 -> pass2: « deux noms mal orthographiés » -> « deux noms sont écorchés »; « outil de mise en page » -> « logiciel de mise en page ».
[other engines] pass1 -> pass2: « Certains travaux conviennent mieux à un autre moteur » -> « certains travaux trouvent un meilleur moteur ailleurs dans l’application ».
[checklist] pass1 -> pass3: « La série » -> « L’ensemble de la série »; « seule une personne peut le valider » -> « seul un humain peut en décider ».
[provenance + FAQ] pass1 -> pass3: « arrêtez votre politique de transparence » -> « fixez la façon dont vous signalerez l’usage de l’IA » / why: "disclosure" made concrete; "politique de transparence" was vague.
[FAQ transparent] pass1 -> pass2: « elle a refusé avec ce message » -> « s’est soldée par ce refus »; API error quoted verbatim with a French gloss in parentheses.
[headings] pass1 -> pass3: « Qu’ont donné nos essais ? » -> « Que révèlent nos essais ? »; « Quand choisir un autre moteur ? » -> « Dans quels cas préférer un autre moteur ? »; « Que vérifier… » -> « Que contrôler… ».
[limits] pass2 -> pass3: « peut dériver sur » -> « manquer de constance sur »; « décident si un visuel produit part ou non » -> « décident du sort d’un visuel produit » / why: calque removed in the final read.

Second round (leftovers after the English fixes):

Round 1 pass files kept as round1-*.json / round1-changes.md. This round: units 82, 115, 122 only.

[formule de prompt] pass1 -> pass3: the round 1 formula, with "pas de filigrane. À conserver..." now split by the new <br6/> line break; "post social" -> "post pour les réseaux sociaux"; "répété à chaque relance" -> "à répéter à chaque relance" / why: the English now breaks the line before "Keep"; "post social" read as a calque; the infinitive reads as an instruction, like the other lines.
[moteurs] pass1 -> pass2: round 1 sentence with the two new links on "notre guide de prompts Nano Banana" (<a2>) and "panel de modèles 2026" (<a3>); "couvre le même terrain" -> "traite les mêmes questions"; "Quant au panel de modèles 2026, il explique..." / why: round 1 final wording kept, the links wrap the same words.
[page Créer] pass1 -> pass2: "<a1>La page de l’application consacrée à la création</a1> présente le studio dans son ensemble" -> "... fait le tour complet du studio" / why: round 1 final wording; the whole phrase is now the link.

### Chinese changes

First round:

[meta] pass1 -> pass2: OpenAI 官方公布的 ChatGPT Image 2 规格…六次实测记录和一份质检清单 -> OpenAI 公布的 ChatGPT Image 2 规格…附六次实测记录和质检清单 / why: tighter, fits the 80-character ceiling with room
[intro] pass1 -> pass3: 但它在小字上仍会失手，局部蒙版编辑时会把整张画面重新渲染 -> 短板同样明显：小字仍会出错，用蒙版做局部编辑会牵动整幅画面重绘 / why: the "but" clause read as English; a colon-led verdict is the 财经 rhythm
[answer] pass1 -> pass3: 把提示词当作拍摄清单来写…不要用文字去描述 -> 提示词要像拍摄清单一样写…不必再费笔墨描述 / why: imperative English skeleton replaced by a native instruction cadence
[sources] pass1 -> pass3: 两者说法不一时，我们会把两边都摆出来 -> 两者有出入之处，我们会一并列出 / why: spoken register lifted to written
[specs intro] pass1 -> pass2: 下面这些限制，才是制作团队排期时真正要考虑的 -> 制作团队排期时真正绕不开的，是下面这些限制 / why: end-weight on the point, stronger verb
[specs note] pass1 -> pass3: 有两项会改变工作方式…才能交付签核 -> 表中有两项直接改变工作方式…签核之前，必须以原尺寸逐处检查 / why: the order of actions now follows Chinese logic (condition first)
[limits] pass1 -> pass2: 值得用产品团队的眼光逐条读一遍 -> 不妨站在产品团队的角度逐条细读 / why: calque of "worth reading as" removed
[limits] pass1 -> pass3: 文字，决定标签能否保全；一致性，决定… -> 文字关乎标签能否完好，一致性关乎… / why: parallel 关乎 pair instead of the repeated English "decides"
[test table] pass1 -> pass2: 两行标签文字完全准确，只有一道阴影 -> 两行标签文字一字不差，单一阴影 / why: table cells shortened to production shorthand
[test table] pass1 -> pass3: 标签变成了衬线体，瓶型也变了 -> 标签换成了衬线体，瓶型也走了样 / why: 走样 is the trade word for drift
[mask] pass1 -> pass3: 换句话说，蒙版只是告诉引擎在哪里动手，而不是一块模板 -> 所以，蒙版只是告诉引擎在哪里下手，并非一块镂空模板 / why: "stencil" made concrete (镂空模板), connector simplified
[lesson] pass1 -> pass3: 真正的教训来自那两张瓶子图 -> 真正的教训藏在那两张瓶子图里 / why: more idiomatic framing
[formula] pass1 -> pass2: 主体：产品本身、材质与表面处理、哪一面朝向镜头 -> 主体：产品、材质与表面工艺、朝向镜头的一面; 构图 -> 景别 / why: shot-list vocabulary a Chinese art director uses
[habits] pass1 -> pass3: 作用比看上去大 -> 看似不起眼，作用却不小 / why: native four-character contrast
[quality] pass1 -> pass3: 另一个旋钮是质量 -> 另一个要拧的旋钮是质量 / why: keeps the dial image but makes it a verb phrase
[prompts] pass1 -> pass2: 电商商品详情页用照片级写实棚拍产品图 -> 照片级写实棚拍产品图，用于电商商品详情页; 光线 -> 布光; 不要 -> 不加 / why: written as a Chinese creative director briefs a shoot; pack text (ORREN, NIGHT SERUM 50 ML, INCI list) kept verbatim
[prompts] pass1 -> pass2: 将图 1 中这只瓶子原样放在… -> 将图 1 中的瓶子原样置于…; 右侧三分之一处 -> 右三分之一处 / why: brief register, photographer's term
[keep list] pass1 -> pass3: 保留清单在这里起了作用 -> 保留清单在这里立了功 / why: livelier native verb
[small print] pass1 -> pass3: 让每个字母都是打出来的，而不是画出来的 -> 确保每个字母都是键入的，而非画出来的 / why: written register
[engines] pass1 -> pass3: 对书面简报和简短的包装文案而言…是可靠的默认选择 -> 处理书面简报和简短的包装文案，ChatGPT Image 2 是稳妥的默认之选 / why: "for X" calque removed
[how-to] pass1 -> pass2: 您添加的技能会影响改写结果 -> 改写时会参照您已添加的技能 / why: verbal construction instead of an abstract subject
[how-to] pass1 -> pass3: 应用的创作页面完整介绍了整个工作台 -> 整个工作台的用法，详见应用的创作页面 / why: native signpost formula
[QA] pass1 -> pass2: 整组画面 -> 整组一致性; 渲染图最容易在那里露馅 -> 最容易在那里露出破绽 / why: names what is checked; written register
[FAQ mask] pass1 -> pass3: 不能完全保证 -> 并不能完全保证 / why: firmer written answer
[FAQ 2.5] pass1 -> pass3: 确定工作流程之前 -> 工作流程定型之前 / why: native verb
[FAQ metadata] pass1 -> pass3: 一种经过签名的元数据，注明…并标记 -> 一种经过签名的元数据，写明…并标示 / why: precise documentary verbs

Second round (leftovers after the English fixes):

[prompt formula] pass1: round-1 lines reused; the English now breaks "Constraints" and "Keep" onto two lines, so the round-1 full stop between them became <br6/>.
[prompt formula] pass1 -> pass2: 主体：产品、材质... -> 主体：产品本身、材质...; 不许改动的内容 -> 不得改动的内容 / why: 产品本身 separates the object from its finish; 不得 is the written register for a rule, 不许 is spoken.
[engines paragraph] pass1: round-1 wording kept, the two titles now carry their links: 我们的 <a2>Nano Banana 提示词指南</a2>, <a3>2026 年模型阵容</a3>一文 (book-title marks dropped, the link does their job).
[engines paragraph] pass1 -> pass2: 介绍了我们如何...以及如何先用实物产品加以检验 -> 讲述我们如何...并先拿实物产品逐一检验 / why: 加以 + verb is a stiff nominal frame; 拿...检验 is the native verb chain.
[engines paragraph] pass2 -> pass3: <a3>2026 年模型阵容</a3>一文则讲述我们如何... -> 至于如何按素材类型指派引擎、又如何先拿实物产品逐一检验，见 <a3>2026 年模型阵容</a3>一文 / why: topic first, pointer last, the way a Chinese guide sends the reader on; the sentence no longer opens on a link title.
[create page] pass1: 整个工作台的用法，详见<a1>应用的创作页面</a1>。 / round-1 wording kept, the link now wraps the page name. Passes 2 and 3 keep it: short, native, matches 详见 elsewhere on the site.

## Publish

- Page created: `src/pages/resources/how-to/chatgpt-image-2-product-prompting-guide.astro` (publish-draft.mjs, then `--update` for FAQ schema and internal links).
- `src/data/howtos.ts` entry added at the head; insight placements checked (category claimed by at least one layer).
- Build: `npm run build` passed (content:todo, i18n guard, all routes prerendered).
- `npm run check`: 0 errors, 0 warnings.
- Em dash (U+2014) in staged files: zero.
- Commit and push: `feat(editorial): publish wave two, fifteen pieces of 8 October in English, French and Chinese` on main.
- Resend email sent: yes, through `editorial/scripts/notify-publish.mjs` after the push.
