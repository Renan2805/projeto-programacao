var mysql = require("mysql2");
var sql = require('mssql');

// CONEXÃO DO SQL SERVER - AZURE (NUVEM)
var sqlServerConfig = {
  server: "localhost",
  database: "SEU_BANCO_DE_DADOS",
  user: "SEU_USUARIO",
  password: "SUA_SENHA",
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true, // for azure
  }
}

// CONEXÃO DO MYSQL WORKBENCH (LOCAL)
var mySqlConfig = {
  host: "localhost",
  database: "projeto_programacao",
  user: "root",
  password: "",
};

function executar(instrucao) {
  // VERIFICA A VARIÁVEL DE AMBIENTE SETADA EM app.js
  if (process.env.AMBIENTE_PROCESSO == "producao") {
    return new Promise((resolve, reject) => {
      sql.connect(sqlServerConfig).then(() => {
        return sql.query(instrucao);
      }).then((resultados) => {
        console.log(resultados);
        resolve(resultados.recordset);
      }).catch((erro) => {
        reject(erro);
        console.log('ERRO: ', erro);
      });
      sql.on('error', (erro) => {
        return ("ERRO NO SQL SERVER (Azure): ", erro);
      });
    });
  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    return new Promise((resolve, reject) => {
      var conexao = mysql.createConnection(mySqlConfig);
      conexao.connect();
      conexao.query(instrucao, (erro, resultados) => {
        conexao.end();
        if (erro) {
          reject(erro);
        }
        resolve(resultados);
      });
      conexao.on('error', (erro) => {
        return ("ERRO NO MySQL WORKBENCH (Local): ", erro.sqlMessage);
      });
    });
  } else {
    return new Promise((resolve, reject) => {
      console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
      reject("AMBIENTE NÃO CONFIGURADO EM app.js")
    });
  }
}

module.exports = {
  executar
}