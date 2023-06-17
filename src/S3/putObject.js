const path = require('path');
const fs = require('fs');
const AWS = require('aws-sdk');

const s3 = new AWS.S3();

const fileContent = fs.readFileSync(path.join(__dirname, 'Bart_Simpson.jpeg'));

const params = {
    Bucket: 'miami-bucket',
    ACL: 'private',
    Key: 'bart.jpeg',
    Body: fileContent,
};

s3.putObject(params, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
