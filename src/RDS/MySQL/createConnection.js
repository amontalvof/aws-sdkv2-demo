const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'your_host',
    user: 'user_name',
    password: 'your_password',
    database: 'your_database_name',
    port: 3306,
});

module.exports = db;
