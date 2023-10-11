const playVideo = document.getElementById("play-video");
const video = document.querySelector("video");
const videoOverflow = document.getElementById("video-overflow");

playVideo.addEventListener("click", e => {
      playVideo.classList.add("hide");
      videoOverflow.classList.add("hide");
      video.play();
});
video.addEventListener("click", e => {
      playVideo.classList.remove("hide");
      videoOverflow.classList.remove("hide");
      video.pause();
})