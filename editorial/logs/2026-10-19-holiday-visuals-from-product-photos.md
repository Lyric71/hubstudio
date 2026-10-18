# Run log: 2026-10-19

| Field | Value |
|---|---|
| Brief | 79 (wave two, how-to) |
| Slug | holiday-visuals-from-product-photos |
| Research file | research/holiday-visuals-from-product-photos.md |
| Output | output/holiday-visuals-from-product-photos.md |
| Body word count | 2,623 prose only (blockquotes, FAQ, figure alt text and the prompt example included); 3,208 with tables. Target 1,700 is a floor |
| Body char count | 17,969 |
| Status reached | image_ready |
| Model used at every step | Claude Opus 5.5 (claude-opus-5-5), the first model of the runner's chain, for research, drafting and both quality loops; gpt-image-2 at high quality for the image. No cheaper path was offered or taken |

Queue: 78 rows published, 64 not_started, none at researched, drafted,
quality_passed, image_ready or blocked when the run started. Brief 79
(publish_date 2026-10-27) was the earliest not_started row; git held no
output or research file for the slug, and `logs/runs/2026-10-19-draft.txt`
showed a fresh start, so nothing was resumed. Uncommitted edits already in
the tree (editorial/CLAUDE.md, RUNBOOK.md, the editorial scripts, the
feature-videos work and others listed by git status at the start) are not this
run's and were left as they were.

## Research gate

| Gate | Done | Note |
|---|---|---|
| R1 claims mapped before looking anything up | yes | Seven groups listed at the top of the research file |
| R2 SERP mapped, four phrasings minimum | yes | Five queries: black friday product images AI; holiday product photos with AI; christmas product images from existing photos; black friday ad images; AI background for product photos holiday. 45 results, two pages read in full |
| R3 primary sources for every number | yes | eCFR (16 CFR Part 233), EUR-Lex (Directive 2019/2161), OPM, GOV.UK, Google Merchant Center Help, the Gemini and OpenAI image guides; app facts from the help center and hubstudio-positioning.md only |
| R4 Chinese-language web searched first | n/a | No China claim: the piece covers the US, the UK, France and the EU |
| R5 every figure interrogated (date, sample, method, who paid) | yes | Claims table C1 to C12 and A1 to A12 |
| R6 triangulated, conflicts published as ranges | yes | No conflicting figure; the French 2027 sales date printed as the rule applied, not as an announcement |
| R7 research file written before drafting | yes | Row set to researched before the first line of the draft |
| R8 reconciled after drafting | yes | Table in the research file; four phrases rewritten or cut |

**Gap statement, one sentence:** The ranking pages are background-generator
and template promos that show one festive backdrop and stop: none keeps the
product identical, none keeps the offer off the render so it can change
without a new one, none names the price-claim rules a sale visual triggers,
and none gives the formats each placement takes.

**Research time spent:** about 55 minutes.

- Figures reused from the ledger: OPM 2026 holidays, GOV.UK bank holidays,
  the French winter sales rule (brief 49); EU Article 6a (briefs 49 and 64);
  Google Merchant Center image_link overlay rule (brief 51); the Gemini and
  OpenAI maker quotes (brief 50). Each was re-read in this run.
- Claims cut because they could not be sourced: vendor output and conversion
  claims, a count of visuals per season, a fixed FTC look-back period, UK
  price-reduction rules, "official" 2027 French sales dates from calendar
  sites.
- Conflicts published as a range rather than a single figure: none.
- Captures saved to `research/holiday-visuals-from-product-photos/`:
  ecfr-part-233.txt (full Part 233, long dashes replaced by a spaced hyphen
  per the 2026-10-08 rule), eurlex-2019-2161-art2.txt,
  opm-2026-holidays.txt, govuk-bank-holidays-extract.txt.

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

- 1: draft from the brief, the research file and four help articles; eleven
  H2s, three tables (season dates, prompt pattern, placement formats), four
  existing localized captures, one prompt block, a step list and a fidelity
  checklist (the slot requirement).
- 2: weaknesses: the primary query was missing from the first 100 words; the
  Thanksgiving row cited a "fourth Thursday" rule not read at source; "it
  will invent" overstated; a "20 percent off to 30" example carried numbers
  with no source; "changes in a minute" was an unsourced time; the Mask
  advice described masking a render instead of the packshot; the EU sentence
  said the prior price could sit "on the page beside it", an interpretation
  the Directive does not make; an Instagram Story size cell read "Set by the
  editor"; "two placements need two renders" was too absolute; the claim that
  edited copies join the studio's campaign is not in the help center.
- 3: each fixed: "Black Friday" added to the lede, the row now reads "Federal
  holiday list", the time and percentage cut, the Mask paragraph rewritten to
  the help's own wording, the EU line restricted to "the announcement carries
  the prior price", the campaign step rewritten to Add to campaign from the
  Assets Library, which campaigns.md documents.
- 4: production review: every app fact traced to create-an-image.md,
  skills.md, assets-library.md, campaigns.md or the positioning file; "prepaid
  balance", never credits; no hubStudio amount; no claim of an order button;
  engines named only from the help center's list.
- 5 and 10: AI-tell scans (seamless, leverage, robust, delve, unlock and the
  rest, hollow openers): none.
- 6: zero em dashes; six blockquotes, each with a Source line, a date and a
  scope or method; "grey" corrected to "gray" (check-draft flagged it).
- 7: ran as the cadence variant, not the planted-error variant. No deliberate
  errors. Single-line paragraphs ("The EU does set one.", "No new run."), one
  parenthetical aside, contractions, the lede triad broken into two
  sentences.
- 8: source check 2 re-fetched all six cited URLs on 2026-10-19. Five matched
  verbatim. The Gemini page still carries the quoted sentence but now reads
  "Last updated 2026-10-09 UTC"; the blockquote was corrected from Oct. 6 to
  Oct. 9 and the ledger updated. R8 reconciliation written in the research
  file.
- 9: title 45 and meta 150 (the brief's approved values, kept); excerpt
  written at 25 words, trimmed to 24 to sit inside the ceiling.
- 11 and 12: hand read; tables aligned, four columns at most; asset brief
  written with the five internal links and the four captures.
- 13: five concepts considered: a producer in a Hong Kong office pinning
  holiday proofs to a corkboard; a hand with a loupe over a contact sheet; the
  same jar on a white sweep and in a festive scene, split by light; a window
  ledge in December with the product and a wrapped parcel; the real product
  beside a fan of printed proofs, one circled in red wax pencil. Chosen: the
  last, because it shows the article's argument (the product is the reference
  every render is checked against) without a person or a screen, and it
  differs from the previous how-to heroes.

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

Versions v1, v3, v7 and v18-final were kept in the session scratchpad.

- 2 and 3: ten weaknesses, all fixed: a performing closer in the dates
  section ("Use it to set the deadline") cut; "the 'was' in 'was and now'"
  reworded to "a was-and-now offer"; "the one some channels require" made
  concrete ("Some product listings take nothing but the clean render"); the
  Mask paragraph tightened; the Story size cell renamed "Placement size";
  Precise image edits added to the skills step (in the Catalog per
  skills.md); the FAQ on the discount repeated the section nearly word for
  word, rewritten; the volume section said nothing about what the free steps
  cost, a line added (the Image editor and Campaigns cost nothing, from the
  positioning file); two lines in the formats section rewrapped.
- 4: production-ready after those fixes; no missing section against the
  brief's "Must include" list.
- 11: hostile read: subheads are questions a buyer types; credibility
  anchors are the FTC's guide text, the EU Directive, Google's and OpenAI's
  own pages; cost answered without an amount; the how-to layout prints
  the page's date, and every season date is dated 2026 on the page.
- 12: bold-label structure only in the step list and the fidelity checklist
  (both slot requirements); the remaining nine sections are prose, well under
  half.
- 13: the lede triad split; "you would be drawing the product, not showing
  it" (a not-X-but-Y line also used in the lifestyle guide) rewritten.
- 14 and 16: studio line moved to first person plural per the positioning
  ("how we produce the set in the studio"); no padding added.
- 15: all six blockquotes share one format; no em dash.
- 17: title 45, meta 150, excerpt 24 words, one H1, eleven H2s, six H3s in
  the FAQ, every internal link listed in the asset brief and present in the
  repo. Quotes stay straight in the markdown, as in every draft in output/;
  the publish step renders them.
- 18: no repeated humanizer; "actually" appears once.

## Image

- Prompt used (verbatim from the feature-image block): Editorial still life
  photograph on a worn oak studio worktable beside a tall window on a late
  December afternoon, taken from slightly above table height with an 85mm
  prime lens at f/4. (Full text in the draft's feature-image block.)
- Confirmed the prompt names no real person: yes; the style guide's product
  references were converted into lens, light, grade and composition.
- Attempts and what was wrong with rejected ones: one attempt, kept.
- AI-tells checklist run against the final frame: no text or almost-words on
  the prints or the label, no hands or people, one light source from the
  window with shadows falling right, no identical bokeh, no watermark
  artifacts at the edges. The jars in the prints are squatter than the real
  jar; kept, because the frame is about proofs checked against the real
  product and the circled proof is the failed one.
- Saved to: public/Images/howto-holiday-visuals-from-product-photos.webp,
  1536 x 1024, 186 KB (webp quality 78 from the 1536 x 1024 PNG, no
  enlargement).

## House rule checks

| Check | Result |
|---|---|
| Competitor named, described or alluded to | zero (domains appear only in the research file's SERP map, which never reaches the page) |
| `$` occurrences, each one a category range with a date | zero |
| Em dash occurrences | zero, in the draft, the research file, the captures and this log |
| Deliberate typos or planted errors | zero |
| Summary or conclusion section | none |
| Decorative ordinal in a repeated titled block | none |
| Stray Han characters outside a term gloss | none |
| Statistics in blockquotes with source, date and method | six blockquotes, all sourced and dated |

## Sources

- New figures added to the ledger, with both check dates: ten rows under
  "Holiday visuals from product photos" (16 CFR 233.1(a), 233.1(e), the Part
  233 absence, EU Article 6a re-read, OPM and GOV.UK re-reads, Merchant
  Center wording, the Gemini date correction, the OpenAI re-read, the
  search-results audit).
- Rows added to the do-not-publish log: four.

## Closed in this run

- First-party figures used, each with the site page that already publishes
  it: none. App facts only, from the help center and the positioning file.
- Spec rows published under deviation 7 (modal value, counts, label): none.
- Claims cut and which section is now thinner: vendor output and conversion
  claims and a count of visuals per season (the FAQ on how many visuals
  answers with the reader's own count instead); a fixed FTC look-back period
  (the price section says the guides set none).
- Briefs amended because the research or the live site proved them wrong:
  none. Brief 79's facts held against the help center and the sources.
- Live articles corrected because this piece contradicted them: none. The
  holiday content calendar prints the same dates and the same EU rule.
- Rows added to `watch.csv`: three for holiday-visuals-from-product-photos
  (2026-12-15 French 2027 sales notice, 2027-01-19 quarterly recheck,
  2027-07-01 recount of the season dates for 2027).
- Settled fallbacks applied: 4 (length over the floor: the overage is
  blockquotes, the mandated FAQ, figure alt text and the prompt example;
  nothing padded) and 12 (no showcase clip; the existing localized captures
  carry the app).
- Runbook substitutions: the eCFR versioner API answers 406 without a
  compression header; the capture was taken with `curl --compressed`
  (recorded in the ledger row).

## SEO counts (after the quality pass)

| Field | Chars or words | Ceiling | Pass |
|---|---|---|---|
| Title | 45 | 52 | yes |
| Meta description | 150 | 152 | yes |
| Excerpt | 24 words | 25 words | yes |

## Publish

- Article page created: src/pages/resources/how-to/holiday-visuals-from-product-photos.astro (publish-draft.mjs, template howto), 2026-10-19 publish run
- `src/data/howtos.ts` entry added: at the head, category Image editing, tone orange, dated 2026-10-19; French address /fr/ressources/guides-pratiques/visuels-black-friday-a-partir-de-vos-photos-produit; French and Chinese dictionaries translated with three passes
- Build: passed
- `npm run check`: passed (0 errors)
- Commit and push: feat(insights): publish holiday-visuals-from-product-photos, on main; hash in the publish run log
- Notification: queued by notify-publish.mjs after the push (publish run log)
