const db = require('./createConnection');

db.connect(function (err) {
    if (err) throw err;
    console.log('Connected...');

    const sql =
        "INSERT INTO customers (name, email) VALUES ('jane', 'jane@gmail.com')";
    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log('Data inserted', result);
    });
});
