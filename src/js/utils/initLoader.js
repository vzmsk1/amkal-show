import { setDefaults } from "../anim/transitions";
import { aboutTl } from "../anim/transitions/about";
import { animateHeader } from "../anim/transitions/header";
import { animateHero } from "../anim/transitions/hero";
import { splitGlitchText } from "./splitGlitchText";
import gsap from "gsap";
import Splitting from "splitting";

document.querySelector("[data-splitting]") && Splitting();

document.fonts.ready.then(function () {
  gsap.set(".loader__text", { opacity: 1 });
  gsap.to(".loader__text .char", { opacity: 1, stagger: 0.1 });
});

window.addEventListener("load", function () {
  splitGlitchText();

  setDefaults();

  document.documentElement.classList.add("_is-animating");

  gsap.to(".loader", {
    opacity: 0,
    onComplete: () => {
      document.querySelector(".loader").remove();
      gsap.to(".hero__container", {
        opacity: 1,
        onComplete: () => {
          animateHeader();
          animateHero();
        },
      });
    },
  });
});
