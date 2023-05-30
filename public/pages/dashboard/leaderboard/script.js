localStorage.setItem('ordem', 'tempo')
var user = JSON.parse(sessionStorage.getItem('userData'))

function alternar() {
  var ordemAtual = localStorage.getItem('ordem')

  if(ordemAtual == 'tempo') {
    localStorage.setItem('ordem', 'pontuacao')
    btn_ordem.innerText = 'Pontuação'
  }
  else {
    btn_ordem.innerText = 'Tempo'
    localStorage.setItem('ordem', 'tempo')
  }

}

function aplicarFiltros() {
  var quiz = select_quiz.value
  var ordem = localStorage.getItem('ordem')

  fetchLeaderboard(quiz, ordem).then(data => {
    console.log(data)
    table_body.innerHTML = ''
    data.forEach((r, i) => {
      table_body.innerHTML += `
        <tr style="color: ${user.nomeUsuario == r.nomeUsuario ? '#6C63FF' : '#000000'}">
          <td>${i + 1}º</td>
          <td>${r.nomeUsuario}</td>
          <td>${r.tempo}s</td>
          <td>${r.pontuacao}/10</td>
        </tr>
      `
    })
  })
}

async function fetchLeaderboard(quiz, ordem) {
  var dados = await fetch(`/leaderboard?quiz=${quiz}&ordem=${ordem}`).then(res => res.json()).catch(e => console.error(e))
  return dados
}

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

aplicarFiltros()