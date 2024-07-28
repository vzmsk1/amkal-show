import { matchLeaveTl, matchOnComplete, matchTl } from "../transitions/match";
import gsap from "gsap";

export const enterMatchScreen = () => {
  matchTl.play(0);
};

export const leaveMatchScreen = (isNext, currentIdx) => {
  matchTl.progress(1);
  matchLeaveTl.play(0);

  matchLeaveTl.vars = {
    ...matchLeaveTl.vars,
    onComplete: () => {
      matchOnComplete(isNext, currentIdx);

      if (isNext) {
        gsap.to("body", { backgroundColor: "#000000" });
      }
    },
  };
};
