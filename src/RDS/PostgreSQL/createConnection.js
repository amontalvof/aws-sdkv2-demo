const { Client } = require('pg');

const db = new Client({
    host: 'your_host',
    user: 'your_user',
    password: 'your_password',
    database: 'your_database',
    port: 5432,
});

module.exports = db;
