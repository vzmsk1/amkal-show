import { setActiveScreen } from "@js/anim/mainpage-scroll";
import { enterAboutScreen } from "@js/anim/screen/about";
import { heroTl } from "@js/anim/transitions/hero";
import gsap from "gsap";

const video = document.querySelector(".hero__video");

export const leaveHeroScreen = () => {
  video.pause();
  heroTl.reverse();
  gsap.to(".hero__text .char", { opacity: 0 });

  setTimeout(() => {
    gsap.to("body", {
      backgroundColor: "#caff34",
      duration: 0.5,
      delay: 0.3,
    });
    gsap.to("header", { opacity: 0, duration: 0.5 });

    setActiveScreen(0, 1);
    enterAboutScreen();
  }, 500);
};

export const enterHeroScreen = () => {
  video.currentTime = 0;
  video.play();
  heroTl.revert();
  heroTl.play();
  gsap.to(".hero__text .char", {
    duration: 0.3,
    delay: 1,
    opacity: 1,
    stagger: 0.01,
    ease: "power1.out",
  });
  gsap.to("header", { opacity: 1, duration: 0.5 });
};
