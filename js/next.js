// Globaly declare code start here;
const gPinNumber = "1234"
let selectBank = document.getElementById("selectBank");
let browsers = document.getElementById("browsers");
// Globaly declare code end here;

// addMoneyBtn code start here;
let addMoneyBtn = document.getElementById("addMoneyBtn");
addMoneyBtn.addEventListener("click", (e) => {
    e.preventDefault()

    let bankAccountNumber = getInputFieldValue("bankAccountNumber");
   
    let addAmount = getInputFieldValueNumber("addAmount");
    
    let pinNumber = getInputFieldValue("pinNumber");
 
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
// addMoneyBtn code end here;

// Cash Out input field code start here;
let casOutMoneyBtn = document.getElementById("casOutMoneyBtn");
const gCashOutPin = "4321"
casOutMoneyBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let wAmount = getInputFieldValueNumber("wAmount")
   
    let agentNumber = getInputFieldValue("agentNumber");
   

    let casPinNumber = getInputFieldValue("casPinNumber")
    
    let availableBalance = parseInt(document.getElementById("availableBalance").innerText);

    // Agent number validation code start here;
    if (agentNumber.length < 11) {
        alert("please provide 11 digit agent number");
        return;
    }
    // cash out ammount validiton code start here;
    if (isNaN(wAmount) || wAmount <= 0) {
        alert("Enter a valid amount")
        return;
    }
    // pin number condition code start here;
    if (casPinNumber.length !== 4) {
        alert("PIN must be 4 digits");
        return;
    }
    if (gCashOutPin !== casPinNumber) {
        alert("Incorrect pin")
        return;
    }
    else {
        alert("Withdrawo Amoutn Successfully")
    }
    const totalNewAvailableBalance = availableBalance - wAmount;
    document.getElementById("availableBalance").innerText = totalNewAvailableBalance;
})
// Cash Out input field code end here;

// btn add toggoling code start here + btnAdd code:-
let btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click", (e) => {
    let casAll = document.getElementById("casAll").style.display = "none"
    let transferAll = document.getElementById("transferAll").style.display = "none"
    let getBAll = document.getElementById("getBAll").style.display = "none"
    let payBAll = document.getElementById("payBAll").style.display = "none"
    let transAll = document.getElementById("transAll").style.display = "none"
    let addAll = document.getElementById("addAll").style.display = "block"

})
// btnCas code here now;
let btnCas = document.getElementById("btnCas");
btnCas.addEventListener("click", (e) => {
    let addAll = document.getElementById("addAll").style.display = "none"
    let transferAll = document.getElementById("transferAll").style.display = "none"
    let getBAll = document.getElementById("getBAll").style.display = "none"
    let payBAll = document.getElementById("payBAll").style.display = "none"
    let transAll = document.getElementById("transAll").style.display = "none"
    let casAll = document.getElementById("casAll").style.display = "block"


})
// btnTransferMoney code here now;
let btnTransferMoney = document.getElementById("btnTransferMoney");
btnTransferMoney.addEventListener("click", () => {
    // console.log("btnTransferMoney btn clicked");
    let addAll = document.getElementById("addAll").style.display = "none"
    let getBAll = document.getElementById("getBAll").style.display = "none"
    let payBAll = document.getElementById("payBAll").style.display = "none"
    let casAll = document.getElementById("casAll").style.display = "none"
    let transAll = document.getElementById("transAll").style.display = "none"
    let transferAll = document.getElementById("transferAll").style.display = "block"



})
// btnGetBonus code start here;
let btnGetBonus = document.getElementById("btnGetBonus");
btnGetBonus.addEventListener("click", () => {
    // console.log("btnTransferMoney btn clicked");
    let addAll = document.getElementById("addAll").style.display = "none"
    let payBAll = document.getElementById("payBAll").style.display = "none"
    let casAll = document.getElementById("casAll").style.display = "none"
    let transAll = document.getElementById("transAll").style.display = "none"
    let transferAll = document.getElementById("transferAll").style.display = "none"
    let getBAll = document.getElementById("getBAll").style.display = "block"

})
// btnPayBill code start here;
let btnPayBill = document.getElementById("btnPayBill");
btnPayBill.addEventListener("click", () => {
    // console.log("btnTransferMoney btn clicked");
    let addAll = document.getElementById("addAll").style.display = "none"
    let casAll = document.getElementById("casAll").style.display = "none"
    let transAll = document.getElementById("transAll").style.display = "none"
    let transferAll = document.getElementById("transferAll").style.display = "none"
    let getBAll = document.getElementById("getBAll").style.display = "none"
    let payBAll = document.getElementById("payBAll").style.display = "block"


})
// btnTransactions code start here
let btnTransactions = document.getElementById("btnTransactions");
btnTransactions.addEventListener("click", () => {
    // console.log("btnTransferMoney btn clicked");
    let addAll = document.getElementById("addAll").style.display = "none"
    let payBAll = document.getElementById("payBAll").style.display = "none"
    let casAll = document.getElementById("casAll").style.display = "none"
    let transferAll = document.getElementById("transferAll").style.display = "none"
    let getBAll = document.getElementById("getBAll").style.display = "none"
    let transAll = document.getElementById("transAll").style.display = "block"

})
// btnTransactions code end here + toggling code end;

// Reusable funk code start here;
function getInputFieldValueNumber(id) {
    return parseInt(document.getElementById(id).value);
}
function getInputFieldValue(id) {
    return document.getElementById(id).value;
}
// Reusable funk code end here;
