-- ============================================================
--  Phoenixx Task Manager — MySQL schema
--  Import this in GoDaddy cPanel > phpMyAdmin (select your DB first)
-- ============================================================

SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------------------------------------
--  Users
-- ----------------------------------------------------------
CREATE TABLE IF NOT EXISTS users (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    name        VARCHAR(120)  NOT NULL,
    email       VARCHAR(160)  NOT NULL UNIQUE,
    password    VARCHAR(255)  NOT NULL,                 -- bcrypt hash (password_hash)
    role        ENUM('Admin','Manager','Employee') NOT NULL DEFAULT 'Employee',
    department  VARCHAR(120)  DEFAULT NULL,
    is_active   TINYINT(1)    NOT NULL DEFAULT 1,
    created_at  DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------------------------------------
--  Tasks
-- ----------------------------------------------------------
CREATE TABLE IF NOT EXISTS tasks (
    id           INT AUTO_INCREMENT PRIMARY KEY,
    title        VARCHAR(200) NOT NULL,
    description  TEXT,
    priority     ENUM('Low','Medium','High','Critical') NOT NULL DEFAULT 'Medium',
    status       ENUM('Pending','In Progress','Completed') NOT NULL DEFAULT 'Pending',
    created_by   INT NOT NULL,                          -- the manager/admin who created it
    due_date     DATE DEFAULT NULL,
    created_at   DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_tasks_creator FOREIGN KEY (created_by) REFERENCES users(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------------------------------------
--  Task assignees  (many employees per task)
-- ----------------------------------------------------------
CREATE TABLE IF NOT EXISTS task_assignees (
    id        INT AUTO_INCREMENT PRIMARY KEY,
    task_id   INT NOT NULL,
    user_id   INT NOT NULL,
    UNIQUE KEY uniq_task_user (task_id, user_id),
    CONSTRAINT fk_ta_task FOREIGN KEY (task_id) REFERENCES tasks(id) ON DELETE CASCADE,
    CONSTRAINT fk_ta_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------------------------------------
--  Comments
-- ----------------------------------------------------------
CREATE TABLE IF NOT EXISTS task_comments (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    task_id     INT NOT NULL,
    user_id     INT NOT NULL,
    comment     TEXT NOT NULL,
    created_at  DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_tc_task FOREIGN KEY (task_id) REFERENCES tasks(id) ON DELETE CASCADE,
    CONSTRAINT fk_tc_user FOREIGN KEY (user_id) REFERENCES users(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------------------------------------
--  File attachments
-- ----------------------------------------------------------
CREATE TABLE IF NOT EXISTS task_files (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    task_id     INT NOT NULL,
    file_name   VARCHAR(255) NOT NULL,
    file_path   VARCHAR(255) NOT NULL,
    uploaded_by INT NOT NULL,
    created_at  DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_tf_task FOREIGN KEY (task_id) REFERENCES tasks(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------------------------------------
--  Activity log
-- ----------------------------------------------------------
CREATE TABLE IF NOT EXISTS activity_logs (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    task_id     INT DEFAULT NULL,
    user_id     INT NOT NULL,
    action      VARCHAR(255) NOT NULL,
    created_at  DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

SET FOREIGN_KEY_CHECKS = 1;

-- ----------------------------------------------------------
--  First Admin account
--  Do NOT seed the admin here with a hardcoded hash.
--  Instead run  /app/setup.php  ONCE in your browser after import —
--  it creates the admin with a securely generated password hash,
--  then you delete setup.php.
-- ----------------------------------------------------------
