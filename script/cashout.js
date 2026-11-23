// // ================ cashout funtionality =======================

// document.getElementById('cashout-btn').addEventListener('click', () => {

    
//     const cashoutNumber = document.getElementById('cashout-number');
//     const number = cashoutNumber.value;
//     console.log(number);
    
//     if(number.length !== 11){
//         alert('Invalid Agent Number!')
//         return;
//     }
    

//     const inputAmount = document.getElementById('input-amount');
//     const amount = inputAmount.value;
//     console.log(amount);

//     const totalBalance = document.getElementById('balance');
//     const Balance = totalBalance.innerText;
//     console.log(Balance);

//     const newBalance = Number(Balance) - Number(amount);
    
//     if(newBalance < 0){
//         alert('Insufficient Balance!')
//         return;
//     }
    
    
//     const cashoutPin = document.getElementById('input-pin');
//     const pin = cashoutPin.value;
//     console.log(pin);
    
//     if(pin === '1234'){
//         alert('Cashout Successfull')
//         console.log('New Balance', newBalance);
//         totalBalance.innerText = newBalance;
//     }
//     else{
//         alert('Invalid Pin Number')
//         return;
//     }
// })


document.getElementById('cashout-btn').addEventListener('click', () => {

    const cashoutNumber = document.getElementById('cashout-number');
    const number = cashoutNumber.value;
    
    if(number.length !== 11){
        alert('Please enter a valid 11-digit Agent Number')
        return;
    }

    const inputAmount = document.getElementById('input-amount');
    const amount = inputAmount.value;


    const totalBalance = document.getElementById('balance');
    const balance = totalBalance.innerText;
    console.log(balance);


    const newBalance = Number(balance) - Number(amount);
    
    if(newBalance < 0){
        alert('Insufficient Balance!')
        return;
    }
    
    
    const cashoutPin = document.getElementById('cashout-pin');
    const pin = cashoutPin.value;
    
    
    if(pin === '1234'){
        alert('Cashout Successfull')
        totalBalance.innerText = newBalance;
        return;
    }
    else{
        alert('Incorrect PIN. Please try again.');
        return;
    }
});