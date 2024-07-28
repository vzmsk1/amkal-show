import { setActiveScreen } from "../../anim/mainpage-scroll";
import { defaults } from "../../anim/transitions";
import gsap from "gsap";

export const merchOnComplete = (isNext, currentIdx) => {
  if (isNext) {
    setActiveScreen(currentIdx, currentIdx + 1);
    // enterMatchScreen();
  } else {
    setActiveScreen(currentIdx, currentIdx - 1);
    // enterFeedScreen();

    document.querySelector("body").classList.remove("_light-theme");
  }
};

export const merchTl = gsap.timeline({
  ...defaults,
  ease: "power4.out",
  paused: true,
  onStart: () => {
    document.querySelector("body").classList.add("_light-theme");

    gsap.to("body", { backgroundColor: "#ffffff" });
  },
  onComplete: () => {
    document.documentElement.classList.remove("_is-animating");
  },
});
export const merchLeaveTl = gsap.timeline({
  ...defaults,
  ease: "power4.in",
  paused: true,
  onStart: () => {
    document.documentElement.classList.add("_is-animating");
  },
});

merchTl.to(".merch__head, .merch__item", { opacity: 1, stagger: 0.1 });

merchLeaveTl.to(".merch__head, .merch__item", {
  opacity: 0,
  stagger: 0.1,
});
