let sliderIndex = 0;

window.onload = () => {
  setInitialSlider();
};

function setInitialSlider() {
  renderCarousel(sliderData[sliderIndex]);
}

function renderCarousel(sliderItem) {
  document.getElementById("comment").innerText = sliderItem.content;
  document.getElementById("author").innerText = sliderItem.author;
}

function currentSlide(n) {
  renderCarousel(sliderData[n]);
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active-dot", "");
  }
  dots[n].className += " active-dot";
}

setInterval(function showNext() {
  try {
    renderCarousel(sliderData[++sliderIndex]);
    currentSlide(sliderIndex);
  } catch (error) {
    sliderIndex = 0;
    renderCarousel(sliderData[sliderIndex]);
    currentSlide(0);
  }
}, 5000);
