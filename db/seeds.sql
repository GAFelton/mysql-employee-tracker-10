USE employee_db;

INSERT INTO departments (name)
VALUES 
        ("engineering"), ("product"), ("design"), ("sales"), ("marketing");


INSERT INTO roles (title, salary, department_id)
VALUES 
        ("Software Engineer", 60000, 1),
        ("Web Developer", 55000, 1),
        ("Technical Lead", 70000, 1),
        ("Product Manager", 70000, 2),
        ("Associate Product Manager", 60000, 2),
        ("UX Designer", 58000, 3),
        ("Design Lead", 68000, 3),
        ("Acccount Executive", 50000, 4),
        ("Product Marketing Manager", 55000, 5)
        ;

SET FOREIGN_KEY_CHECKS=0;
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
        ("Yousef", "Rubenstein", 4, 1),
        ("Roger", "Barton", 3, 1),
        ("Joe", "Smith", 1, 2),
        ("Ambros", "Pantopolos", 7, 1),
        ("Burt", "Rayman", 8, 1),
        ("Angelina", "Cruz", 9, 1),
        ("Betty", "Comstock", 2, 2),
        ("Amy", "Cortez", 2, 2),
        ("Carly", "Rupert", 5, 2),
        ("Genevieve", "LaMont", 6, 4)
;
SET FOREIGN_KEY_CHECKS=1;
