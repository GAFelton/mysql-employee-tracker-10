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

async function addRole() {
    const { title, salary, department_id } = await inquirer.prompt(prompts.addRole);
    const newRole = await db.addRole(title, salary, department_id);

    console.log('\n');
    console.log(
        `New Role added:
        Title: ${title}
        Salary: ${salary}
        Department_ID: ${department_id}
        `
    );
    mainPrompt();
}

async function addEmployee() {
    const { first_name, last_name, role_id, manager_id } = await inquirer.prompt(prompts.addEmployee);
    const newEmployee = await db.addEmployee(first_name, last_name, role_id, manager_id);

    console.log('\n');
    console.log(
        `New Role added:
        First Name: ${first_name}
        Last Name: ${last_name}
        Role_ID: ${role_id}
        Manager_ID: ${manager_id}
        `
    );

    mainPrompt();
}

async function updateEmployee() {
    const {id} = await inquirer.prompt(prompts.selectEmployee_askID);
    const selectedEmployee = await db.viewEmployee(id);
    console.log('\n');
    console.table(selectedEmployee);
    
    const {firstName, lastName, roleID, managerID} = selectedEmployee[0];
    const updateEmployee_details = prompts.updateEmployee_function(firstName, lastName, roleID, managerID);
    
    const { first_name, last_name, role_id, manager_id } = await inquirer.prompt(updateEmployee_details);
console.log(first_name, last_name, role_id, manager_id);
    const updatedEmployee = await db.updateEmployee(id, first_name, last_name, role_id, manager_id);
    const newSelectedEmployee = await db.viewEmployee(id);

    console.log('\n');
    console.log(`Employee ${id} Updated! New record:`);
    console.table(newSelectedEmployee);

    mainPrompt();
}

async function deleteEmployee() {
    const {id} = await inquirer.prompt(prompts.selectEmployee_askID);
    const selectedEmployee = await db.viewEmployee(id);
    console.log('\n');
    console.table(selectedEmployee);

    const confirmDelete = await inquirer.prompt(prompts.deleteEmployee);
    if (confirmDelete) {
        const deleted = await db.deleteEmployee(id);
        console.log(`Employee record has been permanently deleted.`)
    }
    else if (!confirmDelete) {
        console.log(`Employee record not deleted.`)
    }
    mainPrompt();
    
}

async function viewEmployeeByManager() {
    const {manager_id} = await inquirer.prompt(prompts.viewEmployeesByManager);
    const employeesByManager = await db.viewEmployeesByManager(manager_id);
    console.log('\n');
    console.table(employeesByManager);

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
        case "Add New Role":
            addRole();
            break;
        case "Add New Employee":
            addEmployee();
            break;
        case "Update Employee":
            updateEmployee();
            break;
        case "Remove Employee":
            deleteEmployee();
            break;
        case "View Employees by Manager":
            viewEmployeeByManager();
            break;
        case "Exit":
            exit();
            break;
    }
    
}

mainPrompt();