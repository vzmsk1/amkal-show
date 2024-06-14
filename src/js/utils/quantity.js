const initQuantityInput = () => {
  if (document.querySelectorAll(".quantity").length) {
    document.querySelectorAll(".quantity").forEach((quantity) => {
      const input = quantity.querySelector(".quantity__input");
      const qtyMin = Number(input.min);
      const qtyMax = Number(input.max);
      const minusBtn = quantity.querySelector(".quantity__count_minus");
      const addBtn = quantity.querySelector(".quantity__count_add");

      const onInputChangeHandler = () => {
        const qty = Number(input.value);

        if (qty) {
          if (qty <= qtyMin) {
            input.value = qtyMin;
            minusBtn.setAttribute("disabled", "");
          } else {
            minusBtn.removeAttribute("disabled");

            if (qty >= qtyMax) {
              input.value = qtyMax;
              addBtn.setAttribute("disabled", "");
            } else {
              input.value = qty;
              addBtn.removeAttribute("disabled");
            }
          }
        }
      };

      const onQuantityClickHandler = (e) => {
        const { target } = e;

        if (target.closest(".quantity__count")) {
          const countBtn = target.closest(".quantity__count");
          const operator = countBtn.dataset.action;
          let qty = Number(input.value);

          if (operator === "add") {
            qty += 1;
            if (qty >= qtyMin + 1) {
              minusBtn.removeAttribute("disabled");
            }

            if (qty >= qtyMax) {
              addBtn.setAttribute("disabled", "");
            }
          } else {
            qty = qty <= qtyMin ? qtyMin : (qty -= 1);

            if (qty === qtyMin) {
              minusBtn.setAttribute("disabled", "");
            }

            if (qty < qtyMax) {
              addBtn.removeAttribute("disabled");
            }
          }

          input.value = qty;
        }
      };

      input.addEventListener("change", onInputChangeHandler);
      quantity.addEventListener("click", onQuantityClickHandler);
    });
  }
};
initQuantityInput();
