document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("login btn chal lagse ?");
    const mobileNumber = document.getElementById("mobile-number").value;
    const pinNumber = document.getElementById("pin-number").value;
    console.log(mobileNumber, pinNumber);
    if (mobileNumber === "5" && pinNumber === "1234") {
      window.location.href = "./home.html";
      console.log("login done");
    } else {
      alert("your email and password is worng");
    }
  });
