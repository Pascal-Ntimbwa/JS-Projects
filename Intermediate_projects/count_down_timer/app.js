const hoursInputEl = document.getElementById("hoursInput");
const minutesInputEl = document.getElementById("minutesInput");
const secondsInputEl = document.getElementById("secondsInput");

const hoursOutputEl = document.getElementById("hoursOutput");
const minutesOutputEl = document.getElementById("minutesOutput");
const secondsOutputEl = document.getElementById("secondsOutput");

const startTimerEl = document.getElementById("startTimer");

let targetTime;

let timerInterval;

const updateTimer = () => {
  if (targetTime) {
    const differenceInSeconds = Math.floor(targetTime - Date.now()) / 1000;

    if (differenceInSeconds < 1) {
      clearInterval(timerInterval);
    }

    const hours = Math.floor(differenceInSeconds / 3600);
    const minutes = Math.floor((differenceInSeconds % 3600) / 60);
    const seconds = Math.floor(differenceInSeconds % 60);

    hoursOutputEl.textContent = `${hours} hours`;
    minutesOutputEl.textContent = `${minutes} minutes`;
    secondsOutputEl.textContent = `${seconds} seconds`;
  }
};

startTimerEl.addEventListener("click", () => {
  const futureHours = parseInt(hoursInputEl.value);
  const futureMinutes = parseInt(minutesInputEl.value);
  const futureSeconds = parseInt(secondsInputEl.value);

  const date = new Date();

  const currentHours = date.getHours();
  const currentMinutes = date.getMinutes();
  const currentSeconds = date.getSeconds();

  date.setHours(currentHours + futureHours);
  date.setMinutes(currentMinutes + futureMinutes);
  date.setSeconds(currentSeconds + futureSeconds);

  targetTime = date.getTime();

  localStorage.setItem("targetTime", targetTime);

  updateTimer();
  timerInterval = setInterval(updateTimer, 100);
});


const storedTargetTime = localStorage.getItem("targetTime");

if (storedTargetTime) {
  targetTime = storedTargetTime;
  updateTimer();
  timerInterval = setInterval(updateTimer, 100);
};
