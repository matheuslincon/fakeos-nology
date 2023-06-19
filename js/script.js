import { toggleMenu } from "./dom-utils/menu-button.js"
import { currentTime } from "./dom-utils/current-time.js"

const menuButton = document.getElementById('menuButton');

menuButton.addEventListener("click", (e) => {
    e.preventDefault();
    toggleMenu();
})

currentTime();