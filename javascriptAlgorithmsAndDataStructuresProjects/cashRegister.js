function checkCashRegister(price, cash, cid) {
  // Sum the total cash in the drawer using reduce on the cid array
  const totalCID = cid.reduce((acc, val) => acc + val[1], 0);
  // Check how much change is needed
  let changeNeeded = cash - price;

  // Initialize a change return array that will hold the change that is to be returned to the customer
  let changeReturn = [];
  // Check if cash in drawer is equal to change needed to determine if register is open or closed after transaction
  let equal = cash - price === totalCID;
  // Initialize count variable for each denomination
  let twenties = 0,
    tens = 0,
    fives = 0,
    ones = 0,
    quarters = 0,
    dimes = 0,
    nickels = 0,
    pennies = 0;

  // If the total cash in drawer is less than the change that is needed, register has insufficient funds, return status
  if (totalCID < changeNeeded) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  // Determine how much of each change denomination should be added to the changeReturn array
  while (changeNeeded >= 20) {
    if (cid[7][1] >= 20) {
      cid[7][1] -= 20;
      changeNeeded -= 20;
      twenties += 20;
    }
  }
  if (twenties) {
    changeReturn.push(["TWENTY", twenties]);
  }
  while (changeNeeded >= 10) {
    if (cid[6][1] >= 10) {
      cid[6][1] -= 10;
      changeNeeded -= 10;
      tens += 10;
    }
  }
  if (tens) {
    changeReturn.push(["TEN", tens]);
  }
  while (changeNeeded >= 5) {
    if (cid[5][1] >= 5) {
      cid[5][1] -= 5;
      changeNeeded -= 5;
      fives += 5;
    }
  }
  if (fives) {
    changeReturn.push(["FIVE", fives]);
  }
  while (changeNeeded >= 1) {
    if (cid[4][1] >= 1) {
      cid[4][1] -= 1;
      changeNeeded -= 1;
      ones += 1;
    }
  }
  if (ones) {
    changeReturn.push(["ONE", ones]);
  }
  while (changeNeeded >= 0.25) {
    if (cid[3][1] >= 0.25) {
      cid[3][1] -= 0.25;
      changeNeeded -= 0.25;
      quarters += 0.25;
    }
  }
  if (quarters) {
    changeReturn.push(["QUARTER", quarters]);
  }
  while (changeNeeded >= 0.1) {
    if (cid[2][1] >= 0.1) {
      cid[2][1] -= 0.1;
      changeNeeded -= 0.1;
      dimes += 0.1;
    }
  }
  if (dimes) {
    changeReturn.push(["DIME", dimes]);
  }
  while (changeNeeded >= 0.05) {
    if (cid[1][1] >= 0.05) {
      cid[1][1] -= 0.05;
      cid[1][1] = cid[1][1].toFixed(2);
      changeNeeded -= 0.05;
      changeNeeded = changeNeeded.toFixed(2);
      nickels += 0.05;
    }
  }
  if (nickels) {
    changeReturn.push(["NICKEL", nickels]);
  }
  while (changeNeeded >= 0.01) {
    if (cid[0][1] >= 0.01) {
      cid[0][1] -= 0.01;
      cid[0][1] = cid[0][1].toFixed(2);
      changeNeeded -= 0.01;
      changeNeeded = changeNeeded.toFixed(2);
      pennies += 0.01;
    }
  }
  if (pennies) {
    changeReturn.push(["PENNY", parseFloat(pennies.toFixed(2))]);
  }

  // If the total cash in drawer is equal to the change needed, but there were sufficient funds to give customer proper change, return the change and indicate that register is closed in it's status
  if (equal && changeNeeded < 0.01) {
    changeReturn.push(
      ["NICKEL", 0],
      ["DIME", 0],
      ["QUARTER", 0],
      ["ONE", 0],
      ["FIVE", 0],
      ["TEN", 0],
      ["TWENTY", 0],
      ["ONE HUNDRED", 0]
    );
    return { status: "CLOSED", change: changeReturn };
  }

  // If total CID not equal to change needed and there were sufficient funds, this means there are still funds left over in drawer. Indicate status of open for register and return change array.
  if (!equal && changeNeeded < 0.01) {
    return { status: "OPEN", change: changeReturn };
  }

  // If total CID was greater than change needed, but register did not have proper denomination to return exact change, indicate this as insufficient funds in the status. i.e: There is a "ONE" in drawer and change needed is 0.25.
  if (changeNeeded !== 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]);
