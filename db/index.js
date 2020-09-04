'use strict';

const connection = require('./connection');



class DB {
    constructor(connection) {
        this.connection = connection;
    }

    // GET METHODS
    viewAllDepts() {
        return this.connection.query(
            `
            SELECT
                departments.id,
                departments.name AS Department
            FROM
                departments
            ORDER BY
                departments.id;
            `
        );
    };

    viewAllRoles() {
        return this.connection.query(
            `
        SELECT
            roles.id,
            roles.title AS Role,
            roles.salary AS Salary,
            departments.name AS Department
        FROM
            roles
        LEFT JOIN
            departments ON roles.department_id = departments.id
        ORDER BY
            roles.id;
            ` 
        );
    };
   
    viewAllEmployees() {
        return this.connection.query(
            `
            SELECT
                employees.id AS ID,
                employees.first_name AS First_Name,
                employees.last_name AS Last_Name,
                roles.title AS Role,
                employees.manager_id AS Manager_ID
            FROM
                employees
            LEFT JOIN
                roles ON employees.role_id = roles.id
            ORDER BY
                employees.id;
            `
        );
    };



    // POST METHODS
    addDepartment() {
        return this.connection.query(
            `
            `
        );
    };

    addRole() {
        return this.connection.query(
            `
            `
        );
    };

    addEmployee() {
        return this.connection.query(
            `
            `
        );
    };


    // PUT METHOD
    updateEmployee() {
        return this.connection.query(
            `
            `
        );
    };
}

module.exports = new DB(connection)