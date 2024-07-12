import { setActiveScreen } from "../../anim/mainpage-scroll";
import { enterLangScreen } from "../../anim/screen/lang";
import { defaults } from "../../anim/transitions";
import gsap from "gsap";
import { animateGlitchText, moveGlitchText } from "../../utils/splitGlitchText";
import { enterAboutScreen } from "../screen/about";

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

export const victoryOnComplete = (isNext) => {
  gsap.to(layer, { "--layer": "100%", duration: 1.5, delay: 0.5 });
  gsap.to(layer, {
    "--opacity": 1,
    duration: 0.5,
    onComplete: () => {
      gsap.to(".victory__video-wrap", {
        opacity: 0,
        onComplete: () => {
          if (isNext) {
            setActiveScreen(2, 3);
            enterLangScreen();
          } else {
            gsap.to("header", { opacity: 0, duration: 0.5 });

            setActiveScreen(2, 1);

            enterAboutScreen();
            gsap.to("body", {
              backgroundColor: "#caff34",
              duration: 0.5,
              delay: 1,
            });
          }
        },
      });
    },
  });
};

export const victoryTl = gsap.timeline({
  ...defaults,
  paused: true,
  ease: "power4.out",
});
export const victoryLeaveTl = gsap.timeline({
  ...defaults,
  paused: true,
  ease: "power4.in",
});

victoryLeaveTl
  .to(".victory__title-txt_sm_2, .victory__title-txt_sm_3", {
    opacity: 0,
    translateX: "100vw",
    stagger: 0.01,
    onStart: () => {
      document
        .querySelectorAll(".victory__title .glitch-text")
        .forEach((item) => {
          const letters = item.querySelectorAll(".letter");

          letters.forEach((letter, i) => {
            moveGlitchText(letter, letters, i);
          });
        });
    },
  })
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
  );

victoryTl
  .to(".victory__video-wrap", {
    opacity: 1,
    duration: 1.5,
    onStart: () => {
      gsap.to(".victory__text .char", {
        opacity: 1,
        stagger: 0.1,
      });

      animateGlitchText(".victory__title .letter");
    },
  })
  .to(
    ".victory__title-txt_sm_1",
    {
      opacity: 1,
      translateX:
        window.innerWidth <= 1024 && window.innerWidth > 768
          ? -375
          : window.innerWidth <= 768
            ? -120
            : -607,
    },
    0,
  )
  .to(
    ".victory__title-txt_sm_2",
    {
      opacity: 1,
      translateX:
        window.innerWidth <= 1024 && window.innerWidth > 768
          ? 46
          : window.innerWidth <= 768
            ? 21
            : 12,
    },
    1,
  )
  .to(
    ".victory__title-txt_sm_3",
    {
      opacity: 1,
      translateX:
        window.innerWidth <= 1024 && window.innerWidth > 768
          ? 146
          : window.innerWidth <= 768
            ? 81
            : 120,
    },
    1.5,
  );
