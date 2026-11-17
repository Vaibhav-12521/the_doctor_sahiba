const CONFIG = {
  email: 'c1d1f7cab3de7d05cade7d97616e4763',
  // Display fee in rupees. The amount actually charged is set on the server (CONSULT_FEE_PAISE).
  fee: 299,
  razorpay: {
    // Set to false to hide online checkout and use only the manual UPI QR flow.
    enabled: true,
    // Base URL of the API functions. Empty = same site (e.g. Vercel deployment).
    apiBase: '',
    checkoutSrc: 'https://checkout.razorpay.com/v1/checkout.js',
    merchantName: 'Dr. Nidhi Singh',
    themeColor: '#c96b7f'
  },
  upi: {
    pa: 'nidhi17344-1@okaxis',
    pn: 'Nidhi Singh',
    aid: 'uGICAgID19tbCUg'
  },
  whatsapp: {
    phone: '',
    apikey: ''
  },
  instagramDm: 'https://ig.me/m/the_doctor_sahiba',
  storageKey: 'ds_booking',
  langKey: 'ds_lang',
  resumeWindowMs: 2 * 60 * 60 * 1000
};

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
    errName: 'Please enter a valid name',
    errPhone: 'Enter a valid 10-digit mobile number',
    errEmail: 'Enter a valid email address',
    fixFields: 'Please fix the highlighted field(s).',
    reqName: 'Please enter your name',
    reqPhone: 'Please enter your mobile number',
    payTitle: 'Pay ₹{fee} consultation fee',
    paySub: 'Booking ID <b>{id}</b>. Keep this for reference.',
    sumConsult: 'Online consultation',
    sumAmount: '₹{fee}',
    payMethods: 'UPI · Cards · Netbanking · Wallets',
    rzpBtn: 'Pay ₹{fee} securely',
    secured: 'Secured by Razorpay',
    opening: 'Opening secure checkout…',
    verifying: 'Verifying payment…',
    payCancelled: 'Payment was not completed. You can try again whenever you are ready.',
    payFailed: 'Payment failed{reason}. Please try again or use another method.',
    rzpUnavailable: 'Online checkout is not available right now. Please pay using the UPI QR below.',
    verifyFail: 'We could not verify this payment automatically. Please send Payment ID <b>{pid}</b> to <b>@the_doctor_sahiba</b> on Instagram DM.',
    manualToggle: 'Pay manually via UPI QR instead',
    noticeTitle: 'Important',
    noticeText: 'After payment, send the payment screenshot with your Booking ID to <b>@the_doctor_sahiba</b> on Instagram DM. If the screenshot is not shared, we will not be responsible for your appointment.',
    igBtn: 'Send screenshot on Instagram DM',
    upiBtn: 'Pay ₹{fee} with UPI app',
    paidBtn: 'I have paid',
    editBtn: '← Change my details',
    confirmTitle: 'Confirm your payment',
    confirmSub: 'Enter the 12-digit UPI Transaction ID / UTR from your payment app (optional, but helps us confirm faster).',
    utrLabel: 'UPI Transaction ID / UTR', utrPh: 'e.g. 431298765432',
    errUtr: 'Transaction ID looks incorrect. Please check your payment app.',
    confirmBtn: 'Confirm booking', confirming: 'Confirming…',
    sendFail: 'Could not send right now. Please check your internet and try again.',
    backBtn: '← Back to payment',
    doneTitle: 'Thank you{name}!',
    doneSub: 'Your booking <b>{id}</b> is received. We\'ll contact you on <b>{contact}</b> to schedule your consultation.',
    doneSubPaid: 'Payment of ₹{fee} received for booking <b>{id}</b> (Payment ID <b>{pid}</b>). We\'ll contact you on <b>{contact}</b> to schedule your consultation.',
    doneBtn: 'Done',
    qrAlt: 'Scan the QR code to pay ₹{fee} via UPI'
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
    errName: 'कृपया सही नाम लिखें',
    errPhone: 'सही 10 अंकों का मोबाइल नंबर लिखें',
    errEmail: 'सही ईमेल पता लिखें',
    fixFields: 'कृपया लाल निशान वाली जानकारी ठीक करें।',
    reqName: 'कृपया अपना नाम लिखें',
    reqPhone: 'कृपया अपना मोबाइल नंबर लिखें',
    payTitle: '₹{fee} कंसल्टेशन फीस भरें',
    paySub: 'बुकिंग ID <b>{id}</b>। इसे संभाल कर रखें।',
    sumConsult: 'ऑनलाइन कंसल्टेशन',
    sumAmount: '₹{fee}',
    payMethods: 'UPI · कार्ड · नेटबैंकिंग · वॉलेट',
    rzpBtn: '₹{fee} सुरक्षित रूप से भरें',
    secured: 'Razorpay द्वारा सुरक्षित',
    opening: 'सुरक्षित चेकआउट खुल रहा है…',
    verifying: 'भुगतान की पुष्टि हो रही है…',
    payCancelled: 'भुगतान पूरा नहीं हुआ। जब चाहें फिर से कोशिश करें।',
    payFailed: 'भुगतान नहीं हो सका{reason}। कृपया फिर से कोशिश करें या दूसरा तरीका चुनें।',
    rzpUnavailable: 'ऑनलाइन चेकआउट अभी उपलब्ध नहीं है। कृपया नीचे दिए UPI QR से भुगतान करें।',
    verifyFail: 'हम इस भुगतान को अपने आप वेरिफ़ाई नहीं कर सके। कृपया Payment ID <b>{pid}</b> Instagram DM में <b>@the_doctor_sahiba</b> पर भेजें।',
    manualToggle: 'या UPI QR से खुद भुगतान करें',
    noticeTitle: 'ज़रूरी सूचना',
    noticeText: 'भुगतान के बाद, पेमेंट का स्क्रीनशॉट अपनी बुकिंग ID के साथ Instagram DM में <b>@the_doctor_sahiba</b> पर भेजें। स्क्रीनशॉट न भेजने पर अपॉइंटमेंट की ज़िम्मेदारी हमारी नहीं होगी।',
    igBtn: 'Instagram DM पर स्क्रीनशॉट भेजें',
    upiBtn: 'UPI ऐप से ₹{fee} भरें',
    paidBtn: 'मैंने भुगतान कर दिया है',
    editBtn: '← अपनी जानकारी बदलें',
    confirmTitle: 'अपना भुगतान कन्फर्म करें',
    confirmSub: 'अपने पेमेंट ऐप से 12 अंकों का UPI ट्रांज़ैक्शन ID / UTR लिखें (वैकल्पिक, इससे जल्दी कन्फर्म होगा)।',
    utrLabel: 'UPI ट्रांज़ैक्शन ID / UTR', utrPh: 'जैसे: 431298765432',
    errUtr: 'ट्रांज़ैक्शन ID सही नहीं लग रहा। अपना पेमेंट ऐप देखें।',
    confirmBtn: 'बुकिंग कन्फर्म करें', confirming: 'कन्फर्म हो रहा है…',
    sendFail: 'अभी भेजा नहीं जा सका। इंटरनेट चेक करके फिर से कोशिश करें।',
    backBtn: '← भुगतान पर वापस जाएं',
    doneTitle: 'धन्यवाद{name}!',
    doneSub: 'आपकी बुकिंग <b>{id}</b> मिल गई है। कंसल्टेशन का समय तय करने के लिए हम आपसे <b>{contact}</b> पर संपर्क करेंगे।',
    doneSubPaid: 'बुकिंग <b>{id}</b> के लिए ₹{fee} का भुगतान मिल गया है (Payment ID <b>{pid}</b>)। कंसल्टेशन का समय तय करने के लिए हम आपसे <b>{contact}</b> पर संपर्क करेंगे।',
    doneBtn: 'ठीक है',
    qrAlt: '₹{fee} UPI से भरने के लिए QR कोड स्कैन करें'
  }
};

let lang = 'en';

const escapeHtml = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
function t(key, vars = {}) {
  let s = (I18N[lang] && I18N[lang][key]) ?? I18N.en[key] ?? key;
  for (const [k, v] of Object.entries({ fee: CONFIG.fee, ...vars })) s = s.replaceAll(`{${k}}`, escapeHtml(v));
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
  tabs.forEach(tb => {
    const on = tb === active;
    tb.setAttribute('aria-selected', on);
    tb.tabIndex = on ? 0 : -1;
    document.getElementById(tb.getAttribute('aria-controls')).hidden = !on;
  });
}

/* ---------- Storage & validation ---------- */

const store = {
  get() { try { return JSON.parse(localStorage.getItem(CONFIG.storageKey)); } catch { return null; } },
  set(v) { try { localStorage.setItem(CONFIG.storageKey, JSON.stringify(v)); } catch {} },
  clear() { try { localStorage.removeItem(CONFIG.storageKey); } catch {} }
};

const validators = {
  name(v) {
    if (!v) return null;
    return /^[\p{L}\p{M}][\p{L}\p{M} .'-]{1,59}$/u.test(v) ? true : t('errName');
  },
  phone(v) {
    if (!v) return null;
    const d = v.replace(/[\s()-]/g, '');
    if (/^(\+?91|0)?[6-9]\d{9}$/.test(d)) return true;
    if (/^\+\d{8,15}$/.test(d)) return true;
    return t('errPhone');
  },
  email(v) {
    if (!v) return null;
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? true : t('errEmail');
  }
};

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
    input.setAttribute('aria-invalid', typeof res === 'string');
    $('.err', field).textContent = typeof res === 'string' ? res : '';
    if (typeof res === 'string') hasError = true;
  }
  return { hasError };
}

/* ---------- Network helpers ---------- */

async function postJson(url, init, timeoutMs) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(url, { method: 'POST', ...init, signal: ctrl.signal });
    const json = await res.json().catch(() => ({}));
    return { res, json };
  } finally {
    clearTimeout(timer);
  }
}

async function sendToInbox(data, timeoutMs = 12000) {
  const body = new URLSearchParams({ _template: 'table', _captcha: 'false', ...data });
  const { res, json } = await postJson(`https://formsubmit.co/ajax/${CONFIG.email}`, {
    headers: { Accept: 'application/json' }, body, keepalive: true
  }, timeoutMs);
  if (!res.ok || String(json.success) !== 'true') throw new Error(json.message || 'Send failed');
  return json;
}

async function api(path, data, timeoutMs = 15000) {
  const { res, json } = await postJson(CONFIG.razorpay.apiBase + path, {
    headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data)
  }, timeoutMs);
  if (!res.ok) throw Object.assign(new Error(json.error || `HTTP ${res.status}`), { status: res.status });
  return json;
}

function contactLine(b) {
  return [b.phone, b.email].filter(Boolean).join(' / ') || b.name;
}

function emailPayload(b, status, extra = {}) {
  return {
    _subject: `${status}: ${b.name || b.phone || b.email} (${b.id})`,
    'Booking ID': b.id,
    Status: status,
    Name: b.name || '-',
    Phone: b.phone || '-',
    Email: b.email || '-',
    Concern: b.concern || '-',
    Language: b.lang === 'hi' ? 'Hindi' : 'English',
    'Submitted at': new Date(b.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    ...extra
  };
}

/* ---------- Modal ---------- */

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

function renderBookingText() {
  if (!booking) return;
  $('#paySub').innerHTML = t('paySub', { id: booking.id });
  const first = booking.name ? booking.name.split(' ')[0] : '';
  $('#doneTitle').innerHTML = t('doneTitle', { name: first ? (lang === 'hi' ? `, ${first} जी` : `, ${first}`) : '' });
  $('#doneSub').innerHTML = booking.paymentId
    ? t('doneSubPaid', { id: booking.id, pid: booking.paymentId, contact: contactLine(booking) })
    : t('doneSub', { id: booking.id, contact: contactLine(booking) });
  $$('.manual-only', steps.done).forEach(el => { el.hidden = !!booking.paymentId; });
}

function applyLang() {
  modalBox.setAttribute('lang', lang);
  $$('[data-i18n]', modal).forEach(el => { el.innerHTML = t(el.dataset.i18n); });
  $$('[data-i18n-ph]', modal).forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
  $('.qr', modal).alt = t('qrAlt');
  $$('.ig-link', modal).forEach(a => { a.href = CONFIG.instagramDm; });
  langSwitch.textContent = t('switchTo');
  renderBookingText();
  if (currentStep === 'details' && $$('.field.invalid', steps.details).length) checkDetails(steps.details);
  ['detailsMsg', 'confirmMsg', 'payMsg'].forEach(id => { $('#' + id).textContent = ''; });
  if (booking && booking.paymentId) $('#payMsg').innerHTML = t('verifyFail', { pid: booking.paymentId });
  else if (checkoutFailed) $('#payMsg').innerHTML = t('rzpUnavailable');
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
  modalBox.scrollTop = 0;
  const first = steps[name].querySelector('input, button.lang-option, a.btn, button.btn:not([hidden])');
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
document.addEventListener('keydown', e => {
  if (modal.hidden) return;
  if (e.key === 'Escape') { closeModal(); return; }
  if (e.key !== 'Tab') return;
  // Keep keyboard focus inside the dialog.
  const focusable = $$('a[href], button:not([disabled]), input:not([disabled]), summary', modalBox)
    .filter(el => el.offsetParent !== null);
  if (!focusable.length) return;
  const first = focusable[0], last = focusable[focusable.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
});

function makeId() {
  const ts = Date.now().toString(36).slice(-4).toUpperCase();
  const r = Math.random().toString(36).slice(2, 4).padEnd(2, '0').toUpperCase();
  return `DS-${ts}${r}`;
}

/* ---------- Pay step ---------- */

// Is the payment server reachable? Checked once, before the patient clicks Pay.
// A GET on the order endpoint answers 405 (POST only) when the API is deployed.
let onlineAvailable = null;
let onlineCheck = null;
function checkOnline() {
  if (!CONFIG.razorpay.enabled || location.protocol === 'file:') return Promise.resolve(onlineAvailable = false);
  return onlineCheck ||= fetch(CONFIG.razorpay.apiBase + '/api/create-order', { method: 'GET', cache: 'no-store' })
    .then(res => res.status === 405)
    .catch(() => false)
    .then(ok => (onlineAvailable = ok));
}

// Show exactly one way to pay: Razorpay (with the QR folded away as a backup), or the QR alone.
function setPayMode(online, notice = false) {
  $('#rzpBlock').hidden = !online;
  const manual = $('#manualPay');
  manual.open = !online;
  manual.classList.toggle('only', !online);
  // Only explain the fallback when a checkout attempt actually failed; otherwise show the QR quietly.
  if (!online && !(booking && booking.paymentId)) showPayMsg(notice ? t('rzpUnavailable') : '');
}

function preparePayStep() {
  const { pa, pn, aid } = CONFIG.upi;
  const params = new URLSearchParams({ pa, pn, am: CONFIG.fee.toFixed(2), cu: 'INR', tn: `Appt ${booking.id}`, aid });
  $('#upiLink').href = `upi://pay?${params.toString().replace(/\+/g, '%20')}`;
  $('#paySub').innerHTML = t('paySub', { id: booking.id });
  $('#payMsg').textContent = '';
  resetRzpBtn();
  setPayMode(onlineAvailable !== false);
  checkOnline().then(ok => {
    if (!ok && currentStep === 'pay' && !(booking && booking.paymentId)) setPayMode(false);
  });
  // Paid earlier but the page closed before verification finished: don't charge again.
  if (booking.paymentId) {
    $('#rzpBtn').hidden = true;
    showPayMsg(t('verifyFail', { pid: booking.paymentId }));
  } else {
    $('#rzpBtn').hidden = false;
  }
}

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

  if (hasError) {
    msg.textContent = t('fixFields');
    const bad = $('.field.invalid input', form);
    if (bad) bad.focus();
    return;
  }

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

  store.set(booking);
  preparePayStep();
  showStep('pay');

  const sent = booking;
  sendToInbox(emailPayload(sent, 'New booking, payment pending'))
    .then(() => {
      sent.detailsSent = true;
      if (booking && booking.id === sent.id) store.set(booking);
    })
    .catch(err => {
      console.warn('Details email failed, will retry on confirm:', err);
    });
});

function notifyWhatsApp(b) {
  const { phone, apikey } = CONFIG.whatsapp;
  if (!phone || !apikey || !b || b.waSent) return;
  const lines = [
    'New booking: Pay button clicked',
    'Booking ID: ' + b.id,
    'Name: ' + (b.name || '-'),
    'Phone: ' + (b.phone || '-'),
    'Email: ' + (b.email || '-'),
    'Concern: ' + (b.concern || '-'),
    'Language: ' + (b.lang === 'hi' ? 'Hindi' : 'English'),
    'Time: ' + new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
  ];
  const url = 'https://api.callmebot.com/whatsapp.php?phone=' + encodeURIComponent(phone) +
    '&text=' + encodeURIComponent(lines.join('\n')) + '&apikey=' + encodeURIComponent(apikey);
  b.waSent = true;
  store.set(b);
  fetch(url, { mode: 'no-cors', keepalive: true }).catch(() => { b.waSent = false; store.set(b); });
}

$('#upiLink').addEventListener('click', () => notifyWhatsApp(booking));

/* ---------- Razorpay checkout ---------- */

let checkoutLoader = null;
function loadCheckout() {
  if (window.Razorpay) return Promise.resolve();
  return checkoutLoader ||= new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = CONFIG.razorpay.checkoutSrc;
    s.async = true;
    s.onload = resolve;
    s.onerror = () => { checkoutLoader = null; s.remove(); reject(new Error('Checkout script failed to load')); };
    document.head.appendChild(s);
  });
}

function resetRzpBtn() {
  const btn = $('#rzpBtn');
  btn.disabled = false;
  btn.innerHTML = t('rzpBtn');
}

function showPayMsg(html) {
  const msg = $('#payMsg');
  msg.innerHTML = html;
}

let checkoutFailed = false;
function fallbackToManual() {
  checkoutFailed = true;
  resetRzpBtn();
  setPayMode(false, true);
}

async function startRazorpay() {
  if (!booking) return;
  const b = booking;
  const btn = $('#rzpBtn');
  showPayMsg('');
  btn.disabled = true;
  btn.textContent = t('opening');
  notifyWhatsApp(b);

  let order;
  try {
    [order] = await Promise.all([
      b.order || api('/api/create-order', {
        booking: { id: b.id, name: b.name, phone: b.phone, email: b.email, concern: b.concern, lang: b.lang }
      }),
      loadCheckout()
    ]);
  } catch (err) {
    console.warn('Razorpay unavailable:', err);
    fallbackToManual();
    return;
  }
  if (booking !== b) return;
  b.order = order;
  store.set(b);

  let completed = false;
  const rzp = new window.Razorpay({
    key: order.keyId,
    order_id: order.orderId,
    amount: order.amount,
    currency: order.currency,
    name: CONFIG.razorpay.merchantName,
    description: `Online consultation · ${b.id}`,
    image: new URL('assets/nidhi.png', location.href).href,
    prefill: { name: b.name, contact: b.phone, email: b.email },
    notes: { booking_id: b.id },
    theme: { color: CONFIG.razorpay.themeColor },
    modal: {
      confirm_close: true,
      ondismiss: () => {
        if (completed) return;
        resetRzpBtn();
        showPayMsg(t('payCancelled'));
      }
    },
    handler: resp => { completed = true; onPaymentSuccess(b, resp); }
  });
  rzp.on('payment.failed', r => {
    const reason = r && r.error && r.error.description ? `: ${r.error.description}` : '';
    showPayMsg(t('payFailed', { reason }));
  });
  rzp.open();
}

async function onPaymentSuccess(b, resp) {
  const btn = $('#rzpBtn');
  btn.disabled = true;
  btn.textContent = t('verifying');

  b.paymentId = resp.razorpay_payment_id;
  store.set(b);

  // verified: true = confirmed by server, false = rejected, null = server unreachable.
  let verified = null;
  let method = '';
  let emailed = false;
  try {
    const v = await api('/api/verify-payment', {
      orderId: resp.razorpay_order_id,
      paymentId: resp.razorpay_payment_id,
      signature: resp.razorpay_signature
    });
    verified = v.verified === true;
    method = v.method || '';
    emailed = v.emailed === true;
  } catch (err) {
    console.warn('Verification request failed:', err);
    verified = err.status === 400 ? false : null;
  }

  if (verified === false) {
    resetRzpBtn();
    $('#rzpBtn').hidden = true;
    showPayMsg(t('verifyFail', { pid: b.paymentId }));
    sendToInbox(emailPayload(b, 'CHECK: online payment not verified', {
      'Razorpay Payment ID': b.paymentId,
      'Razorpay Order ID': resp.razorpay_order_id
    })).catch(() => {});
    return;
  }

  // Payment went through. The server already emailed the confirmation when email is configured;
  // otherwise fall back to the FormSubmit inbox (keepalive survives page close).
  if (!emailed) sendToInbox(emailPayload(b, verified ? 'PAID online, schedule consultation' : 'PAID online (verify in Razorpay dashboard)', {
    'Razorpay Payment ID': b.paymentId,
    'Razorpay Order ID': resp.razorpay_order_id,
    'Payment method': method || '-',
    Verified: verified ? 'Yes (signature + status checked)' : 'Pending: server was unreachable',
    'Earlier details email delivered': b.detailsSent ? 'Yes' : 'No (this is the first)'
  })).catch(err => console.warn('Paid email failed:', err));

  store.clear();
  if (booking !== b) return;
  resetRzpBtn();
  renderBookingText();
  showStep('done');
}

$('#rzpBtn').addEventListener('click', startRazorpay);

/* ---------- Manual UPI flow ---------- */

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
    await sendToInbox(emailPayload(booking, 'Payment done (manual UPI), confirm booking', {
      'UPI Transaction ID / UTR': utr || 'Not provided',
      'First details email delivered': booking.detailsSent ? 'Yes' : 'No (this is the first)'
    }));
  } catch (err) {
    btn.disabled = false; btn.textContent = t('confirmBtn');
    msg.textContent = t('sendFail');
    return;
  }

  btn.disabled = false; btn.textContent = t('confirmBtn');
  applyLang();
  store.clear();
  showStep('done');
});

/* ---------- Init ---------- */

(function init() {
  checkOnline();
  try { lang = localStorage.getItem(CONFIG.langKey) === 'hi' ? 'hi' : 'en'; } catch {}
  const saved = getPendingBooking();
  if (saved) { booking = saved; lang = saved.lang || lang; }
  applyLang();
  if (booking) { preparePayStep(); openModal('pay'); }
})();
