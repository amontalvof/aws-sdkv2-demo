const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-2' });

const ses = new AWS.SES();

const params = {
    Destination: {
        ToAddresses: ['joseph.miller@example.com', 'julia.davis@example.com'],
    },

    Message: {
        Body: {
            Html: {
                Charset: 'UTF-8',
                Data: 'Thanks for buying the course Andy',
            },
            Text: {
                Charset: 'UTF-8',
                Data: 'AWS Course with JavaScript & NodeJS',
            },
        },

        Subject: {
            Charset: 'UTF-8',
            Data: 'AWS Course with JavaScript & NodeJS',
        },
    },

    Source: 'jessica.jones@example.com',
};

ses.sendEmail(params, function (err, data) {
    if (err) {
        console.log('unable to send email', err);
    } else {
        console.log('email is sent', data);
    }
});
