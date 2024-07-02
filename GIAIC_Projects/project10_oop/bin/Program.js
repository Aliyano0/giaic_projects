#! /usr/bin/env node
// Aliyan Aqeel, 30th June 2024.
// Program CLass
import { Person } from "./Person.js";
import { Student } from "./Student.js";
import PromptSync from "prompt-sync";
const prompt = PromptSync();
export class Program {
    Main() {
        try {
            let input;
            let name;
            input = prompt(`Type 1 if you like to talk to others and type 2 if you would rather keep to your yourself: `);
            const MyPerson = new Person();
            MyPerson.AskQuestion(parseInt(input));
            console.log(`You are: ${MyPerson.GetPersonality()}`);
            name = prompt(`What is your name: `);
            const MyStudent = new Student();
            MyStudent.Name = name;
            console.log(`Your Name is: ${MyStudent.Name} and your personality type is: ${MyStudent.GetPersonality()}`);
        }
        catch {
            console.log(`Please enter an integer`);
        }
        ;
    }
}
;
const MyProgram = new Program().Main();
