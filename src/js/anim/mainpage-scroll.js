import { heroTl } from "@js/anim/transitions";
import gsap from "gsap";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(Observer);

export const initMainpageScroll = () => {
  const screens = Array.from(document.querySelectorAll("[data-screen]"));

  const observer = Observer.create({
    target: ".mainpage",
    type: "wheel,touch",
    tolerance: 200,
    onUp: (e) => {
      scroll(document.querySelector('[data-screen="active"]'), false);
    },
    onDown: (e) => {
      scroll(document.querySelector('[data-screen="active"]'), true);
    },
  });

  const scroll = (prev, isNext) => {
    const video = document.querySelector(".hero__video");
    const prevIdx = screens.indexOf(prev);
    const next = screens[prevIdx + 1] ? screens[prevIdx + 1] : screens[0];
    const previous = screens[prevIdx - 1]
      ? screens[prevIdx - 1]
      : screens[screens.length - 1];

    prev.dataset.screen = "";

    observer.disable();

    if (prevIdx === 0) {
      video.pause();
      heroTl.reverse();
      gsap.to(".hero__text .char", { opacity: 0 });
    } else if (prevIdx === 1) {
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
    }

    setTimeout(() => {
      if (isNext) {
        next.dataset.screen = "active";
      } else {
        previous.dataset.screen = "active";
      }

      observer.enable();
    }, 1000);
  };
};
