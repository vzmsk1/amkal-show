import gsap from "gsap";

export const moveGlitchText = (selector, isReversed = false) => {
  document.querySelectorAll(selector).forEach((item) => {
    const letters = item.querySelectorAll(".letter");

    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i];
      const cur = letters.length - (i + 1);

      gsap.to(letter.querySelectorAll(".glitch"), {
        translateX: cur * letter.offsetWidth,
        scaleX: 0,
        stagger: isReversed ? -0.05 : 0.05,
        duration: cur / 10 + 0.05,
      });

      letter.querySelectorAll("span").forEach((span, i) => {
        gsap.to(span, {
          left: "100%",
          delay: 0.3,
          onComplete: () => {
            gsap.set(letter, { skewX: "0deg" });
          },
        });

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

export const animateGlitchText = (selector, delay = 0, setTrigger = false) => {
  if (document.querySelectorAll(selector).length) {
    gsap.set(selector, { opacity: 0 });
    setTimeout(() => {
      gsap.set(selector, { opacity: 1 });

      for (let i = 0; i < document.querySelectorAll(selector).length; i++) {
        const letter = document.querySelectorAll(selector)[i];

        for (let j = 0; j < letter.querySelectorAll(".glitch").length; j++) {
          const glitch = letter.querySelectorAll(".glitch")[j];
          const cur = letter.querySelectorAll(".glitch").length - (j + 2);

          gsap.set(glitch, {
            opacity: 1,
          });

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
                  "clip-path": "inset(0% 100% 0% 0%)",
                },
                {
                  stagger: 0.05,
                  translateX: 0,
                  scaleX: 1,
                  ease: "power4.out",
                  delay: 0.05,
                  duration: (j + 1) / 10 + 0.05,
                  "clip-path": "inset(-10%)",
                },
              );
            } else {
              gsap.fromTo(
                glitch,
                {
                  translateX: -j * 200 * (i / 10),
                  scaleX: 1.5 - (i * 2) / 10,
                  "clip-path": "inset(0% 100% 0% 0%)",
                },
                {
                  stagger: 0.1,
                  translateX: 0,
                  scaleX: 1,
                  ease: "power4.out",
                  delay: 0.05,
                  duration: (j + 1) / 10 + 0.1,
                  "clip-path": "inset(-10%)",
                },
              );
            }
          } else if (letter.closest(".bs")) {
            gsap.fromTo(
              glitch,
              {
                translateX:
                  i === 0 ? `-${10 * (j + 1)}%` : `-${10 * (i + 1) * (j + 1)}%`,
                scaleX: 0.5,
                "clip-path": "inset(0% 100% 0% 0%)",
              },
              {
                stagger: -0.05,
                translateX: 0,
                scaleX: 1,
                ease: "power4.out",
                delay: 0.05,
                duration: (j + 1) / 10 + 0.05,
                "clip-path": "inset(-10%)",
              },
            );
          } else if (letter.closest(".bt")) {
            gsap.fromTo(
              glitch,
              {
                translateX: j < 5 ? `-${cur * 30}%` : `-${j * 30}%`,
                scaleX: 1.2 - cur / 10,
                "clip-path": "inset(0% 100% 0% 0%)",
              },
              {
                stagger: -0.1,
                translateX: 0,
                scaleX: 1,
                ease: "power4.out",
                delay: 0.05,
                duration: cur / 10 + 0.5,
                "clip-path": "inset(-10%)",
              },
            );
          } else if (letter.closest(".lr")) {
            gsap.fromTo(
              glitch,
              {
                translateX: `-${letter.offsetWidth * i - 10}px`,
                scaleX: 0,
                "clip-path": "inset(0% 100% 0% 0%)",
              },
              {
                stagger: 0.05,
                translateX: 0,
                scaleX: 1,
                ease: "power4.out",
                delay: 0.05,
                duration: (j + 1) / 10 + 0.05,
                "clip-path": "inset(-10%)",
              },
            );
          } else if (letter.closest(".lr-t")) {
            gsap.fromTo(
              glitch,
              {
                translateX: `-${letter.offsetWidth * i - 10}px`,
                scaleX: 0,
                "clip-path": "inset(0% 100% 0% 0%)",
              },
              {
                stagger: -0.05,
                translateX: 0,
                scaleX: 1,
                ease: "power4.out",
                delay: 0.05,
                duration: (j + 1) / 10 + 0.05,
                "clip-path": "inset(-10%)",
              },
            );
          } else if (letter.closest(".ran")) {
            gsap.fromTo(
              glitch,
              {
                translateX: -i * letter.offsetWidth,
                scaleX: 0,
                "clip-path": "inset(0% 100% 0% 0%)",
              },
              {
                stagger: 0.05,
                translateX: 0,
                scaleX: 1,
                ease: "power4.out",
                delay: 0.05,
                duration: (j + 1) / 10 + 0.05,
                "clip-path": "inset(-10%)",
              },
            );
          }

          gsap.to(glitch.querySelector("span"), {
            stagger: 0.05,
            top: +letter.querySelectorAll("span")[j].dataset.top,
            ease: "power4.out",
            onComplete: () => {
              setTrigger &&
                document.documentElement.classList.remove("_is-animating");
            },
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
        window.innerWidth <= 1024 && window.innerWidth > 769
          ? data[1] && (text.innerHTML = split(text.innerHTML, item, +data[1]))
          : window.innerWidth <= 769
            ? data[2] &&
              (text.innerHTML = split(text.innerHTML, item, +data[2]))
            : (text.innerHTML = split(text.innerHTML, item, 0 + data[0]));
      } else {
        text.innerHTML = split(text.innerHTML, item, +data[0]);
      }
    });
  }
};
