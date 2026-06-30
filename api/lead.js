// Vercel serverless function: receives all js-lead-form submissions.
// Sends an internal notification to info@wamocon.com and a confirmation
// email to the visitor (when an email address was provided).
//
// Supports two Microsoft Graph auth flows (use the one you have):
//   1. Client credentials (application permission):
//      GRAPH_TENANT_ID, GRAPH_CLIENT_ID, GRAPH_CLIENT_SECRET
//   2. Delegated / refresh-token flow:
//      GRAPH_TENANT_ID, GRAPH_CLIENT_ID, GRAPH_REFRESH_TOKEN
//      If the app registration is a public client (mobile/desktop), set
//      GRAPH_PUBLIC_CLIENT=true so no client_secret is sent.
//
// Optional env vars:
//   GRAPH_SENDER            (defaults to info@wamocon.com)
//   LEAD_RECIPIENT          (defaults to info@wamocon.com)
//   GRAPH_PUBLIC_CLIENT     (true/false, defaults to false)
//
// The client secret and refresh token must NEVER be committed to git.

const TENANT_ID = process.env.GRAPH_TENANT_ID;
const CLIENT_ID = process.env.GRAPH_CLIENT_ID;
const CLIENT_SECRET = process.env.GRAPH_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.GRAPH_REFRESH_TOKEN;
const PUBLIC_CLIENT = process.env.GRAPH_PUBLIC_CLIENT === 'true';
const GRAPH_SENDER = process.env.GRAPH_SENDER || 'info@wamocon.com';
const RECIPIENT = process.env.LEAD_RECIPIENT || 'info@wamocon.com';

function readBody(req) {
  // Vercel parses application/json and x-www-form-urlencoded into req.body.
  if (req.body && typeof req.body === 'object') return req.body;
  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body);
    } catch {
      return Object.fromEntries(new URLSearchParams(req.body));
    }
  }
  return {};
}

async function fetchToken(params) {
  const url = `https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/token`;
  const res = await fetch(url, { method: 'POST', body: params });
  const data = await res.json();

  if (!res.ok || data.error) {
    throw new Error(
      `Graph token request failed: ${res.status} ${data.error_description || data.error || res.statusText}`
    );
  }

  return data;
}

async function getAccessToken() {
  if (!TENANT_ID || !CLIENT_ID) {
    throw new Error('Missing Graph tenant/client environment variables.');
  }

  // Prefer delegated flow when a refresh token is provided.
  if (REFRESH_TOKEN) {
    const makeParams = (withSecret) => {
      const params = new URLSearchParams();
      params.append('grant_type', 'refresh_token');
      params.append('client_id', CLIENT_ID);
      if (withSecret && CLIENT_SECRET) params.append('client_secret', CLIENT_SECRET);
      params.append('refresh_token', REFRESH_TOKEN);
      params.append('scope', 'https://graph.microsoft.com/Mail.Send');
      return params;
    };

    try {
      const data = await fetchToken(makeParams(!PUBLIC_CLIENT));
      if (data.refresh_token && data.refresh_token !== REFRESH_TOKEN) {
        console.log('[lead] refresh token rotated — update GRAPH_REFRESH_TOKEN in Vercel');
      }
      return data.access_token;
    } catch (err) {
      // Already opted into public-client mode — no point retrying with a secret.
      if (PUBLIC_CLIENT) throw err;
      // A public-client refresh token cannot include a client_secret.
      const isPublicClientError =
        err.message &&
        (/AADSTS9002313|AADSTS700025/.test(err.message) ||
          err.message.toLowerCase().includes('public so neither'));
      if (CLIENT_SECRET && isPublicClientError) {
        console.log('[lead] retrying refresh without client_secret (public client)');
        const data = await fetchToken(makeParams(false));
        if (data.refresh_token && data.refresh_token !== REFRESH_TOKEN) {
          console.log('[lead] refresh token rotated — update GRAPH_REFRESH_TOKEN in Vercel');
        }
        return data.access_token;
      }
      throw err;
    }
  }

  // Fallback to client credentials (application permission) — requires a secret.
  if (!CLIENT_SECRET) {
    throw new Error('Missing GRAPH_CLIENT_SECRET for client credentials.');
  }
  const params = new URLSearchParams();
  params.append('grant_type', 'client_credentials');
  params.append('client_id', CLIENT_ID);
  params.append('client_secret', CLIENT_SECRET);
  params.append('scope', 'https://graph.microsoft.com/.default');

  const data = await fetchToken(params);
  return data.access_token;
}

async function graphSendMail(accessToken, message) {
  const url = `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(GRAPH_SENDER)}/sendMail`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message, saveToSentItems: false }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Graph sendMail failed: ${res.status} ${text}`);
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function formatReceived(iso, lang) {
  const date = new Date(iso);
  return date.toLocaleString(lang === 'de' ? 'de-DE' : 'en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function typeLabel(type, lang) {
  const labels = {
    de: {
      career: 'Karriere',
      cooperation: 'Zusammenarbeit',
      lead: 'Kontakt',
      testimonial: 'Bewertung',
      'it-tester': 'IT-Tester',
    },
    en: {
      career: 'Career',
      cooperation: 'Cooperation',
      lead: 'Contact',
      testimonial: 'Testimonial',
      'it-tester': 'IT tester',
    },
  };
  return (labels[lang] || labels.de)[type] || type;
}

function emailLayout({ title, lang, body }) {
  const footerLine =
    lang === 'de'
      ? 'Diese E-Mail wurde automatisch versendet. Bei Fragen antworten Sie einfach auf diese Nachricht.'
      : 'This email was sent automatically. If you have any questions, simply reply to this message.';

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)}</title>
</head>
<body style="margin:0;padding:0;background-color:#101010;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#101010;">
    <tr>
      <td align="center" style="padding:40px 16px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="max-width:600px;width:100%;background-color:#181818;border-radius:16px;overflow:hidden;border:1px solid rgba(255,255,255,0.08);">
          <tr><td style="height:5px;background-color:#f40e0e;font-size:0;line-height:0;">&nbsp;</td></tr>
          <tr>
            <td style="padding:36px 32px 24px;">
              <p style="margin:0 0 8px;font-size:13px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#f40e0e;">WAMOCON GmbH</p>
              <h1 style="margin:0;font-size:23px;font-weight:700;color:#ffffff;line-height:1.25;font-family:'Poppins',Arial,sans-serif;">${escapeHtml(title)}</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 36px;color:rgba(255,255,255,0.78);font-family:'Poppins',Arial,sans-serif;font-size:15px;line-height:1.65;">
              ${body}
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 32px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-top:1px solid rgba(255,255,255,0.08);">
                <tr>
                  <td style="padding-top:18px;color:rgba(255,255,255,0.45);font-size:12px;line-height:1.55;">
                    ${footerLine}<br>
                    <a href="https://www.wamocon.com" style="color:#f40e0e;text-decoration:none;">www.wamocon.com</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function detailTable(submission, lang) {
  const isDe = lang === 'de';
  return `
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:rgba(255,255,255,0.05);border-radius:12px;border:1px solid rgba(255,255,255,0.06);">
  <tr><td style="padding:22px;">
    <h2 style="margin:0 0 16px;font-size:15px;font-weight:700;color:#f40e0e;text-transform:uppercase;letter-spacing:0.05em;">${isDe ? 'Ihre angegebenen Daten' : 'Your details'}</h2>
    <p style="margin:0 0 8px;"><strong style="color:#ffffff;">${isDe ? 'Name' : 'Name'}:</strong> ${escapeHtml(submission.name)}</p>
    <p style="margin:0 0 8px;"><strong style="color:#ffffff;">${isDe ? 'Telefon' : 'Phone'}:</strong> ${escapeHtml(submission.phone)}</p>
    <p style="margin:0 0 8px;"><strong style="color:#ffffff;">E-Mail:</strong> <a href="mailto:${escapeHtml(submission.email)}" style="color:#f40e0e;text-decoration:none;">${escapeHtml(submission.email)}</a></p>
  </td></tr>
</table>`;
}

function internalEmail(submission) {
  const isDe = submission.lang === 'de';
  const label = typeLabel(submission.type, submission.lang);
  const subject = isDe
    ? `Neue ${label}-Anfrage von ${submission.name}`
    : `New ${label} inquiry from ${submission.name}`;
  const title = isDe ? `Neue Anfrage: ${label}` : `New inquiry: ${label}`;

  const body = `
<p style="margin:0 0 18px;">${isDe ? 'Eine neue Anfrage wurde über die Website übermittelt.' : 'A new inquiry has been submitted via the website.'}</p>
<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:rgba(255,255,255,0.05);border-radius:12px;border:1px solid rgba(255,255,255,0.06);">
  <tr><td style="padding:22px;">
    <p style="margin:0 0 10px;"><strong style="color:#ffffff;">${isDe ? 'Typ' : 'Type'}:</strong> ${escapeHtml(label)}</p>
    <p style="margin:0 0 10px;"><strong style="color:#ffffff;">${isDe ? 'Sprache' : 'Language'}:</strong> ${submission.lang === 'de' ? 'Deutsch' : 'English'}</p>
    <p style="margin:0 0 10px;"><strong style="color:#ffffff;">${isDe ? 'Name' : 'Name'}:</strong> ${escapeHtml(submission.name)}</p>
    <p style="margin:0 0 10px;"><strong style="color:#ffffff;">${isDe ? 'Telefon' : 'Phone'}:</strong> ${escapeHtml(submission.phone)}</p>
    <p style="margin:0 0 10px;"><strong style="color:#ffffff;">E-Mail:</strong> <a href="mailto:${escapeHtml(submission.email)}" style="color:#f40e0e;text-decoration:none;">${escapeHtml(submission.email)}</a></p>
  </td></tr>
</table>
<p style="margin:18px 0 0;color:rgba(255,255,255,0.55);font-size:13px;">${isDe ? 'Eingegangen am' : 'Received at'}: ${formatReceived(submission.receivedAt, submission.lang)}</p>
`;

  return {
    subject,
    body: { contentType: 'HTML', content: emailLayout({ title, lang: submission.lang, body }) },
    from: { emailAddress: { address: GRAPH_SENDER } },
    toRecipients: [{ emailAddress: { address: RECIPIENT } }],
    replyTo: [{ emailAddress: { address: submission.email } }],
  };
}

function confirmationEmail(submission) {
  const isDe = submission.lang === 'de';
  const subject = isDe
    ? 'Vielen Dank für Ihre Anfrage bei WAMOCON'
    : 'Thank you for your inquiry to WAMOCON';
  const title = isDe ? 'Vielen Dank für Ihre Anfrage' : 'Thank you for your inquiry';

  const body = `
<p style="font-size:17px;color:#ffffff;margin:0 0 16px;font-weight:600;">${isDe ? 'Hallo' : 'Hi'} ${escapeHtml(submission.name)} 👋</p>
<p style="margin:0 0 16px;">${isDe ? 'Vielen Dank für Ihre Anfrage bei <strong style="color:#ffffff;">WAMOCON</strong>. Wir haben Ihre Nachricht erhalten und freuen uns, von Ihnen zu hören!' : 'Thank you for reaching out to <strong style="color:#ffffff;">WAMOCON</strong>. We have received your message and are happy to hear from you!'}</p>
<p style="margin:0 0 24px;">${isDe ? 'Ein Mitglied unseres Teams wird sich innerhalb von <strong style="color:#ffffff;">48 Stunden</strong> bei Ihnen melden.' : 'A member of our team will get back to you within <strong style="color:#ffffff;">48 hours</strong>.'}</p>
${detailTable(submission, submission.lang)}
<p style="margin:24px 0 0;">${isDe ? 'Bei dringenden Anliegen antworten Sie einfach auf diese E-Mail oder schreiben Sie uns an <a href="mailto:info@wamocon.com" style="color:#f40e0e;text-decoration:none;">info@wamocon.com</a>.' : 'If your matter is urgent, simply reply to this email or write to us at <a href="mailto:info@wamocon.com" style="color:#f40e0e;text-decoration:none;">info@wamocon.com</a>.'}</p>
<p style="margin:24px 0 0;">${isDe ? 'Mit freundlichen Grüßen' : 'Best regards'},<br><strong style="color:#ffffff;">${isDe ? 'Ihr WAMOCON-Team' : 'Your WAMOCON Team'}</strong></p>
`;

  return {
    subject,
    body: { contentType: 'HTML', content: emailLayout({ title, lang: submission.lang, body }) },
    from: { emailAddress: { address: GRAPH_SENDER } },
    toRecipients: [{ emailAddress: { address: submission.email } }],
  };
}

async function sendEmails(submission) {
  if (!TENANT_ID || !CLIENT_ID || !(CLIENT_SECRET || REFRESH_TOKEN)) {
    console.log('[lead] Graph env vars missing — skipping email');
    return;
  }

  const accessToken = await getAccessToken();

  // 1. Internal notification
  await graphSendMail(accessToken, internalEmail(submission));
  console.log('[lead] internal email sent to', RECIPIENT);

  // 2. Visitor confirmation
  if (submission.email) {
    await graphSendMail(accessToken, confirmationEmail(submission));
    console.log('[lead] confirmation email sent to', submission.email);
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const body = readBody(req);

  // Honeypot: bots tend to fill hidden fields. Silently accept (200) so the bot
  // believes it succeeded, but never process or log the submission.
  if ((body.company || body.website || body.url || '').toString().trim() !== '') {
    return res.status(200).json({ ok: true });
  }

  // Cap every field so a malicious client can't flood logs or memory.
  const cap = (value, max) => value.toString().trim().slice(0, max);
  const name = cap(body.name || '', 200);
  const phone = cap(body.phone || '', 60);
  const email = cap(body.email || '', 320);
  const comment = cap(body.comment || '', 5000);
  const type = cap(body.type || 'lead', 40);
  const lang = cap(body.lang || 'de', 5);
  const consent = body.consent === true || body.consent === 'true' || body.consent === 'on';

  // The consent checkbox is mandatory.
  if (!consent) {
    return res.status(400).json({ ok: false, error: 'Consent is required.' });
  }
  // Name, phone and email are mandatory.
  if (!name || !phone || !email) {
    return res.status(400).json({ ok: false, error: 'Missing required fields.' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ ok: false, error: 'Invalid email address.' });
  }
  if (!/[\d]/.test(phone) || !/[\d\s\+\-\(\)\/]{6,}$/.test(phone)) {
    return res.status(400).json({ ok: false, error: 'Invalid phone number.' });
  }

  const submission = {
    type,
    lang,
    name,
    phone,
    email,
    comment,
    receivedAt: new Date().toISOString(),
  };

  // Always log so submissions are never silently lost (Vercel → Functions logs).
  console.log('[lead] new submission', JSON.stringify(submission));

  // Send notification + optional visitor confirmation.
  try {
    await sendEmails(submission);
  } catch (err) {
    console.error('[lead] email error', err.message || err);
    // We still return 200 so the visitor is redirected to the thank-you page.
    // The error is visible in the Vercel Functions log for debugging.
  }

  return res.status(200).json({ ok: true });
}
