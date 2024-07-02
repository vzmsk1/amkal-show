import LocomotiveScroll from "locomotive-scroll";

export const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".wrapper"),
  smooth: true,
  multiplier: window.innerWidth > 1024 ? 1 : 1.7,
  tablet: {
    smooth: true,
  },
  smartphone: {
    smooth: true,
  },
});

window.addEventListener("resize", function () {
  const width = window.innerWidth;
  locoScroll.destroy();

  setTimeout(() => {
    locoScroll.init();
  }, 500);
});

window.addEventListener("load", function () {
  setTimeout(() => {
    locoScroll.update();
  }, 1000);
});
