# Phoenixx Task Manager — Node.js version (`/app-node`)

The same login-protected task manager as the PHP `/app` module, rewritten in
**Node.js + Express + EJS**, talking to the **same MySQL database and schema**.
You can point both apps at the same database — they share the `schema.sql` tables.

## What's here
| File / folder | Purpose |
|---------------|---------|
| `server.js` | Express entry point — sessions, routes, views |
| `config/db.js` | MySQL connection pool (mysql2) — equivalent of `includes/db.php` |
| `middleware/auth.js` | Sessions, role guards, CSRF, `e()` escape, activity log — equivalent of `includes/auth.php` |
| `routes/` | `auth` (login/logout/setup), `dashboard`, `tasks`, `employees`, `reports` |
| `views/` | EJS templates mirroring the Bootstrap pages (+ `partials/header`, `partials/footer`) |
| `.env.example` | Copy to `.env` and fill in DB credentials |

The database tables are **unchanged** — use the existing `../app/schema.sql`.

## Run locally
1. **Install Node.js 18+**, then in this folder: `npm install`
2. **Database**: import `../app/schema.sql` into MySQL (phpMyAdmin or CLI) if you
   haven't already.
3. **Configure**: `cp .env.example .env` and set `DB_NAME`, `DB_USER`, `DB_PASS`,
   and a long random `SESSION_SECRET`.
4. **Create the first admin**: `npm start`, then open `http://localhost:3000/setup`,
   fill the form. After the admin exists `/setup` refuses to run again.
5. **Log in** at `http://localhost:3000/login`.

> Password hashes are compatible both ways: `bcryptjs` verifies hashes created by
> PHP `password_hash()` (incl. the `$2y$` prefix), so users created in either app
> can log into the other.

## Roles (identical to the PHP app)
- **Admin** — everything, including creating users.
- **Manager** — create/assign tasks, see all tasks, view reports.
- **Employee** — see only tasks assigned to them, update their status.

## Security
- Passwords stored as bcrypt; never plain text.
- All queries use parameterized statements (SQL-injection safe).
- Output escaped with `e()` in templates (XSS safe); forms carry CSRF tokens.
- Sessions are httpOnly cookies; set `cookie.secure = true` in `server.js` and
  serve over HTTPS in production.

## Hosting note
This needs a **Node.js runtime** — it will **not** run on GoDaddy *shared* hosting
(that's PHP-only). Use the PHP `/app` there, or deploy this to a Node host
(Render, Railway, Fly.io, a VPS, or GoDaddy VPS/cPanel "Setup Node.js App").

## Not yet wired (same as PHP version)
- Email notifications on assignment / due date / completion.
- Comments & file attachments UI (`task_comments`, `task_files` tables exist).
- Change-password page.
