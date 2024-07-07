#! /usr/bin/env node
// Aliyan Aqeel, 2nd July 2024.
export class Customer {
    _firstName = "";
    _lastName = "";
    _gender = "";
    _age = 0;
    _mobileNumber = "";
    _bankAccount;
    constructor(bankAccount) {
        this._bankAccount = bankAccount;
    }
    CustomerInfo() {
        return `
    Name: ${this._firstName} ${this._lastName}
    Age: ${this._age}
    Gender: ${this._gender}
    Mobile: ${this._mobileNumber}
    Account Balance: $${this._bankAccount.accountBalance}
    `;
    }
    // ***************************** //
    get firstName() {
        return this._firstName;
    }
    set firstName(fName) {
        this._firstName = fName;
    }
    // ***************************** //
    get lastName() {
        return this._lastName;
    }
    set lastName(lName) {
        this._lastName = lName;
    }
    // ***************************** //
    get gender() {
        return this._gender;
    }
    set gender(gender) {
        this._gender = gender;
    }
    // ***************************** //
    get age() {
        return this._age;
    }
    set age(ageValue) {
        this._age = ageValue;
    }
    // ***************************** //
    get mobileNumber() {
        return this._mobileNumber;
    }
    set mobileNumber(mobileNumber) {
        this._mobileNumber = mobileNumber;
    }
    // ***************************** //
    get bankAccount() {
        return this._bankAccount;
    }
    set bankAccount(bankAccount) {
        this._bankAccount = bankAccount;
    }
    ;
}
