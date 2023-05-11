const hourEl = document.querySelector('#hour')
const minuteEl = document.querySelector('#minute')
const secondEl = document.querySelector('#second')
const millisecondsEl = document.querySelector('#milliseconds')
const startBtn = document.querySelector('#startBtn')
const resumeBtn = document.querySelector('#resumeBtn')
const pauseBtn = document.querySelector('#pauseBtn')
const resetBtn = document.querySelector('#resetBtn')

let interval;
let hour = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

startBtn.addEventListener(`click`, startTimer);
pauseBtn.addEventListener(`click`, pauseTimer);
resumeBtn.addEventListener(`click`, resumeTimer)
resetBtn.addEventListener(`click`, resetTimer)

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

function pauseTimer () {
    if(isPaused === true) {
        isPaused = false
   }
   else{
       isPaused = true
   }
}
function resumeTimer() {
    if(isPaused === false) {
        isPaused = true
    }
    else{
        isPaused = false
    }
}

function resetTimer(){
    clearInterval(interval)
    hour = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    hourEl.textContent = `00`
    minuteEl.textContent = `00`
    secondEl.textContent = `00`
    millisecondsEl.textContent = `000`
}

function formaTime(time) {
    return time < 10 ? `0${time}` : time ;

}

function formatMilleseconds(time) {
    return time < 100 ? `${time}`.padStart(3, `0`) : time;
}