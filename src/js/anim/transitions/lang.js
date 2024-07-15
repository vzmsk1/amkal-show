import { setActiveScreen } from "../../anim/mainpage-scroll";
import { enterFeedScreen } from "../../anim/screen/feed";
import { defaults } from "../../anim/transitions";
import gsap from "gsap";
import { animateGlitchText, moveGlitchText } from "../../utils/splitGlitchText";
import { enterVictoryScreen } from "../screen/victory";

export const langOnComplete = (isNext) => {
  if (isNext) {
    enterFeedScreen();
    setActiveScreen(3, 4);
  } else {
    enterVictoryScreen();
    setActiveScreen(3, 2);
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

    gsap.to(".lang__image-wrap_right .lang__image", {
      opacity: 1,
      translateX: 0,
    });
  },
});
export const langLeaveTl = gsap.timeline({
  ...defaults,
  ease: "power4.in",
  paused: true,
});

langTl
  .to(".lang__title-txt_1", {
    opacity: 1,
    translateX: 0,
  })

  .to(
    ".lang__title-txt_2",
    {
      translateX:
        window.innerWidth <= 1024 && window.innerWidth > 478
          ? 510
          : window.innerWidth <= 478
            ? 209
            : 493,
      opacity: 1,
      onStart: () => {
        gsap.to(".lang__title-txt_3", {
          translateX:
            window.innerWidth <= 1024 && window.innerWidth > 478
              ? 510
              : window.innerWidth <= 478
                ? 208
                : 490,
          opacity: 1,
        });
      },
    },
    0.5,
  )
  .to(".lang__image-wrap_left", { translateX: 0, opacity: 1 }, 1)
  .to(
    ".lang__title-content_1, .lang__title-content_2, .lang__title-content_3, .lang__title-content_4",
    {
      translateX: 0,
      opacity: 1,
      stagger: 0.1,
    },
    0.5,
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
  .to(".lang__text", { opacity: 0 }, 1);
