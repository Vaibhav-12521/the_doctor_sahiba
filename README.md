# @the_doctor_sahiba

**Dr. Nidhi Singh**
🌸 *Gynecology | Pregnancy Care | PCOD Management | Women’s Wellness*
Homeopathic Physician practicing **Homeopathy with Holistic Healing**

🎓 C.G.O. (Lucknow) Certified
Dedicated to providing natural, personalized, and compassionate care for women at every stage of life.
Focused on hormonal balance, healthy pregnancy, and overall well-being through holistic treatment.

🤝 DM for Collaboration / Paid Promotions
❤️ For Appointments, tap below ⬇️



---
## Connect With Dr. Nidhi Singh
<p align="center">
  <a href="https://www.youtube.com/@the_doctor_sahiba" target="_blank" rel="noopener">
    <img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="YouTube Channel"/>
  </a>
  &nbsp;
  <a href="https://www.instagram.com/the_doctor_sahiba/" target="_blank" rel="noopener">
    <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram Profile"/>
  </a>
</p>

<p align="center">
  <strong>Dr. Nidhi Singh</strong> is dedicated to women’s wellness, health, and beauty.  
  She inspires women to heal from within as a <strong>Gynecologist, Homeopath, and Wellness Educator</strong>.
</p>

<p align="center">
  👉 Follow Dr. Nidhi Singh on <strong>YouTube</strong> and <strong>Instagram</strong> for expert tips, inspiration, and wellness updates.
</p>

---

Feel free to star ⭐ the repo if you find it helpful!

<p align="center">
  <img src="https://visitor-badge.laobi.icu/badge?page_id=second-largest-problem" alt="visitor badge"/>
</p>






---

## Website & online payments (Razorpay)

The booking page (`index.html`, `script.js`, `styles.css`) takes payments through **Razorpay Checkout**
(UPI, cards, netbanking, wallets). If online checkout is unavailable, it falls back to the manual UPI QR
and Instagram screenshot flow.

Two serverless functions in `api/` keep the Razorpay secret off the browser:

| Endpoint | What it does |
| --- | --- |
| `POST /api/create-order` | Creates a Razorpay order for the fee (amount set on the server) and saves the patient's name, phone and concern as order notes |
| `POST /api/verify-payment` | Checks the checkout signature (HMAC-SHA256) and confirms with Razorpay that the payment went through |

### Setup (Vercel)

1. Create API keys in the Razorpay Dashboard → **Account & Settings → API Keys** (start with **Test mode** keys).
2. Import this repo into [Vercel](https://vercel.com/new). No build step is needed.
3. In Vercel → Project → **Settings → Environment Variables**, add the values from `.env.example`:
   `RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET`, and optionally `CONSULT_FEE_PAISE` (default `29900` = ₹299).
4. Deploy, then make a test booking with Razorpay's [test UPI IDs / cards](https://razorpay.com/docs/payments/payments/test-card-details/).
5. Switch to **Live** keys once KYC is approved.

Local development: `npm i -g vercel`, copy `.env.example` to `.env`, then run `vercel dev`.

**Changing the fee:** update `CONSULT_FEE_PAISE` (server, the amount actually charged) and `CONFIG.fee` in `script.js` (the price shown on the page).

**Static-only hosting (e.g. GitHub Pages):** the `/api` functions won't run there. Either set `CONFIG.razorpay.apiBase`
to your deployed API URL, or set `CONFIG.razorpay.enabled = false` to use only the UPI QR flow.

Every paid booking appears in the Razorpay Dashboard → **Payments**, with the booking ID, name and phone in the notes,
and a "PAID online" email is sent to the inbox as before.
