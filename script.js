document.getElementById("loginBtn").addEventListener("click", function (eo) {
  eo.preventDefault();
  const userPhone = 1610854092;
  const userPin = 1234;
  const phoneNo = document.getElementById("phone-no").value;
  const convertedPhoneNo = parseInt(phoneNo);
  const pinNo = document.getElementById("pin-no").value;
  const convertedPinNo = parseInt(pinNo);
  console.log(convertedPhoneNo, convertedPinNo);
  if (userPhone === convertedPhoneNo && userPin === convertedPinNo) {
    window.location.href = "./home.html";
  } else {
    alert("Invalid Credintial");
  }
});
