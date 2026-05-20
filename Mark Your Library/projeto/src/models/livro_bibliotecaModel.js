var database = require("../database/config");

function cadastrarLivroBiblioteca(titulo, autor, genero, status, idUsuario) {

    var instrucaoSql = `
        INSERT INTO livro_biblioteca (titulo, autor, status, fk_genero, fk_usuario) VALUES ('${titulo}', '${autor}', '${status}', ${genero}, ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    return database.executar(instrucaoSql);
}

function colocarVetor(titulo, autor, genero, status, idUsuario) {
    
    var instrucaoSql = `
        SELECT l.titulo, l.autor, g.nome, l.status, fk_usuario FROM livro_biblioteca l
        join genero g on l.fk_genero = g.id_genero;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    return database.executar(instrucaoSql);

    function colocarVetor(idUsuario) {

    var instrucaoSql = `
        SELECT l.titulo, l.autor, g.nome, l.status
        FROM livro_biblioteca l
        JOIN genero g ON l.fk_genero = g.id_genero
        WHERE fk_usuario = ${idUsuario};
    `;

    console.log(instrucaoSql);

    return database.executar(instrucaoSql);
}
}

function filtrarBiblioteca(genero, status, pesquisa, autorFiltro, idUsuario) {

    var instrucaoSql = `
        SELECT l.titulo, l.autor, g.nome, l.status
        FROM livro_biblioteca l
        JOIN genero g ON l.fk_genero = g.id_genero
        WHERE fk_usuario = ${idUsuario}
    `;

    if (genero != '') {
        instrucaoSql += ` AND g.id_genero = ${genero}`;
    }

    if (status != '') {
        instrucaoSql += ` AND l.status = '${status}'`;
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

function apagarLivroBiblioteca(titulo, autor, idUsuario) {

    var instrucaoSql = `
        DELETE FROM livro_biblioteca
        WHERE titulo = '${titulo}'
        AND autor = '${autor}'
        AND fk_usuario = ${idUsuario};
    `;

    console.log("Executando SQL: \n" + instrucaoSql);

    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrarLivroBiblioteca,
    colocarVetor,
    filtrarBiblioteca,
    apagarLivroBiblioteca
};

