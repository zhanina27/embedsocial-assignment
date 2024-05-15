document.addEventListener("DOMContentLoaded", function () {
  const burgerMenuButton = document.querySelector(".burger-menu-button");
  const burgerMenu = document.querySelector(".burger-menu");

  burgerMenuButton.addEventListener("click", function () {
    burgerMenu.classList.toggle("open");
  });

  document.addEventListener("click", function (event) {
    if (
      !burgerMenuButton.contains(event.target) &&
      !burgerMenu.contains(event.target)
    ) {
      burgerMenu.classList.remove("open");
    }
  });
});

const carousel = document.querySelector(".carousel");
const prevButton = carousel.querySelector(".carousel-prev");
const nextButton = carousel.querySelector(".carousel-next");
const carouselInner = carousel.querySelector(".carousel-inner");

let currentIndex = 0;

prevButton.addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + carouselInner.children.length) %
    carouselInner.children.length;
  updateCarousel();
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % carouselInner.children.length;
  updateCarousel();
});

function updateCarousel() {
  const itemWidth = carouselInner.clientWidth;
  const offset = -currentIndex * itemWidth;
  carouselInner.style.transform = `translateX(${offset}px)`;
}
