const lambdaFunction = async (event, context) => {
    console.log('Received event:', event);
    console.log('Context:', context);

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello from AWS Lambda!',
        }),
    };
};

exports.handler = lambdaFunction;
