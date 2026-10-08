# Run log: 2026-10-08, youtube-video-thumbnail-specs

| Field | Value |
|---|---|
| Brief | 62 (wave two, `scripts/wave2/62-youtube-video-thumbnail-specs.mjs`) |
| Slug | youtube-video-thumbnail-specs |
| Research file | research/youtube-video-thumbnail-specs.md |
| Output | output/youtube-video-thumbnail-specs.md |
| Body word count | 2,674 with tables; 1,779 prose only (target about 1,500, a floor) |
| Body char count | 14,915 |
| Status reached | image_ready (steps 0 to 3; translation and publish are run by the integrator) |
| Model used at every step | Claude Opus 5.5 for research, drafting and both quality loops; gpt-image-2 at high quality for the hero. No cheaper path offered or taken |

## Research gate

| Gate | Done | Note |
|---|---|---|
| R1 claims mapped before looking anything up | yes | Video encoding, resolution ladder, limits, thumbnail rules, verification, banner, profile picture, watermark, failures, hubStudio facts |
| R2 SERP mapped, four phrasings minimum | yes | Five phrasings: thumbnail size 2026, recommended upload settings, banner size and safe area, video specs, video resolution |
| R3 primary sources for every number | yes | 13 YouTube Help pages plus the YouTube Data API reference, extracted text saved; one live-site capture |
| R4 Chinese-language web searched first | not applicable | Global Western platform; no China claim on the page |
| R5 every figure interrogated (date, sample, method, who paid) | yes | Platform's own documentation; the one observation states its sample (two thumbnails) and method |
| R6 triangulated, conflicts published as ranges | yes | YouTube's own two labels for the AI disclosure setting (Altered content, AI use) are both printed |
| R7 research file written before drafting | yes | Written before the first draft |
| R8 reconciled after drafting | yes | Table in the research file; five unsourced phrases removed |

**Gap statement, one sentence:** the ranking spec sheets still print 1280x720
and a 2MB cap as YouTube's thumbnail rule while YouTube's Help Center now
recommends 3840x2160 with a 50MB desktop limit, print a 1546x423 banner safe
area YouTube never publishes, and none cites the Help page per row or covers
the verification gate, the 4:5 replacement on vertical videos or the A/B test
downscale.

**Research time spent:** about 2 hours 15 minutes.

- Figures reused from the ledger: none (no YouTube rows existed).
- Claims cut because they could not be sourced: a thumbnail safe area in
  pixels as YouTube's rule (none exists; the duration badge observation runs
  instead), click-through claims about thumbnail design, "common choices" of
  resolution, "a 4K JPG fits easily under 50MB".
- Conflicts published as a range rather than a single figure: none numeric;
  the two labels YouTube uses for the AI disclosure setting are both printed.
- Captures saved to `research/youtube-video-thumbnail-specs/`: 13 Help page
  extracts, the videos.insert excerpt, one cropped capture of a search-result
  thumbnail with its duration badge (YouTube Creators' own video, other
  creators cropped out). Raw HTML (about 1.6MB a page) was not kept; the
  extracted article text was. One em dash in YouTube's own text in the
  9890437 extract was replaced with a spaced hyphen to keep the repo clean.

## Iterations (createarticle)

```
[x] Iteration 1  : journalist-style American English draft
[x] Iteration 2  : weakness identification
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

1. Draft v1 in the scratchpad: nine H2s, five tables, FAQ stubbed.
2. Ten weaknesses: (a) opener performed ("the number that will cost you")
   instead of leading with what breaks; (b) "usually" and "most often" claims
   with no frequency data; (c) "a 5K master gains nothing" went beyond the
   source; (d) "centered" banner safe area and "full image shows on TV" not on
   YouTube's page; (e) "1080p and 4K are the common choices" unsourced; (f)
   API private-upload rule rested on hubStudio's help only, not YouTube's
   text; (g) the Content Manager note on the encoding page unexplained; (h)
   FAQ answers missing; (i) blockquote source lines inconsistent; (j) body not
   hard-wrapped.
3. Rewrite fixed all ten; the private-upload rule now cites the YouTube Data
   API reference directly (fetched).
4. Production review: Image editor claims checked against
   `src/content/help/assets-library.md` (Crop "Wide 16:9 made for YouTube,
   X", dark outline, JPG/PNG/WEBP save) and Image studio against
   `create-an-image.md` (4K up to 3840 px on the ChatGPT Image engines).
   No claim that hubStudio sets a thumbnail, uploads or schedules.
5. AI-detection pass: cut "It is important to note"; removed a balanced
   sentence pair in the hero.
6. No em dash; six blockquotes, each "Source: publisher, title, read on the
   page, date. URL".
7. **Cadence variant, not planted errors.** Varied sentence length (one-line
   paragraphs after long ones in the safe-area and banner sections), broke
   three parallel lists (failure symptoms, the hubStudio paragraph, FAQ
   openings), one parenthetical aside in the thumbnail workflow. No
   deliberate errors anywhere.
8. Check 2: every cited URL re-fetched, all quoted strings found again (see
   research file R8). R8 reconciliation removed five unsourced phrases.
9. SEO counted: title 51, meta 148, excerpt 21 words.
10. Second AI pass: "Usually the account isn't verified" became "Check
    verification first"; H2 "What goes wrong most often?" became "What breaks
    a YouTube upload or thumbnail?" (no frequency claim).
11. Human touch: "Oddly," kept once; "Then there's the gate." as a transition.
12. Visual formatting: five tables, all three to five columns; source page
    column on the video, thumbnail, channel art and failures tables.
13. Five concepts: (a) hand with a loupe over a contact sheet, one frame
    circled (chosen: the thumbnail is one frame read at a fraction of its
    size); (b) a projector beam on a wall beside a phone on a desk; (c) a sign
    painter lettering a long narrow banner, only the middle finished; (d) an
    editor's monitor at arm's length, screen soft, face in window light; (e)
    a stack of printed frames at three sizes on a cutting mat. Prompt written
    for (a).

## Quality pass (content-quality-us)

```
[x] Iteration 1  : newsroom-style draft (input: createarticle output)
[x] Iteration 2  : 10 weaknesses identified
[x] Iteration 3  : rewrite fixing the weaknesses
[x] Iteration 4  : production-ready review
[x] Iteration 5  : AI-undetectable pass
[x] Iteration 6  : em dash cleanup, blockquote formatting
[x] Iteration 7  : human touch pass
[x] Iteration 8  : SEO title, meta, excerpt
[x] Iteration 9  : second AI-undetectable pass
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

- 2 and 11, the problems found and fixed: hero promised "what usually breaks"
  without data; "Every figure is read from YouTube's Help Center" was untrue
  once the API page and the capture joined (now "every spec ... each row names
  the page"); "the verification gate catches more teams" (no data, cut);
  intro answer at 61 words (trimmed to 60); "whichever comes first" against
  YouTube's "whichever is less" (aligned); banner FAQ inferred why 2560 is
  recommended (now quotes YouTube's wording); "unlocked" twice (AI-tell list,
  rewritten); two hard-wrap breaks in the hubStudio section; the changelog
  named only the Help Center (now the API reference too); review cadence
  missing (changelog names the next review, January 8, 2027).
- 12: rigid passages are the five tables and the FAQ; prose carries the
  rest, about half and half.
- 13: no triads of jargon, no "it's not just", no hollow openers left.
- 15: all six blockquotes share one shape; no em dash.
- 16: two transitions only ("Then there's the gate.", "One more, for anyone
  working with generative engines.").
- 17: title 51, meta 148, excerpt 21 words (house ceilings 52, 152, 25);
  one H1, nine H2s, no H3; American spelling; check-draft passes.
- 18: "Oddly" once, "though" once, no repeated humanizer.

## Image

- Prompt used: verbatim from the feature-image block (a Chinese film editor's
  hand holding a loupe over a contact sheet in a lived-in Changsha editing
  room, single window light from camera left, 50mm look at f/4, warm-shadow
  grade, lifted blacks, grain, negative space left).
- Confirmed the prompt names no real person: yes.
- Attempts: one. Accepted.
- AI-tells checklist on the final frame: hand anatomy correct (thumb and index
  pinch the loupe, natural creases and nails); one light source from the
  upper left; no readable text, letters, numbers or logos on the sheet or the
  books behind; no bokeh halos; tea stain and cable read real. Minor: the
  contact-sheet frames vary slightly in size, which reads as a print, not a
  defect.
- Saved to: `public/Images/insight-youtube-video-thumbnail-specs.webp`,
  1536 x 1024 (source size, no enlargement), webp quality 78, 99 KB.
  Intermediate PNG kept in the session scratchpad only.

## House rule checks

| Check | Result |
|---|---|
| Competitor named, described or alluded to | zero (spec sheets referred to as a category only; YouTube is the platform documented) |
| `$` occurrences | zero |
| Em dash occurrences | zero in the draft, research file, brief module, captures and this log |
| Deliberate typos or planted errors | zero |
| Summary or conclusion section | none |
| Decorative ordinal in a repeated titled block | none |
| Stray Han characters | none |
| Statistics in blockquotes with source, date and method | six blockquotes, all with source, date and how it was read |
| Money language | "prepaid balance", no amount, no "credits" |

## Ledger additions

New section for `sources/verified-sources.md`, "YouTube video, thumbnail and
channel art specs (added 2026-10-08, brief 62)", columns Figure | Attribution
to use | Source | Date | Confidence | Check 1 | Check 2 | Used in:

| Figure | Attribution to use | Source | Date | Confidence | Check 1 | Check 2 | Used in |
|---|---|---|---|---|---|---|---|
| Custom video thumbnail 3840x2160 recommended, min width 640, 16:9; Shorts 2160x3840, min height 640, 9:16; podcast playlists 1:1; JPG or PNG; 2MB mobile (10MB podcasts), 50MB desktop; account must be verified | "YouTube Help, Add custom thumbnails on YouTube, October 2026" | support.google.com/youtube/answer/72431 | page undated, read 2026-10-08 | primary | 2026-10-08 | 2026-10-08 | 62 |
| Vertical videos with 16:9 custom thumbnails get an auto-generated 4:5 thumbnail on home, explore and subscriptions | same | answer/72431 | read 2026-10-08 | primary | 2026-10-08 | 2026-10-08 | 62 |
| Daily custom thumbnail limit, retry in 24 hours; repeat policy offenses remove custom thumbnails for 30 days | same | answer/72431 | read 2026-10-08 | primary | 2026-10-08 | 2026-10-08 | 62 |
| A/B test: up to 3 titles and thumbnails; any thumbnail under 1280x720 downscales all to 854x480; advanced features required; no Shorts | "YouTube Help, A/B test titles & thumbnails, October 2026" | answer/16391400 | read 2026-10-08 | primary | 2026-10-08 | 2026-10-08 | 62 |
| Uploads of 3 minutes or less, square or taller, are Shorts | same | answer/16391400 | read 2026-10-08 | primary | 2026-10-08 | 2026-10-08 | 62 |
| Custom thumbnails and videos over 15 minutes are intermediate features (phone verification) | "YouTube Help, Learn about feature access for YouTube Creators, October 2026" | answer/9890437, answer/9891124 | read 2026-10-08 | primary | 2026-10-08 | 2026-10-08 | 62 |
| Encoding: MP4 (no edit lists, moov atom first), H.264 High Profile progressive, 2 B frames, closed GOP half frame rate, CABAC, VBR, 4:2:0; AAC-LC, Opus or Eclipsa Audio, 48kHz; BT.709 | "YouTube Help, YouTube recommended upload encoding settings, October 2026" | answer/1722171 | read 2026-10-08 | primary | 2026-10-08 | 2026-10-08 | 62 |
| SDR bitrates std/high fps: 8K 80-160/120-240, 4K 35-45/53-68, 1440p 16/24, 1080p 8/12, 720p 5/7.5, 480p 2.5/4, 360p 1/1.5 Mbps; HDR std: 8K 100-200, 4K 44-56, 1440p 20, 1080p 10, 720p 6.5; audio 128/384/512 kbps | same | answer/1722171 | read 2026-10-08 | primary | 2026-10-08 | 2026-10-08 | 62 |
| 16:9 ladder 7680x4320 to 426x240; playback between 4K and 8K being removed since 2022 | "YouTube Help, Video resolution & aspect ratios, October 2026" | answer/6375112 | read 2026-10-08 | primary | 2026-10-08 | 2026-10-08 | 62 |
| Max upload 256GB or 12 hours, whichever is less; 15 minutes unless verified | "YouTube Help, Upload videos longer than 15 minutes, October 2026" | answer/71673 | read 2026-10-08 | primary | 2026-10-08 | 2026-10-08 | 62 |
| Supported formats: MOV, MPEG-1, MPEG-2, MPEG4, MP4, MPG, AVI, WMV, MPEGPS, FLV, 3GPP, WebM, DNxHR, ProRes, CineForm, HEVC | "YouTube Help, Supported YouTube file formats, October 2026" | support.google.com/youtube/troubleshooter/2888402 | read 2026-10-08 | primary | 2026-10-08 | 2026-10-08 | 62 |
| Banner 2048x1152 min, 2560x1440 recommended, safe area 1235x338 at the minimum, 6MB; profile picture JPG/GIF/BMP/PNG, 15MB, renders 98x98; watermark 150x150 min, square, under 1MB | "YouTube Help, Manage your channel branding, October 2026" | answer/10456525 | read 2026-10-08 | primary | 2026-10-08 | 2026-10-08 | 62 |
| End screen needs 25 seconds or more; title 100 and description 5,000 characters; upload page labels AI disclosure "Altered content" | "YouTube Help, Upload YouTube videos, October 2026" | answer/57407 | read 2026-10-08 | primary | 2026-10-08 | 2026-10-08 | 62 |
| AI disclosure setting labeled "AI use" under Attributes; AI used for a thumbnail is production assistance, not disclosed | "YouTube Help, Disclosing use of GenAI content, October 2026" | answer/14328491 | read 2026-10-08 | primary | 2026-10-08 | 2026-10-08 | 62 |
| videos.insert uploads from unverified API projects created after 28 July 2020 are restricted to private viewing until audited | "YouTube Data API reference, Videos: insert, October 2026" | developers.google.com/youtube/v3/docs/videos/insert | read 2026-10-08 | primary | 2026-10-08 | 2026-10-08 | 62 |
| Duration badge on a 500-px desktop search thumbnail: 36 to 42 px wide, 20 px tall, 8 px inset from right and bottom | "hubStudio capture of youtube.com search results, October 8, 2026, an observation, not a YouTube rule" | research/youtube-video-thumbnail-specs/youtube-search-thumbnail-duration-badge-2026-10-08.png | 2026-10-08 | primary observation, single capture, two thumbnails | 2026-10-08 | 2026-10-08 | 62 |

Do-not-publish log additions: 1280x720 as the current thumbnail
recommendation (now only the A/B floor); 2MB as a general thumbnail cap (phone
only); GIF and BMP as thumbnail formats (YouTube names JPG and PNG); 1546x423
or any device crop as YouTube's banner safe area (not on any YouTube page;
YouTube's figure is 1235x338 at 2048x1152); any thumbnail safe-area inset as
YouTube's rule (YouTube publishes none).

## Watch rows

```
2027-01-08,youtube-video-thumbnail-specs,"Quarterly recheck of every row: re-read the thumbnail, encoding, resolution, length, formats, branding, A/B test, feature access and GenAI disclosure pages; update changed rows, add a dated changelog line and move the Reviewed date.",support.google.com/youtube/answer/72431,2026-10-08
2027-01-08,youtube-video-thumbnail-specs,"YouTube's upload page names the AI disclosure setting Altered content while its policy page names it AI use under Attributes. When the two pages agree, rewrite the sentence that prints both labels.",support.google.com/youtube/answer/14328491,2026-10-08
```

## Live pages this piece contradicts

- `src/content/help/youtube.md`, section "YouTube's limits", row "Video
  types": lists MKV, which is not on YouTube's supported formats list
  (support.google.com/youtube/troubleshooter/2888402, read 2026-10-08), and
  omits MPEG-1/2, MPEGPS, DNxHR, ProRes, CineForm and HEVC. The help center
  is synced from the app repo and is not edited by hand here, so the fix goes
  into the app repo's copy of `youtube.md` and comes back with the next help
  sync: replace the row with "MOV, MPEG-1, MPEG-2, MPEG4, MP4, MPG, AVI, WMV,
  MPEGPS, FLV, 3GPP, WebM, DNxHR, ProRes, CineForm, HEVC (H.265)". If the app
  itself accepts MKV for upload, the row should say which list is hubStudio's
  and which is YouTube's. The new article does not print MKV, so it ships
  without depending on the fix.
- No live insight or page prints a YouTube thumbnail, banner or encoding
  figure (searched `src/` for 1280, 2560, 1235, 2MB and "thumbnail" near
  YouTube): nothing else to correct.

## Closed in this run

- First-party figures used: 100 and 5,000 characters, the 2560 x 1440 banner
  and 800 x 800 profile crops (`/help/youtube`); 4K up to 3840 px
  (`/help/create-an-image`); Wide 16:9 crop and dark outline
  (`/help/assets-library`).
- Spec rows under deviation 7: none (primary platform pages, per Wave two).
- Claims cut: thumbnail safe area in pixels as a YouTube rule, CTR claims,
  "common" resolutions; the safe-area section is thinner by design and says
  why.
- Briefs amended: the working H1 "YouTube video and thumbnail specs for 2026"
  became "YouTube thumbnail size and video specs for 2026" so it carries the
  primary query (SPEC.md, structure rule 1). Amended in the brief module
  `scripts/wave2/62-youtube-video-thumbnail-specs.mjs` and noted in the
  draft's asset brief.
- Live articles corrected: none needed (see contradictions above for the
  help article row, which belongs to the app repo sync).
- Rows added to `watch.csv`: two, above.
- Settled fallbacks applied: 5 (no `/resources/specs` hub exists; no hub
  link, category Platform specs); 12 (no showcase clip; ships with the hero
  and the existing localized YouTube app shots).
- Runbook substitutions: none.
- Integration, 2026-10-08: the second watch row was rewritten as a recheck instruction (re-read both pages; rewrite the two-label sentence only if they now agree). No value on this page differs from youtube-shorts-specs (thumbnail sizes, 50 MB desktop, 4:5 replacement, 256 GB or 12 hours).
- Ledger additions merged into `sources/verified-sources.md` (section "Added 2026-10-08 (ledger rows from brief 62, youtube-video-thumbnail-specs)") and watch rows merged into `watch.csv`, sorted by due date.

## SEO counts (after the quality pass)

| Field | Chars or words | Ceiling | Pass |
|---|---|---|---|
| Title | 51 | 52 | yes |
| Meta description | 148 | 152 | yes |
| Excerpt | 21 words | 25 words | yes |

## Hand-off for publish

- Suggested category: Platform specs.
- Author: Erik Lindström (Film Director).
- French slug proposal: `specs-video-et-miniature-youtube`.
- Hero alt text: "An editor's hand holds a glass loupe over one circled
  frame on a printed contact sheet, beside a tea-stained mug on a worn wooden
  desk."
- Companion page published the same day: youtube-shorts-specs (linked from
  the safe-area section).

## Translation (three passes, /deep-translate)

- Dictionary id: `resources/insights/youtube-video-thumbnail-specs`, French address `/fr/ressources/analyses/youtube-specifications-video-et-miniatures` in `src/i18n/routes.ts`.
- Pass files: `.i18n-work/passes/fr/resources/insights/youtube-video-thumbnail-specs/` and `.i18n-work/passes/zh/resources/insights/youtube-video-thumbnail-specs/` (pass1, pass2 worked from pass 1 alone, pass3 native editor's finish).
- `npm run i18n:tx -- pending fr` and `pending zh`: nothing pending. `npm run i18n:local -- check`: every page translated in French and Chinese (222 pages). `npm run i18n:guard`: pass.

### French changes

Second round (leftovers after the English fixes):

[chapô] pass1 -> pass3: "Encore faut-il que le compte y ait droit : sans validation par téléphone…" -> "Mais avant les pixels, il y a l’accès : sans numéro de téléphone validé, pas de miniature personnalisée." / why: keeps the English punch (pixels, then the gate) in a native two-beat sentence.
[chapô] pass1 -> pass2: "la plupart des fiches de spécifications" -> "la plupart des fiches techniques" / why: the term a French production desk uses.
[réponse courte] pass1 -> pass3: "vous la générez dans le studio Image et la recadrez" -> "la miniature se génère dans le studio Image, puis se recadre dans l’Éditeur d’images" / why: impersonal pronominal, the register of a reference page.
[tableau] pass1 -> pass2: "Seuil du test A/B" -> "Plancher du test A/B", reused in the body, the update note and the FAQ / why: one term for the floor everywhere.
[tableau] pass1 -> pass3: "ramène toutes les autres à 854 × 480" -> "ramène toutes les miniatures du test à 854 × 480" / why: the English drops all of them, the test image included.
[1280 × 720] pass1 -> pass3: "Il a simplement cessé d’être la recommandation et ne survit plus… que dans un seul rôle" -> "Il a seulement perdu son statut de recommandation, et les pages de YouTube ne le mentionnent plus qu’à un titre" / why: drops the calque "survive in one role".
[1280 × 720] pass1 -> pass3: "d’où la demande de YouTube de la fournir aussi grande que possible" -> "Et parce que la miniature sert aussi d’image d’aperçu…, YouTube la veut aussi grande que possible" / why: noun chain replaced by a causal clause and a direct verb.
[accès] pass1 -> pass3: "Reste la condition d’accès… relèvent des fonctionnalités intermédiaires… débloquées dès que" -> "font partie des fonctionnalités intermédiaires…, qui s’ouvrent dès que…; une seule validation débloque les deux" / why: YouTube’s own French path used (Paramètres, Chaîne, Accès aux fonctionnalités).
[zone de texte] pass1 -> pass2: "Toute marge en pixels présentée comme une règle de YouTube vient d’ailleurs." -> "Si l’on vous a cité une marge en pixels comme règle de YouTube, elle venait d’ailleurs." / why: mirrors the English address to the reader without a stiff abstract subject.
[zone de texte] pass1 -> pass3: "Retenez le dixième inférieur droit du cadre… Ni texte, ni logo, ni visage à cet endroit." -> "Retenez donc le dixième inférieur droit de l’image, en largeur comme en hauteur, et n’y placez ni texte, ni logo, ni visage." / why: one instruction, verbal, native negation.
[vertical] pass1 -> pass2: "La vidéo verticale est un cas à part. Une vidéo verticale dotée de…" -> "La vidéo verticale obéit à ses propres règles. Si elle porte une miniature…" / why: removes the English repetition, conditional frame.
[test 640] pass1 -> pass3: "Un texte illisible à cette taille est trop petit." -> "Un texte qui ne se lit plus à cette taille est trop petit." / why: verbal, closer to how a French editor writes a rule of thumb.
[encodage] pass1 -> pass3: "Curieusement, elle s’ouvre… Les réglages eux-mêmes sont de simples choix" -> "Curiosité : elle s’ouvre… Les paramètres eux-mêmes ne sont pourtant que des choix d’exportation ordinaires" / why: removes the "pour le détail / Détail curieux" echo of pass 2; "paramètres", YouTube’s French word.
[débits] pass1 -> pass2: "vont de 1 Mbit/s en 360p à 80 à 160 Mbit/s en 8K, avec 8 Mbit/s" -> "s’étagent de 1 Mbit/s… en passant par 8 Mbit/s en 1080p" / why: native progression verb; units in Mbit/s, kbit/s, i/s.
[bannière] pass1 -> pass3: "La zone de sécurité de 1 546 × 423 qui circule abondamment" -> "La zone de sécurité de 1 546 × 423, partout reprise," / why: tighter, journalistic.
[bannière] pass1 -> pass3: "Il demande aussi de ne pas entourer l’image d’ombres, de bordures ni de cadres." -> "Il demande aussi de n’entourer l’image ni d’ombres, ni de bordures, ni de cadres." / why: correct ni…ni construction.
[pannes] pass1 -> pass2: "Miniature refusée avec un avertissement" -> "Miniature retirée, avec avertissement"; "plus de miniatures personnalisées pendant 30 jours" -> "les miniatures personnalisées sont suspendues 30 jours" / why: table register, no ambiguous "plus de".
[IA] pass1 -> pass2: "YouTube classe l’usage de l’IA générative… parmi l’aide à la production" -> "Pour YouTube, recourir à l’IA générative… relève de l’aide à la production" / why: native "relever de"; labels from YouTube’s French pages (« Contenu modifié », « Utilisation de l’IA », « Attributs »).
[IA] pass2 -> pass3: "La question est la même sous deux libellés" -> "La question est la même, seul le libellé change" / why: rhythm.
[hubStudio] pass1 -> pass3: "et la raison tient à une règle de YouTube lui-même" -> "hubStudio ne publie rien sur YouTube, et c’est une règle de YouTube lui-même qui l’explique." / why: cleft sentence, natural emphasis.
[hubStudio] pass1 -> pass3: "Publier vous-même copie ensuite le titre… Vous publiez depuis votre propre chaîne." -> "Le bouton Publier vous-même copie alors le titre… La vidéo part ainsi de votre propre chaîne." / why: names the button (app label), avoids "publier" three times.
[hubStudio] pass1 -> pass3: "La miniature, c’est à vous de la construire." -> "La miniature, elle, reste à construire." / why: written register; app labels studio Image, Éditeur d’images, Paysage (16:9), Bibliothèque de contenus, solde prépayé.
[FAQ] pass1 -> pass3: "Tout dépend de l’appareil. YouTube accepte 50 Mo pour les miniatures… importées depuis un ordinateur" -> "Depuis un ordinateur, YouTube accepte 50 Mo…; Depuis un téléphone, la limite tombe à 2 Mo" / why: parallel fronted complements, native contrast.
[sources] all passes: help article titles given in YouTube’s own French wording (« Ajouter des miniatures personnalisées sur YouTube », « Paramètres d’encodage recommandés pour la mise en ligne sur YouTube », « Gérer le branding de votre chaîne », « Signaler l’utilisation de contenus d’IA générative »), checked on the French help pages.

### Chinese changes

Second round (leftovers after the English fixes):

[title] pass1 -> pass2: YouTube 缩略图尺寸 2026：视频与横幅规格 / 2026 年 YouTube 缩略图尺寸：视频与横幅规格 / why: a Chinese headline puts the year first as a date phrase, not as a tag after the noun.
[lede] pass1 -> pass3: 宽度是多数规格表仍在沿用数值的三倍……未经手机验证，就无法使用自定义缩略图 / 宽度是多数规格表至今沿用数值的三倍……没有手机验证，就没有自定义缩略图 / why: the English "no X, no Y" now lands as a native parallel instead of a flat negative.
[answer] pass1 -> pass3: 在 hubStudio 中，可在图片工作台生成缩略图，再到图片编辑器裁剪 / 在 hubStudio 里，先在图片工作台生成，再到图片编辑器裁切 / why: sequence verbs (先……再……) and 裁切, the term used in the help center.
[1280 x 720] pass1 -> pass3: 如今它在 YouTube 页面上只剩一个角色 / 如今在 YouTube 页面上只剩一个用处：充当 A/B 测试的下限 / why: 角色 is a calque of "role"; 用处 plus a verb reads native.
[gate] pass1 -> pass2: 一次验证，两项同时解锁 / 验证一次，两项权限一并到手 / why: 解锁 is gaming slang; the new close is written register.
[badge] pass1 -> pass3: 叠加在缩略图上的标签 / 叠在缩略图上的角标 / why: 角标 is the standard Chinese word for a corner badge; kept through the quote and the changelog.
[bottom-right] pass1 -> pass3: 可以概括为：画面右下角，横向和纵向各占十分之一的区域 / 不妨把它记作：画面右下角，横竖各占十分之一 / why: shorter rule of thumb, the way a trade paper states it.
[640 check] pass1 -> pass3: 在这个尺寸下看不清的文字，就是太小了 / 缩到这么小还认不清的字，就是太小了 / why: verb-led, ties back to the shrinking step.
[encoding page] pass1 -> pass3: 也就是其“支持的文件格式”页面让您查看详情的那一页 / “支持的文件格式”页面谈到细节时，指向的就是它 / why: removes the English relative clause skeleton.
[bitrate footnotes] pass1 -> pass2: 同一组页面还有两条附注 / 同样出自这些页面的还有两条附注。其一……其二…… / why: enumerating with 其一/其二 is the native way to list two notes.
[1546 x 423] pass1 -> pass2: 它看起来是把 YouTube 的数值放大到 2560 画布的结果 / 它很像是把 YouTube 的数值按 2560 画布等比放大得来的 / why: 等比放大 names the operation precisely.
[breaks table] pass1 -> pass2: 上传时长止步于 15 分钟 / 视频超过 15 分钟传不上去; A/B 测试缩略图发虚 / A/B 测试缩略图模糊 / why: symptom rows phrased the way a user would describe the problem.
[AI disclosure] pass1 -> pass3: 问题相同，叫法不同，两个都留意即可 / 问的是同一件事，只是叫法不同，两个名称都要认得 / why: clearer instruction, no filler 即可.
[API quote] pass1 -> pass3: 通过 YouTube 上传 API 上传的视频，若来自……在项目通过审核之前只能设为私享 / 凡由……的 API 项目经 YouTube 上传 API 上传的视频……一律仅限私享 / why: 凡……一律 is the register of a rule quoted from a policy.
[hubStudio flow] pass1 -> pass3: 因此，hubStudio 完全不连接您的频道，而是由 YouTube 模块把帖子准备好 / 所以 hubStudio 干脆不连接您的频道，改由 YouTube 模块把帖子备好 / why: 干脆 carries the "not at all" decision; 备好 matches the help article.
[thumbnail build] pass1 -> pass3: 编辑器免费使用；生成费用从预付余额中扣除，价格在运行前即会显示 / 编辑器免费；生成则从预付余额中扣费，价格在运行前就已标明 / why: tighter contrast between free and paid.
[help link] pass1 -> pass3: 逐步讲解每一步操作 / 逐个按钮讲解了全部步骤 / why: keeps "press by press" without the doubled 步.
[FAQ limits] pass1 -> pass3: 账号通过手机号码验证之前，上限为 15 分钟 / 在账号完成手机号码验证之前，上限为 15 分钟 / why: 完成验证 is the usual collocation.

## Publish

- Page created: `src/pages/resources/insights/youtube-video-thumbnail-specs.astro` (publish-draft.mjs, then `--update` for FAQ schema and internal links).
- `src/data/insights.ts` entry added (newest first); insight placements checked (category claimed by at least one layer).
- Build: `npm run build` passed (content:todo, i18n guard, all routes prerendered).
- `npm run check`: 0 errors, 0 warnings.
- Em dash (U+2014) in staged files: zero.
- Commit and push: `feat(editorial): publish wave two, fifteen pieces of 8 October in English, French and Chinese` on main.
- Resend email sent: yes, through `editorial/scripts/notify-publish.mjs` after the push.
