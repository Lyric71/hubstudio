---
title: "Assets Library and the tools"
seoTitle: "Assets Library, Image editor, Video editor and Image anonymizer | hubStudio Help"
description: "Every file of your team in one place, in folders: uploads, renders, edited pictures, edited videos and shorts. Find, tag, move and download them, then work on them with the Image editor (frame a picture for X, Instagram or LinkedIn, crop, adjust, apply a look, write, draw, place a logo), the Video editor (frame a video for Instagram, TikTok or Facebook, trims, speed, texts, captions word by word, music, a cover) and the Image anonymizer."
excerpt: "Your team's files in folders, and three tools that run in your browser, each with its own entry in the menu: the Image editor, the Video editor for Reels, TikToks and Facebook reels, and the Image anonymizer."
section: "library"
order: 6
updated: 2026-10-08
appPaths: ["/files", "/files/tools/image-editor", "/files/tools/video-editor", "/files/tools/image-anonymizer"]
audience: "Everyone except client logins"
related: ["history", "shorts-autopilot", "campaigns", "create-an-image", "create-a-video", "linkedin", "instagram", "facebook", "tiktok", "x", "balance-and-payments"]
shots:
  - file: "/Images/help/assets-library-page.webp"
    route: "/files"
    alt: "The Assets Library: the dark band with New folder, Upload files and one tile per type, the search and its filters, then a folder and four pictures in the list"
    captured: 2026-09-28
  - file: "/Images/help/assets-library-actions.webp"
    route: "/files"
    clip: "the list with a picture's Actions menu open"
    alt: "The Actions menu of a picture in the Assets Library: View, Download, Edit image, Upload a new version, Tags, Campaigns, Rename, Move and Delete"
    captured: 2026-10-08
  - file: "/Images/help/assets-library-video-actions.webp"
    route: "/files"
    clip: "the list with a video's Actions menu open"
    alt: "The Actions menu of a video in the Assets Library: View, Download, Edit video, Make shorts, Upload a new version, Tags, Campaigns, Rename and Move"
    captured: 2026-10-08
  - file: "/Images/help/image-anonymizer-page.webp"
    route: "/files/tools/image-anonymizer"
    alt: "Image anonymizer lit in the menu, its page open: the box to drop a picture, the Output format list, and the three steps Drop a picture, See what it carries and Download the clean copy"
    captured: 2026-10-02
  - file: "/Images/help/image-editor-social.webp"
    route: "/files/tools/image-editor"
    clip: "the Image editor, Social panel"
    alt: "The Social panel of the Image editor on Instagram, Feed portrait picked: the crop box of 1080 by 1350 over the picture, the dashed Profile grid lines, and Crop to fill, Fit it whole, Show what the network covers and Apply the format"
    captured: 2026-09-29
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
  - file: "/Images/help/video-editor-tools.webp"
    route: "/files/tools/video-editor"
    alt: "Video editor lit in the menu, its page open: the box to drop a video, From the Assets Library, and the three steps Open a video, Cut it for the network and Save it"
    captured: 2026-10-02
  - file: "/Images/help/video-editor-social.webp"
    route: "/files/tools/video-editor"
    clip: "the Video editor, Social panel"
    alt: "The Social panel of the Video editor on Instagram, Reel picked and applied with Fit it whole: the red zones Name and progress bar and Caption, reply box and buttons over the preview, the dashed Profile grid crop, and the Zones switch on in the top bar"
    captured: 2026-10-03
  - file: "/Images/help/video-editor-social-checks.webp"
    route: "/files/tools/video-editor"
    clip: "the Video editor, Social panel, lower half"
    alt: "The lower half of the Social panel: How it will show with Full screen and On the profile grid, the Checks with Add music under the warning on a clip with no sound, Save for Instagram and Good practice on Instagram"
    captured: 2026-10-03
  - file: "/Images/help/video-editor-format.webp"
    route: "/files/tools/video-editor"
    clip: "the Video editor, Format panel"
    alt: "The Video editor on a wide product clip set to Vertical 9:16 and Fit, blurred, with Social first on the rail, the transport bar and the clip on the timeline"
    captured: 2026-10-03
  - file: "/Images/help/video-editor-save.webp"
    route: "/files/tools/video-editor"
    clip: "the Video editor, Save panel"
    alt: "The Save the video panel after Apply the format: Made for Instagram, Reel with its Checks button, the name ending in (Instagram Reel), 1080p or 720p, the file details, Fits for Instagram Reel, Instagram Story, Facebook and TikTok, then Save it in the Assets Library and Download"
    captured: 2026-10-03
  - file: "/Images/help/instagram-picture-edit.webp"
    route: "/social/instagram/posts"
    clip: "the picture step of a post"
    alt: "The picture step of an Instagram post: the pencil under the cross on the post's picture, then Render again, Add from the library and Upload from your computer"
    captured: 2026-09-28
sources: ["src/lib/app.ts", "src/layouts/Layout.astro", "src/pages/files/index.astro", "src/scripts/filesPanel.ts", "src/pages/api/files/index.ts", "src/pages/api/files/[id].ts", "src/pages/api/files/folders/[id].ts", "src/pages/api/files/captions.ts", "src/lib/stored-files.ts", "src/lib/campaigns.ts", "src/lib/asset-tools.ts", "src/components/AssetToolsNav.astro", "src/pages/files/tools/index.astro", "src/pages/files/tools/image-editor.astro", "src/pages/files/tools/video-editor.astro", "src/pages/files/tools/image-anonymizer.astro", "src/scripts/imageEditor.ts", "src/scripts/imageEditorNetworks.ts", "src/scripts/imageEditorLauncher.ts", "src/scripts/videoEditor.ts", "src/scripts/videoEditorNetworks.ts", "src/scripts/videoEditorModel.ts", "src/scripts/videoEditorCaptions.ts", "src/scripts/videoEditorAudio.ts", "src/scripts/videoEditorExport.ts", "src/scripts/videoEditorLauncher.ts", "src/lib/video-captions.ts", "src/lib/social/limits.ts", "src/scripts/lightbox.ts", "src/scripts/historyPanel.ts", "src/scripts/imageGenerate.ts", "src/scripts/socialContent.ts", "public/apps/hubstudio/vocabulary.js", "src/scripts/campaignChoice.ts", "src/lib/request-campaign.ts"]
---

The **Assets Library** holds every file of your team in one place, in folders: the pictures and clips you upload, the ones the studios render, the pictures and videos you edit, and the shorts [Shorts autopilot](/help/shorts-autopilot) makes. **Assets Library** in the menu opens it.

The tools that work on a file you already have are features of their own, each with its own entry in the menu, right under the Assets Library: the **Image editor**, the **Video editor**, **Shorts autopilot** and the **Image anonymizer**. Each page is named after its tool in the dark band at the top. The editors and the Image anonymizer are described below; Shorts autopilot has [its own article](/help/shorts-autopilot).

[History](/help/history) and the Assets Library show the same renders in two ways. History lists what the studios made, newest first, with the prompt, the engine and the cost of each piece. The library holds everything, renders and uploads alike, in the folders you choose. [Campaigns](/help/campaigns) gather files of the library under one name and one brief, without moving or copying them.

A client login doesn't see the Assets Library. What the team makes for a client reaches them in their [Client space](/help/client-space).

## The library

The dark band at the top holds **New folder** and **Upload files**, the number of assets and the space they take, and one tile per type: **Images**, **Videos**, **Texts**, **Documents** and **Other**. A file can weigh up to 50 MB.

Everything your team renders lands here on its own, and so does every file you upload in the studios or in a network module for a post. Anyone in the team sees what the others added.

To file what you upload in a campaign, pick it in the list next to **New folder**, which reads **No campaign** until you do. See [Campaigns](/help/campaigns#fill-a-campaign-as-you-create).

![The Assets Library: the dark band with New folder, Upload files and one tile per type, the search and its filters, then a folder and four pictures in the list](/Images/help/assets-library-page.webp)

### Find a file

- Type in **Search names, prompts, texts and tags…**: the words are looked for in the file names, the prompts of the renders, the texts and the tags.
- Narrow with the filters under it: **Type**, **Date**, **Tags**, **Campaign** (once your team has a campaign) and **Added by**. See [Campaigns](/help/campaigns#filter-the-library-by-campaign).
- A search or a filter looks across the whole library, not only the open folder.
- Sort the list with **Newest first**, **Oldest first**, **Name, A to Z** or **Largest first**, and switch between **List** and **Grid**.

### Folders

Click **New folder**, type its name, and it appears in the folder you have open. Open a folder with a click. To move a file, drag its row onto a folder, or pick **Move** in its **Actions** menu. Tick several rows to move, tag, add to a campaign or delete them together.

Deleting a folder deletes everything inside it. A folder that holds files added by someone else can't be deleted: only the person who added a file can delete it.

### The Actions menu

Each row has an **Actions** menu. What it offers depends on the file:

| Item | What it does |
|---|---|
| **View** | Opens the picture or the clip full size. The viewer has an **Edit** button: a picture opens in the Image editor, a video in the Video editor. |
| **Download** | Saves the original file to your computer. |
| **Edit image** | Opens the picture in the [Image editor](#the-image-editor). Shown on the pictures a browser can edit, such as JPG, PNG, WebP, GIF and AVIF. |
| **Edit video** | Opens the video in the [Video editor](#the-video-editor). Shown on MP4, MOV and WebM videos. |
| **Make shorts** | Opens [Shorts autopilot](/help/shorts-autopilot) with the video already picked, to cut its best moments into vertical shorts. Shown on MP4, MOV and WebM videos. |
| **Versions** | Lists the earlier versions of a file, once it has more than one. |
| **Upload a new version** | Replaces a file you uploaded with a newer one. The earlier one stays under **Versions**. Renders don't take versions. |
| **Tags** | Your own words, such as "spring launch" or "approved". Click a tag anywhere to filter on it. |
| **Add to a campaign** | Puts the file in a [campaign](/help/campaigns), or in a new one you name on the spot. Once the file is in a campaign, the item reads **Campaigns** and lists the campaigns that hold it. |
| **Rename** | Changes the name shown in the library. |
| **Move** | Puts the file in another folder. |
| **Delete** | Removes the file for good, after you confirm. Only the person who added a file can delete it. |

![The Actions menu of a picture in the Assets Library: View, Download, Edit image, Upload a new version, Tags, Campaigns, Rename, Move and Delete](/Images/help/assets-library-actions.webp)

On a video, the same menu reads **Edit video** where a picture reads **Edit image**, and adds **Make shorts**:

![The Actions menu of a video in the Assets Library: View, Download, Edit video, Make shorts, Upload a new version, Tags, Campaigns, Rename and Move](/Images/help/assets-library-video-actions.webp)

### What files cost

Keeping files has a small daily rent, and downloading one has a small transfer charge, both charged against the team balance, exactly as described in [History](/help/history#what-storing-files-costs). Delete what you no longer need and the rent goes down from the next day. When the balance is empty, new files can't be uploaded until you top up.

## What the tools cost

The Image editor, the Video editor and the Image anonymizer run in your own browser and are free: their band says **Runs in your browser · Free**. Two things are paid, each with its price shown before you start: the fast captions of the Video editor, and the run of [Shorts autopilot](/help/shorts-autopilot#what-it-costs).

## The Image anonymizer

**Image anonymizer** in the menu opens it.

![Image anonymizer lit in the menu, its page open: the box to drop a picture, the Output format list, and the three steps Drop a picture, See what it carries and Download the clean copy](/Images/help/image-anonymizer-page.webp)

Drop a picture on the box, or click it to choose one. The tool first lists what is hidden inside the file: camera data, the place it was taken, editing records, content credentials and the tags AI engines write into their pictures. It then rebuilds the picture pixel by pixel into a new file that carries none of it, under a neutral file name.

Nothing is uploaded and nothing is kept: the clean copy exists only on the page until you download it. Leave the page and it's gone. The tool cleans what is written into the file, not the picture itself, so a watermark drawn in the pixels can survive. Only anonymize pictures you have the rights to use.

The image studio does the same for a render in one click: **Download clean copy**. See [Create an image](/help/create-an-image#several-runs-at-once).

## The Image editor

The Image editor frames a picture for X, Instagram or LinkedIn, crops it to any format, turns and mirrors it, adjusts its light and colors, applies a look, writes captions on it, draws arrows, lines, boxes and circles, and places a logo or any other picture over it. Editing is free and happens in your browser: nothing leaves your computer until you save.

### Open a picture

The editor opens from wherever the picture is:

| From | How |
|---|---|
| **Image editor** in the menu | Drop a picture on **Drop a picture here, or click to choose one**, or click **From the Assets Library** and pick one. |
| The Assets Library | **Edit image** in a picture's **Actions** menu, or **Edit** in the full-size viewer. |
| [History](/help/history#edit-a-picture-or-a-video) | **Edit** on a picture's card, or in the full-size viewer. |
| The image studio | **Edit** on a ready picture, or in the full-size viewer. See [Create an image](/help/create-an-image#edit-a-picture). |
| A post | The pencil on one of the post's pictures, in the LinkedIn, Instagram, Facebook and X modules. See [Edit a picture of a post](#edit-a-picture-of-a-post). |

The editor takes JPG, PNG, WebP, GIF and AVIF pictures. A picture larger than 4,096 pixels on its long side is edited at 4,096 pixels, and the Save panel says so.

### The workspace

The editor covers the whole screen. The top bar shows the picture's name, **Undo** and **Redo**, the zoom (click the percentage to fit the picture to the window) and **Save**. **Save** turns amber once you have changes that aren't saved. The rail on the left opens one panel at a time: **Social**, **Crop**, **Adjust**, **Effects**, **Text**, **Draw** and **Picture**. **Save** opens the eighth panel, **Save the picture**.

Everything you add on top of the picture (a caption, an arrow, a box, a logo) stays a separate piece until you save: click it to move it, resize it, restyle it or delete it. A selected piece shows four buttons above its settings: duplicate, bring forward, send backward and delete.

### Social: frame it for a network

The **Social** panel prepares a picture for one place on one network, at the pixels that network wants. The editor opens on it when you edit the picture of a LinkedIn, Instagram or X post, already set to that network.

1. Pick the network at the top: **Instagram**, **X** or **LinkedIn**.
2. Under **Where it goes**, pick the placement. **Best** marks the network's own recommendation for a post.

| Network | Placements |
|---|---|
| Instagram | **Feed portrait** (1080 × 1350, Best), **Square**, **Landscape**, **Grid portrait** (3:4, Instagram app only), **Story**, **Reel cover**, **Profile photo** |
| X | **Post, wide** (1600 × 900, Best), **Post, square**, **Post, portrait**, **One of two**, **Header photo**, **Profile photo**, **Link card** |
| LinkedIn | **Post, portrait** (1080 × 1350, Best), **Post, square**, **Post, landscape**, **Profile banner**, **Page cover**, **Profile photo** |

3. Under **Frame it**, pick how the picture gets that shape:
   - **Crop to fill**: a crop box of the right shape appears over the picture. Drag it over the part to keep.
   - **Fit it whole**: nothing is cut. The space around the picture is filled, under **Around the picture**, with a **Blurred picture** of itself or a plain color.
4. Leave **Show what the network covers** on to see, in red, where the network's own buttons, name or caption sit over the picture, and in dashed lines the crops it shows elsewhere, such as Instagram's **Profile grid** or one of two pictures on X. On a banner, the round profile photo is drawn where it will sit. Keep your words and your logo out of those zones.
5. Click **Apply the format**. The picture takes the placement's size, and the Save panel is set to the file the network wants: the format, the quality and a name that says the network and the size.

Once a placement is picked, the panel also shows:

- **How it will show**: small previews of the picture as the network shows it, in the feed, on the profile grid, in a circle for a profile photo, or on a phone for a banner.
- **Checks**: the shape, whether the picture is sharp enough for the size, whether the network accepts the file format, the weight of the file against the network's limit, whether anything you added sits under the network's buttons, and whether your words are large enough to read on a phone.
- **Save for Instagram** (or X, or LinkedIn): applies the format if you haven't, and opens the Save panel.
- **Good practice on Instagram** (or X, or LinkedIn): a few short rules for that network.

![The Social panel of the Image editor on Instagram, Feed portrait picked: the crop box of 1080 by 1350 over the picture, the dashed Profile grid lines, and Crop to fill, Fit it whole, Show what the network covers and Apply the format](/Images/help/image-editor-social.webp)

### Crop

Drag the corners of the box, or pick a format:

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

Once you have picked a placement in **Social**, it comes first in this list, with its size. The size of the result, in pixels, shows under the formats. **Turn and mirror** holds **Turn left**, **Turn right**, **Mirror** and **Upside down**. Click **Apply the crop** to cut the picture, or **Reset** to start over. Captions and drawings already on the picture follow it when it is cut or turned.

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

- **Name**: the original name followed by "(edited)", which you can change. After **Apply the format** in **Social**, the name says the network and the size instead.
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

## The Video editor

The Video editor turns a clip into an Instagram Reel, a TikTok or a Facebook reel: a frame made for one place on one network (the 9:16 of a phone's screen, or 4:5 and 1:1 for the feed), trims and splits on a timeline, the speed of each clip, several clips one after the other, texts that show for a stretch of time, captions timed word by word, music under the sound, and the cover. It writes an MP4 that Instagram, TikTok and Facebook all take. Editing is free and happens in your browser.

### Open a video

| From | How |
|---|---|
| **Video editor** in the menu | Drop a video on **Drop a video here, or click to choose one**, or click **From the Assets Library** and pick one. |
| The Assets Library | **Edit video** in a video's **Actions** menu, or **Edit** in the full-size viewer. |
| [History](/help/history#edit-a-picture-or-a-video) | **Edit** on a video's card, or in the full-size viewer. |
| A post | The pencil on the clip of a video post. On an Instagram, TikTok or Facebook post, the editor opens on its **Social** panel, set to that network. See [Edit the clip of a post](#edit-the-clip-of-a-post). |
| [Shorts autopilot](/help/shorts-autopilot#the-shorts) | **Edit in the Video editor** on one of the shorts it made. |

The editor takes MP4, MOV and WebM videos up to 2 GB. Chrome and Edge open the most formats. A video filmed in HEVC on a phone may not open in some browsers: the editor says so and suggests Chrome or Edge on a recent computer.

![Video editor lit in the menu, its page open: the box to drop a video, From the Assets Library, and the three steps Open a video, Cut it for the network and Save it](/Images/help/video-editor-tools.webp)

### The workspace

The top bar shows the video's name, **Undo** and **Redo**, the **Zones** switch once the video is framed for a network (see [Social](#social-made-for-a-network)), and **Save**. The preview sits in the middle, with the transport bar under it: back to the start, one frame back, play or pause, one frame on, the time, **Split** and **Delete**, and the timeline zoom. The timeline shows the clips, the texts, the captions and the music on their own rows. Click the timeline to move the playhead.

The rail on the left opens one panel at a time: **Social**, **Format**, **Clips**, **Text**, **Captions**, **Sound** and **Cover**. **Save** opens **Save the video**. The editor opens on **Format**, or on **Social** when you edit the clip of an Instagram, TikTok or Facebook post, or a short made by Shorts autopilot.

![The Video editor on a wide product clip set to Vertical 9:16 and Fit, blurred, with Social first on the rail, the transport bar and the clip on the timeline](/Images/help/video-editor-format.webp)

### Social: made for a network

The **Social** panel prepares the video for one place on one network: the shape, the framing, what the network's buttons cover, and the checks before you save.

1. Pick the network at the top: **Instagram**, **TikTok** or **Facebook**.
2. Under **Where it goes**, pick the placement. **Best** marks the network's own recommendation.

| Network | Placements |
|---|---|
| Instagram | **Reel** (9:16, 1080 × 1920, Best), **Story** (9:16), **Feed portrait** (4:5) and **Square** (1:1). Every video posted to Instagram is shared as a reel. |
| TikTok | **Video** (9:16, 1080 × 1920, Best) and **Square** (1:1, shown with bands above and below). |
| Facebook | **Reel** (9:16, 1080 × 1920, Best), **Story** (9:16), **Feed portrait** (4:5) and **Square** (1:1). |

3. Under **Frame it**, pick how every clip gets that shape:
   - **Crop to fill**: every clip fills the frame and what overflows is cut. Drag the picture in the preview to choose what shows.
   - **Fit it whole**: nothing is cut. The space around each clip is filled, under **Around the video**, with a **Blurred video** of itself or a plain color.
4. Leave **Show what the network covers** on to see, in red over the preview, where the network's name, caption, reply box and buttons sit, with a dashed line around the safe area, and in dashed lines the **Profile grid**: the part of the cover that Instagram's and TikTok's profile grid shows. Keep your texts and captions inside the safe area.
5. Click **Apply the format**. Every clip takes the placement's shape and framing, the video is written in 1080p, and its name says the network and the placement, such as "(Instagram Reel)". Once the video has the shape, the button reads **Apply to every clip**.

![The Social panel of the Video editor on Instagram, Reel picked and applied with Fit it whole: the red zones Name and progress bar and Caption, reply box and buttons over the preview, the dashed Profile grid crop, and the Zones switch on in the top bar](/Images/help/video-editor-social.webp)

The **Zones** switch in the top bar, **On** or **Off**, shows or hides the same zones from any panel, so you can place a text or move the captions while you see them.

Once a placement is picked, the panel also shows:

- **How it will show**: small previews of the video as the network shows it, full screen, in the story or in the feed, and **On the profile grid**, which shows the cover frame.
- **Checks**: the shape, the length against what the placement takes, the picture and the file, the weight of the file against the network's limit, whether captions or texts sit under the network's buttons or fall outside the grid's crop, whether the words are large enough to read on a phone, and whether the video has captions and sound. A reel or a TikTok over 3 minutes gets a word on its reach.
- **Save for Instagram** (or TikTok, or Facebook): opens the Save panel.
- **Good practice on Instagram** (or TikTok, or Facebook): a few short rules for that network.

Many checks carry a button that fixes what they found: **Apply the format**, **Cut it at** the longest length taken, **Write it in 1080p**, **Move the captions into the safe area**, **Move the words into the safe area**, **Make the captions** (opens the Captions panel) and **Add music** (opens the Sound panel).

![The lower half of the Social panel: How it will show with Full screen and On the profile grid, the Checks with Add music under the warning on a clip with no sound, Save for Instagram and Good practice on Instagram](/Images/help/video-editor-social-checks.webp)

### Format

Under **Frame**, pick **Vertical** (9:16, 1080 × 1920, for Reels, TikTok and Stories), **Portrait** (4:5, for the Instagram feed) or **Square** (1:1, for the Instagram feed).

Under **The clip**, pick how the selected clip fills the frame:

- **Fill**: the picture fills the frame and what overflows is cut. Drag the picture in the preview to choose what shows.
- **Fit, blurred**: the whole picture shows, over a blurred copy of itself.
- **Fit, color**: the whole picture shows, over a plain color you pick.

**Zoom**, **Left and right** and **Up and down** fine-tune the framing; **Center** puts it back. With several clips, **Same framing for every clip** copies this one's framing to the others.

### Clips

- **Trim**: drag the edges of a clip on the timeline, or type **Starts at** and **Ends at**, in seconds of the original video.
- **Split**: click **Split**, or press S, to cut the clip at the playhead in two.
- **Speed**: from **0.5x** to **2x**.
- **Its own sound**: the volume of that clip.
- **Order**: move the selected clip earlier or later, duplicate it or delete it.
- **More clips**: **Add from the computer** or **Add from the library**. The new clip goes at the end.

A video needs at least one clip: to shorten the last one, trim it.

### Text

Click **Add a text**. It starts at the playhead and lasts three seconds; stretch it on the timeline, or type **Appears at** and **Disappears at**, or click **Start at the playhead** and **End at the playhead**. Type the words, then pick a style (**Box**, **Outlined** or **Plain**), the **Font**, the **Size**, the **Color**, the color of the **Box**, and **Bold**. Drag the text into place on the preview.

### Captions

Captions write the words said in the video on screen, as they are said, timed word by word: the captions most Reels and TikToks carry.

1. Under **Make the captions**, pick how:
   - **Free, in your browser**: a speech model runs on your own computer. Nothing is sent and nothing is billed. Pick the **Speech model**: **Quick** (about 40 MB), **Balanced** (about 80 MB) or **Accurate** (about 250 MB). It downloads the first time, then your browser keeps it. A minute of speech takes from a few seconds to a minute.
   - **Fast, billed**: a speech model online writes them in a few seconds. Pick one of the models listed, each with its price for a minute of sound; the list opens on the least expensive. The panel shows **About** the price **for this video** before you start, and **Cost of these captions:** once they are made. It is billed by the second of sound, and listed in **Usage**.
2. Pick the **Language spoken**, or **Detect it**.
3. Click **Make the captions**.

Then set their **Look**: **Show the captions** on or off, and a style: **Classic** (white, outlined), **Karaoke** (the word said lights up), **One word** (big, one at a time), **Boxed** (on a dark band) or **Highlight** (a color behind the word). Set the **Words at once**, the **Size**, the **Height on the screen**, the color of the **Text** and of **The word being said**, the **Font** and **Capital letters**. You can also drag the captions up or down on the preview.

Under **The words**, correct any line and press Enter. Empty a line to remove it. **Download as SRT** saves the captions as a subtitle file; **Remove them** takes them all off (Undo brings them back). **Make them again** replaces the words and your corrections.

### Sound

**Level of every clip** sets the volume of the original sound. Under **Music**, add a song **From the computer** or **From the library** (MP3, M4A, WAV or OGG). Then set the **Music level**, **Start the song at** to begin further into the song, and **Fade out at the end**. **Remove the music** takes it off.

Use only music you have the rights to. TikTok and Instagram mute or block a video whose music they don't license.

### Cover

The cover is the frame shown before the video plays, on your profile grid and in the feed. Move the playhead to the moment you want, then click **Use the frame under the playhead**. **Download it (JPG)** saves it to your computer; **Save it in the library** keeps it in the Assets Library. Instagram and TikTok let you pick the cover when you post: upload this picture there, or choose the same moment.

### Save

Click **Save** at the top right. The **Save the video** panel shows:

- **Made for**, once a placement is applied in **Social**: the network and the placement, such as **Instagram · Reel**, with **Checks** to go back to the Social panel.
- **Name**: the original name followed by "(edited)", or by the network and the placement after **Apply the format**. You can change it.
- **Quality**: **1080p** or **720p**, with the file's size, length and weight.
- **For each network**: a check for **Instagram Reel**, **Instagram Story**, **Facebook** and **TikTok**, which says whether the video fits the length each one takes and whether its shape fills the phone's screen.

Then pick how to keep it:

- **Save it in the Assets Library**: the video is written as an MP4, next to the original, or at the top of the library when it came from somewhere else. The original stays as it is.
- **Download**: the MP4 goes to your computer. Nothing goes into the library.

Your browser writes the video, which takes about as long as the video lasts. Keep the tab open until it is done; **Stop writing the video** cancels it. Once saved, the panel says **Saved.** with a link, **Open it in the Assets Library**. A video saved in the library counts toward your storage like any upload. **Back to editing** returns to the panel you were on.

![The Save the video panel after Apply the format: Made for Instagram, Reel with its Checks button, the name ending in (Instagram Reel), 1080p or 720p, the file details, Fits for Instagram Reel, Instagram Story, Facebook and TikTok, then Save it in the Assets Library and Download](/Images/help/video-editor-save.webp)

An edited video is a file you made, not a render: it sits in the Assets Library, not in History.

### Shortcuts and closing

**Undo** goes back up to 60 steps.

| Keys | What they do |
|---|---|
| Space | Play or pause |
| S | Split the clip at the playhead |
| Delete | Delete the selected clip or text |
| Left and right arrows | One frame back or on; with Shift, one second |
| Home, End | The start or the end of the video |
| Ctrl+Z | Undo |
| Ctrl+Shift+Z or Ctrl+Y | Redo |
| Ctrl+S | Open the Save panel |
| Escape | Leave the box you are typing in, close the Save panel, then close the editor |

On a Mac, use Cmd in place of Ctrl. Click the ✕ at the top left, or press Escape, to close the editor. With changes that aren't saved, it asks **Leave the editor?**: **Leave without saving** or **Keep editing**.

## Edit a picture of a post

In the LinkedIn, Instagram, Facebook and X modules, a post's pictures carry two small buttons when you point at them: the **×** takes the picture off the post, and the pencil opens it in the Image editor. **Edit in the image editor**, under the pictures, does the same for the picture or the first slide. For a LinkedIn, Instagram or X post, the editor opens on its **Social** panel, set to that network, so you can pick the placement and apply its format straight away.

![The picture step of an Instagram post: the pencil under the cross on the post's picture, then Render again, Add from the library and Upload from your computer](/Images/help/instagram-picture-edit.webp)

Edit the picture, then open **Save**. The main button reads **Save and use it in the post**: the edited copy is saved in the Assets Library, takes the place of the old picture in the post (the same slide in a carousel) as a new picture version, and the editor closes. The set from before stays under **Picture versions**, ready to come back with **Use this version**. The step then says **The edited picture is in the post. The original stays in the Assets Library.** **Download** is there as well; it changes nothing in the post.

## Edit the clip of a post

On a video post, the clip carries the same two buttons: the **×** takes the clip off the post, and the pencil, **Edit this clip**, opens it in the Video editor. **Edit in the video editor**, under the clip, does the same. On a TikTok, Instagram or Facebook post, the editor opens on its **Social** panel, set to that network's best placement (a TikTok video, an Instagram Reel, a Facebook reel), so you can apply its format and see what the network covers straight away.

Edit the clip, then open **Save**. The main button reads **Save and use it in the post**: the edited MP4 is saved in the Assets Library next to the original, takes the place of the clip in the post as a new version, and the editor closes. The clip from before stays under **Picture versions**. The step then says **The edited video is in the post. The original stays in the Assets Library.**
