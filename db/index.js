'use strict';

const connection = require('./connection');

//module.exports = new DB(connection)

class DB {
    constructor(connection) {
        this.connection = connection;
    }

    viewAllTitles() {
        return this.connection.query(
            `
        SELECT
            title.id,
            title.name AS Title,
            title.salary AS Salary,
            org.name AS Org
        FROM
            title
        LEFT JOIN
            org ON title.org_id = ord.id
        ORDER BY
            title.id;
            `
        );
    }
}