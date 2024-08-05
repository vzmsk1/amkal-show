import { charTr, defaults } from "../../anim/transitions";
import gsap from "gsap";
import { animateGlitchText, moveGlitchText } from "../../utils/splitGlitchText";

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
      animateGlitchText(".victory__title .ran_1 .letter", 500);

      setTimeout(() => {
        gsap.set(".victory__title .ran_2", {
          opacity: 1,
        });
        animateGlitchText(".victory__title .ran_2 .letter");
      }, 800);

      setTimeout(() => {
        gsap.set(".victory__title .ran_3", {
          opacity: 1,
        });
        animateGlitchText(".victory__title .ran_3 .letter", 0, true);
      }, 1100);
    } else {
      animateGlitchText(".victory__title .letter", 1000);
    }
  },
  onComplete: () => {
    document.documentElement.classList.remove("_is-animating");
  },
});
export const victoryLeaveTl = gsap.timeline({
  ...defaults,
  ease: "power4.in",
  paused: true,
  onStart: () => {
    document.documentElement.classList.add("_is-animating");
  },
});

victoryLeaveTl
  // .to(
  //   ".victory__title-txt_sm_2, .victory__title-txt_sm_3",
  //   {
  //     opacity: 0,
  //     translateX: "100vw",
  //     stagger: 0.01,
  //     onStart: () => {
  //       document.querySelector(".victory__layer").classList.add("_fw");
  //       moveGlitchText(".victory__title .glitch-text", false, true);
  //     },
  //   },
  //   0,
  // )
  .to(".victory__title-txt_sm", {
    opacity: 0,
    translateX: "100vw",
    stagger: -0.05,
    onStart: () => {
      document.querySelector(".victory__layer").classList.add("_fw");
      moveGlitchText(".victory__title .glitch-text", false, true);

      gsap.to(".victory__text .char", {
        opacity: 0,
        stagger: -0.01,
      });
    },
  })
  // .to(
  //   ".victory__title-txt_sm_1",
  //   {
  //     opacity: 0,
  //     translateX: "100vw",
  //     onStart: () => {
  //       gsap.to(".victory__text .char", {
  //         opacity: 0,
  //         stagger: -0.01,
  //       });
  //     },
  //   },
  //   0.5,
  // )
  .to(
    ".victory__layer",
    {
      "--opacity": 1,
    },
    0.8,
  )
  .to(
    ".victory__layer",
    {
      "--lHeight": "100%",
      "--sHeightFW": 0,
    },
    1,
  )

  .to(
    ".victory__video-wrap, .victory__image-wrap",
    {
      opacity: 0,
    },
    1.4,
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
      onComplete: () => {
        gsap.to(".victory__layer", { "--opacity": 0, duration: 0.3 });
      },
    },
    0.4,
  )
  .to(
    ".victory__video-wrap, .victory__image-wrap",
    {
      opacity: 1,
    },
    0,
  )
  .to(".victory__title-txt_sm", {
    opacity: 1,
    translateX: 0,
    stagger: 0.05,
  });
// .to(".victory__title-txt_sm_1", {
//   opacity: 1,
//   translateX: 0,
// })
// .to(
//   ".victory__title-txt_sm_2, .victory__title-txt_sm_3",
//   {
//     opacity: 1,
//     translateX: 0,
//     stagger: 0.05,
//   },
//   1.3,
// );
