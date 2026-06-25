<?php
require_once __DIR__ . '/includes/auth.php';
require_login();

$uid = current_user_id();

// ---- Handle create task (managers/admins only) ----
if ($_SERVER['REQUEST_METHOD'] === 'POST' && ($_POST['do'] ?? '') === 'create') {
    require_role(['Admin','Manager']);
    csrf_check();

    $title    = trim($_POST['title'] ?? '');
    $desc     = trim($_POST['description'] ?? '');
    $priority = $_POST['priority'] ?? 'Medium';
    $due      = $_POST['due_date'] ?: null;
    $assignTo = array_map('intval', $_POST['assigned_to'] ?? []);

    if ($title !== '' && $assignTo) {
        $pdo->beginTransaction();
        $stmt = $pdo->prepare(
            'INSERT INTO tasks (title, description, priority, created_by, due_date)
             VALUES (?, ?, ?, ?, ?)'
        );
        $stmt->execute([$title, $desc, $priority, $uid, $due]);
        $taskId = (int)$pdo->lastInsertId();

        $ins = $pdo->prepare('INSERT INTO task_assignees (task_id, user_id) VALUES (?, ?)');
        foreach ($assignTo as $aUid) { $ins->execute([$taskId, $aUid]); }

        log_activity($pdo, "Created task: $title", $taskId);
        $pdo->commit();
        header('Location: tasks.php?created=1');
        exit;
    }
}

// ---- Handle status update (assignee or manager) ----
if ($_SERVER['REQUEST_METHOD'] === 'POST' && ($_POST['do'] ?? '') === 'status') {
    csrf_check();
    $taskId = (int)$_POST['task_id'];
    $status = $_POST['status'];
    if (in_array($status, ['Pending','In Progress','Completed'], true)) {
        // employees may only update tasks assigned to them
        $allowed = is_manager();
        if (!$allowed) {
            $chk = $pdo->prepare('SELECT 1 FROM task_assignees WHERE task_id = ? AND user_id = ?');
            $chk->execute([$taskId, $uid]);
            $allowed = (bool)$chk->fetchColumn();
        }
        if ($allowed) {
            $pdo->prepare('UPDATE tasks SET status = ? WHERE id = ?')->execute([$status, $taskId]);
            log_activity($pdo, "Status → $status", $taskId);
        }
    }
    header('Location: tasks.php');
    exit;
}

// ---- Load task list ----
if (is_manager()) {
    $tasks = $pdo->query("
        SELECT t.*, u.name AS creator,
               GROUP_CONCAT(au.name SEPARATOR ', ') AS assignees
        FROM tasks t
        JOIN users u ON u.id = t.created_by
        LEFT JOIN task_assignees a ON a.task_id = t.id
        LEFT JOIN users au ON au.id = a.user_id
        GROUP BY t.id
        ORDER BY t.created_at DESC
    ")->fetchAll();
} else {
    $stmt = $pdo->prepare("
        SELECT t.*, u.name AS creator,
               GROUP_CONCAT(au.name SEPARATOR ', ') AS assignees
        FROM tasks t
        JOIN users u ON u.id = t.created_by
        JOIN task_assignees mine ON mine.task_id = t.id AND mine.user_id = ?
        LEFT JOIN task_assignees a ON a.task_id = t.id
        LEFT JOIN users au ON au.id = a.user_id
        GROUP BY t.id
        ORDER BY t.created_at DESC
    ");
    $stmt->execute([$uid]);
    $tasks = $stmt->fetchAll();
}

// employees list for the assign dropdown
$employees = is_manager()
    ? $pdo->query("SELECT id, name, department FROM users WHERE is_active = 1 ORDER BY name")->fetchAll()
    : [];

$prColors = ['Low'=>'secondary','Medium'=>'info','High'=>'warning','Critical'=>'danger'];
$stColors = ['Pending'=>'warning','In Progress'=>'info','Completed'=>'success'];

$pageTitle = 'Tasks'; $active = 'tasks';
require __DIR__ . '/includes/header.php';
?>
<div class="d-flex justify-content-between align-items-center mb-3">
    <h3 class="mb-0">Tasks</h3>
    <?php if (is_manager()): ?>
        <button class="btn btn-dark" data-bs-toggle="collapse" data-bs-target="#newTask">
            <i class="bi bi-plus-lg"></i> Create task
        </button>
    <?php endif; ?>
</div>

<?php if (isset($_GET['created'])): ?>
    <div class="alert alert-success">Task created.</div>
<?php endif; ?>

<?php if (is_manager()): ?>
<div class="collapse <?= isset($_GET['new'])?'show':'' ?> mb-4" id="newTask">
  <div class="card card-body shadow-sm">
    <form method="post">
      <input type="hidden" name="do" value="create">
      <input type="hidden" name="csrf" value="<?= e(csrf_token()) ?>">
      <div class="row g-3">
        <div class="col-md-6"><label class="form-label">Title</label>
            <input name="title" class="form-control" required></div>
        <div class="col-md-3"><label class="form-label">Priority</label>
            <select name="priority" class="form-select">
                <option>Low</option><option selected>Medium</option><option>High</option><option>Critical</option>
            </select></div>
        <div class="col-md-3"><label class="form-label">Due date</label>
            <input type="date" name="due_date" class="form-control"></div>
        <div class="col-12"><label class="form-label">Description</label>
            <textarea name="description" class="form-control" rows="2"></textarea></div>
        <div class="col-12"><label class="form-label">Assign to (Ctrl/Cmd-click for multiple)</label>
            <select name="assigned_to[]" class="form-select" multiple size="5" required>
                <?php foreach ($employees as $emp): ?>
                    <option value="<?= $emp['id'] ?>"><?= e($emp['name']) ?><?= $emp['department'] ? ' — '.e($emp['department']) : '' ?></option>
                <?php endforeach; ?>
            </select></div>
      </div>
      <button class="btn btn-dark mt-3">Save task</button>
    </form>
  </div>
</div>
<?php endif; ?>

<div class="card shadow-sm">
<div class="table-responsive">
<table class="table table-hover align-middle mb-0">
    <thead class="table-light">
        <tr><th>Title</th><th>Assignees</th><th>Priority</th><th>Due</th><th>Status</th><th></th></tr>
    </thead>
    <tbody>
    <?php if (!$tasks): ?>
        <tr><td colspan="6" class="text-center text-muted py-4">No tasks yet.</td></tr>
    <?php endif; ?>
    <?php foreach ($tasks as $t): ?>
        <?php $overdue = $t['status']!=='Completed' && $t['due_date'] && $t['due_date'] < date('Y-m-d'); ?>
        <tr>
            <td>
                <div class="fw-semibold"><?= e($t['title']) ?></div>
                <?php if ($t['description']): ?><div class="small text-muted"><?= e($t['description']) ?></div><?php endif; ?>
            </td>
            <td class="small"><?= e($t['assignees'] ?? '—') ?></td>
            <td><span class="badge bg-<?= $prColors[$t['priority']] ?>"><?= e($t['priority']) ?></span></td>
            <td class="<?= $overdue ? 'text-danger fw-bold' : '' ?>">
                <?= $t['due_date'] ? e($t['due_date']) : '—' ?>
                <?php if ($overdue): ?><i class="bi bi-exclamation-triangle"></i><?php endif; ?>
            </td>
            <td><span class="badge bg-<?= $stColors[$t['status']] ?>"><?= e($t['status']) ?></span></td>
            <td>
                <form method="post" class="d-flex gap-1">
                    <input type="hidden" name="do" value="status">
                    <input type="hidden" name="csrf" value="<?= e(csrf_token()) ?>">
                    <input type="hidden" name="task_id" value="<?= $t['id'] ?>">
                    <select name="status" class="form-select form-select-sm" style="width:auto" onchange="this.form.submit()">
                        <?php foreach (['Pending','In Progress','Completed'] as $s): ?>
                            <option <?= $t['status']===$s?'selected':'' ?>><?= $s ?></option>
                        <?php endforeach; ?>
                    </select>
                </form>
            </td>
        </tr>
    <?php endforeach; ?>
    </tbody>
</table>
</div>
</div>
<?php require __DIR__ . '/includes/footer.php'; ?>
