import { animateHeader } from "../anim/transitions/header";
import gsap from "gsap";
import Splitting from "splitting";
import Swiper from "swiper";
import("swiper/css");
import { Navigation, Grid } from "swiper/modules";

Splitting();

document.documentElement.classList.add("mainpage");

const mm = gsap.matchMedia();

const initSlider = () => {
  new Swiper(".feed-screen__swiper", {
    modules: [Navigation],
    rewind: true,
    spaceBetween: window.innerWidth > 1024 ? 210 : 30,
    navigation: {
      prevEl: ".feed-screen__nav-btn_prev",
      nextEl: ".feed-screen__nav-btn_next",
    },
    breakpoints: {
      769: {
        slidesPerView: 2,
      },
      1024: {
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
    spaceBetween: window.innerHeight < 1230 ? 20 : 184,
    slidesPerView: 2,
    grid: {
      rows: 2,
    },
  });
};

document.fonts.ready.then(function () {
  gsap.set(".loader__text", { opacity: 1 });
  gsap.to(".loader__text .char", { opacity: 1, stagger: 0.1 });
});

window.addEventListener("load", function () {
  document.documentElement.classList.add("_is-animating");

  gsap.to(".loader", {
    opacity: 0,
    onComplete: () => {
      document.querySelector(".loader").remove();

      if (document.querySelector(".feed-screen__swiper")) {
        window.matchMedia(
          "(max-width: 1024px) and (min-width: 48.1em) and (min-height: 1200px)",
        ).matches
          ? initGridSlider()
          : initSlider();

        mm.add(
          "(max-width: 1024px) and (min-width: 48.1em) and (min-height: 1200px)",
          () => {
            initGridSlider();

            return () => {
              initSlider();
            };
          },
        );
      }
      if (document.querySelector(".footer-main__sponsors-swiper")) {
        new Swiper(".footer-main__sponsors-swiper", {
          loop: true,
          slidesPerView: "auto",
          spaceBetween: 89,
        });
      }

      animateHeader();
    },
  });
});
