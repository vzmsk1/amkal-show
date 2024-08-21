import "../scss/style.scss";

import "./utils/setCurrentYear";
import "./utils/script";
import "./utils/quantity";
import "./utils/toggleClass";
import "./lib/simplebar";
import "./lib/inputmask";

// document.querySelector(".hero").addEventListener("click", function () {
//   document
//     .querySelector(".cart-widget_add .simplebar-content")
//     .append(document.querySelector(".cart__item").cloneNode(true));
//   document.dispatchEvent(new CustomEvent("showCartWidget"));
// });
//
// document.addEventListener("showCartWidget", function () {
//   console.log("log");
//   document
//     .querySelector(".actions-nav-row__item_cart")
//     .classList.add("_has-items");
//
//   setTimeout(() => {
//     document.documentElement.classList.add("_show-cart-widget");
//   }, 0);
//
//   setTimeout(() => {
//     if (!document.querySelector(".cart-widget._touch")) {
//       document.documentElement.classList.remove("_show-cart-widget");
//     }
//   }, 2500);
// });
