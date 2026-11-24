// ================== Home Section code ustomize ====================

// Restore saved balance and transaction history
const balanceElement = document.getElementById('balance');
const savedBalance = localStorage.getItem('payooBalance');

if(savedBalance !== null){
    balanceElement.innerText = savedBalance;
}
else{
    localStorage.setItem('payooBalance', balanceElement.innerText);
}

const transactionsContainer = document.getElementById('transactions-container');
const savedTransactions = localStorage.getItem('payooTransactions');

if(savedTransactions !== null){
    transactionsContainer.innerHTML = savedTransactions;
}

// Save transaction history whenever a new transaction is added
const transactionObserver = new MutationObserver(() => {
    localStorage.setItem('payooTransactions', transactionsContainer.innerHTML);
});

transactionObserver.observe(transactionsContainer, {
    childList: true,
    subtree: true
});

// Input value collect
function getInputValue(id){
    const input = document.getElementById(id)
    const value = input.value;
    console.log(id, value);
    return value;
}

// total balance costomize
function getBalance(){
    const totalBalance = document.getElementById('balance');
    const balance = totalBalance.innerText;
    console.log('Balance', Number(balance));
    return Number(balance)
}


// value setup
function setBalance(value){
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = value;
    localStorage.setItem('payooBalance', value);
};

// show card funtionality

function showOnly(id){
    const cashout = document.getElementById('cashout');
    const addMoney = document.getElementById('addMoney');
    const transactions = document.getElementById('transactions');
    const transferMoney = document.getElementById('transfer-money-container');
    const bonusMoney = document.getElementById('bonus-container');
    const payBill = document.getElementById('pay-bill');

    cashout.classList.add('hidden');
    addMoney.classList.add('hidden');
    transactions.classList.add('hidden');
    transferMoney.classList.add('hidden');
    bonusMoney.classList.add('hidden');
    payBill.classList.add('hidden');

    // card show funtionality

    const seclected = document.getElementById(id);
    seclected.classList.remove("hidden");
    
}
