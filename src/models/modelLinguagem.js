const database = require('../database/config')

function linguagensUsuario(idUsuario) {
  var instrucao = `
    SELECT idLinguagem, nome, tipo FROM linguagem l
      JOIN linguagemUsuario lu ON l.idLinguagem = lu.fkLinguagem 
        WHERE lu.fkUsuario = ${idUsuario};  
  `
  return database.executar(instrucao)
}

function desfavoritar(idUsuario, idLinguaagem) {
  var instrucao = `
    DELETE FROM linguagemUsuario WHERE fkUsuario = ${idUsuario} AND fkLinguagem = ${idLinguaagem}
  `
  return database.executar(instrucao)
}

function favoritar(idUsuario, idLinguagem) {
  var instrucao = `
    INSERT INTO linguagemUsuario VALUES (${idUsuario}, ${idLinguagem});
  ` 
  return database.executar(instrucao)
}

function linguagensFavoritas() {
  var instrucao = 'select l.nome label, count(lu.fkLinguagem) as dado from linguagem l join linguagemUsuario lu on idLinguagem = fkLinguagem group by l.nome order by dado desc;'
  return database.executar(instrucao)
}

module.exports = {
  linguagensUsuario,
  desfavoritar,
  favoritar,
  linguagensFavoritas
}