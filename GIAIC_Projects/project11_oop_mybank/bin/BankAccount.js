#! /usr/bin/env node
export class BankAccount {
    _accountBalance = 0;
    get accountBalance() {
        return this._accountBalance;
    }
    set accountBalance(accountBalance) {
        this._accountBalance = accountBalance;
    }
    ;
    // ***************************** //
    BankAccount() {
        this.accountBalance = 100;
    }
    // ***************************** //
    Debit(amount) {
        let statement = "Sorry, you have insufficient balance!";
        if (amount > 0) {
            statement = "The amount you entered is wrong!";
            if (this._accountBalance > amount) {
                this._accountBalance = this._accountBalance - amount;
                statement = `Transaction successfull! New account balance is: $${this._accountBalance}`;
            }
            else {
                statement = "You don't have enough money to do this transaction.";
            }
        }
        return statement;
    }
    ;
    // ***************************** //
    Credit(amount) {
        let statement = "Transaction failed!";
        if (amount > 0) {
            this._accountBalance = this._accountBalance + amount;
            if (amount > 100) {
                this._accountBalance = this._accountBalance - 1;
            }
            statement = `Your account has been credited successfully! Your account balance is: $${this._accountBalance}`;
        }
        ;
        return statement;
    }
}
