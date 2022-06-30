const express = require('express');
const router = express.Router();

// get todos
router.get('/', async (req, res) => {
  const todos = await req.models.Todos.findAll();
  // format todos
  const formattedTodos = Object.values(todos.reduce( (acc, cur) => {
    if ( cur.parent == null ) { // assumption: id from main < i from sub
      acc[cur.id] = {
        id: cur.id,
        task: cur.task,
        priority: cur.priority,
        done: cur.done,
        parent: cur.parent,
        subs: []
      };
    } else { // assumption: acc[id from main] exists
      acc[cur.parent].subs.push(cur); // select parent todo and push itself in the subs array
    }
    return acc;
  }, {} ));

  // sort todos by priority
  formattedTodos.sort((a, b) => { return a.priority - b.priority; });

  res.render('index', { todos: formattedTodos });
  console.log('Data successfully queried.');
  console.log(JSON.stringify(formattedTodos, null, 2)); // just for debugging
});

module.exports = router;
