var database = require("../database/config")

function listar() {
  console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
  var instrucao = `
        SELECT * FROM usuario;
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function entrar(user, senha) {
  console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", user, senha)
  var instrucao = `
        SELECT idUsuario, nomeUsuario, senha FROM usuario WHERE nomeUsuario = '${user}' AND senha = '${senha}';
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(user, senha) {
  console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", user, senha);

  // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
  //  e na ordem de inserção dos dados.
  var instrucao = `
        INSERT INTO usuario (nomeUsuario, senha) VALUES ('${user}', '${senha}');
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function fetchDados(id) {

  var instrucao = `SELECT * FROM dadosPessoais where fkUsuario = ${id};`

  return database.executar(instrucao)
}

function atualizarUsuario(id, nome, senha) {
  var instrucao = `UPDATE usuario SET nomeUsuario = '${nome}', senha = '${senha}' WHERE idUsuario = ${id};`
  return database.executar(instrucao)
} 

function tentativas(id) {
  var instrucao = `
    SELECT idTentativa, q.nome, pontuacao, tempo FROM tentativa JOIN quiz q ON fkQuiz = idQuiz WHERE fkUsuario = ${id} LIMIT 10;
  `

  return database.executar(instrucao)
}

function finalizar(id, nome, sobrenome) {
  var instrucao = `INSERT INTO dadosPessoais VALUES (1, '${nome}', '${sobrenome}', ${id});`
  return database.executar(instrucao)
}

module.exports = {
  entrar,
  cadastrar,
  listar,
  fetchDados,
  atualizarUsuario,
  tentativas,
  finalizar
};