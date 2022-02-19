const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

// console.log(process.env.MYSQL_USER, process.env.MYSQL_ROOT_PASSWORD, process.env.MYSQL_DATABASE, process.env.MYSQL_HOST)
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
});
module.exports = connection;