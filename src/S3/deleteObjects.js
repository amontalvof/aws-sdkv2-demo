const AWS = require('aws-sdk');

const s3 = new AWS.S3();

const params = {
    Bucket: 'miami-bucket',
    Delete: {
        Objects: [
            {
                Key: 'lorem.txt',
            },
            {
                Key: 'lorem2.txt',
            },
            {
                Key: 'lorem3.txt',
            },
        ],
    },
};

s3.deleteObjects(params, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
