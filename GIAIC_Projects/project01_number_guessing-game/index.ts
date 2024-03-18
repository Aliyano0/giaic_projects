#! /usr/bin/env node
import chalk from 'chalk';
import inquirer from 'inquirer';



let userInput = await inquirer.prompt([{message:"Guess the Number out of 10:", type: "number", name: "userInput"}]);

const randomNumber = Math.floor(Math.random()*10)+1;
console.log(randomNumber);


for (let score = 1; randomNumber === userInput.userInput; score++){
  if(randomNumber === userInput.userInput){
    console.log((chalk.bgGreen)`Yayyy, you guessed the correct number: ${randomNumber}`);
    console.log(`Your current score is: ${score}`);
  }
  userInput = await inquirer.prompt([{message:"Correct!! You are doing great! Guess another number.", type: "number", name: "userInput"}]);
}

if(randomNumber !== userInput){
  console.log((chalk.white.bgRed.bold)`Wrong answer. The correct number was: ${randomNumber}.`);
}

