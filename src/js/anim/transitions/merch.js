import { setActiveScreen } from "../../anim/mainpage-scroll";
import { defaults } from "../../anim/transitions";
import gsap from "gsap";
import { enterFeedScreen } from "../screen/feed";
import { enterMatchScreen } from "../screen/match";

export const merchOnComplete = (isNext) => {
  if (isNext) {
    setActiveScreen(5, 6);
    enterMatchScreen();
  } else {
    setActiveScreen(5, 4);
    enterFeedScreen();
  }
};

export const merchTl = gsap.timeline({
  ...defaults,
  paused: true,
  ease: "power4.out",
  onStart: () => {
    document.querySelector("body").classList.add("_light-theme");

    gsap.to("header", { opacity: 1 });
    gsap.to("body", { backgroundColor: "#ffffff" });
  },
});
export const merchLeaveTl = gsap.timeline({
  ...defaults,
  paused: true,
  ease: "power4.in",
});

merchTl.to(".merch__head, .merch__item", { opacity: 1, stagger: 0.1 });

merchLeaveTl.to(".merch__head, .merch__item", {
  opacity: 0,
  stagger: 0.1,
});
