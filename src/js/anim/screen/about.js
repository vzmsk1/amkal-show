import { aboutTl, leaveAboutTl } from "../../anim/transitions/about";
import { setActiveScreen } from "../mainpage-scroll";
import { heroTl } from "../transitions/hero";
import { enterVictoryScreen } from "./victory";

export const leaveAboutScreen = (isNext) => {
  aboutTl.progress(1);
  leaveAboutTl.play(0);

  if (isNext) {
    leaveAboutTl.vars = {
      ...leaveAboutTl.vars,
      onComplete: () => {
        document.querySelector("body").classList.remove("_light-theme");
        document.querySelector("body").classList.remove("_light-theme_green");
        setActiveScreen(1, 2), enterVictoryScreen();
      },
    };
  } else {
    leaveAboutTl.vars = {
      ...leaveAboutTl.vars,
      onComplete: () => {
        setActiveScreen(1, 0);
        heroTl.restart();
      },
    };
  }
};

export const enterAboutScreen = () => {
  aboutTl.play(0);
};
