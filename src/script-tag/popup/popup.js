import "./popup.css";
import html from "./popup.html";
// import { getThemes } from "../../services/aws.service";
import { getThemes } from "../../../tests/fixtures/themes";
import API from "../../services/aws.service";

const addThemes = (node) => {
    const child = document.createElement("select");
    let options = "";
    const { body } = getThemes();
    body.forEach((e) => (options += "<option>" + e.name + "</option>"));
    child.innerHTML = options;
    node.querySelector(".themes").appendChild(child);
};

const close = (e) => (e.target.closest(".popup").style.display = "none");

const uploadTheme = async (e) => {
    const child = e.target.closest("form");
    const body = {
        fileContent: "ok ok",
        fileName: "theme11.zip",
    };
    const { ETag } = await API.uploadTheme(body);
    console.log(ETag);
    API.uploadTheme();
};

const callback = (node) => {
    node.style.display = "flex";
    node.querySelector(".close").addEventListener("click", close);
    node.querySelector("#up-s3").addEventListener("click", uploadTheme);
    addThemes(node);
};

export const popup = () => ({ html: html, callback: callback });
