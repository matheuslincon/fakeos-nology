export const popUp = () => {
    const images = Array.from(document.getElementsByClassName('grid-img'));

    const popup = document.getElementById('popUp');
    const selectedImg = document.getElementById('selectedImage');
    
    images.forEach((img) => {
        img.addEventListener('click', () => {
            popup.style.transform = 'translateY(0)';
            selectedImg.src = img.src;
        })
    })

    popup.addEventListener('click', () => {
        popup.style.transform = 'translateY(-100%)';
        popup.src = '';
    })
}