import gsap from "gsap";

const toVars = {
  stagger: 0.05,
  translateX: 0,
  scaleX: 1,
  ease: "power4.out",
  delay: 0.05,
  duration: 0.5,
  opacity: 1,
};

export const moveGlitchText = (selector, isReversed = false) => {
  document.querySelectorAll(selector).forEach((item) => {
    const letters = item.querySelectorAll(".letter");

    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i];

      const cur = letters.length - (i + 1);

      // gsap.to(letter, {
      //   skewX: "-10deg",
      //   duration: 0.5,
      // });

      gsap.to(letter.querySelectorAll(".glitch"), {
        translateX: cur * letter.offsetWidth,
        scaleX: 0,
        stagger: isReversed ? -0.05 : 0.05,
      });
      gsap.to(letter, {
        duration: 0.5,
        stagger: 0.05,
        // skewX: "-10deg",
        onStart: () => {
          gsap.to(letter.querySelectorAll("span"), {
            left: "100%",
            delay: 0.3,
          });
        },
        onComplete: () => {
          gsap.set(letter, { skewX: "0deg" });
        },
      });

      letter.querySelectorAll("span").forEach((span, i) => {
        gsap.to(letter.querySelectorAll("span"), {
          stagger: isReversed ? -0.2 : 0.2,
          top: +span.dataset.top - 200,
          duration: 0.3,
          onComplete: () => {
            gsap.set(letter.querySelectorAll("span"), {
              top: +span.dataset.top,
              left: 0,
            });
          },
        });
      });
    }
  });
};

export const animateGlitchText = (selector, delay = 0) => {
  if (document.querySelectorAll(selector).length) {
    gsap.set(selector, { opacity: 0 });
    setTimeout(() => {
      gsap.set(selector, { opacity: 1 });

      for (let i = 0; i < document.querySelectorAll(selector).length; i++) {
        const letter = document.querySelectorAll(selector)[i];

        // if (letter.closest(".io")) {
        //   gsap.fromTo(
        //     letter,
        //     {
        //       translateX: i <= 2 ? 16 * (i + 1) : -16 * (i + 1),
        //     },
        //     {
        //       translateX: -i * 16,
        //       duration: 0.5,
        //     },
        //   );
        // }
        // else {
        //   if (i !== 0) {
        //     gsap.fromTo(
        //       letter,
        //       {
        //         translateX: (-letter.offsetWidth * i) / 2,
        //       },
        //       {
        //         translateX: -i * 16,
        //         duration: 0.5,
        //       },
        //     );
        //   }
        // }

        for (let j = 0; j < letter.querySelectorAll(".glitch").length; j++) {
          const glitch = letter.querySelectorAll(".glitch")[j];

          gsap.set(glitch, { overflow: "hidden" });
          gsap.set(glitch.querySelector("span"), {
            left: 0,
            top: +letter.querySelectorAll("span")[j].dataset.top,
          });

          if (letter.closest(".io")) {
            if (i === 0) {
              gsap.fromTo(
                glitch,
                {
                  translateX: j * 15,
                  scaleX: 1.5 - (j * 2) / 10,
                  // opacity: 1 - (j + 1) / 10,
                },
                toVars,
              );
            } else {
              gsap.fromTo(
                glitch,
                { translateX: -j * 200 * (i / 10), scaleX: 1.5 - (i * 2) / 10 },
                toVars,
              );
            }
          } else if (letter.closest(".bs")) {
            gsap.fromTo(
              glitch,
              {
                translateX:
                  i === 0 ? `-${10 * (j + 1)}%` : `-${10 * (i + 1) * (j + 1)}%`,
                scaleX: 0.5,
              },
              toVars,
            );
          } else if (letter.closest(".bt")) {
            const cur = letter.querySelectorAll(".glitch").length - (j + 2);

            gsap.fromTo(
              glitch,
              {
                translateX: `-${j * 30}%`,
                scaleX: 1.2 - cur / 10,
              },
              toVars,
            );
          } else if (letter.closest(".lr")) {
            gsap.fromTo(
              letter.querySelectorAll(".glitch"),
              { translateX: `-${letter.offsetWidth * i - 10}px`, scaleX: 0 },
              toVars,
            );
          } else if (letter.closest(".lr-t")) {
            gsap.fromTo(
              letter.querySelectorAll(".glitch"),
              {
                translateX: `-${letter.offsetWidth * i - 10}px`,
                scaleX: 0,
                // opacity: 0,
              },
              {
                stagger: -0.05,
                translateX: 0,
                scaleX: 1,
                duration: 0.5,
                opacity: 1,
              },
            );
          } else if (letter.closest(".ran")) {
            gsap.fromTo(
              letter.querySelectorAll(".glitch"),
              {
                translateX: -i * letter.offsetWidth,
                scaleX: 0,
              },
              toVars,
            );
          }

          gsap.to(glitch.querySelector("span"), {
            stagger: 0.05,
            top: +letter.querySelectorAll("span")[j].dataset.top,
            ease: "power4.out",
          });
        }
      }
    }, delay);
  }
};

export const splitGlitchText = () => {
  if (document.querySelectorAll(".glitch-text").length) {
    const split = (t, item, size) => {
      let repeat = (t) => {
        let string = `<div class="letter">`;
        for (let i = 1; i <= 8; i++) {
          string += `<div class="glitch" style='height: ${size / 8}px;'><span data-top='-${i * (size / 8)}' data-style='top: -${i * (size / 8)}px' style='top: -${i * (size / 8)}px'>${t}</span></div>`;
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
      const data = item.dataset.glitchSize.split(",");

      if (data.length > 1) {
        window.innerWidth <= 1024 && window.innerWidth > 768
          ? data[1] && (text.innerHTML = split(text.innerHTML, item, +data[1]))
          : window.innerWidth <= 768
            ? data[2] &&
              (text.innerHTML = split(text.innerHTML, item, +data[2]))
            : (text.innerHTML = split(text.innerHTML, item, 0 + data[0]));
      } else {
        text.innerHTML = split(text.innerHTML, item, +data[0]);
      }
    });
  }
};
