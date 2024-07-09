import { feedLeaveTl, feedTl } from "../../anim/transitions/feed";
import gsap from "gsap";

export const enterFeedScreen = () => {
  feedTl.play();
};

export const leaveFeedScreen = () => {
  gsap.to(".feed-screen", { "--y": "100vh", "--bgc": "#ffffff", duration: 0 });
  feedLeaveTl.play();
};
