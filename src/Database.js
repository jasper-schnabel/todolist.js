var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        // Cannot open database
        console.error(err.message)
        throw err
    } else {
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE todo (...)`, // @TODO #1 create table in database
            (err) => {
                if (err) {
                    // Table already created
                    console.error(err);
                } else {
                    console.log("Table successfully created.")
                }
            });
    }
});

module.exports = db