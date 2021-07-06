const controlSliderLeft = document.querySelector(".controls-sliders-left");
const controlSliderCenter = document.querySelector(".controls-sliders-center");
const controlSliderRight = document.querySelector(".controls-sliders-right");
const sliderLeft = document.querySelector(".slide-1");
const sliderCenter = document.querySelector(".slide-2");
const sliderRight = document.querySelector(".slide-3");
const activeLeft = document.querySelector(".controls-sliders-active-left");
const activeCenter = document.querySelector(".controls-sliders-active-center");
const activeRight = document.querySelector(".controls-sliders-active-right");

controlSliderLeft.addEventListener("click", function(evt) {
    evt.preventDefault();
    sliderLeft.classList.remove("none");
    sliderCenter.classList.add("none");
    sliderRight.classList.add("none");
    activeLeft.classList.remove("none");
    activeLeft.classList.add("controls-sliders-active");
    activeCenter.classList.add("none");
    activeRight.classList.add("none");
});

controlSliderCenter.addEventListener("click", function(evt) {
    evt.preventDefault();
    sliderLeft.classList.add("none");
    sliderCenter.classList.remove("none");
    sliderRight.classList.add("none");
    activeLeft.classList.add("none");
    activeCenter.classList.remove("none");
    activeRight.classList.add("none");
});

controlSliderRight.addEventListener("click", function(evt) {
    evt.preventDefault();
    sliderLeft.classList.add("none");
    sliderCenter.classList.add("none");
    sliderRight.classList.remove("none");
    activeLeft.classList.add("none");
    activeCenter.classList.add("none");
    activeRight.classList.remove("none");
});