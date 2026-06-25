<?php
/** Shared page shell. Expects $pageTitle to be set before including. */
require_once __DIR__ . '/auth.php';
require_login();
$pageTitle = $pageTitle ?? APP_NAME;
$active    = $active ?? '';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?= e($pageTitle) ?> · <?= e(APP_NAME) ?></title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" rel="stylesheet">
</head>
<body class="bg-light">
<nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3">
    <a class="navbar-brand fw-bold" href="dashboard.php"><i class="bi bi-kanban"></i> <?= e(APP_NAME) ?></a>
    <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav"><span class="navbar-toggler-icon"></span></button>
    <div class="collapse navbar-collapse" id="nav">
        <ul class="navbar-nav me-auto">
            <li class="nav-item"><a class="nav-link <?= $active==='dashboard'?'active':'' ?>" href="dashboard.php">Dashboard</a></li>
            <li class="nav-item"><a class="nav-link <?= $active==='tasks'?'active':'' ?>" href="tasks.php">Tasks</a></li>
            <?php if (is_manager()): ?>
                <li class="nav-item"><a class="nav-link <?= $active==='employees'?'active':'' ?>" href="employees.php">Employees</a></li>
                <li class="nav-item"><a class="nav-link <?= $active==='reports'?'active':'' ?>" href="reports.php">Reports</a></li>
            <?php endif; ?>
        </ul>
        <span class="navbar-text text-light me-3">
            <?= e(current_name()) ?> <span class="badge bg-secondary"><?= e(current_role()) ?></span>
        </span>
        <a class="btn btn-sm btn-outline-light" href="logout.php">Logout</a>
    </div>
</nav>
<main class="container py-4">
