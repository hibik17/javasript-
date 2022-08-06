import Swiper from "https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js";

const swiper = new Swiper(".swiper", {
  // ページネーションが必要なら追加
  autoplay: {
    delay: 5000,
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  spaceBetween: 100,
  pagination: {
    el: ".swiper-pagination",
  },
  // ナビボタンが必要なら追加
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
