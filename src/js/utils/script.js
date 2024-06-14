import { bodyLockToggle } from "@js/utils/utils";

document.addEventListener("click", function (e) {
  const { target } = e;

  if (target.closest(".header__hamburger")) {
    document.documentElement.classList.toggle("_show-header-menu");
    bodyLockToggle();
  }
});
