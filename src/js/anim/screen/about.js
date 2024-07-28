import { aboutTl, leaveAboutTl } from "../../anim/transitions/about";
import { setActiveScreen } from "../mainpage-scroll";

export const leaveAboutScreen = (isNext, currentIdx) => {
  aboutTl.progress(1);
  leaveAboutTl.play(0);

  if (isNext) {
    leaveAboutTl.vars = {
      ...leaveAboutTl.vars,
      onComplete: () => {
        document.querySelector("body").classList.remove("_light-theme");
        document.querySelector("body").classList.remove("_light-theme_green");
        setActiveScreen(currentIdx, currentIdx + 1);
        // enterVictoryScreen();
      },
    };
  } else {
    leaveAboutTl.vars = {
      ...leaveAboutTl.vars,
      onComplete: () => {
        setActiveScreen(currentIdx, currentIdx - 1);
        // heroTl.restart();
      },
    };
  }
};

export const enterAboutScreen = () => {
  aboutTl.play(0);
};
