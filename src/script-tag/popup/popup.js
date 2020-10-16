import "./popup.css";
import html from "./popup.html";

const callback = (NODE) => {
    console.log(NODE);
};

export const popup = () => ({ html: html, callback: callback });
