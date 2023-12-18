const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-2' });

const ses = new AWS.SES();

const params = {
    // EmailAddress: 'email@abc.com',
    EmailAddress: 'andymontalvof92@yahoo.com',
};

ses.verifyEmailAddress(params, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
