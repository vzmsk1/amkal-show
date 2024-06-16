import { bodyLock, bodyLockToggle, bodyUnlock } from "@js/utils/utils";

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

  if (target.closest(".header__hamburger")) {
    initHamburgerMenu();
  }

  if (tm.matches) {
    if (target.closest(".actions-header__item_cart .actions-header__txt")) {
      initCartWidget();
    }
    if (
      document.querySelector("._show-cart-widget") &&
      (!target.closest(".actions-header__item_cart") ||
        target.closest(".cart-widget__close-btn"))
    ) {
      closeCartWidget();
    }
  }
};

const onMatchMediaChangeHandler = () => {
  if (!tm.matches && document.querySelector("._show-header-menu")) {
    closeHeaderMenu();
  }

  if (!mm.matches && document.querySelector("._show-cart-widget")) {
    closeCartWidget();
  }
};

document.addEventListener("click", onClickHandler);
tm.addEventListener("change", onMatchMediaChangeHandler);

window.addEventListener("load", function () {
  document.documentElement.classList.add("_page-loaded");
});
