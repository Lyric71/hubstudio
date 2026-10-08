---
title: "Campaigns"
seoTitle: "Campaigns: a campaign's files under one name | hubStudio Help"
description: "Gather the renders, videos, pictures and documents of one campaign under a name and a brief, add them from the Assets Library one by one or several at once, and write a post from the whole campaign."
excerpt: "A campaign keeps the files of one marketing push together, under one name and one brief, without copying anything out of the Assets Library."
section: "library"
order: 7.5
updated: 2026-10-08
appPaths: ["/campaigns", "/campaigns/[id]", "/files"]
audience: "Everyone except client logins; creators and admins create and fill campaigns"
related: ["assets-library", "linkedin", "facebook", "x", "your-team", "history"]
shots:
  - file: "/Images/help/campaigns-list.webp"
    route: "/campaigns"
    alt: "The Campaigns page: the dark band with New campaign and the Campaigns, Images, Videos and Texts tiles, then the card of the Lumera Essence launch campaign with its pictures, its brief and its count by type"
    captured: 2026-10-08
  - file: "/Images/help/campaigns-page.webp"
    route: "/campaigns/[id]"
    alt: "A campaign's page: the band with All campaigns, Add assets and Delete the campaign, the name and the brief, the tiles by type, the Name and brief card, and In this campaign with four assets"
    captured: 2026-10-08
  - file: "/Images/help/campaigns-menu.webp"
    route: "/campaigns"
    alt: "The menu with Campaigns unfolded: All campaigns, then the team's campaign Lumera Essence launch, beside the Campaigns page"
    captured: 2026-10-08
  - file: "/Images/help/campaigns-choice.webp"
    route: "/content/image-generate"
    alt: "The image studio's options with Lumera Essence launch picked under Campaign, the line saying what joins it, and Manage campaigns"
    captured: 2026-10-08
  - file: "/Images/help/campaigns-filter.webp"
    route: "/files"
    alt: "The Campaign filter open in the Assets Library: Every campaign, In no campaign and Lumera Essence launch, each with the number of files it would show"
    captured: 2026-10-08
sources: ["src/lib/app.ts", "src/layouts/Layout.astro", "src/pages/campaigns/index.astro", "src/pages/campaigns/[id].astro", "src/scripts/campaignsPanel.ts", "src/lib/campaigns.ts", "src/pages/api/asset-campaigns/index.ts", "src/pages/api/asset-campaigns/[id].ts", "src/scripts/filesPanel.ts", "src/scripts/libraryFolderPicker.ts", "src/lib/brief-sources.ts", "src/lib/features.ts", "src/lib/feature-paths.ts", "public/apps/hubstudio/vocabulary.js", "src/scripts/campaignChoice.ts", "src/lib/request-campaign.ts", "src/lib/stored-files.ts"]
---

A campaign gathers the files of one marketing push under one name: the pictures and clips you rendered, the videos you edited, the shorts, the documents you uploaded. Everything stays where it is, in the [Assets Library](/help/assets-library). The campaign only points at those files, so nothing is copied, and one file can belong to several campaigns.

Give it a brief, a few lines on what the campaign is for, and you can write a post from the whole campaign at once.

**Campaigns** in the menu, under **Image anonymizer**, unfolds into a short list: **All campaigns** first, which opens the Campaigns page, then each of your team's campaigns by name, in alphabetical order. Click a name to open that campaign.

![The menu with Campaigns unfolded: All campaigns, then the team's campaign Lumera Essence launch, beside the Campaigns page](/Images/help/campaigns-menu.webp)

## The Campaigns page

The dark band at the top holds **How this page works**, **New campaign**, and four tiles: **Campaigns**, with the number of files they hold in all, then **Images**, **Videos** and **Texts** in campaigns.

Under the band, each campaign has its own card: up to four of its pictures, the number of files, the name, the brief, a count by type, **Whole team**, the day it was last updated and who created it. Click a card to open the campaign.

![The Campaigns page: the dark band with New campaign and the Campaigns, Images, Videos and Texts tiles, then the card of the Lumera Essence launch campaign with its pictures, its brief and its count by type](/Images/help/campaigns-list.webp)

## Create a campaign

1. Click **New campaign**, on the band or under **No campaign yet**.
2. Type its **Name**, such as "Spring launch 2027".
3. Write the **Brief**, which is optional: the goal, the audience, the key message, the dates.
4. Click **Create the campaign**.

The campaign opens on its own page, with the library already open to pick its first files. **Cancel** closes the card without creating anything.

You can also create a campaign from the Assets Library, as you add a file to it. See [From the Assets Library](#from-the-assets-library).

## A campaign's page

The band holds **All campaigns** (back to the list), **How this page works**, **Add assets** and **Delete the campaign**, with the campaign's name and brief. Its tiles count the files by type: **Images**, **Videos**, **Texts** and **Documents**, plus **Other** when the campaign holds a file of another kind.

![A campaign's page: the band with All campaigns, Add assets and Delete the campaign, the name and the brief, the tiles by type, the Name and brief card, and In this campaign with four assets](/Images/help/campaigns-page.webp)

**Name and brief** changes either one. Click **Save** to keep the change; the button turns amber while a change isn't saved.

**In this campaign** lists the files. Click a picture or a clip to see it full size. Under each file:

- **Open in its module** opens the page that made it, on that very piece: a render in the studio, a post in its network module. An uploaded file has no such link.
- **In the library** opens the file in the Assets Library.
- **Remove** takes the file out of the campaign. It stays in the Assets Library.

When you upload a new version of a file in the Assets Library, the campaign follows it and shows the new version.

## Add files

On the campaign's page, click **Add assets**. The card **Add assets from the library** opens:

1. Narrow the list if you need to: type in **Search names, prompts, texts and tags**, or pick a type: **All**, **Images**, **Videos**, **Texts**, **Documents** or **Other files**.
2. Tick the files that belong to the campaign. A file already in it reads **In the campaign**.
3. Click **Add 1 asset** or **Add 3 assets**: the button counts what you ticked.

The card shows the first 200 files that match; search to find the others. **Close** folds it. **Manage the library**, at the top right, opens the Assets Library in a new tab.

## From the Assets Library

You can also fill a campaign without leaving the [Assets Library](/help/assets-library).

**One file.** In the file's **Actions** menu, click **Add to a campaign**. Once the file belongs to a campaign, the same item reads **Campaigns**. A strip opens under the row: **Already in:** with a link to each campaign that holds the file, or **In no campaign yet.** Pick a campaign in the list and click **Add**. To start a new one, pick **New campaign…**, type its name in **Name of the campaign**, and click **Add**: the campaign is created with the file in it.

**Several files.** Tick their rows. The bar over the list holds the same campaign list: pick a campaign, or **New campaign…** and a name, then click **Add to campaign**.

## Fill a campaign as you create

You don't have to file your work after the fact. The pages that render or upload something have a **Campaign** choice, set to **None** by default. Pick a campaign there, and while it stays picked, everything the page saves to the Assets Library joins that campaign: the post and its pictures, autosaved edits, renders and uploads. Each file still lands in the library as usual.

| Page | Where the Campaign choice sits |
|---|---|
| The [image](/help/create-an-image#the-options) and [video](/help/create-a-video#the-options) studios | Among the options, under **Made for**, with **Manage campaigns** to open the Campaigns page in a new tab (**Create a campaign** while your team has none) |
| A post, in every network module | Next to **Draft with AI** on LinkedIn, Facebook and X, and in the picture or video step of every post |
| The [TikTok](/help/tiktok) brief | Next to **Draft the post** |
| [Shorts autopilot](/help/shorts-autopilot) | Next to **Make the shorts** |
| The [YouTube](/help/youtube) channel pictures | Next to **Render with AI** |
| The [Assets Library](/help/assets-library) | In the band, next to **New folder**: **No campaign**, or a campaign's name |

![The image studio's options with Lumera Essence launch picked under Campaign, the line saying what joins it, and Manage campaigns](/Images/help/campaigns-choice.webp)

The choice belongs to the page, not to one field. On a page that shows it twice, such as a post and its picture step, both always show the same campaign: change one and the other follows. A reload puts the page back on **None**.

Switching back to **None** stops new work from joining. Nothing already in the campaign leaves it. To take a file out, use **Remove** on the campaign's page.

Only the people who may change campaigns see the choice: creators and admins by default. Uploads sent to [Validation](/help/validation) don't offer it.

## Filter the library by campaign

Once your team has a campaign, the Assets Library gets a **Campaign** filter, between **Tags** and **Added by**. It offers **Every campaign** and **In no campaign**, handy for spotting what still needs a home, then each campaign by name with the number of files it would show. The campaign you pick shows as a chip under the filters, like any other filter. Click the chip to remove it.

![The Campaign filter open in the Assets Library: Every campaign, In no campaign and Lumera Essence launch, each with the number of files it would show](/Images/help/campaigns-filter.webp)

## Write a post from a campaign

A LinkedIn, Facebook or X post can be written from a whole campaign. In the brief of the post, open **Skills and material** at the right edge. Under **Material to write from**, the list **Context folder from the Assets Library** holds your library folders, then your campaigns in a group of their own, **Campaigns**. Pick the campaign, then click **Draft with AI**.

Before writing, hubStudio reads the campaign's brief, the list of what it holds (each file's name and type, and the prompt of a render), and the text of up to 20 of its documents: PDF, Word, Excel and plain text. Pictures and videos are listed, not looked at. See [LinkedIn](/help/linkedin#write-the-brief), [Facebook](/help/facebook#write-the-brief) and [X](/help/x#write-the-brief).

## Have an agent read a campaign

An agent you create from scratch can read a campaign on every run: tick it under **The data it reads**, where your campaigns are listed first, marked **Campaign**. The agent gets the same brief and list of what the campaign holds, and tells you what changed since its last run. See [Agents](/help/agents#create-an-agent-from-scratch).

## Who sees what

Everyone in your team who may open Campaigns sees every campaign of the team, and inside each one the files they may see in the Assets Library. Client logins don't see Campaigns: what the team makes for a client reaches them in their [Client space](/help/client-space).

The **Campaigns** row of the rights, under **Assets Library**, decides who does what. Create makes a campaign and adds files to it, Update renames it, changes what it holds and shows the **Campaign** choice of the studios and network modules, Delete removes it. By default, creators and admins do all three, and viewers only look. A campaign can be deleted by the person who created it, or by an admin. See [Your team](/help/your-team#the-four-roles).

## Delete a campaign

On the campaign's page, click **Delete the campaign**, then confirm. Only the campaign goes: every file it held stays in the Assets Library.

## What it costs

Campaigns are free. The files they point at are the library's own, and count toward your storage once, however many campaigns hold them. See [What files cost](/help/assets-library#what-files-cost). Writing a post from a campaign is billed like any **Draft with AI**: the model picker shows what a run costs, and the draft says what it cost.
