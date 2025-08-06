// carousel.js

let current = 0;
let slideInterval;

export function initCarousel({
  slideSelector,
  dotSelector,
  leftBtnSelector,
  rightBtnSelector,
  containerSelector,
  intervalTime = 5000
}) {
  const slides = document.querySelectorAll(slideSelector);
  const dots = document.querySelectorAll(dotSelector);
  const leftBtn = document.querySelector(leftBtnSelector);
  const rightBtn = document.querySelector(rightBtnSelector);
  const carousel = document.querySelector(containerSelector);

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
      dots[i].classList.toggle("active", i === index);
    });
    current = index;
  }

  function nextSlide() {
    showSlide((current + 1) % slides.length);
  }

  function prevSlide() {
    showSlide((current - 1 + slides.length) % slides.length);
  }

  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  function stopAutoSlide() {
    clearInterval(slideInterval);
  }

  // Event Listeners
  leftBtn.addEventListener("click", prevSlide);
  rightBtn.addEventListener("click", nextSlide);
  dots.forEach((dot, index) =>
    dot.addEventListener("click", () => showSlide(index))
  );

  carousel.addEventListener("mouseenter", stopAutoSlide);
  carousel.addEventListener("mouseleave", startAutoSlide);

  // Init
  showSlide(0);
  startAutoSlide();
}




// const slides = document.querySelectorAll(".carousel-slide");
// const dots = document.querySelectorAll(".dot");
// const leftBtn = document.querySelector(".nav.left");
// const rightBtn = document.querySelector(".nav.right");
// const carousel = document.querySelector(".carousel-container");

// let current = 0;
// let slideInterval;

// // Show slide by index
// function showSlide(index) {
//   slides.forEach((slide, i) => {
//     slide.classList.toggle("active", i === index);
//     dots[i].classList.toggle("active", i === index);
//   });
//   current = index;
// }

// // Manual controls
// leftBtn.addEventListener("click", () => {
//   showSlide((current - 1 + slides.length) % slides.length);
// });

// rightBtn.addEventListener("click", () => {
//   showSlide((current + 1) % slides.length);
// });

// dots.forEach((dot, index) => {
//   dot.addEventListener("click", () => showSlide(index));
// });

// // Auto-slide
// function startAutoSlide() {
//   slideInterval = setInterval(() => {
//     showSlide((current + 1) % slides.length);
//   }, 5000);
// }

// function stopAutoSlide() {
//   clearInterval(slideInterval);
// }

// // Pause on hover
// carousel.addEventListener("mouseenter", stopAutoSlide);
// carousel.addEventListener("mouseleave", startAutoSlide);

// // Initialize
// showSlide(0);
// startAutoSlide();

