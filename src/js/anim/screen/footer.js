import {
  footerLeaveTl,
  footerOnComplete,
  footerTl,
} from "../transitions/footer";

export const enterFooterScreen = () => {
  footerTl.play(0);
};

export const leaveFooterScreen = (isNext) => {
  footerLeaveTl.play(0);

  footerLeaveTl.vars = {
    ...footerLeaveTl.vars,
    onComplete: () => {
      footerOnComplete(isNext);
    },
  };
};
