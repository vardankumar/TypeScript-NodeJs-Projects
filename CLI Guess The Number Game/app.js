#!/usr/bin/env node
import inquirer from 'inquirer';
let score = 0;
async function startLoop() {
    let again;
    do {
        await guessNumber();
        again = await inquirer.prompt([
            {
                type: 'list',
                name: 'restart',
                choices: ['Yes', 'No'],
                message: 'Do you want to continue?'
            }
        ]);
    } while (again.restart === 'Yes');
}
let userGuess;
async function guessNumber() {
    let randomNumber = Math.ceil(Math.random() * 10);
    console.log(randomNumber);
    let tip;
    if (randomNumber % 2 === 0) {
        tip = 'Number is Even';
    }
    else {
        tip = 'Number is Odd';
    }
    // console.log(tip)
    userGuess = await inquirer.prompt([
        {
            name: 'guess',
            type: 'number',
            message: `Guess the number between 1 and 10. ${tip}.`
        }
    ]);
    console.log(`Your guess is ${userGuess.guess} and the system generated ${randomNumber}`);
    if (userGuess.guess === randomNumber) {
        score++;
        console.log(`Congratulations! your guess is correct. Your score is ${score}`);
    }
    else {
        console.log(`Wrong guess! Your score is ${score}`);
    }
}
startLoop();
