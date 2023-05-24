var database = require('../database/config')

function qtdNotas(id) {
    var instrucao = `select distinct t1.pontuacao label, (select count(t2.pontuacao) from tentativa t2 where t2.pontuacao = t1.pontuacao and fkUsuario = ${id}) dado from tentativa as t1 where fkUsuario = ${id} ORDER BY t1.pontuacao DESC LIMIT 3;`
    return database.executar(instrucao)
}

module.exports = {
    qtdNotas
}