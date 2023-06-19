const db = require('./createConnection');

const selectData = () => {
    db.connect();
    db.query('SELECT * FROM Employee', (err, result) => {
        if (!err) {
            console.log(result.rows);
        } else {
            console.log('unable to get data', err);
        }

        db.end();
    });
};

selectData();
