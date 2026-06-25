<?php
/**
 * Session + auth guard.
 * Put  require_once __DIR__ . '/includes/auth.php';  at the TOP of every
 * protected page. If the visitor is not logged in they are redirected to login.
 */
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

require_once __DIR__ . '/db.php';

/** Redirect to login if there is no active session. */
function require_login(): void {
    if (empty($_SESSION['user_id'])) {
        header('Location: login.php');
        exit;
    }
}

/** Restrict a page to certain roles, e.g. require_role(['Admin','Manager']). */
function require_role(array $roles): void {
    require_login();
    if (!in_array($_SESSION['role'] ?? '', $roles, true)) {
        http_response_code(403);
        exit('Access denied — you do not have permission to view this page.');
    }
}

/** Current logged-in user id / name / role helpers. */
function current_user_id(): int  { return (int)($_SESSION['user_id'] ?? 0); }
function current_name(): string  { return $_SESSION['name'] ?? ''; }
function current_role(): string  { return $_SESSION['role'] ?? ''; }
function is_admin(): bool        { return current_role() === 'Admin'; }
function is_manager(): bool      { return in_array(current_role(), ['Admin','Manager'], true); }

/** Escape output to prevent XSS. Use e($value) in HTML. */
function e($v): string { return htmlspecialchars((string)$v, ENT_QUOTES, 'UTF-8'); }

/** CSRF token helpers. */
function csrf_token(): string {
    if (empty($_SESSION['csrf'])) {
        $_SESSION['csrf'] = bin2hex(random_bytes(32));
    }
    return $_SESSION['csrf'];
}
function csrf_check(): void {
    if (($_POST['csrf'] ?? '') !== ($_SESSION['csrf'] ?? '')) {
        http_response_code(419);
        exit('Session expired or invalid request. Go back and try again.');
    }
}

/** Write an entry to activity_logs. */
function log_activity(PDO $pdo, string $action, ?int $taskId = null): void {
    $stmt = $pdo->prepare(
        'INSERT INTO activity_logs (task_id, user_id, action) VALUES (?, ?, ?)'
    );
    $stmt->execute([$taskId, current_user_id(), $action]);
}
