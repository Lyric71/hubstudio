---
title: "Shorts autopilot"
seoTitle: "Shorts autopilot: a long video cut into vertical shorts | hubStudio Help"
description: "Shorts autopilot turns a long video into vertical 9:16 shorts for YouTube Shorts, TikTok and Instagram Reels by itself: it listens, picks the best moments, frames the speaker, adds captions word by word and a hook line, and saves each short in the Assets Library."
excerpt: "Give it an interview, a talk or a podcast: it picks the moments that work on their own and saves each one as a vertical short, captioned and ready to post."
section: "library"
order: 7
updated: 2026-10-08
appPaths: ["/files/tools/shorts"]
audience: "Creators and admins"
related: ["assets-library", "tiktok", "instagram", "youtube", "history", "balance-and-payments"]
shots:
  - file: "/Images/help/shorts-autopilot-page.webp"
    route: "/files/tools/shorts"
    alt: "Shorts autopilot in the menu, its page open on The long video: the box to drop a video, From the Assets Library, and the four steps It listens, It picks the best moments, It frames them and It writes and saves them"
    captured: 2026-10-02
  - file: "/Images/help/shorts-autopilot-settings.webp"
    route: "/files/tools/shorts"
    clip: "The shorts card, once a video is picked"
    alt: "The shorts card for a video of 6 minutes: For, How many, Length of each short, Framing, Captions on the video, Hook, Listening and Language spoken, the price line, then Make the shorts and Pick another video"
    captured: 2026-10-01
sources: ["src/lib/app.ts", "src/layouts/Layout.astro", "src/lib/asset-tools.ts", "src/components/AssetToolsNav.astro", "src/pages/files/tools/shorts.astro", "src/scripts/shortsAutopilot.ts", "src/lib/shorts.ts", "src/pages/api/files/shorts.ts", "src/pages/api/files/captions.ts", "src/scripts/videoEditorModel.ts", "src/scripts/videoEditorCaptions.ts", "src/scripts/videoEditorExport.ts", "src/scripts/videoEditorLauncher.ts", "src/scripts/filesPanel.ts", "src/lib/activity-jobs.ts", "src/scripts/activityTracker.ts"]
---

**Shorts autopilot** turns a long video into vertical shorts for YouTube Shorts, TikTok and Instagram Reels, with nothing to do in between. Give it an interview, a talk, a podcast, a webinar or a live: it listens to every word, keeps the moments that stand on their own, frames each one at 9:16 around the person speaking, writes the captions word by word and a hook line over the first seconds, and saves each short in the [Assets Library](/help/assets-library), next to the original.

It works best on several minutes of someone speaking. It picks its moments from what is said, so a video with no sound can't be used.

## Open it

Shorts autopilot has its own entry in the menu, under the Assets Library and the two editors. You can also reach it from the **Actions** menu of a video in the Assets Library: **Make shorts** opens the page with that video already picked.

![Shorts autopilot in the menu, its page open on The long video: the box to drop a video, From the Assets Library, and the four steps It listens, It picks the best moments, It frames them and It writes and saves them](/Images/help/shorts-autopilot-page.webp)

## 1. Pick the long video

Under **The long video**, drop a video on **Drop a video here, or click to choose one**, or click **From the Assets Library** and pick one your team keeps. The autopilot takes MP4, MOV and WebM videos up to 2 GB; Chrome and Edge open the most formats. A video from your computer stays on it: the autopilot sends only its sound (unless you listen for free in your browser) and a few frames of each moment, and keeps only the shorts.

The card then opens on **The shorts**, which names the video and its length. A video under 45 seconds gets a warning: the autopilot works best on videos of several minutes.

## 2. Make your choices

![The shorts card for a video of 6 minutes: For, How many, Length of each short, Framing, Captions on the video, Hook, Listening and Language spoken, the price line, then Make the shorts and Pick another video](/Images/help/shorts-autopilot-settings.webp)

| Choice | What it sets |
|---|---|
| **For** | **YouTube Shorts**, **TikTok** and **Instagram Reels**, all on at first. Each short gets a caption written for each network you keep. |
| **How many** | **3**, **5**, **8** or **10** shorts. A short video offers fewer. |
| **Length of each short** | **15 to 30 s**, **30 to 60 s** or **60 to 90 s**. |
| **Framing** | **Follow the speaker**: the 9:16 crop is placed on the person speaking, moment by moment. **Center**: the middle of the picture. **Whole picture, blurred around**: nothing is cut, over a blurred copy of the video. A video that is already vertical reads **Already vertical**. |
| **Captions on the video** | **None**, or one of the Video editor's five looks: **Classic**, **Karaoke** (the word said lights up), **One word**, **Boxed** or **Highlight**. |
| **Hook** | **A hook line over the first seconds**: a short line in a white box at the top of the first few seconds, written from the moment. Or **None**. |
| **Listening** | The fast ways, each marked **Fast**, are billed by the minute of sound; the list opens on the least expensive one. **Free, in this browser** costs nothing and sends nothing, but takes about as long as the video, or longer on a modest computer: best under 20 minutes. It then asks for the **Speech model**: **Quick**, **Balanced** or **Accurate**, downloaded once by your browser. |
| **Language spoken** | **Detect it**, or the language of the video. |

Under the choices, the price line starts with **About** and the total, then what listening, picking the moments and framing each cost. Writing the videos runs in your browser and costs nothing.

## 3. Make the shorts

Click **Make the shorts**. The card **Autopilot at work** follows five steps:

1. **Listening to the video**: every word, timed to the word. A long video is heard in several parts, and the bar says which one.
2. **Picking the best moments**: the moments that work on their own. Each one opens on a hook (a surprising claim, a question, a number), tells one complete idea and ends on a payoff, never in the middle of a sentence. Moments never overlap.
3. **Framing each moment**: where the speaker stands, read from three frames of each moment. Skipped with **Center** or **Whole picture, blurred around**.
4. **Writing the shorts**: one after the other, **Writing short 1 of 5…** and so on.
5. **Saving them in the Assets Library**.

**Spent so far:** adds up the cost as the run goes. **Stop the autopilot** stops it; the shorts already written stay on the page.

Keep the tab open until it is done: your browser writes the videos, which takes about as long as they last. The run also shows in **Activity** at the top of every page, as **Shorts from** and the name of the video, and says how many shorts were written and saved when it ends.

## The shorts

The shorts appear as they are written, best first, each with:

- the short itself, to play on the page;
- its **Score**, out of 100: how strongly the moment should work alone as a short;
- its length, and where it sits in the original video;
- a title and a line on why this moment was picked;
- a caption for each network you kept, with **Copy** to put it on your clipboard;
- **Download**, **Edit in the Video editor** and **Open in the Assets Library**.

Each short is an MP4 at 1080 × 1920, saved in the same folder as the original video (at the top of the library for a video from your computer), under its name followed by "short 1", "short 2" and so on. **Edit in the Video editor** opens it on the editor's **Social** panel, set to TikTok (or to Instagram when TikTok wasn't kept), for a last touch: trim it, move the captions, add music, pick a cover. See [The Video editor](/help/assets-library#the-video-editor).

A short is a file you made, not a render: it sits in the Assets Library, not in [History](/help/history). To post it, pick it from the library in the [TikTok](/help/tiktok), [Instagram](/help/instagram) or [YouTube](/help/youtube) module, or download it.

## What it costs

The price is shown before you start and charged against your balance as it runs:

- **Listening**: by the minute of sound with a fast way, or free in your browser.
- **Picking the moments** and **framing** them: one charge each for the whole video.

Writing the videos costs nothing. Each saved short counts toward your storage like any upload. Every charge is listed in **Usage**, under **Credits** in the menu.

## When it stops

- **This video has no sound: the autopilot picks moments from what is said, so it cannot work on it.** Pick a video with speech.
- **Almost nothing was heard in this video.** Check the **Language spoken**, or try the other way of listening.
- **No moment of this video fits the length asked.** Pick another **Length of each short**.
- **Stopped. The shorts written so far are below.** You clicked **Stop the autopilot**; what was written is kept.

If the balance runs out, the run stops like any other: top up and start again. See [Troubleshooting](/help/troubleshooting#balance).
