import LocomotiveScroll from "locomotive-scroll";
import "../../scss/common/locomotive-scroll.scss";
import gsap from "gsap";
import {
  initItemCardCarousel,
  setThumbsClasses,
} from "../anim/item-card-carousel";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".wrapper"),
  smooth: true,
  // multiplier: 1,
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

export const toggleScroll = {
  touchStart: () => {
    locoScroll.stop();
  },
  touchEnd: () => {
    locoScroll.start();
  },
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

document.addEventListener("mouseover", function (e) {
  if (e.target.closest("[data-sb]")) {
    locoScroll.stop();
  } else {
    locoScroll.start();
  }
});

if (document.querySelector(".footer-main__anchor")) {
  document
    .querySelector(".footer-main__anchor")
    .addEventListener("click", function () {
      locoScroll.scrollTo(0);
    });
}

if (document.querySelectorAll(".item-card__slide").length) {
  document.querySelectorAll(".item-card__slide").forEach((slide, idx) => {
    document
      .querySelectorAll(".item-card__thumbs-slide")
      [idx].addEventListener("click", function () {
        if (window.innerWidth > 1024) {
          locoScroll.scrollTo(slide, {
            offset: -1,
            callback: () => {
              setThumbsClasses(
                idx,
                document.querySelectorAll(".item-card__thumbs-slide"),
              );
            },
          });
        }
      });
  });
}

document.addEventListener("bodyLock", function () {
  locoScroll.stop();
});
document.addEventListener("bodyUnlock", function () {
  locoScroll.start();
});
