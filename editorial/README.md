# hubStudio editorial system

Forty-eight article slots, thirty full briefs, and the specs Claude Code
drafts them from. Lives in `editorial/` inside the hubstudio repo so the
pipeline can publish straight into `src/pages/resources/insights/`.
September 14 to December 4, 2026. Four articles a week.

The strategy behind it is `editorial/SEARCH-SPEC.md`. This
folder executes it.

## Start here

1. `RUNBOOK.md` for the daily process, the slots and the calendar exceptions.
2. `CLAUDE.md` for voice and the standing rules. Claude Code loads it.
3. `SPEC.md` for the output contract and the definition of done.

## Layout

```
CLAUDE.md                 standing rules, auto-loaded
SPEC.md                   output contract, research file shape
RUNBOOK.md                daily process, slots, automation
schedule.csv              48 rows, date to brief, status tracking
briefs/                   30 per-article specs, named by publish date
research/                 one research file per piece, plus capture folders
sources/
  site-profile.md         cached site fetch, refresh monthly
  verified-sources.md     the source ledger, read before researching
output/                   finished drafts land here
logs/                     one run log per article, TEMPLATE.md to copy
scripts/                  generator, runner, scheduler, notifier
```

## The daily command

```
Draft today's article.
```

## The pipeline

Research gate (primary sources, Chinese first, every claim marked),
`/createarticle`, `/content-quality-us` on every article,
`/generate-image-openai` for the hero, then `/createblogarticle` on request,
then an email when the publish is done. `CLAUDE.md` has the table.

## The rule that shapes everything

**No competitor is ever named, described, compared to, or alluded to.**
Market figures are attributed to the category and the date, never to a
company. Comparison content still gets written: it compares models of buying
and regions, never firms.

## The rule people get wrong

The upstream CreateArticle skill tells you to plant deliberate typos. This
project forbids it. The house copy at `.claude/skills/createarticle/` runs a
cadence pass instead, and `CLAUDE.md` says so at the top. Humanize through
cadence only.

## The thing that is actually hard

Not writing. Verification. The China spec cluster is the only asset here a
rival cannot copy, and it is only uncopyable because every number in it was
captured from a seller backend. Brief 01 is blocked until that capture session
happens. Publishing a spec number that came from another English article turns
the moat into an ordinary blog.

## Regenerating the briefs

`briefs/` and `schedule.csv` are generated from one data file so the calendar,
the slugs and the slot assignments cannot drift apart:

```
node editorial/scripts/generate-briefs.mjs
```

Edit `editorial/scripts/briefs-data.mjs`, rerun, commit the diff. The
generator never overwrites a brief that has been hand-edited unless you pass
`--force`.
