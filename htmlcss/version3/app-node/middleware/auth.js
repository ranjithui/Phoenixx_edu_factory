/**
 * Session + auth guard — Node.js equivalent of includes/auth.php.
 *
 * The user is stored in req.session.user = { id, name, role }.
 * `res.locals` exposes helpers to EJS templates (e, current*, is_admin...).
 */
const crypto = require('crypto');
const db = require('../config/db');

const APP_NAME = process.env.APP_NAME || 'Phoenixx Task Manager';

/** Escape output to prevent XSS — equivalent of PHP e(). */
function e(v) {
  if (v === null || v === undefined) return '';
  return String(v)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/** Role helpers based on the current session. */
function roleOf(req) { return req.session?.user?.role || ''; }
function isAdmin(req) { return roleOf(req) === 'Admin'; }
function isManager(req) { return ['Admin', 'Manager'].includes(roleOf(req)); }

/**
 * Expose APP_NAME, the current user and helpers to every view, plus a CSRF
 * token. Mount this app-wide (app.use(localsMiddleware)).
 */
function localsMiddleware(req, res, next) {
  const user = req.session?.user || null;
  res.locals.APP_NAME = APP_NAME;
  res.locals.e = e;
  res.locals.user = user;
  res.locals.currentName = user?.name || '';
  res.locals.currentRole = user?.role || '';
  res.locals.isAdmin = isAdmin(req);
  res.locals.isManager = isManager(req);
  res.locals.csrfToken = csrfToken(req);
  res.locals.active = '';
  res.locals.pageTitle = APP_NAME;
  res.locals.year = new Date().getFullYear();
  next();
}

/** Redirect to login if there is no active session — like require_login(). */
function requireLogin(req, res, next) {
  if (!req.session?.user) return res.redirect('login');
  next();
}

/** Restrict a route to certain roles — like require_role([...]). */
function requireRole(roles) {
  return (req, res, next) => {
    if (!req.session?.user) return res.redirect('login');
    if (!roles.includes(req.session.user.role)) {
      return res.status(403).send('Access denied — you do not have permission to view this page.');
    }
    next();
  };
}

/** CSRF token helpers — token kept in the session, like PHP csrf_token(). */
function csrfToken(req) {
  if (!req.session) return '';
  if (!req.session.csrf) {
    req.session.csrf = crypto.randomBytes(32).toString('hex');
  }
  return req.session.csrf;
}

/** Middleware: verify the posted CSRF token — like csrf_check(). */
function csrfCheck(req, res, next) {
  if ((req.body?.csrf || '') !== (req.session?.csrf || '')) {
    return res.status(419).send('Session expired or invalid request. Go back and try again.');
  }
  next();
}

/** Write an entry to activity_logs — like log_activity(). */
async function logActivity(req, action, taskId = null) {
  const uid = req.session?.user?.id || 0;
  await db.execute(
    'INSERT INTO activity_logs (task_id, user_id, action) VALUES (?, ?, ?)',
    [taskId, uid, action]
  );
}

/** Today's date as 'YYYY-MM-DD' (local) — matches PHP date('Y-m-d'). */
function today() {
  const d = new Date();
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

module.exports = {
  APP_NAME,
  e,
  isAdmin,
  isManager,
  localsMiddleware,
  requireLogin,
  requireRole,
  csrfToken,
  csrfCheck,
  logActivity,
  today,
};
