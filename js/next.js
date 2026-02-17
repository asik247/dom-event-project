// Globaly declare code start here;
const gPinNumber = "1234"
let selectBank = document.getElementById("selectBank");
let browsers = document.getElementById("browsers");
const array = []
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
    // Transaction history code start here;
    const data = {
        name: "Add Money",
        date: new Date().toLocaleTimeString()
    }
    array.push(data)
    // console.log(array);


    // Transaction history code end here;
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
    let availableBalance = getInnerText("availableBalance");
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
    if (wAmount > availableBalance) {
        alert("Insuficient blance")
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

    // Transaction history code start here;
    const data = {
        name: "Cash Out",
        date: new Date().toLocaleTimeString()
    }
    array.push(data)
    // console.log(array);


    // Transaction history code end here;
})
// Cash Out input field code end here;

// btn add toggoling code start here + btnAdd code:-
let btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click", (e) => {
    handleToggling("addAll")
    activeBorder("btnAdd")
})
// btnCas code here now;
let btnCas = document.getElementById("btnCas");
btnCas.addEventListener("click", (e) => {
    handleToggling("casAll")
    activeBorder("btnCas")

})
// btnTransferMoney code here now;
let btnTransferMoney = document.getElementById("btnTransferMoney");
btnTransferMoney.addEventListener("click", () => {
    handleToggling("transferAll")
    activeBorder("btnTransferMoney")
})
// btnGetBonus code start here;
let btnGetBonus = document.getElementById("btnGetBonus");
btnGetBonus.addEventListener("click", () => {
    handleToggling("getBAll")
    activeBorder("btnGetBonus")

})
// btnPayBill code start here;
let btnPayBill = document.getElementById("btnPayBill");
btnPayBill.addEventListener("click", () => {
    handleToggling("payBAll")
    activeBorder("btnPayBill")

})
// btnTransactions code start here
let btnTransactions = document.getElementById("btnTransactions");
btnTransactions.addEventListener("click", () => {
    handleToggling("transAll")
    activeBorder("btnTransactions")

})
// btnTransactions code end here + toggling code end✅✅✅✅;
document.getElementById("btnTransactions").addEventListener("click", () => {
    // console.log("btnTransactions clicked");
    // console.log(array);
    const transactionContainer = document.getElementById("transactionContainer");
    transactionContainer.innerHTML = '';
    for (const history of array) {
        // console.log(history);
        const div = document.createElement("div");
        div.innerHTML = `
         <div class="flex justify-between items-center bg-white p-4 rounded-lg mb-4">
                <div class="flex justify-between items-center gap-4">
                    <div class="bg-[#f4f5f7] rounded-full p-4">
                        <img src="/assest/wallet1.png" alt="" class="mx-auto mb-2">
                    </div>
                    <div>
                        <h2>${history.name}</h2>
                        <p>${history.date}</p>
                    </div>
                </div>

                <div>
                    <i class="fa-solid fa-ellipsis rotate-180"></i>
                </div>
            </div>
        `
        transactionContainer.appendChild(div)
    }
})

// Reusable funk code start here✅✅✅;
function getInputFieldValueNumber(id) {
    return parseInt(document.getElementById(id).value);
}
function getInputFieldValue(id) {
    return document.getElementById(id).value;
}
function getInnerText(id) {
    return parseInt(document.getElementById(id).innerText)
}
function setInnerText(value) {
    document.getElementById("availableBalance").innerText = value;
}
// Reusable funk code end here;
// Btn Togglie Reusable funk code start here;
function handleToggling(id) {
    const forms = document.getElementsByClassName("form2");
    for (const form of forms) {
        form.style.display = "none"
    }
    document.getElementById(id).style.display = "block"
}
// Btn Togglie Reusable funk code end here;

// clicked border active code start here;
function activeBorder(id) {
    const cardBtn = document.getElementsByClassName("cardBtn");
    for (const btn of cardBtn) {
        btn.classList.remove("border-[#16a34a]", "bg-[#16a34a0d]")
        btn.classList.add("border-gray-300")

    }
    document.getElementById(id).classList.remove("border-gray-300");
    document.getElementById(id).classList.add("border-[#16a34a]", "bg-[#16a34a0d]")
}
document.addEventListener("DOMContentLoaded",function(){
    activeBorder("btnAdd")
})
// clicked border active code end here;
// Btn Togglie Reusable funk code end here✅✅✅;



