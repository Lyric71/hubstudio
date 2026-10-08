// editorial/scripts/wave2/140-gemini-omni-flash-guide.mjs
export default {
  id: "140",
  date: "2026-12-30",
  family: "engine",
  template: "howto",
  brief: true,
  status: "not_started",
  cluster: "Engine guides",
  contentType: "Engine guide",
  readerStage: "practitioner",
  slug: "gemini-omni-flash-guide",
  h1: "Gemini Omni Flash for social video from a written brief",
  query: "Gemini Omni Flash video",
  secondary: [
    "Gemini Omni Flash prompts",
    "Gemini video generation prompt examples",
    "Gemini Omni Flash or Veo",
    "text to video from a long prompt",
  ],
  verdict:
    "THIN. Google's own announcement and developer documentation rank beside news coverage and aggregator model pages; none treats the engine as what it is in production: a language model that answers in video, best at following a long written brief, prompt only, and billed after the render.",
  words: 1700,
  angle:
    "Gemini Omni Flash reasons about the brief before it renders, so it rewards a long, precise prompt. In the app it is prompt only: it cannot be fed your product photo, so it fits scenes where nothing has to match a real object (openers, moods, b-roll, explainer scenes) and hands over to an engine fed a start image when the product must be exact. It is billed on its maker's token meter, so the price arrives with the clip.",
  mustInclude: [
    "Google's own description of the model and its prompting guidance, from Google's own documentation only, including whether Google labels it a preview",
    "In the app, per the catalog and the help center: 4, 6 or 8 seconds (6 by default), 720p, widescreen 16:9 or vertical 9:16, optional sound, prompt only; the prompt box takes up to 2,500 characters",
    "Billing after the render: the engine list reads priced per token, the price line reads Priced once the clip is back, and the exact cost appears on the tab and in the Usage log; how a team keeps control (the daily spending limit per person, a short first test)",
    "Writing the brief as a shot: what moves, where the light comes from, how the camera behaves, the sound, the shape; four worked prompts: a vertical opener, a mood b-roll, an explainer scene, a seasonal background loop",
    "When to hand over: when the product must be exact, use an engine fed a start image, such as Veo 3.1 Fast from the same maker (start and last frame, or up to three reference pictures)",
    "Finishing in the Video editor: trims, texts, captions timed word by word, the cover, the network's format",
  ],
  doNot: [
    "Cite any source but Google for a capability",
    "Claim the app feeds it a picture or a clip",
    "Print a price or a per-second figure",
    "Name resellers or aggregator sites",
    "Use an em dash",
  ],
  stats: [
    "Google's own model page and prompting documentation for Gemini Omni Flash, dated",
    "App facts: create-a-video.md (the engine table and Engines priced after the run) and assets-library.md (The Video editor)",
  ],
  assets: [
    "Engine facts table from the help center: length, resolution, shapes, sound, what it can be fed, how it is priced",
    "Hand-over table: the job, Gemini Omni Flash or an engine fed a start image, why",
    "Four prompt blocks",
    "Existing localized capture create-a-video-studio.webp",
  ],
  links: [
    ["Veo 3.1 Fast guide", "/resources/how-to/veo-3-1-fast-guide"],
    ["animate a still product photo", "/resources/how-to/animate-product-photo"],
    ["word-by-word video captions", "/resources/how-to/word-by-word-video-captions"],
    ["text to video or image to video", "/resources/insights/text-to-video-vs-image-to-video"],
    ["engines page", "/app/engines"],
    ["AI video production", "/solutions/ai-production/video"],
  ],
  seoTitle: "Gemini Omni Flash Video: A Working Guide",
  seoDesc:
    "How to brief Gemini Omni Flash for social video: long prompts, 4 to 8 second clips, 16:9 or 9:16, prompt only, priced after the render. Four examples.",
  faqs: [
    "How do I write a prompt for Gemini Omni Flash video?",
    "How long can a Gemini Omni Flash video be?",
    "Can Gemini Omni Flash animate my product photo?",
    "Why is the price of a Gemini Omni Flash clip shown after the render?",
    "Does Gemini Omni Flash make sound?",
    "When should I use Veo 3.1 Fast instead of Gemini Omni Flash?",
  ],
  cta: "Create your account",
  notes:
    "Google's own docs only. Gemini Omni Flash (Google) is in the app, prompt only and priced after the render. The H1 dropped product video: in the app the engine takes no picture, so it cannot show the actual product.",
};
