const AWS = require('aws-sdk');

// AWS.config.update({ region: 'us-east-2' });
//AWS.config.update({accessKeyId:'mykey', secretAccessKey:'mysecret'})

const s3 = new AWS.S3();

const params = {
    Bucket: 'miami-bucket',
    ACL: 'private',
    // CreateBucketConfiguration: {
    //     LocationConstraint: 'us-east-2',
    // },
};

s3.createBucket(params, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
