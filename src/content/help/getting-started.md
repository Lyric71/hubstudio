---
title: "Getting started with hubStudio"
seoTitle: "Getting started | hubStudio Help"
description: "What hubStudio is, how to create your account alone or with a team, how the menu is laid out, and how to make your first image."
excerpt: "Create your account, find your way around the menu and render your first image in a few minutes."
section: "getting-started"
order: 1
updated: 2026-10-01
appPaths: ["/signup", "/login", "/explore"]
audience: "Everyone"
related: ["explore", "create-an-image", "assets-library", "shorts-autopilot", "linkedin", "validation", "balance-and-payments", "your-team", "account-and-sign-in", "client-space"]
shots:
  - file: "/Images/help/getting-started-menu.webp"
    route: "/explore"
    clip: "#side-nav"
    alt: "The menu on the left: Explore, Image, Video, History, Assets Library, Image editor, Video editor, Shorts autopilot, the five networks, Validation and Skills, with Team and Credits at the foot"
    captured: 2026-10-01
sources: ["src/lib/app.ts", "src/layouts/Layout.astro", "src/lib/auth.ts", "src/middleware.ts", "src/pages/signup.astro", "src/lib/signup.ts", "src/pages/login.astro", "src/lib/mfa.ts", "src/pages/invite/[token].astro", "src/pages/explore.astro"]
---

hubStudio is a studio for images, video and social posts made with AI. It gathers the image and video engines of several makers (OpenAI, Google, Black Forest Labs, ByteDance, Kling, Alibaba, xAI, MiniMax and Meta) in one place. You pick an engine, describe what you want, see the price, and run it. Everything you make is saved in your History and in the Assets Library, where you can also edit a picture or a video, or cut a long video into shorts. From there, you can write posts for LinkedIn, Instagram, Facebook, TikTok and X and publish them on your own accounts, have work approved in Validation, and deliver it to the clients your team works for.

Every run is charged against a prepaid balance held in US dollars. You can work alone, or in a team that shares one balance.

## Create your account

1. On the sign-in page, click **Create an account**.
2. Type your **First name**, **Last name** and **Email**.
3. Under **How you work**, pick one of the three options:
   - **Just me**: you create on your own, paid from your own balance, and can invite people later. hubStudio opens a team of one for you, named after you, and you are its administrator.
   - **Create a team**: you run it, invite people, and they create from one shared balance. A name field appears: type the name of your team.
   - **Join a team**: "Your team already uses hubStudio: an admin lets you in." A field appears where you type your team's name or your admin's email address.
4. Tick the box to accept the Terms of Service.
5. Click **Send my code**. hubStudio emails you a 6-digit code. Nothing is created before you enter it.

The code is valid for 20 minutes. Temporary mailboxes can't open an account: use your work or personal address. If the address already has an account, you receive an email saying so instead of a code.

### Enter the code

The next screen is **Check your inbox**.

- **Just me** or **Create a team**: type the code in **Verification code**, choose a **Password** of at least 8 characters, then click **Create my account**. You are signed in and land on **Explore**.
- **Join a team**: type the code and click **Send my request**. No password is asked yet. The screen **Your request is sent** tells you that the team's admins have been told. Once one of them accepts, you receive an invitation by email. Open it, choose your password, and click **Join and sign in**.

Nothing arriving? Check the spam folder, or click **start again** to correct the address.

## Sign in

Type your **Login** (your email address) and your **Password**, then click **Sign in**. The sign-in page speaks your browser's language, English, French or Chinese, and the language names under the card switch it; hubStudio itself is in English once you're in. You land on **Explore**, or on the home page you chose in **User Settings**. A client login always lands on its **Client space**.

New teams also ask for a second step: a 6-digit sign-in code sent to your email address, valid for 10 minutes. Type it under **Sign-in code** and click **Confirm and sign in**. Leave **Trust this browser for 30 days, so it only asks for my password.** ticked on a computer you use every day. See [Account and sign-in](/help/account-and-sign-in) for the details.

Once you're in, hubStudio checks your connected social accounts in the background. If one needs reconnecting, a notification in the bottom right corner of the screen says so. See [Account and sign-in](/help/account-and-sign-in#the-connection-check-after-you-sign-in).

## Find your way around

The menu on the left holds the studio first, then the networks and Validation, then the housekeeping at the foot:

| Menu entry | What it opens |
|---|---|
| **Explore** | The gallery of every image and video engine you can use, with its price. See [Explore the engines](/help/explore). |
| **Image** | The image studio: text to image, image editing, upscaling. See [Create an image](/help/create-an-image). |
| **Video** | The video studio. See [Create a video](/help/create-a-video). |
| **History** | Everything you and your team made. See [History](/help/history). |
| **Assets Library** | **Assets**: every file of your team, uploads and renders, in folders. **Tools**: the Image anonymizer, and a switch to every tool. See [Assets Library and its Tools](/help/assets-library). |
| **Image editor** | Frame a picture for X, Instagram or LinkedIn, write, draw, place a logo. See [The Image editor](/help/assets-library#the-image-editor). |
| **Video editor** | Frame a video for Instagram, TikTok or Facebook, trim it, add texts, captions word by word and music. See [The Video editor](/help/assets-library#the-video-editor). |
| **Shorts autopilot** | A long video cut into vertical shorts by itself: the best moments, framed, captioned and saved. See [Shorts autopilot](/help/shorts-autopilot). |
| **LinkedIn**, **Instagram**, **Facebook**, **TikTok** and **X** | One module per network: write a post, add its picture or video, then schedule it or publish it on the accounts you connected. See [LinkedIn](/help/linkedin), [Instagram](/help/instagram), [Facebook](/help/facebook), [TikTok](/help/tiktok) and [X](/help/x). |
| **Validation** | The work waiting for someone's approval, and what you sent for approval. See [Validation](/help/validation). |
| **Skills** | **My skills**, **Team skills** (administrators only) and the **Catalog**. See [Skills](/help/skills). |
| **Partner** | Only for commercial partners. See [Partners](/help/partners). |
| **Team** | The people who share your balance, and your clients. See [Your team](/help/your-team). |
| **Credits** | Your balance: **Buy credits** to top it up, **Invoices** and **Usage**. See [Balance and payments](/help/balance-and-payments). |

A client login sees a much shorter menu: **Client space** and **Validation**. See [Client space](/help/client-space).

![The menu on the left: Explore, Image, Video, History, Assets Library, Image editor, Video editor, Shorts autopilot, the five networks, Validation and Skills, with Team and Credits at the foot](/Images/help/getting-started-menu.webp)

The bar at the top of every page holds:

- **Activity**: the renders, drafts and checks running for you, and how they ended. It keeps following a run while you move to another page.
- Your balance: the amount you can spend right now. Click it to top up. A client login has no balance, so it sees no amount here.
- A sun or moon button that switches between light and dark.
- Your picture, which opens a menu with **User Settings**, **Billing & credits**, **Team**, **My Connections** (your social accounts) and **Sign out**.

The footer links to the **Help center**, **Report a bug**, **Contact us** and **What's new**.

## Your first render

1. Make sure your balance isn't empty. The amount in the top bar is what you can spend. If it's at zero, top up first on **Credits** > **Buy credits**. See [Balance and payments](/help/balance-and-payments).
2. Open **Explore** and pick an image engine. Each card shows what one run costs. Click the card: the image studio opens, already set on that engine.
3. In the box **Describe your image**, write what you want to see: the subject, the light, the surface, the mood.
4. Look at the price next to the **Generate image** button. It is what the run will cost.
5. Click **Generate image**. A tab opens on the right with **Generating** and the seconds elapsed, then **Ready**.
6. Click **Download image** to save the file, or find it later in **History**, where it is already saved.

A run is charged only when it succeeds. A failed render costs nothing.
