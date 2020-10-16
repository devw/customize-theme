const API = require("../../src/services/aws.service.js");
const yaml = require("js-yaml");
const fs = require("fs");

describe("Using Amazon API Gateway", () => {
    test("It should get themes from DynamoDB", async () => {
        const { statusCode, body } = await API.getThemes();
        console.log(body);
        expect(statusCode).toBe(200);
    });
    test("It should write/update shop data into DynamoDB", async () => {
        const body = yaml.load(fs.readFileSync("./tests/fixtures/shop.yml"));
        const { statusCode } = await API.registerShop(body);
        expect(statusCode).toBe(201);
    });
    test("It should update a theme in S3 bucket", async () => {
        const file = "./tests/fixtures/theme01.zip";
        const body = {
            fileContent: fs.readFileSync(`${file}`, "utf-8"),
            fileName: file.match(/[^/]*$/)[0],
        };
        const result = await API.uploadTheme(body);
        console.log(result);
        expect(result.ETag).toBeDefined();
    });
});
