const database = require('../database/config')

function getQuiz(id) {
  var instrucao = `SELECT * FROM quiz WHERE idQuiz = ${id};`
  return database.executar(instrucao)
}

function getQuestoes(idQuiz) {
  var instrucao = `SELECT * FROM questao WHERE fkQuiz = ${idQuiz};`
  return database.executar(instrucao)
}

function getAlternativas(idQuestao) {
  var instrucao = `SELECT * FROM alternativa WHERE fkQuestao = ${idQuestao};`
  return database.executar(instrucao)
}

module.exports = {
  getQuiz,
  getQuestoes,
  getAlternativas
}