"use strict";
const AWS = require("aws-sdk");
const ddb = new AWS.DynamoDB.DocumentClient({ region: "eu-west-3" });

exports.handler = async (_, context, callback) => {
    await getThemes()
        .then((data) => {
            data.Items.forEach((item) => console.log(item));
            callback(null, {
                statusCode: 200,
                body: data.Items,
            });
        })
        .catch((err) => console.log(err));
};

const getThemes = () => {
    const params = {
        TableName: process.env.TableName,
        Limit: 10,
    };

    return ddb.scan(params).promise();
};
