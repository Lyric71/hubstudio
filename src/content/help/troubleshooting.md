---
title: "Troubleshooting"
seoTitle: "Troubleshooting and error messages | hubStudio Help"
description: "What hubStudio's messages mean and what to do: credits used up, an engine refusing a prompt, a file too large, a render that took too long, an expired code or invitation, clients, validation, posts and connections, and more."
excerpt: "The messages hubStudio shows when something stops, what each one means, and how to get going again."
section: "help"
order: 14
updated: 2026-09-27
appPaths: ["/content/image-generate", "/content/video", "/history", "/team", "/billing", "/login", "/signup", "/invite", "/validation", "/client", "/my-connections", "/social/linkedin/posts", "/social/instagram/posts", "/social/facebook/posts", "/social/tiktok/posts", "/social/x/posts"]
audience: "Everyone"
related: ["credits-and-payments", "create-an-image", "create-a-video", "your-team", "validation", "social-networks", "client-space", "account-and-sign-in"]
shots: []
sources: ["src/lib/credits.ts", "src/lib/gateway-fault.ts", "src/pages/api/content/image-generate.ts", "src/pages/api/content/video-generate.ts", "src/scripts/imageGenerate.ts", "src/scripts/videoGenerate.ts", "src/scripts/videoInputs.ts", "src/lib/media-limits.ts", "src/pages/api/files/index.ts", "src/pages/api/files/[id].ts", "src/lib/signup.ts", "src/lib/mfa.ts", "src/lib/invitations.ts", "src/pages/invite/[token].astro", "src/pages/reset-password.astro", "src/lib/promo.ts", "src/scripts/creditsPanel.ts", "src/pages/api/team.ts", "src/lib/team-clients.ts", "src/pages/api/files/[id].ts", "src/pages/api/social-content/[id].ts", "src/lib/validation-http.ts", "src/lib/validation-lock.ts", "src/pages/api/validation/[id]/comments.ts", "src/pages/api/client/index.ts", "src/middleware.ts", "src/scripts/connectionCheckBand.ts", "src/pages/api/social-content/draft.ts", "src/scripts/socialContent.ts", "public/apps/hubstudio/vocabulary.js"]
---

Find the message you see in the first column. In the messages below, a name in square brackets stands for your own file, engine or amount.

A run that fails is never charged. A run that succeeds is charged the price shown before it started.

## Credits

| Message | What it means | What to do |
|---|---|---|
| **You are out of AI credits ([amount] left). Buy credits from Billing to keep using AI features.** | Your balance is empty, so runs are refused. | Open **Credits** > **Buy credits**. See [Credits and payments](/help/credits-and-payments). |
| **Your team is out of AI credits ([amount] left) and you have no credits of your own.** | The team's pool is empty and you have none of your own. | Ask an admin to buy credits for the team, or buy your own on **Credits** > **Buy credits**. |
| **You have used today's allowance of your team's credits** | You reached the daily limit an admin set you on the team's credits. | Wait for the reset at midnight UTC, buy your own credits, or ask an admin to raise your limit. See [Your team](/help/your-team#daily-limit-on-the-teams-credits). |
| **You have no allowance on your team's credits yet** | An admin set your daily limit to zero. | Ask an admin to set a limit on the Team page, or buy your own credits. |
| **Only an administrator can buy credits for [team].** | Only admins buy for the team; creators buy for their own account. | Pick **Your account**, or ask an admin. |
| **Automatic top-up is paused.** | The saved card was declined. | Check the card, then click **Try again**, or **Replace card**. |
| **Please accept the Terms of Service to continue.** | The box before your first purchase is not ticked. | Tick it, then click **Buy**. |

## Promotional codes

| Message | What to do |
|---|---|
| **That promotional code does not exist.** | Check the spelling. |
| **That promotional code has expired.** or **That promotional code is no longer available.** | The offer has ended. |
| **This code applies from $[amount] of credits.** | Raise the amount to at least the figure shown. |
| **You have already used that promotional code.** | Each code can be used a limited number of times. |
| **That promotional code is not available on this account.** | The code is reserved for another account. Try the other tab (your team or **Your account**). |

## Images and video

| Message | What it means | What to do |
|---|---|---|
| **The model refused this request. Try rewording it.** (or the engine's own reason) | The engine refused your prompt or your picture, usually under its content rules. Nothing was charged. | Reword the prompt, or try another engine. |
| **This model is unavailable right now. Nothing was charged, and our team has been alerted. Please try again shortly.** | The engine can't be reached on our side. | Try again in a while, or pick another engine. |
| **The model is busy right now. Nothing was charged. Please try again in a minute.** | The engine is overloaded. | Wait a minute and click **Retry**. |
| **The model provider is having trouble right now. Nothing was charged. Please try again shortly.** | The engine's maker has an outage. | Try again later, or pick another engine. |
| **Video generation is unavailable right now. Nothing was charged, and our team has been alerted. Please try again shortly.** | Video rendering is paused on our side. | Try again later. |
| **The generation took too long and was abandoned. Try a faster engine or a lower quality.** | An image run took more than about five minutes. | Pick a faster engine or a lower quality. |
| **The render took too long and was abandoned. Try a shorter duration or a faster engine.** | A clip took more than about five minutes. | Shorten the clip or pick a faster engine. |
| **Interrupted by a page reload. Retry to generate it again.** (images) or **Interrupted by a page reload. Retry to render it again.** (video) | The page was reloaded while the run was going. The run may still finish and land in History. | Look in [History](/help/history) first; if it's not there after a few minutes, click **Retry**. |
| **The engine that made this image is no longer offered. Pick another one and generate again.** | The engine is not in your list any more, or you switched it off in **My models**. | Pick another engine, or switch it back on in **User Settings** > **My models**. |
| **The images this run worked from were not kept, so it cannot be run again: upload them again on the left.** | Source images of an edit or an upscale are never stored. | Upload the images again. |
| **Upload the image to work from first.** | An edit or an upscale needs a source image. | Drop the image in the box. |
| **That prompt is too long. Please shorten it.** | Prompts hold up to 4,000 characters for images and 2,500 for video. | Shorten it. |

## Files too large or not accepted

| Message | What to do |
|---|---|
| **[file]: this image stays too large to send. Try a smaller one.** | Use a smaller picture as the source of an edit or an upscale. |
| **One of the source images is too large. Use a smaller file.** | Same: replace the largest source image. |
| **[file]: only PNG, JPEG and WebP images can be used.** | Convert the picture to PNG, JPEG or WebP. |
| **[file]: the mask must be a PNG file.** | Save the mask as PNG. |
| **[file]: this mask has no transparent area, so nothing would change. Erase the part to edit and save it as PNG.** | Erase the area to change, then save as PNG. |
| **[file] is [size] MB. [engine] accepts at most [max] MB per picture.** (or per clip, per sound file) | Use a smaller file, or an engine that takes larger ones. |
| **[file] runs [n] seconds. [engine] takes a clip of [min] to [max] seconds. Trim it and attach the shorter file.** | Trim the clip or the sound file. |
| **[file] is a [type] file. [engine] reads these picture formats: [list].** | Convert the file to one of the formats listed. |
| **No room left for another picture.** (or clip, sound file) | The engine takes no more files of that kind. Remove one first. |
| **A link must start with https://.** | Paste a full https address. |
| **That file is too large (limit [n] MB).** | Use a smaller file. |

## History

| Message | What it means | What to do |
|---|---|---|
| **Only the person who added this asset can delete it.** | Only the person who made a piece can delete it. | Ask them to delete it. |
| **The download link could not be made.** | The download could not start. | Try again in a moment. |

## Signing up and signing in

| Message | What it means | What to do |
|---|---|---|
| **This code is not valid, or it has expired. Request a new one.** | The sign-up code is wrong or older than 20 minutes, or it was mistyped too many times. | Click **start again** and ask for a new code. |
| **Temporary mailboxes cannot open an account. Please use your work or personal address.** | Disposable addresses are refused. | Use a real address. |
| **Invalid login or password.** | The email or the password is wrong. | Check both, or click **Forgot password?**. |
| **This code is not valid, or it has expired. Sign in again to get a new one.** | The sign-in code is wrong or older than 10 minutes. | Sign in again, or click **Send another code**. |
| **Too many wrong codes. Sign in again to get a new one.** | The sign-in code was mistyped too many times. | Sign in again. |
| **A code was already sent three times. Please sign in again in a few minutes.** | Too many codes were asked for. | Wait a few minutes, then sign in again. |
| **Please wait [n] seconds before asking for another code.** | A new code was asked for too soon. | Wait, then click **Send another code**. |
| **This link is invalid or has expired** | A password reset link works once and for about an hour. | Click **Request a new link**. |

## Invitations and teams

| Message | What it means | What to do |
|---|---|---|
| **This invitation has expired** | Invitations stay valid for a week. | Ask the person who invited you to send a new one. |
| **This invitation was already used** | The account it opened already exists. | Sign in with the invited address. |
| **This invitation does not exist** | The link is incomplete or was cancelled. | Ask for a new invitation. |
| **This invitation is not valid any more. Ask for a new one.** | The link expired or was cancelled while you were on the page. | Ask for a new invitation. |
| **This person already belongs to another team. Ask a super admin to move them.** | An address can belong to one team only. | Write to us through **Contact us** in the footer. |
| **This person is already a member of the team.** | They are already in your team. | Nothing to do. |
| **Give the team a name of at least 2 characters.** | A team name is too short. | Type a longer name. |

## Clients and Made for

| Message | What it means | What to do |
|---|---|---|
| **Give the client a name.** | The name of a new or renamed client is empty. | Type the company's name. |
| **Your team already has a client called [name].** | Two clients of a team can't share a name. | Pick another name, or use the client you already have. |
| **Choose the client this person works for.** | A client login must belong to one of your clients, and this one was not found, often because it was just deleted. | Reload the page and use the form under the right client on the **Clients** card. |
| **Only a creator or an administrator says who a piece was made for.** | Viewers can't change **Made for**. | Ask a creator or an admin. |
| **This client is not one of your team.** | The client was deleted meanwhile. | Reload the page and pick again. |
| **Your login is not attached to a client any more. Ask the team that invited you.** | Seen by a client login whose client was removed. | Contact the team that invited you. |

## Validation

| Message | What it means | What to do |
|---|---|---|
| **This piece was made for another client. Ask one of that client's people, or a colleague.** | A piece made for one client can only be approved by that client's people or by a teammate. | Pick someone of the right client, or a teammate. |
| **The validator must be a member of your team.** | The person picked is not in your team, or no longer is. | Pick another validator. |
| **This asset is waiting for validation. It cannot be changed or deleted until the validator decides.** | The post is locked while it waits. | Ask the validator, or an admin, to decide. |
| **Your role (viewer) is read-only.** | Viewers can't send, comment or decide. | Ask an admin to make you a creator, or name another validator. |
| **Write the comment first.** | The comment box is empty. | Write the comment, then click **Comment**. |

## Social posts and connections

| What you see | What it means | What to do |
|---|---|---|
| **Not saved:** next to **Save**, with a reason | The post could not save itself. Your text is still on screen, and the next keystroke tries again. | If it keeps failing, copy your text somewhere safe and reload the page. |
| **No draft came back. Please try rephrasing the brief.** | The model returned nothing usable. Nothing was lost. | Rephrase the brief and try again. |
| **Schedule** and **Publish now** stay locked | No account is ticked under **Who it goes out as**. | Tick at least one account. |
| Your account isn't in the list | Only this network's accounts are listed, and only the ones you connected. | Connect it on **My Connections**. See [Account and sign-in](/help/account-and-sign-in#my-connections-your-social-accounts). |
| **Reconnect** on an account's tile | The connection ran out or was revoked. | Click **Connect again** on its row on My Connections. |
| **Some connections need attention** in a band over the page | The check after sign-in found an account that no longer lets hubStudio in. | Click **Reconnect**, sign in again on the card that opens, then **Check again** on the band. |

## Still stuck?

Use **Report a bug** or **Contact us** in the footer of every page. Tell us what you clicked, what you expected, and the exact message you saw.
