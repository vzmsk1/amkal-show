import { setActiveScreen } from "@js/anim/mainpage-scroll";
import gsap from "gsap";
import Splitting from "splitting";

const defaults = { defaults: { duration: 0.5 } };

document.querySelectorAll("[data-splitting]").length && Splitting();

export const heroTl = gsap.timeline({ ...defaults, delay: 0.5 });
export const leaveAboutTl = gsap
  .timeline({
    ...defaults,
    paused: true,
  })
  .to(
    ".about__text",
    {
      opacity: 0,
    },
    0,
  )
  .to(
    ".about__image-wrap",
    {
      translateX: "100vw",
      onComplete: () => {
        document.querySelector("body").classList.remove("_light-theme");
        setActiveScreen(1, 0);
      },
    },
    0.2,
  )
  .to(
    '[data-animate-text="1"]',
    {
      translateX: "100vw",
    },
    0.3,
  )
  .to(
    '[data-animate-text="2"], .about__title .glitch-text',
    {
      translateX: "100vw",
      onStart: () => {
        document
          .querySelectorAll(".about__title .glitch-text .letter")
          .forEach((el) => {
            gsap.to(el.querySelectorAll(".glitch"), {
              translateX: "100%",
              translateY: -10,
              skewX: "10deg",
              stagger: 0.03,
              duration: 0.1,
            });
          });
      },
    },
    0.4,
  )
  .to(
    '[data-animate-text="3"]',
    {
      translateX: "100vw",
    },
    0.5,
  )
  .to(
    '[data-animate-text="4"]',
    {
      translateX: "100vw",
    },
    0.6,
  );
export const aboutTl = gsap
  .timeline({ ...defaults, paused: true })
  .to(".about__text", { opacity: 1, duration: 0 }, 0)
  .to(
    ".about__text .char",
    {
      duration: 0.3,
      opacity: 1,
      stagger: 0.01,
      ease: "power1.out",
    },
    0,
  )
  .to(
    ".about__image-wrap, .about__title [data-animate-text='1']",
    { translateX: 0, opacity: 1 },
    0.2,
  )
  .to(
    ".about__title [data-animate-text='2']",
    { translateX: -21, opacity: 1 },
    0.4,
  )
  .to(
    ".about__title [data-animate-text='3'], .about__title [data-animate-text='4']",
    { translateX: 0, opacity: 1, duration: 0.1 },
    0.7,
  );

export const setDefaults = () => {
  gsap.set(".hero__title, .hero__video-wrap", { opacity: 0 });
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
  gsap.set(".about__title .glitch", {
    translateX: "-100%",
    translateY: -10,
    skewX: "-10deg",
  });
};

export const animateHero = () => {
  document.querySelector(".hero__video") &&
    document.querySelector(".hero__video").play();

  heroTl.to(".hero__title", { opacity: 1 }, 0);
  heroTl.to(".hero__video-wrap", { opacity: 1 }, 0);
  heroTl.to(
    ".hero__title span",
    {
      translateX: 0,
    },
    0,
  );
  gsap.to(".hero__text .char", {
    duration: 0.3,
    delay: 1,
    opacity: 1,
    stagger: 0.01,
    ease: "power1.out",
  });
};

export const animateHeader = () => {
  gsap.to(document.querySelectorAll("[data-header-anim]"), {
    opacity: 1,
    stagger: 0.3,
    delay: 0.5,
    duration: 1,
  });
};
