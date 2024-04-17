#! /usr/bin/env node
import inquirer from "inquirer";
let tasks = [];
let condition = true;
while (condition) {
    let input = await inquirer.prompt([
        {
            message: "Add a task", type: "input", name: "task",
        },
        {
            message: "Do you want to add another task?", type: "confirm", default: "true", name: "moreTasks",
        }
    ]);
    tasks.push(input.task);
    condition = input.moreTasks;
    console.log(tasks);
}
// // // // // // // // // HOMEWORK // /// // // / // // // //
let input = await inquirer.prompt([{
        message: "What do you want to do?", type: "list", choices: ["Read", "Add", "Update", "Delete", "Exit"], name: "modify"
    }]);
//  //  //  //  // // READING A TASK /// // // // //
if (input.modify === "Read") {
    if (tasks.length > 0) {
        tasks.forEach(tasks => {
            console.log(tasks);
        });
    }
    else {
        console.log("Your list is empty!");
    }
}
// // // // // // // // ADDING A TASK // // // // / // ///
else if (input.modify === "Add") {
    let input = await inquirer.prompt([{
            message: "Add a task", type: "input", name: "addingTask"
        }]);
    tasks.push(input.addingTask);
    console.log(tasks);
    console.log("Task added successfully!");
}
// ///  / // // // // UPDATING A TASK // // // / // / // / / / /
else if (input.modify === "Update") {
    let input = await inquirer.prompt([{
            message: "What task do you want to update in your list?", type: "list", name: "updateTask", choices: tasks,
        },
        {
            message: "Enter the task:", name: "updatedTask", type: "input"
        }
    ]);
    // Finding the index of the task
    let updateIndex = tasks.findIndex(task => task === input.updateTask);
    // Updating the task at found index with new task.
    tasks.splice(updateIndex, 1, input.updatedTask);
    console.log(tasks);
    console.log("Task updated successfully!");
}
// // // /// // // // DELETING A TASK // // // / // // // 
else if (input.modify === "Delete") {
    if (tasks.length > 0) {
        let input = await inquirer.prompt([{
                message: "What do you want to delete?", type: "list", name: "deleteTask", choices: tasks,
            }]);
        let deletedTask = tasks.indexOf(input.deleteTask);
        tasks.splice(deletedTask, 1);
        console.log(tasks);
        console.log("Task deleted successfully!");
    }
    else {
        console.log("Your list is empty!");
    }
}
else if (input.modify === "Exit") {
    console.log("You have successfully exited the todo list.");
}
