var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/controllerUsuario");

router.get("/", (req, res) => {
  usuarioController.testar(req, res);
});

router.get("/listar", (req, res) => {
  usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", (req, res) => {
  usuarioController.cadastrar(req, res);
})

router.post("/autenticar", (req, res) => {
  usuarioController.entrar(req, res);
});

router.post('/dadosUsuario', (req, res) => {
  usuarioController.fetchDados(req, res)
})
module.exports = router;