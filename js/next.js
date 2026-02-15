// console.log("hi iam next page js file");
// addMoneyBtn code start here;
const gPinNumber = "1234"
let addMoneyBtn = document.getElementById("addMoneyBtn");
addMoneyBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    // console.log("Add Money btn connected");
    let selectBank = document.getElementById("selectBank").value;
    let bankAccountNumber = document.getElementById("bankAccountNumber").value;
    let addAmount = parseInt(document.getElementById("addAmount").value)
    let pinNumber = document.getElementById("pinNumber").value.trim();
    console.log(typeof(pinNumber));
    let availableBalance = parseInt(document.getElementById("availableBalance").innerText);

    // bankAccountNumber condiion code start here;
    if(bankAccountNumber.length < 11){
        alert("please provide 11 digit account number");
        return;
    }
    // pin number condition code start here;
    if(pinNumber.length < 4){
        alert("PIN must be 4 digits");
        return;
    }
    if(gPinNumber !==pinNumber){
        alert("Incorrect pin")
        return;
    }
    else{
        alert("Add Amount Successfully")
    }





    const totalNewAvailableBalance = addAmount + availableBalance;
    document.getElementById("availableBalance").innerText = totalNewAvailableBalance;

    // console.log(totalNewAvailableBalance);
    // console.log(typeof(availableBalance));
    // console.log(typeof(addAmount));
    // console.log(selectBank,bankAccountNumber,addAmount,pinNumber);
})