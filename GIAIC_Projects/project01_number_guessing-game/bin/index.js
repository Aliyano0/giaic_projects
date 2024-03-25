#! /usr/bin/env node
import chalk from 'chalk';
import inquirer from 'inquirer';
const randomNumber = Math.floor(Math.random() * 5) + 1;
let userInput = await inquirer.prompt([{ message: "Guess the Number between 1 to 5:", type: "number", name: "answer" }]);
for (let score = 1; randomNumber === userInput.answer; score++) {
    if (randomNumber === userInput.answer) {
        console.log((chalk.bgGreen) `Yayyy, you guessed the correct number: ${randomNumber}`);
        console.log(`Your current score is: ${score}`);
    }
    userInput = await inquirer.prompt([{ message: "You are doing great! Guess another number.", type: "number", name: "answer" }]);
}
;
if (randomNumber !== userInput.answer) {
    console.log((chalk.bgRed) `Wrong answer. The correct number was:${randomNumber}`);
}
;
