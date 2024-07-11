import { defaults } from "../../anim/transitions";
import gsap from "gsap";
import { setActiveScreen } from "../mainpage-scroll";
import { enterVictoryScreen } from "../screen/victory";
import { heroTl } from "./hero";

export const leaveAboutTl = gsap
  .timeline({
    ...defaults,
    paused: true,
    ease: "power4.in",
    onComplete: () => {
      heroTl.restart();
      gsap.to("header", { opacity: 0, duration: 0.5 });
      setActiveScreen(1, 2);
      enterVictoryScreen();
    },
  })
  .to(".about__text", { opacity: 0 })
  .to(".about__image-wrap", { opacity: 0, translateX: 383 }, 0)
  .to(
    ".about__title-txt_sm",
    {
      opacity: 0,
      translateX: "100vw",
      stagger: -0.1,
      onStart: () => {
        document
          .querySelectorAll(".about__title .glitch-text")
          .forEach((item) => {
            const letters = item.querySelectorAll(".letter");

            letters.forEach((letter, i) => {
              gsap.to(letter.querySelectorAll(".glitch"), {
                translateX: `${100 * (letters.length - 1 - i)}%`,
                scaleX: 0,
                stagger: 0.05,
              });
            });
          });
      },
    },
    0,
  );

export const aboutTl = gsap
  .timeline({
    ...defaults,
    paused: true,
    ease: "power4.out",
    onStart: () => {
      gsap.to(".about__text .char", { opacity: 1, stagger: 0.05 });
    },
  })
  .to(".about__image-wrap", {
    translateX: 0,
    opacity: 1,
    duration: 1,
  })
  .to(".about__title-txt_sm_1", {
    opacity: 1,
    translateX: -384,
  })
  .to(".about__title-txt_sm_2", {
    opacity: 1,
    translateX: -22,
  })
  .to(".about__title-txt_sm_3", {
    opacity: 1,
    translateX: -1,
  });
