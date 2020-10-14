const { hasShop } = require("../../src/services/aws.service.js");

describe("Signing with Storefront API and valid information", () => {
    test("It should connect to AWS dynamo", async () => {
        expect(hasShop()).toBeUndefined();
    });
});
