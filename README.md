# Aastha Rai — Portfolio (Next.js + Node/Express)

Full conversion of the original single-file HTML/CSS/JS portfolio into:

- **`/frontend`** — Next.js 14 (App Router) app
- **`/backend`** — Node.js + Express API for the contact form

## Quick start

Open two terminals.

**Terminal 1 — backend**
```bash
cd backend
npm install
cp .env.example .env   # fill in SMTP details, or leave blank to just log submissions
npm run dev
```
Runs on `http://localhost:5000`.

**Terminal 2 — frontend**
```bash
cd frontend
npm install
cp .env.local.example .env.local
npm run dev
```
Runs on `http://localhost:3000`.

Open `http://localhost:3000` in your browser — the site should look and behave exactly like
the original single HTML file, and the Contact section's form now actually sends messages
through your Node backend.

## What carried over 1:1

- Full purple/dark design system (CSS variables, typography, layout) — `frontend/app/globals.css`
- Animated **Beams** background — ported from the React Three Fiber `Beams.jsx` you shared
  into a plain Three.js client component (`frontend/components/BeamsBackground.js`)
- The pure **HTML/CSS illustrated avatar** — no 3D/JS dependency, still built entirely from
  styled `<div>`s (`frontend/components/AvatarCharacter.js`)
- Scroll-reveal animations and animated skill bars — now a reusable `useReveal` hook
- Resume download buttons (nav, hero, contact)

## What's new

- A real **Contact form** (name / email / message) that POSTs to `POST /api/contact` on the
  backend, which validates the input, saves it to `backend/data/contact-submissions.json`,
  and emails it via Nodemailer (if SMTP is configured).

## Deploying

- **Frontend**: works out of the box on Vercel. Set `NEXT_PUBLIC_API_URL` in the project's
  environment variables to your deployed backend URL.
- **Backend**: deploy anywhere that runs Node (Render, Railway, Fly.io, a VPS, etc.). Set the
  same environment variables from `.env.example`, and set `CORS_ORIGIN` to your deployed
  frontend URL.
