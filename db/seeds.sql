                    -- Seed data for Employee Database --
-- Department --
INSERT INTO department(name) VALUES("Finance");
INSERT INTO department(name) VALUES("Engineering");
INSERT INTO department(name) VALUES("Sales");
INSERT INTO department(name) VALUES("Human Resources");
INSERT INTO department(name) VALUES("Legal");
INSERT INTO department(name) VALUES("Marketing");



-- Roles --
INSERT INTO role(title, salary) VALUES("Manager",250000.00 );
INSERT INTO role(title, salary) VALUES("Account Manager",135000.00 );
INSERT INTO role(title, salary) VALUES("Recruiter",135000.00 );
INSERT INTO role(title, salary) VALUES("Training",140000.00 );
INSERT INTO role(title, salary) VALUES("Product Manager",165000.00 );
INSERT INTO role(title, salary) VALUES("Lead Engineer",180000.00 );
INSERT INTO role(title, salary) VALUES("Software Engineer",135000.00 );
INSERT INTO role(title, salary) VALUES("Junior Developer",90000.00 );
INSERT INTO role(title, salary) VALUES("Mergers and Acquisitions",160000.00 );
INSERT INTO role(title, salary) VALUES("Marketing Generalist",120000.00 );
INSERT INTO role(title, salary) VALUES("Customer Support",80000.00 );
INSERT INTO role(title, salary) VALUES("Intern",45000.00 );









INSERT INTO employee(first_name ,last_name, role_id, manager_id) VALUES ("Patrick", "Bateman","Mergers and Acquisitions", 1390, NULL );
INSERT INTO employee(first_name ,last_name, role_id, manager_id) VALUES ("Paul", "Allen","Account Manager", 1290, NULL );
INSERT INTO employee(first_name ,last_name, role_id, manager_id) VALUES ("James", "Conway","Manager", 1290, NULL );
INSERT INTO employee(first_name ,last_name, role_id, manager_id) VALUES ("Armand", "Goldman","Manager", 1290, NULL );
INSERT INTO employee(first_name ,last_name, role_id, manager_id) VALUES ("Henry", "Hill","Manager", 1290, NULL );
INSERT INTO employee(first_name ,last_name, role_id, manager_id) VALUES ("Tommy", "Devito","Account Manager", 1290, NULL );
INSERT INTO employee(first_name ,last_name, role_id, manager_id) VALUES ("Tony", "Montana","Training", 1290, NULL );
INSERT INTO employee(first_name ,last_name, role_id, manager_id) VALUES ("Elliot", "Alderson","Security Engineer", 1290, NULL );
INSERT INTO employee(first_name ,last_name, role_id, manager_id) VALUES ("Kate", "Libby","Lead Engineer", 1290, NULL );
INSERT INTO employee(first_name ,last_name, role_id, manager_id) VALUES ("Stanley", "Jobson","Software Engineer", 1290, NULL );
INSERT INTO employee(first_name ,last_name, role_id, manager_id) VALUES ("Futaba", "Sakura","Software Engineer", 1290, NULL );
INSERT INTO employee(first_name ,last_name, role_id, manager_id) VALUES ("Earl", "Stevens"," Sales Director", 1290, NULL );
INSERT INTO employee(first_name ,last_name, role_id, manager_id) VALUES ("Carlton", "Banks"," Intern", 1290, NULL );
INSERT INTO employee(first_name ,last_name, role_id, manager_id) VALUES ("Agador", "Sparticus"," Intern ", 1290, NULL );


