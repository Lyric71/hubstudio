---
title: "Create a video"
seoTitle: "Create a video from text, a picture or references | hubStudio Help"
description: "Render a clip from a prompt, open it on a picture of yours, or feed it references. Choose the length, resolution or mode, shape and sound, read the price per second before the render, and say which client a clip is made for."
excerpt: "The video studio: text to video, image to video and references, priced per second before the render, with every clip saved in your History."
section: "studio"
order: 4
updated: 2026-10-08
appPaths: ["/content/video"]
audience: "Everyone"
related: ["explore", "create-an-image", "history", "assets-library", "validation", "your-team", "skills", "balance-and-payments", "troubleshooting"]
shots:
  - file: "/Images/help/create-a-video-studio.webp"
    route: "/content/video"
    alt: "The video studio: the engine menu with its price per second, the scene prompt on the left and the empty results panel on the right"
    captured: 2026-10-08
sources: ["src/pages/content/video.astro", "src/scripts/videoGenerate.ts", "src/scripts/videoInputs.ts", "src/pages/api/content/video-generate.ts", "src/lib/video-models.ts", "src/lib/media-limits.ts", "src/scripts/promptImprove.ts", "src/components/ClientPick.astro", "src/scripts/clientPick.ts", "src/scripts/validationRequest.ts", "src/scripts/campaignChoice.ts", "src/lib/request-campaign.ts"]
---

The video studio renders short clips. Open it from **Video** in the menu, or from a video card in [Explore](/help/explore), which opens it already set on that engine.

The page has three parts: the **Engine** on top, the form on the left with one tab per render on the right, and **Past renders** underneath.

![The video studio: the engine menu with its price per second, the scene prompt on the left and the empty results panel on the right](/Images/help/create-a-video-studio.webp)

## Choose an engine

The **Engine** list shows each engine with its lowest price per second, after the word **from**. One engine reads **priced per token** instead: see [Engines priced after the run](#engines-priced-after-the-run). The studio opens on the least expensive engine.

Engines are added over time, so your list may hold more than this table.

| Engine | Length | Resolution or mode | Sound | What it can be fed |
|---|---|---|---|---|
| Veo 3.1 Fast (Google) | 4, 6 or 8 seconds | 720p, 1080p, 4K | Optional | Start and last frame, or up to 3 reference pictures |
| Kling 2.6 (KlingAI) | 5 or 10 seconds | Mode Standard or Pro, frame size 720p or 1080p | Pro only | Prompt only |
| Kling 2.5 Turbo (KlingAI) | 5 or 10 seconds | Mode Standard or Pro, frame size 720p or 1080p | Optional | Prompt only |
| Kling 3.0 (KlingAI) | 3 to 15 seconds | Mode Standard or Pro, frame size 720p, 1080p or 4K | Optional | Prompt only |
| Wan 3.0 (Alibaba) | 2 to 30 seconds | 480p, 720p, 1080p | No switch | Start and last frame, or references: up to 10 pictures, 5 clips, 1 sound file |
| Grok Imagine 1.5 (xAI) | 1 to 15 seconds | 480p, 720p, 1080p | Optional | Start image, or references: up to 7 pictures, 1 sound file |
| Seedance 1.0 Pro Fast (ByteDance) | 2 to 12 seconds | 480p, 720p, 1080p | No | Start image |
| Seedance 2.0 (ByteDance) | 4 to 15 seconds | 480p, 720p, 1080p, 4K | Optional | Start and last frame, or references: up to 9 pictures, 3 clips, 1 sound file |
| Seedance 2.5 (ByteDance) | 4 to 30 seconds | 480p, 720p, 1080p | Optional | Start and last frame, or references: up to 30 pictures, 10 clips, 2 sound files |
| MiniMax H3 (MiniMax) | 4 to 15 seconds | 768p, 2K | Optional | Start and last frame, or references: up to 9 pictures, 3 clips, 1 sound file |
| Gemini Omni Flash (Google) | 4, 6 or 8 seconds | 720p | Optional | Prompt only |

## Make a clip, step by step

1. Pick the **Engine**.
2. In **Describe your video**, write the scene as a shot rather than a subject: what moves, where the light comes from, how the camera behaves. Up to 2,500 characters.
3. Optional: click **Improve with AI** to have the prompt rewritten for this engine, this length and this sound choice, by the text model picked next to the button. It works as in the image studio: see [Improve with AI](/help/create-an-image#improve-with-ai).
4. Optional: under **What the render is fed**, attach a start frame or references. See below.
5. Set the options under **How it is rendered**.
6. Check the price next to the button, then click **Generate video**.

## Text to video, image to video, references

Most engines take more than words. Under **What the render is fed**, pick one of the tabs the engine offers:

- **Prompt only**: nothing is attached. This is text to video.
- **Start image**, or **Start and last frame** on the engines that take both: the clip opens on your picture. With a last picture too, the engine renders the movement between the two. This is image to video.
- **References**: pictures, clips and sound files the engine imitates rather than shows as they are, for a character, a product, a style or a voice.

It is one or the other. An engine given a frame ignores the references, so the form makes you choose rather than letting a paid render drop half of what you attached. Switching tabs removes what the other tab held. **Remove all** clears everything.

To attach a frame, use **Choose from the library** (a file already in your Assets Library), **Upload a picture**, or **Paste a link** (the address of a picture already published on a website; it must start with https://). For references, the buttons are **Add pictures**, **Add clips**, **Add sound**, **Upload a file** and **Paste a link**. A counter shows how many pictures, clips and sound files you attached against what the engine takes.

Each engine has its own rules on formats, file size, length and frame size, and the form states them under the block. A file the engine can't use is refused before it is uploaded or paid for, with a sentence that names the rule, for example that a clip runs too long and needs trimming.

Files you upload here are stored like any file of your team, so they appear in the [Assets Library](/help/assets-library) and count toward storage. When a render succeeds, the files it was fed are billed like a download, because the engine fetches them from storage.

On some engines, attaching a reference clip lowers the price of the whole render. The price next to the button follows.

## The options

| Option | What it does |
|---|---|
| **Duration** | The length of the clip, in the steps the engine offers. |
| **Resolution** or **Mode** | Resolution on most engines; on the Kling engines, **Mode**: **Standard** or **Pro: sharper**. Each choice shows the price of the clip at the current length. Hidden when the engine has a single choice. |
| **Frame size** | On the Kling engines only: 720p, 1080p, and 4K on Kling 3.0. It does not change the price. |
| **Shape** | Widescreen (16:9), vertical (9:16), square, landscape, portrait or cinemascope, depending on the engine. On Wan 3.0 and Seedance 2.5, **Adaptive (follows what you attach)** takes the shape of the picture or clip you fed it. |
| **Generate sound** | The engine composes the clip's own audio rather than returning a silent one. Shown only when the engine and the chosen mode offer sound. On some engines, sound costs more per second. |
| **Made for** | The client the clip is made for, when your team works for clients. See [Made for a client](#made-for-a-client). |
| **Campaign** | **None** by default. Pick one of your team's campaigns and everything the page renders joins it. **Manage campaigns**, or **Create a campaign** while your team has none, opens the Campaigns page in a new tab. Shown to creators and admins. See [Campaigns](/help/campaigns#fill-a-campaign-as-you-create). |

## Made for a client

Creators and admins see **Made for** among the options, as in the image studio. Pick one of your team's clients and the clip is saved for that client: their people find it in their [Client space](/help/client-space). Leave **No client: the team only** and it stays with the team alone. Your last choice is kept while the browser tab stays open, and you can change it later on the clip's card in [History](/help/history#made-for-a-client).

## The price per second

Video is priced per second of clip. Next to the button, the total gives the price of the clip at its length: the price per second of your setup times the duration. It follows the engine, the resolution or mode, the sound and the length. What you see is what you pay, and a render is charged only when it succeeds.

### Engines priced after the run

Gemini Omni Flash is a language model that answers in video. Its maker bills it by what it actually used rather than per second, so no price can be shown before the render. The engine list shows **priced per token**, the price line reads **Priced once the clip is back**, and the exact cost appears on the tab and in your usage log when the clip is ready.

## Rendering time

A clip takes a few minutes. Each render opens its own tab on the right, newest first, with **Generating** and the seconds elapsed, then **Ready** or **Failed**. You can start the next render while the previous one runs, and the **Activity** button in the top bar follows your renders from any page.

A render is given about five minutes. A long clip, over 15 seconds, can take longer and fail after being paid for: the form warns you under **Duration**. Wan 3.0 and MiniMax H3 are among the slower engines, so keep their clips short. If a render runs out of time, the tab reads **The render took too long and was abandoned. Try a shorter duration or a faster engine.**

Closing a tab that is still rendering does not cancel the render: it keeps running, is still billed, and lands in History when it finishes.

On a ready tab:

- **Download video** saves the file.
- **Open large** plays the clip full screen.
- **Send for validation** asks a teammate, or one of the client's people, to approve the clip. The clip already saved in History is attached as version 1, and the thread opens in a new tab. See [Validation](/help/validation).
- **Reuse prompt** puts the prompt, the settings and what the render was fed back in the form. Nothing runs until you click the button again.
- **Run again** (or **Retry** on a failed render) starts a new render with the same settings, and bills it again.

## Where results go

Every clip is saved in your [History](/help/history) the moment it is rendered, with its prompt, its engine, its length and its cost. A long or high-resolution clip is too heavy to come back inside the page, so its tab plays it from History a few seconds later.

Under the form, **Past renders** lists your team's most recent clips, newest first, each with its own first frame as a cover. Click one and it opens again as a tab. **Refresh** reads the list again.
