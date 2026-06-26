<?php
/**
 * Database & app configuration.
 * Update these 4 values with your GoDaddy MySQL details
 * (cPanel > MySQL Databases gives you the DB name, user, and password;
 *  on GoDaddy shared hosting DB_HOST is usually 'localhost').
 */

define('DB_HOST', 'localhost');
define('DB_NAME', 'Task');   // your database name
define('DB_USER', 'Phoenixxit');     // your database user
define('DB_PASS', 'Phoenixx@2026');        // your database password

define('APP_NAME', 'Phoenixx Task Manager');

// Folder where uploaded task files are stored (must be writable).
define('UPLOAD_DIR', __DIR__ . '/../uploads/');

// Show errors while developing; set to 0 once live.
ini_set('display_errors', 1);
error_reporting(E_ALL);
