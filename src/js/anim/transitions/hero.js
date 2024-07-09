import { defaults } from "@js/anim/transitions";
import gsap from "gsap";

export const heroTl = gsap.timeline({ ...defaults, delay: 0.5 });

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
