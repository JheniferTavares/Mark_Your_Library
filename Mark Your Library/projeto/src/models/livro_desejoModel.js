var database = require("../database/config");

function cadastrarLivroDesejo(titulo, autor, genero, idUsuario) {

    var instrucaoSql = `
        INSERT INTO livro_desejo (titulo, autor, fk_genero, fk_usuario) VALUES ('${titulo}', '${autor}', ${genero}, ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    return database.executar(instrucaoSql);
}

function apagarLivroDesejo(titulo, autor, idUsuario) {

    var instrucaoSql = `
        DELETE FROM livro_desejo WHERE titulo = '${titulo}' AND autor = '${autor}' AND fk_usuario = ${idUsuario};
    `;

    console.log("Executando SQL: \n" + instrucaoSql);

    return database.executar(instrucaoSql);
}

function cadastrarLivroDesejo(titulo, autor, genero, idUsuario) {

    var instrucaoSql = `
        SELECT titulo AS '${titulo}', autor AS '${autor}', fk_genero AS '${genero}', fk_usuario AS '${idUsuario}' FROM livro_desejo;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrarLivroDesejo,
    apagarLivroDesejo
};

