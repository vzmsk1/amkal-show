import { victoryLeaveTl, victoryTl } from "../../anim/transitions/victory";

export const enterVictoryScreen = () => {
  victoryTl.play();
};

export const leaveVictoryScreen = () => {
  victoryLeaveTl.play();
};
