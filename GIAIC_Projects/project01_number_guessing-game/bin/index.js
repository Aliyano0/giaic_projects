#! /usr/bin/env node
import chalk from 'chalk';
import inquirer from 'inquirer';
const randomNumber = Math.floor(Math.random() * 10) + 1;
let userInput = await inquirer.prompt([{ message: "Guess the Number between 1 to 10:", type: "number", name: "userInput" }]);
for (let score = 1; randomNumber === userInput.userInput; score++) {
    if (randomNumber === userInput.userInput) {
        console.log((chalk.bgGreen) `Yayyy, you guessed the correct number: ${randomNumber}`);
        console.log(`Your current score is: ${score}`);
    }
    userInput = await inquirer.prompt([{ message: "You are doing great! Guess another number.", type: "number", name: "userInput" }]);
}
if (randomNumber !== userInput) {
    console.log((chalk.bgRed) `Wrong answer. The correct number was: ${randomNumber}.`);
}
