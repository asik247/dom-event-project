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
/*
document.addEventListener("DOMContentLoaded", () => {

    const loginBtn = document.getElementById("SecondaryBtn");
    const phoneInput = document.getElementById("phoneNumber");
    const pinInput = document.getElementById("pinNumber");

    // Dummy credentials (In real project this comes from server)
    const VALID_PHONE = "12345678910";
    const VALID_PIN = "1234";

    loginBtn.addEventListener("click", handleLogin);

    function handleLogin(event) {
        event.preventDefault();

        const phone = phoneInput.value.trim();
        const pin = pinInput.value.trim();

        // 🔎 Validation
        if (!validateInputs(phone, pin)) return;

        // 🔐 Authentication Check
        if (authenticate(phone, pin)) {
            redirectToNextPage();
        } else {
            showError("Invalid phone number or PIN.");
        }
    }

    function validateInputs(phone, pin) {
        if (phone === "" || pin === "") {
            showError("All fields are required.");
            return false;
        }

        if (!/^\d{11}$/.test(phone)) {
            showError("Phone number must be 11 digits.");
            return false;
        }

        if (!/^\d{4}$/.test(pin)) {
            showError("PIN must be 4 digits.");
            return false;
        }

        return true;
    }

    function authenticate(phone, pin) {
        return phone === VALID_PHONE && pin === VALID_PIN;
    }

    function redirectToNextPage() {
        window.location.href = "/html/next.html";
    }

    function showError(message) {
        alert(message);
    }

});

 */
