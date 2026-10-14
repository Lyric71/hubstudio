# Run log: 2026-10-14

| Field | Value |
|---|---|
| Brief | 71 (wave two, `scripts/wave2/71-cost-of-social-content-week.mjs`) |
| Slug | cost-of-social-content-week |
| Research file | research/cost-of-social-content-week.md |
| Output | output/cost-of-social-content-week.md |
| Body word count | 3,337 with tables; 2,345 prose only (brief target 2,300, a floor) |
| Body char count | 18,932 |
| Status reached | image_ready |
| Model used at every step | Claude Opus 5.5 (claude-opus-5-5), the most capable model in this environment, for research, drafting, quality and review; images gpt-image-2 at high quality |

Unattended draft run, the 12:30 Shanghai slot, first model attempt. The
00:30 run had drafted brief 70 (x-image-video-specs), published since as
e81f43c; the runner restarted the console log file for this slot, and the
morning's entries remain in git history. The tree held no partial work: no
row at researched, drafted or quality_passed, and no output, research or hero
file for brief 71. The earliest not_started row in publish_date order was
brief 71 (publish_date 2026-10-19, template insight), so this run took it.
Nothing is published and nothing is committed.

## Research gate

| Gate | Done | Note |
|---|---|---|
| R1 claims mapped before looking anything up | yes | Nine claim groups; hours per post, seat prices and approval-round statistics cut at R1 |
| R2 SERP mapped, four phrasings minimum | yes | Five phrasings, nine results each, 19 pages opened |
| R3 primary sources for every number | yes | BLS OEWS and ECEC (public data API), Destatis, ONS ASHE, Eurostat; market figures from published surveys with samples and agencies' own price pages, labeled market claims |
| R4 Chinese-language web searched first | n/a | Not a China piece: US and European wages, rates and retainers. Their own statistics offices and price pages are the primary sources |
| R5 every figure interrogated (date, sample, method, who paid) | yes | Every row in the claims table carries all five; seller-published figures labeled market claims |
| R6 triangulated, conflicts published as ranges | yes | German freelance rates from two surveys (86.70 and 94 euros) published side by side; agency tiers published as full ranges per currency |
| R7 research file written before drafting | yes | Written and row set to researched before any body copy |
| R8 reconciled after drafting | yes | Every draft figure traced to a claims row; table in the research file |

**Gap statement, one sentence:** No ranking page prices one defined week of
social output from official wage statistics with a stated method, and none
counts the costs every route carries on top: approval rounds, rework, tools,
stock and the reviewer's hours.

**Research time spent:** about 1 hour 25 minutes active, with four research
subagents in parallel (European wages, freelance surveys, agency price pages,
SERP), then verification of every figure they returned against its capture.

- Figures reused from the ledger: entry stock subscriptions about $29 to $30 a
  month (brief 69, checked twice on 2026-10-12); the ECEC June 2026 row
  (ledger row from brief 33) re-read through the API and unchanged; the BLS
  graphic designer and film and video editor medians (ledger row from brief
  15) re-read and unchanged.
- Claims cut because they could not be sourced: hours or minutes per post
  (seller estimates only); a loaded multiplier of 1.4 to 2.0 (asserted, no
  source); a marketplace median of $25 an hour (403, seller); video editors at
  $27.55 an hour (self-selected global sample, seller); social media consulting
  rates from an editorial association (prices advice for authors); a UK
  recruiter's day rates (no method); official self-employed earnings (no such
  series); France occupation medians (not reachable at occupation level);
  currency conversion of agency prices (no checked rate for the day).
- Conflicts published as a range rather than a single figure: German
  marketing freelance rates, 86.70 euros against 94 euros an hour from two
  surveys; agency retainer tiers $99 to $8,280, 99 to 2,200 pounds, 49 to
  3,000 euros, with the per-post spread by tier type.
- Captures saved to `research/cost-of-social-content-week/`: 80 files, check
  1 and check 2, text of each rendered page with URL, status and time, the raw
  BLS and Eurostat API responses with their queries, extracts of the Destatis
  and ONS spreadsheets and the freelancermap PDF. bls.gov pages refuse
  automated reads (403), so the BLS figures come from its public data API,
  which serves the same series.

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

1. Draft from the brief and the research file: H1 as approved, a 60-word
   answer naming hubStudio once, an answer table in the first screen, the
   defined week as a table, one question per H2, six FAQs, CTA Send a brief.
2. Weaknesses: (a) the freelance week presented two and three days as "a
   plausible split", an assumption dressed as a finding; (b) "the UK office
   publishes no load" was unverified; (c) "the occupation that does most of
   this work" overclaimed; (d) "the managing is often most of it" had no
   source; (e) the hidden-cost table asserted what agencies and freelancers
   include; (f) no platform page referenced; (g) the freelance band's method
   line did not match its arithmetic; (h) the pricing page sentence claimed
   more than the page says; (i) a performative line closing the agency intro;
   (j) the hero's closing clause was vague.
3. Rewrite: the days became the reader's own input; "this page applies no
   load to the UK figures"; "the closest occupation"; the managing claim cut;
   table cells recast as contract or tier terms; the LinkedIn platform page
   added; method line matched; pricing sentence narrowed; line cut; hero made
   concrete.
4. Production review: the defined week's "daily on the main channel" did not
   add up to ten posts and was rewritten as two posts a working day; the
   copywriter survey's "people who don't sell freelancers" was wrong (the
   network runs a paid directory) and was rewritten.
5. AI pass: removed "approval doubles a week's cost" (no source) and "the
   cheapest saving on this page"; replaced a balanced closing pair.
6. Em dashes: zero. Eleven blockquotes, each with a Source line naming the
   publisher or category, the date and the method.
7. Cadence variant, no planted errors: the free items in the app section
   moved from a bold-label list into prose, a long in-house paragraph
   followed by one-line sentences, parallel openings broken.
8. Check 2 re-fetched every cited page and API (all 200); 50 quoted strings
   found again across 24 files, the Destatis and ONS spreadsheets re-downloaded
   and read row by row, the freelancer survey PDF byte-identical. R8: every
   draft number traced; five unsupported phrases removed (listed in the
   research file).
9. SEO: title 42, meta 152 (the brief's approved values), excerpt 22 words.
10. Second AI pass: no banned words; one parenthetical aside kept.
11. Human touch: contractions, a reporter's verbs, figures in plain units.
12. Visual formatting: seven tables aligned in the source, five columns
    maximum, no ordinal in any repeated block.
13. Five concepts: a brass balance weighing ten prints against a wristwatch;
    a producer passing an envelope of proofs across a desk; a wall planner
    with one week pinned; a receipt spike beside a stack of contact sheets;
    an overhead of ten proofs laid out in a row for review. Chosen: the
    balance, because every route weighs the same ten posts against someone's
    hours.

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

Run in place, versions saved in the session scratchpad. The ten weaknesses:
the hero's $2,200 did not say it was a loaded median; "the biggest one is
usually the review" was unsourced; a clever line on the spread; no freshness
cue; "hubStudio's studio works three ways" mislabeled Use the app as studio
work; three section openings shared one pattern; a weak lead-in to the band
table; a broken line wrap; a designer credited with the video edit only
loosely; the US-only freelance day unlabeled in the answer. All fixed, and a
line now says every figure was read at source on October 14, 2026. The marker
hunt broke a three-sentence parallel ("depends on"), the hero triad, and a
neat "same hour, three times" closer. 40 uses of "about" were cut to the
prose by moving "rounded" into four table headers. The skill's own ceilings
(60 / 156) did not apply: title 42, meta 152, excerpt 25 words, inside the
house ceilings. House style kept the newsroom convention of the published
articles (no serial comma, straight apostrophes in the Markdown source).

## Image

- Prompt used (verbatim from the feature-image block): "Editorial campaign
  photograph, landscape 3:2 frame. Inside a lived-in creative studio office in
  Changsha, late afternoon, a single tall window out of frame on the left
  throws warm directional daylight across a scuffed wooden worktable; one
  light source, one soft shadow falling to the right. On the table stands an
  old brass two-pan balance scale, slightly tarnished, its beam almost level.
  The left pan holds a neat stack of ten small matte photographic prints
  turned face down, so only their plain off-white paper backs show. The right
  pan holds a single worn steel wristwatch lying on its leather strap. A
  Chinese woman producer in her thirties is cropped hard at the right edge of
  the frame: only her forearm, rolled cotton sleeve and hand are visible, two
  fingertips steadying the left pan, with natural knuckle creases, a faint old
  scar and short unpolished nails. Behind, soft and out of focus: a corkboard
  with a row of pinned color proofs, a small desk fan, a ceramic mug with a
  chipped rim, a stack of brown cardboard sample boxes, a tangle of cables.
  50mm prime lens at f/4, camera at table height just above the pans, the
  scale placed on the right third with generous warm empty wall space on the
  left for typography, cropped tighter than comfortable. Warm shadows,
  slightly desaturated midtones, a gentle color-negative film look in the
  manner of Portra 400 stock, black point lifted slightly, subtle fine film
  grain across the whole frame. No text, no numbers, no logos, no watermark,
  no screens."
- Confirmed the prompt names no real person: yes (a film stock is named, no
  person).
- Attempts and what was wrong with rejected ones: one attempt, kept.
- AI-tells checklist run against the final frame: one light from the left
  with one shadow direction; the hand has five digits, creases and the scar,
  no drift; the scale's beam, posts and pans are mechanically coherent; no
  readable text (the pinned prints carry faint defocused marks below the
  pictures, unreadable at full size, checked on a crop); no melted jewelry;
  grain present. The stack reads as more than ten prints; the idea holds
  without a countable stack.
- Saved to: public/Images/insight-cost-of-social-content-week.webp (1536 x
  1024, 79,728 bytes, webp quality 78 from the PNG).

## House rule checks

| Check | Result |
|---|---|
| Competitor named, described or alluded to | zero: no agency, marketplace, survey publisher or tool named; sources attributed by category |
| `$` occurrences, each one a category range with a date | 77, all US wage statistics, derived loaded costs, marketplace or agency figures, or the stock band, each dated; zero hubStudio figures |
| Em dash occurrences | zero (draft, research file, all 80 captures) |
| Deliberate typos or planted errors | zero |
| Summary or conclusion section | none; the page ends on the CTA |
| Decorative ordinal in a repeated titled block | none |
| Stray Han characters outside a term gloss | none |
| Statistics in blockquotes with source, date and method | 11 of 11 |

## Sources

- New figures added to the ledger, with both check dates: nine rows
  (2026-10-14 and 2026-10-14) via `append-ledger.mjs --brief 71`: BLS OEWS May
  2025 for five occupations, ECEC June 2026, Destatis 2025, Eurostat labour
  cost levels 2025, ONS ASHE 2025 provisional, the marketplace rates report,
  the UK copywriter survey, the two German marketplace surveys, and the 17
  agency price pages.
- Rows added to the do-not-publish log: six (hours per post, the 1.4 to 2.0
  multiplier, the marketplace $25 median, the $27.55 video editor figure, the
  author-marketing consulting rate, the recruiter day rates).

## Closed in this run

- First-party figures used, each with the site page that already publishes
  it: none with a number. App and studio facts come from
  hubstudio-positioning.md and the help center (balance-and-payments,
  troubleshooting, x, campaigns, validation), with no amount.
- Spec rows published under deviation 7: none (not a spec page).
- Claims cut and which section is now thinner: hours per post (the freelance
  section gives the day rate and leaves the days to the reader); France
  appears only through its labor-cost load, not an occupation wage.
- Briefs amended because the research or the live site proved them wrong:
  none. The brief's figures, FAQ, SEO values and app facts all held.
- Live articles corrected because this piece contradicted them:
  real-cost-of-brand-content-2026. Its buying-model table said of the
  "Freelance or agency retainer" row that no open published figure exists.
  This research found 17 agency price pages and four freelance surveys with
  stated samples. The row now reads that social media retainers publish
  tiers of $99 to $8,280 a month in the US but bundle account management with
  the making; basis: agencies' own price pages read October 14, 2026, freelance
  rates only in surveys, the reference handbook still priced; caveat:
  seller-published with no method, a market claim, not a production price.
  Changed in the page, its draft in output/, both dictionaries (French and
  Chinese, three passes on the three cells: Les Echos register with the
  glossary's "forfait mensuel" and the site's "argument commercial"; Chinese
  with the glossary's term for retainer and the site's settled term for
  market claim, full-width punctuation), and `dateModifiedISO: '2026-10-14'` on its entry in
  src/data/insights.ts. `npm run i18n:guard` and the content TODO check pass.
  The exclusions row on the same page (monthly content marketing retainers
  price management, not the making of an asset) still holds and is
  unchanged. in-house-studio-vs-outsourced-production lists "Freelancer surge
  at peak: none found" as a line with no published benchmark; that line is
  the volume of surge a studio needs, not a rate, so this piece does not
  contradict it and it is unchanged.
- Rows added to `watch.csv`: two. 2026-11-30, ONS ASHE revised 2025 and
  provisional 2026; 2027-01-14, quarterly recheck of the 17 agency pages and
  the ECEC September 2026 load, covering the real-cost row too.
- Settled fallbacks applied: 4 (length over the floor: the overage is
  tables and blockquotes, prose is 2,345 against 2,300).
- Runbook substitutions: bls.gov refuses automated reads, so OEWS and ECEC
  came from the BLS public data API (same series, same values as the ledger's
  page reads); the Destatis table rows came from the GENESIS-Online XLSX
  download because the rendered table does not show every row.

## SEO counts (after the quality pass)

| Field | Chars or words | Ceiling | Pass |
|---|---|---|---|
| Title | 42 | 52 | yes |
| Meta description | 152 | 152 | yes |
| Excerpt | 25 words | 25 words | yes |

## Publish (fill in when step 4 runs)

- Article page created:
- `src/data/insights.ts` entry added:
- Build:
- `npm run check`:
- Commit and push:
- Resend email sent:
