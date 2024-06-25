import gsap from "gsap";
import Splitting from "splitting";

document.querySelectorAll("[data-splitting]").length && Splitting();

export const defaults = { defaults: { duration: 0.5 } };

export const setDefaults = () => {
  gsap.set(
    ".hero__title, .hero__video-wrap, .victory__container,.feed-screen__slide:first-child .feed-card__inner, .feed-screen__slide:nth-child(2) .feed-card__inner, .feed-screen__slide:nth-child(3) .feed-card__inner, .feed-screen__navigation",
    {
      opacity: 0,
    },
  );
  gsap.set(".lang__image-wrap", { opacity: 0, translateX: -65 });
  gsap.set(".hero__title span:first-child", { translateX: "-100%" });
  gsap.set(".hero__title span:last-child", { translateX: "100%" });
  gsap.set(document.querySelectorAll("[data-header-anim]"), { opacity: 0 });
  gsap.set(".about__image-wrap", { translateX: -177, opacity: 0 });
  gsap.set(".about__title [data-animate-text='1']", {
    translateX: -195,
    opacity: 0,
  });
  gsap.set(".about__title [data-animate-text='2']", {
    translateX: -236,
    opacity: 0,
  });
  gsap.set(".about__title [data-animate-text='3']", {
    translateX: -119,
    opacity: 0,
  });
  gsap.set(".about__title [data-animate-text='4']", {
    translateX: -276,
    opacity: 0,
  });
  gsap.set(
    ".lang__title [data-animate-text='1'], .lang__title [data-animate-text='2'], .lang__title .glitch-text",
    {
      translateX: "-100%",
      opacity: 0,
    },
  );
  gsap.set(".glitch", {
    opacity: 0,
    translateX: "-100%",
    translateY: -10,
    skewX: "-10deg",
  });
};
