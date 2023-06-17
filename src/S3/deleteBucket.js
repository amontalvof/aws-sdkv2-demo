const AWS = require('aws-sdk');

const s3 = new AWS.S3();

const params = {
    Bucket: 'miami-bucket',
};

s3.deleteBucket(params, function (err, data) {
    if (err) {
        console.log(err, err.stack);
    } else {
        console.log(data);
    }
});
