var express = require("express");
var router = express.Router();

var livro_desejoController = require("../controllers/livro_desejoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrarLivroDesejo", function (req, res) {
    livro_desejoController.cadastrarLivroDesejo(req, res);
})


router.delete("/apagarLivroDesejo", function (req, res) {
    livro_desejoController.apagarLivroDesejo(req, res);
});

module.exports = router;