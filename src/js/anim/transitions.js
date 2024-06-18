import gsap from "gsap";
import Splitting from "splitting";

export const heroTl = gsap.timeline({ defaults: { delay: 0.5, duration: 1 } });

export const setDefaults = () => {
  gsap.set(".hero__title, .hero__video-wrap", { opacity: 0 });
  gsap.set(".hero__title span:first-child", { translateX: "-100%" });
  gsap.set(".hero__title span:last-child", { translateX: "100%" });
  gsap.set(document.querySelectorAll("[data-header-anim]"), { opacity: 0 });
};

export const animateHero = () => {
  Splitting();

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
