CREATE DATABASE IF NOT EXISTS task_management_system;
USE task_management_system;
CREATE TABLE IF NOT EXISTS project(
    projectId VARCHAR(45) PRIMARY KEY,
    projectName VARCHAR(45)
);