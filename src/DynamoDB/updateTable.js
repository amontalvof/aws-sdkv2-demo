const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-2' });

const dynamodb = new AWS.DynamoDB();

const params = {
    ProvisionedThroughput: {
        ReadCapacityUnits: 2,
        WriteCapacityUnits: 2,
    },
    TableName: 'employee',
};

dynamodb.updateTable(params, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
