# Run log: 2026-10-11

Catch-up run started by Relaunch-MissedTasks.ps1 for the draft runs named
for 2026-10-10 and 2026-10-11. No schedule row is dated either day; the
2026-10-10 12:30 run had completed (row 64, published the same day) and the
2026-10-11 00:30 run never reached a model. This run took the next row in
the queue.

| Field | Value |
|---|---|
| Brief | 65 |
| Slug | plan-week-social-posts |
| Research file | research/plan-week-social-posts.md |
| Output | output/plan-week-social-posts.md |
| Body word count | 2,072 prose only; 2,710 with tables (floor 1,700) |
| Body char count | 14,901 |
| Status reached | image_ready |
| Model used at every step | claude-opus-5-5 (drafting, quality loop, review, research subagents); gpt-image-2 high quality for the hero |

## Research gate

| Gate | Done | Note |
|---|---|---|
| R1 claims mapped before looking anything up | yes | From the brief and ten help articles |
| R2 SERP mapped, four phrasings minimum | yes | Five phrasings plus two variants, 7 searches, 19 pages opened |
| R3 primary sources for every number | yes | Network-owned help and developer pages only, 24 captures |
| R4 Chinese-language web searched first | n/a | Nothing China-related in the piece |
| R5 every figure interrogated (date, sample, method, who paid) | yes | Claims table C1 to C14, A1 to A17 |
| R6 triangulated, conflicts published as ranges | yes | Instagram cap printed as both of Meta's figures |
| R7 research file written before drafting | yes | 2026-10-11, before iteration 1 |
| R8 reconciled after drafting | yes | Every number traced, see the research file |

**Gap statement, one sentence:** no ranking page walks a practitioner
through one timed afternoon from one brief to finished visuals, network
versions checked against each network's own limits, sign-off and a loaded
queue; they pad the method with frequency numbers that have no source.

**Research time spent:** about 75 minutes.

- Figures reused from the ledger: Instagram 100/50 conflict, Instagram
  caption 2,200, LinkedIn 3,000 (all re-read, unchanged).
- Claims cut because they could not be sourced: a "ten minutes for the
  calendar" line; a daily-cap column for LinkedIn, Facebook and X; every
  posting-frequency and best-time figure from the ranking pages.
- Conflicts published as a range rather than a single figure: Instagram's
  API cap (100 in one section of Meta's guide, 50 in its carousel section and
  in the quota reference).
- Captures saved to `research/plan-week-social-posts/`: 24 text captures
  plus the check 2 file.

## Iterations (createarticle)

Recorded line by line in `logs/runs/2026-10-11-draft.txt`. Iteration 7 ran
as the cadence variant, not the planted-error variant. Iteration 8: check 2
re-fetched all 12 cited surfaces, all unchanged; R8 reconciled every number.

## Quality pass (content-quality-us)

18 passes plus final, recorded in `logs/runs/2026-10-11-draft.txt`. SEO
fields stayed inside the house ceilings throughout (44 / 150 / 23 words).
Pass 11 renamed the four "Block one" to "Block four" headings to Plan, Make,
Adapt, and Approve and schedule, under the no-numbers-in-cards rule.

## Image

- Prompt used: the IMAGE PROMPT in the draft's feature-image block, as
  amended after attempt 1 (plain brass straightedge with no markings, no
  numbers on the tools).
- Confirmed the prompt names no real person: yes.
- Attempts: attempt 1 rejected (the steel ruler carried garbled,
  out-of-sequence numerals, an "almost-but-not-quite text" tell); attempt 2
  accepted.
- AI-tells checklist run against the final frame: hands checked at crop
  (five fingers each, natural knuckles, the paper cut visible), one light
  source from the left with one shadow per print, no text, no logo, knife grip
  reads as texture.
- Saved to: public/Images/howto-plan-week-social-posts.webp (1536x1024,
  164 KB, webp q78).

## House rule checks

| Check | Result |
|---|---|
| Competitor named, described or alluded to | zero |
| `$` occurrences, each one a category range with a date | zero |
| Em dash occurrences | zero |
| Deliberate typos or planted errors | zero |
| Summary or conclusion section | none |
| Decorative ordinal in a repeated titled block | none |
| Stray Han characters outside a term gloss | none |
| Statistics in blockquotes with source, date and method | 5 of 5 |

## Sources

- New figures added to the ledger, with both check dates: 10 rows under
  "Weekly social planning" (2026-10-11, brief 65).
- Rows added to the do-not-publish log: 6.

## Closed in this run

- First-party figures used, each with the site page that already publishes
  it: app facts only, listed in the asset brief (help center articles
  campaigns, linkedin, instagram, facebook, x, tiktok, youtube, validation,
  shorts-autopilot).
- Spec rows published under deviation 7: none.
- Claims cut and which section is now thinner: the daily-cap column of the
  limits table (now caption limits only, caps in two blockquotes).
- Briefs amended because the research or the live site proved them wrong:
  brief 65 (module and rendered brief) and brief 109, the one later brief
  repeating it: Instagram's cap is no single figure, publish 100 and 50.
- Live articles corrected because this piece contradicted them: none
  (instagram-post-sizes-2026 and long-video-to-shorts already print the same
  figures).
- Rows added to `watch.csv`: one, due 2027-01-11, the quarterly recheck of
  the network limits.
- Settled fallbacks applied: 12 (no showcase clip; the page ships with its
  hero and two existing localized captures).
- Runbook substitutions: hero saved as `howto-<slug>.webp` per the wave two
  how-to convention. Two pipeline scripts fixed: `check-draft.mjs` no longer
  counts image embeds as markdown links; `append-ledger.mjs` dates its
  heading with the run date instead of a fixed 2026-09-10 (the ledger rows
  for this run were appended by hand in the format of the last runs).

## SEO counts (after the quality pass)

| Field | Chars or words | Ceiling | Pass |
|---|---|---|---|
| Title | 44 | 52 | yes |
| Meta description | 150 | 152 | yes |
| Excerpt | 23 words | 25 words | yes |

## Publish (fill in when step 4 runs)

- Article page created:
- `src/data/howtos.ts` entry added:
- Build:
- `npm run check`:
- Commit and push:
- Resend email sent:
