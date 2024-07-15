import { charTr, defaults } from "../../anim/transitions";
import gsap from "gsap";
import { animateGlitchText, moveGlitchText } from "../../utils/splitGlitchText";

export const leaveAboutTl = gsap.timeline({
  ...defaults,
  ease: "power4.out",
  paused: true,
});

export const aboutTl = gsap.timeline({
  ...defaults,
  ease: "power4.in",
  paused: true,
  onStart: () => {
    gsap.set(".about__text", { opacity: 1 });
    gsap.set(".about__text .char", { opacity: 0 });

    gsap.to(".about__text .char", charTr);

    animateGlitchText(".about__title .io .letter");
    animateGlitchText(".about__title .lr-t .letter");

    setTimeout(() => {
      gsap.set(".about__title .lr, .about__title .bs", {
        opacity: 1,
      });

      animateGlitchText(".about__title .lr .letter");
      animateGlitchText(".about__title .bs .letter");
    }, 400);
  },
});

leaveAboutTl
  .to(".about__text", { opacity: 0 })
  .to(".about__image-wrap", { opacity: 0, translateX: 383 }, 0)
  .to(
    ".about__title-txt_sm",
    {
      opacity: 0,
      translateX: "100vw",
      stagger: -0.1,
      onStart: () => {
        moveGlitchText(".about__title .glitch-text");
      },
    },
    0,
  );

aboutTl

  .to(
    ".about__image-wrap",
    {
      translateX: 0,
      opacity: 1,
    },
    0,
  )
  .to(
    ".about__title-txt_sm_1",
    {
      opacity: 1,
      translateX: -384,
    },
    0.8,
  )
  .to(
    ".about__title-txt_sm_2",
    {
      opacity: 1,
      translateX: -22,
    },
    1,
  )
  .to(
    ".about__title-txt_sm_3",
    {
      opacity: 1,
      translateX: -1,
    },
    1.2,
  );
