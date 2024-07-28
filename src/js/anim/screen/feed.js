import { feedLeaveTl, feedOnLeave, feedTl } from "../../anim/transitions/feed";

export const enterFeedScreen = () => {
  feedTl.play(0);

  document.querySelector("body").classList.remove("_light-theme");
};

export const leaveFeedScreen = (isNext, currentIdx) => {
  feedLeaveTl.progress(1);
  feedLeaveTl.play(0);

  feedLeaveTl.vars = {
    ...feedLeaveTl.vars,
    onComplete: () => {
      feedOnLeave(isNext, currentIdx);
    },
  };
};
