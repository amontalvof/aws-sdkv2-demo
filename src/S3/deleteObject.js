const AWS = require('aws-sdk');

const s3 = new AWS.S3();

const params = {
    Bucket: 'miami-bucket',
    Key: 'Bart_simpson.jpeg',
};

s3.deleteObject(params, function (err, data) {
    if (err) {
        console.log(err, err.stack);
    } else {
        console.log('Object is deleted', data);
    }
});
