// ================== Home Section code ustomize ====================

function getInputValue(id){
    const input = document.getElementById(id)
    const value = input.value;
    console.log(id, value);
    return value;
}


function getBalance(){
    const totalBalance = document.getElementById('balance');
    const balance = totalBalance.innerText;
    console.log('Balance', Number(balance));
    return Number(balance)
}



function setBalance(value){
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = value;
};