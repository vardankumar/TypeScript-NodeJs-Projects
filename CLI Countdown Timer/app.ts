import { differenceInSeconds } from "date-fns"
import inquirer from "inquirer"


const res = await inquirer.prompt({
    type : 'number',
    name : 'userInput',
    message : 'Please enter the amount of seconds',
    validate : (input) => {
        if (isNaN(input)){
            return 'Please enter valid number'
        } else if(input > 60){
            return 'Seconds must be in 60'
        } else return true
    }
})


let input = res.userInput


function startTime(val : number){
    const intTime = new Date().setSeconds(new Date().getSeconds() + val)
    const intervalTime = new Date(intTime)
    setInterval((() => {
        const currentTime = new Date()
        const timeDifference = differenceInSeconds(intervalTime, currentTime)
        if(timeDifference <= 0){
            console.log('Timer has expired')
            process.exit()
        }
        let minutes = Math.floor((timeDifference % (3600 * 4))/3600)
        let seconds = Math.floor(timeDifference % 60)
        console.log(`${minutes.toString().padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`)
    }),1000)
}

startTime(input)

