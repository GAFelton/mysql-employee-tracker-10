CREATE DATABASE employee_DB;

USE employee_DB;

CREATE TABLE departments(
  department_id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30),
  PRIMARY KEY (department_id)
);

CREATE TABLE roles(
  role_id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL,
  department_id INT,
   FOREIGN KEY [department_id](department_id)
    REFERENCES department(department_id),
  PRIMARY KEY (role_id)
);

CREATE TABLE employees(
  employee_id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id INT,
  FOREIGN KEY [role_id](role_id)
    REFERENCES roles(role_id),
  FOREIGN KEY [manager_id](employee_id)
    REFERENCES employee(employee_id),
  PRIMARY KEY (employee_id)
);


