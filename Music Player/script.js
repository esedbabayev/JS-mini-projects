const playPauseBtn = document.getElementById("playPauseBtn");
const playPauseIcon = document.getElementById("playPauseIcon");

const nextButton = document.getElementById("nextButton");
const nextIcon = document.getElementById("nextIcon");

const prevButton = document.getElementById("prevButton");
const prevIcon = document.getElementById("prevIcon");

const music = document.getElementById("music");

const currentTime = document.getElementById("currentTime");
const totalTime = document.getElementById("totalTime");

let tracks = [
  {
    title: ""

  }
]

playPauseBtn.addEventListener("click", () => {
  if (playPauseIcon.classList.contains("fa-play")) {
    music.play();
    playPauseIcon.classList.remove("fa-play");
    playPauseIcon.classList.add("fa-pause");
  }
  else if (playPauseIcon.classList.contains("fa-pause")) {
    music.pause();
    playPauseIcon.classList.remove("fa-pause");
    playPauseIcon.classList.add("fa-play");
  }
});

totalTime.addEventListener("timeupdate", () => {
  const duration = music.duration;
  totalTime.textContent = Math.floor(duration);
  console.log(duration);
});

