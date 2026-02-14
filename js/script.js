// Login button functionality code start here;
let SecondaryBtn = document.getElementById("SecondaryBtn");
SecondaryBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // Generate phoneNumber and PinNumber;
    const gPhone = 1234567891;
    const gPin = 1234;
    console.log("hi SecondaryBtn clicked");
    let phoneNumber = document.getElementById("phoneNumber");
    let phoneNumberValue = parseInt(phoneNumber.value)
    // console.log(phoneNumberValue);
    let pinNumber = document.getElementById("pinNumber");
    let pinNumberValue = parseInt(pinNumber.value);
    // console.log(pinNumberValue);
    // condition code here;
    if(gPhone === phoneNumberValue && gPin === pinNumberValue){
        console.log("value Matched");
    }else{
        console.log("invalid cadiential");
    }
})