const modelQuiz = require('../models/modelQuiz')

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

module.exports = {
  getQuiz,
  getQuestoes,
  getAlternativas
}