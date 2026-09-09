<#
.SYNOPSIS
  Registers (or re-registers) the two Windows scheduled tasks that run the
  hubStudio editorial pipeline on this machine.

  hubStudio Editorial Draft    Mon, Tue, Thu, Fri at 00:30 local (Shanghai, night)
  hubStudio Editorial Publish  every day at 04:00 local, DISABLED by default

  Publishing starts disabled on purpose. The first week gets reviewed by hand:
  a spec page that shipped an unverified number is the one failure this system
  cannot walk back. Enable it once the first four articles look right.

  Run from any PowerShell prompt:
    powershell -ExecutionPolicy Bypass -File editorial\scripts\register-tasks.ps1

  To turn unattended publishing on:
    Enable-ScheduledTask -TaskName 'hubStudio Editorial Publish'

  To pause it again:
    Disable-ScheduledTask -TaskName 'hubStudio Editorial Publish'

  Change the hour by editing $DraftTime / $PublishTime and rerunning.
#>
param(
  [string]$DraftTime = '00:30',
  [string]$PublishTime = '04:00',
  # Pass -EnablePublish once the first week has been reviewed by hand.
  [switch]$EnablePublish
)

$ErrorActionPreference = 'Stop'
$Runner = Join-Path $PSScriptRoot 'run-daily.ps1'
$Pwsh = "$env:SystemRoot\System32\WindowsPowerShell\v1.0\powershell.exe"

function Register([string]$Name, [string]$Mode, $Trigger, [bool]$Enabled) {
  $Action = New-ScheduledTaskAction -Execute $Pwsh `
    -Argument "-NoProfile -ExecutionPolicy Bypass -File `"$Runner`" -Mode $Mode"
  $Settings = New-ScheduledTaskSettingsSet `
    -ExecutionTimeLimit (New-TimeSpan -Hours 6) `
    -StartWhenAvailable `
    -WakeToRun `
    -MultipleInstances IgnoreNew
  Register-ScheduledTask -TaskName $Name -Action $Action -Trigger $Trigger `
    -Settings $Settings -Description "hubStudio editorial pipeline ($Mode)" -Force | Out-Null
  if (-not $Enabled) { Disable-ScheduledTask -TaskName $Name | Out-Null }
  Write-Host "$Name registered ($(if ($Enabled) {'enabled'} else {'disabled'}))"
}

$DraftTrigger = New-ScheduledTaskTrigger -Weekly -DaysOfWeek Monday, Tuesday, Thursday, Friday -At $DraftTime
Register 'hubStudio Editorial Draft' 'draft' $DraftTrigger $true

$PublishTrigger = New-ScheduledTaskTrigger -Daily -At $PublishTime
Register 'hubStudio Editorial Publish' 'publish' $PublishTrigger ([bool]$EnablePublish)

Get-ScheduledTask -TaskName 'hubStudio Editorial *' | Format-Table TaskName, State -AutoSize
