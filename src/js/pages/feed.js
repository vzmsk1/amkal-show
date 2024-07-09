import "../../scss/style.scss";
import "../../scss/pages/feed.scss";

window.innerWidth > 1024 && import("../lib/locomotive-scroll");
import("../lib/swiper");
import("../lib/lightgallery");
import("../lib/simplebar");
import("../lib/dd");

import * as utils from "../utils/utils";
utils.setCurrentYear();
utils.toggleClass();

import("../utils/quantity");
import "../utils/script";
