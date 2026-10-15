# Run log: 2026-10-15

Catch-up draft run of 2026-10-15 12:30, started by Relaunch-MissedTasks.ps1
(`runs/2026-10-15-draft.txt`), model attempt 1 of the fallback chain. The
attempt that the scheduler started at 12:30:01 wrote two lines and stopped;
this run replaced it at 12:30:49.

What the working tree held: no row at researched, drafted or
quality_passed. Row 72 (resize-image-every-social-network) was taken to
image_ready by the 00:30 draft run of the same day and is being published
by the publish runner; its page, `src/data/howtos.ts`, `src/i18n/routes.ts`,
dictionaries, glossaries, ledger rows, watch row and publish logs are
uncommitted and were left untouched. No schedule row other than row 40
(published) carries the date 2026-10-15, so the catch-up had no dated row to
process first. The 12:30 slot therefore drafted the next row: brief 73, the
earliest `not_started` row in `publish_date` order (2026-10-20).

| Field | Value |
|---|---|
| Brief | 73 |
| Slug | pinterest-pin-specs |
| Research file | research/pinterest-pin-specs.md |
| Output | output/pinterest-pin-specs.md |
| Body word count | 1,813 prose only; 2,633 with tables (floor 1,400) |
| Body char count | 14,222 (check-draft.mjs, body without frontmatter and comments) |
| Status reached | image_ready |
| Model used at every step | claude-opus-5-5 (research, drafting, quality loop, review); gpt-image-2 high quality for the hero |

## Research gate

| Gate | Done | Note |
|---|---|---|
| R1 claims mapped before looking anything up | yes | Standard pin, video, carousel, collections, other ad formats, retired formats, upload rules, hubStudio facts |
| R2 SERP mapped, four phrasings minimum | yes | Five phrasings by a research subagent, 12 third-party pages opened, every domain replaced by a category label |
| R3 primary sources for every number | yes | 12 Pinterest pages from the Help Center, Pinterest Business, Pinterest Create and the newsroom archive, captured to `research/pinterest-pin-specs/`; app facts from the help center only |
| R4 Chinese-language web searched first | n/a | Pinterest is not a China platform |
| R5 every figure interrogated (date, sample, method, who paid) | yes | Platform rules read directly; Pinterest's advice labeled as advice; its 2021 growth figures cut |
| R6 triangulated, conflicts published as ranges | yes | Description 800 or 500, scheduling 30 days or two weeks, ideal video 6 to 15, 15 to 60 or 45 to 90 seconds: all printed with the page that says each |
| R7 research file written before drafting | yes | 2026-10-15, before iteration 1 |
| R8 reconciled after drafting | yes | Every number traced to a claim row, see the research file |

**Gap statement, one sentence:** the ranking pages are third-party size
sheets that print a 1000 x 2100 "long pin", a 1000 x 3000 "infographic pin"
and a 600 x 900 minimum that no Pinterest page publishes, still list Idea
Pins and Story Pins as current, and never set Pinterest's own pages against
each other, though those pages disagree on the description limit, the
scheduling window and the ideal video length.

**Research time spent:** about 45 minutes active. Most of the Pinterest
surface is one specs page plus a handful of short help articles, and the
help center serves full text to a logged-out browser, so no capture work
beyond rendering and clicking tabs was needed.

- Figures reused from the ledger: none; no Pinterest row existed.
- Claims cut because they could not be sourced: the tall-pin sizes and the
  minimum size (no Pinterest page), Pinterest's 2021 growth and comment-rate
  figures (seller's figures, no method), a Pinterest pixel size for video
  presented as a rule.
- Conflicts published as a range rather than a single figure: the three
  above.
- Captures saved to `research/pinterest-pin-specs/`: 12 pages at check 1 and
  again at check 2 (24 files).

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

- 1: draft from the research file, 11 H2s, six tables, four blockquotes.
- 2: weaknesses listed: first H2 without the exact query; "stopped offering
  three years ago" overstated the 2023 change (the rollout ran for months and
  old pins stayed); an ambiguous page count; an H2 that was not a question;
  a glib "folklore"; the Width-to-1500 step without the true-2:3 caveat;
  quality wording off Pinterest's text; a paraphrase of the double-byte line.
- 3: all fixed.
- 4: production review; check-draft failures were only the missing appended
  blocks at that point.
- 5 and 6: no AI tells, zero em dashes, blockquotes in house format.
- 7: cadence variant, not the planted-error variant: the color and tint
  lines split into two paragraphs of different length, the description
  paragraph rebuilt, the Idea ads line made its own short paragraph, long
  source lines rewrapped.
- 8: check 2 re-captured all 12 Pinterest pages after drafting; every cited
  figure unchanged (differences are capture headers and tab clicks only); R8
  reconciliation written into the research file, two claim rows widened to
  carry lines the draft quotes (description used for relevance, max width
  collections organic or paid).
- 9: SEO kept at the brief's approved values (28 / 140 / 21 words).
- 10 and 11: no company named, no `$`.
- 12: tables aligned, five columns maximum.
- 13: five concepts (a wall of 2:3 proofs with one tall print folded to
  height; a paper cutter trimming a long print; a phone held over a print
  grid; a carousel of five proofs laid in a row; brass push pins in a tin on
  a cutting mat), the first chosen because the fold shows the cut-off and the
  push pins nod to the pin without a logo.

## Quality pass (content-quality-us)

```
[x] Iteration 1  : newsroom-style draft (v1)
[x] Iteration 2  : 10 weaknesses identified
[x] Iteration 3  : rewrite fixing the weaknesses (v3)
[x] Iteration 4  : production-ready review (v4)
[x] Iteration 5  : AI-undetectable pass (v5)
[x] Iteration 6  : em dash cleanup, blockquote formatting (v6)
[x] Iteration 7  : human touch pass (v7)
[x] Iteration 8  : SEO title, meta, excerpt (v8)
[x] Iteration 9  : second AI-undetectable pass (v9)
[x] Iteration 10 : second human touch pass (v10)
[x] Iteration 11 : hostile reader review (v11)
[x] Iteration 12 : structural ratio audit (v12)
[x] Iteration 13 : AI marker hunt (v13)
[x] Iteration 14 : read-aloud and reader empathy (v14)
[x] Iteration 15 : structural sniff test (v15)
[x] Iteration 16 : pacing and flow (v16)
[x] Iteration 17 : SEO and structural integrity check
[x] Iteration 18 : self-created pattern check (v18)
[x] Final        : SEO fields in the frontmatter
```

Versions are in the session scratchpad. Weaknesses fixed in iteration 3: a
hero line that overclaimed ("the rest of what circulates" is mostly right),
a "two lines" paragraph with no first line, ambiguous "pixels" sentence,
advice not labeled as ours, a contradictory Idea ad file cell, a clunky
collections line, no tie between AI-made files and Pinterest's AI-Modified
toggles, a rigid bold-label list, a flat "unsourced" line, and an FAQ answer
that repeated the body word for word. Iteration 4 explained the "Help" and
"Business" labels in the tables; iteration 11 turned four H2s into the
questions buyers type; iteration 13 broke a three-site triad; iteration 14
cut a well-turned closer; iteration 16 added one pacing cue ("Posting organic
pins only? Skip ahead"); iteration 18 varied the repeated "our practice"
aside; iteration 17 caught a British "the other way round". Quotes stay as
straight quotes, the repo's convention for drafts (the publish step renders
them). No SEO field needed trimming.

## Image

- Prompt used (verbatim from the feature-image block): the IMAGE PROMPT in
  `output/pinterest-pin-specs.md`, a Shanghai studio cork board of 2:3 proofs
  with a Chinese designer's hands folding one tall proof down to height and
  pinning it.
- Confirmed the prompt names no real person: yes (film stock named, no
  photographer).
- Attempts and what was wrong with rejected ones: one attempt, kept.
- AI-tells checklist run against the final frame: one directional light
  source and consistent short shadows; hands with natural knuckles and no
  extra fingers; no readable text, logo or watermark (ruler ticks only); no
  melted objects; prints and pins plausible; the radiator and desk sit
  naturally out of focus.
- Saved to: `public/Images/insight-pinterest-pin-specs.webp` (1536 x 1024,
  137 KB, webp quality 78, no enlargement).

## House rule checks

| Check | Result |
|---|---|
| Competitor named, described or alluded to | zero (size guides described only as a category) |
| `$` occurrences, each one a category range with a date | zero |
| Em dash occurrences | zero (draft, research file, captures, ledger, watch row, this log) |
| Deliberate typos or planted errors | zero |
| Summary or conclusion section | none |
| Decorative ordinal in a repeated titled block | none |
| Stray Han characters outside a term gloss | none |
| Statistics in blockquotes with source, date and method | 4 blockquotes, each with source, date and URL; tables carry the source page per row |

## Sources

- New figures added to the ledger, with both check dates: ten rows under
  "Added 2026-10-15 (ledger rows from brief 73, pinterest-pin-specs)", check
  1 and check 2 both 2026-10-15.
- Rows added to the do-not-publish log: six, same section.

## Closed in this run

- First-party figures used, each with the site page that already publishes
  it: none. App facts only, from `src/content/help/create-an-image.md`,
  `assets-library.md` and `hubstudio-positioning.md`.
- Spec rows published under deviation 7 (modal value, counts, label): none.
  Pinterest's pages are readable, so every row is primary (Wave two rule).
- Claims cut and which section is now thinner: tall-pin and minimum sizes
  (the tall-pin section says Pinterest publishes none); Pinterest's 2021
  figures (not needed; the retired-formats section keeps the dates only).
- Briefs amended because the research or the live site proved them wrong:
  none. The brief's note limits sources to the Help Center and Pinterest
  Business; two other Pinterest-owned sites (Pinterest Create and the
  newsroom archive) were used for the dated format history no help page
  still carries and for creator advice labeled by page. That is within the
  brief's intent (Pinterest's own pages, never a third-party blog) and is
  recorded in the research file.
- Live articles corrected because this piece contradicted them: none. No
  live page or draft prints a Pinterest size, Idea Pin or Story Pin claim.
  Later briefs naming Pinterest (102, 108, 109) repeat none of the errors.
- Rows added to `watch.csv`: 2027-01-20, pinterest-pin-specs, the quarterly
  recheck (the brief's due date).
- Settled fallbacks applied: none needed. The site has no Pinterest platform
  page (brief note), so the social media and ecommerce design service pages
  stand in, as the brief directs.
- Runbook substitutions: `business.pinterest.com/creative-best-practices/`
  redirects a headless browser to the Business home page from this machine,
  so that page was read by a plain HTTPS fetch; the performance page's
  linked words were read from its HTML. Both noted in the capture headers.

## SEO counts (after the quality pass)

| Field | Chars or words | Ceiling | Pass |
|---|---|---|---|
| Title | 28 | 52 | yes |
| Meta description | 140 | 152 | yes |
| Excerpt | 21 words | 25 words | yes |

## Publish (fill in when step 4 runs)

- Article page created:
- `src/data/insights.ts` entry added:
- Build:
- `npm run check`:
- Commit and push:
- Resend email sent:
