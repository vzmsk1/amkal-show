import {
  footerLeaveTl,
  footerOnComplete,
  footerTl,
} from "../transitions/footer";

export const enterFooterScreen = () => {
  footerTl.play(0);
};

export const leaveFooterScreen = (isNext, currentIdx) => {
  footerTl.progress(1);
  footerLeaveTl.play(0);

  footerLeaveTl.vars = {
    ...footerLeaveTl.vars,
    onComplete: () => {
      footerOnComplete(isNext, currentIdx);
    },
  };
};
