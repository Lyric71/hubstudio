/**
 * Onboarding booking endpoint (`POST /api/onboarding`).
 *
 * Receives the booking form of /services/onboarding/book and sends it to the
 * inbox via Resend, like /api/contact: same sender, same inbox, subject
 * tagged [Onboarding] with the company and the date asked for. Step one of
 * two: nothing is charged here, the visitor pays on /thank-you/onboarding.
 *
 * Server-rendered on demand (Vercel function). JS submits with
 * `Accept: application/json` and reads the JSON reply; a plain form post (no
 * JS) is answered with a 303 to /thank-you/onboarding in the page's
 * language, or the error as plain text. Every list answer is checked against
 * src/lib/onboarding.ts and mailed as its label.
 */
import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { pathIn, tr } from '../../i18n/index';
import { refererLocale } from '../../lib/referer-locale';
import {
  ISO_DATE_RE,
  LIMITS,
  ONBOARDING_THANKS,
  SESSION_LANGUAGES,
  TEAM_STATUS,
  bookingBounds,
} from '../../lib/onboarding';

export const prerender = false;

const TO = 'cyril.drouin@outlook.com';
const FROM = 'hubStudio Contact <onboarding@resend.dev>';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Escape values before they land in the notification email's HTML. */
function esc(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/** Newlines in anything that reaches the subject line would let it grow headers. */
const oneLine = (value: string) => value.replace(/[\r\n]+/g, ' ');

const labelOf = (options: { value: string; label: string }[], value: string) =>
  options.find((o) => o.value === value)?.label;

export const POST: APIRoute = async ({ request, redirect }) => {
  const wantsJson = (request.headers.get('accept') ?? '').includes('application/json');
  // Errors and the payment page follow the language of the booking page.
  const locale = refererLocale(request);

  const ok = () =>
    wantsJson
      ? new Response(JSON.stringify({ ok: true }), {
          status: 200,
          headers: { 'content-type': 'application/json' },
        })
      : redirect(pathIn(ONBOARDING_THANKS, locale) ?? ONBOARDING_THANKS, 303);

  const fail = (status: number, english: string) => {
    const error = tr(locale, english);
    return wantsJson
      ? new Response(JSON.stringify({ ok: false, error }), {
          status,
          headers: { 'content-type': 'application/json' },
        })
      : new Response(error, { status, headers: { 'content-type': 'text/plain; charset=utf-8' } });
  };

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return fail(400, 'We could not read the form. Please try again.');
  }

  // Honeypot, as on /contact: a hidden field people never see. If it is
  // filled, drop the booking and report success so the bot learns nothing.
  if (((form.get('company_url') as string) ?? '').trim() !== '') {
    return ok();
  }

  const val = (key: string) => ((form.get(key) as string) ?? '').trim();
  const firstName = val('firstName');
  const lastName = val('lastName');
  const email = val('email');
  const company = val('company');
  const website = val('website');
  const team = labelOf(TEAM_STATUS, val('team'));
  const language = SESSION_LANGUAGES.find((o) => o.value === val('sessionLanguage'))?.name;
  const date = val('date');
  const timezone = val('timezone');
  const people = val('people');

  if (
    !firstName || firstName.length > LIMITS.firstName ||
    !lastName || lastName.length > LIMITS.lastName ||
    !company || company.length > LIMITS.company
  ) {
    return fail(422, 'Please fill in your name, work email, and company.');
  }
  if (!EMAIL_RE.test(email) || email.length > LIMITS.email) {
    return fail(422, 'That email address does not look right.');
  }
  if (website.length > LIMITS.website || people.length > LIMITS.people) {
    return fail(422, 'One of your answers is too long.');
  }
  if (!team) {
    return fail(422, 'Please tell us whether your team is already on hubStudio.');
  }
  if (!language) {
    return fail(422, 'Please pick the language for the sessions.');
  }
  // Recomputed per request: the bounds in the browser come from the page.
  const { min, max } = bookingBounds();
  if (!ISO_DATE_RE.test(date) || date < min || date > max) {
    return fail(422, 'Please pick a date between tomorrow and about four months from now.');
  }

  const apiKey = import.meta.env.RESEND_API_KEY;
  if (!apiKey) {
    return fail(
      500,
      'The booking form is not configured yet. Email hello@bearingbridge.com directly.',
    );
  }

  const blank = 'Not provided';
  const rows: [string, string][] = [
    ['Name', `${firstName} ${lastName}`],
    ['Work email', email],
    ['Company', company],
    ['Website', website || blank],
    ['Already on hubStudio', team],
    ['Sessions in', language],
    ['Preferred date', date],
    // An IANA zone name or nothing: it lands in HTML, escaped like the rest.
    ['Timezone', timezone.slice(0, 64) || 'Not detected'],
    ['Page language', locale.toUpperCase()],
  ];

  const html = `
    <div style="font-family:Inter,Arial,sans-serif;color:#0a0a14;max-width:560px">
      <h2 style="margin:0 0 4px;font-size:18px">Onboarding booking</h2>
      <p style="margin:0 0 18px;color:#6b6b73;font-size:13px">Submitted via hubstudio.ai/services/onboarding/book. Payment follows on the next page.</p>
      <table style="border-collapse:collapse;width:100%;font-size:14px">
        ${rows
          .map(
            ([k, v]) =>
              `<tr><td style="padding:7px 12px 7px 0;color:#6b6b73;vertical-align:top;white-space:nowrap">${esc(
                k,
              )}</td><td style="padding:7px 0;font-weight:600">${esc(v)}</td></tr>`,
          )
          .join('')}
      </table>
      <h3 style="margin:22px 0 6px;font-size:14px">Who is coming</h3>
      <p style="margin:0;font-size:14px;line-height:1.6;white-space:pre-wrap">${esc(people || blank)}</p>
    </div>`;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `[Onboarding] ${oneLine(company)}, ${date} (${oneLine(`${firstName} ${lastName}`)})`,
      html,
    });
    if (error) {
      return fail(
        502,
        'We could not send your booking. Email hello@bearingbridge.com and we will pick it up.',
      );
    }
  } catch {
    return fail(
      502,
      'We could not send your booking. Email hello@bearingbridge.com and we will pick it up.',
    );
  }

  return ok();
};
