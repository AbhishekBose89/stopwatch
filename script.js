const timer = document.querySelector("#timer");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

const formatTime = (elapsedTime) => {
    const milliSeconds = Math.floor((elapsedTime % 1000) / 10);
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    return (
        (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
        ":" +
        (minutes ? (minutes > 9 ? minutes : "0" + seconds) : "00") +
        ":" +
        (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
        "." +
        (milliSeconds > 9 ? milliSeconds : "0" + milliSeconds)
    );
};
start.addEventListener("click", () => {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        timer.textContent = formatTime(elapsedTime);
    }, 10);
    start.disabled = true
    stop.disabled = false
});
stop.addEventListener("click", () => {
    clearInterval(timerInterval)
    start.disabled = false
    stop.disabled = true
});
reset.addEventListener("click", () => {
    clearInterval(timerInterval)
    elapsedTime = 0
    timer.textContent = "00:00:00"
    start.disabled = false
    stop.disabled = false
});
