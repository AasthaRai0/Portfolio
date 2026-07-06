# Aastha Rai — Portfolio Backend (Node + Express)

Small Express API that powers the portfolio's contact form.

## Endpoints

| Method | Path            | Description                                             |
|--------|-----------------|----------------------------------------------------------|
| GET    | `/api/health`   | Health check — also reports whether SMTP is configured   |
| POST   | `/api/contact`  | Accepts `{ name, email, message }`, saves + emails it     |

Every submission is saved to `backend/data/contact-submissions.json` regardless of whether
email delivery is configured, so nothing is lost.

## Setup

```bash
cd backend
npm install
cp .env.example .env
```

Fill in `.env`:
- `CORS_ORIGIN` — the URL of your running Next.js frontend
- `CONTACT_RECEIVER_EMAIL` — where you want to receive messages
- `SMTP_*` — credentials for sending the notification email

If you leave the `SMTP_*` values blank, the server still runs — it just logs and stores
submissions instead of emailing them, so the form won't break during local development.

### Using Gmail for SMTP

1. Turn on 2-Step Verification on the Google account.
2. Create an [App Password](https://myaccount.google.com/apppasswords).
3. Use that 16-character password as `SMTP_PASS` (not the normal account password).

## Run

```bash
npm start        # production
npm run dev       # with nodemon, auto-restarts on changes
```

Server starts on `http://localhost:5000` by default.
