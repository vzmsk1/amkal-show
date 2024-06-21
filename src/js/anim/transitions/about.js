import { setActiveScreen } from "@js/anim/mainpage-scroll";
import { enterVictoryScreen } from "@js/anim/screen/victory";
import { defaults } from "@js/anim/transitions";
import gsap from "gsap";

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
        gsap.to("body", { backgroundColor: "#000000" });
        setActiveScreen(1, 2);
        enterVictoryScreen();
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
