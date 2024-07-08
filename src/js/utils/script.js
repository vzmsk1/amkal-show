import { setDefaults } from "@js/anim/transitions";
import { animateHeader } from "@js/anim/transitions/header";
import { animateHero } from "@js/anim/transitions/hero";
import { locoScroll } from "@js/lib/locomotive-scroll";
import { initVideoJS } from "@js/lib/video";
import {
  bodyLock,
  bodyLockToggle,
  bodyUnlock,
  checkFontsLoaded,
} from "@js/utils/utils";
import { initMainpageScroll } from "../anim/mainpage-scroll";
import gsap from "gsap";

const removeLoader = () => {
  document.documentElement.classList.add("_page-loaded");

  splitGlitchText();

  gsap.to(".loader", {
    opacity: 0,
    duration: 0.7,
  });

  setTimeout(() => {
    document.querySelector(".loader").remove();

    initVideoJS();

    initMainpageScroll();

    animateHeader();
    animateHero();
  }, 700);
};

if (document.querySelector(".loader")) {
  bodyLock();

  checkFontsLoaded("DrukTextWideCyr")
    .then(() => {
      document.documentElement.classList.add("_fonts-loaded");

      gsap.to(".loader__text .char", {
        duration: 0.3,
        opacity: 1,
        stagger: 0.1,
        ease: "power1.out",
      });
    })
    .catch(() => {
      console.warn("font could not be loaded");
    });

  window.addEventListener("load", removeLoader);
} else {
  window.addEventListener("load", function () {
    document.documentElement.classList.add("_page-loaded");
  });
}

const md = gsap.matchMedia();
const tm = window.matchMedia("(max-width: 64.05em)");
const mm = window.matchMedia("(max-width: 48em)");
const header = document.querySelector(".header");

const splitGlitchText = () => {
  if (document.querySelectorAll(".glitch-text").length) {
    const items = document.querySelectorAll(".glitch-text");

    const split = (t, item) => {
      let repeat = (t) => {
        let string = `<div class="letter">`;
        for (let i = 1; i <= 10; i++) {
          const size = item.dataset.glitchSize ? +item.dataset.glitchSize : 170;

          string += `<div class="glitch" style="transform: translateX(${i * -30}px) scaleX(${1 / i});opacity: 0"><span style="top: -${i * (size / 10)}px">${t}</span></div>`;
        }
        string += `</div>`;
        return string;
      };
      return t
        .split("")
        .map((t) => repeat(t))
        .join("");
    };

    items.forEach((item) => {
      const text = item.querySelector(".glitch-text-content");

      text.innerHTML = split(text.innerHTML, item);

      const letters = item.querySelectorAll(".letter");

      for (let i = 1; i < letters.length; i++) {
        const letter = letters[i];

        if (item.closest(".victory")) {
          letter.style.transform = `translateX(-${i * 31}px)`;
        } else if (item.closest(".lang")) {
          letter.style.transform = `translateX(-${i * 22}px)`;
        } else {
          letter.style.transform = `translateX(-${i * 13}px)`;
        }
      }
    });

    setDefaults();
  }
};

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
  if (locoScroll) {
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
  }
};

document.addEventListener("click", onClickHandler);
tm.addEventListener("change", onMatchMediaChangeHandler);

document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("item-card") && locoScroll) {
    setLocoScrollAttr(document.querySelector(".header"));
    setLocoScrollAttr(document.querySelector(".item-card__thumbs-swiper"));
    setLocoScrollAttr(document.querySelector(".item-card__content"));
    locoScroll.update();
  }

  if (document.querySelector(".footer-main__anchor") && locoScroll) {
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
});

if (locoScroll) {
  document.addEventListener("mouseover", function (e) {
    if (e.target.closest("[data-sb]")) {
      locoScroll.stop();
    } else {
      locoScroll.start();
    }
  });
}
