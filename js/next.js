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
    let availableBalance = getInnerText("availableBalance");
    // console.log(availableBalance);
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
    setInnerText(totalNewAvailableBalance);
    // document.getElementById("availableBalance").innerText = totalNewAvailableBalance;
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
    let availableBalance =getInnerText("availableBalance");
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
    setInnerText(totalNewAvailableBalance);

    // document.getElementById("availableBalance").innerText = totalNewAvailableBalance;
})
// Cash Out input field code end here;

// btn add toggoling code start here + btnAdd code:-
let btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click", (e) => {
    let transAll = getDisplayNone("transAll");
    let payBAll = getDisplayNone("payBAll")
    let getBAll = getDisplayNone("getBAll");
    let transferAll = getDisplayNone("transferAll");
    let casAll = getDisplayNone("casAll");
    let addAll = document.getElementById("addAll").style.display = "block"
})
// btnCas code here now;
let btnCas = document.getElementById("btnCas");
btnCas.addEventListener("click", (e) => {
    let addAll = getDisplayNone("addAll");
    let transAll = getDisplayNone("transAll");
    let payBAll = getDisplayNone("payBAll")
    let getBAll = getDisplayNone("getBAll");
    let transferAll = getDisplayNone("transferAll");
    //  console.log(addAll,payBAll,transAll,transferAll,getBAll);
    let casAll = document.getElementById("casAll").style.display = "block"
})
// btnTransferMoney code here now;
let btnTransferMoney = document.getElementById("btnTransferMoney");
btnTransferMoney.addEventListener("click", () => {
    let addAll = getDisplayNone("addAll");
    let casAll = getDisplayNone("casAll");
    let transAll = getDisplayNone("transAll");
    let payBAll = getDisplayNone("payBAll")
    let getBAll = getDisplayNone("getBAll");
    let transferAll = document.getElementById("transferAll").style.display = "block"
})
// btnGetBonus code start here;
let btnGetBonus = document.getElementById("btnGetBonus");
btnGetBonus.addEventListener("click", () => {
    let addAll = getDisplayNone("addAll");
    let casAll = getDisplayNone("casAll");
    let transAll = getDisplayNone("transAll");
    let transferAll = getDisplayNone("transferAll");
    let payBAll = getDisplayNone("payBAll")
    //  console.log(addAll,casAll,transAll,transferAll,payBAll);
    let getBAll = document.getElementById("getBAll").style.display = "block"

})
// btnPayBill code start here;
let btnPayBill = document.getElementById("btnPayBill");
btnPayBill.addEventListener("click", () => {
    // console.log("btnTransferMoney btn clicked");
    let addAll = getDisplayNone("addAll");

    let casAll = getDisplayNone("casAll");

    let transAll = getDisplayNone("transAll");

    let transferAll = getDisplayNone("transferAll");

    let getBAll = getDisplayNone("getBAll");
    // console.log(addAll,casAll,transAll,transferAll);
    let payBAll = document.getElementById("payBAll").style.display = "block"


})
// btnTransactions code start here
let btnTransactions = document.getElementById("btnTransactions");
btnTransactions.addEventListener("click", () => {
    let addAll = getDisplayNone("addAll");

    let payBAll = getDisplayNone("payBAll");

    let casAll = getDisplayNone("casAll");

    let transferAll = getDisplayNone("transferAll");

    let getBAll = getDisplayNone("getBAll");

    // console.log(addAll,payBAll,casAll,transferAll,getBAll);

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
function getInnerText(id) {
    return parseInt(document.getElementById(id).innerText)
}
function setInnerText(value){
    document.getElementById("availableBalance").innerText = value;
}

// Reusable funk code end here;

// Btn Togglie Reusable funk code start here;
function getDisplayNone(id) {
    return document.getElementById(id).style.display = "none";
}
// Btn Togglie Reusable funk code end here;
