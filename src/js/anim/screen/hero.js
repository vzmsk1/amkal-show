import { heroLeaveTl, onHeroLeave } from "../../anim/transitions/hero";
import videojs from "video.js";

export const leaveHeroScreen = (isNext) => {
  videojs.getPlayer(document.querySelector(".hero__video").id) &&
    videojs.getPlayer(document.querySelector(".hero__video").id).pause();
  heroLeaveTl.restart();

  heroLeaveTl.vars = {
    ...heroLeaveTl.vars,
    onComplete: () => {
      onHeroLeave(isNext);
    },
  };
};
