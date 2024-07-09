import "../scss/style.scss";
import "../scss/sections/feed-chapter.scss";

import "./lib/lightgallery";
window.innerWidth > 1024 && import("./lib/locomotive-scroll");

import { setCurrentYear, toggleClass } from "./utils/utils";
setCurrentYear();
toggleClass();

import "./utils/quantity";
import "./utils/script";

import { locoScroll } from "./lib/locomotive-scroll";
import Swiper from "swiper";
import("swiper/css");
import { Pagination } from "swiper/modules";

const toggleScroll = {
  touchStart: () => {
    locoScroll.stop();
  },
  touchEnd: () => {
    locoScroll.start();
  },
};

if (document.querySelector(".feed-chapter__bg-swiper")) {
  new Swiper(".feed-chapter__bg-swiper", {
    modules: [Pagination],
    loop: true,
    pagination: {
      el: ".feed-chapter__pagination",
      type: "bullets",
      clickable: true,
    },

    on: toggleScroll,
  });
}
if (document.querySelector(".feed-chapter__images-swiper")) {
  new Swiper(".feed-chapter__images-swiper", {
    modules: [],
    loop: true,
    slidesPerView: "auto",
    spaceBetween: window.innerWidth > 768 ? 17 : 8,
    freemode: true,
    on: toggleScroll,
  });
}
