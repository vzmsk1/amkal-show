import { heroLeaveTl } from "../../anim/transitions/hero";
import videojs from "video.js";

export const leaveHeroScreen = () => {
  videojs.getPlayer(document.querySelector(".hero__video").id) &&
    videojs.getPlayer(document.querySelector(".hero__video").id).pause();
  heroLeaveTl.restart();
};
