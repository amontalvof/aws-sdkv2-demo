const db = require('./createConnection');

db.connect(function (err) {
    if (err) throw err;
    console.log('Connected...');

    const sql =
        "UPDATE customers SET email = 'updated@gmail.com' WHERE email='john@gmail.com'";
    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log('Data updated', result);
    });
});
