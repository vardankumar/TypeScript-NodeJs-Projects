import inquirer from "inquirer";
import chalk from "chalk";
let API_LINK = "https://v6.exchangerate-api.com/v6/d63c7ff5e7e57fba90c55a72/latest/PKR";
let fetchData = async (data) => {
    let fetchedData = await fetch(data);
    let res = await fetchedData.json();
    return res.conversion_rates;
};
const response = await fetchData(API_LINK);
let countries = Object.keys(response);
let firstCountry = await inquirer.prompt({
    type: 'list',
    name: 'c1',
    message: 'Converting from',
    choices: countries
});
let userMoney = await inquirer.prompt({
    type: 'number',
    name: 'usermoney',
    message: `Please enter the amount in ${chalk.greenBright.bold(firstCountry.c1)}`,
});
let secondCountry = await inquirer.prompt({
    type: 'list',
    name: 'c2',
    message: 'Converting to',
    choices: countries
});
let cnv = `https://v6.exchangerate-api.com/v6/d63c7ff5e7e57fba90c55a72/pair/${firstCountry.c1}/${secondCountry.c2}`;
let cnvData = async (data) => {
    let cnvData = await fetch(data);
    let res = await cnvData.json();
    return res.conversion_rate;
};
const cnvRate = await cnvData(cnv);
console.log(cnvRate);
const convertedRate = userMoney.usermoney * cnvRate;
console.log(`Your ${chalk.bold.greenBright(userMoney.usermoney)} in ${chalk.bold.greenBright(firstCountry.c1)} is equal to ${chalk.bold.greenBright(convertedRate)} in ${chalk.bold.greenBright(secondCountry.c2)}`);
