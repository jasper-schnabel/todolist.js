const sqlite3 = require('sqlite3').verbose();
const DBSOURCE = 'db.sqlite';

// create new database and initialize a table
const db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.error(err.message); // cannot open database
    throw err;
  } else {
    console.log('Connected to the SQLite database.');
    let sql = 'CREATE TABLE todo (id INTEGER PRIMARY KEY AUTOINCREMENT, task TEXT, priority INT, done BOOLEAN)';
    // db.run('DROP TABLE todo') // to create a new table (for cleaning up)
    db.run(sql, (err) => {
      if (err) {
        console.error(err.message); // cannot open database
      } else {
        console.log('Table successfully created.');
      }
    });
  }
});

module.exports = db
