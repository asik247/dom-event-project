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
        alert("All fields are required.");
        return;
    }// 11 digit phone check
    if (phoneNumber.length !== 11) {
        alert("Phone number must be exactly 11 digits.");
        return;
    }

    // 4 digit pin check
    if (pinNumber.length !== 4) {
        alert("PIN must be exactly 4 digits.");
        return;
    }

    let phoneNumberValue = parseInt(phoneNumber)
    let pinNumberValue = parseInt(pinNumber);
    // condition code here;
    if (gPhone === phoneNumberValue && gPin === pinNumberValue) {
        // console.log("value Matched");
        window.location.href = "/html/next.html"
    } else {
        // console.log("invalid cadiential");
        alert("Invalid number or pin")
    }


})
