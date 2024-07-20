import "../../scss/sections/feed.scss";
import gsap from "gsap";
import { locoScroll } from "../lib/locomotive-scroll";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

// window.addEventListener("load", () => {
//   document
//     .querySelector(".feed__watch-all-btn")
//     .addEventListener("click", function () {
//       const node = document.querySelector(".feed__list").cloneNode(true);
//       document.querySelector(".feed__container").appendChild(node);
//     });
//   new ResizeObserver(() => {
//     setTimeout(() => {
//       locoScroll.destroy();
//       locoScroll.init();
//       locoScroll.update();
//     }, 100);
//   }).observe(document.querySelector(".feed"));
// });
