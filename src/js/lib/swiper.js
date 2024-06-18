import Swiper from "swiper";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";

const setSlideContent = (slide) => {
  document.querySelector(".team__name").innerHTML = slide.dataset.name;
  document.querySelector(".team__text_team").innerHTML = slide.dataset.team;
  document.querySelector(".team__text_date").innerHTML = slide.dataset.date;
};

const initSliders = () => {
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
        afterInit: (swiper) =>
          setSlideContent(swiper.slides[swiper.activeIndex]),
        slideChange: (swiper) =>
          setSlideContent(swiper.slides[swiper.activeIndex]),
      },
    });
  }
};

window.addEventListener("load", initSliders);
