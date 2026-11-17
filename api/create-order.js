// POST /api/create-order  { booking: { id, name, phone, email, concern, lang } }
// Creates a Razorpay order for the consultation fee. Booking details are stored as order
// notes so they are visible in the Razorpay dashboard even if the patient closes the page.
import { razorpay, keys, FEE_PAISE, clean, handle, httpError } from './_razorpay.js';

export default handle(async body => {
  const b = body.booking || {};
  const id = clean(b.id, 40);
  const name = clean(b.name, 60);
  const phone = clean(b.phone, 20);

  if (!/^DS-[A-Z0-9]{3,12}$/.test(id)) throw httpError(400, 'Invalid booking ID');
  if (!name || !/^\+?[\d\s()-]{8,20}$/.test(phone)) throw httpError(400, 'Name and phone are required');

  const order = await razorpay('/orders', {
    method: 'POST',
    body: {
      amount: FEE_PAISE,
      currency: 'INR',
      receipt: id,
      notes: {
        booking_id: id,
        name,
        phone,
        email: clean(b.email, 100) || '-',
        concern: clean(b.concern, 200) || '-',
        language: b.lang === 'hi' ? 'Hindi' : 'English'
      }
    }
  });

  return { orderId: order.id, amount: order.amount, currency: order.currency, keyId: keys().keyId };
});
