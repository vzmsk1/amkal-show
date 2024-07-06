import { initItemCardCarousel } from "@js/anim/item-card-carousel";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".wrapper"),
  smooth: true,
  multiplier: 1,
  mobile: {
    smooth: false,
  },
  tablet: {
    smooth: false,
    breakpoint: 1025,
  },
});

const fixScrollTrigger = () => {
  ScrollTrigger.scrollerProxy(locoScroll.el, {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: locoScroll.el.style.transform ? "transform" : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.defaults({ scroller: locoScroll.el });

  setTimeout(() => {
    ScrollTrigger.refresh();
    ScrollTrigger.update();
  }, 0);
};

window.addEventListener("load", function () {
  fixScrollTrigger();
  initItemCardCarousel();

  setTimeout(() => {
    locoScroll.update();
  }, 1000);
});
window.addEventListener("resize", function () {
  locoScroll.update();
});
