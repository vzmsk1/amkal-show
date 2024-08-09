// import "../../scss/sections/hero.scss";
// import "../../scss/sections/loader.scss";

import { initVideoJS } from "../lib/video";
initVideoJS();

import "../utils/initLoader";
import { supportsTouch } from "../utils/script";

window.addEventListener("load", function () {
  const fontSize = window
    .getComputedStyle(document.documentElement)
    .getPropertyValue("font-size");
  console.log(fontSize);

  const handleZoom = () => {
    if (!supportsTouch) {
      if (window.devicePixelRatio !== 1) {
        document.querySelector("body").style.zoom = 1 / window.devicePixelRatio;
        document.querySelector("body").style["-moz-transform"] =
          `scale(${1 / window.devicePixelRatio})`;

        document.documentElement.classList.add("_zoom");
        document.documentElement.style.fontSize = fontSize;
      } else {
        document.querySelector("body").style.zoom = 1;
        document.querySelector("body").style["-moz-transform"] = `scale(${1})`;

        document.documentElement.classList.remove("_zoom");
        document.documentElement.style.removeProperty("font-size");
      }

      if (document.querySelector("._zoom")) {
        const isTablet =
          window.screen.availWidth <= 1024 && window.screen.availWidth > 768;
        const isMobile = window.screen.availWidth <= 768;

        if (isTablet) {
          document.documentElement.classList.add("_zoom-tab");
        } else {
          document.documentElement.classList.remove("_zoom-tab");
        }

        if (isMobile) {
          document.documentElement.classList.add("_zoom-mob");
        } else {
          document.documentElement.classList.remove("_zoom-mob");
        }

        if (!isMobile && !isTablet) {
          document.documentElement.classList.add("_zoom-desk");

          if (window.screen.availHeight < 900) {
            document.documentElement.classList.add("_zoom-desk-sm");
          } else {
            document.documentElement.classList.remove("_zoom-desk-sm");
          }
        } else {
          document.documentElement.classList.remove("_zoom-desk");
          document.documentElement.classList.remove("_zoom-desk-sm");
        }
      } else {
        document.documentElement.classList.remove("_zoom-tab");
        document.documentElement.classList.remove("_zoom-mob");
        document.documentElement.classList.remove("_zoom-desk");
        document.documentElement.classList.remove("_zoom-desk-sm");
      }
    } else {
      document.querySelector("body").style.zoom = 1;
      document.querySelector("body").style["-moz-transform"] = `scale(${1})`;
      document.documentElement.classList.remove("_zoom");
      document.documentElement.classList.remove("_zoom-tab");
      document.documentElement.classList.remove("_zoom-mob");
      document.documentElement.classList.remove("_zoom-desk");
      document.documentElement.classList.remove("_zoom-desk-sm");
    }
  };
  handleZoom();

  window.addEventListener("resize", (e) => {
    handleZoom();
  });
});
