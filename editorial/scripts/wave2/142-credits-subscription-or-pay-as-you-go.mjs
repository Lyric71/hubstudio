// editorial/scripts/wave2/142-credits-subscription-or-pay-as-you-go.mjs
export default {
  id: "142",
  date: "2026-12-31",
  family: "comparison",
  template: "insight",
  brief: true,
  status: "not_started",
  cluster: "Comparisons",
  contentType: "Comparison",
  readerStage: "budget-holder",
  slug: "credits-subscription-or-pay-as-you-go",
  h1: "Credits, subscription or pay as you go for AI content",
  query: "AI content tool pricing models",
  secondary: [
    "credits vs subscription for AI tools",
    "pay as you go AI image generator",
    "do AI credits expire",
    "prepaid balance or subscription",
  ],
  verdict:
    "Software comparison blogs and vendor pricing pages rank, each arguing for its own model; none sets the three ways of paying side by side on what a buyer actually lives with: what a unit is worth, what expires, what a failed run costs, how a team caps spend, and what the invoice shows.",
  words: 1900,
  angle:
    "The three models price the same render differently in practice. A credit is a unit whose value the seller sets and can change; a subscription buys capacity whether it is used or not; pay as you go charges each run in money, at a price shown before it runs. Compare them on transparency, expiry, failed runs, team control and accounting, never on a headline figure, and say which kind of team each suits. Price levels only.",
  mustInclude: [
    "A decision table in the first screen: criterion (unit of account, price visible before a run, unused value, expiry and rollover, failed runs, team caps, invoices and accounting, predictability of the monthly bill) against credits, subscription, pay as you go",
    "Which team each suits: steady high volume, irregular campaigns, an agency billing its clients",
    "What to read in any terms: how a credit converts to a run and whether that can change, expiry, rollover, renewal and cancellation, refunds for failed runs",
    "Renewal and cancellation rules only from the legislature's or regulator's own page, with their current status stated",
    "hubStudio's model as one example, from the positioning file only: a prepaid balance held in real currency, no subscription, no seat fees, the price shown before every run (Gemini Omni Flash is priced after the render), a failed run not charged (one exception: a clip over 15 seconds that times out after the engine billed it), a balance that does not expire, optional automatic top-up, a daily spending limit per person, an invoice per top-up, a Usage log",
    "Relative cost shown only as price levels from $ to $$$$, as the Model benchmarks page shows them",
  ],
  doNot: [
    "Name any app, platform or vendor, or describe one so it can be recognized",
    "Print any amount, rate, credit conversion or hubStudio figure",
    "Call hubStudio's balance credits",
    "Use an em dash",
  ],
  stats: [
    "Market structure: published pricing pages of AI image and video apps collected on one dated day, counted by payment model (credits, subscription, pay as you go, mixed) and by whether unused value expires; category only, no vendor named",
    "Renewal and cancellation law: the statute or the regulator's page with its current status (for example a state automatic renewal law, or the FTC's negative option rule and its standing in court), dated",
    "hubStudio facts: hubstudio-positioning.md (Money) and balance-and-payments.md in the help center",
  ],
  assets: [
    "Decision table",
    "Terms checklist: the clause, where to find it, what to ask",
    "Price-level legend from $ to $$$$, no figures",
  ],
  links: [
    ["model benchmarks with price levels", "/resources/insights/ai-model-benchmarks"],
    ["what a week of social content costs", "/resources/insights/cost-of-social-content-week"],
    ["one app or a stack of tools", "/resources/insights/one-app-vs-tool-stack-social-content"],
    ["subscription or managed production", "/resources/insights/subscription-or-managed-production"],
    ["pricing", "/pricing"],
    ["balance and payments help", "/help/balance-and-payments"],
  ],
  seoTitle: "Credits, Subscription or Pay as You Go for AI",
  seoDesc:
    "Three ways to pay for AI content compared on what you live with: unit value, expiry, failed runs, team caps and invoices. Price levels only, no figures.",
  faqs: [
    "What is the difference between credits and a subscription for AI tools?",
    "Do AI credits expire?",
    "Is pay as you go cheaper than a subscription for AI images?",
    "Am I charged for a failed AI generation?",
    "How can a team control spending on AI content tools?",
    "Which pricing model suits an agency billing clients?",
  ],
  cta: "Create your account",
  notes:
    "Category Buying models. Compares ways of paying, never a named tool; no amount anywhere, price levels only. The word credits describes the market model, never hubStudio.",
};
