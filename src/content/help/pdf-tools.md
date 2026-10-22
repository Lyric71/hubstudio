---
title: "PDF tools"
seoTitle: "PDF tools: edit, merge, split and compress | hubStudio Help"
description: "Edit, merge, split, organize, rotate, extract, crop and compress PDFs in your browser for free, then download the result or save it in the Assets Library."
excerpt: "Eight free PDF tools that run in your browser: edit, merge, split, organize, rotate, extract, crop or compress, then download the result or save it."
section: "library"
order: 6.5
updated: 2026-10-17
appPaths: ["/files/tools"]
audience: "Everyone except client logins"
related: ["assets-library", "history", "campaigns", "validation", "your-team", "balance-and-payments"]
shots: []
sources: ["src/lib/app.ts", "src/layouts/Layout.astro", "src/lib/asset-tools.ts", "src/components/AssetToolsNav.astro", "src/pages/files/tools/index.astro", "src/scripts/pdfTools.ts", "src/scripts/pdfEditor.ts", "src/scripts/pdfCompress.ts", "src/scripts/pdfRender.ts", "src/lib/pdf-tools.ts", "src/scripts/libraryImagePicker.ts", "src/scripts/libraryUpload.ts", "src/pages/api/files/index.ts", "src/pages/api/files/[id].ts", "src/lib/features.ts", "src/lib/feature-paths.ts", "src/scripts/filesPanel.ts"]
---

The **PDF** module holds eight tools that work on a PDF you already have: **Edit PDF**, **Merge PDF**, **Split PDF**, **Organize PDF**, **Rotate PDF**, **Extract PDF**, **Crop PDF** and **Compress PDF**. They're for anyone in the team who needs to sign a brief, put a deck together, send a lighter file or keep only the pages that matter.

The document is read and changed inside your browser. It's never sent anywhere to be processed, and the tools are free.

## Open the tools

**PDF** sits in the menu under the **Library** pillar, after **Validation**. It opens on **Edit PDF**, and its eight entries each open one tool.

The dark band at the top of the page is named **PDF** and carries the **Runs in your browser · Free** tag. At its foot, the eight tools sit in a row of tabs. Each tab shows only its icon, except the one on view, which shows its name too; point at a tab to see its name. The eight tools share one page, so moving from one tab or menu entry to another keeps the document you have open, and the menu follows the tool on view.

A client login doesn't see the PDF tools. Everyone else in the team can use them and download what they make. Saving a result into the [Assets Library](/help/assets-library) takes the right to create in **Assets**, which a **Creator** and an **Admin** have and a **Viewer** doesn't. See [Your team](/help/your-team).

## How every tool works

Before a document is open, the page lists the three steps every tool follows: **Open a PDF**, **Set what to do** and **Keep the result**.

### Open a PDF

1. In the **Your PDF** card, drop a PDF on **Drop a PDF here, or click to choose one**, or click the box to choose one from your computer.
2. Or click **From the Assets Library**, pick one of your team's PDFs in **Pick a PDF from the Assets Library**, and click **Use this file**.
3. The card now shows the document's name, its number of pages and its size. **Open another** and **From the Assets Library** swap it for another document.

The tool then shows the pages with its own settings, and the button that runs it, both above the pages and under them.

A PDF protected by a password can't be opened. The page says "This PDF is protected by a password. Remove the protection in the program that made it, then open it again." A damaged file gets "This file could not be read as a PDF. It may be damaged or not a PDF at all."

> **Note:** Opening a PDF from the Assets Library counts as a download, with the small transfer charge described in [History](/help/history#what-storing-files-costs). A PDF from your computer costs nothing.

### Keep the result

Each run ends on a card, **Your PDF is ready**, with a line of facts about what was done: pages turned, pages kept, the size before and after.

| Choice | What it does |
|---|---|
| **File name** | The name the file gets: the original's name with what was done in parentheses, such as "Proposal (rotated).pdf". Change it before you download or save. |
| **Download** | Saves the PDF to your computer. Nothing goes into the library. |
| **Save to the Assets Library** | Adds the PDF to the library as a new file: **Next to the original** when the document came from the library, **At the top of the library** otherwise. When it's done, the card says **Saved.** with a link, **Open the Assets Library**, which opens in a new tab. |
| **Keep working on it** | Opens the result as the document of the tools, so you can go on with another tool without downloading in between. |

A saved result is a file like any upload: it follows the library's size limit for a file, it counts toward the team's storage, and it can't be saved while the balance is empty. See [What files cost](/help/assets-library#what-files-cost).

When a run makes several files (**Split PDF**, or **Extract PDF** with one file per page), the card reads **Your 4 files are ready** (the number follows the run) and lists each file with its own **Download** button, then offers **Download all as a ZIP** and **Save all to the Assets Library**. Several files can't be carried into another tool.

Change a setting after a run and the result card goes away: run the tool again to get the new file.

## Edit PDF

**Edit PDF** writes on the pages: text anywhere, a line drawn by hand, a white box over what shouldn't be seen, a highlight, or a picture such as a logo or a scanned signature.

Pick a tool in the bar above the page, then work on the page itself. The strip on the left moves from page to page, and the arrows above the page do the same.

| Tool | How to use it |
|---|---|
| **Text** | Click where the text goes, then type. Set the **Size** (6 to 96 points), the font (**Sans serif**, **Serif** or **Monospace**), bold with **B**, and the **Colour**. Click an existing text to move or change it. |
| **Draw** | Hold the mouse button down and draw: a signature, a tick, an arrow. **Line** sets the width. |
| **Whiteout** | Drag a box over what should disappear: it's covered in white. |
| **Highlight** | Drag over a passage to highlight it in yellow. |
| **Picture** | Choose a PNG, JPG, WebP or GIF. It lands in the middle of the page; drag it into place and drag its corner to resize it. It keeps its proportions. |
| **Select** | Click a mark to select it, drag it to move it, drag its corner to resize it. |

A click with **Whiteout** or **Highlight** instead of a drag places a box of a standard size. **Delete** (or the Delete key) removes the selected mark, Escape lets go of it, and **Undo** removes the last mark you made. The button under the page counts your marks, **Save 3 changes** for example, and writes them into a new file. If you leave the page with marks not yet saved, your browser asks first.

> **Important:** Whiteout covers, it doesn't erase. The text under the white box stays in the file, where it can still be selected, copied or found by a search. Don't use it to remove confidential information.

Text in the Latin alphabet is written as real text, so it can be selected and searched. Characters the standard PDF fonts don't have, such as Chinese or emoji, are written as a picture of the text instead: they look the same but can't be selected.

## Merge PDF

**Merge PDF** puts several PDFs, and pictures if you like, into one document.

1. In **The files to merge**, drop several files at once on **Drop files here, or click to choose**: PDFs and pictures (JPG, PNG, WebP). Or click **From the Assets Library**, pick the files and click **Use these files**.
2. Set the order: drag a row, or use its arrows. The cross removes a file.
3. Click **Merge 3 files** (the number follows your list). You need at least two files; until then the page says "Add at least two files."

Each picture becomes one page, the size of the picture. If a PDF was open when you picked **Merge PDF**, it's already first in the list. A merged file is saved next to the first file taken from the library. After a merge, **Keep working on it** opens the result in **Organize PDF** and makes the tabs of the band flash, in case you want another tool.

## Split PDF

**Split PDF** cuts a document into several files. Pick how:

| Choice | What you get |
|---|---|
| **Every page** | One file per page. |
| **Every few pages** | Files of the same length, set in **Pages per file**. The last one takes what's left. |
| **Where I click** | A new file starts at each pair of scissors you click between two pages. Click again to join them back. |
| **By ranges** | One file per range typed in **One file per range**, such as `1-3, 4-9, 10-`, in the order typed. A page can go into several files. |

Under each page, a label such as **File 2** says which file it goes into, and the button reads **Split into 4 files**. Clicking a pair of scissors in any other mode switches to **Where I click**, starting from the cuts on screen.

## Organize PDF

**Organize PDF** changes the pages themselves: their order, which ones stay, and blank pages.

- Drag a page to move it, or use the arrows on its tile.
- The other buttons on a tile turn the page, duplicate it or delete it.
- **Add a blank page** adds one at the end; drag it where it belongs.
- **Reverse the order** turns the document back to front, and **Reset** puts every page back as it was.

A page that moved shows its original number next to its new one, and the count above the pages says how many were deleted. Click **Save the new order** to get the file. At least one page has to stay ("Keep at least one page.").

## Rotate PDF

**Rotate PDF** turns pages a quarter or a half turn. Bookmarks, links and forms stay as they were.

1. Click the pages to turn, or none to turn them all. **Select all**, **Select none** and **Reset** help.
2. Click **Turn left**, **Turn right** or **Half turn**. Each page also has its own turn buttons.
3. Click the button under the pages, which counts them: **Rotate 3 pages**, for example.

## Extract PDF

**Extract PDF** keeps only the pages you pick, as a new document.

1. Click the pages to keep, or type their numbers in **Pages to extract**, such as `1-3, 5, 8-`. A range that ends with a hyphen runs to the last page. **All**, **Odd**, **Even** and **None** pick in one click.
2. Choose **One PDF** or **One file per page**.
3. Click **Extract 4 pages** (or **Extract 4 files**).

A number past the end of the document is refused with a sentence that names it and the last page number.

## Crop PDF

**Crop PDF** cuts the margins away.

1. Drag the frame over the page, or its handles, to keep what's inside. Or type the **Top margin**, **Right margin**, **Bottom margin** and **Left margin** to cut, in millimeters.
2. Under **Apply to**, choose **Every page** or **This page only**. The arrows above the page move to the page you want.
3. Click **Crop every page** (or **Crop page 3**).

**Reset the frame** starts over. On every page, the frame is applied in proportion to each page's size, so pages of different sizes lose the same share.

> **Note:** Cropping changes what shows on screen and on paper. What sits outside the frame isn't deleted from the file.

## Compress PDF

**Compress PDF** makes a file lighter to send by re-encoding the pictures inside it, which is where the weight of most heavy PDFs sits: scans, photos, screenshots. Text, drawings, links and bookmarks stay exactly as they were, and the text stays sharp and selectable.

| Level | What it does |
|---|---|
| **Gentle** | Pictures stay print-sharp. Only the heaviest ones shrink. |
| **Balanced** | Screen quality, the right choice for email and sharing. The tool opens on it. |
| **Maximum** | As small as it gets while staying readable on screen. |

The **Current size** shows next to the button. While it runs, the bar counts the pictures re-encoded. The result card gives the size before and after, how much lighter the file is, and how many pictures were re-encoded. A new copy replaces a picture only when it's clearly smaller, and a few kinds of pictures, such as those in print colors, are left as they are.

If the file can't get lighter, the card says "This file is already as light as it gets at this level." A file with no pictures, such as a text-only document, gains nothing: the card says "It holds no pictures to re-encode."

## What it costs

The eight tools are free: nothing is billed for running them. Two things around them follow the rules of the Assets Library: opening a PDF from the library has the small transfer charge of a download, and a result you save there pays the daily storage rent of any file. Downloading a result to your computer costs nothing.
