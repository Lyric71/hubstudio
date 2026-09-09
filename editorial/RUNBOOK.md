# Daily runbook

Four articles a week, Monday, Tuesday, Thursday, Friday. Forty-eight articles,
September 14 to December 4, 2026. Batch one (briefs 01 to 30) publishes weeks
1 to 8. Batch two (31 to 48) is briefed in month two and publishes weeks 6
to 12.

## The daily command

Open Claude Code at the repo root and paste:

```
Draft today's article.
```

That is the whole prompt. `CLAUDE.md` says what "today's article" means. For a
specific one:

```
Draft brief 05B.
```

To publish a reviewed draft:

```
Publish douyin-video-specs-safe-zones
```

## What Claude does, in order

1. Reads `CLAUDE.md` and `SPEC.md`.
2. Finds today's row in `schedule.csv`. If today has no row, takes the oldest
   row with status `not_started` and says so.
3. Reads that brief file in `briefs/`.
4. Reads `sources/site-profile.md` instead of fetching the site, unless the
   profile is more than a month old.
5. Reads `sources/verified-sources.md` and Part 7 of the search spec, and
   reuses any figure already logged and verified twice.
6. Runs the research gate R1 to R7. Chinese-language web first for anything
   China-related, primary sources only for anything with a number in it.
   Writes `research/<slug>.md`. No body copy before this file exists.
7. Runs `/createarticle` (13 iterations, iteration 7 as the cadence variant,
   iteration 8 re-fetches every cited URL for check 2 and runs the R8
   reconciliation), printing the tracker. Writes `output/<slug>.md`.
8. Runs `/content-quality-us` on `output/<slug>.md` (18 passes, in place).
   House SEO ceilings (52 / 152 / 25 words) override the skill's own.
9. Runs `/generate-image-openai` with the prompt from the feature-image block,
   looks at the image, converts it to webp, saves it to
   `public/Images/insight-<slug>.webp`.
10. Appends new figures to `sources/verified-sources.md` with both check dates.
11. Updates the `schedule.csv` row to `image_ready` with the four dates filled.
12. Writes `logs/YYYY-MM-DD.md`.

Then it stops. A person reviews the draft and asks for publication.

## Weekly slots

Fixed, so the mix cannot drift back to commentary. Commentary is the content
type the category audit found ranks for nothing.

| Day | Slot | Job | Words | Mandatory elements |
|---|---|---|---|---|
| Monday | A | The money page: buying models, cost, evaluation | 2,500 to 3,500 | Decision table, cost-band section, FAQ block |
| Tuesday | B | The spec page: China platform requirements from primary evidence | 1,200 to 2,000 | Spec table, annotated screenshot, rejection reasons, visible reviewed date |
| Thursday | C | The operations page: rights, provenance, procurement, workflow | 1,500 to 2,200 | A workflow, checklist or document structure the reader can use tomorrow |
| Friday | D | The proof page: craft, data, case | 900 to 1,600 | One number from hubStudio's delivery record with its method stated |

Slot B doubles up in weeks 6 to 8 while the spec queue is hot, and slot D
takes the overflow. That is the only planned deviation.

If a week slips, drop slot D. Never drop slot A. If two weeks slip, run A and
B only and accept a slower build.

## The blocking task before cluster 1 ships

The Tmall specs cannot be verified from open sources. The Taobao Rule Center
(淘宝规则中心) blocks external access. The three Chinese spec sites that
publish them agree on 800 by 800 and the five-image maximum but conflict on
file size caps (500KB against 3MB) and product fill ratio, and none
distinguishes Tmall Global from domestic Tmall or accounts for category
variation.

**Someone with Qianniu (千牛) seller-backend access must capture the current
Tmall, JD, Douyin, RedNote, WeChat and Weibo rule pages and upload screens
before brief 01 is drafted.** Captures go to `research/<slug>/` with a capture
date. That verification is the moat. No ranking English page has done it.

Until that capture exists, brief 01 stays `blocked` and the schedule shifts
the next unblocked spec piece into slot B. Do not draft a spec table from
secondary sources to fill a slot. Publishing a spec number that was not
captured from a backend is the single most damaging thing this system can do:
it converts the only asset a rival cannot copy into an ordinary blog.

**The single highest-leverage half-day in this plan is one capture session
covering all six platforms.** Booking it early is what makes sprint mode
possible.

## Sprint mode

Baseline is four editorial pieces a week. The binding constraint is not
writing speed, it is verification. Going past five a week means shipping specs
that were not verified.

Be more aggressive on sequencing and on assets, not on article count.

- **Front-load the spec cluster into weeks 1 to 3.** All ten China spec pages
  instead of spread across eight weeks. They are the fastest pages here to
  rank, six to ten weeks, so shipping them five weeks earlier pulls the whole
  curve forward by five weeks. Works only if the backend capture for all six
  platforms happens in one session before week 1.
- **Pull both builds forward.** Calculator live in week 2 instead of month 2.
  Benchmark published in week 6 instead of month 3.
- **Add a fifth weekly slot that is programmatic, not editorial.** Once the
  capture exists, one verified data table generates twenty to thirty
  platform-by-placement spec sub-pages that cost hours rather than days. Thin
  but correct, each answering one long-tail query, all feeding the spec
  library hub. It does not compete with the research gate because the research
  is already done.

Sprint mode needs one more person or a compressed capture session, and it
front-loads roughly three extra weeks of work into month one. If that is
available, take it. If not, the baseline calendar still wins the vacant
ground, four weeks later.

## Build schedule alongside the calendar

| Week | Build |
|---|---|
| W1 to W2 | The eight infrastructure items below |
| W3 to W4 | China spec library hub page and shared table format |
| W5 to W8 | Public quotation engine, plus 16 author pages |
| W9 to W12 | The Real Cost of Brand Content 2026 benchmark |

### The eight infrastructure items, before week one

Prerequisites for the calendar, not parallel work.

| # | Item | Effort |
|---|---|---|
| 1 | Split robots.txt by bot purpose. Blocking training bots costs nothing in AI answers. Blocking retrieval bots deletes the site from AI answers entirely. Today's allow-all works by accident, not declaration | 1 hour |
| 2 | Verify retrieval bots actually reach the site. Fetch a live URL with each retrieval bot's user agent and confirm a 200, not a 403 or a challenge. Check the CDN, WAF and host rules, not just robots.txt | 30 min |
| 3 | Build `/llm-info` as a crawlable HTML page carrying Organization schema | 1 day |
| 4 | Extend llms.txt with a positioning section and a "what we are not" section, written to be lifted verbatim into an answer | 2 hours |
| 5 | Publish the quotation engine. It exists at `/pricing/calculator` and is blocked in robots.txt. Publish an indexable public version with market inputs and no hubStudio rate card in the output | 1 week |
| 6 | Author pages for the 16 named creatives. Every article gets a byline linking to a real person with real markets and credits | 3 days |
| 7 | Rank tracker plus AI-answer monitoring. 60 target queries tracked, 25 buyer prompts run monthly across five AI surfaces, logged | 1 day |
| 8 | Claim directory profiles. Best reading of the evidence is an eligibility gate. Claim the profiles, do not build a program | 1 day |

## Publishing a reviewed draft

`Publish <slug>` runs `/createblogarticle` on `output/<slug>.md`. That skill
creates `src/pages/resources/insights/<slug>.astro`, adds the entry to
`src/data/insights.ts`, converts the plain-text internal references into
links, wires the hero image, and updates every listing surface. Insights are
English only today, so there is no locale propagation and no `/deep-translate`
pass. If a French insights section is built later, publishing gains that step.

Then, in this order, and only when each step passes: `npm run build`,
`npm run check`, `git add` of everything the article touched (the page, the
data file, the hero image, listing surfaces, `editorial/output`,
`editorial/research`, `editorial/logs`, `schedule.csv`, `editorial/sources`),
one commit on main (`feat(insights): publish <slug>`), `git push origin main`.
A failed build or check means no commit, no push, the row stays at
`image_ready`, and the email reports the failure. Vercel deploys from main, so
the push is what puts the article live.

Then run `editorial/scripts/notify-publish.mjs` from the repo root. It sends
one email through Resend to the address in `CONTACT_TO_EMAIL`: subject
`Published: <title>`, body with the live URL, hero image path, build status,
open TODOs and the run log path. If the send fails, say so instead of skipping
silently.

Nothing publishes itself. Drafts wait in `output/` until someone says so.

## Reviewing a draft

Five checks that catch most problems in under ten minutes.

1. **Search the file for the em dash character.** Zero results, or it goes
   back.
2. **Search for a company name.** Any competitor named, described or alluded
   to is an automatic reject, whatever else the piece does well.
3. **Read every blockquote.** Each needs a source, a date and a method. A
   blockquote with no date is a fail. Spot-check two against the ledger: both
   check dates present, URL live.
4. **Search for `$`.** Every hit is either a category range with a collection
   date or it does not belong on the page. No hubStudio rate, ever.
5. **Read the first sixty words under the first H2.** If that block does not
   answer the query on its own, lifted out of the page, the introduction is
   doing the wrong job.

Then check the length. Being 25 percent under target means a section was
skipped. Then open the hero image in `public/Images/`. Run it against the
AI-tells checklist in `hubstudio-image-style-guide.md`.

## Calendar exceptions

| When | What | What to do |
|---|---|---|
| Sept 25 to 27 | Mid-Autumn Festival | China-side capture and review finish Thursday Sept 24. |
| Oct 1 to 7 | National Day Golden Week | Four slots fall inside it: Oct 1, 2, 5 and 6. Draft all four during the week of Sept 28 and schedule them. |
| Nov 11 | Singles' Day (双十一) | Brief 30, the production calendar, publishes Oct 9 so it lands before the cycle it describes. |
| Dec 4 | Plan ends | Week 13 onward continues the cadence or moves to the refresh cycle for the spec library. |

To batch the Golden Week four:

```
Draft briefs 02B, 28, 13 and 04. One at a time, full pipeline on each.
Do not merge them into one run.
```

## Three pieces that need an early start

| Brief | Publishes | Start | Why |
|---|---|---|---|
| 01 Tmall image requirements | Sept 15 | Before week 1 | Needs the Qianniu backend capture session. Blocked without it. |
| 11 What a finished brand asset costs | Sept 21 | Week 1 | The flagship. Needs the widest research pass in the plan. |
| 29 Training a brand model | Oct 16 | Week 3 | Needs the internal approval-rate method written down and cleared. |

## Measurement

| When | What to check | Pass mark |
|---|---|---|
| Before week 1 | Instrumentation live | All eight infrastructure items shipped |
| Week 4 | Indexation and crawl | 16 of 16 indexed inside 7 days each. Retrieval bots seen in logs on new URLs |
| Week 8 | First rankings on the vacant cluster | 4 or more China spec queries in the top 20. First AI-answer citation on any of the 25 prompts |
| Week 12 | Commercial layer working | First page-one position. Calculator live and converting. Benchmark published with 5 or more external citations |
| Week 16 | Lagging measures | Non-branded organic sessions, calculator completions, attributable enquiries, referring domains to the benchmark |

AI-answer visibility has to be measured by running the prompts and logging the
answers. There is no rank tracker for it. Brand mentions and cited domains
overlap by as little as 30 percent on some platforms, and being named without
being linked is a different outcome that still moves deals.

## If something goes wrong

| Problem | What to do |
|---|---|
| A spec number cannot be captured from a backend | The row goes to `blocked`. Do not fill the slot from secondary sources. Book the capture session. |
| Sources conflict on a figure | Publish the range and say why they conflict. That passage is more credible than false precision, and it is the kind of thing that gets cited. |
| A figure cannot be sourced at all | Claude cuts the claim and marks it. Decide whether the section still stands. |
| A source fails check 2 (page changed or gone) | Claude fixes the blockquote or cuts the claim. Never ship a citation that failed re-fetch. |
| A client number is missing | Claude leaves `TODO: client sign-off`. Chase it, do not guess. |
| The draft names or alludes to a company | Reject it. Point at the standing rule and rewrite the passage on the pattern. |
| Claude planted a typo | It ignored `CLAUDE.md` and the house skill. Point at the conflict section and rerun iteration 7. |
| The draft reads generic | The angle field was skipped. Rerun with `Reread the angle in the brief and rewrite.` |
| Two articles cite the same figure differently | The ledger was not updated. Fix the ledger, then both files. |
| Image generation fails on a name | The prompt named a real person. Convert the reference to its visual properties and retry. |
| Image has text, a logo or an AI tell | Regenerate. Never wire in an unchecked image. |
| The quality pass loosened the SEO fields past 52 / 152 | The skill's own ceilings leaked through. Recount and trim. |
| No publish email arrived | Rerun the notify script with `--dry-run` to see the payload, then without it. Check `RESEND_API_KEY` in `.env`. |

## Automating it

The pipeline runs on Cyril's machine through Windows Task Scheduler and the
local Claude Code CLI. Local on purpose: the user-level skills, the `.env`
keys and the full model are all here, and a cloud routine has none of them.

| Task | When (Shanghai) | What | Default |
|---|---|---|---|
| hubStudio Editorial Draft | Mon, Tue, Thu, Fri 00:30 | `run-daily.ps1 -Mode draft`: steps 0 to 3, stops at `image_ready` | enabled |
| hubStudio Editorial Publish | every day 04:00 | `run-daily.ps1 -Mode publish`: publishes every due `image_ready` row, builds, commits, pushes, emails | disabled until the first week has been reviewed by hand |

Scripts live in `editorial/scripts/`. `register-tasks.ps1` creates or updates
both tasks. Each run writes its console output to
`logs/runs/<date>-<mode>.txt`. The machine has to be on, or asleep with wake
allowed, at the run time. A missed run fires as soon as the machine is back.

**Sleep kills a run in progress.** A run can take an hour or more, so the
machine must stay awake from 00:30 until the run finishes. Set the power plan
to never sleep on AC. The runner retries transient API errors (overloaded,
rate limit, 5xx) up to three times, five minutes apart, on the same model.

To enable unattended publishing once the first week looks right:

```
Enable-ScheduledTask -TaskName 'hubStudio Editorial Publish'
```

To pause it again:

```
Disable-ScheduledTask -TaskName 'hubStudio Editorial Publish'
```

Runs use `--dangerously-skip-permissions` so nothing pauses for approval, and
pin the most capable model. Never lower the model to speed a run up.

## Before the first run

1. Book the Qianniu (千牛) capture session. Brief 01 is blocked until it
   happens, and the whole spec cluster depends on it.
2. `OPENAI_API_KEY` must be in `.env` at the repo root for
   `generate-image-openai`. `RESEND_API_KEY` and `CONTACT_TO_EMAIL` are
   already there.
3. Seed `sources/verified-sources.md` from Part 7 of the search spec. Every
   seeded entry still needs its two check dates before it can be cited.
4. Ship the eight infrastructure items. Item 2, confirming retrieval bots get
   a 200, is thirty minutes and is the highest-scored citation factor in the
   field. Do it first.
5. Decide the byline policy. The spec requires an author byline pointing at a
   real person, and `src/data/insights.ts` has an `author` field. Author pages
   are infrastructure item 6.
