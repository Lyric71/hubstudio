---
title: "Web"
seoTitle: "Web: write, translate and publish articles on your site | hubStudio Help"
description: "Add your websites as GitHub repositories, plan articles with AI, edit repository files from the browser, and let the Web editor research, draft, fact-check, illustrate, translate and publish pages through pull requests."
excerpt: "Add a site's GitHub repository, fill its queue of briefs, and let the Web editor research, write, translate and publish each page by pull request."
section: "publish"
order: 13.8
updated: 2026-10-22
appPaths: ["/web", "/web/[id]", "/my-connections"]
audience: "Everyone except client logins; creators and admins add sites, plan briefs, edit repository files and run the pipeline"
related: ["account-and-sign-in", "agents", "skills", "choosing-a-model", "your-team", "balance-and-payments", "log"]
shots:
  - file: "/Images/help/web-sites.webp"
    route: "/web"
    alt: "The Web page: the summary tiles, the Add a site button, and the connected website card with its published, in progress and waiting counts, languages and publisher"
    captured: 2026-10-22
  - file: "/Images/help/web-queue.webp"
    route: "/web/[id]"
    alt: "A site's Queue & Test Run tab: the Publication Queue on the left, and the selected brief on the right with its 12 steps, model and context controls, and Brief & AI, Log, Versions and Files tabs"
    captured: 2026-10-22
  - file: "/Images/help/web-planner.webp"
    route: "/web/[id]#plan"
    alt: "The AI Editorial Plan tab: number of briefs, AI model, editorial direction, and the proposed editorial plan ready to commit to the repository and add to the queue"
    captured: 2026-10-22
  - file: "/Images/help/web-studio.webp"
    route: "/web/[id]#files"
    alt: "The Repository Files & AI Studio tab: the repository's rule, voice, ledger and schedule files on the left, and the selected file on the right with Update with AI and Save & Commit"
    captured: 2026-10-22
  - file: "/Images/help/web-settings.webp"
    route: "/web/[id]#settings"
    alt: "The Site Settings tab: publisher, branch, default AI model, publishing switches, repository folders and languages"
    captured: 2026-10-22
sources: ["src/lib/app.ts", "src/layouts/Layout.astro", "src/pages/web/index.astro", "src/pages/web/[id].astro", "src/scripts/webPanel.ts", "src/styles/web.css", "src/lib/web/sites.ts", "src/lib/web/pipeline.ts", "src/lib/web/file-assistant.ts", "src/lib/web/runner.ts", "src/lib/web/agent.ts", "src/lib/web/checks.ts", "src/lib/web/detect.ts", "src/lib/web/schedule.ts", "src/lib/web/workspace.ts", "src/lib/github-oauth.ts", "src/lib/github-repo.ts", "src/pages/my-connections.astro"]
---

**Web** writes, translates and publishes the pages of your websites. Each site is the GitHub repository it is built from. You give it a queue of briefs, and an AI agent, the **Web editor**, takes each brief from primary-source research to a live page on your site. Every page reaches the site through a pull request on GitHub, and that pull request merges only once the site's own checks pass.

Open **Web** in the **Publish** pillar of the left menu (`/web`).

![The Web page: the summary tiles, the Add a site button, and the connected website card with its published, in progress and waiting counts, languages and publisher](/Images/help/web-sites.webp)

## What you need first

Two things: your role needs the **Web** right (Admins and Creators have it by default; see [Who can do what](#who-can-do-what)), and you need your own GitHub connection.

That connection lives on [My Connections](/help/account-and-sign-in#my-connections-your-social-accounts-and-website-repositories), under **Your website repositories**, or right on the **Web** page. It goes through the GitHub App in two steps:

1. **Grant repository access on GitHub (one time on GitHub)**: open the GitHub App installation page, select **Only select repositories**, pick the website repository you want to publish to, and click **Install**.
2. **Connect your GitHub account**: click **Connect GitHub**, approve the sign-in handshake, and you land back on the **Web** page with your repositories ready to pick.

Your GitHub connection is personal, like your social accounts, and needs write access to the repository so it can create branches and open pull requests.

## Add a site

1. Click **Add a site** in the top band of **Web**.
2. Under **Repository**, pick one of the repositories your GitHub connection reaches. Missing one? Click **Give the app another repository on GitHub**, add it there, then come back.
3. Give the site a **Name**. The **Address of the site** (for example `https://www.example.com`) is optional and lets hubStudio verify live URLs after deployment.
4. Click **Add the site**.

The site's workspace opens on its four tabs: **Queue & Test Run**, **AI Editorial Plan**, **Repository Files & AI Studio**, and **Site Settings**. When the repository already has a schedule file (`editorial/schedule.csv`) or a briefs folder, its queue is imported right away.

## Fill the queue

The queue holds one brief per page. There are three ways to fill it from the site's page:

- **Import the queue**: clicks through to read the **Schedule file** (`editorial/schedule.csv`, a CSV with a `brief_id` column) or, when the site has no schedule file, the **Briefs folder** (one Markdown brief per file). A banner tells you how many briefs were added and how many were brought up to date.
- **Write a brief**: opens a drawer at the top of the page. Describe the topic or angle in the **AI Brief Assistant** bar and click **Generate / Improve brief with AI** to have the AI draft the **Working title**, **Main search query**, **URL slug** and full Markdown **Brief** from your site's voice and rules, or fill in the fields yourself. You can also choose the **Order date**, the **Model to draft this page** and **Extra context for this brief**, keep **Also commit the brief file to the GitHub repository** ticked if you want the `.md` brief saved in your repo, and click **Add to the queue**.
- **AI Editorial Plan**: opens the **AI Editorial Plan** tab, where AI reads your repository (`site-profile.md`, `_VOICE-BRIEF.md`, existing pages and `editorial/schedule.csv`) and drafts a multi-article publication schedule at once.

![The AI Editorial Plan tab: number of briefs, AI model, editorial direction, and the proposed editorial plan ready to commit to the repository and add to the queue](/Images/help/web-planner.webp)

In **AI Editorial Plan**:

1. Pick the **Number of briefs to draft** (`3`, `5`, `10` or `15`) and the **AI Model to draft the plan**.
2. Describe your **Editorial direction & topics** (or click one of the quick-start chips) and add any **Extra context**.
3. Click **AI-Draft Editorial Plan**.
4. Review the proposed cards: you can edit any **Working title**, **Primary search query**, **Order date**, **Brief file path** or **Full Markdown Brief** inline, or remove a card you do not want.
5. Click **Commit Plan to Repository & Add to Queue** (which writes every `editorial-briefs/*.md` file and updates `editorial/schedule.csv` on GitHub) or **Add to Queue Only (no Git commit)**.

The **Publication Queue** has three filters (**Open**, **Published** and **All**) plus a search box that filters by ID, title or search query. Briefs run in order of their order date, then their place in the queue.

## Run or test a brief: the 12 steps

Click any brief in **Queue & Test Run** to open its control panel on the right.

![A site's Queue & Test Run tab: the Publication Queue on the left, and the selected brief on the right with its 12 steps, model and context controls, and Brief & AI, Log, Versions and Files tabs](/Images/help/web-queue.webp)

Under **Model, Context & Test Controls for this Brief**, you can pick a specific **Model to draft & edit** and add **Extra context / instructions for this brief** (click **Save model & context** to store them on the brief). Then choose how to run it:

- **Test on this brief (stops at Review)**: runs **Research**, **Draft**, **18-pass edit** and **Source recheck**, then pauses at **Review** (`Test ready`) so you can inspect the text and source checks before any branch or pull request is opened on GitHub.
- **Start full run** (or **Start the next brief** in the top band): starts the full pipeline. While a brief is running, the steps advance automatically every five minutes, or you can click **Run the next step now** to advance immediately.

| Step | What happens |
|---|---|
| **Research** | The Web editor reads the site's rule files in the repository and searches the live web for primary sources. |
| **Draft** | It writes the page in the drafts folder, following your site's rules and active [Web publishing skills](/help/skills). |
| **18-pass edit** | The draft goes through 18 editing passes, then a final pass that folds in the SEO title, description and excerpt. The queue row shows the live pass count, such as `7/19`. |
| **Source recheck** | Every cited source is opened again and checked against the text. Any factual claim the agent cannot confirm at a primary source is cut. |
| **Review** | If **Publishes on its own** is on (and this is not a test-only run), the brief continues automatically. Otherwise it waits here until someone clicks **Approve and publish PR**. |
| **Hero image** | Renders a 3:2 editorial hero illustration with its localized alt text, whenever the site has a **Hero images folder** configured. |
| **Publish preparation** | Moves the page to the published pages folder and wires in internal links, the hero image and related pages named in your site's instructions. |
| **Translation** | Each target language configured on the site gets a 3-pass native journalist rewrite rather than a literal translation. |
| **Checks** | Runs hubStudio's built-in publication checks: no `TODO` or `TBD`, no em or en dashes in prose, valid frontmatter on every page, every translation present with matching fields, and no empty files. If a check fails, the agent fixes the cause and retries up to twice. |
| **Pull request** | Creates one commit with every generated and updated file on a dedicated branch (`bb/<slug>`) and opens a pull request against the site's base branch on GitHub. |
| **Site checks** | Waits for your repository's own GitHub Actions, Vercel, Cloudflare or Netlify checks on the pull request. If a check fails, the agent reads the failure log, fixes the file and pushes again (up to twice). |
| **Published** | When checks pass and **Merges on green checks** is enabled, the pull request merges itself and deletes the branch (or waits for you to merge it on GitHub when the switch is off). Once merged, the brief is marked **Published** and a confirmation email is sent. |

One brief per site is drafted at a time, and one is published at a time, so two runs never touch the same repository files simultaneously.

### Inspecting a brief: Brief & AI, Log, Versions and Files

At the bottom of the brief detail pane, four tabs let you inspect and edit everything about the brief:

- **Brief & AI**: view or edit the brief's Markdown directly, or type instructions in **Create or update this brief with AI** and click **Write / Improve with AI**. Click **Save brief** to update the queue item, or **Save & commit** to write the updated brief file back to GitHub.
- **Log**: every step with its timestamp and what the agent found or changed.
- **Versions**: the full text after the first draft, after pass 6, pass 12, pass 18, after the source recheck, and after each translation pass. Click any version to read it in full.
- **Files**: every file written or updated by the run, including the cover image and translated files. Click any file to preview it.

### When a brief stops

If a step cannot be completed after retries (for example because site checks still fail after two automatic fixes, the pull request was closed unmerged, or the publisher's GitHub connection expired), the brief status becomes **Stopped** with the exact reason at the top of the detail pane. Fix the cause, then click **Take it again** to resume from the step where it stopped.

To set a brief aside without deleting it, click **Skip** (and **Back to the queue** to restore it). **Remove** deletes the brief from the queue without touching any file in your GitHub repository.

## Repository Files & AI Studio

Every file that guides the Web editor (`CLAUDE.md`, `editorial/voice-brief.md`, `editorial/spec.md`, `editorial/runbook.md`, `editorial/claims-ledger.md`, `editorial/schedule.csv`, and each language's translation brief) lives in your GitHub repository. Open the **Repository Files & AI Studio** tab to read, edit or create any repository file with AI directly from the browser.

![The Repository Files & AI Studio tab: the repository's rule, voice, ledger and schedule files on the left, and the selected file on the right with Update with AI and Save & Commit](/Images/help/web-studio.webp)

1. **Pick or create a file**: click any file in the left column (files already in the repo show a green size badge; missing rule files show **Missing, create with AI**), or type any path under **Create or open another file in the repository** and click **Open / Create**.
2. **Generate or update with AI**: pick an AI model, click one of the suggested prompt chips or type what you want to change, add any optional context, and click **Update with AI** (or **Generate with AI**).
3. **Review and commit**: inspect or edit the file content in the editor, adjust the commit message if needed, and click **Save & Commit to main** to commit the change directly to your repository branch.

## Site Settings

Open the **Site Settings** tab to review or adjust how the site works. When you first add a site, hubStudio inspects the repository and fills these settings automatically. Clicking **Read folders & files from repository** at the foot of the tab re-scans the repository paths at any time without overwriting your custom instructions or switches.

![The Site Settings tab: publisher, branch, default AI model, publishing switches, repository folders and languages](/Images/help/web-settings.webp)

| Section | Settings | What they control |
|---|---|---|
| **1. General, Default AI Model & Site-wide Context** | **Name**, **Address of the site**, **Publishes as**, **Branch**, **Default AI model for drafting & editing**, **Site-wide extra context**, and the four switches (**Active**, **Publishes on its own**, **Merges on green checks**, **18-pass edit**) | Who commits and opens pull requests on GitHub, which branch pull requests target, which AI model drafts pages by default (see [Choosing a model](/help/choosing-a-model)), standing context passed to every step, and whether runs happen automatically. |
| **2. Repository Files & Folders** | **Files that hold the rules**, **Claims ledger**, **Schedule file**, **Briefs folder**, **Pages folder**, **Drafts folder**, **Hero images folder** | Where rule files, verified sources, the CSV schedule, Markdown briefs, drafts, published pages and generated 3:2 hero images live in the repository. Leave **Hero images folder** empty to skip cover image generation. |
| **3. Languages & Translations** | **Pages are written in**, **Its code**, **Other languages** | The primary language and code (for example `US English` and `en`), plus one line per target language (code, language name, target folder and translation brief path). |
| **4. Custom Instructions & Pull Request Format** | **Draft runs**, **Publish runs**, **House line for hero images**, **Branch prefix**, **Commit message prefix**, **Also notify by email** | Extra instructions for drafting, index/link updates during publishing, visual direction for hero images (each with a **Draft with AI from repository** button), Git naming (`bb/`), and extra email recipients notified when a page goes live. |

Click **Save the settings** to keep your changes. **Remove this site**, at the foot of the tab, removes the site and its queue from hubStudio without touching anything in your GitHub repository.

## The Web editor agent and Web publishing skills

Starting briefs by hand works whenever you want. To keep your sites publishing on a schedule, add the **Web editor** from [**Agents** > **Catalog**](/help/agents) (catalog code `MK13`, runs every 24 hours by default). On each scheduled run, it starts the next queued brief on every **Active** site, advances drafts waiting at review when **Publishes on its own** is on, or reports drafts awaiting your approval in its findings.

The editing, translation and image steps follow four standard skills in the **Web publishing** section of [**Skills** > **Catalog**](/help/skills), which apply wherever **Web** is ticked:

| Skill | What it sets |
|---|---|
| **Newsroom standard (US English)** | American newsroom prose, 18-pass editorial revision, US spelling, no em or en dashes, no invented facts. |
| **Native translation standard** | 3-pass native journalist rewrite for every translated edition, with native punctuation and localized SEO metadata. |
| **AI tells to remove** | Vocabulary, throat-clearing openings and formulaic patterns stripped during the editing and translation passes. |
| **Hero image standard** | Composition, lighting and strict no-text rules for 3:2 article hero images and their localized alt text. |

## What it costs and who can do what

Every model call, web search and hero image generated during a brief's run or in the AI tools is billed to your team's [prepaid balance](/help/balance-and-payments). Each brief row in the queue and the **Cost** figure in the brief detail show the running total, and every run appears in your [Log](/help/log) and usage history. Adding a site, importing a queue and editing files by hand cost nothing.

**Web** has its own row in the module and rights grid on [Your team](/help/your-team):

| Right | What it allows |
|---|---|
| **View** | Open **Web**, browse connected sites, read the queue, inspect versions, files and logs. |
| **Create** | Add a site, write a brief, generate an **AI Editorial Plan**, or start a brief. |
| **Update** | Import the queue, edit briefs, use **Repository Files & AI Studio**, change **Site Settings**, run the next step, approve, retry or skip a brief. |
| **Delete** | Remove a site or a brief from hubStudio (never deletes anything in the GitHub repository). |
