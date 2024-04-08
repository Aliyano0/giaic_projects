#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance: number = 10000;

console.log(`Your current balance is: ${myBalance}`);

let userPIN: number = 1234;

let userInfo = await inquirer.prompt([
  { message: "Enter your PIN", type: "number", name: "userPIN" },
]);

if (userPIN === userInfo.userPIN) {
   let userInfo = await inquirer.prompt([
    { message: "What do you want to do?", type: "list", name: "userInput", choices: ["Check your balance", "Withdraw", "Fast cash"] },
  ]);

  // CODE FOR WITHDRAWAL
  if (userInfo.userInput === "Withdraw") {
    let userInfo = await inquirer.prompt([
      { message: "Enter the amount you want to withdraw", type: "number", name: "withdrawAmount" }
    ]);

    if (userInfo.withdrawAmount <= myBalance) {

      myBalance -= userInfo.withdrawAmount;
      console.log(`Your remaining amount is ${myBalance}`);
    }

    else if (userInfo.withdrawAmount > myBalance) {
      console.log("Insufficient balance.");
    }
  }

  // CODE FOR CHECKING BALANCE
  else if (userInfo.userInput === "Check your balance") {
    console.log(`Your current balance is ${myBalance}`);
  }

  // CODE FOR FAST CASH FEATURE
  else if (userInfo.userInput === "Fast cash") {
    let userInfo = await inquirer.prompt([{
      message: "Select an option", type: "list", name: "fastCash", choices: [500, 2000, 5000, 10000, 25000]
    }])

    if (userInfo.fastCash === 500) {
      myBalance -= userInfo.fastCash;
      console.log(`Your remaining balance is ${myBalance}`);
    }

    else if (userInfo.fastCash === 2000) {
      myBalance -= userInfo.fastCash;
      console.log(`Your remaining balance is ${myBalance}`);
    }

    else if (userInfo.fastCash === 5000) {
      myBalance -= userInfo.fastCash;
      console.log(`Your remaining balance is ${myBalance}`);
    }

    else if (userInfo.fastCash === 10000) {
      myBalance -= userInfo.fastCash;
      console.log(`Your remaining balance is ${myBalance}`);
    }

    else if (userInfo.fastCash === 25000) {
      myBalance -= userInfo.fastCash;
      console.log(`Insufficient balance.`);
    }
  }
}

else {
  console.log("Please enter the correct PIN.");
}
