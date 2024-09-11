// import "../../scss/sections/feed-chapter.scss";
// import "../../scss/sections/items-carousel.scss";
// window.innerWidth > 1024 && import("../lib/locomotive-scroll");

import "../lib/lightgallery";
import Swiper from "swiper";
import { Pagination } from "swiper/modules";
import("swiper/css");
// import { toggleScroll } from "../lib/locomotive-scroll";

if (document.querySelector(".feed-chapter__bg-swiper")) {
  new Swiper(".feed-chapter__bg-swiper", {
    modules: [Pagination],
    loop: true,
    pagination: {
      el: ".feed-chapter__pagination",
      type: "bullets",
      clickable: true,
    },

    // on: toggleScroll,
  });
}
if (document.querySelector(".feed-chapter__images-swiper")) {
  new Swiper(".feed-chapter__images-swiper", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: window.innerWidth > 768 ? 17 : 8,
    freemode: true,
    // on: toggleScroll,
  });
}
