#! /usr/bin/env node
// Aliyan Aqeel, 19th-21st June, 2024.
import inquirer from "inquirer";
let condition = true;
while (condition) {
    class StudentManagementSystem {
        studentName;
        email;
        studentID;
        course;
        tuitionFees;
        balance;
        constructor(studentName, email) {
            this.studentName = studentName;
            this.email = email;
            this.studentID = Math.floor(Math.random() * (99999 - 10000 + 1) + 10000);
            this.course = "Not enrolled yet";
            this.tuitionFees = 0;
            this.balance = 0;
        }
        ;
        // ENROLL
        enroll(course) {
            if (course === "C++ Course") {
                this.course = course;
                this.tuitionFees = 7999;
                console.log(`Hi ${this.studentName}, your Student ID is: ${this.studentID} and you are successfully enrolled in ${this.course}.`);
                console.log(`Your payable tuition fee is Rs.7999`);
            }
            else if (course === "JavaScript Course") {
                this.course = course;
                this.tuitionFees = 4999;
                console.log(`Hi ${this.studentName}, your Student ID is: ${this.studentID} and you are successfully enrolled in ${this.course}.`);
                console.log(`Your payable tuition fee is Rs.4999`);
            }
            else if (course === "Java Course") {
                this.course = course;
                this.tuitionFees = 5999;
                console.log(`Hi ${this.studentName}, your Student ID is: ${this.studentID} and you are successfully enrolled in ${this.course}.`);
                console.log(`Your payable tuition fee is Rs.5999`);
            }
            else if (course === "Python Course") {
                this.course = course;
                this.tuitionFees = 6999;
                console.log(`Hi ${this.studentName}, your Student ID is: ${this.studentID} and you are successfully enrolled in ${this.course}.`);
                console.log(`Your payable tuition fee is Rs.6999`);
            }
            else if (course === "TypeScript Course") {
                this.course = course;
                this.tuitionFees = 5499;
                console.log(`Hi ${this.studentName}, your Student ID is: ${this.studentID} and you are successfully enrolled in ${this.course}.`);
                console.log(`Your payable tuition fee is Rs.5499`);
            }
        }
        ;
        // VIEW BALANCE
        viewBalance() {
            console.log(`Your current balance is Rs.${this.balance}`);
        }
        // TUITION FEES
        payTuitionFees(paymentMethod, paymentAmount) {
            if (paymentAmount > this.tuitionFees) {
                this.balance = (paymentAmount - this.tuitionFees);
            }
            this.tuitionFees -= paymentAmount;
            console.log(`${paymentMethod} is selected.`);
            console.log(`Your fee payable is now ${this.tuitionFees}`);
        }
        ;
        // SHOW STATUS
        showStatus() {
            console.log(`Student Name: ${this.studentName}, Roll No.: ${this.studentID}, Course: ${this.course}, Due Fees: ${this.tuitionFees}, Balance: ${this.balance}`);
        }
    }
    ;
    // ** STARTING WITH NAME
    let input = await inquirer.prompt([
        { message: "Input your name:", type: "input", name: "name" },
        { message: "Input your email:", type: "input", name: "email" },
    ]);
    const newStudent = new StudentManagementSystem(input.name, input.email);
    // ***** Code for which course to select ***** //
    input = await inquirer.prompt([
        { message: "Which course would you like to enroll in?",
            type: "list",
            name: "course",
            choices: ["C++ Course", "JavaScript Course", "Java Course", "Python Course", "TypeScript Course"] }
    ]);
    newStudent.enroll(input.course);
    // **** Code for Changing course and other options. **** // 
    input = await inquirer.prompt([
        { message: "What would you like to do?", type: "list", name: "otherOptions", choices: ["Change Course", "Pay Tuition Fees", "View Status", "View Balance"] }
    ]);
    if (input.otherOptions === "Change Course") {
        input = await inquirer.prompt([
            { message: "Which course would you like to enroll in?",
                type: "list",
                name: "course",
                choices: ["JavaScript Course", "Python Course", "Java Course", "C++ Course", "TypeScript Course"] }
        ]);
        newStudent.enroll(input.course);
        console.log(`You are successfully enrolled in ${newStudent.course} now!`);
        newStudent.showStatus();
        input = await inquirer.prompt([{ message: "Select an option", type: "list", name: "SecondOperation", choices: ["Pay Tuition Fees", "Show Status", "View Balance"] }]);
        // *** Pay Tuition Fees *** //
        if (input.SecondOperation === "Pay Tuition Fees") {
            console.log(`Your due fees is ${newStudent.tuitionFees}`);
            input = await inquirer.prompt([
                { message: "Select a payment method:", type: "list", name: "paymentMethod", choices: ["Easypaisa", "Bank Transfer", "Jazz Cash", "Naya Pay"] },
                { message: "Enter your payment amount.", type: "number", name: "paymentAmount" },
            ]);
            newStudent.payTuitionFees(input.paymentMethod, input.paymentAmount);
            newStudent.showStatus();
        }
        else if (input.SecondOperation === "Show Status") {
            newStudent.showStatus();
        }
        else if (input.SecondOperation === "View Balance") {
            newStudent.viewBalance();
        }
        ;
    }
    else if (input.otherOptions === "Pay Tuition Fees") {
        input = await inquirer.prompt([
            { message: "Select a payment method:", type: "list", name: "paymentMethod", choices: ["Easypaisa", "Bank Transfer", "Jazz Cash", "Naya Pay"] },
            { message: "Enter your payment amount.", type: "number", name: "paymentAmount" },
        ]);
        newStudent.payTuitionFees(input.paymentMethod, input.paymentAmount);
        newStudent.showStatus();
    }
    else if (input.otherOptions === "View Status") {
        newStudent.showStatus();
    }
    else if (input.otherOptions === "View Balance") {
        newStudent.viewBalance();
    }
    // Asking whether you want to add more students
    input = await inquirer.prompt([{ message: "Would you like to add more students?", type: "confirm", name: "condition" }]);
    condition = input.condition;
}
;
