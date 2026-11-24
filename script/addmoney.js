// ================== Add Money Section funtionality ==============================

document.getElementById('add-money-btn').addEventListener('click', () => {

    const bankAccount = getInputValue('add-money-seclect');
    console.log(bankAccount);

    if(bankAccount == 'Select A Bank'){
        showNotification(
        'Please Select A Bank!',
        'Please choose a bank to continue.',
        'error'
    );

        return;
    }

    const addMoneyNumber = getInputValue('add-money-number');
    console.log(addMoneyNumber);

    if(addMoneyNumber === ''){
        showNotification('Please enter your number.', '', 'error');
    return;
    }

    if(addMoneyNumber.length !== 11){
        showNotification('Please enter a valid account Number!', '', 'error')
        return;
    }


    const amount = getInputValue('add-money-amount');
    const currentBalance = getBalance();

    if(amount === ''){
        showNotification('Please enter amount.', '', 'error');
    return;
    }

    const newBalance = currentBalance + Number(amount);

    const addMoneyPin = getInputValue('add-money-pin');
    
    if(addMoneyPin === ''){
        showNotification('Please enter pin number.', '', 'error');
    return;
    }

    if(addMoneyPin == '1234'){
        showNotification(
            'Money Added Successfully!',
            `Your ${amount} has been successfully added to your ${bankAccount} account. ${new Date}`,
            'success'
        );
        setBalance(newBalance);

        const history = document.getElementById('transactions-container');
        const newHistory = document.createElement('div');
        newHistory.innerHTML = `
            <div class="bg-base-100 rounded-xl p-4 my-3">

                <div class="flex justify-between items-start">

                    <div class="flex items-center gap-3">

                        <div class="bg-base-200 rounded-full w-10 h-10 flex items-center justify-center">
                            <i class="fa-solid fa-plus text-base-content/70"></i>
                        </div>

                        <div>
                            <h3 class="font-semibold text-sm">Add Money</h3>

                            <p class="text-xs text-base-content/50 mt-1">
                               Bank: ${bankAccount}
                            </p>

                            <p class="text-xs text-base-content/50 mt-1">
                                Account: ${addMoneyNumber}
                            </p>

                            <p class="text-xs text-base-content/50 mt-1">
                                ${new Date().toLocaleString()}
                            </p>
                        </div>

                    </div>

                    <div class="text-right space-y-2">
                        <p class="font-semibold text-success">
                            + ৳${amount}
                        </p>

                        <span class="badge badge-success badge-outline badge-sm">
                            Completed
                        </span>
                    </div>

                </div>

            </div>
        `
        history.append(newHistory);
    }
    else{
        showNotification(
        'Incorrect PIN!',
        'Please check your PIN and try again.',
        'error'
    );
    }
});