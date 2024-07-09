const toggleClass = () => {
  if (document.querySelectorAll("[data-toggle-class]").length) {
    document.querySelectorAll("[data-toggle-class]").forEach((element) => {
      element.querySelectorAll("*").forEach((el) => {
        el.addEventListener("click", function () {
          removeClasses(
            element.getElementsByTagName("*"),
            element.dataset.toggleClass,
          );
          el.classList.add(element.dataset.toggleClass);
        });
      });
    });
  }
};
toggleClass();
