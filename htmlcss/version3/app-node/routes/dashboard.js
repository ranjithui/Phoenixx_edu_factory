/**
 * Dashboard — metric cards. Mirrors dashboard.php.
 */
const express = require('express');
const db = require('../config/db');
const { requireLogin, isManager } = require('../middleware/auth');

const router = express.Router();

router.get('/dashboard', requireLogin, async (req, res) => {
  const uid = req.session.user.id;

  // Managers/Admins see org-wide totals; Employees see only their tasks.
  let totals;
  if (isManager(req)) {
    const [rows] = await db.query(`
      SELECT
        COUNT(*)                                             AS total,
        SUM(status = 'Pending')                              AS pending,
        SUM(status = 'In Progress')                          AS in_progress,
        SUM(status = 'Completed')                            AS completed,
        SUM(status <> 'Completed' AND due_date < CURDATE())  AS overdue
      FROM tasks
    `);
    totals = rows[0];
  } else {
    const [rows] = await db.execute(`
      SELECT
        COUNT(*)                                             AS total,
        SUM(status = 'Pending')                              AS pending,
        SUM(status = 'In Progress')                          AS in_progress,
        SUM(status = 'Completed')                            AS completed,
        SUM(status <> 'Completed' AND due_date < CURDATE())  AS overdue
      FROM tasks t
      JOIN task_assignees a ON a.task_id = t.id
      WHERE a.user_id = ?
    `, [uid]);
    totals = rows[0];
  }

  // "Assigned to me" count (for everyone).
  const [[{ cnt }]] = await db.execute(`
    SELECT COUNT(*) AS cnt FROM task_assignees a
    JOIN tasks t ON t.id = a.task_id
    WHERE a.user_id = ? AND t.status <> 'Completed'
  `, [uid]);
  const assignedToMe = Number(cnt);

  const num = (v) => Number(v || 0);
  const cards = [
    ['Total Tasks', num(totals.total),       'secondary', 'list-task'],
    ['Pending',     num(totals.pending),     'warning',   'hourglass'],
    ['In Progress', num(totals.in_progress), 'info',      'arrow-repeat'],
    ['Completed',   num(totals.completed),   'success',   'check2-circle'],
    ['Overdue',     num(totals.overdue),     'danger',    'exclamation-triangle'],
    ['Assigned to me', assignedToMe,         'primary',   'person-check'],
  ];

  res.render('dashboard', { pageTitle: 'Dashboard', active: 'dashboard', cards });
});

module.exports = router;
