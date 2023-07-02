const path = require('path');
const fs = require('fs');
const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-1' });

const zipFileContent = fs.readFileSync(path.join(__dirname, 'index.js.zip'));

const lambda = new AWS.Lambda();

const createFunctionParams = {
    Code: {
        ZipFile: zipFileContent,
    },
    FunctionName: 'testLambdaFunction',
    Handler: 'index.handler',
    Role: 'arn:aws:iam::1234567890:role/lambda-execution-role',
    Runtime: 'nodejs14.x',
    Timeout: 30,
};

lambda.createFunction(createFunctionParams, (err, data) => {
    if (err) console.log(err, err.stack);
    else console.log(data);
});
