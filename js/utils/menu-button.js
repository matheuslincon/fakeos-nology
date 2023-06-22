export const toggleMenu = () => {
    const menuDiv = document.getElementById('menuDisplay');    
    const displaySetting = menuDiv.style.display;
    
    if(displaySetting === 'none') {
        menuDiv.style.display = 'block'
    } else {
        menuDiv.style.display = 'none'
    }

}