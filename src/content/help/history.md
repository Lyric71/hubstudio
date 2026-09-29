---
title: "History"
seoTitle: "Find, download and reuse your images and videos | hubStudio Help"
description: "Everything you and your team made, newest first: find a piece, open it full size, download it, edit a picture, reuse its prompt, say which client it was made for, delete it, and what storing files costs."
excerpt: "Every image and video rendered in the studios, with its prompt, engine and cost, ready to download or to reuse."
section: "library"
order: 5
updated: 2026-09-29
appPaths: ["/history"]
audience: "Everyone"
related: ["assets-library", "create-an-image", "create-a-video", "your-team", "client-space", "validation", "balance-and-payments"]
shots:
  - file: "/Images/help/history-page.webp"
    route: "/history"
    alt: "The History page with the All, Images and Videos filters, the Team and Mine switch and the prompt search, on a team that has not made anything yet"
    captured: 2026-09-27
sources: ["src/pages/history.astro", "src/scripts/historyPanel.ts", "src/pages/api/files/index.ts", "src/pages/api/files/[id].ts", "src/lib/storage-billing.ts", "src/scripts/usagePanel.ts", "src/scripts/clientPick.ts", "src/lib/team-clients.ts", "src/lib/stored-files.ts", "src/scripts/imageEditorLauncher.ts", "src/scripts/lightbox.ts"]
---

**History** holds every image and video rendered in the studios, newest first, grouped by day. Each piece carries its prompt, the engine that made it and what it cost. What your teammates make is here too.

A render is saved in History the moment it is done, whichever browser made it.

History shows what the studios render. The same renders are also in the [Assets Library](/help/assets-library), next to everything else your team keeps: the files you upload (frames and references in the video studio, pictures for a post) and the pictures you edit. The library sorts them in folders; History lists the renders with their prompt, engine and cost.

## Find a piece

The controls sit in the dark band at the top of the page:

- **All**, **Images**, **Videos**: every piece, or one kind only.
- **Team**, **Mine**: everything your team made, or your own work only.
- **Search the prompts**: every word you type must appear in the prompt, the file name or the engine's name.

Each card shows the picture or the clip, the start of its prompt, the engine, the cost and the time it was made. A piece made by a teammate also shows their name, and a piece made for a client shows **For** and the client's name. The page shows 60 pieces at a time: click **Show more** at the bottom for the next ones.

When nothing matches, the page says **Nothing matches. Clear the search or pick another filter.**

![The History page with the All, Images and Videos filters, the Team and Mine switch and the prompt search, on a team that has not made anything yet](/Images/help/history-page.webp)

## Open a piece

Click the picture or the clip to see it full size. On a picture, the viewer also has **Edit**. A link to a piece of History, such as the picture links a post carries when it is sent for validation, opens that piece full size as the page loads.

## Download

**Download** saves the original file to your computer.

Downloads are billed like any download of a stored file: a small transfer charge against your balance, listed in **Usage** (under **Credits** in the menu) as **File download (transfer)**.

## Edit a picture

**Edit** on a picture's card, or in the full-size viewer, opens it in the Image editor: crop it to the format of a network, adjust its light and colors, apply a look, write a caption, draw an arrow or a box, place a logo. Editing is free and happens in your browser.

When you save, the edited copy goes into the [Assets Library](/help/assets-library), next to the render, which stays as it was. Because it is an edit and not a render, the copy shows in the library, not in History. You can also download it without keeping it. Creators and admins see **Edit**; a clip has none. See [The Image editor](/help/assets-library#the-image-editor) for every panel.

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

Files are kept until someone deletes them. Storing them has a small rent, charged against the team balance: hubStudio charges it once a day for the space the team's files take up. It shows in **Usage** as **File storage (daily)**.

The rent follows the size of what you keep, so large clips cost more to store than small pictures. Delete what you no longer need and the rent goes down from the next day. When the balance is empty, new files can't be uploaded until you top up; the files you already have stay where they are.
