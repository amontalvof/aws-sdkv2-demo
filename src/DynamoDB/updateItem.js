const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-2' });

const docClient = new AWS.DynamoDB.DocumentClient();

const params = {
    TableName: 'Movies',
    Key: {
        year: 2023,
        title: 'New movie',
    },
    UpdateExpression: 'set info.rating = :r, info.plot=:p, info.actors=:a',
    ExpressionAttributeValues: {
        ':r': 5.5,
        ':p': 'This is updated plot',
        ':a': ['First', 'second', 'third'],
    },
    ReturnValues: 'UPDATED_NEW',
};

console.log('Updating the movie .... ');
docClient.update(params, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
