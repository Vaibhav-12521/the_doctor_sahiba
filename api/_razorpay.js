// Shared helpers for the Razorpay serverless functions.
// Files prefixed with "_" inside /api are not exposed as routes on Vercel.
import crypto from 'node:crypto';

// Consultation fee in paise. The amount is decided here on the server, never by the browser.
export const FEE_PAISE = Number(process.env.CONSULT_FEE_PAISE || 29900);

export function httpError(status, message) {
  return Object.assign(new Error(message), { status });
}

export function keys() {
  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!keyId || !keySecret) throw httpError(503, 'Online payments are not configured');
  return { keyId, keySecret };
}

export async function razorpay(path, { method = 'GET', body } = {}) {
  const { keyId, keySecret } = keys();
  const res = await fetch(`https://api.razorpay.com/v1${path}`, {
    method,
    headers: {
      Authorization: 'Basic ' + Buffer.from(`${keyId}:${keySecret}`).toString('base64'),
      'Content-Type': 'application/json'
    },
    body: body ? JSON.stringify(body) : undefined
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) {
    console.error('Razorpay API error', res.status, json);
    throw httpError(502, 'Payment provider error');
  }
  return json;
}

export function signatureValid(orderId, paymentId, signature) {
  const { keySecret } = keys();
  const expected = crypto.createHmac('sha256', keySecret).update(`${orderId}|${paymentId}`).digest('hex');
  const a = Buffer.from(expected);
  const b = Buffer.from(String(signature));
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// Sends an email through Resend (https://resend.com). Returns false when not configured or on failure,
// so a mail problem never blocks a confirmed payment.
export async function sendEmail({ subject, rows, to = process.env.NOTIFY_EMAIL, replyTo }) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey || !to) return false;
  const html = `<div style="font-family:Arial,sans-serif;max-width:560px">
    <h2 style="color:#a8465c;margin:0 0 12px">${esc(subject)}</h2>
    <table style="border-collapse:collapse;width:100%;font-size:14px">
      ${rows.map(([k, v]) => `<tr><td style="padding:8px;border:1px solid #eee;color:#666;width:40%">${esc(k)}</td><td style="padding:8px;border:1px solid #eee"><b>${esc(v)}</b></td></tr>`).join('')}
    </table></div>`;
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.NOTIFY_FROM || 'Doctor Sahiba Bookings <onboarding@resend.dev>',
        to: to.split(',').map(s => s.trim()).filter(Boolean),
        subject,
        html,
        ...(replyTo ? { reply_to: replyTo } : {})
      })
    });
    if (!res.ok) console.error('Resend error', res.status, await res.text().catch(() => ''));
    return res.ok;
  } catch (err) {
    console.error('Email send failed', err);
    return false;
  }
}

// Trim, strip control characters and cap length.
export function clean(v, max) {
  return String(v ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, max);
}

// Wraps a POST JSON handler with method check, body parsing and error responses.
export function handle(fn) {
  return async (req, res) => {
    res.setHeader('Cache-Control', 'no-store');
    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST');
      return res.status(405).json({ error: 'Method not allowed' });
    }
    try {
      const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
      return res.status(200).json(await fn(body));
    } catch (err) {
      const status = err.status || 500;
      if (status >= 500) console.error(err);
      return res.status(status).json({ error: err.status ? err.message : 'Server error' });
    }
  };
}
