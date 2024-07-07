#! /usr/bin/env node
// Aliyan Aqeel, 2nd July 2024.
import { IBankAccount } from "./IBankAccount.js";

export class BankAccount implements IBankAccount{

  private _accountBalance: number = 0

  get accountBalance(): number{
    return this._accountBalance
  }
  set accountBalance(accountBalance: number){
    this._accountBalance = accountBalance
  };


  // ***************************** //

  public BankAccount(){
    this.accountBalance = 100
  }


   // ***************************** //

  public Debit(amount: number): string{
    let statement: string = "Sorry, you have insufficient balance!";

    if (amount > 0) {
      statement = "The amount you entered is wrong!";

      if(this._accountBalance > amount){
        this._accountBalance = this._accountBalance - amount;
        statement = `Transaction successfull! New account balance is: $${this._accountBalance}` 
      }
      else{
        statement = "You don't have enough money to do this transaction."
      }
    }

    return statement
  };


   // ***************************** //

   public Credit(amount: number): string {
     let statement: string = "Transaction failed!";

     if (amount > 0) {
      this._accountBalance = this._accountBalance + amount;

      if(amount > 100){
        this._accountBalance = this._accountBalance - 1;
      }

      statement = `Your account has been credited successfully! Your account balance is: $${this._accountBalance}`; 
      };

      return statement;
   }

}