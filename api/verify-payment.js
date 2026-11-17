// POST /api/verify-payment  { orderId, paymentId, signature }
// Checks the checkout signature (HMAC-SHA256 of "order_id|payment_id" with the key secret),
// confirms with Razorpay that the payment belongs to the order and has gone through,
// then emails the confirmation to NOTIFY_EMAIL.
import { razorpay, signatureValid, clean, handle, httpError, sendEmail, FEE_PAISE } from './_razorpay.js';

export default handle(async body => {
  const orderId = clean(body.orderId, 40);
  const paymentId = clean(body.paymentId, 40);
  const signature = clean(body.signature, 128);

  if (!orderId || !paymentId || !signature) throw httpError(400, 'Missing payment details');
  if (!signatureValid(orderId, paymentId, signature)) throw httpError(400, 'Invalid payment signature');

  const payment = await razorpay(`/payments/${encodeURIComponent(paymentId)}`);
  if (payment.order_id !== orderId) throw httpError(400, 'Payment does not match this order');

  const verified = ['authorized', 'captured'].includes(payment.status) && payment.amount >= FEE_PAISE;

  let emailed = false;
  if (verified) {
    // Booking details were saved on the order when it was created.
    const order = await razorpay(`/orders/${encodeURIComponent(orderId)}`).catch(() => ({}));
    const n = order.notes || {};
    const email = n.email && n.email !== '-' ? n.email : '';
    emailed = await sendEmail({
      subject: `Payment received ₹${payment.amount / 100}: ${n.name || 'Patient'} (${n.booking_id || orderId})`,
      replyTo: email || undefined,
      rows: [
        ['Booking ID', n.booking_id || '-'],
        ['Name', n.name || '-'],
        ['Phone', n.phone || '-'],
        ['Email', email || '-'],
        ['Concern', n.concern || '-'],
        ['Language', n.language || '-'],
        ['Amount', `₹${(payment.amount / 100).toFixed(2)}`],
        ['Payment method', payment.method || '-'],
        ['Payment status', payment.status],
        ['Razorpay Payment ID', paymentId],
        ['Razorpay Order ID', orderId],
        ['Paid at', new Date((payment.created_at || Date.now() / 1000) * 1000).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })]
      ]
    });
  }

  return {
    verified,
    status: payment.status,
    paymentId,
    orderId,
    amount: payment.amount,
    method: payment.method || '',
    emailed
  };
});
