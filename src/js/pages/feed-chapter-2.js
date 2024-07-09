import "../../scss/sections/gallery.scss";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { locoScroll } from "../lib/locomotive-scroll";
import "swiper/css";

if (document.querySelector(".gallery__swiper")) {
  new Swiper(".gallery__swiper", {
    modules: [Navigation, Pagination],
    loop: true,
    grabCursor: true,
    autoHeight: true,
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
    on: {
      slideChange: () => {
        locoScroll.update();
      },
    },
  });
}
