#! /usr/bin/env node
// Aliyan Aqeel, 30th June 2024.

// Program CLass
import { Person } from "./Person.js";
import { Student } from "./Student.js";
import PromptSync from "prompt-sync";

const prompt = PromptSync();

export class Program{
  static Main():void{
    try{

    let input: string;
    let name: string;


    input = prompt(`Type 1 if you like to talk to others and type 2 if you would rather keep to your yourself: `)
    const MyPerson : Person  = new Person();
    MyPerson.AskQuestion(parseInt(input));
    console.log(`You are: ${MyPerson.GetPersonality()}`);


    name = prompt(`What is your name: `);
    const MyStudent: Student = new Student();
    MyStudent.Name = name;
    console.log(`Your Name is: ${MyStudent.Name} and your personality type is: ${MyStudent.GetPersonality()}`);
    
    }
    catch{
      console.log(`Please enter an integer`);
    };
  }
};



Program.Main();