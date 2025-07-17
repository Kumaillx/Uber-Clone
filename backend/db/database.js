const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('rides.db');

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS rides (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      pickup TEXT,
      dropoff TEXT,
      date TEXT,
      time TEXT
    )
  `);
});

module.exports = db;
