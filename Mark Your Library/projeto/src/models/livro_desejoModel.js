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

function filtrarDesejo(genero, idUsuario) {

    if (`${genero_filtro_desejo}` == "") {

        var instrucaoSql = `
            SELECT * FROM livro_desejo WHERE fk_genero = ${genero_filtro_desejo}`

    } else {

        var instrucaoSql = `
            SELECT * FROM livro_desejo WHERE id = ${genero_filtro_desejo} AND fk_usuario = ${idUsuario};
        `;
    }

    console.log("Executando SQL: \n" + instrucaoSql);

    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrarLivroDesejo,
    apagarLivroDesejo,
    filtrarDesejo
};

