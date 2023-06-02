const AWS = require('aws-sdk');

const iam = new AWS.IAM();

const params = {
    Password: 'MyPassword1',
    PasswordResetRequired: true,
    UserName: 'john',
};

iam.createLoginProfile(params, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
