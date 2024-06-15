const sumTotalPrice = () => {
  if (document.querySelectorAll(".cart .item-cart__price-value").length) {
    const priceValues = [];

    document
      .querySelectorAll(".cart .item-cart__price-value")
      .forEach((value) => {
        const val = +value.innerHTML;

        !isNaN(val) && priceValues.push(+value.innerHTML);
      });

    if (priceValues.length) {
      const totalPrice = priceValues.reduce(
        (partialSum, a) => partialSum + a,
        0,
      );

      document.getElementById("totalPrice").innerHTML = totalPrice;
    }
  }
};
sumTotalPrice();
