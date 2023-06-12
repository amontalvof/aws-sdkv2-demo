const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-2' });

const docClient = new AWS.DynamoDB.DocumentClient();

const params = {
    TableName: 'Movies',
    Key: {
        year: 2023,
        title: 'New movie',
    },
};

console.log('Movie is deleting');

docClient.delete(params, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log('Item is deleted', data);
    }
});
