<?php
require_once __DIR__ . '/includes/auth.php';
require_role(['Admin','Manager']);

// Completed vs pending vs overdue, overall
$overall = $pdo->query("
    SELECT
        SUM(status='Completed')                             AS completed,
        SUM(status='Pending')                               AS pending,
        SUM(status='In Progress')                           AS in_progress,
        SUM(status<>'Completed' AND due_date < CURDATE())   AS overdue
    FROM tasks
")->fetch();

// Per-employee productivity (tasks assigned to them)
$byEmployee = $pdo->query("
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
")->fetchAll();

// Department-wise
$byDept = $pdo->query("
    SELECT COALESCE(NULLIF(u.department,''),'—') AS dept,
           COUNT(t.id) AS total,
           SUM(t.status='Completed') AS completed
    FROM users u
    LEFT JOIN task_assignees a ON a.user_id = u.id
    LEFT JOIN tasks t ON t.id = a.task_id
    GROUP BY dept ORDER BY total DESC
")->fetchAll();

$pageTitle = 'Reports'; $active = 'reports';
require __DIR__ . '/includes/header.php';
?>
<h3 class="mb-4">Reports</h3>

<div class="row g-3 mb-4">
    <?php foreach ([['Completed','completed','success'],['Pending','pending','warning'],['In Progress','in_progress','info'],['Overdue','overdue','danger']] as [$lbl,$k,$c]): ?>
    <div class="col-6 col-md-3">
        <div class="card border-<?= $c ?> shadow-sm"><div class="card-body text-center">
            <div class="display-6 fw-bold text-<?= $c ?>"><?= (int)$overall[$k] ?></div>
            <div class="text-muted small"><?= $lbl ?></div>
        </div></div>
    </div>
    <?php endforeach; ?>
</div>

<div class="card shadow-sm mb-4">
    <div class="card-header fw-semibold">Employee productivity</div>
    <div class="table-responsive"><table class="table mb-0">
        <thead class="table-light"><tr><th>Employee</th><th>Department</th><th>Total</th><th>Completed</th><th>Overdue</th></tr></thead>
        <tbody>
        <?php foreach ($byEmployee as $r): ?>
            <tr><td><?= e($r['name']) ?></td><td><?= e($r['department'] ?: '—') ?></td>
                <td><?= (int)$r['total'] ?></td><td class="text-success"><?= (int)$r['completed'] ?></td>
                <td class="text-danger"><?= (int)$r['overdue'] ?></td></tr>
        <?php endforeach; ?>
        </tbody>
    </table></div>
</div>

<div class="card shadow-sm">
    <div class="card-header fw-semibold">Department-wise</div>
    <div class="table-responsive"><table class="table mb-0">
        <thead class="table-light"><tr><th>Department</th><th>Total tasks</th><th>Completed</th></tr></thead>
        <tbody>
        <?php foreach ($byDept as $r): ?>
            <tr><td><?= e($r['dept']) ?></td><td><?= (int)$r['total'] ?></td><td><?= (int)$r['completed'] ?></td></tr>
        <?php endforeach; ?>
        </tbody>
    </table></div>
</div>
<?php require __DIR__ . '/includes/footer.php'; ?>
