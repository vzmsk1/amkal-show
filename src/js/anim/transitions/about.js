import { defaults } from "../../anim/transitions";
import gsap from "gsap";
import {
  animateGlitchText,
  moveGlitchText,
  setGlitchStyling,
} from "../../utils/splitGlitchText";
import { setActiveScreen } from "../mainpage-scroll";
import { heroTl } from "./hero";

export const leaveAboutTl = gsap
  .timeline({
    ...defaults,
    paused: true,
    ease: "power4.in",
  })
  .to(".about__text", { opacity: 0 })
  .to(".about__image-wrap", { opacity: 0, translateX: 383 }, 0)
  .to(
    ".about__title-txt_sm",
    {
      opacity: 0,
      translateX: "100vw",
      stagger: -0.1,
      onStart: () => {
        document
          .querySelectorAll(".about__title .glitch-text")
          .forEach((item) => {
            const letters = item.querySelectorAll(".letter");

            letters.forEach((letter, i) => {
              moveGlitchText(letter, letters, i);
            });
          });
      },
    },
    0,
  );

export const aboutTl = gsap
  .timeline({
    ...defaults,
    paused: true,
    ease: "power4.out",
    onStart: () => {
      gsap.to(".about__text .char", { opacity: 1, stagger: 0.05 });

      animateGlitchText(".about__title .io .letter");

      document.querySelectorAll(".about__title .lr .letter").forEach((el) => {
        gsap.to(el.querySelectorAll(".glitch"), {
          stagger: 0.1,
          translateX: 0,
          scaleX: 1,
        });
        el.querySelectorAll(".glitch").forEach((glitch, j) => {
          gsap.to(glitch.querySelector("span"), {
            stagger: 0.1,
            top: +el.querySelectorAll("span")[j].dataset.top,
            ease: "power4.out",
            delay: 0.05,
            duration: 1,
          });
        });
      });
    },
  })
  .to(".about__image-wrap", {
    translateX: 0,
    opacity: 1,
    duration: 1,
  })
  .to(".about__title-txt_sm_1", {
    opacity: 1,
    translateX: -384,
  })
  .to(".about__title-txt_sm_2", {
    opacity: 1,
    translateX: -22,
  })
  .to(".about__title-txt_sm_3", {
    opacity: 1,
    translateX: -1,
  });
