USE employee_db;

INSERT INTO departments (name)
VALUES ("engineering"), ("product"), ("design"), ("sales"), ("marketing");


INSERT INTO roles (title, salary, department_id)
VALUES ("Software Engineer", 60000, 1),
        ("Web Developer", 55000, 1),
        ("Technical Lead", 70000, 1),
        ("Product Manager", 70000, 2),
        ("Associate Product Manager", 60000, 2),
        ("UX Designer", 58000, 3),
        ("Design Lead", 68000, 3),
        ("Acccount Executive", 50000, 4),
        ("Product Marketing Manager", 55000, 5)
        ;

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
        ("Roger", "Barton", 3, null),
        ("Yousef", "Rubenstein", 4, null),
        ("Ambros", "Pantopolos", 7, null),
        ("Burt", "Rayman", 8, null),
        ("Angelina", "Cruz", 9, null),
        ("Joe", "Smith", 1, 1),
        ("Betty", "Comstock", 2, 1),
        ("Amy", "Cortez", 2, 1),
        ("Carly", "Rupert", 5, 2),
        ("Genevieve", "LaMont", 6, 3)
;
