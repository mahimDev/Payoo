document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amountOfValue = document.getElementById("amount-of-value").value;
    const pinOfValue = document.getElementById("pin-of-value").value;
    console.log([amountOfValue, pinOfValue]);
  });
