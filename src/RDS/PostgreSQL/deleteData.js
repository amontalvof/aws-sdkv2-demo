const db = require('./createConnection');

const deleteData = () => {
    db.connect();

    db.query('DELETE FROM Employee WHERE id=1', (err, result) => {
        if (!err) {
            console.log('Data is deleted', result);
        } else {
            console.log('Unable to delete data', err);
        }

        db.end();
    });
};

deleteData();
