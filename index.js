const http = require('http')
const express = require('express')
const session = require('express-session')
const path = require('path')
const mysql = require('mysql')
const app = express()

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '2805',
  database: 'projeto_programacao'
})

con.connect((err) => {
  if(err) throw err;
  console.log('Connected!')
})


app.use(express.json())

app.use(express.urlencoded({
  extended: true
}))


app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}))

app.use(express.static('public'))
app.get('/', (_req, res) => {
  res.sendFile('/index.html')
})

app.use(express.static('public/pages/login'))
app.get('/login', (_req, res) => {
  res.sendFile(path.join(__dirname + '/public/pages/login/index.html'))
})

app.use(express.static('public/pages/cadastro'))
app.get('/signin', (_req, res) => {
  res.sendFile(path.join(__dirname + '/public/pages/cadastro/index.html'))
})

app.post('/auth', (req, res) => {
  const user = req.body.user
  const password = req.body.password

  con.query(`select idUsuario, nome, sobrenome, email from usuario join dadosPessoais on idUsuario = fkUsuario where nomeUsuario = '${user}' and senha = '${password}';`, (err, result, fields) => {
    if(err) throw err
  
    if(result.length > 0) {
      req.session.isLoggedIn = true
      req.session.user = {
        uid: result[0].idUsuario,
        nome: result[0].nome,
        sobrenome: result[0].sobrenome,
        email: result[0].email
      }

      res.redirect('/')
      console.log(req.session)
    } else {
      res.redirect('/login?invalidUser')
    }

    res.end()

  })
})

app.get('/auth', (req, res) => {
  res.send(req.session)
})

const PORT = 3000
http.createServer(app).listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))