// backend/routes/rides.js
const express = require('express');
const router = express.Router();
const db = require('../db/database');

// Create ride
router.post('/', (req, res) => {
  const { pickup, dropoff, date, time } = req.body;
  db.run(
    'INSERT INTO rides (pickup, dropoff, date, time) VALUES (?, ?, ?, ?)',
    [pickup, dropoff, date, time],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: this.lastID });
    }
  );
});

// Get all rides
router.get('/', (req, res) => {
  db.all('SELECT * FROM rides', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

module.exports = router;
