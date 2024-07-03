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

// locoScroll.destroy();
//
// window.addEventListener("load", function () {
//   setTimeout(() => {
//     locoScroll.init();
//   }, 1000);
// });
window.addEventListener("resize", function () {
  locoScroll.update();
});
