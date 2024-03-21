CREATE DATABASE IF NOT EXISTS task_management_system;
USE task_management_system;
CREATE TABLE IF NOT EXISTS project(
    projectId VARCHAR(45) PRIMARY KEY,
    projectName VARCHAR(45)
);
CREATE TABLE IF NOT EXISTS task(
    taskId VARCHAR(45) PRIMARY KEY,
    taskName VARCHAR(45)
);
CREATE TABLE IF NOT EXISTS employee(
    employeeId VARCHAR(45) PRIMARY KEY,
    employeeName VARCHAR(45),
    employeeRole VARCHAR(45)
);