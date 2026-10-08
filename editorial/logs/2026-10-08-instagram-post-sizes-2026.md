# Run log: 2026-10-08, instagram-post-sizes-2026

| Field | Value |
|---|---|
| Brief | 54 (wave two), `scripts/wave2/54-instagram-post-sizes-2026.mjs` |
| Slug | instagram-post-sizes-2026 |
| Research file | research/instagram-post-sizes-2026.md |
| Output | output/instagram-post-sizes-2026.md |
| Body word count | 2,442 with tables, 1,930 prose only (target 1,500, a floor) |
| Body char count | 13,195 |
| Status reached | image_ready (steps 0 to 3 done; translation and publish by the integrator) |
| Model used at every step | Claude Opus 5.5, the most capable available in this environment; image gpt-image-2 at high quality |

## Research gate

| Gate | Done | Note |
|---|---|---|
| R1 claims mapped before looking anything up | yes | Ratio range, width rule, carousel count, file types and sizes, grid tile, Story and Reel, upload failures, hubStudio steps |
| R2 SERP mapped, four phrasings minimum | yes | instagram post size 2026; instagram carousel size; instagram profile grid 3:4 crop change; instagram portrait size 1080x1350 |
| R3 primary sources for every number | yes | Instagram Help Center, Instagram Platform developer docs, Meta Ads Guide, Meta Business Help Center, about.instagram.com |
| R4 Chinese-language web searched first | not applicable | Western platform, global market; the China counterpart is the existing RedNote page |
| R5 every figure interrogated (date, sample, method, who paid) | yes | Platform pages, undated on the page, read 2026-10-08 |
| R6 triangulated, conflicts published as ranges | yes | Ads Guide (4:5 recommended) against Business Help Center (1:1 recommended) published as two answers; app against API published side by side |
| R7 research file written before drafting | yes | |
| R8 reconciled after drafting | yes | Table in the research file |

**Gap statement, one sentence:** every ranking page repeats 1080-wide sizes without citing Instagram, prints a grid tile size Instagram never published, and none separates the app's limits (1.91:1 to 3:4, 20 items) from the Content Publishing API's (4:5 to 1.91:1, JPEG, 8 MB, 10 items).

**Research time spent:** about 2 hours 30 minutes active.

- Figures reused from the ledger: the Meta Ads Guide Reels and Stories ad rows (14% top, 35% bottom, 6% sides, 1440 x 2560) from brief 32, re-read 2026-10-08 and unchanged.
- Claims cut because they could not be sourced: a grid tile ratio or pixel size (none on any Instagram page); an Instagram grid-crop adjustment control (no help article found); an organic Story pixel size; a profile photo size; any engagement claim for 4:5 or 3:4; phones defaulting to 3:4.
- Conflicts published as a range rather than a single figure: Meta's Ads Guide (4:5, 1440 x 1800) against Meta's Business Help Center (1:1) for Instagram Feed image ads.
- Captures saved to `research/instagram-post-sizes-2026/`: 16 text captures of the served pages (Help Center pages were served only to a crawler user agent; a browser user agent got HTTP 400).

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

1. Draft from the research file: answer first, spec table, app against API, carousel, grid, safe areas, failures, hubStudio, RedNote, changelog, FAQ.
2. Weaknesses: (1) lead did not carry the query in the first 100 words; (2) "phone default 3:4" unsourced; (3) "replaced years ago" unsourced; (4) claim about how guides measure tiles unsourced; (5) "center crop" asserted for an unpublished crop; (6) grid blockquote lacked the January 2025 source; (7) "every tool goes through the API" overstated; (8) ads paragraph claimed a range the Business Help page does not print; (9) Reel failure row inferred a refusal Instagram does not state; (10) hubStudio grid preview could read as an Instagram spec.
3. Rewrite fixing all ten: lead reworded with the query; three unsourced clauses cut; grid advice reduced to "off all four edges"; RouteNote report added; "a tool that posts for you, the hubStudio app included"; ads paragraph limited to what each page says; Reel row reworded to the stated minimum; "its preview of the profile grid crop".
4. Production review: intro answer 58 words naming hubStudio once; four internal references present; Reviewed line under the lead; changelog before the FAQ so the file ends on the CTA.
5. AI-detection pass: removed a tidy closing line in the safe-area section, varied paragraph openings.
6. Em dash check zero; six blockquotes, each with a Source line and a year.
7. Cadence variant ran, no planted errors: one-line answers ("Twenty, if you post it in the app. Ten, if a tool posts it."), a long hubStudio paragraph next to a two-line studio paragraph, three parallel structures broken in the carousel and grid sections.
8. Source check 2 on every cited URL (results in the research file's R8); reconciliation table written; five clauses recorded as removed.
9. SEO counted: title 46 characters (48 with the YAML quotes the checker counts), meta 141, excerpt 22 words.
10. Second AI pass: no banned words (seamless, leverage, robust, unlock, elevate, delve, credits) found.
11. Human touch: "Go by the body.", "Two Meta pages, two answers." kept as one-offs.
12. Formatting: both tables at five columns or fewer; long lines hard-wrapped.
13. Five concepts: three trimmed prints of one still life on a worktable; a hand holding a phone over a contact sheet; a darkroom easel with masking blades set to three ratios; a framer's mat cutter mid-cut; a pinboard of proofs at different proportions. Chose the first: it shows the subject (one picture, three shapes) with no screen and no logo.

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

Run in place on `output/instagram-post-sizes-2026.md`. Changes: lead restructured ("The trouble starts in two places"); "Every tool that posts to Instagram for you, from a scheduler to the hubStudio app" cut to "A tool that posts to Instagram for you, the hubStudio app included"; "PNG fails the same way" became "A PNG meets the same wall"; grid blockquote rewritten with both announcement sources; grid advice cut to one instruction; three over-long lines rewrapped. Hostile-reader problems found and fixed: the grid section promised a number it could not give (now opens by saying so), no freshness signal near the top (Reviewed line added under the lead), the RedNote section read as a cross-sell (now answers a question), the hubStudio section listed placements without saying why Grid portrait is app-only (tied to the API limit). Structural ratio: two tables, six blockquotes, the rest prose; no bold-label template blocks outside the FAQ. Iteration 17: title 46, meta 141, excerpt 22 words, one H1, eleven H2, zero em dashes, American spelling (checker pass). Iteration 18: "Go by the body" and "before you call it done" each appear once; no repeated humanizer. SEO fields were already inside the house ceilings (52 / 152 / 25), so nothing was trimmed back.

## Image

- Prompt used: verbatim from the feature-image block in the output file (second version).
- Confirmed the prompt names no real person: yes.
- Attempts: two. The first frame had a steel ruler whose printed numbers ran 1 to 12 and then jumped to 26, an almost-but-not-quite text tell. The prompt was amended to a plain straightedge and a grid-only cutting mat, and the block in the output file updated to match.
- AI-tells checklist on the final frame: one light source from the left with one shadow direction; no text anywhere; no symmetrical faces (no people); paper edges hand cut and uneven; no melted objects; no repeated bokeh; grain and lifted blacks present.
- Saved to: `public/Images/insight-instagram-post-sizes-2026.webp`, 1536 x 1024, 179 KB, webp quality 78, no enlargement.

## House rule checks

| Check | Result |
|---|---|
| Competitor named, described or alluded to | zero; publishing tools referred to as a category only |
| `$` occurrences | zero |
| Em dash occurrences | zero (draft, research file, brief module, captures, this log) |
| Deliberate typos or planted errors | zero |
| Summary or conclusion section | none |
| Decorative ordinal in a repeated titled block | none |
| Stray Han characters | none |
| Statistics in blockquotes with source, date and method | six blockquotes, all sourced and dated |
| `check-draft.mjs` | all hard checks passed |

## Ledger additions

New block for `sources/verified-sources.md`, in the ledger's table format.

### Instagram organic and API specs, primary readings (added 2026-10-08, brief 54)

| Figure | Attribution to use | Source | Date | Confidence | Check 1 | Check 2 | Used in |
|---|---|---|---|---|---|---|---|
| Instagram keeps a photo at original resolution when 320 to 1080 px wide and between 1.91:1 and 3:4 (1080 wide, 566 to 1440 tall); unsupported ratios cropped; larger photos sized down to 1080 wide, smaller than 320 enlarged to 320. The article's meta description still says "up to 1080x1080 pixels" | "Instagram Help Center, image resolution article, read October 8, 2026" | help.instagram.com/1631821640426723 | undated, read 2026-10-08 | primary | 2026-10-08 | 2026-10-08 (re-fetched after drafting) | 54 |
| Carousel: up to 20 photos and videos in one post; the orientation chosen (square, portrait or landscape) applies to every item | "Instagram Help Center, sharing multiple photos or videos as a single post, read October 8, 2026" | help.instagram.com/269314186824048 | undated, read 2026-10-08 | primary | 2026-10-08 | 2026-10-08 | 54 |
| Reels: 1.91:1 to 9:16; minimum 30 FPS and 720 px; cover 420 x 654 (1:1.55), png or jpg | "Instagram Help Center, Reels resolution and size, read October 8, 2026" | help.instagram.com/1038071743007909 | undated, read 2026-10-08 | primary | 2026-10-08 | 2026-10-08 | 54 |
| Content Publishing API: images JPEG only, 8 MB, 4:5 to 1.91:1, 320 to 1440 wide, sRGB; Reels MOV or MP4, 3 s to 15 min, 300 MB; Stories 9:16, image 8 MB, video 3 to 60 s, 100 MB; carousels 10 items, cropped to the first image (1:1 default); 100 API-published posts per 24 hours, carousel counts as one | "Instagram Platform developer documentation, media reference and content publishing guide, read October 8, 2026" | developers.facebook.com/docs/instagram-platform/instagram-graph-api/reference/ig-user/media; .../content-publishing | undated, read 2026-10-08 | primary, API route only | 2026-10-08 | 2026-10-08 | 54 |
| API error subcodes: 2207009 ratio, 2207004 image too large, 2207005 image format, 2207026 video format, 2207028 carousel 2 to 10, 2207042 daily post cap | "Instagram Platform developer documentation, error codes, read October 8, 2026" | developers.facebook.com/docs/instagram-platform/instagram-graph-api/reference/error-codes | undated, read 2026-10-08 | primary | 2026-10-08 | 2026-10-08 | 54 |
| Instagram Feed image ad: JPG or PNG, 4:5 recommended, 1440 x 1800, min width 500, ratio 400 x 500 to 191 x 100, 30 MB; Instagram Feed carousel ad: 2 to 10 cards, 4:5 for image-only, 1:1 when any card is video, at least 1080 x 1080 | "Meta's Facebook Ads Guide, Instagram Feed image and carousel ad specs, read 8 October 2026" | facebook.com/business/ads-guide/update/image/instagram-feed; .../carousel/instagram-feed | undated, read 2026-10-08 | primary, Awareness, those placements | 2026-10-08 | 2026-10-08 | 54 |
| "1:1 is recommended for single-image ads to be delivered to Instagram Feed" (conflicts with the Ads Guide's 4:5) | "Meta Business Help Center, best practices for aspect ratios, read October 8, 2026" | facebook.com/business/help/103816146375741 | undated, read 2026-10-08 | primary, published as a conflict | 2026-10-08 | 2026-10-08 | 54 |
| No Instagram page (Help Center, about.instagram.com, developer docs) states a ratio or pixel size for the profile grid tile | "Instagram Help Center, about.instagram.com and Instagram Platform documentation, searched October 8, 2026" | the three domains | 2026-10-08 | primary (absence) | 2026-10-08 | 2026-10-08 | 54 |
| Vertical profile grid tested from August 2024 (head of Instagram, video Q&A) and announced in his Instagram Story on January 17, 2025 | "trade press reports, Social Media Today, August 18, 2024, and RouteNote, January 20, 2025"; event only, never the source of a number | socialmediatoday.com/news/instagram-chief-flags-coming-changes-profile-grid-displays/724532/; routenote.com/blog/instagrams-new-profile-grid-layout-from-squares-to-rectangles/ | 2024-08-18; 2025-01-20 | two independent reports of Instagram's own statements | 2026-10-08 | 2026-10-08 | 54 |
| Reused, unchanged: Instagram Reels and Stories ads 9:16, 1440 x 2560, leave about 14% top, 35% bottom, 6% each side free | existing brief 32 rows | .../video/instagram-reels; .../image/instagram-story | re-read 2026-10-08 | primary, ads only | 2026-09-10 | 2026-10-08 (third read) | 32, 54 |

Do-not-publish rows: profile grid tile "3:4" or "1015 x 1350" as an Instagram spec (tool blogs only, no Instagram page); organic Story 1080 x 1920 as an Instagram spec (no Instagram page prints it); carousel landscape 1080 x 608 (contradicts Instagram's 566).

## Watch rows

```
2027-01-08,instagram-post-sizes-2026,"Quarterly spec recheck. Re-read the Instagram Help Center image resolution (1.91:1 to 3:4, 1080 wide, 566 to 1440 tall), carousel (20 items, one orientation) and Reels (1.91:1 to 9:16, 30 FPS, 720 px, cover 420 x 654) articles; the Instagram Platform media reference, content publishing guide and error codes (JPEG, 8 MB, 4:5 to 1.91:1, 320 to 1440 wide, 10-item carousels, 100 posts in 24 hours); the Meta Ads Guide Instagram Feed image and carousel pages and the Reels and Stories pages (14/35/6); the Business Help Center aspect ratio page (1:1 for Instagram Feed). Check whether any Instagram page now states a profile grid tile ratio, and whether the API now accepts 3:4 or 20-item carousels. Update the rows, add a dated changelog line, move the reviewed date.",help.instagram.com/1631821640426723,2026-10-08
```

## Live pages this piece contradicts

None. Checked `/app/image-tools` (Feed portrait 1080 x 1350), `/app/publish` (every picture converted to a JPEG), the Instagram and assets-library help articles (Grid portrait 3:4 for the Instagram app only, Reel 3 s to 15 min, Story clip 60 s, 100 posts a day with a carousel counting as one), `/solutions/platforms/meta` (no spec values) and `meta-tiktok-against-douyin-rednote` (no organic Instagram feed values). All agree with this page.

## Closed in this run

- First-party figures used: none as figures. hubStudio app facts come from `src/content/help/instagram.md`, `src/content/help/assets-library.md` and `hubstudio-positioning.md`. The RedNote 3:4 at 1080 x 1440 is the counted value `/resources/insights/rednote-note-cover-specs` already publishes, described on this page as counted.
- Spec rows published under deviation 7: none. Western platform, primary readings, no disclaimer, visible Reviewed date.
- Claims cut and which section is now thinner: grid tile ratio (the grid section says Instagram publishes none and gives a direction instead of a number); organic Story pixel size (Story row shows the API's 9:16 and says no pixel size is published).
- Briefs amended: none needed. The brief asked to check whether the grid crop changed to 3:4 and to cite only Instagram; the page records that Instagram publishes no tile ratio.
- Live articles corrected: none (see above).
- Rows for `watch.csv`: one, above.
- Settled fallbacks applied: 12 (no showcase clip; the page ships with its hero image; the help center's existing localized Image editor capture can be reused). The specs hub `/resources/specs` is not referenced, so fallback 5 did not arise.
- Changelog placement: the brief asks for a dated changelog at the foot. It sits as the last section before the FAQ, because SPEC.md requires the file to end on the CTA, the same placement as the RedNote spec page.
- Title choice: the brief's working H1 is kept as the H1; the frontmatter title (and SEO title) is "Instagram Post Size 2026: Feed, Carousel, Grid" so it carries the primary query.
- Runbook substitutions: Instagram Help Center pages return HTTP 400 or a script shell to a browser user agent; they were read with a crawler user agent and the text extracted from the served HTML, saved as text captures instead of screenshots. Steps 4 (publish, French and Chinese) and 5 (email) are run by the integrator, as the wave two drafter instructions specify; schedule.csv, watch.csv and the ledger are merged by the integrator from this log.
- Integration, 2026-10-08: API posting cap reconciled with instagram-reels-stories-specs. The Content Publishing guide prints 100 API-published posts in 24 hours in its rate limit section and 50 in its carousel section (capture `research/instagram-reels-stories-specs/meta-dev-content-publishing-check1-2026-10-08.txt`). The blockquote, the failures table and the FAQ now print both; claims row and R8 row added to the research file; the ledger row and the watch row say the same.
- Ledger additions merged into `sources/verified-sources.md` (section "Added 2026-10-08 (ledger rows from brief 54, instagram-post-sizes-2026)") and watch rows merged into `watch.csv`, sorted by due date.

## SEO counts (after the quality pass)

| Field | Chars or words | Ceiling | Pass |
|---|---|---|---|
| Title | 46 | 52 | yes |
| Meta description | 141 | 152 | yes |
| Excerpt | 22 words | 25 words | yes |

## Handoff for the publish step

- Suggested category: Platform specs.
- French slug proposal: `instagram-tailles-des-publications-et-carrousels-2026`.
- Hero alt text: "Three matte prints of the same vase still life, trimmed to landscape, square and portrait, on a worn oak worktable beside a straightedge, a craft knife and paper offcuts."
- Internal links: Meta platform page -> /solutions/platforms/meta; social media design service -> /services/design/social-media; publishing page of the hubStudio app -> /app/publish; RedNote note and cover specs -> /resources/insights/rednote-note-cover-specs.

## Translation (three passes, /deep-translate)

- Dictionary id: `resources/insights/instagram-post-sizes-2026`, French address `/fr/ressources/analyses/instagram-formats-des-publications-et-carrousels-2026` in `src/i18n/routes.ts`.
- Pass files: `.i18n-work/passes/fr/resources/insights/instagram-post-sizes-2026/` and `.i18n-work/passes/zh/resources/insights/instagram-post-sizes-2026/` (pass1, pass2 worked from pass 1 alone, pass3 native editor's finish).
- `npm run i18n:tx -- pending fr` and `pending zh`: nothing pending. `npm run i18n:local -- check`: every page translated in French and Chinese (222 pages). `npm run i18n:guard`: pass.

### French changes

First round:

[title, og:title] pass1: the English title carries literal quotes (&quot;…&quot;, a data slip in src/data/insights.ts); the French drops them: « Taille des posts Instagram 2026 : fil, carrousel, grille | hubStudio ».
[chapô] pass1 -> pass3: « Pour connaître la taille… les pages d’aide d’Instagram répondent à l’essentiel » -> « Quelle taille pour une publication Instagram en 2026 ? Sur l’essentiel, les pages d’aide d’Instagram tranchent » / why: SEO question turned into a journalist’s lead.
[chapô] pass1 -> pass3: « Les difficultés surgissent à deux endroits… qui obéit à des règles » -> « Les difficultés naissent à deux endroits… régie par des règles » / why: lighter participle, no double relative.
[taille] pass1 -> pass2: « Visez 1 080 pixels de large. Instagram conserve tout format… : une photo… » -> « Retenez 1 080 pixels de large. Instagram conserve tous les formats… ; une photo… »; « accepté » -> « admis » / why: rhythm and precision.
[citation] pass1 -> pass2: « Instagram conserve une photo dans sa résolution d’origine lorsqu’elle mesure… » -> « Instagram conserve la résolution d’origine d’une photo dont la largeur… et dont le format… » / why: tighter subordinate structure.
[bizarrerie] pass1 -> pass3: « Une bizarrerie à connaître… C’est lui qui fait foi » -> « Une bizarrerie mérite d’être signalée… alors que le corps du texte énonce la règle de largeur. Fiez-vous au corps du texte » / why: one sentence with a contrast instead of three choppy ones.
[tableau] pass1 -> pass2: « Le format le plus large conservé par Instagram » -> « Format le plus large conservé par Instagram »; « Un seul format pour toutes les diapositives » -> « Même format pour toutes les diapositives » / why: table cells as French labels, no article.
[tableau] pass1 -> pass2: « Photo floue » -> « Photo qui manque de netteté »; « Attendre que la fenêtre glissante se libère » -> « Attendre le renouvellement de la fenêtre glissante » / why: closer to what the reader sees, correct image.
[API] pass1 -> pass2: « deux portes différentes… passe par l’API » -> « deux portes d’entrée distinctes… emprunte l’API »; « Un PNG se heurte au même mur, puisque » -> « Un PNG bute sur le même obstacle : » / why: idiom, colon instead of a causal clause.
[pub] pass1 -> pass3: « La publicité ajoute une troisième lecture » -> « La publicité livre une troisième lecture »; « Son propre Centre d’aide Business » -> « Le Centre d’aide Meta Business, lui, » / why: English possessive dropped.
[pub] pass1 -> pass3: « donc l’un comme l’autre passe. Le choix du guide lui-même, c’est le 4:5 » -> « et passent donc l’un comme l’autre. Sa préférence va au 4:5 » / why: spoken cleft sentence removed.
[carrousel] pass1 -> pass2: « Vingt si vous le publiez dans l’application. Dix si c’est un outil qui le publie » -> « Vingt si vous le publiez dans l’application, dix si un outil s’en charge » / why: one balanced sentence.
[carrousel] pass1 -> pass2: « limite une publicité carrousel à 2 à 10 cartes » -> « fixe une publicité carrousel entre 2 et 10 cartes » / why: « à 2 à » was clumsy.
[grille] pass1 -> pass3: « a été évoqué par le patron d’Instagram… puis annoncé » -> « a été annoncé à demi-mot par le patron d’Instagram… puis officialisé » / why: renders « trailed » and « announced » distinctly.
[grille] pass1 -> pass3: « Ouvrez ensuite le profil et vérifiez avant de considérer le travail terminé » -> « Enfin, ouvrez le profil et vérifiez de vos yeux avant de considérer le travail comme terminé » / why: the concrete gesture the English asks for.
[zones] pass1 -> pass2: « C’est aussi une marge raisonnable pour un reel organique. Sachez simplement que… » -> « La marge vaut aussi pour un reel organique, à condition de savoir que vous empruntez une règle publicitaire » / why: two short sentences joined, less spoken.
[dépannage] pass1 -> pass2: « la procédure de dépannage générale d’Instagram est courte » -> « la marche à suivre générale d’Instagram tient en quelques étapes » / why: idiomatic.
[hubStudio] pass1 -> pass3: « signalé comme le choix conseillé » -> « marqué « Conseillé » » (app label); « ce qui correspond à la limite » -> « ce qui concorde avec la limite »; « Le montage ne coûte rien » -> « La retouche est gratuite » / why: app wording from fr.json, image vocabulary.
[hubStudio] pass1 -> pass2: « choisissez-le dans la Bibliothèque de contenus » -> « piochez-le dans la Bibliothèque de contenus »; « convertie à la sortie » -> « À l’envoi, chaque image est convertie » / why: verb variety, word order.
[studio] pass1 -> pass2: « Si vous préférez qu’on produise pour vous, le service… est la voie du studio » -> « Si vous préférez déléguer la production, passez par le studio et son service de design pour les réseaux sociaux » / why: English « is the studio route » calque removed.
[RedNote] pass1 -> pass3: « Proches, mais pas identiques, et pas issus du même type de source » -> « Des formats voisins, mais pas identiques, et issus d’un autre type de source » / why: complete noun phrase answering the heading.
[historique] pass1 -> pass2: « Première publication. Vérifiée à partir du… » -> « Première publication. Valeurs vérifiées sur le… » / why: ambiguous agreement removed.
[FAQ] pass1 -> pass3: « il fonctionne donc que vous publiiez à la main ou via un outil » -> « il fonctionne donc aussi bien à la main que via un outil »; « conserve aussi » -> « accepte également » / why: lighter, no repeated « aussi ».
[FAQ] pass1 -> pass2: « un format plus haut que le 4:5… un format autre que le JPEG » -> « une image plus haute que le 4:5… un format autre que le JPEG »; « hors de la plage de 2 à 10 éléments » -> « de moins de 2 ou de plus de 10 éléments » / why: no clash between ratio and file format.

Second round (leftovers after the English fixes):

Round 1 pass files kept as round1-*.json / round1-changes.md. This round: unit 0 only (title without the stray quotes).

[title] pass1: "Taille des posts Instagram 2026 : fil, carrousel, grille | hubStudio" / why: round 1 title reused; the English change only removed quotes.

### Chinese changes

First round:

[title/og] pass1 -> pass2: "Instagram 帖子尺寸 2026：动态、轮播、网格" -> "2026 年 Instagram 帖子尺寸：动态、轮播与主页网格" / why: year first as Chinese headlines do; the English straight quotes dropped; 主页网格 is the app's term.
[lede] pass1 -> pass3: "Instagram 自己的帮助页面解决了大部分...麻烦从两个地方开始：...它遵守更严格的规则" -> "Instagram 自家的帮助页面已经回答了大半...真正的麻烦在两处：一是...规则更严；二是主页网格，规则 Instagram 从未写明" / why: English relative clauses replaced by a 一是/二是 frame.
[reviewed] pass1 -> pass2: "对照 Instagram 帮助中心、Instagram 的开发者文档..." -> "依据为 Instagram 帮助中心、Instagram 开发者文档和 Meta 广告指南" / why: possessive chain dropped.
[size answer] pass1 -> pass3: "把它做成 1,080 像素宽...而且文件必须是最大 8 MB 的 JPEG" -> "宽度定为 1,080 像素即可...文件也须为不超过 8 MB 的 JPEG" / why: written register, 不超过 for limits.
[oddity] pass1 -> pass3: "一个值得知道的怪事：...仍然承诺" -> "有一处反常值得留意：...页面摘要至今仍写着" / why: "promises" is not 承诺 for a meta description.
[table] pass1 -> pass2: "API 拒绝它", "由工具发布", "每一张都是同一个形状" -> "API 拒收", "通过工具发布", "所有图片统一形状" / why: table shorthand, no pronouns.
[after table] pass1 -> pass3: "也要注意表格里没有的东西" -> "表中缺席的项目也值得一提" / why: native phrasing; the two absences split by a semicolon.
[API door] pass1 -> pass3: "两扇不同的门，而 API 的那扇更窄。一个替您发布...的工具" -> "两道门，API 这道更窄。凡是代您发布到 Instagram 的工具" / why: tighter image, 凡是 for the generic.
[API quote] pass1 -> pass2: "允许在滚动的 24 小时内...它的轮播部分仍然写着 50" -> "滚动 24 小时内最多可通过 API 发布 100 条帖子...而轮播部分写的仍是 50 条" / why: measure words and contrast connector.
[3:4 refusal] pass1 -> pass3: "手动发布很顺利，但会被 API 拒绝。PNG 也会撞上同一堵墙" -> "手动发布畅通无阻，走 API 却会被拒。PNG 同样会碰壁，因为 API 只认 JPEG" / why: idiom and parallel rhythm.
[ads] pass1 -> pass3: "广告又加了第三种说法...它自己的商务帮助中心为同一版位推荐 1:1" -> "广告则是第三种说法...而 Meta 自己的商务帮助中心，为同一版位推荐的却是 1:1" / why: contrast marked with 却.
[carousel] pass1 -> pass2: "如果您在应用里发布，二十张。如果是工具发布，十张。" -> "在应用里发布，20 张；交给工具发布，10 张。" / why: balanced short clauses, digits as in spec copy.
[carousel rule] pass1 -> pass2: "实用的规则来自这两个页面" -> "两个页面合起来，得出一条实用规则" / why: native topic-comment order.
[grid] pass1 -> pass3: "没有人能告诉您这个数字" -> "这个数字谁也报不出来，因为 Instagram 从未公布" / why: native colloquial-written idiom.
[grid quote] pass1 -> pass2: "...都没有说明...，2026 年 10 月 8 日检索和查阅" -> "经 2026 年 10 月 8 日检索查阅，...均未说明" / why: the date clause moved to the front, where Chinese puts it.
[grid advice] pass1 -> pass3: "所以要为一个您无法测量的裁切做计划...再算完成" -> "既然裁切范围无从测量，就只能留足余地...确认无误再收工" / why: English "plan for" recast; native close.
[safe zone] pass1 -> pass2: "只是要知道您借用的是一条广告规则" -> "只是要清楚，这条规则是从广告那里借来的" / why: rhythm.
[failures table] pass1 -> pass2: "原因是什么", "照片被自己裁切了", "工具说图片太大" -> "原因", "照片被自动裁切", "工具提示图片过大" / why: table register.
[hubStudio] pass1 -> pass3: "“3:4 竖版”这个 3:4 的形状也在那里...或者“完整放入”放在图片的模糊副本上" -> "“3:4 竖版”同样在列，标注“仅限 Instagram 应用”...或选“完整放入”，以图片的模糊副本垫底" / why: app labels as in the app (推荐, 仅限 Instagram 应用), no calque.
[hubStudio] pass1 -> pass2: "生成它，从素材库中选择，或者上传...生成从您的预付余额中计费" -> "内容可以生成，可以从素材库选取，也可以上传...生成费用从您的预付余额中扣除" / why: native list and billing wording.
[studio route] pass1 -> pass3: "如果您更希望由别人为您完成，社交媒体设计服务就是工作室的路线" -> "若想把制作整个交出去，可选择工作室的社交媒体设计服务" / why: "route" calque removed.
[FAQ] pass1 -> pass2: "可以，在应用里...通过每个发布工具都使用的内容发布 API，3:4 会被错误 2207009 拒绝" -> "在应用里可以...但所有发布工具都要经过内容发布 API，而 API 只接受 4:5 至 1.91:1，3:4 会以错误 2207009 被拒" / why: cause before effect, as Chinese orders it.

Second round (leftovers after the English fixes):

[title] pass1: 2026 年 Instagram 帖子尺寸：动态、轮播与主页网格 | hubStudio / the English dropped its stray quotes; the Chinese title settled in round 1 (year first, 主页网格 as in the app) never carried them, so it comes back unchanged.
[title] pass2, pass3: no change / why: it must match the og:title, the H1 and the card title in common.json, all settled; a new wording here alone would split them.

## Publish

- Page created: `src/pages/resources/insights/instagram-post-sizes-2026.astro` (publish-draft.mjs, then `--update` for FAQ schema and internal links).
- `src/data/insights.ts` entry added (newest first); insight placements checked (category claimed by at least one layer).
- Build: `npm run build` passed (content:todo, i18n guard, all routes prerendered).
- `npm run check`: 0 errors, 0 warnings.
- Em dash (U+2014) in staged files: zero.
- Commit and push: `feat(editorial): publish wave two, fifteen pieces of 8 October in English, French and Chinese` on main.
- Resend email sent: yes, through `editorial/scripts/notify-publish.mjs` after the push.
