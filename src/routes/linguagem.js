var express = require("express");
var router = express.Router();


const controllerLinguagem = require('../controllers/controllerLinguagem')

router.get('/favoritas/:idUsuario', (req, res) => {
  controllerLinguagem.linguagemUsuario(req, res)
})

router.delete('/desfavoritar', (req, res) => {
  controllerLinguagem.desfavoritar(req, res)
})

router.post('/favoritar', (req, res) => {
  controllerLinguagem.favoritar(req, res)
})

module.exports = router