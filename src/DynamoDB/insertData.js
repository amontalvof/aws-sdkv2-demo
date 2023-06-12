const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-2' });

const docClient = new AWS.DynamoDB.DocumentClient();

const params = {
    TableName: 'Movies',
    Item: {
        year: 2023,
        title: 'New movie',
        info: {
            plot: 'This is new movie',
            rating: 2,
        },
    },
};

console.log('Adding the movie ... ');

docClient.put(params, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log('Movie added', data);
    }
});
