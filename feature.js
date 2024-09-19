document.getElementById("show-cashOut").addEventListener("click", function () {
  document.getElementById("cashOut-form").classList.remove("hidden");
  document.getElementById("add-money-form").classList.add("hidden");
  //   console.log("cashOut clicked");
});
document.getElementById("show-addmoney").addEventListener("click", function () {
  document.getElementById("cashOut-form").classList.add("hidden");
  document.getElementById("add-money-form").classList.remove("hidden");
  //   console.log("cashOut clicked");
});
