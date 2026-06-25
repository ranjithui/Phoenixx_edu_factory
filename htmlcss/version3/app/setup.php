<?php
/**
 * ONE-TIME setup: creates the first Admin account with a securely hashed
 * password. Open this in your browser once after importing schema.sql,
 * fill the form, then DELETE this file.
 */
require_once __DIR__ . '/includes/db.php';

// Safety: refuse to run if any admin already exists.
$exists = $pdo->query("SELECT COUNT(*) FROM users WHERE role = 'Admin'")->fetchColumn();
if ($exists > 0) {
    exit('Setup already completed. Delete this file (setup.php) from the server.');
}

$done = false; $error = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name  = trim($_POST['name'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $pass  = $_POST['password'] ?? '';

    if ($name === '' || $email === '' || strlen($pass) < 8) {
        $error = 'Name, a valid email, and a password of at least 8 characters are required.';
    } else {
        $hash = password_hash($pass, PASSWORD_DEFAULT);
        $stmt = $pdo->prepare(
            "INSERT INTO users (name, email, password, role, department)
             VALUES (?, ?, ?, 'Admin', 'Management')"
        );
        $stmt->execute([$name, $email, $hash]);
        $done = true;
    }
}
?>
<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Setup</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head><body class="bg-light">
<div class="container" style="max-width:480px;margin-top:6vh;">
<div class="card shadow"><div class="card-body p-4">
<h4 class="fw-bold mb-3">Create Admin Account</h4>
<?php if ($done): ?>
    <div class="alert alert-success">
        Admin created. <strong>Now delete <code>setup.php</code> from the server</strong>,
        then <a href="login.php">go to login</a>.
    </div>
<?php else: ?>
    <?php if ($error): ?><div class="alert alert-danger py-2"><?= htmlspecialchars($error) ?></div><?php endif; ?>
    <form method="post">
        <div class="mb-3"><label class="form-label">Full name</label>
            <input name="name" class="form-control" required></div>
        <div class="mb-3"><label class="form-label">Email</label>
            <input type="email" name="email" class="form-control" required></div>
        <div class="mb-3"><label class="form-label">Password (min 8 chars)</label>
            <input type="password" name="password" class="form-control" required></div>
        <button class="btn btn-dark w-100">Create admin</button>
    </form>
<?php endif; ?>
</div></div></div>
</body></html>
