import { setDefaults } from "@js/anim/transitions";
import { animateHeader } from "@js/anim/transitions/header";
import { animateHero } from "@js/anim/transitions/hero";
import { locoScroll } from "@js/lib/locomotive-scroll";
import { bodyLock, bodyLockToggle, bodyUnlock } from "@js/utils/utils";
import { initMainpageScroll } from "../anim/mainpage-scroll";

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

          string += `<div class="glitch"><span style="top: -${i * (size / 10)}px;">${t}</span></div>`;
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

  if (!document.querySelector("body._light-theme")) {
    if (document.querySelector("._show-cart-widget")) {
      header.classList.remove("_dark-theme");
      mm.matches ? bodyLock() : bodyUnlock();
    } else {
      bodyUnlock();
    }
  } else {
    header.classList.add("_dark-theme");
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
tm.addEventListener("change", onMatchMediaChangeHandler);

document.addEventListener("DOMContentLoaded", function () {
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

  if (document.querySelector(".loader")) {
    initMainpageScroll();
    splitGlitchText();

    setDefaults();
    animateHeader();
    animateHero();

    setTimeout(() => {
      document.querySelector(".loader").remove();
    }, 1000);
  }

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
