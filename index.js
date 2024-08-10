let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');
let display = document.getElementById('display');

let timer;
let isRunning = false;
let elapsedTime = 0;

function formatTime(ms) {
    let date = new Date(ms);
    return date.toISOString().substr(11, 8); }

function startTimer() {
    if (!isRunning) {
        timer = setInterval(() => {
            elapsedTime += 1000;
            display.textContent = formatTime(elapsedTime);
        }, 1000);
        isRunning = true;
    }
}

function stopTimer() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    }
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    display.textContent = '00:00:00';
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
