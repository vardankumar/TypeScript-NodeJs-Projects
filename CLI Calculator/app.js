#!/usr/bin/env node
import inquirer from "inquirer";
import { sum, subtract, multiply, divide } from "./Operations/operators.js";
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowTitle = chalkAnimation.rainbow('Command Line Calculator');
    await sleep();
    rainbowTitle.replace('With Node.JS, INQUIRER AND CHALK');
    await sleep();
    rainbowTitle.replace('Let\'s Enjoy Calculation');
    await sleep();
    rainbowTitle.stop();
    startLoop();
}
async function askQuestion() {
    let answer = await inquirer.prompt([
        {
            message: chalk.greenBright('Enter your first number'),
            type: "number",
            name: "num1"
        },
        {
            message: chalk.greenBright('Enter your seconf number'),
            type: "number",
            name: "num2"
        },
        {
            message: chalk.yellowBright('Choose operator \n'),
            type: "list",
            choices: ["+", "-", "*", "/"],
            name: "operator"
        }
    ]);
    let result;
    switch (answer.operator) {
        case "+":
            result = sum(answer.num1, answer.num2);
            console.log(chalk.bgBlackBright(`${result}`));
            break;
        case "-":
            result = subtract(answer.num1, answer.num2);
            break;
        case "*":
            result = multiply(answer.num1, answer.num2);
            break;
        case "/":
            result = divide(answer.num1, answer.num2);
            break;
        default:
            break;
    }
    console.log(result);
}
async function startLoop() {
    do {
        await askQuestion();
        var again = await inquirer.prompt([
            {
                type: 'checkbox',
                name: 'restart',
                choices: ['Yes', 'No'],
                message: chalk.yellowBright('Do you want to continue?')
            }
        ]);
    } while (again.restart == 'Yes');
}
welcome();
// let student1 = {
//     name : 'Vardan',
//     age : 25,
//     courses : ['Web Development', 'Blockchain', 'Artificial Intelligence'],
//     isTeacher : false,
//     mathsSubject : {
//         marks : '92%',
//         grade : 'A+'
//     }, 
//     run(){
//         console.log('Start Running.');
//     }
// }
// let hamzah = {
// }
// const courses = ['Web Development', 'Blockchain', 'Artificial Intelligence',]
// console.log(courses[-1])
// // console.log(student1.name);
// // console.log(student1.age);
// // console.log(student1.courses);
// // console.log(student1['name']);
// // console.log(student1['age']);
// console.log(`${student1['name']} is ${student1.age} years old.`);
// student1.run()
// console.log(student1.courses[-2])
// console.log(student1.courses.length)
// let user = {
//     username : 'Vardan',
//     age : 25,
//     isMarried : false,
//     greet : () => {
//         console.log(`Hello ${user.username}.`);        
//     }
// }
// console.log(user);
// console.log(user.isMarried);
// user.greet()
