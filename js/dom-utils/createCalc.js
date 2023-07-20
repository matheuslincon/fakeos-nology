import { createEl } from "./createEl.js";

export const createCalc = () => {
    const content = document.getElementById('modalContent');

    const calculatorDiv = createEl('div');
    const displayDiv = createEl('div');
    const calcButtonsDiv = createEl('div');
    const cDiv = createEl('div');
    const ceDiv = createEl('div');
    const delDiv = createEl('div');
    const slashDiv = createEl('div');
    const sevenDiv = createEl('div');
    const eightDiv = createEl('div');
    const nineDiv = createEl('div');
    const asteriscDiv = createEl('div');
    const fourDiv = createEl('div');
    const fiveDiv = createEl('div');
    const sixDiv = createEl('div');
    const minusDiv = createEl('div');
    const oneDiv = createEl('div');
    const twoDiv = createEl('div');
    const threeDiv = createEl('div');
    const plusDiv = createEl('div');
    const zeroDiv = createEl('div');
    const dotDiv = createEl('div');
    const equalDiv = createEl('div');

    displayDiv.setAttribute("id", "display");
    equalDiv.setAttribute("id", "equal");

    cDiv.innerText = 'C';
    ceDiv.innerText = 'CE';
    delDiv.innerText = 'DEL';
    slashDiv.innerText = '/';
    sevenDiv.innerText = '7';
    eightDiv.innerText = '8';
    nineDiv.innerText = '9';
    asteriscDiv.innerText = '*';
    fourDiv.innerText = '4';
    fiveDiv.innerText = '5';
    sixDiv.innerText = '6';
    minusDiv.innerText = '-';
    minusDiv.innerText = '-';
    oneDiv.innerText = '1';
    twoDiv.innerText = '2';
    threeDiv.innerText = '3';
    plusDiv.innerText = '+';
    zeroDiv.innerText = '0';
    dotDiv.innerText = '.';
    equalDiv.innerText = '=';

    cDiv.classList.add("button");
    ceDiv.classList.add("button");
    delDiv.classList.add("button");
    slashDiv.classList.add("button");
    sevenDiv.classList.add("button");
    eightDiv.classList.add("button");
    nineDiv.classList.add("button");
    asteriscDiv.classList.add("button");
    fourDiv.classList.add("button");
    fiveDiv.classList.add("button");
    sixDiv.classList.add("button");
    minusDiv.classList.add("button");
    oneDiv.classList.add("button");
    twoDiv.classList.add("button");
    threeDiv.classList.add("button");
    plusDiv.classList.add("button");
    zeroDiv.classList.add("button");
    dotDiv.classList.add("button");
    equalDiv.classList.add("button");

    calcButtonsDiv.appendChild(cDiv);
    calcButtonsDiv.appendChild(ceDiv);
    calcButtonsDiv.appendChild(delDiv);
    calcButtonsDiv.appendChild(slashDiv);
    calcButtonsDiv.appendChild(sevenDiv);
    calcButtonsDiv.appendChild(eightDiv);
    calcButtonsDiv.appendChild(nineDiv);
    calcButtonsDiv.appendChild(asteriscDiv);
    calcButtonsDiv.appendChild(fourDiv);
    calcButtonsDiv.appendChild(fiveDiv);
    calcButtonsDiv.appendChild(sixDiv);
    calcButtonsDiv.appendChild(minusDiv);
    calcButtonsDiv.appendChild(oneDiv);
    calcButtonsDiv.appendChild(twoDiv);
    calcButtonsDiv.appendChild(threeDiv);
    calcButtonsDiv.appendChild(plusDiv);
    calcButtonsDiv.appendChild(zeroDiv);
    calcButtonsDiv.appendChild(dotDiv);
    calcButtonsDiv.appendChild(equalDiv);

    calcButtonsDiv.classList.add("calc-buttons");
    displayDiv.classList.add("calc-display");
    calculatorDiv.classList.add("calculator");

    calculatorDiv.appendChild(displayDiv);
    calculatorDiv.appendChild(calcButtonsDiv);

    content.appendChild(calculatorDiv);

}