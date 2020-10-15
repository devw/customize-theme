const { getThemes } = require("../../src/services/aws.service.js");

describe("Using Amazon API Gateway", () => {
    test("It should get themes from DynamoDB", async () => {
        const { statusCode, body } = await getThemes();
        console.log(body);
        expect(statusCode).toBe(200);
    });
});
