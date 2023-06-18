const AWS = require('aws-sdk');

const s3 = new AWS.S3();

const params = {
    Bucket: 'miami-bucket',
    Key: 'lorem.txt',
};

s3.getObject(params, function (err, data) {
    if (err) {
        console.log('Failed to get', err, err.stack);
    } else {
        console.log(' Loaded ' + data.ContentLength + ' bytes ');
    }
});
