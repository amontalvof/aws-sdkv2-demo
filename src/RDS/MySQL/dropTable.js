const db = require('./createConnection');

db.connect(function (err) {
    if (err) throw err;
    console.log('Connected...');

    const sql = 'DROP TABLE customers';
    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log('Table is deleted', result);
    });
});
