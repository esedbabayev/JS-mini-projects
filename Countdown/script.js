const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const worldCup = new Date(2026, 5, 11);

const timer = (date) => {
  const now = new Date();
  const timeDiff = date - now;

  const day = 24 * 3600 * 1000;
  const nmbrOfDays = Math.floor(timeDiff / day);
  days.textContent = nmbrOfDays;

  const hour = 3600 * 1000;
  const nmbrOfHours = Math.floor((timeDiff / hour) % 24);
  hours.textContent = String(nmbrOfHours).padStart(2, 0);

  const minute = 60 * 1000;
  const nmbrOfMinutes = Math.floor((timeDiff / minute) % 60);
  minutes.textContent = String(nmbrOfMinutes).padStart(2, 0);

  const second = 1000;
  const nmbrOfSeconds = Math.floor((timeDiff / second) % 60);
  seconds.textContent = String(nmbrOfSeconds).padStart(2, 0);
};

timer(worldCup);

setInterval(() => {
  timer(worldCup);
}, 1000);