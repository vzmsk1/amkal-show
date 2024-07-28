import gsap from "gsap";
import { Observer } from "gsap/Observer";
import { enterAboutScreen, leaveAboutScreen } from "./screen/about";
import { enterFeedScreen, leaveFeedScreen } from "./screen/feed";
import { enterFooterScreen, leaveFooterScreen } from "./screen/footer";
import { leaveHeroScreen } from "./screen/hero";
import { enterLangScreen, leaveLangScreen } from "./screen/lang";
import { enterMatchScreen, leaveMatchScreen } from "./screen/match";
import { enterMerchScreen, leaveMerchScreen } from "./screen/merch";
import { enterVictoryScreen, leaveVictoryScreen } from "./screen/victory";
import { heroTl } from "./transitions/hero";

gsap.registerPlugin(Observer);

const screens = Array.from(document.querySelectorAll("[data-screen]"));

const scroll = (current, isNext) => {
  const currentIdx = screens.indexOf(current);

  if (current.classList.contains("hero")) {
    leaveHeroScreen(isNext, currentIdx);
  } else if (current.classList.contains("about")) {
    leaveAboutScreen(isNext, currentIdx);
  } else if (current.classList.contains("victory")) {
    leaveVictoryScreen(isNext, currentIdx);
  } else if (current.classList.contains("lang")) {
    leaveLangScreen(isNext, currentIdx);
  } else if (current.classList.contains("feed")) {
    leaveFeedScreen(isNext, currentIdx);
  } else if (current.classList.contains("feed-screen")) {
    leaveFeedScreen(isNext, currentIdx);
  } else if (current.classList.contains("merch")) {
    leaveMerchScreen(isNext, currentIdx);
  } else if (current.classList.contains("match")) {
    leaveMatchScreen(isNext, currentIdx);
  } else if (current.classList.contains("footer-main")) {
    leaveFooterScreen(isNext, currentIdx);
  }
};

export const createObserver = () => {
  Observer.create({
    target: document.querySelector(".hero").closest("html"),
    type: "wheel,touch",
    tolerance: 50,
    wheelSpeed: -1,
    onUp: (e) => {
      if (
        !document.querySelector("._is-animating") &&
        !document.querySelector("._touch") &&
        !document.querySelector("._lock") &&
        !document.querySelector("._show-cart-widget")
      ) {
        !e.event.srcElement.closest("[data-sb]") &&
          scroll(document.querySelector('[data-screen="active"]'), true);
      }
    },
    onDown: (e) => {
      if (
        !document.querySelector("._is-animating") &&
        !document.querySelector("._touch") &&
        !document.querySelector("._lock") &&
        !document.querySelector("._show-cart-widget")
      ) {
        !e.event.srcElement.closest("[data-sb]") &&
          scroll(document.querySelector('[data-screen="active"]'), false);
      }
    },
  });
};

export const setActiveScreen = (prev, active) => {
  const current =
    active > screens.length - 1
      ? screens[0]
      : active < 0
        ? screens[screens.length - 1]
        : screens[active];

  screens[prev].dataset.screen = "";
  current.dataset.screen = "active";

  if (current.classList.contains("hero")) {
    heroTl.play(0);
  } else if (current.classList.contains("about")) {
    enterAboutScreen();
  } else if (current.classList.contains("victory")) {
    enterVictoryScreen();
  } else if (current.classList.contains("lang")) {
    enterLangScreen();
  } else if (current.classList.contains("feed-screen")) {
    enterFeedScreen();
  } else if (current.classList.contains("merch")) {
    enterMerchScreen();
  } else if (current.classList.contains("match")) {
    enterMatchScreen();
  } else if (current.classList.contains("footer-main")) {
    enterFooterScreen();
  }
};
