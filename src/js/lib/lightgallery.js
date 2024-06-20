import lightGallery from "lightgallery";
document.querySelectorAll("[data-lightgallery]").length &&
  import("lightgallery/css/lightgallery-bundle.min.css");

const initLightGallery = () => {
  if (document.querySelectorAll("[data-lightgallery]").length) {
    document.querySelectorAll("[data-lightgallery]").forEach((gallery) => {
      const text = gallery.querySelector(".media__text");
      const description = gallery.querySelector(".media__description");

      const lg = lightGallery(gallery, {
        speed: 500,
        licenseKey: "7EC452A9-0CFD441C-BD984C7C-17C8456E",
        appendCounterTo: ".lg-content",
        selector: ".media__image-wrap",
      });
      gallery.addEventListener("lgBeforeOpen", (e) => {
        const container = lg.$container.firstElement.querySelector(".lg-outer");

        text && container.append(text);
        description && container.append(description);
      });
    });
  }
};
initLightGallery();
