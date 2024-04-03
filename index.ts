#!/usr/bin/env node
/// Todo List In Typescriot//

import inquirer from "inquirer";
// user variable//
let todolist = [];
 let condition = true;
 console.log("Welcome to Code WithMehwish - TodO_List Application");
while(condition)
{
//open loop//
    let userinput = await inquirer.prompt
    ([
        {
           name:"TodoItem", type:"input", message:"What you want to Add Todo Item in todolist:",
        },
      
        {   
           name:"AddMore", type:"confirm", message: "Do you want to AddMore:", 
        }
    ]);
 //output of program
  todolist.push(userinput.TodoItem);
  condition = userinput.AddMore
  console.log("todolist:");}

//Add More items//
for (let i= 0; i<todolist.length;i++)
{console.log(todolist[i])}

//Delete TodoItems//
let deletetodoitem = await inquirer.prompt([{
   name:"deleToodoItem", type:"confirm", message:"Do you wamt to delete some Todoitems",
}])
for (let i = 0; i<todolist.length; i++)
{console.log("todolist"[i]);}

