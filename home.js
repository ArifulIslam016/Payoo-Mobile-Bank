// Global sections
const pinNo = 1234;
bonusCuponCon = 2025;
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

// shared function to togggole
function featureToggle(id) {
  const forms = document.getElementsByClassName("form");
  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

function styleToggle(id) {
  const buttons = document.getElementsByClassName("container-btn");
  console.log(buttons);
  for (const button of buttons) {
    button.classList.remove(
      "bg-[#229BFF]",
      "bg-[#A9D5F9]",
      "border-2",
      "border-[#229BFF]"
    );
    button.classList.add("bg-white");
  }
  const newbutton = document.getElementById(id);
  newbutton.classList.remove("bg-white");
  newbutton.classList.add("bg-[#A9D5F9]", "border-2", "border-[#229BFF]");
}
// main functionality starts from here************************************************
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
  setInnerTextInMainBalance(newBalance);
});

//transfer money functionality
document
  .getElementById("transfer-btn")
  .addEventListener("click", function (Tr) {
    Tr.preventDefault();

    const userACNO = getValue("user-ac-no");
    const transferAmount = getNumberValue("amount-to-transfer");
    const pinforTransfer = getNumberValue("pin-number-transfer");
    if (userACNO.length !== 11) {
      alert("User not find");
      return;
    }
    if (pinforTransfer !== pinNo) {
      alert("Please provide a valid pin");
    }
    const tranferBeforBalance = getInnerTextASNumber("main-balance");
    const netBalance = tranferBeforBalance - transferAmount;
    setInnerTextInMainBalance(netBalance);
  });

// Get bonus Functionality
// *****************Not Need
document
  .getElementById("get-bonus-btn")
  .addEventListener("click", function (bonus) {
    bonus.preventDefault();
    const bonusCupon = getNumberValue("bonus-cupon");
    if (bonusCupon !== bonusCuponCon) {
      alert("Your are not eligible for this offer");
      return;
    }
    const wihoutBonusBalance = getInnerTextASNumber("main-balance");
    console.log(wihoutBonusBalance);
    const withBonusBalance = wihoutBonusBalance + 726;
    console.log(withBonusBalance);
    setInnerTextInMainBalance(withBonusBalance);
    this.setAttribute("disabled", true);
  });
// **************************************

//  toggoling feature******************
// addmoney toggoling
document.getElementById("add-btn").addEventListener("click", function () {
  // document.getElementById("CashOut-form-parent").style.display = "none";
  // document.getElementById("addMoney-form-parent").style.display = "block";
  // // document.getElementById("transfer-form-parent").style.display = "none";
  // const forms = document.getElementsByClassName("form");
  // for (const form of forms) {
  //   form.style.display = "none";
  //   document.getElementById("addMoney-form-parent").style.display = "block";
  // }
  featureToggle("addMoney-form-parent");
  styleToggle("add-btn");
});

// cashout toggling
document.getElementById("Cout-btn").addEventListener("click", function () {
  featureToggle("CashOut-form-parent");
  styleToggle("Cout-btn");
});
//  transfer toggoling
document
  .getElementById("transfer-p-btn")
  .addEventListener("click", function () {
    featureToggle("transfer-form-parent");
    styleToggle("transfer-p-btn");
  });

document.getElementById("bonus-p-btn").addEventListener("click", function () {
  featureToggle("bonus-form-parent");
  styleToggle("bonus-p-btn");
});

// pay bill toggiling
document.getElementById("bill-btn").addEventListener("click", function () {
  featureToggle("Pay-bill-parrent");
  styleToggle("bill-btn");
});
