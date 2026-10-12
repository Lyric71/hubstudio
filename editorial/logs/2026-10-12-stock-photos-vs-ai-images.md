# Run log: 2026-10-12

| Field | Value |
|---|---|
| Brief | 69 |
| Slug | stock-photos-vs-ai-images |
| Research file | research/stock-photos-vs-ai-images.md |
| Output | output/stock-photos-vs-ai-images.md |
| Body word count | 2,316 prose only; 2,972 with tables (check-draft.mjs). Brief floor 2,000 |
| Body char count | 17,215 (body only, frontmatter and HTML comments excluded) |
| Status reached | image_ready |
| Model used at every step | Claude Opus 5.5 (claude-opus-5-5) for research, drafting and the quality loop; gpt-image-2 at high quality for the image |

Second draft run of 2026-10-12 (the 12:30 slot). The 00:30 run drafted
carousel-post-guide, which the 04:00 publish run published. The runner had
truncated `logs/runs/2026-10-12-draft.txt` at the start of this run; the
earlier run's lines were restored above this run's from HEAD.

**Row choice.** The earliest `not_started` publish_date is 2026-10-15, held by
rows 69 (stock-photos-vs-ai-images) and 68 (social-media-client-approval). The
tie is broken by the schedule's own row order, a stable sort on publish_date,
so this run took brief 69. Row 68 is next in the queue.

## Research gate

| Gate | Done | Note |
|---|---|---|
| R1 claims mapped before looking anything up | yes | Eight claim groups; money and speed figures for generation cut at R1 (no method behind any market per-image AI price; no hubStudio amount ever) |
| R2 SERP mapped, four phrasings minimum | yes | Five phrasings, top results recorded per query |
| R3 primary sources for every number | yes | Copyright Office report, D.C. Circuit opinion, Supreme Court docket, Commission guidelines, UK regulator ruling and guidance, four license agreements, three plan pages, help center |
| R4 Chinese-language web searched first | n/a | Nothing in the piece is China-related |
| R5 every figure interrogated (date, sample, method, who paid) | yes | Claims table C1 to C23, A1 to A7 |
| R6 triangulated, conflicts published as ranges | yes | License caps and plan prices published as ranges across three libraries; single-source values labeled as one library's |
| R7 research file written before drafting | yes | Written and status `researched` before any body copy |
| R8 reconciled after drafting | yes | Table in the research file; verify-quotes 8 of 8 verbatim, verify-numbers 23 of 23 found |

**Gap statement, one sentence:** every ranking page argues one side for
generic website imagery; none asks whether the picture has to show your actual
product, and none sets out the rights position from the Copyright Office's own
text or the license agreements' own clauses.

**Research time spent:** about 75 minutes.

- Figures reused from the ledger: the EU Article 50 guidelines rows (brief 52)
  and the UK advertising regulator ruling and imagery guidance rows (brief
  42), each re-fetched today for check 2.
- Claims cut because they could not be sourced: market per-image AI prices and
  AI subscription bands (vendor blogs, no method); trust and conversion claims;
  a rights-managed price band (none published); "AI images are public domain"
  as a blanket rule (overstates the Office); marketplace AI-image rules (not
  read at source here; the marketplace-policies brief later in the wave covers
  them from the platforms' pages).
- Conflicts published as a range rather than a single figure: legal protection
  under a standard license ($5,000 to $10,000 across three libraries); entry
  plan prices ($29 to $30 a month) and the per-image figure ($3 to $10).
- Captures saved to `research/stock-photos-vs-ai-images/`: 13 text captures
  (Copyright Office report extracts, appellate opinion extracts, Supreme Court
  docket, Commission guidelines extracts, two UK regulator pages, four license
  agreements, three plan pages), long dashes replaced by spaced hyphens at
  save time.

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

- Iteration 1: draft built on the brief's angle, with the three-way split
  (licensed stock, generated from words, generated from your own product photo)
  in the H1 answer and the first-screen decision table.
- Iteration 2, the ten weaknesses: (1) "millions of photographs" was an
  unsourced number; (2) a sentence claimed a source photo cuts the number of
  tries, unsourced; (3) "far fewer rejected attempts", unsourced; (4) "the
  license clock doesn't care", empty; (5) extended-license wording overstated
  "on every page"; (6) "competitors included" in an FAQ, reworded to rival
  brands; (7) "the courts backed the rule all the way up" overstated a
  certiorari denial; (8) the Review Board refusal was credited to the Office
  generally; (9) "every team edits with AI" and "most catalogs already have"
  were generalizations; (10) the cost table's "when the run succeeds" was an
  app-specific claim in a generic row.
- Iteration 3: all ten fixed; the cost-table row now reads per run, and the
  failed-run line is attributed to hubStudio.
- Iteration 4: production check; the intro answer is 59 words, names hubStudio
  once and stands alone; the not-legal-advice line opens the rights section.
- Iteration 5: AI tells stripped (two "exactly", a slogan line on generation).
- Iteration 6: zero em dashes; every blockquote carries a source line with a
  date and its method in the same breath.
- Iteration 7 ran as the cadence variant, not the planted-error variant: one
  bold-label paragraph turned into prose to break the parallel run, sentence
  lengths varied, a one-line paragraph in the speed section, contractions where
  a reporter would use them. No planted errors.
- Iteration 8: check 2 re-fetched all 13 cited surfaces (all HTTP 200, every
  quoted string found). One quote recapitalized to the source's exact wording,
  the license-cap blockquote narrowed to print runs and the aggregate cap after
  re-reading the agreements. R8 run: nothing in the draft lacks a claims-table
  row.
- Iteration 9: title and meta kept from the brief (45 and 143 characters);
  excerpt written at 21 words.
- Iterations 10 to 12: second AI pass, a final human pass, and table alignment
  (four tables, all at four columns or fewer).
- Iteration 13: five concepts (a real product in front of a hung print of a
  scene; hands holding the product beside a print of a similar but wrong one;
  a contact sheet of stand-ins around one real object; an empty frame around a
  real product; a loupe over a print), and the first chosen: the product is
  real, the scene is borrowed, and the bottle's own shadow on the print shows
  the seam.

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

Versions v0, v3 and v18 kept in the session scratchpad. Changes: a doubled
"though" and a run-on paragraph in the rights section split; the deep fake
sentence now says the Commission reads "objects" to include consumer goods; one
more bold-label paragraph turned into prose; a freshness cue on the price band
(published entry plans as of October 12, 2026); a repeated triad on label,
color and proportions varied in the FAQ; the neat closing line "imitation is
exactly the problem" loosened; a duplicate "honest" humanizer removed. The
skill's 60 / 156 ceilings and its exactly-25-word excerpt were overridden by
the house ceilings (52 / 152 / 25 words maximum). Straight quotes kept, as in
every earlier draft in `output/`; the publish step sets typography. No SEO
field needed trimming.

## Image

- Prompt used (verbatim from the feature-image block): the IMAGE PROMPT block
  in `output/stock-photos-vs-ai-images.md`, collapsed to one line and sent
  unchanged.
- Confirmed the prompt names no real person: yes; the style guide's
  photographer references were converted to lens, light, grade and grain.
- Attempts and what was wrong with rejected ones: one attempt, kept.
- AI-tells checklist run against the final frame: one light from upper left,
  one shadow from the bottle falling right across the print, the print's curl
  casting its own shadow from the same light; no text, lettering or logos; no
  people or hands; glaze uneven with a kiln speck; olive leaves attached to
  their branches; no melted edges or watermark-like artifacts; negative space
  on the right two thirds. Passed.
- Saved to: `public/Images/insight-stock-photos-vs-ai-images.webp` (1536 x
  1024, 64 KB, sharp webp quality 78, no enlargement).

## House rule checks

| Check | Result |
|---|---|
| Competitor named, described or alluded to | zero (no stock library, generator or agency named; libraries referred to as a category) |
| `$` occurrences, each one a category range with a date | 9 hits, all category ranges collected October 12, 2026 ($5,000, $10,000, $250,000, $29, $30, $3, $10, and $3, $10 again in the FAQ); no hubStudio amount |
| Em dash occurrences | zero |
| Deliberate typos or planted errors | zero |
| Summary or conclusion section | none |
| Decorative ordinal in a repeated titled block | none |
| Stray Han characters outside a term gloss | none |
| Statistics in blockquotes with source, date and method | 8 blockquotes, all sourced and dated |

## Sources

- New figures added to the ledger, with both check dates: nine rows under
  "Added 2026-10-12 (ledger rows from brief 69, stock-photos-vs-ai-images)",
  appended with `append-ledger.mjs`: the Copyright Office Part 2 conclusions
  and expressive-inputs passage, Thaler v. Perlmutter and the certiorari
  denial, the license caps, the entry plan band, the license clauses, and the
  check 2 dates for the Commission guidelines and the two UK regulator rows.
- Rows added to the do-not-publish log: four, in the same ledger block.

## Closed in this run

- First-party figures used, each with the site page that already publishes
  it: none. App facts only, from `src/content/help/create-an-image.md`,
  `history.md` and `hubstudio-positioning.md`, with no amount.
- Spec rows published under deviation 7 (modal value, counts, label): none.
- Claims cut and which section is now thinner: see the research gate list
  above. The cost section carries no money figure for generation, only the
  structure (per run, price shown first, failed runs not charged in
  hubStudio); that is by design, not a gap.
- Briefs amended because the research or the live site proved them wrong:
  none. The brief's working H1 was adapted to carry the primary query verbatim
  under SPEC structure rule 1; the brief itself was not wrong.
- Live articles corrected because this piece contradicted them (with the new
  `dateModifiedISO`): none. The piece agrees with eu-ai-act-labeling-brand-content
  (deployer duty from August 2, 2026, the real-car example, minor edits),
  product-photo-to-lifestyle-image (the 1,536 pixel resize, source pictures)
  and the copyright and AI page (human authorship, Thaler v. Perlmutter).
- Rows added to `watch.csv`: one, due 2027-01-12, the quarterly recheck of the
  stock license and price figures and of the Copyright Office's AI guidance.
- Settled fallbacks applied: 4 (prose over the 2,000 floor because of the
  mandated quotes, tables and FAQ; nothing padded, nothing cut to fit).
- Runbook substitutions: none. The showcase clip of the wave two plan does not
  apply to an insight hero; the ASSET BRIEF names the existing localized Image
  studio capture as optional.

## SEO counts (after the quality pass)

| Field | Chars or words | Ceiling | Pass |
|---|---|---|---|
| Title | 45 | 52 | yes |
| Meta description | 143 | 152 | yes |
| Excerpt | 21 words | 25 words | yes |

## Publish (fill in when step 4 runs)

- Article page created:
- `src/data/insights.ts` entry added:
- Build:
- `npm run check`:
- Commit and push:
- Resend email sent:
