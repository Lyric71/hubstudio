# 301 Redirect Plan: hubstudio.ai (WordPress) to hubStudio (Astro)

Migration plan for replacing the old WordPress site with the new Astro build
without losing the rankings, equity, and indexed pages Google currently holds.

## 1. What is changing

| | Old site | New site |
|---|---|---|
| Platform | WordPress + Yoast | Astro static, Vercel |
| Canonical host | `www.hubstudio.ai` | `hubstudio.ai` (apex) |
| Trailing slash | yes (`/aigc-image-creation/`) | no (`trailingSlash: 'never'`) |
| URL shape | flat keyword slugs | hierarchical sections |
| Indexed URLs | 27 pages + 40 posts (per Yoast `page-sitemap.xml` / `post-sitemap.xml`) | see route tree |

Three things move at once: the host (`www` to apex), the trailing slash, and
the URL structure. Each old indexed URL needs exactly one 301 to its closest
new equivalent.

## 2. Principles

- **301 only.** Permanent. Never 302, never downgrade later, never remove a
  301 after Google recrawls (per `CLAUDE.md` SEO rules).
- **One hop.** Old URL goes straight to the final URL: correct host, no
  trailing slash, correct path. No `301 -> 301` or `308 -> 301` chains.
- **Closest relevant page, never the homepage.** A blog post with no successor
  redirects to its section hub (`/resources/insights`), not to `/`. Redirecting
  unrelated pages to `/` is treated by Google as a soft 404.
- **Redirects are permanent infrastructure.** They stay live for years, not
  months. Backlinks keep arriving long after Google has recrawled.
- **Real 404 for genuinely dead URLs.** A clean 404 (the new `/404.astro`) is
  better than a misleading redirect.

## 3. Host strategy (www is canonical) — SUPERSEDED, see note

> **Shipped reality (2026-07-14).** This section originally planned a move to
> the apex. The site shipped the other way round: **`www.hubstudio.ai` is the
> canonical host** and the apex 308-redirects to it (per `CLAUDE.md`). The
> redirect rules live in `vercel.json` and were written against that reality:
>
> - Destinations are **relative** (`/work/mexicash`, not an absolute host).
>   Vercel keeps the request host, so a `www` request lands on the final `www`
>   URL in exactly one hop.
> - The old plan's catch-all `www -> apex` rule was **dropped**. Shipping it
>   against a www-canonical site would have created a redirect loop.
> - Old indexed URLs are all on `www` (the WordPress canonical), so they match
>   the path rules directly. Apex requests cost one extra hop (`308` to `www`,
>   then the `301`), which only affects the rare hand-typed apex URL.
>
> The prose below is kept for the historical rationale. Do not implement it.

The old canonical is `www.hubstudio.ai`; the new canonical is `hubstudio.ai`.
To keep old links resolving in a **single** 301:

1. Attach **both** `hubstudio.ai` and `www.hubstudio.ai` to the Vercel project,
   with `hubstudio.ai` set as the primary domain.
2. Do **not** use a Vercel domain-level "redirect to apex". Keep `www` as a
   real domain on the project so `vercel.json` redirects run for `www` requests
   too.
3. Every path redirect below uses an **absolute** `https://hubstudio.ai/...`
   destination. A request to `www.hubstudio.ai/old-url/` then matches the path
   rule and lands on the final apex URL in one hop, instead of `www -> apex`
   (hop 1) then `path` (hop 2).
4. A final catch-all rule sends any remaining `www` URL to apex as a 301.

If you instead keep the simpler domain-level `www -> apex` redirect, old `www`
URLs cost two hops (`308` then `301`). Google tolerates that, but the setup
above is cleaner and is what this plan assumes.

## 4. Redirect map

Confidence: **A** = exact 1:1 successor, ship as-is. **B** = close thematic
match, confirm before launch. **C** = no successor, routed to the section hub.

### 4.1 Pages (24 rules)

| Old URL (`www.hubstudio.ai`, trailing slash) | New URL (`hubstudio.ai`) | Conf. |
|---|---|---|
| `/privacy-policy/` | `/privacy` | A |
| `/terms-of-services/` | `/terms` | A |
| `/aigc-consulting-services-ai-content-studio-setup-implementation/` | `/solutions/consulting` | A |
| `/professional-aigc-training-course-ai-content-creation-for-brands/` | `/solutions/training` | A |
| `/white-label-ai-content-production-for-agencies-scale-without-hiring/` | `/solutions/agencies` | A |
| `/ai-generated-content-for-brands-custom-aigc-solutions-industry-specific-models/` | `/solutions/brands` | A |
| `/ai-generated-content-for-retail-scale-visual-assets-boost-conversions/` | `/solutions/retailers` | A |
| `/aigc-organization-manufacturers/` | `/solutions/manufacturers` | A |
| `/ai-content-for-facebook-instagram-marketing-aigc-studio/` | `/solutions/platforms/meta` | A |
| `/linkedin-aigc-for-b2b-transform-content-marketing-with-ai-generated-results/` | `/solutions/platforms/linkedin` | A |
| `/ai-tiktok-video-creation-aigc-studio-services-solutions/` | `/solutions/platforms/tiktok` | A |
| `/aigc-image-creation/` | `/solutions/ai-production/image` | A |
| `/aigc-video-creation/` | `/solutions/ai-production/video` | A |
| `/aigc-content-creation-ai-copywriting-studio-hubstudio/` | `/solutions/ai-production/content` | A |
| `/use-cases/` | `/work` | A |
| `/hubstudio-aigc-expertise-for-creative-competitive-edge/` | `/the-studio/ai-excellence` | A |
| `/contact-hubstudio-ai-content-studio-for-agencies-brands-get-quote/` | `/contact` | A |
| `/contact-us-wechat/` | `/contact` | A |
| `/thank-you-for-contacting-hubstudio-ai-content-creation-studio/` | `/thank-you` | A |
| `/ai-generated-content-insights-strategy/` | `/resources/insights` | A |
| `/howto/` | `/resources/how-to` | A |
| `/ai-content-copyright-legal-faq-guide/` | `/resources/copyright-and-ai` | A |
| `/ai-content-creation-solutions-for-fashion-brands-taylor-made-aigc-framework/` | `/solutions/brands` | B |
| `/hub4you-taylor-made-aigc-agent-solution-is-saas-model/` | `/solutions` | B |

**No rule needed** (path unchanged, host/slash normalization handles it):
`/the-studio/` -> `/the-studio`, `/partner-program/` -> `/partner-program`,
`/` (home) -> `/` (covered by the `www` catch-all).

### 4.2 Case studies (14 rules)

Old WordPress posts; new detail pages live at `/work/<slug>` (slugs from
`src/data/case-studies.ts`).

| Old URL | New URL | Conf. |
|---|---|---|
| `/global-fashion-brand-case-study-ai-model-platform/` | `/work/global-fashion-brand` | A |
| `/camper-case-study-ai-social-content-china-market/` | `/work/camper` | A |
| `/age20-case-study-ai-beauty-campaign-localization/` | `/work/age20` | A |
| `/1834-gin-case-study-ai-brand-video-production/` | `/work/1834-gin` | A |
| `/linfuseur-case-study-ai-content-studio/` | `/work/linfuseur` | A |
| `/premium-suv-global-campaign/` | `/work/premium-suv` | A |
| `/hisense-case-study-hub4you-ai-platform-deployment/` | `/work/hisense` | A |
| `/french-diy-retailer-case-study-ai-merchandising/` | `/work/diy-european-retailer` | A |
| `/shiseido-rq-pyology-case-study-ai-beauty-content/` | `/work/shiseido-rq-pyology` | A |
| `/london-jeweler-digital-content-acceleration-with-ai/` | `/work/elizabeth-gage` | A |
| `/mexicash-multi-platform-video-ads-in-5-days/` | `/work/mexicash` | A |
| `/noyz-mylk-de-parfum-launch-video-production/` | `/work/noyz-mylk-de-parfum` | A |
| `/energy-drink-tiktok-viral-campaign/` | `/work` | C |
| `/limited-edition-luxury-watch-collection/` | `/work` | C |

The last two case studies have no equivalent in the new `case-studies.ts`. If
either is rebuilt under a new slug before launch, repoint its rule to that slug.

### 4.3 Blog / insight posts (26 rules)

| Old URL | New URL | Conf. |
|---|---|---|
| `/3-years-of-genai-how-ecommerce-content-production-transformed/` | `/resources/insights/three-years-of-genai-ecommerce` | A |
| `/adobes-500b-ai-mistake-why-creative-suites-are-obsolete/` | `/resources/insights/adobe-ai-mistake` | A |
| `/geo-vs-seo-how-ai-search-is-rewriting-content-marketing-rules/` | `/resources/insights/geo-vs-seo` | A |
| `/aigc-adoption-guide-cut-content-costs-60-while-scaling-7x/` | `/resources/insights/aigc-adoption-curve` | A |
| `/without-creatives-aigc-is-nothing/` | `/resources/insights/without-creatives-aigc-is-nothing` | A |
| `/ai-sound-for-video-foley-grade-audio-for-aigc-at-scale/` | `/resources/insights/ai-sound-for-video` | A |
| `/where-language-ai-actually-works-for-content-teams/` | `/resources/insights/where-language-ai-delivers` | A |
| `/promptable-3d-is-here-why-aigc-content-operations-are-about-to-go-spatial/` | `/resources/insights/promptable-3d-content-operations` | A |
| `/luxury-brands-and-ai-content-systems-matter-more-than-ai-tools/` | `/resources/insights/luxury-ai-content-systems` | A |
| `/ai-search-is-changing-seo-why-content-systems-now-win/` | `/resources/how-to/ai-search-content-systems-win` | A |
| `/edit-photos-like-a-pro-with-nano-banana-pro/` | `/resources/how-to/nano-banana-pro-photo-editing` | A |
| `/notebooklm-for-decks-and-infographics/` | `/resources/how-to/notebooklm-decks-and-infographics` | A |
| `/luxury-brands-and-aigc-the-inevitable-adoption-timeline/` | `/resources/insights/aigc-adoption-curve` | B |
| `/how-hubstudio-leverages-google-nano-banana-for-client-success/` | `/resources/how-to/nano-banana-pro-photo-editing` | B |
| `/beyond-ai-slop-why-brands-need-authentic-creative-intelligence/` | `/resources/insights/without-creatives-aigc-is-nothing` | B |
| `/the-creative-skills-revolution-how-aigc-transforms-brand-teams/` | `/resources/insights/without-creatives-aigc-is-nothing` | B |
| `/genai-skills-revolution-how-creative-roles-are-evolving/` | `/resources/insights/without-creatives-aigc-is-nothing` | B |
| `/elevenlabs-11ai-the-future-of-ai-voice-brand-communication/` | `/resources/insights/ai-sound-for-video` | B |
| `/the-ai-content-paradox-who-pays-when-machines-learn-for-free/` | `/resources/copyright-and-ai` | B |
| `/ai-avatars-6-strategic-ways-businesses-are-transforming-brand-content/` | `/resources/insights/ai-avatars-brand-content` | A |
| `/understanding-diffusion-models-the-science-behind-aigc/` | `/resources/insights/diffusion-models-explained` | A |
| `/how-we-build-custom-aigc-workflows-for-every-client/` | `/resources/insights/custom-aigc-workflows` | A |
| `/how-agentic-ai-is-reshaping-data-work-for-creative-teams/` | `/resources/insights/agentic-ai-creative-data` | A |
| `/veo-3-professional-review-ai-video-generation-for-brands/` | `/resources/insights/veo-3-studio-review` | A |
| `/cloudflare-pay-per-crawl-how-brands-can-protect-aigc-content/` | `/resources/insights/cloudflare-pay-per-crawl` | A |
| `/data-driven-aigc-how-smart-brands-scale-content-with-ai-performance/` | `/resources/insights/data-driven-aigc` | A |

**Ported, not redirected to a hub.** The seven posts above had no successor on
the new site, so the articles were migrated into `src/data/insights.ts` and
`/resources/insights/`, each keeping its own page and link equity. Their legacy
hero images were carried over from the old WordPress site and need
re-art-direction against `hubstudio-image-style-guide.md` (they are the old
AI-generator style). The 301s now point at the live ported URLs.

## 5. Decisions (resolved)

1. **`/hub4you-taylor-made-aigc-agent-solution-is-saas-model/`** routes to
   `/solutions`. No dedicated hub4you / SaaS-platform page exists; the
   topically relevant section hub was chosen over the homepage to avoid a
   soft-404. If a hub4you page ships later, repoint this rule, the URL was a
   named product and likely carries backlinks.
2. **`/ai-content-creation-solutions-for-fashion-brands-...`** routes to
   `/solutions/brands`. No industry-specific solution page exists; the audience
   hub is the closest relevant target. Repoint if a fashion page ships.
3. **Two unmatched case studies** (`energy-drink-tiktok-viral-campaign`,
   `limited-edition-luxury-watch-collection`) route to `/work`, the relevant
   section hub. Rebuild them under new slugs to repoint precisely.
4. **The 7 orphaned blog posts were ported**, not redirected to a hub: each is
   now a live article under `/resources/insights/` with its own page and
   equity. See 4.3.

## 6. Implementation: `vercel.json` — SHIPPED 2026-07-14

> **Status: live.** The 64 rules are in `vercel.json`. The shipped version
> differs from the JSON block below in two ways, both required by the
> www-canonical host (section 3): destinations are **relative** paths, and the
> trailing `www -> apex` catch-all rule is **absent**. Treat `vercel.json` as
> the source of truth; the block below is the original draft.

Redirects belong at the Vercel edge so they fire before any static file is
served and never depend on the Astro build. Add the `redirects` array below to
the existing `vercel.json` (keep the current `headers` block). `statusCode:
301` forces a true 301 rather than Vercel's default 308.

Ordering matters: Vercel uses the first matching rule, so all specific paths
come first and the `www` catch-all comes last.

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "redirects": [
    { "source": "/privacy-policy", "destination": "https://hubstudio.ai/privacy", "statusCode": 301 },
    { "source": "/terms-of-services", "destination": "https://hubstudio.ai/terms", "statusCode": 301 },
    { "source": "/aigc-consulting-services-ai-content-studio-setup-implementation", "destination": "https://hubstudio.ai/solutions/consulting", "statusCode": 301 },
    { "source": "/professional-aigc-training-course-ai-content-creation-for-brands", "destination": "https://hubstudio.ai/solutions/training", "statusCode": 301 },
    { "source": "/white-label-ai-content-production-for-agencies-scale-without-hiring", "destination": "https://hubstudio.ai/solutions/agencies", "statusCode": 301 },
    { "source": "/ai-generated-content-for-brands-custom-aigc-solutions-industry-specific-models", "destination": "https://hubstudio.ai/solutions/brands", "statusCode": 301 },
    { "source": "/ai-generated-content-for-retail-scale-visual-assets-boost-conversions", "destination": "https://hubstudio.ai/solutions/retailers", "statusCode": 301 },
    { "source": "/aigc-organization-manufacturers", "destination": "https://hubstudio.ai/solutions/manufacturers", "statusCode": 301 },
    { "source": "/ai-content-for-facebook-instagram-marketing-aigc-studio", "destination": "https://hubstudio.ai/solutions/platforms/meta", "statusCode": 301 },
    { "source": "/linkedin-aigc-for-b2b-transform-content-marketing-with-ai-generated-results", "destination": "https://hubstudio.ai/solutions/platforms/linkedin", "statusCode": 301 },
    { "source": "/ai-tiktok-video-creation-aigc-studio-services-solutions", "destination": "https://hubstudio.ai/solutions/platforms/tiktok", "statusCode": 301 },
    { "source": "/ai-content-creation-solutions-for-fashion-brands-taylor-made-aigc-framework", "destination": "https://hubstudio.ai/solutions/brands", "statusCode": 301 },
    { "source": "/hub4you-taylor-made-aigc-agent-solution-is-saas-model", "destination": "https://hubstudio.ai/solutions", "statusCode": 301 },
    { "source": "/aigc-image-creation", "destination": "https://hubstudio.ai/solutions/ai-production/image", "statusCode": 301 },
    { "source": "/aigc-video-creation", "destination": "https://hubstudio.ai/solutions/ai-production/video", "statusCode": 301 },
    { "source": "/aigc-content-creation-ai-copywriting-studio-hubstudio", "destination": "https://hubstudio.ai/solutions/ai-production/content", "statusCode": 301 },
    { "source": "/use-cases", "destination": "https://hubstudio.ai/work", "statusCode": 301 },
    { "source": "/hubstudio-aigc-expertise-for-creative-competitive-edge", "destination": "https://hubstudio.ai/the-studio/ai-excellence", "statusCode": 301 },
    { "source": "/contact-hubstudio-ai-content-studio-for-agencies-brands-get-quote", "destination": "https://hubstudio.ai/contact", "statusCode": 301 },
    { "source": "/contact-us-wechat", "destination": "https://hubstudio.ai/contact", "statusCode": 301 },
    { "source": "/thank-you-for-contacting-hubstudio-ai-content-creation-studio", "destination": "https://hubstudio.ai/thank-you", "statusCode": 301 },
    { "source": "/ai-generated-content-insights-strategy", "destination": "https://hubstudio.ai/resources/insights", "statusCode": 301 },
    { "source": "/howto", "destination": "https://hubstudio.ai/resources/how-to", "statusCode": 301 },
    { "source": "/ai-content-copyright-legal-faq-guide", "destination": "https://hubstudio.ai/resources/copyright-and-ai", "statusCode": 301 },

    { "source": "/global-fashion-brand-case-study-ai-model-platform", "destination": "https://hubstudio.ai/work/global-fashion-brand", "statusCode": 301 },
    { "source": "/camper-case-study-ai-social-content-china-market", "destination": "https://hubstudio.ai/work/camper", "statusCode": 301 },
    { "source": "/age20-case-study-ai-beauty-campaign-localization", "destination": "https://hubstudio.ai/work/age20", "statusCode": 301 },
    { "source": "/1834-gin-case-study-ai-brand-video-production", "destination": "https://hubstudio.ai/work/1834-gin", "statusCode": 301 },
    { "source": "/linfuseur-case-study-ai-content-studio", "destination": "https://hubstudio.ai/work/linfuseur", "statusCode": 301 },
    { "source": "/premium-suv-global-campaign", "destination": "https://hubstudio.ai/work/premium-suv", "statusCode": 301 },
    { "source": "/hisense-case-study-hub4you-ai-platform-deployment", "destination": "https://hubstudio.ai/work/hisense", "statusCode": 301 },
    { "source": "/french-diy-retailer-case-study-ai-merchandising", "destination": "https://hubstudio.ai/work/diy-european-retailer", "statusCode": 301 },
    { "source": "/shiseido-rq-pyology-case-study-ai-beauty-content", "destination": "https://hubstudio.ai/work/shiseido-rq-pyology", "statusCode": 301 },
    { "source": "/london-jeweler-digital-content-acceleration-with-ai", "destination": "https://hubstudio.ai/work/elizabeth-gage", "statusCode": 301 },
    { "source": "/mexicash-multi-platform-video-ads-in-5-days", "destination": "https://hubstudio.ai/work/mexicash", "statusCode": 301 },
    { "source": "/noyz-mylk-de-parfum-launch-video-production", "destination": "https://hubstudio.ai/work/noyz-mylk-de-parfum", "statusCode": 301 },
    { "source": "/energy-drink-tiktok-viral-campaign", "destination": "https://hubstudio.ai/work", "statusCode": 301 },
    { "source": "/limited-edition-luxury-watch-collection", "destination": "https://hubstudio.ai/work", "statusCode": 301 },

    { "source": "/3-years-of-genai-how-ecommerce-content-production-transformed", "destination": "https://hubstudio.ai/resources/insights/three-years-of-genai-ecommerce", "statusCode": 301 },
    { "source": "/adobes-500b-ai-mistake-why-creative-suites-are-obsolete", "destination": "https://hubstudio.ai/resources/insights/adobe-ai-mistake", "statusCode": 301 },
    { "source": "/geo-vs-seo-how-ai-search-is-rewriting-content-marketing-rules", "destination": "https://hubstudio.ai/resources/insights/geo-vs-seo", "statusCode": 301 },
    { "source": "/aigc-adoption-guide-cut-content-costs-60-while-scaling-7x", "destination": "https://hubstudio.ai/resources/insights/aigc-adoption-curve", "statusCode": 301 },
    { "source": "/without-creatives-aigc-is-nothing", "destination": "https://hubstudio.ai/resources/insights/without-creatives-aigc-is-nothing", "statusCode": 301 },
    { "source": "/ai-sound-for-video-foley-grade-audio-for-aigc-at-scale", "destination": "https://hubstudio.ai/resources/insights/ai-sound-for-video", "statusCode": 301 },
    { "source": "/where-language-ai-actually-works-for-content-teams", "destination": "https://hubstudio.ai/resources/insights/where-language-ai-delivers", "statusCode": 301 },
    { "source": "/promptable-3d-is-here-why-aigc-content-operations-are-about-to-go-spatial", "destination": "https://hubstudio.ai/resources/insights/promptable-3d-content-operations", "statusCode": 301 },
    { "source": "/luxury-brands-and-ai-content-systems-matter-more-than-ai-tools", "destination": "https://hubstudio.ai/resources/insights/luxury-ai-content-systems", "statusCode": 301 },
    { "source": "/ai-search-is-changing-seo-why-content-systems-now-win", "destination": "https://hubstudio.ai/resources/how-to/ai-search-content-systems-win", "statusCode": 301 },
    { "source": "/edit-photos-like-a-pro-with-nano-banana-pro", "destination": "https://hubstudio.ai/resources/how-to/nano-banana-pro-photo-editing", "statusCode": 301 },
    { "source": "/notebooklm-for-decks-and-infographics", "destination": "https://hubstudio.ai/resources/how-to/notebooklm-decks-and-infographics", "statusCode": 301 },
    { "source": "/luxury-brands-and-aigc-the-inevitable-adoption-timeline", "destination": "https://hubstudio.ai/resources/insights/aigc-adoption-curve", "statusCode": 301 },
    { "source": "/how-hubstudio-leverages-google-nano-banana-for-client-success", "destination": "https://hubstudio.ai/resources/how-to/nano-banana-pro-photo-editing", "statusCode": 301 },
    { "source": "/beyond-ai-slop-why-brands-need-authentic-creative-intelligence", "destination": "https://hubstudio.ai/resources/insights/without-creatives-aigc-is-nothing", "statusCode": 301 },
    { "source": "/the-creative-skills-revolution-how-aigc-transforms-brand-teams", "destination": "https://hubstudio.ai/resources/insights/without-creatives-aigc-is-nothing", "statusCode": 301 },
    { "source": "/genai-skills-revolution-how-creative-roles-are-evolving", "destination": "https://hubstudio.ai/resources/insights/without-creatives-aigc-is-nothing", "statusCode": 301 },
    { "source": "/elevenlabs-11ai-the-future-of-ai-voice-brand-communication", "destination": "https://hubstudio.ai/resources/insights/ai-sound-for-video", "statusCode": 301 },
    { "source": "/the-ai-content-paradox-who-pays-when-machines-learn-for-free", "destination": "https://hubstudio.ai/resources/copyright-and-ai", "statusCode": 301 },
    { "source": "/ai-avatars-6-strategic-ways-businesses-are-transforming-brand-content", "destination": "https://hubstudio.ai/resources/insights/ai-avatars-brand-content", "statusCode": 301 },
    { "source": "/understanding-diffusion-models-the-science-behind-aigc", "destination": "https://hubstudio.ai/resources/insights/diffusion-models-explained", "statusCode": 301 },
    { "source": "/how-we-build-custom-aigc-workflows-for-every-client", "destination": "https://hubstudio.ai/resources/insights/custom-aigc-workflows", "statusCode": 301 },
    { "source": "/how-agentic-ai-is-reshaping-data-work-for-creative-teams", "destination": "https://hubstudio.ai/resources/insights/agentic-ai-creative-data", "statusCode": 301 },
    { "source": "/veo-3-professional-review-ai-video-generation-for-brands", "destination": "https://hubstudio.ai/resources/insights/veo-3-studio-review", "statusCode": 301 },
    { "source": "/cloudflare-pay-per-crawl-how-brands-can-protect-aigc-content", "destination": "https://hubstudio.ai/resources/insights/cloudflare-pay-per-crawl", "statusCode": 301 },
    { "source": "/data-driven-aigc-how-smart-brands-scale-content-with-ai-performance", "destination": "https://hubstudio.ai/resources/insights/data-driven-aigc", "statusCode": 301 },

    {
      "source": "/:path*",
      "has": [{ "type": "host", "value": "www.hubstudio.ai" }],
      "destination": "https://hubstudio.ai/:path*",
      "statusCode": 301
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "Strict-Transport-Security", "value": "max-age=63072000; includeSubDomains; preload" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "SAMEORIGIN" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=(), interest-cohort=()" }
      ]
    }
  ]
}
```

**Trailing-slash note.** Sources are written without a trailing slash.
`astro.config.mjs` sets `trailingSlash: 'never'` and Vercel normalizes the
trailing slash before evaluating redirect rules, so `/privacy-policy/` matches
the `/privacy-policy` rule. This is the project's documented assumption
(`CLAUDE.md`). It is the single most important thing to verify after deploy
(step 9.1): if a trailing-slash URL produces a `308` hop before the `301`,
change that rule's `source` to include the slash.

## 7. Pre-launch checklist

- [ ] **Export the real indexed set from GSC.** In the existing
      `www.hubstudio.ai` property: Indexing > Pages, export every "Indexed"
      URL. Also pull Performance > Pages (last 12 months). Diff against this
      plan to catch URLs the Yoast sitemaps omit: paginated archives
      (`/page/2/`), `/category/`, `/tag/`, `/author/`, date archives, and any
      slug changed earlier in the site's life.
- [ ] **Crawl the live old site.** Screaming Frog or `wget --spider -r` against
      `https://www.hubstudio.ai` for the full live URL inventory and to find
      existing internal 404s. Add any missing URL to the map.
- [ ] **Confirm the B and C decisions** in section 5.
- [ ] **Build with the redirects in place:** `npm run build`, then
      `npm run check`. `vercel.json` does not affect the build, but verify the
      destination routes all exist in `dist/`.
- [ ] **Set up the GSC Domain property** for `hubstudio.ai` (DNS TXT
      verification). A Domain property covers `www`, apex, http and https in
      one place. Keep the old `www` URL-prefix property too, to watch the old
      URLs drain.
- [ ] **Build a legacy sitemap.** Create `public/legacy-redirect-sitemap.xml`
      listing all 64 old URLs (with their `www` host and trailing slashes).
      Submitting it post-launch makes Google recrawl the old URLs fast and
      discover the 301s sooner. Remove it after ~6 months.
- [ ] Confirm the new site is **not** `noindex` and `robots.txt` allows
      crawling (current `public/robots.txt` is open and points at
      `/sitemap-index.xml`: good).

## 8. Launch day

1. Deploy the new Astro site and `vercel.json` (with redirects) **together**,
   in one release. The redirect rules and their destination pages must go live
   in the same deploy: never a window where old URLs 404.
2. Confirm `hubstudio.ai` and `www.hubstudio.ai` both resolve to the new
   project, apex primary.
3. Run the verification script in section 9 before announcing.

## 9. Post-launch verification

### 9.1 Redirect hop check

Every old URL must return exactly one `301` straight to a `200`. Run from Git
Bash or the WSL shell:

```bash
#!/usr/bin/env bash
# Reads old URLs (one per line, full https://www... form) from old-urls.txt
while read -r url; do
  printf '%s\n' "$url"
  curl -sI -o /dev/null -w '  %{http_code} -> %{redirect_url}\n' "$url"
  final=$(curl -s -o /dev/null -L -w '%{url_effective} %{http_code} (%{num_redirects} hops)' "$url")
  printf '  final: %s\n\n' "$final"
done < old-urls.txt
```

Pass criteria for each URL:

- First response is `301` (not `302`, not `308`).
- `num_redirects` is `1` (a `www`-only path with no rule may show `1`; a
  mapped URL must not exceed `1`).
- Final `url_effective` is the intended apex, no-trailing-slash URL.
- Final status is `200`.

If any mapped URL shows 2 hops or a `308`, fix per the trailing-slash note in
section 6, or check that `www` is a real domain on the project (section 3).

### 9.2 Spot checks

- `https://www.hubstudio.ai/` -> `301` -> `https://hubstudio.ai/` `200`.
- A random old blog URL -> `301` -> correct new article `200`.
- A genuinely dead URL (e.g. `/wp-login.php`) -> serves the new `404`, **not** a
  redirect.
- `https://hubstudio.ai/sitemap-index.xml` returns the new sitemap, `200`.

## 10. Google Search Console steps

1. **Submit the new sitemap.** In the `hubstudio.ai` Domain property: Sitemaps
   > add `https://hubstudio.ai/sitemap-index.xml`.
2. **Submit the legacy sitemap** (`legacy-redirect-sitemap.xml`) so Google
   recrawls the old URLs and sees the 301s quickly.
3. **No Change of Address tool.** That tool is for moves to a *different*
   domain. `www` to apex on the same domain does not use it; the 301s plus the
   Domain property are enough.
4. **URL Inspection** on 5-10 of the most important old URLs: request a recrawl
   so the highest-value pages are reprocessed first.
5. **Keep both properties** open during the transition: watch impressions and
   clicks shift from the old `www` property to the new Domain property.

## 11. Ongoing monitoring (first 90 days)

- **Week 1-2:** GSC Pages report. Expect old URLs to move into "Page with
  redirect". Watch "Not found (404)" and "Soft 404": anything there is a
  missing or wrong rule.
- **Weeks 2-8:** Performance report. A temporary ranking and traffic dip is
  normal during reprocessing. New URLs should start accumulating impressions.
- **Crawl stats:** confirm no redirect loops or chains
  (Settings > Crawl stats).
- **Backlinks:** in GSC Links, find the top referring domains pointing at old
  URLs. The 301s carry the equity, but ask the highest-value referrers to
  update to the new URLs directly: a direct link beats a redirected one.
- **Update everything you control:** internal links (the new build already uses
  new paths), Google Business Profile, LinkedIn and social profiles, email
  signatures, any paid-campaign landing URLs, the email footer links.
- **Timeline:** full reprocessing of 67 URLs typically takes a few weeks to a
  few months. Keep every redirect live permanently regardless.

## 12. Optional: WordPress cruft

Old WP installs leak crawlable URLs beyond the content pages. Decide per the
GSC export in section 7:

- `/feed/`, `/comments/feed/`, post-level `/<slug>/feed/`: redirect to the
  closest hub or let them 404. Low value.
- `/category/...`, `/tag/...`, `/author/...`, date archives `/2024/...`,
  `/page/N/`: 301 to the nearest hub (`/resources/insights`) only if GSC shows
  them indexed with traffic; otherwise let them 404.
- `/sitemap.xml`, `/sitemap_index.xml`, `/page-sitemap.xml`,
  `/post-sitemap.xml`: optionally 301 to `/sitemap-index.xml` so any old
  sitemap reference resolves. Not required for SEO (Google reads `robots.txt`).
- `/wp-admin`, `/wp-login.php`, `/xmlrpc.php`, `/wp-json/...`: do **not**
  redirect. Let them 404. Redirecting admin endpoints is a needless signal.

---

**Summary:** 64 explicit 301s plus one `www`-to-apex catch-all. 53 are exact
1:1 successors (A, including the 7 ported blog posts), 9 are close thematic
matches (B), 2 route to a section hub for lack of a successor (C, the retired
case studies). Drop the section 6 block into `vercel.json`, deploy site and
redirects together, then verify with the section 9 script.
