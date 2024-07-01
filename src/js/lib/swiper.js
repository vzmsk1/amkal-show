import Swiper from "swiper";
document.querySelector(".swiper") && import("swiper/css");
import { Navigation, Pagination, Thumbs } from "swiper/modules";

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
  if (document.querySelector(".feed-screen__swiper")) {
    new Swiper(".feed-screen__swiper", {
      modules: [Navigation],
      loop: true,
      spaceBetween: 203,
      slidesPerView: 3,
      navigation: {
        prevEl: ".feed-screen__nav-btn_prev",
        nextEl: ".feed-screen__nav-btn_next",
      },
      on: {
        afterInit: (swiper) => {
          swiper.slides.forEach((slide) =>
            slide.style.removeProperty("opacity"),
          );
        },
      },
    });
  }
  if (document.querySelector(".sponsors__swiper")) {
    new Swiper(".sponsors__swiper", {
      modules: [Navigation],
      loop: true,
      spaceBetween: 89,
      slidesPerView: "auto",
    });
  }
  if (document.querySelector(".item-card__thumbs-swiper")) {
    new Swiper(".item-card__thumbs-swiper", {
      loop: true,
      slidesPerView: "auto",
      spaceBetween: 8,
    });
  }
  if (
    document.querySelector(".item-card__swiper") &&
    window.innerWidth <= 768
  ) {
    new Swiper(".item-card__swiper", {
      loop: true,
    });
  }
};

window.addEventListener("load", initSliders);
