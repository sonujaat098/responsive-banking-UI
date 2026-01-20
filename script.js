let balance = 1000;

function updateBalance() {
  document.getElementById("balance").textContent = `Balance: $${balance}`;
}

function showError(show) {
  document.getElementById("errorMsg").style.display = show ? "block" : "none";
}

function deposit() {
  const amount = Number(document.getElementById("amount").value);

  if (amount <= 0 || isNaN(amount)) {
    showError(true);
    return;
  }

  balance += amount;
  updateBalance();
  showError(false);
  document.getElementById("amount").value = "";
}

function withdraw() {
  const amount = Number(document.getElementById("amount").value);

  if (amount <= 0 || isNaN(amount) || amount > balance) {
    showError(true);
    return;
  }

  balance -= amount;
  updateBalance();
  showError(false);
  document.getElementById("amount").value = "";
}
