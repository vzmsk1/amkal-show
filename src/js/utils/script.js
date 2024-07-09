import { locoScroll } from "@js/lib/locomotive-scroll";
import { bodyLock, bodyLockToggle, bodyUnlock } from "@js/utils/utils";
import gsap from "gsap";

const md = gsap.matchMedia();
const tm = window.matchMedia("(max-width: 64.05em)");
const mm = window.matchMedia("(max-width: 48em)");
const header = document.querySelector(".header");

const closeCartWidget = () => {
  document.documentElement.classList.remove("_show-cart-widget");
  bodyUnlock();
};

const closeHeaderMenu = () => {
  document.documentElement.classList.remove("_show-header-menu");
  header.classList.remove("_dark-theme");
  bodyUnlock();
};

const initHamburgerMenu = () => {
  document.documentElement.classList.toggle("_show-header-menu");

  if (document.querySelector("._show-header-menu")) {
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
    mm.matches ? bodyLock() : bodyUnlock();
  } else {
    bodyUnlock();
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
    target.closest(".filter__close-btn") ||
    !target.closest(".filter__body")
  ) {
    document.documentElement.classList.remove("_show-filters");

    mm.matches && bodyUnlock();
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

const setLocoScrollAttr = (el) => {
  md.add("(min-width: 48em)", () => {
    el.classList.contains("header") && el.classList.add("fixed");
    el.setAttribute("data-scroll", "");
    el.setAttribute("data-scroll-sticky", "");
    el.setAttribute("data-scroll-target", "#item-card");
    locoScroll.update();

    return () => {
      el.classList.contains("header") && el.classList.remove("fixed");
      el.removeAttribute("style");
      el.removeAttribute("data-scroll");
      el.removeAttribute("data-scroll-sticky");
      el.removeAttribute("data-scroll-target");
      locoScroll.update();
    };
  });
};

document.addEventListener("click", onClickHandler);
tm.addEventListener("change", onMatchMediaChangeHandler);

document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("item-card")) {
    setLocoScrollAttr(document.querySelector(".header"));
    setLocoScrollAttr(document.querySelector(".item-card__thumbs-swiper"));
    setLocoScrollAttr(document.querySelector(".item-card__content"));
    locoScroll.update();
  }

  if (document.querySelector(".footer-main__anchor")) {
    document
      .querySelector(".footer-main__anchor")
      .addEventListener("click", function () {
        locoScroll.scrollTo(0);
      });
  }

  if (document.querySelector(".item-card")) {
    document.querySelector(".header").classList.add("fixed");
  }

  if (document.querySelector("section._fw")) {
    !tm.matches && document.documentElement.classList.add("_is-locked");
    document.querySelector("header").classList.add("absolute");
  }

  if (document.querySelector("body._light-theme")) {
    document.querySelector("header").classList.add("_dark-theme");
  }

  if (document.querySelector(".hero"))
    document.documentElement.classList.add("mainpage");

  window.addEventListener("load", function () {
    document.documentElement.classList.add("_page-loaded");
  });
});

document.addEventListener("mouseover", function (e) {
  if (e.target.closest("[data-sb]")) {
    locoScroll.stop();
  } else {
    locoScroll.start();
  }
});
