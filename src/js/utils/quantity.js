function initQuantity() {
  if (document.querySelectorAll(".quantity").length) {
    document.querySelectorAll(".quantity").forEach((el) => {
      const input = el.querySelector(".quantity__input");
      const minusBtn = el.querySelector(".quantity__count_minus");
      const addBtn = el.querySelector(".quantity__count_add");
      const qtyMin = parseInt(input.min);
      const qtyMax = parseInt(input.max);

      input.addEventListener("change", function () {
        const qty = parseInt(input.value);

        if (isNaN(qty) || qty <= qtyMin) {
          input.value = qtyMin;
          minusBtn.removeAttribute("disabled");
          addBtn.removeAttribute("disabled");
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
      });

      el.addEventListener("click", function (e) {
        if (e.target.closest(".quantity__count")) {
          const target = e.target.closest(".quantity__count");
          const operator = target.dataset.action;
          let qty = parseInt(input.value);

          if (operator === "add") {
            qty += 1;

            if (qty >= qtyMin + 1) {
              addBtn.removeAttribute("disabled");
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
              minusBtn.removeAttribute("disabled");
            }
          }

          input.value = qty;
        }
      });
    });
  }
}
initQuantity();
