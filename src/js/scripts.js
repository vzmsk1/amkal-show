window.innerWidth > 1024 && import("../js/lib/locomotive-scroll");
document.querySelector(".swiper") && import("../js/lib/swiper");
document.querySelector("[data-lightgallery]") &&
  import("../js/lib/lightgallery");
document.querySelector("[data-videojs]") && import("../js/lib/video");
document.querySelector("[data-sb]") && import("../js/lib/simplebar");
document.querySelector("[data-da]") && import("../js/lib/dd");

import * as utils from "../js/utils/utils";
utils.setCurrentYear();
utils.toggleClass();

import "../js/utils/forms";
document.querySelector(".quantity") && import("../js/utils/quantity");
import "../js/utils/script";

document.querySelector(".item-card") && import("./anim/item-card-carousel");
