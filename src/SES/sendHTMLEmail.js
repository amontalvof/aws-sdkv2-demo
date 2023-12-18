const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-2' });

const ses = new AWS.SES();

const htmlContents =
    '<html>' +
    "<h1 style='text-align:center'>AWS with JavaScript and NodeJS</h1>" +
    "<p style='color:red'>Welcome to the course and thanks for the buying</p>" +
    '</html>';

const params = {
    Destination: {
        ToAddresses: ['joan.rodriguez@example.com'],
    },

    Message: {
        Body: {
            Html: {
                Charset: 'UTF-8',
                Data: htmlContents,
            },
        },
        Subject: {
            Charset: 'UTF-8',
            Data: 'AWS Course with JavaScript & NodeJs',
        },
    },
    Source: 'jacob.garcia@example.com',
};

ses.sendEmail(params, function (err, data) {
    if (err) {
        console.log('unable to send email', err);
    } else {
        console.log('email is send', data);
    }
});
