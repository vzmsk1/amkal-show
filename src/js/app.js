import "../scss/style.scss";

import "../js/lib/dd";
import "../js/lib/locomotive-scroll";
document.querySelector(".swiper") && import("../js/lib/swiper");
document.querySelector("[data-lightgallery]") &&
  import("../js/lib/lightgallery");
document.querySelector("[data-videojs]") && import("../js/lib/video");
document.querySelector("[data-sb]") && import("../js/lib/simplebar");

import * as utils from "../js/utils/utils";
utils.setCurrentYear();
utils.toggleClass();
document.querySelector(".loader") && utils.initLoader();

document.querySelector("form[data-validate]") && import("../js/utils/forms");
import "../js/utils/quantity";
import "../js/utils/script";

document.querySelector(".item-card") && import("./anim/item-card-carousel");
