import { createEl } from "./createEl.js";

export const createModal = () => {
    const desktopApps = document.getElementById("desktopApps")

    const modalDiv = createEl('div')
    const headerDiv = createEl('div')
    const contentDiv = createEl('div')
    const textDiv = createEl('div')
    const buttonsDiv = createEl('div')
    const buttonDash = createEl('button')
    const buttonSquare = createEl('button')
    const buttonEx = createEl('button')


    buttonEx.setAttribute("id", "close")
    buttonEx.innerText = 'X'
    buttonDash.innerText = '-'
    buttonSquare.innerText = '□'
    textDiv.innerText = 'Modal'

    modalDiv.classList.add("modal")
    headerDiv.classList.add("modal__header")
    contentDiv.classList.add("modal__content")
    textDiv.classList.add("header-text")
    buttonsDiv.classList.add("header-buttons")

    buttonsDiv.appendChild(buttonDash)
    buttonsDiv.appendChild(buttonSquare)
    buttonsDiv.appendChild(buttonEx)

    headerDiv.appendChild(textDiv)
    headerDiv.appendChild(buttonsDiv)
    
    modalDiv.appendChild(headerDiv)
    modalDiv.appendChild(contentDiv)


    desktopApps.appendChild(modalDiv)
}

export const deleteModal = (modal) => {
    if(modal) {
        modal.remove();
    }
}