
async function fetchQuizesData() {
  const quizes = await fetch('/quiz/').then(res => {
    if(res.ok) {
      return res.json()
    }
  }).catch(e => console.error(e))
  
  return quizes
}

async function redirectQuiz(quiz) {
  const questoes = await fetch(`/quiz/questao/${quiz.idQuiz}`).then(res => {
    if(res.ok) {
      return res.json()
    }
  }).catch(e => console.error(e))

  for (let i = 0; i < questoes.length; i++) {
    const questao = questoes[i]

    var a = await fetch(`/quiz/alternativas/${questao.idQuestao}`).then(res => {
      if(res.ok) {
        return res.json()
      }
    }).catch(e => console.error(e))
    
    questoes[i].alternativas = a
  }

  quiz.questoes = questoes

  localStorage.quizAtual = JSON.stringify(quiz)
  window.location.href = '/pages/dashboard/quiz/index.html'
}

function renderQuizes() {
  const divWrapper = document.querySelector('.wrapper-quizes')

  fetchQuizesData().then(data => {
    data.forEach(quiz => {

      const divQuiz = document.createElement('div')
      divQuiz.classList.add('quiz')

      const pQuiz = document.createElement('p')
      pQuiz.innerText = quiz.dificuldade
      divQuiz.appendChild(pQuiz)

      const h1Quiz = document.createElement('h1')
      h1Quiz.innerText = quiz.nome
      divQuiz.appendChild(h1Quiz)

      const btnQuiz = document.createElement('button')
      btnQuiz.innerText = 'INICIAR'
      btnQuiz.addEventListener('click', () => redirectQuiz(quiz))
      divQuiz.appendChild(btnQuiz)

      divWrapper.appendChild(divQuiz)

    })
  })
}

renderQuizes()

var spans = document.querySelectorAll('.link-side-bar > span')

var sideBar = document.getElementById('side_bar')
sideBar.addEventListener('mouseenter', () => {
  sideBar.classList.add('side-bar-open')
  spans.forEach(span => span.classList.add('side-bar-text-shown'))
})

sideBar.addEventListener('mouseleave', () => {
  sideBar.classList.remove('side-bar-open')
  spans.forEach(span => span.classList.remove('side-bar-text-shown'))
})

document.querySelectorAll('#btn_sair').forEach(btn => btn.addEventListener('click', () => {
  sessionStorage.removeItem('userData')
  sessionStorage.setItem('isLogged', false)
  window.location.href = '/'
}))