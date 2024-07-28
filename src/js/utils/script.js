import { bodyLock, bodyLockToggle, bodyUnlock } from "./utils";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollToPlugin);

const tm = window.matchMedia("(max-width: 64.05em)");
const mm = window.matchMedia("(max-width: 48em)");
const header = document.querySelector(".header");
const supportsTouch = "ontouchstart" in window || navigator.msMaxTouchPoints;

const closeCartWidget = () => {
  document.documentElement.classList.remove("_show-cart-widget");
  bodyUnlock();

  document.documentElement.style.removeProperty("overflow");
  document.documentElement.style.removeProperty("touch-action");
};

const closeHeaderMenu = () => {
  document.documentElement.classList.remove("_show-header-menu");
  header.classList.remove("_dark-theme");
  bodyUnlock();
};

const initHamburgerMenu = () => {
  if (!document.querySelector("._show-header-menu")) {
    document.documentElement.classList.add("_show-header-menu");
    bodyLock();
    header.classList.add("_dark-theme");
  } else {
    closeHeaderMenu();
  }
};

const initCartWidget = () => {
  document.documentElement.classList.remove("_show-header-menu");
  document.documentElement.classList.toggle("_show-cart-widget");

  if (document.querySelector("._show-cart-widget")) {
    header.classList.remove("_dark-theme");
    // mm.matches ? bodyLock() : bodyUnlock();

    if (
      supportsTouch &&
      !document.querySelector(".actions-nav-row__item_cart._has-items")
    ) {
      gsap.set("html", {
        overflow: "hidden",
        "touch-action": "none",
      });
    }
  }
};

const onClickHandler = (e) => {
  const { target } = e;

  if (target.closest(".nav-row__hamburger")) {
    initHamburgerMenu();
  }

  if (tm.matches) {
    if (target.closest(".actions-nav-row__item_cart .actions-nav-row__txt")) {
      initCartWidget();
    }
    if (
      document.querySelector("._show-cart-widget") &&
      (!target.closest(".actions-nav-row__item_cart") ||
        target.closest(".cart-widget__close-btn"))
    ) {
      closeCartWidget();
    }
  }

  if (target.closest(".filter__btn")) {
    document.documentElement.classList.toggle("_show-filters");

    mm.matches && bodyLockToggle();
  } else if (
    (target.closest(".filter__close-btn") ||
      !target.closest(".filter__body")) &&
    !e.target.closest(".header")
  ) {
    document.documentElement.classList.remove("_show-filters");

    mm.matches && bodyUnlock();
  }
};

const onTouchStartHandler = (e) => {
  const { target } = e;

  if (document.querySelector("._show-cart-widget")) {
    if (!target.closest(".cart-widget")) {
      closeCartWidget();

      if (document.querySelector(".cart-widget._touch")) {
        document
          .querySelector(".cart-widget._touch")
          .classList.remove("_touch");
      }
    } else {
      target.closest(".cart-widget").classList.add("_touch");
    }
  }
};

const onMatchMediaChangeHandler = () => {
  if (!tm.matches) {
    document.querySelector("section._fw") &&
      document.documentElement.classList.add("_is-locked");

    if (document.querySelector("._show-header-menu")) {
      closeHeaderMenu();
    }
  } else {
    document.documentElement.classList.remove("_is-locked");
  }

  if (!mm.matches && document.querySelector("._show-cart-widget")) {
    closeCartWidget();
  }
};

document.addEventListener("click", onClickHandler);
document.addEventListener("touchstart", onTouchStartHandler);
tm.addEventListener("change", onMatchMediaChangeHandler);

document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector("section._fw")) {
    !tm.matches && document.documentElement.classList.add("_is-locked");
    document.querySelector("header").classList.add("absolute");
  }

  if (document.querySelector("body._light-theme")) {
    document.querySelector("header").classList.add("_dark-theme");
  }

  if (
    window.innerWidth <= 1024 &&
    document.querySelector(".footer-main__anchor")
  ) {
    document
      .querySelector(".footer-main__anchor")
      .addEventListener("click", function () {
        gsap.to(window, { duration: 1, scrollTo: 0 });
      });
  }

  window.addEventListener("load", function () {
    document.documentElement.classList.add("_page-loaded");
  });
});
