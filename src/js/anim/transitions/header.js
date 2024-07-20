import gsap from "gsap";
import { createObserver } from "../mainpage-scroll";
import { animateHero } from "./hero";

export const animateHeader = () => {
  createObserver();

  gsap.to(document.querySelectorAll("[data-header-anim]"), {
    opacity: 1,
    stagger: 0.15,
    onStart: animateHero,
    onComplete: () => {
      import("../../pages/main-styles");
      if (document.querySelector(".about_ru")) {
        import("../../../scss/sections/main-ru.scss");
      }
    },
  });
};
