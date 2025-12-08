// db.js
import pkg from "pg";
const { Pool } = pkg;

const connectionString = process.env.DATABASE_URL;

export const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false
  }
});

// Test connection
(async () => {
  try {
    const client = await pool.connect();
    const res = await client.query("SELECT NOW()");
    console.log("✅ Connected to PostgreSQL:", res.rows[0].now);
    client.release();
  } catch (err) {
    console.error("❌ Database connection error:", err.message);
  }
})();
