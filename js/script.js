import { toggleMenu } from "./utils/menu-button.js";
import { currentTime } from "./utils/current-time.js";
import { calculatorApp } from "./utils/calculator.js"
import { createModal, deleteModal} from "./dom-utils/modal.js";
import { createCalc } from "./dom-utils/createCalc.js";
import { toggleCalc } from './utils/calc-app.js';
import { toggleMedia } from './utils/media-app.js'
import { toggleGallery } from './utils/media-toggle.js'
import { popUp } from './utils/gallery-popup.js';

const menuButton = document.getElementById('menuButton');
const calculator = document.getElementById('calculator');
const media = document.getElementById('mediaPlayer');
const myPictures = document.getElementById('myPictures');
const closeButtonCalc = document.getElementById('closeCalc');
const closeButtonMedia = document.getElementById('closeMedia');
const closeButtonGallery = document.getElementById('closeGallery');

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
    toggleMedia();
})

myPictures.addEventListener("click", (e) => {
    e.preventDefault();
    toggleGallery();
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

closeButtonGallery.addEventListener("click", (e) => {
    e.preventDefault();
    const galleryDiv = document.getElementById('galleryDiv');    
    galleryDiv.style.display = 'none';
})

currentTime();
calculatorApp();
popUp();