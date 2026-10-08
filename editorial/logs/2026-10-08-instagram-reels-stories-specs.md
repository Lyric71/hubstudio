# Run log: 2026-10-08, instagram-reels-stories-specs

| Field | Value |
|---|---|
| Brief | 56 (wave two, `scripts/wave2/56-instagram-reels-stories-specs.mjs`) |
| Slug | instagram-reels-stories-specs |
| Research file | research/instagram-reels-stories-specs.md (captures in research/instagram-reels-stories-specs/) |
| Output | output/instagram-reels-stories-specs.md |
| Body word count | 2,795 with tables; 1,852 prose only (blockquotes and FAQ included) |
| Body char count | 14,969 |
| Status reached | image_ready (steps 0 to 3 done; translation and publish run by the integrator) |
| Model used at every step | the most capable Claude model in this environment for research, drafting and both quality loops; gpt-image-2 at high quality for the hero |

## Research gate

| Gate | Done | Note |
|---|---|---|
| R1 claims mapped before looking anything up | yes | Ratio, size, length (organic, API, ads, boost), file limits, safe zone, cover, failure messages, hubStudio flow |
| R2 SERP mapped, four phrasings minimum | yes | instagram reel size 2026; instagram story size; reels safe zone; instagram reel length limit. 38 results, publishers recorded by type and letter code, none named |
| R3 primary sources for every number | yes | Instagram Help Center, Meta Ads Guide, Meta Business Help Center, Instagram developer reference, all rendered logged out and saved as text |
| R4 Chinese-language web searched first | not applicable | Instagram is not a China platform. The China counterpart reuses the published Douyin page and adds no new China figure |
| R5 every figure interrogated (date, sample, method, who paid) | yes | Platform self-description of its own product; pages undated, reading date recorded |
| R6 triangulated, conflicts published as ranges | yes | Five Reel lengths by surface, two Stories ad sizes, two cover shapes, three Story lengths, three minimum widths |
| R7 research file written before drafting | yes | Written before the draft, every claim marked |
| R8 reconciled after drafting | yes | Every number traced; table in the research file |

**Gap statement, one sentence:** every ranking page prints 1080 by 1920 and a
pixel safe zone as Instagram's rule, yet none quotes Instagram's or Meta's own
pages, none separates an organic Reel from a Reels ad, and none notices that
Instagram's Help Center prints no pixel size and no organic safe zone.

**Research time spent:** about 2 hours 30 minutes.

- Figures reused from the ledger: the brief 32 Meta rows (Reels and Instagram
  Stories ad specs, 14/35/6, the safe-zone article) were re-read today rather
  than reused, because a spec page needs its own dated reading. Values are
  unchanged since 2026-09-15.
- Claims cut because they could not be sourced: profile grid ratio for Reels
  covers; any organic pixel safe zone; 1080 by 1920 as Instagram's organic size;
  Stories "15 seconds"; the API publishing rate limit (the guide prints both 100
  and 50 posts per 24 hours).
- Conflicts published as a range rather than a single figure: Reel length by
  surface; Stories ad size (1440 x 2560 against 1080 x 1920); cover shape (420
  x 654 against 9:16); Story length organic, API and ads.
- Captures saved to `research/instagram-reels-stories-specs/`: 23 check 1 text
  captures and 13 check 2 text captures, rendered in headless Chromium,
  logged out, en-US.

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

- Iteration 1: full draft from the research file: answer first, spec table by
  surface, length reading, safe zone, organic against ads, cover, failures,
  hubStudio flow, China counterpart, changelog, seven FAQs, CTA.
- Iteration 2, ten weaknesses: (1) Story length sat in prose with no
  blockquote; (2) the failures table said "refused" where Meta's page says
  "should not contain"; (3) "aim for 600 px" read as hubStudio advice, not
  Meta's; (4) the hubStudio paragraph implied the app publishes the cover;
  (5) "the five networks" for the publishing page, now out of date; (6) "up to
  20 accounts" read as a scheduling limit rather than a per-post limit; (7) the
  October 15, 2021 changelog row read as a change made that day; (8) the H1
  did not carry the target query; (9) the studio line claimed the Meta page
  covers Stories specifically; (10) the safe-zone blockquote said "quoted"
  over a close paraphrase.
- Iteration 3: all ten fixed (Story blockquote added; "Ad upload fails" with
  Meta's wording; cover saved as a JPG "ready for Instagram's own cover
  picker"; "every network the app posts to"; per-post account limit in
  parentheses; changelog row reworded as the cutoff Meta still applies; H1
  rewritten; studio line generalized to "Meta's apps"; attribution changed to
  "figures as printed on each page").
- Iteration 4: production review. Every table five columns or fewer; every
  blockquote has a Source line, a date and a URL; CTA last; three appended
  blocks present.
- Iteration 5: removed a "None of them is mysterious" flourish and a neat
  "two pages, two shapes" pair.
- Iteration 6: zero U+2014 in the file; blockquotes all in the house form.
- Iteration 7 ran as the cadence variant, not the planted-error variant: one
  single-line paragraph ("Stories split the other way."), the hubStudio
  section broken into four paragraphs of different lengths, one question as a
  transition, parentheses used twice. No planted errors.
- Iteration 8: check 2 re-rendered the 13 cited URLs and found all 57 quoted
  strings; no page moved. R8 reconciliation written into the research file.
- Iteration 9: title 52 characters, description 145, excerpt 24 words.
- Iteration 10: cut "door" metaphor that had repeated in the FAQ.
- Iteration 11: softened "never print" to "don't print" in the hero and
  excerpt, since the claim covers the Reels and Stories help pages read.
- Iteration 12: five tables, eight blockquotes, H3 questions in the FAQ.
- Iteration 13, five concepts: (a) a tall lane-house doorway whose edges are
  crowded by crates, laundry and a shutter while the subject stands clear in
  the middle, the safe zone as a real place (chosen); (b) masking-tape margins
  on a tall print pinned to a studio wall; (c) a tall mirror in a Changsha
  apartment with coats hanging over its edges; (d) a stack of vertical contact
  prints with grease-pencil crop marks; (e) a narrow alley shot from its mouth
  with awnings cutting the top. (a) won because it shows the idea of a center
  that survives crowded edges without a phone, a screen or a diagram, and it
  does not repeat the acetate-sheet image on the Douyin page.

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

Versions saved in the session scratchpad as cq-v1, cq-v2 and cq-v3-final.

- Passes 1 to 3: the length section now says what each number governs ("Read
  together: ..."), with the 3-minute line framed for reach; the redundant
  safe-zone paragraph before its blockquote cut to a one-line lead; the cover
  section lead cut to one sentence and its advice explained (middle third,
  both crops).
- Pass 4: production ready; "Still image" replaced "None" in two length cells.
- Passes 5 and 9: the "Meta's help pages name the failures. None of them is
  mysterious." opener rewritten as a plain statement.
- Passes 7 and 10: the hubStudio block split so the zones and the checks get
  their own paragraph; an unsourced "the one you'll use most" removed.
- Pass 11, hostile reader, ten problems fixed: hero overclaim ("the safe zone
  repeated on every spec sheet comes from Meta") rewritten, since the circulating
  pixel insets are not Meta's; "Then turn on" corrected to "Leave ... on", the
  help article's default; "two pages, two X" repeated as a tic; Reviewed date
  confirmed visible under the H1; changelog carries the next review month;
  FAQ answers checked at 40 to 70 words; no pricing question applies, and the
  only money line uses the prepaid balance wording; the failures table header
  kept honest ("What Meta says"); excerpt trimmed to 24 words; the China
  counterpart kept to four sentences.
- Pass 12: no bold-label template blocks; prose and tables alternate.
- Pass 13: no banned jargon; two triads broken.
- Passes 14 to 16: one transition question kept in the hubStudio section; no
  padding added.
- Pass 17: title 52, meta 145, excerpt 24 words, one H1, H2 per question, H3
  for FAQ questions, zero U+2014, American spelling (check-draft passes).
- Pass 18: "door" and "two pages" humanizers each now appear once or not at
  all.

## Image

- Prompt used: verbatim from the feature-image block in the output file.
- Confirmed the prompt names no real person: yes.
- Attempts: one. Accepted.
- AI-tells checklist on the final frame: one light source from the left, one
  long shadow on the wall; face natural with small asymmetries and flyaway hair;
  hands in pockets, so no hand drift; no text or signage; crates, bicycle wheel
  and spokes plausible; no bokeh halos; no plastic skin.
- Saved to: public/Images/insight-instagram-reels-stories-specs.webp (1536 x
  1024, webp quality 78, 189 KB). The PNG stays in the session scratchpad.

## House rule checks

| Check | Result |
|---|---|
| Competitor named, described or alluded to | zero |
| `$` occurrences, each one a category range with a date | zero |
| Em dash occurrences | zero in the draft, the brief module, the research file and this log; capture files normalized |
| Deliberate typos or planted errors | zero |
| Summary or conclusion section | none |
| Decorative ordinal in a repeated titled block | none |
| Stray Han characters outside a term gloss | none |
| Statistics in blockquotes with source, date and method | 8 blockquotes, all sourced and dated |
| Positioning: credits, amounts, free plan, retired product names | none; "prepaid balance" used once |

`node editorial/scripts/check-draft.mjs editorial/output/instagram-reels-stories-specs.md`:
all hard checks passed.

## Ledger additions

New block for `sources/verified-sources.md`, in the ledger's table format.

### Instagram Reels and Stories, organic and ads, primary readings (added 2026-10-08, brief 56)

| Figure | Attribution to use | Source | Date | Confidence | Check 1 | Check 2 | Used in |
|---|---|---|---|---|---|---|---|
| Reels upload at any ratio from 1.91:1 to 9:16, minimum 30 FPS and 720 pixels; no recommended pixel size printed; cover 420 x 654 (1:1.55), not editable after upload | "Instagram Help Center, Reel size & aspect ratios on Instagram, read 8 October 2026" | help.instagram.com/1038071743007909 | undated, read 2026-10-08 | primary | 2026-10-08 | 2026-10-08 | 56 |
| Reels recorded and edited up to 20 minutes; over 3 minutes not recommended to new audiences | "Instagram Help Center, Record a reel on Instagram, read 8 October 2026" | help.instagram.com/2720958398006062 | undated, read 2026-10-08 | primary | 2026-10-08 | 2026-10-08 | 56 |
| Story video up to 60 seconds shows as one clip; longer split into multiple clips | "Instagram Help Center, Share a photo or video to your Instagram story, iPhone app help, read 8 October 2026" | help.instagram.com/1257341144298972/?cms_platform=iphone-app | undated, read 2026-10-08 | primary | 2026-10-08 | 2026-10-08 | 56 |
| Boost eligibility: 90 seconds or less, 9:16, no licensed music, not before 15 October 2021, no effects, GIFs, product tags, interactive stickers, not already shared to Facebook; errors for tappable elements and low resolution | "Instagram Help Center, Boost an Instagram Reel and Troubleshoot boosting, read 8 October 2026" | help.instagram.com/570215404599013; help.instagram.com/1049406878442523 | undated, read 2026-10-08 | primary | 2026-10-08 | 2026-10-08 | 56 |
| Reels and Stories ads: brief 32 rows re-read, unchanged (Reels video 1440 x 2560, 0 s to 15 min, 4GB, 44 characters; Stories video 1 s to 60 min, 125; 14/35/6). New on 8 October: Reels image ads 9:16, 1440 x 2560, 30MB, min width 500, primary text 44; Stories video ads of 16 s or more may show as one to three cards; Stories image ads show 5 to 16 s | "Meta Ads Guide, Awareness ad specs on Instagram Reels and Instagram Stories, read 8 October 2026" | facebook.com/business/ads-guide/update/video/instagram-reels; .../image/instagram-reels; .../video/instagram-story; .../image/instagram-story | undated, read 2026-10-08 | primary, Awareness, those placements | 2026-10-08 | 2026-10-08 | 32, 56 |
| Safe-zone article: wording unchanged since 2026-09-15; bottom 40 percent free when a Reels ad carries a disclaimer; taller screens zoom (cropping outside the safe zone) or letterbox in black; page heading now reads "About text overlays and the safe zone for ads on Facebook and Instagram" under the old title | "Meta Business Help Center, About text overlays and the safe zone for ads in Stories and Reels, read 8 October 2026" | facebook.com/business/help/980593475366490 | undated, read 2026-10-08 | primary, that article only | 2026-10-08 | 2026-10-08 | 32, 56 |
| Stories ads design requirements: 9:16 recommended, all feed ratios 1.91:1 to 4:5 supported; 4GB video, 30MB photo; video up to 60 minutes; images 5 seconds by default; recommended 1080 x 1920, minimum 600 x 1067; H.264 or VP8, AAC or Vorbis | "Meta Business Help Center, Design requirements for Instagram Stories ads, read 8 October 2026" | facebook.com/business/help/2222978001316177 | undated, read 2026-10-08 | primary; conflicts with the Ads Guide's 1440 x 2560 | 2026-10-08 | 2026-10-08 | 56 |
| Video ad uploads: 4GB maximum for all videos; most common rendering failure is size, minimum width 600 pixels | "Meta Business Help Center, Troubleshoot video ad uploads, read 8 October 2026" | facebook.com/business/help/1596868350601716 | undated, read 2026-10-08 | primary | 2026-10-08 | 2026-10-08 | 56 |
| API: Reels 3 s to 15 min, 300MB, MOV or MP4, HEVC or H264, 23 to 60 FPS, max 1920 columns, ratio 0.01:1 to 10:1 (9:16 advised), 25Mbps; Reel cover JPEG 8MB, middle 9:16 crop, middle 1:1 for feed shares; Stories video 3 to 60 s, 100MB; Stories image JPEG 8MB; caption 2,200 characters, 30 hashtags, 20 @ tags; alt text on image posts from 2025-03-24 (not Reels or Stories); Story user tags from 2025-07-09 | "Instagram developer reference, IG User Media, read 8 October 2026", always scoped to the API route | developers.facebook.com/docs/instagram-platform/instagram-graph-api/reference/ig-user/media | change notes dated 2025-03-24 and 2025-07-09, read 2026-10-08 | primary, API route only | 2026-10-08 | 2026-10-08 | 56 |
| Derived: 14/35/6 leaves x 64.8 to 1015.2, y 268.8 to 1248 (950.4 x 979.2) on 1080 x 1920 and x 86.4 to 1353.6, y 358.4 to 1664 (1267.2 x 1305.6) on 1440 x 2560; with the 40 percent disclaimer rule the bottom edge moves to y 1152 (950.4 x 883.2) | "arithmetic on Meta's published Reels percentages, 8 October 2026; not a Meta figure" | Research file | 2026-10-08 | derived | 2026-10-08 | 2026-10-08 | 56 |
| Search-results audit: 38 results on four buyer phrasings, 0 citing the Instagram Help Center, the Meta Ads Guide or the developer reference, 0 separating organic from ads | "search-results audit run 8 October 2026, publisher type recorded, no domain named" | R2 tables in research/instagram-reels-stories-specs.md | 2026-10-08 | primary observation | 2026-10-08 | 2026-10-08 | 56 |

### Do not publish, added from brief 56

| Claim | Where it came from | Why it was cut | Logged |
|---|---|---|---|
| 1080 x 1920 as Instagram's published organic Reel or Story size | Spec-sheet pages on the SERP | No Instagram page prints it; Meta prints it only for Stories ads | 2026-10-08 |
| Organic Reels safe zone in pixels (1080 x 1420; 420/100/150 px; 250 px top and bottom) | Spec-sheet and tool pages | On no Meta page | 2026-10-08 |
| Stories limited to 15 seconds per story | Spec-sheet page | Contradicted by Instagram's Story help page | 2026-10-08 |
| Profile grid ratio for Reels covers | General circulation | No Instagram or Meta page read on 2026-10-08 prints it | 2026-10-08 |
| Instagram API publishing limit as one number | Instagram Content Publishing guide | The guide prints 100 and 50 posts per 24 hours in two places | 2026-10-08 |
| Help Center ids 270963803047681, 261882563951635, 569619569727885 | Search results with stale titles | Each served the "Record a reel" body under a generic title | 2026-10-08 |

## Watch rows

```
2027-01-08,instagram-reels-stories-specs,"Quarterly recheck: re-render the 13 cited Instagram Help Center, Meta Ads Guide, Meta Business Help Center and developer reference pages; compare every spec row, the 14/35/6 safe zone, the 40 percent disclaimer rule, the 20-minute and 3-minute Reels lines, the 60-second Story clip and the cover size; update the Reviewed date and the changelog",help.instagram.com/1038071743007909; facebook.com/business/ads-guide/update/video/instagram-reels; developers.facebook.com/docs/instagram-platform/instagram-graph-api/reference/ig-user/media,2026-10-08
```

## Live pages this piece contradicts

None. Checked: `meta-tiktok-against-douyin-rednote` (Reels ads 1440 x 2560, 0
s to 15 min, 14/35/6, all still true on 2026-10-08), `douyin-video-specs-safe-zones`,
`/solutions/platforms/meta` (no spec values), `src/content/help/instagram.md`
(Reel 3 s to 15 min and Story clip 60 s, both match the developer reference).

## Closed in this run

- First-party figures used: none. hubStudio product facts come from the help
  center articles `instagram.md` and `assets-library.md`.
- Spec rows published under deviation 7: none; every row is a primary reading
  (Western platform, wave two rule).
- Claims cut and which section is now thinner: the cover section carries no
  profile grid ratio; the hubStudio section carries no posting rate limit.
- Briefs amended: the brief module's `h1` changed to carry the target query
  ("Instagram Reel and Story size in 2026: lengths, limits and safe zones"),
  as SPEC.md requires.
- Live articles corrected: none needed.
- Rows added to `watch.csv`: one, above, for the integrator to merge.
- Settled fallbacks applied: 5 (`/resources/specs` hub not built, so the
  cluster hub stays unlinked and the Douyin spec page carries the cluster
  link); 12 (no showcase clip; the page reuses the existing app captures).
- Runbook substitutions: a plain fetch returns a title only on Meta's help and
  ads pages, so every source was rendered in headless Chromium (Playwright,
  from the repo's dependencies, script kept in the session scratchpad).
  Five capture files had Meta's U+2014 dash replaced with `--`, with a header
  note, under the repo rule.
- Integration, 2026-10-08: instagram-post-sizes-2026 printed the API cap as 100 posts in 24 hours; it now prints both figures the guide gives (100 and 50), matching this log's do-not-publish row. No change to this draft.
- Ledger additions merged into `sources/verified-sources.md` (section "Added 2026-10-08 (ledger rows from brief 56, instagram-reels-stories-specs)") and watch rows merged into `watch.csv`, sorted by due date.

## SEO counts (after the quality pass)

| Field | Chars or words | Ceiling | Pass |
|---|---|---|---|
| Title | 52 | 52 | yes |
| Meta description | 145 | 152 | yes |
| Excerpt | 24 words | 25 words | yes |

## For the publish step

- Category: Platform specs. Author: Sophie Brennan (Social Creative).
- French slug proposal: `instagram-reels-et-stories-specifications-et-zones-de-securite`.
- Hero alt text: A young woman in a rust linen shirt and cream trousers stands
  in the middle of a narrow wooden doorway in an old lane house, with drying
  shirts across the top, a green shutter at one side and crates and a bicycle
  wheel at the bottom, beside a sunlit plaster wall.
- Screens on the page reuse the localized captures `videoSocial`, `videoSave`
  and `instagram` from `src/data/app-shots.ts`.

## Publish (fill in when step 4 runs)

- Article page created:
- `src/data/insights.ts` entry added:
- Build:
- `npm run check`:
- Commit and push:
- Resend email sent:

## Translation (three passes, /deep-translate)

- Dictionary id: `resources/insights/instagram-reels-stories-specs`, French address `/fr/ressources/analyses/instagram-formats-des-reels-et-des-stories` in `src/i18n/routes.ts`.
- Pass files: `.i18n-work/passes/fr/resources/insights/instagram-reels-stories-specs/` and `.i18n-work/passes/zh/resources/insights/instagram-reels-stories-specs/` (pass1, pass2 worked from pass 1 alone, pass3 native editor's finish).
- `npm run i18n:tx -- pending fr` and `pending zh`: nothing pending. `npm run i18n:local -- check`: every page translated in French and Chinese (222 pages). `npm run i18n:guard`: pass.

### French changes

First round:

[chapô] pass1 -> pass3: « Les pages d’aide d’Instagram consacrées aux reels et aux stories n’indiquent nulle part 1 080 × 1 920. Elles donnent… » -> « Les pages d’aide qu’Instagram consacre aux reels et aux stories ne mentionnent jamais 1 080 × 1 920. Elles se contentent d’une plage de formats… » / why: relative clause instead of a participle chain, a verb that carries the point.
[taille] pass1 -> pass2: « sans fixer de dimensions en pixels » -> « mais ne fixe aucune dimension en pixels »; « recommande » -> « préconise » / why: opposition made explicit, stronger verb.
[taille] pass2 -> pass3: « au-dessus de tous les seuils de taille cités dans cette page » -> « soit au-dessus de tous les seuils de taille mentionnés ici » / why: lighter close.
[méthode] pass1 -> pass3: « Tout ce qui suit a été relevé… sur les pages d’Instagram et de Meta elles-mêmes » -> « Toutes les données qui suivent ont été relevées… directement sur les sites d’Instagram et de Meta » / why: English « own pages » calque removed.
[tableau] pass1 -> pass2: « Un seul segment jusqu’à 60 s » -> « Lecture d’un seul tenant jusqu’à 60 s »; « Shows 5 to 16 s » settled as « Affichage de 5 à 16 s » / why: table cells written as French nominal labels.
[durée] pass1 -> pass3: « Il existe cinq chiffres, et chacun régit une manière différente de publier » -> « Cinq chiffres coexistent, et chacun correspond à un mode de publication »; « dérapent » -> « s’emmêlent » / why: English « there are » structure removed.
[durée] pass1 -> pass3: « Mis bout à bout : 20 minutes, c’est… Les 90 secondes ne comptent que si vous comptez booster » -> « Mis en regard, ces chiffres s’éclairent. Vingt minutes : c’est… Quant aux 90 secondes, elles n’entrent en jeu que si vous prévoyez de booster » / why: repetition « comptent/comptez » removed, cadence of a feature article.
[stories] pass1 -> pass2: « Les stories se découpent dans l’autre sens » -> « Les stories obéissent à une autre logique : elles se découpent » / why: the English wordplay did not survive literally.
[stories] pass2 -> pass3: « selon chaque spectateur » -> « adaptées à chaque spectateur » / why: precise meaning restored.
[stories] pass1 -> pass2: « Deux tailles recommandées pour un même emplacement, par une seule et même entreprise » -> « Une seule entreprise, un seul emplacement, deux tailles recommandées » / why: punchier ternary rhythm.
[zone de sécurité] pass1 -> pass2: « Meta invite les annonceurs à envisager de laisser libres… » -> « Meta suggère aux annonceurs de laisser… exempts de texte… plaqués contre le bord » / why: calque of « consider leaving » dropped.
[zone de sécurité] pass2 -> pass3: « relève du bon sens en production. Instagram n’en fait pas pour autant une règle » -> « est un bon réflexe de production. Ce n’est pas pour autant une règle d’Instagram » / why: plainer register.
[organique ou pub] pass1 -> pass3: « Ils sont décrits dans des documents distincts, et les chiffres ne concordent pas » -> « Les uns et les autres relèvent de documents distincts, aux chiffres divergents » / why: clear antecedent after the question heading.
[organique ou pub] pass1 -> pass3: « peut échouer comme publicité à cause de la seule musique » -> « peut être recalé comme publicité pour sa seule musique » / why: idiomatic verb.
[couverture] pass1 -> pass2: « La taille recommandée pour les photos de couverture est de… » -> « Les photos de couverture doivent idéalement mesurer… »; « Construisez-la » -> « Composez-la » / why: verbal construction, image vocabulary.
[échecs] pass2 -> pass3: heading « Pourquoi un reel ou une story est-il refusé… » -> « Pourquoi reels et stories sont-ils refusés ou recadrés ? » / why: gender agreement across « ou ».
[échecs] pass1 -> pass3: « reel déjà partagé sur Facebook » -> « partage préalable sur Facebook »; « Une couverture qui n’est pas en 9:16 » -> « Une couverture hors 9:16 » / why: table cells tightened into parallel noun phrases.
[hubStudio] pass1 -> pass2: « l’entrée Instagram du menu rassemble tous les posts » -> « tous les posts passent par l’entrée Instagram du menu »; « la forme » -> « le type de post » / why: natural French subject, no literal « shape ».
[hubStudio] pass2 -> pass3: « remplace le clip par la version montée, enregistrée comme nouvelle version » -> « substitue le montage au clip d’origine, sous forme de nouvelle version » / why: repetition of « version » removed. App labels kept from fr.json: Mes connexions, panneau Réseaux sociaux, Recadrer, Image entière, Montrer ce que le réseau recouvre, Vérifications, Placer les sous-titres dans la zone sûre, Enregistrer et l’utiliser dans la publication.
[Chine] pass1 -> pass3: « le chiffre sur lequel s’accordent la plupart des sources » -> « le chiffre sur lequel s’accorde la majorité des sources »; « Quel équivalent aux reels en Chine ? » -> « Quel est l’équivalent chinois des reels ? » / why: natural heading.
[historique] pass1 -> pass2: « ajoute le texte alternatif… ; reels et stories ne sont pas pris en charge » -> « Meta ouvre le texte alternatif aux publications d’images via l’API ; les reels et les stories en sont exclus » / why: active, precise verb.
[FAQ] pass1 -> pass2: « Optez pour le 9:16 » -> « Visez le 9:16 »; « franchit tous les seuils » -> « respecte tous les seuils »; « Tout dépend de la manière de publier » -> « Cela dépend du mode de publication » / why: register of a business daily.
[FAQ] pass2 -> pass3: « est la mesure de quelqu’un d’autre » -> « relève d’une mesure faite par un tiers » / why: written register, not spoken.

Second round (leftovers after the English fixes):

Round 1 pass files kept as round1-*.json / round1-changes.md; pass1.json is an empty object so the build runs with only the pass 3 correction.

[title] pass3: "Format des reels Instagram 2026 : stories, durée, marges | hubStudio" -> "Format des Reels Instagram 2026 : Stories, durée, marges | hubStudio" / why: Reels and Stories are Meta product names, capitalized as the glossary settles; the shared og:title and meta description in common.json already wrote them capitalized.

### Chinese changes

Second round (leftovers after the English fixes):

[title] pass1 -> pass2: "Instagram Reels 尺寸 2026：..." -> "2026 年 Instagram Reels 尺寸：快拍、时长与安全区" / why: Chinese puts the year first, as a headline would.
[lede] pass1 -> pass3: "并没有写 1080 × 1920。上面写的是一个比例范围、一个画质下限和一个时长" -> "找不到 1080 × 1920 这个数字。页面只给出比例范围、画质下限和时长" / why: dropped the counted English nouns, reads as a reporter's opening.
[lede] pass1 -> pass3: "只出现在它的广告页面上，管的是广告" -> "都在广告页面上，只对广告有效" / why: spoken "管的是" moved to written register.
[size answer] pass1 -> pass3: "可以满足本页的所有尺寸下限" -> "本页列出的各项尺寸下限均可满足" / why: topic-first word order, 书面语 均.
[method] pass1 -> pass3: "表格会说明这一点，而不是去填补空白" -> "表中照实注明，不拿别处的数字填空" / why: English "rather than" clause replaced by a native contrast.
[spec table] pass1 -> pass2: "3 秒到 15 分钟", "90 秒或更短", "没有给出" -> "3 秒至 15 分钟", "不超过 90 秒", "未给出" / why: table register: 至, 不超过, 未.
[length] pass1 -> pass3: "大多数规格表都在时长上出错" -> "规格表最容易出错的，正是时长" / why: native emphasis structure.
[length] pass1 -> pass3: "放在一起看：20 分钟是应用允许你录制的长度..." -> "把这几个数字放在一起看：20 分钟是应用内的录制上限；15 分钟既是..." / why: 你 removed (house register is 您 or none), parallel semicolons.
[stories] pass1 -> pass3: "快拍的拆分方式正好相反" -> "快拍的拆分规则又是另一回事" / why: "the other way" is not literal opposition in Chinese.
[stories ad] pass1 -> pass3: "针对每位观众进行调整" -> "可能因人而异，拆成一张、两张或三张卡片展示" / why: English participle tail folded into the verb.
[safe zone] pass1 -> pass3: "Meta 公布了一个安全区，而且它是为广告写的" -> "Meta 只公布了一个安全区，且专为广告而设" / why: 只 carries the point; 而设 is the written collocation.
[safe zone quote] pass1 -> pass3: "比 9:16 更高的屏幕上被推到边缘" -> "在比 9:16 更修长的屏幕上被挤到边缘" / why: 更高 is ambiguous for a phone; 修长 and 挤 are the natural words.
[pixels] pass1 -> pass3: "下面的像素是我们根据这些百分比算出来的" -> "下表的像素值是我们按这些百分比换算所得" / why: written register.
[organic note] pass1 -> pass3: "这不是 Instagram 规定的规则，你在网上找到的任何..." -> "但 Instagram 并没有这样规定。网上流传的...没有一个出自 Instagram" / why: no 你, stronger close.
[ads vs organic] pass1 -> pass3: "光是音乐这一项就可能导致它不能作为广告" -> "可能单因音乐一项就无法用作广告" / why: tighter 书面语.
[cover] pass1 -> pass3: "在形状上并不一致" -> "封面该是什么形状，...各执一词" / why: native idiom, topic fronted.
[cover] pass1 -> pass3: "这样它就能经受住...两种裁切" -> "无论是...9:16 矩形裁切，还是动态中的居中正方形裁切，主体都能完整保留" / why: "survives both crops" recast as a 无论...都 structure.
[failures] pass1 -> pass3: "写清楚了大部分失败原因" -> "大部分失败原因，...都写得明明白白，有些甚至与报错信息一字不差" / why: rhythm and emphasis.
[hubStudio] pass1 -> pass3: "菜单里的 Instagram 保存着所有帖子" -> "所有帖子都归在菜单里的 Instagram 下" / why: "holds" is not 保存.
[hubStudio] pass1 -> pass3: "视频上的铅笔会在视频编辑器中打开它" -> "点击视频上的铅笔图标，即可在视频编辑器中打开该视频并进入“社交媒体”面板" / why: Chinese names the action; app labels quoted as in the app.
[hubStudio] pass1 -> pass2: "立即发布或定时发布...不需要任何费用" -> "可以立即发布，也可以定时发布...不收取任何费用" / why: native paired verbs; 收费 is the billing verb.
[changelog] pass1 -> pass3: "每一行都在当天从...读取" -> "表中每一行均于当天在...页面上核实" / why: 读取 is machine wording.
[FAQ] pass1 -> pass3: "把它用于自然发布的 Reels 是一个好习惯，但你在网上看到的..." -> "拿它来规范自然发布的 Reels 不失为稳妥之举，但网上流传的...都是别人自己测的" / why: no 你, native set phrase, plain close.

## Publish

- Page created: `src/pages/resources/insights/instagram-reels-stories-specs.astro` (publish-draft.mjs, then `--update` for FAQ schema and internal links).
- `src/data/insights.ts` entry added (newest first); insight placements checked (category claimed by at least one layer).
- Build: `npm run build` passed (content:todo, i18n guard, all routes prerendered).
- `npm run check`: 0 errors, 0 warnings.
- Em dash (U+2014) in staged files: zero.
- Commit and push: `feat(editorial): publish wave two, fifteen pieces of 8 October in English, French and Chinese` on main.
- Resend email sent: yes, through `editorial/scripts/notify-publish.mjs` after the push.
