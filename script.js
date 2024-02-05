let timer;
let stopwatch;
let timerRunning = false;
let stopwatchRunning = false;
let timerSeconds = 0;
let stopwatchSeconds = 0;

function startTimer() {
    if (!timerRunning) {
        timer = setInterval(updateTimer, 1000);
        timerRunning = true;
        toggleButtons(true, false, false);
    }
}

function pauseTimer() {
    clearInterval(timer);
    timerRunning = false;
    toggleButtons(false, true, true);
}

function resetTimer() {
    clearInterval(timer);
    timerRunning = false;
    timerSeconds = 0;
    updateTimerDisplay();
    toggleButtons(false, false, false);
}

function startStopwatch() {
    if (!stopwatchRunning) {
        stopwatch = setInterval(updateStopwatch, 1000);
        stopwatchRunning = true;
        toggleButtons(true, false, false);
    }
}

function pauseStopwatch() {
    clearInterval(stopwatch);
    stopwatchRunning = false;
    toggleButtons(false, true, true);
}

function resetStopwatch() {
    clearInterval(stopwatch);
    stopwatchRunning = false;
    stopwatchSeconds = 0;
    updateStopwatchDisplay();
    toggleButtons(false, false, false);
}

function updateTimer() {
    timerSeconds++;
    updateTimerDisplay();
}

function updateStopwatch() {
    stopwatchSeconds++;
    updateStopwatchDisplay();
}

function updateTimerDisplay() {
    const timerDisplay = document.getElementById("timer-display");
    const hours = Math.floor(timerSeconds / 3600);
    const minutes = Math.floor((timerSeconds % 3600) / 60);
    const seconds = timerSeconds % 60;
    timerDisplay.innerText = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function updateStopwatchDisplay() {
    const stopwatchDisplay = document.getElementById("stopwatch-display");
    const hours = Math.floor(stopwatchSeconds / 3600);
    const minutes = Math.floor((stopwatchSeconds % 3600) / 60);
    const seconds = stopwatchSeconds % 60;
    stopwatchDisplay.innerText = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(value) {
    return value < 10 ? `0${value}` : value;
}

function toggleButtons(start, pause, reset) {
    document.getElementById("start-timer").disabled = start;
    document.getElementById("pause-timer").disabled = pause;
    document.getElementById("reset-timer").disabled = reset;

    document.getElementById("start-stopwatch").disabled = start;
    document.getElementById("pause-stopwatch").disabled = pause;
    document.getElementById("reset-stopwatch").disabled = reset;
}
