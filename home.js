document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const selectedBank = document.getElementById("selected-bank").value;
    const bankAcNO = document.getElementById("bank-ac-no").value;
    const amount = parseInt(document.getElementById("amount-to-add").value);
    const pin = document.getElementById("pin-no").value;
    const mainBalance = parseInt(
      document.getElementById("main-balance").innerText
    );
    const totalBalance = amount + mainBalance;
    document.getElementById("main-balance").innerText = totalBalance;
  });
