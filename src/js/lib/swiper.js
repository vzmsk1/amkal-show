import Swiper from "swiper";
import "swiper/css";
import { Navigation } from "swiper/modules";

const initSliders = () => {
  if (document.querySelector(".items-carousel__swiper")) {
    new Swiper(".items-carousel__swiper", {
      modules: [Navigation],
      slidesPerView: 3,
      spaceBetween: 203,
    });
  }
};

window.addEventListener("load", initSliders);
