import gsap from "gsap";

const addError = (input) => {
  input.closest(".field") &&
    input.closest(".field").classList.add("_has-error");
};

const removeError = (input) => {
  gsap.to(input.closest(".field"), { opacity: 1, duration: 0.3 });
  input.closest(".field") &&
    input.closest(".field").classList.remove("_has-error");
};

const onInputFocusInHandler = ({ target }) => {
  removeError(target);
};

const onInputFocusOutHandler = ({ target }) => {
  if (!target.value.length || target.closest("._has-error")) {
    gsap.to(target.closest(".field"), { opacity: 0.4, duration: 0.3 });
  }
};

const onFormSubmitHandler = (form, e) => {
  e.preventDefault();

  form.querySelectorAll("input, textarea").forEach((input) => {
    if (!input.value.length) {
      addError(input);
    }
  });

  !form.querySelector("._has-error") && form.submit();
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

      form.querySelectorAll("input, textarea").forEach((input) => {
        input.addEventListener("focusin", onInputFocusInHandler);
        input.addEventListener("focusout", onInputFocusOutHandler);
      });
    });
  }
};
initFormFields();
