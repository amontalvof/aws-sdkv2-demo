const AWS = require('aws-sdk');

const iam = new AWS.IAM();

const params = {
    NewPassword: 'MyPassword2',
    OldPassword: 'MyPassword1',
};

iam.changePassword(params, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
