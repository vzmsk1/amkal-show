import { merchLeaveTl, merchOnComplete, merchTl } from "../transitions/merch";

export const enterMerchScreen = () => {
  merchTl.play(0);
};

export const leaveMerchScreen = (isNext) => {
  merchTl.progress(1);
  merchLeaveTl.play(0);

  merchLeaveTl.vars = {
    ...merchLeaveTl.vars,
    onComplete: () => {
      merchOnComplete(isNext);
    },
  };
};
