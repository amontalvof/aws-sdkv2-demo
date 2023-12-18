const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-2' });

const ses = new AWS.SES();

ses.listTemplates(function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data['TemplatesMetadata']);
    }
});
