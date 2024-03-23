#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
while (true) {
    let atm_registry = await inquirer.prompt([
        {
            name: "id",
            type: "input",
            message: "Create An ID:"
        },
        {
            name: "pin",
            type: "input",
            message: "Create A PIN:"
        }
    ]);
    let c_id = atm_registry.id;
    let c_pin = atm_registry.pin;
    if (c_id && c_pin) {
        console.log(chalk.green("Your account was successfully made! Please Proceed to Login:"));
        while (true) {
            let atm_ver = await inquirer.prompt([
                {
                    name: "id_ver",
                    type: "input",
                    message: "Enter Your ID:"
                },
                {
                    name: "pin_ver",
                    type: "input",
                    message: "Enter Your PIN:"
                }
            ]);
            let v_id = atm_ver.id_ver;
            let v_pin = atm_ver.pin_ver;
            if (c_id == v_id && c_pin == v_pin) {
                console.log(chalk.magentaBright("Welcome to your account"));
                while (true) {
                    let atm = await inquirer.prompt([
                        {
                            name: "action",
                            type: "list",
                            choices: ["Deposit", "Withdraw"],
                            message: "Which action do you want to perform?"
                        },
                        {
                            name: "amount",
                            type: "number",
                            message: "Enter Your Amount:"
                        }
                    ]);
                    if (atm && atm.amount) {
                        const balance = Math.floor(Math.random() * 100000);
                        console.log(chalk.blue(`\nYour Bank Balance: ${balance}`));
                        let action = atm.action.toLowerCase();
                        if (action == "deposit") {
                            let result = balance + atm.amount;
                            console.log(chalk.green(`Dear User, your amount have been deposited! \nRemaining bank balance: ${result}`));
                        }
                        else if (balance < atm.amount) {
                            console.log(chalk.redBright("Insuffiecient Bank Balance!"));
                        }
                        else {
                            let result = balance - atm.amount;
                            console.log(chalk.green(`Dear User, the withdrawal was a success! \nRemaining bank balance: ${result}`));
                        }
                        break;
                    }
                    else {
                        console.log(chalk.redBright("Please Enter A Correct Amount!"));
                    }
                }
                break;
            }
            else {
                console.log(chalk.redBright("Invalid PIN or ID! Please Try Again:"));
            }
        }
        break;
    }
    else {
        console.log(chalk.redBright("Kindly fill all fields !!"));
    }
}
