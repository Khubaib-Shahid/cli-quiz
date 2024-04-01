#! /usr/bin/env node

import inquirer from "inquirer";

interface Qna {
  question: string;
  options: [string, string, string, string];
  answer: string;
}

let quiz : Qna[] = [
    {
        question: "What is the correct way to declare a variable in JavaScript?",
        options: ["var x = 5;", "int x = 5;", "x = 5;", "variable x = 5;"],
        answer: "var x = 5;"
    },
    {
        question: "Which built-in method adds one or more elements to the end of an array and returns the new length?",
        options: ["last()", "put()", "push()", "append()"],
        answer: "push()"
    },
    {
        question: "What does the '=== operator' do?",
        options: ["Assign", "Compare both value and type", "Compare only value", "Compare only type"],
        answer: "Compare both value and type"
    },
    {
        question: "What is the result of the following expression: '2' + 2?",
        options: ["22", "4", "Error", "NaN"],
        answer: "22"
    },
    {
        question: "Which function is used to parse a string to an integer?",
        options: ["parseInt()", "stringToInt()", "toInt()", "parseInteger()"],
        answer: "parseInt()"
    },
    {
        question: "What is the correct way to write a comment in JavaScript?",
        options: ["<!--This is a comment-->", "//This is a comment", "/*This is a comment*/", "comment: This is a comment"],
        answer: "//This is a comment"
    },
    {
        question: "Which keyword is used to define a block of code to be tested for errors while it is being executed?",
        options: ["catch", "try", "throw", "finally"],
        answer: "try"
    },
    {
        question: "What is the output of the following code: console.log(typeof([]));",
        options: ["Array", "Object", "Undefined", "Null"],
        answer: "Object"
    },
    {
        question: "Which method is used to remove the last element from an array and return that element?",
        options: ["pop()", "last()", "remove()", "delete()"],
        answer: "pop()"
    },
    {
        question: "What does JSON stand for?",
        options: ["JavaScript Object Notation", "JavaScript Oriented Notation", "Java Standard Object Notation", "JSON Object Notation"],
        answer: "JavaScript Object Notation"
    }
];

let a = await inquirer.prompt([
    {message : "Welcome to the JavaScript Quiz! Press Enter to start.", name : "start", type : "input"}
])

let num : number = 0;

async function start() {
    let rand = Math.floor(Math.random() * quiz.length - 3);
    
    for (let i = 0; i < 3; i++) {

        rand = rand + 1;

        let Q1 = await inquirer.prompt([
            {message : quiz[rand].question, type : "list", name : "ques", choices : quiz[rand].options}
        ])
    
    
        if (Q1.ques === quiz[rand].answer) {
            console.log("Correct!");
            num = num + 5;
            
        } else {
            console.log("Incorrect!"); 
        }
    }
    
    

    console.log("Your score is " + num + " out of 15");
}

start();
