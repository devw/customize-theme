import { popup } from "./popup/popup";

const loadComponent = ({ html, callback }) => {
    const node = document.createElement("div");
    node.innerHTML = html;
    document.body.appendChild(node);
    callback(node);
};

loadComponent(popup());
