import "../scss/style.scss";

import "./lib/simplebar";

import "./utils/setCurrentYear";
import "./utils/toggleClass";
import "./utils/quantity";
import "./utils/script";

window.innerWidth > 1024 &&
  document.querySelector(".loco-scroll") &&
  import("./lib/locomotive-scroll");
