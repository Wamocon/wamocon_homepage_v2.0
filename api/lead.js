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

function internalEmail(submission) {
  const subject =
    submission.lang === 'de'
      ? `Neue ${submission.type}-Anfrage von ${submission.name}`
      : `New ${submission.type} inquiry from ${submission.name}`;

  const body = [
    `Type / Typ: ${submission.type}`,
    `Language / Sprache: ${submission.lang}`,
    `Name: ${submission.name}`,
    `Phone / Telefon: ${submission.phone || '-'}`,
    `Email / E-Mail: ${submission.email || '-'}`,
    `Message / Nachricht: ${submission.comment || '-'}`,
    `Received / Eingegangen: ${submission.receivedAt}`,
  ].join('\n');

  return {
    subject,
    body: { contentType: 'Text', content: body },
    from: { emailAddress: { address: GRAPH_SENDER } },
    toRecipients: [{ emailAddress: { address: RECIPIENT } }],
    ...(submission.email
      ? { replyTo: [{ emailAddress: { address: submission.email } }] }
      : {}),
  };
}

function confirmationEmail(submission) {
  const isDe = submission.lang === 'de';
  const subject = isDe
    ? 'Vielen Dank für Ihre Anfrage bei WAMOCON'
    : 'Thank you for your inquiry to WAMOCON';

  const lines = isDe
    ? [
        `Sehr geehrte(r) ${submission.name},`,
        '',
        'vielen Dank für Ihre Anfrage. Wir haben Ihre Nachricht erhalten und melden uns schnellstmöglich bei Ihnen.',
        '',
        'Ihre angegebenen Daten:',
        `Name: ${submission.name}`,
        `Telefon: ${submission.phone || '-'}`,
        `E-Mail: ${submission.email || '-'}`,
        `Nachricht: ${submission.comment || '-'}`,
        '',
        'Mit freundlichen Grüßen',
        'WAMOCON GmbH',
      ]
    : [
        `Dear ${submission.name},`,
        '',
        'Thank you for your inquiry. We have received your message and will get back to you as soon as possible.',
        '',
        'Your details:',
        `Name: ${submission.name}`,
        `Phone: ${submission.phone || '-'}`,
        `Email: ${submission.email || '-'}`,
        `Message: ${submission.comment || '-'}`,
        '',
        'Best regards,',
        'WAMOCON GmbH',
      ];

  return {
    subject,
    body: { contentType: 'Text', content: lines.join('\n') },
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
  // Require a name plus at least one way to reach the person.
  if (!name || (!phone && !email)) {
    return res.status(400).json({ ok: false, error: 'Missing required fields.' });
  }
  // If an email was provided, it must look like a valid address.
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ ok: false, error: 'Invalid email address.' });
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
