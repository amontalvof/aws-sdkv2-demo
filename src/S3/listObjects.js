const AWS = require('aws-sdk');

const s3 = new AWS.S3();

const params = {
    Bucket: 'miami-bucket',
};

s3.listObjects(params, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        data.Contents.forEach(function (element, index) {
            console.log(`${index + 1}- `, element.Key);
        });
    }
});
