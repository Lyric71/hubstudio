---
title: "Assets Library and its Tools"
seoTitle: "Assets Library, Image editor and Image anonymizer | hubStudio Help"
description: "Every file of your team in one place, in folders: uploads, renders and edited pictures. Find, tag, move and download them, then work on a picture with the Tools: the Image editor (crop to each network's format, adjust, apply a look, write, draw, place a logo) and the Image anonymizer."
excerpt: "Your team's files in folders, and two picture Tools that run in your browser for free: the Image editor and the Image anonymizer."
section: "library"
order: 6
updated: 2026-09-29
appPaths: ["/files", "/files/tools/image-editor", "/files/tools/image-anonymizer"]
audience: "Everyone except client logins"
related: ["history", "create-an-image", "linkedin", "instagram", "facebook", "x", "balance-and-payments"]
shots:
  - file: "/Images/help/assets-library-page.webp"
    route: "/files"
    alt: "The Assets Library: the dark band with New folder, Upload files and one tile per type, the search and its filters, then a folder and four pictures in the list"
    captured: 2026-09-28
  - file: "/Images/help/assets-library-actions.webp"
    route: "/files"
    clip: "the list with a picture's Actions menu open"
    alt: "The Actions menu of a picture in the Assets Library: View, Download, Edit image, Upload a new version, Tags, Rename, Move and Delete"
    captured: 2026-09-28
  - file: "/Images/help/assets-library-tools.webp"
    route: "/files/tools/image-editor"
    alt: "Tools, open on the Image editor: the Tool switch in the dark band, the box to drop a picture, From the Assets Library, and the three steps"
    captured: 2026-09-28
  - file: "/Images/help/image-editor-crop.webp"
    route: "/files"
    clip: "the Image editor, Crop panel"
    alt: "The Image editor on a product photo, with the Crop panel open and the Portrait 4:5 format picked, the crop box drawn over the picture"
    captured: 2026-09-28
  - file: "/Images/help/image-editor-effects.webp"
    route: "/files"
    clip: "the Image editor, Effects panel"
    alt: "The Effects panel of the Image editor: nine looks, each previewed on the picture"
    captured: 2026-09-28
  - file: "/Images/help/image-editor-draw.webp"
    route: "/files"
    clip: "the Image editor, Draw panel"
    alt: "The Image editor with a caption reading New season and a red arrow on the picture, the Draw panel open on the selected arrow"
    captured: 2026-09-28
  - file: "/Images/help/image-editor-save.webp"
    route: "/files"
    clip: "the Image editor, Save panel"
    alt: "The Save the picture panel: name, format, quality, size, then Save a copy in the Assets Library, Save as a new version and Download"
    captured: 2026-09-28
  - file: "/Images/help/instagram-picture-edit.webp"
    route: "/social/instagram/posts"
    clip: "the picture step of a post"
    alt: "The picture step of an Instagram post: the pencil under the cross on the post's picture, then Render again, Add from the library and Upload from your computer"
    captured: 2026-09-28
sources: ["src/lib/app.ts", "src/layouts/Layout.astro", "src/pages/files/index.astro", "src/scripts/filesPanel.ts", "src/pages/api/files/index.ts", "src/pages/api/files/[id].ts", "src/pages/api/files/folders/[id].ts", "src/lib/stored-files.ts", "src/lib/asset-tools.ts", "src/components/AssetToolsNav.astro", "src/pages/files/tools/index.astro", "src/pages/files/tools/image-editor.astro", "src/pages/files/tools/image-anonymizer.astro", "src/scripts/imageEditor.ts", "src/scripts/imageEditorLauncher.ts", "src/scripts/lightbox.ts", "src/scripts/historyPanel.ts", "src/scripts/imageGenerate.ts", "src/scripts/socialContent.ts", "public/apps/hubstudio/vocabulary.js"]
---

The **Assets Library** holds every file of your team in one place, in folders: the pictures and clips you upload, the ones the studios render, and the pictures you edit. **Assets Library** in the menu opens on two entries:

- **Assets**: the library itself.
- **Tools**: work on a picture you already have, with the **Image editor** or the **Image anonymizer**.

[History](/help/history) and the Assets Library show the same renders in two ways. History lists what the studios made, newest first, with the prompt, the engine and the cost of each piece. The library holds everything, renders and uploads alike, in the folders you choose.

A client login doesn't see the Assets Library. What the team makes for a client reaches them in their [Client space](/help/client-space).

## The library

The dark band at the top holds **New folder** and **Upload files**, the number of assets and the space they take, and one tile per type: **Images**, **Videos**, **Texts**, **Documents** and **Other**. A file can weigh up to 50 MB.

Everything your team renders lands here on its own, and so does every file you upload in the studios or in a network module for a post. Anyone in the team sees what the others added.

![The Assets Library: the dark band with New folder, Upload files and one tile per type, the search and its filters, then a folder and four pictures in the list](/Images/help/assets-library-page.webp)

### Find a file

- Type in **Search names, prompts, texts and tags…**: the words are looked for in the file names, the prompts of the renders, the texts and the tags.
- Narrow with the filters under it: **Type**, **Date**, **Tags** and **Added by**.
- A search or a filter looks across the whole library, not only the open folder.
- Sort the list with **Newest first**, **Oldest first**, **Name, A to Z** or **Largest first**, and switch between **List** and **Grid**.

### Folders

Click **New folder**, type its name, and it appears in the folder you have open. Open a folder with a click. To move a file, drag its row onto a folder, or pick **Move** in its **Actions** menu. Tick several rows to move, tag or delete them together.

Deleting a folder deletes everything inside it. A folder that holds files added by someone else can't be deleted: only the person who added a file can delete it.

### The Actions menu

Each row has an **Actions** menu. What it offers depends on the file:

| Item | What it does |
|---|---|
| **View** | Opens the picture or the clip full size. On a picture, the viewer has an **Edit** button that opens it in the Image editor. |
| **Download** | Saves the original file to your computer. |
| **Edit image** | Opens the picture in the [Image editor](#the-image-editor). Shown on the pictures a browser can edit, such as JPG, PNG, WebP, GIF and AVIF. |
| **Versions** | Lists the earlier versions of a file, once it has more than one. |
| **Upload a new version** | Replaces a file you uploaded with a newer one. The earlier one stays under **Versions**. Renders don't take versions. |
| **Tags** | Your own words, such as "spring launch" or "approved". Click a tag anywhere to filter on it. |
| **Rename** | Changes the name shown in the library. |
| **Move** | Puts the file in another folder. |
| **Delete** | Removes the file for good, after you confirm. Only the person who added a file can delete it. |

![The Actions menu of a picture in the Assets Library: View, Download, Edit image, Upload a new version, Tags, Rename, Move and Delete](/Images/help/assets-library-actions.webp)

### What files cost

Keeping files has a small daily rent, and downloading one has a small transfer charge, both charged against the team balance, exactly as described in [History](/help/history#what-storing-files-costs). Delete what you no longer need and the rent goes down from the next day. When the balance is empty, new files can't be uploaded until you top up.

## Tools

**Tools** opens on the Image editor. The **Tool** switch at the top right of the dark band moves to the other one, the Image anonymizer. Both run in your own browser, and both are free: the band says **Runs in your browser · Free**.

![Tools, open on the Image editor: the Tool switch in the dark band, the box to drop a picture, From the Assets Library, and the three steps](/Images/help/assets-library-tools.webp)

### The Image anonymizer

Drop a picture on the box, or click it to choose one. The tool first lists what is hidden inside the file: camera data, the place it was taken, editing records, content credentials and the tags AI engines write into their pictures. It then rebuilds the picture pixel by pixel into a new file that carries none of it, under a neutral file name.

Nothing is uploaded and nothing is kept: the clean copy exists only on the page until you download it. Leave the page and it's gone. The tool cleans what is written into the file, not the picture itself, so a watermark drawn in the pixels can survive. Only anonymize pictures you have the rights to use.

The image studio does the same for a render in one click: **Download clean copy**. See [Create an image](/help/create-an-image#several-runs-at-once).

## The Image editor

The Image editor crops a picture to the format of each network, turns and mirrors it, adjusts its light and colors, applies a look, writes captions on it, draws arrows, lines, boxes and circles, and places a logo or any other picture over it. Editing is free and happens in your browser: nothing leaves your computer until you save.

### Open a picture

The editor opens from wherever the picture is:

| From | How |
|---|---|
| **Tools** | Drop a picture on **Drop a picture here, or click to choose one**, or click **From the Assets Library** and pick one. |
| The Assets Library | **Edit image** in a picture's **Actions** menu, or **Edit** in the full-size viewer. |
| [History](/help/history#edit-a-picture) | **Edit** on a picture's card, or in the full-size viewer. |
| The image studio | **Edit** on a ready picture, or in the full-size viewer. See [Create an image](/help/create-an-image#edit-a-picture). |
| A post | The pencil on one of the post's pictures, in the LinkedIn, Instagram, Facebook and X modules. See [Edit a picture of a post](#edit-a-picture-of-a-post). |

The editor takes JPG, PNG, WebP, GIF and AVIF pictures. A picture larger than 4,096 pixels on its long side is edited at 4,096 pixels, and the Save panel says so.

### The workspace

The editor covers the whole screen. The top bar shows the picture's name, **Undo** and **Redo**, the zoom (click the percentage to fit the picture to the window) and **Save**. **Save** turns amber once you have changes that aren't saved. The rail on the left opens one panel at a time: **Crop**, **Adjust**, **Effects**, **Text**, **Draw** and **Picture**.

Everything you add on top of the picture (a caption, an arrow, a box, a logo) stays a separate piece until you save: click it to move it, resize it, restyle it or delete it. A selected piece shows four buttons above its settings: duplicate, bring forward, send backward and delete.

### Crop

Drag the corners of the box, or pick the format of the network the picture is for:

| Format | Shape | Made for |
|---|---|---|
| **Free** | Any shape | |
| **Original** | As it came | |
| **Square** | 1:1 | Instagram, LinkedIn |
| **Portrait** | 4:5 | Instagram feed |
| **Story** | 9:16 | Stories, Reels, TikTok |
| **Wide** | 16:9 | YouTube, X |
| **Link** | 1.91:1 | LinkedIn, Facebook |
| **Photo** | 3:2 | Classic print |
| **Screen** | 4:3 | Presentations |

The size of the result, in pixels, shows under the formats. **Turn and mirror** holds **Turn left**, **Turn right**, **Mirror** and **Upside down**. Click **Apply the crop** to cut the picture, or **Reset** to start over. Captions and drawings already on the picture follow it when it is cut or turned.

![The Image editor on a product photo, with the Crop panel open and the Portrait 4:5 format picked, the crop box drawn over the picture](/Images/help/image-editor-crop.webp)

### Adjust

Eight sliders under **Light and color**: **Brightness**, **Contrast**, **Saturation**, **Vibrance**, **Warmth**, **Hue**, **Sharpness** and **Blur**. The picture changes as you slide. Double-click a slider to put it back to zero, or click **Reset all**.

### Effects

**Looks** offers one look over the whole picture, on top of your adjustments: **Original**, then eight looks such as **Mono**, **Noir**, **Sepia** and **Vintage**. Each one shows a small preview of your own picture. Click **Original** to take the look off.

![The Effects panel of the Image editor: nine looks, each previewed on the picture](/Images/help/image-editor-effects.webp)

### Text

Click **Add text**, or double-click the picture where the caption should go, then type. Drag the caption where it belongs; double-click it later to change the words. For the selected caption, or the next one, pick:

- the **Font** and its **Size**;
- bold, italic or underline, and the alignment;
- the **Color**, and a **Highlight behind the words**;
- a **Dark outline** or a **Soft shadow**, which keep light words readable on a light picture.

### Draw

Pick a tool under **Tool**, then drag on the picture: **Pen**, **Highlighter**, **Arrow**, **Straight line**, **Box** or **Circle**. **Select** goes back to picking and moving what is already there. Under **Style**, set the **Line color**, a **Fill** for a box or a circle, the **Thickness** and the **Opacity**. Everything drawn can be moved and restyled afterwards.

![The Image editor with a caption reading New season and a red arrow on the picture, the Draw panel open on the selected arrow](/Images/help/image-editor-draw.webp)

### Picture: a logo over yours

Under **Add a picture**, pick **From your computer** (a PNG with a transparent background works best for a logo) or **From the Assets Library**. Once it is on the picture, set its **Opacity**, and click one of the nine squares under **Place it** to send it to a corner, an edge or the middle: from **Top left** to **Bottom right**. A light logo in a corner makes a watermark.

### Undo and shortcuts

**Undo** goes back up to 60 steps. The keyboard works too:

| Keys | What they do |
|---|---|
| Ctrl+Z | Undo |
| Ctrl+Shift+Z or Ctrl+Y | Redo |
| Ctrl+D | Duplicate the selected piece |
| Delete | Delete the selected piece |
| Arrow keys | Move the selected piece; with Shift, in bigger steps |
| Ctrl+S | Open the Save panel |
| Escape | Leave the text you are typing, drop the selection, then close the editor |

On a Mac, use Cmd in place of Ctrl.

### Save

Click **Save** at the top right. The **Save the picture** panel asks for:

- **Name**: the original name followed by "(edited)", which you can change.
- **Format**: **PNG** (sharp and lossless, keeps transparency, the largest file), **JPG** (the lightest for photos; transparent areas turn white) or **WEBP** (light and sharp, keeps transparency). JPG and WebP add a **Quality** slider.
- **Size**: the **Width** and the **Height**, whose proportions stay locked, with quick picks at 100%, 75%, 50% and 25%, and at 2048 px or 1080 px on the long side when the picture is larger.

Then pick how to keep it:

- **Save a copy in the Assets Library**: a new file, next to the original in the same folder, or at the top of the library when the picture came from somewhere else. The original stays as it is.
- **Save as a new version**: offered on a file you uploaded. The edit replaces the file in the library, and the previous one stays under **Versions**.
- **Download**: saves the picture to your computer, in the format and at the size shown on the button. Nothing goes into the library.

Once a picture is saved, the panel says **Saved.** with a link, **Open it in the Assets Library**, which opens it in a new tab. You can keep editing and save again. A picture saved in the library counts toward your storage like any upload.

![The Save the picture panel: name, format, quality, size, then Save a copy in the Assets Library, Save as a new version and Download](/Images/help/image-editor-save.webp)

An edited picture is a file you made, not a render: it sits in the Assets Library, not in History.

### Close the editor

Click the ✕ at the top left, or press Escape. If you have changes that aren't saved, the editor asks **Leave the editor?**: click **Leave without saving** to drop them, or **Keep editing** to go back and save.

## Edit a picture of a post

In the LinkedIn, Instagram, Facebook and X modules, a post's pictures carry two small buttons when you point at them: the **×** takes the picture off the post, and the pencil opens it in the Image editor.

![The picture step of an Instagram post: the pencil under the cross on the post's picture, then Render again, Add from the library and Upload from your computer](/Images/help/instagram-picture-edit.webp)

Edit the picture, then open **Save**. The main button reads **Save and use it in the post**: the edited copy is saved in the Assets Library, takes the place of the old picture in the post (the same slide in a carousel), and the editor closes. The step then says **The edited picture is in the post. The original stays in the Assets Library.** **Download** is there as well; it changes nothing in the post.
