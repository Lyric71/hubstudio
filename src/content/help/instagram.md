---
title: "Instagram"
seoTitle: "Make, schedule and publish Instagram posts and Reels | hubStudio Help"
description: "The Instagram module: connect your professional account, start from the picture or the video, write its caption, say which client it is for, send it for approval, then schedule it or publish it as a feed post, a Story or a Reel."
excerpt: "Start from the visual, add a caption with AI or by hand, and publish a feed post, a carousel, a Story or a Reel, now or on schedule."
section: "social"
order: 10
updated: 2026-10-08
appPaths: ["/social/instagram/posts", "/my-connections"]
audience: "Creators and admins; viewers read"
related: ["linkedin", "facebook", "tiktok", "x", "validation", "create-an-image", "create-a-video", "choosing-a-model", "history", "assets-library"]
shots:
  - file: "/Images/help/instagram-picture.webp"
    route: "/social/instagram/posts"
    alt: "The Instagram module on a new post: the band with the three step tiles, and the picture or the video step with One image, Carousel and Reel, Render with AI, Pick from the library and Upload from your computer, with the Skills and material strip unfolded beside it"
    captured: 2026-10-08
  - file: "/Images/help/instagram-picture-edit.webp"
    route: "/social/instagram/posts"
    clip: "the picture step of a post"
    alt: "The picture step of an Instagram post: Render again, Add from the library and Upload from your computer on the left, the post's picture on the right with the pencil under the cross"
    captured: 2026-10-08
  - file: "/Images/help/instagram-picture-versions.webp"
    route: "/social/instagram/posts"
    clip: "the right half of the picture step"
    alt: "The right half of the picture step: the post's picture, Edit in the image editor, then Picture versions with v2 and its Use this version button, and v1 marked On the post"
    captured: 2026-10-08
sources: ["src/lib/app.ts", "src/components/panels/SocialContentPanel.astro", "src/components/panels/SocialFormatBlock.astro", "src/scripts/socialContent.ts", "src/scripts/imageEditorLauncher.ts", "src/scripts/imageEditorNetworks.ts", "src/scripts/videoEditorLauncher.ts", "src/scripts/videoEditorNetworks.ts", "src/scripts/selectionRewrite.ts", "src/scripts/clientPick.ts", "src/pages/api/social-content/[id].ts", "src/lib/social-content-db.ts", "src/lib/social/limits.ts", "src/lib/social/live.ts", "src/lib/social/scheduler.ts", "src/lib/social/publications.ts", "src/pages/my-connections.astro", "src/scripts/socialAccounts.ts", "src/lib/own-work.ts", "src/lib/team-clients.ts", "src/pages/api/social-content/index.ts", "src/lib/brief-sources.ts"]
---

**Instagram** in the menu holds your Instagram posts, from the first picture to the published post. On Instagram the visual comes first: you render, pick or upload a picture, a carousel or a clip, then write its caption with AI or by hand, and publish it on your account, now or at a time you pick. Or you post it yourself in Instagram.

## Before you start

**To publish from hubStudio, connect your account.** It must be an Instagram professional account (Business or Creator). Social accounts are personal: you connect your own on **My Connections**, in the menu under your picture. Nobody else can post with it, and you can't post with a teammate's. See [Account and sign-in](/help/account-and-sign-in#my-connections-your-social-accounts).

Making a post, and publishing it yourself in Instagram, need no connected account.

**Who does what.** Creators and admins make, render and publish. Viewers can open the module and read the posts they can see. Client logins don't see the module at all: a post reaches a client through [Made for](#made-for-a-client).

## Open the module

Click **Instagram** in the menu. The dark band at the top holds:

- the post list button, which shows the open post's title (or **All posts**) and how many posts there are;
- **How this page works**, a short note about Instagram;
- **New post**, which clears the form for a fresh post;
- the three steps of the open post as tiles: **01 The picture or the video**, **02 The caption** and **03 Publishing**. Each tile shows its state (done, in progress, to do or not needed); click it to open that step. There is no brief step: what the picture shows is the brief.

Click the post list button to open every post in a panel over the page. Type in the search box to match words of the title or the caption, a status or a date, or keep the posts written between two days. Click a row to open that post.

![The Instagram module on a new post: the band with the three step tiles, and the picture or the video step with One image, Carousel and Reel, Render with AI, Pick from the library and Upload from your computer, with the Skills and material strip unfolded beside it](/Images/help/instagram-picture.webp)

## Who sees a post

A post belongs to the person who made it. Until you share it, only you see it. On the band, the line under the title says who can see the post; click **Who sees it**, pick **Only me** or **Everyone in the team**, then **Save**.

A post made for a client is also shown to that client's people, whoever it is shared with inside the team. See [Made for a client](#made-for-a-client).

## 01 The picture or the video

Pick the shape first: **One image**, **Carousel** (2 to 8 slides when rendered) or **Reel**. Instagram never publishes a caption alone, so there is no text only post. Then pick one of three ways in:

- **Render with AI**. Write the prompt; **Improve with AI** rewrites it for you, with the text model picked next to it (see [Choosing a model](/help/choosing-a-model)). Pick the **Engine**, which opens on the least expensive one, and the **Aspect**, and for a Reel the length, resolution and sound. Then click **Generate the image** (or **Generate the carousel**, **Generate the clip**) under the prompt, or the **Render with AI** button above. The price is on both buttons before you press.
- **Pick from the library**: a picture or a clip already in your [Assets Library](/help/assets-library).
- **Upload from your computer**. The file is saved in your Assets Library and put on the post.

**Skills and material.** The strip at the right edge, **Skills and material**, unfolds two cards. Fill them before you render, pick or upload:

- the material to write from: **Files** (PDF or plain text, read once and not stored), **Context folder from the Assets Library** (a folder of the library whose text documents are read, or one of your [campaigns](/help/campaigns), read with its brief), **Pages to read** (web addresses, one per line) and **Keywords to target**;
- **Skills**, where **Instagram caption format** is already picked. Add your own skills or unpick it. See [Skills](/help/skills).

When the post is created, the material is read once and kept with the post, and so are the skills: the caption, in step 02, is written from them. The strip then empties itself for the next post, and the folder stays picked.

The post is created the moment you render, pick or upload: until then nothing exists and nothing is billed. A picture takes a minute or two, a clip a few minutes. The run shows in **Activity**, and the post keeps the result if you leave. The **×** on a picture takes it off the post; it stays in the Assets Library. **Render again** makes a new one. Once the post has a picture or a clip, the step is split in two: the ways in and the render settings on the left, what is on the post on the right, in sight while the next render runs.

**Picture versions.** Each render, edit, pick or upload that changes the post's pictures or its clip is kept as a version, v1, v2 and so on, with its day and time. Once there are two, **Picture versions** lists them under the pictures, and **On the post** marks the one the post carries. **Use this version** puts an earlier set back on the post. The **×** on a version takes it off the list, and its files stay in the Assets Library. The version on the post can't be taken off the list.

![The right half of the picture step: the post's picture, Edit in the image editor, then Picture versions with v2 and its Use this version button, and v1 marked On the post](/Images/help/instagram-picture-versions.webp)

**Edit a picture.** Point at a picture of the post and click the pencil under the **×**, or click **Edit in the image editor** under the pictures (**Edit slide 1 in the image editor** on a carousel, whose every slide keeps its own pencil). The picture opens in the Image editor, on its **Social** panel set to Instagram: pick **Feed portrait**, **Square**, **Landscape**, **Story** or another placement, crop it or fit it whole over a blurred background, see what Instagram covers and how the profile grid shows it, then click **Apply the format**. You can also adjust its light and colors, write a caption, draw an arrow, or place your logo in a corner. Then click **Save** and **Save and use it in the post**: the edited copy takes the place of the picture in the post, in the same slide, as a new version, and the original stays in the versions and in the Assets Library. Editing is free. See [Edit a picture of a post](/help/assets-library#edit-a-picture-of-a-post).

![The picture step of an Instagram post: Render again, Add from the library and Upload from your computer on the left, the post's picture on the right with the pencil under the cross](/Images/help/instagram-picture-edit.webp)

**Edit the clip of a Reel.** The pencil on the clip, or **Edit in the video editor** under it, opens it in the [Video editor](/help/assets-library#the-video-editor), on its **Social** panel set to an Instagram **Reel**: pick **Reel**, **Story**, **Feed portrait** or **Square**, click **Apply the format**, see in red what Instagram covers and how the profile grid shows the cover, and read the checks. You can also trim and split it, change its speed, add texts, captions timed word by word and music, and pick its cover. **Save and use it in the post** puts the edited video in place of the clip, as a new version; the original stays in the versions and in the Assets Library. See [Edit the clip of a post](/help/assets-library#edit-the-clip-of-a-post).

**Reels from a long video.** [Shorts autopilot](/help/shorts-autopilot) cuts an interview, a talk or a podcast into vertical shorts by itself, captioned, with an Instagram caption for each one. They land in the Assets Library, ready to pick here.

You don't need to prepare the files: every picture is turned into a JPEG Instagram accepts on the way out, whatever you picked. A Reel is an MP4 or MOV clip of 3 seconds to 15 minutes.

## 02 The caption

The caption step writes the words for the visual. While the caption is empty, it opens on the **Have AI write the caption** box: check the model (see [Choosing a model](/help/choosing-a-model)) and the skills at the top, say under **Your brief for the AI** (optional) anything the caption has to carry (an offer, a date, a call to action), then click **Write it with AI**. Left empty, the brief lets the caption be written from what you said the picture shows. Or just type the caption in the editor. The skills are the ones picked in **Skills and material** when the post was started, **Instagram caption format** by default; it carries Instagram's posting rules. See [Skills](/help/skills).

The line beside **Write it with AI** says what the caption is written from: what you said the picture shows and your brief, and, when the post has some, the material kept with it. Its facts, figures and names come from that material. A file or a page that couldn't be read is named under **Could not read**.

Whatever sits in the editor is what goes out. Instagram keeps up to 2,200 characters, 30 hashtags and 20 @ tags, and a counter under the box shows how much room is left.

- **It saves itself** about a second after you stop typing, when you leave the field, and when you close the tab. A line next to **Save** says **Saving…**, **Saved** or **Not saved:** with the reason.
- **Add an emoticon** opens an emoji picker.
- **Versions.** Every version of the caption is kept. Type what to change under **Another version** ("shorter", "end on a question"), pick a model, and click **Write another version**. Once there are two or more, click a version to load it, **Use this version** to make it the one that goes out, or **Delete** to drop it.
- **Rewrite one passage.** Highlight a passage and click **Rewrite with AI** beside it. Pick a quick edit or type your own instruction; only that passage is rewritten, as a new version.

## Made for a client

When your team works for clients, creators and admins see **Made for** on the band of an open post. Pick the client the post is for: it is saved at once, and the post's pictures and video follow. That client's people then find the post, with its pictures, in their [Client space](/help/client-space), where they see whether it is planned or published. Pick **No client: the team only** to take it back.

The line appears once your team has at least one client. See [Your team](/help/your-team#clients).

## Send it for approval

On the publishing step, the bar under the phone preview holds **Send for validation**. Name a teammate, or one of the client's people for a post made for a client. See [Validation](/help/validation).

While it waits, the post is locked: the band reads **Waiting for validation: this post is locked until the validator decides.** Nothing on it can be changed, deleted or published until they decide. Approved, it can go out; sent back, it returns to draft for another round.

## Publish automatically

Open **Publishing** and stay on the **Publish automatically** tab. hubStudio posts through Instagram itself, in the name of the account you tick.

1. Under **Who it goes out as**, tick one or more of your accounts. Nothing is ticked when the step opens. Without a connected Instagram account, the tab offers a button that opens My Connections in a new tab.
2. Open **What Instagram asks for** and pick the **Shape**: **Feed post** or **Story** for pictures. A video always goes out as a **Reel**. A Story clip is shorter: 60 seconds at most.
3. Click **Publish now** to send it this second. To send it later, click **Schedule**: a **When it goes out** block opens. Pick a day and a time, or a chip: **In an hour**, **Tonight, 18:00**, **Tomorrow, 09:00** or **Monday, 09:00**. Then click **Schedule it**.

The buttons stay locked until an account is ticked: the badge next to the tabs reads **Off until you tick one**, then **Ready when you are**. The time is read in your own time zone, set in **User Settings**. A scheduled time must be at least a couple of minutes ahead and no more than a year away, and one post can go to up to 20 accounts. Instagram itself allows 100 posts a day per account, a carousel counting as one.

hubStudio looks at the queue every five minutes, so a post set for 09:00 goes out between 09:00 and 09:05. It checks the post against Instagram's limits again before sending.

## Publish manually

The **Publish manually** tab needs nothing connected.

1. Click **Publish interactively**.
2. Instagram opens in a new tab, with the caption on your clipboard.
3. Follow **How it goes, press by press**: drag in the picture or the clip you downloaded, paste the caption, and post it there.

If the caption arrives cut short, click **Copy the text** and paste it again. **What you give up by posting it yourself** lists the trade-offs: you can't pick an hour, and hubStudio is never told the post went out. Once it's live, set the status yourself under **Where it stands**: pick published, type the address in **Published URL (once live)**, and click **Save**.

## Follow the queue

Everything you schedule or send lands under **In the queue**, one row per account:

| Status | What it means | What you can do |
|---|---|---|
| Scheduled | Waiting for its time | **Cancel** |
| Sending now | Going out | Wait |
| Published | Live, with **View live** | Edit or delete it in Instagram itself |
| Did not go out | Refused, or waiting to retry | **Try again now**, **Cancel** |

A temporary problem on Instagram's side is retried by itself, three attempts in all. A content problem (too long, a clip too short) or an account that needs reconnecting is not retried, and the person who queued the post receives an email saying what Instagram said. An account that stopped working shows **Reconnect** on its tile and can't be ticked: reconnect it on My Connections.

## Take a post to other networks

**Re-purpose for other networks**, at the foot of the publishing step, turns this post into posts for [LinkedIn](/help/linkedin), [Facebook](/help/facebook), [TikTok](/help/tiktok), [YouTube](/help/youtube) or [X](/help/x). Tick the networks, then pick a way:

- **Manually**: each network opens in its own tab with this post as the brief. Nothing is drafted until you press Draft there.
- **Draft at once**: hubStudio drafts each network's post, and opens each draft in its own tab. Each draft is billed like one draft with AI on that network.
- **Publish automatically**: the same drafts, then sent on the accounts you tick for each network. YouTube can't be ticked there: you publish on YouTube yourself.

A network that can't take the post is grayed out: TikTok and YouTube need a video.

## What it costs

Each paid step shows its price where you work: on the button before a render, and on the status line after a draft, a new version or a rewrite. These are paid: **Write it with AI**, **Write another version**, a rewritten passage, **Improve with AI**, and each render (per picture, or per second of clip).

These cost nothing: writing the caption yourself, typing in the editor, and publishing on Instagram, through hubStudio or by hand. Files you upload are kept in the Assets Library and count toward storage. Editing a picture in the Image editor, or a clip in the Video editor, is free; only the Video editor's fast captions are billed, at the price shown before you start. Every charge against your balance is listed in **Usage**, under **Credits** in the menu.

## Delete a post

**Delete** on the band removes the post from hubStudio for good, after you confirm. A post already out stays on Instagram. Admins can delete any post. You can delete your own post while it is still **Only me**. Nobody can delete a post while it waits for validation.
