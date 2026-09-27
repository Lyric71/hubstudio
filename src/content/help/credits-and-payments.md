---
title: "Credits and payments"
seoTitle: "Credits, payments, invoices and usage | hubStudio Help"
description: "How credits work in hubStudio: 1 credit = 1 USD, the team's pool first and then your own credits, buying by card, Alipay or WeChat Pay, promotional codes, automatic top-up, invoices and the usage log."
excerpt: "Prepaid credits pay for every run. Buy them by card, Alipay or WeChat Pay, top up automatically, and find every invoice and every charge."
section: "billing"
order: 11
updated: 2026-09-27
appPaths: ["/billing", "/billing/payment", "/billing/invoices", "/billing/usage"]
audience: "Everyone, especially team administrators"
related: ["your-team", "history", "explore", "troubleshooting"]
shots:
  - file: "/Images/help/credits-and-payments-buy.webp"
    route: "/billing"
    alt: "The Buy credits page: Credits left with its badge, the breakdown between the team credits and your own, and the purchase form with the amount and the payment methods"
    captured: 2026-09-27
sources: ["src/pages/billing/index.astro", "src/pages/billing/payment.astro", "src/pages/billing/invoices.astro", "src/pages/billing/usage.astro", "src/scripts/creditsPanel.ts", "src/scripts/usagePanel.ts", "src/lib/credits.ts", "src/lib/promo.ts", "src/pages/api/billing/checkout.ts", "src/lib/storage-billing.ts", "src/pages/settings.astro", "src/lib/app.ts", "src/scripts/creditChip.ts", "src/middleware.ts"]
---

Credits are prepaid. **1 credit = 1 USD.** Credits never expire and are only ever spent on runs, at the price shown before each run. Open **Credits** in the menu: it holds **Buy credits**, **Invoices** and **Usage**.

## What pays for a run

Every run is paid from the team's credits first, then from your own credits:

1. **The team's pool.** Your team buys credits into one shared balance. If an admin set you a daily limit on it, you draw up to that amount each day; the limit resets at midnight UTC.
2. **Your own credits.** Credits you buy for your account are yours, with no daily limit and no cap of any kind. They are used once today's limit is reached, or when the team's pool is empty.

The figure in the top bar is what you can spend right now: what you may still take from the team's pool today, plus your own credits.

The **Buy credits** page opens on **Credits left**, the same figure, with a badge: **Active**, **Running low** or **AI features are off**. Under it, the figure is broken down into the team's credits for today, **Your own credits**, and **Total you can spend right now**. When the balance is running low, an amber box suggests buying credits or switching on automatic top-up. At zero, runs are refused until you buy more; everything you made stays in History.

![The Buy credits page: Credits left with its badge, the breakdown between the team credits and your own, and the purchase form with the amount and the payment methods](/Images/help/credits-and-payments-buy.webp)

Besides runs, your team's credits also pay for storing your files and for downloads. See [History](/help/history#what-storing-files-costs).

## Buy credits

1. Open **Credits** > **Buy credits**.
2. If you're an admin, pick where the credits go: the tab with your team's name, or **Your account**. The team is selected first. Creators buy for their own account and see no tabs. Viewers and client logins spend nothing and buy no credits.
3. Pick an amount: a preset ($10, $25, $50, $100, $250, $500 or $1000), a whole number of dollars in **Amount (USD)**, or the slider. Each purchase runs from $10 to $1000.
4. Check **Invoice made out to**. See [Invoices](#invoices).
5. Under **2. Pay**, pick **Card**, **Alipay** or **WeChat Pay**.
6. If you have a promotional code, type it under **Promotional code** and click **Apply**.
7. Before your first purchase only, tick **I have read and accept the Terms of Service, including that credits are never refunded.**
8. Click **Buy $X of credits**. The button reads **Opening Stripe…** and takes you to Stripe's payment page.
9. Pay on Stripe. You come back to the **Payment** page, which checks until the credits are on your balance.

A card payment is confirmed within seconds. Alipay and WeChat Pay can take a little longer while the payment settles, and the Payment page keeps checking until it lands. A failed or cancelled payment charges nothing and can simply be tried again.

### Payment methods

- **Card**: Visa, Mastercard and other international cards, charged in USD.
- **Alipay**: charged in USD.
- **WeChat Pay**: charged in yuan at the fixed rate shown on the page. You receive exactly the USD amount of credits you chose, and the button shows both amounts.

You type your payment details on Stripe's own page, never in hubStudio.

**Paying from mainland China?** The page shows a reminder: the payment can take up to 2 minutes. Keep both the hubStudio page and the Stripe page open until you land back in hubStudio. If you already paid, your credits and invoice still arrive once Stripe confirms.

### Promotional codes

A promotional code never changes what you pay: it adds free credits on top of your purchase. Once the code is accepted, the box shows the code and the free credits it adds, and the summary shows **Credits you receive**. The free credits arrive once Stripe confirms the payment.

A code may apply from a minimum purchase, to one account only, or a limited number of times. Change the amount or the tab and the code is checked again. **Remove** takes it off.

## Automatic top-up

Automatic top-up charges a saved card when the balance drops below a threshold, so a long run is never cut short. It works with a card only: Alipay and WeChat Pay can't be charged unattended.

1. On **Credits** > **Buy credits**, under **Automatic top-up**, click **Save a card**. Stripe opens to store the card, then brings you back.
2. Tick **Top up automatically**.
3. Set the rules:
   - **Below ($)**: charge when the balance falls under this amount.
   - **Top up by ($)**: how much to buy each time, from $10 to $1000.
   - **Daily limit ($)**: the most that can be charged automatically in one day.
4. Click **Save top-up settings**.

Two guards bound it: at least five minutes between charges, and the daily limit. A declined card pauses it: the card then reads **Automatic top-up is paused.** with the reason, and **Try again** switches it back on. **Replace card** stores another one.

An admin sets the automatic top-up of the team's pool on the team's tab; anyone can set one for their own credits on **Your account**.

## Invoices

Stripe issues an invoice for every purchase and for every automatic top-up. The amount is always in USD, whichever way you paid.

Open **Credits** > **Invoices**. Admins pick **Whose invoices** with the same two tabs. The **Invoices** table lists the **Date**, **Type**, **Amount**, **Paid with**, **Status** and **Invoice** number, with **View** to open the invoice online and **PDF** to download it.

Under it, **Credit history** lists every movement on the balance, newest first: purchases and top-ups in, runs out, and any refund or adjustment. The last 100 movements are shown.

Only an admin sees the team's invoices and history. Every member sees their own.

Who the invoice is made out to is set when you buy:

- Credits for the team are always invoiced to the team.
- Credits for **Your account** are invoiced to you, or to your team if you're an admin and choose so.

Your own name and address for invoices are kept in **User Settings** > **Invoices**.

## Usage

**Credits** > **Usage** is the log of every paid action: what ran, when, and what it cost, for the current month or the previous one. Pick the month in **Month**.

Everyone sees their own actions. Admins see everyone in the team, grouped by person, and can pick one person in **User**. Each line gives **When**, **Action**, **Type**, **Model**, **Tokens** and **Cost**. Actions you will meet include:

| Action | What it is |
|---|---|
| **Image generation**, **Image editing**, **Image upscaling** | A run of the image studio, with its engine. |
| **Video generation** | A render of the video studio, with its engine. |
| **Prompt improvement** | An **Improve with AI** rewrite. |
| **File storage (daily)** | The daily rent of the team's stored files. |
| **File download (transfer)** | A download of a stored file, or a file fed to a video render. |

The same figures appear in **User Settings** > **Activity log**, and on each result in the studios.
