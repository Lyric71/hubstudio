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
             image_ready and whose publish_date is today or earlier, then
             sends the Resend email. Disabled until the first week has been
             reviewed by hand.

  Output of each run is written to editorial/logs/runs/<date>-<mode>.txt.
  Register with editorial/scripts/register-tasks.ps1.

.PARAMETER Mode
  draft (default) or publish.
#>
param(
  [ValidateSet('draft', 'publish')]
  [string]$Mode = 'draft',
  # Manual test run: ignore the plan-start date, the weekday guard and, in
  # publish mode, the publish_date filter.
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

# Slots are Mon, Tue, Thu, Fri. The schedule has no rows on Wednesday or the weekend.
if ($Mode -eq 'draft' -and -not $Force) {
  $Dow = (Get-Date).DayOfWeek
  if ($Dow -in 'Saturday', 'Sunday', 'Wednesday') {
    "$(Get-Date -Format s) no draft on $Dow" | Out-File $RunLog -Encoding utf8
    exit 0
  }
}

# Always pull the best available model. Never a faster or smaller mode.
$Model = 'claude-opus-5'

if ($Mode -eq 'draft') {
  $Prompt = @'
Draft today's article.

Read editorial/CLAUDE.md, editorial/SPEC.md and editorial/RUNBOOK.md first and
follow them exactly. Run steps 0 to 3 of the pipeline: the research gate R1 to
R7 writing editorial/research/<slug>.md before any body copy, then
/createarticle, then /content-quality-us on the finished draft, then
/generate-image-openai for the hero image. Update editorial/schedule.csv and
write the run log from editorial/logs/TEMPLATE.md. Stop at image_ready. Do not
publish. Do not commit.

Three rules that override everything: no competitor is ever named, described,
compared to or alluded to; no hubStudio rate is ever published; no China
platform spec number ships unless it came from a seller backend, the live app
or an official rule page. If a spec cannot be verified, publish the range and
the conflict, or set the row to blocked. Never fill a slot with an unverified
spec table.

This run is unattended: never ask a question, decide from the specs and note
the decision in the run log.
'@
} else {
  $Prompt = @'
Publish every reviewed draft that is due.

Read editorial/CLAUDE.md, editorial/SPEC.md and editorial/RUNBOOK.md first.
In editorial/schedule.csv, find every row whose status is image_ready and
whose publish_date is today or earlier. For each one, in date order, run the
publish step: /createblogarticle on the output file. That creates
src/pages/resources/insights/<slug>.astro, adds the entry to
src/data/insights.ts, converts the plain-text internal references into links,
wires the hero image and updates every listing surface. Insights are English
only on this repo, so there is no locale propagation and no /deep-translate
pass.

Then run npm run build and npm run check. When both pass: set the row to
published with published_on, then git add everything the article touched (the
article page, src/data/insights.ts, the hero image, listing surfaces,
editorial/output, editorial/research, editorial/logs, editorial/schedule.csv,
editorial/sources) and commit on main with a conventional commit message
(feat(insights): publish <slug>), then git push origin main. Only after the
push succeeds, run node editorial/scripts/notify-publish.mjs with the slug,
title, build result, log path and the commit hash in --note.

This run is unattended: never ask a question. If the build or the check fails,
do not commit, do not push, leave the row at image_ready, put the error in the
run log, and send the email with --build failed and the error in --note.
'@
}

if ($Extra) {
  $Prompt += "`n`nADDITIONAL INSTRUCTIONS FROM THE OPERATOR: $Extra"
}

if ($Force) {
  $Prompt += "`n`nMANUAL TEST RUN: ignore the publish_date. Process every row whose status is image_ready (publish mode) or take the oldest not_started row that is not blocked (draft mode). Say in the run log that this was a forced test run."
  $RunLog = Join-Path $RunLogDir "$Stamp-$Mode-forced.txt"
}

"$(Get-Date -Format s) start $Mode (model $Model)" | Out-File $RunLog -Encoding utf8

# The prompt goes in through stdin from a file, and both output streams go
# straight to the log through cmd.exe. PowerShell 5.1 turns native stderr into
# terminating errors under Stop, which kills a run before it can log.
$PromptFile = Join-Path $RunLogDir "$Stamp-$Mode.prompt.txt"
[System.IO.File]::WriteAllText($PromptFile, $Prompt, (New-Object System.Text.UTF8Encoding($false)))
$Claude = (Get-Command claude).Source
$Cmd = "type `"$PromptFile`" | `"$Claude`" -p --model $Model --dangerously-skip-permissions --output-format text >> `"$RunLog`" 2>&1"

# Retry on transient API failures (overloaded, rate limited, 5xx). Up to three
# attempts, five minutes apart. Never fall back to a smaller model.
$MaxAttempts = 3
$Attempt = 0
do {
  $Attempt++
  if ($Attempt -gt 1) {
    "$(Get-Date -Format s) retry $Attempt of $MaxAttempts after a transient API error, waiting 5 minutes" | Out-File $RunLog -Append -Encoding utf8
    Start-Sleep -Seconds 300
  }
  $ErrorActionPreference = 'Continue'
  & cmd.exe /d /c $Cmd
  $Code = $LASTEXITCODE
  $ErrorActionPreference = 'Stop'
  $Tail = (Get-Content $RunLog -Tail 5 -ErrorAction SilentlyContinue) -join "`n"
  $Transient = $Code -ne 0 -and $Tail -match 'API Error: (529|500|502|503|504|429)|Overloaded|overloaded_error|rate limit'
} while ($Transient -and $Attempt -lt $MaxAttempts)

"$(Get-Date -Format s) end $Mode exit $Code" | Out-File $RunLog -Append -Encoding utf8
exit $Code
