import { victoryLeaveTl, victoryTl } from "../../anim/transitions/victory";
import gsap from "gsap";
import { setActiveScreen } from "../mainpage-scroll";

export const enterVictoryScreen = () => {
  gsap.to("body", {
    backgroundColor: "#000000",
    duration: 0.5,
  });

  victoryTl.play(0);
};

export const leaveVictoryScreen = (isNext, currentIdx) => {
  victoryTl.progress(1);
  victoryLeaveTl.play(0);

  victoryLeaveTl.vars = {
    ...victoryLeaveTl.vars,
    onComplete: () => {
      gsap.set(".victory__layer", {
        "--opacity": 0,
      });

      document.querySelector(".victory__layer").classList.remove("_fw");

      if (isNext) {
        setActiveScreen(currentIdx, currentIdx + 1);
        // enterLangScreen();
      } else {
        setActiveScreen(currentIdx, currentIdx - 1);

        // enterAboutScreen();

        document.querySelector("body").classList.add("_light-theme");

        gsap.to("body", {
          backgroundColor: "#caff34",
          duration: 0.5,
        });
      }
    },
  };
};
