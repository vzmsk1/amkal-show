import { setThumbsClasses } from "@js/anim/item-card-carousel";
import { locoScroll } from "@js/lib/locomotive-scroll";
import Swiper from "swiper";
document.querySelector(".swiper") && import("swiper/css");
import { Navigation, Pagination } from "swiper/modules";
import gsap from "gsap";

const md = gsap.matchMedia();

const toggleScroll = {
  touchStart: () => {
    locoScroll.stop();
  },
  touchEnd: () => {
    locoScroll.start();
  },
};

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
              if (
                document.querySelectorAll(".item-card__thumbs-slide").length
              ) {
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
};

initSliders();
