#! /usr/bin/env node
// Aliyan Aqeel, 25th June, 2024.
import inquirer from "inquirer";
import chalk from "chalk";
let condition = true;
while (condition) {
    let score = 0;
    console.log("********** 15 Multiple Choice Questions Challenge **********");
    // Question No.1
    let answer = await inquirer.prompt([
        { message: "1. What is TypeScript?", type: "list", name: "question1", choices: ["A) A framework for building web applications", "B) A superset of JavaScript that adds static typing",
                "C) A library for creating user interfaces", " D) A database query language"
            ] }
    ]);
    if (answer.question1 === "B) A superset of JavaScript that adds static typing") {
        console.log(chalk.green `B) A superset of JavaScript that adds static typing`);
        score++;
    }
    else {
        console.log(chalk.red `B) A superset of JavaScript that adds static typing`);
    }
    // Question No.2
    answer = await inquirer.prompt([
        { message: "2. Which keyword is used to define an interface in TypeScript?", type: "list", name: "question2", choices: ["A) `interface`", "B) `type`", "C) `class`", "D) `struct`"] }
    ]);
    if (answer.question2 === "A) `interface`") {
        console.log(chalk.green `A) 'interface'`);
        score++;
    }
    else {
        console.log(chalk.red `A) 'interface'`);
    }
    ;
    // Question No.3
    answer = await inquirer.prompt([
        { message: "3. How do you implement an interface in a TypeScript class?", type: "list", name: "question3", choices: ["A) `class MyClass implements MyInterface`",
                "B) `class MyClass extends MyInterface`", "C) `class MyClass uses MyInterface`", "D) `class MyClass inherits MyInterface`"] }
    ]);
    if (answer.question3 === "A) `class MyClass implements MyInterface`") {
        console.log(chalk.green `A) 'class MyClass implements MyInterface'`);
        score++;
    }
    else {
        console.log(chalk.red `A) 'class MyClass implements MyInterface'`);
    }
    ;
    // Question No.4
    answer = await inquirer.prompt([
        { message: "4. What is the correct way to define a tuple in TypeScript?", type: "list", name: "question4", choices: [
                "A) `let tuple: (string, number)`", "B) `let tuple: [string, number]`", "C) `let tuple: {string, number}`", "D) `let tuple: [string; number]`"
            ] }
    ]);
    if (answer.question4 === "B) `let tuple: [string, number]`") {
        console.log(chalk.green `B) 'let tuple: [string, number]'`);
        score++;
    }
    else {
        console.log(chalk.red `B) 'let tuple: [string, number]'`);
    }
    ;
    // Question No.5
    answer = await inquirer.prompt([
        { message: "5. Which method adds an element to the end of an array?", type: "list", name: "question5", choices: [
                "A) `push()`", "B) `pop()`", "C) `shift()`", "D) `unshift()`"
            ] }
    ]);
    if (answer.question5 === "A) `push()`") {
        console.log(chalk.green `A) 'push()'`);
        score++;
    }
    else {
        console.log(chalk.red `A) 'push()'`);
    }
    ;
    // Question No.6
    answer = await inquirer.prompt([
        { message: "6. How do you remove the first element from an array?", type: "list", name: "question6", choices: [
                "A) `pop()`", "B) `shift()`", "C) `unshift()`", "D) `splice()`"
            ] }
    ]);
    if (answer.question6 === "B) `shift()`") {
        console.log(chalk.green `B) 'shift()'`);
        score++;
    }
    else {
        console.log(chalk.red `B) 'shift()'`);
    }
    ;
    // Question No.7
    answer = await inquirer.prompt([
        { message: "7. What does the `map()` method do in an array?", type: "list", name: "question7", choices: [
                "A) It changes the array elements based on a function and returns a new array.", "B) It filters the array elements based on a condition.",
                "C) It finds the first element that matches a condition.", " D) It sorts the array elements in ascending order."
            ] }
    ]);
    if (answer.question7 === "A) It changes the array elements based on a function and returns a new array.") {
        console.log(chalk.green `A) It changes the array elements based on a function and returns a new array.`);
        score++;
    }
    else {
        console.log(chalk.red `A) It changes the array elements based on a function and returns a new array.`);
    }
    ;
    // Question No.8
    answer = await inquirer.prompt([
        { message: "8. How do you check if an array includes a certain value?", type: "list", name: "question8", choices: [
                "A) `array.contains(value)`", "B) `array.has(value)`",
                "C) `array.includes(value)`", "D) `array.indexOf(value)`"
            ] }
    ]);
    if (answer.question8 === "C) `array.includes(value)`") {
        console.log(chalk.green `C) 'array.includes(value)'`);
        score++;
    }
    else {
        console.log(chalk.red `C) 'array.includes(value)'`);
    }
    ;
    // Question No.9
    answer = await inquirer.prompt([
        { message: "9. Which method would you use to find the index of a specific element in an array?", type: "list", name: "question9", choices: [
                "A) `findIndex()`", "B) `indexOf()`",
                "C) `find()`", "D) `filter()`"
            ] }
    ]);
    if (answer.question9 === "B) `indexOf()`") {
        console.log(chalk.green `B) 'indexOf()'`);
        score++;
    }
    else {
        console.log(chalk.red `B) 'indexOf()'`);
    }
    ;
    // Question No.10
    answer = await inquirer.prompt([
        { message: "10. How do you combine two arrays in TypeScript?", type: "list", name: "question10", choices: [
                "A) `concat()`", "B) `join()`",
                "C) `merge()`", "D) `union()`"
            ] }
    ]);
    if (answer.question10 === "A) `concat()`") {
        console.log(chalk.green `A) 'concat()'`);
        score++;
    }
    else {
        console.log(chalk.red `A) 'concat()'`);
    }
    ;
    // Question No.11
    answer = await inquirer.prompt([
        { message: "11. What does the `reduce()` method do?", type: "list", name: "question11", choices: [
                "A) It applies a function against an accumulator and each element to reduce the array to a single value.", "B) It reduces the size of the array.",
                "C) It filters the array based on a condition.", "D) It maps the elements to new values."
            ] }
    ]);
    if (answer.question11 === "A) It applies a function against an accumulator and each element to reduce the array to a single value.") {
        console.log(chalk.green `A) It applies a function against an accumulator and each element to reduce the array to a single value.`);
        score++;
    }
    else {
        console.log(chalk.red `A) It applies a function against an accumulator and each element to reduce the array to a single value.`);
    }
    ;
    // Question No.12
    answer = await inquirer.prompt([
        { message: "12. How do you declare a variable in TypeScript with a specific type and a value?", type: "list", name: "question12", choices: [
                "A) `let variable = value: type`", "B) `let variable: type = value`",
                "C) `let variable: type; variable = value`", "D) `let variable = value; variable: type`"
            ] }
    ]);
    if (answer.question12 === "B) `let variable: type = value`") {
        console.log(chalk.green `B) 'let variable: type = value'`);
        score++;
    }
    else {
        console.log(chalk.red `B) 'let variable: type = value'`);
    }
    ;
    // Question No.13
    answer = await inquirer.prompt([
        { message: "13. What does the `as` keyword do in TypeScript?", type: "list", name: "question13", choices: [
                "A) It renames a module during import", "B) It specifies a type assertion",
                "C) It defines an alias for a type", "D) It specifies a default export"
            ] }
    ]);
    if (answer.question13 === "B) It specifies a type assertion") {
        console.log(chalk.green `B) It specifies a type assertion`);
        score++;
    }
    else {
        console.log(chalk.red `B) It specifies a type assertion`);
    }
    ;
    // Question No.14
    answer = await inquirer.prompt([
        { message: "14. What is the purpose of type guards in TypeScript?", type: "list", name: "question14", choices: [
                "A) To enforce stricter type checks during runtime", "B) To allow type-safe access to properties of objects",
                "C) To narrow down the type within a conditional block", "D) To prevent type coercion"
            ] }
    ]);
    if (answer.question14 === "C) To narrow down the type within a conditional block") {
        console.log(chalk.green `C) To narrow down the type within a conditional block`);
        score++;
    }
    else {
        console.log(chalk.red `C) To narrow down the type within a conditional block`);
    }
    ;
    // Question No.15
    answer = await inquirer.prompt([
        { message: "15. How do you create an instance of a class in TypeScript?", type: "list", name: "question15", choices: [
                "A) `let obj = new ClassName()`", "B) `let obj = create ClassName()`",
                "C) `let obj = ClassName()`", "D) `let obj = new ClassName`"
            ] }
    ]);
    if (answer.question15 === "A) `let obj = new ClassName()`") {
        console.log(chalk.green `A) 'let obj = new ClassName()'`);
        score++;
    }
    else {
        console.log(chalk.red `A) 'let obj = new ClassName()'`);
    }
    ;
    // Score
    console.log(`------ Your score is: ${score} out of 15 McQs. ------`);
    // Retry
    answer = await inquirer.prompt([{ message: "Do you want to start over?", type: "confirm", name: 'condition' }]);
    condition = answer.condition;
}
;
