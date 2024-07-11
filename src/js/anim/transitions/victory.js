import { setActiveScreen } from "../../anim/mainpage-scroll";
import { enterLangScreen } from "../../anim/screen/lang";
import { defaults } from "../../anim/transitions";
import gsap from "gsap";

export const victoryTl = gsap.timeline({
  ...defaults,
  paused: true,
  ease: "power4.out",
});
export const victoryLeaveTl = gsap.timeline({
  ...defaults,
  paused: true,
  ease: "power4.in",
});

victoryLeaveTl
  .to(".victory__title-txt_sm_2, .victory__title-txt_sm_3", {
    opacity: 0,
    translateX: "100vw",
    stagger: 0.01,
    onStart: () => {
      document
        .querySelectorAll(".victory__title .glitch-text")
        .forEach((item) => {
          const letters = item.querySelectorAll(".letter");

          letters.forEach((letter, i) => {
            gsap.to(letter.querySelectorAll(".glitch"), {
              translateX: `${100 * (letters.length - 1 - i)}%`,
              scaleX: 0,
              stagger: 0.05,
            });
          });
        });
    },
  })
  .to(
    ".victory__title-txt_sm_1",
    {
      opacity: 0,
      translateX: "100vw",
      onStart: () => {
        gsap.to(".victory__text .char", {
          opacity: 0,
          stagger: -0.01,
        });
      },
    },
    0.5,
  );

victoryTl
  .to(".victory__video-wrap", {
    opacity: 1,
    duration: 1.5,
    onStart: () => {
      gsap.to(".victory__text .char", {
        opacity: 1,
        stagger: 0.1,
      });

      document
        .querySelectorAll(".victory__title .glitch-text")
        .forEach((item) => {
          const letters = item.querySelectorAll(".letter");

          letters.forEach((letter, i) => {
            gsap.to(letter.querySelectorAll(".glitch"), {
              translateX: 0,
              scaleX: 1,
              opacity: 1,
              stagger: 0.05,
            });
          });
        });
    },
  })
  .to(
    ".victory__title-txt_sm_1",
    {
      opacity: 1,
      translateX: -607,
    },
    0,
  )
  .to(".victory__title-txt_sm_2", { opacity: 1, translateX: 12 }, 1)
  .to(".victory__title-txt_sm_3", { opacity: 1, translateX: 120 }, 1.5);
