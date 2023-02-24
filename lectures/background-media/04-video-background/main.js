var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("play-pause");

// Pause and play the video, and change the button text
function playPause() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}