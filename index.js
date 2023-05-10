const http = require('http')
const express = require('express')
const session = require('express-session')
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

app.use(express.static('public'))

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}))

app.get('/', (_req, res) => {
  res.sendFile('/index.html')
})

app.post('/auth', (req, res) => {
  const user = req.body.user
  const password = req.body.password

  con.query(`select idUsuario, nome, sobrenome, email from usuario join dadosPessoais on idUsuario = fkUsuario where nomeUsuario = '${user}' and senha = '${password}';`, (err, result, fields) => {
    if(err) throw err
    
    if(result.length > 0) {
      req.session.isLoggedIn = true
      req.session.user = user

      res.send(req.session)
    }

  })
})


const PORT = 3000
http.createServer(app).listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))