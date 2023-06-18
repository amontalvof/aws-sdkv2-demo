const AWS = require('aws-sdk');

const s3 = new AWS.S3();

const params = {
    Bucket: 'miami-bucket',
    CopySource: 'miami-bucket/lorem.txt',
    Key: 'lorem4.txt',
};

s3.copyObject(params, function (err, data) {
    if (err) {
        console.log(err, err.stack);
    } else {
        console.log('data is copied', data);
    }
});
