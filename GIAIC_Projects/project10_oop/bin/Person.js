#! /usr/bin/env node
// Aliyan Aqeel, 30th June 2024.
export class Person {
    // Declare a field to represent the personality.
    personality;
    // Constructor
    constructor() {
        this.personality = "Mystery";
    }
    AskQuestion(answer) {
        if (answer == 1) {
            this.personality = "Extrovert";
        }
        else if (answer == 2) {
            this.personality = "Introvert";
        }
        else {
            this.personality = "You are still a mystery.";
        }
    }
    ;
    // This method returns the value of the Personality.
    GetPersonality() {
        return this.personality;
    }
}
;
