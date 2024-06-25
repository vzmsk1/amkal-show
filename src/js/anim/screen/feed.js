import { defaults } from "@js/anim/transitions";
import { feedLeaveTl, feedTl } from "@js/anim/transitions/feed";
import gsap from "gsap";

export const enterFeedScreen = () => {
  feedTl.play();
};

export const leaveFeedScreen = () => {
  gsap.to(".feed-screen", { "--y": "100vh", "--bgc": "#ffffff", duration: 0 });
  feedLeaveTl.play();
};
