# Run log: 2026-10-08, linkedin-post-specs

| Field | Value |
|---|---|
| Brief | 63 (wave two, `scripts/wave2/63-linkedin-post-specs.mjs`) |
| Slug | linkedin-post-specs |
| Research file | research/linkedin-post-specs.md |
| Output | output/linkedin-post-specs.md |
| Body word count | 2,545 with tables, 1,741 prose only (target 1,500, a floor) |
| Body char count | 13,951 |
| Status reached | image_ready (steps 0 to 3 done; translation and publish are the integrator's) |
| Model used at every step | Claude Opus 5.5 for research, drafting and quality; gpt-image-2 at high quality for the image |

## Research gate

| Gate | Done | Note |
|---|---|---|
| R1 claims mapped before looking anything up | yes | organic, company page, ads, crops, failures, hubStudio facts |
| R2 SERP mapped, four phrasings minimum | yes | linkedin image size 2026; linkedin video specs; linkedin document post size carousel pdf; linkedin company page banner size; plus an ads query scoped to LinkedIn's own domains |
| R3 primary sources for every number | yes | LinkedIn Help Center and LinkedIn Marketing Solutions pages only, HTML captured to `research/linkedin-post-specs/` |
| R4 Chinese-language web searched first | not applicable | LinkedIn is not a China platform; its own pages are primary |
| R5 every figure interrogated (date, sample, method, who paid) | yes | platform documentation; dates recorded as the page age LinkedIn shows (no absolute date is served) |
| R6 triangulated, conflicts published as ranges | yes | help pages cross-read with business.linkedin.com spec pages; two LinkedIn conflicts printed on the page |
| R7 research file written before drafting | yes | |
| R8 reconciled after drafting | yes | table in the research file |

**Gap statement, one sentence:** The ranking size guides cite no LinkedIn
page, blend ad specs into organic posts, and split three ways on the company
cover because LinkedIn's Page image help now lists 1512 x 256; nobody prints
the source and the page age per row.

**Research time spent:** about 2 hours.

- Figures reused from the ledger: none (no LinkedIn rows existed).
- Claims cut because they could not be sourced: "about 200 characters before
  see more"; any pixel size for documents or PDF carousels; a mobile audience
  share; a vertical-video reach claim; organic video length split by device.
- Conflicts published as a range rather than a single figure: organic video
  length (15 minutes on the troubleshooting page, 10 on the older Pages video
  page); MOV support (newest file types page lists it, older Pages video page
  says no).
- Captures saved to `research/linkedin-post-specs/`: 19 HTML captures (help
  center, Marketing Solutions help, business.linkedin.com spec pages).

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

- 1: draft from the brief and the research file, H1 as briefed, first H2
  restating the query with a 51-word answer naming hubStudio once.
- 2: weaknesses found: (1) the lede claimed LinkedIn "moved" the cover two
  months ago, but only the article's age is known; (2) "most size guides" was
  a count not measured; (3) the answer said the editor's "default", the help
  says "Best"; (4) a guess that MOV "will most likely go through"; (5) the
  mobile section opened on an unsourced claim about phones; (6) "or the upload
  fails" overstated the document-title checklist; (7) "Paid specs run
  tighter" is false for video length; (8) a promotional line about decks
  exporting "cleanly"; (9) the excerpt said "every" spec; (10) an "iPhone"
  where the source says iOS device.
- 3: all ten fixed; the ad section now says how the paid specs differ
  (twice the length, a tenth the weight for video).
- 4: production review: added the Career Pages condition for the Life tab
  rows, a 1:1 range on the video ad row, and the Reviewed line in the
  introduction.
- 5: AI-tell pass: removed a neat closing line on the video section, broke a
  triad in the failures intro.
- 6: zero em dashes; four blockquotes in one format (claim with method, then
  Source with month and year, then URL).
- 7: ran as the cadence variant, not the planted-error variant. Short lines
  set against long ones ("That's the safe build."), the bullet list
  structures varied, no planted errors of any kind.
- 8: check 2 re-fetched all 16 cited URLs; every string matched and every
  page age was unchanged. One quote corrected to the source's exact words
  (ProRes: "but it will not be able to process"). R8 table written; nothing
  in the draft lacks a claims row.
- 9: title 45, description 144, excerpt 22 words.
- 10 to 12: second de-AI pass, human touch, table alignment and column
  counts (all five columns or fewer).
- 13: concepts considered: a phone on a desk showing a cropped feed (rejected:
  screen UI is generic and prone to fake text); a printer tray of proofs at
  several ratios; a designer folding a tall print to a shorter band (chosen:
  it is the 4:5 crop rule acted out by hand); a cutting mat with trimmed
  prints only (no human scale); a meeting-room wall of banner proofs (busy).

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

Iteration 18 (self-created pattern check) also ran: "real trap" and "the
safe build" each appear once; no repeated humanizer.

Hostile reader (11) found and fixed: lede overclaim on when the cover
changed; excerpt "every"; Life tab rows missing their Career Pages
condition; the ads intro's "tighter" claim; the video ad 1:1 row with no
range; the ProRes quote not verbatim; "iPhone" for iOS; a long unwrapped
line; the intro "as it read" phrasing; the maintenance signal (Reviewed date
and changelog) confirmed visible. Structural ratio (12): two bullet lists
(mobile crops, failures) against eight prose sections, under half rigid.
SEO fields stayed inside the house ceilings (52 / 152 / 25 words); the
skill's looser 60 / 156 ceilings were not used.

## Image

- Prompt used: verbatim from the FEATURE IMAGE block (a designer in a
  Changsha studio folding a tall print to a shorter band, window light from
  the left, 50mm at f/4, subject on the right third).
- Confirmed the prompt names no real person: yes.
- Attempts: one. Accepted on the first frame.
- AI-tells checklist on the final frame: hands and fingers anatomically
  sound, no readable text on prints, pinboard or ruler, one light source from
  the left with one shadow direction, no bokeh halos, face cropped at the
  mouth so no symmetrical face, mug and phone with plausible reflections,
  paper edges and table wear irregular. Passes.
- Saved to: `public/Images/insight-linkedin-post-specs.webp` (1536 x 1024,
  sharp webp quality 78, no enlargement, 92 KB).
- Alt text: A designer at a worn studio table folds the top and bottom of a
  tall print back to a shorter band, with three prints cut to different
  proportions laid out beside a cutting mat.

## House rule checks

| Check | Result |
|---|---|
| Competitor named, described or alluded to | zero (size guides referred to only as "size guides" for the circulating numbers; no publisher named or described) |
| `$` occurrences | zero |
| Em dash occurrences | zero (draft, research file, brief module, this log) |
| Deliberate typos or planted errors | zero |
| Summary or conclusion section | none; ends on CTA: Create your account |
| Decorative ordinal in a repeated titled block | none |
| Stray Han characters outside a term gloss | none |
| Statistics in blockquotes with source, date and method | four blockquotes; every other value sits in a table row with its LinkedIn source and page age |
| "Credits", amounts, free plan | none; money said as the prepaid balance, price shown before each run |

`node editorial/scripts/check-draft.mjs editorial/output/linkedin-post-specs.md`:
all hard checks passed.

## Sources

- New figures for the ledger: see "Ledger additions" below (both check dates
  2026-10-08).
- Rows for the do-not-publish log: the 4200 x 700 and 1128 x 191 company
  cover figures, the "about 200 characters before see more" figure, pixel
  sizes for documents, the 5MB organic video figure (see the research file).

## Ledger additions

Section to append to `sources/verified-sources.md`:
`## LinkedIn post, Page and ad specs, primary help-center readings (added 2026-10-08, brief 63)`

| Figure | Attribution to use | Source | Date | Confidence | Check 1 | Check 2 | Used in |
|---|---|---|---|---|---|---|---|
| Post text limit 3,000 characters; longer goes to an article | "LinkedIn Help, Post and share updates, read October 8, 2026" | linkedin.com/help/linkedin/answer/a528176 | updated about 3 weeks before 2026-10-08 | primary | 2026-10-08 | 2026-10-08 | 63 |
| Photo post: 5 MB; at least 552 x 276, 1080 wide recommended; ratio 3:1 to 4:5, taller centered and cropped; up to 20 photos; multi-photo shown at most 4:5 (e.g. 640 x 800); layout set by first image; link or image, not both | "LinkedIn Help, Share photos on LinkedIn, read October 8, 2026" | linkedin.com/help/linkedin/answer/a527229 | about 2 years | primary | 2026-10-08 | 2026-10-08 | 63 |
| File types: GIF, JPEG, PNG, WEBP; MP4 and MOV on desktop, iOS, Android; WEBM, MKV on fewer; 36 MP; GIF 500 frames; documents 100 MB, 300 pages, one million words | "LinkedIn Help, Media file types supported on LinkedIn, read October 8, 2026" | linkedin.com/help/linkedin/answer/a564109 | about 2 weeks | primary | 2026-10-08 | 2026-10-08 | 63 |
| Organic video: 75 KB to 5 GB; 3 s desktop, 2 s mobile app, to 15 min; 256x144 to 4096x2304; 1:2.4 to 2.4:1; 10 to 60 fps; 192 Kbps to 30 Mbps; edges as safe zone; ProRes uploads but cannot process; iCloud unsupported in the app | "LinkedIn Help, Video sharing troubleshooting, read October 8, 2026" | linkedin.com/help/linkedin/answer/a548372 | about 2 years | primary | 2026-10-08 | 2026-10-08 | 63 |
| Pages and Career Pages video: 10 minutes; "We no longer support AVI, QuickTime, or MOV files" | "LinkedIn Help, Video specifications for your LinkedIn Pages and Career Pages, read October 8, 2026"; always printed beside a548372 and a564109 as a conflict | linkedin.com/help/linkedin/answer/a1311816 | about 4 years | primary, conflicts with newer pages | 2026-10-08 | 2026-10-08 | 63 |
| Document posts: PPT, PPTX, DOC, DOCX, PDF; 100 MB and 300 pages; one per post; title; downloadable as PDF; no edit after posting; flatten layers; one page size; animations static | "LinkedIn Help, Upload and share documents and Document uploads FAQ, read October 8, 2026" | linkedin.com/help/linkedin/answer/a518909 and a523054 | about 3 years | primary | 2026-10-08 | 2026-10-08 | 63 |
| Page images: logo 268 min, 400 rec; cover 1512 x 256 min and rec; Life main 1128 x 376; custom module 502 x 282; company photos 264 x 176 min, 900 x 600 rec; PNG or JPEG, 3 MB; link image 1.91:1 at 1200 x 627, over 200 px wide; mobile link images uncropped, white padding | "LinkedIn Help, Image specifications for your LinkedIn Pages and Career Pages, read October 8, 2026" | linkedin.com/help/linkedin/answer/a563309 | about 2 months | primary | 2026-10-08 | 2026-10-08 | 63 |
| Profile cover 1584 x 396 recommended, JPG or PNG, under 8 MB | "LinkedIn Help, Add or change the cover image on your profile, read October 8, 2026" | linkedin.com/help/linkedin/answer/a568217 | about 7 months | primary | 2026-10-08 | 2026-10-08 | 63 |
| Profile photo 400 x 400 to 7680 x 4320, 8 MB, PNG or JPG, no GIF | "LinkedIn Help, Photo won't upload to your profile, read October 8, 2026" | linkedin.com/help/linkedin/answer/a549049 | about 2 years | primary | 2026-10-08 | 2026-10-08 | 63 |
| Single image ads: JPG, PNG, GIF (250 frames); 5 MB; 1200 x 628, 1200 x 1200, 720 x 900 with ranges; under 401 px wide is a thumbnail; vertical paid assets mobile only; square and vertical may crop when shared organically; intro 150 / 3,000; headline 70 / 200 | "LinkedIn Marketing Solutions Help, Single image ads advertising specifications, read October 8, 2026" | linkedin.com/help/lms/answer/a426534 | about 2 months | primary | 2026-10-08 | 2026-10-08 | 63 |
| Video ads: 3 s to 30 min, 15 to 30 s recommended; 75 KB to 500 MB; MP4, H.264 or VP8; under 30 fps; 16:9, 1:1, 4:5, 9:16 with ranges; SRT; thumbnail 2 MB; desktop upload only; 25 a day; no ProRes | "LinkedIn Marketing Solutions Help, Video ads advertising specifications, read October 8, 2026" | linkedin.com/help/lms/answer/a424737 | about 2 months | primary; business.linkedin.com page says "recommended frame rate 30 fps" (conflict, not published) | 2026-10-08 | 2026-10-08 | 63 |
| Document ads: 100 MB, 300 pages, 1 million words, up to five documents; PDF only for lead gen; links clickable after download; intro 150 / 3,000; headline 70 / 200; under 10 pages recommended on the business spec page | "LinkedIn Marketing Solutions Help, Document ads advertising specifications, read October 8, 2026" | linkedin.com/help/lms/answer/a493903; business.linkedin.com/advertise/ads/sponsored-content/document-ads/specs | about 11 months | primary | 2026-10-08 | 2026-10-08 | 63 |
| Document ad layouts in inches (Letter, A4, Legal and others); links and CTAs not clickable in the player | "LinkedIn Marketing Solutions Help, Document ads best practices, read October 8, 2026" | linkedin.com/help/lms/answer/a726534 | about 3 years | primary | 2026-10-08 | 2026-10-08 | 63 |
| Carousel ads: 2 to 10 cards, 10 MB a card, max 4320 x 4320, 1080 x 1080 recommended, JPG, PNG, non-animated GIF | "LinkedIn Marketing Solutions Help, Carousel Ads advertising specifications, read October 8, 2026" | linkedin.com/help/lms/answer/a427022 | about 11 months | primary | 2026-10-08 | 2026-10-08 | 63 |

Do-not-publish rows:

| Claim | Where seen | Why it does not clear | Logged |
|---|---|---|---|
| LinkedIn company cover 4200 x 700 or 1128 x 191 | size guides, 2024 to 2026 | LinkedIn's current Page image help says 1512 x 256 | 2026-10-08 |
| About 200 characters show before "see more" | a member post | not on any LinkedIn help page | 2026-10-08 |
| A pixel size for LinkedIn documents or PDF carousels | size guides | LinkedIn gives layouts in inches and a one-size rule, no pixel size | 2026-10-08 |
| Organic LinkedIn video capped at 5MB | a 2024 size guide | LinkedIn's help says 5 GB | 2026-10-08 |

## Watch rows

```
2027-01-08,linkedin-post-specs,Quarterly recheck: re-read every LinkedIn help and Marketing Solutions spec page cited (a528176 a527229 a564109 a548372 a1311816 a518909 a523054 a563309 a568217 a549049 lms a426534 a424737 a493903 a726534 a427022); update rows and the changelog; move Reviewed,linkedin.com/help,2026-10-08
2027-01-08,linkedin-post-specs,Video length and MOV conflict: check whether a1311816 (10 minutes and no MOV) has been updated to match a548372 (15 minutes) and a564109 (MOV listed); if so drop the conflict from the page and the FAQ,linkedin.com/help/linkedin/answer/a1311816,2026-10-08
2027-01-08,linkedin-post-specs,hubStudio LinkedIn module: recheck src/content/help/linkedin.md for video or document publishing; if added update the hubStudio section and the last FAQ,src/content/help/linkedin.md,2026-10-08
```

## Live pages this piece contradicts

None. `src/pages/solutions/platforms/linkedin.astro`,
`src/pages/app/publish.astro`, `src/pages/services/design/social-media.astro`
and `src/pages/services/design/presentation-design.astro` carry no LinkedIn
dimension, file weight or duration; `/app/publish` already says "a carousel
of up to eight slides" and "Video doesn't go to LinkedIn from hubStudio yet",
which this piece matches.

## Closed in this run

- First-party figures used: none. hubStudio app facts come from
  `src/content/help/linkedin.md`, `account-and-sign-in.md`,
  `assets-library.md` and `hubstudio-positioning.md`.
- Spec rows published under deviation 7: none. Western platform, primary
  sources (`editorial/CLAUDE.md`, Wave two).
- Claims cut: listed under Research gate. The FAQ on carousel PDFs is
  thinner (no pixel size), by design.
- Briefs amended: none needed. The seoDesc was trimmed to 144 characters
  inside the brief module before drafting.
- Live articles corrected: none (see above).
- Rows for `watch.csv`: three, above, for the integrator to merge.
- Settled fallbacks applied: 4 (length over target: 1,741 prose words
  against a 1,500 floor, the overage is the four tables, the FAQ and the
  mandated changelog); 5 (the specs hub `/resources/specs` has no page in
  `src/pages/`, so the cluster hub stays unlinked and is not mentioned in
  body copy); 12 (no showcase clip; the existing localized LinkedIn app
  capture can be reused).
- Runbook substitutions: LinkedIn's help pages serve a relative age, not a
  date, so each row carries "about N, read October 8, 2026" in place of a
  publication date. Captures are saved HTML, not screenshots, because the
  pages are public text. The `schedule.csv` row was not touched, per the
  wave two drafter instructions (shared file, integrator merges): status
  reached `image_ready`, researched, drafted, quality_passed and
  image_generated all on 2026-10-08.
- Web search budget for the session ran out after the four SERP phrasings
  and the LinkedIn-domain lookups; every cited page had already been found
  and was fetched directly, so nothing on the page depends on a search that
  did not run.
- Integration, 2026-10-08: the first watch row now asks to move dateModifiedISO with the Reviewed date. No value on this page differs from the other wave two drafts.
- Ledger additions merged into `sources/verified-sources.md` (section "Added 2026-10-08 (ledger rows from brief 63, linkedin-post-specs)") and watch rows merged into `watch.csv`, sorted by due date.

## SEO counts (after the quality pass)

| Field | Chars or words | Ceiling | Pass |
|---|---|---|---|
| Title | 45 | 52 | yes |
| Meta description | 144 | 152 | yes |
| Excerpt | 22 words | 25 words | yes |

## Publish (fill in when step 4 runs)

- Article page created:
- `src/data/insights.ts` entry added:
- Build:
- `npm run check`:
- Commit and push:
- Resend email sent:

## Translation (three passes, /deep-translate)

- Dictionary id: `resources/insights/linkedin-post-specs`, French address `/fr/ressources/analyses/linkedin-specifications-des-publications` in `src/i18n/routes.ts`.
- Pass files: `.i18n-work/passes/fr/resources/insights/linkedin-post-specs/` and `.i18n-work/passes/zh/resources/insights/linkedin-post-specs/` (pass1, pass2 worked from pass 1 alone, pass3 native editor's finish).
- `npm run i18n:tx -- pending fr` and `pending zh`: nothing pending. `npm run i18n:local -- check`: every page translated in French and Chinese (222 pages). `npm run i18n:guard`: pass.

### French changes

Second round (leftovers after the English fixes):

Conventions: Mo / Ko / Go, kbit/s and Mbit/s, i/s for fps, decimal comma in ratios (1,91:1, 2,4:1), non-breaking space in 1 080, 1 512, 3 000. Pixel sizes « 1 080 sur 1 350 » in prose, « 1 080 x 1 350 » in tables. App labels from the app's fr.json: Éditeur d’images, « Conseillé » (Best), Mes connexions, Rédiger avec l’IA, Je l’écris moi-même, Format de post LinkedIn, Bibliothèque de contenus, Bannière de profil, Couverture de page, diapositives, Publier maintenant / Programmer, Validation. LinkedIn's own French terms: page entreprise, pages Carrières, onglet Vie en entreprise.

[lede] pass1 -> pass3: « indique 1 512 sur 256 pixels pour la couverture. De nombreux guides... affichent encore » -> « la couverture mesure 1 512 sur 256 pixels. Bien des guides de dimensions en sont pourtant restés à une valeur plus ancienne. » / why: verb-led, native contrast.
[answer box] pass1 -> pass3: colon list « au moins 552 sur 276 pixels, 1 080 de large recommandé, tout format... » -> three verbs (« doit mesurer », « recommande », « accepte », « plafonne »); app label sentence linked with « d’ailleurs ». / why: the English fragment list rebuilt as French sentences.
[review note] pass1 -> pass3: « Le Centre d’aide indique l’ancienneté de chaque article plutôt qu’une date » -> « n’affiche pas de date, mais l’ancienneté de chaque article »; « désignée » -> « signalée ». / why: clearer contrast, natural verb.
[spec table] pass1 -> pass3: « Limite fixée par LinkedIn » -> « Limite selon LinkedIn »; « Post multiphoto » -> « Post à plusieurs photos »; « affichage limité à 4:5 » -> « affichées en 4:5 au plus »; « WEBM et MKV sur moins de supports » -> « sur une partie seulement ». / why: shorter, plain table French.
[1200 x 627] pass1 -> pass3: « Un chiffre qui circule mérite d’être démêlé » -> « Un chiffre en circulation demande à être remis à sa place »; « correspondent à » -> « correspondent en réalité à ». / why: idiom; stresses the correction.
[video length] pass1 -> pass3: « Quelle durée maximale pour une vidéo LinkedIn ? » -> « Combien de temps peut durer une vidéo LinkedIn ? »; « Elles ne concordent pas » folded into « qui ne s’accordent pas ». / why: natural question; no stub sentence.
[video length quote] pass1 -> pass2: « fixe un maximum de 15 minutes » -> « fixe le maximum à 15 minutes »; « indique 10 minutes » -> « s’en tient à 10 minutes »; « mentionne pourtant le MOV ». / why: brings out the contradiction the paragraph is about.
[safe build] pass1 -> pass3: « satisfait les trois pages. C’est le choix sûr » -> « passe sur les trois pages : c’est l’option sûre »; « traité plus bas avec les échecs » -> « examiné plus bas avec les causes d’échec ». / why: rhythm and precision.
[mobile crops] pass1 -> pass3: « fixent cinq règles sur ce qui reste visible » kept; « Deux sont écrites pour le mobile » -> « Deux visent le mobile »; « Un cadre 9:16 de story perd son haut » -> « Une story en 9:16 y perd son haut ». / why: lighter syntax.
[mobile crops] pass1 -> pass2: « La première image fixe la grille » -> « dicte la grille »; « Les images de lien sont complétées, pas recadrées » -> « bordées, pas recadrées »; « Les publicités verticales sont réservées au mobile » -> « La publicité verticale ne vit que sur mobile ». / why: stronger verbs in the bold leads.
[ads intro] pass1 -> pass3: « ne suivent pas celles de l’organique » -> « ne calquent pas celles de l’organique ». / why: exact verb for "don't track".
[ad copy] pass1 -> pass3: « Les textes publicitaires ont deux chiffres par champ : le seuil où ils sont tronqués et celui où ils s’arrêtent » -> « Chaque champ d’une annonce connaît deux limites : celle où le texte est tronqué, et celle où il s’arrête net ». / why: English frame removed.
[failures] pass1 -> pass2: « La modification après publication » -> « Les retouches après publication »; « Un post contient l’un ou l’autre » -> « Un lien et une image dans le même post. C’est l’un ou l’autre. »; « à raison de 25 par 24 heures » -> « dans la limite de 25 par période de 24 heures ». / why: idiomatic and unambiguous.
[hubStudio section] pass1 -> pass3: H2 « Comment hubStudio publie sur les profils... » -> « Publier sur les profils et pages entreprise LinkedIn avec hubStudio »; « Votre profil remonte » -> « Votre profil s’affiche »; « La connexion dure 60 jours » -> « vaut 60 jours ». / why: no IT jargon, native headline.
[hubStudio section] pass1 -> pass3: « Publiez ensuite maintenant ou programmez le post » -> « Reste à publier maintenant ou à programmer »; « donne lieu à de nouvelles tentatives, trois au total » -> « donne lieu à de nouveaux essais, trois au total ». / why: avoids the clumsy « ensuite maintenant ».
[hubStudio section] pass1 -> pass2: « exportez sous 5 Mo et les deux voies accepteront le fichier » -> « Comme l’outil de publication de LinkedIn plafonne une photo à 5 Mo, exportez sous ce seuil : le fichier passera par les deux voies. » / why: cause before advice, French order.
[cost] pass1 -> pass2: « Publier sur LinkedIn ne coûte rien. Les rédactions... sont imputées » -> « La publication sur LinkedIn est gratuite. Les rédactions... sont débitées de votre solde prépayé »; « confier tout le canal » -> « déléguer tout le canal ». / why: wallet vocabulary (solde, débiter), not credits.
[FAQ] pass1 -> pass3: MOV answer « affirme toujours que le MOV n’est pas pris en charge » kept, « Le codec qui pose problème est l’Apple ProRes » -> « Le codec à problème, c’est l’Apple ProRes »; character-limit answer « sur la publication d’actualités » -> « sur la publication de posts », « Les publicités comptent autrement » -> « suivent d’autres règles ». / why: register and accuracy.
[SEO] title « Formats LinkedIn 2026 : image, vidéo, document | hubStudio » (58 characters).

### Chinese changes

Second round (leftovers after the English fixes):

[title] pass1 -> pass3: LinkedIn 图片、视频与文档规格（2026 年版） -> 2026 年 LinkedIn 图片、视频与文档规格 / why: year up front, as Chinese spec headlines run
[lede] pass1 -> pass3: 其中列出的封面尺寸为……不少尺寸指南仍在沿用旧数字 -> 封面尺寸写的是……不少尺寸指南却还在沿用旧数字 / why: one sentence with a contrast, not two flat statements
[image size] pass1 -> pass3: 2026 年 LinkedIn 信息流帖子的图片尺寸：至少…… -> 2026 年，LinkedIn 信息流帖子的图片至少要…… / why: a sentence, not a label-colon list
[image size] pass1 -> pass3: 为该尺寸打上“推荐”标签，注明最适合 LinkedIn 帖子 -> 给这一尺寸打上“推荐”标签，用于 LinkedIn 帖子 / why: app label 推荐 kept, padding cut
[method] pass1 -> pass3: 2026 年 10 月 8 日审订……只显示文章的更新时长 -> 审订于 2026 年 10 月 8 日……只标文章距今多久更新 / why: plainer, matches how the help center reads in Chinese
[method] pass1 -> pass3: 两种数字都列出，并注明哪个页面更新 -> 两个数字并列，并注明哪一页较新 / why: "更新" was ambiguous (newer / updated)
[post table] pass1 -> pass3: "Document" header was prefilled 文件 -> 文档 / why: LinkedIn's document post, and the ad row shares the key
[post table] pass1 -> pass3: 来源及截至 2026 年 10 月 8 日的更新时长 -> 来源及更新时长（截至 2026 年 10 月 8 日） / why: shorter header
[post table] pass1 -> pass3: 桌面端、iOS 和 Android 均支持 MP4 和 MOV；WEBM 和 MKV 支持的平台较少 -> MP4 和 MOV 支持桌面端、iOS 和 Android；WEBM 和 MKV 支持范围较小 / why: format first, as in a spec cell
[post table] pass1 -> pass3: 最高 3600 万像素 / 100 万字 -> 最高 3,600 万像素 / 100 万词 / why: glossary thousands separator; words, not characters
[1200 x 627] pass1 -> pass3: 有一个流传甚广的数字需要厘清 -> 有个流传很广的数字需要澄清……这其实是 LinkedIn 对……自定义图片的规格要求 / why: untangled the long attributive
[video length] pass1 -> pass3: 按两个 LinkedIn 页面中较新的一个，是 15 分钟 -> 按 LinkedIn 较新的那一页，是 15 分钟 / why: direct answer first
[video length] pass1 -> pass3: LinkedIn 的视频问题排查文章（约两年前更新）给出的上限 -> 视频问题排查文章约两年前更新，给出的上限 / why: parentheses turned into clauses, reads like reporting
[video length] pass1 -> pass3: 真正的陷阱是 ProRes，详见下文的上传失败一节 -> 真正的陷阱在 ProRes，见下文“上传失败”一节 / why: tighter cross-reference
[Life tab] pass1 -> pass3: “生活”标签页的图片位只有开通了招聘主页的公司主页才有 -> “生活”标签页的几个图片位，只有开设了招聘主页的公司主页才有 / why: rhythm, comma pause
[mobile crops] pass1 -> pass3: 说明哪些内容能在信息流中完整保留 -> 关于哪些内容能在信息流里完整显示，LinkedIn 的页面给出了五条规则 / why: topic first, native order
[mobile crops] pass1 -> pass3: 第一张图片决定版式……它会置于上方 -> 第一张图定版式……就排在最上方 / why: punchier bold lead, verbs over 置于
[mobile crops] pass1 -> pass3: 链接图片会加白边，不会裁剪 -> 链接图片补白边，不裁剪 / why: list heading register
[mobile crops] pass1 -> pass3: 视频边缘属于界面。文字和标志不要放在顶部…… -> 视频边缘留给界面。顶部、底部和两侧可能被……遮挡，文字和标志不要放在那里 / why: cause before instruction
[mobile crops] pass1 -> pass3: 广告被自然分享时 -> 广告以非付费方式分享时 / why: "organically" made explicit for a business reader
[ads] pass1 -> pass3: 付费广告规格放在另一个帮助中心……文件大小却只能是其十分之一 -> 付费广告的规格另有一个帮助中心……与自然内容的规格并不同步 / why: smoother clause chain
[ad copy] pass1 -> pass3: 从哪里开始截断，到哪里不能再写 -> 一个是截断点，一个是上限 / why: parallel noun pair, crisp
[failures] pass1 -> pass3: LinkedIn 上传为什么会失败 -> LinkedIn 上传失败的原因 / why: H2 as a statement, like the English
[failures] pass1 -> pass3: 这种格式也许能上传 -> 这种格式或许能上传……视频广告干脆不接受 / why: written register, stronger close
[failures] pass1 -> pass3: 合并图层。所有页面统一为同一尺寸 -> 先合并图层，再把所有页面统一为同一尺寸 / why: sequenced steps
[failures] pass1 -> pass3: 只能删除帖子，重新发布 / 链接和图片同时出现 -> 只能删帖重发 / 链接和图片同发……只能二选一 / why: set phrases
[hubStudio] pass1 -> pass3: LinkedIn 记录您担任管理员的所有公司主页 -> LinkedIn 登记您为管理员的所有公司主页……点一下即可续期 / why: natural verb
[hubStudio] pass1 -> pass3: 也可以点击“我自己写”，不调用 AI，自行输入 -> 若不想调用 AI，点击“我自己写”自行输入 / why: condition first; app labels AI 起草 / 我自己写 kept
[hubStudio] pass1 -> pass3: 两条途径都能接受 -> 两条路径都能通过 / why: the file passes, the route does not "accept"
[hubStudio] pass1 -> pass3: 有两种形式仍在应用之外 -> 有两类内容仍需在应用之外处理 / why: no English skeleton
[hubStudio] pass1 -> pass3: 希望把整个渠道交出去的团队 -> 希望把整个渠道交由他人打理的团队 / why: complete the idiom
[FAQ] pass1 -> pass3: 广告的计算方式不同 -> 广告的计法不同 / why: shorter

## Publish

- Page created: `src/pages/resources/insights/linkedin-post-specs.astro` (publish-draft.mjs, then `--update` for FAQ schema and internal links).
- `src/data/insights.ts` entry added (newest first); insight placements checked (category claimed by at least one layer).
- Build: `npm run build` passed (content:todo, i18n guard, all routes prerendered).
- `npm run check`: 0 errors, 0 warnings.
- Em dash (U+2014) in staged files: zero.
- Commit and push: `feat(editorial): publish wave two, fifteen pieces of 8 October in English, French and Chinese` on main.
- Resend email sent: yes, through `editorial/scripts/notify-publish.mjs` after the push.
