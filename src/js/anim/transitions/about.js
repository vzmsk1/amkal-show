import { charTr, defaults } from "../../anim/transitions";
import gsap from "gsap";
import { animateGlitchText, moveGlitchText } from "../../utils/splitGlitchText";

export const leaveAboutTl = gsap.timeline({
  ...defaults,
  ease: "power4.out",
  paused: true,
  onStart: () => {
    document.documentElement.classList.add("_is-animating");
  },
});

export const aboutTl = gsap.timeline({
  ...defaults,
  ease: "power4.in",
  paused: true,
  onStart: () => {
    if (!document.querySelector(".victory__layer span")) {
      document.querySelector(".victory__layer").innerHTML = `
       <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>`;
    }

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
    }, 300);
  },
  onComplete: () => {
    document.documentElement.classList.remove("_is-animating");
  },
});

leaveAboutTl
  .to(".about__text", { opacity: 0 })
  .to(".about__image-wrap", { opacity: 0, translateX: 383 }, 0)
  .to(
    ".about__title-txt.sm-title",
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
    ".about__title-txt",
    {
      opacity: 1,
      stagger: 0.05,
      translateX: 0,
    },
    0.5,
  );
