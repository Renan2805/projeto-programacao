const database = require('../database/config')

function listar(quiz, ordem) {
  var instrucao = `
    SELECT nomeUsuario, tempo, pontuacao FROM tentativa 
      JOIN quiz ON idQuiz = fkQuiz JOIN usuario ON idUsuario = fkUsuario 
        WHERE idQuiz = ${quiz} ORDER BY ${ordem} ${ordem == 'tempo' ? 'ASC' : 'DESC'}, ${ordem == 'tempo' ? 'pontuacao' : 'tempo'} ${ordem == 'tempo' ? 'DESC' : 'ASC'} LIMIT 10;`
  return database.executar(instrucao)
}

module.exports = {
  listar
}