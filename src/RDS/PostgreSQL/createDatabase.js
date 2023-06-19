const db = require('./createConnection');

const createDatabase = () => {
    db.connect();
    db.query('CREATE DATABASE testdb', (err, result) => {
        if (!err) {
            console.log(result);
        } else {
            console.log(err);
        }

        db.end();
    });
};

createDatabase();
