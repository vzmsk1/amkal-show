import { feedLeaveTl, feedOnLeave, feedTl } from "../../anim/transitions/feed";

export const enterFeedScreen = () => {
  feedTl.play(0);
};

export const leaveFeedScreen = (isNext) => {
  feedLeaveTl.progress(1);
  feedLeaveTl.play(0);

  feedLeaveTl.vars = {
    ...feedLeaveTl.vars,
    onComplete: () => {
      feedOnLeave(isNext);
    },
  };
};
