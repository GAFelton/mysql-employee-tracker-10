'use strict';

const inquirer = require('inquirer');
const logo = require('asciiart-logo');
const prompts = require('./prompts');
const db = require('./db');
require('console.table');


//Exit Method for MainPrompt
function exit() {
    db.end();
    process.on('exit', function(code) {
        return console.log(`About to exit with code ${code}`);
    });
    process.exit();
}

//READ FUNCTIONS
async function viewAllDepts() {
    const depts = await db.viewAllDepts();

    console.log('\n');
    console.table(depts);

    mainPrompt();
}

async function viewAllRoles() {
    const roles = await db.viewAllRoles();

    console.log('\n');
    console.table(roles);

    mainPrompt();
}

async function viewAllEmployees() {
    const employees = await db.viewAllEmployees();

    console.log('\n');
    console.table(employees);

    mainPrompt();
}

//POST FUNCTIONS

async function addDepartment() {
    const { name } = await inquirer.prompt(prompts.addDepartment);
    const newDept = await db.addDepartment(name);

    console.log('\n');
    console.log(`New Department called ${name} added.`);
    mainPrompt();
}


async function addEmployee() {
    const { firstName, lastName, roleID, managerID } = await inquirer.prompt(prompts.addEmployee);
    console.log(firstName, lastName, roleID, managerID);
    // const newEmployee = await db.addEmployee();

    // console.log('\n');
    // console.table(newEmployee);

    mainPrompt();
}


async function mainPrompt() {
    const { mainPrompt } = await inquirer.prompt(prompts.mainPrompt);

    switch (mainPrompt) {
        case "View All Departments":
            viewAllDepts();
            break;
        case "View All Roles":
            viewAllRoles();
            break;
        case "View All Employees":
            viewAllEmployees();
            break;
        case "Add New Department":
            addDepartment();
            break;
        case "Add New Employee":
            addEmployee();
            break;
        case "Exit":
            exit();
            break;
    }
    
}

mainPrompt();