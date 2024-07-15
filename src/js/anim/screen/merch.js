import { merchLeaveTl, merchOnComplete, merchTl } from "../transitions/merch";

export const enterMerchScreen = () => {
  merchTl.play(0);
};

export const leaveMerchScreen = (isNext) => {
  merchLeaveTl.play(0);

  merchLeaveTl.vars = {
    ...merchLeaveTl.vars,
    onComplete: () => {
      merchOnComplete(isNext);
    },
  };
};
