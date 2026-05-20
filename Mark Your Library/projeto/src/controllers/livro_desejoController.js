var livro_desejoModel = require("../models/livro_desejoModel");

function cadastrarLivroDesejo(req, res) {
    var titulo = req.body.tituloServer;
    var autor = req.body.autorServer;
    var genero = req.body.generoServer;
    var idUsuario = req.body.idUsuarioServer;

    // Validações dos valores
    if (titulo == undefined) {
        res.status(400).send("Título indefinido!");
    } else if (autor == undefined) {
        res.status(400).send("Autor indefinido!");
    } else if (genero == undefined) {
        res.status(400).send("Gênero indefinido!");
    } else if (idUsuario == undefined) {
        res.status(400).send("Usuário indefinido!");
    } else {

        livro_desejoModel.cadastrarLivroDesejo(titulo, autor, genero, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function apagarLivroDesejo(req, res) {
    var titulo = req.body.tituloServer;
    var autor = req.body.autorServer;
    var idUsuario = req.body.idUsuarioServer;

        if (titulo == undefined) {
        res.status(400).send("Título indefinido!");
    } else if (autor == undefined) {
        res.status(400).send("Autor indefinido!");
    } else if (idUsuario == undefined) {
        res.status(400).send("Usuário indefinido!");
    } else {

        livro_desejoModel.apagarLivroDesejo(titulo, autor, idUsuario)
            .then(function (resultado) {
                res.json(resultado);
            }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao apagar! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function colocarVetor(req, res) {
        livro_desejoModel.colocarVetor()
            .then(
                function (resultado) {
                    (dados => [{
                        "titulo": titulo,
                        "autor": autor,
                        "genero": nome
                    }])

                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar a inserção! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
}

function filtrarDesejo(req, res) {
    var pesquisa = req.body.pesquisaServer;
    var autorFiltro = req.body.autorFiltroServer;   
    var genero = req.body.generoServer;
    var idUsuario = req.body.idUsuarioServer;

    // Validações dos valores
    if (pesquisa == undefined) {
        res.status(400).send("Pesquisa de titulo indefinida!");
    } else if (autorFiltro == undefined) {
        res.status(400).send("Pesquisa de autor indefinida!");
    } else if (genero == undefined) {
        res.status(400).send("Gênero indefinido!");
    } else if (idUsuario == undefined) {
        res.status(400).send("Usuário indefinido!");
    } else {

        livro_desejoModel.filtrarDesejo(genero, pesquisa, autorFiltro, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao filtrar livro! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrarLivroDesejo,
    apagarLivroDesejo,
    colocarVetor,
    filtrarDesejo
};