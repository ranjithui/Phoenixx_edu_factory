/**
 * Phoenixx Task Manager — Node.js / Express entry point.
 * Node rewrite of the PHP /app module; uses the SAME MySQL database & schema.
 */
require('dotenv').config();
const path = require('path');
const express = require('express');
const session = require('express-session');

const { localsMiddleware } = require('./middleware/auth');

const app = express();

// Views (EJS, server-rendered to mirror the PHP pages).
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Body parsing for HTML forms.
app.use(express.urlencoded({ extended: true }));

// Sessions (default MemoryStore — fine for small teams; swap for a DB/Redis
// store if you run multiple processes).
app.use(session({
  name: 'phoenixx.sid',
  secret: process.env.SESSION_SECRET || 'dev-insecure-secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 1000 * 60 * 60 * 8, // 8 hours
    // secure: true,            // enable when served over HTTPS
  },
}));

// Expose APP_NAME, current user, CSRF token & helpers to all views.
app.use(localsMiddleware);

// Routes.
app.use('/', require('./routes/auth'));
app.use('/', require('./routes/dashboard'));
app.use('/', require('./routes/tasks'));
app.use('/', require('./routes/employees'));
app.use('/', require('./routes/reports'));

// Root → dashboard (or login).
app.get('/', (req, res) => res.redirect(req.session.user ? 'dashboard' : 'login'));

// 404.
app.use((req, res) => res.status(404).send('Not found.'));

// Error handler.
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Server error.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`${process.env.APP_NAME || 'Phoenixx Task Manager'} running on http://localhost:${PORT}`);
});
