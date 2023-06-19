import { toggleMenu } from "./dom-utils/menu-button.js"

const menuButton = document.getElementById('menuButton');

menuButton.addEventListener("click", (e) => {
    e.preventDefault();
    toggleMenu();
})