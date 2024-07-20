import "../../scss/sections/team.scss";
window.innerWidth > 1024 && import("../lib/locomotive-scroll");

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import { initVideoJS } from "../lib/video";
import { setSlideContent } from "../utils/utils";

if (document.querySelector(".team__swiper")) {
  new Swiper(".team__swiper", {
    modules: [Navigation, Pagination],
    loop: true,
    spaceBetween: 30,
    navigation: {
      prevEl: ".team__nav-btn_prev",
      nextEl: ".team__nav-btn_next",
    },
    pagination: {
      el: ".team__fraction",
      type: "custom",
      renderCustom: function (swiper, current, total) {
        return current + "/" + total;
      },
    },
    on: {
      afterInit: (swiper) => setSlideContent(swiper.slides[swiper.activeIndex]),
      slideChange: (swiper) =>
        setSlideContent(swiper.slides[swiper.activeIndex]),
    },
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initVideoJS();
});
