const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-1' });

const lambda = new AWS.Lambda();

const invokeParams = {
    FunctionName: 'testLambdaFunction',
    Payload: JSON.stringify({
        name: 'John Doe',
    }),
};

lambda.invoke(invokeParams, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
