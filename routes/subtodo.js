const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');

// create new subtodo
router.post('/add', async (req, res) => {
  const priority = await req.models.Todos.findByPk(req.body.parent).then(todo => todo.priority);
  await req.models.Todos.create({ task: req.body.task, priority, done: false, parent: req.body.parent });

  console.log('Data successfully inserted.');
  res.redirect('/');
});

// set subtodo as done
router.put('/done/:id', async (req, res) => {
  await req.models.Todos.update({ done: Sequelize.literal('NOT done') }, { where: { id: req.params.id } });
  const done = await req.models.Todos.findAll({ where: { parent: req.body.parentId } });
  const allDone = done.reduce((acc, cur) => {
    if (cur.done === false) {
      return false;
    } else {
      return acc;
    }
  }, true);

  if (allDone) {
    await req.models.Todos.update({ done: true }, { where: { id: req.body.parentId } });
  }

  console.log('Subtodo successfully set to done.');
  res.json({ allDone });
});

// edit subtodo
router.put('/edit/:id', async (req) => {
  await req.models.Todos.update({ task: req.body.task }, { where: { id: req.params.id } });

  console.log('Subtodo successfully edited.');
});

// delete subtodo
router.delete('/delete/:id', async (req) => {
  await req.models.Todos.destroy({ where: { id: req.params.id } });

  console.log('Subtodo successfully deleted.');
});

module.exports = router;
