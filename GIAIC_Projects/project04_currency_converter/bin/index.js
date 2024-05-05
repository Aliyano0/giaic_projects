#! /usr/bin/env node
import inquirer from "inquirer";
let currencies = {
    USD: 1,
    PKR: 277.70,
    INR: 83.38,
    TL: 32.30,
    AED: 3.67,
    EUR: 0.93
};
let input = await inquirer.prompt([
    { message: "Select which currency you would like to convert", type: "list", name: "convert", choices: ["USD", "PKR", "INR", "TL", "AED", "EUR"] },
    { message: "Select which currency you would like to convert into:", type: "list", name: "convertInto", choices: ["USD", "PKR", "INR", "TL", "AED", "EUR"] },
    { message: "Enter the amount:", type: "number", name: "amount" }
]);
let fromAmount = currencies[input.convert];
let toAmount = currencies[input.convertInto];
let amount = input.amount;
let baseAmount = amount / fromAmount; // USD base currency
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
// currencies.forEach((element:any) => {
//   if (element[input.convert]) {
//   let convertTo = element[input.convert][input.convertInto]
//   console.log(convertTo * input.amount);
//   } 
//  });
