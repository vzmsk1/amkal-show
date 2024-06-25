import { setActiveScreen } from "@js/anim/mainpage-scroll";
import { defaults } from "@js/anim/transitions";
import gsap from "gsap";

export const feedTl = gsap.timeline({ ...defaults, paused: true });
export const feedLeaveTl = gsap.timeline({
  ...defaults,
  paused: true,
  onComplete: () => {
    setTimeout(() => {
      setActiveScreen(4, 5);
    }, 500);
  },
});

window.addEventListener("load", function () {
  feedLeaveTl
    .to(".feed-screen__head, .swiper-slide-active .feed-card__inner", {
      opacity: 0,
    })
    .to(
      ".swiper-slide-next .feed-card__inner, .swiper-slide-next + .swiper-slide .feed-card__inner",
      { opacity: 0 },
      0.3,
    )
    .to(
      ".feed-screen",
      {
        "--y": 0,
        onComplete: () => {
          document.querySelector("body").classList.add("_light-theme");
        },
      },
      1,
    );

  feedTl
    .to(".feed-screen", { "--y": "-100vh", delay: 0.3 })
    .to(
      ".swiper-slide-active .feed-card__inner, .swiper-slide-next .feed-card__inner, .swiper-slide-next + .swiper-slide .feed-card__inner",
      {
        opacity: 1,
        stagger: 0.2,
      },
      0.5,
    )
    .to(".feed-screen__navigation", { opacity: 1 }, 0.9);
});
