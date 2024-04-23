CREATE DATABASE IF NOT EXISTS companydb;


USE companydb;

CREATE TABLE employees (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE employees;

INSERT INTO employees VALUES 
    (1, 'Joe' , 1000),
    (2, 'Henry' , 1000),
    (3, 'Cuden' , 1500),
    (4, 'Sam' , 2000),
    (5, 'Max' , 2500),