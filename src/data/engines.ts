/**
 * The image and video engines hubStudio offers, by maker.
 *
 * Built only from the help center (src/content/help/explore.md,
 * create-an-image.md, create-a-video.md) and hubstudio-positioning.md.
 * `note` is set only where the help center itself says something about the
 * engine; `specs` repeats the help center's own tables. No prices, ever: the
 * app shows the price of a setup before each run, and the site publishes none.
 *
 * The list changes as makers ship and retire engines. When the help center's
 * engine tables change, update this file from them, nothing else.
 */

export type EngineKind = 'image' | 'video';

export type EngineJob =
  | 'text-to-image'
  | 'image-editing'
  | 'upscale'
  | 'text-to-video'
  | 'image-to-video'
  | 'reference-to-video';

export type Maker =
  | 'OpenAI'
  | 'Google'
  | 'Black Forest Labs'
  | 'ByteDance'
  | 'Kling'
  | 'Alibaba'
  | 'xAI'
  | 'MiniMax'
  | 'Meta';

export interface Engine {
  /** The engine's name exactly as the app lists it. */
  name: string;
  maker: Maker;
  kind: EngineKind;
  jobs: EngineJob[];
  /** One factual line, only where the help center states it. */
  note?: string;
  /** Short specs, copied from the help center's engine tables. */
  specs: string[];
}

/** Maker order, as Explore and the help center list them. */
export const makers: Maker[] = [
  'OpenAI',
  'Google',
  'Black Forest Labs',
  'ByteDance',
  'Kling',
  'Alibaba',
  'xAI',
  'MiniMax',
  'Meta',
];

/** The job names Explore uses on its chips, with what each one does. */
export const jobs: { key: EngineJob; kind: EngineKind; label: string; does: string }[] = [
  { key: 'text-to-image', kind: 'image', label: 'Text to image', does: 'Renders what you describe.' },
  { key: 'image-editing', kind: 'image', label: 'Image editing', does: 'Changes a picture you upload.' },
  { key: 'upscale', kind: 'image', label: 'Upscale', does: 'Re-renders a picture larger and sharper.' },
  { key: 'text-to-video', kind: 'video', label: 'Text to video', does: 'Films what you describe.' },
  {
    key: 'image-to-video',
    kind: 'video',
    label: 'Image to video',
    does: 'Animates a still. The clip opens on a picture of yours.',
  },
  {
    key: 'reference-to-video',
    kind: 'video',
    label: 'Reference to video',
    does: 'Follows pictures, clips, or sound you attach, which the engine imitates rather than shows.',
  },
];

export const jobLabel = (job: EngineJob): string =>
  jobs.find((j) => j.key === job)?.label ?? job;

const CHATGPT_NOTE = 'Follows long written briefs and writes legible text inside the picture.';
const CHATGPT_OPTIONS = 'Transparent background, 1 to 10 images per run, and an edit mask';
const KONTEXT_NOTE = 'Changes exactly what you name and keeps the rest.';
const SEEDREAM_NOTE = 'Renders natively up to 4K. The pick for a 4K upscale.';
const SLOW_NOTE = 'Among the slower engines, so keep its clips short.';

export const engines: Engine[] = [
  // ---- OpenAI ------------------------------------------------------
  {
    name: 'ChatGPT Image 2',
    maker: 'OpenAI',
    kind: 'image',
    jobs: ['text-to-image', 'image-editing'],
    note: CHATGPT_NOTE,
    specs: [
      'Up to 4 source pictures per edit',
      'Low, Medium, or High quality, at 1K, 2K, or 4K',
      'PNG, JPG, or WebP',
      CHATGPT_OPTIONS,
    ],
  },
  {
    name: 'ChatGPT Image 2.5 Flare',
    maker: 'OpenAI',
    kind: 'image',
    jobs: ['text-to-image', 'image-editing'],
    note: CHATGPT_NOTE,
    specs: [
      'Up to 4 source pictures per edit',
      'Low, Medium, High, Extra high, or Max quality, at 1K, 2K, or 4K',
      'PNG, JPG, or WebP',
      CHATGPT_OPTIONS,
    ],
  },
  {
    name: 'ChatGPT Image 2.5 Sunburst',
    maker: 'OpenAI',
    kind: 'image',
    jobs: ['text-to-image', 'image-editing'],
    note: CHATGPT_NOTE,
    specs: [
      'Up to 4 source pictures per edit',
      'Low, Medium, High, Extra high, or Max quality, at 1K, 2K, or 4K',
      'PNG, JPG, or WebP',
      CHATGPT_OPTIONS,
    ],
  },

  // ---- Google ------------------------------------------------------
  {
    name: 'Nano Banana 2',
    maker: 'Google',
    kind: 'image',
    jobs: ['text-to-image', 'image-editing', 'upscale'],
    note: 'Fast and dependable on an existing photo.',
    specs: ['Up to 4 source pictures per edit', '512px, 1K, 2K, or 4K', 'PNG'],
  },
  {
    name: 'Nano Banana Pro',
    maker: 'Google',
    kind: 'image',
    jobs: ['text-to-image', 'image-editing', 'upscale'],
    specs: ['Up to 4 source pictures per edit', '1K, 2K, or 4K', 'PNG'],
  },
  {
    name: 'Veo 3.1 Fast',
    maker: 'Google',
    kind: 'video',
    jobs: ['text-to-video', 'image-to-video', 'reference-to-video'],
    specs: [
      '4, 6, or 8 seconds',
      '720p, 1080p, or 4K',
      'Sound on request',
      'Start and last frame, or up to 3 reference pictures',
    ],
  },
  {
    name: 'Gemini Omni Flash',
    maker: 'Google',
    kind: 'video',
    jobs: ['text-to-video'],
    note: 'A language model that answers in video. Its maker bills it on what it actually used, so its cost shows once the clip is back.',
    specs: ['4, 6, or 8 seconds', '720p', 'Sound on request', 'Prompt only'],
  },

  // ---- Black Forest Labs ------------------------------------------
  {
    name: 'FLUX.1 Kontext Pro',
    maker: 'Black Forest Labs',
    kind: 'image',
    jobs: ['text-to-image', 'image-editing'],
    note: KONTEXT_NOTE,
    specs: ['1 source picture per edit', 'Standard quality', 'PNG or JPG'],
  },
  {
    name: 'FLUX.1 Kontext Max',
    maker: 'Black Forest Labs',
    kind: 'image',
    jobs: ['text-to-image', 'image-editing'],
    note: KONTEXT_NOTE,
    specs: ['1 source picture per edit', 'Standard quality', 'PNG or JPG'],
  },
  {
    name: 'FLUX Pro 1.1',
    maker: 'Black Forest Labs',
    kind: 'image',
    jobs: ['text-to-image'],
    specs: ['Standard quality', 'PNG or JPG'],
  },
  {
    name: 'FLUX Pro 1.1 Ultra',
    maker: 'Black Forest Labs',
    kind: 'image',
    jobs: ['text-to-image'],
    specs: ['Standard quality', 'PNG or JPG'],
  },

  // ---- ByteDance ---------------------------------------------------
  {
    name: 'Seedream 4.5',
    maker: 'ByteDance',
    kind: 'image',
    jobs: ['text-to-image', 'image-editing', 'upscale'],
    note: SEEDREAM_NOTE,
    specs: ['Up to 4 source pictures per edit', '2K or 4K', 'JPG'],
  },
  {
    name: 'Seedream 5.0 Pro',
    maker: 'ByteDance',
    kind: 'image',
    jobs: ['text-to-image', 'image-editing', 'upscale'],
    note: SEEDREAM_NOTE,
    specs: ['Up to 4 source pictures per edit', '2K or 4K', 'JPG'],
  },
  {
    name: 'Seedance 1.0 Pro Fast',
    maker: 'ByteDance',
    kind: 'video',
    jobs: ['text-to-video', 'image-to-video'],
    specs: ['2 to 12 seconds', '480p, 720p, or 1080p', 'No sound', 'Start image'],
  },
  {
    name: 'Seedance 2.0',
    maker: 'ByteDance',
    kind: 'video',
    jobs: ['text-to-video', 'image-to-video', 'reference-to-video'],
    specs: [
      '4 to 15 seconds',
      '480p, 720p, 1080p, or 4K',
      'Sound on request',
      'Start and last frame, or up to 9 pictures, 3 clips, and 1 sound file',
    ],
  },
  {
    name: 'Seedance 2.5',
    maker: 'ByteDance',
    kind: 'video',
    jobs: ['text-to-video', 'image-to-video', 'reference-to-video'],
    specs: [
      '4 to 30 seconds',
      '480p, 720p, or 1080p',
      'Sound on request',
      'Start and last frame, or up to 30 pictures, 10 clips, and 2 sound files',
      'Adaptive shape that follows what you attach',
    ],
  },

  // ---- Kling -------------------------------------------------------
  {
    name: 'Kling 2.5 Turbo',
    maker: 'Kling',
    kind: 'video',
    jobs: ['text-to-video'],
    specs: [
      '5 or 10 seconds',
      'Standard or Pro mode, at 720p or 1080p',
      'Sound on request',
      'Prompt only',
    ],
  },
  {
    name: 'Kling 2.6',
    maker: 'Kling',
    kind: 'video',
    jobs: ['text-to-video'],
    specs: [
      '5 or 10 seconds',
      'Standard or Pro mode, at 720p or 1080p',
      'Sound in Pro mode only',
      'Prompt only',
    ],
  },
  {
    name: 'Kling 3.0',
    maker: 'Kling',
    kind: 'video',
    jobs: ['text-to-video'],
    specs: [
      '3 to 15 seconds',
      'Standard or Pro mode, at 720p, 1080p, or 4K',
      'Sound on request',
      'Prompt only',
    ],
  },

  // ---- Alibaba -----------------------------------------------------
  {
    name: 'Wan 3.0',
    maker: 'Alibaba',
    kind: 'video',
    jobs: ['text-to-video', 'image-to-video', 'reference-to-video'],
    note: SLOW_NOTE,
    specs: [
      '2 to 30 seconds',
      '480p, 720p, or 1080p',
      'Start and last frame, or up to 10 pictures, 5 clips, and 1 sound file',
      'Adaptive shape that follows what you attach',
    ],
  },

  // ---- xAI ---------------------------------------------------------
  {
    name: 'Grok Imagine Image 2.0',
    maker: 'xAI',
    kind: 'image',
    jobs: ['text-to-image'],
    specs: ['Low or Standard quality, at 1K or 2K', 'JPG'],
  },
  {
    name: 'Grok Imagine 1.5',
    maker: 'xAI',
    kind: 'video',
    jobs: ['text-to-video', 'image-to-video', 'reference-to-video'],
    specs: [
      '1 to 15 seconds',
      '480p, 720p, or 1080p',
      'Sound on request',
      'Start image, or up to 7 pictures and 1 sound file',
    ],
  },

  // ---- MiniMax -----------------------------------------------------
  {
    name: 'MiniMax H3',
    maker: 'MiniMax',
    kind: 'video',
    jobs: ['text-to-video', 'image-to-video', 'reference-to-video'],
    note: SLOW_NOTE,
    specs: [
      '4 to 15 seconds',
      '768p or 2K',
      'Sound on request',
      'Start and last frame, or up to 9 pictures, 3 clips, and 1 sound file',
    ],
  },

  // ---- Meta --------------------------------------------------------
  {
    name: 'Muse Image 1.0',
    maker: 'Meta',
    kind: 'image',
    jobs: ['text-to-image', 'image-editing'],
    specs: ['1 source picture per edit', 'Standard quality', 'PNG'],
  },
];

/** Engines grouped by maker, in maker order, image engines first. */
export const enginesByMaker = makers.map((maker) => ({
  maker,
  engines: engines
    .filter((e) => e.maker === maker)
    .sort((a, b) => (a.kind === b.kind ? 0 : a.kind === 'image' ? -1 : 1)),
}));
