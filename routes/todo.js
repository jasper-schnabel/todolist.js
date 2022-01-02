var express = require('express');
var router = express.Router();

router.post('/add', function(req, res, next) {
  // @TODO

  res.send('Added new todo list item!');
});


router.put('/done', function(req, res, next) {
  // @TODO

  res.send('One less thing to do!');
});

router.delete('/delete', function(req, res) {
  // @TODO

  res.send('Deleted.');
});

module.exports = router;
