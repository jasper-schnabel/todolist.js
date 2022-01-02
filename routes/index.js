var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  // @TODO get TODOs from database and render them in template
  const todos = [
    {
      id: 1,
      priority: 1,
      task: "CREATE TABLE statement in Database.js",
      done: false,
    },
    {
      id: 4,
      priority: 1,
      task: "Implement routes to add, delete and update TODOs",
      done: false,
    },
    {
      id: 2,
      priority: 2,
      task: "Implement dynamic AJAX requests for changing a TODO",
      done: false,
    },
    {
      id: 3,
      priority: 4,
      task: "Clone Repository & run it in browser",
      done: true,
    },
  ];

  res.render('index', { todos: todos });
});

module.exports = router;
