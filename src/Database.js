const { Sequelize, DataTypes } = require('sequelize');
const DBSOURCE = '../db.sqlite';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: DBSOURCE
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})()

const Todos = sequelize.define('todos', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  task: {
    type: DataTypes.TEXT
  },
  priority: {
    type: DataTypes.INTEGER
  },
  done: {
    type: DataTypes.BOOLEAN
  }
}, {
  tableName: 'todos'
});

Todos.sync({ force: true })

module.exports = Todos
