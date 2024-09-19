document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amountOfValue = document.getElementById("amount-of-value").value;
    const pinOfValue = document.getElementById("pin-of-value").value;
    // console.log([amountOfValue, pinOfValue]);
    if (pinOfValue === "1234") {
      const amountOfBalance =
        document.getElementById("amount-of-balance").innerText;
      //   const totalBalance =
      //     parseFloat(amountOfValue) + parseFloat(amountOfBalance);
      const preveusBalance = parseFloat(amountOfValue);
      const addMoney = parseFloat(amountOfBalance);
      const totalBalance = preveusBalance + addMoney;
      document.getElementById("amount-of-balance").innerText = totalBalance;
    } else {
      alert("Invalid pin");
    }
  });
//   cash Out
document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amountOfValue = document.getElementById("amount-of-cashOut").value;
    const pinOfValue = document.getElementById("pin-of-cashOut").value;
    // console.log([amountOfValue, pinOfValue]);
    if (pinOfValue === "1234") {
      const amountOfBalance =
        document.getElementById("amount-of-balance").innerText;
      //   const totalBalance =
      //     parseFloat(amountOfValue) - parseFloat(amountOfBalance);
      const preveusBalance = parseFloat(amountOfValue);
      const addMoney = parseFloat(amountOfBalance);
      const totalBalance = addMoney - preveusBalance;
      document.getElementById("amount-of-balance").innerText = totalBalance;
      if (totalBalance < 0) {
        document.getElementById("amount-of-balance").innerText = 0;
      }
    } else {
      alert("Invalid Pin");
    }
  });
