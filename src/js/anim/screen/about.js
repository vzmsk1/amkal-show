import { aboutTl, leaveAboutTl } from "@js/anim/transitions/about";
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
        translateX: 0,
        translateY: 0,
        skewX: "0deg",
        stagger: 0.03,
        delay: 0.5,
        duration: 0.1,
        onStart: () => {
          gsap.fromTo(
            ".about__title .glitch-text",
            { translateX: 250 },
            { translateX: 330 },
          );
        },
      });
    });

  document.querySelector("body").classList.add("_light-theme");
  gsap.to("header", { opacity: 1, duration: 0.5 });
};
