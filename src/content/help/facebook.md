---
title: "Facebook"
seoTitle: "Write, schedule and publish Facebook page posts | hubStudio Help"
description: "The Facebook module: connect your Facebook page, brief and draft a post, add its pictures or its video, say which client it is for, send it for approval, then schedule it or publish it."
excerpt: "Draft a Facebook page post with AI or by hand, give it pictures or a video, and publish it on your page, now or on schedule."
section: "social"
order: 10
updated: 2026-09-28
appPaths: ["/social/facebook/posts", "/my-connections"]
audience: "Creators and admins; viewers read"
related: ["linkedin", "instagram", "tiktok", "x", "validation", "account-and-sign-in", "skills", "history", "assets-library"]
shots:
  - file: "/Images/help/facebook-brief.webp"
    route: "/social/facebook/posts"
    alt: "The Facebook module on a new post: the band with the four step tiles, and the brief with Text only, + Image, + Carousel and Video, Emoticons, Language, Model, Draft with AI and Write it myself"
    captured: 2026-09-27
sources: ["src/lib/app.ts", "src/components/panels/SocialContentPanel.astro", "src/components/panels/SocialFormatBlock.astro", "src/scripts/socialContent.ts", "src/scripts/imageEditorLauncher.ts", "src/scripts/selectionRewrite.ts", "src/scripts/clientPick.ts", "src/pages/api/social-content/[id].ts", "src/lib/social-content-db.ts", "src/lib/social/limits.ts", "src/lib/social/live.ts", "src/lib/social/scheduler.ts", "src/lib/social/publications.ts", "src/pages/my-connections.astro", "src/scripts/socialAccounts.ts", "src/lib/own-work.ts", "src/lib/team-clients.ts"]
---

**Facebook** in the menu holds the posts for your Facebook page, from the first draft to the published post. You write a post with AI or by hand, give it pictures or a video, and publish it on your page, now or at a time you pick. Or you post it yourself on Facebook.

## Before you start

**To publish from hubStudio, connect your page.** hubStudio publishes on a Facebook page, not on a personal profile. Social accounts are personal: you connect your own on **My Connections**, in the menu under your picture. Nobody else can post with it, and you can't post with a teammate's. See [Account and sign-in](/help/account-and-sign-in#my-connections-your-social-accounts).

Writing a post, and publishing it yourself on Facebook, need no connected page.

**Who does what.** Creators and admins write, render and publish. Viewers can open the module and read the posts they can see. Client logins don't see the module at all: a post reaches a client through [Made for](#made-for-a-client).

## Open the module

Click **Facebook** in the menu. The dark band at the top holds:

- the post list button, which shows the open post's title (or **All posts**) and how many posts there are;
- **How this page works**, a short note about Facebook;
- **New post**, which clears the form for a fresh post;
- the four steps of the open post as tiles, numbered 00 to 03: **The brief**, **The copy**, **The pictures** and **Publishing**. Each tile shows its state (done, in progress, to do or not needed); click it to open that step.

Click the post list button to open every post in a panel over the page. Type in the search box to match words of the title or the copy, a status or a date, or keep the posts written between two days. Click a row to open that post.

![The Facebook module on a new post: the band with the four step tiles, and the brief with Text only, + Image, + Carousel and Video, Emoticons, Language, Model, Draft with AI and Write it myself](/Images/help/facebook-brief.webp)

## Who sees a post

A post belongs to the person who wrote it. Until you share it, only you see it. On the band, the line under the title says who can see the post; click **Who sees it**, pick **Only me** or **Everyone in the team**, then **Save**.

A post made for a client is also shown to that client's people, whoever it is shared with inside the team. See [Made for a client](#made-for-a-client).

## Write the brief

1. Pick the **Format**: **Text only**, **+ Image**, **+ Carousel** or **Video**.
2. Leave **Emoticons** ticked to have a few emoji spread through the post, or untick it for none.
3. Pick the **Language**, and the model that writes. hubStudio remembers your pick for next time.
4. Write the brief the way you'd brief a writer: the angle or the news, who it speaks to, and what the post has to achieve. **Import a file** adds the text of a .txt or .md file to the box; the file itself isn't kept.
5. Click **Draft with AI**, or **Write it myself** to open the editor with no AI call and nothing billed.

The strip at the right edge, **Skills and material**, unfolds two cards:

- the material to write from: **Files** (PDF or plain text, read once and not stored), **Pages to read** (web addresses, one per line) and **Keywords to target**;
- **Skills**, where **Facebook post format** is already picked. It carries Facebook's posting rules. Add your own skills or unpick it. See [Skills](/help/skills).

The draft opens on the copy step, with a line that says what it cost. The run also shows in **Activity**, so you can leave the page while it works.

## Edit the copy

The copy step has one editor, with a working title on top and the copy under it. Whatever sits in that box is what goes out, and a counter under it shows how much room is left.

- **It saves itself** about a second after you stop typing, when you leave the field, and when you close the tab. A line next to **Save** says **Saving…**, **Saved** or **Not saved:** with the reason.
- **Add an emoticon** opens an emoji picker.
- **Versions.** Every version of the copy is kept. Type what to change under **Another version** ("shorter", "end on a question"), pick a model, and click **Write another version**. Once there are two or more, click a version to load it, **Use this version** to make it the one that goes out, or **Delete** to drop it.
- **Rewrite one passage.** Highlight a passage and click **Rewrite with AI** beside it. Pick a quick edit or type your own instruction; only that passage is rewritten, as a new version.
- **Draft again.** The brief tile brings back what the post was written from. Change it and click **Draft again**: the new copy is a new version of the same post.

## Add pictures or a video

The pictures step starts with the shape, which you can change at any time: text only, one image, a carousel of 2 to 8 slides when rendered, or one video. A post carries pictures or a video, never both. Then pick one of three ways in:

- **Render with AI** (**Render again** once there's a picture). Write the prompt, or leave it empty to have it written from the post; **Improve with AI** rewrites it for you. Pick the **Engine** and the **Aspect**, and for a clip the length, resolution and sound. The price is on the button before you press.
- **Pick from the library**: a picture or a clip already in your [Assets Library](/help/assets-library).
- **Upload from your computer**. The file is saved in your Assets Library and put on the post.

A picture takes a minute or two, a clip a few minutes. The run shows in **Activity**, and the post keeps the result if you leave. The **×** on a picture takes it off the post; it stays in the Assets Library.

**Edit a picture.** Point at a picture of the post and click the pencil under the **×**. The picture opens in the Image editor: crop it to **Link** (1.91:1) or **Square**, adjust its light and colors, write a caption, draw an arrow, or place your logo in a corner. Then click **Save** and **Save and use it in the post**: the edited copy takes the place of the picture in the post, in the same slide, and the original stays in the Assets Library. Editing is free. See [Edit a picture of a post](/help/assets-library#edit-a-picture-of-a-post).

Facebook takes up to 10 pictures a post (JPG, PNG or GIF, up to 10 MB each), or one MP4 or MOV clip of up to 20 minutes.

## Made for a client

When your team works for clients, creators and admins see **Made for** on the band of an open post. Pick the client the post is for: it is saved at once, and the post's pictures and video follow. That client's people then find the post, with its pictures, in their [Client space](/help/client-space), where they see whether it is planned or published. Pick **No client: the team only** to take it back.

The line appears once your team has at least one client. See [Your team](/help/your-team#clients).

## Send it for approval

On the publishing step, the bar under the phone preview holds **Send for validation**. Name a teammate, or one of the client's people for a post made for a client. See [Validation](/help/validation).

While it waits, the post is locked: the band reads **Waiting for validation: this post is locked until the validator decides.** Nothing on it can be changed, deleted or published until they decide. Approved, it can go out; sent back, it returns to draft for another round.

## Publish automatically

Open **Publishing** and stay on the **Publish automatically** tab. hubStudio posts through Facebook itself, in the name of the page you tick.

1. Under **Who it goes out as**, tick one or more of your pages. Nothing is ticked when the step opens. Without a connected Facebook page, the tab offers a button that opens My Connections in a new tab.
2. Open **What Facebook asks for** and, if you want, fill in **First comment (optional)**: the links, the credits or the hashtags, posted as the first comment under the post.
3. Click **Publish now** to send it this second. To send it later, click **Schedule**: a **When it goes out** block opens. Pick a day and a time, or a chip: **In an hour**, **Tonight, 18:00**, **Tomorrow, 09:00** or **Monday, 09:00**. Then click **Schedule it**.

The buttons stay locked until a page is ticked: the badge next to the tabs reads **Off until you tick one**, then **Ready when you are**. The time is read in your own time zone, set in **User Settings**. A scheduled time must be at least a couple of minutes ahead and no more than a year away, and one post can go to up to 20 pages.

hubStudio looks at the queue every five minutes, so a post set for 09:00 goes out between 09:00 and 09:05. It checks the post against Facebook's limits again before sending.

## Publish manually

The **Publish manually** tab needs nothing connected.

1. Click **Publish interactively**.
2. Facebook opens in a new tab, with the copy on your clipboard.
3. Follow **How it goes, press by press**: start a post on your page, paste the copy, drag in the pictures or the clip you downloaded, and post it there.

If the copy arrives cut short, click **Copy the text** and paste it again. **What you give up by posting it yourself** lists the trade-offs: you can't pick an hour, and hubStudio is never told the post went out. Once it's live, set the status yourself under **Where it stands**: pick published, type the address in **Published URL (once live)**, and click **Save**.

## Follow the queue

Everything you schedule or send lands under **In the queue**, one row per page:

| Status | What it means | What you can do |
|---|---|---|
| Scheduled | Waiting for its time | **Cancel** |
| Sending now | Going out | Wait |
| Published | Live, with **View live** | Edit or delete it on Facebook itself |
| Did not go out | Refused, or waiting to retry | **Try again now**, **Cancel** |

A temporary problem on Facebook's side is retried by itself, three attempts in all. A content problem (a file too large, a wrong file type) or a page that needs reconnecting is not retried, and the person who queued the post receives an email saying what Facebook said. A page that stopped working shows **Reconnect** on its tile and can't be ticked: reconnect it on My Connections.

## Take a post to other networks

**Re-purpose for other networks**, at the foot of the publishing step, turns this post into posts for [LinkedIn](/help/linkedin), [Instagram](/help/instagram), [TikTok](/help/tiktok) or [X](/help/x). Tick the networks, then pick a way:

- **Manually**: each network opens in its own tab with this post as the brief. Nothing is drafted until you press Draft there.
- **Draft at once**: hubStudio drafts each network's post, and opens each draft in its own tab. Each draft is billed like one **Draft with AI**.
- **Publish automatically**: the same drafts, then sent on the accounts you tick for each network.

A network that can't take the post is grayed out: Instagram needs a picture and TikTok a video.

## What it costs

Each paid step shows its price where you work: on the button before a render, and on the status line after a draft, a new version or a rewrite. These are paid: **Draft with AI**, **Draft again**, **Write another version**, a rewritten passage, **Improve with AI**, and each render (per picture, or per second of clip).

These cost nothing: **Write it myself**, typing in the editor, and publishing on Facebook, through hubStudio or by hand. Files you upload are kept in the Assets Library and count toward storage. Editing a picture in the Image editor is free. Every charge is listed in **Credits** > **Usage**.

## Delete a post

**Delete** on the band removes the post from hubStudio for good, after you confirm. A post already out stays on Facebook. Admins can delete any post. You can delete your own post while it is still **Only me**. Nobody can delete a post while it waits for validation.
