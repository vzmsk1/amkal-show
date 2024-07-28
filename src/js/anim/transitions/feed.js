import { setActiveScreen } from "../../anim/mainpage-scroll";
import { defaults } from "../../anim/transitions";
import gsap from "gsap";

export const feedOnLeave = (isNext, currentIdx) => {
  if (isNext) {
    setActiveScreen(currentIdx, currentIdx + 1);
    // enterMerchScreen();
  } else {
    gsap.to("body", { backgroundColor: "#000000" });

    setActiveScreen(currentIdx, currentIdx - 1);
    // enterLangScreen();
  }
};

export const feedTl = gsap.timeline({
  ...defaults,
  ease: "power4.out",
  paused: true,
  onStart: () => {
    gsap.set("body", { backgroundColor: "#171717" });
  },
  onComplete: () => {
    document.documentElement.classList.remove("_is-animating");
  },
});
export const feedLeaveTl = gsap.timeline({
  ...defaults,
  ease: "power4.in",
  paused: true,
  onStart: () => {
    document.documentElement.classList.add("_is-animating");
  },
});

feedLeaveTl
  .to(".feed-screen__head", {
    opacity: 0,
    onStart: () => {
      gsap.to(".feed-screen .swiper-slide .feed-card__inner", {
        opacity: 0,
        stagger: 0.1,
      });
    },
  })
  .to(".feed-screen__navigation", { opacity: 0 }, 0.5);

feedTl
  .to(".feed-screen__head", {
    opacity: 1,
    onStart: () => {
      gsap.to(".feed-screen .swiper-slide .feed-card__inner", {
        opacity: 1,
        stagger: 0.1,
      });
    },
  })

  .to(".feed-screen__navigation", { opacity: 1 }, 0.5);
