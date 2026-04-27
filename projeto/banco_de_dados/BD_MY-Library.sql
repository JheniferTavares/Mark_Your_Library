CREATE DATABASE MY_Library;
USE MY_Library;

CREATE TABLE usuario(
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    senha VARCHAR(100)
);

CREATE TABLE genero (
    id_genero INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50)
);

CREATE TABLE livro (
    id_livro INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100),
    autor VARCHAR(100),
    status VARCHAR(20),
    fk_genero INT,
    fk_usuario INT,
    
    CONSTRAINT chk_status 
        CHECK (status IN ('quero_ler', 'lendo', 'lido')),
    FOREIGN KEY (fk_genero)
		REFERENCES genero(id_genero),
    FOREIGN KEY (fk_usuario)
		REFERENCES usuario(id_usuario)
);