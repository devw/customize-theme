const AWS = require("aws-sdk");
const s3 = new AWS.S3();

const upload = async (event) => {
    const params = {
        ACL: "public-read",
        Body: event.fileContent,
        ContentType: "text/html",
        Bucket: process.env.UploadBucket,
        Key: event.fileName,
    };
    return await new Promise((resolve, reject) => {
        s3.putObject(params, (err, results) => {
            if (err) reject(err);
            else resolve(results);
        });
    });
};

const main = async (event) => {
    console.log("Event:", event);
    return upload(event);
};

exports.handler = main;
