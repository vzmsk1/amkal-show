import "../../scss/sections/item-card.scss";

import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import { setThumbsClasses } from "../anim/item-card-carousel";
import { toggleScroll } from "../lib/locomotive-scroll";
import "swiper/css";
import gsap from "gsap";

const md = gsap.matchMedia();

const setLocoScrollAttr = (el) => {
  md.add("(min-width: 48em)", () => {
    el.classList.contains("header") && el.classList.add("fixed");
    el.setAttribute("data-scroll", "");
    el.setAttribute("data-scroll-sticky", "");
    el.setAttribute("data-scroll-target", "#item-card");

    return () => {
      el.classList.contains("header") && el.classList.remove("fixed");
      el.removeAttribute("style");
      el.removeAttribute("data-scroll");
      el.removeAttribute("data-scroll-sticky");
      el.removeAttribute("data-scroll-target");
    };
  });
};

if (document.querySelector(".item-card__thumbs-swiper")) {
  new Swiper(".item-card__thumbs-swiper", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 8,
  });
}

md.add("(max-width: 48em)", () => {
  const carousel = document.querySelector(".item-card__swiper")
    ? new Swiper(".item-card__swiper", {
        modules: [Navigation],
        loop: true,
        navigation: {
          prevEl: ".item-card__slider-btn_prev",
          nextEl: ".item-card__slider-btn_next",
        },
        on: {
          init: (swiper) => {
            const thumbs = document.querySelectorAll(
              ".item-card__thumbs-slide",
            );

            if (thumbs.length) {
              thumbs.forEach((thumb, idx) => {
                thumb.addEventListener("click", function () {
                  swiper.slideTo(idx);
                  setThumbsClasses(idx, thumbs);
                });
              });
            }
          },
          slideChange: (swiper) => {
            if (document.querySelectorAll(".item-card__thumbs-slide").length) {
              setThumbsClasses(
                swiper.activeIndex,
                document.querySelectorAll(".item-card__thumbs-slide"),
              );
            }
          },

          ...toggleScroll,
        },
      })
    : null;

  return () => {
    carousel && carousel.destroy();
  };
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".header").classList.add("fixed");

  setLocoScrollAttr(document.querySelector(".header"));
  setLocoScrollAttr(document.querySelector(".item-card__thumbs-swiper"));
  setLocoScrollAttr(document.querySelector(".item-card__content"));
});
