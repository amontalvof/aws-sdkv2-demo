const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-1' });

const lambda = new AWS.Lambda();

const params = { FunctionName: 'testLambdaFunction' };

lambda.deleteFunction(params, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Lambda function deleted', data);
    }
});
