#! /usr/bin/env node

import { BankAccount } from "./BankAccount.js"

// Aliyan Aqeel, 2nd July 2024.


export class Customer{
  private _firstName: string = ""
  private _lastName: string = ""
  private _gender: string  = ""
  private _age: number = 0
  private _mobileNumber: string = ""
  private _bankAccount: BankAccount 
  
  constructor(bankAccount: BankAccount){
    this._bankAccount = bankAccount
  }


  
  public CustomerInfo(): string{
    return `
    Name: ${this._firstName} ${this._lastName}
    Age: ${this._age}
    Gender: ${this._gender}
    Mobile: ${this._mobileNumber}
    Account Balance: $${this._bankAccount.accountBalance}
    `
  }


  // ***************************** //

  public get firstName(): string{
    return this._firstName;
  }
  public set firstName(fName: string){
    this._firstName = fName;
  }
  
  
  // ***************************** //
  
  public get lastName(): string{
    return this._lastName;
  }
  public set lastName(lName: string){
    this._lastName = lName;
  }
  
  
  // ***************************** //
  
  public get gender(): string{
    return this._gender;
  }
  public set gender(gender: string){
    this._gender = gender;
  }
  
  
  // ***************************** //
  
  public get age(): number{
    return this._age;
  }
  public set age(ageValue: number){
    this._age = ageValue;
  }


   // ***************************** //

  public get mobileNumber(): string{
    return this._mobileNumber;
  }
  public set mobileNumber(mobileNumber: string){
    this._mobileNumber = mobileNumber;
  }
  
  
  // ***************************** //
  
  public get bankAccount(): BankAccount{
    return this._bankAccount;
  }
  public set bankAccount(bankAccount: BankAccount){
    this._bankAccount = bankAccount;
  };
}