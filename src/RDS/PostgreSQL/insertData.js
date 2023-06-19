const db = require('./createConnection');

const insertData = () => {
    db.connect();
    db.query(
        "INSERT INTO Employee (ID, NAME, EMAIL) VALUES (2, 'jane', 'jane@gmail.com')",
        (err, result) => {
            if (!err) {
                console.log('Data is added', result);
            } else {
                console.log('unable to insert data', err);
            }
            db.end();
        }
    );
};

insertData();
