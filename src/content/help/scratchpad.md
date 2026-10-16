---
title: "Scratchpad"
seoTitle: "The Scratchpad: your notes, files and recordings on every page | hubStudio Help"
description: "The Scratchpad drawer on every page: sheets of notes with bold, lists, checklists and links, dictation, files attached, sounds recorded from the microphone or a tab, inserting a note into a post, keeping a file in the Assets Library, what it costs and who can see it."
excerpt: "A drawer of personal notes on every page of hubStudio: write, dictate, attach a file or record a call, then drop the note straight into a post."
section: "getting-started"
order: 1.7
updated: 2026-10-16
appPaths: []
audience: "Everyone but client logins; nobody else ever sees your sheets"
related: ["getting-started", "assets-library", "account-and-sign-in", "balance-and-payments", "your-team"]
shots:
  - file: "/Images/help/scratchpad-drawer.webp"
    route: "/explore"
    alt: "The Scratchpad open over the Explore page: the sheet tabs, the sheet Lumera launch with its title, the formatting bar, a heading, bold text and a checklist, then a picture and a recording under Files and recordings, and Attach and Record at the foot"
    captured: 2026-10-16
  - file: "/Images/help/scratchpad-sheets.webp"
    route: "/explore"
    clip: "the Scratchpad drawer"
    alt: "All sheets in the Scratchpad: the Search your sheets box, then each sheet with the start of its text, its date and how many files it holds"
    captured: 2026-10-16
  - file: "/Images/help/scratchpad-record.webp"
    route: "/explore"
    clip: "the Scratchpad drawer"
    alt: "The menu beside Record: Microphone, Sound of a tab, and Microphone and a tab, each with what it records"
    captured: 2026-10-16
sources: ["src/layouts/Layout.astro", "src/scripts/scratchpad.ts", "src/scripts/richNote.ts", "src/styles/scratchpad.css", "src/lib/scratchpad.ts", "src/lib/own-work.ts", "src/scripts/filesPanel.ts", "src/pages/api/scratchpad/index.ts", "src/pages/api/scratchpad/[id].ts", "src/pages/api/scratchpad/[id]/files.ts", "src/pages/api/scratchpad/files/[id].ts", "src/lib/storage-billing.ts", "src/lib/features.ts", "src/lib/app.ts", "src/scripts/dictation.ts"]
---

The **Scratchpad** is a drawer of personal notes that opens on every page of hubStudio, over whatever you are doing. Jot down a prompt idea, a client's feedback during a call or the captions you want to try, attach a picture, record a sound, then come back to it from any page.

Your sheets are yours alone. Nobody else sees them, not your teammates and not your team's admins. There is no sharing.

## Open the Scratchpad

Click the **Scratchpad** button in the bar at the top of the page (the page icon, between the house and **Support**), or press **Alt+N** anywhere. The same shortcut closes it, and so do **Escape** and the cross at the top of the drawer.

![The Scratchpad open over the Explore page: the sheet tabs, the sheet Lumera launch with its title, the formatting bar, a heading, bold text and a checklist, then a picture and a recording under Files and recordings, and Attach and Record at the foot](/Images/help/scratchpad-drawer.webp)

The drawer slides in from the right and stays open as you move from page to page, on the sheet you left in front.

- **Keep it beside the page**, at the top of the drawer, docks it: the page makes room for it instead of passing under it. Click it again (**Let it slide over the page**) to let it float over the page. Docking works on screens at least 1024 pixels wide.
- Drag the left edge of the drawer to make it wider or narrower.

## Sheets

A note lives in a **sheet**. Your sheets are tabs along the top of the drawer.

- **New sheet** (the **+** button at the end of the tabs) starts one. On a first visit, simply start typing: the sheet is created as you write.
- Type a title above the text. A sheet with no title takes its first line as its name.
- Drag a tab to put your sheets in the order you like.
- **All sheets**, the list button at the top of the drawer, shows every sheet with the start of its text, its date and how many files it holds. **Search your sheets** narrows the list as you type; click a sheet to open it.
- **Delete this sheet**, the bin next to the title, removes the sheet with its text, its files and its recordings. This cannot be undone.

![All sheets in the Scratchpad: the Search your sheets box, then each sheet with the start of its text, its date and how many files it holds](/Images/help/scratchpad-sheets.webp)

You can keep up to 100 sheets, each holding up to 200,000 characters.

### Writing and formatting

Click in the sheet and write. It saves itself about a second after you stop typing, again when you click out of it, and again when you leave the page. The foot of the drawer says **Saving…**, then **Saved**. If a save fails, it says why and tries again on its own.

The bar above the text formats what you select:

| Button | What it does |
|---|---|
| **Bold** (Ctrl+B), **Italic** (Ctrl+I), **Underline** (Ctrl+U), **Strikethrough** | Styles the selected words. |
| **Heading** | Turns the line into a heading. |
| **Bulleted list**, **Numbered list** | Starts a list. |
| **Checklist** | A list with a box before each line. Click a box to tick it. |
| **Link** (Ctrl+K) | Paste or type the address, then click **Add link**. On a link, **Remove** takes it off. |
| **Clear formatting** | Back to plain text. |

If voice input is on in your settings, the sheet has a microphone in its corner like every other text box: click it and speak, and your words are written into the sheet. Dictation is billed by the second, as everywhere else. See [Account and sign-in](/help/account-and-sign-in#voice-input).

### Put a note to work

The two buttons at the bottom right of the drawer use what you wrote:

- **Copy the text of the sheet** copies it, ready to paste anywhere.
- **Insert into the field you were writing in** puts the text where your cursor was on the page: a prompt box, a post, a brief, a campaign. It wakes up once you have clicked in a field of the page. Select part of the sheet first to insert only that part.

## Files

Click **Attach** at the foot of the drawer to add files to the sheet in front, or drop them on the drawer, or paste them. A bar fills while each file uploads. The largest file you can attach is the same as in the Assets Library, and the message says so if a file is too large.

Files and recordings are listed under the text, under **Files and recordings**. A picture shows a small preview: click it to see it full size. On each file:

- **Download** saves it on your computer.
- **Keep a copy in the Assets Library** puts a copy of the file in your team's Assets Library, where you can use it in posts, campaigns and the editors. The copy stays yours alone (**Only me**) until you share it from the library: in its **Actions** menu, **Who sees it**, then **Everyone in the team**. The Scratchpad keeps its own copy. You need the right to add files to the library.
- **Delete** removes it from the sheet.
- Double-click a file's name to rename it.

## Recordings

Click **Record** to record a sound into the sheet. The arrow next to it picks what to record:

![The menu beside Record: Microphone, Sound of a tab, and Microphone and a tab, each with what it records](/Images/help/scratchpad-record.webp)

- **Microphone**: your voice, or any sound in the room.
- **Sound of a tab**: a call, a video or a webinar playing in another tab. Your browser asks which tab to share: pick it and tick **Share tab audio**.
- **Microphone and a tab**: both sides of a call, mixed in one recording.

While it records, a bar shows the time and the sound level, with **Pause**, **Stop and keep** and **Throw away**. Once kept, the recording is listed with the files, with its length and a player. Your browser asks once for the microphone the first time you record.

If the recording cannot be stored, the drawer saves it to your computer instead and says so, so nothing is lost.

## What it costs

Writing in the Scratchpad is free. Its files and recordings are stored like the files of the Assets Library: they count toward your team's storage, with the same small daily rent and the same transfer charge on a download, charged against the team balance. Seeing a picture or playing a recording in the drawer is not charged. When the balance is empty, new files can't be attached until you top up. See [Assets Library and the tools](/help/assets-library#what-files-cost).

## Who can use it

Everyone in the team has a Scratchpad of their own, Viewers included: a Viewer writes in their own sheets like everybody else. A client login has none.

An Admin can switch the Scratchpad off for one person, or make it read only, with the **Scratchpad** row of that person's rights. See [Your team](/help/your-team).
