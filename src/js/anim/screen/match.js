import { matchLeaveTl, matchOnComplete, matchTl } from "../transitions/match";
import gsap from "gsap";

export const enterMatchScreen = () => {
  matchTl.play(0);
};

export const leaveMatchScreen = (isNext) => {
  matchLeaveTl.play(0);

  matchLeaveTl.vars = {
    ...matchLeaveTl.vars,
    onComplete: () => {
      matchOnComplete(isNext);

      if (isNext) {
        gsap.to("body", { backgroundColor: "#000000" });
      }
    },
  };
};
