
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  let wrongBalanceAccounts = [];
  for (let i = 0; i < array.length; i++) {
    let currentAccount = array[i];
    let depositsTotal = 0;
    let withdrawalsTotal = 0;
    if (currentAccount.deposits !== undefined) {
      for ( let j = 0; j < currentAccount.deposits.length; j++) {
        depositsTotal += currentAccount.deposits[j];
      }
    }
    if (currentAccount.withdrawals !== undefined) {
      for (let k = 0; k < currentAccount.withdrawals.length; k++) {
        withdrawalsTotal += currentAccount.withdrawals[k];
      }
    }
    let expectedBalance = depositsTotal - withdrawalsTotal;
    if (currentAccount.balance !== expectedBalance) {
      wrongBalanceAccounts.push(currentAccount);
    }
  }
  return wrongBalanceAccounts;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
