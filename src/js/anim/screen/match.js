import { matchLeaveTl, matchOnComplete, matchTl } from "../transitions/match";
import gsap from "gsap";
import { enterFooterScreen } from "./footer";

export const enterMatchScreen = () => {
  matchTl.play(0);
};

export const leaveMatchScreen = (isNext) => {
  matchLeaveTl.play();

  matchLeaveTl.vars = {
    ...matchLeaveTl.vars,
    onComplete: () => {
      matchOnComplete(isNext);

      gsap.to("body", { backgroundColor: "#000000" });
    },
  };
};
