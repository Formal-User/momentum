const clock = document.querySelector("#clock");

function getClock(){
    const day = new Date();
    const h = `${day.getHours()}`.padStart(2,"0");
    const m = `${day.getMinutes()}`.padStart(2,"0");
    clock.innerText = `${h}:${m}`
}

getClock();
setInterval(getClock,1000);