window.innerWidth > 1024 && import("../lib/locomotive-scroll");
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { toggleScroll } from "../lib/locomotive-scroll";
import("swiper/css");
import "../lib/lightgallery";

if (document.querySelector(".gallery__swiper")) {
  new Swiper(".gallery__swiper", {
    modules: [Navigation, Pagination],
    loop: true,
    grabCursor: true,
    navigation: {
      prevEl: ".gallery__slider-btn_prev",
      nextEl: ".gallery__slider-btn_next",
    },
    pagination: {
      el: ".gallery__fraction",
      type: "custom",
      renderCustom: function (swiper, current, total) {
        return current + "<span>/</span>" + total;
      },
    },
  });
}
if (document.querySelector(".feed-chapter__images-swiper")) {
  new Swiper(".feed-chapter__images-swiper", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: window.innerWidth > 768 ? 17 : 8,
    freemode: true,
    on: toggleScroll,
  });
}
