var pontuacao = 0
var quiz = JSON.parse(localStorage.quizAtual)
var questaoAtual = quiz[0]

function iniciarQuiz() {
  pontuacao = 0
  renderQuestao(quiz[0])
}

function selecionarResposta(resposta) {
  if(resposta == 1) {
    pontuacao += 1
    alert('acertou')
  } else {
    alert('error')
  }

  setTimeout(proximaQuestao, 2000)
}

function proximaQuestao() {
  questaoAtual = quiz[quiz.indexOf(questaoAtual) + 1]
  renderQuestao(questaoAtual)
}

function renderQuestao(questao) {
  const divWrapper = document.querySelector('.wrapper-questao')

  divWrapper.innerHTML = `
    <h1>${questao.enunciado}</h1>
    <div class="respostas">
      <button onclick="selecionarResposta(${questao.alternativas[0].certa})">${questao.alternativas[0].texto}</button>
      <button onclick="selecionarResposta(${questao.alternativas[1].certa})">${questao.alternativas[1].texto}</button>
      <button onclick="selecionarResposta(${questao.alternativas[2].certa})">${questao.alternativas[2].texto}</button>
      <button onclick="selecionarResposta(${questao.alternativas[3].certa})">${questao.alternativas[3].texto}</button>
    </div>
  `
}

iniciarQuiz()