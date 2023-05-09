const http = require('http')
const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded())

app.use(express.static('public'))
app.get('/', (_req, res) => {
    res.sendFile('/index.html')
})

app.post('/login', (req, _res) => {
    _res.send(req.body)
})


http.createServer(app).listen(3000, () => console.log('Servidor rodando na porta 3000'))