import { charTr, defaults } from "../../anim/transitions";
import gsap from "gsap";
import { animateGlitchText, moveGlitchText } from "../../utils/splitGlitchText";

const layer = document.querySelector(".victory__layer");

layer.innerHTML = `
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
  <span></span>
  `;

export const victoryTl = gsap.timeline({
  ...defaults,
  ease: "power4.out",
  paused: true,
  onStart: () => {
    gsap.set(".victory__title .ran_1", {
      opacity: 1,
    });
    gsap.set(".victory__text .char", { opacity: 0 });

    gsap.to(".victory__text .char", { ...charTr, delay: 1 });

    if (document.querySelector(".victory_ru")) {
      animateGlitchText(".victory__title .ran_1 .letter", 1000);

      setTimeout(() => {
        gsap.set(".victory__title .ran_2", {
          opacity: 1,
        });
        animateGlitchText(".victory__title .ran_2 .letter", 1000);
      }, 500);

      setTimeout(() => {
        gsap.set(".victory__title .ran_3", {
          opacity: 1,
        });
        animateGlitchText(".victory__title .ran_3 .letter", 1000);
      }, 1000);
    } else {
      animateGlitchText(".victory__title .letter", 1000);
    }
  },
});
export const victoryLeaveTl = gsap.timeline({
  ...defaults,
  ease: "power4.in",
  paused: true,
});

victoryLeaveTl
  .to(
    ".victory__title-txt_sm_2, .victory__title-txt_sm_3",
    {
      opacity: 0,
      translateX: "100vw",
      stagger: 0.01,
      onStart: () => {
        document.querySelector(".victory__layer").classList.add("_fw");
        moveGlitchText(".victory__title .glitch-text");
      },
    },
    0,
  )
  .to(
    ".victory__title-txt_sm_1",
    {
      opacity: 0,
      translateX: "100vw",
      onStart: () => {
        gsap.to(".victory__text .char", {
          opacity: 0,
          stagger: -0.01,
        });
      },
    },
    0.5,
  )
  .to(
    ".victory__layer",
    {
      "--opacity": 1,
      duration: 0.5,
    },
    1,
  )
  .to(
    ".victory__layer",
    {
      "--lHeight": "100%",
      "--sHeightFW": 0,
    },
    1.3,
  )

  .to(
    ".victory__video-wrap",
    {
      opacity: 0,
      duration: 0.5,
    },
    1.8,
  );

victoryTl
  .to(".victory__layer", {
    "--opacity": 1,
    duration: 0,
  })
  .to(
    ".victory__layer",
    {
      "--lHeight": 0,
      "--sHeight": "20px",
      duration: 1,
      onComplete: () => {
        gsap.to(".victory__layer", { "--opacity": 0, duration: 0.3 });
      },
    },
    0.4,
  )
  .to(
    ".victory__video-wrap",
    {
      opacity: 1,
      duration: 1,
    },
    0,
  )
  .to(
    ".victory__title-txt_sm_1",
    {
      opacity: 1,
      translateX:
        window.innerWidth <= 1024 && window.innerWidth > 768
          ? -375
          : window.innerWidth <= 768
            ? -142
            : -638,
    },
    1,
  )
  .to(
    ".victory__title-txt_sm_2",
    {
      opacity: 1,
      translateX:
        window.innerWidth <= 1024 && window.innerWidth > 768
          ? 46
          : window.innerWidth <= 768
            ? -2
            : -19,
    },
    1,
  )
  .to(
    ".victory__title-txt_sm_3",
    {
      opacity: 1,
      duration: 0.5,
      translateX:
        window.innerWidth <= 1024 && window.innerWidth > 768
          ? 146
          : window.innerWidth <= 768
            ? 63
            : 86,
    },
    1.5,
  );
