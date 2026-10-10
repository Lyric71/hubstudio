# Run log: 2026-10-10, europe-campaign-localization

| Field | Value |
|---|---|
| Brief | 64 (wave two, `scripts/wave2/64-europe-campaign-localization.mjs`) |
| Slug | europe-campaign-localization |
| Research file | research/europe-campaign-localization.md |
| Output | output/europe-campaign-localization.md |
| Body word count | 3,785 with tables, 2,766 prose only (target 2,300, a floor) |
| Body char count | 21,248 |
| Status reached | image_ready (steps 0 to 3 done; translation and publish belong to the publish run) |
| Model used at every step | Claude Opus 5.5 (claude-opus-5-5) for research, drafting and the quality pass; gpt-image-2 at high quality for the image. No cheaper path was offered or taken |

Row choice: no row stood at researched, drafted or quality_passed, so the run
took the earliest `not_started` row in `publish_date` order, brief 64 (October
12). The working tree held only this run's runner files at the start; no
earlier attempt had left partial work.

## Research gate

| Gate | Done | Note |
|---|---|---|
| R1 claims mapped before looking anything up | yes | EU price and green rules, transposition per market, French language, retouching, influencer and sales rules, German unit price and omissions, Spanish and Italian advertising, language and sales rules, AI Act date, formats, platform language rules, app facts |
| R2 SERP mapped, four phrasings minimum | yes | six phrasings: campaign localization Europe; localize marketing campaign for France Germany Spain Italy; advertising rules by country Europe; transcreation vs translation advertising; EU price reduction rule 30 days advertising; green claims directive advertising 2026 |
| R3 primary sources for every number | yes | Official Journal (Publications Office), Legifrance, gesetze-im-internet.de, Federal Law Gazette, Bundestag record, BOE, Normattiva, regional governments, platform help pages |
| R4 Chinese-language web searched first | n/a | Nothing in the piece is China-related |
| R5 every figure interrogated (date, sample, method, who paid) | yes | every row in the claims table; all legal rows are the legislator's own text |
| R6 triangulated, conflicts published as ranges | yes | French and Italian 2027 sales dates published as derived from the rule, with the Sicilian published dates beside the Italian rule; conflicting French departmental pages not used |
| R7 research file written before drafting | yes | written and the row set to researched before iteration 1 |
| R8 reconciled after drafting | yes | every number traced to C1 to C47; five unsupported lines removed (see the research file) |

**Gap statement, one sentence:** No ranking page takes one campaign asset by
asset through France, Germany, Spain and Italy with the dated legal text (the
30-day prior-price rule, the generic green-claim ban that applies from
September 27, 2026, the French retouching and language lines) and the official
sales calendar next to each creative decision.

**Research time spent:** about 2 hours 30 minutes across three parallel
research passes plus cross-checking.

- Figures reused from the ledger: the 2019/2161 prior-price row and the French
  winter-sales rule (brief 49), both rechecked today; the AI Act guidelines
  examples (brief 52 research).
- Claims cut because they could not be sourced: national-character lines; a
  Spanish infringement case (primary not reached); Lazio, Lombardy and Valle
  d'Aosta 2027 dates (not published or not reached).
- Conflicts published as a range rather than a single figure: Italian winter
  sales 2027 (rule date and Sicily's published window; Alto Adige's own 2026
  dates shown).
- Captures saved to `research/europe-campaign-localization/`: 27 text
  captures plus the check 2 record. EUR-Lex was down (HTTP 202 with an empty
  body), so EU texts were read on the Publications Office server; Legifrance
  answered only WebFetch.

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

1. Draft with 12 H2s, 3 tables, 10 sourced blockquotes.
2. Ten weaknesses: hedged table cells; an invented example price; an allusion
   to other publishers; the brief's legal-line table missing; an AI example
   not yet in the research file; a CTA heading and an unsupported promise;
   prose padded by repetition; an unneeded comparison for Germany; Spain's
   pack advice read as law; derived dates unlabeled.
3. All ten fixed; research rows C46 and C47 added before use.
4. Production review: Spain's green cell reworded so it implies no direct
   effect of an untransposed directive.
5. AI-tell pass: duplicate wording and two balanced pairs broken.
6. Zero em dashes; 10 blockquotes with source, date and method.
7. **Ran as the cadence variant, not the planted-error variant.** No planted
   errors anywhere: a single-line beat split out, three parallel list items
   broken, two openers varied.
8. Check 2: all 27 cited surfaces re-fetched, all OK, none changed. R8
   reconciliation removed "the firmest of the four on language" and added the
   AI Act deployer duty to C46.
9. Title 51, meta 148 (the brief's approved values, kept), excerpt 22 words.
10. A performing closing line replaced by the plain fact.
11. Two rhythms loosened.
12. Change list given a bold lead-in; four tables.
13. Five concepts weighed, one chosen (hands swapping the ground under a fixed
    product); prompt written with no real person named; three blocks appended.

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

Pass by pass, with versions cq01 to cq18 kept in the session scratch folder,
as recorded in `logs/runs/2026-10-10-draft.txt`. Highlights: standfirst
rewritten so it no longer repeats the first answer; a check date added under
the answer table; two H2s rewritten ("Do AI-generated visuals need a label in
these markets?", "What does Germany ask of the price card?"); the French bill
named; one triad broken; an addition in pass 14 reverted in pass 18 as
inaccurate. The excerpt went to 25 words. The skill's looser 60 / 156 ceilings
were not used; the house 52 / 152 / 25 held throughout.

## Image

- Prompt used (verbatim from the feature-image block): the attempt 2 prompt,
  now the one in the block. A Shanghai product set, an unbranded olive-oil
  bottle on two floor-tile samples, a producer's hands sliding the second tile
  in, other surface samples behind, one low warm window light from the left,
  85mm at f/4, negative space on the wall.
- Confirmed the prompt names no real person: yes, no photographer, artist or
  celebrity named.
- Attempts and what was wrong with rejected ones: attempt 1 had flat light, the
  bottle casting almost no shadow, and the bottle not crossing the two grounds
  the concept needs. Attempt 2 kept.
- AI-tells checklist run against the final frame: one light source and one
  shadow (the bottle's warm caustic falls right across both tiles); hands with
  five fingers each, natural knuckles and nails, one ring; no text, no logos,
  no near-words in the tile patterns; no melting edges; the clutter (cable,
  tape, light stand, chipped mug) reads real. Passed.
- Saved to: `public/Images/insight-europe-campaign-localization.webp`,
  1536 x 1024 (no enlargement), 91 KB, webp quality 78.

## House rule checks

| Check | Result |
|---|---|
| Competitor named, described or alluded to | zero; platforms are named only as the networks whose rules apply, no vendor, agency or tool |
| `$` occurrences, each one a category range with a date | zero |
| Em dash occurrences | zero (draft, research file and captures, ledger, watch rows, site profile, brief) |
| Deliberate typos or planted errors | zero |
| Summary or conclusion section | none; the file ends on the CTA plus the blocks |
| Decorative ordinal in a repeated titled block | none |
| Stray Han characters outside a term gloss | none |
| Statistics in blockquotes with source, date and method | 10 of 10 |

## Sources

- New figures added to the ledger, with both check dates: 19 rows under
  "Added 2026-10-10 (ledger rows from brief 64)", all checked 2026-10-10 twice.
- Rows added to the do-not-publish log: 6.

## Closed in this run

- First-party figures used, each with the site page that already publishes it:
  none as figures. Studio facts (one business day, 48 hours) and app facts
  (Campaigns, Assets Library, Validation, the interface in French) come from
  `hubstudio-positioning.md` and the help center.
- Spec rows published under deviation 7: none (no China platform spec).
- Claims cut and which section is now thinner: see R8; no section thinned.
- Briefs amended because the research or the live site proved them wrong: brief
  64, at source (`scripts/wave2/64-europe-campaign-localization.mjs`) and in
  the rendered brief, three lines: French sales dates are set by a ministerial
  order under the Commercial Code, not a decree; the 2027 French dates were not
  published, so the page prints the derived date labeled as derived; the green
  claims must-include now asks for the transposition status per market. A fresh
  rendering matches the amended brief word for word. No later brief repeats
  these errors (searched every wave two module).
- Live articles corrected because this piece contradicted them: none. The
  holiday calendar piece prints the same derived Jan. 6 date and the same
  30-day rule; no live page discusses Directive 2024/825.
- Rows added to `watch.csv`: four, all for europe-campaign-localization: France
  transposition of 2024/825 (due 2026-11-10), Spain transposition (2026-11-10),
  Italian winter 2027 dates (2026-12-01), the official French winter 2027
  notice (2026-12-15).
- Settled fallbacks applied: 4 (length over the floor: the overage is tables,
  verbatim legal labels and citations, prose not padded).
- Runbook substitutions: EUR-Lex unavailable, Official Journal text read on
  the Publications Office server; economie.gouv.fr unavailable, French sales
  rule read on Legifrance and Service Public. `editorial/sources/site-profile.md`
  was a month stale (it still described hub4You and the old studio URLs) and
  was refreshed from the repo and `hubstudio-positioning.md`.

## SEO counts (after the quality pass)

| Field | Chars or words | Ceiling | Pass |
|---|---|---|---|
| Title | 51 | 52 | yes |
| Meta description | 148 | 152 | yes |
| Excerpt | 25 words | 25 words | yes |

## Publish (run of 2026-10-10, 16:30)

- Article page created: src/pages/resources/insights/europe-campaign-localization.astro (publish-draft.mjs; the Campaigns link to /app/campaigns wired by hand)
- `src/data/insights.ts` entry added: head of the array, category Rights (brands layer), tone navy, dated 2026-10-10
- French address: /fr/ressources/analyses/localiser-une-campagne-en-europe; Chinese: /zh/resources/insights/europe-campaign-localization
- Translation: three passes in French and Chinese on the article, common (card), home and the insights index; i18n check and guard passed
- Build: passed
- `npm run check`: passed (0 errors, 0 warnings)
- Commit and push: see editorial/logs/runs/2026-10-10-publish.txt
- Resend email sent: see editorial/logs/runs/2026-10-10-publish.txt
