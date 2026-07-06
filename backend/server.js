require('dotenv').config();

const fs = require('fs');
const path = require('path');
const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = (process.env.CORS_ORIGIN || 'http://localhost:3000')
  .split(',')
  .map((origin) => origin.trim());

app.use(
  cors({
    origin: (origin, callback) => {
      // allow requests with no origin (curl, mobile apps, server-to-server)
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error('Not allowed by CORS'));
    },
  })
);
app.use(express.json());

// Basic abuse protection on the contact endpoint
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message: { error: 'Too many requests. Please try again later.' },
});

// --- storage helpers -------------------------------------------------
// Every submission is appended to a local JSON file as a simple audit
// trail, independent of whether the notification email succeeds.
const DATA_DIR = path.join(__dirname, 'data');
const SUBMISSIONS_FILE = path.join(DATA_DIR, 'contact-submissions.json');

function ensureStorage() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(SUBMISSIONS_FILE)) fs.writeFileSync(SUBMISSIONS_FILE, '[]', 'utf-8');
}

function saveSubmission(entry) {
  ensureStorage();
  const existing = JSON.parse(fs.readFileSync(SUBMISSIONS_FILE, 'utf-8'));
  existing.push(entry);
  fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify(existing, null, 2), 'utf-8');
}

// --- mail helper -------------------------------------------------------
function buildTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    return null; // no SMTP configured — caller falls back to log-only mode
  }
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
}

const transporter = buildTransporter();

// --- routes -------------------------------------------------------------
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', mailerConfigured: Boolean(transporter) });
});

app.post('/api/contact', contactLimiter, async (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'name, email, and message are all required.' });
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' });
  }

  const submission = {
    name: String(name).slice(0, 200),
    email: String(email).slice(0, 200),
    message: String(message).slice(0, 5000),
    receivedAt: new Date().toISOString(),
  };

  try {
    saveSubmission(submission);
  } catch (err) {
    console.error('Failed to persist submission:', err);
    // not fatal — still try to send the email below
  }

  if (!transporter) {
    console.log('[contact] SMTP not configured — logging submission instead:', submission);
    return res.status(200).json({
      ok: true,
      message: 'Message received (email delivery is not configured on the server yet).',
    });
  }

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL || process.env.SMTP_USER,
      replyTo: submission.email,
      subject: `New portfolio message from ${submission.name}`,
      text: `From: ${submission.name} <${submission.email}>\n\n${submission.message}`,
      html: `
        <p><strong>From:</strong> ${submission.name} (${submission.email})</p>
        <p>${submission.message.replace(/\n/g, '<br/>')}</p>
      `,
    });
    return res.status(200).json({ ok: true, message: 'Message sent successfully.' });
  } catch (err) {
    console.error('Failed to send email:', err);
    return res.status(502).json({ error: 'Message was saved but the email notification failed to send.' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
  if (!transporter) {
    console.log('SMTP is not configured — contact form submissions will only be logged/stored locally.');
  }
});
