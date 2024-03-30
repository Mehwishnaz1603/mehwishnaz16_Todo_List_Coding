#!/usr/bin/env node
/// Todo List In Typescriot//
import inquirer from "inquirer";
// user variable//
let todos = [];
let condition = true;
while (condition) {
    //open loop//
    let userinput = await inquirer.prompt([
        {
            name: "TodoItem", type: "input", message: "What you want to Add Todo Item in listing:",
        },
        {
            name: "AddMore", type: "confirm", message: "Do you want to AddMore:",
        }
    ]);
    //output of program
    todos.push(userinput.TodoItem);
    condition = userinput.AddMore;
    console.log("todos:");
}
//Add More items//
for (let i = 0; i < todos.length; i++) {
    console.log(todos[i]);
}
//Exit loop//
