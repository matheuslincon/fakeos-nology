import { toggleMenu } from "./utils/menu-button.js";
import { currentTime } from "./utils/current-time.js";
import { calculatorApp } from "./utils/calculator.js"
import { createModal, deleteModal } from "./dom-utils/modal.js";

const menuButton = document.getElementById('menuButton');
const calculator = document.getElementById('calculator');
const closeButton = document.getElementById('close');

menuButton.addEventListener("click", (e) => {
    e.preventDefault();
    toggleMenu();
})

calculator.addEventListener("click", (e) => {
    e.preventDefault();
    // createModal();
})

closeButton?.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("close clicked")
})

currentTime();
calculatorApp();
