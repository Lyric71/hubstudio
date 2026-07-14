/**
 * Password gate for the hidden pricing calculator (/pricing/calculator).
 *
 * Same shape as the DeBeers gate: the password is checked server-side and never
 * leaves the server, and the browser only ever holds an HMAC-signed, expiring,
 * httpOnly cookie. No client-side-only gate, because the page exposes rate-card
 * numbers we do not publish.
 *
 * Configure in the Vercel project (or .env for local dev):
 *   PRICING_PASSWORD         the shared access password (falls back to the
 *                            documented default if unset).
 *   PRICING_SESSION_SECRET   secret used to sign session cookies. SET THIS in
 *                            production, the fallback is public in source.
 */

const PASSWORD = import.meta.env.PRICING_PASSWORD ?? 'hubstudio888+';
const SECRET =
  import.meta.env.PRICING_SESSION_SECRET ?? 'pricing-fallback-secret-change-me-2026';

const COOKIE_NAME = 'pricing_session';
const MAX_AGE_S = 60 * 60 * 24 * 7; // 7 days

function toBase64Url(bytes: ArrayBuffer): string {
  let bin = '';
  const view = new Uint8Array(bytes);
  for (let i = 0; i < view.length; i++) bin += String.fromCharCode(view[i]);
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

async function sign(data: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(SECRET),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(data));
  return toBase64Url(sig);
}

/** Timing-safe-ish constant-length string compare. */
function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

/** True when the submitted password matches. */
export function checkPassword(pw: string): boolean {
  return typeof pw === 'string' && safeEqual(pw, PASSWORD);
}

/** A `Set-Cookie` value that establishes a fresh signed session. */
export async function sessionCookie(): Promise<string> {
  const exp = Math.floor(Date.now() / 1000) + MAX_AGE_S;
  const payload = String(exp);
  const token = `${payload}.${await sign(payload)}`;
  return [
    `${COOKIE_NAME}=${token}`,
    'Path=/',
    'HttpOnly',
    'Secure',
    'SameSite=Lax',
    `Max-Age=${MAX_AGE_S}`,
  ].join('; ');
}

function readCookie(request: Request, name: string): string | null {
  const header = request.headers.get('cookie');
  if (!header) return null;
  for (const part of header.split(';')) {
    const [k, ...rest] = part.trim().split('=');
    if (k === name) return rest.join('=');
  }
  return null;
}

/** Verify the session cookie: correct signature and not expired. */
export async function isAuthed(request: Request): Promise<boolean> {
  const token = readCookie(request, COOKIE_NAME);
  if (!token) return false;
  const dot = token.lastIndexOf('.');
  if (dot < 1) return false;
  const payload = token.slice(0, dot);
  const sig = token.slice(dot + 1);
  if (!safeEqual(sig, await sign(payload))) return false;
  const exp = Number(payload);
  return Number.isFinite(exp) && exp > Math.floor(Date.now() / 1000);
}
