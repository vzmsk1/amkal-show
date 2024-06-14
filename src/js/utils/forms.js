const onInputFocusInHandler = (e) => {
  e.target.classList.remove("_has-error");
};

const onFormSubmitHandler = (form, e) => {
  e.preventDefault();

  form.querySelectorAll("input").forEach((input) => {
    if (!input.value.length) {
      input.classList.add("_has-error");
    }

    input.addEventListener("focusin", onInputFocusInHandler);
  });

  !form.querySelector("input._has-error") && form.submit();
};

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
