const fetch = require("node-fetch");
const { API_GATEWAY } = require("../config");

const getThemes = async () => {
    const response = await fetch(`${API_GATEWAY}/themes`);
    return await response.json();
};

module.exports = {
    getThemes: getThemes,
};
