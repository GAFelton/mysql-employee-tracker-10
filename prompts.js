// const {firstName, lastName, roleID, managerID} = require('./sandbox');

// var firstName1 = firstName;
// var lastName1 = lastName;
// var roleID1 = roleID;
// var managerID1 = managerID;


module.exports = {
    mainPrompt: [{
        type: "list",
        name: "mainPrompt",
        message: "Select the action you'd like to perform:",
        choices: ["View All Employees", "View All Roles", "View All Departments", "Add New Department", "Add New Role", "Add New Employee", "Update Employee", "Remove Employee", "Exit"]
    }],

    addDepartment: [{
        type: "input",
        name: "name",
        message: "Title of new Department:"
    }],

    addRole: [{
        type: "input",
        name: "title",
        message: "Title of new role:"
    },
    {
        type: "number",
        name: "salary",
        message: "Salary:",
        validate: function (value) {
            var valid = !isNaN(parseFloat(value));
            return valid || 'Please enter a number';
          },
          filter: Number,
    },
    {
        type: "number",
        name: "department_id",
        message: "Department ID:",
        validate: function (value) {
            var valid = !isNaN(parseFloat(value));
            return valid || 'Please enter a number';
          },
          filter: Number,
    }
    ],

    addEmployee: [{
        type: "input",
        name: "first_name",
        message: "Employee's First Name:"
    },
    {
        type: "input",
        name: "last_name",
        message: "Employee's Last Name:"
    },
    {
        type: "number",
        name: "role_id",
        message: "Employee's Role ID:",
        validate: function (value) {
            var valid = !isNaN(parseFloat(value));
            return valid || 'Please enter a number';
          },
          filter: Number,
    },
    {
        type: "number",
        name: "manager_id",
        message: "Employee's Manager's ID:",
        validate: function (value) {
            var valid = !isNaN(parseFloat(value));
            return valid || 'Please enter a number';
          },
          filter: Number,
    }
    ],

    selectEmployee_askID: [{
        type: "number",
        name: "id",
        message: "What is the id number of the employee you would like to select?",
        validate: function (value) {
            var valid = !isNaN(parseFloat(value));
            return valid || 'Please enter a number';
          },
          filter: Number,
    }],

    updateEmployee_function: function(firstName, lastName, roleID, managerID) {
        return [
            {
                type: "input",
                name: "first_name",
                default: firstName,
                message: "Employee's First Name:"
            },
            {
                type: "input",
                name: "last_name",
                default: lastName,
                message: "Employee's Last Name:"
            },
            {
                type: "number",
                name: "role_id",
                default: roleID,
                message: "Employee's Role ID:",
                validate: function (value) {
                    var valid = !isNaN(parseFloat(value));
                    return valid || 'Please enter a number';
                  },
                  filter: Number,
            },
            {
                type: "number",
                name: "manager_id",
                default: managerID,
                message: "Employee's Manager's ID:",
                validate: function (value) {
                    var valid = !isNaN(parseFloat(value));
                    return valid || 'Please enter a number';
                  },
                  filter: Number,
            }
        ]
    },

    deleteEmployee: [{
        type: "confirm",
        name: "confirmDelete",
        message: "Are you sure you would like to permanently delete this record? \n (There is no way to undo this.)",
        default: "n"
    }]

}