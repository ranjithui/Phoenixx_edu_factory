<?php
require_once __DIR__ . '/includes/auth.php';
require_login();

$uid = current_user_id();

// Managers/Admins see org-wide totals; Employees see only tasks assigned to them.
if (is_manager()) {
    $totals = $pdo->query("
        SELECT
            COUNT(*)                                              AS total,
            SUM(status = 'Pending')                              AS pending,
            SUM(status = 'In Progress')                          AS in_progress,
            SUM(status = 'Completed')                            AS completed,
            SUM(status <> 'Completed' AND due_date < CURDATE())  AS overdue
        FROM tasks
    ")->fetch();
} else {
    $stmt = $pdo->prepare("
        SELECT
            COUNT(*)                                              AS total,
            SUM(status = 'Pending')                              AS pending,
            SUM(status = 'In Progress')                          AS in_progress,
            SUM(status = 'Completed')                            AS completed,
            SUM(status <> 'Completed' AND due_date < CURDATE())  AS overdue
        FROM tasks t
        JOIN task_assignees a ON a.task_id = t.id
        WHERE a.user_id = ?
    ");
    $stmt->execute([$uid]);
    $totals = $stmt->fetch();
}

// "Assigned to me" count (for everyone).
$stmt = $pdo->prepare("
    SELECT COUNT(*) FROM task_assignees a
    JOIN tasks t ON t.id = a.task_id
    WHERE a.user_id = ? AND t.status <> 'Completed'
");
$stmt->execute([$uid]);
$assignedToMe = (int)$stmt->fetchColumn();

$cards = [
    ['Total Tasks', (int)$totals['total'],        'secondary', 'list-task'],
    ['Pending',     (int)$totals['pending'],      'warning',   'hourglass'],
    ['In Progress', (int)$totals['in_progress'],  'info',      'arrow-repeat'],
    ['Completed',   (int)$totals['completed'],    'success',   'check2-circle'],
    ['Overdue',     (int)$totals['overdue'],      'danger',    'exclamation-triangle'],
    ['Assigned to me', $assignedToMe,             'primary',   'person-check'],
];

$pageTitle = 'Dashboard'; $active = 'dashboard';
require __DIR__ . '/includes/header.php';
?>
<h3 class="mb-4">Dashboard</h3>
<div class="row g-3">
    <?php foreach ($cards as [$label, $value, $color, $icon]): ?>
        <div class="col-6 col-md-4 col-lg-2">
            <div class="card border-<?= $color ?> shadow-sm h-100">
                <div class="card-body text-center">
                    <i class="bi bi-<?= $icon ?> fs-3 text-<?= $color ?>"></i>
                    <div class="display-6 fw-bold"><?= $value ?></div>
                    <div class="text-muted small"><?= e($label) ?></div>
                </div>
            </div>
        </div>
    <?php endforeach; ?>
</div>

<div class="mt-4">
    <a href="tasks.php" class="btn btn-dark"><i class="bi bi-list-task"></i> View tasks</a>
    <?php if (is_manager()): ?>
        <a href="tasks.php?new=1" class="btn btn-outline-dark"><i class="bi bi-plus-lg"></i> Create task</a>
    <?php endif; ?>
</div>
<?php require __DIR__ . '/includes/footer.php'; ?>
