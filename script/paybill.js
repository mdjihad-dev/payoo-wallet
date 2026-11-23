// // =================== paybill section ========================

document.getElementById('pay-bill-btn').addEventListener('click', () => {
console.log('pay bil');
    const billAccount = getInputValue('pay-bill-seclect');

    if(billAccount === 'Select back'){
        alert('Please choose a payment method to continue.')
        return;
    }

    const billNumber = getInputValue('bill-number');
    console.log(billNumber);

    if(billNumber.length !== 11){
        alert('Please enter a valid account Number!')
        return;
    }


    const amount = getInputValue('bill-amount');
    const currentBalance = getBalance();

    const newBalance = currentBalance - Number(amount);

    const pinNumber = getInputValue('bill-pin');

    if(pinNumber === '1234'){
        alert(`Your ${amount} Taka bill payment has been completed successfully. at ${new Date()}`)
        setBalance(newBalance);

        const history = document.getElementById('transactions-container');
        const newHistory = document.createElement('div');
        newHistory.innerHTML = `
                <div class="bg-base-100 rounded-xl p-4 my-3">

                    <div class="flex justify-between items-start">

                        <div class="flex items-center gap-3">

                            <div class="bg-base-200 rounded-full w-10 h-10 flex items-center justify-center">
                                <i class="fa-solid fa-file-invoice text-base-content/70"></i>
                            </div>

                            <div>
                                <h3 class="font-semibold text-sm">Pay Bill</h3>

                                <p class="text-xs text-base-content/50 mt-1">
                                    Provider: ${billAccount}
                                </p>

                                <p class="text-xs text-base-content/50 mt-1">
                                    Account: ${billNumber}
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
        alert('Incorrect PIN. Please try again.')
        return;
    }
});