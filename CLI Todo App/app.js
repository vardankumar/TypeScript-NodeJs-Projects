import inquirer from "inquirer";
let todos = ['Nadia', 'Shahbaz', 'Bilal'];
async function createTodo(arr) {
    do {
        let answer = await inquirer.prompt({
            type: 'list',
            message: 'Select an operation.',
            name: 'select',
            choices: ['Add Todo', 'Update Todo', 'Delete Todo', 'Show Todo']
        });
        if (answer.select === 'Add Todo') {
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "Enter a todo.",
                name: "addtodo"
            });
            arr.push(addTodo.addtodo);
            console.log(arr);
        }
        if (answer.select === 'Update Todo') {
            let updateTodo = await inquirer.prompt({
                type: "list",
                message: "Update todo.",
                choices: arr.map(todo => todo),
                name: "updatetodo"
            });
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "Enter a todo.",
                name: "addtodo"
            });
            let updatedTodos = arr.filter(todo => todo !== updateTodo.updatetodo);
            arr = [...updatedTodos, addTodo.addtodo];
            console.log(arr);
        }
        if (answer.select === 'Delete Todo') {
            let deleteTodo = await inquirer.prompt({
                type: "list",
                message: "Delete todo.",
                choices: arr.map(todo => todo),
                name: "deletetodo"
            });
            let updatedTodos = arr.filter(todo => todo !== deleteTodo.deletetodo);
            arr = [...updatedTodos];
            console.log(arr);
        }
        if (answer.select === 'Show Todo') {
            console.log(arr);
        }
    } while (true);
}
createTodo(todos);
