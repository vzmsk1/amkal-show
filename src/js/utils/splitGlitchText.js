import gsap from "gsap";

export const moveGlitchText = (letter, letters, i) => {
  gsap.to(letter.querySelectorAll(".glitch"), {
    translateX: `${letters.length * letter.offsetWidth * (i + 1)}px`,
    scaleX: 0,
    stagger: 0.05,
    translateY: `-${10 * (i + 1)}px`,
    opacity: 0,
  });
};

export const animateGlitchText = (selector, options) => {
  for (let i = 0; i < document.querySelectorAll(selector).length; i++) {
    const el = document.querySelectorAll(selector)[i];

    for (let j = 0; j < el.querySelectorAll(".glitch").length; j++) {
      const glitch = el.querySelectorAll(".glitch")[j];

      gsap.to(glitch, {
        stagger: 0.1,
        translateX: 0,
        scaleX: 1,
        ease: "power4.out",
        delay: 0.05,
        duration: 1,
        ...options,
      });

      gsap.to(glitch.querySelector("span"), {
        stagger: 0.1,
        top: +el.querySelectorAll("span")[j].dataset.top,
        ease: "power4.out",
        delay: 0.05,
        duration: 1,
      });
    }
  }
};

const setLetterStyling = (t, translateX, scaleX, moveSpan = true) => {
  gsap.set(t, {
    translateX,
    scaleX,
  });
  if (moveSpan) {
    gsap.set(t.querySelector("span"), {
      top: +t.querySelector("span").dataset.top + 30,
    });
  }
};

export const setGlitchStyling = () => {
  const items = Array.from(document.querySelectorAll(".glitch-text"));

  items.forEach((item) => {
    const letters = item.querySelectorAll(".letter");

    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i];

      if (letter.closest(".io")) {
        if (i === 0) {
          letter.querySelectorAll(".glitch").forEach((t, i) => {
            setLetterStyling(t, i * 15, 1.5 - (i * 2) / 10);
          });
        } else {
          letter.querySelectorAll(".glitch").forEach((t, idx) => {
            setLetterStyling(t, -idx * 200 * (i / 10), 1.5 - (i * 2) / 10);
          });
        }
      } else if (letter.closest(".lr")) {
        letter.querySelectorAll(".glitch").forEach((t, idx) => {
          setLetterStyling(t, `-${letter.offsetWidth * i - 10}px`, 0);
        });
      } else if (letter.closest(".bs")) {
        letter.querySelectorAll(".glitch").forEach((t, idx) => {
          setLetterStyling(t, `-${10 * i * idx}%`, 0, false);
        });
      } else if (letter.closest(".bt")) {
        letter.querySelectorAll(".glitch").forEach((t, idx) => {
          setLetterStyling(t, `-${10 * i * idx}%`, 0);
        });
      }

      letter.style.transform = `translateX(-${i * 16}px)`;
    }
  });
};

export const splitGlitchText = () => {
  if (document.querySelectorAll(".glitch-text").length) {
    const split = (t, item) => {
      const size = item.dataset.glitchSize ? +item.dataset.glitchSize : 170;

      let repeat = (t) => {
        let string = `<div class="letter">`;
        for (let i = 1; i <= 10; i++) {
          string += `<div class="glitch" style='height: ${size / 10}px;'><span data-top='-${i * (size / 10)}' style='top: -${i * (size / 10)}px'>${t}</span></div>`;
        }
        string += `</div>`;
        return string;
      };
      return t
        .split("")
        .map((t) => repeat(t))
        .join("");
    };

    document.querySelectorAll(".glitch-text").forEach((item) => {
      const text = item.querySelector(".glitch-text-content");

      text.innerHTML = split(text.innerHTML, item);
    });

    setGlitchStyling();
  }
};
