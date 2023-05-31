const modelQuiz = require('../models/modelQuiz')

function getQuizes(req, res) {
  const id = req.params.id;
  modelQuiz.getQuizes(id).then(result => res.json(result))
}

function getQuiz(req, res) {
  const id = req.params.id;
  modelQuiz.getQuiz(id).then(result => res.json(result))
}

function getQuestoes(req, res) {
  const id = req.params.id;
  modelQuiz.getQuestoes(id).then(result => res.json(result))
}

function getAlternativas(req, res) {
  const id = req.params.id;
  modelQuiz.getAlternativas(id).then(result => res.json(result))
}

function inserirTentativa(req, res) {
  const pontuacao = req.body.pontuacao
  const tempo = req.body.tempo
  const idQuiz = req.body.idQuiz
  const idUsuario = req.body.idUsuario

  modelQuiz.inserirTentativa(pontuacao, tempo, idQuiz, idUsuario).then(result => {
    res.json(result)
  })
}

module.exports = {
  getQuizes,
  getQuiz,
  getQuestoes,
  getAlternativas,
  inserirTentativa
}