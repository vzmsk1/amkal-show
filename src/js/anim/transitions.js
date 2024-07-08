import gsap from "gsap";
import Splitting from "splitting";

document.querySelectorAll("[data-splitting]").length && Splitting();

export const defaults = { defaults: { duration: 0.5 } };

export const setDefaults = () => {
  gsap.set(
    ".hero__container, .hero__video-wrap, .victory__container,.feed-screen__slide:first-child .feed-card__inner, .feed-screen__slide:nth-child(2) .feed-card__inner, .feed-screen__slide:nth-child(3) .feed-card__inner, .feed-screen__navigation",
    {
      opacity: 0,
    },
  );
  gsap.set(".lang__image-wrap", { opacity: 0, translateX: -65 });
  gsap.set(".hero__title span:first-child", { translateX: "-110%" });
  gsap.set(".hero__title span:last-child", { translateX: "110%" });
  gsap.set(document.querySelectorAll("[data-header-anim]"), { opacity: 0 });
  gsap.set(".about__image-wrap", { translateX: -450, opacity: 0 });
  gsap.set(
    ".lang__title [data-animate-text='1'], .lang__title [data-animate-text='2'], .lang__title .glitch-text",
    {
      translateX: "-100%",
      opacity: 0,
    },
  );
  gsap.set(".glitch", {
    // opacity: 0,
  });
};
