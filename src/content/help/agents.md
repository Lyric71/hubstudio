---
title: "Agents"
seoTitle: "Agents that watch your social publishing | hubStudio Help"
description: "The Social publishing watcher, agents you create from scratch over your posts, campaigns and library, schedules, Run now, findings, the results email, and what a run costs and who pays."
excerpt: "Agents re-read your publishing on every network on a schedule and tell you what changed, with the real dates, networks and post titles."
section: "agents"
order: 14.5
updated: 2026-10-08
appPaths: ["/agents", "/agents/organization", "/agents/catalog", "/agents/runs"]
audience: "Everyone; Creators and Admins add, change and run agents; team agents are for Admins"
related: ["linkedin", "instagram", "facebook", "tiktok", "youtube", "x", "validation", "campaigns", "assets-library", "balance-and-payments", "your-team"]
shots:
  - file: "/Images/help/agents-catalog.webp"
    route: "/agents/catalog"
    alt: "The agent Catalog: the Standard section with the Social publishing watcher, what it reads, View details and Add to my agents"
    captured: 2026-10-08
  - file: "/Images/help/agents-runs.webp"
    route: "/agents/runs"
    alt: "The Agents Command Room tab: Running now, Switched on and Previous runs with the Agents of filter"
    captured: 2026-10-08
sources: ["src/pages/agents/index.astro", "src/pages/agents/organization.astro", "src/pages/agents/catalog.astro", "src/pages/agents/runs.astro", "src/scripts/agentsAdminPanel.ts", "src/scripts/agentForm.ts", "src/scripts/agentsCatalog.ts", "src/scripts/agentRunsPanel.ts", "src/lib/agents/watchers.ts", "src/lib/agents/data-sources.ts", "src/lib/agents/external-sources.ts", "src/lib/campaigns.ts", "src/lib/agents/agent-spend.ts", "src/lib/agents/agent-web.ts", "src/lib/agents/scheduler.ts", "src/lib/agents/run-notify.ts", "src/pages/api/agents/run.ts", "src/pages/api/agents/runs.ts", "src/pages/api/agents/settings.ts", "src/lib/app.ts", "public/apps/hubstudio/vocabulary.js", "vercel.json"]
---

An **agent** watches part of your team's work for you. On a schedule, it re-reads its data, compares it with what it saw last time, and reports what changed as **findings**: short alerts with the real dates, networks and post titles, and a suggested next step.

Nothing runs until someone adds an agent. Open **Agents** in the menu: it holds four entries, which are also the four tabs at the top of each Agents page.

| Menu entry | Tab | What it holds |
|---|---|---|
| **My agents** | **Personal** | Your own agents: the only ones you edit, test and duplicate. They spend your own budget. |
| **Team agents** | **Team** | The agents shared across the team. Admins only. |
| **Catalog** | **Catalog** | The standard agents, open to everyone. |
| **Runs** | **Agents Command Room** | What is running, what is switched on, and every previous run. |

## The Social publishing watcher

![The agent Catalog: the Standard section with the Social publishing watcher, what it reads, View details and Add to my agents](/Images/help/agents-catalog.webp)

The standard agent of hubStudio. About once a day it reads your publishing on LinkedIn, Instagram, Facebook, TikTok, YouTube and X: what went out in the last 30 days, what is scheduled for the next 14, the publishing queue and the drafts. It judges each network you work on by itself, so a busy network never hides a silent one. It flags:

- a network with no post for 7 days or more, naming it and saying since which date;
- a network with nothing scheduled within the next 7 days;
- every failed publication, with its network, its date, its account and the reason given;
- scheduled posts that were due but never sent;
- drafts untouched for 7 days or more;
- posts waiting for validation for 3 days or more;
- approved posts nobody scheduled.

A network you never posted on is left out. YouTube videos are uploaded by hand from YouTube Studio, never scheduled in hubStudio, so YouTube is judged on what was marked published and on its drafts. Steady rhythms with filled schedules give one finding at most.

The agent only reads what the person it runs for can see: a draft its author keeps private is left out. A post already published counts, whoever wrote it.

## Add the standard agent

1. Open **Agents** > **Catalog**.
2. Click **View details** to read the agent in full before you take it: what it reads, the model it runs on, how often it runs, whether it searches the web, and its instructions.
3. Click **Add to my agents**. The agent form opens, already filled in with the standard setup. Change anything you want, then confirm with **Add the agent**.

The agent joins **My agents**, switched on, and the Catalog card now reads **In my agents**. The Catalog itself stays as shipped.

You can also add it from the bottom of **My agents**: unfold **Add an agent** and click **Add** next to the agent.

## Create an agent from scratch

A custom agent reads the data you pick and follows instructions you write: a weekly check of one client's campaign, a watch on the Instagram drafts only, a reminder of what waits for approval.

1. Open **Agents** > **My agents**.
2. Unfold **Create an agent from scratch**.
3. Fill in the form (see below). Under **The data it reads**, tick what it should read:
   - **Social activity**: the social content of the last 30 days, what was drafted, planned and published.
   - **Social publishing**: the posts of every network, network by network, over the last 30 days and the next 14: published, scheduled, failed, and the drafts waiting.
   - **From the Assets Library**: any of your team's [campaigns](/help/campaigns), listed first and marked **Campaign**, and any folder or document of the library. A campaign brings its brief and every asset in it, pictures and clips by their prompt. A folder brings every document in it and in its subfolders. PDF, Word, Excel, Markdown and text files are read; pictures and clips are left aside. Every download is billed like one from the Assets Library. Past six entries, a search box (**Search a campaign, a folder or a document**) narrows the list.
4. Write its **Instructions**: what it should look for in that data, what counts as a finding, and what it should ignore.
5. Click **Create the agent**. It starts switched on.

You can only give an agent data you can see yourself. Each block follows your rights, as on its own pages.

## The agent form

The same form serves for adding, creating and editing an agent.

| Field | What it does |
|---|---|
| **Name** | The name shown on its card and in the emails. |
| **Model** | The model the agent reasons with. |
| **The data it reads** | Fixed for the standard agent; your choice for one you created. |
| **Web search** | **ON**: on each run the agent also searches the web, up to three searches, for what your data can't hold (a trend, a competitor's news, a network's new rule). Each search is billed with the run. **OFF**: its own data only. |
| **What users are told it does** | The sentence shown on its card. |
| **Instructions (the brief the agent reasons with)** | What it watches and how to judge it. Leave it empty on the standard agent to keep the standard instructions. What it may report and how it grades severity is fixed by the platform. |
| **Runs every (hours)** | The minimum time between two scheduled runs. |
| **Monthly budget (USD)** and **Weekly budget (USD)** | The most this agent may spend per calendar month and over any seven days. Whichever is reached first stops it from running. Empty means no limit of its own. The form shows what it spent this month and in the last seven days. |
| **Email the results to** | **The agent's owner** (your own agents) or **The team's administrators** (team agents), **These people only** with a list of addresses, or **Nobody**. |
| **Email content** | **Summary and link**, or **Full results** with the findings in the email. |

A field left empty uses the standard version of the agent. Changes apply from the next run.

## Manage your agents

On **My agents**, each agent card shows its name, whether it is **on** and how often it runs, the model it runs on and what it reads. On each card:

- **On** / **Off**: switches the agent on or off. Switched off, it keeps its setup but stops running.
- **Edit & test**: opens the form. Click **Save** to keep your changes.
- **Duplicate**: makes a new agent of yours, prefilled with this one's setup.
- **Remove from these agents** (the standard agent) or **Delete this agent** (one you created): removes it from your list. The Catalog and the team's agents are not touched.

### Test before you rely on it

In **Edit & test**, under **Test run**, click **Run on real data**. The agent runs as written above, unsaved edits included, on your current data, and the findings are shown there only: the agent's memory of the last pass is left untouched. It is a real, paid AI call.

## When agents run

A switched-on agent runs on its schedule. The scheduler makes one pass a day, and an agent runs on that pass once its **Runs every (hours)** has gone by since its last run. The Social publishing watcher runs about once a day.

A run skips the AI call entirely, and costs nothing, when nothing changed since the last pass or when there is nothing to read yet (no post on any network, for example).

To run an agent now, open **Agents** > **Runs** and click **Run now** next to it.

## The Agents Command Room

**Runs** opens the **Agents Command Room**.

![The Agents Command Room tab: Running now, Switched on and Previous runs with the Agents of filter](/Images/help/agents-runs.webp)

- **Running now**: the runs going on, and the ones waiting for the next pass of the scheduler. The page refreshes by itself while something runs.
- **Switched on**: the agents that run on their own, with **Last run:** and **Next run:**, and **Run now**, which starts a real, paid run at once.
- **Previous runs**: the 50 most recent runs, scheduled or started by hand. Test runs are not listed. Each row says how it ended: **failed**, **no data to read**, **nothing changed**, or the number of findings. Open a row to read the findings, the model, the tokens used and the price of the run.

An Admin sees every agent of the team and every member's personal agents, can run any of them, and filters **Previous runs** with **Agents of**. Everyone else sees their own agents.

## Findings

Each finding has a severity (**critical**, **warning** or **info**), a date, a title, an explanation and, often, **Suggested:** with a next step. Read them:

- in **Previous runs**, in the Agents Command Room, by opening the run;
- in the results email, when the agent sends one.

## The results email

Only scheduled runs send an email. When you run an agent yourself, the results show on screen.

After each scheduled run that reached the AI, the agent writes to the people chosen in **Email the results to**: by default, its owner for a personal agent and the team's Admins for a team agent. The email summarizes the run (when it ran, what it read, what came out, what it cost), even when nothing was worth flagging, and its button opens the run in the Agents Command Room. With **Full results**, the findings are in the email too.

A run that skipped the AI, because nothing changed or there was nothing to read, sends nothing.

## Team agents

**Team agents** (the **Team** tab) is for Admins. The agents added there are shared: they run for the whole team, and their runs are paid by the team.

- **Create an agent from scratch** at the top and **Add an agent** at the bottom work as on My agents.
- **Configure** picks what you set up, for example the team's agents, or one member's personal agents, managed on their behalf.

Members see the team's agents on **My agents**, under **Your team's agents**. **View details** shows one in full, and **Add to my agents** makes a copy of their own, which they change, run and schedule, and whose runs are billed to them. The team's agent stays as it is.

A team agent reads only what the whole team may see: a draft its author keeps private is left out of its runs.

## What a run costs, and who pays

A run that reaches the AI is paid: the tokens of the model, plus each web search when **Web search** is on. A run that finds nothing changed, or nothing to read, costs nothing.

| Run | Charged to |
|---|---|
| A scheduled run of your personal agent | You, the agent's owner, counted against your daily limit on the team balance. |
| A scheduled run of a team agent | The team. |
| **Run now** | The person who clicks it. |

The price of every run that reached the AI is shown in **Previous runs** and in the results email. The agent's own **Monthly budget (USD)** and **Weekly budget (USD)** stop it before it spends more; a tighter limit set for you or the team still wins. See [Balance and payments](/help/balance-and-payments).

## Who can do what

| Role | Agents |
|---|---|
| Admin | Everything below, plus **Team agents**, every member's runs in the Agents Command Room, and **Run now** on any agent. |
| Creator | Adds, creates, edits, tests, duplicates and runs their own agents. |
| Viewer | Opens the Agents pages and reads how agents are set up, but can't add, change, test or run one: "Your role is read-only, so you can look at how these agents are set up but not change them or run a test." |
| Client | No access. |

An Admin can also close the Agents module, or grade what a person may do in it, on that person's page: see [Your team](/help/your-team).
