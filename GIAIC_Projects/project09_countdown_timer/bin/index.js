#! /usr/bin/env node
// Aliyan Aqeel, 7th July, 2024.
import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";
// let input = await inquirer.prompt([
//   {message: "Choose an option", type: "list", name: "timeFormat", choices:["Input time in seconds", "Input time in minutes"]}
// ]);
let input = await inquirer.prompt([
    { message: "Enter Duration in seconds", type: "number", name: "timeInSec",
        validate: (input) => {
            if (isNaN(input) || input <= 0) {
                return "Please enter a valid number greater than 0.";
            }
            else if (input > 60) {
                return "Seconds must be under 60";
            }
            else {
                return true;
            }
        }
    }
]);
let userInput = input.timeInSec;
function startTime(timeinSec) {
    const timerTime = new Date().setSeconds(new Date().getSeconds() + timeinSec);
    const intervalTime = new Date(timerTime);
    setInterval(() => {
        const currTime = new Date();
        const timeDiff = differenceInSeconds(intervalTime, currTime);
        if (timeDiff <= 0) {
            console.log("Timer has expired!");
            process.exit();
        }
        const min = Math.floor((timeDiff % (3600 * 24)) / 3600);
        const sec = Math.floor(timeDiff % 60);
        console.log(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`);
    }, 1000);
}
;
startTime(userInput);
