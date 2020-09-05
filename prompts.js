module.exports = {
    mainPrompt: [{
        type: "list",
        name: "mainPrompt",
        message: "Select the action you'd like to perform:",
        choices: ["View All Employees", "View All Roles", "View All Departments", "Add New Department", "Add New Employee", "Exit"]
    }],

    addDepartment: [{
        type: "input",
        name: "name",
        message: "Title of new Department:"
    }],

    addEmployee: [{
        type: "input",
        name: "firstName",
        message: "Employee's First Name:"
    },
    {
        type: "input",
        name: "lastName",
        message: "Employee's Last Name:"
    },
    {
        type: "number",
        name: "roleID",
        message: "Employee's Role ID:"
    },
    {
        type: "number",
        name: "managerID",
        message: "Employee's Manager's ID:"
    }
    ],
    

}