// =================== Login Page funtionality =================

document.getElementById('login-btn').addEventListener('click', () => {

    // login Number
    const loginNumber = document.getElementById('login-number');
    const contactValue = loginNumber.value;
    console.log(contactValue);

    // Login Pin Number
    const inputPin = document.getElementById('input-pin');
    const pin = inputPin.value;
    console.log(pin);

    // ============== Login Page Condition ================

    if (contactValue === '0123456789' && pin === '1234') {

        showNotification(
            'Login Successful!',
            'Welcome to Payoo!',
            'success'
        ).then((result) => {

            if (result.isConfirmed) {
                window.location.href = '../home.html';
            }
        });

        return;

    } else {

        showNotification(
            'Login Failed!',
            'Please check your phone number and PIN.',
            'error'
        );

        return;
    }

});