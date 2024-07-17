import { setActiveScreen } from "../../anim/mainpage-scroll";
import gsap from "gsap";
import { enterFooterScreen } from "../screen/footer";
import { enterMerchScreen } from "../screen/merch";
import { defaults } from "../transitions";

export const matchOnComplete = (isNext) => {
  matchTl.progress(1);

  if (isNext) {
    setActiveScreen(6, 7);
    enterFooterScreen();
  } else {
    setActiveScreen(6, 5);
    enterMerchScreen();
  }
};

export const matchTl = gsap.timeline({
  ...defaults,
  ease: "power4.out",
  paused: true,
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
