---
title: "Skills"
seoTitle: "Skills that shape Improve with AI | hubStudio Help"
description: "What a skill is, how to take one from the Catalog, edit it or write your own, how team skills work, and how skills shape the Improve with AI rewrite."
excerpt: "Reusable instructions that Improve with AI follows every time it rewrites a prompt for an image or a video."
section: "skills"
order: 6
updated: 2026-09-27
appPaths: ["/skills", "/skills/organization", "/skills/catalog"]
audience: "Everyone; team skills are for administrators"
related: ["create-an-image", "create-a-video", "social-networks", "your-team"]
shots:
  - file: "/Images/help/skills-my-skills.webp"
    route: "/skills"
    alt: "My skills: the Personal, Team and Catalog tabs, New skill, and the network format skills each with Duplicate, Switch off, Edit and Delete"
    captured: 2026-09-27
  - file: "/Images/help/skills-catalog.webp"
    route: "/skills/catalog"
    alt: "The Catalog with its search box, one chip per section, and the Social networks skills marked In my skills"
    captured: 2026-09-27
sources: ["src/pages/skills/index.astro", "src/pages/skills/organization.astro", "src/pages/skills/catalog.astro", "src/scripts/skillsPanel.ts", "src/components/SkillsNav.astro", "src/lib/skill-catalog.ts", "src/lib/imagery-skills.ts", "src/lib/prompt-craft.ts", "src/lib/skills-db.ts", "src/lib/app.ts", "src/components/panels/SocialContentPanel.astro"]
---

A **skill** is a reusable set of instructions the AI follows: a method, a checklist, a house style, a list of rules. You write it once, say where it applies, and it rides along every time, so you never paste the same instructions twice.

In hubStudio, skills shape **Improve with AI**, the button that rewrites your prompt before an image or a video is rendered. See [Create an image](/help/create-an-image#improve-with-ai).

## How skills shape Improve with AI

Improve with AI starts from hubStudio's own prompt craft for images or for video, adds the habits of the engine you picked, then adds every skill switched on that applies to **Images and video**: your team's first, then your own.

Every such skill joins every rewrite, image or video. That is why the standard skills open with a **When:** line that tells the rewriter to ignore them when the brief is about something else. A skill never changes your settings or your engine: when another engine or setting would serve the brief better, the rewrite says so in its notes.

Skills add words to each rewrite, so they cost a few tokens per call, billed with the rewrite. Keep them short and specific: what to do, what to avoid.

## The Skills menu

| Entry | Who sees it | What it holds |
|---|---|---|
| **My skills** | Everyone | Your own skills: the ones you added from the Catalog or from your team, and the ones you wrote. Only these can be edited. |
| **Team skills** | Administrators in the menu; every member through the tab on the Skills pages | The skills your administrators wrote for everyone in the team. |
| **Catalog** | Everyone | Every standard skill hubStudio ships, open to all. |

![My skills: the Personal, Team and Catalog tabs, New skill, and the network format skills each with Duplicate, Switch off, Edit and Delete](/Images/help/skills-my-skills.webp)

## The Catalog

The Catalog groups the standard skills in sections, with a search box and one chip per section. Each card says **Applies to**, which tells you where the skill works. The skills that apply to **Images and video** are the ones Improve with AI reads. They include, among others:

- **E-commerce packshot** and **Lifestyle product scene** for product pictures.
- **Consistent character across images** to keep the same person or mascot recognizable across a series.
- **Legible text inside an image** for headlines, labels and posters.
- **Social media visual formats** to compose for the shape each network shows, with its safe zones.
- **Photorealistic look**, **Illustration and brand style consistency**, **Precise image edits** and **Upscaling and restoration**.
- **Video camera movement vocabulary**, **Video shot pacing and duration**, **Animating a still (image to video)** and **Short vertical video ad**.
- **Avoid list: hands, text artifacts, watermarks**.

The **Social networks** section holds the posting rules of each network (LinkedIn, X, Instagram, Facebook, TikTok): length, hashtags, tone. These skills are already in your own list, and each network module picks its own format skill for every draft. See [Social networks](/help/social-networks#write-the-brief-linkedin-facebook-x).

To take a skill:

1. Click **View details** to read the whole skill before you take it: what it is for, where it applies and the instructions the AI follows.
2. Click **Add to my skills**. Your own copy appears under **My skills**, and the card now reads **In my skills**.

The Catalog itself stays as shipped. You edit your copy.

![The Catalog with its search box, one chip per section, and the Social networks skills marked In my skills](/Images/help/skills-catalog.webp)

## Edit or write your own

On **My skills**, each skill has:

- **Switch off** (or **Switch on**): a skill switched off is kept but no longer used.
- **Edit**: opens the form. Change the **Name**, **What it is for (shown to people, not to the AI)**, the **Instructions (what the AI follows)** and **Where it applies**, then click **Save**.
- **Duplicate**: makes a variant of it.
- **Delete**: removes it from your list. A skill you took from the Catalog or from your team stays where it was.

To write one from nothing, click **New skill**, fill in the same form and click **Create skill**. Instructions hold up to 8,000 characters. Write them the way you would brief a colleague: short rules or numbered steps work best.

Under **Where it applies**, tick **Images and video** for a skill you want Improve with AI to follow, and **Social** for a skill you want the drafts of the network modules to follow. A skill with nothing ticked is stored but never used.

## Team skills

Team skills are written by the team's administrators for everyone. They apply to every member's rewrites, before each person's own skills.

- **Administrators** open **Skills** > **Team skills** to write, edit, switch off and delete them, with the same form as above.
- **Everyone else** opens the **Team** tab on the Skills pages to read them. Each one has **View details**, **Add to my skills** and **Duplicate**.

**Add to my skills** puts a copy with the same name among your own skills. Your copy replaces the team's version on your own rewrites, so you can adjust it for yourself. **Duplicate** makes a separate skill of yours that applies beside the original.

Standard skills are not added to the team: the Catalog is open to every member, who adds what they need to their own skills.
