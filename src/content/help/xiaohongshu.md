---
title: "Xiaohongshu"
seoTitle: "Xiaohongshu (RED) notes | hubStudio Help"
description: "Write Xiaohongshu (RED) notes in hubStudio: picture notes, video notes, text cards and long articles, in Chinese with their English reading."
excerpt: "Xiaohongshu in hubStudio writes picture notes, video notes, text cards and long articles in Chinese, with an English reading, then hands them over to RED."
section: "social"
order: 13.2
updated: 2026-10-22
shots: []
appPaths: ["/social/xiaohongshu/posts"]
audience: "Creators and admins; viewers read"
related: ["youtube", "x", "tiktok", "validation", "assets-library", "balance-and-payments"]
sources: ["src/pages/social/xiaohongshu/posts.astro", "src/lib/social/chinese-formats.ts", "src/lib/social/chinese.ts", "src/lib/social/limits.ts", "src/components/panels/CnFormatBlock.astro", "src/components/panels/SocialContentPanel.astro", "src/scripts/socialContent.ts", "src/pages/api/social-content/draft.ts", "src/pages/api/social-content/translate.ts", "src/pages/api/social-content/versions.ts", "src/lib/social-format-skills.ts", "src/components/SocialNav.astro", "src/layouts/Layout.astro"]
---

Xiaohongshu (小红书, also called RED) in hubStudio is where creators prepare a brand's notes. The app writes each note in Simplified Chinese, in the format you pick, with its English reading beside it, then hands it over to Xiaohongshu, where you publish it yourself.

## Where you find it

Open **Xiaohongshu** in the menu, under **Publish**. The page holds every Xiaohongshu post of the brand, from first draft to published.

## Why you publish it yourself

Xiaohongshu offers no way for an app like this one to publish for an ordinary brand account. So hubStudio doesn't connect to a Xiaohongshu account. It writes and checks the post, then the last step opens Xiaohongshu's own page with everything ready to paste. The post leaves from the brand's own account, which Xiaohongshu asks to be registered with a Chinese phone number.

## Pick the format

A Xiaohongshu post starts at the brief, and the first choice is the format: what you're publishing, the way Xiaohongshu names it. Each format is a card saying what it is, whether it's posted from a computer or only from the phone app, and what its composer takes.

| Format | What it is | Posted from |
|---|---|---|
| **Picture note** (图文笔记) | 1 to 18 pictures, a title of 20 characters and a note of up to 1,000. | Computer or phone |
| **Video note** (视频笔记) | A video of up to 15 minutes with a 3:4 cover. | Computer or phone |
| **Text card note** (文字配图) | No picture to make: the app turns a short text into designed cards. | Phone app only |
| **Long article** (长文) | A long read laid out as swipeable pages. Not open to every account yet. | Phone app only |

Under the cards, the picked format asks its own questions, and only those. **What it takes, and what the draft writes** lists the limits of every field.

The questions depend on the format:

- **Picture note**: **Big words on the cover**, the short line set large on the first picture; a **Location to tag**; **Add a poll**; and whether the pictures are made with AI.
- **Video note**: the cover line, **Chapters** for a video of a few minutes, a location, and whether the video is made with AI.
- **Long article**: the **Length**.
- Every format: **What the reader should do**.

## Write the brief

1. Pick the format and answer its questions.
2. Write the brief in English or in Chinese: the angle, who it speaks to, what the post has to achieve. Attach material if you have some, as on any network.
3. Press **Draft with AI**, or **Write it myself** to write it by hand.

The draft comes back with every field the format's composer asks for, in Chinese, and lands in the copy step. Depending on the answers, it also gets the **Cover line (封面文字)**, the poll's question and options, the **Chapters (章节)**, the **Card text (文字配图)** of a text card note, or the **Summary (摘要)** of a long article.

Every draft is checked against the format's limits when it comes back, and one that breaks a rule gets a single repair pass from the AI. A field still too long is cut to fit at the end of a sentence.

## Written in Chinese, read in English

Every post here is written in Simplified Chinese. There's no language to pick: write the brief in English or in Chinese, and the post comes out in Simplified Chinese either way.

You don't need to read Chinese to run it. Every field the AI writes comes with its English reading:

- **What it says, in English**, under the editor, holds the English of the title and the copy. When you change the Chinese, the box says the reading is of an earlier wording. Press **Read it again in English** to translate what's in the editor now.
- Each of the format's other fields shows its English in italics under its box.
- **Write it in English, publish it in Chinese**, in the copy step, takes a post you wrote in English and localizes it into Chinese under Xiaohongshu's rules. The Chinese becomes the post's next version, with its English reading.

If you read Chinese, tick **I read Chinese** once. The English readings then stay folded for you in this browser.

Under the reading, the app flags what Xiaohongshu would refuse or penalize, such as a link, a phone number or a WeChat ID in the copy, and words the Advertising Law (广告法) forbids in a brand's claims, such as 第一, 最佳 or 顶级.

## Pictures and video

After the copy, the post's pictures or video come in the next step, in the shape the format takes: render them with AI at the price shown, pick them from the Assets Library or upload your own. A render makes up to 8 pictures; add more from the library or your computer. Every picture of a note takes the shape of the first one: 3:4 (1080 x 1440) fills the two-column feed best.

The [image editor](/help/assets-library#the-image-editor) and the [video editor](/help/assets-library#the-video-editor) both have a Xiaohongshu panel with its shapes: the note at 3:4, 1:1 or 4:3, and the video note at 3:4 or upright.

## Publish on Xiaohongshu

The publishing step has one way out: **Publish interactively**. Press it and:

1. The pictures or the video download to your computer.
2. Xiaohongshu's creator page opens in a new tab.
3. The title goes on your clipboard.

The steps under the button follow the format's own composer, in the order it asks for each field. Every field waits behind its own Copy button: **Copy the title**, **Copy the text**, and one for each of the format's other fields.

Once the post is live, paste its address under **Where it stands**, lower in the publishing step, and set the post to published. The app is never told about it otherwise.

### Limits

| Limit | Value |
|---|---|
| Title | 20 characters, punctuation and emoji included |
| Note | 1,000 characters, topics included; 10 topics at most |
| Picture note | 1 to 18 pictures, JPG or PNG, 10 MB each, one shape per note |
| Video note | Up to 15 minutes, 5 GB, MP4 or MOV |
| Card text | 140 characters |
| Long article | Article 6,000 characters, summary 100 |

Xiaohongshu throttles, mutes and then bans accounts whose notes send people elsewhere: no link, phone number, WeChat ID, email address or QR code, in the copy or on the pictures. The draft never writes one, and the checks flag one you type. Sponsored notes go through Xiaohongshu's own cooperation platform (蒲公英), not through words in the note.

## What it costs

Publishing on Xiaohongshu costs nothing: the post is yours to send. Drafting with AI, **Translate into Chinese**, **Read it again in English** and rendering pictures or a video are charged to your balance, and each price shows before you press. **Write it myself** is free. See [balance and payments](/help/balance-and-payments).

## Who can do this

Creators and admins write the posts. Viewers can read them, with their English readings. Client logins see a post only when it was made for their client. See [your team](/help/your-team).

## Troubleshooting

**The composer opened on the wrong account.** Xiaohongshu opens on the account your browser is signed in to. Sign out there, sign in with the brand's account, and press **Publish interactively** again.

**The English reading says it's of an earlier wording.** The Chinese changed since it was read. Press **Read it again in English** before you post.

**The text card note and the long article don't open on a computer.** Both are made in the Xiaohongshu app. Press **Copy the card text** or **Copy the text**, send it to your phone, and follow the steps there.
