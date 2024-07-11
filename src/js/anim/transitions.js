import gsap from "gsap";

export const defaults = { defaults: { duration: 0.5 } };

export const setDefaults = () => {
  gsap.set(
    ".hero__container, .victory__video-wrap, .hero__video-wrap, .feed-screen__slide:first-child .feed-card__inner, .feed-screen__slide:nth-child(2) .feed-card__inner, .feed-screen__slide:nth-child(3) .feed-card__inner, .feed-screen__navigation",
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
  gsap.set(".about__title-txt_sm_1", {
    opacity: 0,
    translateX: -425,
    translateY: -39,
  });
  gsap.set(".about__title-txt_sm_2", {
    opacity: 0,
    translateX: -119,
    translateY: -34,
  });
  gsap.set(".about__title-txt_sm_3", {
    opacity: 0,
    translateX: -78,
    translateY: -28,
  });
  gsap.set(".victory__title-txt_sm_1", {
    opacity: 0,
    translateX: -658,
  });
  gsap.set(".victory__title-txt_sm_2", {
    opacity: 0,
    translateX: -114,
    translateY: -21,
  });
  gsap.set(".victory__title-txt_sm_3", {
    opacity: 0,
    translateX: -46,
    translateY: -17,
  });
};
