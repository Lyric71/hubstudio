<#
.SYNOPSIS
  Runs the hubStudio editorial pipeline through the local Claude Code CLI.

.DESCRIPTION
  Local by design: this machine has the user-level skills (content-quality-us,
  generate-image-openai, createblogarticle), the project skill (createarticle),
  the .env keys and the full model. A cloud routine has none of those.

  Modes:
    draft    "Draft today's article."  Steps 0 to 3 of the pipeline. Stops at
             image_ready. Runs Mon, Tue, Thu, Fri.
    publish  Publishes every row in editorial/schedule.csv whose status is
             image_ready, in English, French and Chinese (the translation
             step starts its own dev server: npm run i18n:local), then sends
             the Resend email. A finished draft goes
             live the next morning rather than waiting for its publish_date:
             that column is the drafting calendar, and waiting on it left
             finished drafts sitting unpublished for weeks.

  Output of each run is written to editorial/logs/runs/<date>-<mode>.txt.
  Register with editorial/scripts/register-tasks.ps1.

.PARAMETER Mode
  draft (default) or publish.
#>
param(
  [ValidateSet('draft', 'publish')]
  [string]$Mode = 'draft',
  # Manual test run: ignore the plan-start date and the weekday guard.
  [switch]$Force,
  # Optional extra instructions appended to the prompt (for example a resume
  # note after an interrupted run).
  [string]$Extra = ''
)

$ErrorActionPreference = 'Stop'
$Repo = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
Set-Location $Repo

$Stamp = Get-Date -Format 'yyyy-MM-dd'
$RunLogDir = Join-Path $Repo 'editorial\logs\runs'
New-Item -ItemType Directory -Force $RunLogDir | Out-Null
$RunLog = Join-Path $RunLogDir "$Stamp-$Mode.txt"

# The plan starts Sept 14, 2026. Nothing runs before that.
$PlanStart = Get-Date '2026-09-14'
if (-not $Force -and (Get-Date).Date -lt $PlanStart) {
  "$(Get-Date -Format s) before plan start, nothing to do" | Out-File $RunLog -Encoding utf8
  exit 0
}

# Wave two has rows Monday to Friday, two on the busiest days, so the draft
# task fires twice each weekday and each run takes one row. No weekend rows.
if ($Mode -eq 'draft' -and -not $Force) {
  $Dow = (Get-Date).DayOfWeek
  if ($Dow -in 'Saturday', 'Sunday') {
    "$(Get-Date -Format s) no draft on $Dow" | Out-File $RunLog -Encoding utf8
    exit 0
  }
}

# The shared runner uses: Opus 5.5, then Fable, GPT-6 Astra and GPT-5.6 Sol as fallbacks.
$Model = 'claude-opus-5-5'

if ($Mode -eq 'draft') {
  $Prompt = @'
Draft today's article.

Read editorial/CLAUDE.md (its "Wave two" section included), editorial/SPEC.md,
editorial/RUNBOOK.md and hubstudio-positioning.md first and follow them
exactly. Take ONE row from editorial/schedule.csv: the earliest row whose
status is not_started and whose publish_date is today or earlier. If none
qualifies, record that nothing is due and end. Its brief is the brief_file of
that row, rendered from editorial/scripts/wave2/<id>-<slug>.mjs for wave two.
Run steps 0 to 3 of the pipeline: the research gate R1 to R7 writing
editorial/research/<slug>.md before any body copy, then /createarticle, then
/content-quality-us on the finished draft, then /generate-image-openai for the
hero image, saved to public/Images/howto-<slug>.webp for template howto and
public/Images/insight-<slug>.webp otherwise. A how-to that shows the app uses
only facts from hubstudio-positioning.md and src/content/help, and names
existing localized captures in its ASSET BRIEF. Update editorial/schedule.csv
and write the run log from editorial/logs/TEMPLATE.md. Stop at image_ready. Do
not publish. Do not commit.

Three rules that override everything: no competitor is ever named, described,
compared to or alluded to; no hubStudio rate is ever published; no China
platform spec number ships unless it came from a seller backend, the live app
or an official rule page. If a spec cannot be verified, publish the range and
the conflict, or set the row to blocked. Never fill a slot with an unverified
spec table.

This run is unattended: never ask a question, decide from the specs and note
the decision in the run log.

No TODO leaves this run (editorial/CLAUDE.md, "No TODO leaves a run"). Close
every item you meet inside the run: research a missing or unverified fact to
the source standard or cut the claim; fix in this run any live article the new
piece contradicts, setting its dateModifiedISO; amend at the source a brief the
research proved wrong, and every later brief repeating the error; apply the
settled fallbacks listed there instead of raising them; put a future recheck in
editorial/watch.csv. Never leave a TODO, FIXME or TBD marker in the draft,
including its appended blocks, and run editorial/scripts/check-draft.mjs, which
fails on one. The run log and your final message carry no open items, TODO,
"for a person" or "decisions for you" list. If only Cyril can decide
something, set the row to blocked with the question in its notes and stop.
'@
} else {
  $Prompt = @'
Publish every finished draft.

Read editorial/CLAUDE.md, editorial/SPEC.md and editorial/RUNBOOK.md first.
In editorial/schedule.csv, find every row whose status is image_ready,
whatever its publish_date: publish_date is the drafting calendar, not a
release date, so a finished draft never waits for it. Skip only a row whose
notes say a person must decide something before it ships, and name it in the
run log. For each remaining row, in publish_date order, run the
publish step: /createblogarticle on the output file. That creates
src/pages/resources/insights/<slug>.astro, adds the entry to
src/data/insights.ts, converts the plain-text internal references into links,
wires the hero image and updates every listing surface. Skip that skill's own
locale steps (its post copy per locale and its Step 5): this site translates
from dictionaries, in the step below. File each article under an insights.ts category that at least one
placement in src/data/insight-placements.ts already claims, choosing the one
whose page a buyer of that topic would read. Never invent a category no layer
claims: the schedule's cluster (Research, Playbook, Data) is not a category.

Wave two rows (editorial/CLAUDE.md, "Wave two") publish by their template.
template howto (how-to and engine guides): node editorial/scripts/publish-draft.mjs
on the output file, which writes src/pages/resources/how-to/<slug>.astro and the
entry at the top of src/data/howtos.ts; its French slug goes in the HOWTOS map
of src/i18n/routes.ts. template spec: publish as an insight under the category
Platform specs (the specs hub at /resources/specs lists it by itself).
Comparisons file under Buying models, industry pages under Production. Embed
the localized app captures a how-to's ASSET BRIEF names; a showcase clip that
does not exist yet follows settled fallback 12.

Then publish it in French and Chinese too (step 4b in editorial/CLAUDE.md),
following src/i18n/TRANSLATING.md exactly: give the article its French slug in
the ARTICLES map of src/i18n/routes.ts (native French, accents stripped, never
changed once live); run npm run i18n:local -- extract --context .i18n-work/ctx
(it starts and stops its own dev server; allow ten minutes; if it says the
running server predates the last .env change, rerun with --restart); list the
work with npm run i18n:tx -- pending fr and pending zh (the article and every
page that lists it); translate every pending entry with the three passes of
/deep-translate, French and Chinese as two parallel subagents, each writing
pass1, pass2, pass3 and changes.md and running npm run i18n:tx -- build until
it prints a check mark; read the glossaries in src/i18n/glossary first. Take
localized captures if the article shows the app. Copy each changes.md into the
run log. The step is done only when npm run i18n:local -- check and npm run
i18n:guard both pass.

Then run npm run build and npm run check. When both pass: set the row to
published with published_on, then git add everything the article touched (the
article page, src/data/insights.ts, the hero image, listing surfaces,
src/i18n/routes.ts, src/i18n/dict, any localized capture and
src/i18n/localized-images.json, editorial/output, editorial/research,
editorial/logs, editorial/schedule.csv, editorial/sources) and commit on main with a conventional commit message
(feat(insights): publish <slug>), then git push origin main. Only after the
push succeeds, run node editorial/scripts/notify-publish.mjs with the slug,
title, build result, log path and the commit hash in --note.

Then work through editorial/watch.csv: for every row whose due_date is today
or earlier, recheck the fact against its source. If it moved, correct the live
page and its draft in editorial/output, set dateModifiedISO on the article's
entry in src/data/insights.ts, translate the changed sentences in French and
Chinese the same way (extract, three passes, i18n check), and put the change
through the same build,
check, commit (fix(insights): update <slug>) and push. Then remove the row, or
replace it with a new dated row if the matter is still pending.

This run is unattended: never ask a question. If the translation step, the
i18n check, the build or the check fails, do not commit, do not push, leave the
row at image_ready, put the error in the run log, and send the email with
--build failed and the error in --note. Never publish an article in English
only, never paste English into a dictionary, never leave an entry empty.

No TODO leaves this run (editorial/CLAUDE.md, "No TODO leaves a run"). The
build fails on any TODO, FIXME or TBD marker in published content; close the
item and build again, never strip the marker without closing it. Never publish
a row with an open item attached: if only Cyril can decide it, set the row to
blocked with the question in its notes and publish the others. notify-publish
has no --todo option and refuses a note carrying a marker. The run log and
your final message carry no open items, TODO, "for a person" or "decisions for
you" list; when nothing is eligible, say so and end.
'@
}

if ($Extra) {
  $Prompt += "`n`nADDITIONAL INSTRUCTIONS FROM THE OPERATOR: $Extra"
}

if ($Force) {
  $Prompt += "`n`nMANUAL TEST RUN: process every row whose status is image_ready (publish mode) or take the oldest not_started row that is not blocked (draft mode). Say in the run log that this was a forced test run."
  $RunLog = Join-Path $RunLogDir "$Stamp-$Mode-forced.txt"
}

"$(Get-Date -Format s) start $Mode (model $Model)" | Out-File $RunLog -Encoding utf8

# The prompt goes in through stdin from a file, and both output streams go
# straight to the log through cmd.exe. PowerShell 5.1 turns native stderr into
# terminating errors under Stop, which kills a run before it can log.
$PromptFile = Join-Path $RunLogDir "$Stamp-$Mode.prompt.txt"
[System.IO.File]::WriteAllText($PromptFile, $Prompt, (New-Object System.Text.UTF8Encoding($false)))
$AgentRunner = 'C:\Users\cyril\Project\automation\scripts\Invoke-ProjectAgent.ps1'
$Code = & $AgentRunner -Repo $Repo -PromptFile $PromptFile -RunLog $RunLog -RunName "hubStudio $Mode"

"$(Get-Date -Format s) end $Mode exit $Code" | Out-File $RunLog -Append -Encoding utf8
exit $Code
