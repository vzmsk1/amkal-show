import { aboutTl, leaveAboutTl } from "../../anim/transitions/about";
import gsap from "gsap";

export const leaveAboutScreen = () => {
  leaveAboutTl.play(0);
};

export const enterAboutScreen = () => {
  leaveAboutTl.revert();
  aboutTl.revert();
  aboutTl.restart();
  document.querySelectorAll(".about__title .io .letter").forEach((el) => {
    gsap.to(el.querySelectorAll(".glitch"), {
      stagger: 0.05,
      translateX: 0,
      opacity: 1,
      scaleX: 1,
    });
  });
  document.querySelectorAll(".about__title .lr .letter").forEach((el) => {
    gsap.to(el.querySelectorAll(".glitch"), {
      stagger: 0.1,
      translateX: 0,
      opacity: 1,
      scaleX: 1,
    });
  });

  document.querySelector("body").classList.add("_light-theme");
  gsap.to("header", { opacity: 1, duration: 0.5 });
};
