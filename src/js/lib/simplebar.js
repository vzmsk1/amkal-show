import SimpleBar from "simplebar";
import("simplebar/dist/simplebar.css");
// import "../../scss/common/simplebar.scss";

export function initSimplebar() {
  document.querySelectorAll("[data-sb]").forEach((el) => {
    new SimpleBar(el, {
      autoHide: false,
    });
    // document.addEventListener("showCartWidget", function () {
    //   sb.recalculate();
    // });
  });
}

window.addEventListener("load", initSimplebar);
