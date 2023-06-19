export const currentTime = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let session = "AM"

    if(hours === 0) {
        hours === 12;
    }
    if(hours > 12) {
        hours -= 12;
        session = "PM"
    }

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;

    let time = `${hours}:${minutes} ${session}`;

    document.getElementById("clock").innerText = time;
    setTimeout(() => { currentTime() }, 1000);
}