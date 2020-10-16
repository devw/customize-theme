"use strict";
const AWS = require("aws-sdk");
const ddb = new AWS.DynamoDB.DocumentClient({ region: "eu-west-3" });

exports.handler = async (event, context, callback) => {
    const requestId = context.awsRequestId;

    await registerShop(requestId, event).then(() => {
        callback(null, {
            statusCode: 201,
            body: { id: requestId, ...event },
        }).catch((err) => console.error(err));
    });
};

const registerShop = (requestId, event) => {
    const params = {
        TableName: process.env.TableName,
        Item: { id: requestId, ...event },
    };
    return ddb.put(params).promise();
};
