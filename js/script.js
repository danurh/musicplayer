let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let ctrlIconPause = document.getElementById("ctrlIconPause");
const body = document.body;

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

ctrlIcon.addEventListener("click", function () {
  ctrlIcon.style.display = "none";
  ctrlIconPause.style.display = "inline-flex";
  song.play();
});

ctrlIconPause.addEventListener("click", function () {
  ctrlIcon.style.display = "inline-flex";
  ctrlIconPause.style.display = "none";
  song.pause();
});

if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}

progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  ctrlIcon.style.display = "none";
  ctrlIconPause.style.display = "inline-flex";
};

function changeSong() {
  body.classList.toggle("active");
}
