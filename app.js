'use strict';

const inquirer = require('inquirer');
const logo = require('asciiart-logo');
const prompts = require('./prompts');
const db = require('./db');
require('console.table');

async function viewallTitles() {
    const titles = await db.viewallTitles();

    console.log('\n');
    console.table(titles);

    mainPrompt();
}


async function mainPrompt() {
    const { choice } = await inquirer.prompt(prompts.mainPrompt);

    switch (choice) {

    }
}