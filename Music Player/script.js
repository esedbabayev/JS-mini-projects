const music = document.getElementById("music");

const playPauseBtn = document.getElementById("playPauseBtn");
const playPauseIcon = document.getElementById("playPauseIcon");

const ongoingTime = document.getElementById("ongoingTime");
const totalTime = document.getElementById("totalTime");

const proggressBar = document.getElementById("proggressBar");

const title = document.getElementById("title");
const artist = document.getElementById("artist");
const image = document.getElementById("image");

const nextButton = document.getElementById("nextButton");
const nextIcon = document.getElementById("nextIcon");

const prevButton = document.getElementById("prevButton");
const prevIcon = document.getElementById("prevIcon");

const proggressContainer = document.getElementById("proggressContainer");

const volumeSlider = document.getElementById("volumeSlider");
const volumeIcon = document.getElementById("volumeIcon");

let tracks = [
  {
    name: "The Trio",
    artist: "Ennio Morricone",
    title: "The Trio",
    duration: "5:00"
  },
  {
    name: "Destroyer Of Worlds",
    artist: "Ludwig Goransson",
    title: "Destroyer Of Worlds",
    duration: "2:54"
  },
  {
    name: "S.T.A.Y.",
    artist: "Hans Zimmer",
    title: "S.T.A.Y.",
    duration: "6:23"
  }
]

let songIndex = 0;

// Initialize the first song
const initializePlayer = () => {
  music.src = `music/${tracks[songIndex].name}.mp3`;
  image.src = `images/${tracks[songIndex].name}.png`;
  title.textContent = `${tracks[songIndex].title}`;
  artist.textContent = `${tracks[songIndex].artist}`;
  totalTime.textContent = tracks[songIndex].duration;
};

initializePlayer();

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

music.addEventListener("timeupdate", function () {
  const { currentTime, duration } = this;

  if (!duration) return;

  const durationMinute = Math.floor(duration / 60);
  const durationSecond = Math.floor(duration % 60);
  totalTime.textContent = `${durationMinute}:${String(durationSecond).padStart(2, "0")}`;

  const currentMinute = Math.floor(currentTime / 60);
  const currentSecond = Math.floor(currentTime % 60);
  ongoingTime.textContent = `${currentMinute}:${String(currentSecond).padStart(2, "0")}`;

  proggressBar.style.width = `${(currentTime / duration) * 100}%`
});

nextButton.addEventListener("click", () => {
  songIndex < tracks.length - 1 ? songIndex++ : songIndex = 0;
  changeSong();
});

prevButton.addEventListener("click", () => {
  songIndex > 0 ? songIndex-- : songIndex = tracks.length - 1;
  changeSong();
});

const changeSong = () => {
  music.src = `music/${tracks[songIndex].name}.mp3`;
  image.src = `images/${tracks[songIndex].name}.png`;
  title.textContent = `${tracks[songIndex].title}`;
  artist.textContent = `${tracks[songIndex].artist}`;
  totalTime.textContent = tracks[songIndex].duration;
  music.play();
  playPauseIcon.classList.remove("fa-play");
  playPauseIcon.classList.add("fa-pause");
};

proggressContainer.addEventListener("click", function (event) {
  const { offsetX: clickedPlace } = event;
  const { width } = this.getBoundingClientRect();
  const clickRatio = clickedPlace / width;

  proggressBar.style.width = `${clickRatio * 100}%`;
  music.currentTime = clickRatio * music.duration;
});

const nextSong = () => {
  songIndex = (songIndex + 1) % tracks.length;
  changeSong();
};

music.addEventListener("ended", nextSong);

document.addEventListener("DOMContentLoaded", () => {
  music.volume = 1;
  volumeSlider.value = music.volume * 100;

  
  volumeSlider.addEventListener("input", (event) => {
    const volume = event.target.value / 100;
    music.volume = volume;
    if (music.volume === 0){
      volumeIcon.classList.remove("fa-volume-high");
      volumeIcon.classList.add("fa-volume-xmark");
    } else {
      volumeIcon.classList.add("fa-volume-high");
      volumeIcon.classList.remove("fa-volume-xmark");
    }
  });
});

volumeIcon.addEventListener("click", () => {
  if (volumeIcon.classList.contains("fa-volume-up")) {
    volumeIcon.classList.remove("fa-volume-up");
    volumeIcon.classList.add("fa-volume-xmark");
    music.volume = 0;
  } else if (volumeIcon.classList.contains("fa-volume-xmark")) {
    volumeIcon.classList.remove("fa-volume-xmark");
    volumeIcon.classList.add("fa-volume-up");
    music.volume = 0.5;
  }
});
