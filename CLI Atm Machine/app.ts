import inquirer from 'inquirer';
import { faker } from '@faker-js/faker';

// requirements
// 1. users data
// 2. atm machine
// 3. atm machine functions

interface User {
    id  : number;
    pin  :  number;
    name : string;
    accountNumber : number;
    balance : number;
}


const createUser = () => {
    let users : User[] = []
    for (let i=0; i < 5; i++){
        let user : User = {
            id : i,
            pin : 1000 + i,
            name : faker.person.fullName(),
            accountNumber : Math.floor(10000 * Math.random() * 78000),
            balance : 100000 * i
        }
        users.push(user)
    }
    return users
}

const atmMachine = async (users : User[]) => {

    const res  = await inquirer.prompt({
        type  : 'number',
        message : 'Enter your pin code',
        name : 'pin'

    })
    // console.log(res)

    const user = users.find(user => user.pin === res.pin)

    if (user) {
        console.log(`Welcome ${user.name}`)
        atmFunctions(user)
    }
    else {
        console.log('Invalid pin.')
    }

}


const atmFunctions = async (user : User) => {
    const answer = await inquirer.prompt({
        type  : 'list',
        name : 'select',
        message : 'Namasty, What do you want to do?',
        choices : ['Withdraw', 'Balance Inquiry', 'Exit']
    })
    if(answer.select === 'Withdraw'){
        const amount = await inquirer.prompt({
            type : 'number',
            name : 'amount',
            message : 'Enter amount to withdraw'
        })
        if(amount.amount > user.balance){
            console.log('Insufficient balance')
        }else{
            user.balance -= amount.amount
            console.log(`Take Your Cash. Your remaining balance is ${user.balance}.`)
        }
    }

    if(answer.select === 'Balance Inquiry'){
        console.log(`Your balance is ${user.balance}`)
    }

    else if(answer.select === 'Exit') return 

}


const users = createUser()
atmMachine(users)

// console.log(users)
