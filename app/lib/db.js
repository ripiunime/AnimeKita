import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",       // Ganti dengan host database Anda
  user: "root",            // Ganti dengan username MySQL
  password: "",            // Ganti dengan password MySQL
  database: "animekita",   // Nama database
});

export default pool;
