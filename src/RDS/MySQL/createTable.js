const db = require('./createConnection');

db.connect(function (err) {
    if (err) throw err;
    console.log('Connected...');

    const sql =
        'CREATE TABLE customers (name VARCHAR(255), email VARCHAR(255))';
    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log('Table is created', result);
    });
});
