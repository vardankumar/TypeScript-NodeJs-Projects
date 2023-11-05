import inquirer from 'inquirer';
class Student {
    constructor(name) {
        this.name = name;
    }
}
class Person {
    constructor() {
        this.student = [];
    }
    addStudent(obj) {
        this.student.push(obj);
    }
}
const persons = new Person();
console.log(persons);
const programStart = async (persons) => {
    do {
        console.log('Welcome');
        const ans = await inquirer.prompt({
            type: 'list',
            message: 'Whom do you want to talk?',
            name: 'select',
            choices: ['Self', 'Student']
        });
        if (ans.select == 'Self') {
            console.log('Hello, I am talking with myself.');
            console.log('And i am all well.');
        }
        if (ans.select == 'Student') {
            const ans = await inquirer.prompt({
                type: 'input',
                message: 'to which student do you want to chat with?',
                name: 'student',
            });
            const student = persons.student.find(value => value.name === ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`Hello I am ${name.name}, and i am very well.`);
                console.log(persons.student);
            }
            if (student) {
                console.log(`Hello I am ${student.name}, and i am very well.....................`);
                console.log(persons.student);
            }
        }
    } while (true);
};
programStart(persons);
