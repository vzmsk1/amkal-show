import Inputmask from "inputmask";

const inputItems = document.querySelectorAll("[data-im]");

window.addEventListener("load", () => {
  if (inputItems.length) {
    inputItems.forEach((inputItem) => {
      const im = Inputmask({
        alias: inputItem.dataset.im === "email" ? "email" : "",
        regex: inputItem.dataset.im !== "email" ? "[0-9]*" : "",
        clearIncomplete: true,
        jitMasking: true,
        showMaskOnHover: false,
      });
      im.mask(inputItem);
    });
  }
});
