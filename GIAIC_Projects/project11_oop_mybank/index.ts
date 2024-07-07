#! /usr/bin/env node
// Aliyan Aqeel, 2nd July 2024.
import PromptSync from "prompt-sync";
import { Customer } from "./Customer.js";
import { BankAccount } from "./BankAccount.js";

const prompt = PromptSync();

export class Program{
  static Main(): void{
    let input: string;
    let firstName: string;
    let lastName: string;
    let gender: string;
    let age: string;
    let mobileNo: string;

    console.log(`Create a Bank Account`);
    const newBankAccount: BankAccount = new BankAccount()

   
    const newCustomer = new Customer(newBankAccount);
    firstName = prompt(`Enter your first name: `);
    newCustomer.firstName = firstName;

    lastName = prompt(`Enter your last name: `);
    newCustomer.lastName = lastName;

    gender = prompt(`Enter your gender: `);
    newCustomer.gender = gender;

    age = prompt(`Enter your age: `);
    newCustomer.age = parseInt(age);

    mobileNo = prompt(`Enter your mobile number: `);
    newCustomer.mobileNumber = mobileNo;

    console.log(`Hi ${newCustomer.firstName}, your account is created successfully.`);
    newBankAccount.BankAccount();

    input = prompt("Type 1 if you want your customer info and type any key if you want to continue: ");
    if(parseInt(input) === 1){
     console.log(newCustomer.CustomerInfo());
    }

    input = prompt("Type 1 if you want to Credit money to your account and type 2 if you want to Debit money from your account or Type any key to exit: ");

    if(parseInt(input) === 1){
      input = prompt("Enter the amount you want to credit to your account: ");
      console.log(newBankAccount.Credit(parseInt(input)));
    }
    else if(parseInt(input) === 2){
      input = prompt("Enter the amount you want to debit from your account: ");
      console.log(newBankAccount.Debit(parseInt(input)));
    }
    else{
      console.log("App exited successfully!");
    }
  };

};

Program.Main();

// Pura code review krna hy sahi se aur entry point ka interface bhi sahi krna hy.