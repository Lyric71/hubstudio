/**
 * The feature videos of the hubStudio app: short screen recordings of one
 * task each, in English, French and Chinese, with captions.
 *
 * The list is src/data/feature-videos.json, copied by `npm run videos:sync`
 * (also run by `npm run help:sync`) from the app repository's
 * docs/video-scripts/hubstudio-videos.json, which the video publish run
 * writes. It is read at build time, never fetched by a page. Only videos
 * finished in all three languages are in it, so any number works, zero
 * included: a block with no video does not render.
 *
 * The media are served from this site's own origin: vercel.json rewrites
 * /videos/* to the storage bucket, so a page plays /videos/<file>.mp4 with
 * /videos/<file>.jpg as poster and /videos/<file>.vtt as captions. No page
 * names another host.
 *
 * Shown by FeatureVideo.astro on the help articles (`help` holds article
 * slugs), on the home page (`featured`, in that order) and on
 * /resources/videos (every video, grouped by `topics`).
 */
import data from '../data/feature-videos.json';
import type { Locale } from '../i18n/paths';

export interface VideoLang {
  title: string;
  /** Seconds. */
  duration: number;
  /** Path under /videos/, without extension: `en/001-<slug>-en`. */
  file: string;
}

export interface FeatureVideo {
  number: number;
  slug: string;
  topic: string;
  /** Help article slugs (src/content/help/<slug>.md). */
  help: string[];
  langs: Record<Locale, VideoLang>;
}

export interface VideoTopic {
  key: string;
  en: string;
  fr: string;
  zh: string;
}

interface Manifest {
  featured: number[];
  topics: VideoTopic[];
  videos: FeatureVideo[];
}

const manifest = data as unknown as Manifest;

/** Every video, by number. */
export const videos: FeatureVideo[] = [...(manifest.videos ?? [])].sort((a, b) => a.number - b.number);

/** The home page's videos, in the manifest's order; numbers not published yet are skipped. */
export const featuredVideos: FeatureVideo[] = (manifest.featured ?? [])
  .map((n) => videos.find((v) => v.number === n))
  .filter((v): v is FeatureVideo => Boolean(v));

/** The videos of one help article. */
export const videosForHelp = (slug: string): FeatureVideo[] => videos.filter((v) => v.help.includes(slug));

/** Topics in the manifest's order, each with its videos; a topic with none is left out. */
export const videoTopics: (VideoTopic & { videos: FeatureVideo[] })[] = (manifest.topics ?? [])
  .map((t) => ({ ...t, videos: videos.filter((v) => v.topic === t.key) }))
  .filter((t) => t.videos.length > 0);

/** The version of a video in the page's language (English when one is missing). */
export const inLang = (v: FeatureVideo, locale: Locale): VideoLang => v.langs[locale] ?? v.langs.en;

/** 94 -> "1:34". */
export const clock = (s: number): string => {
  const t = Math.max(0, Math.round(s));
  return `${Math.floor(t / 60)}:${String(t % 60).padStart(2, '0')}`;
};

/** 94 -> "PT1M34S", for <time datetime>. */
export const isoDuration = (s: number): string => {
  const t = Math.max(0, Math.round(s));
  return `PT${Math.floor(t / 60)}M${t % 60}S`;
};

/** The collection page. */
export const VIDEOS_URL = '/resources/videos';
