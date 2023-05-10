const hourEl = document.querySelector('#hour')
const minuteEl = document.querySelector('#minute')
const secondEl = document.querySelector('#second')
const millisecondsEl = document.querySelector('#milliseconds')
const startBtn = document.querySelector('#startBtn')
const resumeBtn = document.querySelector('#resumeBtn')
const pouseBtn = document.querySelector('#pouseBtn')
const resetBtn = document.querySelector('#resetBtn')

let interval;
let hour = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

startBtn.addEventListener('click', startTimer);
pouseBtn.addEventListener('click', pouseTimer);

function startTimer() {

    interval = setInterval(() => {

        if(!isPaused) {

            milliseconds += 10

            if(milliseconds === 1000) {
                seconds++;
                milliseconds = 0;
            }

            if(seconds === 60) {
                minutes++;
                seconds = 0;
            }

            if(minutes === 60) {
                hour++;
                minutes = 0;
            }

            hourEl.textContent = formaTime (hour)
            minuteEl.textContent = formaTime (minutes)
            secondEl.textContent = formaTime (seconds)
            millisecondsEl.textContent = formatMilleseconds (milliseconds)

        }

    }, 10);

}

function pouseTimer () {
    isPaused = true;
}

function formaTime(time) {
    return time < 10 ? `0${time}` : time ;

}

function formatMilleseconds(time) {
    return time < 100 ? `${time}`.padStart(3, `0`) : time;
}