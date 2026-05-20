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

function colocarVetor(titulo, autor, genero, idUsuario) {
    
    var instrucaoSql = `
        SELECT l.titulo, l.autor, g.nome, fk_usuario FROM livro_desejo l
        join genero g on l.fk_genero = g.id_genero;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    return database.executar(instrucaoSql);

    function colocarVetor(idUsuario) {

    var instrucaoSql = `
        SELECT l.titulo, l.autor, g.nome
        FROM livro_desejo l
        JOIN genero g ON l.fk_genero = g.id_genero
        WHERE fk_usuario = ${idUsuario};
    `;

    console.log(instrucaoSql);

    return database.executar(instrucaoSql);
}
}

function filtrarDesejo(genero, pesquisa, autorFiltro, idUsuario) {

    var instrucaoSql = `
        SELECT l.titulo, l.autor, g.nome
        FROM livro_desejo l
        JOIN genero g ON l.fk_genero = g.id_genero
        WHERE fk_usuario = ${idUsuario}
    `;

    if (genero != '') {
        instrucaoSql += ` AND g.id_genero = ${genero}`;
    }

    if (pesquisa != '') {
        instrucaoSql += ` AND l.titulo LIKE '%${pesquisa}%'`;
    }

    if (autorFiltro != '') {
        instrucaoSql += ` AND l.autor LIKE '%${autorFiltro}%'`;
    }

    instrucaoSql += ` ORDER BY l.titulo`;

    console.log(instrucaoSql);

    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrarLivroDesejo,
    apagarLivroDesejo,
    colocarVetor,
    filtrarDesejo
};

