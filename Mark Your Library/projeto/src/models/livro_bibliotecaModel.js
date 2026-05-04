var database = require("../database/config");

function cadastrarLivroBiblioteca(titulo, autor, genero, status, idUsuario) {

    var instrucaoSql = `
        INSERT INTO livro_biblioteca (titulo, autor, status, fk_genero, fk_usuario) VALUES ('${titulo}', '${autor}', '${status}', ${genero}, ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    return database.executar(instrucaoSql);
}

function apagarLivroBiblioteca(titulo, autor, idUsuario) {

    var instrucaoSql = `
        DELETE FROM livro_biblioteca WHERE titulo = '${titulo}' AND autor = '${autor}' AND fk_usuario = ${idUsuario};
    `;

    console.log("Executando SQL: \n" + instrucaoSql);

    return database.executar(instrucaoSql);
}

function cadastrarLivroDesejo(titulo, autor, genero, status, idUsuario) {

    var instrucaoSql = `
        SELECT titulo AS '${titulo}', autor AS '${autor}', status AS '${status}' fk_genero AS '${genero}', fk_usuario AS '${idUsuario}' FROM livro_biblioteca;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrarLivroBiblioteca,
    apagarLivroBiblioteca
};

