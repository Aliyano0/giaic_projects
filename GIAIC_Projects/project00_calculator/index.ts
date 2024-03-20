#! /usr/bin/env node
import inquirer from 'inquirer';


const answer = await inquirer.prompt([
  {message:"Type first number", type: "number", name:"firstNumber"},
  {message:"Type second number", type: "number", name:"secondNumber"},
  {mesage:"Choose operator for operation", type:"list", name:"operator", choices:["Addition", "Subtraction", "Division", "Multiplication"]}
]);

if(answer.operator === "Addition"){
  console.log(`Answer: ${answer.firstNumber + answer.secondNumber}`);
}
else if(answer.operator === "Subtraction"){
  console.log(`Answer: ${answer.firstNumber - answer.secondNumber}`);
}
else if(answer.operator === "Division"){
  console.log(`Answer: ${answer.firstNumber / answer.secondNumber}`);
}
else if(answer.operator === "Multiplication"){
  console.log(`Answer: ${answer.firstNumber * answer.secondNumber}`);
}
else{
  console.log("Choose a valid operator.");
}