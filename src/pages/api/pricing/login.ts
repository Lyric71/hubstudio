/**
 * Pricing calculator password gate (`POST /api/pricing/login`).
 * Validates the shared password and, on success, sets the signed httpOnly
 * session cookie before returning the visitor to /pricing/calculator. A wrong
 * password sends them back with ?error=1 and no cookie.
 */
import type { APIRoute } from 'astro';
import { checkPassword, sessionCookie } from '../../../lib/pricing-gate';

export const prerender = false;

const PAGE = '/pricing/calculator';

export const POST: APIRoute = async ({ request, redirect }) => {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return redirect(`${PAGE}?error=1`, 303);
  }

  const password = ((form.get('password') as string) ?? '').trim();
  if (!checkPassword(password)) {
    return redirect(`${PAGE}?error=1`, 303);
  }

  return new Response(null, {
    status: 303,
    headers: {
      Location: PAGE,
      'Set-Cookie': await sessionCookie(),
    },
  });
};
