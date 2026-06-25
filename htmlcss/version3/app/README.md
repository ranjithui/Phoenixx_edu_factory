# Phoenixx Task Manager (`/app`)

A login-protected task management module that runs alongside the static
marketing site. PHP 8 + MySQL + Bootstrap — fits GoDaddy shared hosting.

## What's here
| File | Purpose |
|------|---------|
| `schema.sql` | Database tables — import once via phpMyAdmin |
| `setup.php` | One-time: creates the first Admin (then delete it) |
| `login.php` / `logout.php` | Session auth entry/exit |
| `dashboard.php` | Metric cards (totals, pending, overdue, assigned-to-me) |
| `tasks.php` | Create / assign / set priority / due date / update status |
| `employees.php` | Admin: add users, departments, roles |
| `reports.php` | Productivity, completed vs pending, department-wise |
| `includes/` | `config.php`, `db.php`, `auth.php`, header/footer (web-blocked) |
| `uploads/` | Task file attachments (script execution disabled) |

## Deploy on GoDaddy (cPanel)
1. **Create the database**: cPanel → *MySQL Databases* → create a DB + user,
   add the user to the DB with *All Privileges*. Note the DB name, user, password.
2. **Import schema**: cPanel → *phpMyAdmin* → select your DB → *Import* → upload `schema.sql`.
3. **Configure**: edit `includes/config.php` → set `DB_NAME`, `DB_USER`, `DB_PASS`
   (host stays `localhost` on GoDaddy).
4. **Upload** the whole `app/` folder into `public_html/` (e.g. `public_html/app/`).
5. **Create admin**: visit `https://yourdomain.com/app/setup.php`, fill the form,
   then **delete `setup.php`** from the server.
6. **Log in** at `https://yourdomain.com/app/login.php`.
   Add an "Employee Login" link to your site header pointing there.

## Roles
- **Admin** — everything, incl. creating users.
- **Manager** — create/assign tasks, see all tasks, view reports.
- **Employee** — see only tasks assigned to them, update their status.

## Security notes (already handled)
- Passwords stored as bcrypt (`password_hash`), never plain text.
- All queries use PDO prepared statements (SQL-injection safe).
- Output escaped with `e()` (XSS safe); forms carry CSRF tokens.
- `includes/` and uploaded files are blocked from direct/script access via `.htaccess`.

## Not yet wired (easy next steps)
- **Email notifications** on assignment / due-date / completion — add PHP `mail()`
  or PHPMailer (SMTP) calls in `tasks.php` after insert/status change.
- **Comments & file attachments UI** — tables exist (`task_comments`, `task_files`);
  add a `task-view.php` detail page.
- **Change-password** page for users.
