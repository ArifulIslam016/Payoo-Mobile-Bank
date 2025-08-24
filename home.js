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

// CashOut form funtionality
document.getElementById("cashOut-btn").addEventListener("click", function (E) {
  E.preventDefault();
  const agentNo = document.getElementById("agent-no").value;
  const withDrawAmount = parseInt(
    document.getElementById("amount-to-withdraw").value
  );
  const pinNumber = document.getElementById("pin-number").value;
  if (agentNo.length !== 11) {
    alert("Provide a vaid Agent Number");
    return;
  }
  if (pinNumber !== pinNo) {
    alert("Please provide a valid pin Number");
    return;
  }

  const mainBalance = parseInt(
    document.getElementById("main-balance").innerText
  );
  console.log(mainBalance);

  const newBalance = mainBalance - withDrawAmount;
  document.getElementById("main-balance").innerText = newBalance;
});

//  togoling feature
document.getElementById("add-btn").addEventListener("click", function () {
  document.getElementById("CashOut-form-parent").style.display = "none";
  document.getElementById("addMoney-form-parent").style.display = "block";
});

document.getElementById("Cout-btn").addEventListener("click", function () {
  document.getElementById("addMoney-form-parent").style.display = "none";
  document.getElementById("CashOut-form-parent").style.display = "block";
});
