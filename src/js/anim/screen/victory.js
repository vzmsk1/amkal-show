import { victoryLeaveTl, victoryTl } from "../../anim/transitions/victory";
import gsap from "gsap";

export const enterVictoryScreen = () => {
  gsap.to("body", {
    backgroundColor: "#000000",
    duration: 0.5,
  });
  victoryTl.play();
};

export const leaveVictoryScreen = () => {
  victoryLeaveTl.play();
};
