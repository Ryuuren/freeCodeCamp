// Define the currency denominations and their values in cents.
const denominations = [
  ["PENNY", 1],
  ["NICKEL", 5],
  ["DIME", 10],
  ["QUARTER", 25],
  ["ONE", 100],
  ["FIVE", 500],
  ["TEN", 1000],
  ["TWENTY", 2000],
  ["ONE HUNDRED", 10000],
];

// Function to calculate change and check the cash register status.
const checkCashRegister = (price, cash, cashInDrawer) => {
  // Calculate the amount to return in cents.
  let amountToReturn = Math.round((cash - price) * 100);
  // Store the available cash in the drawer.
  let cashOnHand = {};
  // Store the cash to give as change.
  let cashToGive = {};

  // Convert cash in drawer to cents and store in cashOnHand object.
  cashInDrawer.forEach((denomination) => {
    cashOnHand[denomination[0]] = Math.round(denomination[1] * 100);
  });

  let index = denominations.length - 1;

  // Loop through denominations and give change.
  while (index >= 0 && amountToReturn > 0) {
    let [moneyName, moneyValue] = denominations[index];

    // Check if we can give this denomination as change.
    if (amountToReturn - moneyValue >= 0 && cashOnHand[moneyName] > 0) {
      cashToGive[moneyName] = 0;

      // Keep giving this denomination until we can't or it's exhausted.
      for (; cashOnHand[moneyName] > 0 && amountToReturn - moneyValue >= 0; ) {
        cashOnHand[moneyName] -= moneyValue;
        cashToGive[moneyName] += moneyValue;
        amountToReturn -= moneyValue;
      }
    }
    index -= 1;
  }

  // Check the result and return the appropriate status and change.
  if (amountToReturn === 0) {
    if (Object.values(cashOnHand).every((value) => value === 0)) {
      return { status: "CLOSED", change: cashInDrawer };
    } else {
      const changeArray = Object.entries(cashToGive)
        .filter(([moneyType, amount]) => amount > 0)
        .map(([moneyType, amount]) => [moneyType, amount / 100]);
      return { status: "OPEN", change: changeArray };
    }
  }

  return { status: "INSUFFICIENT_FUNDS", change: [] };
};

// Example cash in drawer.
let cashInDrawer = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];

// Test the function with an example transaction and log the result.
console.log(checkCashRegister(3.26, 100, cashInDrawer));
