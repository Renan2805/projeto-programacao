var pontuacao = 0
var tempo = 0
var tempoInicio = Date.now()
var quiz = JSON.parse(localStorage.quizAtual)
var questaoAtual = quiz.questoes[0]

quiz.questoes.forEach(questao => {
  questao.alternativas = questao.alternativas.sort(() => Math.random() - 0.5)
})

function iniciarQuiz() {
  pontuacao = 0
  renderQuestao(questaoAtual)
  nome_quiz.innerText = quiz.nome
  console.log(quiz)
}

function selecionarResposta(resposta, btnId) {
  const btn = document.getElementById(btnId)

  document.querySelectorAll('button').forEach(button => button.disabled = true)

  var indexBtnCerto = questaoAtual.alternativas.filter((alt, i) => {
    if(alt.certa == 1) return i + 1
  })[0].idAlternativa

  console.log(indexBtnCerto)

  if(resposta == 1) {
    pontuacao += 1
    btn.classList.add('certo')
  } else {
    btn.classList.add('errado')
    document.getElementById(`btn${indexBtnCerto}`).classList.add('certo')
  }

  setTimeout(() => {
    proximaQuestao()
  }, 1000)
}

function proximaQuestao() {
  var proximaQuestao = quiz.questoes[quiz.questoes.indexOf(questaoAtual) + 1]

  if(proximaQuestao == undefined) {
    terminarQuiz()
  } else {
    questaoAtual = proximaQuestao
    renderQuestao(questaoAtual)
  }

}

function renderQuestao(questao) {
  const divWrapper = document.querySelector('.wrapper-questao')

  divWrapper.innerHTML = `
    <h1>${questao.enunciado}</h1>
    <div class="respostas">
      <button onclick="selecionarResposta(${questao.alternativas[0].certa}, 'btn1')" id="btn1">${questao.alternativas[0].texto}</button>
      <button onclick="selecionarResposta(${questao.alternativas[1].certa}, 'btn2')" id="btn2">${questao.alternativas[1].texto}</button>
      <button onclick="selecionarResposta(${questao.alternativas[2].certa}, 'btn3')" id="btn3">${questao.alternativas[2].texto}</button>
      <button onclick="selecionarResposta(${questao.alternativas[3].certa}, 'btn4')" id="btn4">${questao.alternativas[3].texto}</button>
    </div>
  `
}

function terminarQuiz() {
  span_tempo.style.display = 'none'
  pararTempo(intervalTempo)

  insertTentativa(pontuacao, tempo, quiz.idQuiz, JSON.parse(sessionStorage.userData).idUsuario)

  const divWrapper = document.querySelector('.wrapper-questao')
  divWrapper.innerHTML = `
    <h1>Resultados:</h1>
    <div>
      <span>Tempo: ${tempo}</span>
      <span>Pontuação: ${pontuacao}/10</span>
    </div>
  `

}

async function insertTentativa(pontuacao, tempo, idQuiz, idUsuario) {

  await fetch('/quiz/inserir-tentativa', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      pontuacao: pontuacao,
      tempo: tempo,
      idQuiz: idQuiz,
      idUsuario: idUsuario
    })
  })
}

function atualizarTempo() {
  var tempoCorrido = Date.now() - tempoInicio

  tempo = tempoCorrido / 1000
  span_tempo.innerText = tempo
}

function pararTempo(interval) {
  clearInterval(interval)
}

iniciarQuiz()
var intervalTempo = setInterval(atualizarTempo, 1)