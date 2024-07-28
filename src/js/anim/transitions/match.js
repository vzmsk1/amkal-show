import { setActiveScreen } from "../../anim/mainpage-scroll";
import gsap from "gsap";
import { defaults } from "../transitions";

export const matchOnComplete = (isNext, currentIdx) => {
  matchTl.progress(1);

  if (isNext) {
    setActiveScreen(currentIdx, currentIdx + 1);
    // enterFooterScreen();
  } else {
    setActiveScreen(currentIdx, currentIdx - 1);
    // enterMerchScreen();
  }
};

export const matchTl = gsap.timeline({
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
export const matchLeaveTl = gsap.timeline({
  ...defaults,
  ease: "power4.in",
  paused: true,
  onStart: () => {
    document.documentElement.classList.add("_is-animating");
  },
});

matchTl.to(".match__head, .match__filters, .table-match__row, .match__footer", {
  opacity: 1,
  stagger: 0.05,
});
matchLeaveTl.to(
  ".match__head, .match__filters, .table-match__row, .match__footer",
  {
    opacity: 0,
    stagger: 0.05,
  },
);
