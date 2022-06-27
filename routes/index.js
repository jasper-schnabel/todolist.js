const express = require('express');
const router = express.Router();
const db = require('../src/Database.js');

// home page
router.get('/', (req, res) => {
  let sql = 'SELECT * FROM todo ORDER BY priority';
  db.all(sql, (err, rows) => {
    if (err) {
      console.error(err.message); // cannot query database
      throw err;
    } else {
      res.render('index', { todos: rows });
      console.log('Data successfully queried.');
      console.log(rows); // for debugging/testing
    }
  });
});

module.exports = router;
