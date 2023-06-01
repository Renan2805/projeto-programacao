var usuarioModel = require("../models/modelUsuario");

var sessoes = [];

function testar(req, res) {
  console.log("ENTRAMOS NA usuarioController");
  res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
  usuarioModel.listar()
    .then(function (resultado) {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum resultado encontrado!")
      }
    }).catch(
      function (erro) {
        console.log(erro);
        console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      }
    );
}

function entrar(req, res) {
  var user = req.body.user;
  var senha = req.body.password;

  if (user == undefined) {
    res.status(400).send("Seu user está undefined!");
  } else if (senha == undefined) {
    res.status(400).send("Sua senha está undefined!");
  } else {

    usuarioModel.entrar(user, senha)
      .then(
        function (resultado) {
          console.log(`\nResultados encontrados: ${resultado.length}`);

          if (resultado.length == 1) {
            res.json(resultado[0]);
          } else if (resultado.length == 0) {
            res.status(403).send("Email e/ou senha inválido(s)");
          } else {
            res.status(403).send("Mais de um usuário com o mesmo login e senha!");
          }
        }
      ).catch(
        function (erro) {
          console.log(erro);
          console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
          res.status(500).json(erro.sqlMessage);
        }
      );
  }

}

function cadastrar(req, res) {
  // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
  var user = req.body.user;
  var email = req.body.email;
  var senha = req.body.password;

  // Faça as validações dos valores
  if (user == undefined) {
    res.status(400).send("Seu user está undefined!");
  } else if (email == undefined) {
    res.status(400).send("Seu email está undefined!");
  } else if (senha == undefined) {
    res.status(400).send("Sua senha está undefined!");
  } else {

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    usuarioModel.cadastrar(user, email, senha)
      .then(
        function (resultado) {
          res.json(resultado);
        }
      ).catch(
        function (erro) {
          console.log(erro);
          console.log(
            "\nHouve um erro ao realizar o cadastro! Erro: ",
            erro.sqlMessage
          );
          res.status(500).json(erro.sqlMessage);
        }
      );
  }
}

function fetchDados(req, res) {
  var idUsuario = req.params.idUsuario

  console.log('idUser: ' + JSON.stringify(req.params))
  if(idUsuario == undefined) {
    res.status(400).send('Seu id está undefined')
  } else {
    usuarioModel.fetchDados(idUsuario)
      .then((resultado) => res.json(resultado))
      .catch(erro => {
        console.log(erro)
        console.log('\nErro na função fetchDados do controllerUsuario \n', erro.sqlMessage)
        res.status(500).json(erro.sqlMessage)
      })
  }
}

function tentativas(req, res) {
  const id = req.params.idUsuario

  usuarioModel.tentativas(id).then(resultado => res.json(resultado))
}

function finalizar(req, res) {
  const id = req.body.idUsuario
  const nome = req.body.nome
  const sobrenome = req.body.sobrenome

  usuarioModel.finalizar(id, nome, sobrenome).then(resposta => res.json(resposta))
}

function atualizarNome(req, res) {
  const id = req.body.idUsuario
  const nome = req.body.nome

  if(id == undefined) {
    res.status(400).send('Seu id está undefined')
  } else if(nome == undefined) {
    res.status(400).send('Seu nome está undefined')
  } else {
    usuarioModel.atualizarNome(id, nome)
      .then(result => res.status(200).json(result))
      .catch(e => res.status(500).json(e))
  }

}

module.exports = {
  entrar,
  cadastrar,
  listar,
  testar,
  fetchDados,
  tentativas,
  finalizar,
  atualizarNome
}
