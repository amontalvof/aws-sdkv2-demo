const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-2' });

const ses = new AWS.SES();

const params = {
    Source: 'john.doe@example.com',
    Destination: {
        ToAddresses: ['jane.smith@example.com', 'james.johnson@example.com'],
        CcAddresses: [
            'jennifer.williams@example.com',
            'jack.brown@example.com',
        ],
    },
    ReplyToAddresses: [],
    Template: 'JavascriptTemp',
    TemplateData: '{"replace":"value"}',
};

ses.sendTemplatedEmail(params, function (err, data) {
    if (err) {
        console.log('unable to send email', err);
    } else {
        console.log('email is send', data);
    }
});
