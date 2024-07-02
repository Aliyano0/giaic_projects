#! /usr/bin/env node
// Aliyan Aqeel, 30th June 2024.

// Student Class
import { Person } from "./Person.js";
import { Program } from "./Program.js";


export class Student extends Person{
  // Private field (backing field) hold any data assigned to Name property.
  private _name: string;

  constructor(){
    super();
    this._name = ""
  }

    // Use the Get accessor to read data from the class
    public get Name(): string{
      return this._name
    }
    public set Name(value: string){
      this._name = value
    };
}
