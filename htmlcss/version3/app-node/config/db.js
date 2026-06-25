/**
 * MySQL connection pool (promise API).
 * Mirrors includes/db.php — same database, same schema.
 * Require this anywhere you need the pool:  const db = require('../config/db');
 */
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  charset: 'utf8mb4',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  // Return DATE columns as 'YYYY-MM-DD' strings (not JS Date objects),
  // so date comparisons/printing match the PHP version exactly.
  dateStrings: true,
});

module.exports = pool;
