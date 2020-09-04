'use strict';

const connection = require('./connection');



class DB {
    constructor(connection) {
        this.connection = connection;
    }

    viewAllTitles() {
        return this.connection.query(
            `
        SELECT
            roles.role_id,
            roles.title AS Role,
            roles.salary AS Salary,
            departments.name AS Department
        FROM
            roles
        LEFT JOIN
            departments ON roles.department_id = departments.department_id
        ORDER BY
            roles.role_id;
            ` 
        );
    }
}

module.exports = new DB(connection)