import { setActiveScreen } from "../../anim/mainpage-scroll";
import { enterFeedScreen } from "../../anim/screen/feed";
import { defaults } from "../../anim/transitions";
import gsap from "gsap";

export const langTl = gsap.timeline({ ...defaults, paused: true });
export const langLeaveTl = gsap.timeline({
  ...defaults,
  paused: true,
  onComplete: () => {
    enterFeedScreen();
    setActiveScreen(3, 4);
  },
});

langLeaveTl
  .to('.lang__title [data-animate-text="1"], .lang__image-wrap_right', {
    opacity: 0,
    translateX: "100vw",
  })
  .to(
    '.lang__title [data-animate-text="2"], .lang__image-wrap_left',
    { opacity: 0, translateX: "100vw" },
    0.3,
  );

langTl
  .to(".lang__title [data-animate-text='1'], .lang__title .glitch-text", {
    opacity: 1,
    translateX: 0,
    onStart: () => {
      gsap.to(".lang__title .glitch-text", { translateX: 76, opacity: 1 });
      document
        .querySelectorAll(".lang__title .glitch-text .letter")
        .forEach((el) => {
          gsap.to(el.querySelectorAll(".glitch"), {
            translateX: 0,
            skewX: "0deg",
            stagger: 0.03,
            opacity: 1,
            duration: 0.1,
          });
        });
    },
  })
  .to(".lang__title [data-animate-text='2']", {
    opacity: 1,
    translateX: 493,
  })
  .to(".lang__image-wrap_right", { opacity: 1, translateX: 0 }, 0.5)
  .to(
    ".lang__image-wrap_left",
    {
      opacity: 1,
      translateX: 0,
      onStart: () => {
        gsap.to(".lang__text .char", {
          opacity: 1,
          stagger: 0.01,
          ease: "power1.out",
        });
      },
    },
    1,
  );
