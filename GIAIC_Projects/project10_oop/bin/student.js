#! /usr/bin/env node
// Aliyan Aqeel, 30th June 2024.
// Student Class
import { Person } from "./Person.js";
export class Student extends Person {
    // Private field (backing field) hold any data assigned to Name property.
    _name;
    constructor() {
        super();
        this._name = "";
    }
    // Use the Get accessor to read data from the class
    get Name() {
        return this._name;
    }
    set Name(value) {
        this._name = value;
    }
    ;
}
