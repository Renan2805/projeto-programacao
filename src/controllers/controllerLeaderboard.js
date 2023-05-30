const modelLeaderboard = require('../models/modelLeaderboard')

function listar(req, res) {
  var ordem = req.query.ordem
  var quiz = req.query.quiz

  modelLeaderboard.listar(quiz, ordem).then(result => {
    res.json(result)
  })
}

module.exports = {
  listar
}