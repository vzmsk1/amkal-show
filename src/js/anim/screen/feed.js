import { feedLeaveTl, feedOnLeave, feedTl } from "../../anim/transitions/feed";

export const enterFeedScreen = () => {
  feedTl.play();
};

export const leaveFeedScreen = (isNext) => {
  feedLeaveTl.play();

  feedLeaveTl.vars = {
    ...feedLeaveTl.vars,
    onComplete: () => {
      feedOnLeave(isNext);
    },
  };
};
