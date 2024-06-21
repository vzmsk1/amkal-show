import { defaults } from "@js/anim/transitions";
import gsap from "gsap";

export const victoryTl = gsap.timeline({ ...defaults, paused: true });

victoryTl
  .to(".victory__video-wrap", {
    opacity: 1,
    onStart: () => {
      document
        .querySelectorAll(".victory__title .glitch-text .letter")
        .forEach((el) => {
          gsap.to(el.querySelectorAll(".glitch"), {
            translateX: 0,
            skewX: "0deg",
            stagger: 0.03,
            delay: 0.5,
            duration: 0.1,
            onStart: () => {
              console.log("log");
            },
          });
        });
    },
  })
  .to(
    ".victory__text .char",
    {
      duration: 0.3,
      opacity: 1,
      stagger: 0.01,
      ease: "power1.out",
    },
    0.3,
  );
