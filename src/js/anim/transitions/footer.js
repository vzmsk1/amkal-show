import { animateGlitchText, moveGlitchText } from "../../utils/splitGlitchText";
import { setActiveScreen } from "../mainpage-scroll";
import { enterMatchScreen } from "../screen/match";
import { defaults } from "../transitions";
import gsap from "gsap";
import { heroTl } from "./hero";

export const footerOnComplete = (isNext) => {
  if (isNext) {
    setActiveScreen(7, 0);
    heroTl.play(0);
  } else {
    setActiveScreen(7, 6);

    document.querySelector("body").classList.add("_light-theme");
    gsap.to("body", {
      backgroundColor: "#ffffff",
    });

    enterMatchScreen();
  }
};

export const footerTl = gsap.timeline({
  ...defaults,
  ease: "power4.out",
  paused: true,
  onStart: () => {
    document.querySelector("body").classList.remove("_light-theme");

    animateGlitchText(".footer-main__title .glitch-text .letter");
  },
});
export const footerLeaveTl = gsap.timeline({
  ...defaults,
  ease: "power4.in",
  paused: true,
});

footerTl
  .to(".footer__list, .footer-main__bottom", {
    opacity: 1,
    delay: 1,
  })
  .to(
    ".footer-main__title-txt",
    {
      opacity: 1,
      translateX: -4,
    },
    0.4,
  )
  .to(
    ".footer-main__sponsors",
    {
      opacity: 1,
    },
    0.4,
  );

footerLeaveTl.to(".footer-main__title-txt", {
  opacity: 0,
  translateX: "100vw",
  onStart: () => {
    moveGlitchText(".footer-main__title .glitch-text", true);
  },
});
