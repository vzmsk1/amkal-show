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

import gsap from "gsap";
import Swiper from "swiper";
import { Navigation, Grid } from "swiper/modules";
import "swiper/css";
import { remToPx } from "../utils/utils";

const mm = gsap.matchMedia();

const initSlider = () => {
  new Swiper(".feed-screen__swiper", {
    modules: [Navigation],
    rewind: true,
    spaceBetween: remToPx(31.1),
    navigation: {
      prevEl: ".feed-screen__nav-btn_prev",
      nextEl: ".feed-screen__nav-btn_next",
    },
    breakpoints: {
      769: {
        slidesPerView: 3,
      },
    },
    on: {
      touchMove: () => {
        document.documentElement.classList.add("_touch");
      },
      touchEnd: () => {
        document.documentElement.classList.remove("_touch");
      },
    },
  });
};

const initGridSlider = () => {
  new Swiper(".feed-screen__swiper", {
    modules: [Navigation, Grid],
    rewind: true,
    navigation: {
      prevEl: ".feed-screen__nav-btn_prev",
      nextEl: ".feed-screen__nav-btn_next",
    },
    spaceBetween:
      window.innerWidth <= 1024 && window.innerHeight < 1200 ? 50 : 184,
    slidesPerView: 2,
    grid: {
      rows: 2,
    },
  });
};

document.addEventListener("DOMContentLoaded", function () {
  document.documentElement.classList.add("mainpage");

  if (document.querySelector(".feed-screen__swiper")) {
    window.matchMedia("(max-width: 1024px) and (min-width: 48.1em)").matches
      ? initGridSlider()
      : initSlider();

    mm.add("(max-width: 1024px) and (min-width: 48.1em)", () => {
      initGridSlider();

      return () => {
        initSlider();
      };
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
