// import SimpleBar from "simplebar";
// import("simplebar/dist/simplebar.css");
// import "../../scss/common/simplebar.scss";

export function initSimplebar() {
  document.querySelectorAll("[data-sb]").forEach((el) => {
    if (!el.querySelector(".simplebar-wrapper")) {
      new SimpleBar(el, {
        autoHide: false,
      });
    }
  });
}

window.addEventListener("load", initSimplebar);
