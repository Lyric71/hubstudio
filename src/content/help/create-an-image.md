---
title: "Create an image"
seoTitle: "Create, edit and upscale images | hubStudio Help"
description: "Render a picture from a prompt, edit pictures you upload or upscale one, choose the engine and its options, read the price before the run, use Improve with AI, retouch a result in the Image editor, and say which client a picture is made for."
excerpt: "The image studio: three jobs, a choice of engines, every option priced before the run, and each result saved in your History."
section: "studio"
order: 3
updated: 2026-09-29
appPaths: ["/content/image-generate"]
audience: "Everyone"
related: ["explore", "create-a-video", "history", "assets-library", "validation", "your-team", "skills", "balance-and-payments"]
shots:
  - file: "/Images/help/create-an-image-studio.webp"
    route: "/content/image-generate"
    alt: "The image studio: the Image and Video switch in the dark band, the engine and its price with the three jobs, the prompt box on the left and the empty results panel on the right"
    captured: 2026-09-27
sources: ["src/pages/content/image-generate.astro", "src/scripts/imageGenerate.ts", "src/pages/api/content/image-generate.ts", "src/lib/image-models.ts", "src/scripts/promptImprove.ts", "src/pages/api/content/prompt-improve.ts", "src/lib/prompt-craft.ts", "src/components/ContentNav.astro", "src/components/ClientPick.astro", "src/scripts/clientPick.ts", "src/scripts/validationRequest.ts", "src/scripts/imageEditorLauncher.ts"]
---

The image studio renders pictures from your words, rewrites pictures you upload, or re-renders one larger and sharper. Open it from **Image** in the menu, or from a card in [Explore](/help/explore), which opens it already set on that engine.

The page has three parts: the job and the engine on top, the form on the left with one tab per run on the right, and **Past images** underneath.

![The image studio: the Image and Video switch in the dark band, the engine and its price with the three jobs, the prompt box on the left and the empty results panel on the right](/Images/help/create-an-image-studio.webp)

## The three jobs

Pick the job with the tabs next to the **Engine** list, under **What this run does**. Engines that can't do the job you picked are taken off the list.

| Job | What it does | What it needs |
|---|---|---|
| **Text to image** | Renders a picture from your description. | A prompt. |
| **Edit an image** | Rewrites the pictures you upload following your instruction: change a background, remove an object, restyle a product shot, merge references. | One or more source images and a prompt. |
| **Upscale & restore** | Re-renders one picture larger, sharper and free of compression noise, without changing what is in it. | One source image. The prompt is optional: the box becomes **Anything to add? (optional)**. |

When you change the job, the studio switches to the least expensive engine that can do it. Pick another one in **Engine** if you prefer.

## Choose an engine

Each engine in the **Engine** list shows its price: the exact price when it has a single setting, or **from** its lowest price otherwise. Engines are added over time, so your list may hold more than this table.

| Engine | Jobs | Source images per edit | Quality or resolution | File formats |
|---|---|---|---|---|
| ChatGPT Image 2 (OpenAI) | Text to image, edit | Up to 4 | Low, Medium, High, and 1K, 2K or 4K | PNG, JPG, WebP |
| ChatGPT Image 2.5 Flare (OpenAI) | Text to image, edit | Up to 4 | Low, Medium, High, Extra high, Max, and 1K, 2K or 4K | PNG, JPG, WebP |
| ChatGPT Image 2.5 Sunburst (OpenAI) | Text to image, edit | Up to 4 | Same as Flare | PNG, JPG, WebP |
| Nano Banana 2 (Google) | Text to image, edit, upscale | Up to 4 | 512px, 1K, 2K, 4K | PNG |
| Nano Banana Pro (Google) | Text to image, edit, upscale | Up to 4 | 1K, 2K, 4K | PNG |
| FLUX.1 Kontext Pro (Black Forest Labs) | Text to image, edit | 1 | Standard | PNG, JPG |
| FLUX.1 Kontext Max (Black Forest Labs) | Text to image, edit | 1 | Standard | PNG, JPG |
| Seedream 4.5 (ByteDance) | Text to image, edit, upscale | Up to 4 | 2K, 4K | JPG |
| Seedream 5.0 Pro (ByteDance) | Text to image, edit, upscale | Up to 4 | 2K, 4K | JPG |
| Muse Image 1.0 (Meta) | Text to image, edit | 1 | Standard | PNG |
| Grok Imagine Image 2.0 (xAI) | Text to image | None | Low or Standard, each at 1K or 2K | JPG |
| FLUX Pro 1.1 (Black Forest Labs) | Text to image | None | Standard | PNG, JPG |
| FLUX Pro 1.1 Ultra (Black Forest Labs) | Text to image | None | Standard | PNG, JPG |

In short: the ChatGPT Image engines follow long written briefs and write legible text inside the picture; Nano Banana 2 is fast and dependable on an existing photo; the FLUX.1 Kontext engines change exactly what you name and keep the rest; Seedream renders natively up to 4K and is the pick for a 4K upscale.

## Make a picture, step by step

1. Pick the job, then the **Engine**.
2. For an edit or an upscale, drop your source image in the box **Drop an image here, or click to choose one**. PNG, JPEG or WebP. The hint under the box says how many images this engine takes.
3. Write your prompt in the large box, up to 4,000 characters. For a picture from scratch, describe it the way you would brief a photographer: the subject, the light, the surface, the mood. For an edit, describe the change you want.
4. Optional: click **Improve with AI** to have the prompt rewritten for the engine you picked. See [Improve with AI](#improve-with-ai).
5. Set the options under **How it is rendered**. Only the options this engine offers are shown.
6. Check the price next to the button, then click **Generate image** (or **Edit image**, or **Upscale image**).

Your source images are resized in your browser before they are sent (to 1,536 pixels on the long side at most), which also removes the original file's metadata. They are not kept: an edit or an upscale can only be run again while its uploads are still on the page.

When you upload images, the shape of the result follows the first one. You can change it in **Shape**.

## The options

| Option | What it does |
|---|---|
| **Quality** or **Resolution** | The engine's own quality or output size. Hidden when the engine has a single setting. |
| **Resolution** | On the ChatGPT Image engines, a second choice beside the quality: **1K: standard**, **2K: sharper**, **4K: up to 3840 px**. |
| **Shape** | Square, landscape, widescreen, ultra-wide, portrait or vertical, depending on the engine. The ChatGPT Image engines add **Panorama (3:1)** and **Tall (1:3)**. |
| **Format** | PNG, JPG or WebP, as the engine allows. |
| **Background** | On the ChatGPT Image engines: **Auto: the engine decides**, **Opaque** or **Transparent**. A transparent background needs PNG or WebP, so **Transparent** disappears when you pick JPG. |
| **Images per run** | On the ChatGPT Image engines: from 1 to 10 pictures from one run. |
| **File quality** | On the ChatGPT Image engines, for JPG and WebP: 100% keeps every detail, lower makes a lighter file. |
| **Less strict content filter** | On the ChatGPT Image engines: the provider's own low setting. Its usage policies still apply. |
| **Mask** | On the ChatGPT Image engines, when you edit: an optional PNG whose transparent areas mark what may change in the first image. Everything else stays as it is. The mask must actually contain a transparent area. |
| **Made for** | The client the picture is made for, when your team works for clients. See [Made for a client](#made-for-a-client). |

## Made for a client

Creators and admins see **Made for** among the options. Pick one of your team's clients and every picture of the run is saved for that client: their people find it in their [Client space](/help/client-space). Leave **No client: the team only** and the picture stays with the team alone. The studio keeps your last choice while the browser tab stays open, so a series of pictures for one client needs one pick.

Admins also see **Manage clients**, which opens the Team page in a new tab. You can change a picture's client later on its card in [History](/help/history#made-for-a-client).

## The price line

Under the job and the engine, a line gives the price of one image with this setup. Next to the button, the total repeats it, or gives the price of all of them when you ask for several images. Inside the **Quality** and **Resolution** lists, each option shows its own price for the shape you picked, so you can compare before you choose.

The price follows everything that changes it: the engine, the quality, the resolution, the shape and the number of images. What you see is what you pay. A run is charged only when it succeeds, and when you ask for several images you pay for the images that came back.

## Improve with AI

**Improve with AI** rewrites what you typed into a prompt the chosen engine follows well. It knows the job, the engine and the shape you picked: an edit comes back as an edit instruction, an upscale as a careful restoration note. It never changes your settings; when another engine or setting would suit your brief better, it says so in its notes.

Under the box, hubStudio shows **Prompt rewritten**, the short list of what changed, what the rewrite cost, and **Undo**, which puts your own text back. Once you type in the box again, Undo goes away.

The rewrite is a small paid AI call, charged like any run. The skills you added for images and video shape how it writes. See [Skills](/help/skills).

## Several runs at once

Every run opens its own tab on the right, newest first, and the form empties for the next one. You don't have to wait: start another run while the first renders.

A tab shows where its run stands: **Generating** with the seconds elapsed, **Ready**, or **Failed** with the reason. On a ready tab:

- **Download image** saves the file.
- **Download clean copy** re-encodes the picture in your browser with all metadata and AI-generation markers removed, under a neutral file name.
- **Open large** shows the picture full screen, with **Edit** in its bar.
- **Edit** opens the picture in the Image editor. See [Edit a picture](#edit-a-picture).
- **Send for validation** asks a teammate, or one of the client's people, to approve the picture. The picture already saved in History is attached as version 1, nothing is uploaded again, and the thread opens in a new tab. See [Validation](/help/validation).
- **Reuse prompt** (or **Reuse settings**) puts the run's prompt and settings back in the form. Nothing runs until you click the button again.
- **Run again** (or **Retry** on a failed run) starts a new run with the same settings, and bills it again.

A run that returned several pictures shows them side by side, each with its own **Download image**, **Download clean copy**, **Edit** and **Send for validation**.

Close a tab with its ✕. Closing a tab that is still rendering does not cancel the render: it keeps running and is still billed. **Close all** closes every finished tab at once. Your tabs come back when you reload the page, for a day.

## Edit a picture

The engines render what you describe; the Image editor handles the finishing touches that need no new run. Click **Edit** on a ready picture to crop it to the format of a network (square, portrait 4:5, story 9:16, wide, link), adjust its light and colors, apply a look, write a caption, draw an arrow or a box, or place your logo in a corner.

Editing is free and happens in your browser. When you save, the edited copy goes into the [Assets Library](/help/assets-library), next to the render, which stays as it was. You can also download the edited picture without keeping it. See [The Image editor](/help/assets-library#the-image-editor) for every panel.

To change what is in the picture itself (a background, an object, a style), use the **Edit an image** job instead: that is a new, paid run.

## Where results go

Every picture is saved in your [History](/help/history) the moment it is rendered, with its prompt, its engine and its cost, one file per picture. Nothing is lost when you close the page. A 4K picture is too heavy to come back inside the page, so its tab shows it from History a few seconds later than a small one.

Under the form, **Past images** lists your team's most recent pictures, newest first. Click one and it opens again as a tab. **Refresh** reads the list again.

To see everything, open **History** from the menu or from the **History** button at the top right of the studio.
