import { heroLeaveTl, onHeroLeave } from "../../anim/transitions/hero";
import videojs from "video.js";
import { enterFooterScreen } from "./footer";

export const leaveHeroScreen = (isNext, currentIdx) => {
  videojs.getPlayer(document.querySelector(".hero__video").id) &&
    videojs.getPlayer(document.querySelector(".hero__video").id).pause();
  heroLeaveTl.restart();

  !isNext && enterFooterScreen();

  heroLeaveTl.vars = {
    ...heroLeaveTl.vars,
    onComplete: () => {
      onHeroLeave(isNext, currentIdx);
    },
  };
};
