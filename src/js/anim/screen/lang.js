import { langLeaveTl, langOnComplete, langTl } from "../transitions/lang";

export const enterLangScreen = () => {
  langTl.play(0);
};

export const leaveLangScreen = (isNext) => {
  langLeaveTl.play(0);
  langLeaveTl.vars = {
    ...langLeaveTl.vars,
    onComplete: () => {
      langOnComplete(isNext);
    },
  };
};
