---
title: "Your team"
seoTitle: "Your team, its roles and its clients | hubStudio Help"
description: "Working alone or in a team, the Admin, Creator, Viewer and Client roles, inviting people, answering requests to join, daily limits, pausing a login, adding clients and giving their people a login, invoice details and the sign-in code."
excerpt: "A team shares one pool of credits and works for its clients. Administrators invite people, set daily limits, add clients and give their people a login."
section: "team"
order: 13
updated: 2026-09-27
appPaths: ["/team", "/invite"]
audience: "Everyone; most actions are for administrators"
related: ["getting-started", "credits-and-payments", "history", "validation", "client-space", "skills"]
shots:
  - file: "/Images/help/your-team-members.webp"
    route: "/team"
    clip: "the team and Members cards"
    alt: "The team card with the team name and the team credits, above the Members card listing each person with their role and daily limit"
    captured: 2026-09-27
  - file: "/Images/help/your-team-invite.webp"
    route: "/team"
    clip: "the Invite someone card"
    alt: "The Invite someone card: first name, last name, email, the role menu set to Creator, and Send the invitation"
    captured: 2026-09-27
  - file: "/Images/help/your-team-clients.webp"
    route: "/team"
    clip: "the Clients card"
    alt: "The Clients card: the New client field, a client with its Rename and Delete the client buttons, one login with Pause login, and the form to give its people a login"
    captured: 2026-09-27
  - file: "/Images/help/your-team-invoices-and-sign-in.webp"
    route: "/team"
    clip: "the Invoices and sign-in card"
    alt: "The Invoices and sign-in card: who the invoices are made out to, where they are sent, the billing address, and the sign-in code switch"
    captured: 2026-09-27
sources: ["src/pages/team.astro", "src/scripts/teamPanel.ts", "src/pages/api/team.ts", "src/pages/api/team/clients.ts", "src/pages/api/team/clients/[id].ts", "src/lib/team-clients.ts", "src/lib/invitations.ts", "src/lib/user-admin.ts", "src/lib/app.ts", "src/lib/features.ts", "src/pages/settings.astro", "src/pages/invite/[token].astro", "src/lib/credits.ts", "src/pages/signup.astro", "src/components/ClientPick.astro"]
---

In hubStudio, a **team** is a group of people who share one pool of credits. Everything the team creates is paid from the team's credits first. A team can also work for **clients**: the companies it makes images, videos and posts for. Open **Team** in the menu, or **Team** in the menu under your picture.

## Working alone or in a team

**Working alone?** You are a team of one, and nothing changes for you: the credits you buy pay for what you create. The Team page says **Just you, for now**. Invite someone and they start sharing the pool with you.

**In a team**, the page says how many people share the team's credits, and lists them under **Members**.

![The team card with the team name and the team credits, above the Members card listing each person with their role and daily limit](/Images/help/your-team-members.webp)

## The four roles

hubStudio has four roles.

| Role | What they do |
|---|---|
| **Admin** | Runs the team: invites people, answers requests to join, chooses each person's role, sets each creator's daily limit, can pause a login, renames the team, adds clients and gives their people a login, buys credits for the team and writes team skills. Admins have no daily limit. |
| **Creator** | Makes the work: images, videos and posts, paid from the team's credits within the daily limit an admin may set. Can also buy credits of their own. Says which client a piece is made for, and sends work for approval in [Validation](/help/validation). |
| **Viewer** | Sees the team's work. Creates nothing and spends nothing. |
| **Client** | A person at one of the companies the team works for, given a login by an admin. Sees only what was made for their company, in their [Client space](/help/client-space): downloads it, comments on it and approves it. Holds no credits and spends nothing. |

The person who creates a team is its first admin. Your own role is shown in **User Settings**, with a line that says what it allows.

## Invite someone

Admins see the card **Invite someone**. It is for the people of your team; a client's people get their login on the **Clients** card instead (see [Clients](#clients)).

![The Invite someone card: first name, last name, email, the role menu set to Creator, and Send the invitation](/Images/help/your-team-invite.webp)

1. Type the person's **First name**, **Last name** and **Email**.
2. Pick the **Role**: **Creator**, **Viewer** or **Admin**.
3. Click **Send the invitation**.

They receive an email with a link to choose their password and join the team. On that page they tick the Terms of Service and click **Join and sign in**. A new creator shares the pool with no limit until an admin sets one.

Pending invitations are listed under **Waiting for an answer**, each with its role and **Link valid until** and a date, or **The link has expired**. An invitation stays valid for a week. **Cancel the invitation** stops its link from working. To invite someone again after the link expired, send a new invitation.

An address that already belongs to another team can't be invited: the page says **This person already belongs to another team. Ask a super admin to move them.** Write to us through **Contact us** in the footer if that happens.

## Requests to join

When someone signs up with **Join a team** and names your team or your email address, the request appears under **Requests to join**, with the date they asked.

- **Accept as creator**: they receive an invitation by email, where they choose their password.
- **Decline**: the request is dropped.

## Daily limit on the team's credits

For each creator, an admin can set a daily limit, in US dollars, on the team's credits. Type the amount in the person's row and click **Save**. Leave the field empty for no limit. Under the field, **Used today** shows what they have drawn from the team's credits today.

The limit resets at midnight UTC. A creator who reaches it continues on their own credits, if they bought some. Otherwise their runs are refused until the next day, and they see a message that starts with **You have used today's allowance of your team's credits**.

Admins have no daily limit, and their row says **No limit for admins**. A viewer's row says **A viewer spends nothing**.

## Change a role

In a person's row, pick **Creator**, **Viewer** or **Admin** in the role list. The change applies at once, and a line at the top of the page confirms it. You can't change your own role.

## Pause a login

**Pause login** stops a person from signing in, after you confirm. They keep everything they made, and their work stays in History. **Let back in** restores their access at any time. Each row also shows **Last seen** with a date, or **Never signed in**.

You can't pause your own login.

## Clients

The **Clients** card, for admins, lists the companies your team works for. Their people sign in to see only what was made for their company: they open it, download it, comment on it, and approve it when asked. They create nothing and spend nothing.

![The Clients card: the New client field, a client with its Rename and Delete the client buttons, one login with Pause login, and the form to give its people a login](/Images/help/your-team-clients.webp)

### Add a client

1. Under **New client**, type the company's name.
2. Click **Add the client**.

The page confirms that the client is added and invites you to give its people a login. Two clients of the same team can't share a name.

To rename a client, change the name in its field and click **Rename**.

### Give a client's people a login

Each client has its own small form under its name.

1. Type the person's **First name**, **Last name** and **Email**.
2. Click **Give them a login**.

They receive an invitation by email, with the role Client, and choose their password on the invitation page as anyone else would. Until they do, they are listed under their client as **Invited**, with **Link valid until** and a date, and **Cancel the invitation** next to them. A client with nobody yet reads **Nobody from this client can sign in yet.**

Once they have signed in, each login shows its email and **Last seen**, or **Never signed in**. **Pause login** stops that person from signing in, and **Let back in** restores it.

### Make work for a client

Nothing reaches a client until you say it was made for them. Creators and admins do that with **Made for**:

- in the image and video studios, before the run. See [Create an image](/help/create-an-image#made-for-a-client) and [Create a video](/help/create-a-video#made-for-a-client);
- on a card in [History](/help/history#made-for-a-client), at any time;
- on a post in a network module: [LinkedIn](/help/linkedin#made-for-a-client), [Instagram](/help/instagram#made-for-a-client), [Facebook](/help/facebook#made-for-a-client), [TikTok](/help/tiktok#made-for-a-client) or [X](/help/x#made-for-a-client).

Pick **No client: the team only** (on History, **No client**) to take a piece back from a client. The team keeps seeing everything it made, whoever it was made for.

When you send a piece made for a client to [Validation](/help/validation), you can name one of that client's people as its validator.

### What a client sees

A client login lands on its **Client space**, titled after its company. It holds what the team made for that company, newest first: images, videos, posts and files. It never shows a prompt, an engine or a cost. Its menu has only **Client space** and **Validation**, and it has no credits. Downloads by a client are paid from the team's credits, like any download. See [Client space](/help/client-space).

### Delete a client

**Delete the client** asks you to confirm first. What was made for the client stays with the team, no longer tagged for anyone, and the client's logins are paused. Their pending invitations stop working.

## Invoices and sign-in

The **Invoices and sign-in** card, for admins, holds two decisions the team takes for itself.

- **Invoiced to (a person or the company)**, **Invoices sent to** and **Billing address**: what every invoice for the team's credits says. Click **Save the invoice details**; the next invoice carries them.
- **Ask for a code sent by email at each sign-in**: after the password, everyone types a 6-digit code mailed to them. A browser they choose to trust skips it for 30 days. See [Account and sign-in](/help/account-and-sign-in#the-sign-in-code-by-email).

![The Invoices and sign-in card: who the invoices are made out to, where they are sent, the billing address, and the sign-in code switch](/Images/help/your-team-invoices-and-sign-in.webp)

## Rename the team

Admins see the team's name in an editable field at the top of the page. Change it and click **Save the name**. A team name needs at least 2 characters.

The same card shows the **Team credits** balance to admins, with a **Buy credits** button. See [Credits and payments](/help/credits-and-payments).
