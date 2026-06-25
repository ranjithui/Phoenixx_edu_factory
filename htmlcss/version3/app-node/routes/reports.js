/**
 * Reports — overall + per-employee + department-wise. Mirrors reports.php.
 */
const express = require('express');
const db = require('../config/db');
const { requireRole } = require('../middleware/auth');

const router = express.Router();

router.get('/reports', requireRole(['Admin', 'Manager']), async (req, res) => {
  // Completed vs pending vs overdue, overall.
  const [[overall]] = await db.query(`
    SELECT
      SUM(status='Completed')                            AS completed,
      SUM(status='Pending')                              AS pending,
      SUM(status='In Progress')                          AS in_progress,
      SUM(status<>'Completed' AND due_date < CURDATE())  AS overdue
    FROM tasks
  `);

  // Per-employee productivity (tasks assigned to them).
  const [byEmployee] = await db.query(`
    SELECT u.name, u.department,
           COUNT(t.id)                       AS total,
           SUM(t.status='Completed')         AS completed,
           SUM(t.status<>'Completed' AND t.due_date < CURDATE()) AS overdue
    FROM users u
    LEFT JOIN task_assignees a ON a.user_id = u.id
    LEFT JOIN tasks t ON t.id = a.task_id
    WHERE u.role <> 'Admin'
    GROUP BY u.id
    ORDER BY completed DESC
  `);

  // Department-wise.
  const [byDept] = await db.query(`
    SELECT COALESCE(NULLIF(u.department,''),'—') AS dept,
           COUNT(t.id) AS total,
           SUM(t.status='Completed') AS completed
    FROM users u
    LEFT JOIN task_assignees a ON a.user_id = u.id
    LEFT JOIN tasks t ON t.id = a.task_id
    GROUP BY dept ORDER BY total DESC
  `);

  res.render('reports', {
    pageTitle: 'Reports', active: 'reports', overall, byEmployee, byDept,
  });
});

module.exports = router;
