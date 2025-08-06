// main.js
import { initCarousel } from './carousel.js';

initCarousel({
  slideSelector: '.carousel-slide',
  dotSelector: '.dot',
  leftBtnSelector: '.nav.left',
  rightBtnSelector: '.nav.right',
  containerSelector: '.carousel-container',
  intervalTime: 5000 // optional, default is 5000
});
