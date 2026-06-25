/**
 * Login / logout / one-time setup — mirrors login.php, logout.php, setup.php.
 */
const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../config/db');
const { csrfCheck, logActivity } = require('../middleware/auth');

const router = express.Router();

// ---- Login ----
router.get('/login', (req, res) => {
  if (req.session.user) return res.redirect('dashboard');
  res.render('login', { error: '', layout: false });
});

router.post('/login', csrfCheck, async (req, res) => {
  const email = (req.body.email || '').trim();
  const pass = req.body.password || '';

  const [rows] = await db.execute(
    'SELECT * FROM users WHERE email = ? AND is_active = 1 LIMIT 1',
    [email]
  );
  const user = rows[0];

  // bcryptjs compares PHP password_hash() bcrypt hashes (incl. $2y$ prefix).
  if (user && bcrypt.compareSync(pass, user.password)) {
    req.session.regenerate((err) => {
      if (err) return res.status(500).send('Session error.');
      req.session.user = { id: Number(user.id), name: user.name, role: user.role };
      logActivity(req, 'Logged in').catch(() => {});
      res.redirect('dashboard');
    });
    return;
  }
  res.render('login', { error: 'Invalid email or password.', layout: false });
});

// ---- Logout ----
router.get('/logout', (req, res) => {
  req.session.destroy(() => res.redirect('login'));
});

// ---- One-time setup: create the first Admin ----
router.get('/setup', async (req, res) => {
  const [[{ cnt }]] = await db.query("SELECT COUNT(*) AS cnt FROM users WHERE role = 'Admin'");
  if (cnt > 0) {
    return res.send('Setup already completed. Remove the /setup route (or this app) once your admin exists.');
  }
  res.render('setup', { done: false, error: '', layout: false });
});

router.post('/setup', async (req, res) => {
  const [[{ cnt }]] = await db.query("SELECT COUNT(*) AS cnt FROM users WHERE role = 'Admin'");
  if (cnt > 0) {
    return res.send('Setup already completed.');
  }

  const name = (req.body.name || '').trim();
  const email = (req.body.email || '').trim();
  const pass = req.body.password || '';

  if (name === '' || email === '' || pass.length < 8) {
    return res.render('setup', {
      done: false,
      error: 'Name, a valid email, and a password of at least 8 characters are required.',
      layout: false,
    });
  }

  const hash = bcrypt.hashSync(pass, 10);
  await db.execute(
    "INSERT INTO users (name, email, password, role, department) VALUES (?, ?, ?, 'Admin', 'Management')",
    [name, email, hash]
  );
  res.render('setup', { done: true, error: '', layout: false });
});

module.exports = router;
