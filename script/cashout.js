// // ================ cashout funtionality =======================

document.getElementById('cashout-btn').addEventListener('click', () => {

    const cashoutNumber = document.getElementById('cashout-number');
    const number = cashoutNumber.value;
    
    if(number.length !== 11){
        showNotification('Please enter valid 11-digit Agent Number', '', 'error')
        return;
    }

    
    const inputAmount = document.getElementById('input-amount');
    const amount = inputAmount.value;

    if(amount === ''){
        showNotification('Please enter amount', '', 'error');
    return;
    }

    const totalBalance = document.getElementById('balance');
    const balance = totalBalance.innerText;
    console.log(balance);


    const newBalance = Number(balance) - Number(amount);
    
    if(newBalance < 0){
        showNotification('Insufficient Balance!')
        return;
    }
    
    
    const cashoutPin = document.getElementById('cashout-pin');
    const pin = cashoutPin.value;
    
    if(pin === ''){
        showNotification('Please enter your PIN', '', 'error');
    return;
    }

    if(pin === '1234'){
        showNotification(`Cashout Successfull ${number} at ${new Date()}`)
        totalBalance.innerText = newBalance;

        const history = document.getElementById('transactions-container');
        const newHistory = document.createElement('div');
        newHistory.innerHTML = `
            <div class="bg-base-100 rounded-xl p-4 my-3">

                <div class="flex justify-between items-start">

                    <div class="flex items-center gap-3">

                        <div class="bg-base-200 rounded-full w-10 h-10 flex items-center justify-center">
                            <i class="fa-solid fa-arrow-up-right-from-square text-base-content/70"></i>
                        </div>

                        <div>
                            <h3 class="font-semibold text-sm">Cash Out</h3>

                            <p class="text-xs text-base-content/50 mt-1">
                                Agent: ${number}
                            </p>

                            <p class="text-xs text-base-content/50 mt-1">
                                ${new Date().toLocaleString()}
                            </p>
                        </div>

                    </div>

                    <div class="text-right space-y-2">
                        <p class="font-semibold text-error">
                            - ৳${amount}
                        </p>

                        <span class="badge badge-success badge-outline badge-sm">
                            Completed
                        </span>
                    </div>

                </div>

            </div>
        `
        history.append(newHistory);
        return;
    }
    else{
        showNotification(
            'Incorrect PIN. Please try again.',
            '',
            'error');
        return;
    }
});