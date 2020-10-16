const fetch = require("node-fetch");
const dotenv = require("dotenv");
dotenv.config();

const { API_GATEWAY } = process.env;

const getThemes = async () => {
    const response = await fetch(`${API_GATEWAY}/themes`);
    return await response.json();
};

const registerShop = async (body) => {
    const response = await fetch(`${API_GATEWAY}/shops`, {
        method: "POST",
        body: JSON.stringify(body),
    });
    return await response.json();
};

const uploadTheme = async (body) => {
    const response = await fetch(`${API_GATEWAY}/upload-on-s3`, {
        method: "POST",
        body: JSON.stringify(body),
    });
    return await response.json();
};

module.exports = {
    getThemes: getThemes,
    registerShop: registerShop,
    uploadTheme: uploadTheme,
};
