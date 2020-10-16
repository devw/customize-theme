const API = require("../../src/services/aws.service.js");
const fs = require("fs");

describe("Using Amazon API Gateway", () => {
    test("It should get themes from DynamoDB", async () => {
        const { statusCode, body } = await API.getThemes();
        console.log(body);
        expect(statusCode).toBe(200);
    });
    test("It should create a new entry in shop table into DynamoDB", async () => {
        const body = {
            shop: "https://paso2000.myshopify.com/",
            access_token: "access_token_asdasdasdsa",
            storefront_token: "storefront_token_asdlasdhkusahdksah",
            theme_id: 1,
        };
        const { statusCode } = await API.registerShop(body);
        expect(statusCode).toBe(201);
    });
    test("It should update a theme in S3 bucket", async () => {
        const file = "./tests/fixtures/theme01.zip";
        const body = {
            fileContent: fs.readFileSync(`${file}`, "utf-8"),
            fileName: file.match(/[^/]*$/)[0],
        };
        const { ETag } = await API.uploadTheme(body);
        console.log(ETag);
        expect(ETag).toBeDefined();
    });
});
