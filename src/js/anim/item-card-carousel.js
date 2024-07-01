import { removeClasses } from "@js/utils/utils";
import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const mm = gsap.matchMedia();

const initItemCardCarousel = () => {
  if (document.querySelector(".item-card__swiper")) {
    mm.add("(min-width: 1024px)", () => {
      const thumbs = document.querySelectorAll(".item-card__thumbs-slide");

      const setThumbsClasses = (idx) => {
        removeClasses(thumbs, "_is-active");
        thumbs[idx] && thumbs[idx].classList.add("_is-active");
        console.log(idx);
      };

      document.querySelectorAll(".item-card__slide").forEach((slide, idx) => {
        thumbs[idx].addEventListener("click", function () {
          gsap.to(slide, {
            duration: 1,
            scrollTo: { y: 0, autoKill: true },
          });
          setThumbsClasses(idx);
          console.log(slide);
        });

        gsap.timeline({
          scrollTrigger: {
            trigger: slide,
            start: "top top",
            end: "bottom bottom",
            onEnter: (e) => {
              setThumbsClasses(idx);
            },
            onEnterBack: (e) => {
              setThumbsClasses(idx);
            },
          },
        });
      });
    });
  }
};
initItemCardCarousel();
