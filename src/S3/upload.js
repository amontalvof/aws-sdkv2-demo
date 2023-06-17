const path = require('path');
const fs = require('fs');
const AWS = require('aws-sdk');

const s3 = new AWS.S3();

const fileContent = fs.readFileSync(path.join(__dirname, 'Lorem.txt'));

const params = {
    Bucket: 'miami-bucket',
    Key: 'lorem.txt',
    Body: fileContent,
};

s3.upload(params, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log('File uploaded', data);
    }
});
