import { victoryLeaveTl, victoryTl } from "@js/anim/transitions/victory";

export const enterVictoryScreen = () => {
  victoryTl.play();
};

export const leaveVictoryScreen = () => {
  victoryLeaveTl.play();
};
