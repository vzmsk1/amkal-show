import { setActiveScreen } from "@js/anim/mainpage-scroll";
import { enterAboutScreen } from "@js/anim/screen/about";
import { defaults } from "@js/anim/transitions";
import gsap from "gsap";

export const heroTl = gsap.timeline({
  ...defaults,
  delay: 0.5,
  onStart: () => {
    document.querySelector("body").classList.remove("_light-theme");
    gsap.to("body", {
      backgroundColor: "#000000",
      duration: 0.5,
    });
  },
});
export const heroLeaveTl = gsap.timeline({
  ...defaults,
  paused: true,
  onComplete: () => {
    gsap.to("body", {
      backgroundColor: "#caff34",
      duration: 0.5,
      onComplete: () => {
        enterAboutScreen();
        setActiveScreen(0, 1);
      },
    });
    gsap.to("header", { opacity: 0, duration: 0.5 });
  },
});

export const animateHero = () => {
  heroTl.to(".hero__container, .hero__video-wrap", { opacity: 1 }, 0);
  heroTl.to(
    ".hero__title span",
    {
      translateX: 0,
    },
    0.5,
  );
  heroTl.to(
    ".hero__text .char",
    {
      opacity: 1,
      stagger: 0.01,
      ease: "power1.out",
    },
    0,
  );
};

heroLeaveTl
  .to(".hero__title span:first-child", {
    translateX: "-110%",
  })
  .to(
    ".hero__title span:last-child",
    {
      translateX: "110%",
      onStart: () => {
        gsap.to(".hero__text .char", {
          opacity: 0,
          stagger: -0.01,
          ease: "power1.out",
        });
      },
    },
    0,
  )
  .to(".hero__video-wrap", { opacity: 0 }, 0.5);
