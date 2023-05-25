// If the user is not logged, redirect to the index page
isLogged()
setInterval(isLogged, 1000)

var sessionUserData = JSON.parse(sessionStorage.getItem('userData'))

getUserData(sessionUserData.idUsuario)

const formCadastro = document.getElementById('form_cadastro')
const modal = document.getElementById('modal_cadastro')

async function getUserData(userId) {
  try {
    const user = await fetch(`/usuarios/${userId}`).then(res => res.json())

    if(user.length == 0) {
      modal.style.display = 'flex'
      return
    }

    const h1NomeUsuario = document.querySelector('.welcome > h1')
    h1NomeUsuario.innerText = `Olá ${user[0].nome} ${user[0].sobrenome}.`


    // Relógio da dashboard
    const spanData = document.querySelector('.welcome > span')
    spanData.innerText = new Date().toLocaleString('pt-BR')
    setInterval(() => spanData.innerText = new Date().toLocaleString('pt-BR'), 1000)

    var tentativas = await fetch(`/usuarios/tentativas/${userId}`).then(res => res.json())
    renderTentativas(tentativas)

    Chart.defaults.color = '#FEFEFE';

    var dadosGraficoPizza = await fetch(`/analytcs/qtdNotas/${userId}`).then(res => res.json())
    var chartPizza = criarGrafico(document.getElementById('chart-pizza'), {
      type: 'pie',
      data: {
        labels: [],
        datasets: [{
          label: 'Quantidade de notas',
          data: [],
          color: '#FEFEFE',
          backgroundColor: [
            '#AC7DD2',
            '#D9D9D9',
            '#00ADB5'
          ],
          hoverOffset: 4
        }]
      }
    }, dadosGraficoPizza)

    setInterval(async () => {
      dadosGraficoPizza = await fetch(`/analytcs/qtdNotas/${userId}`).then(res => res.json())
      chartPizza.updateDados(dadosGraficoPizza)

      tentativas = await fetch(`/usuarios/tentativas/${userId}`).then(res => res.json())
      renderTentativas(tentativas)
    }, 5000)

  } catch (error) {
    console.error('ERRO! ', error)
  }
}

function finalizarCadastro(userId) {
  try {
    const nome = formCadastro[0].value
    const sobrenome = formCadastro[1].value

    if(nome == '' || sobrenome == '') {
      alert('Insira o seu nome e sobrenome')
      return
    }

    fetch('/usuarios/finalizar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        idUsuario: userId,
        nome: nome,
        sobrenome: sobrenome
      })
    }).then(res => {
      if(res.ok) {
        return res.json()
      } else alert('Erro ao cadastrar')
    }).then(d => {
      modal.style.display = 'none'
      getUserData(userId)
    })
  } catch (error) {
    console.error(error)
  }
}

function renderTentativas(tentativas) {
  const table = document.getElementById('lista-tentativas')
  
  table.innerHTML = ''

  if(tentativas.length == 0) {
    table.innerHTML = '<tr><td></td><td>Nenhuma tentativa</td><td></td></tr>'
    return
  }

  tentativas.forEach(t => {
    table.innerHTML += `
      <tr>
        <td>${t.pontuacao}/10</td>
        <td>${t.nome}</td>
        <td>${t.tempo}</td>
      </tr>
    `
  })
}

function criarGrafico(ctx, options, dados) {
  var g = new Chart(ctx, options);

  g.data.labels = dados.map(d => d.label.toString())
  g.data.datasets[0].data = dados.map(d => d.dado)
  g.update()

  // Atribui uma função para atualizar o grafico com dados mais recentes
  g.updateDados = function(dados) {
    this.data.labels = dados.map(d => d.label.toString())
    this.data.datasets[0].data = dados.map(d => d.dado)
    this.update()
  }

  return g
}


// EVENT LISTENERS -------------------------

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

document.getElementById('btn_finalizar').addEventListener('click', (e) => {
  e.preventDefault()
  finalizarCadastro(sessionUserData.idUsuario)
})