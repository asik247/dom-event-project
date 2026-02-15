const gPinNumber = "1234"
let selectBank = document.getElementById("selectBank");
let browsers = document.getElementById("browsers");
// addMoneyBtn code start here;
let addMoneyBtn = document.getElementById("addMoneyBtn");
addMoneyBtn.addEventListener("click", (e) => {
    e.preventDefault()
    let bankAccountNumber = document.getElementById("bankAccountNumber").value;
    let addAmount = parseInt(document.getElementById("addAmount").value)
    let pinNumber = document.getElementById("pinNumber").value.trim();
    console.log(typeof (pinNumber));
    let availableBalance = parseInt(document.getElementById("availableBalance").innerText);

    // ---- Bank Validation ----
    let selectedBank = selectBank.value.trim();
    const options = Array.from(browsers.options).map(option => option.value.toLowerCase());
    if (!options.includes(selectedBank.toLowerCase())) {
        alert("Please select a valid bank from the list!");
        selectBank.value = "";
        return;
    }
    // bankAccountNumber condiion code start here;
    if (bankAccountNumber.length < 11) {
        alert("please provide 11 digit account number");
        return;
    }
    // Add amount condition code start here;
    if (isNaN(addAmount) || addAmount <= 0) {
        alert("Enter a valid amount")
        return;
    }
    // pin number condition code start here;
    if (pinNumber.length !== 4) {
        alert("PIN must be 4 digits");
        return;
    }
    if (gPinNumber !== pinNumber) {
        alert("Incorrect pin")
        return;
    }
    else {
        alert("Add Amount Successfully")
    }
    const totalNewAvailableBalance = addAmount + availableBalance;
    document.getElementById("availableBalance").innerText = totalNewAvailableBalance;
})

// btn add toggoling code start here;
let btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click", (e) => {
    let casAll = document.getElementById("casAll").style.display = "none"
    let addAll = document.getElementById("addAll").style.display = "block"
})
// btnCas code here now;
let btnCas = document.getElementById("btnCas");
btnCas.addEventListener("click", (e) => {
     let casAll = document.getElementById("casAll").style.display = "block"
    let addAll = document.getElementById("addAll").style.display = "none"
})

// Select A Bank code star here;
