
let currentLanguage = "en";
let verified = false;
let balance = 0;

function toggleLanguage() {
    currentLanguage = currentLanguage === "en" ? "bn" : "en";
    document.getElementById("title").innerText = currentLanguage === "en" ? "Bd Casino" : "বিডি ক্যাসিনো";
    document.getElementById("description").innerText = currentLanguage === "en" ? "Phone number login with OTP verification." : "ফোন নম্বরে লগইন ও ওটিপি যাচাই করুন।";
}

function sendOTP() {
    alert("Demo OTP sent to your phone number.");
}

function verifyOTP() {
    verified = true;
    document.getElementById("wallet-section").style.display = "block";
}

function submitDeposit() {
    if (!verified) return alert("Please verify OTP first.");
    const amount = parseInt(document.getElementById("deposit-amount").value);
    if (amount < 400 || amount > 25000) return alert("Deposit must be between 400 and 25000.");
    const method = document.getElementById("payment-method").value;
    const trx = document.getElementById("trxid").value;
    alert(`Deposit submitted. Method: ${method}, TRX: ${trx}`);
    document.getElementById("history-list").innerHTML += `<li>Deposit - ${amount} via ${method} (Pending approval)</li>`;
}

function submitWithdraw() {
    const amount = parseInt(document.getElementById("withdraw-amount").value);
    if (amount < 200 || amount > 25000) return alert("Withdraw must be between 200 and 25000.");
    const trx = document.getElementById("withdraw-trxid").value;
    alert(`Withdraw submitted to ${trx}. Pending approval.`);
    document.getElementById("history-list").innerHTML += `<li>Withdraw - ${amount} to ${trx} (Pending approval)</li>`;
}
