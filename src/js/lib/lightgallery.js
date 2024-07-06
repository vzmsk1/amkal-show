import lightGallery from "lightgallery";
import "../../scss/common/lightgallery.scss";
import "lightgallery/css/lightgallery-bundle.min.css";

const initLightGallery = () => {
  const images = document.querySelectorAll(
    ".feed-chapter__images-swiper .slide-feed-chapter__image-wrap",
  );

  document.querySelectorAll("[data-lightgallery]").forEach((gallery) => {
    const description = gallery.dataset.description;

    const lg = lightGallery(gallery, {
      speed: 500,
      licenseKey: "7EC452A9-0CFD441C-BD984C7C-17C8456E",
      appendCounterTo: ".lg-content",
      selector: ".slide-feed-chapter__image-wrap",
      appendSubHtmlTo: ".lg-item",
    });

    gallery.addEventListener("lgBeforeSlide", (e) => {
      const items = document.querySelectorAll(".lg-item");

      items.forEach((item) => {
        if (
          item.querySelector(".lg-sub-html") &&
          item.querySelector(".lg-sub-html").innerHTML === "true"
        ) {
          item.classList.add("_is-vertical");
        }
      });
    });
    gallery.addEventListener("lgBeforeOpen", (e) => {
      const container = lg.$container.firstElement.querySelector(".lg-outer");
      const desc = document.createElement("div");

      desc.classList.add("gallery-description");
      desc.innerHTML = description;
      description && container.append(desc);

      const items = document.querySelectorAll(".lg-item");

      items.forEach((item) => {
        if (
          item.querySelector(".lg-sub-html") &&
          item.querySelector(".lg-sub-html").innerHTML === "true"
        ) {
          item.classList.add("_is-vertical");
        }
      });
    });
  });
};
initLightGallery();
