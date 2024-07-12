import {
  victoryLeaveTl,
  victoryOnComplete,
  victoryTl,
} from "../../anim/transitions/victory";
import gsap from "gsap";
import { enterAboutScreen } from "./about";

export const enterVictoryScreen = () => {
  gsap.set(".victory__layer", { "--layer": 0, "--opacity": 0 });

  gsap.to("body", {
    backgroundColor: "#000000",
    duration: 0.5,
  });

  victoryTl.play(0);
};

export const leaveVictoryScreen = (isNext) => {
  victoryLeaveTl.play();

  victoryLeaveTl.vars = {
    ...victoryLeaveTl.vars,
    onComplete: () => {
      victoryOnComplete(isNext);
    },
  };
};
