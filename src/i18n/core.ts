/**
 * The translation engine, shared word for word by bearingbridge.com and
 * hubstudio.ai (src/i18n/core.ts in both repositories: change one, copy it to
 * the other).
 *
 * English pages are the only page sources. A French or Chinese page is the
 * English page rendered as usual, then rewritten here, at build time for
 * prerendered pages and per request for on-demand ones, from a dictionary
 * keyed by the English text.
 *
 * What a key is:
 *
 * - A BLOCK unit: the run of text and inline elements inside one element,
 *   e.g. the content of a <p>, an <h2>, a <li> or a <button>. Inline elements
 *   inside the run become numbered placeholders so a translator can move them
 *   and the markup survives untouched:
 *     `Pay <strong1>only</strong1> for what you <a2>run</a2>.`
 *   Atomic elements (an icon, an image, a line break) become `<svg3/>`.
 *   The placeholders are put back with the original tags and attributes, so
 *   a translation can never break a class, an href or an aria attribute.
 * - An ATTRIBUTE unit: the value of alt, title, aria-label, placeholder, the
 *   SEO meta tags, and the site's own copy-carrying data-* attributes.
 * - A JSON-LD unit: a human-readable string inside structured data.
 *
 * The same `collectUnits()` drives extraction (scripts/i18n.mjs writes the
 * keys the dictionaries must hold) and application (the middleware), so the
 * two can never disagree about what a key is.
 *
 * Opt out of translation with `data-no-i18n` on any element (its subtree is
 * left alone) and out of link localization with `data-no-localize`.
 */
import { parse, HTMLElement, TextNode, type Node } from 'node-html-parser';

export type Dict = Record<string, string>;

export interface UnitBlock {
  kind: 'block';
  key: string;
  /** Tag of the element holding the run, for the translator's context. */
  tag: string;
  el: HTMLElement;
  /** Index range of the run inside el.childNodes, end exclusive. */
  start: number;
  end: number;
  /** Placeholder name -> original element, in order. */
  slots: Map<string, HTMLElement>;
}

export interface UnitAttr {
  kind: 'attr';
  key: string;
  tag: string;
  attr: string;
  el: HTMLElement;
}

export interface UnitJson {
  kind: 'json';
  key: string;
  tag: 'json-ld';
  attr: string;
}

export type Unit = UnitBlock | UnitAttr | UnitJson;

export interface CoreOptions {
  /** Copy-carrying data-* attributes of this site, e.g. ['data-answer']. */
  dataAttrs?: readonly string[];
}

const SKIP = new Set(['script', 'style', 'template', 'code', 'pre', 'textarea', 'math', 'head']);

const ATOMIC = new Set([
  'img', 'svg', 'picture', 'video', 'audio', 'iframe', 'input', 'select', 'canvas',
  'object', 'br', 'wbr', 'hr', 'source', 'meter', 'progress', 'textarea', 'math',
]);

const PHRASING = new Set([
  'a', 'abbr', 'b', 'bdi', 'bdo', 'cite', 'data', 'dfn', 'em', 'i', 'kbd', 'mark',
  'q', 's', 'samp', 'small', 'span', 'strong', 'sub', 'sup', 'time', 'u', 'var',
  'label', 'button', 'del', 'ins', 'output', 'code',
]);

const ATTRS = ['alt', 'title', 'aria-label', 'aria-description', 'placeholder', 'aria-roledescription'];

const META_KEYS = new Set([
  'description', 'og:title', 'og:description', 'og:image:alt', 'twitter:title',
  'twitter:description', 'twitter:image:alt',
]);

const JSON_TEXT_KEYS = new Set([
  'name', 'headline', 'description', 'alternativeHeadline', 'caption', 'text',
  'articleSection', 'abstract', 'disambiguatingDescription', 'slogan', 'jobTitle',
]);

/** A unit worth translating holds at least one letter. */
const hasLetters = (s: string) => /\p{L}/u.test(s.replace(/<[^>]+>/g, '').replace(/&[a-z#0-9]+;/gi, ''));

export const norm = (s: string) => s.replace(/\s+/g, ' ').trim();

const tagOf = (el: HTMLElement) => (el.rawTagName || '').toLowerCase();

const isSkipped = (el: HTMLElement) =>
  SKIP.has(tagOf(el)) || el.hasAttribute('data-no-i18n') || el.getAttribute('translate') === 'no';

/** An element that can sit inside a translated run. */
function isInline(node: Node): boolean {
  if (node instanceof TextNode) return true;
  if (!(node instanceof HTMLElement)) return true; // comments
  const tag = tagOf(node);
  if (ATOMIC.has(tag)) return true;
  if (!PHRASING.has(tag)) return false;
  if (isSkipped(node)) return true; // carried as an opaque slot
  return node.childNodes.every(isInline);
}

const textOf = (nodes: Node[]) => nodes.map((n) => n.rawText ?? '').join('');

/** Serialize a run, numbering the inline elements. */
function serializeRun(nodes: Node[], slots: Map<string, HTMLElement>): string {
  let out = '';
  for (const n of nodes) {
    if (n instanceof TextNode) out += n.rawText;
    else if (n instanceof HTMLElement) {
      const tag = tagOf(n);
      const name = `${tag}${slots.size + 1}`;
      slots.set(name, n);
      if (ATOMIC.has(tag) || isSkipped(n)) out += `<${name}/>`;
      else out += `<${name}>${serializeRun(n.childNodes, slots)}</${name}>`;
    }
  }
  return out;
}

/** Walk the document in order and list every translatable unit. */
export function collectUnits(root: HTMLElement, opts: CoreOptions = {}): Unit[] {
  const units: Unit[] = [];
  const attrs = [...ATTRS, ...(opts.dataAttrs ?? [])];

  const pushAttrs = (el: HTMLElement) => {
    const tag = tagOf(el);
    for (const attr of attrs) {
      const v = el.getAttribute(attr);
      if (v && hasLetters(v)) units.push({ kind: 'attr', key: norm(v), tag, attr, el });
    }
    if ((tag === 'input' || tag === 'button') && /^(submit|button|reset)$/i.test(el.getAttribute('type') ?? '')) {
      const v = el.getAttribute('value');
      if (v && hasLetters(v)) units.push({ kind: 'attr', key: norm(v), tag, attr: 'value', el });
    }
  };

  const pushAttrsDeep = (el: HTMLElement) => {
    pushAttrs(el);
    for (const c of el.childNodes) if (c instanceof HTMLElement && !c.hasAttribute('data-no-i18n')) pushAttrsDeep(c);
  };

  const walk = (el: HTMLElement) => {
    if (isSkipped(el)) return;
    pushAttrs(el);
    if (ATOMIC.has(tagOf(el))) return;

    const kids = el.childNodes;
    let i = 0;
    while (i < kids.length) {
      if (!isInline(kids[i])) {
        const k = kids[i];
        if (k instanceof HTMLElement) walk(k);
        i++;
        continue;
      }
      let j = i;
      while (j < kids.length && isInline(kids[j])) j++;
      // Trim whitespace-only text at both ends of the run.
      let s = i;
      let e = j;
      while (s < e && kids[s] instanceof TextNode && !norm(kids[s].rawText)) s++;
      while (e > s && kids[e - 1] instanceof TextNode && !norm(kids[e - 1].rawText)) e--;
      const run = kids.slice(s, e);
      const lone = run.length === 1 && run[0] instanceof HTMLElement ? (run[0] as HTMLElement) : null;
      // Inline elements side by side with no words between them (a row of
      // nav links, a logo's spans) are separate items, not one sentence.
      const listLike =
        run.length > 1 && !run.some((n) => n instanceof TextNode && hasLetters(n.rawText));
      if (lone && !ATOMIC.has(tagOf(lone)) && !isSkipped(lone)) {
        // A run that is one inline element: descend, the unit is its content.
        walk(lone);
      } else if (listLike) {
        for (const n of run) if (n instanceof HTMLElement) walk(n);
      } else if (run.length && hasLetters(textOf(run.map((n) => (n instanceof HTMLElement && isSkipped(n) ? new TextNode('', el) : n))))) {
        const slots = new Map<string, HTMLElement>();
        const key = norm(serializeRun(run, slots));
        if (hasLetters(key)) {
          units.push({ kind: 'block', key, tag: tagOf(el), el, start: s, end: e, slots });
          for (const slot of slots.values()) if (!isSkipped(slot)) pushAttrsDeep(slot);
        } else for (const n of run) if (n instanceof HTMLElement) pushAttrsDeep(n);
      } else {
        for (const n of run) if (n instanceof HTMLElement && !isSkipped(n)) pushAttrsDeep(n);
      }
      i = j;
    }
  };

  // <head>: the title and the SEO meta tags only.
  const head = root.querySelector('head');
  if (head) {
    const title = head.querySelector('title');
    if (title && hasLetters(title.text)) {
      units.push({ kind: 'block', key: norm(title.innerHTML), tag: 'title', el: title, start: 0, end: title.childNodes.length, slots: new Map() });
    }
    for (const meta of head.querySelectorAll('meta')) {
      const name = meta.getAttribute('name') ?? meta.getAttribute('property') ?? '';
      const v = meta.getAttribute('content');
      if (META_KEYS.has(name) && v && hasLetters(v)) units.push({ kind: 'attr', key: norm(v), tag: 'meta', attr: 'content', el: meta });
    }
  }

  const body = root.querySelector('body') ?? root;
  walk(body);

  for (const s of root.querySelectorAll('script[type="application/ld+json"]')) {
    try {
      eachJsonText(JSON.parse(s.rawText), (v) => units.push({ kind: 'json', key: norm(v), tag: 'json-ld', attr: 'json' }));
    } catch {
      /* malformed JSON-LD is left as is */
    }
  }
  return units;
}

function eachJsonText(node: unknown, fn: (v: string) => void, key = ''): void {
  if (typeof node === 'string') {
    if (JSON_TEXT_KEYS.has(key) && hasLetters(node)) fn(node);
  } else if (Array.isArray(node)) node.forEach((n) => eachJsonText(n, fn, key));
  else if (node && typeof node === 'object') for (const [k, v] of Object.entries(node)) eachJsonText(v, fn, k);
}

function mapJson(node: unknown, fn: (v: string, key: string) => string, key = ''): unknown {
  if (typeof node === 'string') return fn(node, key);
  // A list of languages (a WebSite in several) is not this page's language.
  if (key === 'inLanguage' && Array.isArray(node)) return node;
  if (Array.isArray(node)) return node.map((n) => mapJson(n, fn, key));
  if (node && typeof node === 'object') {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(node)) out[k] = mapJson(v, fn, k);
    return out;
  }
  return node;
}

const SLOT_RE = /<(\/?)([a-z][a-z0-9-]*?)(\d+)(\/?)>/g;

/** The placeholders of a key or a translation, as a sorted signature. */
export function slotSignature(s: string): string {
  const seen: string[] = [];
  for (const m of s.matchAll(SLOT_RE)) seen.push(`${m[1]}${m[2]}${m[3]}${m[4]}`);
  return seen.sort().join(' ');
}

/** Rebuild real markup from a translation and the run's original elements. */
function restore(translation: string, slots: Map<string, HTMLElement>): string {
  return translation.replace(SLOT_RE, (whole, close: string, tag: string, n: string, self: string) => {
    const el = slots.get(`${tag}${n}`);
    if (!el) return whole;
    if (self) return el.toString();
    if (close) return `</${el.rawTagName}>`;
    const raw = el.rawAttrs ? ` ${el.rawAttrs}` : '';
    return `<${el.rawTagName}${raw}>`;
  });
}

export interface ApplyOptions extends CoreOptions {
  /** Look a key up; undefined leaves the English text in place. */
  lookup: (key: string) => string | undefined;
  /** Rewrite one internal URL (path, query and hash kept by the caller). */
  localizeHref?: (href: string) => string;
  /** Swap an image URL for its localized capture when one exists. */
  localizeImage?: (src: string) => string;
  /** BCP 47 tag written into JSON-LD inLanguage. */
  htmlLang: string;
}

export interface ApplyResult {
  html: string;
  missing: string[];
}

/** Translate a whole English document. */
export function applyDictionary(html: string, opts: ApplyOptions): ApplyResult {
  const root = parse(html, {
    comment: true,
    blockTextElements: { script: true, noscript: false, style: true, pre: true },
  });
  const units = collectUnits(root, opts);
  const missing: string[] = [];
  const get = (key: string) => {
    const v = opts.lookup(key);
    if (v === undefined || v === '') missing.push(key);
    return v || undefined;
  };

  // Attributes first, so a translated alt or aria-label inside a run travels
  // with its element when the run is rebuilt.
  for (const u of units) {
    if (u.kind !== 'attr') continue;
    const v = get(u.key);
    if (v === undefined) continue;
    // Keys are trimmed; a value such as " days" keeps its own spaces.
    const raw = u.el.getAttribute(u.attr) ?? '';
    u.el.setAttribute(u.attr, raw.match(/^\s*/)![0] + v + raw.match(/\s*$/)![0]);
  }

  // Runs, last first: replacing a run never shifts the indexes of an earlier
  // run in the same element.
  const blocks = units.filter((u): u is UnitBlock => u.kind === 'block');
  for (let b = blocks.length - 1; b >= 0; b--) {
    const u = blocks[b];
    const v = get(u.key);
    if (v === undefined) continue;
    const frag = parse(restore(v, u.slots), {
      comment: true,
      blockTextElements: { script: true, noscript: false, style: true, pre: true },
    });
    const nodes = frag.childNodes;
    for (const n of nodes) n.parentNode = u.el;
    u.el.childNodes.splice(u.start, u.end - u.start, ...nodes);
  }

  for (const s of root.querySelectorAll('script[type="application/ld+json"]')) {
    let data: unknown;
    try {
      data = JSON.parse(s.rawText);
    } catch {
      continue;
    }
    const out = mapJson(data, (v, key) => {
      if (key === 'inLanguage') return opts.htmlLang;
      if ((key === 'url' || key === '@id' || key === 'item' || key === 'mainEntityOfPage') && opts.localizeHref) return opts.localizeHref(v);
      if (JSON_TEXT_KEYS.has(key) && hasLetters(v)) return get(norm(v)) ?? v;
      return v;
    });
    s.set_content(JSON.stringify(out).replace(/</g, '\\u003c'));
  }

  if (opts.localizeHref) {
    for (const el of root.querySelectorAll('a[href], area[href], [data-href]')) {
      if (el.closest('[data-no-localize]')) continue;
      for (const attr of ['href', 'data-href']) {
        const v = el.getAttribute(attr);
        if (v) {
          const next = opts.localizeHref(v);
          if (next !== v) el.setAttribute(attr, next);
        }
      }
    }
  }

  if (opts.localizeImage) {
    for (const el of root.querySelectorAll('img, source')) {
      for (const attr of ['src', 'srcset', 'data-src', 'data-srcset']) {
        const v = el.getAttribute(attr);
        if (!v) continue;
        const next = v.replace(/[^\s,]+\.(?:webp|png|jpe?g|avif)/gi, (u) => opts.localizeImage!(u));
        if (next !== v) el.setAttribute(attr, next);
      }
    }
    // A preloaded capture (<link rel="preload" as="image">) follows the page,
    // or a French page would fetch the English file first.
    for (const el of root.querySelectorAll('link[rel="preload"][as="image"]')) {
      for (const attr of ['href', 'imagesrcset']) {
        const v = el.getAttribute(attr);
        if (!v) continue;
        const next = v.replace(/[^\s,]+\.(?:webp|png|jpe?g|avif)/gi, (u) => opts.localizeImage!(u));
        if (next !== v) el.setAttribute(attr, next);
      }
    }
    // Background captures set inline (style="background-image:url(...)").
    for (const el of root.querySelectorAll('[style*="url("]')) {
      const v = el.getAttribute('style')!;
      const next = v.replace(/url\((['"]?)([^'")]+)\1\)/g, (w, q: string, u: string) => `url(${q}${opts.localizeImage!(u)}${q})`);
      if (next !== v) el.setAttribute('style', next);
    }
  }

  return { html: root.toString(), missing: [...new Set(missing)] };
}

/** Units of an English document, for extraction. */
export function extractKeys(html: string, opts: CoreOptions = {}): { key: string; tag: string; attr?: string }[] {
  const root = parse(html, {
    comment: true,
    blockTextElements: { script: true, noscript: false, style: true, pre: true },
  });
  return collectUnits(root, opts).map((u) => ({ key: u.key, tag: u.tag, attr: u.kind === 'block' ? undefined : u.attr }));
}
