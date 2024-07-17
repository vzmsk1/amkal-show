import gsap from "gsap";

export const defaults = { defaults: { duration: 0.5 } };

export const charTr = {
  opacity: 1,
  stagger: 0.02,
  duration: 0.3,
};

export const setDefaults = () => {
  gsap.set(
    ".hero__video-wrap, .about__title .lr, .victory__title .ran, .about__title .bs, .footer-main__sponsors, .footer-main .footer__item, .footer-main__bottom, .match__head, .match__footer, .match__filters, .table-match__row, .merch__head, .merch__item, .feed-screen__navigation, .feed-screen__head, .victory__video-wrap, .feed-screen .swiper-slide .feed-card__inner",
    {
      opacity: 0,
    },
  );
  gsap.set(".hero__title span:first-child", { translateX: "-110%" });
  gsap.set(".hero__title span:last-child", { translateX: "110%" });
  gsap.set(document.querySelectorAll("[data-header-anim]"), { opacity: 0 });
  gsap.set(".about__image-wrap", { translateX: -450, opacity: 0 });
  gsap.set(".about__title-txt_sm_1, .about__title-txt_sm_3", {
    opacity: 0,
    translateX: "-15rem",
  });
  gsap.set(".about__title-txt_sm_2", {
    opacity: 0,
    translateX: "-10rem",
  });
  gsap.set(".victory__title-txt_sm_1", {
    opacity: 0,
    translateX: "-30rem",
  });
  gsap.set(".victory__title-txt_sm_2", {
    opacity: 0,
    translateX: "-15rem",
  });
  gsap.set(".victory__title-txt_sm_3", {
    opacity: 0,
    translateX: "-6rem",
  });
  gsap.set(".lang__title-txt_1, .lang__image-wrap_left", {
    opacity: 0,
    translateX: "-100%",
  });
  gsap.set(".lang__image-wrap_right .lang__image", {
    opacity: 0,
    translateX: "-18rem",
  });
  gsap.set(".lang__title-txt_2, .lang__title-txt_3", {
    opacity: 0,
    translateX: "-12rem",
  });
  gsap.set(
    ".footer-main__title-txt, .lang__title-content_1, .lang__title-content_2",
    {
      opacity: 0,
      translateX: "-110%",
    },
  );
  gsap.set(
    ".footer-main__title-txt, .lang__title-content_3, .lang__title-content_4",
    {
      opacity: 0,
      translateX: "-40%",
    },
  );
};
