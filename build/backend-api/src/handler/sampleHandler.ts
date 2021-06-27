import * as lambda from 'aws-lambda'

exports.handler = async function (event: lambda.APIGatewayEvent, context: lambda.Context) {
  console.log("request:", JSON.stringify(event, undefined, 2));
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: `Hello, CDK! You've hit ${event.path}\n ${context.functionName}\n`
  };
};