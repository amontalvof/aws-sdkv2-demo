const db = require('./createConnection');

db.connect(function (err) {
    if (err) throw err;
    console.log('Connected...');

    const sql = "DELETE FROM customers WHERE email='updated@gmail.com'";
    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log('Deleted data', result);
    });
});
