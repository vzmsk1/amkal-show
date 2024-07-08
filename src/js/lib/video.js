import videojs from "video.js";

export const initVideoJS = () => {
  const videos = document.querySelectorAll("[data-videojs]");
  videos.forEach((video) => {
    const isHero = video.closest(".hero");

    const player = videojs(video, {
      autoplay: "muted",
      loop: !isHero,
      playsinline: true,
      normalizeAutoplay: true,
      noUITitleAttributes: true,
      disablePictureInPicture: true,
      controlBar: false,
      controls: false,
      bigPlayButton: false,
      titleBar: false,
      textTrackDisplay: false,
      children: ["mediaLoader"],
      children_: [],
    });

    setTimeout(() => {
      player.ready(() => {
        player.play();
      });
    }, 100);
  });
};

!document.querySelector(".mainpage") && initVideoJS();
