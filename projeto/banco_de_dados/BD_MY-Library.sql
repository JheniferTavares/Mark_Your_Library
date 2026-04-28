CREATE DATABASE MY_Library;
USE MY_Library;

CREATE TABLE usuario(
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    cpf CHAR(11) UNIQUE NOT NULL,
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

CREATE TABLE livro (
    id_livro INT PRIMARY KEY AUTO_INCREMENT,
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