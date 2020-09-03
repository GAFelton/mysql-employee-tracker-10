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
  CONSTRAINT fk_department
  FOREIGN KEY (department_id)
    REFERENCES departments(department_id)
    ON UPDATE CASCADE
    ON DELETE CASCADE,
  PRIMARY KEY (role_id)
);

CREATE TABLE employees(
  employee_id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id INT,
  CONSTRAINT fk_role
  FOREIGN KEY (role_id)
    REFERENCES roles(role_id)
    ON UPDATE CASCADE
    ON DELETE CASCADE,
  CONSTRAINT fk_employee
  FOREIGN KEY (manager_id)
    REFERENCES employees(employee_id)
    ON UPDATE CASCADE
    ON DELETE CASCADE,
  PRIMARY KEY (employee_id)
);