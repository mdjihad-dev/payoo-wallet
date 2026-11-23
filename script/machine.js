// ================== Home Section code ustomize ====================

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
};

// show card funtionality

function showOnly(id){
    const cashout = document.getElementById('cashout');
    const addMoney = document.getElementById('addMoney');

    cashout.classList.add('hidden');
    addMoney.classList.add('hidden');

    // card show funtionality

    const seclected = document.getElementById(id);
    seclected.classList.remove("hidden");
    
}