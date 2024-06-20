import { aboutTl, heroTl, leaveAboutTl } from "@js/anim/transitions";
import gsap from "gsap";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(Observer);

export const screens = Array.from(document.querySelectorAll("[data-screen]"));
const body = document.querySelector("body");
const video = document.querySelector(".hero__video");

export const setActiveScreen = (prev, active) => {
  screens[prev].dataset.screen = "";
  screens[active].dataset.screen = "active";
};

const leaveHeroScreen = () => {
  video.pause();
  heroTl.reverse();
  gsap.to(".hero__text .char", { opacity: 0 });

  setTimeout(() => {
    gsap.to(body, {
      backgroundColor: "#caff34",
      duration: 0.5,
      delay: 0.3,
    });
    gsap.to("header", { opacity: 0, duration: 0.5 });

    setActiveScreen(0, 1);
    enterAboutScreen();
  }, 500);
};

const leaveAboutScreen = () => {
  leaveAboutTl.play(0);
};

const enterAboutScreen = () => {
  leaveAboutTl.revert();
  aboutTl.revert();
  aboutTl.play(0);
  document
    .querySelectorAll(".about__title .glitch-text .letter")
    .forEach((el) => {
      gsap.to(el.querySelectorAll(".glitch"), {
        translateX: 0,
        translateY: 0,
        skewX: "0deg",
        stagger: 0.03,
        delay: 0.5,
        duration: 0.1,
        onStart: () => {
          gsap.fromTo(
            ".about__title .glitch-text",
            { translateX: 250 },
            { translateX: 330 },
          );
        },
      });
    });

  body.classList.add("_light-theme");
  gsap.to("header", { opacity: 1, duration: 0.5 });
};

const enterHeroScreen = () => {
  video.currentTime = 0;
  video.play();
  heroTl.revert();
  heroTl.play();
  gsap.to(".hero__text .char", {
    duration: 0.3,
    delay: 1,
    opacity: 1,
    stagger: 0.01,
    ease: "power1.out",
  });
  gsap.to("header", { opacity: 1, duration: 0.5 });
};

export const initMainpageScroll = () => {
  const observer = Observer.create({
    target: ".mainpage",
    type: "wheel,touch",
    tolerance: 200,
    onUp: (e) => {
      scroll(document.querySelector('[data-screen="active"]'), false);
    },
    onDown: (e) => {
      scroll(document.querySelector('[data-screen="active"]'), true);
    },
  });

  const scroll = (active, isNext) => {
    const activeIdx = screens.indexOf(active);
    // const next = screens[prevIdx + 1] ? screens[prevIdx + 1] : screens[0];
    const previous = screens[activeIdx - 1] ? screens[activeIdx - 1] : null;

    // prev.dataset.screen = "";

    observer.disable();

    if (!previous && isNext) {
      leaveHeroScreen();
    } else {
      switch (activeIdx) {
        case 1:
          leaveAboutScreen();
          enterHeroScreen();
      }
    }

    // if (previous && previous === 0) {
    //   leaveHeroScreen();
    // } else if (previous && previous === 1) {
    //   enterHeroScreen();
    //   leaveAboutScreen();
    // } else {
    //   // gsap.set(body, { clearProps: "backgroundColor" });
    // }

    setTimeout(() => {
      // gsap.to("header", { opacity: 1, duration: 0.5 });

      if (isNext) {
        // next.dataset.screen = "active";
      } else {
        // previous.dataset.screen = "active";
        // if (prevIdx === 1)
        //   gsap.to(body, { backgroundColor: "#000000", duration: 0.5 });
      }

      observer.enable();
    }, 1000);
  };
};
