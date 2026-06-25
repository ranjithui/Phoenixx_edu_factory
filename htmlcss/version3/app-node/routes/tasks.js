/**
 * Tasks — list, create (manager/admin), update status. Mirrors tasks.php.
 */
const express = require('express');
const db = require('../config/db');
const {
  requireLogin, requireRole, isManager, csrfCheck, logActivity, today,
} = require('../middleware/auth');

const router = express.Router();

// ---- Create task (managers/admins only) ----
router.post('/tasks', requireLogin, csrfCheck, async (req, res, next) => {
  if ((req.body.do || '') !== 'create') return next();
  if (!isManager(req)) {
    return res.status(403).send('Access denied — you do not have permission to view this page.');
  }

  const uid = req.session.user.id;
  const title = (req.body.title || '').trim();
  const desc = (req.body.description || '').trim();
  const priority = req.body.priority || 'Medium';
  const due = req.body.due_date ? req.body.due_date : null;

  // assigned_to may arrive as a single value or an array.
  let assignRaw = req.body.assigned_to ?? [];
  if (!Array.isArray(assignRaw)) assignRaw = [assignRaw];
  const assignTo = assignRaw.map((v) => parseInt(v, 10)).filter((n) => Number.isInteger(n) && n > 0);

  if (title !== '' && assignTo.length) {
    const conn = await db.getConnection();
    try {
      await conn.beginTransaction();
      const [result] = await conn.execute(
        'INSERT INTO tasks (title, description, priority, created_by, due_date) VALUES (?, ?, ?, ?, ?)',
        [title, desc, priority, uid, due]
      );
      const taskId = result.insertId;
      for (const aUid of assignTo) {
        await conn.execute('INSERT INTO task_assignees (task_id, user_id) VALUES (?, ?)', [taskId, aUid]);
      }
      await conn.execute(
        'INSERT INTO activity_logs (task_id, user_id, action) VALUES (?, ?, ?)',
        [taskId, uid, `Created task: ${title}`]
      );
      await conn.commit();
    } catch (err) {
      await conn.rollback();
      return next(err);
    } finally {
      conn.release();
    }
    return res.redirect('tasks?created=1');
  }
  return res.redirect('tasks');
});

// ---- Update status (assignee or manager) ----
router.post('/tasks', requireLogin, csrfCheck, async (req, res, next) => {
  if ((req.body.do || '') !== 'status') return next();

  const uid = req.session.user.id;
  const taskId = parseInt(req.body.task_id, 10);
  const status = req.body.status;

  if (['Pending', 'In Progress', 'Completed'].includes(status)) {
    let allowed = isManager(req);
    if (!allowed) {
      const [rows] = await db.execute(
        'SELECT 1 FROM task_assignees WHERE task_id = ? AND user_id = ?',
        [taskId, uid]
      );
      allowed = rows.length > 0;
    }
    if (allowed) {
      await db.execute('UPDATE tasks SET status = ? WHERE id = ?', [status, taskId]);
      await logActivity(req, `Status → ${status}`, taskId);
    }
  }
  res.redirect('tasks');
});

// ---- Task list ----
router.get('/tasks', requireLogin, async (req, res) => {
  const uid = req.session.user.id;
  let tasks;

  if (isManager(req)) {
    const [rows] = await db.query(`
      SELECT t.*, u.name AS creator,
             GROUP_CONCAT(au.name SEPARATOR ', ') AS assignees
      FROM tasks t
      JOIN users u ON u.id = t.created_by
      LEFT JOIN task_assignees a ON a.task_id = t.id
      LEFT JOIN users au ON au.id = a.user_id
      GROUP BY t.id
      ORDER BY t.created_at DESC
    `);
    tasks = rows;
  } else {
    const [rows] = await db.execute(`
      SELECT t.*, u.name AS creator,
             GROUP_CONCAT(au.name SEPARATOR ', ') AS assignees
      FROM tasks t
      JOIN users u ON u.id = t.created_by
      JOIN task_assignees mine ON mine.task_id = t.id AND mine.user_id = ?
      LEFT JOIN task_assignees a ON a.task_id = t.id
      LEFT JOIN users au ON au.id = a.user_id
      GROUP BY t.id
      ORDER BY t.created_at DESC
    `, [uid]);
    tasks = rows;
  }

  let employees = [];
  if (isManager(req)) {
    const [rows] = await db.query(
      'SELECT id, name, department FROM users WHERE is_active = 1 ORDER BY name'
    );
    employees = rows;
  }

  res.render('tasks', {
    pageTitle: 'Tasks',
    active: 'tasks',
    tasks,
    employees,
    created: req.query.created !== undefined,
    showNew: req.query.new !== undefined,
    todayStr: today(),
    prColors: { Low: 'secondary', Medium: 'info', High: 'warning', Critical: 'danger' },
    stColors: { Pending: 'warning', 'In Progress': 'info', Completed: 'success' },
  });
});

module.exports = router;
