import { defaults } from "../transitions";
import gsap from "gsap";

export const footerOnComplete = (isNext) => {
  if (isNext) {
  } else {
  }
};

export const footerTl = gsap.timeline({
  ...defaults,
  paused: true,
  ease: "power4.out",
  onStart: () => {
    document.querySelector("body").classList.remove("_light-theme");
  },
});
export const footerLeaveTl = gsap.timeline({
  ...defaults,
  paused: true,
  ease: "power4.in",
});

footerTl
  .to(".footer__list, .footer-main__bottom", {
    opacity: 1,
    delay: 1,
  })
  .to(".footer-main__title-txt", {
    opacity: 1,
    translateX: -4,
    onStart: () => {
      gsap.to(".footer-main__sponsors", {
        opacity: 1,
      });

      document
        .querySelectorAll(".footer-main__title .glitch-text")
        .forEach((item) => {
          const letters = item.querySelectorAll(".letter");

          letters.forEach((letter, i) => {
            gsap.to(letter.querySelectorAll(".glitch"), {
              translateX: 0,
              scaleX: 1,
              opacity: 1,
              stagger: -0.05,
            });

            letter.querySelectorAll(".glitch span").forEach((el, j) => {
              gsap.to(el, {
                stagger: -0.05,
                top: +letter.querySelectorAll(".glitch span")[j].dataset.top,
                ease: "power4.out",
                delay: 0.05,
                duration: 1,
              });
            });
          });
        });
    },
  });
