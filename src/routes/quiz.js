var express = require("express");
var router = express.Router();

const controllerQuiz = require('../controllers/controllerQuiz')

router.get('/', (req, res) => {
  controllerQuiz.getQuizes(req, res)
})

router.get('/:id', (req, res) => {
  controllerQuiz.getQuiz(req, res)
})

router.get('/questao/:id', (req, res) => {
  controllerQuiz.getQuestoes(req, res)
})

router.get('/alternativas/:id', (req, res) => {
  controllerQuiz.getAlternativas(req, res)
})

router.post('/inserir-tentativa', (req, res) => {
  controllerQuiz.inserirTentativa(req, res)
})

module.exports = router