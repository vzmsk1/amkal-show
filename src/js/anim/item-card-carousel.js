import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { removeClasses } from "../utils/utils";

gsap.registerPlugin(ScrollTrigger);

const mm = gsap.matchMedia();

document.documentElement.classList.add("item-card-page");

export const setThumbsClasses = (idx, thumbs) => {
  removeClasses(thumbs, "_is-active");
  thumbs[idx] && thumbs[idx].classList.add("_is-active");
};

export const initItemCardCarousel = () => {
  if (document.querySelector(".item-card__swiper")) {
    mm.add("(min-width: 1024px)", () => {
      const thumbs = document.querySelectorAll(".item-card__thumbs-slide");

      document.querySelectorAll(".item-card__slide").forEach((slide, idx) => {
        gsap.timeline({
          scrollTrigger: {
            trigger: slide,
            start: "top top",
            end: "bottom bottom",
            onEnter: (e) => {
              setThumbsClasses(idx, thumbs);
            },
            onEnterBack: (e) => {
              setThumbsClasses(idx, thumbs);
            },
          },
        });
      });
    });
  }
};
