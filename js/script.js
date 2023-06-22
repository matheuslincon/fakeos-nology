import { toggleMenu } from "./utils/menu-button.js";
import { currentTime } from "./utils/current-time.js";
import { calculatorApp } from "./utils/calculator.js"
import { createModal, deleteModal} from "./dom-utils/modal.js";
import { createCalc } from "./dom-utils/createCalc.js";
import { toggleCalc } from './utils/calc-app.js';
import { toggleMedia } from './utils/media-app.js'

const menuButton = document.getElementById('menuButton');
const calculator = document.getElementById('calculator');
const media = document.getElementById('mediaPlayer');
const closeButtonCalc = document.getElementById('closeCalc');
const closeButtonMedia = document.getElementById('closeMedia');

menuButton.addEventListener("click", (e) => {
    e.preventDefault();
    toggleMenu();
})

calculator.addEventListener("click", (e) => {
    e.preventDefault();
    // createModal();
    // createCalc();
    toggleCalc();
})

media.addEventListener("click", (e) => {
    e.preventDefault();
    // createModal();
    // createCalc();
    toggleMedia();
})

closeButtonCalc.addEventListener("click", (e) => {
    e.preventDefault();
    const calcDiv = document.getElementById('calcDiv');    
    calcDiv.style.display = 'none';
})

closeButtonMedia.addEventListener("click", (e) => {
    e.preventDefault();
    const mediaDiv = document.getElementById('mediaDiv');    
    mediaDiv.style.display = 'none';
})

currentTime();
calculatorApp();