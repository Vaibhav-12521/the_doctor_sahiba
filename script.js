/* =========================================================
   Booking flow: Language → Details (any 2 of name/phone/email) → Pay → Confirm
   Details are emailed BEFORE the QR / pay button is shown,
   so every payer's contact info reaches the inbox.
   ========================================================= */

const CONFIG = {
  // FormSubmit sends form data to this inbox (no backend needed).
  // First submission triggers a one-time "Activate form" email — click it.
  email: 'thedoctorsahiba.official@gmail.com',
  upi: {
    pa: 'nidhi17344-1@okaxis',
    pn: 'Nidhi Singh',
    am: '299.00',
    aid: 'uGICAgID19tbCUg'
  },
  storageKey: 'ds_booking',
  langKey: 'ds_lang',
  resumeWindowMs: 2 * 60 * 60 * 1000 // reopen pay step if user returns within 2h
};

/* ---------- Translations ---------- */
const I18N = {
  en: {
    switchTo: 'हिन्दी',
    stepDetails: 'Details', stepPay: 'Pay', stepConfirm: 'Confirm',
    detailsTitle: 'Book your appointment',
    detailsSub: 'Share your <b>name and phone number</b> so we can confirm your slot. Email is optional.',
    nameLabel: 'Full name', namePh: 'e.g. Priya Sharma',
    phoneLabel: 'Phone / WhatsApp', phonePh: '10-digit mobile number',
    emailLabel: 'Email <em>(optional)</em>',
    concernLabel: 'Concern <em>(optional)</em>', concernPh: 'PCOD, pregnancy, periods…',
    continueBtn: 'Continue to payment <span aria-hidden="true">→</span>',
    saving: 'Saving…',
    errName: 'Please enter a valid name',
    errPhone: 'Enter a valid 10-digit mobile number',
    errEmail: 'Enter a valid email address',
    fixFields: 'Please fix the highlighted field(s).',
    reqName: 'Please enter your name',
    reqPhone: 'Please enter your mobile number',
    payTitle: 'Pay ₹299 consultation fee',
    paySub: 'Booking ID <b>{id}</b> — keep this for reference.',
    upiBtn: 'Pay ₹299 with UPI app',
    paidBtn: 'I have paid',
    editBtn: '← Change my details',
    confirmTitle: 'Confirm your payment',
    confirmSub: 'Enter the 12-digit UPI Transaction ID / UTR from your payment app (optional, but helps us confirm faster).',
    utrLabel: 'UPI Transaction ID / UTR', utrPh: 'e.g. 431298765432',
    errUtr: 'Transaction ID looks incorrect — check your payment app.',
    confirmBtn: 'Confirm booking', confirming: 'Confirming…',
    sendFail: 'Could not send right now. Please check your internet and try again.',
    backBtn: '← Back to payment',
    doneTitle: 'Thank you{name}!',
    doneSub: 'Your booking <b>{id}</b> is received. We\'ll contact you on <b>{contact}</b> to schedule your consultation.',
    doneBtn: 'Done',
    qrAlt: 'Scan the QR code to pay ₹299 via UPI'
  },
  hi: {
    switchTo: 'English',
    stepDetails: 'विवरण', stepPay: 'भुगतान', stepConfirm: 'पुष्टि',
    detailsTitle: 'अपॉइंटमेंट बुक करें',
    detailsSub: 'अपना <b>नाम और फ़ोन नंबर</b> भरें, ताकि हम आपका अपॉइंटमेंट कन्फर्म कर सकें। ईमेल वैकल्पिक है।',
    nameLabel: 'पूरा नाम', namePh: 'जैसे: प्रिया शर्मा',
    phoneLabel: 'फ़ोन / व्हाट्सऐप', phonePh: '10 अंकों का मोबाइल नंबर',
    emailLabel: 'ईमेल <em>(वैकल्पिक)</em>',
    concernLabel: 'समस्या <em>(वैकल्पिक)</em>', concernPh: 'PCOD, प्रेगनेंसी, पीरियड्स…',
    continueBtn: 'भुगतान के लिए आगे बढ़ें <span aria-hidden="true">→</span>',
    saving: 'सेव हो रहा है…',
    errName: 'कृपया सही नाम लिखें',
    errPhone: 'सही 10 अंकों का मोबाइल नंबर लिखें',
    errEmail: 'सही ईमेल पता लिखें',
    fixFields: 'कृपया लाल निशान वाली जानकारी ठीक करें।',
    reqName: 'कृपया अपना नाम लिखें',
    reqPhone: 'कृपया अपना मोबाइल नंबर लिखें',
    payTitle: '₹299 कंसल्टेशन फीस भरें',
    paySub: 'बुकिंग ID <b>{id}</b> — इसे संभाल कर रखें।',
    upiBtn: 'UPI ऐप से ₹299 भरें',
    paidBtn: 'मैंने भुगतान कर दिया है',
    editBtn: '← अपनी जानकारी बदलें',
    confirmTitle: 'अपना भुगतान कन्फर्म करें',
    confirmSub: 'अपने पेमेंट ऐप से 12 अंकों का UPI ट्रांज़ैक्शन ID / UTR लिखें (वैकल्पिक, इससे जल्दी कन्फर्म होगा)।',
    utrLabel: 'UPI ट्रांज़ैक्शन ID / UTR', utrPh: 'जैसे: 431298765432',
    errUtr: 'ट्रांज़ैक्शन ID सही नहीं लग रहा — अपना पेमेंट ऐप देखें।',
    confirmBtn: 'बुकिंग कन्फर्म करें', confirming: 'कन्फर्म हो रहा है…',
    sendFail: 'अभी भेजा नहीं जा सका। इंटरनेट चेक करके फिर से कोशिश करें।',
    backBtn: '← भुगतान पर वापस जाएं',
    doneTitle: 'धन्यवाद{name}!',
    doneSub: 'आपकी बुकिंग <b>{id}</b> मिल गई है। कंसल्टेशन का समय तय करने के लिए हम आपसे <b>{contact}</b> पर संपर्क करेंगे।',
    doneBtn: 'ठीक है',
    qrAlt: '₹299 UPI से भरने के लिए QR कोड स्कैन करें'
  }
};

let lang = 'en';

const escapeHtml = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
function t(key, vars = {}) {
  let s = (I18N[lang] && I18N[lang][key]) ?? I18N.en[key] ?? key;
  for (const [k, v] of Object.entries(vars)) s = s.replaceAll(`{${k}}`, escapeHtml(v));
  return s;
}

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

/* ---------- Tabs ---------- */
const tabs = $$('[role="tab"]');
tabs.forEach(tab => {
  tab.addEventListener('click', () => selectTab(tab));
  tab.addEventListener('keydown', e => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    const i = tabs.indexOf(tab);
    const next = tabs[(i + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length];
    selectTab(next); next.focus();
  });
});
function selectTab(active) {
  tabs.forEach(t => {
    const on = t === active;
    t.setAttribute('aria-selected', on);
    t.tabIndex = on ? 0 : -1;
    document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
  });
}

/* ---------- Storage helpers (never throw) ---------- */
const store = {
  get() { try { return JSON.parse(localStorage.getItem(CONFIG.storageKey)); } catch { return null; } },
  set(v) { try { localStorage.setItem(CONFIG.storageKey, JSON.stringify(v)); } catch {} },
  clear() { try { localStorage.removeItem(CONFIG.storageKey); } catch {} }
};

/* ---------- Validation ---------- */
const validators = {
  name(v) {
    if (!v) return null;
    return /^[\p{L}\p{M}][\p{L}\p{M} .'-]{1,59}$/u.test(v) ? true : t('errName');
  },
  phone(v) {
    if (!v) return null;
    const d = v.replace(/[\s()-]/g, '');
    if (/^(\+?91|0)?[6-9]\d{9}$/.test(d)) return true;      // Indian mobile
    if (/^\+\d{8,15}$/.test(d)) return true;               // international with +code
    return t('errPhone');
  },
  email(v) {
    if (!v) return null;
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? true : t('errEmail');
  }
};

// Name + phone are required; email is optional but must be valid if filled.
const REQUIRED = { name: 'reqName', phone: 'reqPhone' };
function checkDetails(form) {
  let hasError = false;
  for (const key of ['name', 'phone', 'email']) {
    const input = form.elements[key];
    const field = input.closest('.field');
    let res = validators[key](input.value.trim());
    if (res === null && REQUIRED[key]) res = t(REQUIRED[key]);
    field.classList.toggle('valid', res === true);
    field.classList.toggle('invalid', typeof res === 'string');
    $('.err', field).textContent = typeof res === 'string' ? res : '';
    if (typeof res === 'string') hasError = true;
  }
  return { hasError };
}

/* ---------- Email sending (FormSubmit AJAX) ---------- */
// Form-encoded body = "simple" CORS request: no preflight round trip (faster).
// keepalive lets the request finish even if the patient switches to their UPI app.
// The timeout stops the UI from ever waiting forever on a slow server.
async function sendToInbox(data, timeoutMs = 12000) {
  const body = new URLSearchParams({ _template: 'table', _captcha: 'false', ...data });
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(`https://formsubmit.co/ajax/${CONFIG.email}`, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body,
      keepalive: true,
      signal: ctrl.signal
    });
    const json = await res.json().catch(() => ({}));
    if (!res.ok || String(json.success) !== 'true') throw new Error(json.message || 'Send failed');
    return json;
  } finally {
    clearTimeout(timer);
  }
}

function contactLine(b) {
  return [b.phone, b.email].filter(Boolean).join(' / ') || b.name;
}

function emailPayload(b, status, extra = {}) {
  return {
    _subject: `${status} – ${b.name || b.phone || b.email} (${b.id})`,
    'Booking ID': b.id,
    Status: status,
    Name: b.name || '—',
    Phone: b.phone || '—',
    Email: b.email || '—',
    Concern: b.concern || '—',
    Language: b.lang === 'hi' ? 'Hindi' : 'English',
    'Submitted at': new Date(b.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    ...extra
  };
}

/* ---------- Modal + steps ---------- */
const modal = $('#bookingModal');
const modalBox = $('.modal-box', modal);
const langSwitch = $('#langSwitch');
const steps = {
  lang: $('#stepLang'), details: $('#stepDetails'), pay: $('#stepPay'),
  confirm: $('#stepConfirm'), done: $('#stepDone')
};
const stepOrder = ['details', 'pay', 'confirm'];
let currentStep = 'lang';
let booking = null;
let lastFocus = null;

/* Apply current language to every translatable piece of the modal */
function applyLang() {
  modalBox.setAttribute('lang', lang);
  $$('[data-i18n]', modal).forEach(el => { el.innerHTML = t(el.dataset.i18n); });
  $$('[data-i18n-ph]', modal).forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
  $('.qr', modal).alt = t('qrAlt');
  langSwitch.textContent = t('switchTo');
  if (booking) {
    $('#paySub').innerHTML = t('paySub', { id: booking.id });
    const first = booking.name ? booking.name.split(' ')[0] : '';
    $('#doneTitle').innerHTML = t('doneTitle', { name: first ? (lang === 'hi' ? `, ${first} जी` : `, ${first}`) : '' });
    $('#doneSub').innerHTML = t('doneSub', { id: booking.id, contact: contactLine(booking) });
  }
  // re-translate any visible validation errors
  if (currentStep === 'details' && $$('.field.invalid', steps.details).length) checkDetails(steps.details);
  ['detailsMsg', 'confirmMsg'].forEach(id => { $('#' + id).textContent = ''; });
}

function setLang(l) {
  lang = l === 'hi' ? 'hi' : 'en';
  try { localStorage.setItem(CONFIG.langKey, lang); } catch {}
  if (booking) { booking.lang = lang; store.set(booking); }
  applyLang();
}

function showStep(name) {
  currentStep = name;
  Object.entries(steps).forEach(([k, el]) => { el.hidden = k !== name; });
  const onLang = name === 'lang';
  modalBox.classList.toggle('on-lang', onLang);
  modalBox.classList.toggle('has-switch', !onLang);
  langSwitch.hidden = onLang;
  const idx = name === 'done' ? 3 : stepOrder.indexOf(name);
  $$('.steps li').forEach((li, i) => {
    li.classList.toggle('active', i === idx);
    li.classList.toggle('done', i < idx);
  });
  const first = steps[name].querySelector('input, button.lang-option, a.btn, button.btn');
  if (first) setTimeout(() => first.focus(), 50);
}

function openModal(step) {
  lastFocus = document.activeElement;
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  showStep(step);
}
function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = '';
  if (currentStep === 'done') { store.clear(); booking = null; resetForms(); }
  if (lastFocus) lastFocus.focus();
}
function resetForms() {
  steps.details.reset(); steps.confirm.reset();
  $$('.field').forEach(f => f.classList.remove('valid', 'invalid'));
  $$('.err, .form-msg').forEach(e => { e.textContent = ''; e.classList.remove('ok'); });
}

function getPendingBooking() {
  const saved = store.get();
  if (saved && Date.now() - saved.createdAt < CONFIG.resumeWindowMs) return saved;
  if (saved) store.clear();
  return null;
}

// "Book Appointment" / "Book Visit": always ask the language first,
// unless the patient is coming back to an unfinished payment.
$$('[data-open-booking]').forEach(btn => btn.addEventListener('click', () => {
  const saved = getPendingBooking();
  if (saved) {
    booking = saved; lang = saved.lang || 'en';
    applyLang(); preparePayStep(); openModal('pay');
  } else {
    openModal('lang');
  }
}));

$$('.lang-option', modal).forEach(btn => btn.addEventListener('click', () => {
  setLang(btn.dataset.lang);
  showStep('details');
}));
langSwitch.addEventListener('click', () => setLang(lang === 'hi' ? 'en' : 'hi'));

$$('[data-close]', modal).forEach(el => el.addEventListener('click', closeModal));
document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden) closeModal(); });

function makeId() {
  const ts = Date.now().toString(36).slice(-4).toUpperCase();
  const r = Math.random().toString(36).slice(2, 4).toUpperCase();
  return `DS-${ts}${r}`;
}

function preparePayStep() {
  const { pa, pn, am, aid } = CONFIG.upi;
  const params = new URLSearchParams({ pa, pn, am, cu: 'INR', tn: `Appt ${booking.id}`, aid });
  $('#upiLink').href = `upi://pay?${params.toString().replace(/\+/g, '%20')}`;
  $('#paySub').innerHTML = t('paySub', { id: booking.id });
}

/* Step 1: details */
steps.details.addEventListener('input', e => {
  const field = e.target.closest('.field');
  if (field && field.classList.contains('invalid')) checkDetails(steps.details);
  $('#detailsMsg').textContent = '';
});

steps.details.addEventListener('submit', async e => {
  e.preventDefault();
  const form = steps.details;
  const msg = $('#detailsMsg');
  const { hasError } = checkDetails(form);

  if (hasError) { msg.textContent = t('fixFields'); return; }

  booking = {
    id: makeId(),
    createdAt: Date.now(),
    lang,
    name: form.elements.name.value.trim(),
    phone: form.elements.phone.value.trim(),
    email: form.elements.email.value.trim(),
    concern: form.elements.concern.value.trim(),
    detailsSent: false
  };

  // Move to payment instantly; email goes out in the background.
  store.set(booking);
  preparePayStep();
  showStep('pay');

  const sent = booking;
  sendToInbox(emailPayload(sent, 'New booking – payment pending'))
    .then(() => {
      sent.detailsSent = true;
      if (booking && booking.id === sent.id) store.set(booking);
    })
    .catch(err => {
      // Details are re-sent with the confirmation step, so nothing is lost.
      console.warn('Details email failed, will retry on confirm:', err);
    });
});

/* Step 2: pay */
$('#paidBtn').addEventListener('click', () => showStep('confirm'));
$('#backToPay').addEventListener('click', () => showStep('pay'));
$('#editDetails').addEventListener('click', () => {
  store.clear();
  if (booking) {
    const f = steps.details.elements;
    f.name.value = booking.name; f.phone.value = booking.phone;
    f.email.value = booking.email; f.concern.value = booking.concern;
  }
  booking = null;
  showStep('details');
});

/* Step 3: confirm */
steps.confirm.addEventListener('submit', async e => {
  e.preventDefault();
  const input = steps.confirm.elements.utr;
  const field = input.closest('.field');
  const utr = input.value.replace(/\s/g, '');
  const msg = $('#confirmMsg');

  if (utr && !/^[A-Za-z0-9]{8,22}$/.test(utr)) {
    field.classList.add('invalid');
    $('.err', field).textContent = t('errUtr');
    return;
  }
  field.classList.remove('invalid');
  $('.err', field).textContent = '';

  const btn = $('#confirmSubmit');
  btn.disabled = true; btn.textContent = t('confirming');
  msg.textContent = '';

  try {
    await sendToInbox(emailPayload(booking, 'Payment done – confirm booking', {
      'UPI Transaction ID / UTR': utr || 'Not provided',
      'First details email delivered': booking.detailsSent ? 'Yes' : 'No (this is the first)'
    }));
  } catch (err) {
    btn.disabled = false; btn.textContent = t('confirmBtn');
    msg.textContent = t('sendFail');
    return;
  }

  btn.disabled = false; btn.textContent = t('confirmBtn');
  applyLang(); // fills done title/sub with name, id, contact
  store.clear();
  showStep('done');
});

/* Initial language + resume an unfinished payment after returning from a UPI app */
(function init() {
  try { lang = localStorage.getItem(CONFIG.langKey) === 'hi' ? 'hi' : 'en'; } catch {}
  const saved = getPendingBooking();
  if (saved) { booking = saved; lang = saved.lang || lang; }
  applyLang();
  if (booking) { preparePayStep(); openModal('pay'); }
})();
