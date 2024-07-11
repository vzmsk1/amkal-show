import gsap from "gsap";

export const animateHeader = () => {
  gsap.to(document.querySelectorAll("[data-header-anim]"), {
    opacity: 1,
    stagger: 0.15,
  });
};
