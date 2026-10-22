---
title: "WeChat"
seoTitle: "WeChat posts, articles and Channels | hubStudio Help"
description: "Write WeChat posts in hubStudio: Official Account articles, image posts and Channels videos, written in Chinese with their English reading."
excerpt: "WeChat in hubStudio writes your Official Account articles, image posts, short texts and Channels videos in Chinese, with an English reading, then hands them over."
section: "social"
order: 13.1
updated: 2026-10-22
shots: []
appPaths: ["/social/wechat/posts"]
audience: "Creators and admins; viewers read"
related: ["youtube", "x", "tiktok", "validation", "assets-library", "balance-and-payments"]
sources: ["src/pages/social/wechat/posts.astro", "src/lib/social/chinese-formats.ts", "src/lib/social/chinese.ts", "src/lib/social/limits.ts", "src/components/panels/CnFormatBlock.astro", "src/components/panels/SocialContentPanel.astro", "src/scripts/socialContent.ts", "src/pages/api/social-content/draft.ts", "src/pages/api/social-content/translate.ts", "src/pages/api/social-content/versions.ts", "src/lib/social-format-skills.ts", "src/components/SocialNav.astro", "src/layouts/Layout.astro"]
---

WeChat in hubStudio is where creators prepare posts for a brand's Official Account (公众号) and its WeChat Channels (视频号). The app writes each post in Simplified Chinese, in the format you pick, with its English reading beside it, then hands it over to WeChat, where you publish it yourself.

## Where you find it

Open **WeChat** in the menu, under **Publish**. The page holds every WeChat post of the brand, from first draft to published.

## Why you publish it yourself

WeChat offers no way for an app like this one to publish for an ordinary brand account. So hubStudio doesn't connect to a WeChat account. It writes and checks the post, then the last step opens WeChat's own page with everything ready to paste. The post leaves from the brand's own account, which WeChat asks to be registered with a Chinese phone number.

## Pick the format

A WeChat post starts at the brief, and the first choice is the format: what you're publishing, the way WeChat names it. Each format is a card saying what it is, whether it's posted from a computer or only from the phone app, and what its composer takes.

| Format | What it is | Posted from |
|---|---|---|
| **Official Account article** (公众号图文) | The long read: a title, an author, a summary, the article and a 2.35:1 cover. | Computer or phone |
| **Official Account image post** (贴图) | Up to 20 pictures followers swipe through, with a title and up to 1,000 characters. | Computer or phone |
| **Official Account short text** (文字消息) | A few lines sent like a message. | Computer or phone |
| **Official Account video** (视频消息) | A video with a title, a short description and a 16:9 cover. | Computer or phone |
| **Channels video** (视频号视频) | A video on WeChat Channels, with a short title, a description and its topics. | Computer or phone |
| **Channels image post** (视频号图文) | Pictures on Channels with a description. | Computer or phone |

Under the cards, the picked format asks its own questions, and only those. **What it takes, and what the draft writes** lists the limits of every field.

The questions depend on the format:

- **Official Account article**: the **Author (作者)**, 8 characters at most; the **Length**; a **Read more link (阅读原文)**, the one clickable link of an article, placed under it; and **Declare it original (原创声明)**, which needs at least 300 original characters.
- **Channels video**: a **Location to tag**, an **Article to link (扩展链接)** (only an Official Account article can be linked under a Channels video), and whether the video is made with AI.
- **Channels image post**: a location, and whether the pictures are made with AI.
- Every format: **What the reader should do**, the action the post ends on.

## Write the brief

1. Pick the format and answer its questions.
2. Write the brief in English or in Chinese: the angle, who it speaks to, what the post has to achieve. Attach material if you have some, as on any network.
3. Press **Draft with AI**, or **Write it myself** to write it by hand.

The draft comes back with every field the format's composer asks for, in Chinese, and lands in the copy step. An article also gets its **Summary (摘要)**, the 120 characters shown under the title in the chat list.

Every draft is checked against the format's limits when it comes back, and one that breaks a rule gets a single repair pass from the AI. A field still too long is cut to fit at the end of a sentence.

## Written in Chinese, read in English

Every post here is written in Simplified Chinese. There's no language to pick: write the brief in English or in Chinese, and the post comes out in Simplified Chinese either way.

You don't need to read Chinese to run it. Every field the AI writes comes with its English reading:

- **What it says, in English**, under the editor, holds the English of the title and the copy. When you change the Chinese, the box says the reading is of an earlier wording. Press **Read it again in English** to translate what's in the editor now.
- Each of the format's other fields shows its English in italics under its box.
- **Write it in English, publish it in Chinese**, in the copy step, takes a post you wrote in English and localizes it into Chinese under WeChat's rules. The Chinese becomes the post's next version, with its English reading.

If you read Chinese, tick **I read Chinese** once. The English readings then stay folded for you in this browser.

Under the reading, the app flags what WeChat would refuse or penalize, and words the Advertising Law (广告法) forbids in a brand's claims, such as 第一, 最佳 or 顶级.

## Pictures and video

After the copy, the post's pictures or video come in the next step, in the shape the format takes: render them with AI at the price shown, pick them from the Assets Library or upload your own. A render makes up to 8 pictures; add more from the library or your computer. An image post's first picture is its cover. An article's cover is set in WeChat's editor: make it 2.35:1 (900 x 383).

The [image editor](/help/assets-library#the-image-editor) and the [video editor](/help/assets-library#the-video-editor) both have a WeChat panel with its shapes: the article cover and its 1:1 thumbnail, the image post at 3:4, the Channels cover, and the Channels video upright or across.

## Publish on WeChat

The publishing step has one way out: **Publish interactively**. Press it and:

1. The pictures or the video download to your computer.
2. The right WeChat page (the Official Account platform, or the Channels assistant for a Channels post) opens in a new tab.
3. The title (the text, for a short text) goes on your clipboard.

The steps under the button follow the format's own composer, in the order it asks for each field. Every field waits behind its own Copy button: **Copy the title**, **Copy the text**, and one for each of the format's other fields.

Once the post is live, paste its address under **Where it stands**, lower in the publishing step, and set the post to published. The app is never told about it otherwise.

### Limits

| Limit | Value |
|---|---|
| Article | Title 64, author 8, summary 120, article 20,000 characters |
| Image post | 1 to 20 pictures, title 64, text 1,000 characters |
| Short text | 300 characters |
| Official Account video | 2 seconds to 60 minutes, title 64 |
| Channels video | 3 seconds to 60 minutes, 2 GB, short title 6 to 16 characters, description 1,000 characters with up to 5 topics |
| Channels image post | 1 to 18 pictures from a computer, description 1,000 characters |
| Pictures | JPG or PNG, 10 MB each |
| Mass sends | A subscription account pushes once a day, up to 8 articles a push; a service account four times a month |

WeChat makes no link in a post clickable, except the 阅读原文 link under an article and the extended link under a Channels video: the draft never writes a URL in the copy.

## What it costs

Publishing on WeChat costs nothing: the post is yours to send. Drafting with AI, **Translate into Chinese**, **Read it again in English** and rendering pictures or a video are charged to your balance, and each price shows before you press. **Write it myself** is free. See [balance and payments](/help/balance-and-payments).

## Who can do this

Creators and admins write the posts. Viewers can read them, with their English readings. Client logins see a post only when it was made for their client. See [your team](/help/your-team).

## Troubleshooting

**The composer opened on the wrong account.** WeChat opens on the account your browser is signed in to. Sign out there, sign in with the brand's account, and press **Publish interactively** again.

**The English reading says it's of an earlier wording.** The Chinese changed since it was read. Press **Read it again in English** before you post.

**The article was refused for its length.** WeChat's editor and its tools report different limits. The app keeps the tighter one, but if WeChat still stops you, shorten the article in the editor and paste it again.
