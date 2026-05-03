-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE my_library;
USE my_library;

CREATE TABLE usuario(
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(70) UNIQUE NOT NULL,
    senha VARCHAR(30) NOT NULL
);

CREATE TABLE genero (
    id_genero INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50)
) AUTO_INCREMENT = 100;

INSERT INTO genero (nome) VALUES
	('Romance'),
	('Fantasia'),
	('Ficção Científica'),
	('Suspense'),
	('Aventura'),
	('Crônica'),
	('Poesia'),
	('Infantil'),
	('Terror');

CREATE TABLE livro_biblioteca (
    id_livro_biblioteca INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(50) NOT NULL,
    autor VARCHAR(50),
    status VARCHAR(20),
    CONSTRAINT chk_status 
        CHECK (status IN ('quero_ler', 'lendo', 'lido')),
    fk_genero INT,
    fk_usuario INT,
    FOREIGN KEY (fk_genero)
		REFERENCES genero(id_genero),
    FOREIGN KEY (fk_usuario)
		REFERENCES usuario(id_usuario)
) AUTO_INCREMENT = 1000;

CREATE TABLE livro_desejo (
    id_livro_desejo INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(50) NOT NULL,
    autor VARCHAR(50),
    fk_genero INT,
    fk_usuario INT,
    FOREIGN KEY (fk_genero)
		REFERENCES genero(id_genero),
    FOREIGN KEY (fk_usuario)
		REFERENCES usuario(id_usuario)
) AUTO_INCREMENT = 1000;