---
title: "Account and sign-in"
seoTitle: "Your account settings and signing in | hubStudio Help"
description: "The interface in English, French or Chinese, your name, picture, sign-in email and password, the sign-in code sent by email, your social accounts on My Connections, the connection check after sign-in, light or dark, date and time, the weekly digest of what changed, the engines in your lists, voice input, and how to reset a forgotten password."
excerpt: "Everything in User Settings that applies to you, your social accounts, and how signing in, the connection check and password recovery work."
section: "account"
order: 18
updated: 2026-10-05
appPaths: ["/settings", "/my-connections", "/connections-check", "/login", "/forgot-password", "/reset-password"]
audience: "Everyone"
related: ["getting-started", "linkedin", "instagram", "facebook", "tiktok", "x", "explore", "balance-and-payments", "troubleshooting"]
shots:
  - file: "/Images/help/account-and-sign-in-security.webp"
    route: "/settings"
    clip: "#security"
    alt: "The Sign-in and security card in Settings, with the Login email, Password and Sign-in code tabs"
    captured: 2026-09-27
  - file: "/Images/help/account-and-sign-in-my-connections.webp"
    route: "/my-connections"
    alt: "My Connections: the Your social accounts card with one card per network, LinkedIn, Instagram, Facebook, TikTok and X, each with its steps and Connect an account"
    captured: 2026-09-27
  - file: "/Images/help/account-and-sign-in-appearance.webp"
    route: "/settings"
    clip: "#appearance"
    alt: "The Appearance card in Settings, with the System, Light and Dark choices and a preview"
    captured: 2026-09-27
  - file: "/Images/help/account-and-sign-in-language.webp"
    route: "/login"
    clip: "the sign-in card, in a browser set to French"
    alt: "The sign-in card as a browser set to French shows it, with English, Français and 中文 under the card and Français picked"
    captured: 2026-09-28
  - file: "/Images/help/account-and-sign-in-digest.webp"
    route: "/settings"
    clip: "#digest"
    alt: "The Weekly digest card in Settings: Send me the weekly digest of what's new and Email me when a new AI model is added, both on, the unsubscribe note, See what's new and Manage all your emails"
    captured: 2026-09-29
sources: ["src/pages/settings.astro", "src/pages/login.astro", "src/lib/mfa.ts", "src/pages/forgot-password.astro", "src/pages/reset-password.astro", "src/components/ThemeSwitch.astro", "src/layouts/Layout.astro", "src/pages/my-connections.astro", "src/scripts/socialAccounts.ts", "src/lib/social/connect-guide.ts", "src/lib/connection-health.ts", "src/scripts/connectionCheckNotice.ts", "src/pages/connections-check.astro", "src/lib/app.ts", "src/middleware.ts", "src/components/AppWordmark.astro", "src/lib/changelog-digest.ts", "src/pages/api/changelog-digest/cron.ts", "src/lib/email-preferences.ts"]
---

Open **User Settings** from the menu under your picture, at the top right of every page. The band at the top of the page shows who is signed in, your role and your team, then three figures: **Available now**, **Spent today** and **Spent this month**. The sections are listed on the left.

Your role is one of **Admin**, **Creator**, **Viewer** or **Client**, with a line that says what it allows. See [Your team](/help/your-team#the-four-roles). A client login holds no balance, so its band shows none.

## Your name

Under **Your name**, type your **First name** and **Last name** and click **Save**. It is how hubStudio addresses you and how your teammates see you, in the header, in the list of people and in the emails we send you. Leave both fields empty and hubStudio uses your email address instead.

## Profile picture

Under **Profile picture**, drop a picture on the box or click **Upload picture**. JPEG, PNG or WebP. Square photos work best; larger images are cropped and resized automatically. **Remove** takes it off. You can also click your picture in the band at the top of the page.

## Sign-in email and password

**Sign-in and security** has two tabs, and a third when your team asks for a sign-in code.

- **Login email**: type the **New email** and your **Current password**, then click **Update email**.
- **Password**: type your **Current password**, the **New password** (at least 8 characters) and **Confirm new password**, then click **Update password**. The **Password strength** panel beside the form checks the length, upper and lower case letters, a number and a symbol as you type.

Your current password is checked again before either change is applied.

![The Sign-in and security card in Settings, with the Login email, Password and Sign-in code tabs](/Images/help/account-and-sign-in-security.webp)

## Your language

hubStudio speaks English, French and Chinese. The language changes the interface only: the menus, buttons and messages. Your prompts, posts, files and everything your team writes stay in the language they were written in.

You can pick any language your team offers. A new team offers all three; an admin changes the list on the Team page, under **Languages** (see [Your team](/help/your-team#languages)). When your team offers English only, **User Settings** says so under **Language**, with an **Open the Team page** link.

You pick it in three places:

- **User Settings**, under **Language**: choose it in **My language** and click **Save**. The page reloads in that language. The choice is saved on your account, so it follows you to every browser and device you sign in from, and the emails hubStudio sends you are written in it too.
- The menu under your picture, at the top right of every page: the **Language · Langue · 语言** row holds **English**, **Français** and **中文**. Click one and the page reloads in it; your account remembers it as well.
- The sign-in page, before you sign in: it greets you in the language you picked there last time, or else the one your browser prefers. To change it, click **English**, **Français** or **中文** under the sign-in card; the page reloads in that language and remembers it on this browser.

![The sign-in card as a browser set to French shows it, with English, Français and 中文 under the card and Français picked](/Images/help/account-and-sign-in-language.webp)

## The sign-in code by email

New teams ask for a second step when you sign in. After your password, hubStudio sends a 6-digit code to your email address. The screen **One more step** says where it went and how long it is good for: 10 minutes.

1. Type the code under **Sign-in code**.
2. Leave **Trust this browser for 30 days, so it only asks for my password.** ticked on a computer you use every day, or untick it on a shared one.
3. Click **Confirm and sign in**.

**Send another code** sends a fresh one; the previous code stops working. **Sign in as someone else** goes back to the password step.

The **Sign-in code** tab in **Sign-in and security** lists the browsers you told hubStudio to trust. Drop one and its next sign-in asks for a code again. **Stop trusting every browser** drops them all.

## My Connections: your social accounts

To publish posts from hubStudio, connect your own social accounts. Click your picture at the top right, then **My Connections**. In hubStudio the page holds one card, **Your social accounts**, so that the posts you write in LinkedIn, Instagram, Facebook, TikTok and X go out in your name. YouTube has no card: you publish there yourself, in YouTube Studio (see [YouTube](/help/youtube)).

What you connect is yours alone. Nobody else in your team, admins included, can see it or publish with it, and you can't publish on a teammate's account either. Connecting publishes nothing.

![My Connections: the Your social accounts card with one card per network, LinkedIn, Instagram, Facebook, TikTok and X, each with its steps and Connect an account](/Images/help/account-and-sign-in-my-connections.webp)

### Connect an account

Each network has its own card with numbered steps in plain words. In short:

1. On the network's card, click **Connect an account**.
2. The network opens in the same tab. Sign in and allow posting. You sign in on the network itself, so hubStudio never sees your password.
3. You come back to My Connections. The page says how many accounts came back, and lists them.

To add a second account on the same network, click **Connect another account** on its card.

| Network | What to know before you connect |
|---|---|
| LinkedIn | Your profile comes back, along with any company page LinkedIn lists you as an administrator of. Keep the ones you post on and remove the others. |
| Instagram | Switch the account to Business or Creator first, in the Instagram app. No Facebook page is needed. Instagram asks you to sign in and confirm at every connection, so you can pick another professional account. |
| Facebook | You need a Facebook page. Facebook asks which pages to include; each page you tick comes back as its own row. With no page, nothing comes back. Connecting again offers the pages and permissions you left out the last time. |
| TikTok | The account comes back with what TikTok allows it: who may see your posts and how many it takes a day. The publishing form offers only that. TikTok shows its permission page at every connection, even for an account you connected before. |
| X | Only the account signed in to X in this browser comes back. To connect a second one, sign in as it (a private window helps) and connect again. |

### Your connected accounts

Each account has a row with its name, the network and handle, its type (**Profile**, **Page** or **Account**), **Yours alone**, and the date of its last post. Four buttons act on it:

- **Rename** changes the name shown in hubStudio, handy when two accounts look alike.
- **Switch off** stops the account: nothing new can be scheduled on it, and anything already queued will not go out. **Switch on** brings it back.
- **Connect again** runs the network's sign-in again to renew the connection.
- **Remove** deletes the connection, after you confirm. It is refused while a post is still scheduled on the account: cancel those posts first, or switch the account off instead. Posts it already sent stay on the network.

### How long a connection lasts

A LinkedIn connection lasts 60 days, and one click on **Connect again** renews it. Instagram and TikTok are renewed for you every day, and Facebook and X keep themselves alive, though a Facebook page stops publishing if you lose your role on it.

Each row carries a status line: **Connected**, **Connected, 45 days left** (the count varies), **Connect it again within 5 days** when it runs out soon, or **Connect it again to publish** when it ran out or was revoked. About a week before a connection runs out, and again if it expires, we email you a link to connect it again.

## The connection check after you sign in

Once you're in, hubStudio checks the social accounts you connected and switched on. An access can stop working without a sound, when you change a password or withdraw an access on the network, and you'd otherwise find out only when a post fails.

The check never holds you up. Your first page opens at once, the check runs in the background as a **Connection check** row in **Activity**, and the answer comes to you on whatever page you're on, as a notification in the bottom right corner of the screen. It never covers the page, so you can keep working while it's there:

| Answer | What the notification shows |
|---|---|
| Everything works | **Every connection works**. A thin line along its bottom edge runs down, and the notification leaves on its own after about seven seconds. |
| Something needs attention | **Some connections need attention**, then one line per account with its name, its handle and what went wrong. The notification follows you from page to page in that tab until you close it, or until a new check finds nothing wrong. |
| The check failed | **The connection check could not be completed**. Your connections weren't tested. |

On an account that needs attention, **Reconnect** opens My Connections in a new tab, on that account's card. Sign in there, come back, and click **Check again** on the notification. When the check needs attention or failed, the notification also holds **Details**, which opens the full check, **Your connections**, in a new tab and tests everything again.

To close the notification, click the cross in its corner (its tooltip reads **Dismiss**) or press Escape.

Accounts you switched off aren't tested. With nothing connected, there's no check. The check runs once per sign-in.

## Light or dark

Under **Appearance**, pick **System** (follow this device), **Light** or **Dark**. The choice applies at once and belongs to this browser, not to your account: you can read dark on a phone and light at a desk. The sun or moon button in the top bar switches between light and dark in one click.

![The Appearance card in Settings, with the System, Light and Dark choices and a preview](/Images/help/account-and-sign-in-appearance.webp)

## Date and time

Under **Date and time**, pick your **Time zone** (or **Follow this device**), a **Date format** and a **Time format** (**24-hour** or **12-hour**). Each choice shows an example written with today's date. Click **Save**: the page reloads and every date in hubStudio, including History and the usage log, is written the new way.

## Home page

Under **Home page**, pick the page you land on when you sign in. You can also click the house button in the top bar on any page to make it your home page. Without a choice of your own, you land on **Explore**.

## Weekly digest

Every Monday, hubStudio can email you what changed in hubStudio during the past week, in plain language: the same entries as **What's new**, at the bottom of every page. A week without changes sends nothing.

Under **Weekly digest**:

- **Send me the weekly digest of what's new**: on, the Monday email comes to you; off, it stops.
- **Email me when a new AI model is added**: an email when a new engine joins your lists.

Each switch is saved the moment you flip it. Every digest also carries an unsubscribe link, so you can stop it from your inbox without signing in. **See what's new** opens the list of changes, and **Manage all your emails** opens the page where you choose every optional email we send you.

![The Weekly digest card in Settings: Send me the weekly digest of what's new and Email me when a new AI model is added, both on, the unsubscribe note, See what's new and Manage all your emails](/Images/help/account-and-sign-in-digest.webp)

## My models

**My models** lists every engine you can use, in tabs. Switch off an engine you don't want to see: it leaves your own lists in [Explore](/help/explore) and in the studios, and nothing changes for anybody else. Each switch is saved the moment you flip it. The last engine of each kind always stays on.

## Voice input

Every text box with more than one line, the prompt boxes of the studios included, has a microphone in its corner. Click it and speak: your words appear where your cursor is as you say them. Click again to stop.

Under **Voice input**:

- **Show the microphone on text boxes**: switched off, no microphone is shown and nothing is ever recorded.
- **Model**: the model that listens, with the number of languages it knows and its price a minute.
- **The language you speak**: **Detect it automatically**, or pick yours, which helps with short phrases, accents and names.

Click **Save**. Each dictation is billed by the second like any other run, and its price shows under the box when you stop. Your voice streams to the model and turns into text as you speak; nothing is recorded or saved in hubStudio. Your browser asks once for the microphone the first time you use it.

## Invoices

Under **Invoices**, type the **Name on the invoice** and the **Address** printed on the invoices for the top-ups of your own balance, then click **Save**. See [Balance and payments](/help/balance-and-payments#invoices).

## Activity log

**Activity log** lists every paid action you ran, what it used and what it was billed.

## Forgot your password

1. On the sign-in page, click **Forgot password?**.
2. Type your **Login** email address and click **Send reset link**.
3. If an account exists for that address, a reset link is on its way. It stays valid for about an hour.
4. Open the link, type a **New password** of at least 8 characters and **Confirm password**, then click **Set new password**.
5. The page says **Password updated**. Click **Sign in**.

A reset link works once. If it has expired, the page says **This link is invalid or has expired**: click **Request a new link**.

## Sign out

Click your picture at the top right, then **Sign out**.
