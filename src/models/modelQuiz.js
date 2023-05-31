const database = require('../database/config')

function getQuizes() {
  var instrucao = `SELECT * FROM quiz;`
  return database.executar(instrucao)
}

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

function inserirTentativa(pontuacao, tempo, idQuiz, idUsuario) {
  var instrucao = `INSERT INTO tentativa (pontuacao, tempo, fkQuiz, fkUsuario) VALUES (${pontuacao}, ${tempo}, ${idQuiz}, ${idUsuario});`
  return database.executar(instrucao)
}

module.exports = {
  getQuizes,
  getQuiz,
  getQuestoes,
  getAlternativas,
  inserirTentativa
}