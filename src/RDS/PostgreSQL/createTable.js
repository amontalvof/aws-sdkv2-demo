const db = require('./createConnection');

const createTable = () => {
    db.connect();
    db.query(
        'CREATE TABLE Employee (ID INT PRIMARY KEY NOT NULL, NAME TEXT NOT NULL, EMAIL TEXT NOT NULL)',
        (err, result) => {
            if (!err) {
                console.log(result);
            } else {
                console.log(err);
            }
            db.end();
        }
    );
};

createTable();
