const db = require('./createConnection');

const updateData = () => {
    db.connect();
    db.query(
        "UPDATE Employee SET EMAIL='updated@gmail.com' WHERE id=1",
        (err, result) => {
            if (!err) {
                console.log(result);
            } else {
                console.log('unable to update', err);
            }

            db.end();
        }
    );
};

updateData();
