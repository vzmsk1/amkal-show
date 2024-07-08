import { enterAboutScreen, leaveAboutScreen } from "@js/anim/screen/about";
import { leaveFeedScreen } from "@js/anim/screen/feed";
import { leaveHeroScreen } from "@js/anim/screen/hero";
import { leaveLangScreen } from "@js/anim/screen/lang";
import {
  enterVictoryScreen,
  leaveVictoryScreen,
} from "@js/anim/screen/victory";
import { heroTl } from "@js/anim/transitions/hero";
import { langLeaveTl } from "@js/anim/transitions/lang";
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
            break;
          case 2:
            leaveVictoryScreen();
            break;
          case 3:
            leaveLangScreen();
            break;
          case 4:
            leaveFeedScreen();
        }
      } else {
        switch (activeIdx) {
          case 1:
            setActiveScreen(1, 0);
            heroTl.restart();
            break;
        }
        console.log(activeIdx);
      }

      setTimeout(observer.enable, 1000);
    };
  }
};
