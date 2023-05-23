var express = require("express");
var router = express.Router();

var analytcsController = require("../controllers/controllerAnalytcs");

router.get("/qtdNotas/:idUsuario", (req, res) => {
  analytcsController.qtdNotas(req, res)
});

module.exports = router