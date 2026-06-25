<?php
require_once __DIR__ . '/includes/auth.php';
require_role(['Admin','Manager']);

$msg = '';
// Create employee (Admin only)
if ($_SERVER['REQUEST_METHOD'] === 'POST' && ($_POST['do'] ?? '') === 'create') {
    require_role(['Admin']);
    csrf_check();
    $name  = trim($_POST['name'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $role  = $_POST['role'] ?? 'Employee';
    $dept  = trim($_POST['department'] ?? '');
    $pass  = $_POST['password'] ?? '';

    if ($name && filter_var($email, FILTER_VALIDATE_EMAIL) && strlen($pass) >= 8
        && in_array($role, ['Admin','Manager','Employee'], true)) {
        try {
            $hash = password_hash($pass, PASSWORD_DEFAULT);
            $pdo->prepare('INSERT INTO users (name,email,password,role,department) VALUES (?,?,?,?,?)')
                ->execute([$name,$email,$hash,$role,$dept]);
            log_activity($pdo, "Created user: $email");
            $msg = 'Employee added.';
        } catch (PDOException $e) {
            $msg = 'Could not add — email may already exist.';
        }
    } else {
        $msg = 'Check the fields (valid email + password of 8+ chars required).';
    }
}

$users = $pdo->query('SELECT id,name,email,role,department,is_active,created_at FROM users ORDER BY name')->fetchAll();

$pageTitle = 'Employees'; $active = 'employees';
require __DIR__ . '/includes/header.php';
?>
<div class="d-flex justify-content-between align-items-center mb-3">
    <h3 class="mb-0">Employees</h3>
    <?php if (is_admin()): ?>
        <button class="btn btn-dark" data-bs-toggle="collapse" data-bs-target="#newUser">
            <i class="bi bi-person-plus"></i> Add employee
        </button>
    <?php endif; ?>
</div>
<?php if ($msg): ?><div class="alert alert-info"><?= e($msg) ?></div><?php endif; ?>

<?php if (is_admin()): ?>
<div class="collapse mb-4" id="newUser">
  <div class="card card-body shadow-sm">
    <form method="post" class="row g-3">
        <input type="hidden" name="do" value="create">
        <input type="hidden" name="csrf" value="<?= e(csrf_token()) ?>">
        <div class="col-md-4"><label class="form-label">Name</label><input name="name" class="form-control" required></div>
        <div class="col-md-4"><label class="form-label">Email</label><input type="email" name="email" class="form-control" required></div>
        <div class="col-md-4"><label class="form-label">Department</label><input name="department" class="form-control"></div>
        <div class="col-md-4"><label class="form-label">Role</label>
            <select name="role" class="form-select"><option>Employee</option><option>Manager</option><option>Admin</option></select></div>
        <div class="col-md-4"><label class="form-label">Temp password (8+ chars)</label><input type="text" name="password" class="form-control" required></div>
        <div class="col-12"><button class="btn btn-dark">Add</button></div>
    </form>
  </div>
</div>
<?php endif; ?>

<div class="card shadow-sm"><div class="table-responsive">
<table class="table table-hover mb-0">
    <thead class="table-light"><tr><th>Name</th><th>Email</th><th>Role</th><th>Department</th><th>Status</th></tr></thead>
    <tbody>
    <?php foreach ($users as $u): ?>
        <tr>
            <td><?= e($u['name']) ?></td>
            <td><?= e($u['email']) ?></td>
            <td><span class="badge bg-secondary"><?= e($u['role']) ?></span></td>
            <td><?= e($u['department'] ?: '—') ?></td>
            <td><?= $u['is_active'] ? '<span class="text-success">Active</span>' : '<span class="text-muted">Inactive</span>' ?></td>
        </tr>
    <?php endforeach; ?>
    </tbody>
</table>
</div></div>
<?php require __DIR__ . '/includes/footer.php'; ?>
