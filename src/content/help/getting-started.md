---
title: "Getting started with hubStudio"
seoTitle: "Getting started | hubStudio Help"
description: "What hubStudio is, how to create your account alone or with a team, the Discovery page your first sign-in opens on, how the menu is laid out, and how to make your first image."
excerpt: "Create your account, find your way around the menu and render your first image in a few minutes."
section: "getting-started"
order: 1
updated: 2026-10-17
appPaths: ["/signup", "/login", "/discover", "/explore"]
audience: "Everyone"
related: ["discovery-and-tips", "scratchpad", "troubleshooting", "explore", "create-an-image", "assets-library", "shorts-autopilot", "campaigns", "linkedin", "web", "validation", "agents", "balance-and-payments", "your-team", "account-and-sign-in", "client-space"]
shots:
  - file: "/Images/help/getting-started-signup.webp"
    route: "/signup"
    clip: "the Create your account card"
    alt: "The Create your account card: First name, Last name, Email, Country, the How you work list, the How did you hear about us? list, the Terms of Service box, the I'm not a robot check, ticked, and Send my code"
    captured: 2026-10-16
  - file: "/Images/help/getting-started-menu.webp"
    route: "/explore"
    clip: "#side-nav"
    alt: "The menu on the left in three pillars: Create with Explore, Image, Video, Image editor, Image anonymizer, Video editor and Shorts autopilot; Publish with Campaigns and the six networks; Library with Assets Library, History, Validation and PDF; Team and Credits at the foot"
    captured: 2026-10-08
  - file: "/Images/help/support-panel.webp"
    route: "/explore"
    alt: "The Support panel open under the bar at the top of the page: hubStudio Support, a question about inviting someone to the team and the answer, written from the help center"
    captured: 2026-10-16
sources: ["src/lib/app.ts", "src/layouts/Layout.astro", "src/scripts/supportPanel.ts", "src/styles/support-panel.css", "src/pages/s/[slug].astro", "src/scripts/scratchpad.ts", "src/lib/auth.ts", "src/middleware.ts", "src/pages/signup.astro", "src/lib/signup.ts", "src/lib/signup-fields.ts", "src/pages/discover.astro", "src/pages/login.astro", "src/lib/mfa.ts", "src/pages/invite/[token].astro", "src/pages/explore.astro"]
---

hubStudio is a studio for images, video, social posts and website articles made with AI. It gathers the image and video engines of several makers (OpenAI, Google, Black Forest Labs, ByteDance, Kling, Alibaba, xAI, MiniMax and Meta) in one place. You pick an engine, describe what you want, see the price, and run it. Everything you make is saved in your History and in the Assets Library, where you can also edit a picture or a video, or cut a long video into shorts. From there, you can write posts for LinkedIn, Instagram, Facebook, TikTok, YouTube and X and publish them on your own accounts, write and publish articles on your own website through GitHub in Web, have work approved in Validation, let agents watch your publishing, and deliver it to the clients your team works for.

Every run is charged against a prepaid balance held in US dollars. You can work alone, or in a team that shares one balance.

## Create your account

1. On the sign-in page, click **Create an account**.
2. Type your **First name**, **Last name** and **Email**. A name can't contain a web address or an email address.
3. Under **Country**, pick the country you work from. The list is written in the language of the page; when hubStudio can tell where you connect from, that country is already picked, and you change it if it is wrong.
4. Under **How you work**, open the list and pick one of the three options. **Just me** is picked to start with, and the line under the list explains the option you picked:
   - **Just me**: you create on your own, as a **Creator**, paid from your own balance. No team is created. You can create one later from the **Team** page, and you then become its Admin.
   - **Create a team**: you run it, invite people, and they create from one shared balance. A name field appears: type the name of your team, which can't contain a web address or an email address either.
   - **Join a team**: "Your team already uses hubStudio: an admin lets you in." A field appears where you type your team's name or your admin's email address.
5. Under **How did you hear about us?**, open the list, which reads **Choose an answer**, and pick the one that fits: **Google or another search engine**, **An AI assistant (ChatGPT, Gemini, Claude, Perplexity…)**, **An exhibition or a trade show**, **A referral, someone recommended us** or **Somewhere else**.
6. Tick the box to accept the Terms of Service.
7. Click **Send my code**, under the box marked **I'm not a robot**, which ticks itself while the page loads: there is nothing to click. hubStudio emails you a 6-digit code. Nothing is created before you enter it.

The country and the answer are both required: without them, the form says **Please choose your country.** or **Please tell us how you heard about us.** Your country shows on your page in the team, for your admins; how you heard about us stays with hubStudio.

![The Create your account card: First name, Last name, Email, Country, the How you work list, the How did you hear about us? list, the Terms of Service box, the I'm not a robot check, ticked, and Send my code](/Images/help/getting-started-signup.webp)

The code is valid for 20 minutes. Temporary mailboxes can't open an account: use your work or personal address. If the address already has an account, you receive an email saying so instead of a code.

### Enter the code

The next screen is **Check your inbox**.

- **Just me** or **Create a team**: type the code in **Verification code**, choose a **Password** of at least 8 characters, then click **Create my account**. You are signed in and land on **Discovery**, the page that presents everything you can do (see [Discovery and tips](/help/discovery-and-tips)).
- **Join a team**: type the code and click **Send my request**. No password is asked yet. The screen **Your request is sent** tells you that the team's admins have been told. Once one of them accepts, you receive an invitation by email. Open it, choose your password, and click **Join and sign in**: you land on **Discovery** too.

Nothing arriving? Check the spam folder, or click **start again** to correct the address.

## Sign in

Type your **Login** (your email address) and your **Password**, then click **Sign in**. The box marked **I'm not a robot** above the button ticks itself while the page loads and reads **Verified** a second later: it keeps scripts out, and there is nothing to click. The sign-in page speaks your browser's language, English, French or Chinese, and the language names under the card switch it. Once you're in, hubStudio speaks your language too; change it any time in **User Settings**, under **Language**. The very first time you sign in, hubStudio opens **Discovery**: every module of your menu, the first steps worth taking, the help center and a quick guided tour of the screen. If you were heading for a page, from a link in an email for instance, **Continue to your page** takes you there. After that, you land on **Explore**, or on the home page you chose in **User Settings**, and **Discovery** stays in the menu under your picture. A client login always lands on its **Client space**.

New teams also ask for a second step: a 6-digit sign-in code sent to your email address, valid for 10 minutes. Type it under **Sign-in code** and click **Confirm and sign in**. Leave **Trust this browser for 30 days, so it only asks for my password.** ticked on a computer you use every day. See [Account and sign-in](/help/account-and-sign-in) for the details.

Once you're in, hubStudio checks your connected social accounts in the background. If one needs reconnecting, a notification in the bottom right corner of the screen says so. See [Account and sign-in](/help/account-and-sign-in#the-connection-check-after-you-sign-in).

The first page after you sign in also brings a few tips, on a small card in the bottom right corner: how to do something, a feature you may have missed, a way to work faster. On your very first sign-in, they wait until you leave Discovery. See [Discovery and tips](/help/discovery-and-tips#tips-after-you-sign-in).

## Find your way around

The menu on the left groups the modules in three pillars, in the order you work: **Create** makes the picture or the clip, **Publish** puts it on the networks, **Library** keeps it. Click a pillar's name to fold it; the pillar of the page you are on always stays open. The housekeeping sits at the foot. This is the order every account starts with; **Arrange menu**, at the foot, moves the pillars, and the entries within each pillar, into your own order.

| Pillar | Menu entry | What it opens |
|---|---|---|
| **Create** | **Explore** | The gallery of every image and video engine you can use, with its price. See [Explore the engines](/help/explore). |
| **Create** | **Image** | The image studio: text to image, image editing, upscaling. See [Create an image](/help/create-an-image). |
| **Create** | **Video** | The video studio. See [Create a video](/help/create-a-video). |
| **Create** | **Image editor** | Frame a picture for X, Instagram or LinkedIn, write, draw, place a logo. See [The Image editor](/help/assets-library#the-image-editor). |
| **Create** | **Image anonymizer** | See what is hidden inside a picture (camera, place, AI tags), then download a clean copy. See [The Image anonymizer](/help/assets-library#the-image-anonymizer). |
| **Create** | **Video editor** | Frame a video for Instagram, TikTok or Facebook, trim it, add texts, captions word by word and music. See [The Video editor](/help/assets-library#the-video-editor). |
| **Create** | **Shorts autopilot** | A long video cut into vertical shorts by itself: the best moments, framed, captioned and saved. See [Shorts autopilot](/help/shorts-autopilot). |
| **Publish** | **Campaigns** | The files of one campaign gathered under a name and a brief, to write posts from. See [Campaigns](/help/campaigns). |
| **Publish** | **LinkedIn**, **Instagram**, **Facebook**, **TikTok**, **X** and **YouTube** | One module per network: write a post, add its picture or video, then schedule it or publish it on the accounts you connected. YouTube is published by you, in YouTube Studio, and also prepares your channel. See [LinkedIn](/help/linkedin), [Instagram](/help/instagram), [Facebook](/help/facebook), [TikTok](/help/tiktok), [X](/help/x) and [YouTube](/help/youtube). |
| **Publish** | **Web** | Connect a website repository on GitHub, plan articles with AI, edit site files from the browser, and run the editorial pipeline that researches, drafts, fact-checks, illustrates, translates and opens a pull request on your site. See [Web](/help/web). |
| **Library** | **Assets Library** | Every file of your team, uploads and renders, in folders. See [Assets Library and the tools](/help/assets-library). |
| **Library** | **History** | Everything you and your team made. See [History](/help/history). |
| **Library** | **Validation** | The work waiting for someone's approval, and what you sent for approval. See [Validation](/help/validation). |
| **Library** | **PDF** | Eight PDF tools that run in your browser: edit, merge, split, organize, rotate, extract, crop and compress. See [PDF tools](/help/pdf-tools). |
| | **Partner** | Only for commercial partners. See [Partners](/help/partners). |
| | **Team** | The people who share your balance, and your clients. See [Your team](/help/your-team). |
| | **Credits** | Your balance: **Buy credits** to top it up, **Invoices** and **Usage**. See [Balance and payments](/help/balance-and-payments). |

**Agents** and **Skills** are not in the menu: they are the AI layer, two buttons at the top of every page that work across the three pillars. On a phone, they sit at the top of the menu.

| Button | What it opens |
|---|---|
| **Agents** | Four tabs: **Personal** (your own agents), **Team** (the team's agents, administrators only), **Agents Command Room** (what is running now, what is switched on, and the previous runs) and **Catalog**. Agents watch your publishing on every network and tell you what changed. See [Agents](/help/agents). |
| **Skills** | Three tabs: **Personal** (your own skills), **Team** (the team's skills) and **Catalog**. Skills are the instructions that shape your prompts and posts. See [Skills](/help/skills). |

A client login sees a much shorter menu: **Client space** and **Validation**. See [Client space](/help/client-space).

![The menu on the left in three pillars: Create with Explore, Image, Video, Image editor, Image anonymizer, Video editor and Shorts autopilot; Publish with Campaigns and the six networks; Library with Assets Library, History, Validation and PDF; Team and Credits at the foot](/Images/help/getting-started-menu.webp)

The bar at the top of every page holds:

- **Agents** and **Skills**, the AI layer (see above). A module your administrator switched off for you shows no button.
- **Scratchpad** (the page icon): your own notes, files and recordings, in a drawer that opens over any page. **Alt+N** opens and closes it. See [Scratchpad](/help/scratchpad).
- **Support**: a chat that answers your questions about hubStudio from this help center (see below).
- **Activity**: the renders, drafts and checks running for you, and how they ended. It keeps following a run while you move to another page, and a card in the bottom right corner tells you when one ends. Coming back to more than five finished runs, you get a card for the five newest and one **While you were away** card with the count and a **More** button that opens your [Log](/help/log). **See everything in the Log**, at the foot of the panel, opens it too, and **Clear finished** takes the finished runs off the panel without deleting them: they stay in the Log.
- Your balance: the amount you can spend right now. Click it to top up. A client login has no balance, so it sees no amount here.
- A sun or moon button that switches between light and dark.
- Your picture, which opens a menu with **User Settings**, **Log** (your own history of runs, notifications, emails, sign-ins and spending, see [Log](/help/log)), **Discovery**, **Billing & credits**, **Team**, **My Connections** (your social accounts) and **Sign out**.

The footer links to the **Help center**, **Report a bug**, **Contact us** and **What's new**.

## Ask Support

Click **Support** in the bar at the top of the page. A panel opens under the bar, over the page you are on, with **hubStudio Support**: an AI assistant that answers from this help center. The panel speaks the language of your interface, and the assistant answers in the language you write in. Type your question in **Ask a question…** and click **Send**. Each answer lists the help articles it comes from under **Sources:**.

![The Support panel open under the bar at the top of the page: hubStudio Support, a question about inviting someone to the team and the answer, written from the help center](/Images/help/support-panel.webp)

The panel keeps the conversation while you stay on the page: close it with the cross or **Escape**, open it again and carry on. Asking costs you nothing.

When the assistant can't answer, it offers **Send an email** and **Fill in the form**. The form opens with your name and email already filled in and your question in the message: click **Send**, and a person from hubStudio gets back to you.

## Your first render

1. Make sure your balance isn't empty. The amount in the top bar is what you can spend. If it's at zero, top up first on **Credits** > **Buy credits**. See [Balance and payments](/help/balance-and-payments).
2. Open **Explore** and pick an image engine. Each card shows what one run costs. Click the card: the image studio opens, already set on that engine.
3. In the box **Describe your image**, write what you want to see: the subject, the light, the surface, the mood.
4. Look at the price next to the **Generate image** button. It is what the run will cost.
5. Click **Generate image**. A tab opens on the right with **Generating** and the seconds elapsed, then **Ready**.
6. Click **Download image** to save the file, or find it later in **History**, where it is already saved.

A run is charged only when it succeeds. A failed render costs nothing.
