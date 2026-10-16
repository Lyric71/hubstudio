# Run log: 2026-10-16

| Field | Value |
|---|---|
| Brief | 76, wave two comparison (category Buying models) |
| Slug | one-app-vs-tool-stack-social-content |
| Research file | research/one-app-vs-tool-stack-social-content.md |
| Output | output/one-app-vs-tool-stack-social-content.md |
| Body word count | 2,479 with tables; 1,694 prose only (check-draft.mjs count) |
| Body char count | 13,870 |
| Status reached | image_ready |
| Model used at every step | Claude Opus 5.5 for research, drafting and the quality loop (research subagents on the same model); image: gpt-image-2 at high quality |

Row selection: no row stood at researched, drafted or quality_passed, and the
run log held only the runner's header lines, so nothing was resumed. Brief 76
was the earliest `not_started` row in `publish_date` order (2026-10-22, first
of the two rows on that date in file order).

## Research gate

| Gate | Done | Note |
|---|---|---|
| R1 claims mapped before looking anything up | yes | Eleven claims mapped in the research file before any search |
| R2 SERP mapped, four phrasings minimum | yes | Five queries, nine results each (45 rows), 13 pages read; seller domains replaced by a neutral description |
| R3 primary sources for every number | yes | Analyst firm releases and topic page, the magazine study at source; app facts from positioning and the help center only |
| R4 Chinese-language web searched first | not applicable | Nothing in the piece is China-related; recorded in the research file |
| R5 every figure interrogated (date, sample, method, who paid) | yes | The toggling study is labeled a market claim on the page (the authors' company sells the measuring software, back-office sample) |
| R6 triangulated, conflicts published as ranges | yes | Utilization published as 42 percent (2022) and 49 percent (2025), with the FAQ giving the 42 to 49 range; the 2025 wording conflict noted, "about half" of the stack, never "half their tools" |
| R7 research file written before drafting | yes | Row set to researched before the first line of body copy |
| R8 reconciled after drafting | yes | Every number traced back; table in the research file |

**Gap statement, one sentence:** no ranking page follows one social post
through its life to count the hand-offs between single-purpose tools, none
treats the version and approval record as a buying criterion, and the only
per-seat versus usage comparison comes from vendors pricing their own
category.

**Research time spent:** about 70 minutes.

- Figures reused from the ledger: none applied (no martech or app-switching
  figure was logged before this run).
- Claims cut because they could not be sourced: every license-waste,
  tool-count and hours-saved figure (36 and 53 percent of licenses unused,
  8.8 apps per worker, 9.5 minutes and 23 minutes to refocus, 33 and 56
  percent utilization for 2023 and 2024, and others listed under Do not
  publish).
- Conflicts published as a range rather than a single figure: martech
  utilization 42 to 49 percent across two editions and two populations.
- Captures saved to `research/one-app-vs-tool-stack-social-content/`: the SERP
  map and twelve survey captures (check 1 and check 2 for six candidates).

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

1. Draft from the brief: decision table first, hand-off map, approval record,
   cost structure, coverage, when a stack wins, six FAQs, CTA.
2. Weaknesses: answer block at 63 words (over 60); the hero overstated the
   approval point; an invented "two to ten people" threshold in the fit
   table; a vague lock-in row; no platform page referenced; "every person
   needs a login in every tool" overgeneralized; "many all-in-one apps charge
   per seat" unsupported; the second-network row skipped the reframe; the
   cost section lacked a link to the cost piece; a stray "it's not X, it's Y".
3. All ten fixed: answer to 55 words, the threshold replaced by "a small
   team", the LinkedIn platform page and the cost piece referenced, the
   per-seat FAQ restated as "some per seat, some per account".
4. Production review: "originals download freely" corrected (downloads carry
   a small charge); the campaign cell qualified ("if one is set").
5. AI tells removed: a "not X, it's Y" construction, a cliche opener, a
   performative line and a stacked "It makes. It keeps." triad.
6. Zero em dashes; both blockquotes carry a source, a date and a method.
7. Ran as the cadence variant, not the planted-error variant. Two FAQ
   answers rebuilt to break the parallel build, one-line paragraphs kept
   next to long ones, prose hard-wrapped at about 80 characters. No planted
   errors.
8. Check 2: all four cited pages re-fetched and still carrying the figures
   (details in the research file's R8); R8 reconciliation complete, nothing
   in the draft outside the research file.
9. SEO: brief values kept, title 46, meta 148; excerpt written at 23 words.
10. Second pass: "Compare them on hand-offs, not features" and "Read it as a
    direction, not a number" reworded to cut the repeated "X, not Y" tic.
11. Human touch: "nobody approves the thing" tightened to "the post that goes
    out".
12. Tables aligned in the source; four tables, none over four columns.
13. Five concepts, four rejected with reasons, one prompt (a proof print
    marked by every hand-off).

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

1. The createarticle output taken as v1.
2. Ten weaknesses: an unsourced "most of the cost" cell; DAM and PIM not
   spelled out; "e-commerce" against the site's "ecommerce"; no answer on
   which model comes out cheaper; no freshness cue; "will keep a stack"
   overstated; no plain reference to the app page; an abstract opener on
   the coverage section; a repeated "X, not Y" in the cost section; FAQ
   wording echoing the cost section.
3. All ten fixed (v3), including a new paragraph on when each model comes
   out cheaper (seat cost fixed, run cost by volume), with no amount, and
   "as of October 2026" on the trace and the coverage section.
4. Production-ready review (v4): "hours go into" restored to "time goes
   into", because no hour figure stands behind it.
5. "removes those moves" reworded.
6. Zero em dashes. Quotes stay straight, as in every draft in `output/` and
   the published pages; the skill's curly-quote preference yields to the
   repo's convention.
7. The FAQ paragraph split by an earlier edit rejoined.
8. Excerpt brought to exactly 25 words; title 46 and meta 148 kept, inside
   the house ceilings of 52 and 152 (tighter than the skill's 60 and 156).
9. "The other cost is paying for features nobody opens" rewritten.
10. Middle path and fit table reread, no change needed.
11. Hostile reader: the pricing question answered without an amount,
    freshness cues added, the app page referenced, the fit-table claim made
    factual, acronyms expanded; the YouTube exception and the TikTok Beta
    label checked in both places.
12. Ratio: no bold-label template anywhere; prose and tables only.
13. Triads broken: the fit-table cell, the split-record sentence.
14. "sell the cure" closing line rewritten plainly.
15. Both blockquotes share one format; zero em dashes.
16. No padding added: the page already carries the short transitions it
    needs ("Now the gaps.", "There's a middle path, too.").
17. Title 46, meta 148, excerpt 25 words; one H1, seven H2s, six H3s; FAQ
    answers 51 to 67 words; answer block 55 words; check-draft passed.
18. Humanizers checked for repeats: each appears once.

Final: the SEO fields live in the frontmatter; nothing else to fold.

## Image

- Prompt used (verbatim from the feature-image block): the IMAGE PROMPT in
  `output/one-app-vs-tool-stack-social-content.md`, a proof print of a
  celadon teapot carrying pinholes, staple holes, a clip dent, tape residue
  and a folded corner, a Chinese man's hand smoothing it, a lived-in Hong
  Kong production office, window light from camera left, 85mm at f/4.
- Confirmed the prompt names no real person: yes.
- Attempts and what was wrong with rejected ones: one attempt, accepted.
- AI-tells checklist run against the final frame: hand anatomy correct
  (four fingers and a thumb, natural creases); one light source, one shadow
  direction; no text, letters or numbers anywhere; no melting objects; the
  wear marks read as physical handling. The left third stays quiet desk
  surface for type.
- Saved to: `public/Images/insight-one-app-vs-tool-stack-social-content.webp`,
  1536 by 1024, 124 KB (sharp, quality 78, no enlargement). The source PNG
  stays in the session scratchpad.

## House rule checks

| Check | Result |
|---|---|
| Competitor named, described or alluded to | zero (capitalized-word scan: only networks, the app's modules and its payment methods) |
| `$` occurrences, each one a category range with a date | zero |
| Em dash occurrences | zero, in the draft, the research file, the captures and this log |
| Deliberate typos or planted errors | zero |
| Summary or conclusion section | none, the file ends on the CTA plus the blocks |
| Decorative ordinal in a repeated titled block | none |
| Stray Han characters outside a term gloss | none |
| Statistics in blockquotes with source, date and method | 2 of 2 |

## Sources

- New figures added to the ledger, with both check dates: martech
  utilization 42 percent (2022) and 49 percent (2025), the 2022 app-toggling
  study as a market claim, and the absence of any neutral measurement of
  hand-off time; all checked 2026-10-16 twice.
- Rows added to the do-not-publish log: license-waste figures, the 2023 and
  2024 utilization figures, the app-count survey, the refocus-time figures,
  and the restated vendor figures.

## Closed in this run

- First-party figures used, each with the site page that already publishes
  it: none from the delivery record. App facts only (up to 20 accounts per
  post; no subscription, no seat fees; price shown before every run; failed
  runs not charged), from `hubstudio-positioning.md` and the help center.
- Spec rows published under deviation 7: none (not a spec page).
- Claims cut and which section is now thinner: all license-waste, tool-count
  and hours-saved figures. The cost section carries the cost structure and
  the analyst utilization range only, with no money figure.
- Briefs amended because the research or the live site proved them wrong:
  none. The brief's network list omits YouTube; the page adds it with the
  positioning file's wording (published by hand in YouTube Studio), which
  adds to the brief without contradicting it.
- Live articles corrected because this piece contradicted them: none. The
  no-seat-fee and approval-thread facts match the client approval how-to and
  the cost of a week of social content piece.
- Rows added to `watch.csv`: none. No fact on the page goes stale on a known
  date: the survey figures are dated on the page, and the app facts are
  marked "as of October 2026".
- Settled fallbacks applied: 12 (no showcase clip; the page ships with its
  hero image and, optionally, the existing localized Validation and LinkedIn
  captures named in the asset brief).
- Runbook substitutions: the analyst firm's pages and the magazine's full
  text return 403 or a paywall to automated fetch, so check 1 and check 2
  read the Internet Archive snapshots of the publishers' own URLs; the
  snapshot dates are in the research file. The search tool returned nine
  results per query, not ten.

## SEO counts (after the quality pass)

| Field | Chars or words | Ceiling | Pass |
|---|---|---|---|
| Title | 46 | 52 | yes |
| Meta description | 148 | 152 | yes |
| Excerpt | 25 words | 25 words | yes |

## Publish (fill in when step 4 runs)

Step 4 runs on a "Publish one-app-vs-tool-stack-social-content" request or the
scheduled publish run; this draft run stops at image_ready and commits nothing.

## Publish (2026-10-16, 16:30 publish run)

Published as an insight under Buying models, dated 2026-10-16, in English, French
(/fr/ressources/analyses/une-application-ou-plusieurs-outils-pour-les-reseaux-sociaux)
and Chinese (/zh/resources/insights/one-app-vs-tool-stack-social-content). Glossary
sections added in fr.md and zh.md for the tool-stack terms. i18n check, i18n guard,
npm run check (0 errors) and npm run build passed.

### Translation changes (changes.md of each pass)

#### fr resources/insights/one-app-vs-tool-stack-social-content

```
[meta description] pass1 -> pass3: « Une application ou plusieurs outils spécialisés pour les contenus sociaux : passages de relais, versions, coûts, licences, et quand la chaîne d’outils gagne. » -> « Application unique ou outils spécialisés pour vos contenus sociaux : relais, versions, coûts et licences comparés, et quand plusieurs outils l’emportent. » / why: list of nouns turned into a comparison, « gagne » too sporty, back under 155 characters (153).
[standfirst] pass1 -> pass3: « Jugez-les sur les passages de relais […] Une chaîne d’outils reste gagnante là où… » -> « Jugez-les aux passages de relais […] La chaîne d’outils garde l’avantage là où un expert consacre ses journées à une seule tâche pointue. » / why: « juger à » is the French collocation; « rester gagnant » is a calque of « still wins ».
[intro h2] pass1 -> pass3: « Une application tout-en-un vaut-elle mieux qu’une chaîne d’outils pour les contenus sociaux ? » -> « Pour les contenus sociaux, une application tout-en-un est-elle préférable à une chaîne d’outils ? » / why: frame first, then the question, as a French headline would.
[intro answer] pass1 -> pass3: « Pour la plupart des équipes…, oui […] la version validée est celle qui est publiée » -> « Oui, pour la plupart des équipes… […] c’est la version validée qui part en ligne » / why: answer up front, cleft sentence instead of a doubled relative clause.
[comparison table] pass1 -> pass3: « Les versions sur un seul fil de validation, rien de supprimable » -> « Toutes les versions sur un seul fil de validation, où rien ne s’efface » / why: « supprimable » is a clumsy coinage.
[comparison table] pass1 -> pass2: « Apprentissage » -> « Prise en main »; « Cinq interfaces, cinq jeux d’habitudes » -> « Cinq interfaces, cinq façons de faire » / why: the native words for learning a tool and its habits.
[comparison table] pass1 -> pass3: « Profondeur sur une tâche » -> « Profondeur sur une tâche précise » / why: the bare English-shaped label read unfinished.
[trace intro] pass1 -> pass3: « …qui se trouve dans les jointures entre outils. Suivons donc un post. » -> « …: il se loge dans les jointures entre les outils. Suivons donc un post, un seul. » / why: colon instead of a relative clause, stronger verb, a closing beat.
[trace setup] pass1 -> pass2: « un post LinkedIn avec une image […] puis le même post adapté pour Instagram » -> « un post LinkedIn illustré d’une image […] puis la déclinaison du même post pour Instagram » / why: « décliner » is the house verb for adapting a post to another network.
[trace table] pass1 -> pass2: « L’importer dans l’outil de retouche, exporter le recadrage » -> « …, exporter l’image recadrée »; « selon la convention » -> « selon la règle maison » / why: one exports a picture, not a crop; « convention » alone is vague in French.
[trace table] pass1 -> pass2: « Réutiliser sur d’autres réseaux, recadrer dans l’éditeur du post » -> « « Réutiliser sur d’autres réseaux », puis recadrage dans l’éditeur du post » / why: the app label quoted as a label, the hubStudio column kept nominal.
[trace total] pass1 -> pass3: « Cela fait 4 exports… non mesurées dans des équipes. Votre décompte sera différent, et il vaut la peine de le faire… » -> « Au total : 4 exports… et non mesurées sur un échantillon d’équipes. Votre décompte sera différent : faites-le sur votre dernière campagne, l’exercice en vaut la peine. » / why: spoken « cela fait » removed, imperative advice instead of an impersonal clause.
[wrong file] pass1 -> pass3: « …se ressemblent dans un dossier de téléchargements à six heures du soir. » -> « À 18 heures, dans un dossier de téléchargements, « final_v3 » et « final_v3_crop » se confondent aisément. » / why: French time format, scene set first, a verb that carries the risk.
[time cost] pass1 -> pass2: « n’a publié le temps perdu en transferts de fichiers entre outils marketing » -> « n’a chiffré le temps perdu à faire transiter des fichiers d’un outil marketing à l’autre » / why: noun chain broken into a verbal phrase; « chiffrer » is the precise verb.
[study quote] pass1 -> pass2: « Les salariés de 20 équipes… passaient… et consacraient… à se réorienter » -> « Dans 20 équipes de trois grandes entreprises, les salariés passaient près de 1 200 fois par jour… à reprendre leurs repères » / why: setting first, « se réorienter » is a calque.
[study source] pass1 -> pass2: « magazine de gestion d’entreprise […] Une affirmation commerciale : » -> « magazine de management […] Donnée d’origine commerciale : » / why: the usual French name of the title type, and the caveat as a source label.
[study caveat] pass1 -> pass3: « Prenez-le comme une direction […] vendent un logiciel contre ce problème » -> « Voyez-y une indication pour votre équipe, non un chiffre à reprendre tel quel […] vendent un logiciel censé régler le problème » / why: « une direction » and « un logiciel contre » were English skeletons.
[approval record] pass1 -> pass3: « Si le mauvais recadrage est choisi, ou si le texte est collé… Rien dans la chaîne ne relie les deux. » -> « Il suffit de prendre le mauvais recadrage, ou de coller le texte d’un brouillon antérieur à la correction, pour que la validation ne couvre plus ce qui part en ligne. Rien, dans la chaîne, ne relie l’approbation à la publication. » / why: passives removed, « les deux » made explicit.
[hubStudio validation] pass1 -> pass3: « Rien ne peut être supprimé du fil, donc l’historique… est permanent. Et pendant que le post attend, il est verrouillé » -> « Rien ne peut en être supprimé : la trace de qui a validé quoi est définitive. Et tant qu’il attend, le post reste verrouillé » / why: « donc » chain replaced by a colon, « définitive » and « tant que » are the native fit.
[money h2] pass1 -> pass2: « Comment l’argent fonctionne-t-il dans chaque modèle ? » -> « Comment chaque modèle se paie-t-il ? » / why: literal rendering of « how does the money work ».
[stack billing] pass1 -> pass3: « la facture croît avec le nombre de personnes multiplié par le nombre d’outils […] détient trois licences » -> « la facture suit le nombre de personnes multiplié par celui des outils […] mobilise trois licences » / why: lighter verb, no repeated noun, « mobiliser » for seats in use.
[survey] pass1 -> pass2: « Pourtant, deux éditions… » -> « Il n’empêche : deux éditions… »; « sans argent associé » -> « ne disent rien des sommes en jeu » / why: press connector, and money phrased the way French writes it.
[hubStudio billing] pass1 -> pass3: « Il n’y a ni abonnement ni licence […] Un administrateur peut fixer une limite de dépenses quotidienne par créateur. » -> « Pas d’abonnement, pas de licence par utilisateur, et l’ouverture d’un compte est gratuite […] Un administrateur peut fixer à chaque créateur une limite de dépenses quotidienne. » / why: punchier enumeration, « par créateur » moved to the verb.
[which is cheaper] pass1 -> pass3: « Laquelle revient le moins cher dépend de ce que vous produisez. Une licence coûte autant un mois calme… » -> « Quelle formule revient le moins cher ? Tout dépend du volume que vous produisez. Une licence coûte le même prix en mois creux qu’en mois de lancement. » / why: dangling « Laquelle » fixed, « mois creux » is the idiom.
[app coverage] pass1 -> pass2: « et le studio Image et le studio Vidéo les font tourner, l’Historique gardant… » -> « que le studio Image et le studio Vidéo mettent en œuvre ; l’Historique conserve… » / why: participle clause was English-shaped.
[publishing] pass1 -> pass3: « une file d’attente qui réessaie quand un réseau tombe en panne un instant » -> « une file d’attente qui relance l’envoi en cas de défaillance passagère d’un réseau » / why: « réessayer » is UI jargon; the press phrasing names the failure.
[gaps] pass1 -> pass3: « Passons maintenant aux lacunes. Il n’y a pas d’API, pas de connecteur… est mieux servie par… » -> « Venons-en aux lacunes. Ni API, ni connecteur… trouvera mieux son compte dans une chaîne d’outils » / why: « ni… ni » list, idiomatic close.
[specialists] pass1 -> pass3: « tire la chaîne d’outils vers ces systèmes » -> « fait pencher la chaîne d’outils du côté de ces systèmes »; « ils n’essaient pas de remplacer ces postes » -> « ils ne prétendent pas remplacer ces postes de travail » / why: « tirer vers » is a calque of « pull toward »; « prétendre » is the register.
[fit table] pass1 -> pass3: « Meilleur choix » -> « Option la plus adaptée »; « Quelqu’un d’autre produit le travail » -> « Le travail est confié à d’autres, dans l’application ou hors de celle-ci » / why: column head in buyer register, impersonal agent.
[FAQ h2] pass1 -> pass2: « Les questions des acheteurs sur une application unique face à une chaîne d’outils » -> « Application unique ou chaîne d’outils : les questions des acheteurs » / why: French headline with a colon, no stacked prepositions.
[FAQ hidden costs] pass1 -> pass3: « Il y en a trois […] n’est jamais ouverte […] alors comptez les exports » -> « Ils sont trois […] ne sert jamais […] : comptez donc les exports » / why: « ouverte » was literal; « alors » is spoken.
[FAQ versions] pass1 -> pass3: « Les versions finissent dans l’outil de retouche […] jusqu’à ce que quelqu’un décide » -> « Les versions se retrouvent dans l’outil de retouche […] reste verrouillé jusqu’à la décision » / why: « finir dans » is a calque; nominal ending reads cleaner here.
[FAQ seats] pass1 -> pass2: « Ajouter un collègue ajoute un identifiant, pas une licence. » -> « Un collègue de plus, c’est un identifiant de plus, pas une licence. » / why: the repeated verb was an English pattern; the French parallel lands it.
[FAQ specialist] pass1 -> pass2: « Quand un outil spécialisé a-t-il plus de sens ? » -> « Dans quels cas un outil spécialisé s’impose-t-il ? » / why: « avoir du sens » is a calque of « make sense ».
[page override] « Item » (money table head) set to « Poste » on this page, as in the cost of social content piece, since common.json renders it « Élément ».

```

#### fr common

```
[card title] pass1: « Une application ou plusieurs outils pour les réseaux sociaux » kept through the passes / why: native headline, matches the French slug word for word.
[card deck] pass1 -> pass2: « Suivez un post social à travers cinq outils, puis dans une seule application […] une chaîne d’outils l’emporte encore. » -> « Suivez un post à travers cinq outils, puis dans une application unique […] garde l’avantage. » / why: « post social » redundant, « l’emporter encore » stiff.
[card deck] pass2 -> pass3: « Comptez les exports et les réimports, puis voyez dans quels cas… » -> « Suivez un même post […] Comptez les exports et les réimports, et voyez quand une chaîne d’outils garde l’avantage. » / why: the second « puis » repeated the first; shorter close for a card.
[hero alt] pass1 -> pass2: « Une main lisse une épreuve imprimée usée […] ; le papier porte des trous d’épingle, des trous d’agrafe, des restes de ruban adhésif et un coin plié… » -> « …: trous d’épingle et d’agrafe, traces de ruban adhésif, coin corné… » / why: the inventory reads as a description, not a sentence translated clause by clause; « coin corné » is the word for paper.
[hero alt] pass2 -> pass3: « Une main lisse une vieille épreuve […] dans la lumière basse d’une fenêtre » -> « Une main lisse l’épreuve usée d’une théière céladon pâle, sur un bureau de chêne sombre […] à la faible lumière d’une fenêtre » / why: « vieille » added age the English does not claim; « lumière basse » is an anglicism.

```

#### fr home

```
[lead chip] pass1: « <span1>Dernier article</span1>Modes d’achat » kept through the passes / why: house wording for the Latest tag on insights (glossary) and the settled category name « Modes d’achat »; nothing to rewrite in a two-word label.

```

#### fr resources/insights

```
[lead chip] pass1: « <span1>Dernier article</span1>Modes d’achat » kept / why: same chip as the home page, glossary wording.
[json-ld description] pass1 -> pass3: « Une application ou plusieurs outils spécialisés pour les contenus sociaux : passages de relais, versions, coûts, licences, et quand la chaîne d’outils gagne. » -> « Application unique ou outils spécialisés pour vos contenus sociaux : relais, versions, coûts et licences comparés, et quand plusieurs outils l’emportent. » / why: copied word for word from the article’s final meta description, as the glossary requires for index cards (153 characters).

```

#### zh resources/insights/one-app-vs-tool-stack-social-content

```
[seo meta] pass1 -> pass3: 做社交内容，用一个应用还是几款单一功能工具？从……四方面比较 -> 社交内容该用一个应用，还是几款单一功能工具拼成一套？本文从……四方面对比 / why: a real question as the hook, 拼成一套 names the stack in plain Chinese
[lead] pass1 -> pass3: 判断标准是交接次数 -> 高下看交接 / why: short verdict opening, the way a 财经 lead states its thesis
[lead] pass1 -> pass3: 而审核通过的只是一个文件和一段文字 -> 审核通过的只是一个文件加一段文字，并不是最终发出的那条帖子 / why: 加 keeps the pair light, the contrast lands on the post itself
[answer box h2] pass1 -> pass3: 比一套工具更好吗 -> 是否胜过一套工具 / why: 书面 question form, no spoken 更好吗
[answer box] pass1 -> pass3: 对多数……来说，是的 ... 若某项专业工作需要 -> 对大多数……而言，是的 ... 只有某项专业工作需要……时，工具组合才更合适 / why: 只有……才 states the exception as a condition, not an afterthought
[comparison table] pass1 -> pass3: 锁定 / 上手成本 / 每款工具各握一部分工作 -> 锁定效应 / 学习成本 / 每款工具各掌握一部分工作 / why: the standard economic and software terms, no bare verb as a row label
[comparison table] pass1 -> pass3: 每用一款工具，就要一个登录账号 -> 用到几款工具，就要几个登录账号 / why: the native 几……几 correlative instead of an English-shaped "each"
[trace intro] pass1 -> pass3: 功能清单掩盖了工具组合的真实成本：成本藏在工具之间的接缝里 -> 工具组合的真实成本，功能清单上看不出来：它藏在工具与工具的衔接处 / why: topic first, 接缝 is a calque, 衔接处 is the Chinese idiom
[trace intro] pass1 -> pass3: 工具组合包括五款工具（……） -> 工具组合由五款工具构成：……；文案则写在普通文档里 / why: a colon list reads cleaner than a long parenthesis
[trace table] pass1 -> pass3: 生成即保存 / 若设了营销活动则自动归入 -> 生成即存档 / 若设有营销活动则直接归入 / why: tighter table register, 自动 was an added claim
[trace table] pass1 -> pass3: 用“改编发布到其他平台”，在帖子的编辑器里重新构图 -> 使用“改编发布到其他平台”，在帖子自带的编辑器中重新构图 / why: the app label quoted exactly, 自带 says whose editor
[the count] pass1 -> pass3: 合计……。一条帖子发两个平台，共 17 步操作 ... 不妨拿自己最近一次营销活动数一数 -> 合计……：一条帖子发两个平台，共 17 步 ... 值得拿最近一次营销活动亲自数一数 / why: the colon ties the sum to its meaning; "it's worth making" kept as advice, not a shrug
[the count] pass1 -> pass3: 每一步操作，都可能拿错文件 -> 每多一步，就多一次拿错文件的机会 / why: the 每多……就多 pattern carries the cumulative risk
[time cost] pass1 -> pass3: 也从没有人针对营销团队测量过 -> 针对营销团队的测量至今仍是空白 / why: nominal statement suits a reporting register here
[time cost] pass1 -> pass3: 这个数字只宜看作方向，不宜当作您团队的定量 -> 对您的团队而言，这一结果只能指示方向，不能当作确切数字 / why: 定量 was wrong as a noun, the caveat now leads with the reader
[approval h2 answer] pass1 -> pass3: 没有人审核最终发出去的那条帖子 -> 最终发出去的那条帖子，从来没人审核过 / why: the post becomes the topic, 从来 gives the punch the English has
[approval] pass1 -> pass3: 记录同样是零散的 ... 再寄望于文件名可靠 -> 记录也是七零八落 ... 再赌文件名没写错 / why: a native four-character image and a concrete risk instead of an abstract hope
[approval] pass1 -> pass3: 审核人作出决定之前，任何人都无法修改、删除或发布它 -> 审核人拍板之前，谁都无法修改、删除或发布这条帖子 / why: 拍板 is the glossary's sign-off verb, no dangling 它
[money] pass1 -> pass3: 账单随人数乘以工具数增长 -> 账单于是随人数与工具数相乘而增长 / why: the arithmetic stated in Chinese syntax
[money] pass1 -> pass3: 此外还有没人打开的软件 -> 还有一笔钱，花在了没人打开的软件上 / why: the English sentence is about money; the Chinese now says so
[money] pass1 -> pass3: 营销人员表示……低于 2020 年的 58% -> 据营销人员自报……2020 年这一比例还有 58% / why: 自报 keeps the self-reported caveat, 还有 carries the decline
[money] pass1 -> pass3: hubStudio 的付费方式不同。……创建账户也分文不取 -> hubStudio 换了一种收费方式：……创建账户也不花钱 / why: verb-led opening, colon introduces the rules
[money] pass1 -> pass3: 运行只在发生时才付费，所以生成多的团队为大量运行付费 -> 运行则发生一次付一次，生成得多就付得多，生成得少就付得少 / why: parallel 得多/得少 is how a Chinese columnist states proportional cost
[coverage] pass1 -> pass3: 以及它止步之处 / 全部模块列在……页面 -> 覆盖范围和边界 / 各模块的完整清单见 hubStudio 应用页面 / why: 止步之处 was literary, 边界 is the business word
[coverage] pass1 -> pass3: 平台临时出错时会自动重试 -> 某个平台一时出错，系统会自动重试 / why: a subject for the retry, natural rhythm
[gaps] pass1 -> pass3: 没有连接……的连接器 -> 不能连接数字资产管理系统（DAM）或产品信息管理系统（PIM） / why: the repeated 连接……连接器 was an English noun chain
[specialists] pass1 -> pass3: 当一个人整天只做一项工作，而且做得很深 -> 当一个人整天只做一项工作，并且要把它做深时。 / why: a complete 当……时 answer to the 何时 heading, the depth made the goal rather than a description
[specialists] pass1 -> pass3: 应用的编辑器满足社交媒体格式的需要，并不打算取代 -> 应用的编辑器管的是社交媒体格式所需，无意取代 / why: firmer, shorter, 无意 is the written form
[specialists table] pass1 -> pass3: 专业人员需要的深度，并非应用的目标 -> 专业人员要的深度，应用并不追求 / why: verb ending in a table cell instead of a noun predicate
[middle path] pass1 -> pass3: 见《自动化平台还是制作伙伴？》一文 -> 《自动化平台还是制作伙伴？》一文有专门讨论 / why: the article becomes the subject, as house tone cites pieces
[faq h2] pass1 -> pass3: 关于一个应用与工具组合，采购方常问的问题 -> 采购方常问：一个应用，还是一套工具？ / why: a heading, not a noun phrase with a trailing 的问题
[faq] pass1 -> pass3: 有三项。……从未被打开 -> 主要有三项：……有一部分从没打开过 / why: colon list with semicolons, active phrasing
[faq] pass1 -> pass3: 很难。版本留在编辑工具里 ... 应选定一个地方作为记录 -> 很难。版本在编辑工具里……又在文件库里。应选定一处作为唯一记录 / why: parallel rhythm, 唯一 makes the advice sharp
[faq] pass1 -> pass3: 帖子在同一处起草、配上……然后立即发布 -> 一条帖子从起草、配图……到立即发布……都在同一处完成 / why: the 从……到……都 frame carries the whole chain in one native sentence
[pricing table] pass1 -> pass3: 图片编辑器和审核均不收费 -> 图片编辑器和“审核”模块均不收费 / why: Validation is an app module; quoted and named, it cannot read as the act of reviewing

```

#### zh common

```
[card alt] pass1 -> pass3: 一只手抚平一张磨损的……打样，纸放在深色橡木桌上，上面有…… -> 深色橡木桌上，一只手正抚平一张磨旧的浅青瓷茶壶打样，纸上留着…… / why: the scene set first, as a Chinese caption frames a still; 留着 reads the marks as traces of use
[card alt] pass1 -> pass3: 窗外透进微弱的光线 -> 窗边透进低低的光线 / why: "low window light" is light coming in low, not weak light
[card title / h1] pass1 -> pass3: 社交内容，用一个应用还是一套工具 -> 社交内容：一个应用，还是一套工具 / why: headline colon and a beat before the alternative, matching the page title
[card deck] pass1 -> pass3: 分别走一遍五款工具和一个应用，数一数……，再看…… -> 先走一遍五款工具，再走一遍一个应用：数清……，再看工具组合何时仍占上风 / why: 先……再 makes the two runs a sequence; the colon hands over to what the count shows

```

#### zh home

```
[home lead chip] pass1 -> pass3: <span1>最新</span1>采购模式 kept as is / why: the settled chip wording (Latest -> 最新, Buying models -> 采购模式) used on every other category chip; passes 2 and 3 have nothing to change in a two-term label

```

#### zh resources/insights

```
[lead chip] pass1 -> pass3: <span1>最新</span1>采购模式 kept as is / why: settled chip wording, identical to the home page
[json-ld description] pass1 -> pass3: 做社交内容，用一个应用还是几款单一功能工具？从……四方面比较，并说明……在什么情况下更胜一筹 -> 社交内容该用一个应用，还是几款单一功能工具拼成一套？本文从……四方面对比，并指出工具组合何时更胜一筹 / why: same final wording as the article's meta description; a question hook, 何时 instead of the heavier 在什么情况下

```
