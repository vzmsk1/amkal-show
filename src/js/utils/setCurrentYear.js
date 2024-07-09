const setCurrentYear = () => {
  if (document.querySelectorAll(".current-year").length) {
    document.querySelectorAll(".current-year").forEach((el) => {
      el.innerHTML = new Date().getFullYear();
    });
  }
};
setCurrentYear();
