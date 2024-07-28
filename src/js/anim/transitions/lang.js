import { setActiveScreen } from "../../anim/mainpage-scroll";
import { defaults } from "../../anim/transitions";
import gsap from "gsap";
import { animateGlitchText, moveGlitchText } from "../../utils/splitGlitchText";

export const langOnComplete = (isNext, currentIdx) => {
  if (isNext) {
    // enterFeedScreen();
    setActiveScreen(currentIdx, currentIdx + 1);
  } else {
    // enterVictoryScreen();
    setActiveScreen(currentIdx, currentIdx - 1);
  }
};

export const langTl = gsap.timeline({
  ...defaults,
  ease: "power4.out",
  paused: true,
  onStart: () => {
    animateGlitchText(".lang__title .letter");

    gsap.set(".lang__text", {
      opacity: 1,
    });

    gsap.to(".lang__text .char", {
      opacity: 1,
      stagger: 0.01,
    });
  },
  onComplete: () => {
    document.documentElement.classList.remove("_is-animating");
  },
});
export const langLeaveTl = gsap.timeline({
  ...defaults,
  ease: "power4.in",
  paused: true,
  onStart: () => {
    document.documentElement.classList.add("_is-animating");
  },
});

langTl
  .to(".lang__title-txt_1, .lang__image-wrap_right .lang__image", {
    opacity: 1,
    translateX: 0,
  })
  .to(".lang__title-txt_2, .lang__title-txt_3", {
    opacity: 1,
    translateX: 0,
    stagger: 0.1,
  })
  .to(".lang__image-wrap_left", { translateX: 0, opacity: 1 }, 0.8)
  .to(
    ".lang__title-content_1, .lang__title-content_2, .lang__title-content_3, .lang__title-content_4",
    {
      translateX: 0,
      opacity: 1,
      stagger: 0.05,
    },
    0.3,
  );

langLeaveTl
  .to(".lang__image-wrap_left, .lang__title-txt_2, .lang__title-txt_3", {
    translateX: "100vw",
    opacity: 0,
    stagger: -0.1,
  })
  .to(".lang__title-content_2", {
    translateX: "110vw",
    opacity: 0,
  })
  .to(
    ".lang__title-content_3, .lang__title-content_4",
    {
      translateX: "110vw",
      opacity: 0,
    },
    0.2,
  )
  .to(
    ".lang__title-content_1",
    {
      translateX: "110vw",
      opacity: 0,
    },
    0.4,
  )
  .to(
    ".lang__image-wrap_right .lang__image, .lang__title-txt_1",
    {
      translateX: "100vw",
      opacity: 0,
      onStart: () => {
        moveGlitchText(".lang__title .glitch-text", true);
      },
    },
    0.5,
  )
  .to(".lang__text", { opacity: 0 }, 0.7);
