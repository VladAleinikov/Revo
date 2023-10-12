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
const coffeSliderCard = [...document.querySelectorAll(".coffe__slider .slider__card")];
const coffeRight = document.getElementById("coffe__slide-right");
let coffeSlide = 0;

coffeRight.addEventListener("click", e => {
      const show = document.documentElement.clientWidth > 768 ? 2 : 1;
      coffeSlide += 1;
      if (coffeSlide == (coffeSliderCard.length / 2) - 1)
            coffeSlide = 0;
      coffeSlider[0].style.left = coffeSlide * -590 + "px";
      coffeSlider[1].style.left = coffeSlide * -590 + "px";
      coffeSliderCard.map((card, id) => {
            card.classList.remove("hide", "half-hide");
            if (id == coffeSlide + show || id == coffeSlide + show + coffeSliderCard.length / 2)
                  card.classList.add("half-hide");
            if (id > coffeSlide + show && id < coffeSliderCard.length / 2 || id > coffeSlide + show + coffeSliderCard.length / 2 && id < coffeSliderCard.length)
                  card.classList.add("hide");
      })
})

// Giftset
const giftsetControls = [...document.getElementsByClassName("giftset__control")];
const gifts = [...document.getElementsByClassName("gifts__gift")];

giftsetControls.map((btn, id) => btn.addEventListener("click", e => {
      giftsetControls.map(el => el.classList.remove("active"));
      btn.classList.add("active");

      gifts.map(el => el.classList.remove("active"));
      gifts[id].classList.add("active");
}))

// Combo slider
const comboSlider = [...document.getElementsByClassName("combo__slides")];
const comboSliderCard = [...document.querySelectorAll(".combo__slides .slider__card")];
const comboRight = document.getElementById("combo__slide-right");
let comboSlide = 0;

comboRight.addEventListener("click", e => {
      const show = document.documentElement.clientWidth > 1024 ? 3 : document.documentElement.clientWidth > 768 ? 2 : 1;
      comboSlide += 1;
      if (comboSlide == (comboSliderCard.length) - show + 1)
            comboSlide = 0;
      comboSlider[0].style.left = comboSlide * -390 + "px";
      showCombo(comboSlide);
})
const showCombo = (slide) => {
      const show = document.documentElement.clientWidth > 1024 ? 3 : document.documentElement.clientWidth > 768 ? 2 : 1;
      comboSliderCard.map((card, id) => {
            card.classList.remove("hide", "half-hide");
            if (id == slide + show)
                  card.classList.add("half-hide");
            if (id > slide + show && id < comboSliderCard.length / 2)
                  card.classList.add("hide");
      })
}
showCombo(0);

// scroll to
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
      smoothLink.addEventListener('click', function (e) {
            e.preventDefault();
            const id = smoothLink.getAttribute('href');

            document.querySelector(id).scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
            });
      });
};
