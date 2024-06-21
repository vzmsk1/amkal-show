import { enterAboutScreen, leaveAboutScreen } from "@js/anim/screen/about";
import { leaveHeroScreen } from "@js/anim/screen/hero";
import { enterVictoryScreen } from "@js/anim/screen/victory";
import gsap from "gsap";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(Observer);

const screens = Array.from(document.querySelectorAll("[data-screen]"));

export const setActiveScreen = (prev, active) => {
  screens[prev].dataset.screen = "";
  screens[active].dataset.screen = "active";
};

export const initMainpageScroll = () => {
  if (screens.length) {
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

    const scroll = (active, isNext) => {
      const activeIdx = screens.indexOf(active);
      const previous = screens[activeIdx - 1] ? screens[activeIdx - 1] : null;

      observer.disable();

      if (isNext) {
        switch (activeIdx) {
          case 0:
            leaveHeroScreen();
            break;
          case 1:
            leaveAboutScreen();
        }
      }

      setTimeout(observer.enable, 1000);
    };
  }
};
