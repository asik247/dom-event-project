// Login button functionality code start here;
let SecondaryBtn = document.getElementById("SecondaryBtn");
SecondaryBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // Generate phoneNumber and PinNumber;
    const gPhone = 12345678910;
    const gPin = 1234;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let pinNumber = document.getElementById("pinNumber").value;

    if (phoneNumber === "" || pinNumber === "") {
        alert("Please enter phone number and pin");
        return;
    }
    let phoneNumberValue = parseInt(phoneNumber)
    let pinNumberValue = parseInt(pinNumber);
    // console.log(pinNumberValue);
    // condition code here;

    if (gPhone === phoneNumberValue && gPin === pinNumberValue) {
        // console.log("value Matched");
        window.location.href = "/html/next.html"
    } else {
        // console.log("invalid cadiential");
        alert("Invalid number or pin")
    }
})