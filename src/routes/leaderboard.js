var express = require("express");
var router = express.Router();

var controllerLeaderboard = require("../controllers/controllerLeaderboard");

router.get("/", (req, res) => {
  controllerLeaderboard.listar(req, res)
});

module.exports = router