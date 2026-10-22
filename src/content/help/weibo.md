---
title: "Weibo"
seoTitle: "Weibo posts and headline articles | hubStudio Help"
description: "Write Weibo posts in hubStudio: posts, picture posts, video posts and headline articles, in Chinese with their English reading."
excerpt: "Weibo in hubStudio writes posts, picture posts, video posts and headline articles in Chinese, with an English reading, polls or giveaways, then hands them over."
section: "social"
order: 13.4
updated: 2026-10-22
shots: []
appPaths: ["/social/weibo/posts"]
audience: "Creators and admins; viewers read"
related: ["youtube", "x", "tiktok", "validation", "assets-library", "balance-and-payments"]
sources: ["src/pages/social/weibo/posts.astro", "src/lib/social/chinese-formats.ts", "src/lib/social/chinese.ts", "src/lib/social/limits.ts", "src/components/panels/CnFormatBlock.astro", "src/components/panels/SocialContentPanel.astro", "src/scripts/socialContent.ts", "src/pages/api/social-content/draft.ts", "src/pages/api/social-content/translate.ts", "src/pages/api/social-content/versions.ts", "src/lib/social-format-skills.ts", "src/components/SocialNav.astro", "src/layouts/Layout.astro"]
---

Weibo (微博) in hubStudio is where creators prepare a brand's Weibo posts. The app writes each post in Simplified Chinese, in the format you pick, with its English reading beside it, then hands it over to Weibo, where you publish it yourself.

## Where you find it

Open **Weibo** in the menu, under **Publish**. The page holds every Weibo post of the brand, from first draft to published.

## Why you publish it yourself

Weibo's publishing access for apps takes 140 characters and no topics, far less than a brand's post. So hubStudio doesn't connect to a Weibo account. It writes and checks the post, then the last step opens Weibo's own page with everything ready to paste. The post leaves from the brand's own account, which Weibo asks to be registered with a Chinese phone number.

## Pick the format

A Weibo post starts at the brief, and the first choice is the format: what you're publishing, the way Weibo names it. Each format is a card saying what it is, whether it's posted from a computer or only from the phone app, and what its composer takes.

| Format | What it is | Posted from |
|---|---|---|
| **Post** (微博) | Up to 2,000 characters, folded after the first 140, with a poll or a giveaway if you want one. | Computer or phone |
| **Picture post** (图片微博) | A post with up to 9 pictures in a grid. | Computer or phone |
| **Video post** (视频微博) | A video with its own title and the post above it. | Computer or phone |
| **Headline article** (头条文章) | The long read, written in Weibo's article editor. It can't be scheduled. | Computer or phone |

Under the cards, the picked format asks its own questions, and only those. **What it takes, and what the draft writes** lists the limits of every field.

The questions depend on the format:

- **Post**: a **Link to share**, **Add a poll** (up to 8 options) and **Run a giveaway**, through Weibo's giveaway platform (微博抽奖平台).
- **Picture post**: a link, and a poll.
- **Video post**: **Declare it original (原创)** and the **Collection (合集)** it belongs to.
- **Headline article**: the **Length**.
- Every format: **What the reader should do**.

## Write the brief

1. Pick the format and answer its questions.
2. Write the brief in English or in Chinese: the angle, who it speaks to, what the post has to achieve. Attach material if you have some, as on any network.
3. Press **Draft with AI**, or **Write it myself** to write it by hand.

The draft comes back with every field the format's composer asks for, in Chinese, and lands in the copy step. Depending on the answers, it also gets the poll's question and options, or the **Lead (导语)** of a headline article.

Every draft is checked against the format's limits when it comes back, and one that breaks a rule gets a single repair pass from the AI. A field still too long is cut to fit at the end of a sentence.

## Written in Chinese, read in English

Every post here is written in Simplified Chinese. There's no language to pick: write the brief in English or in Chinese, and the post comes out in Simplified Chinese either way.

You don't need to read Chinese to run it. Every field the AI writes comes with its English reading:

- **What it says, in English**, under the editor, holds the English of the title and the copy. When you change the Chinese, the box says the reading is of an earlier wording. Press **Read it again in English** to translate what's in the editor now.
- Each of the format's other fields shows its English in italics under its box.
- **Write it in English, publish it in Chinese**, in the copy step, takes a post you wrote in English and localizes it into Chinese under Weibo's rules. The Chinese becomes the post's next version, with its English reading.

If you read Chinese, tick **I read Chinese** once. The English readings then stay folded for you in this browser.

Under the reading, the app flags what Weibo would refuse or penalize, and words the Advertising Law (广告法) forbids in a brand's claims, such as 第一, 最佳 or 顶级.

## Pictures and video

After the copy, the post's pictures or video come in the next step, in the shape the format takes: render them with AI at the price shown, pick them from the Assets Library or upload your own. A render makes up to 8 pictures; add more from the library or your computer. Several pictures show as a grid of squares: keep each subject in the middle. A headline article's cover is set in Weibo's editor: make it 1000 x 562, with the point inside the middle 1000 x 400.

The [image editor](/help/assets-library#the-image-editor) and the [video editor](/help/assets-library#the-video-editor) both have a Weibo panel with its shapes: the grid square, upright and across pictures, the headline article cover with the band the feed keeps, and the video upright or across.

## Publish on Weibo

The publishing step has one way out: **Publish interactively**. Press it and:

1. The pictures or the video download to your computer.
2. Weibo opens in a new tab.
3. The copy (the video title, for a video post; the title, for a headline article) goes on your clipboard.

The steps under the button follow the format's own composer, in the order it asks for each field. Every field waits behind its own Copy button: **Copy the title**, **Copy the text**, and one for each of the format's other fields.

Once the post is live, paste its address under **Where it stands**, lower in the publishing step, and set the post to published. The app is never told about it otherwise.

### Limits

| Limit | Value |
|---|---|
| Post | 2,000 characters (5,000 in Weibo's own help; the composer stops at 2,000) |
| Topics | Written #话题# with a hash on both sides, 4 to 32 characters, 1 or 2 per post |
| Pictures | Up to 9, JPG, PNG or GIF, 20 MB each; a GIF over 1080 pixels wide may show still |
| Video | 3 seconds to 15 minutes, 4 GB from a phone; video title 6 to 30 characters |
| Headline article | Title 32, lead 44 characters |
| Poll | Up to 8 options |

A link opens behind a warning unless its site is on Weibo's whitelist, which a verified brand account (蓝V) registers for its own domain. Weibo shows the first 140 characters of a post and folds the rest: the draft puts the point there.

## What it costs

Publishing on Weibo costs nothing: the post is yours to send. Drafting with AI, **Translate into Chinese**, **Read it again in English** and rendering pictures or a video are charged to your balance, and each price shows before you press. **Write it myself** is free. See [balance and payments](/help/balance-and-payments).

## Who can do this

Creators and admins write the posts. Viewers can read them, with their English readings. Client logins see a post only when it was made for their client. See [your team](/help/your-team).

## Troubleshooting

**The composer opened on the wrong account.** Weibo opens on the account your browser is signed in to. Sign out there, sign in with the brand's account, and press **Publish interactively** again.

**The English reading says it's of an earlier wording.** The Chinese changed since it was read. Press **Read it again in English** before you post.

**The topic doesn't turn into a link.** A Weibo topic needs a hash on both sides, #话题#, with no space inside. The checks flag one missing its closing hash.
