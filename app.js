'use strict';

const inquirer = require('inquirer');
const logo = require('asciiart-logo');
const prompts = require('./prompts');
const db = require('./db');
require('console.table');

async function viewallRoles() {
    const roles = await db.viewallRoles();

    console.log('\n');
    console.table(roles);

    mainPrompt();
}


async function mainPrompt() {
    const { choice } = await inquirer.prompt(prompts.mainPrompt);

    switch (choice) {

    }
}