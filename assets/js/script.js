
let playerProgress = document.getElementById("player-progress");
let song = document.getElementById("song");
let playPauseIcon = document.getElementById("play-pause");
let playBtn = document.getElementById("play-btn");

song.onloadedmetadata = function () {
    playerProgress.max = song.duration;
    playerProgress.value = song.currentTime;
};

function playPause() {
    if (song.paused) {
        song.play();
        playPauseIcon.classList.replace("fa-play", "fa-pause");
    } else {
        song.pause();
        playPauseIcon.classList.replace("fa-pause", "fa-play");
    }
}

song.addEventListener("timeupdate", () => {
    playerProgress.value = song.currentTime;
});

playerProgress.addEventListener("input", () => {
    song.currentTime = playerProgress.value;
    if (song.paused) {
        song.play();
        playPauseIcon.classList.replace("fa-play", "fa-pause");
    }
});
