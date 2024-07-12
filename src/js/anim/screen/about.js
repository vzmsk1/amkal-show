import { aboutTl, leaveAboutTl } from "../../anim/transitions/about";
import gsap from "gsap";
import { setActiveScreen } from "../mainpage-scroll";
import { heroTl } from "../transitions/hero";
import { enterVictoryScreen } from "./victory";

export const leaveAboutScreen = (isNext) => {
  leaveAboutTl.play(0);

  if (isNext) {
    leaveAboutTl.vars = {
      ...leaveAboutTl.vars,
      onComplete: () => {
        document.querySelector("body").classList.remove("_light-theme");
        setActiveScreen(1, 2), enterVictoryScreen();
      },
    };
  } else {
    leaveAboutTl.vars = {
      ...leaveAboutTl.vars,
      onComplete: () => {
        setActiveScreen(1, 0);
        heroTl.restart();
        gsap.to("header", { opacity: 0, duration: 0.5 });
      },
    };
  }
};

export const enterAboutScreen = () => {
  leaveAboutTl.revert();
  aboutTl.revert();
  aboutTl.restart();

  document.querySelector("body").classList.add("_light-theme");
  gsap.to("header", { opacity: 1, duration: 0.5 });
};
