import "../scss/style.scss";

import "./utils/setCurrentYear";
import "./utils/script";
import "./utils/quantity";
import "./utils/toggleClass";
import "./lib/simplebar";

window.innerWidth > 1024 &&
  document.querySelector(".loco-scroll") &&
  import("./lib/locomotive-scroll");
