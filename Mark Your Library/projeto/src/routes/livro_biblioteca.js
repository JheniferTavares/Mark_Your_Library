var express = require("express");
var router = express.Router();

var livro_bibliotecaController = require("../controllers/livro_bibliotecaController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrarLivroBiblioteca", function (req, res) {
    livro_bibliotecaController.cadastrarLivroBiblioteca(req, res);
})


router.delete("/apagarLivroBiblioteca", function (req, res) {
    livro_bibliotecaController.apagarLivroBiblioteca(req, res);
});

router.get("/cadastrarLivroBiblioteca", function (req, res) {
    livro_bibliotecaController.cadastrarLivroBiblioteca(req, res);
});

module.exports = router;