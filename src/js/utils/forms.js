const onInputFocusInHandler = (e) => {
  e.target.classList.remove("_has-error");
  e.target.removeAttribute("style");
};

const onFormSubmitHandler = (form, e) => {
  e.preventDefault();

  form.querySelectorAll("input, textarea").forEach((input) => {
    if (!input.value.length) {
      input.classList.add("_has-error");

      if (input.tagName === "INPUT") {
        input.style.borderBottom = "0.5px solid #ff7373";
      } else if (input.tagName === "TEXTAREA") {
        input.style.border = "0.5px solid #ff7373";
      }
    }

    input.addEventListener("focusin", onInputFocusInHandler);
  });

  !form.querySelector("input._has-error") && form.submit();
};

const initTextAreaCounter = () => {
  if (document.querySelectorAll(".textarea__counter").length) {
    document.querySelectorAll(".textarea").forEach((textarea) => {
      const field = textarea.querySelector("textarea");
      const current = textarea.querySelector(".textarea__counter-current");

      field.addEventListener("input", function () {
        current.innerHTML = field.value.trim().length;
      });
    });
  }
};
initTextAreaCounter();

const initFormFields = () => {
  if (document.querySelectorAll("form[data-validate]").length) {
    document.querySelectorAll("form[data-validate]").forEach((form) => {
      form.addEventListener("submit", function (e) {
        onFormSubmitHandler(form, e);
      });
    });
  }
};
initFormFields();
