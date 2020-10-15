const {
    getThemes,
    registerShop,
} = require("../../src/services/aws.service.js");

describe("Using Amazon API Gateway", () => {
    test("It should get themes from DynamoDB", async () => {
        const { statusCode, body } = await getThemes();
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
        const { statusCode } = await registerShop(body);
        expect(statusCode).toBe(201);
    });
});
