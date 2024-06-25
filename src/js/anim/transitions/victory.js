import { setActiveScreen } from "@js/anim/mainpage-scroll";
import { enterLangScreen } from "@js/anim/screen/lang";
import { defaults } from "@js/anim/transitions";
import gsap from "gsap";

export const victoryTl = gsap.timeline({ ...defaults, paused: true });
export const victoryLeaveTl = gsap.timeline({ ...defaults, paused: true });

victoryTl
  .to(".victory__container", { "--gradient": "10%", opacity: 1 })
  .to(
    ".victory__container",
    {
      "--y": "100%",
      duration: 0.7,
      onComplete: () => {
        gsap.to(".victory__container", {
          "--opacity": 0,
          "--y": 0,
          "--deg1": "0deg",
          "--deg2": "180deg",
          "--gradient": "100%",
          duration: 0,
        });
      },
    },
    0,
  )
  .to(
    ".victory__video-wrap",
    {
      opacity: 1,
      onStart: () => {
        document
          .querySelectorAll(".victory__title .glitch-text .letter")
          .forEach((el) => {
            gsap.to(el.querySelectorAll(".glitch"), {
              translateX: 0,
              skewX: "0deg",
              stagger: 0.03,
              opacity: 1,
              duration: 0.1,
            });
          });
      },
    },
    0,
  )
  .to(
    ".victory__text .char",
    {
      duration: 0.3,
      opacity: 1,
      stagger: 0.001,
      ease: "power1.out",
    },
    0.3,
  );

victoryLeaveTl.to(".victory__container", {
  "--opacity": 1,
  "--gradient": "0%",
  onComplete: () => {
    enterLangScreen();
    setActiveScreen(2, 3);
  },
});
