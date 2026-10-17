# Run log: 2026-10-18

| Field | Value |
|---|---|
| Brief | 78 |
| Slug | us-ai-disclosure-rules-brands |
| Research file | research/us-ai-disclosure-rules-brands.md (captures in research/us-ai-disclosure-rules-brands/) |
| Output | output/us-ai-disclosure-rules-brands.md |
| Body word count | 4,017 with tables; 3,090 prose only (target 2,400, a floor) |
| Body char count | 23,131 |
| Status reached | image_ready |
| Model used at every step | Claude Opus 5.5 (claude-opus-5-5), the most capable model in this environment, for research, drafting, the quality loop and review; gpt-image-2 at high quality for the image. No cheaper path was offered or taken. |

Row choice: no row stood at researched, drafted or quality_passed. The
earliest not_started row in publish_date order was brief 78 (2026-10-26).
`git log` showed no earlier output or research file for the slug, so there was
no partial work to resume. This was attempt 1 of the runner's model chain; no
earlier attempt had run.

## Research gate

| Gate | Done | Note |
|---|---|---|
| R1 claims mapped before looking anything up | yes | 13 claims written to the research file before the first search |
| R2 SERP mapped, four phrasings minimum | yes | Six queries, nine results each, in research/us-ai-disclosure-rules-brands/serp-map.md |
| R3 primary sources for every number | yes | Statutes, regulations, FTC releases and notices, court orders, platform help pages only; no law-firm alert or vendor blog cited |
| R4 Chinese-language web searched first | n/a | Nothing China-related on this page |
| R5 every figure interrogated (date, sample, method, who paid) | yes | Every figure is a statutory, regulatory or order amount, dated, with its instrument |
| R6 triangulated, conflicts published as ranges | yes | No conflicting figures; the one tracker count that conflicted with the primary record was cut |
| R7 research file written before drafting | yes | Written 01:05, draft started after |
| R8 reconciled after drafting | yes | Every number traced to a claims row; see the research file |

**Gap statement, one sentence:** no ranking page sets the federal, state and
platform layers side by side from their primary texts and says, for each,
whether it binds the brand, the engine maker or the platform, and which brand
assets trigger it.

**Research time spent:** about 95 minutes of research across four parallel
researchers (FTC layer, state layer, platform layer, SERP) plus the lead's
ledger review and cross-checks, 00:30 to 01:05 Shanghai wall clock; check 2
added a fifth pass of about 17 minutes.

- Figures reused from the ledger: New York S8420A (rows 82, 1712), FTC
  Deception Policy Statement (row 1556), California Labor Code 927 and AB 2602
  (rows 84, 314), the brief 52 platform rows (2078 to 2080), the Endorsement
  Guides Q and A negative finding (1704). Each was re-read at source in this
  run; several had changed (below).
- Claims cut because they could not be sourced: the NCSL count of states with
  political deepfake laws (single tracker, misdates two California events);
  the Hawaii political deepfake ruling (not read at a court); the date of the
  AB 2839 preliminary injunction; the supplement case's 4 million dollar
  judgment figure (extracted text only).
- Conflicts published as a range rather than a single figure: none needed.
- Captures saved to `research/us-ai-disclosure-rules-brands/`: 23 text
  captures (7 FTC, 11 state, 4 platform, the SERP map) plus check2.md.

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

1. Draft from the brief and the research file: answer table first screen,
   one question per H2, FAQ of seven, CTA Send a brief.
2. Weaknesses: prose over target; vague Section 5 table row ("AI or not");
   "on a shoot list" misapplied to a generated customer; weak Endorsement
   Guides opener; "the cases since follow the same line" vague; "two federal
   threads" followed by three items; platform intro "just the rules enforced
   fastest"; repetitive "Nothing specific" cells; checklist echoing the FAQ;
   the DPS fine-print clause not yet read at source.
3. Fixed each: table cell reworded, production-terms framing, new opener,
   the overclaim line, federal threads split in two paragraphs, platform intro
   rewritten; the fine-print sentence re-read in the 1983 PDF and quoted
   verbatim.
4. Production review: three appended blocks added; check-draft passes.
5. Triads trimmed ("a serum richer, a sofa deeper or a burger taller" cut to
   two), tidy closers removed.
6. Zero em dashes; every blockquote carries a dated Source line.
7. Cadence variant ran, not the planted-error variant: long and one-line
   paragraphs alternated, a parenthetical aside added twice, three parallel
   structures broken (the who-binds paragraph, the records lead-in, the
   consent lede). No planted errors.
8. Check 2: all 26 cited sources re-fetched (check2.md). 25 passed; one
   citation fixed (91 FR 20165 was the April proposed order, the source line
   now cites the FTC releases of December 22, 2025 and July 15, 2026). R8
   reconciliation written in the research file.
9. SEO: the brief's approved title and description kept (still accurate);
   excerpt written at 24 words.
10. Second AI-detection pass: marker words hunted (none found).
11. Human touch: freshness line ("Every rule on this page was read at its
    source on October 18, 2026").
12. Visual formatting: the New York and California table normalized to the
    same compact form as the others; four tables total.
13. Five concepts, one chosen (producer clipping a blank card to a print of a
    generated model beside the real jacket); prompt names no person.

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
[x] Final        : fold the SEO content into the markdown
```

Hostile-reader findings fixed in one pass: figures left in prose (10
companies, 750,000 dollars, Hawaii's 25,000 dollars) moved into sourced
blockquotes; a freshness line added under the answer table; "Claims about AI,
mostly" sharpened to a sourced negative ("None of the cases read for this
page turns on a missing label"); the fake-review lead-in made precise ("the
one federal rule that the FTC, in its own notice, says covers AI-made
content"); the New York advice line rewritten for read-aloud; the California
lede now names the two places it goes further (audio, wording). Structural
ratio: bold-label blocks appear only in the FAQ; the rest is prose, lists and
tables. A mid-page skip-ahead aside was drafted at pass 16 and removed, since
it pulled the H2's answer away from the heading. Pass 18: "Not from brands"
appears once in the body and once in the FAQ (a standalone answer); no
repeated humanizer. The skill's looser SEO ceilings (60 / 156) were not used;
house ceilings held.

## Image

- Prompt used (verbatim from the feature-image block): the IMAGE PROMPT in
  output/us-ai-disclosure-rules-brands.md, 301 words, Changsha studio office,
  producer clipping a blank card to a print of a generated model beside the
  real rust quilted jacket, 35mm at f/4, window light from the left.
- Confirmed the prompt names no real person: yes.
- Attempts and what was wrong with rejected ones: one attempt, accepted.
- AI-tells checklist run against the final frame: hands and fingers correct
  (crop checked); no text on the card, the tape roll or the print (crops
  checked); one window light from the left with one shadow direction; skin and
  hair textured; pushpins, chipped mug and cables irregular; no melted
  jewelry, no symmetrical poreless face. Negative space sits top right on the
  cork.
- Saved to: public/Images/insight-us-ai-disclosure-rules-brands.webp (1536 x
  1024, webp quality 78, 148 KB; the PNG stays in the session scratchpad).

## House rule checks

| Check | Result |
|---|---|
| Competitor named, described or alluded to | zero. FTC case defendants are described by case type only; no tool, agency or vendor named |
| `$` occurrences, each one a category range with a date | zero. Amounts are statutory or order figures written in words |
| Em dash occurrences | zero (draft, research, captures, edited live page, dictionaries, briefs, watch.csv scanned) |
| Deliberate typos or planted errors | zero |
| Summary or conclusion section | none; the file ends on the CTA plus the blocks |
| Decorative ordinal in a repeated titled block | none |
| Stray Han characters outside a term gloss | none |
| Statistics in blockquotes with source, date and method | 16 blockquotes, all sourced and dated |

## Sources

- New figures added to the ledger, with both check dates: 17 rows under "US
  AI disclosure in advertising (added 2026-10-18, brief 78)", check 1 and
  check 2 both 2026-10-18, appended with append-ledger.mjs.
- Rows added to the do-not-publish log: 6, under "Do not publish, added from
  brief 78". Ledger row 213 (SB 1050 as not enacted) marked superseded.

## Closed in this run

- First-party figures used, each with the site page that already publishes
  it: none. App facts (History, Validation) come from hubstudio-positioning.md
  and the help center.
- Spec rows published under deviation 7: none.
- Claims cut and which section is now thinner: the political deepfake state
  count (the other-states section names California's rule and points to each
  state's election code instead); Pennsylvania SB 806 (watch row instead).
- Briefs amended because the research or the live site proved them wrong:
  five later briefs cited New York as the only synthetic performer statute.
  California SB 1050 (chapter 246, in force January 1, 2027) now sits beside
  it in briefs 84 (beauty), 92 (marketplace policies), 95 (avatar or
  presenter), 117 (avatar explainer) and 137 (year-end review, under "what
  moves in 2027"), amended in both the wave2 module and the brief file.
- Live articles corrected because this piece contradicted them:
  disclosure-audit-trail-per-asset said California's Act binds only systems
  above a million monthly users and listed four latent fields. SB 1000
  (September 30, 2026) deleted the threshold and added a fifth field. Fixed on
  the page, in its draft, in its French and Chinese dictionary entries (the
  three changed sentences translated natively, NBSP kept before French
  punctuation), and dateModifiedISO set to 2026-10-18; a dated correction note
  added to its research file. The HiSense page's "One US state rule applies
  only where an ad contains a synthetic performer" was checked and left: it
  describes New York's rule and claims no exclusivity.
- Rows added to `watch.csv`: four, for this slug: 2026-11-18 (Pennsylvania SB
  806 and New York A11683), 2026-12-18 (FTC impersonation docket and the
  proposed preemption policy statement), 2027-01-04 (SB 1050 and the platform
  duties come into force: move the page to present tense), 2027-01-18
  (quarterly recheck of the platform rows).
- Settled fallbacks applied: 4 (length over target: the overage is mandated
  verbatim quotes, sourced blockquotes, four tables and the seven-question FAQ;
  prose was not padded and no citation was cut).
- Runbook substitutions: leginfo.legislature.ca.gov answered HTTP 403, so
  California texts were read from the Legislature's official bulk data
  (downloads.leginfo.legislature.ca.gov), the database behind leginfo; eCFR
  web pages block bots, so the eCFR API was used; two TikTok and one Meta
  page rendered only in a headless browser. All are the same primary texts.
- Fact about the working tree, outside this row: `npm run i18n:guard` reports
  14 empty translations, all in the feature-video, help and calculator work
  that was uncommitted in the tree before this run started (resources/videos,
  help/explore, help/choosing-a-model, pricing/calculator, resources). None
  is in a file this run touched. Nothing was committed, per the run's
  instructions.

## SEO counts (after the quality pass)

| Field | Chars or words | Ceiling | Pass |
|---|---|---|---|
| Title | 47 | 52 | yes |
| Meta description | 151 | 152 | yes |
| Excerpt | 24 words | 25 words | yes |

## Publish (fill in when step 4 runs)

- Article page created:
- `src/data/insights.ts` entry added:
- Build:
- `npm run check`:
- Commit and push:
- Resend email sent:
