const pinNo = 1234;

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const selectedBank = document.getElementById("selected-bank").value;
    const bankAcNO = document.getElementById("bank-ac-no").value;
    const amount = parseInt(document.getElementById("amount-to-add").value);
    const pin = parseInt(document.getElementById("pin-no").value);
    const mainBalance = parseInt(
      document.getElementById("main-balance").innerText
    );
    // if (selectedBank === " ") {
    //   alert("Please Select a bank");
    //   return;
    // }
    if (bankAcNO.length !== 11) {
      alert("Provide a valid Account No");
      return;
    }
    if (pin !== pinNo) {
      alert("Wrong pin");
      return;
    }
    const totalBalance = amount + mainBalance;
    document.getElementById("main-balance").innerText = totalBalance;

  });
  //  togoling feature
  
