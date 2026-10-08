---
title: "X"
seoTitle: "Write, schedule and publish posts and threads on X | hubStudio Help"
description: "The X module: connect your X account, brief and draft a post or a thread, add its pictures, say which client it is for, send it for approval, schedule it or publish it, then update or delete it on X."
excerpt: "Draft a post or a thread for X with AI or by hand, add up to four pictures, and publish it on your account, now or on schedule."
section: "social"
order: 13
updated: 2026-10-08
appPaths: ["/social/x/posts", "/my-connections"]
audience: "Creators and admins; viewers read"
related: ["linkedin", "instagram", "facebook", "tiktok", "validation", "account-and-sign-in", "skills", "choosing-a-model", "balance-and-payments", "assets-library", "campaigns"]
shots:
  - file: "/Images/help/x-brief.webp"
    route: "/social/x/posts"
    alt: "The X module on a new post: the band with the four step tiles, and the brief with Text only, + Image and + 2 to 4 pictures, Emoticons, Language and the model picker on Balanced"
    captured: 2026-10-08
  - file: "/Images/help/x-knobs.webp"
    route: "/social/x/posts"
    alt: "How it goes out on X: Shape, Hashtags, Mentions, Link to share and the switch that puts the link in a follow-up post"
    captured: 2026-09-27
sources: ["src/lib/app.ts", "src/components/panels/SocialContentPanel.astro", "src/components/panels/SocialFormatBlock.astro", "src/scripts/socialContent.ts", "src/scripts/imageEditorLauncher.ts", "src/scripts/imageEditorNetworks.ts", "src/scripts/selectionRewrite.ts", "src/scripts/clientPick.ts", "src/pages/api/social-content/[id].ts", "src/lib/social-content-db.ts", "src/lib/social/limits.ts", "src/lib/social/live.ts", "src/lib/social/scheduler.ts", "src/lib/social/publications.ts", "src/pages/my-connections.astro", "src/scripts/socialAccounts.ts", "src/lib/own-work.ts", "src/lib/team-clients.ts"]
---

**X** in the menu holds your posts for X, from the first draft to the published post. You write a post or a thread with AI or by hand, give it pictures, and publish it on your X account, now or at a time you pick. Or you post it yourself in X's own composer. A post already out can be updated or deleted from hubStudio.

## Before you start

**To publish from hubStudio, connect your account.** Social accounts are personal: you connect your own X account on **My Connections**, in the menu under your picture. Nobody else can post with it, and you can't post with a teammate's. See [Account and sign-in](/help/account-and-sign-in#my-connections-your-social-accounts).

Writing a post, and publishing it yourself in X's composer, need no connected account.

**Who does what.** Creators and admins write, render and publish. Viewers can open the module and read the posts they can see. Client logins don't see the module at all: a post reaches a client through [Made for](#made-for-a-client).

## Open the module

Click **X** in the menu. The dark band at the top holds:

- the post list button, which shows the open post's title (or **All posts**) and how many posts there are;
- **How this page works**, a short note about X;
- **New post**, which clears the form for a fresh post;
- the four steps of the open post as tiles, numbered 00 to 03: **The brief**, **The copy**, **The pictures** and **Publishing**. Each tile shows its state (done, in progress, to do or not needed); click it to open that step.

Click the post list button to open every post in a panel over the page. Type in the search box to match words of the title or the copy, a status or a date, or keep the posts written between two days. Click a row to open that post.

![The X module on a new post: the band with the four step tiles, and the brief with Text only, + Image and + 2 to 4 pictures, Emoticons, Language and the model picker on Balanced](/Images/help/x-brief.webp)

## Who sees a post

A post belongs to the person who wrote it. Until you share it, only you see it. On the band, the line under the title says who can see the post; click **Who sees it**, pick **Only me** or **Everyone in the team**, then **Save**.

A post made for a client is also shown to that client's people, whoever it is shared with inside the team. See [Made for a client](#made-for-a-client).

## Write the brief

1. Pick the **Format**: **Text only**, **+ Image** or **+ 2 to 4 pictures**.
2. Leave **Emoticons** ticked to have a few emoji spread through the post, or untick it for none.
3. Pick the **Language**, and the model that writes. hubStudio remembers your pick for next time. See [Choosing a model](/help/choosing-a-model).
4. Write the brief the way you'd brief a writer: the angle or the news, who it speaks to, and what the post has to achieve. **Import a file** adds the text of a .txt or .md file to the box; the file itself isn't kept.
5. Set **How it goes out on X**:
   - **Shape**: **One post, thread only if needed**, **Single post**, or **Thread (3-5 posts)**.
   - **Hashtags**: **None (recommended)**, **Up to one** or **Up to two**. On X, three or more hashtags cut reach.
   - **Mentions**: the @handles to name, separated by commas.
   - **Link to share**, optional. Leave the switch under it on to put the link in a short follow-up post rather than the first one: X cuts the reach of posts that open with an outside link.

![How it goes out on X: Shape, Hashtags, Mentions, Link to share and the switch that puts the link in a follow-up post](/Images/help/x-knobs.webp)
6. Click **Draft with AI**, or **Write it myself** to open the editor with no AI call and nothing billed.

The strip at the right edge, **Skills and material**, unfolds two cards:

- the material to write from: **Files** (PDF or plain text, read once and not stored), **Context folder from the Assets Library** (a folder of the library whose text documents are read, or one of your [campaigns](/help/campaigns), read with its brief), **Pages to read** (web addresses, one per line) and **Keywords to target**;
- **Skills**, where **X post format** is already picked. It carries X's posting rules. Add your own skills or unpick it. See [Skills](/help/skills).

The draft opens on the copy step, with a line that says what it cost. The run also shows in **Activity**, so you can leave the page while it works.

## Edit the copy

The copy step has one editor, with a working title on top and the copy under it. Whatever sits in that box is what goes out. Each post holds 280 characters as X counts them: an emoji or a Chinese character counts 2, and any link 23. A counter under the box shows how much room is left.

- **It saves itself** about a second after you stop typing, when you leave the field, and when you close the tab. A line next to **Save** says **Saving…**, **Saved** or **Not saved:** with the reason.
- **Add an emoticon** opens an emoji picker.
- **Versions.** Every version of the copy is kept. Type what to change under **Another version** ("shorter", "end on a question"), pick a model, and click **Write another version**. Once there are two or more, click a version to load it, **Use this version** to make it the one that goes out, or **Delete** to drop it.
- **Rewrite one passage.** Highlight a passage and click **Rewrite with AI** beside it. Pick a quick edit or type your own instruction; only that passage is rewritten, as a new version.
- **Draft again.** The brief tile brings back what the post was written from. Change it and click **Draft again**: the new copy is a new version of the same post.

## Add pictures

The pictures step starts with the shape, which you can change at any time: text only, one image, or 2 to 4 pictures. X takes no video from hubStudio yet. Then pick one of three ways in:

- **Render with AI** (**Render again** once there's a picture). Write the prompt, or leave it empty to have it written from the post; **Improve with AI** rewrites it for you, with the text model picked next to it (see [Choosing a model](/help/choosing-a-model)). Pick the **Engine**, which opens on the least expensive one, and the **Aspect**. Then click **Generate the image** (or **Generate the pictures**) under the prompt, or the **Render with AI** button above. The price is on both buttons before you press.
- **Pick from the library**: a picture already in your [Assets Library](/help/assets-library).
- **Upload from your computer**. The file is saved in your Assets Library and put on the post.

A picture takes a minute or two. The run shows in **Activity**, and the post keeps the result if you leave. The **×** on a picture takes it off the post; it stays in the Assets Library. Once the post has a picture, the step is split in two: the ways in and the render settings on the left, the pictures on the post on the right, in sight while the next render runs.

**Picture versions.** Each render, edit, pick or upload that changes the post's pictures is kept as a version, v1, v2 and so on, with its day and time. Once there are two, **Picture versions** lists them under the pictures, and **On the post** marks the one the post carries. **Use this version** puts an earlier set back on the post. The **×** on a version takes it off the list, and its files stay in the Assets Library. The version on the post can't be taken off the list.

**Edit a picture.** Point at a picture of the post and click the pencil under the **×**, or click **Edit in the image editor** under the pictures (**Edit slide 1 in the image editor** when there are several, each keeping its own pencil). The picture opens in the Image editor, on its **Social** panel set to X: pick **Post, wide** (16:9, shown whole), **Post, square**, **Post, portrait** or **One of two**, crop it or fit it whole over a blurred background, see how X crops it beside other pictures, then click **Apply the format**. You can also adjust its light and colors, write a caption, draw an arrow, or place your logo in a corner. Then click **Save** and **Save and use it in the post**: the edited copy takes the place of the picture in the post, in the same slide, as a new version, and the original stays in the versions and in the Assets Library. Editing is free. See [Edit a picture of a post](/help/assets-library#edit-a-picture-of-a-post).

X takes JPG, PNG, WebP and GIF pictures up to 5 MB each. An animated GIF (up to 15 MB) goes out alone, as the only picture of its post.

## Made for a client

When your team works for clients, creators and admins see **Made for** on the band of an open post. Pick the client the post is for: it is saved at once, and the post's pictures follow. That client's people then find the post, with its pictures, in their [Client space](/help/client-space), where they see whether it is planned or published. Pick **No client: the team only** to take it back.

The line appears once your team has at least one client. See [Your team](/help/your-team#clients).

## Send it for approval

On the publishing step, the bar under the phone preview holds **Send for validation**. Name a teammate, or one of the client's people for a post made for a client. See [Validation](/help/validation).

While it waits, the post is locked: the band reads **Waiting for validation: this post is locked until the validator decides.** Nothing on it can be changed, deleted or published until they decide. Approved, it can go out; sent back, it returns to draft for another round.

## Publish automatically

Open **Publishing** and stay on the **Publish automatically** tab. hubStudio posts through X itself, in the name of the account you tick.

1. Under **Who it goes out as**, tick one or more of your accounts. Nothing is ticked when the step opens. Without a connected X account, the tab offers a button that opens My Connections in a new tab.
2. Open **What X asks for**. **Send as a thread when the copy is longer than one post** is ticked by itself when the copy runs past 280 characters; untick it to keep a single post.
3. Click **Publish now** to send it this second. To send it later, click **Schedule**: a **When it goes out** block opens. Pick a day and a time, or a chip: **In an hour**, **Tonight, 18:00**, **Tomorrow, 09:00** or **Monday, 09:00**. Then click **Schedule it**.

The buttons stay locked until an account is ticked: the badge next to the tabs reads **Off until you tick one**, then **Ready when you are**. As soon as you tick an account, a line under the buttons gives the price of the send. The time is read in your own time zone, set in **User Settings**. A scheduled time must be at least a couple of minutes ahead and no more than a year away, and one post can go to up to 20 accounts.

hubStudio looks at the queue every five minutes, so a post set for 09:00 goes out between 09:00 and 09:05. It checks the post against X's limits again before sending.

## Publish manually

The **Publish manually** tab needs nothing connected.

1. Click **Publish interactively**.
2. X's own composer opens in a new tab, with the copy in it.
3. Follow **How it goes, press by press**: drag in the pictures you downloaded, check the copy, and post it there.

If the copy arrives cut short, click **Copy the text** and paste it again. **What you give up by posting it yourself** lists the trade-offs: you can't pick an hour, and hubStudio is never told the post went out. Once it's live, set the status yourself under **Where it stands**: pick published, type the address in **Published URL (once live)**, and click **Save**.

## Follow the queue

Everything you schedule or send lands under **In the queue**, one row per account:

| Status | What it means | What you can do |
|---|---|---|
| Scheduled | Waiting for its time | **Cancel** |
| Sending now | Going out | Wait |
| Published | Live, with **View live** | **Update the post on X**, **Delete the post from X** |
| Did not go out | Refused, or waiting to retry | **Try again now**, **Cancel** |

**Update the post on X** replaces the post on X with the post as it now stands, copy and pictures, after you confirm. A thread is replaced post for post, so the new copy has to make the same number of posts. X lets only a Premium account edit a post, within an hour of posting and up to five times. The post keeps its replies and likes; its link changes and the old one forwards. **Delete the post from X** takes it down; the row then shows when.

A temporary problem on X's side is retried by itself, three attempts in all. A content problem (too long, a wrong file type) or an account that needs reconnecting is not retried, and the person who queued the post receives an email saying what X said. An account that stopped working shows **Reconnect** on its tile and can't be ticked: reconnect it on My Connections.

## Take a post to other networks

**Re-purpose for other networks**, at the foot of the publishing step, turns this post into posts for [LinkedIn](/help/linkedin), [Instagram](/help/instagram), [Facebook](/help/facebook), [TikTok](/help/tiktok) or [YouTube](/help/youtube). Tick the networks, then pick a way:

- **Manually**: each network opens in its own tab with this post as the brief. Nothing is drafted until you press Draft there.
- **Draft at once**: hubStudio drafts each network's post, and opens each draft in its own tab. Each draft is billed like one **Draft with AI**.
- **Publish automatically**: the same drafts, then sent on the accounts you tick for each network. YouTube can't be ticked there: you publish on YouTube yourself.

A network that can't take the post is grayed out: Instagram needs a picture, TikTok and YouTube a video.

## What it costs

Each paid step shows its price where you work: on the button before a render, and on the status line after a draft, a new version or a rewrite. These are paid: **Draft with AI**, **Draft again**, **Write another version**, a rewritten passage, **Improve with AI**, each picture rendered, and each post sent to X through hubStudio (the price shows under the buttons before you send).

These cost nothing: **Write it myself**, typing in the editor, and publishing on X by hand. Files you upload are kept in the Assets Library and count toward storage. Editing a picture in the Image editor is free. Every charge against your balance is listed in **Usage**, under **Credits** in the menu.

## Delete a post

**Delete** on the band removes the post from hubStudio for good, after you confirm. A post already out stays on X: to take it down, use **Delete the post from X** in the queue first. Admins can delete any post. You can delete your own post while it is still **Only me**. Nobody can delete a post while it waits for validation.
