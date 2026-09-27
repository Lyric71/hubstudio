---
title: "Explore the engines"
seoTitle: "Explore the image and video engines | hubStudio Help"
description: "How the Explore gallery works: what each type of engine does, how to search, filter and sort, what the New tag means, and how to read the prices on the cards."
excerpt: "Every image and video engine you can use, in one gallery, with who makes it, what it does and what one run costs."
section: "studio"
order: 2
updated: 2026-09-27
appPaths: ["/explore"]
audience: "Everyone"
related: ["create-an-image", "create-a-video", "account-and-sign-in", "credits-and-payments"]
shots:
  - file: "/Images/help/explore-gallery.webp"
    route: "/explore"
    alt: "The Explore page: the search box, the Image and Video counts, the maker and sort menus, the job chips, and the first engine cards"
    captured: 2026-09-27
  - file: "/Images/help/explore-card.webp"
    route: "/explore"
    clip: "the first engine card"
    alt: "One engine card: the maker and the Image badge on top, the engine name and its description, the job chips, the price per image and Try it"
    captured: 2026-09-27
sources: ["src/pages/explore.astro", "src/lib/explore.ts", "src/lib/image-models.ts", "src/lib/video-models.ts", "src/lib/model-access.ts"]
---

**Explore** is the page hubStudio opens on after you sign in. It shows every image and video engine you can use, one card per engine. Each card says who makes the engine, what it does and what one run costs. Click a card and its studio opens, already set on that engine, ready for your prompt.

![The Explore page: the search box, the Image and Video counts, the maker and sort menus, the job chips, and the first engine cards](/Images/help/explore-gallery.webp)

## What a card shows

- The maker (for example Google, OpenAI or ByteDance) and whether the engine makes an **Image** or a **Video**.
- A **New** tag on engines released or first offered in the last 60 days.
- The engine's name and a short description of what it is good at.
- One chip per type of job it can do (see below).
- The price line, and **Try it** to open the studio.

![One engine card: the maker and the Image badge on top, the engine name and its description, the job chips, the price per image and Try it](/Images/help/explore-card.webp)

## What each type means

| Type | Kind | What it does |
|---|---|---|
| **Text to image** | Image | Renders what you describe. |
| **Image editing** | Image | Changes a picture you upload. |
| **Upscale** | Image | Re-renders a picture larger and sharper. |
| **Text to video** | Video | Films what you describe. |
| **Image to video** | Video | Animates a still: the clip opens on a picture of yours. |
| **Reference to video** | Video | Follows pictures, clips or sound you attach, which the engine imitates rather than shows. |

## Search, filter and sort

The controls sit in the dark band at the top of the page.

- **Search**: type in the box **Search an engine, a maker, a use**. Every word you type must match the engine's name, its maker, its description or one of its types.
- **All**, **Image**, **Video**: show every engine, or one kind only. Each tab shows how many engines it holds. Picking **Image** or **Video** hides the type chips of the other kind.
- **Every maker**: pick one maker to see only its engines.
- The type chips (**Text to image**, **Image editing** and so on): click one or several. An engine shows when it does at least one of the types you picked. Click a chip again to release it.
- **Sort**: **Featured** keeps the gallery's own order, **Price, lowest first** puts the cheapest engines first, and **Newest first** brings the engines tagged **New** to the top.

When nothing matches, the page says **No engine matches. Clear the search or pick another filter.**

## Prices on the cards

Every price is the price you pay, shown before you run anything:

- An image engine shows **from** the price of one image at its lowest setting. Higher qualities, larger resolutions and some shapes cost more; the studio shows the exact price of the setup you pick.
- A video engine shows **from** its price per second of clip at the cheapest setting, and under it the price of a 5 second clip at that rate.
- **Priced after the run** means the engine has no price per second. Its maker bills it by what it actually used, so the exact cost appears on the result once the clip is back.

Every run is paid from your credits, your team's first. See [Credits and payments](/help/credits-and-payments).

## Why an engine may be missing

The gallery lists only the engines you can use. An engine you switched off in **User Settings** > **My models** leaves the gallery and the studio lists. Switch it back on there to see it again. See [Account and sign-in](/help/account-and-sign-in).
