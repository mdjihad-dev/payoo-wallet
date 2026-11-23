// ================== Add Money Section funtionality ==============================

document.getElementById('add-money-btn').addEventListener('click', () => {

    const bankAccount = getInputValue('add-money-seclect');
    console.log(bankAccount);

    if(bankAccount == 'Select A Bank'){
        alert('Please Seclect A Bank')
        return;
    }

    const addMoneyNumber = getInputValue('add-money-number');
    console.log(addMoneyNumber);

    if(addMoneyNumber.length !== 11){
        alert('Please enter a valid account Number!')
        return;
    }


    const Amount = getInputValue('add-money-amount');
    const currentBalance = getBalance();

    const newBalance = currentBalance + Number(Amount);

    const addMoneyPin = getInputValue('add-money-pin');

    if(addMoneyPin == '1234'){
        alert(`Money added successfully! ${bankAccount} at ${new Date()}`)
        setBalance(newBalance);
        return;
    }
    else{
        alert('Incorrect PIN. Please try again.')
        return
    }

})