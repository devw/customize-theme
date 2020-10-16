import "./popup.css";
import html from "./popup.html";

const close = (e) => (e.target.closest(".popup").style.display = "none");

const callback = (node) => {
    node.style.display = "flex";
    node.querySelector(".close").addEventListener("click", close);
    addThemes(node);
};

export const popup = () => ({ html: html, callback: callback });
