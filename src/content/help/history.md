---
title: "History"
seoTitle: "Find, download and reuse your images and videos | hubStudio Help"
description: "Everything you and your team made, newest first: find a piece, open it full size, download it, reuse its prompt, say which client it was made for, delete it, and what storing files costs."
excerpt: "Every image and video rendered in the studios, with its prompt, engine and cost, ready to download or to reuse."
section: "library"
order: 5
updated: 2026-09-27
appPaths: ["/history"]
audience: "Everyone"
related: ["create-an-image", "create-a-video", "your-team", "client-space", "validation", "credits-and-payments"]
shots:
  - file: "/Images/help/history-page.webp"
    route: "/history"
    alt: "The History page with the All, Images and Videos filters, the Team and Mine switch and the prompt search, on a team that has not made anything yet"
    captured: 2026-09-27
sources: ["src/pages/history.astro", "src/scripts/historyPanel.ts", "src/pages/api/files/index.ts", "src/pages/api/files/[id].ts", "src/lib/storage-billing.ts", "src/scripts/usagePanel.ts", "src/scripts/clientPick.ts", "src/lib/team-clients.ts", "src/lib/stored-files.ts"]
---

**History** holds every image and video rendered in the studios, newest first, grouped by day. Each piece carries its prompt, the engine that made it and what it cost. What your teammates make is here too.

A render is saved in History the moment it is done, whichever browser made it. Files you upload in the video studio as frames or references, or in a network module for a post, are kept here as well.

## Find a piece

The controls sit in the dark band at the top of the page:

- **All**, **Images**, **Videos**: every piece, or one kind only.
- **Team**, **Mine**: everything your team made, or your own work only.
- **Search the prompts**: every word you type must appear in the prompt, the file name or the engine's name.

Each card shows the picture or the clip, the start of its prompt, the engine, the cost and the time it was made. A piece made by a teammate also shows their name, and a piece made for a client shows **For** and the client's name. The page shows 60 pieces at a time: click **Show more** at the bottom for the next ones.

When nothing matches, the page says **Nothing matches. Clear the search or pick another filter.**

![The History page with the All, Images and Videos filters, the Team and Mine switch and the prompt search, on a team that has not made anything yet](/Images/help/history-page.webp)

## Open a piece

Click the picture or the clip to see it full size. A link to a piece of History, such as the picture links a post carries when it is sent for validation, opens that piece full size as the page loads.

## Download

**Download** saves the original file to your computer.

Downloads are billed like any download of a stored file: a small transfer charge, taken from your credits and listed in **Credits** > **Usage** as **File download (transfer)**.

## Use this prompt

**Use this prompt** opens the studio the piece came from, set on the same engine, with the prompt already in the box. Change what you like and run a variation. Nothing runs until you click the button in the studio.

A piece with no prompt (a file you uploaded, for example) has no **Use this prompt** button.

## Made for a client

When your team works for clients (see [Your team](/help/your-team#clients)), creators and admins see a **Made for** list at the foot of each card. Pick a client and the piece is saved for them at once: the card flashes, and that client's people find the piece in their [Client space](/help/client-space), where they can open and download it. Pick **No client** to take it back; the team keeps it either way.

The list appears once your team has at least one client. A viewer sees the **For** line but can't change it.

## Delete

**Delete** removes the file for good, after you confirm **Delete this file for good? It cannot be brought back.** The card folds away and the list is read again.

You can delete the pieces you made yourself. Deleting a file also stops its storage charge.

## What storing files costs

Files are kept until someone deletes them. Storing them has a small rent, paid from your team's credits: hubStudio charges it once a day for the space the team's files take up. It shows in **Credits** > **Usage** as **File storage (daily)**.

The rent follows the size of what you keep, so large clips cost more to store than small pictures. Delete what you no longer need and the rent goes down from the next day. When there are no credits left, new files can't be uploaded until you buy more; the files you already have stay where they are.
