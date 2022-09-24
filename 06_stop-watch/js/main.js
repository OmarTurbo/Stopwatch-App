const time_el = document.querySelector('.NumBox ');
const StartButton = document.getElementById("start");
const StopButton = document.getElementById("stop");
const ResetButton = document.getElementById("reset");

let Secounds = 0;
let interval = null;


//Event lisetners
StartButton.addEventListener(`click`, start);
StopButton.addEventListener(`click`, Stop);
ResetButton.addEventListener(`click`, reset);


// Timer Update Function


function timer() {

    Secounds++;


    // Formate our Time 

    let hrs = Math.floor(Secounds / 3600);
    let mins = Math.floor(((Secounds - (3600 * hrs)) / 60));
    let secs = Secounds % 60;

    if (hrs < 10) hrs = `0` + hrs;
    if (mins < 10) mins = `0` + mins;
    if (secs < 10) secs = `0` + secs;


    time_el.innerHTML = `${hrs}:${mins}:${secs}`;
}


function start() {
    if (interval) {
        return;
    }

    interval = setInterval(timer, 1000);
}

function Stop() {
    clearInterval(interval);
    interval = null;
}

function reset() {
    stop();
    Secounds = 0;
    clearInterval(interval);
    interval = null;
    time_el.innerHTML = `00:00:00`;
}