// ================== Bonus Section Funtionaliy ==========================

document.getElementById('bonus-form').addEventListener('submit', (e) => {
    e.preventDefault()

    const bonusNumber = getInputValue('bonus-number');
    
    if(bonusNumber === ''){
        showNotification('Please enter your coupon code', '', 'error')
        return;
    }

    const useCoupon = localStorage.getItem('useCoupon');

    if(useCoupon === bonusNumber){
        showNotification('You have already used this coupon code!', '', 'warning');
        return;
    }

    const currentBalance = getBalance() + Number(5000);

    if(bonusNumber === '514417'){
        showNotification(`Coupon applied successfully! ${5000} taka has been added to your balance`);
        setBalance(currentBalance);
        resetForm('bonus-form')
        localStorage.setItem('useCoupon', bonusNumber);

        console.log(document.getElementById('bonus-form'));
console.log(document.getElementById('bonus-form').reset);

        const history = document.getElementById('transactions-container');
        const newHistory = document.createElement('div');
        newHistory.innerHTML = `
            <div class="bg-base-100 rounded-xl p-4 my-3">

                <div class="flex justify-between items-start">

                    <div class="flex items-center gap-3">

                        <div class="bg-base-200 rounded-full w-10 h-10 flex items-center justify-center">
                            <i class="fa-solid fa-gift text-base-content/70"></i>
                        </div>

                        <div>
                            <h3 class="font-semibold text-sm">Bonus Received</h3>

                            <p class="text-xs text-base-content/50 mt-1">
                                Coupon: ${bonusNumber}
                            </p>

                            <p class="text-xs text-base-content/50 mt-1">
                                ${new Date().toLocaleString()}
                            </p>
                        </div>

                    </div>

                    <div class="text-right space-y-2">

                        <p class="font-semibold text-success">
                            + ৳5,000
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
        showNotification('Invalid coupon code. Please try again.', '', 'error')
        return;
    }
});