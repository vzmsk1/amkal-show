import { defaults } from "../../anim/transitions";
import gsap from "gsap";

export const leaveAboutTl = gsap.timeline({
  ...defaults,
  paused: true,
});

export const aboutTl = gsap
  .timeline({ ...defaults, paused: true })
  .to(".about__text .char", { opacity: 1, stagger: 0.01 })
  .to(
    ".about__image-wrap",
    {
      translateX: 0,
      opacity: 1,
    },
    0,
  );
