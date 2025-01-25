// Task 1: Create a function to handle deposits into a bank account
let balanceTotal = 1500;
let totalToDeposit = 500;
let deposit = true;

function depositMoney(balanceTotal, totalToDeposit) {
    balanceTotal += totalToDeposit;
    return balanceTotal;
}

if (deposit) {
    balanceTotal = depositMoney(balanceTotal, totalToDeposit);
    console.log(`Balance after deposit: $${balanceTotal}`);
}

// Task 2: Implement a function to handle withdrawals from a bank account
let totalToWithdraw = 250;
let withdraw = true;

function withdrawMoney(balanceTotal, totalToWithdraw) {
    balanceTotal -= totalToWithdraw;
    return balanceTotal;
}

if (withdraw) {
    balanceTotal = withdrawMoney(balanceTotal, totalToWithdraw);
    console.log(`Balance after withdrawl: $${balanceTotal}`);
}

// Task 3: Develop a function to check the current balance of the account
let check = true;

function checkBalance(balanceTotal) {
    console.log(`Balance: $${balanceTotal}`);
}

if (check) {
    checkBalance(balanceTotal);
}