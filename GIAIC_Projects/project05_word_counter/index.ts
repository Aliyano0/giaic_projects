#! /usr/bin/env node

import inquirer from "inquirer";

let input: {paragraph:string} = await inquirer.prompt([
  {message: "Enter your paragraph here:", type: "input", name:"paragraph"},
]);


let words = input.paragraph.trim().split(" ");

console.log(words);

console.log(`Word count: ${words.length}`);


