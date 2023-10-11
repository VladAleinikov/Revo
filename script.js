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

// Slider coffe
const coffeSlider = [...document.getElementsByClassName("coffe__slides")];
const sliderCard = [...document.getElementsByClassName("slider__card")];
const coffeRight = document.getElementById("coffe__slide-right");
let coffeSlide = 0;

coffeRight.addEventListener("click", e => {
      const show = document.documentElement.clientWidth > 768 ? 2 : 1;
      coffeSlide += 1;
      if (coffeSlide == (sliderCard.length / 2) - 1)
            coffeSlide = 0;
      coffeSlider[0].style.left = coffeSlide * -590 + "px";
      coffeSlider[1].style.left = coffeSlide * -590 + "px";
      sliderCard.map((card, id) => {
            card.classList.remove("hide", "half-hide");
            if (id == coffeSlide + show || id == coffeSlide + show + sliderCard.length / 2)
                  card.classList.add("half-hide");
            if (id > coffeSlide + show && id < sliderCard.length / 2 || id > coffeSlide + show + sliderCard.length / 2 && id < sliderCard.length)
                  card.classList.add("hide");
      })
})