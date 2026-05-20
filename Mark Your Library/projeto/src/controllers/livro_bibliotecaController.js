var livro_bibliotecaModel = require("../models/livro_bibliotecaModel");

function cadastrarLivroBiblioteca(req, res) {
    var titulo = req.body.tituloServer;
    var autor = req.body.autorServer;
    var genero = req.body.generoServer;
    var status = req.body.statusServer;
    var idUsuario = req.body.idUsuarioServer;

    // Validações dos valores
    if (titulo == undefined) {
        res.status(400).send("Título indefinido!");
    } else if (autor == undefined) {
        res.status(400).send("Autor indefinido!");
    } else if (genero == undefined) {
        res.status(400).send("Gênero indefinido!");
    } else if (status == undefined) {
        res.status(400).send("Status indefinido!");
    } else if (idUsuario == undefined) {
        res.status(400).send("Usuário indefinido!");
    } else {

        livro_bibliotecaModel.cadastrarLivroBiblioteca(titulo, autor, genero, status, idUsuario)
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

function colocarVetor(req, res) {
        livro_bibliotecaModel.colocarVetor()
            .then(
                function (resultado) {
                    (dados => [{
                        "titulo": titulo,
                        "autor": autor,
                        "genero": nome,
                        "status": status
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

function filtrarBiblioteca(req, res) {
    var genero = req.body.generoServer;
    var status = req.body.statusServer;
    var pesquisa = req.body.pesquisaServer;
    var autorFiltro = req.body.autorFiltroServer;
    var idUsuario = req.body.idUsuarioServer;

    if (genero == undefined) {
        res.status(400).send("Gênero indefinido!");
    } else if (status == undefined) {
        res.status(400).send("Status indefinido!");
    } else if (pesquisa == undefined) {
        res.status(400).send("Pesquisa de titulo indefinida!");
    } else if (autorFiltro == undefined) {
        res.status(400).send("Pesquisa de autor indefinida!");
    } else if (idUsuario == undefined) {
        res.status(400).send("Usuário indefinido!");
    } else {

    livro_bibliotecaModel.filtrarBiblioteca(genero, status, pesquisa, autorFiltro, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o filtro! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function apagarLivroBiblioteca(req, res) {
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

        livro_bibliotecaModel.apagarLivroBiblioteca(titulo, autor, idUsuario)
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
    cadastrarLivroBiblioteca,
    colocarVetor,
    filtrarBiblioteca,
    apagarLivroBiblioteca
};