import { setActiveScreen } from "../../anim/mainpage-scroll";
import { enterAboutScreen } from "../../anim/screen/about";
import { defaults } from "../../anim/transitions";
import gsap from "gsap";
import { initVideoJS } from "../../lib/video";
import { enterFooterScreen } from "../screen/footer";

export const onHeroLeave = (isNext) => {
  heroTl.progress(1);

  if (isNext) {
    document.querySelector("body").classList.add("_light-theme");
    document.querySelector("body").classList.add("_light-theme_green");
    gsap.to("body", {
      backgroundColor: "#caff34",
      duration: 0.5,
      onComplete: () => {
        setActiveScreen(0, 1);
        enterAboutScreen();
      },
    });
  } else {
    setActiveScreen(0, 7);
    enterFooterScreen();
  }
};

export const heroTl = gsap.timeline({
  duration: 0.5,
  delay: 1,
  ease: "power4.out",
  onStart: () => {
    initVideoJS();
    document.querySelector("body").classList.remove("_light-theme");
    document.querySelector("body").classList.remove("_light-theme_green");
    gsap.to("body", {
      backgroundColor: "#000000",
      duration: 0.5,
    });
  },
  onComplete: () => {
    document.documentElement.classList.remove("_is-animating");
  },
});
export const heroLeaveTl = gsap.timeline({
  ...defaults,
  ease: "power4.in",
  paused: true,
  onStart: () => {
    document.documentElement.classList.add("_is-animating");
  },
});

export const animateHero = () => {
  heroTl.to(".hero__video-wrap", { opacity: 1, duration: 0.5 });
  heroTl.to(
    ".hero__title span",
    {
      translateX: 0,
      duration: 0.5,
    },
    0,
  );
  heroTl.to(
    ".hero__text .char",
    {
      opacity: 1,
      stagger: 0.01,
    },
    0,
  );
};

heroLeaveTl
  .to(".hero__title span:first-child", {
    translateX: "-110%",
    duration: 0.5,
  })
  .to(
    ".hero__title span:last-child",
    {
      translateX: "110%",
      duration: 0.5,
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
