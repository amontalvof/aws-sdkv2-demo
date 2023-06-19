const db = require('./createConnection');

db.connect(function (err) {
    if (err) throw err;
    console.log('Connected...');

    db.query('CREATE DATABASE testDB', function (err, result) {
        if (err) throw err;
        console.log('Database is created', result);
    });
});
