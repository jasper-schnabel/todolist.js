const express = require('express');
const router = express.Router();
const db = require('../src/Database.js');

// add new todo
router.post('/add', (req, res) => {
  let sql = 'INSERT INTO todo (task, priority, done) VALUES (?, ?, ?)';
  db.run(sql, [req.body.task, parseInt(req.body.priority), false ], (err) => {
    if (err) {
      console.error(err.message); // cannot insert into database
      throw err;
    } else {
      console.log('Data successfully inserted.');
      res.redirect('/');
    }
  });
});

// set todo as done
router.put('/done/:id', (req) => {
  let sql = 'UPDATE todo SET done = ((done | true) - (done & true)) WHERE id = ?';
  db.run(sql, [req.params.id], (err) => {
    if (err) {
      console.error(err.message); // cannot update done value
      throw err;
    } else {
      console.log('Todo successfully set to done.');
    }
  })
});

// edit todo
router.put('/edit/:id', (req) => {
  let sql = 'UPDATE todo SET task = ? WHERE id = ?';
  db.run(sql, [req.body.task, req.params.id], (err) => {
    if (err) {
      console.error(err.message); // cannot edit todo
      throw err;
    } else {
      console.log('Todo successfully edited.');
    }
  })
});

// delete todo
router.delete('/delete/:id', (req) => {
  let sql = 'DELETE FROM todo WHERE id = ?';
  db.run(sql, [req.params.id], (err) => {
    if (err) {
      console.error(err.message); // cannot delete todo
      throw err;
    } else {
      console.log('Todo successfully deleted.');
    }
  })
});

module.exports = router;
