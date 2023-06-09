process.env.AMBIENTE_PROCESSO = "desenvolvimento";
// process.env.AMBIENTE_PROCESSO = "producao";

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA = process.env.AMBIENTE_PROCESSO == "desenvolvimento" ? 3333 : 8080;

var app = express();

var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/usuario");
var analytcsRouter = require('./src/routes/analytcs')
var leaderboardRouter = require('./src/routes/leaderboard')
var quizRouter = require('./src/routes/quiz')
var linguagemRouter = require('./src/routes/linguagem')
// var avisosRouter = require("./src/routes/avisos");
// var medidasRouter = require("./src/routes/medidas");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
app.use('/analytcs', analytcsRouter)
app.use('/leaderboard', leaderboardRouter)
app.use('/quiz', quizRouter)
app.use('/linguagens', linguagemRouter)

app.use(express.static(path.join(__dirname, "/public/pages/login/")));
app.get('/login', (_req, res) => res.sendFile(path.join(__dirname + '/public/pages/login/index.html')))

app.use(express.static(path.join(__dirname, "/public/pages/cadastro/")));
app.get('/cadastrar', (_req, res) => res.sendFile(path.join(__dirname + '/public/pages/cadastro/index.html')))

app.listen(PORTA, () => {
  console.log(`Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar: http://localhost:${PORTA} \n
  Você está rodando sua aplicação em Ambiente de ${process.env.AMBIENTE_PROCESSO} \n
  Se "desenvolvimento", você está se conectando ao banco LOCAL (MySQL Workbench). \n
  Se "producao", você está se conectando ao banco REMOTO (SQL Server em nuvem Azure) \n
  Para alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'`);
});