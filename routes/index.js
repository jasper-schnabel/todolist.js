const express = require('express');
const router = express.Router();

// get todos
router.get('/', async (req, res) => {
  const todos = await req.models.Todos.findAll({ order: [['priority', 'ASC']] });
  res.render('index', { todos: todos })
  console.log('Data successfully queried.');
  console.log("All todos:", JSON.stringify(todos, null, 2)); // just for debugging
});

module.exports = router;
