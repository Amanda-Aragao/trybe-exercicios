DROP SCHEMA IF EXISTS Scientists;

-- Cria o banco Scientists
CREATE SCHEMA Scientists;
USE Scientists;

-- Cria a tabela Scientists
CREATE TABLE Scientists (
  SSN INT,
  Name CHAR(30) NOT NULL,
  PRIMARY KEY (SSN)
);