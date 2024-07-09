import { initMainpageScroll } from "../anim/mainpage-scroll";
import { setDefaults } from "../anim/transitions";
import { animateHeader } from "../anim/transitions/header";
import { animateHero } from "../anim/transitions/hero";

const splitGlitchText = () => {
  if (document.querySelectorAll(".glitch-text").length) {
    const items = document.querySelectorAll(".glitch-text");

    const split = (t, item) => {
      let repeat = (t) => {
        let string = `<div class="letter">`;
        for (let i = 1; i <= 10; i++) {
          const size = item.dataset.glitchSize ? +item.dataset.glitchSize : 170;

          string += `<div class="glitch"><span style="top: -${i * (size / 10)}px;">${t}</span></div>`;
        }
        string += `</div>`;
        return string;
      };
      return t
        .split("")
        .map((t) => repeat(t))
        .join("");
    };

    items.forEach((item) => {
      const text = item.querySelector(".glitch-text-content");

      text.innerHTML = split(text.innerHTML, item);

      const letters = item.querySelectorAll(".letter");

      for (let i = 1; i < letters.length; i++) {
        const letter = letters[i];

        if (item.closest(".victory")) {
          letter.style.transform = `translateX(-${i * 31}px)`;
        } else if (item.closest(".lang")) {
          letter.style.transform = `translateX(-${i * 22}px)`;
        } else {
          letter.style.transform = `translateX(-${i * 13}px)`;
        }
      }
    });
  }
};

const initLoader = () => {
  initMainpageScroll();
  splitGlitchText();

  setDefaults();
  animateHeader();
  animateHero();

  setTimeout(() => {
    document.querySelector(".loader").remove();
  }, 1000);
};
initLoader();
