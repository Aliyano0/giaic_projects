#! /usr/bin/env 
// Aliyan Aqeel, 26th June, 2024.

import inquirer from "inquirer";
import chalk from "chalk";

// Game Variables
const enemies: string[] = ["Skeleton", "Zombie", "Warrior", "Assassin"];        // Enemies List 

let maxEnemyHealth: number = 75;         // Maximum health of Enemy. It will be used with math.random to randomized health between 1-75 enemy health.
let enemyAttackDmg: number = 25;         // Enemy attack damage will also be used with math.random for random attack dmg between 0-25 dmg.

// Player Variables
let health: number = 100;                // Player Health
let attackDmg: number = 50;              // Attack Damage will be used with math.random for random attack damage between 0-50 dmg.
let numHealthPotions: number = 3;        // Max Health Potions
let healthPotionHealAmount: number = 30; // Health potion's health 
let healthPotionDropChance: number = 50; // Percentage

// While loop condition
let running: boolean = true;
let enemiesDefeated: number = 0;
// Welcome message //
console.log(chalk.magenta(`Welcome to the Dungeon!`));

GAME:  // Labeled the while loop for run option in the game.
while (running) {
  console.log("----------------------------------------------");
  
  let enemyHealth: number = Math.floor(Math.random() * maxEnemyHealth)+1;   // Randomizing enemy health between 1-75;
  let enemy: string = enemies[Math.floor(Math.random() * enemies.length)];  // Randomly selecting enemy from enemies array. 
  console.log(chalk.red(`\t# ${enemy} has appeared! #\n`));                 // Enemy appeared message.

  while(enemyHealth > 0){  // Battle loop. this loop will run untill the enemy is dead.

    console.log(chalk.green(`\tYour HP: ${health}`));           // Player health.
    console.log(chalk.red(`\t${enemy}'s HP: ${enemyHealth}`));  // Enemy health.

    // Getting options from the player.
    let input = await inquirer.prompt([
      {message: "\n\tWhat would you like to do?", name:"firstStep", type:"list", choices:["\t1. Attack", "\t2. Drink health potion", "\t3. Run!"]}
    ]);

    // If player selects attack.
    if(input.firstStep === "\t1. Attack"){
      let damageDealt = Math.floor(Math.random() * attackDmg);  // Randomizing attack damage.
      let damageTaken = Math.floor(Math.random() * enemyAttackDmg);  // Randomizing enemy attack damage.

      enemyHealth -= damageDealt; // Subtracting player attack damage from enemy health.
      health -= damageTaken;      // Subtracting enemy attack damage from player health.

      console.log(chalk.green(`\t> You strike the ${enemy} for ${damageDealt} damage.`)); // Displaying Player attack damage.
      console.log(chalk.red(`\t> You recieve the ${damageTaken} in retaliation!`));   // Displaying enemy attack damage (Damage taken by player).
      
      if(health < 1){ // Player ded
        console.log(chalk.redBright(`\t> You have taken too much damage, you are too weak to go on!`));
        break
      }
    }

    // If player selects drink health potion.
    else if(input.firstStep === "\t2. Drink health potion"){
      if(numHealthPotions > 0){

        if(health === 100){
          console.log(chalk.greenBright(`\n\t You have Max HP.`));
        }
        else if(health < 100){

            // Adding health points to health after drinking health potion. //
            health += healthPotionHealAmount;

            // Maximum health is 100
            if(health > 100){
              health = 100;
            };

            // Health potions quantity decreases after consuming it. // 
            numHealthPotions--;
    
            console.log(chalk.blue(`\t> You drink a health potion, healing yourself for ${healthPotionHealAmount}.`), 
              chalk.green(`\n\t> You now have ${health} HP.`),
              chalk.yellow(`\n\t> You have ${numHealthPotions} health potions left.\n`));
        }
      }
      // If there are no health potions left.
      else{
        console.log(chalk.red(`\t> You have no health potions left! Defeat enemies for a chance to get on`));
      }
    }

    // If player selects Run.
    else if(input.firstStep === "\t3. Run!"){
      console.log(chalk.magenta(`\tYou run away from the ${enemy}!`));
      continue GAME; // Using the label to get to the start. (We labeled the while loop above.)
    }

    // Type narrowing.
    else{
      console.log(chalk.redBright(`Invalid command!`));
    }
  };

  // If there is no HP left for the Player.
  if(health < 1){
    console.log(chalk.red(`You limp out of the dungeon, weak from battle.`));
    break;
  }

  console.log("----------------------------------------------");
  console.log(chalk.green(` # ${enemy} was defeated! # `));
  console.log(chalk.green(` # You have ${health} HP left. # `));
  enemiesDefeated++
  
  if(Math.floor(Math.random() * 100)+1 < healthPotionDropChance){
    numHealthPotions++;
    console.log(chalk.blue(` # The ${enemy} dropped a health potion! # `));
    console.log(chalk.blue(` # You now have ${numHealthPotions} health potion(s). # `));
  }

  console.log("----------------------------------------------");
  
  let input2 = await inquirer.prompt([
    {message: "\n\tWhat would you like to do now?", name:"secondStep", type:"list", choices:["1. Continue fighting", "2. Exit Dungeon"]}
  ]);
  
  if(input2.secondStep === "1. Continue fighting"){
    console.log(chalk.blue(`\n\tYou continue on your adventure!`));
  }
  else if(input2.secondStep === "2. Exit Dungeon"){
    console.log(chalk.cyan(`\n\tYou exit the dungeon, successful from your adventure!`));
    break
  }
};
console.log(`########################`);
console.log(`# THANKS FOR PLAYING! #`);
console.log(`# You defeated ${enemiesDefeated} enemies during your adventure. #`);
console.log(`########################`);




