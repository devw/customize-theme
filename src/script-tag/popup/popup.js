import "./popup.css";
import html from "./popup.html";

const callback = (node) => {
    node.style.display = "flex";
    node.querySelector(".close").addEventListener("click", () => {
        node.style.display = "none";
    });
};

export const popup = () => ({ html: html, callback: callback });
