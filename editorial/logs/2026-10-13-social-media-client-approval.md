# Run log: 2026-10-13

Catch-up draft run of 2026-10-13, started by Relaunch-MissedTasks.ps1
(`runs/2026-10-13-draft.txt`). The scheduled 08:41 attempt took row 68,
social-media-client-approval (template howto, publish_date 2026-10-15),
passed the research gate and set the row to `researched`, then exited on an
API authentication error (403) before drafting; its console log is kept as
`runs/2026-10-13-draft.before-catchup-122624.txt`. The working tree held the
research file and one capture, no draft and no hero. This run kept that
research, finished it (time spent, check 2, R8) and ran steps 1 to 3 on the
same row. No other row was taken: one run drafts one row.

| Field | Value |
|---|---|
| Brief | 68 |
| Slug | social-media-client-approval |
| Research file | research/social-media-client-approval.md |
| Output | output/social-media-client-approval.md |
| Body word count | 2,027 prose only; 2,436 with tables (floor 1,700) |
| Body char count | 13,271 (check-draft.mjs, body without frontmatter and comments) |
| Status reached | image_ready |
| Model used at every step | claude-opus-5-5 (research, drafting, quality loop, review); gpt-image-2 high quality for the hero |

## Research gate

| Gate | Done | Note |
|---|---|---|
| R1 claims mapped before looking anything up | yes | From the brief, validation.md, client-space.md, your-team.md and the positioning file |
| R2 SERP mapped, four phrasings minimum | yes | Five phrasings, 45 ranking results recorded, 16 pages opened; domains replaced by neutral labels |
| R3 primary sources for every number | yes | App facts from the help center (first party); one survey figure read on the survey's own page and captured |
| R4 Chinese-language web searched first | n/a | Nothing China-related in the piece |
| R5 every figure interrogated (date, sample, method, who paid) | yes | Statistics audit in the research file: every approval-time figure on the ranking pages traced; only one cleared |
| R6 triangulated, conflicts published as ranges | yes | Single survey, two years of the same question (41 then 33 percent), both printed |
| R7 research file written before drafting | yes | 08:58, before iteration 1 |
| R8 reconciled after drafting | yes | Table in the research file; nothing in the draft outside the claims table |

**Gap statement, one sentence:** no ranking page shows, without selling a
named tool, how to prove which exact version a client approved, keep the
post still while the client decides, keep each client to its own work and
keep a record nobody can delete, and none sources its time-saved numbers.

**Research time spent:** about 20 minutes of help-center reading and claim
mapping plus the SERP subagent run in the first attempt; about 10 minutes of
source checks and the newer-edition check in this run.

- Figures reused from the ledger: none (the ledger's brief 39 rows recorded
  the same absence of a method-backed approval-time figure).
- Claims cut because they could not be sourced: every hours-saved,
  approval-time or rounds figure; deadlines, reminders and multi-stage
  chains in the app; custom branding of the Client space; approval from a
  mobile app; approval publishing or locking a post automatically.
- Conflicts published as a range rather than a single figure: none; the
  survey's two consecutive values are printed together.
- Captures saved to `research/social-media-client-approval/`:
  2026-10-13-b2b-benchmark-approvals.txt.

## Iterations (createarticle)

```
[x] Iteration 1  : journalist-style American English draft
[x] Iteration 2  : weakness identification
[x] Iteration 3  : rewrite addressing weaknesses
[x] Iteration 4  : production-readiness review
[x] Iteration 5  : AI-detection removal pass
[x] Iteration 6  : em dash cleanup + blockquote citation formatting
[x] Iteration 7  : cadence pass (house variant, no planted errors)
[x] Iteration 8  : paragraph and citation structure + source check 2 + R8
[x] Iteration 9  : SEO metadata generation (within hard limits)
[x] Iteration 10 : second AI-detection pass
[x] Iteration 11 : final human touch pass
[x] Iteration 12 : visual formatting enhancement
[x] Iteration 13 : five visual concepts + one photorealistic image prompt
```

- 1: draft from the brief's must-include list, app facts worded from the
  three help pages; H1 carries the primary query.
- 2: weaknesses listed: (a) the brief's working H1 lacked the primary query;
  (b) the answer table implied an approved post stays locked, which the help
  does not say; (c) "now or on its schedule" implied a scheduled post can
  wait in validation, undocumented; (d) an FAQ answer claimed later changes
  return to the thread automatically; (e) "both leave a trace" about admin
  decisions, undocumented; (f) the hero line opened on an unsourced
  generalization; (g) the closing references paragraph made a layout claim
  ("side by side") about the review page; (h) link anchors in the asset brief
  did not match the body; (i) "Pause login shuts one person out without
  touching the work" went past the help text; (j) "doesn't change the bill"
  ignored download charges.
- 3: all ten fixed: table rows say "while they decided"; approval tied to a
  numbered version; resend described as a new version on the same thread.
- 4: production review: four existing localized captures placed with their
  help-center alts; three tables counted as two markdown tables plus the
  checklist; CTA last.
- 5: AI-tell scan: no banned words, no "it's not just", triads broken where
  not a verbatim app rule.
- 6: zero em dashes; one blockquote with source, date and method.
- 7: cadence variant ran, no planted errors: a one-line paragraph before the
  blockquote, a long thread paragraph followed by short decision lines, a
  parenthetical aside in the send section.
- 8: check 2 re-fetched the survey page (unchanged), re-read the three help
  pages (unchanged); R8 reconciliation written.
- 9: title 48, meta 146 (brief values kept), excerpt 25 words.
- 10 and 11: removed "rarely breaks on taste", tightened the lock section.
- 12: prompt block for the message to the validator, checkbox checklist,
  roles table at five columns.
- 13: five concepts considered (sealed envelope, light table of overlaid
  transparencies, padlock on a proof, a clipped stack of every proof under a
  paperweight, a client's hand on version two); the clipped stack under a
  glass paperweight was chosen: every version kept in order and held still
  while someone decides.

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
[x] Iteration 9  : second AI-undetectable pass
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

Changes made in place (versions v0 and v3 kept in the session scratchpad):
"the current one marked (current)" rewritten; "catches teams out" changed
to the American "trips teams up"; the clever 6 p.m. line cut for a plain
one; a four-item list about the client login split into two sentences; the
record section held two other questions, so cost and Studio + app moved
under their own H2s (one question per H2). Straight quotes kept, the
convention of every draft in `output/`. SEO fields unchanged and inside the
house ceilings; nothing trimmed back.

## Image

- Prompt used: verbatim from the feature-image block of the draft.
- Confirmed the prompt names no real person: yes.
- Attempts: one, accepted.
- AI-tells checklist run against the final frame: one window light from
  camera left, one shadow per object; the hand has five plausible fingers,
  knuckle texture and short nails; no text, numbers or marks on the proofs,
  clip or pencil; no melted edges or watermark artifacts; left third left as
  desk and shade for type.
- Saved to: `public/Images/howto-social-media-client-approval.webp`
  (1536 by 1024, webp quality 78, 179 KB).

## House rule checks

| Check | Result |
|---|---|
| Competitor named, described or alluded to | zero |
| `$` occurrences, each one a category range with a date | zero |
| Em dash occurrences | zero (draft, research file, ledger, watch.csv) |
| Deliberate typos or planted errors | zero |
| Summary or conclusion section | none |
| Decorative ordinal in a repeated titled block | none |
| Stray Han characters outside a term gloss | none |
| Statistics in blockquotes with source, date and method | 1 of 1 |

## Sources

- New figures added to the ledger, with both check dates: the approvals
  figure from the annual B2B content marketing benchmark survey (check 1 and
  check 2 2026-10-13), under "Added 2026-10-13".
- Rows added to the do-not-publish log: four, under "Do not publish, added
  from brief 68".

## Closed in this run

- First-party figures used, each with the site page that already publishes
  it: invitation valid for a week (/help/your-team, /help/client-space);
  Validation free and no AI, storage and downloads billed (/help/validation);
  no subscription, no seat fees, logins free (/app/review FAQ).
- Spec rows published under deviation 7: none.
- Claims cut and which section is now thinner: approval-time and rounds
  figures (the email section carries one survey figure instead); reminders
  and deadlines (the send section says the deadline is text in the message).
- Briefs amended: none. The brief's working H1 is kept in `schedule.csv`; the
  draft's H1 adds the primary query, as SPEC.md requires, and keeps the
  brief's angle.
- Live articles corrected: none needed; the plan-week-social-posts FAQ on
  the lock agrees with this piece.
- Rows added to `watch.csv`: 2026-11-16, recheck the autumn 2026 edition of
  the benchmark survey for a newer approvals figure (the October 2025 edition
  printed none).
- Settled fallbacks applied: 12 (no showcase clip; existing localized
  captures only).
- Runbook substitutions: the run log for this date is named after the slug,
  as the other runs of the week are; the earlier attempt's 403 is a fact of
  the shared runner, recorded here.

## Concurrent session at 12:30

The runner started a second session (claude-opus-5-5, 12:30:02) on the same
log while this catch-up was still running. It found row 68 at `researched`
with the draft's placeholders still open, resumed it, and made five wording
edits to the draft before it saw the catch-up writing to the same files. It
then stopped editing and let the catch-up finish. Its edits, each checked
against the help center and kept:

- "the app sends no reminder" became "a sentence for the validator to read,
  not a date the app tracks": the help documents no reminder, but no page
  states that none exists.
- The send-dialog caption no longer says the dialog "opens filled in": that
  capture shows the Validation page's blank dialog (Send an asset for
  validation), not the prefilled one from a studio.
- The Validation page caption now names its three tabs instead of the
  table columns, which the empty-state capture may not show.
- In the roles table, the Viewer's "Change the validator" cell reads "No"
  rather than "Read only", matching the other cells.
- The logins line was reworded so "costs nothing" appears once.

After the edits, check-draft.mjs passed again: 13,271 body characters, no
em dash, no `$`, no Han or full-width characters, no open-item marker. No
number changed, so R8 stands as written.

## SEO counts (after the quality pass)

| Field | Chars or words | Ceiling | Pass |
|---|---|---|---|
| Title | 48 | 52 | yes |
| Meta description | 146 | 152 | yes |
| Excerpt | 25 words | 25 words | yes |

## Publish (fill in when step 4 runs)

- Article page created:
- `src/data/howtos.ts` entry added:
- Build:
- `npm run check`:
- Commit and push:
- Resend email sent:
