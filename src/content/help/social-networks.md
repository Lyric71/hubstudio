---
title: "Social networks"
seoTitle: "Write, schedule and publish social posts | hubStudio Help"
description: "The LinkedIn, Instagram, Facebook, TikTok and X modules: connect your accounts, brief and draft a post, add its picture or video, say which client it is for, send it for approval, then schedule it or publish it."
excerpt: "One module per network: write a post with AI or by hand, give it a picture or a video, and publish it on the accounts you connected, now or on schedule."
section: "social"
order: 7
updated: 2026-09-27
appPaths: ["/social/linkedin/posts", "/social/instagram/posts", "/social/facebook/posts", "/social/tiktok/posts", "/social/tiktok/brief", "/social/x/posts", "/my-connections"]
audience: "Creators and admins; viewers read"
related: ["account-and-sign-in", "validation", "history", "skills", "your-team", "create-an-image", "create-a-video"]
shots:
  - file: "/Images/help/social-networks-linkedin-brief.webp"
    route: "/social/linkedin/posts"
    alt: "The LinkedIn module on a new post: the band with All posts, New post and the four step tiles, and the brief with Format, Emoticons, Language, Model, Draft with AI and Write it myself"
    captured: 2026-09-27
sources: ["src/lib/app.ts", "src/layouts/Layout.astro", "src/components/panels/SocialContentPanel.astro", "src/components/panels/SocialFormatBlock.astro", "src/scripts/socialContent.ts", "src/scripts/selectionRewrite.ts", "src/scripts/clientPick.ts", "src/pages/api/social-content/[id].ts", "src/lib/social-content-db.ts", "src/lib/social/limits.ts", "src/lib/social/scheduler.ts", "src/lib/social/publications.ts", "src/pages/my-connections.astro", "src/scripts/socialAccounts.ts", "src/lib/own-work.ts", "src/lib/team-clients.ts", "src/lib/stored-files.ts", "public/apps/hubstudio/vocabulary.js"]
---

hubStudio has one module per social network in the menu: **LinkedIn**, **Instagram**, **Facebook**, **TikTok** (marked **Beta**) and **X**. Each one holds your posts for that network, from the first draft to the published post. You write a post with AI or by hand, give it a picture or a video, and publish it on the accounts you connected, now or at a time you pick. Or you post it yourself in the network's own composer.

Every module works the same way. This article covers what they share, then what differs on each network.

## Before you start

**To publish from hubStudio, connect your accounts.** Social accounts are personal: you connect your own LinkedIn, Instagram professional account, Facebook page, TikTok or X on **My Connections**, in the menu under your picture. Nobody else can post with them, and you can't post with a teammate's. See [Account and sign-in](/help/account-and-sign-in#my-connections-your-social-accounts).

Writing a post, and publishing it yourself in the network's composer, need no connected account.

**Who does what.** Creators and admins write, render and publish. Viewers can open the modules and read the posts they can see. Client logins don't see the modules at all: a post reaches a client through [Made for](#made-for-a-client).

## Open a module

Pick a network in the menu. The dark band at the top of the module holds:

- the post list button, which shows the open post's title (or **All posts**) and how many posts there are;
- **How this page works**, a short note about the network;
- **New post**, which clears the form for a fresh post;
- the steps of the open post as tiles, each showing its state: done, in progress, to do or not needed. Click a tile to open that step.

On LinkedIn, Facebook and X the steps are **The brief**, **The copy**, **The pictures** and **Publishing**, numbered 00 to 03. On Instagram and TikTok the visual comes first: **01** the picture or the video, **02 The caption**, **03 Publishing**. There is no brief step there.

Click the post list button to open every post in a panel over the page. Type in the search box to match words of the title or the copy, a status or a date, or keep the posts written between two days. Click a row to open that post.

![The LinkedIn module on a new post: the band with All posts, New post and the four step tiles, and the brief with Format, Emoticons, Language, Model, Draft with AI and Write it myself](/Images/help/social-networks-linkedin-brief.webp)

## Who sees a post

A post belongs to the person who wrote it. Until you share it, only you see it. On the band, the line under the title says who can see the post; click **Who sees it**, pick **Only me** or **Everyone in the team**, then **Save**.

A post made for a client is also shown to that client's people, whoever it is shared with inside the team. See [Made for a client](#made-for-a-client).

## Write the brief (LinkedIn, Facebook, X)

1. Pick the **Format**: **Text only**, **+ Image** or **+ Carousel**. Facebook also offers **Video**. On X the several-picture shape is **+ 2 to 4 pictures**.
2. Leave **Emoticons** ticked to have a few emoji spread through the post, or untick it for none.
3. Pick the **Language**, and the model that writes. hubStudio remembers your pick for next time.
4. Write the brief the way you'd brief a writer: the angle or the news, who it speaks to, and what the post has to achieve. **Import a file** adds the text of a .txt or .md file to the box; the file itself isn't kept.
5. Click **Draft with AI**, or **Write it myself** to open the editor with no AI call and nothing billed.

The strip at the right edge, **Skills and material**, unfolds two cards:

- the material to write from: **Files** (PDF or plain text, read once and not stored), **Pages to read** (web addresses, one per line) and **Keywords to target**;
- **Skills**, where the network's own format skill is already picked, such as **LinkedIn post format**. It carries the network's posting rules. Add your own skills or unpick it. See [Skills](/help/skills).

X adds its own settings to the brief: **Shape** (one post, or a thread), **Hashtags**, **Mentions** and **Link to share**.

The draft opens on the copy step, with a line that says what it cost. The run also shows in **Activity**, so you can leave the page while it works.

## Edit the copy

The copy step has one editor, with a working title on top and the copy under it. Whatever sits in that box is what goes out. A counter under it shows how much room the network leaves.

- **It saves itself** about a second after you stop typing, when you leave the field, and when you close the tab. A line next to **Save** says **Saving…**, **Saved** or **Not saved:** with the reason.
- **Add an emoticon** opens an emoji picker.
- **Versions.** Every version of the copy is kept. Type what to change under **Another version** ("shorter", "end on a question"), pick a model, and click **Write another version**. Once there are two or more, click a version to load it, **Use this version** to make it the one that goes out, or **Delete** to drop it.
- **Rewrite one passage.** Highlight a passage and click **Rewrite with AI** beside it. Pick a quick edit or type your own instruction; only that passage is rewritten, as a new version.
- **Draft again.** On LinkedIn, Facebook and X, the brief tile brings back what the post was written from. Change it and click **Draft again**: the new copy is a new version of the same post.

## Add a picture or a video

The pictures step starts with the shape, which you can change at any time. Then pick one of three ways in:

- **Render with AI** (**Render again** once there's a picture). Write the prompt, or leave it empty to have it written from the post; **Improve with AI** rewrites it for you. Pick the **Engine** and the **Aspect**, and for a clip the length, resolution and sound. The price is on the button before you press.
- **Pick from the library**: a picture or a clip already in your [History](/help/history).
- **Upload from your computer**. The file is saved in your History and put on the post.

A picture takes a minute or two, a clip a few minutes. The run shows in **Activity**, and the post keeps the result if you leave. The **×** on a picture takes it off the post; it stays in History.

On Instagram and TikTok this step comes first. The post is created the moment you render, pick or upload: until then nothing exists and nothing is billed. Then **02 The caption** writes the words for it, with AI or by hand.

## Made for a client

When your team works for clients, creators and admins see **Made for** on the band of an open post. Pick the client the post is for: it is saved at once, and the post's pictures and video follow. That client's people then find the post, with its pictures, in their [Client space](/help/client-space), where they see whether it is planned or published. Pick **No client: the team only** to take it back.

The line appears once your team has at least one client. See [Your team](/help/your-team#clients).

## Send it for approval

On the publishing step, the bar under the phone preview holds **Send for validation**. Name a teammate, or one of the client's people for a post made for a client. See [Validation](/help/validation).

While it waits, the post is locked: the band reads **Waiting for validation: this post is locked until the validator decides.** Nothing on it can be changed, deleted or published until they decide. Approved, it can go out; sent back, it returns to draft for another round.

## Publish automatically

Open **Publishing** and stay on the **Publish automatically** tab. hubStudio posts through the network itself, in the name of the account you tick.

1. Under **Who it goes out as**, tick one or more of your accounts. Nothing is ticked when the step opens. Without a connected account for this network, the tab offers a button that opens My Connections in a new tab.
2. Open the options panel, named after the network (**What LinkedIn asks for**, or **Posting to TikTok** on TikTok), and set what you need.
3. Click **Publish now** to send it this second. To send it later, click **Schedule**: a **When it goes out** block opens. Pick a day and a time, or a chip: **In an hour**, **Tonight, 18:00**, **Tomorrow, 09:00** or **Monday, 09:00**. Then click **Schedule it**.

The buttons stay locked until an account is ticked: the badge next to the tabs reads **Off until you tick one**, then **Ready when you are**. The time is read in your own time zone, set in **User Settings**. A scheduled time must be at least a couple of minutes ahead and no more than a year away, and one post can go to up to 20 accounts.

hubStudio looks at the queue every five minutes, so a post set for 09:00 goes out between 09:00 and 09:05. It checks the post against the network's limits again before sending.

| Network | Options |
|---|---|
| LinkedIn | Who sees it on LinkedIn, **Nobody may share this post on**, and the shape of the post |
| Instagram | Feed post or Story for pictures. A video always goes out as a Reel |
| Facebook | **First comment (optional)** |
| TikTok | **Who can see this post**, **Allow people to** (Comment, Duet, Stitch) and **Disclose post content**, limited to what TikTok allows your account |
| X | **Send as a thread when the copy is longer than one post** |

## Publish manually

The **Publish manually** tab needs nothing connected.

1. Click **Publish interactively**.
2. The network opens in a new tab. LinkedIn and X open their composer with the copy in it; Facebook, Instagram and TikTok open with the copy on your clipboard.
3. Follow **How it goes, press by press**: paste or drag in the picture or the downloaded files, paste the copy, and post it there.

If the copy arrives cut short, click **Copy the text** and paste it again. **What you give up by posting it yourself** lists the trade-offs: you can't pick an hour, and hubStudio is never told the post went out. Once it's live, set the status yourself under **Where it stands**: pick published, type the address in **Published URL (once live)**, and click **Save**.

## Follow the queue

Everything you schedule or send lands under **In the queue**, one row per account:

| Status | What it means | What you can do |
|---|---|---|
| Scheduled | Waiting for its time | **Cancel** |
| Sending now | Going out | Wait |
| Published | Live, with **View live** | On X only: **Update the post on X** or **Delete the post from X** |
| Did not go out | Refused, or waiting to retry | **Try again now**, **Cancel** |

A temporary problem on the network's side is retried by itself, three attempts in all. A content problem (too long, a wrong file type) or an account that needs reconnecting is not retried, and the person who queued the post receives an email saying what the network said. An account that stopped working shows **Reconnect** on its tile and can't be ticked: reconnect it on My Connections.

## Take a post to other networks

**Re-purpose for other networks**, at the foot of the publishing step, turns this post into posts for the other networks. Tick the networks, then pick a way:

- **Manually**: each network opens in its own tab with this post as the brief. Nothing is drafted until you press Draft there.
- **Draft at once**: hubStudio drafts each network's post, and opens each draft in its own tab. Each draft is billed like one **Draft with AI**.
- **Publish automatically**: the same drafts, then sent on the accounts you tick for each network.

A network that can't take the post is grayed out: Instagram needs a picture and TikTok a video.

## What differs on each network

| Network | What to know |
|---|---|
| **LinkedIn** | Plain text up to 3,000 characters, with a first line that stands on its own before "see more". A text post, one picture or a carousel. No video yet. |
| **Instagram** | Visual first: **One image**, **Carousel** (2 to 8 slides) or **Reel**, then the caption. The account must be a Business or Creator account. |
| **Facebook** | For a Facebook page. Text, pictures (a carousel takes several) or one video, never both. |
| **TikTok** (Beta) | A post is a video, and the copy is its caption. Besides **Posts**, a **Brief** tab briefs one video in depth: hook, timed script, on-screen text and caption. |
| **X** | Single posts or threads, each post within 280 characters as X counts them (an emoji or a Chinese character counts 2, a link 23). Up to 4 pictures. A post already out can be updated or deleted from hubStudio. |

## What it costs

Each paid step shows its price where you work: on the button before a render, and on the status line after a draft, a new version or a rewrite. These are paid: **Draft with AI**, **Draft again**, **Write another version**, a rewritten passage, **Improve with AI**, and each render (per picture, or per second of clip). Publishing on X through hubStudio is billed per post: as soon as you tick an X account, a line under the buttons gives the price of the send.

These cost nothing: **Write it myself**, typing in the editor, publishing by hand, and publishing through hubStudio on LinkedIn, Instagram, Facebook and TikTok. Files you upload are kept in History and count toward storage. Every charge is listed in **Credits** > **Usage**.

## Delete a post

**Delete** on the band removes the post for good, after you confirm. Admins can delete any post. You can delete your own post while it is still **Only me**. Nobody can delete a post while it waits for validation.
