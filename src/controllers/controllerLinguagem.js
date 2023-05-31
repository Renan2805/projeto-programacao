const modelLinguagem = require('../models/modelLinguagem')

function linguagemUsuario(req, res) {
  var id = req.params.idUsuario

  modelLinguagem.linguagensUsuario(id).then(result => res.json(result))
}

function desfavoritar(req, res) {
  var idUser = req.body.idUsuario
  var idLingua = req.body.idLinguagem

  modelLinguagem.desfavoritar(idUser, idLingua).then(result => res.json(result))
}

function favoritar(req, res) {
  var idUser = req.body.idUsuario
  var idLingua = req.body.idLinguagem

  modelLinguagem.favoritar(idUser, idLingua).then(result => res.json(result))
}

module.exports = {
  linguagemUsuario,
  desfavoritar,
  favoritar
}