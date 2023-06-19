const db = require('./createConnection');

db.connect(function (err) {
    if (err) throw err;
    console.log('Connected...');

    db.query('SELECT * FROM customers', function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});
