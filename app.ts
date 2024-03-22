#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";


let atm = await inquirer.prompt([
    {

        name:"id",
        type:"input",
        message:"Enter Your ID:"
        
    },
    {
        name:"pin",
        type:"input",
        message:"Enter Your PIN:"
    },
    {
        name: "action",
        type: "list",
        choices: ["Deposit", "Withdraw", "Fast Cash"],
        message: "Which action do you want to perform?"
    },
    {
        name: "fastAmount",
        type: "list",
        choices: [1000, 5000, 10000, 20000],
        message: "Select Your Amount",
        when(atm){
            return atm.action == "Fast Cash";
        }
    },
    {
        name: "amount",
        type: "number",
        message: "Enter Your Amount:",
        when(atm){
            return atm.action != "Fast Cash";
        }
    }
]);


if (atm.id && atm.pin) 
{

    const balance = Math.floor(Math.random() * 100000);
    console.log(chalk.blue(`\nYour Bank Balance: ${balance}`));

    let action = atm.action.toLowerCase();

    if (action == "deposit")
    {
        let result = balance + atm.amount;
        console.log(chalk.green(`Dear User, your amount have been deposited! \nRemaining bank balance: ${result}`));
    }
    else if (action == "fast cash")
    {
        let result = balance - atm.fastAmount;
        console.log(chalk.green(`Dear User, your selected amount have been withdrawn! \nRemaining bank balance: ${result}`));
    }
    else if (balance < atm.amount)
    {
        console.log(chalk.red("Insuffiecient Bank Balance!"));
    }
    else
    {
        let result = balance - atm.amount;
        console.log(chalk.green(`Dear User, the withdrawal was a success! \nRemaining bank balance: ${result}`)); 
    }
}
else{
    console.log(chalk.red("Invalid ID or PIN"));
}
