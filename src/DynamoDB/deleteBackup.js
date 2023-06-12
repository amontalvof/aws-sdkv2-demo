const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-2' });

const dynamodb = new AWS.DynamoDB();

const params = {
    BackupArn:
        'arn:aws:dynamodb:us-east-2:629021254609:table/employee/backup/01686537632113-ac84263c',
};

dynamodb.deleteBackup(params, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
