/**
 * Pricing calculator password gate (`POST /api/pricing/login`).
 * Validates the shared password and, on success, sets the signed httpOnly
 * session cookie before returning the visitor to /pricing/calculator. A wrong
 * password sends them back with ?error=1 and no cookie.
 */
import type { APIRoute } from 'astro';
import { localizedBack } from '../../../lib/referer-locale';
import { checkPassword, sessionCookie } from '../../../lib/pricing-gate';

export const prerender = false;

const PAGE = '/pricing/calculator';

export const POST: APIRoute = async ({ request, redirect }) => {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return redirect(localizedBack(request, PAGE, `?error=1`), 303);
  }

  const password = ((form.get('password') as string) ?? '').trim();
  if (!checkPassword(password)) {
    return redirect(localizedBack(request, PAGE, `?error=1`), 303);
  }

  return new Response(null, {
    status: 303,
    headers: {
      // Back to the page in the language it was opened in.
      Location: localizedBack(request, PAGE),
      'Set-Cookie': await sessionCookie(),
    },
  });
};
