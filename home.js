// Global sections
const pinNo = 1234;
// function to get integer value by id
function getNumberValue(id) {
  const numberValue = parseInt(document.getElementById(id).value);
  return numberValue;
}
// function to get value from input by id
function getValue(id) {
  const numberValue = document.getElementById(id).value;
  return numberValue;
}

// function to get inner text as a integer
function getInnerTextASNumber(id) {
  const innerTextValue = parseInt(document.getElementById(id).innerText);
  return innerTextValue;
}
//  function to set inner text by valu in js
function setInnerTextInMainBalance(value) {
  document.getElementById("main-balance").innerText = value;
}

// main functionality starts from here
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const selectedBank = getValue("selected-bank");
    const bankAcNO = getValue("bank-ac-no");
    const amount = getNumberValue("amount-to-add");
    const pin = getNumberValue("pin-no");
    const mainBalance = getInnerTextASNumber("main-balance");
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
    setInnerTextInMainBalance(totalBalance);
  });

// CashOut form funtionality
document.getElementById("cashOut-btn").addEventListener("click", function (E) {
  E.preventDefault();
  const agentNo = getValue("agent-no");
  const withDrawAmount = getNumberValue("amount-to-withdraw");
  const pinNumber = getNumberValue("pin-number");

  if (agentNo.length !== 11) {
    alert("Provide a vaid Agent Number");
    return;
  }
  if (pinNumber !== pinNo) {
    alert("Please provide a valid pin Number");
    return;
  }

  const mainBalance = getInnerTextASNumber("main-balance");
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
