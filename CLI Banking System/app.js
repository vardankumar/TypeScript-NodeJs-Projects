import { faker } from "@faker-js/faker";
import chalk from "chalk/index.js";
import inquirer from "inquirer";
class Customer {
    constructor(firstName, lastName, age, gender, accNumber, mobNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.mobNumber = mobNumber;
        this.accNumber = accNumber;
    }
}
class Bank {
    constructor() {
        this.customer = [];
        this.account = [];
    }
    addCustomer(customer) {
        this.customer.push(customer);
    }
    addAccount(account) {
        this.account.push(account);
    }
}
let myBank = new Bank();
// console.log(myBank)
let customer1 = new Customer('Vardan', 'Kumar', 25, 'Male', 2345673456, 12345);
for (let i = 1; i <= 3; i++) {
    let firstName = faker.person.firstName('male');
    let lastName = faker.person.lastName();
    let mobNumber = +faker.phone.number();
    const customer = new Customer(firstName, lastName, 25 * i, 'male', mobNumber, 1000 + i);
    myBank.addCustomer(customer);
    myBank.addAccount({ accNumber: customer.accNumber, balance: 100 * i });
}
async function bankService(bank) {
    let service = await inquirer.prompt({
        type: 'list',
        name: 'select',
        message: 'Please Select the service.',
        choices: ['View Balance', 'Cash Withdraw', 'Cash Deposit']
    });
    if (service.select === 'View Balance') {
        let res = await inquirer.prompt({
            type: 'input',
            name: 'num',
            message: 'Please Enter your Account Number:',
        });
        let account = myBank.account.find((account) => account === res.num);
        if (!account) {
            console.log(chalk.red.bold('Invalid Account Number.'));
        }
        if (account) {
            let name = myBank.customer.find((item) => item.accNumber === account?.accNumber);
            console.log(`Dear ${chalk.green.italic(name?.firstName)} ${chalk.green.italic(name?.lastName)} Your Account Balance is ${chalk.bold.blueBright(`$${account.balance}`)}`);
        }
    }
    if (service.select === 'Cash Withdraw') {
    }
    if (service.select === 'Cash Deposit') {
    }
}
console.log(myBank);
