const time = {
  minute: document.querySelector(".js-minutes"),
  second: document.querySelector(".js-seconds"),
  millisecond: document.querySelector(".js-milliseconds")
};

const buttons = {
  btnStart: document.querySelector(".js-btn-start"),
  btnStop: document.querySelector(".js-btn-stop"),
  btnReset: document.querySelector(".js-btn-reset"),
  btnToggleTheme: document.querySelector(".js-btn-toggleTheme")
};

const wrapper = document.querySelector(".wrapper");

let timeInterval;
let timeStamp;

buttons.btnStart.addEventListener("click", startTimer);
buttons.btnStop.addEventListener("click", stopTimer);
buttons.btnReset.addEventListener("click", resetTimer);

buttons.btnToggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

// * базовая функция секундомера

function timer() {
  timeStamp = Date.now();
  clearInterval(timeInterval);
  timeInterval = setInterval(function() {
    const diff = Date.now() - timeStamp;
    const now = new Date();
    const milliseconds = now.getMilliseconds();
    const seconds = Math.floor((diff / 1000 ) % 60);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    time.millisecond.textContent = milliseconds;
    time.second.textContent = addNull(seconds);
    time.minute.textContent = addNull(minutes);
  }, 12)
}

// * функция добавления нуля для значения < 10

function addNull(number) {
  if (number < 10) {
    return (number = "0" + number);
  }

  return number;
}

// * функция запуска секундомера

function startTimer() {
  timer();
  wrapper.style.borderBottomColor = "#03AE85";
}

// * функция остановки секундомера

function stopTimer() {
  clearInterval(timeInterval);
  wrapper.style.borderBottomColor = "#FFC830";
}

// * функция сброса секундомера

function resetTimer() {
  clearInterval(timeInterval);

  time.millisecond.textContent = "00";
  time.second.textContent = "00";
  time.minute.textContent = "00";

  wrapper.style.borderBottomColor = "#FD6259";
}