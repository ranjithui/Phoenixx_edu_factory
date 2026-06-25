/**
 * Employees — list, add user (Admin only). Mirrors employees.php.
 */
const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../config/db');
const { requireRole, csrfCheck, isAdmin, logActivity } = require('../middleware/auth');

const router = express.Router();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.get('/employees', requireRole(['Admin', 'Manager']), async (req, res) => {
  const [users] = await db.query(
    'SELECT id,name,email,role,department,is_active,created_at FROM users ORDER BY name'
  );
  res.render('employees', { pageTitle: 'Employees', active: 'employees', users, msg: '' });
});

router.post('/employees', requireRole(['Admin', 'Manager']), csrfCheck, async (req, res) => {
  let msg = '';

  if ((req.body.do || '') === 'create') {
    if (!isAdmin(req)) {
      return res.status(403).send('Access denied — you do not have permission to view this page.');
    }
    const name = (req.body.name || '').trim();
    const email = (req.body.email || '').trim();
    const role = req.body.role || 'Employee';
    const dept = (req.body.department || '').trim();
    const pass = req.body.password || '';

    if (name && EMAIL_RE.test(email) && pass.length >= 8
        && ['Admin', 'Manager', 'Employee'].includes(role)) {
      try {
        const hash = bcrypt.hashSync(pass, 10);
        await db.execute(
          'INSERT INTO users (name,email,password,role,department) VALUES (?,?,?,?,?)',
          [name, email, hash, role, dept]
        );
        await logActivity(req, `Created user: ${email}`);
        msg = 'Employee added.';
      } catch (err) {
        msg = 'Could not add — email may already exist.';
      }
    } else {
      msg = 'Check the fields (valid email + password of 8+ chars required).';
    }
  }

  const [users] = await db.query(
    'SELECT id,name,email,role,department,is_active,created_at FROM users ORDER BY name'
  );
  res.render('employees', { pageTitle: 'Employees', active: 'employees', users, msg });
});

module.exports = router;
