---
title: "YouTube"
seoTitle: "Prepare YouTube videos and your channel | hubStudio Help"
description: "The YouTube module: start from the video, write its title and description to YouTube's rules, send it for approval, then publish it yourself in YouTube Studio; and prepare the channel itself, from its name and handle to its banner and profile picture."
excerpt: "Start from the video, write its title and description with AI or by hand, then hand everything over to YouTube Studio. The Channel tab prepares the channel itself."
section: "social"
order: 12.5
updated: 2026-10-08
appPaths: ["/social/youtube/posts", "/social/youtube/channel"]
audience: "Creators and admins; viewers read"
related: ["tiktok", "shorts-autopilot", "instagram", "validation", "create-a-video", "assets-library", "skills", "choosing-a-model"]
shots:
  - file: "/Images/help/youtube-video.webp"
    route: "/social/youtube/posts"
    alt: "The YouTube module on a new post: the Videos and Channel tabs, the band with the three step tiles, and the video step with Render with AI, Pick from the library and Upload from your computer, with the Skills and material strip unfolded beside it"
    captured: 2026-10-08
  - file: "/Images/help/youtube-publish.webp"
    route: "/social/youtube/posts#item=<a post with its video>&step=publish"
    alt: "The publishing step of a YouTube post: Publish interactively and the steps of the upload in YouTube Studio, with the post shown as YouTube's watch page on the right"
    captured: 2026-10-05
  - file: "/Images/help/youtube-channel.webp"
    route: "/social/youtube/channel"
    alt: "The Channel tab: What the channel is about with Write the kit with AI, then Name and handle, with the channel page as it will look on the right"
    captured: 2026-10-08
  - file: "/Images/help/youtube-channel-art.webp"
    route: "/social/youtube/channel"
    alt: "The Banner and profile picture card: the banner with its dashed frame, the round profile picture, and under each Render with AI, From the Assets Library, Upload a picture and Download"
    captured: 2026-10-05
sources: ["src/lib/app.ts", "src/components/SocialNav.astro", "src/pages/social/youtube/posts.astro", "src/pages/social/youtube/channel.astro", "src/components/panels/SocialContentPanel.astro", "src/components/panels/YoutubeChannelPanel.astro", "src/scripts/socialContent.ts", "src/scripts/youtubeChannel.ts", "src/lib/youtube-channel.ts", "src/lib/youtube-constraints.ts", "src/pages/api/social-content/youtube-channel.ts", "src/pages/api/social-content/[id].ts", "src/pages/api/social-content/draft.ts", "src/pages/api/social-content/versions.ts", "src/lib/social-content-db.ts", "src/lib/social-format-skills.ts", "src/lib/social/limits.ts", "src/scripts/videoEditor.ts", "src/pages/api/social-content/index.ts", "src/lib/brief-sources.ts"]
---

**YouTube** in the menu prepares your YouTube videos and the channel they go out on. A YouTube post is a video with its title and its description: you render, pick or upload the video, have the title and the description written with AI or write them yourself, then hubStudio hands everything over to YouTube Studio, where you publish it.

## Before you start

**Nothing to connect.** YouTube keeps every video that an app it hasn't audited uploads private, whatever privacy you ask for. So hubStudio doesn't connect to your YouTube account and doesn't upload for you: the last step opens YouTube Studio with the video, the title and the description ready, and the video goes out from your own channel, public, unlisted, private or scheduled, as you choose there.

**Who does what.** Creators and admins make the posts and prepare the channel. Viewers can open the module and read the posts they can see and the channel kit. Client logins don't see the module at all: a post reaches a client through [Made for](#made-for-a-client).

## Open the module

Click **YouTube** in the menu. It has two tabs: **Videos**, where every video is prepared, and **Channel**, which prepares the channel itself (see [Prepare the channel](#prepare-the-channel)).

On **Videos**, the dark band at the top holds:

- the post list button, which shows the open post's title (or **All posts**) and how many posts there are;
- **How this page works**, a short note about YouTube;
- **New post**, which clears the form for a fresh post;
- the three steps of the open post as tiles: **01 The video**, **02 The title and description** and **03 Publishing**. Each tile shows its state; click it to open that step.

Click the post list button to open every post in a panel over the page. Type in the search box to match words of the title or the description, a status or a date. Click a row to open that post.

![The YouTube module on a new post: the Videos and Channel tabs, the band with the three step tiles, and the video step with Render with AI, Pick from the library and Upload from your computer, with the Skills and material strip unfolded beside it](/Images/help/youtube-video.webp)

## Who sees a post

A post belongs to the person who made it. Until you share it, only you see it. On the band, the line under the title says who can see the post; click **Who sees it**, pick **Only me** or **Everyone in the team**, then **Save**.

## 01 The video

Pick one of three ways in:

- **Render with AI**. Write the prompt; **Improve with AI** rewrites it for you, with the text model picked next to it (see [Choosing a model](/help/choosing-a-model)). Pick the **Engine**, which opens on the least expensive one, the **Aspect**, the length, the resolution and the sound. Then click **Generate the clip** under the prompt, or the **Render with AI** button above. The price is on both buttons before you press.
- **Pick from the library**: a video already in your [Assets Library](/help/assets-library).
- **Upload from your computer**. The file is saved in your Assets Library and put on the post.

**Skills and material.** The strip at the right edge, **Skills and material**, unfolds two cards. Fill them before you render, pick or upload:

- the material to write from: **Files** (PDF or plain text, read once and not stored), **Context folder from the Assets Library** (a folder of the library whose text documents are read, or one of your [campaigns](/help/campaigns), read with its brief), **Pages to read** (web addresses, one per line) and **Keywords to target**;
- **Skills**, where **YouTube title and description format** is already picked. Add your own skills or unpick it. See [Skills](/help/skills).

When the post is created, the material is read once and kept with the post, and so are the skills: the title and the description, in step 02, are written from them. The strip then empties itself for the next post, and the folder stays picked.

The post is created the moment you render, pick or upload: until then nothing exists and nothing is billed. A rendered clip takes a few minutes. The run shows in **Activity**, and the post keeps the result if you leave. Once the post has a clip, the step is split in two: the ways in and the render settings on the left, the clip on the post on the right, in sight while the next render runs.

**Versions of the clip.** Each render, edit, pick or upload that changes the clip is kept as a version, v1, v2 and so on, with its day and time. Once there are two, **Picture versions** lists them under the clip, and **On the post** marks the one the post carries. **Use this version** puts an earlier clip back on the post. The **×** on a version takes it off the list, and its file stays in the Assets Library. The version on the post can't be taken off the list.

A video that is upright or square and lasts three minutes or less becomes a YouTube Short: the preview marks it **Short**. A longer or wider video is an ordinary YouTube video.

**Edit the clip.** Point at the video of the post and click the pencil under the **×** (its tooltip starts **Edit this clip**), or click **Edit in the video editor** under it. It opens in the [Video editor](/help/assets-library#the-video-editor), where you can trim and split it, change its speed, add texts, captions timed word by word and music, and pick its cover. Then click **Save** and **Save and use it in the post**: the edited video takes the place of the first one in the post, as a new version, and the original stays in the versions and in the Assets Library.

**Start from a long video.** An interview, a talk or a podcast can become several Shorts at once: [Shorts autopilot](/help/shorts-autopilot) picks its best moments, frames them upright, captions them and saves each one in the Assets Library. Then pick one from the library here.

## 02 The title and description

The step holds two boxes: the title on top, as YouTube shows it (100 characters at most), and the description under it (5,000 characters at most, with a counter beside **Save**).

While the description is empty, the step opens on the **Have AI write the title and the description** box:

1. Check the model and the skills (see [Choosing a model](/help/choosing-a-model)). The skills are the ones picked in **Skills and material** when the post was started, **YouTube title and description format** by default; it carries YouTube's rules.
2. Under **Your brief for the AI** (optional), say anything the video's words have to carry: an offer, a date, a link. Left empty, they are written from what you said the video shows.
3. Click **Write it with AI**. The title and the description land in their boxes, ready to edit. The line beside the button says what they are written from: what you said the video shows and your brief, and, when the post has some, the material kept with it.

Or skip the box and type them yourself. See [Skills](/help/skills).

With **YouTube title and description format** picked, the words keep to YouTube's own rules:

- a title of 60 characters or fewer, never over 100, with the subject and the words people search for first; no hashtag in the title, and no promise the video doesn't keep;
- a description whose first 150 characters carry the point and the search words, because that's what search and the watch page show before "...more";
- two to four short paragraphs of plain text, since YouTube shows no bold and no headings;
- a link only when your brief gives one;
- a plain call to action, then a last line of 3 to 5 hashtags (YouTube shows the first three above the title);
- no < or > anywhere, since YouTube refuses them in a title and a description.

A draft that breaks a rule is rewritten once by the AI. A title or a description YouTube would still refuse is made to fit: the angle brackets go, and the title is cut at a word.

- **It saves itself** about a second after you stop typing, when you leave the field, and when you close the tab.
- **Versions.** Every version is kept. Type what to change under **Another version** ("shorter", "end on a question"), pick a model, and click **Write another version**.
- **Rewrite one passage.** Highlight a passage and click **Rewrite with AI** beside it. Only that passage is rewritten, as a new version.

## Made for a client

When your team works for clients, creators and admins see **Made for** on the band of an open post. Pick the client the post is for: it is saved at once, and the post's video follows. That client's people then find the post in their [Client space](/help/client-space). Pick **No client: the team only** to take it back.

The line appears once your team has at least one client. See [Your team](/help/your-team#clients).

## Send it for approval

On the publishing step, the phone shows the post the way YouTube's watch page shows it: the player, the first three hashtags, the title, the channel row and the description in its gray box. The description on the phone takes typing.

The bar under the phone holds **Send for validation**. Name a teammate, or one of the client's people for a post made for a client. See [Validation](/help/validation).

While it waits, the post is locked: nothing on it can be changed or deleted until the validator decides. Approved, it can go out; sent back, it returns to draft for another round.

## 03 Publish it in YouTube Studio

The publishing step has one way out: **Publish interactively**. Sign in to YouTube in your browser with the account that owns the channel first, then click it. Three things happen:

1. The title goes on your clipboard.
2. YouTube Studio opens in a new tab, on its upload window, for the channel your browser is signed in to.
3. The video downloads to your computer.

![The publishing step of a YouTube post: Publish interactively and the steps of the upload in YouTube Studio, with the post shown as YouTube's watch page on the right](/Images/help/youtube-publish.webp)

**How it goes, press by press** follows YouTube Studio's own order:

1. Check the channel name at the top right of YouTube Studio, and switch channel there if it isn't the right one.
2. Drop the downloaded video on the upload window.
3. Paste the title in the **Title** box.
4. Click **Copy the description**, then paste it in the **Description** box.
5. Add a thumbnail if you have one, and answer whether the video is made for kids: YouTube asks it of every upload.
6. If the video was made or changed by AI and looks real, answer **Yes** under **Altered content**.
7. Pick **Public**, **Unlisted** or **Private**, or **Schedule** to pick the hour, and publish in YouTube Studio.

**What to know before you post it** sums up the rest: YouTube Studio is where you pick the hour, and hubStudio is never told the video went out. Once it's live, set the status yourself under **Where it stands**, on the same step: pick published, paste the video's address in **Published URL (once live)**, and click **Save**.

### YouTube's limits

| Limit | Value |
|---|---|
| Title | 100 characters, no < or > |
| Description | 5,000 characters, no < or > |
| Hashtags | Past 60, YouTube ignores every one of them |
| Video types | MP4, MOV, MPEG, MPG, AVI, WMV, FLV, 3GP, WEBM (ProRes, DNxHR, CineForm and HEVC video inside a MOV or MP4 file) |
| Video size | 256 GB, or 12 hours |
| Over 15 minutes | Needs a YouTube account with a verified phone number |

## Take a post to other networks

**Re-purpose for other networks**, at the foot of the publishing step, turns this post into posts for [LinkedIn](/help/linkedin), [Instagram](/help/instagram), [Facebook](/help/facebook), [TikTok](/help/tiktok) or [X](/help/x). Tick the networks, then pick **Manually**, **Draft at once** or **Publish automatically**, as on every network. See [TikTok](/help/tiktok#take-a-post-to-other-networks).

The other networks can send their posts here too: a YouTube post drafted from another network starts at its video, and a network post without a video can't become one.

## Prepare the channel

YouTube lets no app create a channel. So the **Channel** tab prepares it, and then walks you through opening it on YouTube yourself. Your team has one channel kit, and it saves by itself a second after you stop typing (**Save** at the foot of the page does it at once).

![The Channel tab: What the channel is about with Write the kit with AI, then Name and handle, with the channel page as it will look on the right](/Images/help/youtube-channel.webp)

1. **What the channel is about.** Say who the channel is for and what they will watch, pick the **Language** and the model, then click **Write the kit with AI**. The AI proposes names, handles, a description and keywords, plus the prompts of the two pictures. Every field stays yours to edit.
2. **Name and handle.** Click the name and the handle you prefer among the proposals, or type your own. A **Channel name** is 50 characters at most. A **Handle** is 3 to 30 characters: letters, numbers, underscores, hyphens and periods, never one of those three at either end. Whether a handle is free is only known on YouTube, so keep a second one in mind.
3. **Description and keywords.** Edit the **Description** (1,000 characters) and the **Keywords** (500 characters). The first 150 characters of the description are what search and the channel page show. A keyword of several words goes between quotes.
4. **Links.** Click **+ Add a link** for each one, up to 14, each with the words shown for it. The first one also shows beside the description.
5. **Banner and profile picture.** See below.
6. **Open it on YouTube.** Follow the five steps (see [Open the channel on YouTube](#open-the-channel-on-youtube)), then paste the channel's address in **The channel's address, once it exists**.

On the right, **The channel page, as it will look** follows every keystroke. Once the address is in, it opens the channel.

### The banner and the profile picture

For each picture, you can:

- **Render with AI**: write what it shows (the kit fills the prompt for you), pick the engine (the list opens on the least expensive one for that picture), and click. The price shows before you press.
- **From the Assets Library**: pick a picture of your team. Free.
- **Upload a picture** from your computer. Free.

Whatever you start from, hubStudio keeps a copy at YouTube's size in the Assets Library, and the original stays as it is:

- the banner is cropped to 2560 x 1440. Only a strip in its middle shows on every screen, phones included: the dashed frame marks it, so keep any text or logo inside;
- the profile picture is cropped square at 800 x 800. YouTube shows it as a small circle.

**Download** saves the picture to your computer.

![The Banner and profile picture card: the banner with its dashed frame, the round profile picture, and under each Render with AI, From the Assets Library, Upload a picture and Download](/Images/help/youtube-channel-art.webp)

### Open the channel on YouTube

Sign in to YouTube with the Google account that will own the channel. Then, in **Open it on YouTube**:

1. **Create the channel.** **Copy the name and open YouTube** opens YouTube's channel creation page: paste the name, then **Copy the handle** and paste it. A company channel can also be a brand channel, managed by several people, which YouTube offers from its settings.
2. **Banner, picture and description.** **Download the banner and open YouTube Studio**, then **Download the picture** and **Copy the description**. In YouTube Studio, open **Customization**, then **Profile**: upload the two pictures, paste the description, and press **Publish**.
3. **Links.** **Copy the links** puts them all on your clipboard, one title and one address per line. Still in **Profile**, add each one.
4. **Keywords.** **Copy the keywords**, then in YouTube Studio open **Settings**, **Channel**, **Basic info**, and paste them in **Keywords**.
5. **Bring the address back.** Copy the new channel's address from YouTube and paste it in the kit.

## What it costs

Each paid step shows its price where you work. These are paid: **Write it with AI**, **Write another version**, a rewritten passage, **Improve with AI**, each clip rendered (per second), **Write the kit with AI**, and each banner or profile picture rendered with AI.

These cost nothing: writing the title and the description yourself, editing the clip in the Video editor (apart from the fast captions), a channel picture taken from the Assets Library or your computer, and publishing on YouTube, which you do yourself. Files are kept in the Assets Library and count toward storage. Every charge against your balance is listed in **Usage**, under **Credits** in the menu.

## Delete a post

**Delete** on the band removes the post from hubStudio for good, after you confirm. A video already on YouTube stays there. Admins can delete any post. You can delete your own post while it is still **Only me**. Nobody can delete a post while it waits for validation.

## When something goes wrong

**YouTube Studio opened on the wrong channel.** It opens on the channel your browser is signed in to. Switch channel from the picture at the top right of YouTube Studio, then upload.

**Nothing downloaded.** The post has no video yet, or the browser blocked the download. Add the video in step 01, or allow downloads for hubStudio, and click **Publish interactively** again.

**The handle is taken.** YouTube checks handles when you set them. Pick another proposal under **Handle**, or change yours, and paste it again.

**The video is limited to 15 minutes.** YouTube asks for a verified phone number before it takes a longer video. Verify the account on YouTube, then upload again.
