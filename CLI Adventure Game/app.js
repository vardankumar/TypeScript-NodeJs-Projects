import chalk from "chalk";
import inquirer from "inquirer";
class Player {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
}
class Opponent {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
}
let player = await inquirer.prompt({
    type: 'input',
    name: "name",
    message: 'Please enter your name:'
});
let opponent = await inquirer.prompt({
    type: 'list',
    name: 'select',
    message: 'Select your opponent',
    choices: ["Skeleton", 'Assassin', 'Zombie']
});
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
if (opponent.select == 'Skeleton') {
    console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`);
    let ask = await inquirer.prompt({
        type: 'list',
        name: 'opt',
        message: 'Select your option',
        choices: ['Attack', 'Drink Portion', 'Run For Your Life...']
    });
    if (ask.opt === 'Attack') {
        let num = Math.floor(Math.random() * 2);
        console.log(num);
    }
    if (ask.opt === 'Drink Portion') {
        console.log('Drink');
    }
    if (ask.opt === 'Run For Your Life...') {
        console.log('Run');
    }
}
