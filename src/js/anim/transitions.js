import gsap from "gsap";

export const defaults = { defaults: { duration: 0.5 } };

export const setDefaults = () => {
  gsap.set(
    ".hero__container, .footer-main__sponsors, .footer-main .footer__list, .footer-main__bottom, .match__head, .match__footer, .match__filters, .table-match__row, .merch__head, .merch__item, .feed-screen__navigation, .feed-screen__head, .victory__video-wrap, .hero__video-wrap, .feed-screen .swiper-slide-active .feed-card__inner, .feed-screen .swiper-slide-next .feed-card__inner, .feed-screen .swiper-slide-next + .swiper-slide .feed-card__inner",
    {
      opacity: 0,
    },
  );
  gsap.set(".hero__title span:first-child", { translateX: "-110%" });
  gsap.set(".hero__title span:last-child", { translateX: "110%" });
  gsap.set(document.querySelectorAll("[data-header-anim]"), { opacity: 0 });
  gsap.set(".about__image-wrap", { translateX: -450, opacity: 0 });
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
  gsap.set(".lang__title-txt_1, .lang__image-wrap_left", {
    opacity: 0,
    translateX: "-100%",
  });
  gsap.set(".lang__image-wrap_right .lang__image", {
    opacity: 0,
    translateX: -200,
  });
  gsap.set(".lang__title-txt_2", {
    opacity: 0,
    translateX: -398,
    translateY: -31,
  });
  gsap.set(".lang__title-txt_3", {
    opacity: 0,
    translateX: -380,
    translateY: -30,
  });
  gsap.set(".footer-main__title-txt", {
    opacity: 0,
    translateX: "-110%",
  });
};
