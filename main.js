function updateClock(){
    const clockElement = document.getElementById('clock');
    const now = new Date();
    let hours = String(now.getHours()).padStart(2,'0');
    let minutes = String(now.getMinutes()).padStart(2,'0');
    let secounds =String(now.getSeconds()).padStart(2,'0');
    clockElement.textContent=`${hours}:${minutes}:${secounds}`;
}
setInterval(updateClock , 1000);
updateClock();