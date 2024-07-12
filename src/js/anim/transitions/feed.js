import { setActiveScreen } from "../../anim/mainpage-scroll";
import { defaults } from "../../anim/transitions";
import gsap from "gsap";
import { enterLangScreen } from "../screen/lang";
import { enterMerchScreen } from "../screen/merch";

export const feedOnLeave = (isNext) => {
  if (isNext) {
    setActiveScreen(4, 5);
    enterMerchScreen();
  } else {
    gsap.to("body", { backgroundColor: "#000000" });
    gsap.to("header", { opacity: 0 });

    setActiveScreen(4, 3);
    enterLangScreen();
  }
};

export const feedTl = gsap.timeline({
  ...defaults,
  paused: true,
  ease: "power4.out",
  onStart: () => {
    gsap.set("body", { backgroundColor: "#171717" });
  },
});
export const feedLeaveTl = gsap.timeline({
  ...defaults,
  paused: true,
  ease: "power4.in",
});

feedLeaveTl
  .to(".feed-screen__head", {
    opacity: 0,
    onStart: () => {
      gsap.to(
        ".feed-screen .swiper-slide-active .feed-card__inner, .feed-screen .swiper-slide-next .feed-card__inner, .feed-screen .swiper-slide-next + .swiper-slide .feed-card__inner",
        {
          opacity: 0,
          stagger: 0.1,
        },
      );
    },
  })
  .to(".feed-screen__navigation", { opacity: 0 }, 0.5);

feedTl
  .to(".feed-screen__head", {
    opacity: 1,
    onStart: () => {
      gsap.to(
        ".feed-screen .swiper-slide-active .feed-card__inner, .feed-screen .swiper-slide-next .feed-card__inner, .feed-screen .swiper-slide-next + .swiper-slide .feed-card__inner",
        {
          opacity: 1,
          stagger: 0.1,
        },
      );
    },
  })

  .to(".feed-screen__navigation", { opacity: 1 }, 0.5);
