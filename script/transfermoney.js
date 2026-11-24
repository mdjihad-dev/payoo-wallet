// ============= transfer money section funtionality =================

const transferBtn = document.getElementById('transfer-btn').addEventListener('click', () => {

    console.log('transfer money');
    const transferNumber = getInputValue('transfer-number');

    if(transferNumber.length !== 11){
        showNotification('Please enter a valid 11-digit Agent Number', '', 'error')
        return;
    }

    const transferAmount = getInputValue('transfer-amount');

    const balance = getBalance() - Number(transferAmount);

    if(transferAmount === ''){
            showNotification('Please enter amount.', '', 'error');
        return;
    }

    const transferPin = getInputValue('transfer-pin')

    if(transferPin === ''){
            showNotification('Please enter your pin number.', '', 'error');
        return;
    }

    if(transferPin == '1234'){
        showNotification('Your transfer has been completed successfully.')
        setBalance(balance)

        const history = document.getElementById('transactions-container');
        const newHistory = document.createElement('div');
        newHistory.innerHTML = `
            
        <div class="bg-base-100 rounded-xl p-4 my-3">

            <div class="flex justify-between items-start">

                <div class="flex items-center gap-3">

                    <div class="bg-base-200 rounded-full w-10 h-10 flex items-center justify-center">
                        <i class="fa-solid fa-paper-plane text-base-content/70"></i>
                    </div>

                    <div>
                        <h3 class="font-semibold text-sm">Money Transfer</h3>
                        <p class="text-xs text-base-content/50 mt-1">
                            Recipient: ${transferNumber}
                        </p>
                        <p class="text-xs text-base-content/50 mt-1">
                            ${new Date().toLocaleString()}
                        </p>
                    </div>

                </div>

                <div class="text-right space-y-2">
                    <p class="font-semibold text-error">
                        - ৳${transferAmount}
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
        showNotification('Incorrect PIN. Please try again.', '', 'error')
        return;
    }

});