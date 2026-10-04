/**
 * House rules every French and Chinese translation must pass. Used by
 * scripts/i18n.mjs (check) and scripts/i18n-validate.mjs (one file).
 */
import { slotSignature } from '../src/i18n/core.ts';


const strip = (s) => s.replace(/<\/?[a-z][a-z0-9-]*\d+\/?>/g, '');
const CJK = '\\u3400-\\u9fff\\uf900-\\ufaff';

export function problems(key, value, locale) {
  const out = [];
  if (slotSignature(key) !== slotSignature(value)) out.push('placeholders differ from the English');
  // Entities (&amp;, &rarr;) are markup, not words or punctuation.
  const text = strip(value).replace(/&(?:[a-z]+|#\d+|#x[0-9a-f]+);/gi, ' ');
  if (/—/.test(text)) out.push('em dash');
  if (/\s[-–]\s/.test(text)) out.push('dash used as punctuation');
  const words = strip(key).match(/[A-Za-z]{3,}/g) ?? [];
  // A URL or a file name (no space) legitimately stays as it is.
  if (value === key && /\s/.test(strip(key).trim()) && words.length >= 4) out.push('left in English');
  // A URL or file name kept verbatim (no space) is not prose: skip the punctuation rules (e.g. ?tool=edit).
  const verbatimToken = value === key && !/\s/.test(strip(key).trim());
  if (locale === 'fr' && !verbatimToken) {
    if (/ [;:!?»]/.test(text) || /« /.test(text)) out.push('ordinary space where French needs a non-breaking one');
    if (/[\p{L}\d)][;!?]/u.test(text) || /[\p{L})][:](?=\s|$)/u.test(text)) out.push('missing non-breaking space before ; : ! ?');
    if (/«(?![  ])/.test(text) || /(?<![  ])»/.test(text)) out.push('guillemets without non-breaking spaces');
    if (/\p{L}'\p{L}/u.test(text)) out.push("straight apostrophe (use ’)");
    if (/"/.test(text.replace(/<[^>]*>/g, ''))) out.push('straight quotes (use « »)');
  }
  if (locale === 'zh') {
    if (new RegExp(`[${CJK}][,;:!?]|[,;:!?](?=[${CJK}])`).test(text)) out.push('half-width punctuation in Chinese');
    if (new RegExp(`[${CJK}]\\.(?!\\d)`).test(text)) out.push('half-width period in Chinese');
    if (new RegExp(`[${CJK}]\\(|\\)[${CJK}]`).test(text)) out.push('half-width parentheses in Chinese');
    if (new RegExp(`[${CJK}][A-Za-z0-9]|[A-Za-z0-9][${CJK}]`).test(text)) out.push('no space between Chinese and Latin or digits');
    if (/[。，](\s)/.test(text)) out.push('space after full-width punctuation');
  }
  return out;
}
