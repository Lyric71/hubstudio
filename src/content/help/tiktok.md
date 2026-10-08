---
title: "TikTok"
seoTitle: "Make, schedule and publish TikTok videos | hubStudio Help"
description: "The TikTok module: connect your TikTok account, start from the video, edit it for TikTok in the Video editor, write its caption, brief a video in depth, say which client it is for, send it for approval, then schedule it or publish it."
excerpt: "Start from the video, add a caption with AI or by hand, or brief a video in depth, and publish it on your TikTok account, now or on schedule."
section: "social"
order: 12
updated: 2026-10-08
appPaths: ["/social/tiktok/posts", "/social/tiktok/brief", "/my-connections"]
audience: "Creators and admins; viewers read"
related: ["linkedin", "instagram", "facebook", "youtube", "x", "validation", "create-a-video", "choosing-a-model", "history", "assets-library"]
shots:
  - file: "/Images/help/tiktok-video.webp"
    route: "/social/tiktok/posts"
    alt: "The TikTok module on a new post: the Posts and Brief tabs, the band with the three step tiles, and the video step with Render with AI, Pick from the library and Upload from your computer, with the Skills and material strip unfolded beside it"
    captured: 2026-10-08
  - file: "/Images/help/tiktok-brief.webp"
    route: "/social/tiktok/brief"
    alt: "The Brief tab of TikTok: Title of this piece, Language, The brief, Post type, Video length, Caption style, Call to action, Audience, Register, Must appear and Must not appear"
    captured: 2026-09-29
sources: ["src/lib/app.ts", "src/components/SocialNav.astro", "src/components/panels/SocialContentPanel.astro", "src/components/panels/TikTokBriefPanel.astro", "src/pages/social/tiktok/brief.astro", "src/scripts/socialContent.ts", "src/scripts/selectionRewrite.ts", "src/scripts/clientPick.ts", "src/pages/api/social-content/[id].ts", "src/lib/social-content-db.ts", "src/lib/social-format-skills.ts", "src/lib/social/limits.ts", "src/lib/social/live.ts", "src/lib/social/scheduler.ts", "src/lib/social/publications.ts", "src/pages/my-connections.astro", "src/scripts/socialAccounts.ts", "src/lib/own-work.ts", "src/lib/team-clients.ts", "src/lib/tiktok-constraints.ts", "src/pages/api/social-content/draft.ts", "src/lib/social/publishers.ts", "src/scripts/videoEditorLauncher.ts", "src/scripts/videoEditor.ts", "src/scripts/videoEditorNetworks.ts", "src/pages/files/tools/shorts.astro", "src/pages/api/social-content/index.ts", "src/lib/brief-sources.ts"]
---

**TikTok** in the menu holds your TikTok videos, from the first clip to the published post. On TikTok a post is a video and the words are its caption: you render, pick or upload the clip, then write its caption with AI or by hand, and publish it on your account, now or at a time you pick. Or you post it yourself on TikTok.

## Before you start

**To publish from hubStudio, connect your account.** Social accounts are personal: you connect your own TikTok on **My Connections**, in the menu under your picture. Nobody else can post with it, and you can't post with a teammate's. See [Account and sign-in](/help/account-and-sign-in#my-connections-your-social-accounts).

Making a post, and publishing it yourself on TikTok, need no connected account.

**Who does what.** Creators and admins make, render and publish. Viewers can open the module and read the posts they can see. Client logins don't see the module at all: a post reaches a client through [Made for](#made-for-a-client).

## Open the module

Click **TikTok** in the menu. It has two tabs: **Posts**, where every video is made and published, and **Brief**, to brief one video in depth (see [Brief a video in depth](#brief-a-video-in-depth)).

On **Posts**, the dark band at the top holds:

- the post list button, which shows the open post's title (or **All posts**) and how many posts there are;
- **How this page works**, a short note about TikTok;
- **New post**, which clears the form for a fresh post;
- the three steps of the open post as tiles: **01 The video**, **02 The caption** and **03 Publishing**. Each tile shows its state (done, in progress, to do or not needed); click it to open that step. There is no brief step: what the video shows is the brief.

Click the post list button to open every post in a panel over the page. Type in the search box to match words of the title or the caption, a status or a date, or keep the posts written between two days. Click a row to open that post.

![The TikTok module on a new post: the Posts and Brief tabs, the band with the three step tiles, and the video step with Render with AI, Pick from the library and Upload from your computer, with the Skills and material strip unfolded beside it](/Images/help/tiktok-video.webp)

## Who sees a post

A post belongs to the person who made it. Until you share it, only you see it. On the band, the line under the title says who can see the post; click **Who sees it**, pick **Only me** or **Everyone in the team**, then **Save**.

A post made for a client is also shown to that client's people, whoever it is shared with inside the team. See [Made for a client](#made-for-a-client).

## 01 The video

Pick one of three ways in:

- **Render with AI**. Write the prompt; **Improve with AI** rewrites it for you, with the text model picked next to it (see [Choosing a model](/help/choosing-a-model)). Pick the **Engine**, which opens on the least expensive one, the **Aspect**, the length, the resolution and the sound. Then click **Generate the clip** under the prompt, or the **Render with AI** button above. The price is on both buttons before you press.
- **Pick from the library**: a clip already in your [Assets Library](/help/assets-library).
- **Upload from your computer**. The file is saved in your Assets Library and put on the post.

**Skills and material.** The strip at the right edge, **Skills and material**, unfolds two cards. Fill them before you render, pick or upload:

- the material to write from: **Files** (PDF or plain text, read once and not stored), **Context folder from the Assets Library** (a folder of the library whose text documents are read, or one of your [campaigns](/help/campaigns), read with its brief), **Pages to read** (web addresses, one per line) and **Keywords to target**;
- **Skills**, where **TikTok caption format** is already picked. Add your own skills or unpick it. See [Skills](/help/skills).

When the post is created, the material is read once and kept with the post, and so are the skills: the caption, in step 02, is written from them. The strip then empties itself for the next post, and the folder stays picked.

The post is created the moment you render, pick or upload: until then nothing exists and nothing is billed. A clip takes a few minutes. The run shows in **Activity**, and the post keeps the result if you leave. **Render again** makes a new one. Once the post has a clip, the step is split in two: the ways in and the render settings on the left, the clip on the post on the right, in sight while the next render runs.

**Versions of the clip.** Each render, edit, pick or upload that changes the clip is kept as a version, v1, v2 and so on, with its day and time. Once there are two, **Picture versions** lists them under the clip, and **On the post** marks the one the post carries. **Use this version** puts an earlier clip back on the post. The **×** on a version takes it off the list, and its file stays in the Assets Library. The version on the post can't be taken off the list.

**Edit the clip.** Point at the clip of the post and click the pencil under the **×** (its tooltip starts **Edit this clip**), or click **Edit in the video editor** under it. The clip opens in the [Video editor](/help/assets-library#the-video-editor), on its **Social** panel set to a TikTok **Video**: click **Apply the format** for the 9:16 frame, see in red where TikTok's caption, sound and buttons cover the video, and read the checks, each with a button to fix what it found. You can also trim and split it, change its speed, add texts, captions timed word by word and music, and pick its cover. Then click **Save** and **Save and use it in the post**: the edited video takes the place of the clip in the post, as a new version, and the original stays in the versions and in the Assets Library. Editing is free; only the fast captions are billed, at the price shown before you start. See [Edit the clip of a post](/help/assets-library#edit-the-clip-of-a-post).

**Start from a long video.** An interview, a talk or a podcast can become several TikToks at once: [Shorts autopilot](/help/shorts-autopilot) picks its best moments, frames them at 9:16, captions them and saves each one in the Assets Library, with a TikTok caption to copy. Then pick one from the library here.

TikTok takes one MP4, MOV or WEBM clip of 3 seconds to 10 minutes. Your account may allow less: when a clip runs longer than your account can post, the publishing step says so.

## 02 The caption

The caption step writes the words for the video. While the caption is empty, it opens on the **Have AI write the caption** box:

1. Check the model and the skills at the top (see [Choosing a model](/help/choosing-a-model)). The skills are the ones picked in **Skills and material** when the post was started, **TikTok caption format** by default; it carries TikTok's caption rules.
2. Under **Your brief for the AI** (optional), say anything the caption has to carry: an offer, a date, a call to action. Left empty, the caption is written from what you said the clip shows.
3. Click **Write it with AI**. The caption lands in the editor below, ready to edit. The line beside the button says what it is written from: what you said the clip shows and your brief, and, when the post has some, the material kept with it.

Or skip the box and type the caption straight in the editor. See [Skills](/help/skills).

With **TikTok caption format** picked, the caption keeps to TikTok's own rules: at most 2,200 characters (100 to 300 is the target), the hook and the words people would search for in the first 70 characters, one paragraph in the first person, 3 to 5 specific hashtags at the end (TikTok takes 5 at most), an open question or an invitation to save or share to close, and no link. It never asks for likes or follows, which TikTok keeps off the For You feed. A caption that breaks a rule is rewritten once by the AI, then trimmed if it's still too long or carries more than 5 hashtags.

Whatever sits in the editor is what goes out. TikTok keeps up to 2,200 characters, and a counter under the box shows how much room is left.

- **It saves itself** about a second after you stop typing, when you leave the field, and when you close the tab. A line next to **Save** says **Saving…**, **Saved** or **Not saved:** with the reason.
- **Add an emoticon** opens an emoji picker.
- **Versions.** Every version of the caption is kept. Type what to change under **Another version** ("shorter", "end on a question"), pick a model, and click **Write another version**. Once there are two or more, click a version to load it, **Use this version** to make it the one that goes out, or **Delete** to drop it.
- **Rewrite one passage.** Highlight a passage and click **Rewrite with AI** beside it. Pick a quick edit or type your own instruction; only that passage is rewritten, as a new version.

## Brief a video in depth

The **Brief** tab is the long way to start a TikTok post. Under **Brief a TikTok post**:

![The Brief tab of TikTok: Title of this piece, Language, The brief, Post type, Video length, Caption style, Call to action, Audience, Register, Must appear and Must not appear](/Images/help/tiktok-brief.webp)

1. Give it a **Title of this piece**, pick the **Language**, and write **The brief** the way you'd brief a creator: the angle, who it is for, what the viewer should do or feel.
2. Pick the **Video length** and the **Caption style**: **Short and punchy (150 to 300 characters)** or **TikTok SEO (keyword-rich, 300 to 600 characters)**.
3. Add what helps, all optional: **Call to action**, **Audience**, **Register**, **Must appear** and **Must not appear**.
4. Under **Skills and material**, add **Files**, **Pages to read** and **Keywords to target**. **TikTok caption format** is already picked.
5. Click **Draft the post**.

You get the whole package: the hook, a timed script, the on-screen text and the caption with its hashtags, kept inside TikTok's rules (the caption rules above, a hook in the first 3 seconds of the script, a script that fits the length, on-screen text clear of TikTok's buttons). The result is saved as a draft in **Posts**, where you add the video.

## Made for a client

When your team works for clients, creators and admins see **Made for** on the band of an open post. Pick the client the post is for: it is saved at once, and the post's video follows. That client's people then find the post in their [Client space](/help/client-space), where they see whether it is planned or published. Pick **No client: the team only** to take it back.

The line appears once your team has at least one client. See [Your team](/help/your-team#clients).

## Send it for approval

On the publishing step, the phone shows the post the way TikTok shows it: the clip full screen, your account name, the caption and the sound line over the bottom of it, and the likes, comments, saves and shares on the right edge. Tap the clip to play it with its sound, tap again to pause, and use the bar along the bottom to jump to any moment. **Play** under the phone does the same, and reads **Pause** while the clip plays. The caption on the phone takes typing, and the labels TikTok adds (**Paid partnership**, **Promotional content**, **Creator labeled as AI-generated**) show under it as you choose them.

The bar under the phone preview holds **Send for validation**. Name a teammate, or one of the client's people for a post made for a client. See [Validation](/help/validation).

While it waits, the post is locked: the band reads **Waiting for validation: this post is locked until the validator decides.** Nothing on it can be changed, deleted or published until they decide. Approved, it can go out; sent back, it returns to draft for another round.

## Publish automatically

Open **Publishing** and stay on the **Publish automatically** tab. hubStudio posts through TikTok itself, in the name of the account you tick. TikTok lets no app edit or remove a video once it's out, so check the preview first.

1. Under **Who it goes out as**, tick your account. TikTok takes one account at a time, and nothing is ticked when the step opens. Without a connected TikTok account, the tab offers a button that opens My Connections in a new tab.
2. Open **Posting to TikTok**. Its choices come from TikTok itself, for the account you ticked:
   - **Who can see this post**: **Everyone**, **Friends**, **Followers** or **Only me**, as your account allows. Nothing is picked for you.
   - **Allow people to**: **Comment**, **Duet** and **Stitch**. A choice turned off in your own TikTok settings is grayed out.
   - **Disclose post content**, when the video promotes a brand, a product or a service. Then tick **Your brand** (you promote yourself or your own business), **Branded content** (you promote another brand or a third party), or both. Branded content can't be private, so **Only me** is off while it is ticked.
   - **AI-generated content** puts TikTok's "Creator labeled as AI-generated" label on the video. It's ticked already when the clip was rendered with AI in hubStudio, and unticked for a clip you uploaded or picked. TikTok asks creators to label realistic AI-made scenes and people.
3. Click **Publish now** to send it this second. To send it later, click **Schedule**: a **When it goes out** block opens. Pick a day and a time, or a chip: **In an hour**, **Tonight, 18:00**, **Tomorrow, 09:00** or **Monday, 09:00**. Then click **Schedule it**.

The buttons stay locked until an account is ticked: the badge next to the tabs reads **Off until you tick one**, then **Ready when you are**. The time is read in your own time zone, set in **User Settings**. A scheduled time must be at least a couple of minutes ahead and no more than a year away. TikTok itself caps how many posts an account sends a day, about 15.

hubStudio looks at the queue every five minutes, so a post set for 09:00 goes out between 09:00 and 09:05. It checks the post against TikTok's limits again before sending.

## Publish manually

The **Publish manually** tab needs nothing connected.

1. Click **Publish interactively**.
2. TikTok's upload page opens in a new tab, with the caption on your clipboard.
3. Follow **How it goes, press by press**: drag in the clip you downloaded, paste the caption, and post it there.

If the caption arrives cut short, click **Copy the text** and paste it again. **What you give up by posting it yourself** lists the trade-offs: you can't pick an hour, and hubStudio is never told the post went out. Once it's live, set the status yourself under **Where it stands**: pick published, type the address in **Published URL (once live)**, and click **Save**.

## Follow the queue

Everything you schedule or send lands under **In the queue**, one row per account:

| Status | What it means | What you can do |
|---|---|---|
| Scheduled | Waiting for its time | **Cancel** |
| Sending now | Going out | Wait |
| Published | Live, with **View live** | Edit or delete it on TikTok itself |
| Did not go out | Refused, or waiting to retry | **Try again now**, **Cancel** |

A temporary problem on TikTok's side is retried by itself, three attempts in all. A content problem (a clip too long, a wrong file type) or an account that needs reconnecting is not retried, and the person who queued the post receives an email saying what TikTok said. An account that stopped working shows **Reconnect** on its tile and can't be ticked: reconnect it on My Connections.

## Take a post to other networks

**Re-purpose for other networks**, at the foot of the publishing step, turns this post into posts for [LinkedIn](/help/linkedin), [Instagram](/help/instagram), [Facebook](/help/facebook), [YouTube](/help/youtube) or [X](/help/x). Tick the networks, then pick a way:

- **Manually**: each network opens in its own tab with this post as the brief. Nothing is drafted until you press Draft there.
- **Draft at once**: hubStudio drafts each network's post, and opens each draft in its own tab. Each draft is billed like one draft with AI on that network.
- **Publish automatically**: the same drafts, then sent on the accounts you tick for each network. YouTube can't be ticked there: you publish on YouTube yourself.

## What it costs

Each paid step shows its price where you work: on the button before a render, and on the status line after a draft, a new version or a rewrite. These are paid: **Write it with AI**, **Draft the post** on the Brief tab, **Write another version**, a rewritten passage, **Improve with AI**, and each clip rendered (per second).

These cost nothing: writing the caption yourself, typing in the editor, editing the clip in the Video editor (apart from the fast captions), and publishing on TikTok, through hubStudio or by hand. Files you upload are kept in the Assets Library and count toward storage. Every charge against your balance is listed in **Usage**, under **Credits** in the menu.

## Delete a post

**Delete** on the band removes the post from hubStudio for good, after you confirm. A post already out stays on TikTok. Admins can delete any post. You can delete your own post while it is still **Only me**. Nobody can delete a post while it waits for validation.
