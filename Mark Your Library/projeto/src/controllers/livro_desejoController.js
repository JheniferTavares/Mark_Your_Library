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

module.exports = {
    cadastrarLivroDesejo,
    apagarLivroDesejo
};