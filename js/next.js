// console.log("hi iam next page js file");
// addMoneyBtn code start here;
let addMoneyBtn = document.getElementById("addMoneyBtn");
addMoneyBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    // console.log("Add Money btn connected");
    let selectBank = document.getElementById("selectBank").value;
    let bankAccountNumber = document.getElementById("bankAccountNumber").value;
    let addAmount = parseInt(document.getElementById("addAmount").value)
    let pinNumber = document.getElementById("pinNumber").value;
    let availableBalance = parseInt(document.getElementById("availableBalance").innerText);

    // bankAccountNumber condiion code start here;
    if(bankAccountNumber.length < 11){
        alert("please provide 11 digit account number");
        return;
    }else{
        alert("Add Amount Successfully")
        // return;
    }





    const totalNewAvailableBalance = addAmount + availableBalance;
    document.getElementById("availableBalance").innerText = totalNewAvailableBalance;

    // console.log(totalNewAvailableBalance);
    // console.log(typeof(availableBalance));
    // console.log(typeof(addAmount));
    // console.log(selectBank,bankAccountNumber,addAmount,pinNumber);
})