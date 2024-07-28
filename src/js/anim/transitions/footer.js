import { animateGlitchText, moveGlitchText } from "../../utils/splitGlitchText";
import { setActiveScreen } from "../mainpage-scroll";
import { defaults } from "../transitions";
import gsap from "gsap";

export const footerOnComplete = (isNext, currentIdx) => {
  if (isNext) {
    setActiveScreen(currentIdx, currentIdx + 1);
    // heroTl.play(0);
  } else {
    setActiveScreen(currentIdx, currentIdx - 1);

    document.querySelector("body").classList.add("_light-theme");
    gsap.to("body", {
      backgroundColor: "#ffffff",
    });

    // enterMatchScreen();
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
  onComplete: () => {
    document.documentElement.classList.remove("_is-animating");
  },
});
export const footerLeaveTl = gsap.timeline({
  ...defaults,
  ease: "power4.in",
  paused: true,
  onStart: () => {
    document.documentElement.classList.add("_is-animating");
  },
});

footerTl
  .to(".footer__item", {
    opacity: 1,
    stagger: 0.05,
  })
  .to(".footer-main__bottom", {
    opacity: 1,
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
