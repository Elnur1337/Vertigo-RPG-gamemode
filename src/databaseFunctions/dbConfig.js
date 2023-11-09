const mysql = require("mysql");
const database = mysql.createConnection({
    host: 'localhost',
    user: 'elnurdev',
    password: 'elnurdev',
    database: 'vertigorpg'
});
database.connect((err) => {
    if (err) {
        return console.log("Database connection problem!");
    }
    return console.log("Database connected!");
});

module.exports = database;