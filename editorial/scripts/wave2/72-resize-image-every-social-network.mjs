// editorial/scripts/wave2/72-resize-image-every-social-network.mjs
export default {
  id: "72",
  date: "2026-10-20",
  family: "howto",
  template: "howto",
  brief: true,
  status: "not_started",
  cluster: "How-to",
  contentType: "How-to guide",
  readerStage: "practitioner",
  slug: "resize-image-every-social-network",
  h1: "How to resize one visual for every social network",
  query: "resize image for social media",
  secondary: [
    "social media image sizes all platforms",
    "crop one image for instagram linkedin x",
    "resize image without cropping for instagram",
    "social media safe zones for text",
  ],
  verdict:
    "TOOL PAGES. The SERP is free resizer tools and their landing copy; they stretch or center-crop to a size list and say nothing about composing the master so the crops work, about where each network covers the picture with its own buttons, or about keeping text out of those zones.",
  words: 1700,
  angle:
    "Resizing is a composition problem, not a pixel problem. Make one master with room around the subject, then frame it per placement: crop to fill where the subject survives, fit it whole over a blurred copy where it does not, and keep words out of the zones each network covers. Shown in the hubStudio Image editor, which is free and works in the browser.",
  mustInclude: [
    "Compose the master first: subject off-center with margin on every side; in the Image studio pick the Shape and leave negative space",
    "Placement table: network, placement, ratio, pixels, taken from the specs pages and the Image editor's Social panel (Instagram Feed portrait 1080 x 1350 Best; X Post wide 1600 x 900 Best; LinkedIn Post portrait 1080 x 1350 Best)",
    "Crop to fill versus Fit it whole (blurred picture or a plain color around it): when to use each",
    "Show what the network covers: red zones for buttons, name and caption, dashed lines for the profile grid and X's two-picture crop; keep words and logo out",
    "The Checks: shape, sharpness for the size, accepted format, file weight against the network's limit, words under the buttons, words large enough to read on a phone",
    "Crop presets for networks without a Social preset: Story 9:16 for TikTok and Stories, Wide 16:9 for YouTube, Link 1.91:1 for Facebook and LinkedIn links",
    "Save: PNG, JPG or WEBP, size presets, Save a copy in the Assets Library (the name says the network and size) or Save as a new version; the original stays",
    "Editing is free and nothing leaves the computer until you save; a picture over 4,096 pixels on its long side is edited at 4,096",
  ],
  doNot: [
    "Name any resizer or design tool",
    "Claim the Image editor has a Social preset for Facebook, TikTok, YouTube or Pinterest: its Social panel covers Instagram, X and LinkedIn",
    "Copy pixel sizes from third-party pages: take them from the specs pages and the networks' own help",
    "Print a hubStudio amount",
    "Use an em dash or numbered cards",
  ],
  stats: [
    "Every placement size: from the published specs pages (Instagram, LinkedIn, TikTok, YouTube) and the Image editor's Social panel in assets-library.md",
    "No engagement statistic for portrait versus square unless a network's own business page publishes it",
  ],
  assets: [
    "Placement table: network, placement, ratio, pixels, how to frame it",
    "Crop or fit decision table: subject type, crop to fill or fit whole, why",
    "Existing help captures: image-editor-social, image-editor-crop, image-editor-save",
  ],
  links: [
    ["Image editor", "/app/image-tools"],
    ["Instagram post sizes for 2026", "/resources/insights/instagram-post-sizes-2026"],
    ["LinkedIn post specs", "/resources/insights/linkedin-post-specs"],
    ["TikTok video specs", "/resources/insights/tiktok-video-specs"],
    ["YouTube video thumbnail specs", "/resources/insights/youtube-video-thumbnail-specs"],
  ],
  seoTitle: "How to Resize One Visual for Every Social Network",
  seoDesc:
    "Compose one master, then crop or fit it for Instagram, LinkedIn, X, TikTok and YouTube with the right ratio, pixels and safe zones, free in the browser.",
  faqs: [
    "How do I resize one image for all social media platforms?",
    "How do I post a full picture on Instagram without cropping it?",
    "What is the best image size for Instagram, LinkedIn and X?",
    "Where should I keep text on a social media image?",
    "Should I save social images as JPG, PNG or WebP?",
    "Does resizing an image lower its quality?",
  ],
  cta: "Create your account",
  notes:
    "Link the Facebook, X and Pinterest specs pages (facebook-post-specs, x-image-video-specs, pinterest-pin-specs) when they are live at drafting; otherwise they stay plain text per settled fallback 5.",
};
