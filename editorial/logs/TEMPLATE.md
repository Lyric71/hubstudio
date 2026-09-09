# Run log: YYYY-MM-DD

| Field | Value |
|---|---|
| Brief | 00 |
| Slug | |
| Research file | research/slug.md |
| Output | output/slug.md |
| Body word count | |
| Body char count | |
| Status reached | researched / drafted / quality_passed / image_ready / published / blocked |
| Model used at every step | must be the most capable available |

## Research gate

| Gate | Done | Note |
|---|---|---|
| R1 claims mapped before looking anything up | | |
| R2 SERP mapped, four phrasings minimum | | |
| R3 primary sources for every number | | |
| R4 Chinese-language web searched first | | |
| R5 every figure interrogated (date, sample, method, who paid) | | |
| R6 triangulated, conflicts published as ranges | | |
| R7 research file written before drafting | | |
| R8 reconciled after drafting | | |

**Gap statement, one sentence:**

**Research time spent:**

- Figures reused from the ledger:
- Claims cut because they could not be sourced:
- Conflicts published as a range rather than a single figure:
- Captures saved to `research/<slug>/`:

## Iterations (createarticle)

Tracker as printed, with one line per iteration saying what changed. Note
explicitly that iteration 7 ran as the cadence variant, not the planted-error
variant. Note the check 2 results and the R8 reconciliation in iteration 8.

## Quality pass (content-quality-us)

Tracker as printed, 18 passes plus final. Note any SEO field trimmed back to
the house ceiling afterward.

## Image

- Prompt used (verbatim from the feature-image block):
- Confirmed the prompt names no real person:
- Attempts and what was wrong with rejected ones:
- AI-tells checklist run against the final frame:
- Saved to:

## House rule checks

| Check | Result |
|---|---|
| Competitor named, described or alluded to | zero, or it does not ship |
| `$` occurrences, each one a category range with a date | |
| Em dash occurrences | zero |
| Deliberate typos or planted errors | zero |
| Summary or conclusion section | none |
| Decorative ordinal in a repeated titled block | none |
| Stray Han characters outside a term gloss | none |
| Statistics in blockquotes with source, date and method | |

## Sources

- New figures added to the ledger, with both check dates:
- Rows added to the do-not-publish log:

## Flags

- TODO: client sign-off items:
- TODO: backend capture needed:
- Claims cut and which section is now thinner:
- Conflicts between the brief and the live site:
- Runbook substitutions (what the repo could not do, what was used instead):

## SEO counts (after the quality pass)

| Field | Chars or words | Ceiling | Pass |
|---|---|---|---|
| Title | | 52 | |
| Meta description | | 152 | |
| Excerpt | | 25 words | |

## Publish (fill in when step 4 runs)

- Article page created:
- `src/data/insights.ts` entry added:
- Build:
- `npm run check`:
- Commit and push:
- Resend email sent: yes / no (reason)
