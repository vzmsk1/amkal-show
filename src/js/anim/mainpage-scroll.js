import gsap from "gsap";
import { Observer } from "gsap/Observer";
import { leaveAboutScreen } from "./screen/about";
import { leaveFeedScreen } from "./screen/feed";
import { enterFooterScreen, leaveFooterScreen } from "./screen/footer";
import { leaveHeroScreen } from "./screen/hero";
import { leaveLangScreen } from "./screen/lang";
import { leaveMatchScreen } from "./screen/match";
import { leaveMerchScreen } from "./screen/merch";
import { leaveVictoryScreen } from "./screen/victory";

gsap.registerPlugin(Observer);

const screens = Array.from(document.querySelectorAll("[data-screen]"));

const scroll = (active, isNext) => {
  const activeIdx = screens.indexOf(active);
  const previous = screens[activeIdx - 1] ? screens[activeIdx - 1] : null;

  observer.disable();

  if (isNext) {
    switch (activeIdx) {
      case 0:
        leaveHeroScreen(true);
        break;
      case 1:
        leaveAboutScreen(true);
        break;
      case 2:
        leaveVictoryScreen(true);
        break;
      case 3:
        leaveLangScreen(true);
        break;
      case 4:
        leaveFeedScreen(true);
        break;
      case 5:
        leaveMerchScreen(true);
        break;
      case 6:
        leaveMatchScreen(true);
        break;
      case 7:
        leaveFooterScreen(true);
        break;
    }
  } else {
    switch (activeIdx) {
      case 1:
        leaveAboutScreen(false);
        break;
      case 2:
        leaveVictoryScreen(false);
        break;
      case 3:
        leaveLangScreen(false);
        break;
      case 4:
        leaveFeedScreen(false);
        break;
      case 5:
        leaveMerchScreen(false);
        break;
      case 6:
        leaveMatchScreen(false);
        break;
      case 7:
        leaveFooterScreen(false);
        break;
    }
  }

  setTimeout(observer.enable, 1000);
};

export const observer = Observer.create({
  target: document.querySelector(".hero").closest("html"),
  type: "wheel,touch",
  tolerance: 200,
  onUp: (e) => {
    scroll(document.querySelector('[data-screen="active"]'), false);
  },
  onDown: (e) => {
    scroll(document.querySelector('[data-screen="active"]'), true);
  },
});

export const setActiveScreen = (prev, active) => {
  screens[prev].dataset.screen = "";
  screens[active].dataset.screen = "active";
};

export const initMainpageScroll = () => {
  if (screens.length) {
    document.querySelector(".header").addEventListener("mouseover", () => {
      observer.disable();
    });
    document.querySelector(".header").addEventListener("mouseleave", () => {
      observer.enable();
    });
  }
};
