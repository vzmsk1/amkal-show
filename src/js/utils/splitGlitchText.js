import gsap from "gsap";

export const setGlitchStyling = () => {
  const items = Array.from(document.querySelectorAll(".glitch-text"));

  items.forEach((item) => {
    const letters = item.querySelectorAll(".letter");

    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i];

      gsap.set(letter, { translateX: -50 });

      if (letter.closest(".io")) {
        if (i === 0) {
          letter.querySelectorAll(".glitch").forEach((t, i) => {
            gsap.set(t, {
              translateX: `0.${i + 10}` * 24,
              // translateY: -6 * i,
              // scaleY: 0.5,
              scaleX: 1 - `0.${i}`,
              opacity: 0,
            });
          });
        } else {
          letter.querySelectorAll(".glitch").forEach((t, idx) => {
            gsap.set(t, {
              translateX: idx * 50 * `-0.${i * 5}`,
              // translateY: -6 * idx,
              // scaleY: 0.5,
              scaleX: 0 + `0.${idx}`,
              opacity: 0,
            });
          });
        }
      } else if (letter.closest(".lr")) {
        letter.querySelectorAll(".glitch").forEach((t, idx) => {
          gsap.set(t, {
            translateX: `-${letter.offsetWidth * i - 10}px`,
            // translateY: -6 * idx,
            // scaleY: 0.5,
            scaleX: 1 - `0.${idx}`,
            opacity: 0,
          });
        });
      } else if (letter.closest(".bs")) {
        letter.querySelectorAll(".glitch").forEach((t, idx) => {
          gsap.set(t, {
            translateX: `-${10 * i * idx}%`,
            scaleX: 0 + `0.${idx}`,
            opacity: 0,
          });
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
          string += `<div class="glitch" style='height: ${size / 10}px;'><span style='top: -${i * (size / 10)}px'>${t}</span></div>`;
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
