// // deposit section
// // step 1
// document.getElementById('deposit-btn').addEventListener('click', function () {
//     // step 2
//     const depositField = document.getElementById('deposit-field');
//     const newDepositAmountString = depositField.value;
//     const newDepositAmount = parseFloat(newDepositAmountString);

//     // clearing step
//     depositField.value = '';

//     // nan checking step
//     if (isNaN(newDepositAmount)) {
//         return alert('please provide a number')
//     }

//     // step 3
//     const totalDepositBalance = document.getElementById('total-deposit');
//     const previousDepositAmountString = totalDepositBalance.innerText;
//     const previousDepositAmount = parseFloat(previousDepositAmountString);

//     // step 4
//     const totalDepositAmount = previousDepositAmount + newDepositAmount;
//     totalDepositBalance.innerText = totalDepositAmount;

//     // step 5
//     const totalBalance = document.getElementById('total-balance');
//     const previousBalanceAmountString = totalBalance.innerText;
//     const previousBalanceAmount = parseFloat(previousBalanceAmountString);

//     // step 6
//     const totalBalanceAmount = previousBalanceAmount + newDepositAmount;
//     totalBalance.innerText = totalBalanceAmount;
// })


// // withdraw section
// // step 1
// document.getElementById('withdraw-btn').addEventListener('click', function () {
//     // step 2
//     const withdrawFiled = document.getElementById('withdraw-field');
//     const newWithdrawAmountString = withdrawFiled.value;
//     const newWithdrawAmount = parseFloat(newWithdrawAmountString);

//     // clearing step
//     withdrawFiled.value = '';

//     // nan checking step
//     if (isNaN(newWithdrawAmount)) {
//         return alert('please provide a number')
//     }

//     // step 3
//     const totalWithdrawBalance = document.getElementById('total-withdraw');
//     const previousWithdrawAmountString = totalWithdrawBalance.innerText;
//     const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);

//     // step 5
//     const totalBalance = document.getElementById('total-balance');
//     const previousBalanceAmountString = totalBalance.innerText;
//     const previousBalanceAmount = parseFloat(previousBalanceAmountString);

//     if (newWithdrawAmount > previousBalanceAmount) {
//         return alert('Insufficient balance')
//     }

//     // step 4
//     const totalWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;
//     totalWithdrawBalance.innerText = totalWithdrawAmount;

//     // step 6
//     const totalBalanceAmount = previousBalanceAmount - newWithdrawAmount;
//     totalBalance.innerText = totalBalanceAmount;
// })


// best and advance way-----------------------------------------------
// deposit:
document.getElementById('deposit-btn').addEventListener('click', function () {
    const newDepositAmount = getInputValueById('deposit-field');
    if (isNaN(newDepositAmount)) {
        return alert('please provide a number');
    }

    const previousDepositTotal = getElementTextById('total-deposit');

    const newDepositTotal = previousDepositTotal + newDepositAmount;

    setElementTextValueById('total-deposit', newDepositTotal);

    const previousBalanceTotal = getElementTextById('total-balance');

    const newBalanceTotal = previousBalanceTotal + newDepositAmount;

    setElementTextValueById('total-balance', newBalanceTotal);


})

// withdraw:
document.getElementById('withdraw-btn').addEventListener('click',function () {
    const newWithdrawAmount =  getInputValueById('withdraw-field');
    if(isNaN(newWithdrawAmount)){
        return alert('please provide a number');
    }

    const previousWithdrawTotal = getElementTextById('total-withdraw');

    const previousBalanceTotal = getElementTextById('total-balance');

    if(newWithdrawAmount > previousBalanceTotal){
        return alert('Insufficient balance')
    }

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount ;

    setElementTextValueById('total-withdraw', newWithdrawTotal);

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    setElementTextValueById('total-balance', newBalanceTotal);

})