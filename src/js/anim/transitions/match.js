import { setActiveScreen } from "../../anim/mainpage-scroll";
import gsap from "gsap";
import { enterFooterScreen } from "../screen/footer";
import { defaults } from "../transitions";

export const matchOnComplete = (isNext) => {
  if (isNext) {
    setActiveScreen(6, 7);
    enterFooterScreen();
  } else {
    setActiveScreen(6, 5);
  }
};

export const matchTl = gsap.timeline({
  ...defaults,
  paused: true,
  ease: "power4.out",
});
export const matchLeaveTl = gsap.timeline({
  ...defaults,
  paused: true,
  ease: "power4.in",
});

matchTl.to(".match__head, .match__filters, .table-match__row, .match__footer", {
  opacity: 1,
  stagger: 0.1,
});
matchLeaveTl.to(
  ".match__head, .match__filters, .table-match__row, .match__footer",
  {
    opacity: 0,
    stagger: 0.1,
  },
);
