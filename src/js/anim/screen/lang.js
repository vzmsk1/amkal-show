import { langLeaveTl, langTl } from "@js/anim/transitions/lang";
import gsap from "gsap";

export const enterLangScreen = () => {
  langTl.play();
};

export const leaveLangScreen = () => {
  document
    .querySelectorAll(".lang__title .glitch-text .letter")
    .forEach((el) => {
      gsap.to(".lang__text", { opacity: 0, delay: 0.3 });
      gsap.to(el.querySelectorAll(".glitch"), {
        translateX: "100%",
        skewX: "10deg",
        stagger: 0.03,
        duration: 0.1,
        onComplete: () => {
          langLeaveTl.play();
        },
      });
    });
};
