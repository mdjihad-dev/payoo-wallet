// ========== Login Page funtionality =================

document.getElementById('login-btn').addEventListener('click', () => {

    // login Number
    const loginNumber = document.getElementById('login-number');
    const contactValue = loginNumber.value;
    console.log(contactValue);

    // Login Pin Number
    const inputPin = document.getElementById('input-pin');
    const pin = inputPin.value;
    console.log(pin);

    // login Page condition
    if(contactValue == '0123456789' && pin == '1234'){
        alert('Login Successfull')
        window.location.assign('home.html')
        return;
    }
    else{
        alert('Login Failed! Plaese try again');
        return;
    }

});