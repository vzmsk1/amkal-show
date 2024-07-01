import SimpleBar from "simplebar";
import "simplebar/dist/simplebar.css";
import("../../scss/common/simplebar.scss");

function initSimplebar() {
  document.querySelectorAll("[data-sb]").forEach((el) => {
    new SimpleBar(el, {
      autoHide: false,
    });
  });
}

initSimplebar();
