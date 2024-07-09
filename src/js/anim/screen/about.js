import { aboutTl, leaveAboutTl } from "../../anim/transitions/about";
import gsap from "gsap";

export const leaveAboutScreen = () => {
  leaveAboutTl.play(0);
};

export const enterAboutScreen = () => {
  leaveAboutTl.revert();
  aboutTl.revert();
  aboutTl.play(0);
  document
    .querySelectorAll(".about__title .glitch-text .letter")
    .forEach((el) => {
      gsap.to(el.querySelectorAll(".glitch"), {
        scaleX: 1,
        stagger: 0.02,
        translateX: 0,
        opacity: 1,
      });
      gsap.to(el.querySelectorAll(".glitch span"), {
        left: 0,
        stagger: 0.02,
        delay: 0.1,
      });
    });

  document.querySelector("body").classList.add("_light-theme");
  gsap.to("header", { opacity: 1, duration: 0.5 });
};
