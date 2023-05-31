const AWS = require('aws-sdk');

const iam = new AWS.IAM();

const params = {
    PolicyArn: 'arn:aws:iam::629021254609:policy/newUserFullPolicy',
    UserName: 'john',
};

iam.detachUserPolicy(params, (err, data) => {
    if (err) {
        console.log(err, err.stack);
    } else {
        console.log(data);
    }
});
