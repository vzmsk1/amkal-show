import "../../scss/sections/hero.scss";
import "../../scss/sections/about.scss";
import "../../scss/sections/victory.scss";
import "../../scss/sections/lang.scss";
import "../../scss/sections/loader.scss";
import "../../scss/sections/feed-screen.scss";
import "../../scss/sections/merch.scss";
import "../../scss/sections/match.scss";
import "../../scss/sections/match.scss";
import "../../scss/sections/footer-main.scss";

import "../utils/initLoader";

import Swiper from "swiper";
import { Navigation, Grid } from "swiper/modules";
import "swiper/css";

document.addEventListener("DOMContentLoaded", function () {
  document.documentElement.classList.add("mainpage");

  if (document.querySelector(".feed-screen__swiper")) {
    new Swiper(".feed-screen__swiper", {
      modules: [Navigation, Grid],
      loop: true,
      // slidesPerView: 3,
      // spaceBetween: 203,
      navigation: {
        prevEl: ".feed-screen__nav-btn_prev",
        nextEl: ".feed-screen__nav-btn_next",
      },

      // spaceBetween: 184,
      // slidesPerView: 2,
      // grid: {
      //   rows: 2,
      // },
    });
  }
  if (document.querySelector(".footer-main__sponsors-swiper")) {
    new Swiper(".footer-main__sponsors-swiper", {
      loop: true,
      slidesPerView: "auto",
      spaceBetween: 89,
    });
  }
});
