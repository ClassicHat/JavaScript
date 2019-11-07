const chalk = require('chalk');
var moment = require('moment');

//Set up a readline for input
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

//variable control loop
var loopAgain = false;

do{
    //Ask a question and wait for input
    readline.question("Please enter a date: ", (input) => {
        //get todays date
        var today = moment();
        //check if its a valid date
        var isValid = moment(input).isValid();

        if(isValid == true){
            console.log(chalk.blue(moment(input).format("dddd, MMMM Do YYYY, h:mm:ss a")));
            console.log(chalk.red(moment(input).format("ddd, hA")));
            console.log(chalk.green(`The date 5 years from now is: ${moment(today).add(5, 'y')}`));
        }else{
            console.log(chalk.red("Input was invalid"));
        }

        //Close the readline
        readline.close();
    })
}while(loopAgain == true)



