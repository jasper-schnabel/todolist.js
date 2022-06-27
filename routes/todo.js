const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');

// create new todo
router.post('/add', async (req, res) => {
  await req.models.Todos.create({ task: req.body.task, priority: parseInt(req.body.priority), done: false });
  console.log('Data successfully inserted.');
  res.redirect('/');
});

// set todo as done
router.put('/done/:id', async (req) => {
  await req.models.Todos.update({ done: Sequelize.literal('NOT done') }, { where: { id: req.params.id } });
  console.log('Todo successfully set to done.');
});

// edit todo
router.put('/edit/:id', async (req) => {
  await req.models.Todos.update({ task: req.body.task }, { where: { id: req.params.id } });
  console.log('Todo successfully edited.');
});

// delete todo
router.delete('/delete/:id', async (req) => {
  await req.models.Todos.destroy({ where: { id: req.params.id } });
  console.log('Todo successfully deleted.');
});

module.exports = router;
