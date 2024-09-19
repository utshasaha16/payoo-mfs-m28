// add---money---form----start
document
  .getElementById("add-money-button")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const inputMoney =
      document.getElementById("input-Money").value;

    const moneyNumber = parseFloat(inputMoney);

    const inputPinNumber = document.getElementById("input-pin-number").value;
    console.log(inputMoney, inputPinNumber);

    if (inputPinNumber === "1234") {
      const accountBalance = document.getElementById("account-balance").innerText;
      
      const accountNumber = parseFloat(accountBalance);
      
        const newBalance = accountNumber + moneyNumber;

        document.getElementById('account-balance').innerText = newBalance;

    } 
    else {
      alert("Failed Add Money! Try Again");
    }
  });
